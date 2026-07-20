(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ancestry-root{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:13px;color:#2c2c2a;width:100%;background:#ffffff;box-sizing:border-box}.ancestry-root *,.ancestry-root *:before,.ancestry-root *:after{box-sizing:border-box}.ancestry-toolbar{display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap}.ancestry-toolbar-btn{font-size:12px;font-family:inherit;padding:4px 10px;border-radius:6px;border:1px solid #d3d1c7;background:#ffffff;color:#5f5e5a;cursor:pointer;display:flex;align-items:center;gap:4px;transition:background .12s,opacity .15s;line-height:1.4}.ancestry-toolbar-btn:hover:not(.ancestry-toolbar-btn--disabled){background:#f1efe8}.ancestry-toolbar-btn--disabled{opacity:.35;cursor:default}.ancestry-breadcrumb{display:flex;align-items:center;gap:4px;margin-bottom:8px;flex-wrap:wrap;min-height:26px}.ancestry-breadcrumb__sep{font-size:11px;color:#b4b2a9}.ancestry-breadcrumb__item{font-size:11px;font-family:inherit;padding:2px 8px;border-radius:6px;border:1px solid transparent;background:transparent;color:#5f5e5a;cursor:pointer;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:background .12s;line-height:1.4}.ancestry-breadcrumb__item:hover:not(:disabled){background:#f1efe8}.ancestry-breadcrumb__item--active{background:#e6f1fb;color:#185fa5;cursor:default}.ancestry-canvas{width:100%;background:#ffffff;border:1px solid #d3d1c7;border-radius:12px;position:relative;overflow:hidden;cursor:grab}.ancestry-canvas:active{cursor:grabbing}.ancestry-graph-layer{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;background:#ffffff;transition:opacity .15s ease-in-out}.ancestry-node{position:absolute;background:#ffffff;border-style:solid;border-radius:10px;padding:10px 10px 8px;text-align:center;-webkit-user-select:none;user-select:none;transition:transform .15s ease,border-color .15s ease,z-index 0s}.ancestry-node:not(.ancestry-node--center):hover{transform:translateY(-2px);z-index:10!important}.ancestry-node__thumb{width:52px;height:52px;object-fit:cover;border-radius:6px;display:block;margin:0 auto 6px}.ancestry-node__icon{width:52px;height:52px;border-radius:6px;border:1px solid;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;font-size:20px}.ancestry-node__label{font-size:11px;font-weight:500;color:#2c2c2a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.3}.ancestry-node__domain{font-size:10px;font-weight:500;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ancestry-node__definition{font-size:9px;color:#b4b2a9;margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ancestry-spinner-wrap{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.ancestry-spinner{width:26px;height:26px;border:2px solid #d3d1c7;border-top-color:#185fa5;border-radius:50%;animation:ancestry-spin .7s linear infinite}.ancestry-hover-bar{position:absolute;bottom:12px;left:12px;background:#ffffff;border:1px solid #d3d1c7;border-radius:8px;padding:5px 12px;font-size:11px;color:#5f5e5a;pointer-events:none;max-width:360px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ancestry-empty{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;pointer-events:none;color:#b4b2a9;text-align:center;padding:24px}.ancestry-empty__icon{font-size:28px}.ancestry-empty p{font-size:13px;margin:0}.ancestry-error{padding:24px;font-size:13px;color:#a32d2d;font-family:inherit;background:#ffffff}.ancestry-legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:10px}.ancestry-legend__item{display:flex;align-items:center;gap:6px;font-size:11px;color:#5f5e5a}.ancestry-legend__dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}@media (prefers-color-scheme: dark){.ancestry-root{background:#ffffff;color:#2c2c2a}.ancestry-toolbar-btn{background:#ffffff;border-color:#d3d1c7;color:#5f5e5a}.ancestry-toolbar-btn:hover:not(.ancestry-toolbar-btn--disabled){background:#f1efe8}.ancestry-breadcrumb__item{color:#5f5e5a}.ancestry-breadcrumb__item:hover:not(:disabled){background:#f1efe8}.ancestry-breadcrumb__item--active{background:#e6f1fb;color:#185fa5}.ancestry-breadcrumb__sep{color:#b4b2a9}.ancestry-canvas{background:#ffffff;border-color:#d3d1c7}.ancestry-node{background:#ffffff}.ancestry-node__label{color:#2c2c2a}.ancestry-node__definition{color:#b4b2a9}.ancestry-hover-bar{background:#ffffff;border-color:#d3d1c7;color:#5f5e5a}.ancestry-spinner{border-color:#d3d1c7;border-top-color:#7f77dd}.ancestry-empty{color:#2c2c2a}.ancestry-legend__item{color:#5f5e5a}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function bg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Y = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ig(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Lp = { exports: {} }, Xa = {}, Np = { exports: {} }, q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo = Symbol.for("react.element"), jg = Symbol.for("react.portal"), zg = Symbol.for("react.fragment"), Dg = Symbol.for("react.strict_mode"), Fg = Symbol.for("react.profiler"), Vg = Symbol.for("react.provider"), Ug = Symbol.for("react.context"), Bg = Symbol.for("react.forward_ref"), Wg = Symbol.for("react.suspense"), Hg = Symbol.for("react.memo"), Gg = Symbol.for("react.lazy"), Mf = Symbol.iterator;
function Kg(e) {
  return e === null || typeof e != "object" ? null : (e = Mf && e[Mf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Mp = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bp = Object.assign, Rp = {};
function ei(e, t, n) {
  this.props = e, this.context = t, this.refs = Rp, this.updater = n || Mp;
}
ei.prototype.isReactComponent = {};
ei.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ei.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ip() {
}
Ip.prototype = ei.prototype;
function Ys(e, t, n) {
  this.props = e, this.context = t, this.refs = Rp, this.updater = n || Mp;
}
var Xs = Ys.prototype = new Ip();
Xs.constructor = Ys;
bp(Xs, ei.prototype);
Xs.isPureReactComponent = !0;
var bf = Array.isArray, jp = Object.prototype.hasOwnProperty, qs = { current: null }, zp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dp(e, t, n) {
  var r, i = {}, o = null, a = null;
  if (t != null)
    for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      jp.call(t, r) && !zp.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
    i.children = n;
  else if (1 < s) {
    for (var c = Array(s), f = 0; f < s; f++)
      c[f] = arguments[f + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps, s)
      i[r] === void 0 && (i[r] = s[r]);
  return { $$typeof: fo, type: e, key: o, ref: a, props: i, _owner: qs.current };
}
function Jg(e, t) {
  return { $$typeof: fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fo;
}
function Qg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Rf = /\/+/g;
function yu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Qg("" + e.key) : t.toString(36);
}
function oa(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fo:
          case jg:
            a = !0;
        }
    }
  if (a)
    return a = e, i = i(a), e = r === "" ? "." + yu(a, 0) : r, bf(i) ? (n = "", e != null && (n = e.replace(Rf, "$&/") + "/"), oa(i, t, n, "", function(f) {
      return f;
    })) : i != null && (Zs(i) && (i = Jg(i, n + (!i.key || a && a.key === i.key ? "" : ("" + i.key).replace(Rf, "$&/") + "/") + e)), t.push(i)), 1;
  if (a = 0, r = r === "" ? "." : r + ":", bf(e))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var c = r + yu(o, s);
      a += oa(o, t, n, c, i);
    }
  else if (c = Kg(e), typeof c == "function")
    for (e = c.call(e), s = 0; !(o = e.next()).done; )
      o = o.value, c = r + yu(o, s++), a += oa(o, t, n, c, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function Io(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return oa(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Yg(e) {
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
var at = { current: null }, aa = { transition: null }, Xg = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: aa, ReactCurrentOwner: qs };
function Fp() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = { map: Io, forEach: function(e, t, n) {
  Io(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Io(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Io(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zs(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
q.Component = ei;
q.Fragment = zg;
q.Profiler = Fg;
q.PureComponent = Ys;
q.StrictMode = Dg;
q.Suspense = Wg;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xg;
q.act = Fp;
q.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bp({}, e.props), i = e.key, o = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, a = qs.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (c in t)
      jp.call(t, c) && !zp.hasOwnProperty(c) && (r[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1)
    r.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var f = 0; f < c; f++)
      s[f] = arguments[f + 2];
    r.children = s;
  }
  return { $$typeof: fo, type: e.type, key: i, ref: o, props: r, _owner: a };
};
q.createContext = function(e) {
  return e = { $$typeof: Ug, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vg, _context: e }, e.Consumer = e;
};
q.createElement = Dp;
q.createFactory = function(e) {
  var t = Dp.bind(null, e);
  return t.type = e, t;
};
q.createRef = function() {
  return { current: null };
};
q.forwardRef = function(e) {
  return { $$typeof: Bg, render: e };
};
q.isValidElement = Zs;
q.lazy = function(e) {
  return { $$typeof: Gg, _payload: { _status: -1, _result: e }, _init: Yg };
};
q.memo = function(e, t) {
  return { $$typeof: Hg, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function(e) {
  var t = aa.transition;
  aa.transition = {};
  try {
    e();
  } finally {
    aa.transition = t;
  }
};
q.unstable_act = Fp;
q.useCallback = function(e, t) {
  return at.current.useCallback(e, t);
};
q.useContext = function(e) {
  return at.current.useContext(e);
};
q.useDebugValue = function() {
};
q.useDeferredValue = function(e) {
  return at.current.useDeferredValue(e);
};
q.useEffect = function(e, t) {
  return at.current.useEffect(e, t);
};
q.useId = function() {
  return at.current.useId();
};
q.useImperativeHandle = function(e, t, n) {
  return at.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function(e, t) {
  return at.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function(e, t) {
  return at.current.useLayoutEffect(e, t);
};
q.useMemo = function(e, t) {
  return at.current.useMemo(e, t);
};
q.useReducer = function(e, t, n) {
  return at.current.useReducer(e, t, n);
};
q.useRef = function(e) {
  return at.current.useRef(e);
};
q.useState = function(e) {
  return at.current.useState(e);
};
q.useSyncExternalStore = function(e, t, n) {
  return at.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function() {
  return at.current.useTransition();
};
q.version = "18.3.1";
Np.exports = q;
var j = Np.exports;
const ec = /* @__PURE__ */ Rg(j), Hu = /* @__PURE__ */ bg({
  __proto__: null,
  default: ec
}, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qg = j, Zg = Symbol.for("react.element"), ev = Symbol.for("react.fragment"), tv = Object.prototype.hasOwnProperty, nv = qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vp(e, t, n) {
  var r, i = {}, o = null, a = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    tv.call(t, r) && !rv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Zg, type: e, key: o, ref: a, props: i, _owner: nv.current };
}
Xa.Fragment = ev;
Xa.jsx = Vp;
Xa.jsxs = Vp;
Lp.exports = Xa;
var Up = Lp.exports;
const G = Up.jsx, vt = Up.jsxs;
var gi = {}, iv = (
  /** @class */
  function() {
    function e() {
      this.array = !1, this.set = !1, this.readonly = !1, this.writeonly = !1;
    }
    return e;
  }()
), ov = (
  /** @class */
  function() {
    function e() {
      this.ctr = function() {
      }, this.beforeDeserialized = function() {
      }, this.onDeserialized = function() {
      }, this.properties = /* @__PURE__ */ new Map();
    }
    return e.prototype.getProperty = function(t) {
      var n = this.properties.get(t);
      return n || (n = new iv(), this.properties.set(t, n)), n;
    }, e;
  }()
), nn = /* @__PURE__ */ new Map();
function jt(e) {
  var t = nn.get(e);
  return t || (t = new ov(), nn.set(e, t)), t;
}
function Bp(e) {
  if (!e)
    return [];
  var t = Object.getPrototypeOf(e);
  return [e.constructor].concat(Bp(t));
}
function If(e) {
  var t = [];
  return nn.forEach(function(n, r) {
    var i = Object.getPrototypeOf(r.prototype).constructor;
    i === e && t.push([r, n]);
  }), t;
}
function tc(e, t) {
  var n = nn.get(e), r = [];
  t && n && n.discriminatorProperty && (r = r.concat(If(e)));
  for (var i; r.length !== 0 && !i; ) {
    var o = r.shift(), a = o[0], s = o[1];
    if (s.hasOwnProperty("discriminatorValue")) {
      if (t && n && s.discriminatorValue === t[n.discriminatorProperty]) {
        if (s.hasOwnProperty("discriminatorProperty"))
          return tc(a, t);
        i = a;
      }
    } else
      r = r.concat(If(a));
  }
  i || (i = e);
  var c = new Set(Bp(Object.create(i.prototype)));
  return Array.from(c).filter(function(f) {
    return nn.has(f);
  });
}
function av() {
  return function(e) {
    jt(e);
  };
}
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var jf;
(function(e) {
  (function(t) {
    var n = typeof Y == "object" ? Y : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = i(e);
    typeof n.Reflect > "u" ? n.Reflect = e : r = i(n.Reflect, r), t(r);
    function i(o, a) {
      return function(s, c) {
        typeof o[s] != "function" && Object.defineProperty(o, s, { configurable: !0, writable: !0, value: c }), a && a(s, c);
      };
    }
  })(function(t) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", i = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", o = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", a = typeof Object.create == "function", s = { __proto__: [] } instanceof Array, c = !a && !s, f = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: a ? function() {
        return fi(/* @__PURE__ */ Object.create(null));
      } : s ? function() {
        return fi({ __proto__: null });
      } : function() {
        return fi({});
      },
      has: c ? function(P, k) {
        return n.call(P, k);
      } : function(P, k) {
        return k in P;
      },
      get: c ? function(P, k) {
        return n.call(P, k) ? P[k] : void 0;
      } : function(P, k) {
        return P[k];
      }
    }, d = Object.getPrototypeOf(Function), p = typeof process == "object" && process["env"] && process["env"].REFLECT_METADATA_USE_MAP_POLYFILL === "true", u = !p && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ou(), x = !p && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : au(), E = !p && typeof WeakMap == "function" ? WeakMap : lu(), S = new E();
    function $(P, k, A, b) {
      if (H(A)) {
        if (!ve(P))
          throw new TypeError();
        if (!rt(k))
          throw new TypeError();
        return D(P, k);
      } else {
        if (!ve(P))
          throw new TypeError();
        if (!N(k))
          throw new TypeError();
        if (!N(b) && !H(b) && !Z(b))
          throw new TypeError();
        return Z(b) && (b = void 0), A = X(A), se(P, k, A, b);
      }
    }
    t("decorate", $);
    function g(P, k) {
      function A(b, V) {
        if (!N(b))
          throw new TypeError();
        if (!H(V) && !gn(V))
          throw new TypeError();
        je(P, k, b, V);
      }
      return A;
    }
    t("metadata", g);
    function h(P, k, A, b) {
      if (!N(A))
        throw new TypeError();
      return H(b) || (b = X(b)), je(P, k, A, b);
    }
    t("defineMetadata", h);
    function m(P, k, A) {
      if (!N(k))
        throw new TypeError();
      return H(A) || (A = X(A)), ut(P, k, A);
    }
    t("hasMetadata", m);
    function O(P, k, A) {
      if (!N(k))
        throw new TypeError();
      return H(A) || (A = X(A)), ht(P, k, A);
    }
    t("hasOwnMetadata", O);
    function w(P, k, A) {
      if (!N(k))
        throw new TypeError();
      return H(A) || (A = X(A)), ce(P, k, A);
    }
    t("getMetadata", w);
    function l(P, k, A) {
      if (!N(k))
        throw new TypeError();
      return H(A) || (A = X(A)), he(P, k, A);
    }
    t("getOwnMetadata", l);
    function v(P, k) {
      if (!N(P))
        throw new TypeError();
      return H(k) || (k = X(k)), M(P, k);
    }
    t("getMetadataKeys", v);
    function L(P, k) {
      if (!N(P))
        throw new TypeError();
      return H(k) || (k = X(k)), F(P, k);
    }
    t("getOwnMetadataKeys", L);
    function K(P, k, A) {
      if (!N(k))
        throw new TypeError();
      H(A) || (A = X(A));
      var b = Pe(
        k,
        A,
        /*Create*/
        !1
      );
      if (H(b) || !b.delete(P))
        return !1;
      if (b.size > 0)
        return !0;
      var V = S.get(k);
      return V.delete(A), V.size > 0 || S.delete(k), !0;
    }
    t("deleteMetadata", K);
    function D(P, k) {
      for (var A = P.length - 1; A >= 0; --A) {
        var b = P[A], V = b(k);
        if (!H(V) && !Z(V)) {
          if (!rt(V))
            throw new TypeError();
          k = V;
        }
      }
      return k;
    }
    function se(P, k, A, b) {
      for (var V = P.length - 1; V >= 0; --V) {
        var Ne = P[V], W = Ne(k, A, b);
        if (!H(W) && !Z(W)) {
          if (!N(W))
            throw new TypeError();
          b = W;
        }
      }
      return b;
    }
    function Pe(P, k, A) {
      var b = S.get(P);
      if (H(b)) {
        if (!A)
          return;
        b = new u(), S.set(P, b);
      }
      var V = b.get(k);
      if (H(V)) {
        if (!A)
          return;
        V = new u(), b.set(k, V);
      }
      return V;
    }
    function ut(P, k, A) {
      var b = ht(P, k, A);
      if (b)
        return !0;
      var V = ci(k);
      return Z(V) ? !1 : ut(P, V, A);
    }
    function ht(P, k, A) {
      var b = Pe(
        k,
        A,
        /*Create*/
        !1
      );
      return H(b) ? !1 : ge(b.has(P));
    }
    function ce(P, k, A) {
      var b = ht(P, k, A);
      if (b)
        return he(P, k, A);
      var V = ci(k);
      if (!Z(V))
        return ce(P, V, A);
    }
    function he(P, k, A) {
      var b = Pe(
        k,
        A,
        /*Create*/
        !1
      );
      if (!H(b))
        return b.get(P);
    }
    function je(P, k, A, b) {
      var V = Pe(
        A,
        b,
        /*Create*/
        !0
      );
      V.set(P, k);
    }
    function M(P, k) {
      var A = F(P, k), b = ci(P);
      if (b === null)
        return A;
      var V = M(b, k);
      if (V.length <= 0)
        return A;
      if (A.length <= 0)
        return V;
      for (var Ne = new x(), W = [], J = 0, U = A; J < U.length; J++) {
        var re = U[J], ee = Ne.has(re);
        ee || (Ne.add(re), W.push(re));
      }
      for (var mt = 0, di = V; mt < di.length; mt++) {
        var re = di[mt], ee = Ne.has(re);
        ee || (Ne.add(re), W.push(re));
      }
      return W;
    }
    function F(P, k) {
      var A = [], b = Pe(
        P,
        k,
        /*Create*/
        !1
      );
      if (H(b))
        return A;
      for (var V = b.keys(), Ne = _n(V), W = 0; ; ) {
        var J = ru(Ne);
        if (!J)
          return A.length = W, A;
        var U = si(J);
        try {
          A[W] = U;
        } catch (re) {
          try {
            iu(Ne);
          } finally {
            throw re;
          }
        }
        W++;
      }
    }
    function B(P) {
      if (P === null)
        return 1;
      switch (typeof P) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return P === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function H(P) {
      return P === void 0;
    }
    function Z(P) {
      return P === null;
    }
    function nt(P) {
      return typeof P == "symbol";
    }
    function N(P) {
      return typeof P == "object" ? P !== null : typeof P == "function";
    }
    function z(P, k) {
      switch (B(P)) {
        case 0:
          return P;
        case 1:
          return P;
        case 2:
          return P;
        case 3:
          return P;
        case 4:
          return P;
        case 5:
          return P;
      }
      var A = k === 3 ? "string" : k === 5 ? "number" : "default", b = vn(P, i);
      if (b !== void 0) {
        var V = b.call(P, A);
        if (N(V))
          throw new TypeError();
        return V;
      }
      return ne(P, A === "default" ? "number" : A);
    }
    function ne(P, k) {
      if (k === "string") {
        var A = P.toString;
        if (Be(A)) {
          var b = A.call(P);
          if (!N(b))
            return b;
        }
        var V = P.valueOf;
        if (Be(V)) {
          var b = V.call(P);
          if (!N(b))
            return b;
        }
      } else {
        var V = P.valueOf;
        if (Be(V)) {
          var b = V.call(P);
          if (!N(b))
            return b;
        }
        var Ne = P.toString;
        if (Be(Ne)) {
          var b = Ne.call(P);
          if (!N(b))
            return b;
        }
      }
      throw new TypeError();
    }
    function ge(P) {
      return !!P;
    }
    function Oe(P) {
      return "" + P;
    }
    function X(P) {
      var k = z(
        P,
        3
        /* String */
      );
      return nt(k) ? k : Oe(k);
    }
    function ve(P) {
      return Array.isArray ? Array.isArray(P) : P instanceof Object ? P instanceof Array : Object.prototype.toString.call(P) === "[object Array]";
    }
    function Be(P) {
      return typeof P == "function";
    }
    function rt(P) {
      return typeof P == "function";
    }
    function gn(P) {
      switch (B(P)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function vn(P, k) {
      var A = P[k];
      if (A != null) {
        if (!Be(A))
          throw new TypeError();
        return A;
      }
    }
    function _n(P) {
      var k = vn(P, o);
      if (!Be(k))
        throw new TypeError();
      var A = k.call(P);
      if (!N(A))
        throw new TypeError();
      return A;
    }
    function si(P) {
      return P.value;
    }
    function ru(P) {
      var k = P.next();
      return k.done ? !1 : k;
    }
    function iu(P) {
      var k = P.return;
      k && k.call(P);
    }
    function ci(P) {
      var k = Object.getPrototypeOf(P);
      if (typeof P != "function" || P === d || k !== d)
        return k;
      var A = P.prototype, b = A && Object.getPrototypeOf(A);
      if (b == null || b === Object.prototype)
        return k;
      var V = b.constructor;
      return typeof V != "function" || V === P ? k : V;
    }
    function ou() {
      var P = {}, k = [], A = (
        /** @class */
        function() {
          function W(J, U, re) {
            this._index = 0, this._keys = J, this._values = U, this._selector = re;
          }
          return W.prototype["@@iterator"] = function() {
            return this;
          }, W.prototype[o] = function() {
            return this;
          }, W.prototype.next = function() {
            var J = this._index;
            if (J >= 0 && J < this._keys.length) {
              var U = this._selector(this._keys[J], this._values[J]);
              return J + 1 >= this._keys.length ? (this._index = -1, this._keys = k, this._values = k) : this._index++, { value: U, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, W.prototype.throw = function(J) {
            throw this._index >= 0 && (this._index = -1, this._keys = k, this._values = k), J;
          }, W.prototype.return = function(J) {
            return this._index >= 0 && (this._index = -1, this._keys = k, this._values = k), { value: J, done: !0 };
          }, W;
        }()
      );
      return (
        /** @class */
        function() {
          function W() {
            this._keys = [], this._values = [], this._cacheKey = P, this._cacheIndex = -2;
          }
          return Object.defineProperty(W.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), W.prototype.has = function(J) {
            return this._find(
              J,
              /*insert*/
              !1
            ) >= 0;
          }, W.prototype.get = function(J) {
            var U = this._find(
              J,
              /*insert*/
              !1
            );
            return U >= 0 ? this._values[U] : void 0;
          }, W.prototype.set = function(J, U) {
            var re = this._find(
              J,
              /*insert*/
              !0
            );
            return this._values[re] = U, this;
          }, W.prototype.delete = function(J) {
            var U = this._find(
              J,
              /*insert*/
              !1
            );
            if (U >= 0) {
              for (var re = this._keys.length, ee = U + 1; ee < re; ee++)
                this._keys[ee - 1] = this._keys[ee], this._values[ee - 1] = this._values[ee];
              return this._keys.length--, this._values.length--, J === this._cacheKey && (this._cacheKey = P, this._cacheIndex = -2), !0;
            }
            return !1;
          }, W.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = P, this._cacheIndex = -2;
          }, W.prototype.keys = function() {
            return new A(this._keys, this._values, b);
          }, W.prototype.values = function() {
            return new A(this._keys, this._values, V);
          }, W.prototype.entries = function() {
            return new A(this._keys, this._values, Ne);
          }, W.prototype["@@iterator"] = function() {
            return this.entries();
          }, W.prototype[o] = function() {
            return this.entries();
          }, W.prototype._find = function(J, U) {
            return this._cacheKey !== J && (this._cacheIndex = this._keys.indexOf(this._cacheKey = J)), this._cacheIndex < 0 && U && (this._cacheIndex = this._keys.length, this._keys.push(J), this._values.push(void 0)), this._cacheIndex;
          }, W;
        }()
      );
      function b(W, J) {
        return W;
      }
      function V(W, J) {
        return J;
      }
      function Ne(W, J) {
        return [W, J];
      }
    }
    function au() {
      return (
        /** @class */
        function() {
          function P() {
            this._map = new u();
          }
          return Object.defineProperty(P.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), P.prototype.has = function(k) {
            return this._map.has(k);
          }, P.prototype.add = function(k) {
            return this._map.set(k, k), this;
          }, P.prototype.delete = function(k) {
            return this._map.delete(k);
          }, P.prototype.clear = function() {
            this._map.clear();
          }, P.prototype.keys = function() {
            return this._map.keys();
          }, P.prototype.values = function() {
            return this._map.values();
          }, P.prototype.entries = function() {
            return this._map.entries();
          }, P.prototype["@@iterator"] = function() {
            return this.keys();
          }, P.prototype[o] = function() {
            return this.keys();
          }, P;
        }()
      );
    }
    function lu() {
      var P = 16, k = f.create(), A = b();
      return (
        /** @class */
        function() {
          function U() {
            this._key = b();
          }
          return U.prototype.has = function(re) {
            var ee = V(
              re,
              /*create*/
              !1
            );
            return ee !== void 0 ? f.has(ee, this._key) : !1;
          }, U.prototype.get = function(re) {
            var ee = V(
              re,
              /*create*/
              !1
            );
            return ee !== void 0 ? f.get(ee, this._key) : void 0;
          }, U.prototype.set = function(re, ee) {
            var mt = V(
              re,
              /*create*/
              !0
            );
            return mt[this._key] = ee, this;
          }, U.prototype.delete = function(re) {
            var ee = V(
              re,
              /*create*/
              !1
            );
            return ee !== void 0 ? delete ee[this._key] : !1;
          }, U.prototype.clear = function() {
            this._key = b();
          }, U;
        }()
      );
      function b() {
        var U;
        do
          U = "@@WeakMap@@" + J();
        while (f.has(k, U));
        return k[U] = !0, U;
      }
      function V(U, re) {
        if (!n.call(U, A)) {
          if (!re)
            return;
          Object.defineProperty(U, A, { value: f.create() });
        }
        return U[A];
      }
      function Ne(U, re) {
        for (var ee = 0; ee < re; ++ee)
          U[ee] = Math.random() * 255 | 0;
        return U;
      }
      function W(U) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(U)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(U)) : Ne(new Uint8Array(U), U) : Ne(new Array(U), U);
      }
      function J() {
        var U = W(P);
        U[6] = U[6] & 79 | 64, U[8] = U[8] & 191 | 128;
        for (var re = "", ee = 0; ee < P; ++ee) {
          var mt = U[ee];
          (ee === 4 || ee === 6 || ee === 8) && (re += "-"), mt < 16 && (re += "0"), re += mt.toString(16).toLowerCase();
        }
        return re;
      }
    }
    function fi(P) {
      return P.__ = void 0, delete P.__, P;
    }
  });
})(jf || (jf = {}));
function lv(e) {
  return function(t, n) {
    var r = Reflect.getMetadata("design:type", t, n.toString()), i = jt(t.constructor).getProperty(n.toString());
    i.serializedName = e || n.toString(), i.array = r === Array, i.set = r === Set, !i.array && !i.set && !i.type && (i.type = r);
  };
}
function uv(e) {
  return function(t, n) {
    var r = jt(t.constructor).getProperty(n.toString());
    r.type = e;
  };
}
function sv(e) {
  return function(t, n) {
    var r = jt(t.constructor).getProperty(n.toString());
    r.type = e;
  };
}
function cv(e) {
  return function(t, n) {
    var r = jt(t.constructor).getProperty(n.toString());
    typeof e == "function" ? r.converter = new e() : r.converter = e;
  };
}
function fv() {
  return function(e, t) {
    var n = jt(e.constructor).getProperty(t.toString());
    n.readonly = !0;
  };
}
function dv() {
  return function(e, t) {
    var n = jt(e.constructor).getProperty(t.toString());
    n.writeonly = !0;
  };
}
function pv(e) {
  return function(t) {
    jt(t).discriminatorProperty = e;
  };
}
function yv(e) {
  return function(t) {
    jt(t).discriminatorValue = e;
  };
}
function hv() {
  return function(e, t) {
    var n = jt(e.constructor);
    n.ctr = e[t.toString()];
  };
}
function mv() {
  return function(e, t) {
    var n = jt(e.constructor);
    n.beforeDeserialized = e[t.toString()];
  };
}
function gv() {
  return function(e, t) {
    var n = jt(e.constructor);
    n.onDeserialized = e[t.toString()];
  };
}
var Wp = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.serialize = function(t) {
      return t.toString();
    }, e.prototype.deserialize = function(t) {
      return new Date(t);
    }, e;
  }()
), Hp = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = "json"), this._encoding = t;
    }
    return e.prototype.serialize = function(t) {
      return this._encoding === "json" ? t.toJSON() : t.toString(this._encoding);
    }, e.prototype.deserialize = function(t) {
      return this._encoding === "json" ? Buffer.from(t.data) : Buffer.from(t, this._encoding);
    }, e;
  }()
), po = /* @__PURE__ */ new Map();
typeof window > "u" && po.set(Buffer, new Hp());
po.set(Date, new Wp());
function Gu(e, t) {
  return e.constructor === Array ? e.map(function(n) {
    return zf(n, t);
  }) : zf(e, t);
}
function zf(e, t) {
  t === void 0 && (t = Object.getPrototypeOf(e).constructor);
  var n = tc(t);
  if (n.length === 0)
    return e;
  var r = n.map(function(o) {
    return nn.get(o);
  }).filter(function(o) {
    return !!o;
  }), i = {};
  return r.forEach(function(o) {
    o.properties.forEach(function(a, s) {
      if (!a.type)
        throw new Error("Cannot serialize property '" + s + "' without type!");
      var c = e[s];
      if (!(c == null || a.writeonly)) {
        if (a.set) {
          i[a.serializedName] = Df(Array.from(c || []), a);
          return;
        }
        if (a.array) {
          i[a.serializedName] = Df(c, a);
          return;
        }
        i[a.serializedName] = Gp(c, a);
      }
    });
  }), i;
}
function Df(e, t) {
  return e.map(function(n) {
    return Gp(n, t);
  });
}
function Gp(e, t) {
  var n = t.type === String || t.type === Boolean || t.type === Number, r = e, i = t.converter || po.get(t.type);
  if (i)
    return i.serialize(r);
  if (!n) {
    var o = nn.get(t.type);
    if (o)
      return r instanceof t.type ? Gu(r) : Gu(r, t.type);
  }
  return r;
}
function Kp(e, t, n) {
  return n === void 0 && (n = { runConstructor: !1 }), e && e.constructor === Array ? e.map(function(r) {
    return Ff(r, t, n);
  }) : Ff(e, t, n);
}
function Ff(e, t, n) {
  if (t === void 0 && (t = Object), !nn.has(t))
    return e;
  var r = e, i = tc(t, r), o = i[0], a = i.slice(1), s = Object.create(o.prototype), c = a.reverse().concat([o]).map(function(f) {
    return nn.get(f);
  }).filter(function(f) {
    return !!f;
  });
  return c.forEach(function(f) {
    n.runConstructor && f.ctr.call(s), f.beforeDeserialized.call(s), f.properties.forEach(function(d, p) {
      if (!d.type)
        throw new Error("Cannot deserialize property '" + p + "' without type!");
      var u = r[d.serializedName];
      if (!(u == null || d.readonly)) {
        if (d.array || d.set) {
          s[p] = vv(u, d), d.set && (s[p] = new Set(s[p]));
          return;
        }
        s[p] = Jp(u, d);
      }
    }), f.onDeserialized.call(s);
  }), s;
}
function vv(e, t, n) {
  return e.map(function(r) {
    return Jp(r, t);
  });
}
function Jp(e, t, n) {
  var r = t.type === String || t.type === Boolean || t.type === Number, i = e, o = t.converter || po.get(t.type);
  if (o)
    return o.deserialize(i);
  if (!r) {
    var a = nn.get(t.type);
    if (a)
      return Kp(i, t.type);
  }
  return i;
}
var Vf = (
  /** @class */
  function() {
    function e() {
    }
    return e.deserialize = function(t, n, r) {
      return Kp(t, n, r);
    }, e.parse = function(t, n, r) {
      return this.deserialize(JSON.parse(t), n, r);
    }, e.serialize = function(t) {
      return Gu(t);
    }, e.stringify = function(t) {
      return JSON.stringify(this.serialize(t));
    }, e;
  }()
);
const _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BeforeDeserialized: mv,
  BufferConverter: Hp,
  DateConverter: Wp,
  JSON: Vf,
  JsonConstructor: hv,
  JsonConverter: cv,
  JsonDiscriminatorProperty: pv,
  JsonDiscriminatorValue: yv,
  JsonElementType: sv,
  JsonObject: av,
  JsonProperty: lv,
  JsonReadonly: fv,
  JsonType: uv,
  JsonWriteonly: dv,
  OnDeserialized: gv,
  TaJson: Vf,
  propertyConverters: po
}, Symbol.toStringTag, { value: "Module" })), yo = /* @__PURE__ */ Ig(_v);
var ho = {}, mo = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.LoadOption = void 0, function(t) {
    t[t.None = 0] = "None", t[t.Default = 1] = "Default", t[t.Custom = 2] = "Custom", t[t.All = 3] = "All";
  }(e.LoadOption || (e.LoadOption = {}));
})(mo);
var nc = Y && Y.__decorate || function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, rc = Y && Y.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, nr;
Object.defineProperty(ho, "__esModule", { value: !0 });
var Ku = ho.CultureLoadOption = void 0;
const wa = yo, qn = mo;
let zn = nr = class {
  constructor(t) {
    var n;
    this.loadOption = qn.LoadOption.None, this.cultures = [], t != null && (t instanceof nr ? (this.cultures = [...t.cultures], this.loadOption = t.loadOption) : t instanceof Array ? (this.cultures = [...t], this.loadOption = this.cultures.length ? qn.LoadOption.Custom : qn.LoadOption.None) : typeof t == "object" ? (this.cultures = [...(n = t.cultures) !== null && n !== void 0 ? n : []], this.loadOption = t.loadOption != null ? t.loadOption : qn.LoadOption.Custom) : this.loadOption = t);
  }
  deepClone() {
    return new nr({ cultures: [...this.cultures], loadOption: this.loadOption });
  }
};
zn.None = new nr(qn.LoadOption.None);
zn.Default = new nr(qn.LoadOption.Default);
zn.All = new nr(qn.LoadOption.All);
nc([
  (0, wa.JsonProperty)("load_option"),
  rc("design:type", Number)
], zn.prototype, "loadOption", void 0);
nc([
  (0, wa.JsonProperty)("cultures"),
  (0, wa.JsonElementType)(String),
  rc("design:type", Array)
], zn.prototype, "cultures", void 0);
zn = nr = nc([
  (0, wa.JsonObject)(),
  rc("design:paramtypes", [Object])
], zn);
Ku = ho.CultureLoadOption = zn;
var vi = {}, go = {}, Qp = {}, ic = { exports: {} };
const Yp = () => {
  const e = Error.prepareStackTrace;
  Error.prepareStackTrace = (n, r) => r;
  const t = new Error().stack.slice(1);
  return Error.prepareStackTrace = e, t;
};
ic.exports = Yp;
ic.exports.default = Yp;
var wv = ic.exports, qa = {};
Object.defineProperty(qa, "__esModule", { value: !0 });
qa.inferLabel = void 0;
const Sv = () => {
};
qa.inferLabel = Sv;
var hu = {}, Ju = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function r(l) {
    return n.includes(l);
  }
  const i = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    ...n
  ];
  function o(l) {
    return i.includes(l);
  }
  const a = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol"
  ];
  function s(l) {
    return a.includes(l);
  }
  function c(l) {
    return (v) => typeof v === l;
  }
  const { toString: f } = Object.prototype, d = (l) => {
    const v = f.call(l).slice(8, -1);
    if (/HTML\w+Element/.test(v) && u.domElement(l))
      return "HTMLElement";
    if (o(v))
      return v;
  }, p = (l) => (v) => d(v) === l;
  function u(l) {
    if (l === null)
      return "null";
    switch (typeof l) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (u.observable(l))
      return "Observable";
    if (u.array(l))
      return "Array";
    if (u.buffer(l))
      return "Buffer";
    const v = d(l);
    if (v)
      return v;
    if (l instanceof String || l instanceof Boolean || l instanceof Number)
      throw new TypeError("Please don't use object wrappers for primitive types");
    return "Object";
  }
  u.undefined = c("undefined"), u.string = c("string");
  const x = c("number");
  u.number = (l) => x(l) && !u.nan(l), u.bigint = c("bigint"), u.function_ = c("function"), u.null_ = (l) => l === null, u.class_ = (l) => u.function_(l) && l.toString().startsWith("class "), u.boolean = (l) => l === !0 || l === !1, u.symbol = c("symbol"), u.numericString = (l) => u.string(l) && !u.emptyStringOrWhitespace(l) && !Number.isNaN(Number(l)), u.array = (l, v) => Array.isArray(l) ? u.function_(v) ? l.every(v) : !0 : !1, u.buffer = (l) => {
    var v, L, K, D;
    return (D = (K = (L = (v = l) === null || v === void 0 ? void 0 : v.constructor) === null || L === void 0 ? void 0 : L.isBuffer) === null || K === void 0 ? void 0 : K.call(L, l)) !== null && D !== void 0 ? D : !1;
  }, u.blob = (l) => p("Blob")(l), u.nullOrUndefined = (l) => u.null_(l) || u.undefined(l), u.object = (l) => !u.null_(l) && (typeof l == "object" || u.function_(l)), u.iterable = (l) => {
    var v;
    return u.function_((v = l) === null || v === void 0 ? void 0 : v[Symbol.iterator]);
  }, u.asyncIterable = (l) => {
    var v;
    return u.function_((v = l) === null || v === void 0 ? void 0 : v[Symbol.asyncIterator]);
  }, u.generator = (l) => {
    var v, L;
    return u.iterable(l) && u.function_((v = l) === null || v === void 0 ? void 0 : v.next) && u.function_((L = l) === null || L === void 0 ? void 0 : L.throw);
  }, u.asyncGenerator = (l) => u.asyncIterable(l) && u.function_(l.next) && u.function_(l.throw), u.nativePromise = (l) => p("Promise")(l);
  const E = (l) => {
    var v, L;
    return u.function_((v = l) === null || v === void 0 ? void 0 : v.then) && u.function_((L = l) === null || L === void 0 ? void 0 : L.catch);
  };
  u.promise = (l) => u.nativePromise(l) || E(l), u.generatorFunction = p("GeneratorFunction"), u.asyncGeneratorFunction = (l) => d(l) === "AsyncGeneratorFunction", u.asyncFunction = (l) => d(l) === "AsyncFunction", u.boundFunction = (l) => u.function_(l) && !l.hasOwnProperty("prototype"), u.regExp = p("RegExp"), u.date = p("Date"), u.error = p("Error"), u.map = (l) => p("Map")(l), u.set = (l) => p("Set")(l), u.weakMap = (l) => p("WeakMap")(l), u.weakSet = (l) => p("WeakSet")(l), u.int8Array = p("Int8Array"), u.uint8Array = p("Uint8Array"), u.uint8ClampedArray = p("Uint8ClampedArray"), u.int16Array = p("Int16Array"), u.uint16Array = p("Uint16Array"), u.int32Array = p("Int32Array"), u.uint32Array = p("Uint32Array"), u.float32Array = p("Float32Array"), u.float64Array = p("Float64Array"), u.bigInt64Array = p("BigInt64Array"), u.bigUint64Array = p("BigUint64Array"), u.arrayBuffer = p("ArrayBuffer"), u.sharedArrayBuffer = p("SharedArrayBuffer"), u.dataView = p("DataView"), u.enumCase = (l, v) => Object.values(v).includes(l), u.directInstanceOf = (l, v) => Object.getPrototypeOf(l) === v.prototype, u.urlInstance = (l) => p("URL")(l), u.urlString = (l) => {
    if (!u.string(l))
      return !1;
    try {
      return new URL(l), !0;
    } catch {
      return !1;
    }
  }, u.truthy = (l) => !!l, u.falsy = (l) => !l, u.nan = (l) => Number.isNaN(l), u.primitive = (l) => u.null_(l) || s(typeof l), u.integer = (l) => Number.isInteger(l), u.safeInteger = (l) => Number.isSafeInteger(l), u.plainObject = (l) => {
    if (f.call(l) !== "[object Object]")
      return !1;
    const v = Object.getPrototypeOf(l);
    return v === null || v === Object.getPrototypeOf({});
  }, u.typedArray = (l) => r(d(l));
  const S = (l) => u.safeInteger(l) && l >= 0;
  u.arrayLike = (l) => !u.nullOrUndefined(l) && !u.function_(l) && S(l.length), u.inRange = (l, v) => {
    if (u.number(v))
      return l >= Math.min(0, v) && l <= Math.max(v, 0);
    if (u.array(v) && v.length === 2)
      return l >= Math.min(...v) && l <= Math.max(...v);
    throw new TypeError(`Invalid range: ${JSON.stringify(v)}`);
  };
  const $ = 1, g = [
    "innerHTML",
    "ownerDocument",
    "style",
    "attributes",
    "nodeValue"
  ];
  u.domElement = (l) => u.object(l) && l.nodeType === $ && u.string(l.nodeName) && !u.plainObject(l) && g.every((v) => v in l), u.observable = (l) => {
    var v, L, K, D;
    return l ? l === ((L = (v = l)[Symbol.observable]) === null || L === void 0 ? void 0 : L.call(v)) || l === ((D = (K = l)["@@observable"]) === null || D === void 0 ? void 0 : D.call(K)) : !1;
  }, u.nodeStream = (l) => u.object(l) && u.function_(l.pipe) && !u.observable(l), u.infinite = (l) => l === 1 / 0 || l === -1 / 0;
  const h = (l) => (v) => u.integer(v) && Math.abs(v % 2) === l;
  u.evenInteger = h(0), u.oddInteger = h(1), u.emptyArray = (l) => u.array(l) && l.length === 0, u.nonEmptyArray = (l) => u.array(l) && l.length > 0, u.emptyString = (l) => u.string(l) && l.length === 0;
  const m = (l) => u.string(l) && !/\S/.test(l);
  u.emptyStringOrWhitespace = (l) => u.emptyString(l) || m(l), u.nonEmptyString = (l) => u.string(l) && l.length > 0, u.nonEmptyStringAndNotWhitespace = (l) => u.string(l) && !u.emptyStringOrWhitespace(l), u.emptyObject = (l) => u.object(l) && !u.map(l) && !u.set(l) && Object.keys(l).length === 0, u.nonEmptyObject = (l) => u.object(l) && !u.map(l) && !u.set(l) && Object.keys(l).length > 0, u.emptySet = (l) => u.set(l) && l.size === 0, u.nonEmptySet = (l) => u.set(l) && l.size > 0, u.emptyMap = (l) => u.map(l) && l.size === 0, u.nonEmptyMap = (l) => u.map(l) && l.size > 0, u.propertyKey = (l) => u.any([u.string, u.number, u.symbol], l), u.formData = (l) => p("FormData")(l), u.urlSearchParams = (l) => p("URLSearchParams")(l);
  const O = (l, v, L) => {
    if (!u.function_(v))
      throw new TypeError(`Invalid predicate: ${JSON.stringify(v)}`);
    if (L.length === 0)
      throw new TypeError("Invalid number of values");
    return l.call(L, v);
  };
  u.any = (l, ...v) => (u.array(l) ? l : [l]).some((K) => O(Array.prototype.some, K, v)), u.all = (l, ...v) => O(Array.prototype.every, l, v);
  const w = (l, v, L, K = {}) => {
    if (!l) {
      const { multipleValues: D } = K, se = D ? `received values of types ${[
        ...new Set(L.map((Pe) => `\`${u(Pe)}\``))
      ].join(", ")}` : `received value of type \`${u(L)}\``;
      throw new TypeError(`Expected value which is \`${v}\`, ${se}.`);
    }
  };
  t.assert = {
    // Unknowns.
    undefined: (l) => w(u.undefined(l), "undefined", l),
    string: (l) => w(u.string(l), "string", l),
    number: (l) => w(u.number(l), "number", l),
    bigint: (l) => w(u.bigint(l), "bigint", l),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (l) => w(u.function_(l), "Function", l),
    null_: (l) => w(u.null_(l), "null", l),
    class_: (l) => w(u.class_(l), "Class", l),
    boolean: (l) => w(u.boolean(l), "boolean", l),
    symbol: (l) => w(u.symbol(l), "symbol", l),
    numericString: (l) => w(u.numericString(l), "string with a number", l),
    array: (l, v) => {
      w(u.array(l), "Array", l), v && l.forEach(v);
    },
    buffer: (l) => w(u.buffer(l), "Buffer", l),
    blob: (l) => w(u.blob(l), "Blob", l),
    nullOrUndefined: (l) => w(u.nullOrUndefined(l), "null or undefined", l),
    object: (l) => w(u.object(l), "Object", l),
    iterable: (l) => w(u.iterable(l), "Iterable", l),
    asyncIterable: (l) => w(u.asyncIterable(l), "AsyncIterable", l),
    generator: (l) => w(u.generator(l), "Generator", l),
    asyncGenerator: (l) => w(u.asyncGenerator(l), "AsyncGenerator", l),
    nativePromise: (l) => w(u.nativePromise(l), "native Promise", l),
    promise: (l) => w(u.promise(l), "Promise", l),
    generatorFunction: (l) => w(u.generatorFunction(l), "GeneratorFunction", l),
    asyncGeneratorFunction: (l) => w(u.asyncGeneratorFunction(l), "AsyncGeneratorFunction", l),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (l) => w(u.asyncFunction(l), "AsyncFunction", l),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (l) => w(u.boundFunction(l), "Function", l),
    regExp: (l) => w(u.regExp(l), "RegExp", l),
    date: (l) => w(u.date(l), "Date", l),
    error: (l) => w(u.error(l), "Error", l),
    map: (l) => w(u.map(l), "Map", l),
    set: (l) => w(u.set(l), "Set", l),
    weakMap: (l) => w(u.weakMap(l), "WeakMap", l),
    weakSet: (l) => w(u.weakSet(l), "WeakSet", l),
    int8Array: (l) => w(u.int8Array(l), "Int8Array", l),
    uint8Array: (l) => w(u.uint8Array(l), "Uint8Array", l),
    uint8ClampedArray: (l) => w(u.uint8ClampedArray(l), "Uint8ClampedArray", l),
    int16Array: (l) => w(u.int16Array(l), "Int16Array", l),
    uint16Array: (l) => w(u.uint16Array(l), "Uint16Array", l),
    int32Array: (l) => w(u.int32Array(l), "Int32Array", l),
    uint32Array: (l) => w(u.uint32Array(l), "Uint32Array", l),
    float32Array: (l) => w(u.float32Array(l), "Float32Array", l),
    float64Array: (l) => w(u.float64Array(l), "Float64Array", l),
    bigInt64Array: (l) => w(u.bigInt64Array(l), "BigInt64Array", l),
    bigUint64Array: (l) => w(u.bigUint64Array(l), "BigUint64Array", l),
    arrayBuffer: (l) => w(u.arrayBuffer(l), "ArrayBuffer", l),
    sharedArrayBuffer: (l) => w(u.sharedArrayBuffer(l), "SharedArrayBuffer", l),
    dataView: (l) => w(u.dataView(l), "DataView", l),
    enumCase: (l, v) => w(u.enumCase(l, v), "EnumCase", l),
    urlInstance: (l) => w(u.urlInstance(l), "URL", l),
    urlString: (l) => w(u.urlString(l), "string with a URL", l),
    truthy: (l) => w(u.truthy(l), "truthy", l),
    falsy: (l) => w(u.falsy(l), "falsy", l),
    nan: (l) => w(u.nan(l), "NaN", l),
    primitive: (l) => w(u.primitive(l), "primitive", l),
    integer: (l) => w(u.integer(l), "integer", l),
    safeInteger: (l) => w(u.safeInteger(l), "integer", l),
    plainObject: (l) => w(u.plainObject(l), "plain object", l),
    typedArray: (l) => w(u.typedArray(l), "TypedArray", l),
    arrayLike: (l) => w(u.arrayLike(l), "array-like", l),
    domElement: (l) => w(u.domElement(l), "HTMLElement", l),
    observable: (l) => w(u.observable(l), "Observable", l),
    nodeStream: (l) => w(u.nodeStream(l), "Node.js Stream", l),
    infinite: (l) => w(u.infinite(l), "infinite number", l),
    emptyArray: (l) => w(u.emptyArray(l), "empty array", l),
    nonEmptyArray: (l) => w(u.nonEmptyArray(l), "non-empty array", l),
    emptyString: (l) => w(u.emptyString(l), "empty string", l),
    emptyStringOrWhitespace: (l) => w(u.emptyStringOrWhitespace(l), "empty string or whitespace", l),
    nonEmptyString: (l) => w(u.nonEmptyString(l), "non-empty string", l),
    nonEmptyStringAndNotWhitespace: (l) => w(u.nonEmptyStringAndNotWhitespace(l), "non-empty string and not whitespace", l),
    emptyObject: (l) => w(u.emptyObject(l), "empty object", l),
    nonEmptyObject: (l) => w(u.nonEmptyObject(l), "non-empty object", l),
    emptySet: (l) => w(u.emptySet(l), "empty set", l),
    nonEmptySet: (l) => w(u.nonEmptySet(l), "non-empty set", l),
    emptyMap: (l) => w(u.emptyMap(l), "empty map", l),
    nonEmptyMap: (l) => w(u.nonEmptyMap(l), "non-empty map", l),
    propertyKey: (l) => w(u.propertyKey(l), "PropertyKey", l),
    formData: (l) => w(u.formData(l), "FormData", l),
    urlSearchParams: (l) => w(u.urlSearchParams(l), "URLSearchParams", l),
    // Numbers.
    evenInteger: (l) => w(u.evenInteger(l), "even integer", l),
    oddInteger: (l) => w(u.oddInteger(l), "odd integer", l),
    // Two arguments.
    directInstanceOf: (l, v) => w(u.directInstanceOf(l, v), "T", l),
    inRange: (l, v) => w(u.inRange(l, v), "in range", l),
    // Variadic functions.
    any: (l, ...v) => w(u.any(l, ...v), "predicate returns truthy for any value", v, { multipleValues: !0 }),
    all: (l, ...v) => w(u.all(l, ...v), "predicate returns truthy for all values", v, { multipleValues: !0 })
  }, Object.defineProperties(u, {
    class: {
      value: u.class_
    },
    function: {
      value: u.function_
    },
    null: {
      value: u.null_
    }
  }), Object.defineProperties(t.assert, {
    class: {
      value: t.assert.class_
    },
    function: {
      value: t.assert.function_
    },
    null: {
      value: t.assert.null_
    }
  }), t.default = u, e.exports = u, e.exports.default = u, e.exports.assert = t.assert;
})(Ju, Ju.exports);
var ti = Ju.exports, ni = {}, Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.generateStackTrace = void 0;
const Ev = () => new RangeError("INTERNAL_OW_ERROR").stack;
Za.generateStackTrace = Ev;
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.ArgumentError = void 0;
const xv = Za, Pv = (e, t) => `${e.name}: ${e.message}
${t}`;
class Ov extends Error {
  constructor(t, n, r = /* @__PURE__ */ new Map()) {
    super(t), Object.defineProperty(this, "validationErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "ArgumentError", Error.captureStackTrace ? Error.captureStackTrace(this, n) : this.stack = Pv(this, (0, xv.generateStackTrace)()), this.validationErrors = r;
  }
}
ni.ArgumentError = Ov;
var _i = {}, oc = {};
Object.defineProperty(oc, "__esModule", { value: !0 });
oc.default = () => Math.random().toString(16).slice(2);
var Uf;
function $v() {
  if (Uf)
    return _i;
  Uf = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.not = void 0;
  const e = oc, t = Ve(), n = (r) => {
    const i = r.addValidator;
    return r.addValidator = (o) => {
      const { validator: a, message: s, negatedMessage: c } = o, f = (0, e.default)();
      return o.message = (d, p) => c ? c(d, p) : s(d, f).replace(/ to /, "$&not ").replace(f, p), o.validator = (d) => !a(d), r[t.validatorSymbol].push(o), r.addValidator = i, r;
    }, r;
  };
  return _i.not = n, _i;
}
var ri = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isPredicate = e.testSymbol = void 0, e.testSymbol = Symbol("test");
  const t = (n) => !!n[e.testSymbol];
  e.isPredicate = t;
})(ri);
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.generateArgumentErrorMessage = void 0;
const kv = (e, t = !1) => {
  const n = [], r = [...e.entries()], i = r.some(([, o]) => o.size !== 1);
  if (r.length === 1) {
    const [, o] = r[0];
    if (!t && o.size === 1) {
      const [a] = o;
      return a;
    }
    for (const a of o)
      n.push(`${t ? "  - " : ""}${a}`);
    return n.join(`
`);
  }
  if (!i)
    return r.map(([, [o]]) => `  - ${o}`).join(`
`);
  for (const [o, a] of r) {
    n.push(`Errors from the "${o}" predicate:`);
    for (const s of a)
      n.push(`  - ${s}`);
  }
  return n.join(`
`);
};
vo.generateArgumentErrorMessage = kv;
var Bf;
function Ve() {
  return Bf || (Bf = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Predicate = e.validatorSymbol = void 0;
    const t = ti, n = ni, r = $v(), i = ri, o = vo;
    e.validatorSymbol = Symbol("validators");
    class a {
      constructor(c, f = {}) {
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: c
        }), Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: f
        }), Object.defineProperty(this, "context", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            validators: []
          }
        }), this.context = {
          ...this.context,
          ...this.options
        };
        const d = this.type.charAt(0).toLowerCase() + this.type.slice(1);
        this.addValidator({
          message: (p, u) => `Expected ${(u == null ? void 0 : u.slice(this.type.length + 1)) || "argument"} to be of type \`${this.type}\` but received type \`${(0, t.default)(p)}\``,
          validator: (p) => t.default[d](p)
        });
      }
      /**
      @hidden
      */
      [i.testSymbol](c, f, d, p) {
        const u = /* @__PURE__ */ new Map();
        for (const { validator: x, message: E } of this.context.validators) {
          if (this.options.optional === !0 && c === void 0)
            continue;
          let S;
          try {
            S = x(c);
          } catch (l) {
            S = l;
          }
          if (S === !0)
            continue;
          const $ = t.default.function_(d) ? d() : d, g = $ && p ? `\`${$}\`` : $, h = g ? `${this.type} ${g}` : this.type, m = $ || this.type, O = u.get(m), w = E(c, h, S);
          O ? O.add(w) : u.set(m, /* @__PURE__ */ new Set([w]));
        }
        if (u.size > 0) {
          const x = (0, o.generateArgumentErrorMessage)(u);
          throw new n.ArgumentError(x, f, u);
        }
      }
      /**
      @hidden
      */
      get [e.validatorSymbol]() {
        return this.context.validators;
      }
      /**
      Invert the following validators.
      */
      get not() {
        return (0, r.not)(this);
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return an object containing a `validator` and `message`. If the `validator` is `false`, the validation fails and the `message` will be used as error message. If the `message` is a function, the function is invoked with the `label` as argument to let you further customize the error message.
      
      		    @param customValidator - Custom validation function.
      		    */
      validate(c) {
        return this.addValidator({
          message: (f, d, p) => typeof p == "string" ? `(${d}) ${p}` : p(d),
          validator: (f) => {
            const { message: d, validator: p } = c(f);
            return p ? !0 : d;
          }
        });
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return `true` if the value passes the function. If the function either returns `false` or a string, the function fails and the string will be used as error message.
      
      		    @param validator - Validation function.
      		    */
      is(c) {
        return this.addValidator({
          message: (f, d, p) => p ? `(${d}) ${p}` : `Expected ${d} \`${f}\` to pass custom validation function`,
          validator: c
        });
      }
      /**
      		    Provide a new error message to be thrown when the validation fails.
      
      		    @param newMessage - Either a string containing the new message or a function returning the new message.
      
      		    @example
      		    ```
      		    ow('🌈', 'unicorn', ow.string.equals('🦄').message('Expected unicorn, got rainbow'));
      		    //=> ArgumentError: Expected unicorn, got rainbow
      		    ```
      
      		    @example
      		    ```
      		    ow('🌈', ow.string.minLength(5).message((value, label) => `Expected ${label}, to have a minimum length of 5, got \`${value}\``));
      		    //=> ArgumentError: Expected string, to be have a minimum length of 5, got `🌈`
      		    ```
      		    */
      message(c) {
        const { validators: f } = this.context;
        return f[f.length - 1].message = (d, p) => typeof c == "function" ? c(d, p) : c, this;
      }
      /**
      		    Register a new validator.
      
      		    @param validator - Validator to register.
      		    */
      addValidator(c) {
        return this.context.validators.push(c), this;
      }
    }
    e.Predicate = a;
  }(hu)), hu;
}
var ac = {}, Sa = {}, el = {}, Cv = function(e) {
  return !isNaN(Date.parse(e));
};
Object.defineProperty(el, "__esModule", { value: !0 });
el.StringPredicate = void 0;
const Av = ti, Tv = Cv, Lv = Ve();
class Nv extends Lv.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("string", t);
  }
  /**
      Test a string to have a specific length.
  
      @param length - The length of the string.
      */
  length(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have length \`${t}\`, got \`${n}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test a string to have a minimum length.
  
      @param length - The minimum length of the string.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum length of \`${t}\`, got \`${n}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum length of \`${t - 1}\`, got \`${n}\``
    });
  }
  /**
      Test a string to have a maximum length.
  
      @param length - The maximum length of the string.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum length of \`${t}\`, got \`${n}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum length of \`${t + 1}\`, got \`${n}\``
    });
  }
  /**
      Test a string against a regular expression.
  
      @param regex - The regular expression to match the value with.
      */
  matches(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to match \`${t}\`, got \`${n}\``,
      validator: (n) => t.test(n)
    });
  }
  /**
      Test a string to start with a specific value.
  
      @param searchString - The value that should be the start of the string.
      */
  startsWith(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to start with \`${t}\`, got \`${n}\``,
      validator: (n) => n.startsWith(t)
    });
  }
  /**
      Test a string to end with a specific value.
  
      @param searchString - The value that should be the end of the string.
      */
  endsWith(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to end with \`${t}\`, got \`${n}\``,
      validator: (n) => n.endsWith(t)
    });
  }
  /**
      Test a string to include a specific value.
  
      @param searchString - The value that should be included in the string.
      */
  includes(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to include \`${t}\`, got \`${n}\``,
      validator: (n) => n.includes(t)
    });
  }
  /**
      Test if the string is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(t) {
    return this.addValidator({
      message: (n, r) => {
        let i = JSON.stringify(t);
        if (t.length > 10) {
          const o = t.length - 10;
          i = JSON.stringify(t.slice(0, 10)).replace(/]$/, `,…+${o} more]`);
        }
        return `Expected ${r} to be one of \`${i}\`, got \`${n}\``;
      },
      validator: (n) => t.includes(n)
    });
  }
  /**
  Test a string to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${t}\``,
      validator: (t) => t === ""
    });
  }
  /**
  Test a string to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t !== ""
    });
  }
  /**
      Test a string to be equal to a specified string.
  
      @param expected - Expected value to match.
      */
  equals(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be equal to \`${t}\`, got \`${n}\``,
      validator: (n) => n === t
    });
  }
  /**
  Test a string to be alphanumeric.
  */
  get alphanumeric() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be alphanumeric, got \`${t}\``,
      validator: (t) => /^[a-z\d]+$/i.test(t)
    });
  }
  /**
  Test a string to be alphabetical.
  */
  get alphabetical() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be alphabetical, got \`${t}\``,
      validator: (t) => /^[a-z]+$/gi.test(t)
    });
  }
  /**
  Test a string to be numeric.
  */
  get numeric() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be numeric, got \`${t}\``,
      validator: (t) => /^[+-]?\d+$/i.test(t)
    });
  }
  /**
  Test a string to be a valid date.
  */
  get date() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a date, got \`${t}\``,
      validator: Tv
    });
  }
  /**
  Test a non-empty string to be lowercase. Matching both alphabetical & numbers.
  */
  get lowercase() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be lowercase, got \`${t}\``,
      validator: (t) => t.trim() !== "" && t === t.toLowerCase()
    });
  }
  /**
  Test a non-empty string to be uppercase. Matching both alphabetical & numbers.
  */
  get uppercase() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be uppercase, got \`${t}\``,
      validator: (t) => t.trim() !== "" && t === t.toUpperCase()
    });
  }
  /**
  Test a string to be a valid URL.
  */
  get url() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a URL, got \`${t}\``,
      validator: Av.default.urlString
    });
  }
}
el.StringPredicate = Nv;
var tl = {};
Object.defineProperty(tl, "__esModule", { value: !0 });
tl.NumberPredicate = void 0;
const gr = ti, Mv = Ve();
class bv extends Mv.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("number", t);
  }
  /**
      Test a number to be in a specified range.
  
      @param start - Start of the range.
      @param end - End of the range.
      */
  inRange(t, n) {
    return this.addValidator({
      message: (r, i) => `Expected ${i} to be in range [${t}..${n}], got ${r}`,
      validator: (r) => gr.default.inRange(r, [t, n])
    });
  }
  /**
      Test a number to be greater than the provided value.
  
      @param number - Minimum value.
      */
  greaterThan(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be greater than ${t}, got ${n}`,
      validator: (n) => n > t
    });
  }
  /**
      Test a number to be greater than or equal to the provided value.
  
      @param number - Minimum value.
      */
  greaterThanOrEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be greater than or equal to ${t}, got ${n}`,
      validator: (n) => n >= t
    });
  }
  /**
      Test a number to be less than the provided value.
  
      @param number - Maximum value.
      */
  lessThan(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be less than ${t}, got ${n}`,
      validator: (n) => n < t
    });
  }
  /**
      Test a number to be less than or equal to the provided value.
  
      @param number - Minimum value.
      */
  lessThanOrEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be less than or equal to ${t}, got ${n}`,
      validator: (n) => n <= t
    });
  }
  /**
      Test a number to be equal to a specified number.
  
      @param expected - Expected value to match.
      */
  equal(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be equal to ${t}, got ${n}`,
      validator: (n) => n === t
    });
  }
  /**
      Test if a number is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(t) {
    return this.addValidator({
      message: (n, r) => {
        let i = JSON.stringify(t);
        if (t.length > 10) {
          const o = t.length - 10;
          i = JSON.stringify(t.slice(0, 10)).replace(/]$/, `,…+${o} more]`);
        }
        return `Expected ${r} to be one of \`${i}\`, got ${n}`;
      },
      validator: (n) => t.includes(n)
    });
  }
  /**
  Test a number to be an integer.
  */
  get integer() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be an integer, got ${t}`,
      validator: (t) => gr.default.integer(t)
    });
  }
  /**
  Test a number to be finite.
  */
  get finite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be finite, got ${t}`,
      validator: (t) => !gr.default.infinite(t)
    });
  }
  /**
  Test a number to be infinite.
  */
  get infinite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be infinite, got ${t}`,
      validator: (t) => gr.default.infinite(t)
    });
  }
  /**
  Test a number to be positive.
  */
  get positive() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be positive, got ${t}`,
      validator: (t) => t > 0
    });
  }
  /**
  Test a number to be negative.
  */
  get negative() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be negative, got ${t}`,
      validator: (t) => t < 0
    });
  }
  /**
  Test a number to be an integer or infinite.
  */
  get integerOrInfinite() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be an integer or infinite, got ${t}`,
      validator: (t) => gr.default.integer(t) || gr.default.infinite(t)
    });
  }
  /**
  Test a number to be in a valid range for a 8-bit unsigned integer.
  */
  get uint8() {
    return this.integer.inRange(0, 255);
  }
  /**
  Test a number to be in a valid range for a 16-bit unsigned integer.
  */
  get uint16() {
    return this.integer.inRange(0, 65535);
  }
  /**
  Test a number to be in a valid range for a 32-bit unsigned integer.
  */
  get uint32() {
    return this.integer.inRange(0, 4294967295);
  }
  /**
  Test a number to be in a valid range for a 8-bit signed integer.
  */
  get int8() {
    return this.integer.inRange(-128, 127);
  }
  /**
  Test a number to be in a valid range for a 16-bit signed integer.
  */
  get int16() {
    return this.integer.inRange(-32768, 32767);
  }
  /**
  Test a number to be in a valid range for a 32-bit signed integer.
  */
  get int32() {
    return this.integer.inRange(-2147483648, 2147483647);
  }
}
tl.NumberPredicate = bv;
var nl = {};
Object.defineProperty(nl, "__esModule", { value: !0 });
nl.BigIntPredicate = void 0;
const Rv = Ve();
class Iv extends Rv.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("bigint", t);
  }
}
nl.BigIntPredicate = Iv;
var rl = {};
Object.defineProperty(rl, "__esModule", { value: !0 });
rl.BooleanPredicate = void 0;
const jv = Ve();
class zv extends jv.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("boolean", t);
  }
  /**
  Test a boolean to be true.
  */
  get true() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be true, got ${t}`,
      validator: (t) => t
    });
  }
  /**
  Test a boolean to be false.
  */
  get false() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be false, got ${t}`,
      validator: (t) => !t
    });
  }
}
rl.BooleanPredicate = zv;
var il = {}, Ea = { exports: {} };
Ea.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", i = 1, o = 2, a = 9007199254740991, s = "[object Arguments]", c = "[object Array]", f = "[object AsyncFunction]", d = "[object Boolean]", p = "[object Date]", u = "[object Error]", x = "[object Function]", E = "[object GeneratorFunction]", S = "[object Map]", $ = "[object Number]", g = "[object Null]", h = "[object Object]", m = "[object Promise]", O = "[object Proxy]", w = "[object RegExp]", l = "[object Set]", v = "[object String]", L = "[object Symbol]", K = "[object Undefined]", D = "[object WeakMap]", se = "[object ArrayBuffer]", Pe = "[object DataView]", ut = "[object Float32Array]", ht = "[object Float64Array]", ce = "[object Int8Array]", he = "[object Int16Array]", je = "[object Int32Array]", M = "[object Uint8Array]", F = "[object Uint8ClampedArray]", B = "[object Uint16Array]", H = "[object Uint32Array]", Z = /[\\^$.*+?()[\]{}|]/g, nt = /^\[object .+?Constructor\]$/, N = /^(?:0|[1-9]\d*)$/, z = {};
  z[ut] = z[ht] = z[ce] = z[he] = z[je] = z[M] = z[F] = z[B] = z[H] = !0, z[s] = z[c] = z[se] = z[d] = z[Pe] = z[p] = z[u] = z[x] = z[S] = z[$] = z[h] = z[w] = z[l] = z[v] = z[D] = !1;
  var ne = typeof Y == "object" && Y && Y.Object === Object && Y, ge = typeof self == "object" && self && self.Object === Object && self, Oe = ne || ge || Function("return this")(), X = t && !t.nodeType && t, ve = X && !0 && e && !e.nodeType && e, Be = ve && ve.exports === X, rt = Be && ne.process, gn = function() {
    try {
      return rt && rt.binding && rt.binding("util");
    } catch {
    }
  }(), vn = gn && gn.isTypedArray;
  function _n(y, _) {
    for (var C = -1, R = y == null ? 0 : y.length, de = 0, Q = []; ++C < R; ) {
      var $e = y[C];
      _($e, C, y) && (Q[de++] = $e);
    }
    return Q;
  }
  function si(y, _) {
    for (var C = -1, R = _.length, de = y.length; ++C < R; )
      y[de + C] = _[C];
    return y;
  }
  function ru(y, _) {
    for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
      if (_(y[C], C, y))
        return !0;
    return !1;
  }
  function iu(y, _) {
    for (var C = -1, R = Array(y); ++C < y; )
      R[C] = _(C);
    return R;
  }
  function ci(y) {
    return function(_) {
      return y(_);
    };
  }
  function ou(y, _) {
    return y.has(_);
  }
  function au(y, _) {
    return y == null ? void 0 : y[_];
  }
  function lu(y) {
    var _ = -1, C = Array(y.size);
    return y.forEach(function(R, de) {
      C[++_] = [de, R];
    }), C;
  }
  function fi(y, _) {
    return function(C) {
      return y(_(C));
    };
  }
  function P(y) {
    var _ = -1, C = Array(y.size);
    return y.forEach(function(R) {
      C[++_] = R;
    }), C;
  }
  var k = Array.prototype, A = Function.prototype, b = Object.prototype, V = Oe["__core-js_shared__"], Ne = A.toString, W = b.hasOwnProperty, J = function() {
    var y = /[^.]+$/.exec(V && V.keys && V.keys.IE_PROTO || "");
    return y ? "Symbol(src)_1." + y : "";
  }(), U = b.toString, re = RegExp(
    "^" + Ne.call(W).replace(Z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ee = Be ? Oe.Buffer : void 0, mt = Oe.Symbol, di = Oe.Uint8Array, wf = b.propertyIsEnumerable, jm = k.splice, Wn = mt ? mt.toStringTag : void 0, Sf = Object.getOwnPropertySymbols, zm = ee ? ee.isBuffer : void 0, Dm = fi(Object.keys, Object), uu = mr(Oe, "DataView"), pi = mr(Oe, "Map"), su = mr(Oe, "Promise"), cu = mr(Oe, "Set"), fu = mr(Oe, "WeakMap"), yi = mr(Object, "create"), Fm = Kn(uu), Vm = Kn(pi), Um = Kn(su), Bm = Kn(cu), Wm = Kn(fu), Ef = mt ? mt.prototype : void 0, du = Ef ? Ef.valueOf : void 0;
  function Hn(y) {
    var _ = -1, C = y == null ? 0 : y.length;
    for (this.clear(); ++_ < C; ) {
      var R = y[_];
      this.set(R[0], R[1]);
    }
  }
  function Hm() {
    this.__data__ = yi ? yi(null) : {}, this.size = 0;
  }
  function Gm(y) {
    var _ = this.has(y) && delete this.__data__[y];
    return this.size -= _ ? 1 : 0, _;
  }
  function Km(y) {
    var _ = this.__data__;
    if (yi) {
      var C = _[y];
      return C === r ? void 0 : C;
    }
    return W.call(_, y) ? _[y] : void 0;
  }
  function Jm(y) {
    var _ = this.__data__;
    return yi ? _[y] !== void 0 : W.call(_, y);
  }
  function Qm(y, _) {
    var C = this.__data__;
    return this.size += this.has(y) ? 0 : 1, C[y] = yi && _ === void 0 ? r : _, this;
  }
  Hn.prototype.clear = Hm, Hn.prototype.delete = Gm, Hn.prototype.get = Km, Hn.prototype.has = Jm, Hn.prototype.set = Qm;
  function rn(y) {
    var _ = -1, C = y == null ? 0 : y.length;
    for (this.clear(); ++_ < C; ) {
      var R = y[_];
      this.set(R[0], R[1]);
    }
  }
  function Ym() {
    this.__data__ = [], this.size = 0;
  }
  function Xm(y) {
    var _ = this.__data__, C = Lo(_, y);
    if (C < 0)
      return !1;
    var R = _.length - 1;
    return C == R ? _.pop() : jm.call(_, C, 1), --this.size, !0;
  }
  function qm(y) {
    var _ = this.__data__, C = Lo(_, y);
    return C < 0 ? void 0 : _[C][1];
  }
  function Zm(y) {
    return Lo(this.__data__, y) > -1;
  }
  function eg(y, _) {
    var C = this.__data__, R = Lo(C, y);
    return R < 0 ? (++this.size, C.push([y, _])) : C[R][1] = _, this;
  }
  rn.prototype.clear = Ym, rn.prototype.delete = Xm, rn.prototype.get = qm, rn.prototype.has = Zm, rn.prototype.set = eg;
  function Gn(y) {
    var _ = -1, C = y == null ? 0 : y.length;
    for (this.clear(); ++_ < C; ) {
      var R = y[_];
      this.set(R[0], R[1]);
    }
  }
  function tg() {
    this.size = 0, this.__data__ = {
      hash: new Hn(),
      map: new (pi || rn)(),
      string: new Hn()
    };
  }
  function ng(y) {
    var _ = No(this, y).delete(y);
    return this.size -= _ ? 1 : 0, _;
  }
  function rg(y) {
    return No(this, y).get(y);
  }
  function ig(y) {
    return No(this, y).has(y);
  }
  function og(y, _) {
    var C = No(this, y), R = C.size;
    return C.set(y, _), this.size += C.size == R ? 0 : 1, this;
  }
  Gn.prototype.clear = tg, Gn.prototype.delete = ng, Gn.prototype.get = rg, Gn.prototype.has = ig, Gn.prototype.set = og;
  function To(y) {
    var _ = -1, C = y == null ? 0 : y.length;
    for (this.__data__ = new Gn(); ++_ < C; )
      this.add(y[_]);
  }
  function ag(y) {
    return this.__data__.set(y, r), this;
  }
  function lg(y) {
    return this.__data__.has(y);
  }
  To.prototype.add = To.prototype.push = ag, To.prototype.has = lg;
  function wn(y) {
    var _ = this.__data__ = new rn(y);
    this.size = _.size;
  }
  function ug() {
    this.__data__ = new rn(), this.size = 0;
  }
  function sg(y) {
    var _ = this.__data__, C = _.delete(y);
    return this.size = _.size, C;
  }
  function cg(y) {
    return this.__data__.get(y);
  }
  function fg(y) {
    return this.__data__.has(y);
  }
  function dg(y, _) {
    var C = this.__data__;
    if (C instanceof rn) {
      var R = C.__data__;
      if (!pi || R.length < n - 1)
        return R.push([y, _]), this.size = ++C.size, this;
      C = this.__data__ = new Gn(R);
    }
    return C.set(y, _), this.size = C.size, this;
  }
  wn.prototype.clear = ug, wn.prototype.delete = sg, wn.prototype.get = cg, wn.prototype.has = fg, wn.prototype.set = dg;
  function pg(y, _) {
    var C = Mo(y), R = !C && Cg(y), de = !C && !R && pu(y), Q = !C && !R && !de && Lf(y), $e = C || R || de || Q, ze = $e ? iu(y.length, String) : [], We = ze.length;
    for (var _e in y)
      (_ || W.call(y, _e)) && !($e && // Safari 9 has enumerable `arguments.length` in strict mode.
      (_e == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      de && (_e == "offset" || _e == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Q && (_e == "buffer" || _e == "byteLength" || _e == "byteOffset") || // Skip index properties.
      xg(_e, We))) && ze.push(_e);
    return ze;
  }
  function Lo(y, _) {
    for (var C = y.length; C--; )
      if (kf(y[C][0], _))
        return C;
    return -1;
  }
  function yg(y, _, C) {
    var R = _(y);
    return Mo(y) ? R : si(R, C(y));
  }
  function hi(y) {
    return y == null ? y === void 0 ? K : g : Wn && Wn in Object(y) ? Sg(y) : kg(y);
  }
  function xf(y) {
    return mi(y) && hi(y) == s;
  }
  function Pf(y, _, C, R, de) {
    return y === _ ? !0 : y == null || _ == null || !mi(y) && !mi(_) ? y !== y && _ !== _ : hg(y, _, C, R, Pf, de);
  }
  function hg(y, _, C, R, de, Q) {
    var $e = Mo(y), ze = Mo(_), We = $e ? c : Sn(y), _e = ze ? c : Sn(_);
    We = We == s ? h : We, _e = _e == s ? h : _e;
    var gt = We == h, Dt = _e == h, Ye = We == _e;
    if (Ye && pu(y)) {
      if (!pu(_))
        return !1;
      $e = !0, gt = !1;
    }
    if (Ye && !gt)
      return Q || (Q = new wn()), $e || Lf(y) ? Of(y, _, C, R, de, Q) : _g(y, _, We, C, R, de, Q);
    if (!(C & i)) {
      var Ct = gt && W.call(y, "__wrapped__"), At = Dt && W.call(_, "__wrapped__");
      if (Ct || At) {
        var En = Ct ? y.value() : y, on = At ? _.value() : _;
        return Q || (Q = new wn()), de(En, on, C, R, Q);
      }
    }
    return Ye ? (Q || (Q = new wn()), wg(y, _, C, R, de, Q)) : !1;
  }
  function mg(y) {
    if (!Tf(y) || Og(y))
      return !1;
    var _ = Cf(y) ? re : nt;
    return _.test(Kn(y));
  }
  function gg(y) {
    return mi(y) && Af(y.length) && !!z[hi(y)];
  }
  function vg(y) {
    if (!$g(y))
      return Dm(y);
    var _ = [];
    for (var C in Object(y))
      W.call(y, C) && C != "constructor" && _.push(C);
    return _;
  }
  function Of(y, _, C, R, de, Q) {
    var $e = C & i, ze = y.length, We = _.length;
    if (ze != We && !($e && We > ze))
      return !1;
    var _e = Q.get(y);
    if (_e && Q.get(_))
      return _e == _;
    var gt = -1, Dt = !0, Ye = C & o ? new To() : void 0;
    for (Q.set(y, _), Q.set(_, y); ++gt < ze; ) {
      var Ct = y[gt], At = _[gt];
      if (R)
        var En = $e ? R(At, Ct, gt, _, y, Q) : R(Ct, At, gt, y, _, Q);
      if (En !== void 0) {
        if (En)
          continue;
        Dt = !1;
        break;
      }
      if (Ye) {
        if (!ru(_, function(on, Jn) {
          if (!ou(Ye, Jn) && (Ct === on || de(Ct, on, C, R, Q)))
            return Ye.push(Jn);
        })) {
          Dt = !1;
          break;
        }
      } else if (!(Ct === At || de(Ct, At, C, R, Q))) {
        Dt = !1;
        break;
      }
    }
    return Q.delete(y), Q.delete(_), Dt;
  }
  function _g(y, _, C, R, de, Q, $e) {
    switch (C) {
      case Pe:
        if (y.byteLength != _.byteLength || y.byteOffset != _.byteOffset)
          return !1;
        y = y.buffer, _ = _.buffer;
      case se:
        return !(y.byteLength != _.byteLength || !Q(new di(y), new di(_)));
      case d:
      case p:
      case $:
        return kf(+y, +_);
      case u:
        return y.name == _.name && y.message == _.message;
      case w:
      case v:
        return y == _ + "";
      case S:
        var ze = lu;
      case l:
        var We = R & i;
        if (ze || (ze = P), y.size != _.size && !We)
          return !1;
        var _e = $e.get(y);
        if (_e)
          return _e == _;
        R |= o, $e.set(y, _);
        var gt = Of(ze(y), ze(_), R, de, Q, $e);
        return $e.delete(y), gt;
      case L:
        if (du)
          return du.call(y) == du.call(_);
    }
    return !1;
  }
  function wg(y, _, C, R, de, Q) {
    var $e = C & i, ze = $f(y), We = ze.length, _e = $f(_), gt = _e.length;
    if (We != gt && !$e)
      return !1;
    for (var Dt = We; Dt--; ) {
      var Ye = ze[Dt];
      if (!($e ? Ye in _ : W.call(_, Ye)))
        return !1;
    }
    var Ct = Q.get(y);
    if (Ct && Q.get(_))
      return Ct == _;
    var At = !0;
    Q.set(y, _), Q.set(_, y);
    for (var En = $e; ++Dt < We; ) {
      Ye = ze[Dt];
      var on = y[Ye], Jn = _[Ye];
      if (R)
        var Nf = $e ? R(Jn, on, Ye, _, y, Q) : R(on, Jn, Ye, y, _, Q);
      if (!(Nf === void 0 ? on === Jn || de(on, Jn, C, R, Q) : Nf)) {
        At = !1;
        break;
      }
      En || (En = Ye == "constructor");
    }
    if (At && !En) {
      var bo = y.constructor, Ro = _.constructor;
      bo != Ro && "constructor" in y && "constructor" in _ && !(typeof bo == "function" && bo instanceof bo && typeof Ro == "function" && Ro instanceof Ro) && (At = !1);
    }
    return Q.delete(y), Q.delete(_), At;
  }
  function $f(y) {
    return yg(y, Lg, Eg);
  }
  function No(y, _) {
    var C = y.__data__;
    return Pg(_) ? C[typeof _ == "string" ? "string" : "hash"] : C.map;
  }
  function mr(y, _) {
    var C = au(y, _);
    return mg(C) ? C : void 0;
  }
  function Sg(y) {
    var _ = W.call(y, Wn), C = y[Wn];
    try {
      y[Wn] = void 0;
      var R = !0;
    } catch {
    }
    var de = U.call(y);
    return R && (_ ? y[Wn] = C : delete y[Wn]), de;
  }
  var Eg = Sf ? function(y) {
    return y == null ? [] : (y = Object(y), _n(Sf(y), function(_) {
      return wf.call(y, _);
    }));
  } : Ng, Sn = hi;
  (uu && Sn(new uu(new ArrayBuffer(1))) != Pe || pi && Sn(new pi()) != S || su && Sn(su.resolve()) != m || cu && Sn(new cu()) != l || fu && Sn(new fu()) != D) && (Sn = function(y) {
    var _ = hi(y), C = _ == h ? y.constructor : void 0, R = C ? Kn(C) : "";
    if (R)
      switch (R) {
        case Fm:
          return Pe;
        case Vm:
          return S;
        case Um:
          return m;
        case Bm:
          return l;
        case Wm:
          return D;
      }
    return _;
  });
  function xg(y, _) {
    return _ = _ ?? a, !!_ && (typeof y == "number" || N.test(y)) && y > -1 && y % 1 == 0 && y < _;
  }
  function Pg(y) {
    var _ = typeof y;
    return _ == "string" || _ == "number" || _ == "symbol" || _ == "boolean" ? y !== "__proto__" : y === null;
  }
  function Og(y) {
    return !!J && J in y;
  }
  function $g(y) {
    var _ = y && y.constructor, C = typeof _ == "function" && _.prototype || b;
    return y === C;
  }
  function kg(y) {
    return U.call(y);
  }
  function Kn(y) {
    if (y != null) {
      try {
        return Ne.call(y);
      } catch {
      }
      try {
        return y + "";
      } catch {
      }
    }
    return "";
  }
  function kf(y, _) {
    return y === _ || y !== y && _ !== _;
  }
  var Cg = xf(function() {
    return arguments;
  }()) ? xf : function(y) {
    return mi(y) && W.call(y, "callee") && !wf.call(y, "callee");
  }, Mo = Array.isArray;
  function Ag(y) {
    return y != null && Af(y.length) && !Cf(y);
  }
  var pu = zm || Mg;
  function Tg(y, _) {
    return Pf(y, _);
  }
  function Cf(y) {
    if (!Tf(y))
      return !1;
    var _ = hi(y);
    return _ == x || _ == E || _ == f || _ == O;
  }
  function Af(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= a;
  }
  function Tf(y) {
    var _ = typeof y;
    return y != null && (_ == "object" || _ == "function");
  }
  function mi(y) {
    return y != null && typeof y == "object";
  }
  var Lf = vn ? ci(vn) : gg;
  function Lg(y) {
    return Ag(y) ? pg(y) : vg(y);
  }
  function Ng() {
    return [];
  }
  function Mg() {
    return !1;
  }
  e.exports = Tg;
})(Ea, Ea.exports);
var ol = Ea.exports, or = {}, ii = {};
Object.defineProperty(ii, "__esModule", { value: !0 });
const Dv = ri;
function Xp(e, t, n, r = !0) {
  n[Dv.testSymbol](e, Xp, t, r);
}
ii.default = Xp;
Object.defineProperty(or, "__esModule", { value: !0 });
or.exact = or.partial = void 0;
const qp = ti, Zp = ii, ey = ri;
function ty(e, t, n) {
  try {
    for (const r of Object.keys(t)) {
      const i = n ? `${n}.${r}` : r;
      if ((0, ey.isPredicate)(t[r]))
        (0, Zp.default)(e[r], i, t[r]);
      else if (qp.default.plainObject(t[r])) {
        const o = ty(e[r], t[r], i);
        if (o !== !0)
          return o;
      }
    }
    return !0;
  } catch (r) {
    return r.message;
  }
}
or.partial = ty;
function ny(e, t, n, r) {
  try {
    const i = new Set(Object.keys(e));
    for (const o of Object.keys(t)) {
      i.delete(o);
      const a = n ? `${n}.${o}` : o;
      if ((0, ey.isPredicate)(t[o]))
        (0, Zp.default)(e[o], a, t[o]);
      else if (qp.default.plainObject(t[o])) {
        if (!Object.prototype.hasOwnProperty.call(e, o))
          return `Expected \`${a}\` to exist`;
        const s = ny(e[o], t[o], a);
        if (s !== !0)
          return s;
      }
    }
    if (i.size > 0) {
      const o = [...i.keys()][0], a = n ? `${n}.${o}` : o;
      return `Did not expect ${r ? "element" : "property"} \`${a}\` to exist, got \`${e[o]}\``;
    }
    return !0;
  } catch (i) {
    return i.message;
  }
}
or.exact = ny;
var oi = {};
Object.defineProperty(oi, "__esModule", { value: !0 });
const Fv = ii;
oi.default = (e, t, n) => {
  try {
    for (const r of e)
      (0, Fv.default)(r, t, n, !1);
    return !0;
  } catch (r) {
    return r.message;
  }
};
Object.defineProperty(il, "__esModule", { value: !0 });
il.ArrayPredicate = void 0;
const Vv = ol, Uv = Ve(), Bv = or, Wv = oi;
class Hv extends Uv.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("array", t);
  }
  /**
      Test an array to have a specific length.
  
      @param length - The length of the array.
      */
  length(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have length \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test an array to have a minimum length.
  
      @param length - The minimum length of the array.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum length of \`${t - 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test an array to have a maximum length.
  
      @param length - The maximum length of the array.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum length of \`${t + 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test an array to start with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the start of the array.
      */
  startsWith(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to start with \`${t}\`, got \`${n[0]}\``,
      validator: (n) => n[0] === t
    });
  }
  /**
      Test an array to end with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the end of the array.
      */
  endsWith(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to end with \`${t}\`, got \`${n[n.length - 1]}\``,
      validator: (n) => n[n.length - 1] === t
    });
  }
  /**
      Test an array to include all the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includes(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to include all elements of \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => t.every((r) => n.includes(r))
    });
  }
  /**
      Test an array to include any of the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includesAny(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to include any element of \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => t.some((r) => n.includes(r))
    });
  }
  /**
  Test an array to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify(t)}\``,
      validator: (t) => t.length === 0
    });
  }
  /**
  Test an array to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.length > 0
    });
  }
  /**
      Test an array to be deeply equal to the provided array.
  
      @param expected - Expected value to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be deeply equal to \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => Vv(n, t)
    });
  }
  /**
      Test all elements in the array to match to provided predicate.
  
      @param predicate - The predicate that should be applied against every individual item.
  
      @example
      ```
      ow(['a', 1], ow.array.ofType(ow.any(ow.string, ow.number)));
      ```
      */
  ofType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, Wv.default)(n, "values", t)
    });
  }
  /**
      Test if the elements in the array exactly matches the elements placed at the same indices in the predicates array.
  
      @param predicates - Predicates to test the array against. Describes what the tested array should look like.
  
      @example
      ```
      ow(['1', 2], ow.array.exactShape([ow.string, ow.number]));
      ```
      */
  exactShape(t) {
    const n = t;
    return this.addValidator({
      message: (r, i, o) => `${o.replace("Expected", "Expected element")} in ${i}`,
      validator: (r) => (0, Bv.exact)(r, n, void 0, !0)
    });
  }
}
il.ArrayPredicate = Hv;
var al = {}, Gv = (e) => {
  const t = typeof e;
  return e !== null && (t === "object" || t === "function");
};
const Qn = Gv, Kv = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), Jv = (e) => !e.some((t) => Kv.has(t));
function jo(e) {
  const t = e.split("."), n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    for (; i[i.length - 1] === "\\" && t[r + 1] !== void 0; )
      i = i.slice(0, -1) + ".", i += t[++r];
    n.push(i);
  }
  return Jv(n) ? n : [];
}
var Qv = {
  get(e, t, n) {
    if (!Qn(e) || typeof t != "string")
      return n === void 0 ? e : n;
    const r = jo(t);
    if (r.length !== 0) {
      for (let i = 0; i < r.length; i++)
        if (e = e[r[i]], e == null) {
          if (i !== r.length - 1)
            return n;
          break;
        }
      return e === void 0 ? n : e;
    }
  },
  set(e, t, n) {
    if (!Qn(e) || typeof t != "string")
      return e;
    const r = e, i = jo(t);
    for (let o = 0; o < i.length; o++) {
      const a = i[o];
      Qn(e[a]) || (e[a] = {}), o === i.length - 1 && (e[a] = n), e = e[a];
    }
    return r;
  },
  delete(e, t) {
    if (!Qn(e) || typeof t != "string")
      return !1;
    const n = jo(t);
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if (r === n.length - 1)
        return delete e[i], !0;
      if (e = e[i], !Qn(e))
        return !1;
    }
  },
  has(e, t) {
    if (!Qn(e) || typeof t != "string")
      return !1;
    const n = jo(t);
    if (n.length === 0)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (Qn(e)) {
        if (!(n[r] in e))
          return !1;
        e = e[n[r]];
      } else
        return !1;
    return !0;
  }
}, pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.default = (e, t, n = 5) => {
  const r = [];
  for (const i of t)
    if (!e.has(i) && (r.push(i), r.length === n))
      return r;
  return r.length === 0 ? !0 : r;
};
var lc = {};
Object.defineProperty(lc, "__esModule", { value: !0 });
const Yv = ti, Xv = ii, ry = (e, t) => Yv.default.plainObject(e) ? Object.values(e).every((n) => ry(n, t)) : ((0, Xv.default)(e, "deep values", t, !1), !0);
lc.default = (e, t) => {
  try {
    return ry(e, t);
  } catch (n) {
    return n.message;
  }
};
Object.defineProperty(al, "__esModule", { value: !0 });
al.ObjectPredicate = void 0;
const qv = ti, Wf = Qv, Zv = ol, e0 = pr, t0 = oi, n0 = lc, Hf = or, r0 = Ve();
class i0 extends r0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("object", t);
  }
  /**
  Test if an Object is a plain object.
  */
  get plain() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be a plain object`,
      validator: (t) => qv.default.plainObject(t)
    });
  }
  /**
  Test an object to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify(t)}\``,
      validator: (t) => Object.keys(t).length === 0
    });
  }
  /**
  Test an object to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => Object.keys(t).length > 0
    });
  }
  /**
      Test all the values in the object to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  valuesOfType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, t0.default)(Object.values(n), "values", t)
    });
  }
  /**
      Test all the values in the object deeply to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  deepValuesOfType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, n0.default)(n, t)
    });
  }
  /**
      Test an object to be deeply equal to the provided object.
  
      @param expected - Expected object to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be deeply equal to \`${JSON.stringify(t)}\`, got \`${JSON.stringify(n)}\``,
      validator: (n) => Zv(n, t)
    });
  }
  /**
      Test an object to be of a specific instance type.
  
      @param instance - The expected instance type of the object.
      */
  instanceOf(t) {
    return this.addValidator({
      message: (n, r) => {
        var i;
        let { name: o } = (i = n == null ? void 0 : n.constructor) !== null && i !== void 0 ? i : {};
        return (!o || o === "Object") && (o = JSON.stringify(n)), `Expected ${r} \`${o}\` to be of type \`${t.name}\``;
      },
      validator: (n) => n instanceof t
    });
  }
  /**
      Test an object to include all the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that should be present in the object.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have keys \`${JSON.stringify(i)}\``,
      validator: (n) => (0, e0.default)({
        has: (r) => Wf.has(n, r)
      }, t)
    });
  }
  /**
      Test an object to include any of the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that could be a key in the object.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((r) => Wf.has(n, r))
    });
  }
  /**
      Test an object to match the `shape` partially. This means that it ignores unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      const object = {
          unicorn: '🦄',
          rainbow: '🌈'
      };
  
      ow(object, ow.object.partialShape({
          unicorn: ow.string
      }));
      ```
      */
  partialShape(t) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (n, r, i) => `${i.replace("Expected", "Expected property")} in ${r}`,
      validator: (n) => (0, Hf.partial)(n, t)
    });
  }
  /**
      Test an object to match the `shape` exactly. This means that will fail if it comes across unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      ow({unicorn: '🦄'}, ow.object.exactShape({
          unicorn: ow.string
      }));
      ```
      */
  exactShape(t) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (n, r, i) => `${i.replace("Expected", "Expected property")} in ${r}`,
      validator: (n) => (0, Hf.exact)(n, t)
    });
  }
}
al.ObjectPredicate = i0;
var ll = {};
Object.defineProperty(ll, "__esModule", { value: !0 });
ll.DatePredicate = void 0;
const o0 = Ve();
class a0 extends o0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("date", t);
  }
  /**
      Test a date to be before another date.
  
      @param date - Maximum value.
      */
  before(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} ${n.toISOString()} to be before ${t.toISOString()}`,
      validator: (n) => n.getTime() < t.getTime()
    });
  }
  /**
      Test a date to be before another date.
  
      @param date - Minimum value.
      */
  after(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} ${n.toISOString()} to be after ${t.toISOString()}`,
      validator: (n) => n.getTime() > t.getTime()
    });
  }
}
ll.DatePredicate = a0;
var ul = {};
Object.defineProperty(ul, "__esModule", { value: !0 });
ul.ErrorPredicate = void 0;
const l0 = Ve();
class u0 extends l0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("error", t);
  }
  /**
      Test an error to have a specific name.
  
      @param expected - Expected name of the Error.
      */
  name(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have name \`${t}\`, got \`${n.name}\``,
      validator: (n) => n.name === t
    });
  }
  /**
      Test an error to have a specific message.
  
      @param expected - Expected message of the Error.
      */
  message(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} message to be \`${t}\`, got \`${n.message}\``,
      validator: (n) => n.message === t
    });
  }
  /**
      Test the error message to include a specific message.
  
      @param message - Message that should be included in the error.
      */
  messageIncludes(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} message to include \`${t}\`, got \`${n.message}\``,
      validator: (n) => n.message.includes(t)
    });
  }
  /**
      Test the error object to have specific keys.
  
      @param keys - One or more keys which should be part of the error object.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} message to have keys \`${t.join("`, `")}\``,
      validator: (n) => t.every((r) => Object.prototype.hasOwnProperty.call(n, r))
    });
  }
  /**
      Test an error to be of a specific instance type.
  
      @param instance - The expected instance type of the error.
      */
  instanceOf(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} \`${n.name}\` to be of type \`${t.name}\``,
      validator: (n) => n instanceof t
    });
  }
  /**
  Test an Error to be a TypeError.
  */
  get typeError() {
    return this.instanceOf(TypeError);
  }
  /**
  Test an Error to be an EvalError.
  */
  get evalError() {
    return this.instanceOf(EvalError);
  }
  /**
  Test an Error to be a RangeError.
  */
  get rangeError() {
    return this.instanceOf(RangeError);
  }
  /**
  Test an Error to be a ReferenceError.
  */
  get referenceError() {
    return this.instanceOf(ReferenceError);
  }
  /**
  Test an Error to be a SyntaxError.
  */
  get syntaxError() {
    return this.instanceOf(SyntaxError);
  }
  /**
  Test an Error to be a URIError.
  */
  get uriError() {
    return this.instanceOf(URIError);
  }
}
ul.ErrorPredicate = u0;
var sl = {};
Object.defineProperty(sl, "__esModule", { value: !0 });
sl.MapPredicate = void 0;
const s0 = ol, Gf = pr, Kf = oi, c0 = Ve();
class f0 extends c0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("Map", t);
  }
  /**
      Test a Map to have a specific size.
  
      @param size - The size of the Map.
      */
  size(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have size \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size === t
    });
  }
  /**
      Test an Map to have a minimum size.
  
      @param size - The minimum size of the Map.
      */
  minSize(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum size of \`${t - 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test an Map to have a maximum size.
  
      @param size - The maximum size of the Map.
      */
  maxSize(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum size of \`${t + 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Map to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the Map.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have keys \`${JSON.stringify(i)}\``,
      validator: (n) => (0, Gf.default)(n, t)
    });
  }
  /**
      Test a Map to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the Map.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((r) => n.has(r))
    });
  }
  /**
      Test a Map to include all the provided values. The values are tested by identity, not structure.
  
      @param values - The values that should be a value in the Map.
      */
  hasValues(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have values \`${JSON.stringify(i)}\``,
      validator: (n) => (0, Gf.default)(new Set(n.values()), t)
    });
  }
  /**
      Test a Map to include any of the provided values. The values are tested by identity, not structure.
  
      @param values - The values that could be a value in the Map.
      */
  hasAnyValues(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any value of \`${JSON.stringify(t)}\``,
      validator: (n) => {
        const r = new Set(n.values());
        return t.some((i) => r.has(i));
      }
    });
  }
  /**
      Test all the keys in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every key in the Map.
      */
  keysOfType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, Kf.default)(n.keys(), "keys", t)
    });
  }
  /**
      Test all the values in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the Map.
      */
  valuesOfType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, Kf.default)(n.values(), "values", t)
    });
  }
  /**
  Test a Map to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify([...t])}\``,
      validator: (t) => t.size === 0
    });
  }
  /**
  Test a Map to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.size > 0
    });
  }
  /**
      Test a Map to be deeply equal to the provided Map.
  
      @param expected - Expected Map to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be deeply equal to \`${JSON.stringify([...t])}\`, got \`${JSON.stringify([...n])}\``,
      validator: (n) => s0(n, t)
    });
  }
}
sl.MapPredicate = f0;
var cl = {};
Object.defineProperty(cl, "__esModule", { value: !0 });
cl.WeakMapPredicate = void 0;
const d0 = pr, p0 = Ve();
class y0 extends p0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("WeakMap", t);
  }
  /**
      Test a WeakMap to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the WeakMap.
      */
  hasKeys(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have keys \`${JSON.stringify(i)}\``,
      validator: (n) => (0, d0.default)(n, t)
    });
  }
  /**
      Test a WeakMap to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the WeakMap.
      */
  hasAnyKeys(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any key of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((r) => n.has(r))
    });
  }
}
cl.WeakMapPredicate = y0;
var fl = {};
Object.defineProperty(fl, "__esModule", { value: !0 });
fl.SetPredicate = void 0;
const h0 = ol, m0 = pr, g0 = oi, v0 = Ve();
class _0 extends v0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("Set", t);
  }
  /**
      Test a Set to have a specific size.
  
      @param size - The size of the Set.
      */
  size(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have size \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size === t
    });
  }
  /**
      Test a Set to have a minimum size.
  
      @param size - The minimum size of the Set.
      */
  minSize(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum size of \`${t - 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Set to have a maximum size.
  
      @param size - The maximum size of the Set.
      */
  maxSize(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum size of \`${t}\`, got \`${n.size}\``,
      validator: (n) => n.size <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum size of \`${t + 1}\`, got \`${n.size}\``
    });
  }
  /**
      Test a Set to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the Set.
      */
  has(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have items \`${JSON.stringify(i)}\``,
      validator: (n) => (0, m0.default)(n, t)
    });
  }
  /**
      Test a Set to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the Set.
      */
  hasAny(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any item of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((r) => n.has(r))
    });
  }
  /**
      Test all the items in the Set to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every item in the Set.
      */
  ofType(t) {
    return this.addValidator({
      message: (n, r, i) => `(${r}) ${i}`,
      validator: (n) => (0, g0.default)(n, "values", t)
    });
  }
  /**
  Test a Set to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to be empty, got \`${JSON.stringify([...t])}\``,
      validator: (t) => t.size === 0
    });
  }
  /**
  Test a Set to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (t, n) => `Expected ${n} to not be empty`,
      validator: (t) => t.size > 0
    });
  }
  /**
      Test a Set to be deeply equal to the provided Set.
  
      @param expected - Expected Set to match.
      */
  deepEqual(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to be deeply equal to \`${JSON.stringify([...t])}\`, got \`${JSON.stringify([...n])}\``,
      validator: (n) => h0(n, t)
    });
  }
}
fl.SetPredicate = _0;
var dl = {};
Object.defineProperty(dl, "__esModule", { value: !0 });
dl.WeakSetPredicate = void 0;
const w0 = pr, S0 = Ve();
class E0 extends S0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("WeakSet", t);
  }
  /**
      Test a WeakSet to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the WeakSet.
      */
  has(...t) {
    return this.addValidator({
      message: (n, r, i) => `Expected ${r} to have items \`${JSON.stringify(i)}\``,
      validator: (n) => (0, w0.default)(n, t)
    });
  }
  /**
      Test a WeakSet to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the WeakSet.
      */
  hasAny(...t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have any item of \`${JSON.stringify(t)}\``,
      validator: (n) => t.some((r) => n.has(r))
    });
  }
}
dl.WeakSetPredicate = E0;
var pl = {};
Object.defineProperty(pl, "__esModule", { value: !0 });
pl.TypedArrayPredicate = void 0;
const x0 = Ve();
class P0 extends x0.Predicate {
  /**
      Test a typed array to have a specific byte length.
  
      @param byteLength - The byte length of the typed array.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the typed array.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param length - The minimum byte length of the typed array.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a typed array to have a specific length.
  
      @param length - The length of the typed array.
      */
  length(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have length \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length === t
    });
  }
  /**
      Test a typed array to have a minimum length.
  
      @param length - The minimum length of the typed array.
      */
  minLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum length of \`${t - 1}\`, got \`${n.length}\``
    });
  }
  /**
      Test a typed array to have a maximum length.
  
      @param length - The maximum length of the typed array.
      */
  maxLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum length of \`${t}\`, got \`${n.length}\``,
      validator: (n) => n.length <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum length of \`${t + 1}\`, got \`${n.length}\``
    });
  }
}
pl.TypedArrayPredicate = P0;
var yl = {};
Object.defineProperty(yl, "__esModule", { value: !0 });
yl.ArrayBufferPredicate = void 0;
const O0 = Ve();
class $0 extends O0.Predicate {
  /**
      Test an array buffer to have a specific byte length.
  
      @param byteLength - The byte length of the array buffer.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the array buffer.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param length - The minimum byte length of the array buffer.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
}
yl.ArrayBufferPredicate = $0;
var hl = {};
Object.defineProperty(hl, "__esModule", { value: !0 });
hl.DataViewPredicate = void 0;
const k0 = Ve();
class C0 extends k0.Predicate {
  /**
  @hidden
  */
  constructor(t) {
    super("DataView", t);
  }
  /**
      Test a DataView to have a specific byte length.
  
      @param byteLength - The byte length of the DataView.
      */
  byteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength === t
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the DataView.
      */
  minByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a minimum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength >= t,
      negatedMessage: (n, r) => `Expected ${r} to have a maximum byte length of \`${t - 1}\`, got \`${n.byteLength}\``
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param length - The minimum byte length of the DataView.
      */
  maxByteLength(t) {
    return this.addValidator({
      message: (n, r) => `Expected ${r} to have a maximum byte length of \`${t}\`, got \`${n.byteLength}\``,
      validator: (n) => n.byteLength <= t,
      negatedMessage: (n, r) => `Expected ${r} to have a minimum byte length of \`${t + 1}\`, got \`${n.byteLength}\``
    });
  }
}
hl.DataViewPredicate = C0;
var ml = {};
Object.defineProperty(ml, "__esModule", { value: !0 });
ml.AnyPredicate = void 0;
const Jf = ni, A0 = ri, T0 = vo;
class L0 {
  constructor(t, n = {}) {
    Object.defineProperty(this, "predicates", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: t
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    });
  }
  [A0.testSymbol](t, n, r, i) {
    const o = /* @__PURE__ */ new Map();
    for (const a of this.predicates)
      try {
        n(t, r, a, i);
        return;
      } catch (s) {
        if (t === void 0 && this.options.optional === !0)
          return;
        if (s instanceof Jf.ArgumentError)
          for (const [c, f] of s.validationErrors.entries()) {
            const d = o.get(c);
            o.set(c, /* @__PURE__ */ new Set([...d ?? [], ...f]));
          }
      }
    if (o.size > 0) {
      const a = (0, T0.generateArgumentErrorMessage)(o, !0);
      throw new Jf.ArgumentError(`Any predicate failed with the following errors:
${a}`, n, o);
    }
  }
}
ml.AnyPredicate = L0;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.AnyPredicate = e.DataViewPredicate = e.ArrayBufferPredicate = e.TypedArrayPredicate = e.WeakSetPredicate = e.SetPredicate = e.WeakMapPredicate = e.MapPredicate = e.ErrorPredicate = e.DatePredicate = e.ObjectPredicate = e.ArrayPredicate = e.BooleanPredicate = e.BigIntPredicate = e.NumberPredicate = e.StringPredicate = void 0;
  const t = el;
  Object.defineProperty(e, "StringPredicate", { enumerable: !0, get: function() {
    return t.StringPredicate;
  } });
  const n = tl;
  Object.defineProperty(e, "NumberPredicate", { enumerable: !0, get: function() {
    return n.NumberPredicate;
  } });
  const r = nl;
  Object.defineProperty(e, "BigIntPredicate", { enumerable: !0, get: function() {
    return r.BigIntPredicate;
  } });
  const i = rl;
  Object.defineProperty(e, "BooleanPredicate", { enumerable: !0, get: function() {
    return i.BooleanPredicate;
  } });
  const o = Ve(), a = il;
  Object.defineProperty(e, "ArrayPredicate", { enumerable: !0, get: function() {
    return a.ArrayPredicate;
  } });
  const s = al;
  Object.defineProperty(e, "ObjectPredicate", { enumerable: !0, get: function() {
    return s.ObjectPredicate;
  } });
  const c = ll;
  Object.defineProperty(e, "DatePredicate", { enumerable: !0, get: function() {
    return c.DatePredicate;
  } });
  const f = ul;
  Object.defineProperty(e, "ErrorPredicate", { enumerable: !0, get: function() {
    return f.ErrorPredicate;
  } });
  const d = sl;
  Object.defineProperty(e, "MapPredicate", { enumerable: !0, get: function() {
    return d.MapPredicate;
  } });
  const p = cl;
  Object.defineProperty(e, "WeakMapPredicate", { enumerable: !0, get: function() {
    return p.WeakMapPredicate;
  } });
  const u = fl;
  Object.defineProperty(e, "SetPredicate", { enumerable: !0, get: function() {
    return u.SetPredicate;
  } });
  const x = dl;
  Object.defineProperty(e, "WeakSetPredicate", { enumerable: !0, get: function() {
    return x.WeakSetPredicate;
  } });
  const E = pl;
  Object.defineProperty(e, "TypedArrayPredicate", { enumerable: !0, get: function() {
    return E.TypedArrayPredicate;
  } });
  const S = yl;
  Object.defineProperty(e, "ArrayBufferPredicate", { enumerable: !0, get: function() {
    return S.ArrayBufferPredicate;
  } });
  const $ = hl;
  Object.defineProperty(e, "DataViewPredicate", { enumerable: !0, get: function() {
    return $.DataViewPredicate;
  } });
  const g = ml;
  Object.defineProperty(e, "AnyPredicate", { enumerable: !0, get: function() {
    return g.AnyPredicate;
  } }), e.default = (h, m) => (Object.defineProperties(h, {
    string: {
      get: () => new t.StringPredicate(m)
    },
    number: {
      get: () => new n.NumberPredicate(m)
    },
    bigint: {
      get: () => new r.BigIntPredicate(m)
    },
    boolean: {
      get: () => new i.BooleanPredicate(m)
    },
    undefined: {
      get: () => new o.Predicate("undefined", m)
    },
    null: {
      get: () => new o.Predicate("null", m)
    },
    nullOrUndefined: {
      get: () => new o.Predicate("nullOrUndefined", m)
    },
    nan: {
      get: () => new o.Predicate("nan", m)
    },
    symbol: {
      get: () => new o.Predicate("symbol", m)
    },
    array: {
      get: () => new a.ArrayPredicate(m)
    },
    object: {
      get: () => new s.ObjectPredicate(m)
    },
    date: {
      get: () => new c.DatePredicate(m)
    },
    error: {
      get: () => new f.ErrorPredicate(m)
    },
    map: {
      get: () => new d.MapPredicate(m)
    },
    weakMap: {
      get: () => new p.WeakMapPredicate(m)
    },
    set: {
      get: () => new u.SetPredicate(m)
    },
    weakSet: {
      get: () => new x.WeakSetPredicate(m)
    },
    function: {
      get: () => new o.Predicate("Function", m)
    },
    buffer: {
      get: () => new o.Predicate("Buffer", m)
    },
    regExp: {
      get: () => new o.Predicate("RegExp", m)
    },
    promise: {
      get: () => new o.Predicate("Promise", m)
    },
    typedArray: {
      get: () => new E.TypedArrayPredicate("TypedArray", m)
    },
    int8Array: {
      get: () => new E.TypedArrayPredicate("Int8Array", m)
    },
    uint8Array: {
      get: () => new E.TypedArrayPredicate("Uint8Array", m)
    },
    uint8ClampedArray: {
      get: () => new E.TypedArrayPredicate("Uint8ClampedArray", m)
    },
    int16Array: {
      get: () => new E.TypedArrayPredicate("Int16Array", m)
    },
    uint16Array: {
      get: () => new E.TypedArrayPredicate("Uint16Array", m)
    },
    int32Array: {
      get: () => new E.TypedArrayPredicate("Int32Array", m)
    },
    uint32Array: {
      get: () => new E.TypedArrayPredicate("Uint32Array", m)
    },
    float32Array: {
      get: () => new E.TypedArrayPredicate("Float32Array", m)
    },
    float64Array: {
      get: () => new E.TypedArrayPredicate("Float64Array", m)
    },
    arrayBuffer: {
      get: () => new S.ArrayBufferPredicate("ArrayBuffer", m)
    },
    sharedArrayBuffer: {
      get: () => new S.ArrayBufferPredicate("SharedArrayBuffer", m)
    },
    dataView: {
      get: () => new $.DataViewPredicate(m)
    },
    iterable: {
      get: () => new o.Predicate("Iterable", m)
    },
    any: {
      value: (...O) => new g.AnyPredicate(O, m)
    }
  }), h);
})(Sa);
Object.defineProperty(ac, "__esModule", { value: !0 });
const N0 = Sa;
ac.default = (e) => (Object.defineProperties(e, {
  optional: {
    get: () => (0, N0.default)({}, { optional: !0 })
  }
}), e);
(function(e) {
  var t = Y && Y.__createBinding || (Object.create ? function(x, E, S, $) {
    $ === void 0 && ($ = S);
    var g = Object.getOwnPropertyDescriptor(E, S);
    (!g || ("get" in g ? !E.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return E[S];
    } }), Object.defineProperty(x, $, g);
  } : function(x, E, S, $) {
    $ === void 0 && ($ = S), x[$] = E[S];
  }), n = Y && Y.__exportStar || function(x, E) {
    for (var S in x)
      S !== "default" && !Object.prototype.hasOwnProperty.call(E, S) && t(E, x, S);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ArgumentError = e.Predicate = void 0;
  const r = wv, i = qa, o = Ve();
  Object.defineProperty(e, "Predicate", { enumerable: !0, get: function() {
    return o.Predicate;
  } });
  const a = ri, s = ac, c = Sa, f = ii, d = (x, E, S) => {
    if (!(0, a.isPredicate)(E) && typeof E != "string")
      throw new TypeError(`Expected second argument to be a predicate or a string, got \`${typeof E}\``);
    if ((0, a.isPredicate)(E)) {
      const $ = (0, r.default)();
      (0, f.default)(x, () => (0, i.inferLabel)($), E);
      return;
    }
    (0, f.default)(x, E, S);
  };
  Object.defineProperties(d, {
    isValid: {
      value: (x, E) => {
        try {
          return (0, f.default)(x, "", E), !0;
        } catch {
          return !1;
        }
      }
    },
    create: {
      value: (x, E) => (S, $) => {
        if ((0, a.isPredicate)(x)) {
          const g = (0, r.default)();
          (0, f.default)(S, $ ?? (() => (0, i.inferLabel)(g)), x);
          return;
        }
        (0, f.default)(S, $ ?? x, E);
      }
    }
  });
  const p = (0, c.default)((0, s.default)(d));
  e.default = p, n(Sa, e);
  var u = ni;
  Object.defineProperty(e, "ArgumentError", { enumerable: !0, get: function() {
    return u.ArgumentError;
  } });
})(Qp);
var gl = {};
Object.defineProperty(gl, "__esModule", { value: !0 });
gl.InvariantCulture = void 0;
const M0 = {
  Invariant: "Invariant"
};
gl.InvariantCulture = M0.Invariant;
var b0 = Y && Y.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(go, "__esModule", { value: !0 });
const te = b0(Qp), Qu = gl;
class Se {
  static notNull(t, n) {
    if (t === null)
      throw `${n || "Value"} should not be null.`;
  }
  static notUndefined(t, n) {
    if (t === void 0)
      throw `${n || "Value"} should not be undefined.`;
  }
  static notNullOrUndefined(t, n) {
    if (t == null)
      throw Error(`${n || "Value"} should not be null or undefined. Value is ${t === null ? "null" : "undefined"}.`);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static parsableInteger(t, n) {
    const r = parseInt(t);
    if (isNaN(r) || r.toString() !== t.toString())
      throw Error(`${n || `Value '${t}'`} can not be parsed to an integer.`);
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static parsableFloat(t, n) {
    const r = parseFloat(t);
    if (isNaN(r) || r.toString() !== t.toString())
      throw Error(`${n || `Value '${t}'`} can not be parsed to a float/decimal.`);
  }
  static arrayNoneNullOrUndefined(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => i == null))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null or undefined.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static arrayNoneNullOrEmptyString(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => i == null || typeof i == "string" && (i.length === 0 || i.trim().length === 0)))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null, undefined or empty string.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static arrayNoneNullOrInvariantCulture(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => i == null || i === Qu.InvariantCulture))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should not contain null, undefined or '${Qu.InvariantCulture}'.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isStringArray(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => typeof i != "string"))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type string.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isIntegerArray(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => typeof i != "number" || !Number.isInteger(i)))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type number.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
  static isNumberArray(t, n, r = !1) {
    if (!r)
      Se.notNullOrUndefined(t);
    else if (t == null)
      return;
    if (Array.isArray(t)) {
      if (t.some((i) => typeof i != "number"))
        throw Error(`Array ${n ? ` '${n}' ` : ""}should only contain values of type number.`);
    } else
      throw Error(`Value ${n ? ` '${n}' ` : ""}is not an array.`);
  }
}
go.default = Se;
Se.isString = te.default.create(te.default.string);
Se.isInteger = te.default.create(te.default.number.integer);
Se.arrayNotEmpty = te.default.create(te.default.array.nonEmpty);
Se.arrayMaxOne = te.default.create(te.default.array.maxLength(1));
Se.stringNotNullOrEmpty = te.default.create(te.default.string.nonEmpty.validate((e) => ({
  validator: e.trim().length > 0,
  message: (t) => `Expected ${t} not to be an empty or all whitespace string ('${e}').`
})));
Se.validId = te.default.create(te.default.number.integer.not.infinite.greaterThan(0));
Se.validIdOrNull = te.default.create(te.default.any(te.default.null, te.default.number.integer.not.infinite.greaterThan(0)));
Se.validIds = te.default.create(te.default.any(te.default.array.empty, te.default.array.ofType(te.default.number.integer.not.infinite.greaterThan(0))));
Se.notInvariantCulture = te.default.create(te.default.string.nonEmpty.not.equals(Qu.InvariantCulture));
Se.notNegative = te.default.create(te.default.number.not.negative);
Se.greaterThan = (e, t) => te.default.create(te.default.number.greaterThan(t))(e);
Se.greaterThanOrEqual = (e, t) => te.default.create(te.default.number.greaterThanOrEqual(t))(e);
Se.lessThan = (e, t) => te.default.create(te.default.number.lessThan(t))(e);
Se.lessThanOrEqual = (e, t) => te.default.create(te.default.number.lessThanOrEqual(t))(e);
Se.isNumber = te.default.create(te.default.number);
var _o = {}, uc = Y && Y.__decorate || function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, sc = Y && Y.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, R0 = Y && Y.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Nr;
Object.defineProperty(_o, "__esModule", { value: !0 });
var Yu = _o.PropertyLoadOption = void 0;
const Br = yo, Qf = R0(go), bi = mo;
let ar = Nr = class {
  constructor(t) {
    this.loadOption = bi.LoadOption.None, this.properties = [], t != null && (t instanceof Nr ? (this.loadOption = t.loadOption, this.properties = [...t.properties]) : typeof t == "string" ? (Qf.default.stringNotNullOrEmpty(t), this.loadOption = bi.LoadOption.Custom, this.properties = [t]) : t instanceof Array ? (Qf.default.arrayNotEmpty(t), this.loadOption = bi.LoadOption.Custom, this.properties = [...t]) : this.loadOption = t);
  }
  deepClone() {
    return Br.JSON.deserialize(Br.JSON.serialize(this), Nr);
  }
};
ar.None = new Nr(bi.LoadOption.None);
ar.All = new Nr(bi.LoadOption.All);
uc([
  (0, Br.JsonProperty)("load_option"),
  sc("design:type", Number)
], ar.prototype, "loadOption", void 0);
uc([
  (0, Br.JsonProperty)("properties"),
  (0, Br.JsonElementType)(String),
  sc("design:type", Array)
], ar.prototype, "properties", void 0);
ar = Nr = uc([
  (0, Br.JsonObject)(),
  sc("design:paramtypes", [Object])
], ar);
Yu = _o.PropertyLoadOption = ar;
var wo = {}, vl = {};
Object.defineProperty(vl, "__esModule", { value: !0 });
vl.TypeGuards = void 0;
class I0 {
  /**
   * A naive type guard to check if we are dealing with a string array.
   *
   * @remarks
   * Only checks if the first element of the array is of type "string".
   *
   * @param obj - An array
   */
  static isStringArray(t) {
    return t != null && t.length > 0 && typeof t[0] == "string";
  }
  /**
   * A naive type guard to check if we are dealing with a number array.
   *
   * @remarks
   * Only checks if the first element of the array is of type "number".
   *
   * @param obj - An array
   */
  static isNumberArray(t) {
    return t != null && t.length > 0 && typeof t[0] == "number";
  }
}
vl.TypeGuards = I0;
var So = {}, _l = Y && Y.__decorate || function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, Mr = Y && Y.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, Xu;
Object.defineProperty(So, "__esModule", { value: !0 });
So.RelationSpecification = void 0;
const wl = yo;
let Wr = Xu = class {
  constructor(t, n) {
    this.role = null, this.name = t, this.role = n ?? null;
  }
  deepClone() {
    return new Xu(this.name, this.role);
  }
  deepEquals(t) {
    return t ? t.name === this.name && (!t.role && !this.role || t.role === this.role) : !1;
  }
  onDeserialized() {
    var t;
    this.role = (t = this.role) !== null && t !== void 0 ? t : null;
  }
};
_l([
  (0, wl.JsonProperty)("name"),
  Mr("design:type", String)
], Wr.prototype, "name", void 0);
_l([
  (0, wl.JsonProperty)("role"),
  Mr("design:type", Object)
], Wr.prototype, "role", void 0);
_l([
  (0, wl.OnDeserialized)(),
  Mr("design:type", Function),
  Mr("design:paramtypes", []),
  Mr("design:returntype", void 0)
], Wr.prototype, "onDeserialized", null);
Wr = Xu = _l([
  (0, wl.JsonObject)(),
  Mr("design:paramtypes", [String, Object])
], Wr);
So.RelationSpecification = Wr;
var cc = Y && Y.__decorate || function(e, t, n, r) {
  var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (a = e[s]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
  return i > 3 && o && Object.defineProperty(t, n, o), o;
}, fc = Y && Y.__metadata || function(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}, j0 = Y && Y.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, br;
Object.defineProperty(wo, "__esModule", { value: !0 });
var iy = wo.RelationLoadOption = void 0;
const Hr = yo, z0 = j0(go), D0 = vl, xa = mo, oy = So;
let lr = br = class {
  constructor(t) {
    this.loadOption = xa.LoadOption.None, this.relations = [], t != null && (t instanceof br ? (this.loadOption = t.loadOption, this.relations = [...t.relations]) : t instanceof Array ? (z0.default.arrayNotEmpty(t), this.loadOption = xa.LoadOption.Custom, D0.TypeGuards.isStringArray(t) ? this.relations = t.map((n) => new oy.RelationSpecification(n)) : this.relations = [...t]) : this.loadOption = t);
  }
  deepClone() {
    return Hr.JSON.deserialize(Hr.JSON.serialize(this), br);
  }
};
lr.None = new br(xa.LoadOption.None);
lr.All = new br(xa.LoadOption.All);
cc([
  (0, Hr.JsonProperty)("load_option"),
  fc("design:type", Number)
], lr.prototype, "loadOption", void 0);
cc([
  (0, Hr.JsonProperty)("relations"),
  (0, Hr.JsonElementType)(oy.RelationSpecification),
  fc("design:type", Array)
], lr.prototype, "relations", void 0);
lr = br = cc([
  (0, Hr.JsonObject)(),
  fc("design:paramtypes", [Object])
], lr);
iy = wo.RelationLoadOption = lr;
var Yf;
function F0() {
  if (Yf)
    return vi;
  Yf = 1;
  var e = Y && Y.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(vi, "__esModule", { value: !0 }), vi.EntityLoadConfigurationBuilder = void 0;
  const t = e(go), n = ho, r = ay(), i = mo, o = _o, a = wo, s = So;
  class c {
    constructor(d) {
      this._entityLoadConfiguration = new r.EntityLoadConfiguration(), d && (this._entityLoadConfiguration = d.deepClone());
    }
    inCultures(d) {
      return t.default.notNullOrUndefined(d), d instanceof Array ? (this._entityLoadConfiguration.cultureLoadOption = this._entityLoadConfiguration.cultureLoadOption || new n.CultureLoadOption(), this._entityLoadConfiguration.cultureLoadOption.loadOption = i.LoadOption.Custom, this._entityLoadConfiguration.cultureLoadOption.cultures = [
        ...new Set((this._entityLoadConfiguration.cultureLoadOption.cultures || []).concat(d))
      ]) : (this._entityLoadConfiguration.cultureLoadOption = this._entityLoadConfiguration.cultureLoadOption || new n.CultureLoadOption(), this._entityLoadConfiguration.cultureLoadOption.loadOption = d), this;
    }
    inCulture(d) {
      return t.default.notUndefined(d), t.default.stringNotNullOrEmpty(d), this.inCultures([d]);
    }
    withProperties(d) {
      return t.default.notNullOrUndefined(d), d instanceof Array ? (this._entityLoadConfiguration.propertyLoadOption = this._entityLoadConfiguration.propertyLoadOption || new o.PropertyLoadOption(), this._entityLoadConfiguration.propertyLoadOption.loadOption = i.LoadOption.Custom, this._entityLoadConfiguration.propertyLoadOption.properties = [
        ...new Set((this._entityLoadConfiguration.propertyLoadOption.properties || []).concat(d))
      ]) : (this._entityLoadConfiguration.propertyLoadOption = this._entityLoadConfiguration.propertyLoadOption || new o.PropertyLoadOption(), this._entityLoadConfiguration.propertyLoadOption.loadOption = d), this;
    }
    withProperty(d) {
      return t.default.notUndefined(d), t.default.stringNotNullOrEmpty(d), this.withProperties([d]);
    }
    withRelations(d) {
      if (t.default.notNullOrUndefined(d), d instanceof Array) {
        let p = d.map((u) => typeof u == "string" ? new s.RelationSpecification(u) : u);
        this._entityLoadConfiguration.relationLoadOption = this._entityLoadConfiguration.relationLoadOption || new a.RelationLoadOption(), this._entityLoadConfiguration.relationLoadOption.loadOption = i.LoadOption.Custom, p = p.filter((u) => this._entityLoadConfiguration.relationLoadOption.relations.findIndex((x) => typeof u == "string" ? x.name === u : x.deepEquals(u)) === -1), this._entityLoadConfiguration.relationLoadOption.relations = (this._entityLoadConfiguration.relationLoadOption.relations || []).concat(p);
      } else
        this._entityLoadConfiguration.relationLoadOption = this._entityLoadConfiguration.relationLoadOption || new a.RelationLoadOption(), this._entityLoadConfiguration.relationLoadOption.loadOption = d;
      return this;
    }
    withRelation(d, p) {
      return t.default.notUndefined(d), t.default.stringNotNullOrEmpty(d), this.withRelations([new s.RelationSpecification(d, p)]);
    }
    build() {
      return this._entityLoadConfiguration.deepClone();
    }
  }
  return vi.EntityLoadConfigurationBuilder = c, vi;
}
var Xf;
function ay() {
  if (Xf)
    return gi;
  Xf = 1;
  var e = Y && Y.__decorate || function(f, d, p, u) {
    var x = arguments.length, E = x < 3 ? d : u === null ? u = Object.getOwnPropertyDescriptor(d, p) : u, S;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
      E = Reflect.decorate(f, d, p, u);
    else
      for (var $ = f.length - 1; $ >= 0; $--)
        (S = f[$]) && (E = (x < 3 ? S(E) : x > 3 ? S(d, p, E) : S(d, p)) || E);
    return x > 3 && E && Object.defineProperty(d, p, E), E;
  }, t = Y && Y.__metadata || function(f, d) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
      return Reflect.metadata(f, d);
  }, n;
  Object.defineProperty(gi, "__esModule", { value: !0 }), gi.EntityLoadConfiguration = void 0;
  const r = yo, i = ho, o = F0(), a = _o, s = wo;
  let c = n = class {
    constructor(d, p, u) {
      d && (this.cultureLoadOption = d), p && (this.propertyLoadOption = p), u && (this.relationLoadOption = u);
    }
    builder() {
      return new o.EntityLoadConfigurationBuilder(this);
    }
    deepClone() {
      return new n(this.cultureLoadOption && this.cultureLoadOption.deepClone(), this.propertyLoadOption && this.propertyLoadOption.deepClone(), this.relationLoadOption && this.relationLoadOption.deepClone());
    }
  };
  return c.Minimal = new n(i.CultureLoadOption.None, a.PropertyLoadOption.None, s.RelationLoadOption.None), c.Default = new n(i.CultureLoadOption.Default, a.PropertyLoadOption.All, s.RelationLoadOption.None), c.DefaultCultureFull = new n(i.CultureLoadOption.Default, a.PropertyLoadOption.All, s.RelationLoadOption.All), c.Full = new n(i.CultureLoadOption.All, a.PropertyLoadOption.All, s.RelationLoadOption.All), e([
    (0, r.JsonProperty)("culture_option"),
    t("design:type", Object)
  ], c.prototype, "cultureLoadOption", void 0), e([
    (0, r.JsonProperty)("property_option"),
    t("design:type", Object)
  ], c.prototype, "propertyLoadOption", void 0), e([
    (0, r.JsonProperty)("relation_option"),
    t("design:type", Object)
  ], c.prototype, "relationLoadOption", void 0), c = n = e([
    (0, r.JsonObject)(),
    t("design:paramtypes", [Object, Object, Object])
  ], c), gi.EntityLoadConfiguration = c, gi;
}
var qf = ay();
const V0 = /* @__PURE__ */ new Set([
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
]), U0 = /* @__PURE__ */ new Set([
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
]), B0 = /(Type|Status|Tag|Category|Classification|Taxonomy|Brand|Region|Language|Country|Purpose|Usage|LifeCycle|DRM)/i, qu = {
  asset: "#378ADD",
  product: "#1D9E75",
  content: "#D85A30",
  taxonomy: "#7F77DD",
  unknown: "#888780"
}, ly = {
  asset: "Asset",
  product: "Product",
  content: "Content",
  taxonomy: "Taxonomy",
  unknown: "Other"
}, W0 = {
  asset: "🖼",
  product: "📦",
  content: "📄",
  taxonomy: "🏷",
  unknown: "⬡"
};
function zo(e) {
  var r, i, o;
  if (e.definitionName)
    return e.definitionName;
  const t = e, n = t == null ? void 0 : t.definition;
  return (n == null ? void 0 : n.name) ?? ((r = t == null ? void 0 : t.entityDefinition) == null ? void 0 : r.name) ?? ((i = t == null ? void 0 : t.entitydefinition) == null ? void 0 : i.name) ?? ((o = t == null ? void 0 : t.systemProperties) == null ? void 0 : o.definitionName) ?? "";
}
function H0(e) {
  return !!(e.startsWith("PCM.") || e === "M.Product" || /\.Product(\.|$)/i.test(e) || /\bProduct\b/i.test(e) && !/ProductType|Taxonomy/i.test(e));
}
function Do(e) {
  return e ? e === "M.Asset" ? "asset" : H0(e) ? "product" : e.startsWith("CMP.") ? "content" : U0.has(e) ? "unknown" : V0.has(e) || e.startsWith("M.Taxonomy") || e.startsWith("Taxonomy") || e.startsWith("M.") && B0.test(e) ? "taxonomy" : "unknown" : "unknown";
}
const G0 = 900, dc = 124, uy = 150, sy = 120, pc = 108, K0 = 560, J0 = 280, Zf = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], Q0 = 8, Y0 = !1, X0 = [], Kt = (e, ...t) => console.log(`%c[Ancestry] ${e}`, "color:#7F77DD;font-weight:bold", ...t), Fo = (e, ...t) => console.warn(`[Ancestry] ${e}`, ...t), q0 = `
  @keyframes ancestry-spin { to { transform: rotate(360deg); } }
`;
function Zu(e, t) {
  var i;
  if (e.id != null)
    return e.id;
  const r = e.systemProperties;
  if (r != null) {
    const o = typeof r.id == "number" ? r.id : (i = r.get) == null ? void 0 : i.call(r, "id");
    if (typeof o == "number")
      return o;
  }
  return t;
}
function wi(e) {
  for (const n of [
    "fileName",
    "FileName",
    "name",
    "Name",
    "title",
    "Title",
    "label",
    "Label",
    "productName",
    "contentName"
  ])
    try {
      const r = e.getPropertyValue(n);
      if (typeof r == "string" && r.length > 0)
        return r;
    } catch {
    }
  const t = Zu(e);
  return e.identifier ?? (t != null ? `#${t}` : "Unknown");
}
function ed(e) {
  if (typeof e == "string" && e.length > 0)
    return e;
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.length > 0)
      return t;
  }
  return null;
}
function mu(e) {
  var r, i, o, a, s, c;
  for (const f of Zf)
    try {
      const d = (r = e.getRendition) == null ? void 0 : r.call(e, f), p = ed((o = (i = d == null ? void 0 : d.items) == null ? void 0 : i[0]) == null ? void 0 : o.href);
      if (p)
        return p;
    } catch {
    }
  const t = e, n = t.renditions;
  if (n != null && typeof n == "object")
    for (const f of Zf) {
      const d = n[f];
      if (!Array.isArray(d) || d.length === 0)
        continue;
      const p = ed(((a = d[0]) == null ? void 0 : a.href) ?? d[0]);
      if (p)
        return p;
    }
  try {
    const f = ((s = t.getPublicLink) == null ? void 0 : s.call(t, "thumbnail")) ?? ((c = t.getPublicLink) == null ? void 0 : c.call(t, "preview"));
    return typeof f == "string" ? f : null;
  } catch {
    return null;
  }
}
function Z0(e, t, n) {
  const r = new Set(n), i = [], o = e;
  if (Array.isArray(o.relations)) {
    for (const a of o.relations) {
      const s = a == null ? void 0 : a.name;
      if (typeof s != "string" || !s || r.has(s))
        continue;
      const c = typeof a.getIds == "function" ? a.getIds() : td(e, s);
      c.length > 0 && i.push({ name: s, ids: c.slice(0, t) });
    }
    return i;
  }
  if (o.relations && typeof o.relations == "object")
    for (const a of Object.keys(o.relations)) {
      if (r.has(a))
        continue;
      const s = td(e, a).slice(0, t);
      s.length > 0 && i.push({ name: a, ids: s });
    }
  return i;
}
function td(e, t) {
  var i;
  try {
    const o = e.getRelation(t);
    if (o != null)
      return o.getIds();
  } catch {
  }
  const r = (i = e.relations) == null ? void 0 : i[t];
  return Array.isArray(r) ? r.map((o) => {
    if (typeof o == "number")
      return o;
    if (o != null && typeof o == "object") {
      const a = o;
      if (typeof a.id == "number")
        return a.id;
      if (typeof a.entityId == "number")
        return a.entityId;
    }
    return null;
  }).filter((o) => o != null) : [];
}
const es = 24;
function nd(e) {
  return e.isCenter ? { w: uy, h: sy } : { w: dc, h: pc };
}
function e1(e, t, n) {
  if (e <= 1)
    return 0;
  const r = Math.max(t, n) + es, i = Math.PI / e;
  return r / (2 * Math.sin(i));
}
function t1(e, t, n, r, i, o = 120) {
  const a = e.filter((s) => !s.fixed);
  for (let s = 0; s < o; s++) {
    let c = !1;
    for (let f = 0; f < e.length; f++)
      for (let d = f + 1; d < e.length; d++) {
        const p = e[f], u = e[d], x = u.x - p.x, E = u.y - p.y, S = (p.w + u.w) / 2 + es - Math.abs(x), $ = (p.h + u.h) / 2 + es - Math.abs(E);
        if (!(S <= 0 || $ <= 0))
          if (c = !0, S < $) {
            const g = S / 2, h = x === 0 ? f < d ? 1 : -1 : Math.sign(x);
            p.fixed || (p.x -= g * h), u.fixed || (u.x += g * h);
          } else {
            const g = $ / 2, h = E === 0 ? f < d ? 1 : -1 : Math.sign(E);
            p.fixed || (p.y -= g * h), u.fixed || (u.y += g * h);
          }
      }
    for (const f of a) {
      const d = (f.x - t) / r, p = (f.y - n) / i, u = d * d + p * p;
      if (u > 1) {
        const x = 1 / Math.sqrt(u);
        f.x = t + (f.x - t) * x, f.y = n + (f.y - n) * x, c = !0;
      }
    }
    if (!c)
      break;
  }
}
function n1(e, t, n, r, i) {
  const o = /* @__PURE__ */ new Map(), a = r / 2, s = i / 2, c = e.find((O) => O.isCenter);
  if (!c)
    return o;
  const f = e.filter((O) => !O.isCenter), d = nd(c), p = 32, u = a - d.w / 2 - p, x = s - d.h / 2 - p, E = e1(f.length, dc, pc), S = Math.max(0, f.length - 4) * 18, $ = Math.min(
    u,
    Math.max(n + S, E, r * 0.3)
  ), g = Math.min(
    x,
    Math.max(E * 0.82, n * 0.72 + S * 0.4, i * 0.28)
  ), h = [{
    id: c.id,
    x: a,
    y: s,
    w: d.w,
    h: d.h,
    fixed: !0
  }], m = f.length > 0 ? 2 * Math.PI / f.length : 0;
  f.forEach((O, w) => {
    const l = nd(O), v = m * w - Math.PI / 2;
    h.push({
      id: O.id,
      x: a + Math.cos(v) * $,
      y: s + Math.sin(v) * g,
      w: l.w,
      h: l.h,
      fixed: !1
    });
  }), f.length > 0 && t1(h, a, s, u, x);
  for (const O of h)
    o.set(O.id, { x: O.x, y: O.y });
  return o;
}
function r1(e, t, n, r, i, o, a) {
  var ht;
  const [s, c] = j.useState([]), [f, d] = j.useState([]), [p, u] = j.useState(!0), [x, E] = j.useState(!1), [S, $] = j.useState(null), g = j.useRef(0), h = Zu(t) ?? r, [m, O] = j.useState(
    () => h ? [{ entityId: h, label: wi(t) }] : []
  ), [w, l] = j.useState(0);
  j.useEffect(() => {
    h && (O((ce) => ce.length > 0 && ce[0].entityId === h ? ce : [{ entityId: h, label: wi(t) }]), l(0));
  }, [h]);
  const v = (ht = m[w]) == null ? void 0 : ht.entityId, L = w > 0, K = w < m.length - 1, D = j.useCallback((ce, he) => {
    O((je) => [...je.slice(0, w + 1), { entityId: ce, label: he }]), l((je) => je + 1);
  }, [w]), se = j.useCallback(() => {
    L && l((ce) => ce - 1);
  }, [L]), Pe = j.useCallback(() => {
    K && l((ce) => ce + 1);
  }, [K]), ut = j.useCallback((ce) => {
    ce >= 0 && ce < m.length && l(ce);
  }, [m.length]);
  return j.useEffect(() => {
    if (!e || !v) {
      Fo("build() skipped — missing client or entity id", { client: !!e, rootEntityId: v }), u(!1), E(!1), $(v ? null : "No entity id available. Open Ancestry from an entity detail page.");
      return;
    }
    const ce = ++g.current, he = () => ce !== g.current;
    async function je() {
      if (Kt("build() started", { rootEntityId: v, buildId: ce }), E(!0), await new Promise((M) => setTimeout(M, 150)), !he()) {
        u(!0);
        try {
          const M = new qf.EntityLoadConfiguration();
          M.relationLoadOption = iy.All, M.propertyLoadOption = Yu.All, M.cultureLoadOption = Ku.Default, Kt("Calling client.entities.getAsync", v);
          const F = await e.entities.getAsync(v, M);
          if (he())
            return;
          if (F == null) {
            Fo("getAsync returned null for entity", v), $("Entity could not be loaded.");
            return;
          }
          Kt("Loaded entity", {
            id: F.id,
            definition: zo(F)
          });
          const B = Z0(F, o, a), H = B.flatMap((X) => X.ids);
          Kt(`${B.length} relations with links, ${H.length} related ids`, {
            relations: B.map((X) => `${X.name}(${X.ids.length})`)
          });
          const Z = new qf.EntityLoadConfiguration();
          Z.propertyLoadOption = Yu.All, Z.cultureLoadOption = Ku.Default;
          const nt = /* @__PURE__ */ new Map();
          if (await Promise.all(
            H.map(async (X) => {
              try {
                const ve = await e.entities.getAsync(X, Z);
                if (ve != null) {
                  const Be = zo(ve), rt = Do(Be);
                  nt.set(X, ve), Kt(`Loaded ${X}: def="${Be}" domain="${rt}" label="${wi(ve)}"`);
                }
              } catch (ve) {
                Fo(`Could not fetch related entity ${X}`, ve);
              }
            })
          ), Kt(`Loaded ${nt.size} related entities`), he())
            return;
          const N = [], z = [], ne = zo(F), ge = `center-${F.id}`;
          Kt(`Center entity: def="${ne}" domain="${Do(ne)}"`);
          const Oe = Zu(F);
          if (Oe == null) {
            Fo("Center entity has no resolvable id");
            return;
          }
          N.push({
            id: ge,
            entityId: Oe,
            label: wi(F),
            thumbnail: mu(F) ?? mu(n),
            entityDefinition: ne,
            domain: Do(ne),
            isCenter: !0
          });
          for (const { name: X, ids: ve } of B)
            for (const Be of ve) {
              const rt = nt.get(Be);
              if (!rt)
                continue;
              const gn = zo(rt), vn = Do(gn);
              if (vn === "unknown") {
                Kt(`Skipping entity ${Be} def="${gn}" — domain unknown`);
                continue;
              }
              const _n = `node-${rt.id}`;
              N.find((si) => si.id === _n) || N.push({
                id: _n,
                entityId: rt.id,
                label: wi(rt),
                thumbnail: mu(rt),
                entityDefinition: gn,
                domain: vn,
                isCenter: !1
              }), z.push({
                id: `edge-${ge}-${_n}-${X}`,
                sourceId: ge,
                targetId: _n,
                relationName: X
              });
            }
          if (Kt(`Graph built: ${N.length} nodes, ${z.length} edges`, {
            nodes: N.map((X) => `${X.label} [${X.domain}]`)
          }), he())
            return;
          c(N), d(z), $(null);
        } catch (M) {
          console.error("[Ancestry] build() threw:", M), he() || $(M instanceof Error ? M.message : "Failed to load ancestry");
        } finally {
          he() || (Kt("build() finalising", { rootEntityId: v, buildId: ce }), u(!1), E(!1));
        }
      }
    }
    return je(), () => {
    };
  }, [e, v, o, a]), {
    nodes: s,
    edges: f,
    loading: p,
    transitioning: x,
    error: S,
    history: m,
    historyIndex: w,
    canGoBack: L,
    canGoForward: K,
    navigateTo: D,
    goBack: se,
    goForward: Pe,
    jumpTo: ut
  };
}
function i1({ node: e, position: t, onNavigate: n, onHover: r }) {
  const i = e.isCenter ? uy : dc, o = e.isCenter ? sy : pc, a = qu[e.domain], s = W0[e.domain];
  return /* @__PURE__ */ vt(
    "div",
    {
      className: `ancestry-node${e.isCenter ? " ancestry-node--center" : ""}`,
      onMouseEnter: () => !e.isCenter && r(e),
      onMouseLeave: () => r(null),
      onClick: () => !e.isCenter && n(e.entityId, e.label),
      style: {
        position: "absolute",
        left: t.x - i / 2,
        top: t.y - o / 2,
        width: i,
        borderColor: a,
        borderWidth: e.isCenter ? 2 : 1,
        cursor: e.isCenter ? "default" : "pointer",
        zIndex: e.isCenter ? 5 : 1
      },
      children: [
        e.thumbnail ? /* @__PURE__ */ G(
          "img",
          {
            src: e.thumbnail,
            alt: e.label,
            className: "ancestry-node__thumb",
            onError: (c) => {
              c.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ G(
          "div",
          {
            className: "ancestry-node__icon",
            style: { background: `${a}18`, borderColor: `${a}44` },
            children: s
          }
        ),
        /* @__PURE__ */ G("div", { className: "ancestry-node__label", title: e.label, children: e.label }),
        /* @__PURE__ */ G("div", { className: "ancestry-node__domain", style: { color: a }, children: ly[e.domain] }),
        /* @__PURE__ */ G("div", { className: "ancestry-node__definition", children: e.entityDefinition })
      ]
    }
  );
}
function Vo({
  onClick: e,
  disabled: t = !1,
  children: n
}) {
  return /* @__PURE__ */ G(
    "button",
    {
      className: `ancestry-toolbar-btn${t ? " ancestry-toolbar-btn--disabled" : ""}`,
      onClick: e,
      disabled: t,
      children: n
    }
  );
}
const o1 = ({
  client: e,
  options: t,
  entity: n
}) => {
  const r = (t == null ? void 0 : t.canvasHeight) ?? K0, i = (t == null ? void 0 : t.radius) ?? J0, o = (t == null ? void 0 : t.maxPerGroup) ?? Q0, a = j.useMemo(
    () => (t == null ? void 0 : t.excludeRelations) ?? X0,
    [t == null ? void 0 : t.excludeRelations]
  ), s = (t == null ? void 0 : t.showEdgeLabels) ?? Y0, c = t == null ? void 0 : t.entityId, [f, d] = j.useState(s), [p, u] = j.useState(null), [x, E] = j.useState(G0), S = j.useRef(null), $ = j.useRef({ x: 0, y: 0, scale: 1 }), g = j.useRef(!1), h = j.useRef({ x: 0, y: 0 }), {
    nodes: m,
    edges: O,
    loading: w,
    transitioning: l,
    error: v,
    history: L,
    historyIndex: K,
    canGoBack: D,
    canGoForward: se,
    navigateTo: Pe,
    goBack: ut,
    goForward: ht,
    jumpTo: ce
  } = r1(e, n, n, c, i, o, a), he = j.useCallback(() => {
    const N = S.current;
    if (!N)
      return;
    const { x: z, y: ne, scale: ge } = $.current, Oe = `translate(${z}px, ${ne}px) scale(${ge})`, X = N.querySelector(".ancestry-node-layer"), ve = N.querySelector(".ancestry-edge-svg");
    X && (X.style.transform = Oe, X.style.transformOrigin = "0 0"), ve && (ve.style.transform = Oe, ve.style.transformOrigin = "0 0");
  }, []);
  j.useEffect(() => {
    const N = S.current;
    if (!N)
      return;
    const z = () => {
      const ge = N.clientWidth;
      ge > 0 && E(ge);
    };
    z();
    const ne = new ResizeObserver(z);
    return ne.observe(N), () => ne.disconnect();
  }, []), j.useEffect(() => {
    $.current = { x: 0, y: 0, scale: 1 }, he();
  }, [K, x, he]);
  const je = j.useCallback((N) => {
    N.preventDefault();
    const z = S.current;
    if (!z)
      return;
    const ne = z.getBoundingClientRect(), ge = N.clientX - ne.left, Oe = N.clientY - ne.top, X = Math.max(0.3, Math.min(3, $.current.scale * (N.deltaY > 0 ? 0.9 : 1.1))), ve = X / $.current.scale;
    $.current = {
      x: ge - (ge - $.current.x) * ve,
      y: Oe - (Oe - $.current.y) * ve,
      scale: X
    }, he();
  }, [he]);
  j.useEffect(() => {
    const N = S.current;
    if (N)
      return N.addEventListener("wheel", je, { passive: !1 }), () => N.removeEventListener("wheel", je);
  }, [je]);
  const M = (N) => {
    N.target.closest(".ancestry-node") || (g.current = !0, h.current = { x: N.clientX - $.current.x, y: N.clientY - $.current.y });
  }, F = (N) => {
    g.current && ($.current.x = N.clientX - h.current.x, $.current.y = N.clientY - h.current.y, he());
  }, B = () => {
    g.current = !1;
  }, H = n1(m, O, i, x, r), Z = l || w, nt = Array.from(
    new Set(m.filter((N) => !N.isCenter).map((N) => N.domain))
  );
  return v ? /* @__PURE__ */ G("div", { className: "ancestry-root", children: /* @__PURE__ */ vt("div", { className: "ancestry-error", children: [
    "Could not load ancestry: ",
    v
  ] }) }) : /* @__PURE__ */ vt("div", { className: "ancestry-root", children: [
    /* @__PURE__ */ G("style", { children: q0 }),
    /* @__PURE__ */ vt("div", { className: "ancestry-toolbar", children: [
      /* @__PURE__ */ G(Vo, { onClick: () => {
        $.current = { x: 0, y: 0, scale: 1 }, he();
      }, children: "⊹ Reset" }),
      /* @__PURE__ */ G(Vo, { onClick: ut, disabled: !D, children: "← Back" }),
      /* @__PURE__ */ G(Vo, { onClick: ht, disabled: !se, children: "Forward →" }),
      /* @__PURE__ */ G(Vo, { onClick: () => d((N) => !N), children: f ? "◎ Hide relations" : "◉ Show relations" })
    ] }),
    /* @__PURE__ */ G("div", { className: "ancestry-breadcrumb", children: L.map((N, z) => /* @__PURE__ */ vt(j.Fragment, { children: [
      z > 0 && /* @__PURE__ */ G("span", { className: "ancestry-breadcrumb__sep", children: "›" }),
      /* @__PURE__ */ G(
        "button",
        {
          className: `ancestry-breadcrumb__item${z === K ? " ancestry-breadcrumb__item--active" : ""}`,
          onClick: () => ce(z),
          disabled: z === K,
          children: N.label
        }
      )
    ] }, `${N.entityId}-${z}`)) }),
    /* @__PURE__ */ vt(
      "div",
      {
        ref: S,
        className: "ancestry-canvas",
        style: { height: r },
        onMouseDown: M,
        onMouseMove: F,
        onMouseUp: B,
        onMouseLeave: B,
        children: [
          /* @__PURE__ */ vt(
            "div",
            {
              className: "ancestry-graph-layer",
              style: { opacity: Z ? 0 : 1, pointerEvents: Z ? "none" : "auto" },
              children: [
                /* @__PURE__ */ vt(
                  "svg",
                  {
                    className: "ancestry-edge-svg",
                    style: { position: "absolute", top: 0, left: 0, width: "100%", height: r, pointerEvents: "none" },
                    viewBox: `0 0 ${x} ${r}`,
                    preserveAspectRatio: "none",
                    children: [
                      /* @__PURE__ */ G("defs", { children: /* @__PURE__ */ G(
                        "marker",
                        {
                          id: "ancestry-arrow",
                          viewBox: "0 0 10 10",
                          refX: "8",
                          refY: "5",
                          markerWidth: "5",
                          markerHeight: "5",
                          orient: "auto-start-reverse",
                          children: /* @__PURE__ */ G(
                            "path",
                            {
                              d: "M2 1L8 5L2 9",
                              fill: "none",
                              stroke: "context-stroke",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      ) }),
                      O.map((N) => {
                        const z = H.get(N.sourceId), ne = H.get(N.targetId);
                        if (!z || !ne)
                          return null;
                        const ge = m.find((Be) => Be.id === N.targetId), Oe = ge ? qu[ge.domain] : "#888", X = (z.x + ne.x) / 2, ve = (z.y + ne.y) / 2;
                        return /* @__PURE__ */ vt("g", { children: [
                          /* @__PURE__ */ G(
                            "line",
                            {
                              x1: z.x,
                              y1: z.y,
                              x2: ne.x,
                              y2: ne.y,
                              stroke: Oe,
                              strokeWidth: 1,
                              strokeOpacity: 0.45,
                              markerEnd: "url(#ancestry-arrow)"
                            }
                          ),
                          f && /* @__PURE__ */ G(
                            "text",
                            {
                              x: X,
                              y: ve - 6,
                              textAnchor: "middle",
                              fontSize: 9,
                              fill: "#999999",
                              fontFamily: "inherit",
                              children: N.relationName
                            }
                          )
                        ] }, N.id);
                      })
                    ]
                  }
                ),
                /* @__PURE__ */ G(
                  "div",
                  {
                    className: "ancestry-node-layer",
                    style: { position: "absolute", top: 0, left: 0, width: "100%", height: r },
                    children: m.map((N) => {
                      const z = H.get(N.id);
                      return z ? /* @__PURE__ */ G(
                        i1,
                        {
                          node: N,
                          position: z,
                          onNavigate: Pe,
                          onHover: u
                        },
                        N.id
                      ) : null;
                    })
                  }
                )
              ]
            }
          ),
          Z && /* @__PURE__ */ G("div", { className: "ancestry-spinner-wrap", children: /* @__PURE__ */ G("div", { className: "ancestry-spinner" }) }),
          p && /* @__PURE__ */ G("div", { className: "ancestry-hover-bar", children: (() => {
            const N = O.find((z) => z.targetId === p.id);
            return N ? `${N.relationName} → ${p.label} (${p.entityDefinition})` : p.label;
          })() }),
          !Z && m.length <= 1 && /* @__PURE__ */ vt("div", { className: "ancestry-empty", children: [
            /* @__PURE__ */ G("div", { className: "ancestry-empty__icon", children: "⬡" }),
            /* @__PURE__ */ G("p", { children: "No linked assets, products, content, or taxonomy found" })
          ] })
        ]
      }
    ),
    nt.length > 0 && /* @__PURE__ */ G("div", { className: "ancestry-legend", children: nt.map((N) => {
      const z = m.filter((ne) => ne.domain === N && !ne.isCenter).length;
      return /* @__PURE__ */ vt("div", { className: "ancestry-legend__item", children: [
        /* @__PURE__ */ G("div", { className: "ancestry-legend__dot", style: { background: qu[N] } }),
        ly[N],
        " (",
        z,
        ")"
      ] }, N);
    }) })
  ] });
}, a1 = ({ client: e, options: t, entity: n }) => n ? /* @__PURE__ */ G(o1, { client: e, options: t, entity: n }) : /* @__PURE__ */ G("div", { className: "ancestry-root", children: /* @__PURE__ */ vt("div", { className: "ancestry-empty", style: { position: "relative", height: 200 }, children: [
  /* @__PURE__ */ G("div", { className: "ancestry-empty__icon", children: "⬡" }),
  /* @__PURE__ */ G("p", { children: "No entity available. Open Ancestry from an entity detail page." })
] }) }), l1 = ec.memo(a1);
function u1(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const rd = "$$material";
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ke.apply(null, arguments);
}
function Sl(e, t) {
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
var s1 = !1;
function c1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function f1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var d1 = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !s1 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(f1(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = c1(i);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Ze = "-ms-", Pa = "-moz-", oe = "-webkit-", cy = "comm", yc = "rule", hc = "decl", p1 = "@import", fy = "@keyframes", y1 = "@layer", h1 = Math.abs, El = String.fromCharCode, m1 = Object.assign;
function g1(e, t) {
  return Ge(e, 0) ^ 45 ? (((t << 2 ^ Ge(e, 0)) << 2 ^ Ge(e, 1)) << 2 ^ Ge(e, 2)) << 2 ^ Ge(e, 3) : 0;
}
function dy(e) {
  return e.trim();
}
function v1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ae(e, t, n) {
  return e.replace(t, n);
}
function ts(e, t) {
  return e.indexOf(t);
}
function Ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function Hi(e, t, n) {
  return e.slice(t, n);
}
function Yt(e) {
  return e.length;
}
function mc(e) {
  return e.length;
}
function Uo(e, t) {
  return t.push(e), e;
}
function _1(e, t) {
  return e.map(t).join("");
}
var xl = 1, Gr = 1, py = 0, yt = 0, Me = 0, ai = "";
function Pl(e, t, n, r, i, o, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: xl, column: Gr, length: a, return: "" };
}
function Si(e, t) {
  return m1(Pl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function w1() {
  return Me;
}
function S1() {
  return Me = yt > 0 ? Ge(ai, --yt) : 0, Gr--, Me === 10 && (Gr = 1, xl--), Me;
}
function Et() {
  return Me = yt < py ? Ge(ai, yt++) : 0, Gr++, Me === 10 && (Gr = 1, xl++), Me;
}
function Zt() {
  return Ge(ai, yt);
}
function la() {
  return yt;
}
function Eo(e, t) {
  return Hi(ai, e, t);
}
function Gi(e) {
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
function yy(e) {
  return xl = Gr = 1, py = Yt(ai = e), yt = 0, [];
}
function hy(e) {
  return ai = "", e;
}
function ua(e) {
  return dy(Eo(yt - 1, ns(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function E1(e) {
  for (; (Me = Zt()) && Me < 33; )
    Et();
  return Gi(e) > 2 || Gi(Me) > 3 ? "" : " ";
}
function x1(e, t) {
  for (; --t && Et() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Eo(e, la() + (t < 6 && Zt() == 32 && Et() == 32));
}
function ns(e) {
  for (; Et(); )
    switch (Me) {
      case e:
        return yt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ns(Me);
        break;
      case 40:
        e === 41 && ns(e);
        break;
      case 92:
        Et();
        break;
    }
  return yt;
}
function P1(e, t) {
  for (; Et() && e + Me !== 47 + 10; )
    if (e + Me === 42 + 42 && Zt() === 47)
      break;
  return "/*" + Eo(t, yt - 1) + "*" + El(e === 47 ? e : Et());
}
function O1(e) {
  for (; !Gi(Zt()); )
    Et();
  return Eo(e, yt);
}
function $1(e) {
  return hy(sa("", null, null, null, [""], e = yy(e), 0, [0], e));
}
function sa(e, t, n, r, i, o, a, s, c) {
  for (var f = 0, d = 0, p = a, u = 0, x = 0, E = 0, S = 1, $ = 1, g = 1, h = 0, m = "", O = i, w = o, l = r, v = m; $; )
    switch (E = h, h = Et()) {
      case 40:
        if (E != 108 && Ge(v, p - 1) == 58) {
          ts(v += ae(ua(h), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        v += ua(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        v += E1(E);
        break;
      case 92:
        v += x1(la() - 1, 7);
        continue;
      case 47:
        switch (Zt()) {
          case 42:
          case 47:
            Uo(k1(P1(Et(), la()), t, n), c);
            break;
          default:
            v += "/";
        }
        break;
      case 123 * S:
        s[f++] = Yt(v) * g;
      case 125 * S:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            g == -1 && (v = ae(v, /\f/g, "")), x > 0 && Yt(v) - p && Uo(x > 32 ? od(v + ";", r, n, p - 1) : od(ae(v, " ", "") + ";", r, n, p - 2), c);
            break;
          case 59:
            v += ";";
          default:
            if (Uo(l = id(v, t, n, f, d, i, s, m, O = [], w = [], p), o), h === 123)
              if (d === 0)
                sa(v, t, l, l, O, o, p, s, w);
              else
                switch (u === 99 && Ge(v, 3) === 110 ? 100 : u) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sa(e, l, l, r && Uo(id(e, l, l, 0, 0, i, s, m, i, O = [], p), w), i, w, p, s, r ? O : w);
                    break;
                  default:
                    sa(v, l, l, l, [""], w, 0, s, w);
                }
        }
        f = d = x = 0, S = g = 1, m = v = "", p = a;
        break;
      case 58:
        p = 1 + Yt(v), x = E;
      default:
        if (S < 1) {
          if (h == 123)
            --S;
          else if (h == 125 && S++ == 0 && S1() == 125)
            continue;
        }
        switch (v += El(h), h * S) {
          case 38:
            g = d > 0 ? 1 : (v += "\f", -1);
            break;
          case 44:
            s[f++] = (Yt(v) - 1) * g, g = 1;
            break;
          case 64:
            Zt() === 45 && (v += ua(Et())), u = Zt(), d = p = Yt(m = v += O1(la())), h++;
            break;
          case 45:
            E === 45 && Yt(v) == 2 && (S = 0);
        }
    }
  return o;
}
function id(e, t, n, r, i, o, a, s, c, f, d) {
  for (var p = i - 1, u = i === 0 ? o : [""], x = mc(u), E = 0, S = 0, $ = 0; E < r; ++E)
    for (var g = 0, h = Hi(e, p + 1, p = h1(S = a[E])), m = e; g < x; ++g)
      (m = dy(S > 0 ? u[g] + " " + h : ae(h, /&\f/g, u[g]))) && (c[$++] = m);
  return Pl(e, t, n, i === 0 ? yc : s, c, f, d);
}
function k1(e, t, n) {
  return Pl(e, t, n, cy, El(w1()), Hi(e, 2, -2), 0);
}
function od(e, t, n, r) {
  return Pl(e, t, n, hc, Hi(e, 0, r), Hi(e, r + 1, -1), r);
}
function Rr(e, t) {
  for (var n = "", r = mc(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function C1(e, t, n, r) {
  switch (e.type) {
    case y1:
      if (e.children.length)
        break;
    case p1:
    case hc:
      return e.return = e.return || e.value;
    case cy:
      return "";
    case fy:
      return e.return = e.value + "{" + Rr(e.children, r) + "}";
    case yc:
      e.value = e.props.join(",");
  }
  return Yt(n = Rr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function A1(e) {
  var t = mc(e);
  return function(n, r, i, o) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](n, r, i, o) || "";
    return a;
  };
}
function T1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function my(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var L1 = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = Zt(), i === 38 && o === 12 && (n[r] = 1), !Gi(o); )
    Et();
  return Eo(t, yt);
}, N1 = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Gi(i)) {
      case 0:
        i === 38 && Zt() === 12 && (n[r] = 1), t[r] += L1(yt - 1, n, r);
        break;
      case 2:
        t[r] += ua(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Zt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += El(i);
    }
  while (i = Et());
  return t;
}, M1 = function(t, n) {
  return hy(N1(yy(t), n));
}, ad = /* @__PURE__ */ new WeakMap(), b1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ad.get(r)) && !i) {
      ad.set(t, !0);
      for (var o = [], a = M1(n, o), s = r.props, c = 0, f = 0; c < a.length; c++)
        for (var d = 0; d < s.length; d++, f++)
          t.props[f] = o[c] ? a[c].replace(/&\f/g, s[d]) : s[d] + " " + a[c];
    }
  }
}, R1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function gy(e, t) {
  switch (g1(e, t)) {
    case 5103:
      return oe + "print-" + e + e;
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
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + Pa + e + Ze + e + e;
    case 6828:
    case 4268:
      return oe + e + Ze + e + e;
    case 6165:
      return oe + e + Ze + "flex-" + e + e;
    case 5187:
      return oe + e + ae(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Ze + "flex-$1$2") + e;
    case 5443:
      return oe + e + Ze + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Ze + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Ze + ae(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Ze + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ae(e, "-grow", "") + oe + e + Ze + ae(e, "grow", "positive") + e;
    case 4554:
      return oe + ae(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Ze + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
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
      if (Yt(e) - 1 - t > 6)
        switch (Ge(e, t + 1)) {
          case 109:
            if (Ge(e, t + 4) !== 45)
              break;
          case 102:
            return ae(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + Pa + (Ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ts(e, "stretch") ? gy(ae(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ge(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ge(e, Yt(e) - 3 - (~ts(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + oe) + e;
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + Ze + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ge(e, t + 11)) {
        case 114:
          return oe + e + Ze + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Ze + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Ze + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Ze + e + e;
  }
  return e;
}
var I1 = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case hc:
        t.return = gy(t.value, t.length);
        break;
      case fy:
        return Rr([Si(t, {
          value: ae(t.value, "@", "@" + oe)
        })], i);
      case yc:
        if (t.length)
          return _1(t.props, function(o) {
            switch (v1(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Rr([Si(t, {
                  props: [ae(o, /:(read-\w+)/, ":" + Pa + "$1")]
                })], i);
              case "::placeholder":
                return Rr([Si(t, {
                  props: [ae(o, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), Si(t, {
                  props: [ae(o, /:(plac\w+)/, ":" + Pa + "$1")]
                }), Si(t, {
                  props: [ae(o, /:(plac\w+)/, Ze + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, j1 = [I1], z1 = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(S) {
      var $ = S.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || j1, o = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(S) {
      for (var $ = S.getAttribute("data-emotion").split(" "), g = 1; g < $.length; g++)
        o[$[g]] = !0;
      s.push(S);
    }
  );
  var c, f = [b1, R1];
  {
    var d, p = [C1, T1(function(S) {
      d.insert(S);
    })], u = A1(f.concat(i, p)), x = function($) {
      return Rr($1($), u);
    };
    c = function($, g, h, m) {
      d = h, x($ ? $ + "{" + g.styles + "}" : g.styles), m && (E.inserted[g.name] = !0);
    };
  }
  var E = {
    key: n,
    sheet: new d1({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: c
  };
  return E.sheet.hydrate(s), E;
}, vy = { exports: {} }, ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue = typeof Symbol == "function" && Symbol.for, gc = Ue ? Symbol.for("react.element") : 60103, vc = Ue ? Symbol.for("react.portal") : 60106, Ol = Ue ? Symbol.for("react.fragment") : 60107, $l = Ue ? Symbol.for("react.strict_mode") : 60108, kl = Ue ? Symbol.for("react.profiler") : 60114, Cl = Ue ? Symbol.for("react.provider") : 60109, Al = Ue ? Symbol.for("react.context") : 60110, _c = Ue ? Symbol.for("react.async_mode") : 60111, Tl = Ue ? Symbol.for("react.concurrent_mode") : 60111, Ll = Ue ? Symbol.for("react.forward_ref") : 60112, Nl = Ue ? Symbol.for("react.suspense") : 60113, D1 = Ue ? Symbol.for("react.suspense_list") : 60120, Ml = Ue ? Symbol.for("react.memo") : 60115, bl = Ue ? Symbol.for("react.lazy") : 60116, F1 = Ue ? Symbol.for("react.block") : 60121, V1 = Ue ? Symbol.for("react.fundamental") : 60117, U1 = Ue ? Symbol.for("react.responder") : 60118, B1 = Ue ? Symbol.for("react.scope") : 60119;
function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gc:
        switch (e = e.type, e) {
          case _c:
          case Tl:
          case Ol:
          case kl:
          case $l:
          case Nl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Al:
              case Ll:
              case bl:
              case Ml:
              case Cl:
                return e;
              default:
                return t;
            }
        }
      case vc:
        return t;
    }
  }
}
function _y(e) {
  return Ot(e) === Tl;
}
ue.AsyncMode = _c;
ue.ConcurrentMode = Tl;
ue.ContextConsumer = Al;
ue.ContextProvider = Cl;
ue.Element = gc;
ue.ForwardRef = Ll;
ue.Fragment = Ol;
ue.Lazy = bl;
ue.Memo = Ml;
ue.Portal = vc;
ue.Profiler = kl;
ue.StrictMode = $l;
ue.Suspense = Nl;
ue.isAsyncMode = function(e) {
  return _y(e) || Ot(e) === _c;
};
ue.isConcurrentMode = _y;
ue.isContextConsumer = function(e) {
  return Ot(e) === Al;
};
ue.isContextProvider = function(e) {
  return Ot(e) === Cl;
};
ue.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gc;
};
ue.isForwardRef = function(e) {
  return Ot(e) === Ll;
};
ue.isFragment = function(e) {
  return Ot(e) === Ol;
};
ue.isLazy = function(e) {
  return Ot(e) === bl;
};
ue.isMemo = function(e) {
  return Ot(e) === Ml;
};
ue.isPortal = function(e) {
  return Ot(e) === vc;
};
ue.isProfiler = function(e) {
  return Ot(e) === kl;
};
ue.isStrictMode = function(e) {
  return Ot(e) === $l;
};
ue.isSuspense = function(e) {
  return Ot(e) === Nl;
};
ue.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ol || e === Tl || e === kl || e === $l || e === Nl || e === D1 || typeof e == "object" && e !== null && (e.$$typeof === bl || e.$$typeof === Ml || e.$$typeof === Cl || e.$$typeof === Al || e.$$typeof === Ll || e.$$typeof === V1 || e.$$typeof === U1 || e.$$typeof === B1 || e.$$typeof === F1);
};
ue.typeOf = Ot;
vy.exports = ue;
var W1 = vy.exports, wy = W1, H1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, G1 = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sy = {};
Sy[wy.ForwardRef] = H1;
Sy[wy.Memo] = G1;
var K1 = !0;
function Ey(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var wc = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  K1 === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Sc = function(t, n, r) {
  wc(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function J1(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var Q1 = {
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
}, Y1 = !1, X1 = /[A-Z]|^ms/g, q1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xy = function(t) {
  return t.charCodeAt(1) === 45;
}, ld = function(t) {
  return t != null && typeof t != "boolean";
}, gu = /* @__PURE__ */ my(function(e) {
  return xy(e) ? e : e.replace(X1, "-$&").toLowerCase();
}), ud = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(q1, function(r, i, o) {
          return Xt = {
            name: i,
            styles: o,
            next: Xt
          }, i;
        });
  }
  return Q1[t] !== 1 && !xy(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Z1 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ki(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return Xt = {
          name: i.name,
          styles: i.styles,
          next: Xt
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Xt = {
              name: a.name,
              styles: a.styles,
              next: Xt
            }, a = a.next;
        var s = o.styles + ";";
        return s;
      }
      return e_(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Xt, f = n(e);
        return Xt = c, Ki(e, t, f);
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
function e_(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Ki(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? r += o + "{" + t[s] + "}" : ld(s) && (r += gu(o) + ":" + ud(o, s) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Y1)
          throw new Error(Z1);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            ld(a[c]) && (r += gu(o) + ":" + ud(o, a[c]) + ";");
        else {
          var f = Ki(e, t, a);
          switch (o) {
            case "animation":
            case "animationName": {
              r += gu(o) + ":" + f + ";";
              break;
            }
            default:
              r += o + "{" + f + "}";
          }
        }
      }
    }
  return r;
}
var sd = /label:\s*([^\s;{]+)\s*(;|$)/g, Xt;
function Rl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  Xt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Ki(n, t, o);
  else {
    var a = o;
    i += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (i += Ki(n, t, e[s]), r) {
      var c = o;
      i += c[s];
    }
  sd.lastIndex = 0;
  for (var f = "", d; (d = sd.exec(i)) !== null; )
    f += "-" + d[1];
  var p = J1(i) + f;
  return {
    name: p,
    styles: i,
    next: Xt
  };
}
var t_ = function(t) {
  return t();
}, Py = Hu["useInsertionEffect"] ? Hu["useInsertionEffect"] : !1, Oy = Py || t_, cd = Py || j.useLayoutEffect, n_ = !1, $y = /* @__PURE__ */ j.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ z1({
    key: "css"
  }) : null
);
$y.Provider;
var Ec = function(t) {
  return /* @__PURE__ */ j.forwardRef(function(n, r) {
    var i = j.useContext($y);
    return t(n, i, r);
  });
}, xo = /* @__PURE__ */ j.createContext({}), xc = {}.hasOwnProperty, rs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", r_ = function(t, n) {
  var r = {};
  for (var i in n)
    xc.call(n, i) && (r[i] = n[i]);
  return r[rs] = t, r;
}, i_ = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return wc(n, r, i), Oy(function() {
    return Sc(n, r, i);
  }), null;
}, o_ = /* @__PURE__ */ Ec(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[rs], o = [r], a = "";
  typeof e.className == "string" ? a = Ey(t.registered, o, e.className) : e.className != null && (a = e.className + " ");
  var s = Rl(o, void 0, j.useContext(xo));
  a += t.key + "-" + s.name;
  var c = {};
  for (var f in e)
    xc.call(e, f) && f !== "css" && f !== rs && !n_ && (c[f] = e[f]);
  return c.className = a, n && (c.ref = n), /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(i_, {
    cache: t,
    serialized: s,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ j.createElement(i, c));
}), a_ = o_, vu = { exports: {} }, fd;
function l_() {
  return fd || (fd = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          for (var o in i)
            ({}).hasOwnProperty.call(i, o) && (n[o] = i[o]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vu)), vu.exports;
}
l_();
var dd = function(t, n) {
  var r = arguments;
  if (n == null || !xc.call(n, "css"))
    return j.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = a_, o[1] = r_(t, n);
  for (var a = 2; a < i; a++)
    o[a] = r[a];
  return j.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(dd || (dd = {}));
var u_ = /* @__PURE__ */ Ec(function(e, t) {
  var n = e.styles, r = Rl([n], void 0, j.useContext(xo)), i = j.useRef();
  return cd(function() {
    var o = t.key + "-global", a = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, c = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), c !== null && (s = !0, c.setAttribute("data-emotion", o), a.hydrate([c])), i.current = [a, s], function() {
      a.flush();
    };
  }, [t]), cd(function() {
    var o = i.current, a = o[0], s = o[1];
    if (s) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Sc(t, r.next, !0), a.tags.length) {
      var c = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = c, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
}), s_ = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, c_ = /* @__PURE__ */ my(
  function(e) {
    return s_.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), f_ = !1, d_ = c_, p_ = function(t) {
  return t !== "theme";
}, pd = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? d_ : p_;
}, yd = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(a) {
      return t.__emotion_forwardProp(a) && o(a);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, y_ = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return wc(n, r, i), Oy(function() {
    return Sc(n, r, i);
  }), null;
}, h_ = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, a;
  n !== void 0 && (o = n.label, a = n.target);
  var s = yd(t, n, r), c = s || pd(i), f = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && p.push("label:" + o + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var u = d[0];
      p.push(u[0]);
      for (var x = d.length, E = 1; E < x; E++)
        p.push(d[E], u[E]);
    }
    var S = Ec(function($, g, h) {
      var m = f && $.as || i, O = "", w = [], l = $;
      if ($.theme == null) {
        l = {};
        for (var v in $)
          l[v] = $[v];
        l.theme = j.useContext(xo);
      }
      typeof $.className == "string" ? O = Ey(g.registered, w, $.className) : $.className != null && (O = $.className + " ");
      var L = Rl(p.concat(w), g.registered, l);
      O += g.key + "-" + L.name, a !== void 0 && (O += " " + a);
      var K = f && s === void 0 ? pd(m) : c, D = {};
      for (var se in $)
        f && se === "as" || K(se) && (D[se] = $[se]);
      return D.className = O, h && (D.ref = h), /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(y_, {
        cache: g,
        serialized: L,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ j.createElement(m, D));
    });
    return S.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = i, S.__emotion_styles = p, S.__emotion_forwardProp = s, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && f_ ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function($, g) {
      var h = e($, Ke({}, n, g, {
        shouldForwardProp: yd(S, g, !0)
      }));
      return h.apply(void 0, p);
    }, S;
  };
}, m_ = [
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
], hd = h_.bind(null);
m_.forEach(function(e) {
  hd[e] = hd(e);
});
function g_(e) {
  return e == null || Object.keys(e).length === 0;
}
function v_(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ G(u_, {
    styles: typeof t == "function" ? (i) => t(g_(i) ? n : i) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const md = [];
function __(e) {
  return md[0] = e, Rl(md);
}
function _r(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ky(e) {
  if (/* @__PURE__ */ j.isValidElement(e) || !_r(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ky(e[n]);
  }), t;
}
function Oa(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? Ke({}, e) : e;
  return _r(e) && _r(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ j.isValidElement(t[i]) ? r[i] = t[i] : _r(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && _r(e[i]) ? r[i] = Oa(e[i], t[i], n) : n.clone ? r[i] = _r(t[i]) ? ky(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const w_ = ["values", "unit", "step"], S_ = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => Ke({}, n, {
    [r.key]: r.val
  }), {});
};
function E_(e) {
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
  } = e, i = Sl(e, w_), o = S_(t), a = Object.keys(o);
  function s(u) {
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${n})`;
  }
  function c(u) {
    return `@media (max-width:${(typeof t[u] == "number" ? t[u] : u) - r / 100}${n})`;
  }
  function f(u, x) {
    const E = a.indexOf(x);
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${n}) and (max-width:${(E !== -1 && typeof t[a[E]] == "number" ? t[a[E]] : x) - r / 100}${n})`;
  }
  function d(u) {
    return a.indexOf(u) + 1 < a.length ? f(u, a[a.indexOf(u) + 1]) : s(u);
  }
  function p(u) {
    const x = a.indexOf(u);
    return x === 0 ? s(a[1]) : x === a.length - 1 ? c(a[x]) : f(u, a[a.indexOf(u) + 1]).replace("@media", "@media not all and");
  }
  return Ke({
    keys: a,
    values: o,
    up: s,
    down: c,
    between: f,
    only: d,
    not: p,
    unit: n
  }, i);
}
const x_ = {
  borderRadius: 4
}, P_ = x_;
function Ri(e, t) {
  return t ? Oa(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Pc = {
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
}, gd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Pc[e]}px)`
};
function fn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || gd;
    return t.reduce((a, s, c) => (a[o.up(o.keys[c])] = n(t[c]), a), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || gd;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(o.values || Pc).indexOf(s) !== -1) {
        const c = o.up(s);
        a[c] = n(t[s], s);
      } else {
        const c = s;
        a[c] = t[c];
      }
      return a;
    }, {});
  }
  return n(t);
}
function O_(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function vd(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Cy(e) {
  if (typeof e != "string")
    throw new Error(u1(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Il(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function $a(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Il(e, n) || r, t && (i = t(i, r, e)), i;
}
function Le(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], c = a.theme, f = Il(c, r) || {};
    return fn(a, s, (p) => {
      let u = $a(f, i, p);
      return p === u && typeof p == "string" && (u = $a(f, i, `${t}${p === "default" ? "" : Cy(p)}`, p)), n === !1 ? u : {
        [n]: u
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function $_(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const k_ = {
  m: "margin",
  p: "padding"
}, C_ = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, _d = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, A_ = $_((e) => {
  if (e.length > 2)
    if (_d[e])
      e = _d[e];
    else
      return [e];
  const [t, n] = e.split(""), r = k_[t], i = C_[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Oc = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], $c = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Oc, ...$c];
function Po(e, t, n, r) {
  var i;
  const o = (i = Il(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (a) => typeof a == "string" ? a : o * a : Array.isArray(o) ? (a) => typeof a == "string" ? a : o[a] : typeof o == "function" ? o : () => {
  };
}
function Ay(e) {
  return Po(e, "spacing", 8);
}
function Oo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function T_(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Oo(t, n), r), {});
}
function L_(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = A_(n), o = T_(i, r), a = e[n];
  return fn(e, a, o);
}
function Ty(e, t) {
  const n = Ay(e.theme);
  return Object.keys(e).map((r) => L_(e, t, r, n)).reduce(Ri, {});
}
function ke(e) {
  return Ty(e, Oc);
}
ke.propTypes = {};
ke.filterProps = Oc;
function Ce(e) {
  return Ty(e, $c);
}
Ce.propTypes = {};
Ce.filterProps = $c;
function N_(e = 8) {
  if (e.mui)
    return e;
  const t = Ay({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const a = t(o);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return n.mui = !0, n;
}
function jl(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? Ri(i, t[o](r)) : i, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Tt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function zt(e, t) {
  return Le({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const M_ = zt("border", Tt), b_ = zt("borderTop", Tt), R_ = zt("borderRight", Tt), I_ = zt("borderBottom", Tt), j_ = zt("borderLeft", Tt), z_ = zt("borderColor"), D_ = zt("borderTopColor"), F_ = zt("borderRightColor"), V_ = zt("borderBottomColor"), U_ = zt("borderLeftColor"), B_ = zt("outline", Tt), W_ = zt("outlineColor"), zl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Po(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Oo(t, r)
    });
    return fn(e, e.borderRadius, n);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["borderRadius"];
jl(M_, b_, R_, I_, j_, z_, D_, F_, V_, U_, zl, B_, W_);
const Dl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Po(e.theme, "spacing", 8), n = (r) => ({
      gap: Oo(t, r)
    });
    return fn(e, e.gap, n);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["gap"];
const Fl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Po(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Oo(t, r)
    });
    return fn(e, e.columnGap, n);
  }
  return null;
};
Fl.propTypes = {};
Fl.filterProps = ["columnGap"];
const Vl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Po(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Oo(t, r)
    });
    return fn(e, e.rowGap, n);
  }
  return null;
};
Vl.propTypes = {};
Vl.filterProps = ["rowGap"];
const H_ = Le({
  prop: "gridColumn"
}), G_ = Le({
  prop: "gridRow"
}), K_ = Le({
  prop: "gridAutoFlow"
}), J_ = Le({
  prop: "gridAutoColumns"
}), Q_ = Le({
  prop: "gridAutoRows"
}), Y_ = Le({
  prop: "gridTemplateColumns"
}), X_ = Le({
  prop: "gridTemplateRows"
}), q_ = Le({
  prop: "gridTemplateAreas"
}), Z_ = Le({
  prop: "gridArea"
});
jl(Dl, Fl, Vl, H_, G_, K_, J_, Q_, Y_, X_, q_, Z_);
function Ir(e, t) {
  return t === "grey" ? t : e;
}
const ew = Le({
  prop: "color",
  themeKey: "palette",
  transform: Ir
}), tw = Le({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ir
}), nw = Le({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ir
});
jl(ew, tw, nw);
function wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const rw = Le({
  prop: "width",
  transform: wt
}), kc = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Pc[n];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: wt(n)
      };
    };
    return fn(e, e.maxWidth, t);
  }
  return null;
};
kc.filterProps = ["maxWidth"];
const iw = Le({
  prop: "minWidth",
  transform: wt
}), ow = Le({
  prop: "height",
  transform: wt
}), aw = Le({
  prop: "maxHeight",
  transform: wt
}), lw = Le({
  prop: "minHeight",
  transform: wt
});
Le({
  prop: "size",
  cssProperty: "width",
  transform: wt
});
Le({
  prop: "size",
  cssProperty: "height",
  transform: wt
});
const uw = Le({
  prop: "boxSizing"
});
jl(rw, kc, iw, ow, aw, lw, uw);
const sw = {
  // borders
  border: {
    themeKey: "borders",
    transform: Tt
  },
  borderTop: {
    themeKey: "borders",
    transform: Tt
  },
  borderRight: {
    themeKey: "borders",
    transform: Tt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Tt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Tt
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
    transform: Tt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: zl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ir
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ir
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ir
  },
  // spacing
  p: {
    style: Ce
  },
  pt: {
    style: Ce
  },
  pr: {
    style: Ce
  },
  pb: {
    style: Ce
  },
  pl: {
    style: Ce
  },
  px: {
    style: Ce
  },
  py: {
    style: Ce
  },
  padding: {
    style: Ce
  },
  paddingTop: {
    style: Ce
  },
  paddingRight: {
    style: Ce
  },
  paddingBottom: {
    style: Ce
  },
  paddingLeft: {
    style: Ce
  },
  paddingX: {
    style: Ce
  },
  paddingY: {
    style: Ce
  },
  paddingInline: {
    style: Ce
  },
  paddingInlineStart: {
    style: Ce
  },
  paddingInlineEnd: {
    style: Ce
  },
  paddingBlock: {
    style: Ce
  },
  paddingBlockStart: {
    style: Ce
  },
  paddingBlockEnd: {
    style: Ce
  },
  m: {
    style: ke
  },
  mt: {
    style: ke
  },
  mr: {
    style: ke
  },
  mb: {
    style: ke
  },
  ml: {
    style: ke
  },
  mx: {
    style: ke
  },
  my: {
    style: ke
  },
  margin: {
    style: ke
  },
  marginTop: {
    style: ke
  },
  marginRight: {
    style: ke
  },
  marginBottom: {
    style: ke
  },
  marginLeft: {
    style: ke
  },
  marginX: {
    style: ke
  },
  marginY: {
    style: ke
  },
  marginInline: {
    style: ke
  },
  marginInlineStart: {
    style: ke
  },
  marginInlineEnd: {
    style: ke
  },
  marginBlock: {
    style: ke
  },
  marginBlockStart: {
    style: ke
  },
  marginBlockEnd: {
    style: ke
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
    style: Dl
  },
  rowGap: {
    style: Vl
  },
  columnGap: {
    style: Fl
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
    transform: wt
  },
  maxWidth: {
    style: kc
  },
  minWidth: {
    transform: wt
  },
  height: {
    transform: wt
  },
  maxHeight: {
    transform: wt
  },
  minHeight: {
    transform: wt
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
}, Ly = sw;
function cw(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function fw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dw() {
  function e(n, r, i, o) {
    const a = {
      [n]: r,
      theme: i
    }, s = o[n];
    if (!s)
      return {
        [n]: r
      };
    const {
      cssProperty: c = n,
      themeKey: f,
      transform: d,
      style: p
    } = s;
    if (r == null)
      return null;
    if (f === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const u = Il(i, f) || {};
    return p ? p(a) : fn(a, r, (E) => {
      let S = $a(u, d, E);
      return E === S && typeof E == "string" && (S = $a(u, d, `${n}${E === "default" ? "" : Cy(E)}`, E)), c === !1 ? S : {
        [c]: S
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: o = {},
      nested: a
    } = n || {};
    if (!i)
      return null;
    const s = (r = o.unstable_sxConfig) != null ? r : Ly;
    function c(f) {
      let d = f;
      if (typeof f == "function")
        d = f(o);
      else if (typeof f != "object")
        return f;
      if (!d)
        return null;
      const p = O_(o.breakpoints), u = Object.keys(p);
      let x = p;
      return Object.keys(d).forEach((E) => {
        const S = fw(d[E], o);
        if (S != null)
          if (typeof S == "object")
            if (s[E])
              x = Ri(x, e(E, S, o, s));
            else {
              const $ = fn({
                theme: o
              }, S, (g) => ({
                [E]: g
              }));
              cw($, S) ? x[E] = t({
                sx: S,
                theme: o,
                nested: !0
              }) : x = Ri(x, $);
            }
          else
            x = Ri(x, e(E, S, o, s));
      }), !a && o.modularCssLayers ? {
        "@layer sx": vd(u, x)
      } : vd(u, x);
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return t;
}
const Ny = dw();
Ny.filterProps = ["sx"];
const pw = Ny;
function yw(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const hw = ["breakpoints", "palette", "spacing", "shape"];
function mw(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, a = Sl(e, hw), s = E_(n), c = N_(i);
  let f = Oa({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Ke({
      mode: "light"
    }, r),
    spacing: c,
    shape: Ke({}, P_, o)
  }, a);
  return f.applyStyles = yw, f = t.reduce((d, p) => Oa(d, p), f), f.unstable_sxConfig = Ke({}, Ly, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return pw({
      sx: p,
      theme: this
    });
  }, f;
}
function gw(e) {
  return Object.keys(e).length === 0;
}
function Cc(e = null) {
  const t = j.useContext(xo);
  return !t || gw(t) ? e : t;
}
const vw = mw();
function _w(e = vw) {
  return Cc(e);
}
function _u(e) {
  const t = __(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function ww({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = _w(n), i = t && r[t] || r;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((a) => _u(typeof a == "function" ? a(i) : a)) : o = _u(o)), /* @__PURE__ */ G(v_, {
    styles: o
  });
}
const Sw = typeof window < "u" ? j.useLayoutEffect : j.useEffect, Ew = Sw;
let wd = 0;
function xw(e) {
  const [t, n] = j.useState(e), r = e || t;
  return j.useEffect(() => {
    t == null && (wd += 1, n(`mui-${wd}`));
  }, [t]), r;
}
const Sd = Hu["useId".toString()];
function Pw(e) {
  if (Sd !== void 0) {
    const t = Sd();
    return e ?? t;
  }
  return xw(e);
}
const Ow = /* @__PURE__ */ j.createContext(null), My = Ow;
function by() {
  return j.useContext(My);
}
const $w = typeof Symbol == "function" && Symbol.for, kw = $w ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Cw(e, t) {
  return typeof t == "function" ? t(e) : Ke({}, e, t);
}
function Aw(e) {
  const {
    children: t,
    theme: n
  } = e, r = by(), i = j.useMemo(() => {
    const o = r === null ? n : Cw(r, n);
    return o != null && (o[kw] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ G(My.Provider, {
    value: i,
    children: t
  });
}
const Tw = ["value"], Lw = /* @__PURE__ */ j.createContext();
function Nw(e) {
  let {
    value: t
  } = e, n = Sl(e, Tw);
  return /* @__PURE__ */ G(Lw.Provider, Ke({
    value: t ?? !0
  }, n));
}
const Mw = /* @__PURE__ */ j.createContext(void 0);
function bw({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ G(Mw.Provider, {
    value: e,
    children: t
  });
}
function Rw(e) {
  const t = Cc(), n = Pw() || "", {
    modularCssLayers: r
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? i = "" : typeof r == "string" ? i = r.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Ew(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const a = o.firstChild;
    if (i) {
      var s;
      if (a && (s = a.hasAttribute) != null && s.call(a, "data-mui-layer-order") && a.getAttribute("data-mui-layer-order") === n)
        return;
      const f = document.createElement("style");
      f.setAttribute("data-mui-layer-order", n), f.textContent = i, o.prepend(f);
    } else {
      var c;
      (c = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || c.remove();
    }
  }, [i, n]), i ? /* @__PURE__ */ G(ww, {
    styles: i
  }) : null;
}
const Ed = {};
function xd(e, t, n, r = !1) {
  return j.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(i), a = e ? Ke({}, t, {
        [e]: o
      }) : o;
      return r ? () => a : a;
    }
    return e ? Ke({}, t, {
      [e]: n
    }) : Ke({}, t, n);
  }, [e, t, n, r]);
}
function Iw(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, i = Cc(Ed), o = by() || Ed, a = xd(r, i, n), s = xd(r, o, n, !0), c = a.direction === "rtl", f = Rw(a);
  return /* @__PURE__ */ G(Aw, {
    theme: s,
    children: /* @__PURE__ */ G(xo.Provider, {
      value: a,
      children: /* @__PURE__ */ G(Nw, {
        value: c,
        children: /* @__PURE__ */ vt(bw, {
          value: a == null ? void 0 : a.components,
          children: [f, t]
        })
      })
    })
  });
}
const jw = ["theme"];
function zw(e) {
  let {
    theme: t
  } = e, n = Sl(e, jw);
  const r = t[rd];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = Ke({}, r, {
    vars: null
  }) : t && !t.vars && (i = Ke({}, t, {
    vars: null
  }))), /* @__PURE__ */ G(Iw, Ke({}, n, {
    themeId: r ? rd : void 0,
    theme: i
  }));
}
var Ry = { exports: {} }, $t = {}, Iy = { exports: {} }, jy = {};
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
  function t(M, F) {
    var B = M.length;
    M.push(F);
    e:
      for (; 0 < B; ) {
        var H = B - 1 >>> 1, Z = M[H];
        if (0 < i(Z, F))
          M[H] = F, M[B] = Z, B = H;
        else
          break e;
      }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0)
      return null;
    var F = M[0], B = M.pop();
    if (B !== F) {
      M[0] = B;
      e:
        for (var H = 0, Z = M.length, nt = Z >>> 1; H < nt; ) {
          var N = 2 * (H + 1) - 1, z = M[N], ne = N + 1, ge = M[ne];
          if (0 > i(z, B))
            ne < Z && 0 > i(ge, z) ? (M[H] = ge, M[ne] = B, H = ne) : (M[H] = z, M[N] = B, H = N);
          else if (ne < Z && 0 > i(ge, B))
            M[H] = ge, M[ne] = B, H = ne;
          else
            break e;
        }
    }
    return F;
  }
  function i(M, F) {
    var B = M.sortIndex - F.sortIndex;
    return B !== 0 ? B : M.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var a = Date, s = a.now();
    e.unstable_now = function() {
      return a.now() - s;
    };
  }
  var c = [], f = [], d = 1, p = null, u = 3, x = !1, E = !1, S = !1, $ = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var F = n(f); F !== null; ) {
      if (F.callback === null)
        r(f);
      else if (F.startTime <= M)
        r(f), F.sortIndex = F.expirationTime, t(c, F);
      else
        break;
      F = n(f);
    }
  }
  function O(M) {
    if (S = !1, m(M), !E)
      if (n(c) !== null)
        E = !0, he(w);
      else {
        var F = n(f);
        F !== null && je(O, F.startTime - M);
      }
  }
  function w(M, F) {
    E = !1, S && (S = !1, g(L), L = -1), x = !0;
    var B = u;
    try {
      for (m(F), p = n(c); p !== null && (!(p.expirationTime > F) || M && !se()); ) {
        var H = p.callback;
        if (typeof H == "function") {
          p.callback = null, u = p.priorityLevel;
          var Z = H(p.expirationTime <= F);
          F = e.unstable_now(), typeof Z == "function" ? p.callback = Z : p === n(c) && r(c), m(F);
        } else
          r(c);
        p = n(c);
      }
      if (p !== null)
        var nt = !0;
      else {
        var N = n(f);
        N !== null && je(O, N.startTime - F), nt = !1;
      }
      return nt;
    } finally {
      p = null, u = B, x = !1;
    }
  }
  var l = !1, v = null, L = -1, K = 5, D = -1;
  function se() {
    return !(e.unstable_now() - D < K);
  }
  function Pe() {
    if (v !== null) {
      var M = e.unstable_now();
      D = M;
      var F = !0;
      try {
        F = v(!0, M);
      } finally {
        F ? ut() : (l = !1, v = null);
      }
    } else
      l = !1;
  }
  var ut;
  if (typeof h == "function")
    ut = function() {
      h(Pe);
    };
  else if (typeof MessageChannel < "u") {
    var ht = new MessageChannel(), ce = ht.port2;
    ht.port1.onmessage = Pe, ut = function() {
      ce.postMessage(null);
    };
  } else
    ut = function() {
      $(Pe, 0);
    };
  function he(M) {
    v = M, l || (l = !0, ut());
  }
  function je(M, F) {
    L = $(function() {
      M(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    E || x || (E = !0, he(w));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return u;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(c);
  }, e.unstable_next = function(M) {
    switch (u) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = u;
    }
    var B = u;
    u = F;
    try {
      return M();
    } finally {
      u = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, F) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var B = u;
    u = M;
    try {
      return F();
    } finally {
      u = B;
    }
  }, e.unstable_scheduleCallback = function(M, F, B) {
    var H = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? H + B : H) : B = H, M) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = B + Z, M = { id: d++, callback: F, priorityLevel: M, startTime: B, expirationTime: Z, sortIndex: -1 }, B > H ? (M.sortIndex = B, t(f, M), n(c) === null && M === n(f) && (S ? (g(L), L = -1) : S = !0, je(O, B - H))) : (M.sortIndex = Z, t(c, M), E || x || (E = !0, he(w))), M;
  }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(M) {
    var F = u;
    return function() {
      var B = u;
      u = F;
      try {
        return M.apply(this, arguments);
      } finally {
        u = B;
      }
    };
  };
})(jy);
Iy.exports = jy;
var Dw = Iy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw = j, Pt = Dw;
function T(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zy = /* @__PURE__ */ new Set(), Ji = {};
function yr(e, t) {
  Kr(e, t), Kr(e + "Capture", t);
}
function Kr(e, t) {
  for (Ji[e] = t, e = 0; e < t.length; e++)
    zy.add(t[e]);
}
var dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), is = Object.prototype.hasOwnProperty, Vw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Pd = {}, Od = {};
function Uw(e) {
  return is.call(Od, e) ? !0 : is.call(Pd, e) ? !1 : Vw.test(e) ? Od[e] = !0 : (Pd[e] = !0, !1);
}
function Bw(e, t, n, r) {
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
function Ww(e, t, n, r) {
  if (t === null || typeof t > "u" || Bw(e, t, n, r))
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
function lt(e, t, n, r, i, o, a) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a;
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Qe[e] = new lt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Qe[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Qe[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Qe[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Qe[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Qe[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Qe[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Qe[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Qe[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ac = /[\-:]([a-z])/g;
function Tc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ac,
    Tc
  );
  Qe[t] = new lt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ac, Tc);
  Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ac, Tc);
  Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new lt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lc(e, t, n, r) {
  var i = Qe.hasOwnProperty(t) ? Qe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ww(t, n, i, r) && (n = null), r || i === null ? Uw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mn = Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bo = Symbol.for("react.element"), wr = Symbol.for("react.portal"), Sr = Symbol.for("react.fragment"), Nc = Symbol.for("react.strict_mode"), os = Symbol.for("react.profiler"), Dy = Symbol.for("react.provider"), Fy = Symbol.for("react.context"), Mc = Symbol.for("react.forward_ref"), as = Symbol.for("react.suspense"), ls = Symbol.for("react.suspense_list"), bc = Symbol.for("react.memo"), Pn = Symbol.for("react.lazy"), Vy = Symbol.for("react.offscreen"), $d = Symbol.iterator;
function Ei(e) {
  return e === null || typeof e != "object" ? null : (e = $d && e[$d] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xe = Object.assign, wu;
function Ti(e) {
  if (wu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wu = t && t[1] || "";
    }
  return `
` + wu + e;
}
var Su = !1;
function Eu(e, t) {
  if (!e || Su)
    return "";
  Su = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var i = f.stack.split(`
`), o = r.stack.split(`
`), a = i.length - 1, s = o.length - 1; 1 <= a && 0 <= s && i[a] !== o[s]; )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if (a--, s--, 0 > s || i[a] !== o[s]) {
                var c = `
` + i[a].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    Su = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ti(e) : "";
}
function Hw(e) {
  switch (e.tag) {
    case 5:
      return Ti(e.type);
    case 16:
      return Ti("Lazy");
    case 13:
      return Ti("Suspense");
    case 19:
      return Ti("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Eu(e.type, !1), e;
    case 11:
      return e = Eu(e.type.render, !1), e;
    case 1:
      return e = Eu(e.type, !0), e;
    default:
      return "";
  }
}
function us(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Sr:
      return "Fragment";
    case wr:
      return "Portal";
    case os:
      return "Profiler";
    case Nc:
      return "StrictMode";
    case as:
      return "Suspense";
    case ls:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Fy:
        return (e.displayName || "Context") + ".Consumer";
      case Dy:
        return (e._context.displayName || "Context") + ".Provider";
      case Mc:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case bc:
        return t = e.displayName || null, t !== null ? t : us(e.type) || "Memo";
      case Pn:
        t = e._payload, e = e._init;
        try {
          return us(e(t));
        } catch {
        }
    }
  return null;
}
function Gw(e) {
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
      return us(t);
    case 8:
      return t === Nc ? "StrictMode" : "Mode";
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
function Dn(e) {
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
function Uy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kw(e) {
  var t = Uy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(a) {
      r = "" + a, o.call(this, a);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(a) {
      r = "" + a;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Wo(e) {
  e._valueTracker || (e._valueTracker = Kw(e));
}
function By(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Uy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ka(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ss(e, t) {
  var n = t.checked;
  return xe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function kd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Wy(e, t) {
  t = t.checked, t != null && Lc(e, "checked", t, !1);
}
function cs(e, t) {
  Wy(e, t);
  var n = Dn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? fs(e, t.type, n) : t.hasOwnProperty("defaultValue") && fs(e, t.type, Dn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Cd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function fs(e, t, n) {
  (t !== "number" || ka(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Li = Array.isArray;
function jr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ds(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(T(91));
  return xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ad(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(T(92));
      if (Li(n)) {
        if (1 < n.length)
          throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dn(n) };
}
function Hy(e, t) {
  var n = Dn(t.value), r = Dn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Td(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ps(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ho, Ky = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Ho = Ho || document.createElement("div"), Ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ho.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Qi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ii = {
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
}, Jw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ii).forEach(function(e) {
  Jw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ii[t] = Ii[e];
  });
});
function Jy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ii.hasOwnProperty(e) && Ii[e] ? ("" + t).trim() : t + "px";
}
function Qy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Jy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var Qw = xe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ys(e, t) {
  if (t) {
    if (Qw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(T(62));
  }
}
function hs(e, t) {
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
var ms = null;
function Rc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var gs = null, zr = null, Dr = null;
function Ld(e) {
  if (e = Co(e)) {
    if (typeof gs != "function")
      throw Error(T(280));
    var t = e.stateNode;
    t && (t = Gl(t), gs(e.stateNode, e.type, t));
  }
}
function Yy(e) {
  zr ? Dr ? Dr.push(e) : Dr = [e] : zr = e;
}
function Xy() {
  if (zr) {
    var e = zr, t = Dr;
    if (Dr = zr = null, Ld(e), t)
      for (e = 0; e < t.length; e++)
        Ld(t[e]);
  }
}
function qy(e, t) {
  return e(t);
}
function Zy() {
}
var xu = !1;
function eh(e, t, n) {
  if (xu)
    return e(t, n);
  xu = !0;
  try {
    return qy(e, t, n);
  } finally {
    xu = !1, (zr !== null || Dr !== null) && (Zy(), Xy());
  }
}
function Yi(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Gl(n);
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
    throw Error(T(231, t, typeof n));
  return n;
}
var vs = !1;
if (dn)
  try {
    var xi = {};
    Object.defineProperty(xi, "passive", { get: function() {
      vs = !0;
    } }), window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
  } catch {
    vs = !1;
  }
function Yw(e, t, n, r, i, o, a, s, c) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (d) {
    this.onError(d);
  }
}
var ji = !1, Ca = null, Aa = !1, _s = null, Xw = { onError: function(e) {
  ji = !0, Ca = e;
} };
function qw(e, t, n, r, i, o, a, s, c) {
  ji = !1, Ca = null, Yw.apply(Xw, arguments);
}
function Zw(e, t, n, r, i, o, a, s, c) {
  if (qw.apply(this, arguments), ji) {
    if (ji) {
      var f = Ca;
      ji = !1, Ca = null;
    } else
      throw Error(T(198));
    Aa || (Aa = !0, _s = f);
  }
}
function hr(e) {
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
function th(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Nd(e) {
  if (hr(e) !== e)
    throw Error(T(188));
}
function eS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = hr(e), t === null)
      throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n)
          return Nd(i), e;
        if (o === r)
          return Nd(i), t;
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var a = !1, s = i.child; s; ) {
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
      if (!a) {
        for (s = o.child; s; ) {
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
        if (!a)
          throw Error(T(189));
      }
    }
    if (n.alternate !== r)
      throw Error(T(190));
  }
  if (n.tag !== 3)
    throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function nh(e) {
  return e = eS(e), e !== null ? rh(e) : null;
}
function rh(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = rh(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var ih = Pt.unstable_scheduleCallback, Md = Pt.unstable_cancelCallback, tS = Pt.unstable_shouldYield, nS = Pt.unstable_requestPaint, Te = Pt.unstable_now, rS = Pt.unstable_getCurrentPriorityLevel, Ic = Pt.unstable_ImmediatePriority, oh = Pt.unstable_UserBlockingPriority, Ta = Pt.unstable_NormalPriority, iS = Pt.unstable_LowPriority, ah = Pt.unstable_IdlePriority, Ul = null, en = null;
function oS(e) {
  if (en && typeof en.onCommitFiberRoot == "function")
    try {
      en.onCommitFiberRoot(Ul, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Wt = Math.clz32 ? Math.clz32 : uS, aS = Math.log, lS = Math.LN2;
function uS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (aS(e) / lS | 0) | 0;
}
var Go = 64, Ko = 4194304;
function Ni(e) {
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
function La(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, a = n & 268435455;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? r = Ni(s) : (o &= a, o !== 0 && (r = Ni(o)));
  } else
    a = n & ~i, a !== 0 ? r = Ni(a) : o !== 0 && (r = Ni(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function sS(e, t) {
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
function cS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - Wt(o), s = 1 << a, c = i[a];
    c === -1 ? (!(s & n) || s & r) && (i[a] = sS(s, t)) : c <= t && (e.expiredLanes |= s), o &= ~s;
  }
}
function ws(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function lh() {
  var e = Go;
  return Go <<= 1, !(Go & 4194240) && (Go = 64), e;
}
function Pu(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function $o(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
}
function fS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Wt(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function jc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var le = 0;
function uh(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var sh, zc, ch, fh, dh, Ss = !1, Jo = [], Tn = null, Ln = null, Nn = null, Xi = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), $n = [], dS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tn = null;
      break;
    case "dragenter":
    case "dragleave":
      Ln = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Xi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qi.delete(t.pointerId);
  }
}
function Pi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Co(t), t !== null && zc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function pS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Tn = Pi(Tn, e, t, n, r, i), !0;
    case "dragenter":
      return Ln = Pi(Ln, e, t, n, r, i), !0;
    case "mouseover":
      return Nn = Pi(Nn, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Xi.set(o, Pi(Xi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, qi.set(o, Pi(qi.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function ph(e) {
  var t = Zn(e.target);
  if (t !== null) {
    var n = hr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = th(n), t !== null) {
          e.blockedOn = t, dh(e.priority, function() {
            ch(n);
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
function ca(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Es(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ms = r, n.target.dispatchEvent(r), ms = null;
    } else
      return t = Co(n), t !== null && zc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rd(e, t, n) {
  ca(e) && n.delete(t);
}
function yS() {
  Ss = !1, Tn !== null && ca(Tn) && (Tn = null), Ln !== null && ca(Ln) && (Ln = null), Nn !== null && ca(Nn) && (Nn = null), Xi.forEach(Rd), qi.forEach(Rd);
}
function Oi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ss || (Ss = !0, Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, yS)));
}
function Zi(e) {
  function t(i) {
    return Oi(i, e);
  }
  if (0 < Jo.length) {
    Oi(Jo[0], e);
    for (var n = 1; n < Jo.length; n++) {
      var r = Jo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tn !== null && Oi(Tn, e), Ln !== null && Oi(Ln, e), Nn !== null && Oi(Nn, e), Xi.forEach(t), qi.forEach(t), n = 0; n < $n.length; n++)
    r = $n[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $n.length && (n = $n[0], n.blockedOn === null); )
    ph(n), n.blockedOn === null && $n.shift();
}
var Fr = mn.ReactCurrentBatchConfig, Na = !0;
function hS(e, t, n, r) {
  var i = le, o = Fr.transition;
  Fr.transition = null;
  try {
    le = 1, Dc(e, t, n, r);
  } finally {
    le = i, Fr.transition = o;
  }
}
function mS(e, t, n, r) {
  var i = le, o = Fr.transition;
  Fr.transition = null;
  try {
    le = 4, Dc(e, t, n, r);
  } finally {
    le = i, Fr.transition = o;
  }
}
function Dc(e, t, n, r) {
  if (Na) {
    var i = Es(e, t, n, r);
    if (i === null)
      bu(e, t, r, Ma, n), bd(e, r);
    else if (pS(i, e, t, n, r))
      r.stopPropagation();
    else if (bd(e, r), t & 4 && -1 < dS.indexOf(e)) {
      for (; i !== null; ) {
        var o = Co(i);
        if (o !== null && sh(o), o = Es(e, t, n, r), o === null && bu(e, t, r, Ma, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      bu(e, t, r, null, n);
  }
}
var Ma = null;
function Es(e, t, n, r) {
  if (Ma = null, e = Rc(r), e = Zn(e), e !== null)
    if (t = hr(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = th(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ma = e, null;
}
function yh(e) {
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
      switch (rS()) {
        case Ic:
          return 1;
        case oh:
          return 4;
        case Ta:
        case iS:
          return 16;
        case ah:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Cn = null, Fc = null, fa = null;
function hh() {
  if (fa)
    return fa;
  var e, t = Fc, n = t.length, r, i = "value" in Cn ? Cn.value : Cn.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++)
    ;
  return fa = i.slice(e, 1 < r ? 1 - r : void 0);
}
function da(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qo() {
  return !0;
}
function Id() {
  return !1;
}
function kt(e) {
  function t(n, r, i, o, a) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = a, this.currentTarget = null;
    for (var s in e)
      e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Qo : Id, this.isPropagationStopped = Id, this;
  }
  return xe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qo);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qo);
  }, persist: function() {
  }, isPersistent: Qo }), t;
}
var li = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vc = kt(li), ko = xe({}, li, { view: 0, detail: 0 }), gS = kt(ko), Ou, $u, $i, Bl = xe({}, ko, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Uc, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $i && ($i && e.type === "mousemove" ? (Ou = e.screenX - $i.screenX, $u = e.screenY - $i.screenY) : $u = Ou = 0, $i = e), Ou);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : $u;
} }), jd = kt(Bl), vS = xe({}, Bl, { dataTransfer: 0 }), _S = kt(vS), wS = xe({}, ko, { relatedTarget: 0 }), ku = kt(wS), SS = xe({}, li, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ES = kt(SS), xS = xe({}, li, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), PS = kt(xS), OS = xe({}, li, { data: 0 }), zd = kt(OS), $S = {
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
}, kS = {
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
}, CS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function AS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = CS[e]) ? !!t[e] : !1;
}
function Uc() {
  return AS;
}
var TS = xe({}, ko, { key: function(e) {
  if (e.key) {
    var t = $S[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = da(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Uc, charCode: function(e) {
  return e.type === "keypress" ? da(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? da(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), LS = kt(TS), NS = xe({}, Bl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Dd = kt(NS), MS = xe({}, ko, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Uc }), bS = kt(MS), RS = xe({}, li, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), IS = kt(RS), jS = xe({}, Bl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zS = kt(jS), DS = [9, 13, 27, 32], Bc = dn && "CompositionEvent" in window, zi = null;
dn && "documentMode" in document && (zi = document.documentMode);
var FS = dn && "TextEvent" in window && !zi, mh = dn && (!Bc || zi && 8 < zi && 11 >= zi), Fd = String.fromCharCode(32), Vd = !1;
function gh(e, t) {
  switch (e) {
    case "keyup":
      return DS.indexOf(t.keyCode) !== -1;
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
function vh(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Er = !1;
function VS(e, t) {
  switch (e) {
    case "compositionend":
      return vh(t);
    case "keypress":
      return t.which !== 32 ? null : (Vd = !0, Fd);
    case "textInput":
      return e = t.data, e === Fd && Vd ? null : e;
    default:
      return null;
  }
}
function US(e, t) {
  if (Er)
    return e === "compositionend" || !Bc && gh(e, t) ? (e = hh(), fa = Fc = Cn = null, Er = !1, e) : null;
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
      return mh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var BS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ud(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!BS[e.type] : t === "textarea";
}
function _h(e, t, n, r) {
  Yy(r), t = ba(t, "onChange"), 0 < t.length && (n = new Vc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Di = null, eo = null;
function WS(e) {
  Th(e, 0);
}
function Wl(e) {
  var t = Or(e);
  if (By(t))
    return e;
}
function HS(e, t) {
  if (e === "change")
    return t;
}
var wh = !1;
if (dn) {
  var Cu;
  if (dn) {
    var Au = "oninput" in document;
    if (!Au) {
      var Bd = document.createElement("div");
      Bd.setAttribute("oninput", "return;"), Au = typeof Bd.oninput == "function";
    }
    Cu = Au;
  } else
    Cu = !1;
  wh = Cu && (!document.documentMode || 9 < document.documentMode);
}
function Wd() {
  Di && (Di.detachEvent("onpropertychange", Sh), eo = Di = null);
}
function Sh(e) {
  if (e.propertyName === "value" && Wl(eo)) {
    var t = [];
    _h(t, eo, e, Rc(e)), eh(WS, t);
  }
}
function GS(e, t, n) {
  e === "focusin" ? (Wd(), Di = t, eo = n, Di.attachEvent("onpropertychange", Sh)) : e === "focusout" && Wd();
}
function KS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Wl(eo);
}
function JS(e, t) {
  if (e === "click")
    return Wl(t);
}
function QS(e, t) {
  if (e === "input" || e === "change")
    return Wl(t);
}
function YS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gt = typeof Object.is == "function" ? Object.is : YS;
function to(e, t) {
  if (Gt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!is.call(t, i) || !Gt(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Hd(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Gd(e, t) {
  var n = Hd(e);
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
    n = Hd(n);
  }
}
function Eh(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Eh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function xh() {
  for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ka(e.document);
  }
  return t;
}
function Wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function XS(e) {
  var t = xh(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Eh(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wc(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Gd(n, o);
        var a = Gd(
          n,
          r
        );
        i && a && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var qS = dn && "documentMode" in document && 11 >= document.documentMode, xr = null, xs = null, Fi = null, Ps = !1;
function Kd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ps || xr == null || xr !== ka(r) || (r = xr, "selectionStart" in r && Wc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fi && to(Fi, r) || (Fi = r, r = ba(xs, "onSelect"), 0 < r.length && (t = new Vc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = xr)));
}
function Yo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pr = { animationend: Yo("Animation", "AnimationEnd"), animationiteration: Yo("Animation", "AnimationIteration"), animationstart: Yo("Animation", "AnimationStart"), transitionend: Yo("Transition", "TransitionEnd") }, Tu = {}, Ph = {};
dn && (Ph = document.createElement("div").style, "AnimationEvent" in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), "TransitionEvent" in window || delete Pr.transitionend.transition);
function Hl(e) {
  if (Tu[e])
    return Tu[e];
  if (!Pr[e])
    return e;
  var t = Pr[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ph)
      return Tu[e] = t[n];
  return e;
}
var Oh = Hl("animationend"), $h = Hl("animationiteration"), kh = Hl("animationstart"), Ch = Hl("transitionend"), Ah = /* @__PURE__ */ new Map(), Jd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Vn(e, t) {
  Ah.set(e, t), yr(t, [e]);
}
for (var Lu = 0; Lu < Jd.length; Lu++) {
  var Nu = Jd[Lu], ZS = Nu.toLowerCase(), eE = Nu[0].toUpperCase() + Nu.slice(1);
  Vn(ZS, "on" + eE);
}
Vn(Oh, "onAnimationEnd");
Vn($h, "onAnimationIteration");
Vn(kh, "onAnimationStart");
Vn("dblclick", "onDoubleClick");
Vn("focusin", "onFocus");
Vn("focusout", "onBlur");
Vn(Ch, "onTransitionEnd");
Kr("onMouseEnter", ["mouseout", "mouseover"]);
Kr("onMouseLeave", ["mouseout", "mouseover"]);
Kr("onPointerEnter", ["pointerout", "pointerover"]);
Kr("onPointerLeave", ["pointerout", "pointerover"]);
yr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
yr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), tE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
function Qd(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Zw(r, t, void 0, e), e.currentTarget = null;
}
function Th(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a], c = s.instance, f = s.currentTarget;
          if (s = s.listener, c !== o && i.isPropagationStopped())
            break e;
          Qd(i, s, f), o = c;
        }
      else
        for (a = 0; a < r.length; a++) {
          if (s = r[a], c = s.instance, f = s.currentTarget, s = s.listener, c !== o && i.isPropagationStopped())
            break e;
          Qd(i, s, f), o = c;
        }
    }
  }
  if (Aa)
    throw e = _s, Aa = !1, _s = null, e;
}
function pe(e, t) {
  var n = t[As];
  n === void 0 && (n = t[As] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Lh(t, e, 2, !1), n.add(r));
}
function Mu(e, t, n) {
  var r = 0;
  t && (r |= 4), Lh(n, e, r, t);
}
var Xo = "_reactListening" + Math.random().toString(36).slice(2);
function no(e) {
  if (!e[Xo]) {
    e[Xo] = !0, zy.forEach(function(n) {
      n !== "selectionchange" && (tE.has(n) || Mu(n, !1, e), Mu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xo] || (t[Xo] = !0, Mu("selectionchange", !1, t));
  }
}
function Lh(e, t, n, r) {
  switch (yh(t)) {
    case 1:
      var i = hS;
      break;
    case 4:
      i = mS;
      break;
    default:
      i = Dc;
  }
  n = i.bind(null, t, n, e), i = void 0, !vs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function bu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var a = r.tag;
        if (a === 3 || a === 4) {
          var s = r.stateNode.containerInfo;
          if (s === i || s.nodeType === 8 && s.parentNode === i)
            break;
          if (a === 4)
            for (a = r.return; a !== null; ) {
              var c = a.tag;
              if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === i || c.nodeType === 8 && c.parentNode === i))
                return;
              a = a.return;
            }
          for (; s !== null; ) {
            if (a = Zn(s), a === null)
              return;
            if (c = a.tag, c === 5 || c === 6) {
              r = o = a;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
  eh(function() {
    var f = o, d = Rc(n), p = [];
    e: {
      var u = Ah.get(e);
      if (u !== void 0) {
        var x = Vc, E = e;
        switch (e) {
          case "keypress":
            if (da(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            x = LS;
            break;
          case "focusin":
            E = "focus", x = ku;
            break;
          case "focusout":
            E = "blur", x = ku;
            break;
          case "beforeblur":
          case "afterblur":
            x = ku;
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
            x = jd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = _S;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = bS;
            break;
          case Oh:
          case $h:
          case kh:
            x = ES;
            break;
          case Ch:
            x = IS;
            break;
          case "scroll":
            x = gS;
            break;
          case "wheel":
            x = zS;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = PS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Dd;
        }
        var S = (t & 4) !== 0, $ = !S && e === "scroll", g = S ? u !== null ? u + "Capture" : null : u;
        S = [];
        for (var h = f, m; h !== null; ) {
          m = h;
          var O = m.stateNode;
          if (m.tag === 5 && O !== null && (m = O, g !== null && (O = Yi(h, g), O != null && S.push(ro(h, O, m)))), $)
            break;
          h = h.return;
        }
        0 < S.length && (u = new x(u, E, null, n, d), p.push({ event: u, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (u = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", u && n !== ms && (E = n.relatedTarget || n.fromElement) && (Zn(E) || E[pn]))
          break e;
        if ((x || u) && (u = d.window === d ? d : (u = d.ownerDocument) ? u.defaultView || u.parentWindow : window, x ? (E = n.relatedTarget || n.toElement, x = f, E = E ? Zn(E) : null, E !== null && ($ = hr(E), E !== $ || E.tag !== 5 && E.tag !== 6) && (E = null)) : (x = null, E = f), x !== E)) {
          if (S = jd, O = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (S = Dd, O = "onPointerLeave", g = "onPointerEnter", h = "pointer"), $ = x == null ? u : Or(x), m = E == null ? u : Or(E), u = new S(O, h + "leave", x, n, d), u.target = $, u.relatedTarget = m, O = null, Zn(d) === f && (S = new S(g, h + "enter", E, n, d), S.target = m, S.relatedTarget = $, O = S), $ = O, x && E)
            t: {
              for (S = x, g = E, h = 0, m = S; m; m = vr(m))
                h++;
              for (m = 0, O = g; O; O = vr(O))
                m++;
              for (; 0 < h - m; )
                S = vr(S), h--;
              for (; 0 < m - h; )
                g = vr(g), m--;
              for (; h--; ) {
                if (S === g || g !== null && S === g.alternate)
                  break t;
                S = vr(S), g = vr(g);
              }
              S = null;
            }
          else
            S = null;
          x !== null && Yd(p, u, x, S, !1), E !== null && $ !== null && Yd(p, $, E, S, !0);
        }
      }
      e: {
        if (u = f ? Or(f) : window, x = u.nodeName && u.nodeName.toLowerCase(), x === "select" || x === "input" && u.type === "file")
          var w = HS;
        else if (Ud(u))
          if (wh)
            w = QS;
          else {
            w = KS;
            var l = GS;
          }
        else
          (x = u.nodeName) && x.toLowerCase() === "input" && (u.type === "checkbox" || u.type === "radio") && (w = JS);
        if (w && (w = w(e, f))) {
          _h(p, w, n, d);
          break e;
        }
        l && l(e, u, f), e === "focusout" && (l = u._wrapperState) && l.controlled && u.type === "number" && fs(u, "number", u.value);
      }
      switch (l = f ? Or(f) : window, e) {
        case "focusin":
          (Ud(l) || l.contentEditable === "true") && (xr = l, xs = f, Fi = null);
          break;
        case "focusout":
          Fi = xs = xr = null;
          break;
        case "mousedown":
          Ps = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ps = !1, Kd(p, n, d);
          break;
        case "selectionchange":
          if (qS)
            break;
        case "keydown":
        case "keyup":
          Kd(p, n, d);
      }
      var v;
      if (Bc)
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
        Er ? gh(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (mh && n.locale !== "ko" && (Er || L !== "onCompositionStart" ? L === "onCompositionEnd" && Er && (v = hh()) : (Cn = d, Fc = "value" in Cn ? Cn.value : Cn.textContent, Er = !0)), l = ba(f, L), 0 < l.length && (L = new zd(L, e, null, n, d), p.push({ event: L, listeners: l }), v ? L.data = v : (v = vh(n), v !== null && (L.data = v)))), (v = FS ? VS(e, n) : US(e, n)) && (f = ba(f, "onBeforeInput"), 0 < f.length && (d = new zd("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: f }), d.data = v));
    }
    Th(p, t);
  });
}
function ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ba(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Yi(e, n), o != null && r.unshift(ro(e, o, i)), o = Yi(e, t), o != null && r.push(ro(e, o, i))), e = e.return;
  }
  return r;
}
function vr(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yd(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n, c = s.alternate, f = s.stateNode;
    if (c !== null && c === r)
      break;
    s.tag === 5 && f !== null && (s = f, i ? (c = Yi(n, o), c != null && a.unshift(ro(n, c, s))) : i || (c = Yi(n, o), c != null && a.push(ro(n, c, s)))), n = n.return;
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var nE = /\r\n?/g, rE = /\u0000|\uFFFD/g;
function Xd(e) {
  return (typeof e == "string" ? e : "" + e).replace(nE, `
`).replace(rE, "");
}
function qo(e, t, n) {
  if (t = Xd(t), Xd(e) !== t && n)
    throw Error(T(425));
}
function Ra() {
}
var Os = null, $s = null;
function ks(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cs = typeof setTimeout == "function" ? setTimeout : void 0, iE = typeof clearTimeout == "function" ? clearTimeout : void 0, qd = typeof Promise == "function" ? Promise : void 0, oE = typeof queueMicrotask == "function" ? queueMicrotask : typeof qd < "u" ? function(e) {
  return qd.resolve(null).then(e).catch(aE);
} : Cs;
function aE(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ru(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Zi(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Zi(t);
}
function Mn(e) {
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
function Zd(e) {
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
var ui = Math.random().toString(36).slice(2), qt = "__reactFiber$" + ui, io = "__reactProps$" + ui, pn = "__reactContainer$" + ui, As = "__reactEvents$" + ui, lE = "__reactListeners$" + ui, uE = "__reactHandles$" + ui;
function Zn(e) {
  var t = e[qt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pn] || n[qt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Zd(e); e !== null; ) {
          if (n = e[qt])
            return n;
          e = Zd(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Co(e) {
  return e = e[qt] || e[pn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Or(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(T(33));
}
function Gl(e) {
  return e[io] || null;
}
var Ts = [], $r = -1;
function Un(e) {
  return { current: e };
}
function ye(e) {
  0 > $r || (e.current = Ts[$r], Ts[$r] = null, $r--);
}
function fe(e, t) {
  $r++, Ts[$r] = e.current, e.current = t;
}
var Fn = {}, tt = Un(Fn), ft = Un(!1), ur = Fn;
function Jr(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function dt(e) {
  return e = e.childContextTypes, e != null;
}
function Ia() {
  ye(ft), ye(tt);
}
function ep(e, t, n) {
  if (tt.current !== Fn)
    throw Error(T(168));
  fe(tt, t), fe(ft, n);
}
function Nh(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(T(108, Gw(e) || "Unknown", i));
  return xe({}, n, r);
}
function ja(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, ur = tt.current, fe(tt, e), fe(ft, ft.current), !0;
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(T(169));
  n ? (e = Nh(e, t, ur), r.__reactInternalMemoizedMergedChildContext = e, ye(ft), ye(tt), fe(tt, e)) : ye(ft), fe(ft, n);
}
var ln = null, Kl = !1, Iu = !1;
function Mh(e) {
  ln === null ? ln = [e] : ln.push(e);
}
function sE(e) {
  Kl = !0, Mh(e);
}
function Bn() {
  if (!Iu && ln !== null) {
    Iu = !0;
    var e = 0, t = le;
    try {
      var n = ln;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ln = null, Kl = !1;
    } catch (i) {
      throw ln !== null && (ln = ln.slice(e + 1)), ih(Ic, Bn), i;
    } finally {
      le = t, Iu = !1;
    }
  }
  return null;
}
var kr = [], Cr = 0, za = null, Da = 0, Lt = [], Nt = 0, sr = null, un = 1, sn = "";
function Yn(e, t) {
  kr[Cr++] = Da, kr[Cr++] = za, za = e, Da = t;
}
function bh(e, t, n) {
  Lt[Nt++] = un, Lt[Nt++] = sn, Lt[Nt++] = sr, sr = e;
  var r = un;
  e = sn;
  var i = 32 - Wt(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Wt(t) + i;
  if (30 < o) {
    var a = i - i % 5;
    o = (r & (1 << a) - 1).toString(32), r >>= a, i -= a, un = 1 << 32 - Wt(t) + i | n << i | r, sn = o + e;
  } else
    un = 1 << o | n << i | r, sn = e;
}
function Hc(e) {
  e.return !== null && (Yn(e, 1), bh(e, 1, 0));
}
function Gc(e) {
  for (; e === za; )
    za = kr[--Cr], kr[Cr] = null, Da = kr[--Cr], kr[Cr] = null;
  for (; e === sr; )
    sr = Lt[--Nt], Lt[Nt] = null, sn = Lt[--Nt], Lt[Nt] = null, un = Lt[--Nt], Lt[Nt] = null;
}
var xt = null, St = null, me = !1, Bt = null;
function Rh(e, t) {
  var n = Mt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function np(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xt = e, St = Mn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xt = e, St = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sr !== null ? { id: un, overflow: sn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xt = e, St = null, !0) : !1;
    default:
      return !1;
  }
}
function Ls(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ns(e) {
  if (me) {
    var t = St;
    if (t) {
      var n = t;
      if (!np(e, t)) {
        if (Ls(e))
          throw Error(T(418));
        t = Mn(n.nextSibling);
        var r = xt;
        t && np(e, t) ? Rh(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, xt = e);
      }
    } else {
      if (Ls(e))
        throw Error(T(418));
      e.flags = e.flags & -4097 | 2, me = !1, xt = e;
    }
  }
}
function rp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xt = e;
}
function Zo(e) {
  if (e !== xt)
    return !1;
  if (!me)
    return rp(e), me = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ks(e.type, e.memoizedProps)), t && (t = St)) {
    if (Ls(e))
      throw Ih(), Error(T(418));
    for (; t; )
      Rh(e, t), t = Mn(t.nextSibling);
  }
  if (rp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              St = Mn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      St = null;
    }
  } else
    St = xt ? Mn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ih() {
  for (var e = St; e; )
    e = Mn(e.nextSibling);
}
function Qr() {
  St = xt = null, me = !1;
}
function Kc(e) {
  Bt === null ? Bt = [e] : Bt.push(e);
}
var cE = mn.ReactCurrentBatchConfig;
function ki(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(T(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(a) {
        var s = i.refs;
        a === null ? delete s[o] : s[o] = a;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(T(284));
    if (!n._owner)
      throw Error(T(290, e));
  }
  return e;
}
function ea(e, t) {
  throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ip(e) {
  var t = e._init;
  return t(e._payload);
}
function jh(e) {
  function t(g, h) {
    if (e) {
      var m = g.deletions;
      m === null ? (g.deletions = [h], g.flags |= 16) : m.push(h);
    }
  }
  function n(g, h) {
    if (!e)
      return null;
    for (; h !== null; )
      t(g, h), h = h.sibling;
    return null;
  }
  function r(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function i(g, h) {
    return g = jn(g, h), g.index = 0, g.sibling = null, g;
  }
  function o(g, h, m) {
    return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < h ? (g.flags |= 2, h) : m) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, h, m, O) {
    return h === null || h.tag !== 6 ? (h = Bu(m, g.mode, O), h.return = g, h) : (h = i(h, m), h.return = g, h);
  }
  function c(g, h, m, O) {
    var w = m.type;
    return w === Sr ? d(g, h, m.props.children, O, m.key) : h !== null && (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Pn && ip(w) === h.type) ? (O = i(h, m.props), O.ref = ki(g, h, m), O.return = g, O) : (O = _a(m.type, m.key, m.props, null, g.mode, O), O.ref = ki(g, h, m), O.return = g, O);
  }
  function f(g, h, m, O) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Wu(m, g.mode, O), h.return = g, h) : (h = i(h, m.children || []), h.return = g, h);
  }
  function d(g, h, m, O, w) {
    return h === null || h.tag !== 7 ? (h = ir(m, g.mode, O, w), h.return = g, h) : (h = i(h, m), h.return = g, h);
  }
  function p(g, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return h = Bu("" + h, g.mode, m), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Bo:
          return m = _a(h.type, h.key, h.props, null, g.mode, m), m.ref = ki(g, null, h), m.return = g, m;
        case wr:
          return h = Wu(h, g.mode, m), h.return = g, h;
        case Pn:
          var O = h._init;
          return p(g, O(h._payload), m);
      }
      if (Li(h) || Ei(h))
        return h = ir(h, g.mode, m, null), h.return = g, h;
      ea(g, h);
    }
    return null;
  }
  function u(g, h, m, O) {
    var w = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return w !== null ? null : s(g, h, "" + m, O);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bo:
          return m.key === w ? c(g, h, m, O) : null;
        case wr:
          return m.key === w ? f(g, h, m, O) : null;
        case Pn:
          return w = m._init, u(
            g,
            h,
            w(m._payload),
            O
          );
      }
      if (Li(m) || Ei(m))
        return w !== null ? null : d(g, h, m, O, null);
      ea(g, m);
    }
    return null;
  }
  function x(g, h, m, O, w) {
    if (typeof O == "string" && O !== "" || typeof O == "number")
      return g = g.get(m) || null, s(h, g, "" + O, w);
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case Bo:
          return g = g.get(O.key === null ? m : O.key) || null, c(h, g, O, w);
        case wr:
          return g = g.get(O.key === null ? m : O.key) || null, f(h, g, O, w);
        case Pn:
          var l = O._init;
          return x(g, h, m, l(O._payload), w);
      }
      if (Li(O) || Ei(O))
        return g = g.get(m) || null, d(h, g, O, w, null);
      ea(h, O);
    }
    return null;
  }
  function E(g, h, m, O) {
    for (var w = null, l = null, v = h, L = h = 0, K = null; v !== null && L < m.length; L++) {
      v.index > L ? (K = v, v = null) : K = v.sibling;
      var D = u(g, v, m[L], O);
      if (D === null) {
        v === null && (v = K);
        break;
      }
      e && v && D.alternate === null && t(g, v), h = o(D, h, L), l === null ? w = D : l.sibling = D, l = D, v = K;
    }
    if (L === m.length)
      return n(g, v), me && Yn(g, L), w;
    if (v === null) {
      for (; L < m.length; L++)
        v = p(g, m[L], O), v !== null && (h = o(v, h, L), l === null ? w = v : l.sibling = v, l = v);
      return me && Yn(g, L), w;
    }
    for (v = r(g, v); L < m.length; L++)
      K = x(v, g, L, m[L], O), K !== null && (e && K.alternate !== null && v.delete(K.key === null ? L : K.key), h = o(K, h, L), l === null ? w = K : l.sibling = K, l = K);
    return e && v.forEach(function(se) {
      return t(g, se);
    }), me && Yn(g, L), w;
  }
  function S(g, h, m, O) {
    var w = Ei(m);
    if (typeof w != "function")
      throw Error(T(150));
    if (m = w.call(m), m == null)
      throw Error(T(151));
    for (var l = w = null, v = h, L = h = 0, K = null, D = m.next(); v !== null && !D.done; L++, D = m.next()) {
      v.index > L ? (K = v, v = null) : K = v.sibling;
      var se = u(g, v, D.value, O);
      if (se === null) {
        v === null && (v = K);
        break;
      }
      e && v && se.alternate === null && t(g, v), h = o(se, h, L), l === null ? w = se : l.sibling = se, l = se, v = K;
    }
    if (D.done)
      return n(
        g,
        v
      ), me && Yn(g, L), w;
    if (v === null) {
      for (; !D.done; L++, D = m.next())
        D = p(g, D.value, O), D !== null && (h = o(D, h, L), l === null ? w = D : l.sibling = D, l = D);
      return me && Yn(g, L), w;
    }
    for (v = r(g, v); !D.done; L++, D = m.next())
      D = x(v, g, L, D.value, O), D !== null && (e && D.alternate !== null && v.delete(D.key === null ? L : D.key), h = o(D, h, L), l === null ? w = D : l.sibling = D, l = D);
    return e && v.forEach(function(Pe) {
      return t(g, Pe);
    }), me && Yn(g, L), w;
  }
  function $(g, h, m, O) {
    if (typeof m == "object" && m !== null && m.type === Sr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bo:
          e: {
            for (var w = m.key, l = h; l !== null; ) {
              if (l.key === w) {
                if (w = m.type, w === Sr) {
                  if (l.tag === 7) {
                    n(g, l.sibling), h = i(l, m.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (l.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Pn && ip(w) === l.type) {
                  n(g, l.sibling), h = i(l, m.props), h.ref = ki(g, l, m), h.return = g, g = h;
                  break e;
                }
                n(g, l);
                break;
              } else
                t(g, l);
              l = l.sibling;
            }
            m.type === Sr ? (h = ir(m.props.children, g.mode, O, m.key), h.return = g, g = h) : (O = _a(m.type, m.key, m.props, null, g.mode, O), O.ref = ki(g, h, m), O.return = g, g = O);
          }
          return a(g);
        case wr:
          e: {
            for (l = m.key; h !== null; ) {
              if (h.key === l)
                if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                  n(g, h.sibling), h = i(h, m.children || []), h.return = g, g = h;
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else
                t(g, h);
              h = h.sibling;
            }
            h = Wu(m, g.mode, O), h.return = g, g = h;
          }
          return a(g);
        case Pn:
          return l = m._init, $(g, h, l(m._payload), O);
      }
      if (Li(m))
        return E(g, h, m, O);
      if (Ei(m))
        return S(g, h, m, O);
      ea(g, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(g, h.sibling), h = i(h, m), h.return = g, g = h) : (n(g, h), h = Bu(m, g.mode, O), h.return = g, g = h), a(g)) : n(g, h);
  }
  return $;
}
var Yr = jh(!0), zh = jh(!1), Fa = Un(null), Va = null, Ar = null, Jc = null;
function Qc() {
  Jc = Ar = Va = null;
}
function Yc(e) {
  var t = Fa.current;
  ye(Fa), e._currentValue = t;
}
function Ms(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Vr(e, t) {
  Va = e, Jc = Ar = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ct = !0), e.firstContext = null);
}
function Rt(e) {
  var t = e._currentValue;
  if (Jc !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Ar === null) {
      if (Va === null)
        throw Error(T(308));
      Ar = e, Va.dependencies = { lanes: 0, firstContext: e };
    } else
      Ar = Ar.next = e;
  return t;
}
var er = null;
function Xc(e) {
  er === null ? er = [e] : er.push(e);
}
function Dh(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Xc(t)) : (n.next = i.next, i.next = n), t.interleaved = n, yn(e, r);
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var On = !1;
function qc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Fh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function cn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, ie & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, yn(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Xc(r)) : (t.next = i.next, i.next = t), r.interleaved = t, yn(e, n);
}
function pa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jc(e, n);
  }
}
function op(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = a : o = o.next = a, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ua(e, t, n, r) {
  var i = e.updateQueue;
  On = !1;
  var o = i.firstBaseUpdate, a = i.lastBaseUpdate, s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var c = s, f = c.next;
    c.next = null, a === null ? o = f : a.next = f, a = c;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== a && (s === null ? d.firstBaseUpdate = f : s.next = f, d.lastBaseUpdate = c));
  }
  if (o !== null) {
    var p = i.baseState;
    a = 0, d = f = c = null, s = o;
    do {
      var u = s.lane, x = s.eventTime;
      if ((r & u) === u) {
        d !== null && (d = d.next = {
          eventTime: x,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var E = e, S = s;
          switch (u = t, x = n, S.tag) {
            case 1:
              if (E = S.payload, typeof E == "function") {
                p = E.call(x, p, u);
                break e;
              }
              p = E;
              break e;
            case 3:
              E.flags = E.flags & -65537 | 128;
            case 0:
              if (E = S.payload, u = typeof E == "function" ? E.call(x, p, u) : E, u == null)
                break e;
              p = xe({}, p, u);
              break e;
            case 2:
              On = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, u = i.effects, u === null ? i.effects = [s] : u.push(s));
      } else
        x = { eventTime: x, lane: u, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (f = d = x, c = p) : d = d.next = x, a |= u;
      if (s = s.next, s === null) {
        if (s = i.shared.pending, s === null)
          break;
        u = s, s = u.next, u.next = null, i.lastBaseUpdate = u, i.shared.pending = null;
      }
    } while (1);
    if (d === null && (c = p), i.baseState = c, i.firstBaseUpdate = f, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        a |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    fr |= a, e.lanes = a, e.memoizedState = p;
  }
}
function ap(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var Ao = {}, tn = Un(Ao), oo = Un(Ao), ao = Un(Ao);
function tr(e) {
  if (e === Ao)
    throw Error(T(174));
  return e;
}
function Zc(e, t) {
  switch (fe(ao, t), fe(oo, e), fe(tn, Ao), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ps(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ps(t, e);
  }
  ye(tn), fe(tn, t);
}
function Xr() {
  ye(tn), ye(oo), ye(ao);
}
function Vh(e) {
  tr(ao.current);
  var t = tr(tn.current), n = ps(t, e.type);
  t !== n && (fe(oo, e), fe(tn, n));
}
function ef(e) {
  oo.current === e && (ye(tn), ye(oo));
}
var we = Un(0);
function Ba(e) {
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
var ju = [];
function tf() {
  for (var e = 0; e < ju.length; e++)
    ju[e]._workInProgressVersionPrimary = null;
  ju.length = 0;
}
var ya = mn.ReactCurrentDispatcher, zu = mn.ReactCurrentBatchConfig, cr = 0, Ee = null, Re = null, De = null, Wa = !1, Vi = !1, lo = 0, fE = 0;
function Xe() {
  throw Error(T(321));
}
function nf(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n]))
      return !1;
  return !0;
}
function rf(e, t, n, r, i, o) {
  if (cr = o, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ya.current = e === null || e.memoizedState === null ? hE : mE, e = n(r, i), Vi) {
    o = 0;
    do {
      if (Vi = !1, lo = 0, 25 <= o)
        throw Error(T(301));
      o += 1, De = Re = null, t.updateQueue = null, ya.current = gE, e = n(r, i);
    } while (Vi);
  }
  if (ya.current = Ha, t = Re !== null && Re.next !== null, cr = 0, De = Re = Ee = null, Wa = !1, t)
    throw Error(T(300));
  return e;
}
function of() {
  var e = lo !== 0;
  return lo = 0, e;
}
function Qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? Ee.memoizedState = De = e : De = De.next = e, De;
}
function It() {
  if (Re === null) {
    var e = Ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Re.next;
  var t = De === null ? Ee.memoizedState : De.next;
  if (t !== null)
    De = t, Re = e;
  else {
    if (e === null)
      throw Error(T(310));
    Re = e, e = { memoizedState: Re.memoizedState, baseState: Re.baseState, baseQueue: Re.baseQueue, queue: Re.queue, next: null }, De === null ? Ee.memoizedState = De = e : De = De.next = e;
  }
  return De;
}
function uo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Du(e) {
  var t = It(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Re, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      i.next = o.next, o.next = a;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var s = a = null, c = null, f = o;
    do {
      var d = f.lane;
      if ((cr & d) === d)
        c !== null && (c = c.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var p = {
          lane: d,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        c === null ? (s = c = p, a = r) : c = c.next = p, Ee.lanes |= d, fr |= d;
      }
      f = f.next;
    } while (f !== null && f !== o);
    c === null ? a = r : c.next = s, Gt(r, t.memoizedState) || (ct = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = c, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, Ee.lanes |= o, fr |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fu(e) {
  var t = It(), n = t.queue;
  if (n === null)
    throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = i = i.next;
    do
      o = e(o, a.action), a = a.next;
    while (a !== i);
    Gt(o, t.memoizedState) || (ct = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Uh() {
}
function Bh(e, t) {
  var n = Ee, r = It(), i = t(), o = !Gt(r.memoizedState, i);
  if (o && (r.memoizedState = i, ct = !0), r = r.queue, af(Gh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || De !== null && De.memoizedState.tag & 1) {
    if (n.flags |= 2048, so(9, Hh.bind(null, n, r, i, t), void 0, null), Fe === null)
      throw Error(T(349));
    cr & 30 || Wh(n, t, i);
  }
  return i;
}
function Wh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Hh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Kh(t) && Jh(e);
}
function Gh(e, t, n) {
  return n(function() {
    Kh(t) && Jh(e);
  });
}
function Kh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function Jh(e) {
  var t = yn(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function lp(e) {
  var t = Qt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: e }, t.queue = e, e = e.dispatch = yE.bind(null, Ee, e), [t.memoizedState, e];
}
function so(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Qh() {
  return It().memoizedState;
}
function ha(e, t, n, r) {
  var i = Qt();
  Ee.flags |= e, i.memoizedState = so(1 | t, n, void 0, r === void 0 ? null : r);
}
function Jl(e, t, n, r) {
  var i = It();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Re !== null) {
    var a = Re.memoizedState;
    if (o = a.destroy, r !== null && nf(r, a.deps)) {
      i.memoizedState = so(t, n, o, r);
      return;
    }
  }
  Ee.flags |= e, i.memoizedState = so(1 | t, n, o, r);
}
function up(e, t) {
  return ha(8390656, 8, e, t);
}
function af(e, t) {
  return Jl(2048, 8, e, t);
}
function Yh(e, t) {
  return Jl(4, 2, e, t);
}
function Xh(e, t) {
  return Jl(4, 4, e, t);
}
function qh(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Zh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jl(4, 4, qh.bind(null, t, e), n);
}
function lf() {
}
function em(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function tm(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && nf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function nm(e, t, n) {
  return cr & 21 ? (Gt(n, t) || (n = lh(), Ee.lanes |= n, fr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ct = !0), e.memoizedState = n);
}
function dE(e, t) {
  var n = le;
  le = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = zu.transition;
  zu.transition = {};
  try {
    e(!1), t();
  } finally {
    le = n, zu.transition = r;
  }
}
function rm() {
  return It().memoizedState;
}
function pE(e, t, n) {
  var r = In(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, im(e))
    om(t, n);
  else if (n = Dh(e, t, n, r), n !== null) {
    var i = ot();
    Ht(n, e, r, i), am(n, t, r);
  }
}
function yE(e, t, n) {
  var r = In(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (im(e))
    om(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var a = t.lastRenderedState, s = o(a, n);
        if (i.hasEagerState = !0, i.eagerState = s, Gt(s, a)) {
          var c = t.interleaved;
          c === null ? (i.next = i, Xc(t)) : (i.next = c.next, c.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Dh(e, t, i, r), n !== null && (i = ot(), Ht(n, e, r, i), am(n, t, r));
  }
}
function im(e) {
  var t = e.alternate;
  return e === Ee || t !== null && t === Ee;
}
function om(e, t) {
  Vi = Wa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function am(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jc(e, n);
  }
}
var Ha = { readContext: Rt, useCallback: Xe, useContext: Xe, useEffect: Xe, useImperativeHandle: Xe, useInsertionEffect: Xe, useLayoutEffect: Xe, useMemo: Xe, useReducer: Xe, useRef: Xe, useState: Xe, useDebugValue: Xe, useDeferredValue: Xe, useTransition: Xe, useMutableSource: Xe, useSyncExternalStore: Xe, useId: Xe, unstable_isNewReconciler: !1 }, hE = { readContext: Rt, useCallback: function(e, t) {
  return Qt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Rt, useEffect: up, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ha(
    4194308,
    4,
    qh.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ha(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ha(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pE.bind(null, Ee, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qt();
  return e = { current: e }, t.memoizedState = e;
}, useState: lp, useDebugValue: lf, useDeferredValue: function(e) {
  return Qt().memoizedState = e;
}, useTransition: function() {
  var e = lp(!1), t = e[0];
  return e = dE.bind(null, e[1]), Qt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Ee, i = Qt();
  if (me) {
    if (n === void 0)
      throw Error(T(407));
    n = n();
  } else {
    if (n = t(), Fe === null)
      throw Error(T(349));
    cr & 30 || Wh(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, up(Gh.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, so(9, Hh.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = Qt(), t = Fe.identifierPrefix;
  if (me) {
    var n = sn, r = un;
    n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = lo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = fE++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, mE = {
  readContext: Rt,
  useCallback: em,
  useContext: Rt,
  useEffect: af,
  useImperativeHandle: Zh,
  useInsertionEffect: Yh,
  useLayoutEffect: Xh,
  useMemo: tm,
  useReducer: Du,
  useRef: Qh,
  useState: function() {
    return Du(uo);
  },
  useDebugValue: lf,
  useDeferredValue: function(e) {
    var t = It();
    return nm(t, Re.memoizedState, e);
  },
  useTransition: function() {
    var e = Du(uo)[0], t = It().memoizedState;
    return [e, t];
  },
  useMutableSource: Uh,
  useSyncExternalStore: Bh,
  useId: rm,
  unstable_isNewReconciler: !1
}, gE = { readContext: Rt, useCallback: em, useContext: Rt, useEffect: af, useImperativeHandle: Zh, useInsertionEffect: Yh, useLayoutEffect: Xh, useMemo: tm, useReducer: Fu, useRef: Qh, useState: function() {
  return Fu(uo);
}, useDebugValue: lf, useDeferredValue: function(e) {
  var t = It();
  return Re === null ? t.memoizedState = e : nm(t, Re.memoizedState, e);
}, useTransition: function() {
  var e = Fu(uo)[0], t = It().memoizedState;
  return [e, t];
}, useMutableSource: Uh, useSyncExternalStore: Bh, useId: rm, unstable_isNewReconciler: !1 };
function Vt(e, t) {
  if (e && e.defaultProps) {
    t = xe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bs(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : xe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = { isMounted: function(e) {
  return (e = e._reactInternals) ? hr(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ot(), i = In(e), o = cn(r, i);
  o.payload = t, n != null && (o.callback = n), t = bn(e, o, i), t !== null && (Ht(t, e, i, r), pa(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ot(), i = In(e), o = cn(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = bn(e, o, i), t !== null && (Ht(t, e, i, r), pa(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ot(), r = In(e), i = cn(n, r);
  i.tag = 2, t != null && (i.callback = t), t = bn(e, i, r), t !== null && (Ht(t, e, r, n), pa(t, e, r));
} };
function sp(e, t, n, r, i, o, a) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !to(n, r) || !to(i, o) : !0;
}
function lm(e, t, n) {
  var r = !1, i = Fn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Rt(o) : (i = dt(t) ? ur : tt.current, r = t.contextTypes, o = (r = r != null) ? Jr(e, i) : Fn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function cp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function Rs(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, qc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Rt(o) : (o = dt(t) ? ur : tt.current, i.context = Jr(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (bs(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ql.enqueueReplaceState(i, i.state, null), Ua(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Hw(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Vu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var vE = typeof WeakMap == "function" ? WeakMap : Map;
function um(e, t, n) {
  n = cn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ka || (Ka = !0, Gs = r), Is(e, t);
  }, n;
}
function sm(e, t, n) {
  n = cn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Is(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Is(e, t), typeof r != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
    var a = t.stack;
    this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
  }), n;
}
function fp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vE();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = NE.bind(null, e, t, n), t.then(e, e));
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
function pp(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = cn(-1, 1), t.tag = 2, bn(n, t, 1))), n.lanes |= 1), e);
}
var _E = mn.ReactCurrentOwner, ct = !1;
function it(e, t, n, r) {
  t.child = e === null ? zh(t, null, n, r) : Yr(t, e.child, n, r);
}
function yp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Vr(t, i), r = rf(e, t, n, r, o, i), n = of(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, hn(e, t, i)) : (me && n && Hc(t), t.flags |= 1, it(e, t, r, i), t.child);
}
function hp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !hf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, cm(e, t, o, r, i)) : (e = _a(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var a = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : to, n(a, r) && e.ref === t.ref)
      return hn(e, t, i);
  }
  return t.flags |= 1, e = jn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function cm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (to(o, r) && e.ref === t.ref)
      if (ct = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (ct = !0);
      else
        return t.lanes = e.lanes, hn(e, t, i);
  }
  return js(e, t, n, r, i);
}
function fm(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Lr, _t), _t |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, fe(Lr, _t), _t |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, fe(Lr, _t), _t |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, fe(Lr, _t), _t |= r;
  return it(e, t, i, n), t.child;
}
function dm(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function js(e, t, n, r, i) {
  var o = dt(n) ? ur : tt.current;
  return o = Jr(t, o), Vr(t, i), n = rf(e, t, n, r, o, i), r = of(), e !== null && !ct ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, hn(e, t, i)) : (me && r && Hc(t), t.flags |= 1, it(e, t, n, i), t.child);
}
function mp(e, t, n, r, i) {
  if (dt(n)) {
    var o = !0;
    ja(t);
  } else
    o = !1;
  if (Vr(t, i), t.stateNode === null)
    ma(e, t), lm(t, n, r), Rs(t, n, r, i), r = !0;
  else if (e === null) {
    var a = t.stateNode, s = t.memoizedProps;
    a.props = s;
    var c = a.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Rt(f) : (f = dt(n) ? ur : tt.current, f = Jr(t, f));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
    p || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || c !== f) && cp(t, a, r, f), On = !1;
    var u = t.memoizedState;
    a.state = u, Ua(t, r, a, i), c = t.memoizedState, s !== r || u !== c || ft.current || On ? (typeof d == "function" && (bs(t, n, d, r), c = t.memoizedState), (s = On || sp(t, n, s, r, u, c, f)) ? (p || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), a.props = r, a.state = c, a.context = f, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    a = t.stateNode, Fh(e, t), s = t.memoizedProps, f = t.type === t.elementType ? s : Vt(t.type, s), a.props = f, p = t.pendingProps, u = a.context, c = n.contextType, typeof c == "object" && c !== null ? c = Rt(c) : (c = dt(n) ? ur : tt.current, c = Jr(t, c));
    var x = n.getDerivedStateFromProps;
    (d = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== p || u !== c) && cp(t, a, r, c), On = !1, u = t.memoizedState, a.state = u, Ua(t, r, a, i);
    var E = t.memoizedState;
    s !== p || u !== E || ft.current || On ? (typeof x == "function" && (bs(t, n, x, r), E = t.memoizedState), (f = On || sp(t, n, f, r, u, E, c) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, E, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, E, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), a.props = r, a.state = E, a.context = c, r = f) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && u === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zs(e, t, n, r, o, i);
}
function zs(e, t, n, r, i, o) {
  dm(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a)
    return i && tp(t, n, !1), hn(e, t, o);
  r = t.stateNode, _E.current = t;
  var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && a ? (t.child = Yr(t, e.child, null, o), t.child = Yr(t, null, s, o)) : it(e, t, s, o), t.memoizedState = r.state, i && tp(t, n, !0), t.child;
}
function pm(e) {
  var t = e.stateNode;
  t.pendingContext ? ep(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ep(e, t.context, !1), Zc(e, t.containerInfo);
}
function gp(e, t, n, r, i) {
  return Qr(), Kc(i), t.flags |= 256, it(e, t, n, r), t.child;
}
var Ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ym(e, t, n) {
  var r = t.pendingProps, i = we.current, o = !1, a = (t.flags & 128) !== 0, s;
  if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), fe(we, i & 1), e === null)
    return Ns(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = ql(a, r, 0, null), e = ir(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Fs(n), t.memoizedState = Ds, e) : uf(t, a));
  if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null))
    return wE(e, t, a, r, s, i, n);
  if (o) {
    o = r.fallback, a = t.mode, i = e.child, s = i.sibling;
    var c = { mode: "hidden", children: r.children };
    return !(a & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = jn(i, c), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? o = jn(s, o) : (o = ir(o, a, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, a = e.child.memoizedState, a = a === null ? Fs(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~n, t.memoizedState = Ds, r;
  }
  return o = e.child, e = o.sibling, r = jn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function uf(e, t) {
  return t = ql({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ta(e, t, n, r) {
  return r !== null && Kc(r), Yr(t, e.child, null, n), e = uf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function wE(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Vu(Error(T(422))), ta(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = ql({ mode: "visible", children: r.children }, i, 0, null), o = ir(o, i, a, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Yr(t, e.child, null, a), t.child.memoizedState = Fs(a), t.memoizedState = Ds, o);
  if (!(t.mode & 1))
    return ta(e, t, a, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var s = r.dgst;
    return r = s, o = Error(T(419)), r = Vu(o, r, void 0), ta(e, t, a, r);
  }
  if (s = (a & e.childLanes) !== 0, ct || s) {
    if (r = Fe, r !== null) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | a) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, yn(e, i), Ht(r, e, i, -1));
    }
    return yf(), r = Vu(Error(T(421))), ta(e, t, a, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ME.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, St = Mn(i.nextSibling), xt = t, me = !0, Bt = null, e !== null && (Lt[Nt++] = un, Lt[Nt++] = sn, Lt[Nt++] = sr, un = e.id, sn = e.overflow, sr = t), t = uf(t, r.children), t.flags |= 4096, t);
}
function vp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ms(e.return, t, n);
}
function Uu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function hm(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (it(e, t, r.children, n), r = we.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && vp(e, n, t);
          else if (e.tag === 19)
            vp(e, n, t);
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
  if (fe(we, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Ba(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Uu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ba(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Uu(t, !0, n, null, o);
        break;
      case "together":
        Uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ma(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function hn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), fr |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = jn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function SE(e, t, n) {
  switch (t.tag) {
    case 3:
      pm(t), Qr();
      break;
    case 5:
      Vh(t);
      break;
    case 1:
      dt(t.type) && ja(t);
      break;
    case 4:
      Zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      fe(Fa, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (fe(we, we.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ym(e, t, n) : (fe(we, we.current & 1), e = hn(e, t, n), e !== null ? e.sibling : null);
      fe(we, we.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return hm(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(we, we.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, fm(e, t, n);
  }
  return hn(e, t, n);
}
var mm, Vs, gm, vm;
mm = function(e, t) {
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
Vs = function() {
};
gm = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, tr(tn.current);
    var o = null;
    switch (n) {
      case "input":
        i = ss(e, i), r = ss(e, r), o = [];
        break;
      case "select":
        i = xe({}, i, { value: void 0 }), r = xe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = ds(e, i), r = ds(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ra);
    }
    ys(n, r);
    var a;
    n = null;
    for (f in i)
      if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === "style") {
          var s = i[f];
          for (a in s)
            s.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
        } else
          f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Ji.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var c = r[f];
      if (s = i != null ? i[f] : void 0, r.hasOwnProperty(f) && c !== s && (c != null || s != null))
        if (f === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
            for (a in c)
              c.hasOwnProperty(a) && s[a] !== c[a] && (n || (n = {}), n[a] = c[a]);
          } else
            n || (o || (o = []), o.push(
              f,
              n
            )), n = c;
        else
          f === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, c != null && s !== c && (o = o || []).push(f, c)) : f === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(f, "" + c) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Ji.hasOwnProperty(f) ? (c != null && f === "onScroll" && pe("scroll", e), o || s === c || (o = [])) : (o = o || []).push(f, c));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
vm = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ci(e, t) {
  if (!me)
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
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function EE(e, t, n) {
  var r = t.pendingProps;
  switch (Gc(t), t.tag) {
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
      return dt(t.type) && Ia(), qe(t), null;
    case 3:
      return r = t.stateNode, Xr(), ye(ft), ye(tt), tf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Bt !== null && (Qs(Bt), Bt = null))), Vs(e, t), qe(t), null;
    case 5:
      ef(t);
      var i = tr(ao.current);
      if (n = t.type, e !== null && t.stateNode != null)
        gm(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(T(166));
          return qe(t), null;
        }
        if (e = tr(tn.current), Zo(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[qt] = t, r[io] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              pe("cancel", r), pe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Mi.length; i++)
                pe(Mi[i], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              pe(
                "error",
                r
              ), pe("load", r);
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              kd(r, o), pe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, pe("invalid", r);
              break;
            case "textarea":
              Ad(r, o), pe("invalid", r);
          }
          ys(n, o), i = null;
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && qo(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && qo(
                r.textContent,
                s,
                e
              ), i = ["children", "" + s]) : Ji.hasOwnProperty(a) && s != null && a === "onScroll" && pe("scroll", r);
            }
          switch (n) {
            case "input":
              Wo(r), Cd(r, o, !0);
              break;
            case "textarea":
              Wo(r), Td(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ra);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          a = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[qt] = t, e[io] = r, mm(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (a = hs(n, r), n) {
              case "dialog":
                pe("cancel", e), pe("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Mi.length; i++)
                  pe(Mi[i], e);
                i = r;
                break;
              case "source":
                pe("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                pe(
                  "error",
                  e
                ), pe("load", e), i = r;
                break;
              case "details":
                pe("toggle", e), i = r;
                break;
              case "input":
                kd(e, r), i = ss(e, r), pe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = xe({}, r, { value: void 0 }), pe("invalid", e);
                break;
              case "textarea":
                Ad(e, r), i = ds(e, r), pe("invalid", e);
                break;
              default:
                i = r;
            }
            ys(n, i), s = i;
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var c = s[o];
                o === "style" ? Qy(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ky(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Qi(e, c) : typeof c == "number" && Qi(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ji.hasOwnProperty(o) ? c != null && o === "onScroll" && pe("scroll", e) : c != null && Lc(e, o, c, a));
              }
            switch (n) {
              case "input":
                Wo(e), Cd(e, r, !1);
                break;
              case "textarea":
                Wo(e), Td(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? jr(e, !!r.multiple, o, !1) : r.defaultValue != null && jr(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ra);
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
        vm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(T(166));
        if (n = tr(ao.current), tr(tn.current), Zo(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qt] = t, (o = r.nodeValue !== n) && (e = xt, e !== null))
            switch (e.tag) {
              case 3:
                qo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && qo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qt] = t, t.stateNode = r;
      }
      return qe(t), null;
    case 13:
      if (ye(we), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (me && St !== null && t.mode & 1 && !(t.flags & 128))
          Ih(), Qr(), t.flags |= 98560, o = !1;
        else if (o = Zo(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(T(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(T(317));
            o[qt] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          qe(t), o = !1;
        } else
          Bt !== null && (Qs(Bt), Bt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || we.current & 1 ? Ie === 0 && (Ie = 3) : yf())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
    case 4:
      return Xr(), Vs(e, t), e === null && no(t.stateNode.containerInfo), qe(t), null;
    case 10:
      return Yc(t.type._context), qe(t), null;
    case 17:
      return dt(t.type) && Ia(), qe(t), null;
    case 19:
      if (ye(we), o = t.memoizedState, o === null)
        return qe(t), null;
      if (r = (t.flags & 128) !== 0, a = o.rendering, a === null)
        if (r)
          Ci(o, !1);
        else {
          if (Ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (a = Ba(e), a !== null) {
                for (t.flags |= 128, Ci(o, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return fe(we, we.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Te() > Zr && (t.flags |= 128, r = !0, Ci(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ba(a), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ci(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !me)
              return qe(t), null;
          } else
            2 * Te() - o.renderingStartTime > Zr && n !== 1073741824 && (t.flags |= 128, r = !0, Ci(o, !1), t.lanes = 4194304);
        o.isBackwards ? (a.sibling = t.child, t.child = a) : (n = o.last, n !== null ? n.sibling = a : t.child = a, o.last = a);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Te(), t.sibling = null, n = we.current, fe(we, r ? n & 1 | 2 : n & 1), t) : (qe(t), null);
    case 22:
    case 23:
      return pf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? _t & 1073741824 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function xE(e, t) {
  switch (Gc(t), t.tag) {
    case 1:
      return dt(t.type) && Ia(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xr(), ye(ft), ye(tt), tf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ef(t), null;
    case 13:
      if (ye(we), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(T(340));
        Qr();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ye(we), null;
    case 4:
      return Xr(), null;
    case 10:
      return Yc(t.type._context), null;
    case 22:
    case 23:
      return pf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var na = !1, et = !1, PE = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else
      n.current = null;
}
function Us(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var _p = !1;
function OE(e, t) {
  if (Os = Na, e = xh(), Wc(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0, s = -1, c = -1, f = 0, d = 0, p = e, u = null;
          t:
            for (; ; ) {
              for (var x; p !== n || i !== 0 && p.nodeType !== 3 || (s = a + i), p !== o || r !== 0 && p.nodeType !== 3 || (c = a + r), p.nodeType === 3 && (a += p.nodeValue.length), (x = p.firstChild) !== null; )
                u = p, p = x;
              for (; ; ) {
                if (p === e)
                  break t;
                if (u === n && ++f === i && (s = a), u === o && ++d === r && (c = a), (x = p.nextSibling) !== null)
                  break;
                p = u, u = p.parentNode;
              }
              p = x;
            }
          n = s === -1 || c === -1 ? null : { start: s, end: c };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for ($s = { focusedElem: e, selectionRange: n }, Na = !1, I = t; I !== null; )
    if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, I = e;
    else
      for (; I !== null; ) {
        t = I;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var S = E.memoizedProps, $ = E.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Vt(t.type, S), $);
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (O) {
          Ae(t, t.return, O);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, I = e;
          break;
        }
        I = t.return;
      }
  return E = _p, _p = !1, E;
}
function Ui(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Us(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Yl(e, t) {
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
function Bs(e) {
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
function _m(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _m(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qt], delete t[io], delete t[As], delete t[lE], delete t[uE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function wm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wp(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wm(e.return))
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
function Ws(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ra));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ws(e, t, n), e = e.sibling; e !== null; )
      Ws(e, t, n), e = e.sibling;
}
function Hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Hs(e, t, n), e = e.sibling; e !== null; )
      Hs(e, t, n), e = e.sibling;
}
var He = null, Ut = !1;
function xn(e, t, n) {
  for (n = n.child; n !== null; )
    Sm(e, t, n), n = n.sibling;
}
function Sm(e, t, n) {
  if (en && typeof en.onCommitFiberUnmount == "function")
    try {
      en.onCommitFiberUnmount(Ul, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      et || Tr(n, t);
    case 6:
      var r = He, i = Ut;
      He = null, xn(e, t, n), He = r, Ut = i, He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null && (Ut ? (e = He, n = n.stateNode, e.nodeType === 8 ? Ru(e.parentNode, n) : e.nodeType === 1 && Ru(e, n), Zi(e)) : Ru(He, n.stateNode));
      break;
    case 4:
      r = He, i = Ut, He = n.stateNode.containerInfo, Ut = !0, xn(e, t, n), He = r, Ut = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!et && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, a = o.destroy;
          o = o.tag, a !== void 0 && (o & 2 || o & 4) && Us(n, t, a), i = i.next;
        } while (i !== r);
      }
      xn(e, t, n);
      break;
    case 1:
      if (!et && (Tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (s) {
          Ae(n, t, s);
        }
      xn(e, t, n);
      break;
    case 21:
      xn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (et = (r = et) || n.memoizedState !== null, xn(e, t, n), et = r) : xn(e, t, n);
      break;
    default:
      xn(e, t, n);
  }
}
function Sp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new PE()), t.forEach(function(r) {
      var i = bE.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, a = t, s = a;
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
          throw Error(T(160));
        Sm(o, a, i), He = null, Ut = !1;
        var c = i.alternate;
        c !== null && (c.return = null), i.return = null;
      } catch (f) {
        Ae(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Em(t, e), t = t.sibling;
}
function Em(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ft(t, e), Jt(e), r & 4) {
        try {
          Ui(3, e, e.return), Yl(3, e);
        } catch (S) {
          Ae(e, e.return, S);
        }
        try {
          Ui(5, e, e.return);
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      break;
    case 1:
      Ft(t, e), Jt(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (Ft(t, e), Jt(e), r & 512 && n !== null && Tr(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Qi(i, "");
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, a = n !== null ? n.memoizedProps : o, s = e.type, c = e.updateQueue;
        if (e.updateQueue = null, c !== null)
          try {
            s === "input" && o.type === "radio" && o.name != null && Wy(i, o), hs(s, a);
            var f = hs(s, o);
            for (a = 0; a < c.length; a += 2) {
              var d = c[a], p = c[a + 1];
              d === "style" ? Qy(i, p) : d === "dangerouslySetInnerHTML" ? Ky(i, p) : d === "children" ? Qi(i, p) : Lc(i, d, p, f);
            }
            switch (s) {
              case "input":
                cs(i, o);
                break;
              case "textarea":
                Hy(i, o);
                break;
              case "select":
                var u = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null ? jr(i, !!o.multiple, x, !1) : u !== !!o.multiple && (o.defaultValue != null ? jr(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : jr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[io] = o;
          } catch (S) {
            Ae(e, e.return, S);
          }
      }
      break;
    case 6:
      if (Ft(t, e), Jt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(T(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (S) {
          Ae(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ft(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Zi(t.containerInfo);
        } catch (S) {
          Ae(e, e.return, S);
        }
      break;
    case 4:
      Ft(t, e), Jt(e);
      break;
    case 13:
      Ft(t, e), Jt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ff = Te())), r & 4 && Sp(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (et = (f = et) || d, Ft(t, e), et = f) : Ft(t, e), Jt(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !d && e.mode & 1)
          for (I = e, d = e.child; d !== null; ) {
            for (p = I = d; I !== null; ) {
              switch (u = I, x = u.child, u.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ui(4, u, u.return);
                  break;
                case 1:
                  Tr(u, u.return);
                  var E = u.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    r = u, n = u.return;
                    try {
                      t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount();
                    } catch (S) {
                      Ae(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Tr(u, u.return);
                  break;
                case 22:
                  if (u.memoizedState !== null) {
                    xp(p);
                    continue;
                  }
              }
              x !== null ? (x.return = u, I = x) : xp(p);
            }
            d = d.sibling;
          }
        e:
          for (d = null, p = e; ; ) {
            if (p.tag === 5) {
              if (d === null) {
                d = p;
                try {
                  i = p.stateNode, f ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = p.stateNode, c = p.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, s.style.display = Jy("display", a));
                } catch (S) {
                  Ae(e, e.return, S);
                }
              }
            } else if (p.tag === 6) {
              if (d === null)
                try {
                  p.stateNode.nodeValue = f ? "" : p.memoizedProps;
                } catch (S) {
                  Ae(e, e.return, S);
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
      Ft(t, e), Jt(e), r & 4 && Sp(e);
      break;
    case 21:
      break;
    default:
      Ft(
        t,
        e
      ), Jt(e);
  }
}
function Jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qi(i, ""), r.flags &= -33);
          var o = wp(e);
          Hs(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo, s = wp(e);
          Ws(e, s, a);
          break;
        default:
          throw Error(T(161));
      }
    } catch (c) {
      Ae(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $E(e, t, n) {
  I = e, xm(e);
}
function xm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I, o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || na;
      if (!a) {
        var s = i.alternate, c = s !== null && s.memoizedState !== null || et;
        s = na;
        var f = et;
        if (na = a, (et = c) && !f)
          for (I = i; I !== null; )
            a = I, c = a.child, a.tag === 22 && a.memoizedState !== null ? Pp(i) : c !== null ? (c.return = a, I = c) : Pp(i);
        for (; o !== null; )
          I = o, xm(o), o = o.sibling;
        I = i, na = s, et = f;
      }
      Ep(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, I = o) : Ep(e);
  }
}
function Ep(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              et || Yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !et)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ap(t, o, r);
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
                ap(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var d = f.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && Zi(p);
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
              throw Error(T(163));
          }
        et || t.flags & 512 && Bs(t);
      } catch (u) {
        Ae(t, t.return, u);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function xp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function Pp(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yl(4, t);
          } catch (c) {
            Ae(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Ae(t, i, c);
            }
          }
          var o = t.return;
          try {
            Bs(t);
          } catch (c) {
            Ae(t, o, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Bs(t);
          } catch (c) {
            Ae(t, a, c);
          }
      }
    } catch (c) {
      Ae(t, t.return, c);
    }
    if (t === e) {
      I = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, I = s;
      break;
    }
    I = t.return;
  }
}
var kE = Math.ceil, Ga = mn.ReactCurrentDispatcher, sf = mn.ReactCurrentOwner, bt = mn.ReactCurrentBatchConfig, ie = 0, Fe = null, be = null, Je = 0, _t = 0, Lr = Un(0), Ie = 0, co = null, fr = 0, Xl = 0, cf = 0, Bi = null, st = null, ff = 0, Zr = 1 / 0, an = null, Ka = !1, Gs = null, Rn = null, ra = !1, An = null, Ja = 0, Wi = 0, Ks = null, ga = -1, va = 0;
function ot() {
  return ie & 6 ? Te() : ga !== -1 ? ga : ga = Te();
}
function In(e) {
  return e.mode & 1 ? ie & 2 && Je !== 0 ? Je & -Je : cE.transition !== null ? (va === 0 && (va = lh()), va) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yh(e.type)), e) : 1;
}
function Ht(e, t, n, r) {
  if (50 < Wi)
    throw Wi = 0, Ks = null, Error(T(185));
  $o(e, n, r), (!(ie & 2) || e !== Fe) && (e === Fe && (!(ie & 2) && (Xl |= n), Ie === 4 && kn(e, Je)), pt(e, r), n === 1 && ie === 0 && !(t.mode & 1) && (Zr = Te() + 500, Kl && Bn()));
}
function pt(e, t) {
  var n = e.callbackNode;
  cS(e, t);
  var r = La(e, e === Fe ? Je : 0);
  if (r === 0)
    n !== null && Md(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Md(n), t === 1)
      e.tag === 0 ? sE(Op.bind(null, e)) : Mh(Op.bind(null, e)), oE(function() {
        !(ie & 6) && Bn();
      }), n = null;
    else {
      switch (uh(r)) {
        case 1:
          n = Ic;
          break;
        case 4:
          n = oh;
          break;
        case 16:
          n = Ta;
          break;
        case 536870912:
          n = ah;
          break;
        default:
          n = Ta;
      }
      n = Lm(n, Pm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Pm(e, t) {
  if (ga = -1, va = 0, ie & 6)
    throw Error(T(327));
  var n = e.callbackNode;
  if (Ur() && e.callbackNode !== n)
    return null;
  var r = La(e, e === Fe ? Je : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Qa(e, r);
  else {
    t = r;
    var i = ie;
    ie |= 2;
    var o = $m();
    (Fe !== e || Je !== t) && (an = null, Zr = Te() + 500, rr(e, t));
    do
      try {
        TE();
        break;
      } catch (s) {
        Om(e, s);
      }
    while (1);
    Qc(), Ga.current = o, ie = i, be !== null ? t = 0 : (Fe = null, Je = 0, t = Ie);
  }
  if (t !== 0) {
    if (t === 2 && (i = ws(e), i !== 0 && (r = i, t = Js(e, i))), t === 1)
      throw n = co, rr(e, 0), kn(e, r), pt(e, Te()), n;
    if (t === 6)
      kn(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !CE(i) && (t = Qa(e, r), t === 2 && (o = ws(e), o !== 0 && (r = o, t = Js(e, o))), t === 1))
        throw n = co, rr(e, 0), kn(e, r), pt(e, Te()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Xn(e, st, an);
          break;
        case 3:
          if (kn(e, r), (r & 130023424) === r && (t = ff + 500 - Te(), 10 < t)) {
            if (La(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ot(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Cs(Xn.bind(null, e, st, an), t);
            break;
          }
          Xn(e, st, an);
          break;
        case 4:
          if (kn(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Wt(r);
            o = 1 << a, a = t[a], a > i && (i = a), r &= ~o;
          }
          if (r = i, r = Te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kE(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cs(Xn.bind(null, e, st, an), r);
            break;
          }
          Xn(e, st, an);
          break;
        case 5:
          Xn(e, st, an);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return pt(e, Te()), e.callbackNode === n ? Pm.bind(null, e) : null;
}
function Js(e, t) {
  var n = Bi;
  return e.current.memoizedState.isDehydrated && (rr(e, t).flags |= 256), e = Qa(e, t), e !== 2 && (t = st, st = n, t !== null && Qs(t)), e;
}
function Qs(e) {
  st === null ? st = e : st.push.apply(st, e);
}
function CE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!Gt(o(), i))
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
function kn(e, t) {
  for (t &= ~cf, t &= ~Xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Op(e) {
  if (ie & 6)
    throw Error(T(327));
  Ur();
  var t = La(e, 0);
  if (!(t & 1))
    return pt(e, Te()), null;
  var n = Qa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ws(e);
    r !== 0 && (t = r, n = Js(e, r));
  }
  if (n === 1)
    throw n = co, rr(e, 0), kn(e, t), pt(e, Te()), n;
  if (n === 6)
    throw Error(T(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Xn(e, st, an), pt(e, Te()), null;
}
function df(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ie = n, ie === 0 && (Zr = Te() + 500, Kl && Bn());
  }
}
function dr(e) {
  An !== null && An.tag === 0 && !(ie & 6) && Ur();
  var t = ie;
  ie |= 1;
  var n = bt.transition, r = le;
  try {
    if (bt.transition = null, le = 1, e)
      return e();
  } finally {
    le = r, bt.transition = n, ie = t, !(ie & 6) && Bn();
  }
}
function pf() {
  _t = Lr.current, ye(Lr);
}
function rr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, iE(n)), be !== null)
    for (n = be.return; n !== null; ) {
      var r = n;
      switch (Gc(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ia();
          break;
        case 3:
          Xr(), ye(ft), ye(tt), tf();
          break;
        case 5:
          ef(r);
          break;
        case 4:
          Xr();
          break;
        case 13:
          ye(we);
          break;
        case 19:
          ye(we);
          break;
        case 10:
          Yc(r.type._context);
          break;
        case 22:
        case 23:
          pf();
      }
      n = n.return;
    }
  if (Fe = e, be = e = jn(e.current, null), Je = _t = t, Ie = 0, co = null, cf = Xl = fr = 0, st = Bi = null, er !== null) {
    for (t = 0; t < er.length; t++)
      if (n = er[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var a = o.next;
          o.next = i, r.next = a;
        }
        n.pending = r;
      }
    er = null;
  }
  return e;
}
function Om(e, t) {
  do {
    var n = be;
    try {
      if (Qc(), ya.current = Ha, Wa) {
        for (var r = Ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Wa = !1;
      }
      if (cr = 0, De = Re = Ee = null, Vi = !1, lo = 0, sf.current = null, n === null || n.return === null) {
        Ie = 1, co = t, be = null;
        break;
      }
      e: {
        var o = e, a = n.return, s = n, c = t;
        if (t = Je, s.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
          var f = c, d = s, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var u = d.alternate;
            u ? (d.updateQueue = u.updateQueue, d.memoizedState = u.memoizedState, d.lanes = u.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var x = dp(a);
          if (x !== null) {
            x.flags &= -257, pp(x, a, s, o, t), x.mode & 1 && fp(o, f, t), t = x, c = f;
            var E = t.updateQueue;
            if (E === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(c), t.updateQueue = S;
            } else
              E.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              fp(o, f, t), yf();
              break e;
            }
            c = Error(T(426));
          }
        } else if (me && s.mode & 1) {
          var $ = dp(a);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256), pp($, a, s, o, t), Kc(qr(c, s));
            break e;
          }
        }
        o = c = qr(c, s), Ie !== 4 && (Ie = 2), Bi === null ? Bi = [o] : Bi.push(o), o = a;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var g = um(o, c, t);
              op(o, g);
              break e;
            case 1:
              s = c;
              var h = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Rn === null || !Rn.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var O = sm(o, s, t);
                op(o, O);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Cm(n);
    } catch (w) {
      t = w, be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $m() {
  var e = Ga.current;
  return Ga.current = Ha, e === null ? Ha : e;
}
function yf() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4), Fe === null || !(fr & 268435455) && !(Xl & 268435455) || kn(Fe, Je);
}
function Qa(e, t) {
  var n = ie;
  ie |= 2;
  var r = $m();
  (Fe !== e || Je !== t) && (an = null, rr(e, t));
  do
    try {
      AE();
      break;
    } catch (i) {
      Om(e, i);
    }
  while (1);
  if (Qc(), ie = n, Ga.current = r, be !== null)
    throw Error(T(261));
  return Fe = null, Je = 0, Ie;
}
function AE() {
  for (; be !== null; )
    km(be);
}
function TE() {
  for (; be !== null && !tS(); )
    km(be);
}
function km(e) {
  var t = Tm(e.alternate, e, _t);
  e.memoizedProps = e.pendingProps, t === null ? Cm(e) : be = t, sf.current = null;
}
function Cm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xE(n, t), n !== null) {
        n.flags &= 32767, be = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Ie = 6, be = null;
        return;
      }
    } else if (n = EE(n, t, _t), n !== null) {
      be = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Ie === 0 && (Ie = 5);
}
function Xn(e, t, n) {
  var r = le, i = bt.transition;
  try {
    bt.transition = null, le = 1, LE(e, t, n, r);
  } finally {
    bt.transition = i, le = r;
  }
  return null;
}
function LE(e, t, n, r) {
  do
    Ur();
  while (An !== null);
  if (ie & 6)
    throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(T(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (fS(e, o), e === Fe && (be = Fe = null, Je = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ra || (ra = !0, Lm(Ta, function() {
    return Ur(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = bt.transition, bt.transition = null;
    var a = le;
    le = 1;
    var s = ie;
    ie |= 4, sf.current = null, OE(e, n), Em(n, e), XS($s), Na = !!Os, $s = Os = null, e.current = n, $E(n), nS(), ie = s, le = a, bt.transition = o;
  } else
    e.current = n;
  if (ra && (ra = !1, An = e, Ja = i), o = e.pendingLanes, o === 0 && (Rn = null), oS(n.stateNode), pt(e, Te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ka)
    throw Ka = !1, e = Gs, Gs = null, e;
  return Ja & 1 && e.tag !== 0 && Ur(), o = e.pendingLanes, o & 1 ? e === Ks ? Wi++ : (Wi = 0, Ks = e) : Wi = 0, Bn(), null;
}
function Ur() {
  if (An !== null) {
    var e = uh(Ja), t = bt.transition, n = le;
    try {
      if (bt.transition = null, le = 16 > e ? 16 : e, An === null)
        var r = !1;
      else {
        if (e = An, An = null, Ja = 0, ie & 6)
          throw Error(T(331));
        var i = ie;
        for (ie |= 4, I = e.current; I !== null; ) {
          var o = I, a = o.child;
          if (I.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var c = 0; c < s.length; c++) {
                var f = s[c];
                for (I = f; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null)
                    p.return = d, I = p;
                  else
                    for (; I !== null; ) {
                      d = I;
                      var u = d.sibling, x = d.return;
                      if (_m(d), d === f) {
                        I = null;
                        break;
                      }
                      if (u !== null) {
                        u.return = x, I = u;
                        break;
                      }
                      I = x;
                    }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var S = E.child;
                if (S !== null) {
                  E.child = null;
                  do {
                    var $ = S.sibling;
                    S.sibling = null, S = $;
                  } while (S !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null)
            a.return = o, I = a;
          else
            e:
              for (; I !== null; ) {
                if (o = I, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(9, o, o.return);
                  }
                var g = o.sibling;
                if (g !== null) {
                  g.return = o.return, I = g;
                  break e;
                }
                I = o.return;
              }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          a = I;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null)
            m.return = a, I = m;
          else
            e:
              for (a = h; I !== null; ) {
                if (s = I, s.flags & 2048)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yl(9, s);
                    }
                  } catch (w) {
                    Ae(s, s.return, w);
                  }
                if (s === a) {
                  I = null;
                  break e;
                }
                var O = s.sibling;
                if (O !== null) {
                  O.return = s.return, I = O;
                  break e;
                }
                I = s.return;
              }
        }
        if (ie = i, Bn(), en && typeof en.onPostCommitFiberRoot == "function")
          try {
            en.onPostCommitFiberRoot(Ul, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      le = n, bt.transition = t;
    }
  }
  return !1;
}
function $p(e, t, n) {
  t = qr(n, t), t = um(e, t, 1), e = bn(e, t, 1), t = ot(), e !== null && ($o(e, 1, t), pt(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3)
    $p(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $p(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rn === null || !Rn.has(r))) {
          e = qr(n, e), e = sm(t, e, 1), t = bn(t, e, 1), e = ot(), t !== null && ($o(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function NE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ot(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Je & n) === n && (Ie === 4 || Ie === 3 && (Je & 130023424) === Je && 500 > Te() - ff ? rr(e, 0) : cf |= n), pt(e, t);
}
function Am(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ko, Ko <<= 1, !(Ko & 130023424) && (Ko = 4194304)) : t = 1);
  var n = ot();
  e = yn(e, t), e !== null && ($o(e, t, n), pt(e, n));
}
function ME(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Am(e, n);
}
function bE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Am(e, n);
}
var Tm;
Tm = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ft.current)
      ct = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return ct = !1, SE(e, t, n);
      ct = !!(e.flags & 131072);
    }
  else
    ct = !1, me && t.flags & 1048576 && bh(t, Da, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ma(e, t), e = t.pendingProps;
      var i = Jr(t, tt.current);
      Vr(t, n), i = rf(null, t, r, e, i, n);
      var o = of();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, dt(r) ? (o = !0, ja(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, qc(t), i.updater = Ql, t.stateNode = i, i._reactInternals = t, Rs(t, r, e, n), t = zs(null, t, r, !0, o, n)) : (t.tag = 0, me && o && Hc(t), it(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ma(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = IE(r), e = Vt(r, e), i) {
          case 0:
            t = js(null, t, r, e, n);
            break e;
          case 1:
            t = mp(null, t, r, e, n);
            break e;
          case 11:
            t = yp(null, t, r, e, n);
            break e;
          case 14:
            t = hp(null, t, r, Vt(r.type, e), n);
            break e;
        }
        throw Error(T(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), js(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), mp(e, t, r, i, n);
    case 3:
      e: {
        if (pm(t), e === null)
          throw Error(T(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Fh(e, t), Ua(t, r, null, n);
        var a = t.memoizedState;
        if (r = a.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = qr(Error(T(423)), t), t = gp(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = qr(Error(T(424)), t), t = gp(e, t, r, n, i);
            break e;
          } else
            for (St = Mn(t.stateNode.containerInfo.firstChild), xt = t, me = !0, Bt = null, n = zh(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Qr(), r === i) {
            t = hn(e, t, n);
            break e;
          }
          it(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Vh(t), e === null && Ns(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = i.children, ks(r, i) ? a = null : o !== null && ks(r, o) && (t.flags |= 32), dm(e, t), it(e, t, a, n), t.child;
    case 6:
      return e === null && Ns(t), null;
    case 13:
      return ym(e, t, n);
    case 4:
      return Zc(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yr(t, null, r, n) : it(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), yp(e, t, r, i, n);
    case 7:
      return it(e, t, t.pendingProps, n), t.child;
    case 8:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return it(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, a = i.value, fe(Fa, r._currentValue), r._currentValue = a, o !== null)
          if (Gt(o.value, a)) {
            if (o.children === i.children && !ft.current) {
              t = hn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var c = s.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      c = cn(-1, n & -n), c.tag = 2;
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var d = f.pending;
                        d === null ? c.next = c : (c.next = d.next, d.next = c), f.pending = c;
                      }
                    }
                    o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Ms(
                      o.return,
                      n,
                      t
                    ), s.lanes |= n;
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10)
                a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (a = o.return, a === null)
                  throw Error(T(341));
                a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Ms(a, n, t), a = o.sibling;
              } else
                a = o.child;
              if (a !== null)
                a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (o = a.sibling, o !== null) {
                    o.return = a.return, a = o;
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        it(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Vr(t, n), i = Rt(i), r = r(i), t.flags |= 1, it(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Vt(r, t.pendingProps), i = Vt(r.type, i), hp(e, t, r, i, n);
    case 15:
      return cm(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Vt(r, i), ma(e, t), t.tag = 1, dt(r) ? (e = !0, ja(t)) : e = !1, Vr(t, n), lm(t, r, i), Rs(t, r, i, n), zs(null, t, r, !0, e, n);
    case 19:
      return hm(e, t, n);
    case 22:
      return fm(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Lm(e, t) {
  return ih(e, t);
}
function RE(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Mt(e, t, n, r) {
  return new RE(e, t, n, r);
}
function hf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function IE(e) {
  if (typeof e == "function")
    return hf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Mc)
      return 11;
    if (e === bc)
      return 14;
  }
  return 2;
}
function jn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function _a(e, t, n, r, i, o) {
  var a = 2;
  if (r = e, typeof e == "function")
    hf(e) && (a = 1);
  else if (typeof e == "string")
    a = 5;
  else
    e:
      switch (e) {
        case Sr:
          return ir(n.children, i, o, t);
        case Nc:
          a = 8, i |= 8;
          break;
        case os:
          return e = Mt(12, n, t, i | 2), e.elementType = os, e.lanes = o, e;
        case as:
          return e = Mt(13, n, t, i), e.elementType = as, e.lanes = o, e;
        case ls:
          return e = Mt(19, n, t, i), e.elementType = ls, e.lanes = o, e;
        case Vy:
          return ql(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Dy:
                a = 10;
                break e;
              case Fy:
                a = 9;
                break e;
              case Mc:
                a = 11;
                break e;
              case bc:
                a = 14;
                break e;
              case Pn:
                a = 16, r = null;
                break e;
            }
          throw Error(T(130, e == null ? e : typeof e, ""));
      }
  return t = Mt(a, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function ir(e, t, n, r) {
  return e = Mt(7, e, r, t), e.lanes = n, e;
}
function ql(e, t, n, r) {
  return e = Mt(22, e, r, t), e.elementType = Vy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bu(e, t, n) {
  return e = Mt(6, e, null, t), e.lanes = n, e;
}
function Wu(e, t, n) {
  return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function jE(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pu(0), this.expirationTimes = Pu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function mf(e, t, n, r, i, o, a, s, c) {
  return e = new jE(e, t, n, s, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Mt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qc(o), e;
}
function zE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: wr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Nm(e) {
  if (!e)
    return Fn;
  e = e._reactInternals;
  e: {
    if (hr(e) !== e || e.tag !== 1)
      throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n))
      return Nh(e, n, t);
  }
  return t;
}
function Mm(e, t, n, r, i, o, a, s, c) {
  return e = mf(n, r, !0, e, i, o, a, s, c), e.context = Nm(null), n = e.current, r = ot(), i = In(n), o = cn(r, i), o.callback = t ?? null, bn(n, o, i), e.current.lanes = i, $o(e, i, r), pt(e, r), e;
}
function Zl(e, t, n, r) {
  var i = t.current, o = ot(), a = In(i);
  return n = Nm(n), t.context === null ? t.context = n : t.pendingContext = n, t = cn(o, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = bn(i, t, a), e !== null && (Ht(e, i, a, o), pa(e, i, a)), a;
}
function Ya(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gf(e, t) {
  kp(e, t), (e = e.alternate) && kp(e, t);
}
function DE() {
  return null;
}
var bm = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function vf(e) {
  this._internalRoot = e;
}
eu.prototype.render = vf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(T(409));
  Zl(e, t, null, null);
};
eu.prototype.unmount = vf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    dr(function() {
      Zl(null, e, null, null);
    }), t[pn] = null;
  }
};
function eu(e) {
  this._internalRoot = e;
}
eu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = fh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++)
      ;
    $n.splice(n, 0, e), n === 0 && ph(e);
  }
};
function _f(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function tu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Cp() {
}
function FE(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = Ya(a);
        o.call(f);
      };
    }
    var a = Mm(t, r, e, 0, null, !1, !1, "", Cp);
    return e._reactRootContainer = a, e[pn] = a.current, no(e.nodeType === 8 ? e.parentNode : e), dr(), a;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var f = Ya(c);
      s.call(f);
    };
  }
  var c = mf(e, 0, !1, null, null, !1, !1, "", Cp);
  return e._reactRootContainer = c, e[pn] = c.current, no(e.nodeType === 8 ? e.parentNode : e), dr(function() {
    Zl(t, c, n, r);
  }), c;
}
function nu(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function() {
        var c = Ya(a);
        s.call(c);
      };
    }
    Zl(t, a, e, i);
  } else
    a = FE(n, t, e, i, r);
  return Ya(a);
}
sh = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ni(t.pendingLanes);
        n !== 0 && (jc(t, n | 1), pt(t, Te()), !(ie & 6) && (Zr = Te() + 500, Bn()));
      }
      break;
    case 13:
      dr(function() {
        var r = yn(e, 1);
        if (r !== null) {
          var i = ot();
          Ht(r, e, 1, i);
        }
      }), gf(e, 1);
  }
};
zc = function(e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = ot();
      Ht(t, e, 134217728, n);
    }
    gf(e, 134217728);
  }
};
ch = function(e) {
  if (e.tag === 13) {
    var t = In(e), n = yn(e, t);
    if (n !== null) {
      var r = ot();
      Ht(n, e, t, r);
    }
    gf(e, t);
  }
};
fh = function() {
  return le;
};
dh = function(e, t) {
  var n = le;
  try {
    return le = e, t();
  } finally {
    le = n;
  }
};
gs = function(e, t, n) {
  switch (t) {
    case "input":
      if (cs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Gl(r);
            if (!i)
              throw Error(T(90));
            By(r), cs(r, i);
          }
        }
      }
      break;
    case "textarea":
      Hy(e, n);
      break;
    case "select":
      t = n.value, t != null && jr(e, !!n.multiple, t, !1);
  }
};
qy = df;
Zy = dr;
var VE = { usingClientEntryPoint: !1, Events: [Co, Or, Gl, Yy, Xy, df] }, Ai = { findFiberByHostInstance: Zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, UE = { bundleType: Ai.bundleType, version: Ai.version, rendererPackageName: Ai.rendererPackageName, rendererConfig: Ai.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = nh(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ai.findFiberByHostInstance || DE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ia.isDisabled && ia.supportsFiber)
    try {
      Ul = ia.inject(UE), en = ia;
    } catch {
    }
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VE;
$t.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_f(t))
    throw Error(T(200));
  return zE(e, t, null, n);
};
$t.createRoot = function(e, t) {
  if (!_f(e))
    throw Error(T(299));
  var n = !1, r = "", i = bm;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = mf(e, 1, !1, null, null, n, !1, r, i), e[pn] = t.current, no(e.nodeType === 8 ? e.parentNode : e), new vf(t);
};
$t.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
  return e = nh(t), e = e === null ? null : e.stateNode, e;
};
$t.flushSync = function(e) {
  return dr(e);
};
$t.hydrate = function(e, t, n) {
  if (!tu(t))
    throw Error(T(200));
  return nu(null, e, t, !0, n);
};
$t.hydrateRoot = function(e, t, n) {
  if (!_f(e))
    throw Error(T(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", a = bm;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Mm(t, null, e, 1, n ?? null, i, !1, o, a), e[pn] = t.current, no(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new eu(t);
};
$t.render = function(e, t, n) {
  if (!tu(t))
    throw Error(T(200));
  return nu(null, e, t, !1, n);
};
$t.unmountComponentAtNode = function(e) {
  if (!tu(e))
    throw Error(T(40));
  return e._reactRootContainer ? (dr(function() {
    nu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pn] = null;
    });
  }), !0) : !1;
};
$t.unstable_batchedUpdates = df;
$t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!tu(n))
    throw Error(T(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(T(38));
  return nu(e, t, n, !1, r);
};
$t.version = "18.3.1-next-f1338f8080-20240426";
function Rm() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rm);
    } catch (e) {
      console.error(e);
    }
}
Rm(), Ry.exports = $t;
var BE = Ry.exports, Im, Ap = BE;
Im = Ap.createRoot, Ap.hydrateRoot;
const Tp = ec.createContext(null);
function QE(e) {
  const t = Im(e);
  return console.log("%c[Ancestry] Starting up...", "color: #7F77DD; font-weight: bold"), {
    render(n) {
      console.log("%c[Ancestry] Context:", "color: #7F77DD; font-weight: bold", n), console.log("%c[Ancestry] client:", "color: #7F77DD; font-weight: bold", n.client), console.log("%c[Ancestry] options:", "color: #7F77DD; font-weight: bold", n.options), console.log("%c[Ancestry] entity:", "color: #7F77DD; font-weight: bold", n.entity), t.render(
        /* @__PURE__ */ G(zw, { theme: n.theme, children: /* @__PURE__ */ G(Tp.Provider, { value: n.options, children: /* @__PURE__ */ G(Tp.Consumer, { children: (r) => /* @__PURE__ */ G(
          l1,
          {
            client: n.client,
            options: r,
            entity: n.entity
          }
        ) }) }) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  QE as default
};
