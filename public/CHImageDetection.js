(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-image-detection{--ch-id-pad: 12px;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:0;height:100%;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#102a43;background:#f5f8fb}.ch-image-detection *,.ch-image-detection *:before,.ch-image-detection *:after{box-sizing:border-box}.ch-image-detection__header{display:flex;flex-direction:column;gap:10px;padding:var(--ch-id-pad);border-bottom:1px solid #d9e2ec;background:#fff;flex-shrink:0}.ch-image-detection__eyebrow{margin:0 0 2px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0b5cab}.ch-image-detection__title{margin:0;font-size:16px;font-weight:700;line-height:1.3}.ch-image-detection__checks{display:grid;gap:8px;margin:0;padding:0;border:none;min-width:0}.ch-image-detection__checks-legend{margin:0 0 2px;padding:0;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#627d98}.ch-image-detection__check{display:flex;align-items:flex-start;gap:8px;margin:0;font-size:13px;line-height:1.35;cursor:pointer}.ch-image-detection__check input{margin-top:2px;flex-shrink:0}.ch-image-detection__check span{display:flex;flex-direction:column;gap:2px;min-width:0}.ch-image-detection__check small{color:#627d98;font-size:11px;line-height:1.4}.ch-image-detection__check--all{font-weight:700;padding-bottom:6px;border-bottom:1px solid #edf2f7}.ch-image-detection__checks:disabled{opacity:.65}.ch-image-detection__primary-button{width:100%;border:none;border-radius:8px;padding:10px 14px;background:#0b5cab;color:#fff;font-size:13px;font-weight:600;cursor:pointer}.ch-image-detection__primary-button:disabled{opacity:.55;cursor:not-allowed}.ch-image-detection__body{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0}.ch-image-detection__column{min-width:0;padding:var(--ch-id-pad);background:#fff;padding-bottom:24px;flex:1}.ch-image-detection__asset-card{margin-bottom:14px;min-width:0}.ch-image-detection__asset-title{margin:0 0 8px;font-size:14px;font-weight:600;line-height:1.35;word-break:break-word}.ch-image-detection__asset-details{display:grid;gap:6px;margin:0}.ch-image-detection__asset-details div{display:grid;grid-template-columns:48px minmax(0,1fr);gap:8px;align-items:start}.ch-image-detection__asset-details dt{margin:0;color:#627d98;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;padding-top:1px}.ch-image-detection__asset-details dd{margin:0;font-size:12px;line-height:1.35;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__empty{display:flex;flex-direction:column;justify-content:center;min-height:100px;padding:14px;border:1px dashed #bcccdc;border-radius:8px;background:#fff}.ch-image-detection__empty h3{margin:0 0 6px;font-size:14px}.ch-image-detection__empty p,.ch-image-detection__hint{margin:0;color:#486581;font-size:12px;line-height:1.5}.ch-image-detection__empty--error{border-color:#f9b8b8;background:#fff5f5}.ch-image-detection__report{min-width:0;margin-top:4px}.ch-image-detection__report-header{display:flex;flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:14px}.ch-image-detection__status{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}.ch-image-detection__status--clear{background:#e3f9e5;color:#0f7b3a}.ch-image-detection__status--flagged{background:#ffe3e3;color:#ab091e}.ch-image-detection__status--reviewed{background:#e0e7ff;color:#334e68}.ch-image-detection__report-summary{margin:0;font-size:13px;line-height:1.55;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__report-meta{margin:0;color:#627d98;font-size:11px}.ch-image-detection__report-meta--ok{color:#0f7b3a}.ch-image-detection__report-meta--error{color:#ab091e}.ch-image-detection__finding-list{display:grid;gap:10px}.ch-image-detection__finding{border:1px solid #d9e2ec;border-radius:8px;padding:10px 12px;background:#f8fbff;min-width:0}.ch-image-detection__finding--flagged{border-color:#f9b8b8;background:#fff5f5}.ch-image-detection__finding--clear{border-color:#b7ebc1;background:#f3fbf5}.ch-image-detection__finding--describe{border-color:#d9e2ec;background:#f8fbff}.ch-image-detection__finding-header{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.ch-image-detection__finding-title{margin:0;font-size:13px;flex:1 1 140px;overflow-wrap:anywhere}.ch-image-detection__badge{display:inline-flex;align-items:center;border-radius:999px;padding:2px 7px;background:#ab091e;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-detection__badge--clear{background:#0f7b3a}.ch-image-detection__badge--muted{background:#e0e7ff;color:#334e68}.ch-image-detection__finding-copy{margin:8px 0 0;color:#486581;font-size:12px;line-height:1.5;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__loading{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:120px;padding:12px}.ch-image-detection__loading-label{margin:0;max-width:100%;text-align:center;color:#486581;font-size:12px}.ch-image-detection__spinner{width:28px;height:28px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-detection-spin .8s linear infinite}.ch-image-detection__disclosure{margin:0;min-width:0}.ch-image-detection__summary{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 0;font-size:13px;font-weight:700;cursor:pointer;list-style:none}.ch-image-detection__summary::-webkit-details-marker{display:none}.ch-image-detection__summary span{color:#627d98;font-size:11px;font-weight:600}.ch-image-detection__figure{margin:0 0 14px}.ch-image-detection__frame{position:relative;width:100%;overflow:hidden;border-radius:8px;background:#102a43}.ch-image-detection__frame img{display:block;width:100%;height:auto}.ch-image-detection__mark{position:absolute;box-sizing:border-box;border:2px solid #d64545;border-radius:4px;background:rgba(214,69,69,.18);pointer-events:none}.ch-image-detection__mark-label{position:absolute;top:0;left:0;max-width:100%;padding:1px 4px;background:#d64545;color:#fff;font-size:10px;font-weight:700;line-height:1.3;white-space:nowrap}.ch-image-detection__caption,.ch-image-detection__overlay-toggle{margin:8px 0 0;color:#486581;font-size:12px}.ch-image-detection__overlay-toggle{display:flex;align-items:center;gap:8px;cursor:pointer}.ch-image-detection__pills{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}.ch-image-detection__pill{border:none;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer}.ch-image-detection__pill--clear{background:#e3f9e5;color:#0f7b3a}.ch-image-detection__pill--flagged{background:#ffe3e3;color:#ab091e}.ch-image-detection__pill--unchecked{background:#edf2f7;color:#829ab1}.ch-image-detection__pill--describe{background:#e0e7ff;color:#334e68}.ch-image-detection__pill--active{outline:2px solid #0b5cab;outline-offset:1px}.ch-image-detection__finding--highlight{outline:2px solid #0b5cab}@keyframes ch-image-detection-spin{to{transform:rotate(360deg)}}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function lp(e, t) {
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
function up(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pc = { exports: {} }, bi = {}, mc = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), sp = Symbol.for("react.portal"), ap = Symbol.for("react.fragment"), cp = Symbol.for("react.strict_mode"), fp = Symbol.for("react.profiler"), dp = Symbol.for("react.provider"), pp = Symbol.for("react.context"), mp = Symbol.for("react.forward_ref"), hp = Symbol.for("react.suspense"), yp = Symbol.for("react.memo"), gp = Symbol.for("react.lazy"), Os = Symbol.iterator;
function vp(e) {
  return e === null || typeof e != "object" ? null : (e = Os && e[Os] || e["@@iterator"], typeof e == "function" ? e : null);
}
var hc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, yc = Object.assign, gc = {};
function jn(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || hc;
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
jn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vc() {
}
vc.prototype = jn.prototype;
function gu(e, t, n) {
  this.props = e, this.context = t, this.refs = gc, this.updater = n || hc;
}
var vu = gu.prototype = new vc();
vu.constructor = gu;
yc(vu, jn.prototype);
vu.isPureReactComponent = !0;
var Rs = Array.isArray, wc = Object.prototype.hasOwnProperty, wu = { current: null }, Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function kc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      wc.call(t, r) && !Sc.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    i.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Ir, type: e, key: o, ref: l, props: i, _owner: wu.current };
}
function wp(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function Sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ls = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sp("" + e.key) : t.toString(36);
}
function ai(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ir:
          case sp:
            l = !0;
        }
    }
  if (l)
    return l = e, i = i(l), e = r === "" ? "." + Fo(l, 0) : r, Rs(i) ? (n = "", e != null && (n = e.replace(Ls, "$&/") + "/"), ai(i, t, n, "", function(a) {
      return a;
    })) : i != null && (Su(i) && (i = wp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ls, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Rs(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Fo(o, u);
      l += ai(o, t, n, s, i);
    }
  else if (s = vp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Fo(o, u++), l += ai(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Kr(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return ai(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function kp(e) {
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
var Ee = { current: null }, ci = { transition: null }, _p = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ci, ReactCurrentOwner: wu };
function _c() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: Kr, forEach: function(e, t, n) {
  Kr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Kr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Kr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Su(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = jn;
I.Fragment = ap;
I.Profiler = fp;
I.PureComponent = gu;
I.StrictMode = cp;
I.Suspense = hp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
I.act = _c;
I.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = yc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = wu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      wc.call(t, s) && !Sc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Ir, type: e.type, key: i, ref: o, props: r, _owner: l };
};
I.createContext = function(e) {
  return e = { $$typeof: pp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dp, _context: e }, e.Consumer = e;
};
I.createElement = kc;
I.createFactory = function(e) {
  var t = kc.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: mp, render: e };
};
I.isValidElement = Su;
I.lazy = function(e) {
  return { $$typeof: gp, _payload: { _status: -1, _result: e }, _init: kp };
};
I.memo = function(e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = ci.transition;
  ci.transition = {};
  try {
    e();
  } finally {
    ci.transition = t;
  }
};
I.unstable_act = _c;
I.useCallback = function(e, t) {
  return Ee.current.useCallback(e, t);
};
I.useContext = function(e) {
  return Ee.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return Ee.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return Ee.current.useEffect(e, t);
};
I.useId = function() {
  return Ee.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return Ee.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return Ee.current.useRef(e);
};
I.useState = function(e) {
  return Ee.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return Ee.current.useTransition();
};
I.version = "18.3.1";
mc.exports = I;
var R = mc.exports;
const Cp = /* @__PURE__ */ up(R), yl = /* @__PURE__ */ lp({
  __proto__: null,
  default: Cp
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
var Ep = R, xp = Symbol.for("react.element"), Pp = Symbol.for("react.fragment"), Np = Object.prototype.hasOwnProperty, Tp = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Op = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Np.call(t, r) && !Op.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: xp, type: e, key: o, ref: l, props: i, _owner: Tp.current };
}
bi.Fragment = Pp;
bi.jsx = Cc;
bi.jsxs = Cc;
pc.exports = bi;
var Ec = pc.exports;
const N = Ec.jsx, $ = Ec.jsxs;
var xc = { exports: {} }, Fe = {}, Pc = { exports: {} }, Nc = {};
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
  function t(E, z) {
    var L = E.length;
    E.push(z);
    e:
      for (; 0 < L; ) {
        var G = L - 1 >>> 1, ne = E[G];
        if (0 < i(ne, z))
          E[G] = z, E[L] = ne, L = G;
        else
          break e;
      }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0)
      return null;
    var z = E[0], L = E.pop();
    if (L !== z) {
      E[0] = L;
      e:
        for (var G = 0, ne = E.length, ln = ne >>> 1; G < ln; ) {
          var O = 2 * (G + 1) - 1, B = E[O], re = O + 1, He = E[re];
          if (0 > i(B, L))
            re < ne && 0 > i(He, B) ? (E[G] = He, E[re] = L, G = re) : (E[G] = B, E[O] = L, G = O);
          else if (re < ne && 0 > i(He, L))
            E[G] = He, E[re] = L, G = re;
          else
            break e;
        }
    }
    return z;
  }
  function i(E, z) {
    var L = E.sortIndex - z.sortIndex;
    return L !== 0 ? L : E.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], a = [], h = 1, f = null, p = 3, v = !1, g = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= E)
        r(a), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(a);
    }
  }
  function w(E) {
    if (y = !1, m(E), !g)
      if (n(s) !== null)
        g = !0, Hn(_);
      else {
        var z = n(a);
        z !== null && Wn(w, z.startTime - E);
      }
  }
  function _(E, z) {
    g = !1, y && (y = !1, d(T), T = -1), v = !0;
    var L = p;
    try {
      for (m(z), f = n(s); f !== null && (!(f.expirationTime > z) || E && !se()); ) {
        var G = f.callback;
        if (typeof G == "function") {
          f.callback = null, p = f.priorityLevel;
          var ne = G(f.expirationTime <= z);
          z = e.unstable_now(), typeof ne == "function" ? f.callback = ne : f === n(s) && r(s), m(z);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var ln = !0;
      else {
        var O = n(a);
        O !== null && Wn(w, O.startTime - z), ln = !1;
      }
      return ln;
    } finally {
      f = null, p = L, v = !1;
    }
  }
  var C = !1, k = null, T = -1, W = 5, A = -1;
  function se() {
    return !(e.unstable_now() - A < W);
  }
  function Et() {
    if (k !== null) {
      var E = e.unstable_now();
      A = E;
      var z = !0;
      try {
        z = k(!0, E);
      } finally {
        z ? dt() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var dt;
  if (typeof c == "function")
    dt = function() {
      c(Et);
    };
  else if (typeof MessageChannel < "u") {
    var Bn = new MessageChannel(), Vr = Bn.port2;
    Bn.port1.onmessage = Et, dt = function() {
      Vr.postMessage(null);
    };
  } else
    dt = function() {
      x(Et, 0);
    };
  function Hn(E) {
    k = E, C || (C = !0, dt());
  }
  function Wn(E, z) {
    T = x(function() {
      E(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Hn(_));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var L = p;
    p = z;
    try {
      return E();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, z) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var L = p;
    p = E;
    try {
      return z();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(E, z, L) {
    var G = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? G + L : G) : L = G, E) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = L + ne, E = { id: h++, callback: z, priorityLevel: E, startTime: L, expirationTime: ne, sortIndex: -1 }, L > G ? (E.sortIndex = L, t(a, E), n(s) === null && E === n(a) && (y ? (d(T), T = -1) : y = !0, Wn(w, L - G))) : (E.sortIndex = ne, t(s, E), g || v || (g = !0, Hn(_))), E;
  }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(E) {
    var z = p;
    return function() {
      var L = p;
      p = z;
      try {
        return E.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(Nc);
Pc.exports = Nc;
var Rp = Pc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = R, De = Rp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Tc = /* @__PURE__ */ new Set(), mr = {};
function rn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++)
    Tc.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gl = Object.prototype.hasOwnProperty, zp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, zs = {}, As = {};
function Ap(e) {
  return gl.call(As, e) ? !0 : gl.call(zs, e) ? !1 : zp.test(e) ? As[e] = !0 : (zs[e] = !0, !1);
}
function $p(e, t, n, r) {
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
function Ip(e, t, n, r) {
  if (t === null || typeof t > "u" || $p(e, t, n, r))
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
function xe(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ku = /[\-:]([a-z])/g;
function _u(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ku,
    _u
  );
  ye[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ku, _u);
  ye[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ku, _u);
  ye[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cu(e, t, n, r) {
  var i = ye.hasOwnProperty(t) ? ye[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ip(t, n, i, r) && (n = null), r || i === null ? Ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qr = Symbol.for("react.element"), an = Symbol.for("react.portal"), cn = Symbol.for("react.fragment"), Eu = Symbol.for("react.strict_mode"), vl = Symbol.for("react.profiler"), Oc = Symbol.for("react.provider"), Rc = Symbol.for("react.context"), xu = Symbol.for("react.forward_ref"), wl = Symbol.for("react.suspense"), Sl = Symbol.for("react.suspense_list"), Pu = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), Lc = Symbol.for("react.offscreen"), $s = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = $s && e[$s] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Uo;
function er(e) {
  if (Uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Uo = t && t[1] || "";
    }
  return `
` + Uo + e;
}
var Bo = !1;
function Ho(e, t) {
  if (!e || Bo)
    return "";
  Bo = !0;
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
      for (var i = a.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (i[l] !== o[u]) {
          if (l !== 1 || u !== 1)
            do
              if (l--, u--, 0 > u || i[l] !== o[u]) {
                var s = `
` + i[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    Bo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? er(e) : "";
}
function Mp(e) {
  switch (e.tag) {
    case 5:
      return er(e.type);
    case 16:
      return er("Lazy");
    case 13:
      return er("Suspense");
    case 19:
      return er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ho(e.type, !1), e;
    case 11:
      return e = Ho(e.type.render, !1), e;
    case 1:
      return e = Ho(e.type, !0), e;
    default:
      return "";
  }
}
function kl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case vl:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case wl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Rc:
        return (e.displayName || "Context") + ".Consumer";
      case Oc:
        return (e._context.displayName || "Context") + ".Provider";
      case xu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Pu:
        return t = e.displayName || null, t !== null ? t : kl(e.type) || "Memo";
      case Pt:
        t = e._payload, e = e._init;
        try {
          return kl(e(t));
        } catch {
        }
    }
  return null;
}
function jp(e) {
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
      return kl(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
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
function Ut(e) {
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
function zc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Dp(e) {
  var t = zc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Gr(e) {
  e._valueTracker || (e._valueTracker = Dp(e));
}
function Ac(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = zc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function xi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _l(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Is(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $c(e, t) {
  t = t.checked, t != null && Cu(e, "checked", t, !1);
}
function Cl(e, t) {
  $c(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? El(e, t.type, n) : t.hasOwnProperty("defaultValue") && El(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ms(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function El(e, t, n) {
  (t !== "number" || xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tr = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function js(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (tr(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Ic(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ds(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yr, jc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
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
var ir = {
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
}, Fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function(e) {
  Fp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
  });
});
function Dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
}
function Fc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var Up = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Nl(e, t) {
  if (t) {
    if (Up[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(S(62));
  }
}
function Tl(e, t) {
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
var Ol = null;
function Nu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Rl = null, _n = null, Cn = null;
function Fs(e) {
  if (e = Dr(e)) {
    if (typeof Rl != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = io(t), Rl(e.stateNode, e.type, t));
  }
}
function Uc(e) {
  _n ? Cn ? Cn.push(e) : Cn = [e] : _n = e;
}
function Bc() {
  if (_n) {
    var e = _n, t = Cn;
    if (Cn = _n = null, Fs(e), t)
      for (e = 0; e < t.length; e++)
        Fs(t[e]);
  }
}
function Hc(e, t) {
  return e(t);
}
function Wc() {
}
var Wo = !1;
function Vc(e, t, n) {
  if (Wo)
    return e(t, n);
  Wo = !0;
  try {
    return Hc(e, t, n);
  } finally {
    Wo = !1, (_n !== null || Cn !== null) && (Wc(), Bc());
  }
}
function yr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = io(n);
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
    throw Error(S(231, t, typeof n));
  return n;
}
var Ll = !1;
if (vt)
  try {
    var Kn = {};
    Object.defineProperty(Kn, "passive", { get: function() {
      Ll = !0;
    } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
  } catch {
    Ll = !1;
  }
function Bp(e, t, n, r, i, o, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var or = !1, Pi = null, Ni = !1, zl = null, Hp = { onError: function(e) {
  or = !0, Pi = e;
} };
function Wp(e, t, n, r, i, o, l, u, s) {
  or = !1, Pi = null, Bp.apply(Hp, arguments);
}
function Vp(e, t, n, r, i, o, l, u, s) {
  if (Wp.apply(this, arguments), or) {
    if (or) {
      var a = Pi;
      or = !1, Pi = null;
    } else
      throw Error(S(198));
    Ni || (Ni = !0, zl = a);
  }
}
function on(e) {
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
function Kc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Us(e) {
  if (on(e) !== e)
    throw Error(S(188));
}
function Kp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null)
      throw Error(S(188));
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
          return Us(i), e;
        if (o === r)
          return Us(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var l = !1, u = i.child; u; ) {
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
      if (!l) {
        for (u = o.child; u; ) {
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
        if (!l)
          throw Error(S(189));
      }
    }
    if (n.alternate !== r)
      throw Error(S(190));
  }
  if (n.tag !== 3)
    throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Qc(e) {
  return e = Kp(e), e !== null ? Gc(e) : null;
}
function Gc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Gc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Yc = De.unstable_scheduleCallback, Bs = De.unstable_cancelCallback, Qp = De.unstable_shouldYield, Gp = De.unstable_requestPaint, ee = De.unstable_now, Yp = De.unstable_getCurrentPriorityLevel, Tu = De.unstable_ImmediatePriority, Xc = De.unstable_UserBlockingPriority, Ti = De.unstable_NormalPriority, Xp = De.unstable_LowPriority, Jc = De.unstable_IdlePriority, eo = null, at = null;
function Jp(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var tt = Math.clz32 ? Math.clz32 : bp, Zp = Math.log, qp = Math.LN2;
function bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zp(e) / qp | 0) | 0;
}
var Xr = 64, Jr = 4194304;
function nr(e) {
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
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = nr(u) : (o &= l, o !== 0 && (r = nr(o)));
  } else
    l = n & ~i, l !== 0 ? r = nr(l) : o !== 0 && (r = nr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - tt(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function em(e, t) {
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
function tm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - tt(o), u = 1 << l, s = i[l];
    s === -1 ? (!(u & n) || u & r) && (i[l] = em(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Al(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zc() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
}
function nm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - tt(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Ou(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var F = 0;
function qc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bc, Ru, ef, tf, nf, $l = !1, Zr = [], zt = null, At = null, $t = null, gr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Tt = [], rm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
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
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Dr(t), t !== null && Ru(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function im(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return zt = Qn(zt, e, t, n, r, i), !0;
    case "dragenter":
      return At = Qn(At, e, t, n, r, i), !0;
    case "mouseover":
      return $t = Qn($t, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return gr.set(o, Qn(gr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, vr.set(o, Qn(vr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function rf(e) {
  var t = Gt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Kc(n), t !== null) {
          e.blockedOn = t, nf(e.priority, function() {
            ef(n);
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
function fi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ol = r, n.target.dispatchEvent(r), Ol = null;
    } else
      return t = Dr(n), t !== null && Ru(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ws(e, t, n) {
  fi(e) && n.delete(t);
}
function om() {
  $l = !1, zt !== null && fi(zt) && (zt = null), At !== null && fi(At) && (At = null), $t !== null && fi($t) && ($t = null), gr.forEach(Ws), vr.forEach(Ws);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, $l || ($l = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, om)));
}
function wr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < Zr.length) {
    Gn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (zt !== null && Gn(zt, e), At !== null && Gn(At, e), $t !== null && Gn($t, e), gr.forEach(t), vr.forEach(t), n = 0; n < Tt.length; n++)
    r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); )
    rf(n), n.blockedOn === null && Tt.shift();
}
var En = Ct.ReactCurrentBatchConfig, Ri = !0;
function lm(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 1, Lu(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function um(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 4, Lu(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function Lu(e, t, n, r) {
  if (Ri) {
    var i = Il(e, t, n, r);
    if (i === null)
      el(e, t, r, Li, n), Hs(e, r);
    else if (im(i, e, t, n, r))
      r.stopPropagation();
    else if (Hs(e, r), t & 4 && -1 < rm.indexOf(e)) {
      for (; i !== null; ) {
        var o = Dr(i);
        if (o !== null && bc(o), o = Il(e, t, n, r), o === null && el(e, t, r, Li, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      el(e, t, r, null, n);
  }
}
var Li = null;
function Il(e, t, n, r) {
  if (Li = null, e = Nu(r), e = Gt(e), e !== null)
    if (t = on(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Kc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Li = e, null;
}
function of(e) {
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
      switch (Yp()) {
        case Tu:
          return 1;
        case Xc:
          return 4;
        case Ti:
        case Xp:
          return 16;
        case Jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null, zu = null, di = null;
function lf() {
  if (di)
    return di;
  var e, t = zu, n = t.length, r, i = "value" in Rt ? Rt.value : Rt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
    ;
  return di = i.slice(e, 1 < r ? 1 - r : void 0);
}
function pi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qr() {
  return !0;
}
function Vs() {
  return !1;
}
function Ue(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? qr : Vs, this.isPropagationStopped = Vs, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qr);
  }, persist: function() {
  }, isPersistent: qr }), t;
}
var Dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Au = Ue(Dn), jr = J({}, Dn, { view: 0, detail: 0 }), sm = Ue(jr), Ko, Qo, Yn, to = J({}, jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $u, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (Ko = e.screenX - Yn.screenX, Qo = e.screenY - Yn.screenY) : Qo = Ko = 0, Yn = e), Ko);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Qo;
} }), Ks = Ue(to), am = J({}, to, { dataTransfer: 0 }), cm = Ue(am), fm = J({}, jr, { relatedTarget: 0 }), Go = Ue(fm), dm = J({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pm = Ue(dm), mm = J({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hm = Ue(mm), ym = J({}, Dn, { data: 0 }), Qs = Ue(ym), gm = {
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
}, vm = {
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
}, wm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wm[e]) ? !!t[e] : !1;
}
function $u() {
  return Sm;
}
var km = J({}, jr, { key: function(e) {
  if (e.key) {
    var t = gm[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $u, charCode: function(e) {
  return e.type === "keypress" ? pi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), _m = Ue(km), Cm = J({}, to, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Gs = Ue(Cm), Em = J({}, jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $u }), xm = Ue(Em), Pm = J({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Nm = Ue(Pm), Tm = J({}, to, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Om = Ue(Tm), Rm = [9, 13, 27, 32], Iu = vt && "CompositionEvent" in window, lr = null;
vt && "documentMode" in document && (lr = document.documentMode);
var Lm = vt && "TextEvent" in window && !lr, uf = vt && (!Iu || lr && 8 < lr && 11 >= lr), Ys = String.fromCharCode(32), Xs = !1;
function sf(e, t) {
  switch (e) {
    case "keyup":
      return Rm.indexOf(t.keyCode) !== -1;
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
function af(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function zm(e, t) {
  switch (e) {
    case "compositionend":
      return af(t);
    case "keypress":
      return t.which !== 32 ? null : (Xs = !0, Ys);
    case "textInput":
      return e = t.data, e === Ys && Xs ? null : e;
    default:
      return null;
  }
}
function Am(e, t) {
  if (fn)
    return e === "compositionend" || !Iu && sf(e, t) ? (e = lf(), di = zu = Rt = null, fn = !1, e) : null;
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
      return uf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $m = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$m[e.type] : t === "textarea";
}
function cf(e, t, n, r) {
  Uc(r), t = zi(t, "onChange"), 0 < t.length && (n = new Au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ur = null, Sr = null;
function Im(e) {
  kf(e, 0);
}
function no(e) {
  var t = mn(e);
  if (Ac(t))
    return e;
}
function Mm(e, t) {
  if (e === "change")
    return t;
}
var ff = !1;
if (vt) {
  var Yo;
  if (vt) {
    var Xo = "oninput" in document;
    if (!Xo) {
      var Zs = document.createElement("div");
      Zs.setAttribute("oninput", "return;"), Xo = typeof Zs.oninput == "function";
    }
    Yo = Xo;
  } else
    Yo = !1;
  ff = Yo && (!document.documentMode || 9 < document.documentMode);
}
function qs() {
  ur && (ur.detachEvent("onpropertychange", df), Sr = ur = null);
}
function df(e) {
  if (e.propertyName === "value" && no(Sr)) {
    var t = [];
    cf(t, Sr, e, Nu(e)), Vc(Im, t);
  }
}
function jm(e, t, n) {
  e === "focusin" ? (qs(), ur = t, Sr = n, ur.attachEvent("onpropertychange", df)) : e === "focusout" && qs();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return no(Sr);
}
function Fm(e, t) {
  if (e === "click")
    return no(t);
}
function Um(e, t) {
  if (e === "input" || e === "change")
    return no(t);
}
function Bm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var rt = typeof Object.is == "function" ? Object.is : Bm;
function kr(e, t) {
  if (rt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!gl.call(t, i) || !rt(e[i], t[i]))
      return !1;
  }
  return !0;
}
function bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ea(e, t) {
  var n = bs(e);
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
    n = bs(n);
  }
}
function pf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function mf() {
  for (var e = window, t = xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = xi(e.document);
  }
  return t;
}
function Mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Hm(e) {
  var t = mf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Mu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ea(n, o);
        var l = ea(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wm = vt && "documentMode" in document && 11 >= document.documentMode, dn = null, Ml = null, sr = null, jl = !1;
function ta(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jl || dn == null || dn !== xi(r) || (r = dn, "selectionStart" in r && Mu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), sr && kr(sr, r) || (sr = r, r = zi(Ml, "onSelect"), 0 < r.length && (t = new Au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = dn)));
}
function br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var pn = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, Jo = {}, hf = {};
vt && (hf = document.createElement("div").style, "AnimationEvent" in window || (delete pn.animationend.animation, delete pn.animationiteration.animation, delete pn.animationstart.animation), "TransitionEvent" in window || delete pn.transitionend.transition);
function ro(e) {
  if (Jo[e])
    return Jo[e];
  if (!pn[e])
    return e;
  var t = pn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hf)
      return Jo[e] = t[n];
  return e;
}
var yf = ro("animationend"), gf = ro("animationiteration"), vf = ro("animationstart"), wf = ro("transitionend"), Sf = /* @__PURE__ */ new Map(), na = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  Sf.set(e, t), rn(t, [e]);
}
for (var Zo = 0; Zo < na.length; Zo++) {
  var qo = na[Zo], Vm = qo.toLowerCase(), Km = qo[0].toUpperCase() + qo.slice(1);
  Ht(Vm, "on" + Km);
}
Ht(yf, "onAnimationEnd");
Ht(gf, "onAnimationIteration");
Ht(vf, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(wf, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qm = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
function ra(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Vp(r, t, void 0, e), e.currentTarget = null;
}
function kf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          ra(i, u, a), o = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          ra(i, u, a), o = s;
        }
    }
  }
  if (Ni)
    throw e = zl, Ni = !1, zl = null, e;
}
function V(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (_f(t, e, 2, !1), n.add(r));
}
function bo(e, t, n) {
  var r = 0;
  t && (r |= 4), _f(n, e, r, t);
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[ei]) {
    e[ei] = !0, Tc.forEach(function(n) {
      n !== "selectionchange" && (Qm.has(n) || bo(n, !1, e), bo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ei] || (t[ei] = !0, bo("selectionchange", !1, t));
  }
}
function _f(e, t, n, r) {
  switch (of(t)) {
    case 1:
      var i = lm;
      break;
    case 4:
      i = um;
      break;
    default:
      i = Lu;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ll || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function el(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var u = r.stateNode.containerInfo;
          if (u === i || u.nodeType === 8 && u.parentNode === i)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var s = l.tag;
              if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i))
                return;
              l = l.return;
            }
          for (; u !== null; ) {
            if (l = Gt(u), l === null)
              return;
            if (s = l.tag, s === 5 || s === 6) {
              r = o = l;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Vc(function() {
    var a = o, h = Nu(n), f = [];
    e: {
      var p = Sf.get(e);
      if (p !== void 0) {
        var v = Au, g = e;
        switch (e) {
          case "keypress":
            if (pi(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = _m;
            break;
          case "focusin":
            g = "focus", v = Go;
            break;
          case "focusout":
            g = "blur", v = Go;
            break;
          case "beforeblur":
          case "afterblur":
            v = Go;
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
            v = Ks;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = cm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = xm;
            break;
          case yf:
          case gf:
          case vf:
            v = pm;
            break;
          case wf:
            v = Nm;
            break;
          case "scroll":
            v = sm;
            break;
          case "wheel":
            v = Om;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = hm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gs;
        }
        var y = (t & 4) !== 0, x = !y && e === "scroll", d = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, d !== null && (w = yr(c, d), w != null && y.push(Cr(c, w, m)))), x)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), f.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Ol && (g = n.relatedTarget || n.fromElement) && (Gt(g) || g[wt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Gt(g) : null, g !== null && (x = on(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = Ks, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Gs, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), x = v == null ? p : mn(v), m = g == null ? p : mn(g), p = new y(w, c + "leave", v, n, h), p.target = x, p.relatedTarget = m, w = null, Gt(h) === a && (y = new y(d, c + "enter", g, n, h), y.target = m, y.relatedTarget = x, w = y), x = w, v && g)
            t: {
              for (y = v, d = g, c = 0, m = y; m; m = un(m))
                c++;
              for (m = 0, w = d; w; w = un(w))
                m++;
              for (; 0 < c - m; )
                y = un(y), c--;
              for (; 0 < m - c; )
                d = un(d), m--;
              for (; c--; ) {
                if (y === d || d !== null && y === d.alternate)
                  break t;
                y = un(y), d = un(d);
              }
              y = null;
            }
          else
            y = null;
          v !== null && ia(f, p, v, y, !1), g !== null && x !== null && ia(f, x, g, y, !0);
        }
      }
      e: {
        if (p = a ? mn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var _ = Mm;
        else if (Js(p))
          if (ff)
            _ = Um;
          else {
            _ = Dm;
            var C = jm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (_ = Fm);
        if (_ && (_ = _(e, a))) {
          cf(f, _, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && El(p, "number", p.value);
      }
      switch (C = a ? mn(a) : window, e) {
        case "focusin":
          (Js(C) || C.contentEditable === "true") && (dn = C, Ml = a, sr = null);
          break;
        case "focusout":
          sr = Ml = dn = null;
          break;
        case "mousedown":
          jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jl = !1, ta(f, n, h);
          break;
        case "selectionchange":
          if (Wm)
            break;
        case "keydown":
        case "keyup":
          ta(f, n, h);
      }
      var k;
      if (Iu)
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
        fn ? sf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (uf && n.locale !== "ko" && (fn || T !== "onCompositionStart" ? T === "onCompositionEnd" && fn && (k = lf()) : (Rt = h, zu = "value" in Rt ? Rt.value : Rt.textContent, fn = !0)), C = zi(a, T), 0 < C.length && (T = new Qs(T, e, null, n, h), f.push({ event: T, listeners: C }), k ? T.data = k : (k = af(n), k !== null && (T.data = k)))), (k = Lm ? zm(e, n) : Am(e, n)) && (a = zi(a, "onBeforeInput"), 0 < a.length && (h = new Qs("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: a }), h.data = k));
    }
    kf(f, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = yr(e, n), o != null && r.unshift(Cr(e, o, i)), o = yr(e, t), o != null && r.push(Cr(e, o, i))), e = e.return;
  }
  return r;
}
function un(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ia(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, i ? (s = yr(n, o), s != null && l.unshift(Cr(n, s, u))) : i || (s = yr(n, o), s != null && l.push(Cr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Gm = /\r\n?/g, Ym = /\u0000|\uFFFD/g;
function oa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Gm, `
`).replace(Ym, "");
}
function ti(e, t, n) {
  if (t = oa(t), oa(e) !== t && n)
    throw Error(S(425));
}
function Ai() {
}
var Dl = null, Fl = null;
function Ul(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bl = typeof setTimeout == "function" ? setTimeout : void 0, Xm = typeof clearTimeout == "function" ? clearTimeout : void 0, la = typeof Promise == "function" ? Promise : void 0, Jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof la < "u" ? function(e) {
  return la.resolve(null).then(e).catch(Zm);
} : Bl;
function Zm(e) {
  setTimeout(function() {
    throw e;
  });
}
function tl(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), wr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  wr(t);
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
function ua(e) {
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
var Fn = Math.random().toString(36).slice(2), st = "__reactFiber$" + Fn, Er = "__reactProps$" + Fn, wt = "__reactContainer$" + Fn, Hl = "__reactEvents$" + Fn, qm = "__reactListeners$" + Fn, bm = "__reactHandles$" + Fn;
function Gt(e) {
  var t = e[st];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[st]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ua(e); e !== null; ) {
          if (n = e[st])
            return n;
          e = ua(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Dr(e) {
  return e = e[st] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function mn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function io(e) {
  return e[Er] || null;
}
var Wl = [], hn = -1;
function Wt(e) {
  return { current: e };
}
function K(e) {
  0 > hn || (e.current = Wl[hn], Wl[hn] = null, hn--);
}
function H(e, t) {
  hn++, Wl[hn] = e.current, e.current = t;
}
var Bt = {}, ke = Wt(Bt), Te = Wt(!1), qt = Bt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function $i() {
  K(Te), K(ke);
}
function sa(e, t, n) {
  if (ke.current !== Bt)
    throw Error(S(168));
  H(ke, t), H(Te, n);
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(S(108, jp(e) || "Unknown", i));
  return J({}, n, r);
}
function Ii(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, qt = ke.current, H(ke, e), H(Te, Te.current), !0;
}
function aa(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = Cf(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, K(Te), K(ke), H(ke, e)) : K(Te), H(Te, n);
}
var mt = null, oo = !1, nl = !1;
function Ef(e) {
  mt === null ? mt = [e] : mt.push(e);
}
function eh(e) {
  oo = !0, Ef(e);
}
function Vt() {
  if (!nl && mt !== null) {
    nl = !0;
    var e = 0, t = F;
    try {
      var n = mt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mt = null, oo = !1;
    } catch (i) {
      throw mt !== null && (mt = mt.slice(e + 1)), Yc(Tu, Vt), i;
    } finally {
      F = t, nl = !1;
    }
  }
  return null;
}
var yn = [], gn = 0, Mi = null, ji = 0, We = [], Ve = 0, bt = null, ht = 1, yt = "";
function Kt(e, t) {
  yn[gn++] = ji, yn[gn++] = Mi, Mi = e, ji = t;
}
function xf(e, t, n) {
  We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = bt, bt = e;
  var r = ht;
  e = yt;
  var i = 32 - tt(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - tt(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, ht = 1 << 32 - tt(t) + i | n << i | r, yt = o + e;
  } else
    ht = 1 << o | n << i | r, yt = e;
}
function ju(e) {
  e.return !== null && (Kt(e, 1), xf(e, 1, 0));
}
function Du(e) {
  for (; e === Mi; )
    Mi = yn[--gn], yn[gn] = null, ji = yn[--gn], yn[gn] = null;
  for (; e === bt; )
    bt = We[--Ve], We[Ve] = null, yt = We[--Ve], We[Ve] = null, ht = We[--Ve], We[Ve] = null;
}
var Me = null, Ie = null, Q = !1, et = null;
function Pf(e, t) {
  var n = Qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ca(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Ie = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: ht, overflow: yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function Vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Kl(e) {
  if (Q) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!ca(e, t)) {
        if (Vl(e))
          throw Error(S(418));
        t = It(n.nextSibling);
        var r = Me;
        t && ca(e, t) ? Pf(r, n) : (e.flags = e.flags & -4097 | 2, Q = !1, Me = e);
      }
    } else {
      if (Vl(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, Q = !1, Me = e;
    }
  }
}
function fa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function ni(e) {
  if (e !== Me)
    return !1;
  if (!Q)
    return fa(e), Q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ul(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (Vl(e))
      throw Nf(), Error(S(418));
    for (; t; )
      Pf(e, t), t = It(t.nextSibling);
  }
  if (fa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
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
    Ie = Me ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function Nf() {
  for (var e = Ie; e; )
    e = It(e.nextSibling);
}
function Ln() {
  Ie = Me = null, Q = !1;
}
function Fu(e) {
  et === null ? et = [e] : et.push(e);
}
var th = Ct.ReactCurrentBatchConfig;
function Xn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(S(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function ri(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function da(e) {
  var t = e._init;
  return t(e._payload);
}
function Tf(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function i(d, c) {
    return d = Ft(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 6 ? (c = al(m, d.mode, w), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function s(d, c, m, w) {
    var _ = m.type;
    return _ === cn ? h(d, c, m.props.children, w, m.key) : c !== null && (c.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Pt && da(_) === c.type) ? (w = i(c, m.props), w.ref = Xn(d, c, m), w.return = d, w) : (w = Si(m.type, m.key, m.props, null, d.mode, w), w.ref = Xn(d, c, m), w.return = d, w);
  }
  function a(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = cl(m, d.mode, w), c.return = d, c) : (c = i(c, m.children || []), c.return = d, c);
  }
  function h(d, c, m, w, _) {
    return c === null || c.tag !== 7 ? (c = Zt(m, d.mode, w, _), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function f(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = al("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Qr:
          return m = Si(c.type, c.key, c.props, null, d.mode, m), m.ref = Xn(d, null, c), m.return = d, m;
        case an:
          return c = cl(c, d.mode, m), c.return = d, c;
        case Pt:
          var w = c._init;
          return f(d, w(c._payload), m);
      }
      if (tr(c) || Vn(c))
        return c = Zt(c, d.mode, m, null), c.return = d, c;
      ri(d, c);
    }
    return null;
  }
  function p(d, c, m, w) {
    var _ = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return _ !== null ? null : u(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Qr:
          return m.key === _ ? s(d, c, m, w) : null;
        case an:
          return m.key === _ ? a(d, c, m, w) : null;
        case Pt:
          return _ = m._init, p(
            d,
            c,
            _(m._payload),
            w
          );
      }
      if (tr(m) || Vn(m))
        return _ !== null ? null : h(d, c, m, w, null);
      ri(d, m);
    }
    return null;
  }
  function v(d, c, m, w, _) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return d = d.get(m) || null, u(c, d, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Qr:
          return d = d.get(w.key === null ? m : w.key) || null, s(c, d, w, _);
        case an:
          return d = d.get(w.key === null ? m : w.key) || null, a(c, d, w, _);
        case Pt:
          var C = w._init;
          return v(d, c, m, C(w._payload), _);
      }
      if (tr(w) || Vn(w))
        return d = d.get(m) || null, h(c, d, w, _, null);
      ri(c, w);
    }
    return null;
  }
  function g(d, c, m, w) {
    for (var _ = null, C = null, k = c, T = c = 0, W = null; k !== null && T < m.length; T++) {
      k.index > T ? (W = k, k = null) : W = k.sibling;
      var A = p(d, k, m[T], w);
      if (A === null) {
        k === null && (k = W);
        break;
      }
      e && k && A.alternate === null && t(d, k), c = o(A, c, T), C === null ? _ = A : C.sibling = A, C = A, k = W;
    }
    if (T === m.length)
      return n(d, k), Q && Kt(d, T), _;
    if (k === null) {
      for (; T < m.length; T++)
        k = f(d, m[T], w), k !== null && (c = o(k, c, T), C === null ? _ = k : C.sibling = k, C = k);
      return Q && Kt(d, T), _;
    }
    for (k = r(d, k); T < m.length; T++)
      W = v(k, d, T, m[T], w), W !== null && (e && W.alternate !== null && k.delete(W.key === null ? T : W.key), c = o(W, c, T), C === null ? _ = W : C.sibling = W, C = W);
    return e && k.forEach(function(se) {
      return t(d, se);
    }), Q && Kt(d, T), _;
  }
  function y(d, c, m, w) {
    var _ = Vn(m);
    if (typeof _ != "function")
      throw Error(S(150));
    if (m = _.call(m), m == null)
      throw Error(S(151));
    for (var C = _ = null, k = c, T = c = 0, W = null, A = m.next(); k !== null && !A.done; T++, A = m.next()) {
      k.index > T ? (W = k, k = null) : W = k.sibling;
      var se = p(d, k, A.value, w);
      if (se === null) {
        k === null && (k = W);
        break;
      }
      e && k && se.alternate === null && t(d, k), c = o(se, c, T), C === null ? _ = se : C.sibling = se, C = se, k = W;
    }
    if (A.done)
      return n(
        d,
        k
      ), Q && Kt(d, T), _;
    if (k === null) {
      for (; !A.done; T++, A = m.next())
        A = f(d, A.value, w), A !== null && (c = o(A, c, T), C === null ? _ = A : C.sibling = A, C = A);
      return Q && Kt(d, T), _;
    }
    for (k = r(d, k); !A.done; T++, A = m.next())
      A = v(k, d, T, A.value, w), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? T : A.key), c = o(A, c, T), C === null ? _ = A : C.sibling = A, C = A);
    return e && k.forEach(function(Et) {
      return t(d, Et);
    }), Q && Kt(d, T), _;
  }
  function x(d, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === cn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Qr:
          e: {
            for (var _ = m.key, C = c; C !== null; ) {
              if (C.key === _) {
                if (_ = m.type, _ === cn) {
                  if (C.tag === 7) {
                    n(d, C.sibling), c = i(C, m.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (C.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Pt && da(_) === C.type) {
                  n(d, C.sibling), c = i(C, m.props), c.ref = Xn(d, C, m), c.return = d, d = c;
                  break e;
                }
                n(d, C);
                break;
              } else
                t(d, C);
              C = C.sibling;
            }
            m.type === cn ? (c = Zt(m.props.children, d.mode, w, m.key), c.return = d, d = c) : (w = Si(m.type, m.key, m.props, null, d.mode, w), w.ref = Xn(d, c, m), w.return = d, d = w);
          }
          return l(d);
        case an:
          e: {
            for (C = m.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(d, c.sibling), c = i(c, m.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else
                t(d, c);
              c = c.sibling;
            }
            c = cl(m, d.mode, w), c.return = d, d = c;
          }
          return l(d);
        case Pt:
          return C = m._init, x(d, c, C(m._payload), w);
      }
      if (tr(m))
        return g(d, c, m, w);
      if (Vn(m))
        return y(d, c, m, w);
      ri(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, m), c.return = d, d = c) : (n(d, c), c = al(m, d.mode, w), c.return = d, d = c), l(d)) : n(d, c);
  }
  return x;
}
var zn = Tf(!0), Of = Tf(!1), Di = Wt(null), Fi = null, vn = null, Uu = null;
function Bu() {
  Uu = vn = Fi = null;
}
function Hu(e) {
  var t = Di.current;
  K(Di), e._currentValue = t;
}
function Ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function xn(e, t) {
  Fi = e, Uu = vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Ye(e) {
  var t = e._currentValue;
  if (Uu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, vn === null) {
      if (Fi === null)
        throw Error(S(308));
      vn = e, Fi.dependencies = { lanes: 0, firstContext: e };
    } else
      vn = vn.next = e;
  return t;
}
var Yt = null;
function Wu(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function Rf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Wu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Nt = !1;
function Vu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Lf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, M & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, St(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Wu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, St(e, n);
}
function mi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ou(e, n);
  }
}
function pa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ui(e, t, n, r) {
  var i = e.updateQueue;
  Nt = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? o = a : l.next = a, l = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var f = i.baseState;
    l = 0, h = a = s = null, u = o;
    do {
      var p = u.lane, v = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, y = u;
          switch (p = t, v = n, y.tag) {
            case 1:
              if (g = y.payload, typeof g == "function") {
                f = g.call(v, f, p);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, p = typeof g == "function" ? g.call(v, f, p) : g, p == null)
                break e;
              f = J({}, f, p);
              break e;
            case 2:
              Nt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [u] : p.push(u));
      } else
        v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = v, s = f) : h = h.next = v, l |= p;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = f), i.baseState = s, i.firstBaseUpdate = a, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    tn |= l, e.lanes = l, e.memoizedState = f;
  }
}
function ma(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var Fr = {}, ct = Wt(Fr), xr = Wt(Fr), Pr = Wt(Fr);
function Xt(e) {
  if (e === Fr)
    throw Error(S(174));
  return e;
}
function Ku(e, t) {
  switch (H(Pr, t), H(xr, e), H(ct, Fr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pl(t, e);
  }
  K(ct), H(ct, t);
}
function An() {
  K(ct), K(xr), K(Pr);
}
function zf(e) {
  Xt(Pr.current);
  var t = Xt(ct.current), n = Pl(t, e.type);
  t !== n && (H(xr, e), H(ct, n));
}
function Qu(e) {
  xr.current === e && (K(ct), K(xr));
}
var Y = Wt(0);
function Bi(e) {
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
var rl = [];
function Gu() {
  for (var e = 0; e < rl.length; e++)
    rl[e]._workInProgressVersionPrimary = null;
  rl.length = 0;
}
var hi = Ct.ReactCurrentDispatcher, il = Ct.ReactCurrentBatchConfig, en = 0, X = null, le = null, ae = null, Hi = !1, ar = !1, Nr = 0, nh = 0;
function ge() {
  throw Error(S(321));
}
function Yu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n]))
      return !1;
  return !0;
}
function Xu(e, t, n, r, i, o) {
  if (en = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hi.current = e === null || e.memoizedState === null ? lh : uh, e = n(r, i), ar) {
    o = 0;
    do {
      if (ar = !1, Nr = 0, 25 <= o)
        throw Error(S(301));
      o += 1, ae = le = null, t.updateQueue = null, hi.current = sh, e = n(r, i);
    } while (ar);
  }
  if (hi.current = Wi, t = le !== null && le.next !== null, en = 0, ae = le = X = null, Hi = !1, t)
    throw Error(S(300));
  return e;
}
function Ju() {
  var e = Nr !== 0;
  return Nr = 0, e;
}
function ot() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ae === null ? X.memoizedState = ae = e : ae = ae.next = e, ae;
}
function Xe() {
  if (le === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = le.next;
  var t = ae === null ? X.memoizedState : ae.next;
  if (t !== null)
    ae = t, le = e;
  else {
    if (e === null)
      throw Error(S(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, ae === null ? X.memoizedState = ae = e : ae = ae.next = e;
  }
  return ae;
}
function Tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ol(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = le, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = l = null, s = null, a = o;
    do {
      var h = a.lane;
      if ((en & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = f, l = r) : s = s.next = f, X.lanes |= h, tn |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? l = r : s.next = u, rt(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, X.lanes |= o, tn |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ll(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    rt(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Af() {
}
function $f(e, t) {
  var n = X, r = Xe(), i = t(), o = !rt(r.memoizedState, i);
  if (o && (r.memoizedState = i, Ne = !0), r = r.queue, Zu(jf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ae !== null && ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, Or(9, Mf.bind(null, n, r, i, t), void 0, null), ce === null)
      throw Error(S(349));
    en & 30 || If(n, t, i);
  }
  return i;
}
function If(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Mf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Df(t) && Ff(e);
}
function jf(e, t, n) {
  return n(function() {
    Df(t) && Ff(e);
  });
}
function Df(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function Ff(e) {
  var t = St(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function ha(e) {
  var t = ot();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = oh.bind(null, X, e), [t.memoizedState, e];
}
function Or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Uf() {
  return Xe().memoizedState;
}
function yi(e, t, n, r) {
  var i = ot();
  X.flags |= e, i.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r);
}
function lo(e, t, n, r) {
  var i = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var l = le.memoizedState;
    if (o = l.destroy, r !== null && Yu(r, l.deps)) {
      i.memoizedState = Or(t, n, o, r);
      return;
    }
  }
  X.flags |= e, i.memoizedState = Or(1 | t, n, o, r);
}
function ya(e, t) {
  return yi(8390656, 8, e, t);
}
function Zu(e, t) {
  return lo(2048, 8, e, t);
}
function Bf(e, t) {
  return lo(4, 2, e, t);
}
function Hf(e, t) {
  return lo(4, 4, e, t);
}
function Wf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Vf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, lo(4, 4, Wf.bind(null, t, e), n);
}
function qu() {
}
function Kf(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Qf(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Gf(e, t, n) {
  return en & 21 ? (rt(n, t) || (n = Zc(), X.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function rh(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = il.transition;
  il.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, il.transition = r;
  }
}
function Yf() {
  return Xe().memoizedState;
}
function ih(e, t, n) {
  var r = Dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Xf(e))
    Jf(t, n);
  else if (n = Rf(e, t, n, r), n !== null) {
    var i = Ce();
    nt(n, e, r, i), Zf(n, t, r);
  }
}
function oh(e, t, n) {
  var r = Dt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xf(e))
    Jf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var l = t.lastRenderedState, u = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = u, rt(u, l)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Wu(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Rf(e, t, i, r), n !== null && (i = Ce(), nt(n, e, r, i), Zf(n, t, r));
  }
}
function Xf(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function Jf(e, t) {
  ar = Hi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ou(e, n);
  }
}
var Wi = { readContext: Ye, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, lh = { readContext: Ye, useCallback: function(e, t) {
  return ot().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ye, useEffect: ya, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yi(
    4194308,
    4,
    Wf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return yi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return yi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ot();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ot();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ih.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ot();
  return e = { current: e }, t.memoizedState = e;
}, useState: ha, useDebugValue: qu, useDeferredValue: function(e) {
  return ot().memoizedState = e;
}, useTransition: function() {
  var e = ha(!1), t = e[0];
  return e = rh.bind(null, e[1]), ot().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, i = ot();
  if (Q) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ce === null)
      throw Error(S(349));
    en & 30 || If(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, ya(jf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Or(9, Mf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = ot(), t = ce.identifierPrefix;
  if (Q) {
    var n = yt, r = ht;
    n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = nh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, uh = {
  readContext: Ye,
  useCallback: Kf,
  useContext: Ye,
  useEffect: Zu,
  useImperativeHandle: Vf,
  useInsertionEffect: Bf,
  useLayoutEffect: Hf,
  useMemo: Qf,
  useReducer: ol,
  useRef: Uf,
  useState: function() {
    return ol(Tr);
  },
  useDebugValue: qu,
  useDeferredValue: function(e) {
    var t = Xe();
    return Gf(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = ol(Tr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: Af,
  useSyncExternalStore: $f,
  useId: Yf,
  unstable_isNewReconciler: !1
}, sh = { readContext: Ye, useCallback: Kf, useContext: Ye, useEffect: Zu, useImperativeHandle: Vf, useInsertionEffect: Bf, useLayoutEffect: Hf, useMemo: Qf, useReducer: ll, useRef: Uf, useState: function() {
  return ll(Tr);
}, useDebugValue: qu, useDeferredValue: function(e) {
  var t = Xe();
  return le === null ? t.memoizedState = e : Gf(t, le.memoizedState, e);
}, useTransition: function() {
  var e = ll(Tr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: Af, useSyncExternalStore: $f, useId: Yf, unstable_isNewReconciler: !1 };
function qe(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), i = Dt(e), o = gt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Mt(e, o, i), t !== null && (nt(t, e, i, r), mi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), i = Dt(e), o = gt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Mt(e, o, i), t !== null && (nt(t, e, i, r), mi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ce(), r = Dt(e), i = gt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Mt(e, i, r), t !== null && (nt(t, e, r, n), mi(t, e, r));
} };
function ga(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(i, o) : !0;
}
function qf(e, t, n) {
  var r = !1, i = Bt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ye(o) : (i = Oe(t) ? qt : ke.current, r = t.contextTypes, o = (r = r != null) ? Rn(e, i) : Bt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = uo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function va(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function Yl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Vu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ye(o) : (o = Oe(t) ? qt : ke.current, i.context = Rn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Gl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && uo.enqueueReplaceState(i, i.state, null), Ui(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += Mp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ah = typeof WeakMap == "function" ? WeakMap : Map;
function bf(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ki || (Ki = !0, ou = r), Xl(e, t);
  }, n;
}
function ed(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Xl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Xl(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function wa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ah();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Ch.bind(null, e, t, n), t.then(e, e));
}
function Sa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ka(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e);
}
var ch = Ct.ReactCurrentOwner, Ne = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Of(t, null, n, r) : zn(t, e.child, n, r);
}
function _a(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return xn(t, i), r = Xu(e, t, n, r, o, i), n = Ju(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kt(e, t, i)) : (Q && n && ju(t), t.flags |= 1, _e(e, t, r, i), t.child);
}
function Ca(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ls(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, td(e, t, o, r, i)) : (e = Si(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kr, n(l, r) && e.ref === t.ref)
      return kt(e, t, i);
  }
  return t.flags |= 1, e = Ft(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function td(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (kr(o, r) && e.ref === t.ref)
      if (Ne = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (Ne = !0);
      else
        return t.lanes = e.lanes, kt(e, t, i);
  }
  return Jl(e, t, n, r, i);
}
function nd(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(Sn, ze), ze |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(Sn, ze), ze |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, H(Sn, ze), ze |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, H(Sn, ze), ze |= r;
  return _e(e, t, i, n), t.child;
}
function rd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Jl(e, t, n, r, i) {
  var o = Oe(n) ? qt : ke.current;
  return o = Rn(t, o), xn(t, i), n = Xu(e, t, n, r, o, i), r = Ju(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kt(e, t, i)) : (Q && r && ju(t), t.flags |= 1, _e(e, t, n, i), t.child);
}
function Ea(e, t, n, r, i) {
  if (Oe(n)) {
    var o = !0;
    Ii(t);
  } else
    o = !1;
  if (xn(t, i), t.stateNode === null)
    gi(e, t), qf(t, n, r), Yl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ye(a) : (a = Oe(n) ? qt : ke.current, a = Rn(t, a));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && va(t, l, r, a), Nt = !1;
    var p = t.memoizedState;
    l.state = p, Ui(t, r, l, i), s = t.memoizedState, u !== r || p !== s || Te.current || Nt ? (typeof h == "function" && (Gl(t, n, h, r), s = t.memoizedState), (u = Nt || ga(t, n, u, r, p, s, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Lf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : qe(t.type, u), l.props = a, f = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Oe(n) ? qt : ke.current, s = Rn(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== f || p !== s) && va(t, l, r, s), Nt = !1, p = t.memoizedState, l.state = p, Ui(t, r, l, i);
    var g = t.memoizedState;
    u !== f || p !== g || Te.current || Nt ? (typeof v == "function" && (Gl(t, n, v, r), g = t.memoizedState), (a = Nt || ga(t, n, a, r, p, g, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zl(e, t, n, r, o, i);
}
function Zl(e, t, n, r, i, o) {
  rd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return i && aa(t, n, !1), kt(e, t, o);
  r = t.stateNode, ch.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, u, o)) : _e(e, t, u, o), t.memoizedState = r.state, i && aa(t, n, !0), t.child;
}
function id(e) {
  var t = e.stateNode;
  t.pendingContext ? sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sa(e, t.context, !1), Ku(e, t.containerInfo);
}
function xa(e, t, n, r, i) {
  return Ln(), Fu(i), t.flags |= 256, _e(e, t, n, r), t.child;
}
var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function bl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
  var r = t.pendingProps, i = Y.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), H(Y, i & 1), e === null)
    return Kl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = co(l, r, 0, null), e = Zt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = bl(n), t.memoizedState = ql, e) : bu(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null))
    return fh(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ft(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Ft(u, o) : (o = Zt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? bl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = ql, r;
  }
  return o = e.child, e = o.sibling, r = Ft(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function bu(e, t) {
  return t = co({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ii(e, t, n, r) {
  return r !== null && Fu(r), zn(t, e.child, null, n), e = bu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function fh(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ul(Error(S(422))), ii(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = co({ mode: "visible", children: r.children }, i, 0, null), o = Zt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zn(t, e.child, null, l), t.child.memoizedState = bl(l), t.memoizedState = ql, o);
  if (!(t.mode & 1))
    return ii(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = ul(o, r, void 0), ii(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Ne || u) {
    if (r = ce, r !== null) {
      switch (l & -l) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, St(e, i), nt(r, e, i, -1));
    }
    return os(), r = ul(Error(S(421))), ii(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Eh.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ie = It(i.nextSibling), Me = t, Q = !0, et = null, e !== null && (We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = bt, ht = e.id, yt = e.overflow, bt = t), t = bu(t, r.children), t.flags |= 4096, t);
}
function Pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ql(e.return, t, n);
}
function sl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function ld(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (_e(e, t, r.children, n), r = Y.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Pa(e, n, t);
          else if (e.tag === 19)
            Pa(e, n, t);
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
  if (H(Y, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Bi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), sl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Bi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        sl(t, !0, n, null, o);
        break;
      case "together":
        sl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function dh(e, t, n) {
  switch (t.tag) {
    case 3:
      id(t), Ln();
      break;
    case 5:
      zf(t);
      break;
    case 1:
      Oe(t.type) && Ii(t);
      break;
    case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      H(Di, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(Y, Y.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? od(e, t, n) : (H(Y, Y.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      H(Y, Y.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return ld(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), H(Y, Y.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nd(e, t, n);
  }
  return kt(e, t, n);
}
var ud, eu, sd, ad;
ud = function(e, t) {
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
sd = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Xt(ct.current);
    var o = null;
    switch (n) {
      case "input":
        i = _l(e, i), r = _l(e, r), o = [];
        break;
      case "select":
        i = J({}, i, { value: void 0 }), r = J({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = xl(e, i), r = xl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ai);
    }
    Nl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var u = i[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (mr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = i != null ? i[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (mr.hasOwnProperty(a) ? (s != null && a === "onScroll" && V("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
ad = function(e, t, n, r) {
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
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ph(e, t, n) {
  var r = t.pendingProps;
  switch (Du(t), t.tag) {
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
      return ve(t), null;
    case 1:
      return Oe(t.type) && $i(), ve(t), null;
    case 3:
      return r = t.stateNode, An(), K(Te), K(ke), Gu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, et !== null && (su(et), et = null))), eu(e, t), ve(t), null;
    case 5:
      Qu(t);
      var i = Xt(Pr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        sd(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return ve(t), null;
        }
        if (e = Xt(ct.current), ni(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[st] = t, r[Er] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < rr.length; i++)
                V(rr[i], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V(
                "error",
                r
              ), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Is(r, o), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, V("invalid", r);
              break;
            case "textarea":
              js(r, o), V("invalid", r);
          }
          Nl(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ti(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ti(
                r.textContent,
                u,
                e
              ), i = ["children", "" + u]) : mr.hasOwnProperty(l) && u != null && l === "onScroll" && V("scroll", r);
            }
          switch (n) {
            case "input":
              Gr(r), Ms(r, o, !0);
              break;
            case "textarea":
              Gr(r), Ds(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ai);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[st] = t, e[Er] = r, ud(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Tl(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < rr.length; i++)
                  V(rr[i], e);
                i = r;
                break;
              case "source":
                V("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), i = r;
                break;
              case "details":
                V("toggle", e), i = r;
                break;
              case "input":
                Is(e, r), i = _l(e, r), V("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = J({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                js(e, r), i = xl(e, r), V("invalid", e);
                break;
              default:
                i = r;
            }
            Nl(n, i), u = i;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Fc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && jc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && hr(e, s) : typeof s == "number" && hr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (mr.hasOwnProperty(o) ? s != null && o === "onScroll" && V("scroll", e) : s != null && Cu(e, o, s, l));
              }
            switch (n) {
              case "input":
                Gr(e), Ms(e, r, !1);
                break;
              case "textarea":
                Gr(e), Ds(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? kn(e, !!r.multiple, o, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ai);
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
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null)
        ad(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Xt(Pr.current), Xt(ct.current), ni(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (o = r.nodeValue !== n) && (e = Me, e !== null))
            switch (e.tag) {
              case 3:
                ti(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r;
      }
      return ve(t), null;
    case 13:
      if (K(Y), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Q && Ie !== null && t.mode & 1 && !(t.flags & 128))
          Nf(), Ln(), t.flags |= 98560, o = !1;
        else if (o = ni(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[st] = t;
          } else
            Ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), o = !1;
        } else
          et !== null && (su(et), et = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Y.current & 1 ? ue === 0 && (ue = 3) : os())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return An(), eu(e, t), e === null && _r(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Hu(t.type._context), ve(t), null;
    case 17:
      return Oe(t.type) && $i(), ve(t), null;
    case 19:
      if (K(Y), o = t.memoizedState, o === null)
        return ve(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Jn(o, !1);
        else {
          if (ue !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Bi(e), l !== null) {
                for (t.flags |= 128, Jn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return H(Y, Y.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ee() > In && (t.flags |= 128, r = !0, Jn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Bi(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Q)
              return ve(t), null;
          } else
            2 * ee() - o.renderingStartTime > In && n !== 1073741824 && (t.flags |= 128, r = !0, Jn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ee(), t.sibling = null, n = Y.current, H(Y, r ? n & 1 | 2 : n & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return is(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function mh(e, t) {
  switch (Du(t), t.tag) {
    case 1:
      return Oe(t.type) && $i(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), K(Te), K(ke), Gu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qu(t), null;
    case 13:
      if (K(Y), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        Ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(Y), null;
    case 4:
      return An(), null;
    case 10:
      return Hu(t.type._context), null;
    case 22:
    case 23:
      return is(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oi = !1, Se = !1, hh = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else
      n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Na = !1;
function yh(e, t) {
  if (Dl = Ri, e = mf(), Mu(e)) {
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
          var l = 0, u = -1, s = -1, a = 0, h = 0, f = e, p = null;
          t:
            for (; ; ) {
              for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (u = l + i), f !== o || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (v = f.firstChild) !== null; )
                p = f, f = v;
              for (; ; ) {
                if (f === e)
                  break t;
                if (p === n && ++a === i && (u = l), p === o && ++h === r && (s = l), (v = f.nextSibling) !== null)
                  break;
                f = p, p = f.parentNode;
              }
              f = v;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Fl = { focusedElem: e, selectionRange: n }, Ri = !1, P = t; P !== null; )
    if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, P = e;
    else
      for (; P !== null; ) {
        t = P;
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
                  var y = g.memoizedProps, x = g.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : qe(t.type, y), x);
                  d.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(S(163));
            }
        } catch (w) {
          b(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return g = Na, Na = !1, g;
}
function cr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && tu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function so(e, t) {
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
function cd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, cd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[Er], delete t[Hl], delete t[qm], delete t[bm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function fd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ta(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return))
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ai));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; )
      ru(e, t, n), e = e.sibling;
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; )
      iu(e, t, n), e = e.sibling;
}
var de = null, be = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; )
    dd(e, t, n), n = n.sibling;
}
function dd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(eo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Se || wn(n, t);
    case 6:
      var r = de, i = be;
      de = null, xt(e, t, n), de = r, be = i, de !== null && (be ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (be ? (e = de, n = n.stateNode, e.nodeType === 8 ? tl(e.parentNode, n) : e.nodeType === 1 && tl(e, n), wr(e)) : tl(de, n.stateNode));
      break;
    case 4:
      r = de, i = be, de = n.stateNode.containerInfo, be = !0, xt(e, t, n), de = r, be = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && tu(n, t, l), i = i.next;
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (!Se && (wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          b(n, t, u);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, xt(e, t, n), Se = r) : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Oa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hh()), t.forEach(function(r) {
      var i = xh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, l = t, u = l;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                de = u.stateNode, be = !1;
                break e;
              case 3:
                de = u.stateNode.containerInfo, be = !0;
                break e;
              case 4:
                de = u.stateNode.containerInfo, be = !0;
                break e;
            }
            u = u.return;
          }
        if (de === null)
          throw Error(S(160));
        dd(o, l, i), de = null, be = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (a) {
        b(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      pd(t, e), t = t.sibling;
}
function pd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ze(t, e), it(e), r & 4) {
        try {
          cr(3, e, e.return), so(3, e);
        } catch (y) {
          b(e, e.return, y);
        }
        try {
          cr(5, e, e.return);
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 1:
      Ze(t, e), it(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (Ze(t, e), it(e), r & 512 && n !== null && wn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          hr(i, "");
        } catch (y) {
          b(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && $c(i, o), Tl(u, l);
            var a = Tl(u, o);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], f = s[l + 1];
              h === "style" ? Fc(i, f) : h === "dangerouslySetInnerHTML" ? jc(i, f) : h === "children" ? hr(i, f) : Cu(i, h, f, a);
            }
            switch (u) {
              case "input":
                Cl(i, o);
                break;
              case "textarea":
                Ic(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? kn(i, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? kn(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : kn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Er] = o;
          } catch (y) {
            b(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ze(t, e), it(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          b(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ze(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          wr(t.containerInfo);
        } catch (y) {
          b(e, e.return, y);
        }
      break;
    case 4:
      Ze(t, e), it(e);
      break;
    case 13:
      Ze(t, e), it(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ns = ee())), r & 4 && Oa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || h, Ze(t, e), Se = a) : Ze(t, e), it(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (P = e, h = e.child; h !== null; ) {
            for (f = P = h; P !== null; ) {
              switch (p = P, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cr(4, p, p.return);
                  break;
                case 1:
                  wn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      b(r, n, y);
                    }
                  }
                  break;
                case 5:
                  wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    La(f);
                    continue;
                  }
              }
              v !== null ? (v.return = p, P = v) : La(f);
            }
            h = h.sibling;
          }
        e:
          for (h = null, f = e; ; ) {
            if (f.tag === 5) {
              if (h === null) {
                h = f;
                try {
                  i = f.stateNode, a ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Dc("display", l));
                } catch (y) {
                  b(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (h === null)
                try {
                  f.stateNode.nodeValue = a ? "" : f.memoizedProps;
                } catch (y) {
                  b(e, e.return, y);
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
              h === f && (h = null), f = f.return;
            }
            h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Ze(t, e), it(e), r & 4 && Oa(e);
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
          if (fd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hr(i, ""), r.flags &= -33);
          var o = Ta(e);
          iu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ta(e);
          ru(e, u, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      b(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gh(e, t, n) {
  P = e, md(e);
}
function md(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || oi;
      if (!l) {
        var u = i.alternate, s = u !== null && u.memoizedState !== null || Se;
        u = oi;
        var a = Se;
        if (oi = l, (Se = s) && !a)
          for (P = i; P !== null; )
            l = P, s = l.child, l.tag === 22 && l.memoizedState !== null ? za(i) : s !== null ? (s.return = l, P = s) : za(i);
        for (; o !== null; )
          P = o, md(o), o = o.sibling;
        P = i, oi = u, Se = a;
      }
      Ra(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, P = o) : Ra(e);
  }
}
function Ra(e) {
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
              Se || so(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ma(t, o, r);
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
                ma(t, l, n);
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
                  var h = a.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && wr(f);
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
              throw Error(S(163));
          }
        Se || t.flags & 512 && nu(t);
      } catch (p) {
        b(t, t.return, p);
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
function La(e) {
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
function za(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            so(4, t);
          } catch (s) {
            b(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              b(t, i, s);
            }
          }
          var o = t.return;
          try {
            nu(t);
          } catch (s) {
            b(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            nu(t);
          } catch (s) {
            b(t, l, s);
          }
      }
    } catch (s) {
      b(t, t.return, s);
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
var vh = Math.ceil, Vi = Ct.ReactCurrentDispatcher, es = Ct.ReactCurrentOwner, Ge = Ct.ReactCurrentBatchConfig, M = 0, ce = null, oe = null, me = 0, ze = 0, Sn = Wt(0), ue = 0, Rr = null, tn = 0, ao = 0, ts = 0, fr = null, Pe = null, ns = 0, In = 1 / 0, pt = null, Ki = !1, ou = null, jt = null, li = !1, Lt = null, Qi = 0, dr = 0, lu = null, vi = -1, wi = 0;
function Ce() {
  return M & 6 ? ee() : vi !== -1 ? vi : vi = ee();
}
function Dt(e) {
  return e.mode & 1 ? M & 2 && me !== 0 ? me & -me : th.transition !== null ? (wi === 0 && (wi = Zc()), wi) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : of(e.type)), e) : 1;
}
function nt(e, t, n, r) {
  if (50 < dr)
    throw dr = 0, lu = null, Error(S(185));
  Mr(e, n, r), (!(M & 2) || e !== ce) && (e === ce && (!(M & 2) && (ao |= n), ue === 4 && Ot(e, me)), Re(e, r), n === 1 && M === 0 && !(t.mode & 1) && (In = ee() + 500, oo && Vt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  tm(e, t);
  var r = Oi(e, e === ce ? me : 0);
  if (r === 0)
    n !== null && Bs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bs(n), t === 1)
      e.tag === 0 ? eh(Aa.bind(null, e)) : Ef(Aa.bind(null, e)), Jm(function() {
        !(M & 6) && Vt();
      }), n = null;
    else {
      switch (qc(r)) {
        case 1:
          n = Tu;
          break;
        case 4:
          n = Xc;
          break;
        case 16:
          n = Ti;
          break;
        case 536870912:
          n = Jc;
          break;
        default:
          n = Ti;
      }
      n = _d(n, hd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function hd(e, t) {
  if (vi = -1, wi = 0, M & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n)
    return null;
  var r = Oi(e, e === ce ? me : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Gi(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var o = gd();
    (ce !== e || me !== t) && (pt = null, In = ee() + 500, Jt(e, t));
    do
      try {
        kh();
        break;
      } catch (u) {
        yd(e, u);
      }
    while (1);
    Bu(), Vi.current = o, M = i, oe !== null ? t = 0 : (ce = null, me = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (i = Al(e), i !== 0 && (r = i, t = uu(e, i))), t === 1)
      throw n = Rr, Jt(e, 0), Ot(e, r), Re(e, ee()), n;
    if (t === 6)
      Ot(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !wh(i) && (t = Gi(e, r), t === 2 && (o = Al(e), o !== 0 && (r = o, t = uu(e, o))), t === 1))
        throw n = Rr, Jt(e, 0), Ot(e, r), Re(e, ee()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Qt(e, Pe, pt);
          break;
        case 3:
          if (Ot(e, r), (r & 130023424) === r && (t = ns + 500 - ee(), 10 < t)) {
            if (Oi(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Ce(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Bl(Qt.bind(null, e, Pe, pt), t);
            break;
          }
          Qt(e, Pe, pt);
          break;
        case 4:
          if (Ot(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - tt(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bl(Qt.bind(null, e, Pe, pt), r);
            break;
          }
          Qt(e, Pe, pt);
          break;
        case 5:
          Qt(e, Pe, pt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Re(e, ee()), e.callbackNode === n ? hd.bind(null, e) : null;
}
function uu(e, t) {
  var n = fr;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Gi(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && su(t)), e;
}
function su(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function wh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!rt(o(), i))
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
  for (t &= ~ts, t &= ~ao, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - tt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Aa(e) {
  if (M & 6)
    throw Error(S(327));
  Pn();
  var t = Oi(e, 0);
  if (!(t & 1))
    return Re(e, ee()), null;
  var n = Gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && (t = r, n = uu(e, r));
  }
  if (n === 1)
    throw n = Rr, Jt(e, 0), Ot(e, t), Re(e, ee()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qt(e, Pe, pt), Re(e, ee()), null;
}
function rs(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (In = ee() + 500, oo && Vt());
  }
}
function nn(e) {
  Lt !== null && Lt.tag === 0 && !(M & 6) && Pn();
  var t = M;
  M |= 1;
  var n = Ge.transition, r = F;
  try {
    if (Ge.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, Ge.transition = n, M = t, !(M & 6) && Vt();
  }
}
function is() {
  ze = Sn.current, K(Sn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Xm(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Du(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $i();
          break;
        case 3:
          An(), K(Te), K(ke), Gu();
          break;
        case 5:
          Qu(r);
          break;
        case 4:
          An();
          break;
        case 13:
          K(Y);
          break;
        case 19:
          K(Y);
          break;
        case 10:
          Hu(r.type._context);
          break;
        case 22:
        case 23:
          is();
      }
      n = n.return;
    }
  if (ce = e, oe = e = Ft(e.current, null), me = ze = t, ue = 0, Rr = null, ts = ao = tn = 0, Pe = fr = null, Yt !== null) {
    for (t = 0; t < Yt.length; t++)
      if (n = Yt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    Yt = null;
  }
  return e;
}
function yd(e, t) {
  do {
    var n = oe;
    try {
      if (Bu(), hi.current = Wi, Hi) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Hi = !1;
      }
      if (en = 0, ae = le = X = null, ar = !1, Nr = 0, es.current = null, n === null || n.return === null) {
        ue = 1, Rr = t, oe = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = me, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = Sa(l);
          if (v !== null) {
            v.flags &= -257, ka(v, l, u, o, t), v.mode & 1 && wa(o, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              wa(o, a, t), os();
              break e;
            }
            s = Error(S(426));
          }
        } else if (Q && u.mode & 1) {
          var x = Sa(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), ka(x, l, u, o, t), Fu($n(s, u));
            break e;
          }
        }
        o = s = $n(s, u), ue !== 4 && (ue = 2), fr === null ? fr = [o] : fr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = bf(o, s, t);
              pa(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (jt === null || !jt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = ed(o, u, t);
                pa(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      wd(n);
    } catch (_) {
      t = _, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gd() {
  var e = Vi.current;
  return Vi.current = Wi, e === null ? Wi : e;
}
function os() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), ce === null || !(tn & 268435455) && !(ao & 268435455) || Ot(ce, me);
}
function Gi(e, t) {
  var n = M;
  M |= 2;
  var r = gd();
  (ce !== e || me !== t) && (pt = null, Jt(e, t));
  do
    try {
      Sh();
      break;
    } catch (i) {
      yd(e, i);
    }
  while (1);
  if (Bu(), M = n, Vi.current = r, oe !== null)
    throw Error(S(261));
  return ce = null, me = 0, ue;
}
function Sh() {
  for (; oe !== null; )
    vd(oe);
}
function kh() {
  for (; oe !== null && !Qp(); )
    vd(oe);
}
function vd(e) {
  var t = kd(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? wd(e) : oe = t, es.current = null;
}
function wd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mh(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, oe = null;
        return;
      }
    } else if (n = ph(n, t, ze), n !== null) {
      oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Qt(e, t, n) {
  var r = F, i = Ge.transition;
  try {
    Ge.transition = null, F = 1, _h(e, t, n, r);
  } finally {
    Ge.transition = i, F = r;
  }
  return null;
}
function _h(e, t, n, r) {
  do
    Pn();
  while (Lt !== null);
  if (M & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (nm(e, o), e === ce && (oe = ce = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || li || (li = !0, _d(Ti, function() {
    return Pn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ge.transition, Ge.transition = null;
    var l = F;
    F = 1;
    var u = M;
    M |= 4, es.current = null, yh(e, n), pd(n, e), Hm(Fl), Ri = !!Dl, Fl = Dl = null, e.current = n, gh(n), Gp(), M = u, F = l, Ge.transition = o;
  } else
    e.current = n;
  if (li && (li = !1, Lt = e, Qi = i), o = e.pendingLanes, o === 0 && (jt = null), Jp(n.stateNode), Re(e, ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ki)
    throw Ki = !1, e = ou, ou = null, e;
  return Qi & 1 && e.tag !== 0 && Pn(), o = e.pendingLanes, o & 1 ? e === lu ? dr++ : (dr = 0, lu = e) : dr = 0, Vt(), null;
}
function Pn() {
  if (Lt !== null) {
    var e = qc(Qi), t = Ge.transition, n = F;
    try {
      if (Ge.transition = null, F = 16 > e ? 16 : e, Lt === null)
        var r = !1;
      else {
        if (e = Lt, Lt = null, Qi = 0, M & 6)
          throw Error(S(331));
        var i = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var o = P, l = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null)
                    f.return = h, P = f;
                  else
                    for (; P !== null; ) {
                      h = P;
                      var p = h.sibling, v = h.return;
                      if (cd(h), h === a) {
                        P = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, P = p;
                        break;
                      }
                      P = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var x = y.sibling;
                    y.sibling = null, y = x;
                  } while (y !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null)
            l.return = o, P = l;
          else
            e:
              for (; P !== null; ) {
                if (o = P, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  d.return = o.return, P = d;
                  break e;
                }
                P = o.return;
              }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          l = P;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null)
            m.return = l, P = m;
          else
            e:
              for (l = c; P !== null; ) {
                if (u = P, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        so(9, u);
                    }
                  } catch (_) {
                    b(u, u.return, _);
                  }
                if (u === l) {
                  P = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, P = w;
                  break e;
                }
                P = u.return;
              }
        }
        if (M = i, Vt(), at && typeof at.onPostCommitFiberRoot == "function")
          try {
            at.onPostCommitFiberRoot(eo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, Ge.transition = t;
    }
  }
  return !1;
}
function $a(e, t, n) {
  t = $n(n, t), t = bf(e, t, 1), e = Mt(e, t, 1), t = Ce(), e !== null && (Mr(e, 1, t), Re(e, t));
}
function b(e, t, n) {
  if (e.tag === 3)
    $a(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
          e = $n(n, e), e = ed(t, e, 1), t = Mt(t, e, 1), e = Ce(), t !== null && (Mr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (me & n) === n && (ue === 4 || ue === 3 && (me & 130023424) === me && 500 > ee() - ns ? Jt(e, 0) : ts |= n), Re(e, t);
}
function Sd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Jr, Jr <<= 1, !(Jr & 130023424) && (Jr = 4194304)) : t = 1);
  var n = Ce();
  e = St(e, t), e !== null && (Mr(e, t, n), Re(e, n));
}
function Eh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sd(e, n);
}
function xh(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), Sd(e, n);
}
var kd;
kd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ne = !1, dh(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else
    Ne = !1, Q && t.flags & 1048576 && xf(t, ji, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      gi(e, t), e = t.pendingProps;
      var i = Rn(t, ke.current);
      xn(t, n), i = Xu(null, t, r, e, i, n);
      var o = Ju();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (o = !0, Ii(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Vu(t), i.updater = uo, t.stateNode = i, i._reactInternals = t, Yl(t, r, e, n), t = Zl(null, t, r, !0, o, n)) : (t.tag = 0, Q && o && ju(t), _e(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (gi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Nh(r), e = qe(r, e), i) {
          case 0:
            t = Jl(null, t, r, e, n);
            break e;
          case 1:
            t = Ea(null, t, r, e, n);
            break e;
          case 11:
            t = _a(null, t, r, e, n);
            break e;
          case 14:
            t = Ca(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qe(r, i), Jl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qe(r, i), Ea(e, t, r, i, n);
    case 3:
      e: {
        if (id(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Lf(e, t), Ui(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = $n(Error(S(423)), t), t = xa(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = $n(Error(S(424)), t), t = xa(e, t, r, n, i);
            break e;
          } else
            for (Ie = It(t.stateNode.containerInfo.firstChild), Me = t, Q = !0, et = null, n = Of(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ln(), r === i) {
            t = kt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return zf(t), e === null && Kl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Ul(r, i) ? l = null : o !== null && Ul(r, o) && (t.flags |= 32), rd(e, t), _e(e, t, l, n), t.child;
    case 6:
      return e === null && Kl(t), null;
    case 13:
      return od(e, t, n);
    case 4:
      return Ku(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qe(r, i), _a(e, t, r, i, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, H(Di, r._currentValue), r._currentValue = l, o !== null)
          if (rt(o.value, l)) {
            if (o.children === i.children && !Te.current) {
              t = kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                l = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = gt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Ql(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (l = o.return, l === null)
                  throw Error(S(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ql(l, n, t), l = o.sibling;
              } else
                l = o.child;
              if (l !== null)
                l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (o = l.sibling, o !== null) {
                    o.return = l.return, l = o;
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        _e(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, xn(t, n), i = Ye(i), r = r(i), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = qe(r, t.pendingProps), i = qe(r.type, i), Ca(e, t, r, i, n);
    case 15:
      return td(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : qe(r, i), gi(e, t), t.tag = 1, Oe(r) ? (e = !0, Ii(t)) : e = !1, xn(t, n), qf(t, r, i), Yl(t, r, i, n), Zl(null, t, r, !0, e, n);
    case 19:
      return ld(e, t, n);
    case 22:
      return nd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function _d(e, t) {
  return Yc(e, t);
}
function Ph(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Qe(e, t, n, r) {
  return new Ph(e, t, n, r);
}
function ls(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Nh(e) {
  if (typeof e == "function")
    return ls(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === xu)
      return 11;
    if (e === Pu)
      return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return n === null ? (n = Qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Si(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function")
    ls(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case cn:
          return Zt(n.children, i, o, t);
        case Eu:
          l = 8, i |= 8;
          break;
        case vl:
          return e = Qe(12, n, t, i | 2), e.elementType = vl, e.lanes = o, e;
        case wl:
          return e = Qe(13, n, t, i), e.elementType = wl, e.lanes = o, e;
        case Sl:
          return e = Qe(19, n, t, i), e.elementType = Sl, e.lanes = o, e;
        case Lc:
          return co(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Oc:
                l = 10;
                break e;
              case Rc:
                l = 9;
                break e;
              case xu:
                l = 11;
                break e;
              case Pu:
                l = 14;
                break e;
              case Pt:
                l = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Qe(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Zt(e, t, n, r) {
  return e = Qe(7, e, r, t), e.lanes = n, e;
}
function co(e, t, n, r) {
  return e = Qe(22, e, r, t), e.elementType = Lc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function al(e, t, n) {
  return e = Qe(6, e, null, t), e.lanes = n, e;
}
function cl(e, t, n) {
  return t = Qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Th(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vo(0), this.expirationTimes = Vo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function us(e, t, n, r, i, o, l, u, s) {
  return e = new Th(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Qe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vu(o), e;
}
function Oh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: an, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cd(e) {
  if (!e)
    return Bt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1)
      throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n))
      return Cf(e, n, t);
  }
  return t;
}
function Ed(e, t, n, r, i, o, l, u, s) {
  return e = us(n, r, !0, e, i, o, l, u, s), e.context = Cd(null), n = e.current, r = Ce(), i = Dt(n), o = gt(r, i), o.callback = t ?? null, Mt(n, o, i), e.current.lanes = i, Mr(e, i, r), Re(e, r), e;
}
function fo(e, t, n, r) {
  var i = t.current, o = Ce(), l = Dt(i);
  return n = Cd(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(i, t, l), e !== null && (nt(e, i, l, o), mi(e, i, l)), l;
}
function Yi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ia(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ss(e, t) {
  Ia(e, t), (e = e.alternate) && Ia(e, t);
}
function Rh() {
  return null;
}
var xd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function as(e) {
  this._internalRoot = e;
}
po.prototype.render = as.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  fo(e, t, null, null);
};
po.prototype.unmount = as.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function() {
      fo(null, e, null, null);
    }), t[wt] = null;
  }
};
function po(e) {
  this._internalRoot = e;
}
po.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = tf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
      ;
    Tt.splice(n, 0, e), n === 0 && rf(e);
  }
};
function cs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function mo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ma() {
}
function Lh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Yi(l);
        o.call(a);
      };
    }
    var l = Ed(t, r, e, 0, null, !1, !1, "", Ma);
    return e._reactRootContainer = l, e[wt] = l.current, _r(e.nodeType === 8 ? e.parentNode : e), nn(), l;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Yi(s);
      u.call(a);
    };
  }
  var s = us(e, 0, !1, null, null, !1, !1, "", Ma);
  return e._reactRootContainer = s, e[wt] = s.current, _r(e.nodeType === 8 ? e.parentNode : e), nn(function() {
    fo(t, s, n, r);
  }), s;
}
function ho(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = Yi(l);
        u.call(s);
      };
    }
    fo(t, l, e, i);
  } else
    l = Lh(n, t, e, i, r);
  return Yi(l);
}
bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nr(t.pendingLanes);
        n !== 0 && (Ou(t, n | 1), Re(t, ee()), !(M & 6) && (In = ee() + 500, Vt()));
      }
      break;
    case 13:
      nn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var i = Ce();
          nt(r, e, 1, i);
        }
      }), ss(e, 1);
  }
};
Ru = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Ce();
      nt(t, e, 134217728, n);
    }
    ss(e, 134217728);
  }
};
ef = function(e) {
  if (e.tag === 13) {
    var t = Dt(e), n = St(e, t);
    if (n !== null) {
      var r = Ce();
      nt(n, e, t, r);
    }
    ss(e, t);
  }
};
tf = function() {
  return F;
};
nf = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
Rl = function(e, t, n) {
  switch (t) {
    case "input":
      if (Cl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = io(r);
            if (!i)
              throw Error(S(90));
            Ac(r), Cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ic(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
Hc = rs;
Wc = nn;
var zh = { usingClientEntryPoint: !1, Events: [Dr, mn, io, Uc, Bc, rs] }, Zn = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ah = { bundleType: Zn.bundleType, version: Zn.version, rendererPackageName: Zn.rendererPackageName, rendererConfig: Zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zn.findFiberByHostInstance || Rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ui.isDisabled && ui.supportsFiber)
    try {
      eo = ui.inject(Ah), at = ui;
    } catch {
    }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zh;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cs(t))
    throw Error(S(200));
  return Oh(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!cs(e))
    throw Error(S(299));
  var n = !1, r = "", i = xd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = us(e, 1, !1, null, null, n, !1, r, i), e[wt] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new as(t);
};
Fe.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Qc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return nn(e);
};
Fe.hydrate = function(e, t, n) {
  if (!mo(t))
    throw Error(S(200));
  return ho(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!cs(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = xd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ed(t, null, e, 1, n ?? null, i, !1, o, l), e[wt] = t.current, _r(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new po(t);
};
Fe.render = function(e, t, n) {
  if (!mo(t))
    throw Error(S(200));
  return ho(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!mo(e))
    throw Error(S(40));
  return e._reactRootContainer ? (nn(function() {
    ho(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = rs;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!mo(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return ho(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function Pd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pd);
    } catch (e) {
      console.error(e);
    }
}
Pd(), xc.exports = Fe;
var $h = xc.exports, Nd, ja = $h;
Nd = ja.createRoot, ja.hydrateRoot;
function Ih(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Da = "$$material";
function he() {
  return he = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, he.apply(null, arguments);
}
function yo(e, t) {
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
var Mh = !1;
function jh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Dh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Fh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Mh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dh(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = jh(i);
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
}(), we = "-ms-", Xi = "-moz-", j = "-webkit-", Td = "comm", fs = "rule", ds = "decl", Uh = "@import", Od = "@keyframes", Bh = "@layer", Hh = Math.abs, go = String.fromCharCode, Wh = Object.assign;
function Vh(e, t) {
  return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function Rd(e) {
  return e.trim();
}
function Kh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function au(e, t) {
  return e.indexOf(t);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, n) {
  return e.slice(t, n);
}
function lt(e) {
  return e.length;
}
function ps(e) {
  return e.length;
}
function si(e, t) {
  return t.push(e), e;
}
function Qh(e, t) {
  return e.map(t).join("");
}
var vo = 1, Mn = 1, Ld = 0, Le = 0, ie = 0, Un = "";
function wo(e, t, n, r, i, o, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: vo, column: Mn, length: l, return: "" };
}
function qn(e, t) {
  return Wh(wo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Gh() {
  return ie;
}
function Yh() {
  return ie = Le > 0 ? pe(Un, --Le) : 0, Mn--, ie === 10 && (Mn = 1, vo--), ie;
}
function je() {
  return ie = Le < Ld ? pe(Un, Le++) : 0, Mn++, ie === 10 && (Mn = 1, vo++), ie;
}
function ft() {
  return pe(Un, Le);
}
function ki() {
  return Le;
}
function Ur(e, t) {
  return Lr(Un, e, t);
}
function zr(e) {
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
function zd(e) {
  return vo = Mn = 1, Ld = lt(Un = e), Le = 0, [];
}
function Ad(e) {
  return Un = "", e;
}
function _i(e) {
  return Rd(Ur(Le - 1, cu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xh(e) {
  for (; (ie = ft()) && ie < 33; )
    je();
  return zr(e) > 2 || zr(ie) > 3 ? "" : " ";
}
function Jh(e, t) {
  for (; --t && je() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return Ur(e, ki() + (t < 6 && ft() == 32 && je() == 32));
}
function cu(e) {
  for (; je(); )
    switch (ie) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cu(ie);
        break;
      case 40:
        e === 41 && cu(e);
        break;
      case 92:
        je();
        break;
    }
  return Le;
}
function Zh(e, t) {
  for (; je() && e + ie !== 47 + 10; )
    if (e + ie === 42 + 42 && ft() === 47)
      break;
  return "/*" + Ur(t, Le - 1) + "*" + go(e === 47 ? e : je());
}
function qh(e) {
  for (; !zr(ft()); )
    je();
  return Ur(e, Le);
}
function bh(e) {
  return Ad(Ci("", null, null, null, [""], e = zd(e), 0, [0], e));
}
function Ci(e, t, n, r, i, o, l, u, s) {
  for (var a = 0, h = 0, f = l, p = 0, v = 0, g = 0, y = 1, x = 1, d = 1, c = 0, m = "", w = i, _ = o, C = r, k = m; x; )
    switch (g = c, c = je()) {
      case 40:
        if (g != 108 && pe(k, f - 1) == 58) {
          au(k += D(_i(c), "&", "&\f"), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += _i(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Xh(g);
        break;
      case 92:
        k += Jh(ki() - 1, 7);
        continue;
      case 47:
        switch (ft()) {
          case 42:
          case 47:
            si(ey(Zh(je(), ki()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = lt(k) * d;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            x = 0;
          case 59 + h:
            d == -1 && (k = D(k, /\f/g, "")), v > 0 && lt(k) - f && si(v > 32 ? Ua(k + ";", r, n, f - 1) : Ua(D(k, " ", "") + ";", r, n, f - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (si(C = Fa(k, t, n, a, h, i, u, m, w = [], _ = [], f), o), c === 123)
              if (h === 0)
                Ci(k, t, C, C, w, o, f, u, _);
              else
                switch (p === 99 && pe(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ci(e, C, C, r && si(Fa(e, C, C, 0, 0, i, u, m, i, w = [], f), _), i, _, f, u, r ? w : _);
                    break;
                  default:
                    Ci(k, C, C, C, [""], _, 0, u, _);
                }
        }
        a = h = v = 0, y = d = 1, m = k = "", f = l;
        break;
      case 58:
        f = 1 + lt(k), v = g;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Yh() == 125)
            continue;
        }
        switch (k += go(c), c * y) {
          case 38:
            d = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (lt(k) - 1) * d, d = 1;
            break;
          case 64:
            ft() === 45 && (k += _i(je())), p = ft(), h = f = lt(m = k += qh(ki())), c++;
            break;
          case 45:
            g === 45 && lt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Fa(e, t, n, r, i, o, l, u, s, a, h) {
  for (var f = i - 1, p = i === 0 ? o : [""], v = ps(p), g = 0, y = 0, x = 0; g < r; ++g)
    for (var d = 0, c = Lr(e, f + 1, f = Hh(y = l[g])), m = e; d < v; ++d)
      (m = Rd(y > 0 ? p[d] + " " + c : D(c, /&\f/g, p[d]))) && (s[x++] = m);
  return wo(e, t, n, i === 0 ? fs : u, s, a, h);
}
function ey(e, t, n) {
  return wo(e, t, n, Td, go(Gh()), Lr(e, 2, -2), 0);
}
function Ua(e, t, n, r) {
  return wo(e, t, n, ds, Lr(e, 0, r), Lr(e, r + 1, -1), r);
}
function Nn(e, t) {
  for (var n = "", r = ps(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function ty(e, t, n, r) {
  switch (e.type) {
    case Bh:
      if (e.children.length)
        break;
    case Uh:
    case ds:
      return e.return = e.return || e.value;
    case Td:
      return "";
    case Od:
      return e.return = e.value + "{" + Nn(e.children, r) + "}";
    case fs:
      e.value = e.props.join(",");
  }
  return lt(n = Nn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ny(e) {
  var t = ps(e);
  return function(n, r, i, o) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, i, o) || "";
    return l;
  };
}
function ry(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function $d(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var iy = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = ft(), i === 38 && o === 12 && (n[r] = 1), !zr(o); )
    je();
  return Ur(t, Le);
}, oy = function(t, n) {
  var r = -1, i = 44;
  do
    switch (zr(i)) {
      case 0:
        i === 38 && ft() === 12 && (n[r] = 1), t[r] += iy(Le - 1, n, r);
        break;
      case 2:
        t[r] += _i(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = ft() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += go(i);
    }
  while (i = je());
  return t;
}, ly = function(t, n) {
  return Ad(oy(zd(t), n));
}, Ba = /* @__PURE__ */ new WeakMap(), uy = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ba.get(r)) && !i) {
      Ba.set(t, !0);
      for (var o = [], l = ly(n, o), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, sy = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Id(e, t) {
  switch (Vh(e, t)) {
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
      return j + e + Xi + e + we + e + e;
    case 6828:
    case 4268:
      return j + e + we + e + e;
    case 6165:
      return j + e + we + "flex-" + e + e;
    case 5187:
      return j + e + D(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
      return j + e + we + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + we + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + we + D(e, "shrink", "negative") + e;
    case 5292:
      return j + e + we + D(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + D(e, "-grow", "") + j + e + we + D(e, "grow", "positive") + e;
    case 4554:
      return j + D(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + we + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, j + "$1$2") + e;
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
      if (lt(e) - 1 - t > 6)
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + Xi + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~au(e, "stretch") ? Id(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (pe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (pe(e, lt(e) - 3 - (~au(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + j) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + we + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return j + e + we + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + we + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + we + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + we + e + e;
  }
  return e;
}
var ay = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ds:
        t.return = Id(t.value, t.length);
        break;
      case Od:
        return Nn([qn(t, {
          value: D(t.value, "@", "@" + j)
        })], i);
      case fs:
        if (t.length)
          return Qh(t.props, function(o) {
            switch (Kh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Nn([qn(t, {
                  props: [D(o, /:(read-\w+)/, ":" + Xi + "$1")]
                })], i);
              case "::placeholder":
                return Nn([qn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + j + "input-$1")]
                }), qn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + Xi + "$1")]
                }), qn(t, {
                  props: [D(o, /:(plac\w+)/, we + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, cy = [ay], fy = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || cy, o = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var x = y.getAttribute("data-emotion").split(" "), d = 1; d < x.length; d++)
        o[x[d]] = !0;
      u.push(y);
    }
  );
  var s, a = [uy, sy];
  {
    var h, f = [ty, ry(function(y) {
      h.insert(y);
    })], p = ny(a.concat(i, f)), v = function(x) {
      return Nn(bh(x), p);
    };
    s = function(x, d, c, m) {
      h = c, v(x ? x + "{" + d.styles + "}" : d.styles), m && (g.inserted[d.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Fh({
      key: n,
      container: l,
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
  return g.sheet.hydrate(u), g;
}, Md = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe = typeof Symbol == "function" && Symbol.for, ms = fe ? Symbol.for("react.element") : 60103, hs = fe ? Symbol.for("react.portal") : 60106, So = fe ? Symbol.for("react.fragment") : 60107, ko = fe ? Symbol.for("react.strict_mode") : 60108, _o = fe ? Symbol.for("react.profiler") : 60114, Co = fe ? Symbol.for("react.provider") : 60109, Eo = fe ? Symbol.for("react.context") : 60110, ys = fe ? Symbol.for("react.async_mode") : 60111, xo = fe ? Symbol.for("react.concurrent_mode") : 60111, Po = fe ? Symbol.for("react.forward_ref") : 60112, No = fe ? Symbol.for("react.suspense") : 60113, dy = fe ? Symbol.for("react.suspense_list") : 60120, To = fe ? Symbol.for("react.memo") : 60115, Oo = fe ? Symbol.for("react.lazy") : 60116, py = fe ? Symbol.for("react.block") : 60121, my = fe ? Symbol.for("react.fundamental") : 60117, hy = fe ? Symbol.for("react.responder") : 60118, yy = fe ? Symbol.for("react.scope") : 60119;
function Be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ms:
        switch (e = e.type, e) {
          case ys:
          case xo:
          case So:
          case _o:
          case ko:
          case No:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Eo:
              case Po:
              case Oo:
              case To:
              case Co:
                return e;
              default:
                return t;
            }
        }
      case hs:
        return t;
    }
  }
}
function jd(e) {
  return Be(e) === xo;
}
U.AsyncMode = ys;
U.ConcurrentMode = xo;
U.ContextConsumer = Eo;
U.ContextProvider = Co;
U.Element = ms;
U.ForwardRef = Po;
U.Fragment = So;
U.Lazy = Oo;
U.Memo = To;
U.Portal = hs;
U.Profiler = _o;
U.StrictMode = ko;
U.Suspense = No;
U.isAsyncMode = function(e) {
  return jd(e) || Be(e) === ys;
};
U.isConcurrentMode = jd;
U.isContextConsumer = function(e) {
  return Be(e) === Eo;
};
U.isContextProvider = function(e) {
  return Be(e) === Co;
};
U.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ms;
};
U.isForwardRef = function(e) {
  return Be(e) === Po;
};
U.isFragment = function(e) {
  return Be(e) === So;
};
U.isLazy = function(e) {
  return Be(e) === Oo;
};
U.isMemo = function(e) {
  return Be(e) === To;
};
U.isPortal = function(e) {
  return Be(e) === hs;
};
U.isProfiler = function(e) {
  return Be(e) === _o;
};
U.isStrictMode = function(e) {
  return Be(e) === ko;
};
U.isSuspense = function(e) {
  return Be(e) === No;
};
U.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === So || e === xo || e === _o || e === ko || e === No || e === dy || typeof e == "object" && e !== null && (e.$$typeof === Oo || e.$$typeof === To || e.$$typeof === Co || e.$$typeof === Eo || e.$$typeof === Po || e.$$typeof === my || e.$$typeof === hy || e.$$typeof === yy || e.$$typeof === py);
};
U.typeOf = Be;
Md.exports = U;
var gy = Md.exports, Dd = gy, vy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fd = {};
Fd[Dd.ForwardRef] = vy;
Fd[Dd.Memo] = wy;
var Sy = !0;
function Ud(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var gs = function(t, n, r) {
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
  Sy === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, vs = function(t, n, r) {
  gs(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function ky(e) {
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
var _y = {
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
}, Cy = !1, Ey = /[A-Z]|^ms/g, xy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bd = function(t) {
  return t.charCodeAt(1) === 45;
}, Ha = function(t) {
  return t != null && typeof t != "boolean";
}, fl = /* @__PURE__ */ $d(function(e) {
  return Bd(e) ? e : e.replace(Ey, "-$&").toLowerCase();
}), Wa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(xy, function(r, i, o) {
          return ut = {
            name: i,
            styles: o,
            next: ut
          }, i;
        });
  }
  return _y[t] !== 1 && !Bd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Py = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ar(e, t, n) {
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
        return ut = {
          name: i.name,
          styles: i.styles,
          next: ut
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            ut = {
              name: l.name,
              styles: l.styles,
              next: ut
            }, l = l.next;
        var u = o.styles + ";";
        return u;
      }
      return Ny(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = ut, a = n(e);
        return ut = s, Ar(e, t, a);
      }
      break;
    }
  }
  var h = n;
  if (t == null)
    return h;
  var f = t[h];
  return f !== void 0 ? f : h;
}
function Ny(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Ar(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ha(u) && (r += fl(o) + ":" + Wa(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Cy)
          throw new Error(Py);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Ha(l[s]) && (r += fl(o) + ":" + Wa(o, l[s]) + ";");
        else {
          var a = Ar(e, t, l);
          switch (o) {
            case "animation":
            case "animationName": {
              r += fl(o) + ":" + a + ";";
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
var Va = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function Ro(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ut = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Ar(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (i += Ar(n, t, e[u]), r) {
      var s = o;
      i += s[u];
    }
  Va.lastIndex = 0;
  for (var a = "", h; (h = Va.exec(i)) !== null; )
    a += "-" + h[1];
  var f = ky(i) + a;
  return {
    name: f,
    styles: i,
    next: ut
  };
}
var Ty = function(t) {
  return t();
}, Hd = yl["useInsertionEffect"] ? yl["useInsertionEffect"] : !1, Wd = Hd || Ty, Ka = Hd || R.useLayoutEffect, Oy = !1, Vd = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fy({
    key: "css"
  }) : null
);
Vd.Provider;
var ws = function(t) {
  return /* @__PURE__ */ R.forwardRef(function(n, r) {
    var i = R.useContext(Vd);
    return t(n, i, r);
  });
}, Br = /* @__PURE__ */ R.createContext({}), Ss = {}.hasOwnProperty, fu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ry = function(t, n) {
  var r = {};
  for (var i in n)
    Ss.call(n, i) && (r[i] = n[i]);
  return r[fu] = t, r;
}, Ly = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return gs(n, r, i), Wd(function() {
    return vs(n, r, i);
  }), null;
}, zy = /* @__PURE__ */ ws(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[fu], o = [r], l = "";
  typeof e.className == "string" ? l = Ud(t.registered, o, e.className) : e.className != null && (l = e.className + " ");
  var u = Ro(o, void 0, R.useContext(Br));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    Ss.call(e, a) && a !== "css" && a !== fu && !Oy && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Ly, {
    cache: t,
    serialized: u,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ R.createElement(i, s));
}), Ay = zy, dl = { exports: {} }, Qa;
function $y() {
  return Qa || (Qa = 1, function(e) {
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
  }(dl)), dl.exports;
}
$y();
var Ga = function(t, n) {
  var r = arguments;
  if (n == null || !Ss.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = Ay, o[1] = Ry(t, n);
  for (var l = 2; l < i; l++)
    o[l] = r[l];
  return R.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ga || (Ga = {}));
var Iy = /* @__PURE__ */ ws(function(e, t) {
  var n = e.styles, r = Ro([n], void 0, R.useContext(Br)), i = R.useRef();
  return Ka(function() {
    var o = t.key + "-global", l = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), l.hydrate([s])), i.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Ka(function() {
    var o = i.current, l = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && vs(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), My = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jy = /* @__PURE__ */ $d(
  function(e) {
    return My.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Dy = !1, Fy = jy, Uy = function(t) {
  return t !== "theme";
}, Ya = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Fy : Uy;
}, Xa = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(l) {
      return t.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, By = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return gs(n, r, i), Wd(function() {
    return vs(n, r, i);
  }), null;
}, Hy = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, l;
  n !== void 0 && (o = n.label, l = n.target);
  var u = Xa(t, n, r), s = u || Ya(i), a = !s("as");
  return function() {
    var h = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      f.push.apply(f, h);
    else {
      var p = h[0];
      f.push(p[0]);
      for (var v = h.length, g = 1; g < v; g++)
        f.push(h[g], p[g]);
    }
    var y = ws(function(x, d, c) {
      var m = a && x.as || i, w = "", _ = [], C = x;
      if (x.theme == null) {
        C = {};
        for (var k in x)
          C[k] = x[k];
        C.theme = R.useContext(Br);
      }
      typeof x.className == "string" ? w = Ud(d.registered, _, x.className) : x.className != null && (w = x.className + " ");
      var T = Ro(f.concat(_), d.registered, C);
      w += d.key + "-" + T.name, l !== void 0 && (w += " " + l);
      var W = a && u === void 0 ? Ya(m) : s, A = {};
      for (var se in x)
        a && se === "as" || W(se) && (A[se] = x[se]);
      return A.className = w, c && (A.ref = c), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(By, {
        cache: d,
        serialized: T,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ R.createElement(m, A));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = f, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return l === void 0 && Dy ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), y.withComponent = function(x, d) {
      var c = e(x, he({}, n, d, {
        shouldForwardProp: Xa(y, d, !0)
      }));
      return c.apply(void 0, f);
    }, y;
  };
}, Wy = [
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
], Ja = Hy.bind(null);
Wy.forEach(function(e) {
  Ja[e] = Ja(e);
});
function Vy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ky(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ N(Iy, {
    styles: typeof t == "function" ? (i) => t(Vy(i) ? n : i) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Za = [];
function Qy(e) {
  return Za[0] = e, Ro(Za);
}
function sn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kd(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || !sn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Kd(e[n]);
  }), t;
}
function Ji(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? he({}, e) : e;
  return sn(e) && sn(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ R.isValidElement(t[i]) ? r[i] = t[i] : sn(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && sn(e[i]) ? r[i] = Ji(e[i], t[i], n) : n.clone ? r[i] = sn(t[i]) ? Kd(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Gy = ["values", "unit", "step"], Yy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => he({}, n, {
    [r.key]: r.val
  }), {});
};
function Xy(e) {
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
  } = e, i = yo(e, Gy), o = Yy(t), l = Object.keys(o);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function a(p, v) {
    const g = l.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(g !== -1 && typeof t[l[g]] == "number" ? t[l[g]] : v) - r / 100}${n})`;
  }
  function h(p) {
    return l.indexOf(p) + 1 < l.length ? a(p, l[l.indexOf(p) + 1]) : u(p);
  }
  function f(p) {
    const v = l.indexOf(p);
    return v === 0 ? u(l[1]) : v === l.length - 1 ? s(l[v]) : a(p, l[l.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return he({
    keys: l,
    values: o,
    up: u,
    down: s,
    between: a,
    only: h,
    not: f,
    unit: n
  }, i);
}
const Jy = {
  borderRadius: 4
}, Zy = Jy;
function pr(e, t) {
  return t ? Ji(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ks = {
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
}, qa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ks[e]}px)`
};
function _t(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || qa;
    return t.reduce((l, u, s) => (l[o.up(o.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || qa;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(o.values || ks).indexOf(u) !== -1) {
        const s = o.up(u);
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
function qy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function ba(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Qd(e) {
  if (typeof e != "string")
    throw new Error(Ih(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Lo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Zi(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Lo(e, n) || r, t && (i = t(i, r, e)), i;
}
function te(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (l) => {
    if (l[t] == null)
      return null;
    const u = l[t], s = l.theme, a = Lo(s, r) || {};
    return _t(l, u, (f) => {
      let p = Zi(a, i, f);
      return f === p && typeof f == "string" && (p = Zi(a, i, `${t}${f === "default" ? "" : Qd(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function by(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const eg = {
  m: "margin",
  p: "padding"
}, tg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ec = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ng = by((e) => {
  if (e.length > 2)
    if (ec[e])
      e = ec[e];
    else
      return [e];
  const [t, n] = e.split(""), r = eg[t], i = tg[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), _s = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Cs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[..._s, ...Cs];
function Hr(e, t, n, r) {
  var i;
  const o = (i = Lo(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (l) => typeof l == "string" ? l : o * l : Array.isArray(o) ? (l) => typeof l == "string" ? l : o[l] : typeof o == "function" ? o : () => {
  };
}
function Gd(e) {
  return Hr(e, "spacing", 8);
}
function Wr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function rg(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Wr(t, n), r), {});
}
function ig(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = ng(n), o = rg(i, r), l = e[n];
  return _t(e, l, o);
}
function Yd(e, t) {
  const n = Gd(e.theme);
  return Object.keys(e).map((r) => ig(e, t, r, n)).reduce(pr, {});
}
function Z(e) {
  return Yd(e, _s);
}
Z.propTypes = {};
Z.filterProps = _s;
function q(e) {
  return Yd(e, Cs);
}
q.propTypes = {};
q.filterProps = Cs;
function og(e = 8) {
  if (e.mui)
    return e;
  const t = Gd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const l = t(o);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function zo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? pr(i, t[o](r)) : i, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Ke(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Je(e, t) {
  return te({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const lg = Je("border", Ke), ug = Je("borderTop", Ke), sg = Je("borderRight", Ke), ag = Je("borderBottom", Ke), cg = Je("borderLeft", Ke), fg = Je("borderColor"), dg = Je("borderTopColor"), pg = Je("borderRightColor"), mg = Je("borderBottomColor"), hg = Je("borderLeftColor"), yg = Je("outline", Ke), gg = Je("outlineColor"), Ao = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Wr(t, r)
    });
    return _t(e, e.borderRadius, n);
  }
  return null;
};
Ao.propTypes = {};
Ao.filterProps = ["borderRadius"];
zo(lg, ug, sg, ag, cg, fg, dg, pg, mg, hg, Ao, yg, gg);
const $o = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      gap: Wr(t, r)
    });
    return _t(e, e.gap, n);
  }
  return null;
};
$o.propTypes = {};
$o.filterProps = ["gap"];
const Io = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Wr(t, r)
    });
    return _t(e, e.columnGap, n);
  }
  return null;
};
Io.propTypes = {};
Io.filterProps = ["columnGap"];
const Mo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Wr(t, r)
    });
    return _t(e, e.rowGap, n);
  }
  return null;
};
Mo.propTypes = {};
Mo.filterProps = ["rowGap"];
const vg = te({
  prop: "gridColumn"
}), wg = te({
  prop: "gridRow"
}), Sg = te({
  prop: "gridAutoFlow"
}), kg = te({
  prop: "gridAutoColumns"
}), _g = te({
  prop: "gridAutoRows"
}), Cg = te({
  prop: "gridTemplateColumns"
}), Eg = te({
  prop: "gridTemplateRows"
}), xg = te({
  prop: "gridTemplateAreas"
}), Pg = te({
  prop: "gridArea"
});
zo($o, Io, Mo, vg, wg, Sg, kg, _g, Cg, Eg, xg, Pg);
function Tn(e, t) {
  return t === "grey" ? t : e;
}
const Ng = te({
  prop: "color",
  themeKey: "palette",
  transform: Tn
}), Tg = te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tn
}), Og = te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tn
});
zo(Ng, Tg, Og);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Rg = te({
  prop: "width",
  transform: $e
}), Es = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ks[n];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: $e(n)
      };
    };
    return _t(e, e.maxWidth, t);
  }
  return null;
};
Es.filterProps = ["maxWidth"];
const Lg = te({
  prop: "minWidth",
  transform: $e
}), zg = te({
  prop: "height",
  transform: $e
}), Ag = te({
  prop: "maxHeight",
  transform: $e
}), $g = te({
  prop: "minHeight",
  transform: $e
});
te({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
te({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const Ig = te({
  prop: "boxSizing"
});
zo(Rg, Es, Lg, zg, Ag, $g, Ig);
const Mg = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ke
  },
  borderTop: {
    themeKey: "borders",
    transform: Ke
  },
  borderRight: {
    themeKey: "borders",
    transform: Ke
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ke
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ke
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
    transform: Ke
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ao
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tn
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
    style: Z
  },
  mt: {
    style: Z
  },
  mr: {
    style: Z
  },
  mb: {
    style: Z
  },
  ml: {
    style: Z
  },
  mx: {
    style: Z
  },
  my: {
    style: Z
  },
  margin: {
    style: Z
  },
  marginTop: {
    style: Z
  },
  marginRight: {
    style: Z
  },
  marginBottom: {
    style: Z
  },
  marginLeft: {
    style: Z
  },
  marginX: {
    style: Z
  },
  marginY: {
    style: Z
  },
  marginInline: {
    style: Z
  },
  marginInlineStart: {
    style: Z
  },
  marginInlineEnd: {
    style: Z
  },
  marginBlock: {
    style: Z
  },
  marginBlockStart: {
    style: Z
  },
  marginBlockEnd: {
    style: Z
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
    style: $o
  },
  rowGap: {
    style: Mo
  },
  columnGap: {
    style: Io
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
    style: Es
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
}, Xd = Mg;
function jg(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Dg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fg() {
  function e(n, r, i, o) {
    const l = {
      [n]: r,
      theme: i
    }, u = o[n];
    if (!u)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: a,
      transform: h,
      style: f
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = Lo(i, a) || {};
    return f ? f(l) : _t(l, r, (g) => {
      let y = Zi(p, h, g);
      return g === y && typeof g == "string" && (y = Zi(p, h, `${n}${g === "default" ? "" : Qd(g)}`, g)), s === !1 ? y : {
        [s]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: o = {},
      nested: l
    } = n || {};
    if (!i)
      return null;
    const u = (r = o.unstable_sxConfig) != null ? r : Xd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const f = qy(o.breakpoints), p = Object.keys(f);
      let v = f;
      return Object.keys(h).forEach((g) => {
        const y = Dg(h[g], o);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = pr(v, e(g, y, o, u));
            else {
              const x = _t({
                theme: o
              }, y, (d) => ({
                [g]: d
              }));
              jg(x, y) ? v[g] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : v = pr(v, x);
            }
          else
            v = pr(v, e(g, y, o, u));
      }), !l && o.modularCssLayers ? {
        "@layer sx": ba(p, v)
      } : ba(p, v);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Jd = Fg();
Jd.filterProps = ["sx"];
const Ug = Jd;
function Bg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Hg = ["breakpoints", "palette", "spacing", "shape"];
function Wg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, l = yo(e, Hg), u = Xy(n), s = og(i);
  let a = Ji({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: he({
      mode: "light"
    }, r),
    spacing: s,
    shape: he({}, Zy, o)
  }, l);
  return a.applyStyles = Bg, a = t.reduce((h, f) => Ji(h, f), a), a.unstable_sxConfig = he({}, Xd, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(f) {
    return Ug({
      sx: f,
      theme: this
    });
  }, a;
}
function Vg(e) {
  return Object.keys(e).length === 0;
}
function xs(e = null) {
  const t = R.useContext(Br);
  return !t || Vg(t) ? e : t;
}
const Kg = Wg();
function Qg(e = Kg) {
  return xs(e);
}
function pl(e) {
  const t = Qy(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Gg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Qg(n), i = t && r[t] || r;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((l) => pl(typeof l == "function" ? l(i) : l)) : o = pl(o)), /* @__PURE__ */ N(Ky, {
    styles: o
  });
}
const Yg = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Xg = Yg;
let tc = 0;
function Jg(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (tc += 1, n(`mui-${tc}`));
  }, [t]), r;
}
const nc = yl["useId".toString()];
function Zg(e) {
  if (nc !== void 0) {
    const t = nc();
    return e ?? t;
  }
  return Jg(e);
}
const qg = /* @__PURE__ */ R.createContext(null), Zd = qg;
function qd() {
  return R.useContext(Zd);
}
const bg = typeof Symbol == "function" && Symbol.for, ev = bg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function tv(e, t) {
  return typeof t == "function" ? t(e) : he({}, e, t);
}
function nv(e) {
  const {
    children: t,
    theme: n
  } = e, r = qd(), i = R.useMemo(() => {
    const o = r === null ? n : tv(r, n);
    return o != null && (o[ev] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ N(Zd.Provider, {
    value: i,
    children: t
  });
}
const rv = ["value"], iv = /* @__PURE__ */ R.createContext();
function ov(e) {
  let {
    value: t
  } = e, n = yo(e, rv);
  return /* @__PURE__ */ N(iv.Provider, he({
    value: t ?? !0
  }, n));
}
const lv = /* @__PURE__ */ R.createContext(void 0);
function uv({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ N(lv.Provider, {
    value: e,
    children: t
  });
}
function sv(e) {
  const t = xs(), n = Zg() || "", {
    modularCssLayers: r
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? i = "" : typeof r == "string" ? i = r.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Xg(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const l = o.firstChild;
    if (i) {
      var u;
      if (l && (u = l.hasAttribute) != null && u.call(l, "data-mui-layer-order") && l.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = i, o.prepend(a);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [i, n]), i ? /* @__PURE__ */ N(Gg, {
    styles: i
  }) : null;
}
const rc = {};
function ic(e, t, n, r = !1) {
  return R.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(i), l = e ? he({}, t, {
        [e]: o
      }) : o;
      return r ? () => l : l;
    }
    return e ? he({}, t, {
      [e]: n
    }) : he({}, t, n);
  }, [e, t, n, r]);
}
function av(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, i = xs(rc), o = qd() || rc, l = ic(r, i, n), u = ic(r, o, n, !0), s = l.direction === "rtl", a = sv(l);
  return /* @__PURE__ */ N(nv, {
    theme: u,
    children: /* @__PURE__ */ N(Br.Provider, {
      value: l,
      children: /* @__PURE__ */ N(ov, {
        value: s,
        children: /* @__PURE__ */ $(uv, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const cv = ["theme"];
function fv(e) {
  let {
    theme: t
  } = e, n = yo(e, cv);
  const r = t[Da];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = he({}, r, {
    vars: null
  }) : t && !t.vars && (i = he({}, t, {
    vars: null
  }))), /* @__PURE__ */ N(av, he({}, n, {
    themeId: r ? Da : void 0,
    theme: i
  }));
}
const Ae = [
  {
    id: "minors",
    label: "Children / minors",
    shortLabel: "Children",
    optionKey: "detectMinors",
    description: "Flag if people who appear to be minors are visible.",
    kind: "flag"
  },
  {
    id: "animals",
    label: "Animals",
    shortLabel: "Animals",
    optionKey: "detectAnimals",
    description: "Flag if any animal is visible.",
    kind: "flag"
  },
  {
    id: "culturalSensitive",
    label: "Cultural or sensitive imagery",
    shortLabel: "Cultural",
    optionKey: "detectCulturalSensitive",
    description: "Flag religious, cultural, memorial, or politically sensitive scenes for review.",
    kind: "flag"
  },
  {
    id: "firearmsOffensive",
    label: "Firearms or offensive items",
    shortLabel: "Offensive",
    optionKey: "detectFirearmsOffensive",
    description: "Flag firearms, other weapons, hate symbols, or graphic violence.",
    kind: "flag"
  },
  {
    id: "whatYouSee",
    label: "Tell me what you see",
    shortLabel: "Scene",
    optionKey: "detectWhatYouSee",
    description: "Describe the subject, setting, and notable objects. This does not flag the image.",
    kind: "describe"
  },
  {
    id: "medical",
    label: "Medical or pharmaceuticals",
    shortLabel: "Medical",
    optionKey: "detectMedical",
    description: "Flag medicines, devices, pharmaceutical packaging, or a clinical setting.",
    kind: "flag"
  },
  {
    id: "logos",
    label: "Logo detection",
    shortLabel: "Logos",
    optionKey: "detectLogos",
    description: "Flag a logo, brand mark, or wordmark, and name it when recognized.",
    kind: "flag"
  },
  {
    id: "nudityGraphic",
    label: "Nudity or graphic content",
    shortLabel: "Graphic",
    optionKey: "detectNudityGraphic",
    description: "Flag nudity or graphic content such as gore. The reason stays non-graphic.",
    kind: "flag"
  }
], dv = [
  "apiBaseUrl",
  "apiToken",
  "nameProperty",
  "fileNameProperty",
  "descriptionProperty",
  "detectionReportProperty",
  "detectionStatusProperty",
  "detectionAnalyzedAtProperty"
], pv = [
  "detectMinors",
  "detectAnimals",
  "detectCulturalSensitive",
  "detectFirearmsOffensive",
  "detectWhatYouSee",
  "detectMedical",
  "detectLogos",
  "detectNudityGraphic",
  "showOverlay"
], mv = ["config", "settings", "json", "componentOptions"], hv = [
  /^optional-/i,
  /^your[-_]/i,
  /^https?:\/\/your/i,
  /^same-as-/i
];
function bd(e) {
  const t = e.trim();
  return t ? hv.some((n) => n.test(t)) : !0;
}
function ep(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return !1;
  const t = e;
  return typeof t.setEntityId == "function" || typeof t.setCulture == "function" || "entityId" in t && "culture" in t && "editingMode" in t;
}
function $r(e) {
  if (e != null) {
    if (typeof e == "string")
      return e.trim() || void 0;
    if (typeof e == "number" || typeof e == "boolean")
      return String(e);
    if (Array.isArray(e)) {
      for (const t of e) {
        const n = $r(t);
        if (n)
          return n;
      }
      return;
    }
    if (typeof e == "object") {
      const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us"];
      for (const r of n)
        if (r in t) {
          const i = $r(t[r]);
          if (i)
            return i;
        }
    }
  }
}
function tp(e) {
  if (typeof e == "boolean")
    return e;
  if (typeof e == "number")
    return e === 1 ? !0 : e === 0 ? !1 : void 0;
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "true" || t === "yes" || t === "1" ? !0 : t === "false" || t === "no" || t === "0" ? !1 : void 0;
  }
  if (e && typeof e == "object" && !Array.isArray(e)) {
    const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us"];
    for (const r of n)
      if (r in t) {
        const i = tp(t[r]);
        if (i != null)
          return i;
      }
  }
}
function oc(e, ...t) {
  for (const n of t)
    for (const [r, i] of Object.entries(e))
      if (r.toLowerCase() === n.toLowerCase()) {
        const o = $r(i);
        if (o && !bd(o))
          return o;
      }
}
function yv(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === t.toLowerCase())
      return tp(r);
}
function gv(e) {
  for (const [t, n] of Object.entries(e)) {
    if (t.toLowerCase() !== "metadataproperties")
      continue;
    if (Array.isArray(n)) {
      const i = n.map((o) => $r(o)).filter((o) => !!o);
      if (i.length > 0)
        return i.join(", ");
    }
    const r = $r(n);
    if (r && !bd(r))
      return r;
  }
}
function vv(e) {
  const t = {};
  for (const i of dv) {
    const o = oc(e, i);
    o && (t[i] = o);
  }
  for (const i of pv) {
    const o = yv(e, i);
    o != null && (t[i] = o);
  }
  const n = oc(e, "detectionReportStorage");
  n && (t.detectionReportStorage = n.trim().toLowerCase() === "string" ? "string" : "json");
  const r = gv(e);
  return r && (t.metadataProperties = r), t;
}
function du(...e) {
  return e.reduce((t, n) => n ? {
    ...t,
    ...Object.fromEntries(
      Object.entries(n).filter(([, r]) => r != null && r !== "")
    )
  } : t, {});
}
function Ei(e) {
  if (!e || ep(e))
    return;
  if (typeof e == "string") {
    const r = e.trim();
    if (!r)
      return;
    try {
      return Ei(JSON.parse(r));
    } catch {
      console.error("[CHImageDetection] Options must be valid JSON when provided as a string.");
      return;
    }
  }
  if (typeof e != "object" || Array.isArray(e))
    return;
  const t = e;
  let n = vv(t);
  for (const r of mv) {
    const i = t[r];
    if (typeof i == "string" && i.trim())
      try {
        const o = Ei(JSON.parse(i));
        n = du(n, o);
      } catch {
      }
    else
      i && typeof i == "object" && (n = du(n, Ei(i)));
  }
  return n;
}
function wv(e, t) {
  const n = [];
  (t == null ? void 0 : t.config) != null && n.push(t.config), e != null && !ep(e) && n.push(e), t && n.push(t);
  const r = du(...n.map((i) => Ei(i)));
  return Object.keys(r).length > 0 ? r : void 0;
}
function Sv(e) {
  var n, r;
  const t = [];
  return (n = e == null ? void 0 : e.apiBaseUrl) != null && n.trim() || t.push("apiBaseUrl"), (r = e == null ? void 0 : e.apiToken) != null && r.trim() || t.push("apiToken"), t;
}
function kv(e) {
  return e && {
    ...e,
    apiToken: e.apiToken ? "[set]" : void 0
  };
}
function _v(e) {
  return e != null && e.trim() ? e.split(/[,;\n]/).map((t) => t.trim()).filter(Boolean) : [];
}
function lc(e) {
  const t = {};
  for (const n of Ae)
    t[n.id] = (e == null ? void 0 : e[n.optionKey]) !== !1;
  return t;
}
function Cv(e) {
  return Ae.filter((t) => e[t.id]).map((t) => t.id);
}
const Ev = /\.(pdf|docx?|pptx?|xlsx?|mp4|mov|avi|mkv|webm|mp3|wav|zip|txt|html?)$/i, xv = /\.(jpe?g|png|gif|webp|tiff?|bmp|heic|heif|svg)$/i;
function uc(e) {
  const t = (e.mimeType || "").toLowerCase(), n = (e.fileName || "").toLowerCase();
  return t.startsWith("image/") || xv.test(n) ? !1 : !!(t.startsWith("video/") || t.startsWith("audio/") || t.startsWith("application/") || t.startsWith("text/") || Ev.test(n));
}
const sc = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview",
  "medium"
], ac = [
  "downloadOriginal",
  "original",
  "download",
  "high"
], Pv = ["FileName", "fileName", "Title", "title", "Name", "name"], Nv = ["FileName", "fileName"], Tv = [
  "Description",
  "description",
  "AssetDescription",
  "Summary",
  "summary"
];
function pu(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function jo(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"];
  for (const i of n)
    if (i in t) {
      const o = jo(t[i]);
      if (typeof o == "string" && o.trim() || o != null && typeof o != "object")
        return o;
    }
  return Object.values(t).find(
    (i) => typeof i == "string" && i.trim() || typeof i == "number" || typeof i == "boolean"
  );
}
function bn(e, t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = jo(e[n]);
    if (r == null || typeof r == "object")
      continue;
    const i = String(r).trim();
    if (i && i !== "[object Object]")
      return i;
  }
  return "";
}
function mu(e, t) {
  var r;
  if (e == null || typeof e != "object")
    return;
  const n = e;
  for (const i of t) {
    const o = n[i];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const l = pu(((r = o[0]) == null ? void 0 : r.href) ?? o[0]);
    if (l)
      return l;
  }
}
function cc(e, t, n) {
  var i, o, l, u, s, a;
  for (const h of t)
    try {
      const f = (i = e == null ? void 0 : e.getRendition) == null ? void 0 : i.call(e, h), p = pu((l = (o = f == null ? void 0 : f.items) == null ? void 0 : o[0]) == null ? void 0 : l.href);
      if (p)
        return p;
    } catch {
    }
  if (Array.isArray(e == null ? void 0 : e.renditions))
    for (const h of t) {
      const f = e.renditions.find((v) => (v == null ? void 0 : v.name) === h), p = pu((s = (u = f == null ? void 0 : f.items) == null ? void 0 : u[0]) == null ? void 0 : s.href);
      if (p)
        return p;
    }
  const r = mu(e == null ? void 0 : e.renditions, t);
  if (r)
    return r;
  for (const h of n)
    try {
      const f = (a = e == null ? void 0 : e.getPublicLink) == null ? void 0 : a.call(e, h);
      if (typeof f == "string" && f.trim())
        return f.trim();
    } catch {
    }
}
async function Ov(e, t) {
  var n;
  if (!((n = e == null ? void 0 : e.raw) != null && n.getAsync))
    return null;
  try {
    const r = await e.raw.getAsync(`/api/entities/${t}`);
    if (r.isSuccessStatusCode && r.content)
      return r.content;
  } catch {
  }
  return null;
}
function qi(e) {
  if (e == null)
    return "";
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") {
    const t = String(e).trim();
    return t === "[object Object]" ? "" : t;
  }
  if (typeof e == "object") {
    const t = jo(e);
    if (t != null && t !== e)
      return qi(t);
  }
  return "";
}
function Rv(e, t) {
  return e ? (t.length > 0 ? t : Object.keys(e).slice(0, 12)).map((r) => {
    const i = qi(jo(e[r]));
    return i ? { key: r, value: i } : null;
  }).filter((r) => r != null) : [];
}
function Lv(e) {
  var r;
  const t = qi((r = e == null ? void 0 : e.definition) == null ? void 0 : r.name);
  if (t)
    return t;
  const n = qi(e == null ? void 0 : e.definitionName);
  return n || (typeof (e == null ? void 0 : e.definition) == "string" ? e.definition.trim() : "");
}
async function zv(e, t, n) {
  var y;
  const r = String(((y = t == null ? void 0 : t.systemProperties) == null ? void 0 : y.id) ?? (t == null ? void 0 : t.id) ?? "").trim();
  if (!r)
    return null;
  const i = (t == null ? void 0 : t.properties) ?? {}, o = n.nameProperty ? [n.nameProperty] : Pv, l = n.fileNameProperty ? [n.fileNameProperty] : Nv, u = n.descriptionProperty ? [n.descriptionProperty] : Tv, s = _v(n.metadataProperties), a = bn(i, l) || void 0, h = bn(i, ["MimeType", "mimeType", "ContentType", "contentType"]) || void 0;
  let f = cc(t, sc, ["preview", "thumbnail"]), p = cc(t, ac, [
    "downloadOriginal",
    "original",
    "download"
  ]);
  if (!f || !p) {
    const x = await Ov(e, r);
    x && (f || (f = mu(x.renditions, sc)), p || (p = mu(x.renditions, ac)));
  }
  const v = f || p, g = bn(i, o) || a || `Asset ${r}`;
  return {
    id: r,
    name: g,
    fileName: a,
    mimeType: h,
    description: bn(i, u) || void 0,
    previewUrl: f,
    downloadUrl: p,
    fileUrl: v,
    definition: bn(i, ["Definition", "definition"]) || Lv(t) || void 0,
    metadata: Rv(i, s)
  };
}
function Av(e) {
  return e.replace(/\/$/, "");
}
async function $v(e, t, n) {
  const r = `${Av(e.apiBaseUrl)}${t}`, i = await fetch(r, {
    ...n,
    headers: {
      Authorization: `Bearer ${e.apiToken}`,
      "Content-Type": "application/json",
      ...(n == null ? void 0 : n.headers) ?? {}
    }
  }), o = await i.json();
  if (!i.ok)
    throw new Error(o.error ?? `Request failed (${i.status})`);
  return o;
}
async function Iv(e, t) {
  return (await $v(
    e,
    "/api/image-detection/analyze",
    {
      method: "POST",
      body: JSON.stringify(t)
    }
  )).report;
}
const Mv = new Set(Ae.map((e) => e.id));
function np(e) {
  return e === "clear" || e === "flagged";
}
function rp(e) {
  return typeof e == "string" && Mv.has(e);
}
function jv(e, t) {
  const n = [e.entitydefinition, e.entityDefinition, e.definition];
  for (const r of n) {
    if (r == null || typeof r != "object")
      continue;
    const i = r.href;
    if (typeof i == "string" && i.trim())
      return Dv(i.trim());
  }
  if (t != null && t.trim())
    return `/api/entitydefinitions/${t.trim()}`;
  throw new Error("Could not resolve entity definition for Content Hub update.");
}
function Dv(e) {
  try {
    if (e.startsWith("/"))
      return e;
    const t = new URL(e);
    return `${t.pathname}${t.search}`;
  } catch {
    return e;
  }
}
function Fv(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return null;
  const t = e, n = (u) => {
    const s = Number(u);
    if (!Number.isFinite(s))
      return null;
    const a = s >= 0 && s <= 1 ? s * 100 : s;
    return a < 0 || a > 100 ? null : a;
  }, r = n(t.x), i = n(t.y), o = n(t.width), l = n(t.height);
  return r == null || i == null || o == null || l == null || o < 2 || l < 2 ? null : {
    x: r,
    y: i,
    width: Math.min(o, 100 - r),
    height: Math.min(l, 100 - i)
  };
}
function Uv(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return null;
  const t = e;
  if (!rp(t.id))
    return null;
  const n = Ae.find((o) => o.id === t.id), r = Number(t.confidence), i = Number.isFinite(r) ? Math.max(0, Math.min(100, r)) : 0;
  return {
    id: t.id,
    label: typeof t.label == "string" && t.label.trim() ? t.label : (n == null ? void 0 : n.label) ?? t.id,
    detected: t.detected === !0,
    confidence: i,
    summary: typeof t.summary == "string" ? t.summary : "",
    regions: Array.isArray(t.regions) ? t.regions.map((o) => Fv(o)).filter((o) => o != null).slice(0, 6) : []
  };
}
function Ps(e) {
  let t = hu(e);
  if (typeof t == "string") {
    const o = t.trim();
    if (!o)
      return null;
    try {
      t = JSON.parse(o);
    } catch {
      return null;
    }
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    return null;
  const n = t;
  if (!np(n.status)) {
    const o = hu(n);
    return o && o !== t && typeof o == "object" && !Array.isArray(o) ? Ps(o) : null;
  }
  const r = Array.isArray(n.findings) ? n.findings.map((o) => Uv(o)).filter((o) => o != null) : [], i = Array.isArray(n.checksRun) ? n.checksRun.filter(rp) : r.map((o) => o.id);
  return {
    status: n.status,
    summary: typeof n.summary == "string" ? n.summary : "",
    findings: r,
    checksRun: i,
    analyzedAt: typeof n.analyzedAt == "string" && n.analyzedAt.trim() ? n.analyzedAt : (/* @__PURE__ */ new Date()).toISOString(),
    imageAttached: typeof n.imageAttached == "boolean" ? n.imageAttached : void 0,
    imageUploadError: typeof n.imageUploadError == "string" ? n.imageUploadError : void 0
  };
}
function hu(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  if (np(t.status))
    return e;
  const n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"];
  for (const r of n)
    if (r in t)
      return hu(t[r]);
  return e;
}
function Bv(e, t) {
  if (!t.trim())
    return;
  try {
    if (typeof (e == null ? void 0 : e.getPropertyValue) == "function") {
      const r = e.getPropertyValue(t);
      if (r != null)
        return r;
    }
  } catch {
  }
  const n = (e == null ? void 0 : e.properties) ?? {};
  for (const [r, i] of Object.entries(n))
    if (r.toLowerCase() === t.toLowerCase())
      return i;
}
function Hv(e, t) {
  return Ps(Bv(e, t));
}
function Wv(e, t) {
  if (!(!e || !t.trim())) {
    for (const [n, r] of Object.entries(e))
      if (n.toLowerCase() === t.toLowerCase())
        return r;
  }
}
async function Vv(e, t, n) {
  var o, l;
  const r = Hv(t, n);
  if (r)
    return r;
  const i = String(((o = t == null ? void 0 : t.systemProperties) == null ? void 0 : o.id) ?? (t == null ? void 0 : t.id) ?? "").trim();
  if (!i || !((l = e == null ? void 0 : e.raw) != null && l.getAsync))
    return null;
  try {
    const u = await e.raw.getAsync(
      `/api/entities/${i}`
    );
    return !u.isSuccessStatusCode || !u.content ? null : Ps(
      Wv(u.content.properties, n)
    );
  } catch {
    return null;
  }
}
async function Kv(e, t) {
  var r;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is not available.");
  const n = await e.raw.getAsync(
    `/api/entities/${t}`
  );
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error(
      `Could not load asset entity ${t} for saving (HTTP ${n.statusCode ?? "unknown"}).`
    );
  return n.content;
}
function Qv(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return !1;
  const t = e;
  return "Invariant" in t || "invariant" in t || "en-US" in t || "en-us" in t;
}
function ml(e, t) {
  if (e) {
    for (const [n, r] of Object.entries(e))
      if (n.toLowerCase() === t.toLowerCase())
        return r;
  }
}
function fc(e, t) {
  return Qv(t) ? { Invariant: e } : e;
}
function Gv(e) {
  if (e == null)
    return "";
  if (typeof e == "string") {
    const t = e.trim();
    return t ? t.startsWith("<") ? "HTML error page from Content Hub" : t.slice(0, 300) : "";
  }
  if (typeof e == "object") {
    const t = e, n = [t.Message, t.message, t.title, t.detail, t.error];
    for (const r of n)
      if (typeof r == "string" && r.trim())
        return r.trim();
    try {
      return JSON.stringify(e).slice(0, 300);
    } catch {
      return "";
    }
  }
  return "";
}
function Yv(e, t, n) {
  var p, v;
  const r = t.reportProperty.trim(), i = (p = t.statusProperty) == null ? void 0 : p.trim(), o = (v = t.analyzedAtProperty) == null ? void 0 : v.trim(), l = t.reportStorage === "string", u = ml(n, r), s = i ? ml(n, i) : void 0, a = o ? ml(n, o) : void 0, h = (g, y) => {
    const x = {
      [r]: g
    };
    return i && (x[i] = y === "invariant" ? { Invariant: e.status } : fc(e.status, s)), o && (x[o] = y === "invariant" ? { Invariant: e.analyzedAt } : fc(e.analyzedAt, a)), x;
  }, f = [];
  return l ? (f.push({
    label: "report-string-plain",
    properties: { [r]: JSON.stringify(e) }
  }), f.push({
    label: "report-string-invariant",
    properties: { [r]: { Invariant: JSON.stringify(e) } }
  })) : (f.push({
    label: "report-json-only",
    properties: { [r]: e }
  }), f.push({
    label: "report-json-with-plain-companions",
    properties: h(e, "plain")
  }), f.push({
    label: "report-json-invariant-object",
    properties: { [r]: { Invariant: e } }
  }), f.push({
    label: "report-json-stringified",
    properties: { [r]: JSON.stringify(e) }
  })), f.push({
    label: "report-with-invariant-companions",
    properties: h(
      l ? { Invariant: JSON.stringify(e) } : e,
      "invariant"
    )
  }), !l && typeof u == "string" && f.unshift({
    label: "report-match-existing-string",
    properties: { [r]: JSON.stringify(e) }
  }), f;
}
async function Xv(e, t, n, r) {
  var a;
  if (!((a = e == null ? void 0 : e.raw) != null && a.putAsync))
    throw new Error("Content Hub client is not available for saving detection results.");
  if (!r.reportProperty.trim())
    throw new Error("detectionReportProperty is not configured.");
  const o = await Kv(e, t), l = jv(o, r.definitionName), u = Yv(n, r, o.properties), s = [];
  for (const h of u) {
    const f = {
      entitydefinition: {
        href: l
      },
      properties: h.properties
    }, p = await e.raw.putAsync(
      `/api/entities/${t}`,
      f
    );
    if (p.isSuccessStatusCode)
      return;
    const v = p.statusCode ?? "unknown", g = Gv(p.content);
    s.push(`${h.label} → HTTP ${v}${g ? ` (${g})` : ""}`);
  }
  throw new Error(
    `Failed to save image detection report to Content Hub after ${u.length} attempts: ${s.join("; ")}`
  );
}
const hl = [
  "Sending the image to the CodeMie detection assistant…",
  "Looking through the frame for the checks you selected…",
  "Reading what is actually in the picture…",
  "Comparing the image against the selected detection rules…",
  "Waiting on a structured read of the image…",
  "Almost there — collecting findings…"
];
function Jv(e, t = 2800) {
  const [n, r] = R.useState(0);
  return R.useEffect(() => {
    if (!e) {
      r(0);
      return;
    }
    const i = () => {
      r((l) => {
        if (hl.length <= 1)
          return 0;
        let u = l;
        for (; u === l; )
          u = Math.floor(Math.random() * hl.length);
        return u;
      });
    }, o = window.setInterval(i, t);
    return () => window.clearInterval(o);
  }, [e, t]), hl[n];
}
function dc({
  active: e,
  label: t = "Loading…",
  className: n = "ch-image-detection__empty"
}) {
  const r = Jv(e);
  return /* @__PURE__ */ N("div", { className: n, role: "status", "aria-live": "polite", "aria-busy": "true", children: /* @__PURE__ */ $("div", { className: "ch-image-detection__loading", children: [
    /* @__PURE__ */ N("div", { className: "ch-image-detection__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ N("p", { className: "ch-image-detection__loading-label", children: e ? r : t })
  ] }) });
}
const yu = "ImageDetectionReport";
function Zv(e) {
  var r, i, o, l, u, s, a, h, f, p;
  const t = (r = e == null ? void 0 : e.apiBaseUrl) == null ? void 0 : r.trim(), n = (i = e == null ? void 0 : e.apiToken) == null ? void 0 : i.trim();
  return !t || !n ? null : {
    apiBaseUrl: t,
    apiToken: n,
    detectMinors: e == null ? void 0 : e.detectMinors,
    detectAnimals: e == null ? void 0 : e.detectAnimals,
    detectCulturalSensitive: e == null ? void 0 : e.detectCulturalSensitive,
    detectFirearmsOffensive: e == null ? void 0 : e.detectFirearmsOffensive,
    detectWhatYouSee: e == null ? void 0 : e.detectWhatYouSee,
    detectMedical: e == null ? void 0 : e.detectMedical,
    detectLogos: e == null ? void 0 : e.detectLogos,
    detectNudityGraphic: e == null ? void 0 : e.detectNudityGraphic,
    showOverlay: (e == null ? void 0 : e.showOverlay) !== !1,
    nameProperty: (o = e == null ? void 0 : e.nameProperty) == null ? void 0 : o.trim(),
    fileNameProperty: (l = e == null ? void 0 : e.fileNameProperty) == null ? void 0 : l.trim(),
    descriptionProperty: (u = e == null ? void 0 : e.descriptionProperty) == null ? void 0 : u.trim(),
    metadataProperties: (s = e == null ? void 0 : e.metadataProperties) == null ? void 0 : s.trim(),
    detectionReportProperty: ((a = e == null ? void 0 : e.detectionReportProperty) == null ? void 0 : a.trim()) || yu,
    detectionReportStorage: ((h = e == null ? void 0 : e.detectionReportStorage) == null ? void 0 : h.trim()) === "string" ? "string" : "json",
    detectionStatusProperty: (f = e == null ? void 0 : e.detectionStatusProperty) == null ? void 0 : f.trim(),
    detectionAnalyzedAtProperty: (p = e == null ? void 0 : e.detectionAnalyzedAtProperty) == null ? void 0 : p.trim()
  };
}
function qv(e) {
  return new Date(e).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function ip(e) {
  var t;
  return ((t = Ae.find((n) => n.id === e.id)) == null ? void 0 : t.kind) === "describe";
}
function op(e) {
  return e.findings.some((t) => !ip(t));
}
function bv(e) {
  return op(e) ? e.status === "flagged" ? "Flagged" : "Clear" : "Reviewed";
}
function e0(e) {
  return op(e) ? e.status : "reviewed";
}
function t0(e, t) {
  if (!t.checksRun.includes(e))
    return "unchecked";
  const n = Ae.find((i) => i.id === e);
  if ((n == null ? void 0 : n.kind) === "describe")
    return "describe";
  const r = t.findings.find((i) => i.id === e);
  return r != null && r.detected ? "flagged" : "clear";
}
function n0(e) {
  switch (e) {
    case "flagged":
      return "Detected";
    case "clear":
      return "Clear";
    case "describe":
      return "Described";
    default:
      return "Not checked";
  }
}
function r0({
  finding: e,
  highlighted: t
}) {
  return ip(e) ? /* @__PURE__ */ $(
    "article",
    {
      id: `ch-id-finding-${e.id}`,
      className: `ch-image-detection__finding ch-image-detection__finding--describe${t ? " ch-image-detection__finding--highlight" : ""}`,
      children: [
        /* @__PURE__ */ $("div", { className: "ch-image-detection__finding-header", children: [
          /* @__PURE__ */ N("h4", { className: "ch-image-detection__finding-title", children: e.label }),
          /* @__PURE__ */ N("span", { className: "ch-image-detection__badge ch-image-detection__badge--muted", children: "Description" })
        ] }),
        e.summary ? /* @__PURE__ */ N("p", { className: "ch-image-detection__finding-copy", children: e.summary }) : null
      ]
    }
  ) : /* @__PURE__ */ $(
    "article",
    {
      id: `ch-id-finding-${e.id}`,
      className: `ch-image-detection__finding ch-image-detection__finding--${e.detected ? "flagged" : "clear"}${t ? " ch-image-detection__finding--highlight" : ""}`,
      children: [
        /* @__PURE__ */ $("div", { className: "ch-image-detection__finding-header", children: [
          /* @__PURE__ */ N("h4", { className: "ch-image-detection__finding-title", children: e.label }),
          /* @__PURE__ */ N(
            "span",
            {
              className: `ch-image-detection__badge ${e.detected ? "" : "ch-image-detection__badge--clear"}`,
              children: e.detected ? "Detected" : "Not detected"
            }
          ),
          /* @__PURE__ */ $("span", { className: "ch-image-detection__badge ch-image-detection__badge--muted", children: [
            Math.round(e.confidence),
            "% confidence"
          ] })
        ] }),
        e.summary ? /* @__PURE__ */ N("p", { className: "ch-image-detection__finding-copy", children: e.summary }) : null
      ]
    }
  );
}
function i0({ client: e, entity: t, options: n }) {
  const r = R.useMemo(() => Zv(n), [n]), i = R.useMemo(() => Sv(n), [n]), [o, l] = R.useState(null), [u, s] = R.useState(!1), [a, h] = R.useState(null), [f, p] = R.useState(null), [v, g] = R.useState(null), [y, x] = R.useState(!1), [d, c] = R.useState(null), [m, w] = R.useState("idle"), [_, C] = R.useState(null), [k, T] = R.useState(
    () => lc(n)
  ), [W, A] = R.useState(!1), [se, Et] = R.useState(!1), [dt, Bn] = R.useState(!0), [Vr, Hn] = R.useState(null), Wn = Ae.map(
    (O) => {
      var B;
      return `${O.id}:${String((B = r ?? n) == null ? void 0 : B[O.optionKey])}`;
    }
  ).join("|");
  R.useEffect(() => {
    T(lc(r ?? n));
  }, [Wn]), R.useEffect(() => {
    Bn((r == null ? void 0 : r.showOverlay) !== !1);
  }, [r == null ? void 0 : r.showOverlay]), R.useEffect(() => {
    if (!r) {
      l(null), p(null), g(null);
      return;
    }
    let O = !1;
    return (async () => {
      s(!0), h(null), w("idle"), C(null);
      try {
        const re = await zv(e, t, r);
        if (O)
          return;
        if (l(re), !re) {
          h("No asset entity found on this page."), p(null), g(null);
          return;
        }
        const He = await Vv(
          e,
          t,
          r.detectionReportProperty || yu
        );
        if (O)
          return;
        He ? (p(He), g("saved"), He.checksRun.length > 0 && T((Do) => {
          const Ns = { ...Do };
          for (const Ts of Ae)
            Ns[Ts.id] = He.checksRun.includes(Ts.id);
          return Ns;
        })) : (p(null), g(null));
      } catch (re) {
        O || (l(null), p(null), g(null), h(re instanceof Error ? re.message : "Could not load asset context."));
      } finally {
        O || s(!1);
      }
    })(), () => {
      O = !0;
    };
  }, [e, t, r]);
  const E = R.useMemo(() => Cv(k), [k]), z = Ae.every((O) => k[O.id]), L = o ? uc(o) : !1, G = () => {
    const O = !z, B = {};
    for (const re of Ae)
      B[re.id] = O;
    T(B);
  }, ne = (O) => {
    T((B) => ({
      ...B,
      [O]: !B[O]
    }));
  }, ln = R.useCallback(async () => {
    if (!(!r || !o || E.length === 0 || uc(o))) {
      x(!0), c(null), w("idle"), C(null);
      try {
        const O = await Iv(r, {
          asset: o,
          checks: E
        });
        p(O), g("fresh"), w("saving");
        try {
          await Xv(e, o.id, O, {
            reportProperty: r.detectionReportProperty || yu,
            reportStorage: r.detectionReportStorage,
            statusProperty: r.detectionStatusProperty,
            analyzedAtProperty: r.detectionAnalyzedAtProperty,
            definitionName: o.definition
          }), w("saved");
        } catch (B) {
          w("error"), C(
            B instanceof Error ? B.message : "Could not save detection report to Content Hub."
          );
        }
      } catch (O) {
        c(O instanceof Error ? O.message : "Image detection failed.");
      } finally {
        x(!1);
      }
    }
  }, [o, E, e, r]);
  return r ? /* @__PURE__ */ $("div", { className: "ch-image-detection", children: [
    /* @__PURE__ */ $("header", { className: "ch-image-detection__header", children: [
      /* @__PURE__ */ $("div", { children: [
        /* @__PURE__ */ N("p", { className: "ch-image-detection__eyebrow", children: "Content Hub" }),
        /* @__PURE__ */ N("h2", { className: "ch-image-detection__title", children: "Image detection" })
      ] }),
      /* @__PURE__ */ $(
        "details",
        {
          className: "ch-image-detection__disclosure",
          open: W,
          onToggle: (O) => A(O.currentTarget.open),
          children: [
            /* @__PURE__ */ $("summary", { className: "ch-image-detection__summary", children: [
              "Checks",
              /* @__PURE__ */ $("span", { children: [
                E.length,
                " selected"
              ] })
            ] }),
            /* @__PURE__ */ $("fieldset", { className: "ch-image-detection__checks", disabled: y || u, children: [
              /* @__PURE__ */ $("label", { className: "ch-image-detection__check ch-image-detection__check--all", children: [
                /* @__PURE__ */ N("input", { type: "checkbox", checked: z, onChange: G }),
                /* @__PURE__ */ N("span", { children: "All" })
              ] }),
              Ae.map((O) => /* @__PURE__ */ $("label", { className: "ch-image-detection__check", children: [
                /* @__PURE__ */ N(
                  "input",
                  {
                    type: "checkbox",
                    checked: k[O.id],
                    onChange: () => ne(O.id)
                  }
                ),
                /* @__PURE__ */ $("span", { children: [
                  O.label,
                  /* @__PURE__ */ N("small", { children: O.description })
                ] })
              ] }, O.id))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ N(
        "button",
        {
          type: "button",
          className: "ch-image-detection__primary-button",
          onClick: () => void ln(),
          disabled: !o || y || u || E.length === 0 || L,
          children: y ? "Analyzing…" : f ? "Re-run detection" : "Analyze image"
        }
      ),
      E.length === 0 ? /* @__PURE__ */ N("p", { className: "ch-image-detection__hint", children: "Select at least one check." }) : null
    ] }),
    /* @__PURE__ */ N("div", { className: "ch-image-detection__body", children: /* @__PURE__ */ $("section", { className: "ch-image-detection__column", children: [
      o && !u && !L && (o.previewUrl || o.fileUrl) ? /* @__PURE__ */ $("figure", { className: "ch-image-detection__figure", children: [
        /* @__PURE__ */ $("div", { className: "ch-image-detection__frame", children: [
          /* @__PURE__ */ N("img", { src: o.previewUrl || o.fileUrl, alt: o.name }),
          dt && r.showOverlay !== !1 && f ? f.findings.flatMap(
            (O) => O.detected ? (O.regions ?? []).map((B, re) => {
              var He;
              return /* @__PURE__ */ N(
                "span",
                {
                  className: "ch-image-detection__mark",
                  style: {
                    left: `${B.x}%`,
                    top: `${B.y}%`,
                    width: `${B.width}%`,
                    height: `${B.height}%`
                  },
                  children: /* @__PURE__ */ N("span", { className: "ch-image-detection__mark-label", children: ((He = Ae.find((Do) => Do.id === O.id)) == null ? void 0 : He.shortLabel) ?? O.label })
                },
                `${O.id}-${re}`
              );
            }) : []
          ) : null
        ] }),
        /* @__PURE__ */ N("figcaption", { className: "ch-image-detection__caption", children: o.name }),
        f && r.showOverlay !== !1 ? /* @__PURE__ */ $("label", { className: "ch-image-detection__overlay-toggle", children: [
          /* @__PURE__ */ N(
            "input",
            {
              type: "checkbox",
              checked: dt,
              onChange: (O) => Bn(O.target.checked)
            }
          ),
          "Show marks on image"
        ] }) : null,
        f && dt && r.showOverlay !== !1 ? /* @__PURE__ */ N("p", { className: "ch-image-detection__hint", children: f.findings.some((O) => {
          var B;
          return (((B = O.regions) == null ? void 0 : B.length) ?? 0) > 0;
        }) ? "Marks are approximate." : "No location marks for this result." }) : null
      ] }) : null,
      u ? /* @__PURE__ */ N(dc, { active: !0, label: "Loading…" }) : null,
      !u && a ? /* @__PURE__ */ $("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ N("h3", { children: "Asset unavailable" }),
        /* @__PURE__ */ N("p", { children: a })
      ] }) : null,
      !u && !a && L ? /* @__PURE__ */ $("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ N("h3", { children: "Image required" }),
        /* @__PURE__ */ N("p", { children: "Image detection runs on image assets. This file is not an image." })
      ] }) : null,
      !u && !a && !L && y ? /* @__PURE__ */ N(dc, { active: !0, label: "Analyzing…" }) : null,
      !u && !a && !L && !y && d ? /* @__PURE__ */ $("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ N("h3", { children: "Analysis failed" }),
        /* @__PURE__ */ N("p", { children: d })
      ] }) : null,
      !u && !a && !L && !y && !d && !f ? /* @__PURE__ */ $("div", { className: "ch-image-detection__empty", children: [
        /* @__PURE__ */ N("h3", { children: "Ready to analyze" }),
        /* @__PURE__ */ $("p", { children: [
          "Choose the checks above, then click ",
          /* @__PURE__ */ N("strong", { children: "Analyze image" }),
          "."
        ] })
      ] }) : null,
      !y && !L && f ? /* @__PURE__ */ $("div", { className: "ch-image-detection__report", children: [
        /* @__PURE__ */ $("div", { className: "ch-image-detection__report-header", children: [
          /* @__PURE__ */ N(
            "span",
            {
              className: `ch-image-detection__status ch-image-detection__status--${e0(f)}`,
              children: bv(f)
            }
          ),
          /* @__PURE__ */ N("p", { className: "ch-image-detection__report-summary", children: f.summary }),
          /* @__PURE__ */ $("p", { className: "ch-image-detection__report-meta", children: [
            v === "saved" ? "Saved result · " : "",
            "Analyzed ",
            qv(f.analyzedAt),
            f.imageAttached ? " · Visual review included" : f.imageUploadError ? " · Image unavailable" : ""
          ] }),
          m === "saving" ? /* @__PURE__ */ N("p", { className: "ch-image-detection__report-meta", children: "Saving to Content Hub…" }) : null,
          m === "saved" ? /* @__PURE__ */ N("p", { className: "ch-image-detection__report-meta ch-image-detection__report-meta--ok", children: "Saved to asset" }) : null,
          m === "error" && _ ? /* @__PURE__ */ $("p", { className: "ch-image-detection__report-meta ch-image-detection__report-meta--error", children: [
            "Analysis succeeded, but save failed: ",
            _
          ] }) : null
        ] }),
        /* @__PURE__ */ N("div", { className: "ch-image-detection__pills", role: "list", "aria-label": "Check results", children: Ae.map((O) => {
          const B = t0(O.id, f);
          return /* @__PURE__ */ N(
            "button",
            {
              type: "button",
              role: "listitem",
              className: `ch-image-detection__pill ch-image-detection__pill--${B}${Vr === O.id ? " ch-image-detection__pill--active" : ""}`,
              "aria-label": `${O.shortLabel}, ${n0(B)}`,
              onClick: () => {
                Hn(O.id), Et(!0), window.setTimeout(() => {
                  var re;
                  (re = document.getElementById(`ch-id-finding-${O.id}`)) == null || re.scrollIntoView({ block: "nearest" });
                }, 0);
              },
              children: O.shortLabel
            },
            O.id
          );
        }) }),
        /* @__PURE__ */ $(
          "details",
          {
            className: "ch-image-detection__disclosure",
            open: se,
            onToggle: (O) => Et(O.currentTarget.open),
            children: [
              /* @__PURE__ */ $("summary", { className: "ch-image-detection__summary", children: [
                "Findings",
                /* @__PURE__ */ N("span", { children: f.findings.length })
              ] }),
              /* @__PURE__ */ N("div", { className: "ch-image-detection__finding-list", children: f.findings.map((O) => /* @__PURE__ */ N(
                r0,
                {
                  finding: O,
                  highlighted: Vr === O.id
                },
                O.id
              )) })
            ]
          }
        )
      ] }) : null
    ] }) })
  ] }) : /* @__PURE__ */ $("div", { className: "ch-image-detection", children: [
    /* @__PURE__ */ N("header", { className: "ch-image-detection__header", children: /* @__PURE__ */ $("div", { children: [
      /* @__PURE__ */ N("p", { className: "ch-image-detection__eyebrow", children: "Content Hub" }),
      /* @__PURE__ */ N("h2", { className: "ch-image-detection__title", children: "Image detection" })
    ] }) }),
    /* @__PURE__ */ N("div", { className: "ch-image-detection__body", children: /* @__PURE__ */ $("div", { className: "ch-image-detection__empty", children: [
      /* @__PURE__ */ N("h3", { children: "Configuration required" }),
      /* @__PURE__ */ $("p", { children: [
        "Add ",
        /* @__PURE__ */ N("code", { children: "apiBaseUrl" }),
        " and ",
        /* @__PURE__ */ N("code", { children: "apiToken" }),
        " to the component config in Content Hub."
      ] }),
      i.length > 0 ? /* @__PURE__ */ $("p", { className: "ch-image-detection__hint", children: [
        "Missing: ",
        i.join(", ")
      ] }) : null
    ] }) })
  ] });
}
function o0(e) {
  const t = Nd(e);
  return console.log("%c[CHImageDetection] Starting up...", "color: #0B5CAB; font-weight: bold"), {
    render(n) {
      const r = wv(n == null ? void 0 : n.options, n);
      console.log(
        "%c[CHImageDetection] context keys:",
        "color: #0B5CAB; font-weight: bold",
        Object.keys(n ?? {})
      ), console.log(
        "%c[CHImageDetection] parsed options:",
        "color: #0B5CAB; font-weight: bold",
        kv(r)
      ), t.render(
        /* @__PURE__ */ N(fv, { theme: n.theme, children: /* @__PURE__ */ N(i0, { client: n.client, entity: n.entity, options: r }) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  o0 as default
};
