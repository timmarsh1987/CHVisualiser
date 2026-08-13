(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".chd-root{--chd-bg: #f8f7f4;--chd-panel: #ffffff;--chd-border: #d3d1c7;--chd-text: #2c2c2a;--chd-muted: #888780;--chd-accent: #1d4e89;--chd-selected: #3b82f6;display:flex;flex-direction:column;width:100%;height:min(80vh,720px);min-height:520px;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:12px;color:var(--chd-text);background:var(--chd-bg);border:.5px solid var(--chd-border);border-radius:10px;overflow:hidden}.chd-root *,.chd-root *:before,.chd-root *:after{box-sizing:border-box}.chd-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;padding:8px 10px;border-bottom:.5px solid var(--chd-border);background:var(--chd-panel)}.chd-toolbar-brand{font-weight:600;font-size:13px;margin-right:4px}.chd-toolbar-group{display:flex;flex-wrap:wrap;gap:4px;align-items:center;padding-left:8px;border-left:.5px solid var(--chd-border)}.chd-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.5px solid var(--chd-border);background:var(--chd-bg);color:var(--chd-text);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;line-height:1.2}.chd-btn:hover:not(:disabled){border-color:#aea9a0;background:#fff}.chd-btn:disabled{opacity:.45;cursor:default}.chd-file-input{display:none}.chd-main{display:grid;grid-template-columns:220px minmax(0,1fr) 240px;flex:1;min-height:0}.chd-panel{display:flex;flex-direction:column;min-height:0;background:var(--chd-panel);border-right:.5px solid var(--chd-border)}.chd-properties-panel{border-right:none;border-left:.5px solid var(--chd-border)}.chd-panel-header{padding:10px 12px 8px;font-weight:600;font-size:12px;border-bottom:.5px solid var(--chd-border);background:#f8f7f4}.chd-panel-empty{margin:16px 12px;color:var(--chd-muted)}.chd-layer-list{list-style:none;margin:0;padding:6px;overflow:auto;flex:1}.chd-layer-list-item{display:grid;grid-template-columns:1fr auto auto auto;gap:2px;align-items:center;border-radius:6px;padding:2px}.chd-layer-list-item--selected{background:#e8f0fe}.chd-layer-list-select{display:flex;align-items:center;gap:6px;min-width:0;border:none;background:transparent;text-align:left;padding:6px;cursor:pointer;color:inherit;font:inherit}.chd-layer-list-type{flex-shrink:0;font-size:10px;text-transform:uppercase;color:var(--chd-muted);width:36px}.chd-layer-list-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chd-icon-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;color:var(--chd-muted);width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:11px;line-height:1;padding:0}.chd-icon-btn:hover:not(:disabled){background:#f0eee8;color:var(--chd-text)}.chd-icon-btn:disabled{opacity:.3;cursor:default}.chd-properties-body{padding:10px 12px;display:flex;flex-direction:column;gap:8px;overflow:auto}.chd-field{display:flex;flex-direction:column;gap:4px;font-size:11px;color:var(--chd-muted)}.chd-field input,.chd-field textarea{border:.5px solid var(--chd-border);border-radius:6px;padding:5px 7px;font:inherit;color:var(--chd-text);background:#fff;width:100%}.chd-field input[type=color]{padding:2px;height:30px}.chd-field-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}.chd-field-checkbox{flex-direction:row;align-items:center;gap:8px;color:var(--chd-text)}.chd-field-checkbox input{width:auto}.chd-viewport{position:relative;min-width:0;min-height:0;overflow:hidden;background:linear-gradient(45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,linear-gradient(-45deg,#e4e2db 25%,transparent 25%) 0 0 / 16px 16px,#f0eee8;cursor:default}.chd-viewport--panning{cursor:grab}.chd-world{position:absolute;left:0;top:0;transform-origin:0 0;will-change:transform}.chd-artboard{position:relative;box-shadow:0 1px 3px #0000001f,0 8px 24px #0000000f;overflow:hidden}.chd-layer{position:absolute;overflow:hidden;-webkit-user-select:none;user-select:none;touch-action:none}.chd-layer--selected{outline:none}.chd-layer--locked{cursor:default}.chd-layer-frame,.chd-layer-rect{width:100%;height:100%}.chd-layer-frame{border:1px solid rgba(0,0,0,.08)}.chd-layer-text{width:100%;height:100%;padding:4px 6px;white-space:pre-wrap;word-break:break-word;line-height:1.25;font-family:Georgia,Times New Roman,serif}.chd-layer-image{width:100%;height:100%;object-fit:cover;display:block;pointer-events:none}.chd-layer-image-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--chd-muted);border:1px dashed var(--chd-border);font-size:11px}.chd-selection-box,.chd-selection-outline{position:absolute;pointer-events:none;border:1.5px solid var(--chd-selected);z-index:20}.chd-selection-box{pointer-events:none}.chd-handle{position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid var(--chd-selected);border-radius:1px;pointer-events:auto;touch-action:none}.chd-handle--nw{left:-4px;top:-4px;cursor:nwse-resize}.chd-handle--ne{right:-4px;top:-4px;cursor:nesw-resize}.chd-handle--sw{left:-4px;bottom:-4px;cursor:nesw-resize}.chd-handle--se{right:-4px;bottom:-4px;cursor:nwse-resize}.chd-viewport-hint{position:absolute;left:10px;bottom:8px;color:var(--chd-muted);background:rgba(248,247,244,.9);border:.5px solid var(--chd-border);border-radius:6px;padding:4px 8px;font-size:10px;pointer-events:none}@media (max-width: 900px){.chd-main{grid-template-columns:1fr;grid-template-rows:160px minmax(280px,1fr) 200px}.chd-panel{border-right:none;border-bottom:.5px solid var(--chd-border)}.chd-properties-panel{border-left:none}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Vd(e, t) {
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
function Kd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qa = { exports: {} }, Gl = {}, ba = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or = Symbol.for("react.element"), Yd = Symbol.for("react.portal"), Qd = Symbol.for("react.fragment"), Xd = Symbol.for("react.strict_mode"), Gd = Symbol.for("react.profiler"), Zd = Symbol.for("react.provider"), Jd = Symbol.for("react.context"), qd = Symbol.for("react.forward_ref"), bd = Symbol.for("react.suspense"), ep = Symbol.for("react.memo"), tp = Symbol.for("react.lazy"), Ss = Symbol.iterator;
function np(e) {
  return e === null || typeof e != "object" ? null : (e = Ss && e[Ss] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ec = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, tc = Object.assign, nc = {};
function $n(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
$n.prototype.isReactComponent = {};
$n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rc() {
}
rc.prototype = $n.prototype;
function au(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
var cu = au.prototype = new rc();
cu.constructor = au;
tc(cu, $n.prototype);
cu.isPureReactComponent = !0;
var ks = Array.isArray, lc = Object.prototype.hasOwnProperty, fu = { current: null }, oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      lc.call(t, r) && !oc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Or, type: e, key: o, ref: i, props: l, _owner: fu.current };
}
function rp(e, t) {
  return { $$typeof: Or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function lp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xs = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? lp("" + e.key) : t.toString(36);
}
function il(e, t, n, r, l) {
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
          case Or:
          case Yd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Fo(i, 0) : r, ks(l) ? (n = "", e != null && (n = e.replace(xs, "$&/") + "/"), il(l, t, n, "", function(c) {
      return c;
    })) : l != null && (du(l) && (l = rp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(xs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ks(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Fo(o, u);
      i += il(o, t, n, s, l);
    }
  else if (s = np(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Fo(o, u++), i += il(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Hr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return il(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function op(e) {
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
var ke = { current: null }, ul = { transition: null }, ip = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ul, ReactCurrentOwner: fu };
function uc() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = { map: Hr, forEach: function(e, t, n) {
  Hr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Hr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Hr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!du(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
D.Component = $n;
D.Fragment = Qd;
D.Profiler = Gd;
D.PureComponent = au;
D.StrictMode = Xd;
D.Suspense = bd;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
D.act = uc;
D.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = fu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      lc.call(t, s) && !oc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Or, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function(e) {
  return e = { $$typeof: Jd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Zd, _context: e }, e.Consumer = e;
};
D.createElement = ic;
D.createFactory = function(e) {
  var t = ic.bind(null, e);
  return t.type = e, t;
};
D.createRef = function() {
  return { current: null };
};
D.forwardRef = function(e) {
  return { $$typeof: qd, render: e };
};
D.isValidElement = du;
D.lazy = function(e) {
  return { $$typeof: tp, _payload: { _status: -1, _result: e }, _init: op };
};
D.memo = function(e, t) {
  return { $$typeof: ep, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function(e) {
  var t = ul.transition;
  ul.transition = {};
  try {
    e();
  } finally {
    ul.transition = t;
  }
};
D.unstable_act = uc;
D.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
D.useContext = function(e) {
  return ke.current.useContext(e);
};
D.useDebugValue = function() {
};
D.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
D.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
D.useId = function() {
  return ke.current.useId();
};
D.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
D.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
D.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
D.useRef = function(e) {
  return ke.current.useRef(e);
};
D.useState = function(e) {
  return ke.current.useState(e);
};
D.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function() {
  return ke.current.useTransition();
};
D.version = "18.3.1";
ba.exports = D;
var R = ba.exports;
const up = /* @__PURE__ */ Kd(R), pi = /* @__PURE__ */ Vd({
  __proto__: null,
  default: up
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
var sp = R, ap = Symbol.for("react.element"), cp = Symbol.for("react.fragment"), fp = Object.prototype.hasOwnProperty, dp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    fp.call(t, r) && !pp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ap, type: e, key: o, ref: i, props: l, _owner: dp.current };
}
Gl.Fragment = cp;
Gl.jsx = sc;
Gl.jsxs = sc;
qa.exports = Gl;
var pu = qa.exports;
const mp = pu.Fragment, _ = pu.jsx, U = pu.jsxs;
function hp(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Es = "$$material";
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, fe.apply(null, arguments);
}
function Zl(e, t) {
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
var yp = !1;
function gp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function vp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wp = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !yp : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vp(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = gp(l);
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
}(), ye = "-ms-", xl = "-moz-", I = "-webkit-", ac = "comm", mu = "rule", hu = "decl", Sp = "@import", cc = "@keyframes", kp = "@layer", xp = Math.abs, Jl = String.fromCharCode, Ep = Object.assign;
function Cp(e, t) {
  return ce(e, 0) ^ 45 ? (((t << 2 ^ ce(e, 0)) << 2 ^ ce(e, 1)) << 2 ^ ce(e, 2)) << 2 ^ ce(e, 3) : 0;
}
function fc(e) {
  return e.trim();
}
function _p(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function A(e, t, n) {
  return e.replace(t, n);
}
function mi(e, t) {
  return e.indexOf(t);
}
function ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function fr(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function yu(e) {
  return e.length;
}
function Wr(e, t) {
  return t.push(e), e;
}
function Pp(e, t) {
  return e.map(t).join("");
}
var ql = 1, Pn = 1, dc = 0, Te = 0, ee = 0, Mn = "";
function bl(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: ql, column: Pn, length: i, return: "" };
}
function Un(e, t) {
  return Ep(bl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Np() {
  return ee;
}
function Tp() {
  return ee = Te > 0 ? ce(Mn, --Te) : 0, Pn--, ee === 10 && (Pn = 1, ql--), ee;
}
function ze() {
  return ee = Te < dc ? ce(Mn, Te++) : 0, Pn++, ee === 10 && (Pn = 1, ql++), ee;
}
function lt() {
  return ce(Mn, Te);
}
function sl() {
  return Te;
}
function zr(e, t) {
  return fr(Mn, e, t);
}
function dr(e) {
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
function pc(e) {
  return ql = Pn = 1, dc = tt(Mn = e), Te = 0, [];
}
function mc(e) {
  return Mn = "", e;
}
function al(e) {
  return fc(zr(Te - 1, hi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rp(e) {
  for (; (ee = lt()) && ee < 33; )
    ze();
  return dr(e) > 2 || dr(ee) > 3 ? "" : " ";
}
function Lp(e, t) {
  for (; --t && ze() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return zr(e, sl() + (t < 6 && lt() == 32 && ze() == 32));
}
function hi(e) {
  for (; ze(); )
    switch (ee) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && hi(ee);
        break;
      case 40:
        e === 41 && hi(e);
        break;
      case 92:
        ze();
        break;
    }
  return Te;
}
function Op(e, t) {
  for (; ze() && e + ee !== 47 + 10; )
    if (e + ee === 42 + 42 && lt() === 47)
      break;
  return "/*" + zr(t, Te - 1) + "*" + Jl(e === 47 ? e : ze());
}
function zp(e) {
  for (; !dr(lt()); )
    ze();
  return zr(e, Te);
}
function Dp(e) {
  return mc(cl("", null, null, null, [""], e = pc(e), 0, [0], e));
}
function cl(e, t, n, r, l, o, i, u, s) {
  for (var c = 0, h = 0, m = i, p = 0, w = 0, v = 0, g = 1, C = 1, a = 1, f = 0, d = "", y = l, S = o, x = r, k = d; C; )
    switch (v = f, f = ze()) {
      case 40:
        if (v != 108 && ce(k, m - 1) == 58) {
          mi(k += A(al(f), "&", "&\f"), "&\f") != -1 && (a = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += al(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Rp(v);
        break;
      case 92:
        k += Lp(sl() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            Wr($p(Op(ze(), sl()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * g:
        u[c++] = tt(k) * a;
      case 125 * g:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            C = 0;
          case 59 + h:
            a == -1 && (k = A(k, /\f/g, "")), w > 0 && tt(k) - m && Wr(w > 32 ? _s(k + ";", r, n, m - 1) : _s(A(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (Wr(x = Cs(k, t, n, c, h, l, u, d, y = [], S = [], m), o), f === 123)
              if (h === 0)
                cl(k, t, x, x, y, o, m, u, S);
              else
                switch (p === 99 && ce(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cl(e, x, x, r && Wr(Cs(e, x, x, 0, 0, l, u, d, l, y = [], m), S), l, S, m, u, r ? y : S);
                    break;
                  default:
                    cl(k, x, x, x, [""], S, 0, u, S);
                }
        }
        c = h = w = 0, g = a = 1, d = k = "", m = i;
        break;
      case 58:
        m = 1 + tt(k), w = v;
      default:
        if (g < 1) {
          if (f == 123)
            --g;
          else if (f == 125 && g++ == 0 && Tp() == 125)
            continue;
        }
        switch (k += Jl(f), f * g) {
          case 38:
            a = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[c++] = (tt(k) - 1) * a, a = 1;
            break;
          case 64:
            lt() === 45 && (k += al(ze())), p = lt(), h = m = tt(d = k += zp(sl())), f++;
            break;
          case 45:
            v === 45 && tt(k) == 2 && (g = 0);
        }
    }
  return o;
}
function Cs(e, t, n, r, l, o, i, u, s, c, h) {
  for (var m = l - 1, p = l === 0 ? o : [""], w = yu(p), v = 0, g = 0, C = 0; v < r; ++v)
    for (var a = 0, f = fr(e, m + 1, m = xp(g = i[v])), d = e; a < w; ++a)
      (d = fc(g > 0 ? p[a] + " " + f : A(f, /&\f/g, p[a]))) && (s[C++] = d);
  return bl(e, t, n, l === 0 ? mu : u, s, c, h);
}
function $p(e, t, n) {
  return bl(e, t, n, ac, Jl(Np()), fr(e, 2, -2), 0);
}
function _s(e, t, n, r) {
  return bl(e, t, n, hu, fr(e, 0, r), fr(e, r + 1, -1), r);
}
function vn(e, t) {
  for (var n = "", r = yu(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Mp(e, t, n, r) {
  switch (e.type) {
    case kp:
      if (e.children.length)
        break;
    case Sp:
    case hu:
      return e.return = e.return || e.value;
    case ac:
      return "";
    case cc:
      return e.return = e.value + "{" + vn(e.children, r) + "}";
    case mu:
      e.value = e.props.join(",");
  }
  return tt(n = vn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ip(e) {
  var t = yu(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function Ap(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function hc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fp = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = lt(), l === 38 && o === 12 && (n[r] = 1), !dr(o); )
    ze();
  return zr(t, Te);
}, jp = function(t, n) {
  var r = -1, l = 44;
  do
    switch (dr(l)) {
      case 0:
        l === 38 && lt() === 12 && (n[r] = 1), t[r] += Fp(Te - 1, n, r);
        break;
      case 2:
        t[r] += al(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = lt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Jl(l);
    }
  while (l = ze());
  return t;
}, Up = function(t, n) {
  return mc(jp(pc(t), n));
}, Ps = /* @__PURE__ */ new WeakMap(), Bp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ps.get(r)) && !l) {
      Ps.set(t, !0);
      for (var o = [], i = Up(n, o), u = r.props, s = 0, c = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, c++)
          t.props[c] = o[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Hp = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function yc(e, t) {
  switch (Cp(e, t)) {
    case 5103:
      return I + "print-" + e + e;
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
      return I + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return I + e + xl + e + ye + e + e;
    case 6828:
    case 4268:
      return I + e + ye + e + e;
    case 6165:
      return I + e + ye + "flex-" + e + e;
    case 5187:
      return I + e + A(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return I + e + ye + "flex-item-" + A(e, /flex-|-self/, "") + e;
    case 4675:
      return I + e + ye + "flex-line-pack" + A(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return I + e + ye + A(e, "shrink", "negative") + e;
    case 5292:
      return I + e + ye + A(e, "basis", "preferred-size") + e;
    case 6060:
      return I + "box-" + A(e, "-grow", "") + I + e + ye + A(e, "grow", "positive") + e;
    case 4554:
      return I + A(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
    case 6187:
      return A(A(A(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return A(e, /(image-set\([^]*)/, I + "$1$`$1");
    case 4968:
      return A(A(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(e, /(.+)-inline(.+)/, I + "$1$2") + e;
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
      if (tt(e) - 1 - t > 6)
        switch (ce(e, t + 1)) {
          case 109:
            if (ce(e, t + 4) !== 45)
              break;
          case 102:
            return A(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + xl + (ce(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~mi(e, "stretch") ? yc(A(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ce(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ce(e, tt(e) - 3 - (~mi(e, "!important") && 10))) {
        case 107:
          return A(e, ":", ":" + I) + e;
        case 101:
          return A(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + I + (ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ce(e, t + 11)) {
        case 114:
          return I + e + ye + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return I + e + ye + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return I + e + ye + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return I + e + ye + e + e;
  }
  return e;
}
var Wp = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hu:
        t.return = yc(t.value, t.length);
        break;
      case cc:
        return vn([Un(t, {
          value: A(t.value, "@", "@" + I)
        })], l);
      case mu:
        if (t.length)
          return Pp(t.props, function(o) {
            switch (_p(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return vn([Un(t, {
                  props: [A(o, /:(read-\w+)/, ":" + xl + "$1")]
                })], l);
              case "::placeholder":
                return vn([Un(t, {
                  props: [A(o, /:(plac\w+)/, ":" + I + "input-$1")]
                }), Un(t, {
                  props: [A(o, /:(plac\w+)/, ":" + xl + "$1")]
                }), Un(t, {
                  props: [A(o, /:(plac\w+)/, ye + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Vp = [Wp], Kp = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var C = g.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Vp, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var C = g.getAttribute("data-emotion").split(" "), a = 1; a < C.length; a++)
        o[C[a]] = !0;
      u.push(g);
    }
  );
  var s, c = [Bp, Hp];
  {
    var h, m = [Mp, Ap(function(g) {
      h.insert(g);
    })], p = Ip(c.concat(l, m)), w = function(C) {
      return vn(Dp(C), p);
    };
    s = function(C, a, f, d) {
      h = f, w(C ? C + "{" + a.styles + "}" : a.styles), d && (v.inserted[a.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new wp({
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
  return v.sheet.hydrate(u), v;
}, gc = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se = typeof Symbol == "function" && Symbol.for, gu = se ? Symbol.for("react.element") : 60103, vu = se ? Symbol.for("react.portal") : 60106, eo = se ? Symbol.for("react.fragment") : 60107, to = se ? Symbol.for("react.strict_mode") : 60108, no = se ? Symbol.for("react.profiler") : 60114, ro = se ? Symbol.for("react.provider") : 60109, lo = se ? Symbol.for("react.context") : 60110, wu = se ? Symbol.for("react.async_mode") : 60111, oo = se ? Symbol.for("react.concurrent_mode") : 60111, io = se ? Symbol.for("react.forward_ref") : 60112, uo = se ? Symbol.for("react.suspense") : 60113, Yp = se ? Symbol.for("react.suspense_list") : 60120, so = se ? Symbol.for("react.memo") : 60115, ao = se ? Symbol.for("react.lazy") : 60116, Qp = se ? Symbol.for("react.block") : 60121, Xp = se ? Symbol.for("react.fundamental") : 60117, Gp = se ? Symbol.for("react.responder") : 60118, Zp = se ? Symbol.for("react.scope") : 60119;
function Me(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gu:
        switch (e = e.type, e) {
          case wu:
          case oo:
          case eo:
          case no:
          case to:
          case uo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lo:
              case io:
              case ao:
              case so:
              case ro:
                return e;
              default:
                return t;
            }
        }
      case vu:
        return t;
    }
  }
}
function vc(e) {
  return Me(e) === oo;
}
j.AsyncMode = wu;
j.ConcurrentMode = oo;
j.ContextConsumer = lo;
j.ContextProvider = ro;
j.Element = gu;
j.ForwardRef = io;
j.Fragment = eo;
j.Lazy = ao;
j.Memo = so;
j.Portal = vu;
j.Profiler = no;
j.StrictMode = to;
j.Suspense = uo;
j.isAsyncMode = function(e) {
  return vc(e) || Me(e) === wu;
};
j.isConcurrentMode = vc;
j.isContextConsumer = function(e) {
  return Me(e) === lo;
};
j.isContextProvider = function(e) {
  return Me(e) === ro;
};
j.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gu;
};
j.isForwardRef = function(e) {
  return Me(e) === io;
};
j.isFragment = function(e) {
  return Me(e) === eo;
};
j.isLazy = function(e) {
  return Me(e) === ao;
};
j.isMemo = function(e) {
  return Me(e) === so;
};
j.isPortal = function(e) {
  return Me(e) === vu;
};
j.isProfiler = function(e) {
  return Me(e) === no;
};
j.isStrictMode = function(e) {
  return Me(e) === to;
};
j.isSuspense = function(e) {
  return Me(e) === uo;
};
j.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === eo || e === oo || e === no || e === to || e === uo || e === Yp || typeof e == "object" && e !== null && (e.$$typeof === ao || e.$$typeof === so || e.$$typeof === ro || e.$$typeof === lo || e.$$typeof === io || e.$$typeof === Xp || e.$$typeof === Gp || e.$$typeof === Zp || e.$$typeof === Qp);
};
j.typeOf = Me;
gc.exports = j;
var Jp = gc.exports, wc = Jp, qp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sc = {};
Sc[wc.ForwardRef] = qp;
Sc[wc.Memo] = bp;
var em = !0;
function kc(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var Su = function(t, n, r) {
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
  em === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, ku = function(t, n, r) {
  Su(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function tm(e) {
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
var nm = {
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
}, rm = !1, lm = /[A-Z]|^ms/g, om = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xc = function(t) {
  return t.charCodeAt(1) === 45;
}, Ns = function(t) {
  return t != null && typeof t != "boolean";
}, jo = /* @__PURE__ */ hc(function(e) {
  return xc(e) ? e : e.replace(lm, "-$&").toLowerCase();
}), Ts = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(om, function(r, l, o) {
          return nt = {
            name: l,
            styles: o,
            next: nt
          }, l;
        });
  }
  return nm[t] !== 1 && !xc(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, im = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function pr(e, t, n) {
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
        return nt = {
          name: l.name,
          styles: l.styles,
          next: nt
        }, l.name;
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            nt = {
              name: i.name,
              styles: i.styles,
              next: nt
            }, i = i.next;
        var u = o.styles + ";";
        return u;
      }
      return um(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = nt, c = n(e);
        return nt = s, pr(e, t, c);
      }
      break;
    }
  }
  var h = n;
  if (t == null)
    return h;
  var m = t[h];
  return m !== void 0 ? m : h;
}
function um(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += pr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ns(u) && (r += jo(o) + ":" + Ts(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && rm)
          throw new Error(im);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Ns(i[s]) && (r += jo(o) + ":" + Ts(o, i[s]) + ";");
        else {
          var c = pr(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += jo(o) + ":" + c + ";";
              break;
            }
            default:
              r += o + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Rs = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function co(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  nt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, l += pr(n, t, o);
  else {
    var i = o;
    l += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += pr(n, t, e[u]), r) {
      var s = o;
      l += s[u];
    }
  Rs.lastIndex = 0;
  for (var c = "", h; (h = Rs.exec(l)) !== null; )
    c += "-" + h[1];
  var m = tm(l) + c;
  return {
    name: m,
    styles: l,
    next: nt
  };
}
var sm = function(t) {
  return t();
}, Ec = pi["useInsertionEffect"] ? pi["useInsertionEffect"] : !1, Cc = Ec || sm, Ls = Ec || R.useLayoutEffect, am = !1, _c = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Kp({
    key: "css"
  }) : null
);
_c.Provider;
var xu = function(t) {
  return /* @__PURE__ */ R.forwardRef(function(n, r) {
    var l = R.useContext(_c);
    return t(n, l, r);
  });
}, Dr = /* @__PURE__ */ R.createContext({}), Eu = {}.hasOwnProperty, yi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", cm = function(t, n) {
  var r = {};
  for (var l in n)
    Eu.call(n, l) && (r[l] = n[l]);
  return r[yi] = t, r;
}, fm = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return Su(n, r, l), Cc(function() {
    return ku(n, r, l);
  }), null;
}, dm = /* @__PURE__ */ xu(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[yi], o = [r], i = "";
  typeof e.className == "string" ? i = kc(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = co(o, void 0, R.useContext(Dr));
  i += t.key + "-" + u.name;
  var s = {};
  for (var c in e)
    Eu.call(e, c) && c !== "css" && c !== yi && !am && (s[c] = e[c]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(fm, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ R.createElement(l, s));
}), pm = dm, Uo = { exports: {} }, Os;
function mm() {
  return Os || (Os = 1, function(e) {
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
  }(Uo)), Uo.exports;
}
mm();
var zs = function(t, n) {
  var r = arguments;
  if (n == null || !Eu.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = pm, o[1] = cm(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return R.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(zs || (zs = {}));
var hm = /* @__PURE__ */ xu(function(e, t) {
  var n = e.styles, r = co([n], void 0, R.useContext(Dr)), l = R.useRef();
  return Ls(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Ls(function() {
    var o = l.current, i = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && ku(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), ym = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gm = /* @__PURE__ */ hc(
  function(e) {
    return ym.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vm = !1, wm = gm, Sm = function(t) {
  return t !== "theme";
}, Ds = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? wm : Sm;
}, $s = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, km = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return Su(n, r, l), Cc(function() {
    return ku(n, r, l);
  }), null;
}, xm = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = $s(t, n, r), s = u || Ds(l), c = !s("as");
  return function() {
    var h = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && m.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var p = h[0];
      m.push(p[0]);
      for (var w = h.length, v = 1; v < w; v++)
        m.push(h[v], p[v]);
    }
    var g = xu(function(C, a, f) {
      var d = c && C.as || l, y = "", S = [], x = C;
      if (C.theme == null) {
        x = {};
        for (var k in C)
          x[k] = C[k];
        x.theme = R.useContext(Dr);
      }
      typeof C.className == "string" ? y = kc(a.registered, S, C.className) : C.className != null && (y = C.className + " ");
      var N = co(m.concat(S), a.registered, x);
      y += a.key + "-" + N.name, i !== void 0 && (y += " " + i);
      var $ = c && u === void 0 ? Ds(d) : s, L = {};
      for (var ne in C)
        c && ne === "as" || $(ne) && (L[ne] = C[ne]);
      return L.className = y, f && (L.ref = f), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(km, {
        cache: a,
        serialized: N,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ R.createElement(d, L));
    });
    return g.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = l, g.__emotion_styles = m, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return i === void 0 && vm ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), g.withComponent = function(C, a) {
      var f = e(C, fe({}, n, a, {
        shouldForwardProp: $s(g, a, !0)
      }));
      return f.apply(void 0, m);
    }, g;
  };
}, Em = [
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
], Ms = xm.bind(null);
Em.forEach(function(e) {
  Ms[e] = Ms(e);
});
function Cm(e) {
  return e == null || Object.keys(e).length === 0;
}
function _m(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ _(hm, {
    styles: typeof t == "function" ? (l) => t(Cm(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Is = [];
function Pm(e) {
  return Is[0] = e, co(Is);
}
function rn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pc(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || !rn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pc(e[n]);
  }), t;
}
function El(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? fe({}, e) : e;
  return rn(e) && rn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ R.isValidElement(t[l]) ? r[l] = t[l] : rn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && rn(e[l]) ? r[l] = El(e[l], t[l], n) : n.clone ? r[l] = rn(t[l]) ? Pc(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const Nm = ["values", "unit", "step"], Tm = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => fe({}, n, {
    [r.key]: r.val
  }), {});
};
function Rm(e) {
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
  } = e, l = Zl(e, Nm), o = Tm(t), i = Object.keys(o);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function c(p, w) {
    const v = i.indexOf(w);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : w) - r / 100}${n})`;
  }
  function h(p) {
    return i.indexOf(p) + 1 < i.length ? c(p, i[i.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const w = i.indexOf(p);
    return w === 0 ? u(i[1]) : w === i.length - 1 ? s(i[w]) : c(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return fe({
    keys: i,
    values: o,
    up: u,
    down: s,
    between: c,
    only: h,
    not: m,
    unit: n
  }, l);
}
const Lm = {
  borderRadius: 4
}, Om = Lm;
function tr(e, t) {
  return t ? El(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Cu = {
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
}, As = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Cu[e]}px)`
};
function pt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || As;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || As;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(o.values || Cu).indexOf(u) !== -1) {
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
function zm(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const o = e.up(l);
    return r[o] = {}, r;
  }, {})) || {};
}
function Fs(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Nc(e) {
  if (typeof e != "string")
    throw new Error(hp(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function fo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, o) => l && l[o] ? l[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function Cl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = fo(e, n) || r, t && (l = t(l, r, e)), l;
}
function b(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, c = fo(s, r) || {};
    return pt(i, u, (m) => {
      let p = Cl(c, l, m);
      return m === p && typeof m == "string" && (p = Cl(c, l, `${t}${m === "default" ? "" : Nc(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function Dm(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $m = {
  m: "margin",
  p: "padding"
}, Mm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, js = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Im = Dm((e) => {
  if (e.length > 2)
    if (js[e])
      e = js[e];
    else
      return [e];
  const [t, n] = e.split(""), r = $m[t], l = Mm[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), _u = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Pu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[..._u, ...Pu];
function $r(e, t, n, r) {
  var l;
  const o = (l = fo(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function Tc(e) {
  return $r(e, "spacing", 8);
}
function Mr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Am(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Mr(t, n), r), {});
}
function Fm(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = Im(n), o = Am(l, r), i = e[n];
  return pt(e, i, o);
}
function Rc(e, t) {
  const n = Tc(e.theme);
  return Object.keys(e).map((r) => Fm(e, t, r, n)).reduce(tr, {});
}
function X(e) {
  return Rc(e, _u);
}
X.propTypes = {};
X.filterProps = _u;
function G(e) {
  return Rc(e, Pu);
}
G.propTypes = {};
G.filterProps = Pu;
function jm(e = 8) {
  if (e.mui)
    return e;
  const t = Tc({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function po(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? tr(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return b({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Um = Ke("border", Fe), Bm = Ke("borderTop", Fe), Hm = Ke("borderRight", Fe), Wm = Ke("borderBottom", Fe), Vm = Ke("borderLeft", Fe), Km = Ke("borderColor"), Ym = Ke("borderTopColor"), Qm = Ke("borderRightColor"), Xm = Ke("borderBottomColor"), Gm = Ke("borderLeftColor"), Zm = Ke("outline", Fe), Jm = Ke("outlineColor"), mo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $r(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mr(t, r)
    });
    return pt(e, e.borderRadius, n);
  }
  return null;
};
mo.propTypes = {};
mo.filterProps = ["borderRadius"];
po(Um, Bm, Hm, Wm, Vm, Km, Ym, Qm, Xm, Gm, mo, Zm, Jm);
const ho = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      gap: Mr(t, r)
    });
    return pt(e, e.gap, n);
  }
  return null;
};
ho.propTypes = {};
ho.filterProps = ["gap"];
const yo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mr(t, r)
    });
    return pt(e, e.columnGap, n);
  }
  return null;
};
yo.propTypes = {};
yo.filterProps = ["columnGap"];
const go = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mr(t, r)
    });
    return pt(e, e.rowGap, n);
  }
  return null;
};
go.propTypes = {};
go.filterProps = ["rowGap"];
const qm = b({
  prop: "gridColumn"
}), bm = b({
  prop: "gridRow"
}), eh = b({
  prop: "gridAutoFlow"
}), th = b({
  prop: "gridAutoColumns"
}), nh = b({
  prop: "gridAutoRows"
}), rh = b({
  prop: "gridTemplateColumns"
}), lh = b({
  prop: "gridTemplateRows"
}), oh = b({
  prop: "gridTemplateAreas"
}), ih = b({
  prop: "gridArea"
});
po(ho, yo, go, qm, bm, eh, th, nh, rh, lh, oh, ih);
function wn(e, t) {
  return t === "grey" ? t : e;
}
const uh = b({
  prop: "color",
  themeKey: "palette",
  transform: wn
}), sh = b({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wn
}), ah = b({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wn
});
po(uh, sh, ah);
function Le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ch = b({
  prop: "width",
  transform: Le
}), Nu = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Cu[n];
      return o ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Le(n)
      };
    };
    return pt(e, e.maxWidth, t);
  }
  return null;
};
Nu.filterProps = ["maxWidth"];
const fh = b({
  prop: "minWidth",
  transform: Le
}), dh = b({
  prop: "height",
  transform: Le
}), ph = b({
  prop: "maxHeight",
  transform: Le
}), mh = b({
  prop: "minHeight",
  transform: Le
});
b({
  prop: "size",
  cssProperty: "width",
  transform: Le
});
b({
  prop: "size",
  cssProperty: "height",
  transform: Le
});
const hh = b({
  prop: "boxSizing"
});
po(ch, Nu, fh, dh, ph, mh, hh);
const yh = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
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
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: mo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wn
  },
  // spacing
  p: {
    style: G
  },
  pt: {
    style: G
  },
  pr: {
    style: G
  },
  pb: {
    style: G
  },
  pl: {
    style: G
  },
  px: {
    style: G
  },
  py: {
    style: G
  },
  padding: {
    style: G
  },
  paddingTop: {
    style: G
  },
  paddingRight: {
    style: G
  },
  paddingBottom: {
    style: G
  },
  paddingLeft: {
    style: G
  },
  paddingX: {
    style: G
  },
  paddingY: {
    style: G
  },
  paddingInline: {
    style: G
  },
  paddingInlineStart: {
    style: G
  },
  paddingInlineEnd: {
    style: G
  },
  paddingBlock: {
    style: G
  },
  paddingBlockStart: {
    style: G
  },
  paddingBlockEnd: {
    style: G
  },
  m: {
    style: X
  },
  mt: {
    style: X
  },
  mr: {
    style: X
  },
  mb: {
    style: X
  },
  ml: {
    style: X
  },
  mx: {
    style: X
  },
  my: {
    style: X
  },
  margin: {
    style: X
  },
  marginTop: {
    style: X
  },
  marginRight: {
    style: X
  },
  marginBottom: {
    style: X
  },
  marginLeft: {
    style: X
  },
  marginX: {
    style: X
  },
  marginY: {
    style: X
  },
  marginInline: {
    style: X
  },
  marginInlineStart: {
    style: X
  },
  marginInlineEnd: {
    style: X
  },
  marginBlock: {
    style: X
  },
  marginBlockStart: {
    style: X
  },
  marginBlockEnd: {
    style: X
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
    style: ho
  },
  rowGap: {
    style: go
  },
  columnGap: {
    style: yo
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
    transform: Le
  },
  maxWidth: {
    style: Nu
  },
  minWidth: {
    transform: Le
  },
  height: {
    transform: Le
  },
  maxHeight: {
    transform: Le
  },
  minHeight: {
    transform: Le
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
}, Lc = yh;
function gh(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function vh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wh() {
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
      themeKey: c,
      transform: h,
      style: m
    } = u;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = fo(l, c) || {};
    return m ? m(i) : pt(i, r, (v) => {
      let g = Cl(p, h, v);
      return v === g && typeof v == "string" && (g = Cl(p, h, `${n}${v === "default" ? "" : Nc(v)}`, v)), s === !1 ? g : {
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
    const u = (r = o.unstable_sxConfig) != null ? r : Lc;
    function s(c) {
      let h = c;
      if (typeof c == "function")
        h = c(o);
      else if (typeof c != "object")
        return c;
      if (!h)
        return null;
      const m = zm(o.breakpoints), p = Object.keys(m);
      let w = m;
      return Object.keys(h).forEach((v) => {
        const g = vh(h[v], o);
        if (g != null)
          if (typeof g == "object")
            if (u[v])
              w = tr(w, e(v, g, o, u));
            else {
              const C = pt({
                theme: o
              }, g, (a) => ({
                [v]: a
              }));
              gh(C, g) ? w[v] = t({
                sx: g,
                theme: o,
                nested: !0
              }) : w = tr(w, C);
            }
          else
            w = tr(w, e(v, g, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Fs(p, w)
      } : Fs(p, w);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Oc = wh();
Oc.filterProps = ["sx"];
const Sh = Oc;
function kh(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const xh = ["breakpoints", "palette", "spacing", "shape"];
function Eh(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: o = {}
  } = e, i = Zl(e, xh), u = Rm(n), s = jm(l);
  let c = El({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, r),
    spacing: s,
    shape: fe({}, Om, o)
  }, i);
  return c.applyStyles = kh, c = t.reduce((h, m) => El(h, m), c), c.unstable_sxConfig = fe({}, Lc, i == null ? void 0 : i.unstable_sxConfig), c.unstable_sx = function(m) {
    return Sh({
      sx: m,
      theme: this
    });
  }, c;
}
function Ch(e) {
  return Object.keys(e).length === 0;
}
function Tu(e = null) {
  const t = R.useContext(Dr);
  return !t || Ch(t) ? e : t;
}
const _h = Eh();
function Ph(e = _h) {
  return Tu(e);
}
function Bo(e) {
  const t = Pm(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Nh({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ph(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Bo(typeof i == "function" ? i(l) : i)) : o = Bo(o)), /* @__PURE__ */ _(_m, {
    styles: o
  });
}
const Th = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Rh = Th;
let Us = 0;
function Lh(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (Us += 1, n(`mui-${Us}`));
  }, [t]), r;
}
const Bs = pi["useId".toString()];
function Oh(e) {
  if (Bs !== void 0) {
    const t = Bs();
    return e ?? t;
  }
  return Lh(e);
}
const zh = /* @__PURE__ */ R.createContext(null), zc = zh;
function Dc() {
  return R.useContext(zc);
}
const Dh = typeof Symbol == "function" && Symbol.for, $h = Dh ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Mh(e, t) {
  return typeof t == "function" ? t(e) : fe({}, e, t);
}
function Ih(e) {
  const {
    children: t,
    theme: n
  } = e, r = Dc(), l = R.useMemo(() => {
    const o = r === null ? n : Mh(r, n);
    return o != null && (o[$h] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ _(zc.Provider, {
    value: l,
    children: t
  });
}
const Ah = ["value"], Fh = /* @__PURE__ */ R.createContext();
function jh(e) {
  let {
    value: t
  } = e, n = Zl(e, Ah);
  return /* @__PURE__ */ _(Fh.Provider, fe({
    value: t ?? !0
  }, n));
}
const Uh = /* @__PURE__ */ R.createContext(void 0);
function Bh({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ _(Uh.Provider, {
    value: e,
    children: t
  });
}
function Hh(e) {
  const t = Tu(), n = Oh() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, Rh(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const i = o.firstChild;
    if (l) {
      var u;
      if (i && (u = i.hasAttribute) != null && u.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = l, o.prepend(c);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [l, n]), l ? /* @__PURE__ */ _(Nh, {
    styles: l
  }) : null;
}
const Hs = {};
function Ws(e, t, n, r = !1) {
  return R.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(l), i = e ? fe({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? fe({}, t, {
      [e]: n
    }) : fe({}, t, n);
  }, [e, t, n, r]);
}
function Wh(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = Tu(Hs), o = Dc() || Hs, i = Ws(r, l, n), u = Ws(r, o, n, !0), s = i.direction === "rtl", c = Hh(i);
  return /* @__PURE__ */ _(Ih, {
    theme: u,
    children: /* @__PURE__ */ _(Dr.Provider, {
      value: i,
      children: /* @__PURE__ */ _(jh, {
        value: s,
        children: /* @__PURE__ */ U(Bh, {
          value: i == null ? void 0 : i.components,
          children: [c, t]
        })
      })
    })
  });
}
const Vh = ["theme"];
function Kh(e) {
  let {
    theme: t
  } = e, n = Zl(e, Vh);
  const r = t[Es];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = fe({}, r, {
    vars: null
  }) : t && !t.vars && (l = fe({}, t, {
    vars: null
  }))), /* @__PURE__ */ _(Wh, fe({}, n, {
    themeId: r ? Es : void 0,
    theme: l
  }));
}
var $c = { exports: {} }, Ie = {}, Mc = { exports: {} }, Ic = {};
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
  function t(T, O) {
    var z = T.length;
    T.push(O);
    e:
      for (; 0 < z; ) {
        var J = z - 1 >>> 1, oe = T[J];
        if (0 < l(oe, O))
          T[J] = O, T[z] = oe, z = J;
        else
          break e;
      }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0)
      return null;
    var O = T[0], z = T.pop();
    if (z !== O) {
      T[0] = z;
      e:
        for (var J = 0, oe = T.length, Ur = oe >>> 1; J < Ur; ) {
          var jt = 2 * (J + 1) - 1, Ao = T[jt], Ut = jt + 1, Br = T[Ut];
          if (0 > l(Ao, z))
            Ut < oe && 0 > l(Br, Ao) ? (T[J] = Br, T[Ut] = z, J = Ut) : (T[J] = Ao, T[jt] = z, J = jt);
          else if (Ut < oe && 0 > l(Br, z))
            T[J] = Br, T[Ut] = z, J = Ut;
          else
            break e;
        }
    }
    return O;
  }
  function l(T, O) {
    var z = T.sortIndex - O.sortIndex;
    return z !== 0 ? z : T.id - O.id;
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
  var s = [], c = [], h = 1, m = null, p = 3, w = !1, v = !1, g = !1, C = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null)
        r(c);
      else if (O.startTime <= T)
        r(c), O.sortIndex = O.expirationTime, t(s, O);
      else
        break;
      O = n(c);
    }
  }
  function y(T) {
    if (g = !1, d(T), !v)
      if (n(s) !== null)
        v = !0, Mo(S);
      else {
        var O = n(c);
        O !== null && Io(y, O.startTime - T);
      }
  }
  function S(T, O) {
    v = !1, g && (g = !1, a(N), N = -1), w = !0;
    var z = p;
    try {
      for (d(O), m = n(s); m !== null && (!(m.expirationTime > O) || T && !ne()); ) {
        var J = m.callback;
        if (typeof J == "function") {
          m.callback = null, p = m.priorityLevel;
          var oe = J(m.expirationTime <= O);
          O = e.unstable_now(), typeof oe == "function" ? m.callback = oe : m === n(s) && r(s), d(O);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var Ur = !0;
      else {
        var jt = n(c);
        jt !== null && Io(y, jt.startTime - O), Ur = !1;
      }
      return Ur;
    } finally {
      m = null, p = z, w = !1;
    }
  }
  var x = !1, k = null, N = -1, $ = 5, L = -1;
  function ne() {
    return !(e.unstable_now() - L < $);
  }
  function ut() {
    if (k !== null) {
      var T = e.unstable_now();
      L = T;
      var O = !0;
      try {
        O = k(!0, T);
      } finally {
        O ? jn() : (x = !1, k = null);
      }
    } else
      x = !1;
  }
  var jn;
  if (typeof f == "function")
    jn = function() {
      f(ut);
    };
  else if (typeof MessageChannel < "u") {
    var ws = new MessageChannel(), Wd = ws.port2;
    ws.port1.onmessage = ut, jn = function() {
      Wd.postMessage(null);
    };
  } else
    jn = function() {
      C(ut, 0);
    };
  function Mo(T) {
    k = T, x || (x = !0, jn());
  }
  function Io(T, O) {
    N = C(function() {
      T(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    v || w || (v = !0, Mo(S));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var z = p;
    p = O;
    try {
      return T();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, O) {
    switch (T) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        T = 3;
    }
    var z = p;
    p = T;
    try {
      return O();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(T, O, z) {
    var J = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? J + z : J) : z = J, T) {
      case 1:
        var oe = -1;
        break;
      case 2:
        oe = 250;
        break;
      case 5:
        oe = 1073741823;
        break;
      case 4:
        oe = 1e4;
        break;
      default:
        oe = 5e3;
    }
    return oe = z + oe, T = { id: h++, callback: O, priorityLevel: T, startTime: z, expirationTime: oe, sortIndex: -1 }, z > J ? (T.sortIndex = z, t(c, T), n(s) === null && T === n(c) && (g ? (a(N), N = -1) : g = !0, Io(y, z - J))) : (T.sortIndex = oe, t(s, T), v || w || (v = !0, Mo(S))), T;
  }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(T) {
    var O = p;
    return function() {
      var z = p;
      p = O;
      try {
        return T.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Ic);
Mc.exports = Ic;
var Yh = Mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qh = R, $e = Yh;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ac = /* @__PURE__ */ new Set(), mr = {};
function en(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++)
    Ac.add(t[e]);
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gi = Object.prototype.hasOwnProperty, Xh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vs = {}, Ks = {};
function Gh(e) {
  return gi.call(Ks, e) ? !0 : gi.call(Vs, e) ? !1 : Xh.test(e) ? Ks[e] = !0 : (Vs[e] = !0, !1);
}
function Zh(e, t, n, r) {
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
function Jh(e, t, n, r) {
  if (t === null || typeof t > "u" || Zh(e, t, n, r))
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
function xe(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ru = /[\-:]([a-z])/g;
function Lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ru,
    Lu
  );
  pe[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ru, Lu);
  pe[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ru, Lu);
  pe[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ou(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jh(t, n, l, r) && (n = null), r || l === null ? Gh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vr = Symbol.for("react.element"), ln = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), zu = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), jc = Symbol.for("react.context"), Du = Symbol.for("react.forward_ref"), wi = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), $u = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), Uc = Symbol.for("react.offscreen"), Ys = Symbol.iterator;
function Bn(e) {
  return e === null || typeof e != "object" ? null : (e = Ys && e[Ys] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Ho;
function Zn(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = t && t[1] || "";
    }
  return `
` + Ho + e;
}
var Wo = !1;
function Vo(e, t) {
  if (!e || Wo)
    return "";
  Wo = !0;
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
      for (var l = c.stack.split(`
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
    Wo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function qh(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Vo(e.type, !1), e;
    case 11:
      return e = Vo(e.type.render, !1), e;
    case 1:
      return e = Vo(e.type, !0), e;
    default:
      return "";
  }
}
function ki(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case on:
      return "Fragment";
    case ln:
      return "Portal";
    case vi:
      return "Profiler";
    case zu:
      return "StrictMode";
    case wi:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jc:
        return (e.displayName || "Context") + ".Consumer";
      case Fc:
        return (e._context.displayName || "Context") + ".Provider";
      case Du:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $u:
        return t = e.displayName || null, t !== null ? t : ki(e.type) || "Memo";
      case St:
        t = e._payload, e = e._init;
        try {
          return ki(e(t));
        } catch {
        }
    }
  return null;
}
function bh(e) {
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
      return ki(t);
    case 8:
      return t === zu ? "StrictMode" : "Mode";
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
function $t(e) {
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
function Bc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ey(e) {
  var t = Bc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Kr(e) {
  e._valueTracker || (e._valueTracker = ey(e));
}
function Hc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Bc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _l(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xi(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Qs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wc(e, t) {
  t = t.checked, t != null && Ou(e, "checked", t, !1);
}
function Ei(e, t) {
  Wc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ci(e, t, n) {
  (t !== "number" || _l(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function Sn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(E(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(E(92));
      if (Jn(n)) {
        if (1 < n.length)
          throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Vc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Zs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yr, Yc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Yr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
}, ty = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  ty.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function Qc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function Xc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Qc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var ny = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ni(e, t) {
  if (t) {
    if (ny[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ti(e, t) {
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
var Ri = null;
function Mu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Li = null, kn = null, xn = null;
function Js(e) {
  if (e = Fr(e)) {
    if (typeof Li != "function")
      throw Error(E(280));
    var t = e.stateNode;
    t && (t = xo(t), Li(e.stateNode, e.type, t));
  }
}
function Gc(e) {
  kn ? xn ? xn.push(e) : xn = [e] : kn = e;
}
function Zc() {
  if (kn) {
    var e = kn, t = xn;
    if (xn = kn = null, Js(e), t)
      for (e = 0; e < t.length; e++)
        Js(t[e]);
  }
}
function Jc(e, t) {
  return e(t);
}
function qc() {
}
var Ko = !1;
function bc(e, t, n) {
  if (Ko)
    return e(t, n);
  Ko = !0;
  try {
    return Jc(e, t, n);
  } finally {
    Ko = !1, (kn !== null || xn !== null) && (qc(), Zc());
  }
}
function yr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = xo(n);
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
var Oi = !1;
if (mt)
  try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", { get: function() {
      Oi = !0;
    } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
  } catch {
    Oi = !1;
  }
function ry(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var rr = !1, Pl = null, Nl = !1, zi = null, ly = { onError: function(e) {
  rr = !0, Pl = e;
} };
function oy(e, t, n, r, l, o, i, u, s) {
  rr = !1, Pl = null, ry.apply(ly, arguments);
}
function iy(e, t, n, r, l, o, i, u, s) {
  if (oy.apply(this, arguments), rr) {
    if (rr) {
      var c = Pl;
      rr = !1, Pl = null;
    } else
      throw Error(E(198));
    Nl || (Nl = !0, zi = c);
  }
}
function tn(e) {
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
function ef(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function qs(e) {
  if (tn(e) !== e)
    throw Error(E(188));
}
function uy(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null)
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
          return qs(l), e;
        if (o === r)
          return qs(l), t;
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
function tf(e) {
  return e = uy(e), e !== null ? nf(e) : null;
}
function nf(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = nf(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var rf = $e.unstable_scheduleCallback, bs = $e.unstable_cancelCallback, sy = $e.unstable_shouldYield, ay = $e.unstable_requestPaint, q = $e.unstable_now, cy = $e.unstable_getCurrentPriorityLevel, Iu = $e.unstable_ImmediatePriority, lf = $e.unstable_UserBlockingPriority, Tl = $e.unstable_NormalPriority, fy = $e.unstable_LowPriority, of = $e.unstable_IdlePriority, vo = null, ot = null;
function dy(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : hy, py = Math.log, my = Math.LN2;
function hy(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (py(e) / my | 0) | 0;
}
var Qr = 64, Xr = 4194304;
function qn(e) {
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
function Rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = qn(u) : (o &= i, o !== 0 && (r = qn(o)));
  } else
    i = n & ~l, i !== 0 ? r = qn(i) : o !== 0 && (r = qn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function yy(e, t) {
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
function gy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ze(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = yy(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Di(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function uf() {
  var e = Qr;
  return Qr <<= 1, !(Qr & 4194240) && (Qr = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function vy(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Au(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var F = 0;
function sf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var af, Fu, cf, ff, df, $i = !1, Gr = [], Pt = null, Nt = null, Tt = null, gr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), xt = [], wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ea(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Wn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Fr(t), t !== null && Fu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Sy(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Pt = Wn(Pt, e, t, n, r, l), !0;
    case "dragenter":
      return Nt = Wn(Nt, e, t, n, r, l), !0;
    case "mouseover":
      return Tt = Wn(Tt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return gr.set(o, Wn(gr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, vr.set(o, Wn(vr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function pf(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = ef(n), t !== null) {
          e.blockedOn = t, df(e.priority, function() {
            cf(n);
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
function fl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ri = r, n.target.dispatchEvent(r), Ri = null;
    } else
      return t = Fr(n), t !== null && Fu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ta(e, t, n) {
  fl(e) && n.delete(t);
}
function ky() {
  $i = !1, Pt !== null && fl(Pt) && (Pt = null), Nt !== null && fl(Nt) && (Nt = null), Tt !== null && fl(Tt) && (Tt = null), gr.forEach(ta), vr.forEach(ta);
}
function Vn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, $i || ($i = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, ky)));
}
function wr(e) {
  function t(l) {
    return Vn(l, e);
  }
  if (0 < Gr.length) {
    Vn(Gr[0], e);
    for (var n = 1; n < Gr.length; n++) {
      var r = Gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pt !== null && Vn(Pt, e), Nt !== null && Vn(Nt, e), Tt !== null && Vn(Tt, e), gr.forEach(t), vr.forEach(t), n = 0; n < xt.length; n++)
    r = xt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xt.length && (n = xt[0], n.blockedOn === null); )
    pf(n), n.blockedOn === null && xt.shift();
}
var En = vt.ReactCurrentBatchConfig, Ll = !0;
function xy(e, t, n, r) {
  var l = F, o = En.transition;
  En.transition = null;
  try {
    F = 1, ju(e, t, n, r);
  } finally {
    F = l, En.transition = o;
  }
}
function Ey(e, t, n, r) {
  var l = F, o = En.transition;
  En.transition = null;
  try {
    F = 4, ju(e, t, n, r);
  } finally {
    F = l, En.transition = o;
  }
}
function ju(e, t, n, r) {
  if (Ll) {
    var l = Mi(e, t, n, r);
    if (l === null)
      ni(e, t, r, Ol, n), ea(e, r);
    else if (Sy(l, e, t, n, r))
      r.stopPropagation();
    else if (ea(e, r), t & 4 && -1 < wy.indexOf(e)) {
      for (; l !== null; ) {
        var o = Fr(l);
        if (o !== null && af(o), o = Mi(e, t, n, r), o === null && ni(e, t, r, Ol, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      ni(e, t, r, null, n);
  }
}
var Ol = null;
function Mi(e, t, n, r) {
  if (Ol = null, e = Mu(r), e = Vt(e), e !== null)
    if (t = tn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = ef(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ol = e, null;
}
function mf(e) {
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
      switch (cy()) {
        case Iu:
          return 1;
        case lf:
          return 4;
        case Tl:
        case fy:
          return 16;
        case of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null, Uu = null, dl = null;
function hf() {
  if (dl)
    return dl;
  var e, t = Uu, n = t.length, r, l = "value" in Ct ? Ct.value : Ct.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return dl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function pl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zr() {
  return !0;
}
function na() {
  return !1;
}
function Ae(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Zr : na, this.isPropagationStopped = na, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zr);
  }, persist: function() {
  }, isPersistent: Zr }), t;
}
var In = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bu = Ae(In), Ar = Q({}, In, { view: 0, detail: 0 }), Cy = Ae(Ar), Qo, Xo, Kn, wo = Q({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Qo = e.screenX - Kn.screenX, Xo = e.screenY - Kn.screenY) : Xo = Qo = 0, Kn = e), Qo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Xo;
} }), ra = Ae(wo), _y = Q({}, wo, { dataTransfer: 0 }), Py = Ae(_y), Ny = Q({}, Ar, { relatedTarget: 0 }), Go = Ae(Ny), Ty = Q({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ry = Ae(Ty), Ly = Q({}, In, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Oy = Ae(Ly), zy = Q({}, In, { data: 0 }), la = Ae(zy), Dy = {
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
}, $y = {
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
}, My = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Iy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = My[e]) ? !!t[e] : !1;
}
function Hu() {
  return Iy;
}
var Ay = Q({}, Ar, { key: function(e) {
  if (e.key) {
    var t = Dy[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = pl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $y[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hu, charCode: function(e) {
  return e.type === "keypress" ? pl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? pl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Fy = Ae(Ay), jy = Q({}, wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oa = Ae(jy), Uy = Q({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hu }), By = Ae(Uy), Hy = Q({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wy = Ae(Hy), Vy = Q({}, wo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ky = Ae(Vy), Yy = [9, 13, 27, 32], Wu = mt && "CompositionEvent" in window, lr = null;
mt && "documentMode" in document && (lr = document.documentMode);
var Qy = mt && "TextEvent" in window && !lr, yf = mt && (!Wu || lr && 8 < lr && 11 >= lr), ia = String.fromCharCode(32), ua = !1;
function gf(e, t) {
  switch (e) {
    case "keyup":
      return Yy.indexOf(t.keyCode) !== -1;
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
function vf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function Xy(e, t) {
  switch (e) {
    case "compositionend":
      return vf(t);
    case "keypress":
      return t.which !== 32 ? null : (ua = !0, ia);
    case "textInput":
      return e = t.data, e === ia && ua ? null : e;
    default:
      return null;
  }
}
function Gy(e, t) {
  if (un)
    return e === "compositionend" || !Wu && gf(e, t) ? (e = hf(), dl = Uu = Ct = null, un = !1, e) : null;
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
      return yf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zy[e.type] : t === "textarea";
}
function wf(e, t, n, r) {
  Gc(r), t = zl(t, "onChange"), 0 < t.length && (n = new Bu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var or = null, Sr = null;
function Jy(e) {
  Lf(e, 0);
}
function So(e) {
  var t = cn(e);
  if (Hc(t))
    return e;
}
function qy(e, t) {
  if (e === "change")
    return t;
}
var Sf = !1;
if (mt) {
  var Zo;
  if (mt) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var aa = document.createElement("div");
      aa.setAttribute("oninput", "return;"), Jo = typeof aa.oninput == "function";
    }
    Zo = Jo;
  } else
    Zo = !1;
  Sf = Zo && (!document.documentMode || 9 < document.documentMode);
}
function ca() {
  or && (or.detachEvent("onpropertychange", kf), Sr = or = null);
}
function kf(e) {
  if (e.propertyName === "value" && So(Sr)) {
    var t = [];
    wf(t, Sr, e, Mu(e)), bc(Jy, t);
  }
}
function by(e, t, n) {
  e === "focusin" ? (ca(), or = t, Sr = n, or.attachEvent("onpropertychange", kf)) : e === "focusout" && ca();
}
function eg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return So(Sr);
}
function tg(e, t) {
  if (e === "click")
    return So(t);
}
function ng(e, t) {
  if (e === "input" || e === "change")
    return So(t);
}
function rg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : rg;
function kr(e, t) {
  if (qe(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!gi.call(t, l) || !qe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function fa(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function da(e, t) {
  var n = fa(e);
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
    n = fa(n);
  }
}
function xf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ef() {
  for (var e = window, t = _l(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = _l(e.document);
  }
  return t;
}
function Vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function lg(e) {
  var t = Ef(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && xf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = da(n, o);
        var i = da(
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
var og = mt && "documentMode" in document && 11 >= document.documentMode, sn = null, Ii = null, ir = null, Ai = !1;
function pa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || sn == null || sn !== _l(r) || (r = sn, "selectionStart" in r && Vu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ir && kr(ir, r) || (ir = r, r = zl(Ii, "onSelect"), 0 < r.length && (t = new Bu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = sn)));
}
function Jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var an = { animationend: Jr("Animation", "AnimationEnd"), animationiteration: Jr("Animation", "AnimationIteration"), animationstart: Jr("Animation", "AnimationStart"), transitionend: Jr("Transition", "TransitionEnd") }, qo = {}, Cf = {};
mt && (Cf = document.createElement("div").style, "AnimationEvent" in window || (delete an.animationend.animation, delete an.animationiteration.animation, delete an.animationstart.animation), "TransitionEvent" in window || delete an.transitionend.transition);
function ko(e) {
  if (qo[e])
    return qo[e];
  if (!an[e])
    return e;
  var t = an[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Cf)
      return qo[e] = t[n];
  return e;
}
var _f = ko("animationend"), Pf = ko("animationiteration"), Nf = ko("animationstart"), Tf = ko("transitionend"), Rf = /* @__PURE__ */ new Map(), ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
  Rf.set(e, t), en(t, [e]);
}
for (var bo = 0; bo < ma.length; bo++) {
  var ei = ma[bo], ig = ei.toLowerCase(), ug = ei[0].toUpperCase() + ei.slice(1);
  It(ig, "on" + ug);
}
It(_f, "onAnimationEnd");
It(Pf, "onAnimationIteration");
It(Nf, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Tf, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sg = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
function ha(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, iy(r, t, void 0, e), e.currentTarget = null;
}
function Lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          ha(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          ha(l, u, c), o = s;
        }
    }
  }
  if (Nl)
    throw e = zi, Nl = !1, zi = null, e;
}
function H(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var qr = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[qr]) {
    e[qr] = !0, Ac.forEach(function(n) {
      n !== "selectionchange" && (sg.has(n) || ti(n, !1, e), ti(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[qr] || (t[qr] = !0, ti("selectionchange", !1, t));
  }
}
function Of(e, t, n, r) {
  switch (mf(t)) {
    case 1:
      var l = xy;
      break;
    case 4:
      l = Ey;
      break;
    default:
      l = ju;
  }
  n = l.bind(null, t, n, e), l = void 0, !Oi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ni(e, t, n, r, l) {
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
            if (i = Vt(u), i === null)
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
  bc(function() {
    var c = o, h = Mu(n), m = [];
    e: {
      var p = Rf.get(e);
      if (p !== void 0) {
        var w = Bu, v = e;
        switch (e) {
          case "keypress":
            if (pl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            w = Fy;
            break;
          case "focusin":
            v = "focus", w = Go;
            break;
          case "focusout":
            v = "blur", w = Go;
            break;
          case "beforeblur":
          case "afterblur":
            w = Go;
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
            w = ra;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Py;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = By;
            break;
          case _f:
          case Pf:
          case Nf:
            w = Ry;
            break;
          case Tf:
            w = Wy;
            break;
          case "scroll":
            w = Cy;
            break;
          case "wheel":
            w = Ky;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Oy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = oa;
        }
        var g = (t & 4) !== 0, C = !g && e === "scroll", a = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var f = c, d; f !== null; ) {
          d = f;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, a !== null && (y = yr(f, a), y != null && g.push(Er(f, y, d)))), C)
            break;
          f = f.return;
        }
        0 < g.length && (p = new w(p, v, null, n, h), m.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== Ri && (v = n.relatedTarget || n.fromElement) && (Vt(v) || v[ht]))
          break e;
        if ((w || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = c, v = v ? Vt(v) : null, v !== null && (C = tn(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = c), w !== v)) {
          if (g = ra, y = "onMouseLeave", a = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = oa, y = "onPointerLeave", a = "onPointerEnter", f = "pointer"), C = w == null ? p : cn(w), d = v == null ? p : cn(v), p = new g(y, f + "leave", w, n, h), p.target = C, p.relatedTarget = d, y = null, Vt(h) === c && (g = new g(a, f + "enter", v, n, h), g.target = d, g.relatedTarget = C, y = g), C = y, w && v)
            t: {
              for (g = w, a = v, f = 0, d = g; d; d = nn(d))
                f++;
              for (d = 0, y = a; y; y = nn(y))
                d++;
              for (; 0 < f - d; )
                g = nn(g), f--;
              for (; 0 < d - f; )
                a = nn(a), d--;
              for (; f--; ) {
                if (g === a || a !== null && g === a.alternate)
                  break t;
                g = nn(g), a = nn(a);
              }
              g = null;
            }
          else
            g = null;
          w !== null && ya(m, p, w, g, !1), v !== null && C !== null && ya(m, C, v, g, !0);
        }
      }
      e: {
        if (p = c ? cn(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file")
          var S = qy;
        else if (sa(p))
          if (Sf)
            S = ng;
          else {
            S = eg;
            var x = by;
          }
        else
          (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = tg);
        if (S && (S = S(e, c))) {
          wf(m, S, n, h);
          break e;
        }
        x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && Ci(p, "number", p.value);
      }
      switch (x = c ? cn(c) : window, e) {
        case "focusin":
          (sa(x) || x.contentEditable === "true") && (sn = x, Ii = c, ir = null);
          break;
        case "focusout":
          ir = Ii = sn = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, pa(m, n, h);
          break;
        case "selectionchange":
          if (og)
            break;
        case "keydown":
        case "keyup":
          pa(m, n, h);
      }
      var k;
      if (Wu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        un ? gf(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (yf && n.locale !== "ko" && (un || N !== "onCompositionStart" ? N === "onCompositionEnd" && un && (k = hf()) : (Ct = h, Uu = "value" in Ct ? Ct.value : Ct.textContent, un = !0)), x = zl(c, N), 0 < x.length && (N = new la(N, e, null, n, h), m.push({ event: N, listeners: x }), k ? N.data = k : (k = vf(n), k !== null && (N.data = k)))), (k = Qy ? Xy(e, n) : Gy(e, n)) && (c = zl(c, "onBeforeInput"), 0 < c.length && (h = new la("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = k));
    }
    Lf(m, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = yr(e, n), o != null && r.unshift(Er(e, o, l)), o = yr(e, t), o != null && r.push(Er(e, o, l))), e = e.return;
  }
  return r;
}
function nn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ya(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = yr(n, o), s != null && i.unshift(Er(n, s, u))) : l || (s = yr(n, o), s != null && i.push(Er(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ag = /\r\n?/g, cg = /\u0000|\uFFFD/g;
function ga(e) {
  return (typeof e == "string" ? e : "" + e).replace(ag, `
`).replace(cg, "");
}
function br(e, t, n) {
  if (t = ga(t), ga(e) !== t && n)
    throw Error(E(425));
}
function Dl() {
}
var Fi = null, ji = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0, fg = typeof clearTimeout == "function" ? clearTimeout : void 0, va = typeof Promise == "function" ? Promise : void 0, dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof va < "u" ? function(e) {
  return va.resolve(null).then(e).catch(pg);
} : Bi;
function pg(e) {
  setTimeout(function() {
    throw e;
  });
}
function ri(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), wr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  wr(t);
}
function Rt(e) {
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
function wa(e) {
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
var An = Math.random().toString(36).slice(2), rt = "__reactFiber$" + An, Cr = "__reactProps$" + An, ht = "__reactContainer$" + An, Hi = "__reactEvents$" + An, mg = "__reactListeners$" + An, hg = "__reactHandles$" + An;
function Vt(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ht] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = wa(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = wa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Fr(e) {
  return e = e[rt] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(E(33));
}
function xo(e) {
  return e[Cr] || null;
}
var Wi = [], fn = -1;
function At(e) {
  return { current: e };
}
function W(e) {
  0 > fn || (e.current = Wi[fn], Wi[fn] = null, fn--);
}
function B(e, t) {
  fn++, Wi[fn] = e.current, e.current = t;
}
var Mt = {}, ve = At(Mt), _e = At(!1), Gt = Mt;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function $l() {
  W(_e), W(ve);
}
function Sa(e, t, n) {
  if (ve.current !== Mt)
    throw Error(E(168));
  B(ve, t), B(_e, n);
}
function zf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(E(108, bh(e) || "Unknown", l));
  return Q({}, n, r);
}
function Ml(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Gt = ve.current, B(ve, e), B(_e, _e.current), !0;
}
function ka(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(E(169));
  n ? (e = zf(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, W(_e), W(ve), B(ve, e)) : W(_e), B(_e, n);
}
var at = null, Eo = !1, li = !1;
function Df(e) {
  at === null ? at = [e] : at.push(e);
}
function yg(e) {
  Eo = !0, Df(e);
}
function Ft() {
  if (!li && at !== null) {
    li = !0;
    var e = 0, t = F;
    try {
      var n = at;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, Eo = !1;
    } catch (l) {
      throw at !== null && (at = at.slice(e + 1)), rf(Iu, Ft), l;
    } finally {
      F = t, li = !1;
    }
  }
  return null;
}
var dn = [], pn = 0, Il = null, Al = 0, je = [], Ue = 0, Zt = null, ct = 1, ft = "";
function Ht(e, t) {
  dn[pn++] = Al, dn[pn++] = Il, Il = e, Al = t;
}
function $f(e, t, n) {
  je[Ue++] = ct, je[Ue++] = ft, je[Ue++] = Zt, Zt = e;
  var r = ct;
  e = ft;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ze(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ct = 1 << 32 - Ze(t) + l | n << l | r, ft = o + e;
  } else
    ct = 1 << o | n << l | r, ft = e;
}
function Ku(e) {
  e.return !== null && (Ht(e, 1), $f(e, 1, 0));
}
function Yu(e) {
  for (; e === Il; )
    Il = dn[--pn], dn[pn] = null, Al = dn[--pn], dn[pn] = null;
  for (; e === Zt; )
    Zt = je[--Ue], je[Ue] = null, ft = je[--Ue], je[Ue] = null, ct = je[--Ue], je[Ue] = null;
}
var De = null, Oe = null, V = !1, Ge = null;
function Mf(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = Rt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: ct, overflow: ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ki(e) {
  if (V) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!xa(e, t)) {
        if (Vi(e))
          throw Error(E(418));
        t = Rt(n.nextSibling);
        var r = De;
        t && xa(e, t) ? Mf(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, De = e);
      }
    } else {
      if (Vi(e))
        throw Error(E(418));
      e.flags = e.flags & -4097 | 2, V = !1, De = e;
    }
  }
}
function Ea(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function el(e) {
  if (e !== De)
    return !1;
  if (!V)
    return Ea(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Vi(e))
      throw If(), Error(E(418));
    for (; t; )
      Mf(e, t), t = Rt(t.nextSibling);
  }
  if (Ea(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else
    Oe = De ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function If() {
  for (var e = Oe; e; )
    e = Rt(e.nextSibling);
}
function Rn() {
  Oe = De = null, V = !1;
}
function Qu(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var gg = vt.ReactCurrentBatchConfig;
function Yn(e, t, n) {
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
function tl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ca(e) {
  var t = e._init;
  return t(e._payload);
}
function Af(e) {
  function t(a, f) {
    if (e) {
      var d = a.deletions;
      d === null ? (a.deletions = [f], a.flags |= 16) : d.push(f);
    }
  }
  function n(a, f) {
    if (!e)
      return null;
    for (; f !== null; )
      t(a, f), f = f.sibling;
    return null;
  }
  function r(a, f) {
    for (a = /* @__PURE__ */ new Map(); f !== null; )
      f.key !== null ? a.set(f.key, f) : a.set(f.index, f), f = f.sibling;
    return a;
  }
  function l(a, f) {
    return a = Dt(a, f), a.index = 0, a.sibling = null, a;
  }
  function o(a, f, d) {
    return a.index = d, e ? (d = a.alternate, d !== null ? (d = d.index, d < f ? (a.flags |= 2, f) : d) : (a.flags |= 2, f)) : (a.flags |= 1048576, f);
  }
  function i(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, f, d, y) {
    return f === null || f.tag !== 6 ? (f = fi(d, a.mode, y), f.return = a, f) : (f = l(f, d), f.return = a, f);
  }
  function s(a, f, d, y) {
    var S = d.type;
    return S === on ? h(a, f, d.props.children, y, d.key) : f !== null && (f.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Ca(S) === f.type) ? (y = l(f, d.props), y.ref = Yn(a, f, d), y.return = a, y) : (y = Sl(d.type, d.key, d.props, null, a.mode, y), y.ref = Yn(a, f, d), y.return = a, y);
  }
  function c(a, f, d, y) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== d.containerInfo || f.stateNode.implementation !== d.implementation ? (f = di(d, a.mode, y), f.return = a, f) : (f = l(f, d.children || []), f.return = a, f);
  }
  function h(a, f, d, y, S) {
    return f === null || f.tag !== 7 ? (f = Xt(d, a.mode, y, S), f.return = a, f) : (f = l(f, d), f.return = a, f);
  }
  function m(a, f, d) {
    if (typeof f == "string" && f !== "" || typeof f == "number")
      return f = fi("" + f, a.mode, d), f.return = a, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Vr:
          return d = Sl(f.type, f.key, f.props, null, a.mode, d), d.ref = Yn(a, null, f), d.return = a, d;
        case ln:
          return f = di(f, a.mode, d), f.return = a, f;
        case St:
          var y = f._init;
          return m(a, y(f._payload), d);
      }
      if (Jn(f) || Bn(f))
        return f = Xt(f, a.mode, d, null), f.return = a, f;
      tl(a, f);
    }
    return null;
  }
  function p(a, f, d, y) {
    var S = f !== null ? f.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return S !== null ? null : u(a, f, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Vr:
          return d.key === S ? s(a, f, d, y) : null;
        case ln:
          return d.key === S ? c(a, f, d, y) : null;
        case St:
          return S = d._init, p(
            a,
            f,
            S(d._payload),
            y
          );
      }
      if (Jn(d) || Bn(d))
        return S !== null ? null : h(a, f, d, y, null);
      tl(a, d);
    }
    return null;
  }
  function w(a, f, d, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number")
      return a = a.get(d) || null, u(f, a, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Vr:
          return a = a.get(y.key === null ? d : y.key) || null, s(f, a, y, S);
        case ln:
          return a = a.get(y.key === null ? d : y.key) || null, c(f, a, y, S);
        case St:
          var x = y._init;
          return w(a, f, d, x(y._payload), S);
      }
      if (Jn(y) || Bn(y))
        return a = a.get(d) || null, h(f, a, y, S, null);
      tl(f, y);
    }
    return null;
  }
  function v(a, f, d, y) {
    for (var S = null, x = null, k = f, N = f = 0, $ = null; k !== null && N < d.length; N++) {
      k.index > N ? ($ = k, k = null) : $ = k.sibling;
      var L = p(a, k, d[N], y);
      if (L === null) {
        k === null && (k = $);
        break;
      }
      e && k && L.alternate === null && t(a, k), f = o(L, f, N), x === null ? S = L : x.sibling = L, x = L, k = $;
    }
    if (N === d.length)
      return n(a, k), V && Ht(a, N), S;
    if (k === null) {
      for (; N < d.length; N++)
        k = m(a, d[N], y), k !== null && (f = o(k, f, N), x === null ? S = k : x.sibling = k, x = k);
      return V && Ht(a, N), S;
    }
    for (k = r(a, k); N < d.length; N++)
      $ = w(k, a, N, d[N], y), $ !== null && (e && $.alternate !== null && k.delete($.key === null ? N : $.key), f = o($, f, N), x === null ? S = $ : x.sibling = $, x = $);
    return e && k.forEach(function(ne) {
      return t(a, ne);
    }), V && Ht(a, N), S;
  }
  function g(a, f, d, y) {
    var S = Bn(d);
    if (typeof S != "function")
      throw Error(E(150));
    if (d = S.call(d), d == null)
      throw Error(E(151));
    for (var x = S = null, k = f, N = f = 0, $ = null, L = d.next(); k !== null && !L.done; N++, L = d.next()) {
      k.index > N ? ($ = k, k = null) : $ = k.sibling;
      var ne = p(a, k, L.value, y);
      if (ne === null) {
        k === null && (k = $);
        break;
      }
      e && k && ne.alternate === null && t(a, k), f = o(ne, f, N), x === null ? S = ne : x.sibling = ne, x = ne, k = $;
    }
    if (L.done)
      return n(
        a,
        k
      ), V && Ht(a, N), S;
    if (k === null) {
      for (; !L.done; N++, L = d.next())
        L = m(a, L.value, y), L !== null && (f = o(L, f, N), x === null ? S = L : x.sibling = L, x = L);
      return V && Ht(a, N), S;
    }
    for (k = r(a, k); !L.done; N++, L = d.next())
      L = w(k, a, N, L.value, y), L !== null && (e && L.alternate !== null && k.delete(L.key === null ? N : L.key), f = o(L, f, N), x === null ? S = L : x.sibling = L, x = L);
    return e && k.forEach(function(ut) {
      return t(a, ut);
    }), V && Ht(a, N), S;
  }
  function C(a, f, d, y) {
    if (typeof d == "object" && d !== null && d.type === on && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Vr:
          e: {
            for (var S = d.key, x = f; x !== null; ) {
              if (x.key === S) {
                if (S = d.type, S === on) {
                  if (x.tag === 7) {
                    n(a, x.sibling), f = l(x, d.props.children), f.return = a, a = f;
                    break e;
                  }
                } else if (x.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Ca(S) === x.type) {
                  n(a, x.sibling), f = l(x, d.props), f.ref = Yn(a, x, d), f.return = a, a = f;
                  break e;
                }
                n(a, x);
                break;
              } else
                t(a, x);
              x = x.sibling;
            }
            d.type === on ? (f = Xt(d.props.children, a.mode, y, d.key), f.return = a, a = f) : (y = Sl(d.type, d.key, d.props, null, a.mode, y), y.ref = Yn(a, f, d), y.return = a, a = y);
          }
          return i(a);
        case ln:
          e: {
            for (x = d.key; f !== null; ) {
              if (f.key === x)
                if (f.tag === 4 && f.stateNode.containerInfo === d.containerInfo && f.stateNode.implementation === d.implementation) {
                  n(a, f.sibling), f = l(f, d.children || []), f.return = a, a = f;
                  break e;
                } else {
                  n(a, f);
                  break;
                }
              else
                t(a, f);
              f = f.sibling;
            }
            f = di(d, a.mode, y), f.return = a, a = f;
          }
          return i(a);
        case St:
          return x = d._init, C(a, f, x(d._payload), y);
      }
      if (Jn(d))
        return v(a, f, d, y);
      if (Bn(d))
        return g(a, f, d, y);
      tl(a, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, f !== null && f.tag === 6 ? (n(a, f.sibling), f = l(f, d), f.return = a, a = f) : (n(a, f), f = fi(d, a.mode, y), f.return = a, a = f), i(a)) : n(a, f);
  }
  return C;
}
var Ln = Af(!0), Ff = Af(!1), Fl = At(null), jl = null, mn = null, Xu = null;
function Gu() {
  Xu = mn = jl = null;
}
function Zu(e) {
  var t = Fl.current;
  W(Fl), e._currentValue = t;
}
function Yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Cn(e, t) {
  jl = e, Xu = mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (Xu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, mn === null) {
      if (jl === null)
        throw Error(E(308));
      mn = e, jl.dependencies = { lanes: 0, firstContext: e };
    } else
      mn = mn.next = e;
  return t;
}
var Kt = null;
function Ju(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
function jf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ju(t)) : (n.next = l.next, l.next = n), t.interleaved = n, yt(e, r);
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function qu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Uf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, yt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ju(r)) : (t.next = l.next, l.next = t), r.interleaved = t, yt(e, n);
}
function ml(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
  }
}
function _a(e, t) {
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
function Ul(e, t, n, r) {
  var l = e.updateQueue;
  kt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = c = s = null, u = o;
    do {
      var p = u.lane, w = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, g = u;
          switch (p = t, w = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                m = v.call(w, m, p);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, p = typeof v == "function" ? v.call(w, m, p) : v, p == null)
                break e;
              m = Q({}, m, p);
              break e;
            case 2:
              kt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        w = { eventTime: w, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = w, s = m) : h = h.next = w, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    qt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Pa(e, t, n) {
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
var jr = {}, it = At(jr), _r = At(jr), Pr = At(jr);
function Yt(e) {
  if (e === jr)
    throw Error(E(174));
  return e;
}
function bu(e, t) {
  switch (B(Pr, t), B(_r, e), B(it, jr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pi(t, e);
  }
  W(it), B(it, t);
}
function On() {
  W(it), W(_r), W(Pr);
}
function Bf(e) {
  Yt(Pr.current);
  var t = Yt(it.current), n = Pi(t, e.type);
  t !== n && (B(_r, e), B(it, n));
}
function es(e) {
  _r.current === e && (W(it), W(_r));
}
var K = At(0);
function Bl(e) {
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
var oi = [];
function ts() {
  for (var e = 0; e < oi.length; e++)
    oi[e]._workInProgressVersionPrimary = null;
  oi.length = 0;
}
var hl = vt.ReactCurrentDispatcher, ii = vt.ReactCurrentBatchConfig, Jt = 0, Y = null, re = null, ie = null, Hl = !1, ur = !1, Nr = 0, vg = 0;
function me() {
  throw Error(E(321));
}
function ns(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n]))
      return !1;
  return !0;
}
function rs(e, t, n, r, l, o) {
  if (Jt = o, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hl.current = e === null || e.memoizedState === null ? xg : Eg, e = n(r, l), ur) {
    o = 0;
    do {
      if (ur = !1, Nr = 0, 25 <= o)
        throw Error(E(301));
      o += 1, ie = re = null, t.updateQueue = null, hl.current = Cg, e = n(r, l);
    } while (ur);
  }
  if (hl.current = Wl, t = re !== null && re.next !== null, Jt = 0, ie = re = Y = null, Hl = !1, t)
    throw Error(E(300));
  return e;
}
function ls() {
  var e = Nr !== 0;
  return Nr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? Y.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Ve() {
  if (re === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = re.next;
  var t = ie === null ? Y.memoizedState : ie.next;
  if (t !== null)
    ie = t, re = e;
  else {
    if (e === null)
      throw Error(E(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? Y.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function Tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = Ve(), n = t.queue;
  if (n === null)
    throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = re, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
    do {
      var h = c.lane;
      if ((Jt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, Y.lanes |= h, qt |= h;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, qe(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Y.lanes |= o, qt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = Ve(), n = t.queue;
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
    qe(o, t.memoizedState) || (Ce = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Hf() {
}
function Wf(e, t) {
  var n = Y, r = Ve(), l = t(), o = !qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ce = !0), r = r.queue, os(Yf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, Kf.bind(null, n, r, l, t), void 0, null), ue === null)
      throw Error(E(349));
    Jt & 30 || Vf(n, t, l);
  }
  return l;
}
function Vf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Qf(t) && Xf(e);
}
function Yf(e, t, n) {
  return n(function() {
    Qf(t) && Xf(e);
  });
}
function Qf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = yt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Na(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = kg.bind(null, Y, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Gf() {
  return Ve().memoizedState;
}
function yl(e, t, n, r) {
  var l = et();
  Y.flags |= e, l.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Co(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && ns(r, i.deps)) {
      l.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = Rr(1 | t, n, o, r);
}
function Ta(e, t) {
  return yl(8390656, 8, e, t);
}
function os(e, t) {
  return Co(2048, 8, e, t);
}
function Zf(e, t) {
  return Co(4, 2, e, t);
}
function Jf(e, t) {
  return Co(4, 4, e, t);
}
function qf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function bf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Co(4, 4, qf.bind(null, t, e), n);
}
function is() {
}
function ed(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function td(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function nd(e, t, n) {
  return Jt & 21 ? (qe(n, t) || (n = uf(), Y.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function wg(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ii.transition;
  ii.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, ii.transition = r;
  }
}
function rd() {
  return Ve().memoizedState;
}
function Sg(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ld(e))
    od(t, n);
  else if (n = jf(e, t, n, r), n !== null) {
    var l = Se();
    Je(n, e, r, l), id(n, t, r);
  }
}
function kg(e, t, n) {
  var r = zt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ld(e))
    od(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, qe(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Ju(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = jf(e, t, l, r), n !== null && (l = Se(), Je(n, e, r, l), id(n, t, r));
  }
}
function ld(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function od(e, t) {
  ur = Hl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function id(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Au(e, n);
  }
}
var Wl = { readContext: We, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, xg = { readContext: We, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: Ta, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yl(
    4194308,
    4,
    qf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return yl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return yl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Sg.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: Na, useDebugValue: is, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = Na(!1), t = e[0];
  return e = wg.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = et();
  if (V) {
    if (n === void 0)
      throw Error(E(407));
    n = n();
  } else {
    if (n = t(), ue === null)
      throw Error(E(349));
    Jt & 30 || Vf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ta(Yf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Rr(9, Kf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = ue.identifierPrefix;
  if (V) {
    var n = ft, r = ct;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = vg++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Eg = {
  readContext: We,
  useCallback: ed,
  useContext: We,
  useEffect: os,
  useImperativeHandle: bf,
  useInsertionEffect: Zf,
  useLayoutEffect: Jf,
  useMemo: td,
  useReducer: ui,
  useRef: Gf,
  useState: function() {
    return ui(Tr);
  },
  useDebugValue: is,
  useDeferredValue: function(e) {
    var t = Ve();
    return nd(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = ui(Tr)[0], t = Ve().memoizedState;
    return [e, t];
  },
  useMutableSource: Hf,
  useSyncExternalStore: Wf,
  useId: rd,
  unstable_isNewReconciler: !1
}, Cg = { readContext: We, useCallback: ed, useContext: We, useEffect: os, useImperativeHandle: bf, useInsertionEffect: Zf, useLayoutEffect: Jf, useMemo: td, useReducer: si, useRef: Gf, useState: function() {
  return si(Tr);
}, useDebugValue: is, useDeferredValue: function(e) {
  var t = Ve();
  return re === null ? t.memoizedState = e : nd(t, re.memoizedState, e);
}, useTransition: function() {
  var e = si(Tr)[0], t = Ve().memoizedState;
  return [e, t];
}, useMutableSource: Hf, useSyncExternalStore: Wf, useId: rd, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = zt(e), o = dt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (Je(t, e, l, r), ml(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = zt(e), o = dt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (Je(t, e, l, r), ml(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = zt(e), l = dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Lt(e, l, r), t !== null && (Je(t, e, r, n), ml(t, e, r));
} };
function Ra(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(l, o) : !0;
}
function ud(e, t, n) {
  var r = !1, l = Mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = We(o) : (l = Pe(t) ? Gt : ve.current, r = t.contextTypes, o = (r = r != null) ? Tn(e, l) : Mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _o, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function La(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, qu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = We(o) : (o = Pe(t) ? Gt : ve.current, l.context = Tn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Qi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _o.enqueueReplaceState(l, l.state, null), Ul(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += qh(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var _g = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  n = dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Kl || (Kl = !0, ou = r), Gi(e, t);
  }, n;
}
function ad(e, t, n) {
  n = dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Gi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Gi(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _g();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = jg.bind(null, e, t, n), t.then(e, e));
}
function za(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Da(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var Pg = vt.ReactCurrentOwner, Ce = !1;
function we(e, t, n, r) {
  t.child = e === null ? Ff(t, null, n, r) : Ln(t, e.child, n, r);
}
function $a(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Cn(t, l), r = rs(e, t, n, r, o, l), n = ls(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (V && n && Ku(t), t.flags |= 1, we(e, t, r, l), t.child);
}
function Ma(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ms(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, cd(e, t, o, r, l)) : (e = Sl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kr, n(i, r) && e.ref === t.ref)
      return gt(e, t, l);
  }
  return t.flags |= 1, e = Dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function cd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (kr(o, r) && e.ref === t.ref)
      if (Ce = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ce = !0);
      else
        return t.lanes = e.lanes, gt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function fd(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(yn, Re), Re |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, B(yn, Re), Re |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, B(yn, Re), Re |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, B(yn, Re), Re |= r;
  return we(e, t, l, n), t.child;
}
function dd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var o = Pe(n) ? Gt : ve.current;
  return o = Tn(t, o), Cn(t, l), n = rs(e, t, n, r, o, l), r = ls(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (V && r && Ku(t), t.flags |= 1, we(e, t, n, l), t.child);
}
function Ia(e, t, n, r, l) {
  if (Pe(n)) {
    var o = !0;
    Ml(t);
  } else
    o = !1;
  if (Cn(t, l), t.stateNode === null)
    gl(e, t), ud(t, n, r), Xi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = We(c) : (c = Pe(n) ? Gt : ve.current, c = Tn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && La(t, i, r, c), kt = !1;
    var p = t.memoizedState;
    i.state = p, Ul(t, r, i, l), s = t.memoizedState, u !== r || p !== s || _e.current || kt ? (typeof h == "function" && (Qi(t, n, h, r), s = t.memoizedState), (u = kt || Ra(t, n, u, r, p, s, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Uf(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Qe(t.type, u), i.props = c, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Pe(n) ? Gt : ve.current, s = Tn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && La(t, i, r, s), kt = !1, p = t.memoizedState, i.state = p, Ul(t, r, i, l);
    var v = t.memoizedState;
    u !== m || p !== v || _e.current || kt ? (typeof w == "function" && (Qi(t, n, w, r), v = t.memoizedState), (c = kt || Ra(t, n, c, r, p, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ji(e, t, n, r, o, l);
}
function Ji(e, t, n, r, l, o) {
  dd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && ka(t, n, !1), gt(e, t, o);
  r = t.stateNode, Pg.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Ln(t, e.child, null, o), t.child = Ln(t, null, u, o)) : we(e, t, u, o), t.memoizedState = r.state, l && ka(t, n, !0), t.child;
}
function pd(e) {
  var t = e.stateNode;
  t.pendingContext ? Sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sa(e, t.context, !1), bu(e, t.containerInfo);
}
function Aa(e, t, n, r, l) {
  return Rn(), Qu(l), t.flags |= 256, we(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function md(e, t, n) {
  var r = t.pendingProps, l = K.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(K, l & 1), e === null)
    return Ki(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = To(i, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : us(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Ng(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Dt(u, o) : (o = Xt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? bi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
  }
  return o = e.child, e = o.sibling, r = Dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function us(e, t) {
  return t = To({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function nl(e, t, n, r) {
  return r !== null && Qu(r), Ln(t, e.child, null, n), e = us(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ng(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ai(Error(E(422))), nl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = To({ mode: "visible", children: r.children }, l, 0, null), o = Xt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ln(t, e.child, null, i), t.child.memoizedState = bi(i), t.memoizedState = qi, o);
  if (!(t.mode & 1))
    return nl(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(E(419)), r = ai(o, r, void 0), nl(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = ue, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, yt(e, l), Je(r, e, l, -1));
    }
    return ps(), r = ai(Error(E(421))), nl(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ug.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Oe = Rt(l.nextSibling), De = t, V = !0, Ge = null, e !== null && (je[Ue++] = ct, je[Ue++] = ft, je[Ue++] = Zt, ct = e.id, ft = e.overflow, Zt = t), t = us(t, r.children), t.flags |= 4096, t);
}
function Fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yi(e.return, t, n);
}
function ci(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function hd(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = K.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fa(e, n, t);
          else if (e.tag === 19)
            Fa(e, n, t);
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
  if (B(K, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Bl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ci(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Bl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ci(t, !0, n, null, o);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Tg(e, t, n) {
  switch (t.tag) {
    case 3:
      pd(t), Rn();
      break;
    case 5:
      Bf(t);
      break;
    case 1:
      Pe(t.type) && Ml(t);
      break;
    case 4:
      bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      B(Fl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (B(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? md(e, t, n) : (B(K, K.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      B(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return hd(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(K, K.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fd(e, t, n);
  }
  return gt(e, t, n);
}
var yd, eu, gd, vd;
yd = function(e, t) {
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
eu = function() {
};
gd = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Yt(it.current);
    var o = null;
    switch (n) {
      case "input":
        l = xi(e, l), r = xi(e, r), o = [];
        break;
      case "select":
        l = Q({}, l, { value: void 0 }), r = Q({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = _i(e, l), r = _i(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Dl);
    }
    Ni(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (mr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              c,
              n
            )), n = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (mr.hasOwnProperty(c) ? (s != null && c === "onScroll" && H("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
vd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!V)
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Rg(e, t, n) {
  var r = t.pendingProps;
  switch (Yu(t), t.tag) {
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
      return he(t), null;
    case 1:
      return Pe(t.type) && $l(), he(t), null;
    case 3:
      return r = t.stateNode, On(), W(_e), W(ve), ts(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (el(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (su(Ge), Ge = null))), eu(e, t), he(t), null;
    case 5:
      es(t);
      var l = Yt(Pr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        gd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(E(166));
          return he(t), null;
        }
        if (e = Yt(it.current), el(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[Cr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < bn.length; l++)
                H(bn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H(
                "error",
                r
              ), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Qs(r, o), H("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, H("invalid", r);
              break;
            case "textarea":
              Gs(r, o), H("invalid", r);
          }
          Ni(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && br(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && br(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : mr.hasOwnProperty(i) && u != null && i === "onScroll" && H("scroll", r);
            }
          switch (n) {
            case "input":
              Kr(r), Xs(r, o, !0);
              break;
            case "textarea":
              Kr(r), Zs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Dl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[Cr] = r, yd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ti(n, r), n) {
              case "dialog":
                H("cancel", e), H("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++)
                  H(bn[l], e);
                l = r;
                break;
              case "source":
                H("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                H(
                  "error",
                  e
                ), H("load", e), l = r;
                break;
              case "details":
                H("toggle", e), l = r;
                break;
              case "input":
                Qs(e, r), l = xi(e, r), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Q({}, r, { value: void 0 }), H("invalid", e);
                break;
              case "textarea":
                Gs(e, r), l = _i(e, r), H("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Xc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Yc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && hr(e, s) : typeof s == "number" && hr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (mr.hasOwnProperty(o) ? s != null && o === "onScroll" && H("scroll", e) : s != null && Ou(e, o, s, i));
              }
            switch (n) {
              case "input":
                Kr(e), Xs(e, r, !1);
                break;
              case "textarea":
                Kr(e), Zs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Sn(e, !!r.multiple, o, !1) : r.defaultValue != null && Sn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Dl);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null)
        vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(E(166));
        if (n = Yt(Pr.current), Yt(it.current), el(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = De, e !== null))
            switch (e.tag) {
              case 3:
                br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (W(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Oe !== null && t.mode & 1 && !(t.flags & 128))
          If(), Rn(), t.flags |= 98560, o = !1;
        else if (o = el(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(E(317));
            o[rt] = t;
          } else
            Rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else
          Ge !== null && (su(Ge), Ge = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? le === 0 && (le = 3) : ps())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return On(), eu(e, t), e === null && xr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Zu(t.type._context), he(t), null;
    case 17:
      return Pe(t.type) && $l(), he(t), null;
    case 19:
      if (W(K), o = t.memoizedState, o === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Qn(o, !1);
        else {
          if (le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Bl(e), i !== null) {
                for (t.flags |= 128, Qn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return B(K, K.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && q() > Dn && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Bl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
              return he(t), null;
          } else
            2 * q() - o.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = K.current, B(K, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return ds(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Lg(e, t) {
  switch (Yu(t), t.tag) {
    case 1:
      return Pe(t.type) && $l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return On(), W(_e), W(ve), ts(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return es(t), null;
    case 13:
      if (W(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(E(340));
        Rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(K), null;
    case 4:
      return On(), null;
    case 10:
      return Zu(t.type._context), null;
    case 22:
    case 23:
      return ds(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var rl = !1, ge = !1, Og = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else
      n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var ja = !1;
function zg(e, t) {
  if (Fi = Ll, e = Ef(), Vu(e)) {
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
          var i = 0, u = -1, s = -1, c = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var w; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (w = m.firstChild) !== null; )
                p = m, m = w;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++c === l && (u = i), p === o && ++h === r && (s = i), (w = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = w;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (ji = { focusedElem: e, selectionRange: n }, Ll = !1, P = t; P !== null; )
    if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, P = e;
    else
      for (; P !== null; ) {
        t = P;
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
                  var g = v.memoizedProps, C = v.memoizedState, a = t.stateNode, f = a.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Qe(t.type, g), C);
                  a.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (y) {
          Z(t, t.return, y);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return v = ja, ja = !1, v;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && tu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Po(e, t) {
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
function nu(e) {
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
function wd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Cr], delete t[Hi], delete t[mg], delete t[hg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Sd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ua(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Sd(e.return))
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
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Dl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; )
      ru(e, t, n), e = e.sibling;
}
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; )
      lu(e, t, n), e = e.sibling;
}
var ae = null, Xe = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; )
    kd(e, t, n), n = n.sibling;
}
function kd(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(vo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || hn(n, t);
    case 6:
      var r = ae, l = Xe;
      ae = null, wt(e, t, n), ae = r, Xe = l, ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? ri(e.parentNode, n) : e.nodeType === 1 && ri(e, n), wr(e)) : ri(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Xe, ae = n.stateNode.containerInfo, Xe = !0, wt(e, t, n), ae = r, Xe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && tu(n, t, i), l = l.next;
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (!ge && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, wt(e, t, n), ge = r) : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Og()), t.forEach(function(r) {
      var l = Bg.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ye(e, t) {
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
                ae = u.stateNode, Xe = !1;
                break e;
              case 3:
                ae = u.stateNode.containerInfo, Xe = !0;
                break e;
              case 4:
                ae = u.stateNode.containerInfo, Xe = !0;
                break e;
            }
            u = u.return;
          }
        if (ae === null)
          throw Error(E(160));
        kd(o, i, l), ae = null, Xe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        Z(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      xd(t, e), t = t.sibling;
}
function xd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), be(e), r & 4) {
        try {
          sr(3, e, e.return), Po(3, e);
        } catch (g) {
          Z(e, e.return, g);
        }
        try {
          sr(5, e, e.return);
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 1:
      Ye(t, e), be(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), be(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          hr(l, "");
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Wc(l, o), Ti(u, i);
            var c = Ti(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Xc(l, m) : h === "dangerouslySetInnerHTML" ? Yc(l, m) : h === "children" ? hr(l, m) : Ou(l, h, m, c);
            }
            switch (u) {
              case "input":
                Ei(l, o);
                break;
              case "textarea":
                Vc(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null ? Sn(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? Sn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Cr] = o;
          } catch (g) {
            Z(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Ye(t, e), be(e), r & 4) {
        if (e.stateNode === null)
          throw Error(E(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ye(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          wr(t.containerInfo);
        } catch (g) {
          Z(e, e.return, g);
        }
      break;
    case 4:
      Ye(t, e), be(e);
      break;
    case 13:
      Ye(t, e), be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (cs = q())), r & 4 && Ba(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (c = ge) || h, Ye(t, e), ge = c) : Ye(t, e), be(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1)
          for (P = e, h = e.child; h !== null; ) {
            for (m = P = h; P !== null; ) {
              switch (p = P, w = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, p, p.return);
                  break;
                case 1:
                  hn(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (g) {
                      Z(r, n, g);
                    }
                  }
                  break;
                case 5:
                  hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Wa(m);
                    continue;
                  }
              }
              w !== null ? (w.return = p, P = w) : Wa(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Qc("display", i));
                } catch (g) {
                  Z(e, e.return, g);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                } catch (g) {
                  Z(e, e.return, g);
                }
            } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
              m.child.return = m, m = m.child;
              continue;
            }
            if (m === e)
              break e;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === e)
                break e;
              h === m && (h = null), m = m.return;
            }
            h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
          }
      }
      break;
    case 19:
      Ye(t, e), be(e), r & 4 && Ba(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sd(n)) {
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
          r.flags & 32 && (hr(l, ""), r.flags &= -33);
          var o = Ua(e);
          lu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ua(e);
          ru(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dg(e, t, n) {
  P = e, Ed(e);
}
function Ed(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || rl;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ge;
        u = rl;
        var c = ge;
        if (rl = i, (ge = s) && !c)
          for (P = l; P !== null; )
            i = P, s = i.child, i.tag === 22 && i.memoizedState !== null ? Va(l) : s !== null ? (s.return = i, P = s) : Va(l);
        for (; o !== null; )
          P = o, Ed(o), o = o.sibling;
        P = l, rl = u, ge = c;
      }
      Ha(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, P = o) : Ha(e);
  }
}
function Ha(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Pa(t, o, r);
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
                Pa(t, i, n);
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
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && wr(m);
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
        ge || t.flags & 512 && nu(t);
      } catch (p) {
        Z(t, t.return, p);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Wa(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function Va(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Po(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            nu(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            nu(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, P = u;
      break;
    }
    P = t.return;
  }
}
var $g = Math.ceil, Vl = vt.ReactCurrentDispatcher, ss = vt.ReactCurrentOwner, He = vt.ReactCurrentBatchConfig, M = 0, ue = null, te = null, de = 0, Re = 0, yn = At(0), le = 0, Lr = null, qt = 0, No = 0, as = 0, ar = null, Ee = null, cs = 0, Dn = 1 / 0, st = null, Kl = !1, ou = null, Ot = null, ll = !1, _t = null, Yl = 0, cr = 0, iu = null, vl = -1, wl = 0;
function Se() {
  return M & 6 ? q() : vl !== -1 ? vl : vl = q();
}
function zt(e) {
  return e.mode & 1 ? M & 2 && de !== 0 ? de & -de : gg.transition !== null ? (wl === 0 && (wl = uf()), wl) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mf(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < cr)
    throw cr = 0, iu = null, Error(E(185));
  Ir(e, n, r), (!(M & 2) || e !== ue) && (e === ue && (!(M & 2) && (No |= n), le === 4 && Et(e, de)), Ne(e, r), n === 1 && M === 0 && !(t.mode & 1) && (Dn = q() + 500, Eo && Ft()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  gy(e, t);
  var r = Rl(e, e === ue ? de : 0);
  if (r === 0)
    n !== null && bs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && bs(n), t === 1)
      e.tag === 0 ? yg(Ka.bind(null, e)) : Df(Ka.bind(null, e)), dg(function() {
        !(M & 6) && Ft();
      }), n = null;
    else {
      switch (sf(r)) {
        case 1:
          n = Iu;
          break;
        case 4:
          n = lf;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = of;
          break;
        default:
          n = Tl;
      }
      n = Od(n, Cd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Cd(e, t) {
  if (vl = -1, wl = 0, M & 6)
    throw Error(E(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n)
    return null;
  var r = Rl(e, e === ue ? de : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ql(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Pd();
    (ue !== e || de !== t) && (st = null, Dn = q() + 500, Qt(e, t));
    do
      try {
        Ag();
        break;
      } catch (u) {
        _d(e, u);
      }
    while (1);
    Gu(), Vl.current = o, M = l, te !== null ? t = 0 : (ue = null, de = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = Di(e), l !== 0 && (r = l, t = uu(e, l))), t === 1)
      throw n = Lr, Qt(e, 0), Et(e, r), Ne(e, q()), n;
    if (t === 6)
      Et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Mg(l) && (t = Ql(e, r), t === 2 && (o = Di(e), o !== 0 && (r = o, t = uu(e, o))), t === 1))
        throw n = Lr, Qt(e, 0), Et(e, r), Ne(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Wt(e, Ee, st);
          break;
        case 3:
          if (Et(e, r), (r & 130023424) === r && (t = cs + 500 - q(), 10 < t)) {
            if (Rl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Bi(Wt.bind(null, e, Ee, st), t);
            break;
          }
          Wt(e, Ee, st);
          break;
        case 4:
          if (Et(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $g(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bi(Wt.bind(null, e, Ee, st), r);
            break;
          }
          Wt(e, Ee, st);
          break;
        case 5:
          Wt(e, Ee, st);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ne(e, q()), e.callbackNode === n ? Cd.bind(null, e) : null;
}
function uu(e, t) {
  var n = ar;
  return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = Ql(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && su(t)), e;
}
function su(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function Mg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(o(), l))
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
function Et(e, t) {
  for (t &= ~as, t &= ~No, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ka(e) {
  if (M & 6)
    throw Error(E(327));
  _n();
  var t = Rl(e, 0);
  if (!(t & 1))
    return Ne(e, q()), null;
  var n = Ql(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && (t = r, n = uu(e, r));
  }
  if (n === 1)
    throw n = Lr, Qt(e, 0), Et(e, t), Ne(e, q()), n;
  if (n === 6)
    throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, Ee, st), Ne(e, q()), null;
}
function fs(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (Dn = q() + 500, Eo && Ft());
  }
}
function bt(e) {
  _t !== null && _t.tag === 0 && !(M & 6) && _n();
  var t = M;
  M |= 1;
  var n = He.transition, r = F;
  try {
    if (He.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, He.transition = n, M = t, !(M & 6) && Ft();
  }
}
function ds() {
  Re = yn.current, W(yn);
}
function Qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, fg(n)), te !== null)
    for (n = te.return; n !== null; ) {
      var r = n;
      switch (Yu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $l();
          break;
        case 3:
          On(), W(_e), W(ve), ts();
          break;
        case 5:
          es(r);
          break;
        case 4:
          On();
          break;
        case 13:
          W(K);
          break;
        case 19:
          W(K);
          break;
        case 10:
          Zu(r.type._context);
          break;
        case 22:
        case 23:
          ds();
      }
      n = n.return;
    }
  if (ue = e, te = e = Dt(e.current, null), de = Re = t, le = 0, Lr = null, as = No = qt = 0, Ee = ar = null, Kt !== null) {
    for (t = 0; t < Kt.length; t++)
      if (n = Kt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Kt = null;
  }
  return e;
}
function _d(e, t) {
  do {
    var n = te;
    try {
      if (Gu(), hl.current = Wl, Hl) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Hl = !1;
      }
      if (Jt = 0, ie = re = Y = null, ur = !1, Nr = 0, ss.current = null, n === null || n.return === null) {
        le = 1, Lr = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = de, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var w = za(i);
          if (w !== null) {
            w.flags &= -257, Da(w, i, u, o, t), w.mode & 1 && Oa(o, c, t), t = w, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Oa(o, c, t), ps();
              break e;
            }
            s = Error(E(426));
          }
        } else if (V && u.mode & 1) {
          var C = za(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Da(C, i, u, o, t), Qu(zn(s, u));
            break e;
          }
        }
        o = s = zn(s, u), le !== 4 && (le = 2), ar === null ? ar = [o] : ar.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var a = sd(o, s, t);
              _a(o, a);
              break e;
            case 1:
              u = s;
              var f = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof f.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var y = ad(o, u, t);
                _a(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Td(n);
    } catch (S) {
      t = S, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Pd() {
  var e = Vl.current;
  return Vl.current = Wl, e === null ? Wl : e;
}
function ps() {
  (le === 0 || le === 3 || le === 2) && (le = 4), ue === null || !(qt & 268435455) && !(No & 268435455) || Et(ue, de);
}
function Ql(e, t) {
  var n = M;
  M |= 2;
  var r = Pd();
  (ue !== e || de !== t) && (st = null, Qt(e, t));
  do
    try {
      Ig();
      break;
    } catch (l) {
      _d(e, l);
    }
  while (1);
  if (Gu(), M = n, Vl.current = r, te !== null)
    throw Error(E(261));
  return ue = null, de = 0, le;
}
function Ig() {
  for (; te !== null; )
    Nd(te);
}
function Ag() {
  for (; te !== null && !sy(); )
    Nd(te);
}
function Nd(e) {
  var t = Ld(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? Td(e) : te = t, ss.current = null;
}
function Td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Lg(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, te = null;
        return;
      }
    } else if (n = Rg(n, t, Re), n !== null) {
      te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Wt(e, t, n) {
  var r = F, l = He.transition;
  try {
    He.transition = null, F = 1, Fg(e, t, n, r);
  } finally {
    He.transition = l, F = r;
  }
  return null;
}
function Fg(e, t, n, r) {
  do
    _n();
  while (_t !== null);
  if (M & 6)
    throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (vy(e, o), e === ue && (te = ue = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ll || (ll = !0, Od(Tl, function() {
    return _n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = He.transition, He.transition = null;
    var i = F;
    F = 1;
    var u = M;
    M |= 4, ss.current = null, zg(e, n), xd(n, e), lg(ji), Ll = !!Fi, ji = Fi = null, e.current = n, Dg(n), ay(), M = u, F = i, He.transition = o;
  } else
    e.current = n;
  if (ll && (ll = !1, _t = e, Yl = l), o = e.pendingLanes, o === 0 && (Ot = null), dy(n.stateNode), Ne(e, q()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Kl)
    throw Kl = !1, e = ou, ou = null, e;
  return Yl & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === iu ? cr++ : (cr = 0, iu = e) : cr = 0, Ft(), null;
}
function _n() {
  if (_t !== null) {
    var e = sf(Yl), t = He.transition, n = F;
    try {
      if (He.transition = null, F = 16 > e ? 16 : e, _t === null)
        var r = !1;
      else {
        if (e = _t, _t = null, Yl = 0, M & 6)
          throw Error(E(331));
        var l = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var o = P, i = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (P = c; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, P = m;
                  else
                    for (; P !== null; ) {
                      h = P;
                      var p = h.sibling, w = h.return;
                      if (wd(h), h === c) {
                        P = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = w, P = p;
                        break;
                      }
                      P = w;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var C = g.sibling;
                    g.sibling = null, g = C;
                  } while (g !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, P = i;
          else
            e:
              for (; P !== null; ) {
                if (o = P, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(9, o, o.return);
                  }
                var a = o.sibling;
                if (a !== null) {
                  a.return = o.return, P = a;
                  break e;
                }
                P = o.return;
              }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          i = P;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, P = d;
          else
            e:
              for (i = f; P !== null; ) {
                if (u = P, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Po(9, u);
                    }
                  } catch (S) {
                    Z(u, u.return, S);
                  }
                if (u === i) {
                  P = null;
                  break e;
                }
                var y = u.sibling;
                if (y !== null) {
                  y.return = u.return, P = y;
                  break e;
                }
                P = u.return;
              }
        }
        if (M = l, Ft(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(vo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, He.transition = t;
    }
  }
  return !1;
}
function Ya(e, t, n) {
  t = zn(n, t), t = sd(e, t, 1), e = Lt(e, t, 1), t = Se(), e !== null && (Ir(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3)
    Ya(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = zn(n, e), e = ad(t, e, 1), t = Lt(t, e, 1), e = Se(), t !== null && (Ir(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (de & n) === n && (le === 4 || le === 3 && (de & 130023424) === de && 500 > q() - cs ? Qt(e, 0) : as |= n), Ne(e, t);
}
function Rd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = Se();
  e = yt(e, t), e !== null && (Ir(e, t, n), Ne(e, n));
}
function Ug(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Rd(e, n);
}
function Bg(e, t) {
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
  r !== null && r.delete(t), Rd(e, n);
}
var Ld;
Ld = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current)
      Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ce = !1, Tg(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else
    Ce = !1, V && t.flags & 1048576 && $f(t, Al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      gl(e, t), e = t.pendingProps;
      var l = Tn(t, ve.current);
      Cn(t, n), l = rs(null, t, r, e, l, n);
      var o = ls();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Ml(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, qu(t), l.updater = _o, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = Ji(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Ku(t), we(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Wg(r), e = Qe(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = Ia(null, t, r, e, n);
            break e;
          case 11:
            t = $a(null, t, r, e, n);
            break e;
          case 14:
            t = Ma(null, t, r, Qe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), Ia(e, t, r, l, n);
    case 3:
      e: {
        if (pd(t), e === null)
          throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Uf(e, t), Ul(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = zn(Error(E(423)), t), t = Aa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(E(424)), t), t = Aa(e, t, r, n, l);
            break e;
          } else
            for (Oe = Rt(t.stateNode.containerInfo.firstChild), De = t, V = !0, Ge = null, n = Ff(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Rn(), r === l) {
            t = gt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Bf(t), e === null && Ki(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Ui(r, l) ? i = null : o !== null && Ui(r, o) && (t.flags |= 32), dd(e, t), we(e, t, i, n), t.child;
    case 6:
      return e === null && Ki(t), null;
    case 13:
      return md(e, t, n);
    case 4:
      return bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), $a(e, t, r, l, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, B(Fl, r._currentValue), r._currentValue = i, o !== null)
          if (qe(o.value, i)) {
            if (o.children === l.children && !_e.current) {
              t = gt(e, t, n);
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
                      s = dt(-1, n & -n), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Yi(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Yi(i, n, t), i = o.sibling;
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
        we(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Cn(t, n), l = We(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Qe(r, t.pendingProps), l = Qe(r.type, l), Ma(e, t, r, l, n);
    case 15:
      return cd(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Qe(r, l), gl(e, t), t.tag = 1, Pe(r) ? (e = !0, Ml(t)) : e = !1, Cn(t, n), ud(t, r, l), Xi(t, r, l, n), Ji(null, t, r, !0, e, n);
    case 19:
      return hd(e, t, n);
    case 22:
      return fd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Od(e, t) {
  return rf(e, t);
}
function Hg(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new Hg(e, t, n, r);
}
function ms(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Wg(e) {
  if (typeof e == "function")
    return ms(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Du)
      return 11;
    if (e === $u)
      return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Sl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    ms(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case on:
          return Xt(n.children, l, o, t);
        case zu:
          i = 8, l |= 8;
          break;
        case vi:
          return e = Be(12, n, t, l | 2), e.elementType = vi, e.lanes = o, e;
        case wi:
          return e = Be(13, n, t, l), e.elementType = wi, e.lanes = o, e;
        case Si:
          return e = Be(19, n, t, l), e.elementType = Si, e.lanes = o, e;
        case Uc:
          return To(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Fc:
                i = 10;
                break e;
              case jc:
                i = 9;
                break e;
              case Du:
                i = 11;
                break e;
              case $u:
                i = 14;
                break e;
              case St:
                i = 16, r = null;
                break e;
            }
          throw Error(E(130, e == null ? e : typeof e, ""));
      }
  return t = Be(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = Be(7, e, r, t), e.lanes = n, e;
}
function To(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = Uc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function fi(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function di(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Vg(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yo(0), this.expirationTimes = Yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function hs(e, t, n, r, l, o, i, u, s) {
  return e = new Vg(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qu(o), e;
}
function Kg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function zd(e) {
  if (!e)
    return Mt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1)
      throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
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
    if (Pe(n))
      return zf(e, n, t);
  }
  return t;
}
function Dd(e, t, n, r, l, o, i, u, s) {
  return e = hs(n, r, !0, e, l, o, i, u, s), e.context = zd(null), n = e.current, r = Se(), l = zt(n), o = dt(r, l), o.callback = t ?? null, Lt(n, o, l), e.current.lanes = l, Ir(e, l, r), Ne(e, r), e;
}
function Ro(e, t, n, r) {
  var l = t.current, o = Se(), i = zt(l);
  return n = zd(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(l, t, i), e !== null && (Je(e, l, i, o), ml(e, l, i)), i;
}
function Xl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ys(e, t) {
  Qa(e, t), (e = e.alternate) && Qa(e, t);
}
function Yg() {
  return null;
}
var $d = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function gs(e) {
  this._internalRoot = e;
}
Lo.prototype.render = gs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(E(409));
  Ro(e, t, null, null);
};
Lo.prototype.unmount = gs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function() {
      Ro(null, e, null, null);
    }), t[ht] = null;
  }
};
function Lo(e) {
  this._internalRoot = e;
}
Lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ff();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xt.length && t !== 0 && t < xt[n].priority; n++)
      ;
    xt.splice(n, 0, e), n === 0 && pf(e);
  }
};
function vs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xa() {
}
function Qg(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = Xl(i);
        o.call(c);
      };
    }
    var i = Dd(t, r, e, 0, null, !1, !1, "", Xa);
    return e._reactRootContainer = i, e[ht] = i.current, xr(e.nodeType === 8 ? e.parentNode : e), bt(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = Xl(s);
      u.call(c);
    };
  }
  var s = hs(e, 0, !1, null, null, !1, !1, "", Xa);
  return e._reactRootContainer = s, e[ht] = s.current, xr(e.nodeType === 8 ? e.parentNode : e), bt(function() {
    Ro(t, s, n, r);
  }), s;
}
function zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Xl(i);
        u.call(s);
      };
    }
    Ro(t, i, e, l);
  } else
    i = Qg(n, t, e, l, r);
  return Xl(i);
}
af = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes);
        n !== 0 && (Au(t, n | 1), Ne(t, q()), !(M & 6) && (Dn = q() + 500, Ft()));
      }
      break;
    case 13:
      bt(function() {
        var r = yt(e, 1);
        if (r !== null) {
          var l = Se();
          Je(r, e, 1, l);
        }
      }), ys(e, 1);
  }
};
Fu = function(e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    ys(e, 134217728);
  }
};
cf = function(e) {
  if (e.tag === 13) {
    var t = zt(e), n = yt(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    ys(e, t);
  }
};
ff = function() {
  return F;
};
df = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
Li = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ei(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xo(r);
            if (!l)
              throw Error(E(90));
            Hc(r), Ei(r, l);
          }
        }
      }
      break;
    case "textarea":
      Vc(e, n);
      break;
    case "select":
      t = n.value, t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Jc = fs;
qc = bt;
var Xg = { usingClientEntryPoint: !1, Events: [Fr, cn, xo, Gc, Zc, fs] }, Xn = { findFiberByHostInstance: Vt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gg = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = tf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || Yg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ol.isDisabled && ol.supportsFiber)
    try {
      vo = ol.inject(Gg), ot = ol;
    } catch {
    }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vs(t))
    throw Error(E(200));
  return Kg(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!vs(e))
    throw Error(E(299));
  var n = !1, r = "", l = $d;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = hs(e, 1, !1, null, null, n, !1, r, l), e[ht] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new gs(t);
};
Ie.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = tf(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return bt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!Oo(t))
    throw Error(E(200));
  return zo(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!vs(e))
    throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = $d;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Dd(t, null, e, 1, n ?? null, l, !1, o, i), e[ht] = t.current, xr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Lo(t);
};
Ie.render = function(e, t, n) {
  if (!Oo(t))
    throw Error(E(200));
  return zo(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!Oo(e))
    throw Error(E(40));
  return e._reactRootContainer ? (bt(function() {
    zo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = fs;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Oo(n))
    throw Error(E(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(E(38));
  return zo(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function Md() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md);
    } catch (e) {
      console.error(e);
    }
}
Md(), $c.exports = Ie;
var Zg = $c.exports, Id, Ga = Zg;
Id = Ga.createRoot, Ga.hydrateRoot;
function Ad(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Jg(e, t, n) {
  return { dx: e / n, dy: t / n };
}
function qg({ layer: e, selected: t, onSelect: n, onMoveStart: r }) {
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
      o = /* @__PURE__ */ _(
        "div",
        {
          className: "chd-layer-frame",
          style: { background: e.fill || "#ffffff" }
        }
      );
      break;
    case "rect":
      o = /* @__PURE__ */ _(
        "div",
        {
          className: "chd-layer-rect",
          style: { background: e.fill || "#888780" }
        }
      );
      break;
    case "text":
      o = /* @__PURE__ */ _(
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
      o = e.src ? /* @__PURE__ */ _("img", { className: "chd-layer-image", src: e.src, alt: e.name, draggable: !1 }) : /* @__PURE__ */ _("div", { className: "chd-layer-image-placeholder", style: { background: e.fill || "#e8e6e1" }, children: "Image" });
      break;
  }
  return /* @__PURE__ */ _(
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
let bg = 1;
function er() {
  return `layer-${Date.now().toString(36)}-${bg++}`;
}
function kl(e, t) {
  const n = (t == null ? void 0 : t.x) ?? 80, r = (t == null ? void 0 : t.y) ?? 80;
  switch (e) {
    case "frame":
      return {
        id: er(),
        type: e,
        name: "Frame",
        x: n,
        y: r,
        width: 320,
        height: 240,
        visible: !0,
        fill: "#ffffff"
      };
    case "rect":
      return {
        id: er(),
        type: e,
        name: "Rectangle",
        x: n,
        y: r,
        width: 160,
        height: 100,
        visible: !0,
        fill: "#3d5a80"
      };
    case "text":
      return {
        id: er(),
        type: e,
        name: "Text",
        x: n,
        y: r,
        width: 220,
        height: 48,
        visible: !0,
        text: "Double-click to edit",
        fontSize: 20,
        color: "#1a1a1a"
      };
    case "image":
      return {
        id: er(),
        type: e,
        name: "Image",
        x: n,
        y: r,
        width: 200,
        height: 140,
        visible: !0,
        fill: "#e8e6e1",
        src: ""
      };
  }
}
function ev() {
  const e = kl("frame", { x: 60, y: 50 });
  e.name = "Artboard", e.width = 480, e.height = 360, e.fill = "#f7f6f3";
  const t = kl("rect", { x: 100, y: 120 });
  t.fill = "#2c2c2a", t.width = 140, t.height = 90;
  const n = kl("text", { x: 100, y: 240 });
  return n.text = "CHDesigner", n.fontSize = 28, n.color = "#2c2c2a", n.width = 280, n.height = 40, {
    version: 1,
    canvas: {
      width: 960,
      height: 640,
      background: "#eceae4"
    },
    layers: [e, t, n]
  };
}
function Bt(e) {
  return JSON.parse(JSON.stringify(e));
}
function tv(e) {
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
    const c = typeof u.id == "string" ? u.id : er(), h = typeof u.name == "string" ? u.name : s, m = Number(u.x), p = Number(u.y), w = Number(u.width), v = Number(u.height);
    [m, p, w, v].every(Number.isFinite) && o.push({
      id: c,
      type: s,
      name: h,
      x: m,
      y: p,
      width: w,
      height: v,
      rotation: typeof u.rotation == "number" ? u.rotation : void 0,
      visible: u.visible !== !1,
      locked: !!u.locked,
      fill: typeof u.fill == "string" ? u.fill : void 0,
      text: typeof u.text == "string" ? u.text : void 0,
      fontSize: typeof u.fontSize == "number" ? u.fontSize : void 0,
      color: typeof u.color == "string" ? u.color : void 0,
      src: typeof u.src == "string" ? u.src : void 0
    });
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
const gn = 24, Za = 1, Fd = 0.25, jd = 3, nv = 50, Ud = R.createContext(null);
function rv(e, t, n) {
  if (t < 0 || n < 0 || t >= e.length || n >= e.length || t === n)
    return e;
  const r = [...e], [l] = r.splice(t, 1);
  return r.splice(n, 0, l), r;
}
function Ja(e, t, n) {
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
function lv({ children: e }) {
  const t = R.useRef(null);
  t.current || (t.current = ev());
  const [n, r] = R.useState(() => Bt(t.current)), [l, o] = R.useState([]), [i, u] = R.useState({
    zoom: Za,
    panX: 40,
    panY: 40
  }), s = R.useRef([Bt(t.current)]), c = R.useRef(0), [h, m] = R.useState(0), p = R.useRef(l);
  p.current = l;
  const w = R.useCallback(() => m((y) => y + 1), []), v = R.useCallback(
    (y) => {
      const S = s.current.slice(0, c.current + 1);
      for (S.push(Bt(y)); S.length > nv; )
        S.shift();
      s.current = S, c.current = S.length - 1, w();
    },
    [w]
  ), g = R.useCallback(
    (y, S) => {
      r(y), S && v(y);
    },
    [v]
  ), C = R.useCallback(
    (y) => {
      switch (y.type) {
        case "ADD_LAYER": {
          const S = kl(y.layerType, y.at);
          r((x) => {
            const k = { ...x, layers: [...x.layers, S] };
            return v(k), k;
          }), o([S.id]);
          break;
        }
        case "UPDATE_LAYER": {
          const S = y.pushHistory !== !1;
          r((x) => {
            const k = {
              ...x,
              layers: x.layers.map((N) => {
                if (N.id !== y.id)
                  return N;
                const $ = { ...N, ...y.patch };
                return typeof $.width == "number" && ($.width = Math.max(gn, $.width)), typeof $.height == "number" && ($.height = Math.max(gn, $.height)), $;
              })
            };
            return S && v(k), k;
          });
          break;
        }
        case "DELETE_LAYERS": {
          const S = new Set(y.ids ?? p.current);
          if (S.size === 0)
            return;
          r((x) => {
            const k = {
              ...x,
              layers: x.layers.filter((N) => !S.has(N.id))
            };
            return v(k), k;
          }), o((x) => x.filter((k) => !S.has(k)));
          break;
        }
        case "SELECT": {
          o((S) => {
            if (y.additive) {
              const x = new Set(S);
              for (const k of y.ids)
                x.has(k) ? x.delete(k) : x.add(k);
              return Array.from(x);
            }
            return y.ids;
          });
          break;
        }
        case "UNSELECT_ALL": {
          o([]);
          break;
        }
        case "REORDER": {
          r((S) => {
            const x = {
              ...S,
              layers: rv(S.layers, y.fromIndex, y.toIndex)
            };
            return v(x), x;
          });
          break;
        }
        case "SET_VISIBILITY": {
          r((S) => {
            const x = {
              ...S,
              layers: S.layers.map(
                (k) => k.id === y.id ? { ...k, visible: y.visible } : k
              )
            };
            return v(x), x;
          });
          break;
        }
        case "BRING_FORWARD": {
          const S = p.current;
          r((x) => {
            const k = { ...x, layers: Ja(x.layers, S, "forward") };
            return v(k), k;
          });
          break;
        }
        case "SEND_BACKWARD": {
          const S = p.current;
          r((x) => {
            const k = { ...x, layers: Ja(x.layers, S, "backward") };
            return v(k), k;
          });
          break;
        }
        case "ZOOM_SET": {
          u((S) => ({
            ...S,
            zoom: Ad(y.zoom, Fd, jd)
          }));
          break;
        }
        case "ZOOM_RESET": {
          u({ zoom: Za, panX: 40, panY: 40 });
          break;
        }
        case "PAN_SET": {
          u((S) => ({
            ...S,
            panX: y.panX,
            panY: y.panY
          }));
          break;
        }
        case "UNDO": {
          if (c.current <= 0)
            return;
          c.current -= 1, r(Bt(s.current[c.current])), o([]), w();
          break;
        }
        case "REDO": {
          if (c.current >= s.current.length - 1)
            return;
          c.current += 1, r(Bt(s.current[c.current])), o([]), w();
          break;
        }
        case "LOAD_DOCUMENT": {
          g(Bt(y.document), !0), o([]);
          break;
        }
        case "COMMIT": {
          r((S) => (v(S), S));
          break;
        }
      }
    },
    [g, w, v]
  ), a = R.useCallback(() => Bt(n), [n]), f = R.useCallback(
    (y) => {
      try {
        const S = tv(JSON.parse(y));
        return S ? (g(S, !0), o([]), !0) : !1;
      } catch {
        return !1;
      }
    },
    [g]
  ), d = R.useMemo(
    () => ({
      document: n,
      selection: l,
      viewport: i,
      canUndo: c.current > 0,
      canRedo: c.current < s.current.length - 1,
      dispatch: C,
      exportDocument: a,
      importDocumentJson: f
    }),
    [n, l, i, C, a, f, h]
  );
  return /* @__PURE__ */ _(Ud.Provider, { value: d, children: e });
}
function Fn() {
  const e = R.useContext(Ud);
  if (!e)
    throw new Error("useDesignerStore must be used within DesignerProvider");
  return e;
}
function ov() {
  return Fn().document;
}
function Bd() {
  return Fn().document.layers;
}
function Do() {
  return Fn().selection;
}
function Hd() {
  return Fn().viewport;
}
function $o() {
  return Fn().dispatch;
}
function iv() {
  const e = Fn();
  return {
    canUndo: e.canUndo,
    canRedo: e.canRedo,
    exportDocument: e.exportDocument,
    importDocumentJson: e.importDocumentJson,
    dispatch: e.dispatch
  };
}
const uv = ["nw", "ne", "sw", "se"];
function sv() {
  const e = ov(), t = Do(), n = Hd(), r = $o(), [l, o] = R.useState(null), [i, u] = R.useState(!1), s = R.useRef(n);
  s.current = n, R.useEffect(() => {
    const a = (d) => {
      if (d.code === "Space" && !(d.target instanceof HTMLInputElement) && !(d.target instanceof HTMLTextAreaElement) && (d.preventDefault(), u(!0)), (d.key === "Delete" || d.key === "Backspace") && t.length > 0) {
        const y = d.target.tagName;
        if (y === "INPUT" || y === "TEXTAREA")
          return;
        d.preventDefault(), r({ type: "DELETE_LAYERS" });
      }
      (d.ctrlKey || d.metaKey) && d.key.toLowerCase() === "z" && !d.shiftKey && (d.preventDefault(), r({ type: "UNDO" })), (d.ctrlKey || d.metaKey) && (d.key.toLowerCase() === "y" || d.key.toLowerCase() === "z" && d.shiftKey) && (d.preventDefault(), r({ type: "REDO" }));
    }, f = (d) => {
      d.code === "Space" && u(!1);
    };
    return window.addEventListener("keydown", a), window.addEventListener("keyup", f), () => {
      window.removeEventListener("keydown", a), window.removeEventListener("keyup", f);
    };
  }, [r, t.length]), R.useEffect(() => {
    if (!l)
      return;
    const a = (d) => {
      const y = s.current.zoom;
      if (l.kind === "pan") {
        r({
          type: "PAN_SET",
          panX: l.origPanX + (d.clientX - l.startX),
          panY: l.origPanY + (d.clientY - l.startY)
        });
        return;
      }
      const { dx: S, dy: x } = Jg(
        d.clientX - l.startX,
        d.clientY - l.startY,
        y
      );
      if (l.kind === "move") {
        for (const ne of l.ids) {
          const ut = l.origins[ne];
          ut && r({
            type: "UPDATE_LAYER",
            id: ne,
            patch: { x: ut.x + S, y: ut.y + x },
            pushHistory: !1
          });
        }
        return;
      }
      let k = l.origX, N = l.origY, $ = l.origW, L = l.origH;
      l.handle.includes("e") && ($ = Math.max(gn, l.origW + S)), l.handle.includes("s") && (L = Math.max(gn, l.origH + x)), l.handle.includes("w") && ($ = Math.max(gn, l.origW - S), k = l.origX + (l.origW - $)), l.handle.includes("n") && (L = Math.max(gn, l.origH - x), N = l.origY + (l.origH - L)), r({
        type: "UPDATE_LAYER",
        id: l.id,
        patch: { x: k, y: N, width: $, height: L },
        pushHistory: !1
      });
    }, f = () => {
      (l.kind === "move" || l.kind === "resize") && r({ type: "COMMIT" }), o(null);
    };
    return window.addEventListener("pointermove", a), window.addEventListener("pointerup", f), () => {
      window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", f);
    };
  }, [l, r]);
  const c = (a) => {
    a.preventDefault();
    const f = Ad(n.zoom * (a.deltaY < 0 ? 1.08 : 0.92), Fd, jd);
    r({ type: "ZOOM_SET", zoom: f });
  }, h = (a) => {
    o({
      kind: "pan",
      startX: a.clientX,
      startY: a.clientY,
      origPanX: n.panX,
      origPanY: n.panY
    });
  }, m = (a) => {
    if (a.button === 1 || a.button === 0 && i) {
      a.preventDefault(), h(a);
      return;
    }
    a.button === 0 && r({ type: "UNSELECT_ALL" });
  }, p = (a, f) => {
    r({
      type: "SELECT",
      ids: [a.id],
      additive: f.shiftKey
    });
  }, w = (a, f) => {
    if (a.locked || i)
      return;
    const d = t.includes(a.id) ? t : [a.id];
    t.includes(a.id) || r({ type: "SELECT", ids: [a.id] });
    const y = {};
    for (const S of d) {
      const x = e.layers.find((k) => k.id === S);
      x && !x.locked && (y[S] = { x: x.x, y: x.y });
    }
    o({
      kind: "move",
      ids: Object.keys(y),
      startX: f.clientX,
      startY: f.clientY,
      origins: y
    });
  }, v = (a, f, d) => {
    d.stopPropagation(), !a.locked && (r({ type: "SELECT", ids: [a.id] }), o({
      kind: "resize",
      id: a.id,
      startX: d.clientX,
      startY: d.clientY,
      origX: a.x,
      origY: a.y,
      origW: a.width,
      origH: a.height,
      handle: f
    }));
  }, g = e.layers.filter((a) => t.includes(a.id) && a.visible), C = g.length === 1 ? g[0] : null;
  return /* @__PURE__ */ U(
    "div",
    {
      className: `chd-viewport${i ? " chd-viewport--panning" : ""}`,
      onWheel: c,
      onPointerDown: m,
      children: [
        /* @__PURE__ */ _(
          "div",
          {
            className: "chd-world",
            style: {
              transform: `translate(${n.panX}px, ${n.panY}px) scale(${n.zoom})`
            },
            children: /* @__PURE__ */ U(
              "div",
              {
                className: "chd-artboard",
                style: {
                  width: e.canvas.width,
                  height: e.canvas.height,
                  background: e.canvas.background || "#eceae4"
                },
                onPointerDown: (a) => {
                  a.button !== 0 || i || (a.stopPropagation(), r({ type: "UNSELECT_ALL" }));
                },
                children: [
                  e.layers.map((a) => /* @__PURE__ */ _(
                    qg,
                    {
                      layer: a,
                      selected: t.includes(a.id),
                      onSelect: (f) => p(a, f),
                      onMoveStart: (f) => w(a, f)
                    },
                    a.id
                  )),
                  C && !C.locked ? /* @__PURE__ */ _(
                    "div",
                    {
                      className: "chd-selection-box",
                      style: {
                        left: C.x,
                        top: C.y,
                        width: C.width,
                        height: C.height
                      },
                      children: uv.map((a) => /* @__PURE__ */ _(
                        "div",
                        {
                          className: `chd-handle chd-handle--${a}`,
                          onPointerDown: (f) => v(C, a, f)
                        },
                        a
                      ))
                    }
                  ) : null,
                  g.length > 1 ? g.map((a) => /* @__PURE__ */ _(
                    "div",
                    {
                      className: "chd-selection-outline",
                      style: {
                        left: a.x,
                        top: a.y,
                        width: a.width,
                        height: a.height
                      }
                    },
                    `sel-${a.id}`
                  )) : null
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ _("div", { className: "chd-viewport-hint", children: "Scroll to zoom · Space+drag to pan · Shift+click multi-select" })
      ]
    }
  );
}
function av() {
  const e = Bd(), t = Do(), n = $o(), r = [...e].map((l, o) => ({ layer: l, index: o })).reverse();
  return /* @__PURE__ */ U("aside", { className: "chd-panel chd-layers-panel", "aria-label": "Layers", children: [
    /* @__PURE__ */ _("div", { className: "chd-panel-header", children: "Layers" }),
    /* @__PURE__ */ _("ul", { className: "chd-layer-list", children: r.map(({ layer: l, index: o }) => {
      const i = t.includes(l.id);
      return /* @__PURE__ */ U(
        "li",
        {
          className: `chd-layer-list-item${i ? " chd-layer-list-item--selected" : ""}`,
          children: [
            /* @__PURE__ */ U(
              "button",
              {
                type: "button",
                className: "chd-layer-list-select",
                onClick: (u) => n({
                  type: "SELECT",
                  ids: [l.id],
                  additive: u.shiftKey
                }),
                children: [
                  /* @__PURE__ */ _("span", { className: "chd-layer-list-type", children: l.type }),
                  /* @__PURE__ */ _("span", { className: "chd-layer-list-name", children: l.name })
                ]
              }
            ),
            /* @__PURE__ */ _(
              "button",
              {
                type: "button",
                className: "chd-icon-btn",
                title: l.visible ? "Hide" : "Show",
                onClick: () => n({
                  type: "SET_VISIBILITY",
                  id: l.id,
                  visible: !l.visible
                }),
                children: l.visible ? "◉" : "○"
              }
            ),
            /* @__PURE__ */ _(
              "button",
              {
                type: "button",
                className: "chd-icon-btn",
                title: "Move up (forward)",
                disabled: o >= e.length - 1,
                onClick: () => n({ type: "REORDER", fromIndex: o, toIndex: o + 1 }),
                children: "↑"
              }
            ),
            /* @__PURE__ */ _(
              "button",
              {
                type: "button",
                className: "chd-icon-btn",
                title: "Move down (back)",
                disabled: o <= 0,
                onClick: () => n({ type: "REORDER", fromIndex: o, toIndex: o - 1 }),
                children: "↓"
              }
            )
          ]
        },
        l.id
      );
    }) })
  ] });
}
function Gn({
  label: e,
  value: t,
  onChange: n
}) {
  return /* @__PURE__ */ U("label", { className: "chd-field", children: [
    /* @__PURE__ */ _("span", { children: e }),
    /* @__PURE__ */ _(
      "input",
      {
        type: "number",
        value: Number.isFinite(t) ? t : 0,
        onChange: (r) => n(Number(r.target.value))
      }
    )
  ] });
}
function cv() {
  const e = Bd(), t = Do(), n = $o(), r = e.filter((i) => t.includes(i.id)), l = r.length === 1 ? r[0] : null, o = (i) => {
    l && n({ type: "UPDATE_LAYER", id: l.id, patch: i });
  };
  return /* @__PURE__ */ U("aside", { className: "chd-panel chd-properties-panel", "aria-label": "Properties", children: [
    /* @__PURE__ */ _("div", { className: "chd-panel-header", children: "Properties" }),
    l ? /* @__PURE__ */ U("div", { className: "chd-properties-body", children: [
      /* @__PURE__ */ U("label", { className: "chd-field", children: [
        /* @__PURE__ */ _("span", { children: "Name" }),
        /* @__PURE__ */ _(
          "input",
          {
            type: "text",
            value: l.name,
            onChange: (i) => o({ name: i.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ U("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ _(Gn, { label: "X", value: Math.round(l.x), onChange: (i) => o({ x: i }) }),
        /* @__PURE__ */ _(Gn, { label: "Y", value: Math.round(l.y), onChange: (i) => o({ y: i }) })
      ] }),
      /* @__PURE__ */ U("div", { className: "chd-field-row", children: [
        /* @__PURE__ */ _(
          Gn,
          {
            label: "W",
            value: Math.round(l.width),
            onChange: (i) => o({ width: i })
          }
        ),
        /* @__PURE__ */ _(
          Gn,
          {
            label: "H",
            value: Math.round(l.height),
            onChange: (i) => o({ height: i })
          }
        )
      ] }),
      (l.type === "frame" || l.type === "rect" || l.type === "image") && /* @__PURE__ */ U("label", { className: "chd-field", children: [
        /* @__PURE__ */ _("span", { children: "Fill" }),
        /* @__PURE__ */ _(
          "input",
          {
            type: "color",
            value: l.fill && /^#/.test(l.fill) ? l.fill : "#888780",
            onChange: (i) => o({ fill: i.target.value })
          }
        )
      ] }),
      l.type === "text" && /* @__PURE__ */ U(mp, { children: [
        /* @__PURE__ */ U("label", { className: "chd-field", children: [
          /* @__PURE__ */ _("span", { children: "Text" }),
          /* @__PURE__ */ _(
            "textarea",
            {
              rows: 3,
              value: l.text || "",
              onChange: (i) => o({ text: i.target.value })
            }
          )
        ] }),
        /* @__PURE__ */ U("div", { className: "chd-field-row", children: [
          /* @__PURE__ */ _(
            Gn,
            {
              label: "Size",
              value: l.fontSize ?? 16,
              onChange: (i) => o({ fontSize: i })
            }
          ),
          /* @__PURE__ */ U("label", { className: "chd-field", children: [
            /* @__PURE__ */ _("span", { children: "Color" }),
            /* @__PURE__ */ _(
              "input",
              {
                type: "color",
                value: l.color && /^#/.test(l.color) ? l.color : "#1a1a1a",
                onChange: (i) => o({ color: i.target.value })
              }
            )
          ] })
        ] })
      ] }),
      l.type === "image" && /* @__PURE__ */ U("label", { className: "chd-field", children: [
        /* @__PURE__ */ _("span", { children: "Image URL" }),
        /* @__PURE__ */ _(
          "input",
          {
            type: "url",
            placeholder: "https://…",
            value: l.src || "",
            onChange: (i) => o({ src: i.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ U("label", { className: "chd-field chd-field-checkbox", children: [
        /* @__PURE__ */ _(
          "input",
          {
            type: "checkbox",
            checked: !!l.locked,
            onChange: (i) => o({ locked: i.target.checked })
          }
        ),
        /* @__PURE__ */ _("span", { children: "Locked" })
      ] })
    ] }) : /* @__PURE__ */ _("p", { className: "chd-panel-empty", children: r.length > 1 ? `${r.length} layers selected` : "Select a layer" })
  ] });
}
const fv = [
  { type: "frame", label: "Frame" },
  { type: "rect", label: "Rect" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" }
];
function dv() {
  const e = $o(), t = Do(), n = Hd(), { canUndo: r, canRedo: l, exportDocument: o, importDocumentJson: i } = iv(), u = R.useRef(null), s = () => {
    const h = o(), m = new Blob([JSON.stringify(h, null, 2)], { type: "application/json" }), p = URL.createObjectURL(m), w = document.createElement("a");
    w.href = p, w.download = "chdesigner-document.json", w.click(), URL.revokeObjectURL(p);
  }, c = async (h) => {
    if (!h)
      return;
    const m = await h.text();
    i(m) || window.alert("Could not import document. Expected CHDesigner JSON (version 1).");
  };
  return /* @__PURE__ */ U("header", { className: "chd-toolbar", children: [
    /* @__PURE__ */ _("div", { className: "chd-toolbar-brand", children: "CHDesigner" }),
    /* @__PURE__ */ _("div", { className: "chd-toolbar-group", children: fv.map((h) => /* @__PURE__ */ U(
      "button",
      {
        type: "button",
        className: "chd-btn",
        onClick: () => e({ type: "ADD_LAYER", layerType: h.type }),
        children: [
          "+ ",
          h.label
        ]
      },
      h.type
    )) }),
    /* @__PURE__ */ U("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ _(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "DELETE_LAYERS" }),
          children: "Delete"
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "BRING_FORWARD" }),
          children: "Forward"
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: t.length === 0,
          onClick: () => e({ type: "SEND_BACKWARD" }),
          children: "Back"
        }
      )
    ] }),
    /* @__PURE__ */ U("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ _(
        "button",
        {
          type: "button",
          className: "chd-btn",
          disabled: !r,
          onClick: () => e({ type: "UNDO" }),
          children: "Undo"
        }
      ),
      /* @__PURE__ */ _(
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
    /* @__PURE__ */ U("div", { className: "chd-toolbar-group", children: [
      /* @__PURE__ */ U("button", { type: "button", className: "chd-btn", onClick: () => e({ type: "ZOOM_RESET" }), children: [
        Math.round(n.zoom * 100),
        "%"
      ] }),
      /* @__PURE__ */ _("button", { type: "button", className: "chd-btn", onClick: s, children: "Export" }),
      /* @__PURE__ */ _("button", { type: "button", className: "chd-btn", onClick: () => {
        var h;
        return (h = u.current) == null ? void 0 : h.click();
      }, children: "Import" }),
      /* @__PURE__ */ _(
        "input",
        {
          ref: u,
          type: "file",
          accept: "application/json,.json",
          className: "chd-file-input",
          onChange: (h) => {
            var m;
            c(((m = h.target.files) == null ? void 0 : m[0]) ?? null), h.target.value = "";
          }
        }
      )
    ] })
  ] });
}
function pv() {
  return /* @__PURE__ */ _(lv, { children: /* @__PURE__ */ U("div", { className: "chd-root", children: [
    /* @__PURE__ */ _(dv, {}),
    /* @__PURE__ */ U("div", { className: "chd-main", children: [
      /* @__PURE__ */ _(av, {}),
      /* @__PURE__ */ _(sv, {}),
      /* @__PURE__ */ _(cv, {})
    ] })
  ] }) });
}
function mv(e) {
  const t = Id(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ _(Kh, { theme: n.theme, children: /* @__PURE__ */ _(pv, {}) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  mv as default
};
