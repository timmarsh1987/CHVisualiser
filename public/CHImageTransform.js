(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-image-transform{display:flex;flex-direction:column;width:100%;min-width:0;min-height:100%;box-sizing:border-box;overflow:auto;color:#102a43;background:#f5f8fb;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.ch-image-transform *,.ch-image-transform *:before,.ch-image-transform *:after{box-sizing:border-box}.ch-image-transform--center{align-items:center;justify-content:center;gap:10px;color:#486581}.ch-image-transform__header{padding:14px;border-bottom:1px solid #d9e2ec;background:#fff}.ch-image-transform__header h2,.ch-image-transform__header p{margin:0}.ch-image-transform__header h2{font-size:17px}.ch-image-transform__images{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:14px}.ch-image-transform__images--split{grid-template-columns:repeat(2,minmax(0,1fr))}.ch-image-transform__images figure{position:relative;min-width:0;margin:0;overflow:hidden;border:1px solid #d9e2ec;border-radius:9px;background:#e9eef3}.ch-image-transform__images-after{background-color:#f7fafc;background-image:linear-gradient(45deg,#d9e2ec 25%,transparent 25%),linear-gradient(-45deg,#d9e2ec 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#d9e2ec 75%),linear-gradient(-45deg,transparent 75%,#d9e2ec 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0}.ch-image-transform__images figure>span{position:absolute;z-index:1;top:8px;left:8px;padding:3px 7px;border-radius:999px;color:#fff;background:rgb(16 42 67 / 82%);font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-transform__images img{display:block;width:100%;height:clamp(180px,38vh,420px);object-fit:contain}.ch-image-transform__controls{display:grid;gap:10px;padding:0 14px 18px}.ch-image-transform__controls label{font-size:12px;font-weight:700}.ch-image-transform__controls textarea{width:100%;resize:vertical;min-height:88px;padding:10px;border:1px solid #bcccdc;border-radius:8px;color:#102a43;background:#fff;font:inherit;font-size:13px;line-height:1.45}.ch-image-transform__controls textarea:focus{outline:2px solid #9ac7f1;border-color:#0b5cab}.ch-image-transform__working{display:flex;align-items:center;gap:9px;color:#486581;font-size:12px}.ch-image-transform__spinner{display:inline-block;flex:0 0 auto;width:22px;height:22px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-transform-spin .8s linear infinite}.ch-image-transform__actions{display:flex;flex-wrap:wrap;gap:8px}.ch-image-transform__button{flex:1 1 170px;min-height:38px;padding:9px 13px;border:1px solid #0b5cab;border-radius:8px;color:#fff;background:#0b5cab;font-size:12px;font-weight:700;cursor:pointer}.ch-image-transform__button--secondary{color:#0b5cab;background:#fff}.ch-image-transform__button:disabled{opacity:.55;cursor:not-allowed}.ch-image-transform__notice{margin:14px;padding:10px 12px;border:1px solid #bcccdc;border-radius:8px;background:#fff;font-size:12px;line-height:1.45}.ch-image-transform__controls .ch-image-transform__notice{margin:0}.ch-image-transform__notice--error{border-color:#f9b8b8;color:#ab091e;background:#fff5f5}.ch-image-transform__notice--success{border-color:#9adbad;color:#0f6b35;background:#f0fff4}@keyframes ch-image-transform-spin{to{transform:rotate(360deg)}}@media (max-width: 520px){.ch-image-transform__images--split{grid-template-columns:minmax(0,1fr)}.ch-image-transform__images img{height:220px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Yd(e, t) {
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
function Xd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nc = { exports: {} }, Go = {}, rc = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr = Symbol.for("react.element"), Zd = Symbol.for("react.portal"), Jd = Symbol.for("react.fragment"), qd = Symbol.for("react.strict_mode"), bd = Symbol.for("react.profiler"), ep = Symbol.for("react.provider"), tp = Symbol.for("react.context"), np = Symbol.for("react.forward_ref"), rp = Symbol.for("react.suspense"), op = Symbol.for("react.memo"), ip = Symbol.for("react.lazy"), ks = Symbol.iterator;
function lp(e) {
  return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ic = Object.assign, lc = {};
function zn(e, t, n) {
  this.props = e, this.context = t, this.refs = lc, this.updater = n || oc;
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function uc() {
}
uc.prototype = zn.prototype;
function au(e, t, n) {
  this.props = e, this.context = t, this.refs = lc, this.updater = n || oc;
}
var cu = au.prototype = new uc();
cu.constructor = au;
ic(cu, zn.prototype);
cu.isPureReactComponent = !0;
var Cs = Array.isArray, sc = Object.prototype.hasOwnProperty, fu = { current: null }, ac = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      sc.call(t, r) && !ac.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Nr, type: e, key: i, ref: l, props: o, _owner: fu.current };
}
function up(e, t) {
  return { $$typeof: Nr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xs = /\/+/g;
function Ii(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sp("" + e.key) : t.toString(36);
}
function ro(e, t, n, r, o) {
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
          case Nr:
          case Zd:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Ii(l, 0) : r, Cs(o) ? (n = "", e != null && (n = e.replace(xs, "$&/") + "/"), ro(o, t, n, "", function(a) {
      return a;
    })) : o != null && (du(o) && (o = up(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(xs, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Cs(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ii(i, u);
      l += ro(i, t, n, s, o);
    }
  else if (s = lp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + Ii(i, u++), l += ro(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Dr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ro(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function ap(e) {
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
var Se = { current: null }, oo = { transition: null }, cp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: oo, ReactCurrentOwner: fu };
function fc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: Dr, forEach: function(e, t, n) {
  Dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!du(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = zn;
z.Fragment = Jd;
z.Profiler = bd;
z.PureComponent = au;
z.StrictMode = qd;
z.Suspense = rp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
z.act = fc;
z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ic({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = fu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      sc.call(t, s) && !ac.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Nr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
z.createContext = function(e) {
  return e = { $$typeof: tp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: ep, _context: e }, e.Consumer = e;
};
z.createElement = cc;
z.createFactory = function(e) {
  var t = cc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: np, render: e };
};
z.isValidElement = du;
z.lazy = function(e) {
  return { $$typeof: ip, _payload: { _status: -1, _result: e }, _init: ap };
};
z.memo = function(e, t) {
  return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = oo.transition;
  oo.transition = {};
  try {
    e();
  } finally {
    oo.transition = t;
  }
};
z.unstable_act = fc;
z.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
z.useContext = function(e) {
  return Se.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
z.useId = function() {
  return Se.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return Se.current.useRef(e);
};
z.useState = function(e) {
  return Se.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return Se.current.useTransition();
};
z.version = "18.3.1";
rc.exports = z;
var N = rc.exports;
const fp = /* @__PURE__ */ Xd(N), fl = /* @__PURE__ */ Yd({
  __proto__: null,
  default: fp
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
var dp = N, pp = Symbol.for("react.element"), mp = Symbol.for("react.fragment"), hp = Object.prototype.hasOwnProperty, yp = dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    hp.call(t, r) && !gp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: pp, type: e, key: i, ref: l, props: o, _owner: yp.current };
}
Go.Fragment = mp;
Go.jsx = dc;
Go.jsxs = dc;
nc.exports = Go;
var pu = nc.exports;
const vp = pu.Fragment, L = pu.jsx, be = pu.jsxs;
var pc = { exports: {} }, Ie = {}, mc = { exports: {} }, hc = {};
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
  function t(P, R) {
    var $ = P.length;
    P.push(R);
    e:
      for (; 0 < $; ) {
        var Z = $ - 1 >>> 1, re = P[Z];
        if (0 < o(re, R))
          P[Z] = R, P[$] = re, $ = Z;
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
    var R = P[0], $ = P.pop();
    if ($ !== R) {
      P[0] = $;
      e:
        for (var Z = 0, re = P.length, jr = re >>> 1; Z < jr; ) {
          var Dt = 2 * (Z + 1) - 1, Li = P[Dt], Ut = Dt + 1, Fr = P[Ut];
          if (0 > o(Li, $))
            Ut < re && 0 > o(Fr, Li) ? (P[Z] = Fr, P[Ut] = $, Z = Ut) : (P[Z] = Li, P[Dt] = $, Z = Dt);
          else if (Ut < re && 0 > o(Fr, $))
            P[Z] = Fr, P[Ut] = $, Z = Ut;
          else
            break e;
        }
    }
    return R;
  }
  function o(P, R) {
    var $ = P.sortIndex - R.sortIndex;
    return $ !== 0 ? $ : P.id - R.id;
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
  var s = [], a = [], h = 1, d = null, m = 3, v = !1, y = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null)
        r(a);
      else if (R.startTime <= P)
        r(a), R.sortIndex = R.expirationTime, t(s, R);
      else
        break;
      R = n(a);
    }
  }
  function w(P) {
    if (g = !1, p(P), !y)
      if (n(s) !== null)
        y = !0, $i(E);
      else {
        var R = n(a);
        R !== null && zi(w, R.startTime - P);
      }
  }
  function E(P, R) {
    y = !1, g && (g = !1, f(T), T = -1), v = !0;
    var $ = m;
    try {
      for (p(R), d = n(s); d !== null && (!(d.expirationTime > R) || P && !de()); ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          d.callback = null, m = d.priorityLevel;
          var re = Z(d.expirationTime <= R);
          R = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(s) && r(s), p(R);
        } else
          r(s);
        d = n(s);
      }
      if (d !== null)
        var jr = !0;
      else {
        var Dt = n(a);
        Dt !== null && zi(w, Dt.startTime - R), jr = !1;
      }
      return jr;
    } finally {
      d = null, m = $, v = !1;
    }
  }
  var C = !1, S = null, T = -1, D = 5, O = -1;
  function de() {
    return !(e.unstable_now() - O < D);
  }
  function Mn() {
    if (S !== null) {
      var P = e.unstable_now();
      O = P;
      var R = !0;
      try {
        R = S(!0, P);
      } finally {
        R ? jn() : (C = !1, S = null);
      }
    } else
      C = !1;
  }
  var jn;
  if (typeof c == "function")
    jn = function() {
      c(Mn);
    };
  else if (typeof MessageChannel < "u") {
    var Ss = new MessageChannel(), Gd = Ss.port2;
    Ss.port1.onmessage = Mn, jn = function() {
      Gd.postMessage(null);
    };
  } else
    jn = function() {
      x(Mn, 0);
    };
  function $i(P) {
    S = P, C || (C = !0, jn());
  }
  function zi(P, R) {
    T = x(function() {
      P(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, $i(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var $ = m;
    m = R;
    try {
      return P();
    } finally {
      m = $;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, R) {
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
    var $ = m;
    m = P;
    try {
      return R();
    } finally {
      m = $;
    }
  }, e.unstable_scheduleCallback = function(P, R, $) {
    var Z = e.unstable_now();
    switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Z + $ : Z) : $ = Z, P) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = $ + re, P = { id: h++, callback: R, priorityLevel: P, startTime: $, expirationTime: re, sortIndex: -1 }, $ > Z ? (P.sortIndex = $, t(a, P), n(s) === null && P === n(a) && (g ? (f(T), T = -1) : g = !0, zi(w, $ - Z))) : (P.sortIndex = re, t(s, P), y || v || (y = !0, $i(E))), P;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(P) {
    var R = m;
    return function() {
      var $ = m;
      m = R;
      try {
        return P.apply(this, arguments);
      } finally {
        m = $;
      }
    };
  };
})(hc);
mc.exports = hc;
var wp = mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp = N, Le = wp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yc = /* @__PURE__ */ new Set(), sr = {};
function bt(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++)
    yc.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dl = Object.prototype.hasOwnProperty, kp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Es = {}, _s = {};
function Cp(e) {
  return dl.call(_s, e) ? !0 : dl.call(Es, e) ? !1 : kp.test(e) ? _s[e] = !0 : (Es[e] = !0, !1);
}
function xp(e, t, n, r) {
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
function Ep(e, t, n, r) {
  if (t === null || typeof t > "u" || xp(e, t, n, r))
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
function ke(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  fe[e] = new ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function hu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mu,
    hu
  );
  fe[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mu, hu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mu, hu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, n, o, r) && (n = null), r || o === null ? Cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = Sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), rn = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), gu = Symbol.for("react.strict_mode"), pl = Symbol.for("react.profiler"), gc = Symbol.for("react.provider"), vc = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), ml = Symbol.for("react.suspense"), hl = Symbol.for("react.suspense_list"), wu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), wc = Symbol.for("react.offscreen"), Ps = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object" ? null : (e = Ps && e[Ps] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Ai;
function Yn(e) {
  if (Ai === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ai = t && t[1] || "";
    }
  return `
` + Ai + e;
}
var Mi = !1;
function ji(e, t) {
  if (!e || Mi)
    return "";
  Mi = !0;
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
    Mi = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function _p(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ji(e.type, !1), e;
    case 11:
      return e = ji(e.type.render, !1), e;
    case 1:
      return e = ji(e.type, !0), e;
    default:
      return "";
  }
}
function yl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case on:
      return "Fragment";
    case rn:
      return "Portal";
    case pl:
      return "Profiler";
    case gu:
      return "StrictMode";
    case ml:
      return "Suspense";
    case hl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vc:
        return (e.displayName || "Context") + ".Consumer";
      case gc:
        return (e._context.displayName || "Context") + ".Provider";
      case vu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case wu:
        return t = e.displayName || null, t !== null ? t : yl(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return yl(e(t));
        } catch {
        }
    }
  return null;
}
function Pp(e) {
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
      return yl(t);
    case 8:
      return t === gu ? "StrictMode" : "Mode";
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
function It(e) {
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
function Sc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tp(e) {
  var t = Sc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Br(e) {
  e._valueTracker || (e._valueTracker = Tp(e));
}
function kc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function So(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gl(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ts(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = It(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cc(e, t) {
  t = t.checked, t != null && yu(e, "checked", t, !1);
}
function vl(e, t) {
  Cc(e, t);
  var n = It(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && wl(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wl(e, t, n) {
  (t !== "number" || So(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function yn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Rs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(k(92));
      if (Xn(n)) {
        if (1 < n.length)
          throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: It(n) };
}
function xc(e, t) {
  var n = It(t.value), r = It(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Os(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ec(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ec(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Hr, _c = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Hr = Hr || document.createElement("div"), Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Hr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
}, Np = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  Np.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function Pc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function Tc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Pc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Rp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Cl(e, t) {
  if (t) {
    if (Rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(k(62));
  }
}
function xl(e, t) {
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
var El = null;
function Su(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _l = null, gn = null, vn = null;
function $s(e) {
  if (e = $r(e)) {
    if (typeof _l != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = qo(t), _l(e.stateNode, e.type, t));
  }
}
function Nc(e) {
  gn ? vn ? vn.push(e) : vn = [e] : gn = e;
}
function Rc() {
  if (gn) {
    var e = gn, t = vn;
    if (vn = gn = null, $s(e), t)
      for (e = 0; e < t.length; e++)
        $s(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function $c() {
}
var Fi = !1;
function zc(e, t, n) {
  if (Fi)
    return e(t, n);
  Fi = !0;
  try {
    return Oc(e, t, n);
  } finally {
    Fi = !1, (gn !== null || vn !== null) && ($c(), Rc());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = qo(n);
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
    throw Error(k(231, t, typeof n));
  return n;
}
var Pl = !1;
if (dt)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", { get: function() {
      Pl = !0;
    } }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
  } catch {
    Pl = !1;
  }
function Op(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var bn = !1, ko = null, Co = !1, Tl = null, $p = { onError: function(e) {
  bn = !0, ko = e;
} };
function zp(e, t, n, r, o, i, l, u, s) {
  bn = !1, ko = null, Op.apply($p, arguments);
}
function Lp(e, t, n, r, o, i, l, u, s) {
  if (zp.apply(this, arguments), bn) {
    if (bn) {
      var a = ko;
      bn = !1, ko = null;
    } else
      throw Error(k(198));
    Co || (Co = !0, Tl = a);
  }
}
function en(e) {
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
function Lc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function zs(e) {
  if (en(e) !== e)
    throw Error(k(188));
}
function Ip(e) {
  var t = e.alternate;
  if (!t) {
    if (t = en(e), t === null)
      throw Error(k(188));
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
          return zs(o), e;
        if (i === r)
          return zs(o), t;
        i = i.sibling;
      }
      throw Error(k(188));
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
          throw Error(k(189));
      }
    }
    if (n.alternate !== r)
      throw Error(k(190));
  }
  if (n.tag !== 3)
    throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ic(e) {
  return e = Ip(e), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Mc = Le.unstable_scheduleCallback, Ls = Le.unstable_cancelCallback, Ap = Le.unstable_shouldYield, Mp = Le.unstable_requestPaint, J = Le.unstable_now, jp = Le.unstable_getCurrentPriorityLevel, ku = Le.unstable_ImmediatePriority, jc = Le.unstable_UserBlockingPriority, xo = Le.unstable_NormalPriority, Fp = Le.unstable_LowPriority, Fc = Le.unstable_IdlePriority, Yo = null, ot = null;
function Dp(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Xe = Math.clz32 ? Math.clz32 : Hp, Up = Math.log, Bp = Math.LN2;
function Hp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Up(e) / Bp | 0) | 0;
}
var Wr = 64, Vr = 4194304;
function Zn(e) {
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
function Eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Zn(u) : (i &= l, i !== 0 && (r = Zn(i)));
  } else
    l = n & ~o, l !== 0 ? r = Zn(l) : i !== 0 && (r = Zn(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Xe(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Wp(e, t) {
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
function Vp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Xe(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = Wp(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Nl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dc() {
  var e = Wr;
  return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
}
function Di(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Cu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var j = 0;
function Uc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Bc, xu, Hc, Wc, Vc, Rl = !1, Kr = [], Pt = null, Tt = null, Nt = null, fr = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), kt = [], Qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Is(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pt = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = $r(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Gp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Pt = Un(Pt, e, t, n, r, o), !0;
    case "dragenter":
      return Tt = Un(Tt, e, t, n, r, o), !0;
    case "mouseover":
      return Nt = Un(Nt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return fr.set(i, Un(fr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, dr.set(i, Un(dr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Kc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lc(n), t !== null) {
          e.blockedOn = t, Vc(e.priority, function() {
            Hc(n);
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
function io(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      El = r, n.target.dispatchEvent(r), El = null;
    } else
      return t = $r(n), t !== null && xu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  io(e) && n.delete(t);
}
function Yp() {
  Rl = !1, Pt !== null && io(Pt) && (Pt = null), Tt !== null && io(Tt) && (Tt = null), Nt !== null && io(Nt) && (Nt = null), fr.forEach(As), dr.forEach(As);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Rl || (Rl = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Yp)));
}
function pr(e) {
  function t(o) {
    return Bn(o, e);
  }
  if (0 < Kr.length) {
    Bn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Pt !== null && Bn(Pt, e), Tt !== null && Bn(Tt, e), Nt !== null && Bn(Nt, e), fr.forEach(t), dr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Kc(n), n.blockedOn === null && kt.shift();
}
var wn = gt.ReactCurrentBatchConfig, _o = !0;
function Xp(e, t, n, r) {
  var o = j, i = wn.transition;
  wn.transition = null;
  try {
    j = 1, Eu(e, t, n, r);
  } finally {
    j = o, wn.transition = i;
  }
}
function Zp(e, t, n, r) {
  var o = j, i = wn.transition;
  wn.transition = null;
  try {
    j = 4, Eu(e, t, n, r);
  } finally {
    j = o, wn.transition = i;
  }
}
function Eu(e, t, n, r) {
  if (_o) {
    var o = Ol(e, t, n, r);
    if (o === null)
      Xi(e, t, r, Po, n), Is(e, r);
    else if (Gp(o, e, t, n, r))
      r.stopPropagation();
    else if (Is(e, r), t & 4 && -1 < Qp.indexOf(e)) {
      for (; o !== null; ) {
        var i = $r(o);
        if (i !== null && Bc(i), i = Ol(e, t, n, r), i === null && Xi(e, t, r, Po, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Xi(e, t, r, null, n);
  }
}
var Po = null;
function Ol(e, t, n, r) {
  if (Po = null, e = Su(r), e = Wt(e), e !== null)
    if (t = en(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Lc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Po = e, null;
}
function Qc(e) {
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
      switch (jp()) {
        case ku:
          return 1;
        case jc:
          return 4;
        case xo:
        case Fp:
          return 16;
        case Fc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null, _u = null, lo = null;
function Gc() {
  if (lo)
    return lo;
  var e, t = _u, n = t.length, r, o = "value" in Et ? Et.value : Et.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return lo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function uo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qr() {
  return !0;
}
function Ms() {
  return !1;
}
function Ae(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qr : Ms, this.isPropagationStopped = Ms, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
  }, persist: function() {
  }, isPersistent: Qr }), t;
}
var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Pu = Ae(Ln), Or = Q({}, Ln, { view: 0, detail: 0 }), Jp = Ae(Or), Ui, Bi, Hn, Xo = Q({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Ui = e.screenX - Hn.screenX, Bi = e.screenY - Hn.screenY) : Bi = Ui = 0, Hn = e), Ui);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bi;
} }), js = Ae(Xo), qp = Q({}, Xo, { dataTransfer: 0 }), bp = Ae(qp), em = Q({}, Or, { relatedTarget: 0 }), Hi = Ae(em), tm = Q({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), nm = Ae(tm), rm = Q({}, Ln, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), om = Ae(rm), im = Q({}, Ln, { data: 0 }), Fs = Ae(im), lm = {
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
}, um = {
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
}, sm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function am(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function Tu() {
  return am;
}
var cm = Q({}, Or, { key: function(e) {
  if (e.key) {
    var t = lm[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? um[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tu, charCode: function(e) {
  return e.type === "keypress" ? uo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), fm = Ae(cm), dm = Q({}, Xo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ds = Ae(dm), pm = Q({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tu }), mm = Ae(pm), hm = Q({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ym = Ae(hm), gm = Q({}, Xo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), vm = Ae(gm), wm = [9, 13, 27, 32], Nu = dt && "CompositionEvent" in window, er = null;
dt && "documentMode" in document && (er = document.documentMode);
var Sm = dt && "TextEvent" in window && !er, Yc = dt && (!Nu || er && 8 < er && 11 >= er), Us = String.fromCharCode(32), Bs = !1;
function Xc(e, t) {
  switch (e) {
    case "keyup":
      return wm.indexOf(t.keyCode) !== -1;
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
function Zc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function km(e, t) {
  switch (e) {
    case "compositionend":
      return Zc(t);
    case "keypress":
      return t.which !== 32 ? null : (Bs = !0, Us);
    case "textInput":
      return e = t.data, e === Us && Bs ? null : e;
    default:
      return null;
  }
}
function Cm(e, t) {
  if (ln)
    return e === "compositionend" || !Nu && Xc(e, t) ? (e = Gc(), lo = _u = Et = null, ln = !1, e) : null;
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
      return Yc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xm[e.type] : t === "textarea";
}
function Jc(e, t, n, r) {
  Nc(r), t = To(t, "onChange"), 0 < t.length && (n = new Pu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, mr = null;
function Em(e) {
  af(e, 0);
}
function Zo(e) {
  var t = an(e);
  if (kc(t))
    return e;
}
function _m(e, t) {
  if (e === "change")
    return t;
}
var qc = !1;
if (dt) {
  var Wi;
  if (dt) {
    var Vi = "oninput" in document;
    if (!Vi) {
      var Ws = document.createElement("div");
      Ws.setAttribute("oninput", "return;"), Vi = typeof Ws.oninput == "function";
    }
    Wi = Vi;
  } else
    Wi = !1;
  qc = Wi && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  tr && (tr.detachEvent("onpropertychange", bc), mr = tr = null);
}
function bc(e) {
  if (e.propertyName === "value" && Zo(mr)) {
    var t = [];
    Jc(t, mr, e, Su(e)), zc(Em, t);
  }
}
function Pm(e, t, n) {
  e === "focusin" ? (Vs(), tr = t, mr = n, tr.attachEvent("onpropertychange", bc)) : e === "focusout" && Vs();
}
function Tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zo(mr);
}
function Nm(e, t) {
  if (e === "click")
    return Zo(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change")
    return Zo(t);
}
function Om(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Om;
function hr(e, t) {
  if (Je(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!dl.call(t, o) || !Je(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Ks(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Qs(e, t) {
  var n = Ks(e);
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
    n = Ks(n);
  }
}
function ef(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ef(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function tf() {
  for (var e = window, t = So(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = So(e.document);
  }
  return t;
}
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function $m(e) {
  var t = tf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ef(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ru(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Qs(n, i);
        var l = Qs(
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
var zm = dt && "documentMode" in document && 11 >= document.documentMode, un = null, $l = null, nr = null, zl = !1;
function Gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl || un == null || un !== So(r) || (r = un, "selectionStart" in r && Ru(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && hr(nr, r) || (nr = r, r = To($l, "onSelect"), 0 < r.length && (t = new Pu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = un)));
}
function Gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var sn = { animationend: Gr("Animation", "AnimationEnd"), animationiteration: Gr("Animation", "AnimationIteration"), animationstart: Gr("Animation", "AnimationStart"), transitionend: Gr("Transition", "TransitionEnd") }, Ki = {}, nf = {};
dt && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function Jo(e) {
  if (Ki[e])
    return Ki[e];
  if (!sn[e])
    return e;
  var t = sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in nf)
      return Ki[e] = t[n];
  return e;
}
var rf = Jo("animationend"), of = Jo("animationiteration"), lf = Jo("animationstart"), uf = Jo("transitionend"), sf = /* @__PURE__ */ new Map(), Ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  sf.set(e, t), bt(t, [e]);
}
for (var Qi = 0; Qi < Ys.length; Qi++) {
  var Gi = Ys[Qi], Lm = Gi.toLowerCase(), Im = Gi[0].toUpperCase() + Gi.slice(1);
  Mt(Lm, "on" + Im);
}
Mt(rf, "onAnimationEnd");
Mt(of, "onAnimationIteration");
Mt(lf, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(uf, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Xs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lp(r, t, void 0, e), e.currentTarget = null;
}
function af(e, t) {
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
          Xs(o, u, a), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Xs(o, u, a), i = s;
        }
    }
  }
  if (Co)
    throw e = Tl, Co = !1, Tl = null, e;
}
function B(e, t) {
  var n = t[jl];
  n === void 0 && (n = t[jl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cf(t, e, 2, !1), n.add(r));
}
function Yi(e, t, n) {
  var r = 0;
  t && (r |= 4), cf(n, e, r, t);
}
var Yr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Yr]) {
    e[Yr] = !0, yc.forEach(function(n) {
      n !== "selectionchange" && (Am.has(n) || Yi(n, !1, e), Yi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yr] || (t[Yr] = !0, Yi("selectionchange", !1, t));
  }
}
function cf(e, t, n, r) {
  switch (Qc(t)) {
    case 1:
      var o = Xp;
      break;
    case 4:
      o = Zp;
      break;
    default:
      o = Eu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Pl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Xi(e, t, n, r, o) {
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
            if (l = Wt(u), l === null)
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
  zc(function() {
    var a = i, h = Su(n), d = [];
    e: {
      var m = sf.get(e);
      if (m !== void 0) {
        var v = Pu, y = e;
        switch (e) {
          case "keypress":
            if (uo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = fm;
            break;
          case "focusin":
            y = "focus", v = Hi;
            break;
          case "focusout":
            y = "blur", v = Hi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Hi;
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
            v = js;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = mm;
            break;
          case rf:
          case of:
          case lf:
            v = nm;
            break;
          case uf:
            v = ym;
            break;
          case "scroll":
            v = Jp;
            break;
          case "wheel":
            v = vm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ds;
        }
        var g = (t & 4) !== 0, x = !g && e === "scroll", f = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = cr(c, f), w != null && g.push(gr(c, w, p)))), x)
            break;
          c = c.return;
        }
        0 < g.length && (m = new v(m, y, null, n, h), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== El && (y = n.relatedTarget || n.fromElement) && (Wt(y) || y[pt]))
          break e;
        if ((v || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? Wt(y) : null, y !== null && (x = en(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
          if (g = js, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ds, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), x = v == null ? m : an(v), p = y == null ? m : an(y), m = new g(w, c + "leave", v, n, h), m.target = x, m.relatedTarget = p, w = null, Wt(h) === a && (g = new g(f, c + "enter", y, n, h), g.target = p, g.relatedTarget = x, w = g), x = w, v && y)
            t: {
              for (g = v, f = y, c = 0, p = g; p; p = tn(p))
                c++;
              for (p = 0, w = f; w; w = tn(w))
                p++;
              for (; 0 < c - p; )
                g = tn(g), c--;
              for (; 0 < p - c; )
                f = tn(f), p--;
              for (; c--; ) {
                if (g === f || f !== null && g === f.alternate)
                  break t;
                g = tn(g), f = tn(f);
              }
              g = null;
            }
          else
            g = null;
          v !== null && Zs(d, m, v, g, !1), y !== null && x !== null && Zs(d, x, y, g, !0);
        }
      }
      e: {
        if (m = a ? an(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
          var E = _m;
        else if (Hs(m))
          if (qc)
            E = Rm;
          else {
            E = Tm;
            var C = Pm;
          }
        else
          (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Nm);
        if (E && (E = E(e, a))) {
          Jc(d, E, n, h);
          break e;
        }
        C && C(e, m, a), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && wl(m, "number", m.value);
      }
      switch (C = a ? an(a) : window, e) {
        case "focusin":
          (Hs(C) || C.contentEditable === "true") && (un = C, $l = a, nr = null);
          break;
        case "focusout":
          nr = $l = un = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zl = !1, Gs(d, n, h);
          break;
        case "selectionchange":
          if (zm)
            break;
        case "keydown":
        case "keyup":
          Gs(d, n, h);
      }
      var S;
      if (Nu)
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
        ln ? Xc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Yc && n.locale !== "ko" && (ln || T !== "onCompositionStart" ? T === "onCompositionEnd" && ln && (S = Gc()) : (Et = h, _u = "value" in Et ? Et.value : Et.textContent, ln = !0)), C = To(a, T), 0 < C.length && (T = new Fs(T, e, null, n, h), d.push({ event: T, listeners: C }), S ? T.data = S : (S = Zc(n), S !== null && (T.data = S)))), (S = Sm ? km(e, n) : Cm(e, n)) && (a = To(a, "onBeforeInput"), 0 < a.length && (h = new Fs("onBeforeInput", "beforeinput", null, n, h), d.push({ event: h, listeners: a }), h.data = S));
    }
    af(d, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function To(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = cr(e, n), i != null && r.unshift(gr(e, i, o)), i = cr(e, t), i != null && r.push(gr(e, i, o))), e = e.return;
  }
  return r;
}
function tn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = cr(n, i), s != null && l.unshift(gr(n, s, u))) : o || (s = cr(n, i), s != null && l.push(gr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Mm = /\r\n?/g, jm = /\u0000|\uFFFD/g;
function Js(e) {
  return (typeof e == "string" ? e : "" + e).replace(Mm, `
`).replace(jm, "");
}
function Xr(e, t, n) {
  if (t = Js(t), Js(e) !== t && n)
    throw Error(k(425));
}
function No() {
}
var Ll = null, Il = null;
function Al(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0, Fm = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = typeof Promise == "function" ? Promise : void 0, Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof qs < "u" ? function(e) {
  return qs.resolve(null).then(e).catch(Um);
} : Ml;
function Um(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), pr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  pr(t);
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
function bs(e) {
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
var In = Math.random().toString(36).slice(2), rt = "__reactFiber$" + In, vr = "__reactProps$" + In, pt = "__reactContainer$" + In, jl = "__reactEvents$" + In, Bm = "__reactListeners$" + In, Hm = "__reactHandles$" + In;
function Wt(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = bs(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = bs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function $r(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function an(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function qo(e) {
  return e[vr] || null;
}
var Fl = [], cn = -1;
function jt(e) {
  return { current: e };
}
function H(e) {
  0 > cn || (e.current = Fl[cn], Fl[cn] = null, cn--);
}
function U(e, t) {
  cn++, Fl[cn] = e.current, e.current = t;
}
var At = {}, ge = jt(At), Ee = jt(!1), Yt = At;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return At;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
    o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function Ro() {
  H(Ee), H(ge);
}
function ea(e, t, n) {
  if (ge.current !== At)
    throw Error(k(168));
  U(ge, t), U(Ee, n);
}
function ff(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(k(108, Pp(e) || "Unknown", o));
  return Q({}, n, r);
}
function Oo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Yt = ge.current, U(ge, e), U(Ee, Ee.current), !0;
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = ff(e, t, Yt), r.__reactInternalMemoizedMergedChildContext = e, H(Ee), H(ge), U(ge, e)) : H(Ee), U(Ee, n);
}
var st = null, bo = !1, Ji = !1;
function df(e) {
  st === null ? st = [e] : st.push(e);
}
function Wm(e) {
  bo = !0, df(e);
}
function Ft() {
  if (!Ji && st !== null) {
    Ji = !0;
    var e = 0, t = j;
    try {
      var n = st;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, bo = !1;
    } catch (o) {
      throw st !== null && (st = st.slice(e + 1)), Mc(ku, Ft), o;
    } finally {
      j = t, Ji = !1;
    }
  }
  return null;
}
var fn = [], dn = 0, $o = null, zo = 0, je = [], Fe = 0, Xt = null, at = 1, ct = "";
function Bt(e, t) {
  fn[dn++] = zo, fn[dn++] = $o, $o = e, zo = t;
}
function pf(e, t, n) {
  je[Fe++] = at, je[Fe++] = ct, je[Fe++] = Xt, Xt = e;
  var r = at;
  e = ct;
  var o = 32 - Xe(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Xe(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, at = 1 << 32 - Xe(t) + o | n << o | r, ct = i + e;
  } else
    at = 1 << i | n << o | r, ct = e;
}
function Ou(e) {
  e.return !== null && (Bt(e, 1), pf(e, 1, 0));
}
function $u(e) {
  for (; e === $o; )
    $o = fn[--dn], fn[dn] = null, zo = fn[--dn], fn[dn] = null;
  for (; e === Xt; )
    Xt = je[--Fe], je[Fe] = null, ct = je[--Fe], je[Fe] = null, at = je[--Fe], je[Fe] = null;
}
var $e = null, Oe = null, W = !1, Ye = null;
function mf(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function na(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, Oe = Rt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Xt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Dl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (W) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!na(e, t)) {
        if (Dl(e))
          throw Error(k(418));
        t = Rt(n.nextSibling);
        var r = $e;
        t && na(e, t) ? mf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, $e = e);
      }
    } else {
      if (Dl(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, $e = e;
    }
  }
}
function ra(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Zr(e) {
  if (e !== $e)
    return !1;
  if (!W)
    return ra(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Dl(e))
      throw hf(), Error(k(418));
    for (; t; )
      mf(e, t), t = Rt(t.nextSibling);
  }
  if (ra(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
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
    Oe = $e ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function hf() {
  for (var e = Oe; e; )
    e = Rt(e.nextSibling);
}
function Pn() {
  Oe = $e = null, W = !1;
}
function zu(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Vm = gt.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(k(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = o.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string")
      throw Error(k(284));
    if (!n._owner)
      throw Error(k(290, e));
  }
  return e;
}
function Jr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function oa(e) {
  var t = e._init;
  return t(e._payload);
}
function yf(e) {
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
  function o(f, c) {
    return f = Lt(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, w) {
    return c === null || c.tag !== 6 ? (c = ol(p, f.mode, w), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function s(f, c, p, w) {
    var E = p.type;
    return E === on ? h(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === wt && oa(E) === c.type) ? (w = o(c, p.props), w.ref = Wn(f, c, p), w.return = f, w) : (w = ho(p.type, p.key, p.props, null, f.mode, w), w.ref = Wn(f, c, p), w.return = f, w);
  }
  function a(f, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = il(p, f.mode, w), c.return = f, c) : (c = o(c, p.children || []), c.return = f, c);
  }
  function h(f, c, p, w, E) {
    return c === null || c.tag !== 7 ? (c = Gt(p, f.mode, w, E), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function d(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ol("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ur:
          return p = ho(c.type, c.key, c.props, null, f.mode, p), p.ref = Wn(f, null, c), p.return = f, p;
        case rn:
          return c = il(c, f.mode, p), c.return = f, c;
        case wt:
          var w = c._init;
          return d(f, w(c._payload), p);
      }
      if (Xn(c) || Fn(c))
        return c = Gt(c, f.mode, p, null), c.return = f, c;
      Jr(f, c);
    }
    return null;
  }
  function m(f, c, p, w) {
    var E = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return E !== null ? null : u(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ur:
          return p.key === E ? s(f, c, p, w) : null;
        case rn:
          return p.key === E ? a(f, c, p, w) : null;
        case wt:
          return E = p._init, m(
            f,
            c,
            E(p._payload),
            w
          );
      }
      if (Xn(p) || Fn(p))
        return E !== null ? null : h(f, c, p, w, null);
      Jr(f, p);
    }
    return null;
  }
  function v(f, c, p, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(p) || null, u(c, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ur:
          return f = f.get(w.key === null ? p : w.key) || null, s(c, f, w, E);
        case rn:
          return f = f.get(w.key === null ? p : w.key) || null, a(c, f, w, E);
        case wt:
          var C = w._init;
          return v(f, c, p, C(w._payload), E);
      }
      if (Xn(w) || Fn(w))
        return f = f.get(p) || null, h(c, f, w, E, null);
      Jr(c, w);
    }
    return null;
  }
  function y(f, c, p, w) {
    for (var E = null, C = null, S = c, T = c = 0, D = null; S !== null && T < p.length; T++) {
      S.index > T ? (D = S, S = null) : D = S.sibling;
      var O = m(f, S, p[T], w);
      if (O === null) {
        S === null && (S = D);
        break;
      }
      e && S && O.alternate === null && t(f, S), c = i(O, c, T), C === null ? E = O : C.sibling = O, C = O, S = D;
    }
    if (T === p.length)
      return n(f, S), W && Bt(f, T), E;
    if (S === null) {
      for (; T < p.length; T++)
        S = d(f, p[T], w), S !== null && (c = i(S, c, T), C === null ? E = S : C.sibling = S, C = S);
      return W && Bt(f, T), E;
    }
    for (S = r(f, S); T < p.length; T++)
      D = v(S, f, T, p[T], w), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? T : D.key), c = i(D, c, T), C === null ? E = D : C.sibling = D, C = D);
    return e && S.forEach(function(de) {
      return t(f, de);
    }), W && Bt(f, T), E;
  }
  function g(f, c, p, w) {
    var E = Fn(p);
    if (typeof E != "function")
      throw Error(k(150));
    if (p = E.call(p), p == null)
      throw Error(k(151));
    for (var C = E = null, S = c, T = c = 0, D = null, O = p.next(); S !== null && !O.done; T++, O = p.next()) {
      S.index > T ? (D = S, S = null) : D = S.sibling;
      var de = m(f, S, O.value, w);
      if (de === null) {
        S === null && (S = D);
        break;
      }
      e && S && de.alternate === null && t(f, S), c = i(de, c, T), C === null ? E = de : C.sibling = de, C = de, S = D;
    }
    if (O.done)
      return n(
        f,
        S
      ), W && Bt(f, T), E;
    if (S === null) {
      for (; !O.done; T++, O = p.next())
        O = d(f, O.value, w), O !== null && (c = i(O, c, T), C === null ? E = O : C.sibling = O, C = O);
      return W && Bt(f, T), E;
    }
    for (S = r(f, S); !O.done; T++, O = p.next())
      O = v(S, f, T, O.value, w), O !== null && (e && O.alternate !== null && S.delete(O.key === null ? T : O.key), c = i(O, c, T), C === null ? E = O : C.sibling = O, C = O);
    return e && S.forEach(function(Mn) {
      return t(f, Mn);
    }), W && Bt(f, T), E;
  }
  function x(f, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === on && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ur:
          e: {
            for (var E = p.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (E = p.type, E === on) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === wt && oa(E) === C.type) {
                  n(f, C.sibling), c = o(C, p.props), c.ref = Wn(f, C, p), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            p.type === on ? (c = Gt(p.props.children, f.mode, w, p.key), c.return = f, f = c) : (w = ho(p.type, p.key, p.props, null, f.mode, w), w.ref = Wn(f, c, p), w.return = f, f = w);
          }
          return l(f);
        case rn:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = o(c, p.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = il(p, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case wt:
          return C = p._init, x(f, c, C(p._payload), w);
      }
      if (Xn(p))
        return y(f, c, p, w);
      if (Fn(p))
        return g(f, c, p, w);
      Jr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, p), c.return = f, f = c) : (n(f, c), c = ol(p, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return x;
}
var Tn = yf(!0), gf = yf(!1), Lo = jt(null), Io = null, pn = null, Lu = null;
function Iu() {
  Lu = pn = Io = null;
}
function Au(e) {
  var t = Lo.current;
  H(Lo), e._currentValue = t;
}
function Bl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  Io = e, Lu = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
      if (Io === null)
        throw Error(k(308));
      pn = e, Io.dependencies = { lanes: 0, firstContext: e };
    } else
      pn = pn.next = e;
  return t;
}
var Vt = null;
function Mu(e) {
  Vt === null ? Vt = [e] : Vt.push(e);
}
function vf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Mu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function ju(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Mu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, mt(e, n);
}
function so(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
function ia(e, t) {
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
function Ao(e, t, n, r) {
  var o = e.updateQueue;
  St = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var d = o.baseState;
    l = 0, h = a = s = null, u = i;
    do {
      var m = u.lane, v = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: v,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, g = u;
          switch (m = t, v = n, g.tag) {
            case 1:
              if (y = g.payload, typeof y == "function") {
                d = y.call(v, d, m);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = g.payload, m = typeof y == "function" ? y.call(v, d, m) : y, m == null)
                break e;
              d = Q({}, d, m);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [u] : m.push(u));
      } else
        v = { eventTime: v, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = v, s = d) : h = h.next = v, l |= m;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = d), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else
      i === null && (o.shared.lanes = 0);
    Jt |= l, e.lanes = l, e.memoizedState = d;
  }
}
function la(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var zr = {}, it = jt(zr), wr = jt(zr), Sr = jt(zr);
function Kt(e) {
  if (e === zr)
    throw Error(k(174));
  return e;
}
function Fu(e, t) {
  switch (U(Sr, t), U(wr, e), U(it, zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : kl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = kl(t, e);
  }
  H(it), U(it, t);
}
function Nn() {
  H(it), H(wr), H(Sr);
}
function Sf(e) {
  Kt(Sr.current);
  var t = Kt(it.current), n = kl(t, e.type);
  t !== n && (U(wr, e), U(it, n));
}
function Du(e) {
  wr.current === e && (H(it), H(wr));
}
var V = jt(0);
function Mo(e) {
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
var qi = [];
function Uu() {
  for (var e = 0; e < qi.length; e++)
    qi[e]._workInProgressVersionPrimary = null;
  qi.length = 0;
}
var ao = gt.ReactCurrentDispatcher, bi = gt.ReactCurrentBatchConfig, Zt = 0, K = null, te = null, oe = null, jo = !1, rr = !1, kr = 0, Km = 0;
function pe() {
  throw Error(k(321));
}
function Bu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n]))
      return !1;
  return !0;
}
function Hu(e, t, n, r, o, i) {
  if (Zt = i, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ao.current = e === null || e.memoizedState === null ? Xm : Zm, e = n(r, o), rr) {
    i = 0;
    do {
      if (rr = !1, kr = 0, 25 <= i)
        throw Error(k(301));
      i += 1, oe = te = null, t.updateQueue = null, ao.current = Jm, e = n(r, o);
    } while (rr);
  }
  if (ao.current = Fo, t = te !== null && te.next !== null, Zt = 0, oe = te = K = null, jo = !1, t)
    throw Error(k(300));
  return e;
}
function Wu() {
  var e = kr !== 0;
  return kr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? K.memoizedState = oe = e : oe = oe.next = e, oe;
}
function We() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = te.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null)
    oe = t, te = e;
  else {
    if (e === null)
      throw Error(k(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, oe === null ? K.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function el(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te, o = r.baseQueue, i = n.pending;
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
      var h = a.lane;
      if ((Zt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var d = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, l = r) : s = s.next = d, K.lanes |= h, Jt |= h;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, Je(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, K.lanes |= i, Jt |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function tl(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    Je(i, t.memoizedState) || (xe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function kf() {
}
function Cf(e, t) {
  var n = K, r = We(), o = t(), i = !Je(r.memoizedState, o);
  if (i && (r.memoizedState = o, xe = !0), r = r.queue, Vu(_f.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, Ef.bind(null, n, r, o, t), void 0, null), ie === null)
      throw Error(k(349));
    Zt & 30 || xf(n, t, o);
  }
  return o;
}
function xf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ef(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pf(t) && Tf(e);
}
function _f(e, t, n) {
  return n(function() {
    Pf(t) && Tf(e);
  });
}
function Pf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Tf(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function ua(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ym.bind(null, K, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Nf() {
  return We().memoizedState;
}
function co(e, t, n, r) {
  var o = et();
  K.flags |= e, o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ei(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (te !== null) {
    var l = te.memoizedState;
    if (i = l.destroy, r !== null && Bu(r, l.deps)) {
      o.memoizedState = xr(t, n, i, r);
      return;
    }
  }
  K.flags |= e, o.memoizedState = xr(1 | t, n, i, r);
}
function sa(e, t) {
  return co(8390656, 8, e, t);
}
function Vu(e, t) {
  return ei(2048, 8, e, t);
}
function Rf(e, t) {
  return ei(4, 2, e, t);
}
function Of(e, t) {
  return ei(4, 4, e, t);
}
function $f(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function zf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ei(4, 4, $f.bind(null, t, e), n);
}
function Ku() {
}
function Lf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function If(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Af(e, t, n) {
  return Zt & 21 ? (Je(n, t) || (n = Dc(), K.lanes |= n, Jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
}
function Qm(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bi.transition;
  bi.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, bi.transition = r;
  }
}
function Mf() {
  return We().memoizedState;
}
function Gm(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jf(e))
    Ff(t, n);
  else if (n = vf(e, t, n, r), n !== null) {
    var o = we();
    Ze(n, e, r, o), Df(n, t, r);
  }
}
function Ym(e, t, n) {
  var r = zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jf(e))
    Ff(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var l = t.lastRenderedState, u = i(l, n);
        if (o.hasEagerState = !0, o.eagerState = u, Je(u, l)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Mu(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = vf(e, t, o, r), n !== null && (o = we(), Ze(n, e, r, o), Df(n, t, r));
  }
}
function jf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Ff(e, t) {
  rr = jo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Df(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
var Fo = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Xm = { readContext: He, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: sa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, co(
    4194308,
    4,
    $f.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return co(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return co(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: ua, useDebugValue: Ku, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = ua(!1), t = e[0];
  return e = Qm.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, o = et();
  if (W) {
    if (n === void 0)
      throw Error(k(407));
    n = n();
  } else {
    if (n = t(), ie === null)
      throw Error(k(349));
    Zt & 30 || xf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, sa(_f.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, xr(9, Ef.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = ie.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Km++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Zm = {
  readContext: He,
  useCallback: Lf,
  useContext: He,
  useEffect: Vu,
  useImperativeHandle: zf,
  useInsertionEffect: Rf,
  useLayoutEffect: Of,
  useMemo: If,
  useReducer: el,
  useRef: Nf,
  useState: function() {
    return el(Cr);
  },
  useDebugValue: Ku,
  useDeferredValue: function(e) {
    var t = We();
    return Af(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = el(Cr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: kf,
  useSyncExternalStore: Cf,
  useId: Mf,
  unstable_isNewReconciler: !1
}, Jm = { readContext: He, useCallback: Lf, useContext: He, useEffect: Vu, useImperativeHandle: zf, useInsertionEffect: Rf, useLayoutEffect: Of, useMemo: If, useReducer: tl, useRef: Nf, useState: function() {
  return tl(Cr);
}, useDebugValue: Ku, useDeferredValue: function(e) {
  var t = We();
  return te === null ? t.memoizedState = e : Af(t, te.memoizedState, e);
}, useTransition: function() {
  var e = tl(Cr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: kf, useSyncExternalStore: Cf, useId: Mf, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ti = { isMounted: function(e) {
  return (e = e._reactInternals) ? en(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), i = ft(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ot(e, i, o), t !== null && (Ze(t, e, o, r), so(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), i = ft(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ot(e, i, o), t !== null && (Ze(t, e, o, r), so(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = zt(e), o = ft(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ot(e, o, r), t !== null && (Ze(t, e, r, n), so(t, e, r));
} };
function aa(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(o, i) : !0;
}
function Uf(e, t, n) {
  var r = !1, o = At, i = t.contextType;
  return typeof i == "object" && i !== null ? i = He(i) : (o = _e(t) ? Yt : ge.current, r = t.contextTypes, i = (r = r != null) ? _n(e, o) : At), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ca(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ti.enqueueReplaceState(t, t.state, null);
}
function Wl(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ju(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = He(i) : (i = _e(t) ? Yt : ge.current, o.context = _n(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Hl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ti.enqueueReplaceState(o, o.state, null), Ao(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "", r = t;
    do
      n += _p(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function nl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var qm = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Uo || (Uo = !0, eu = r), Vl(e, t);
  }, n;
}
function Hf(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Vl(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vl(e, t), typeof r != "function" && ($t === null ? $t = /* @__PURE__ */ new Set([this]) : $t.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function fa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = dh.bind(null, e, t, n), t.then(e, e));
}
function da(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pa(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var bm = gt.ReactCurrentOwner, xe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? gf(t, null, n, r) : Tn(t, e.child, n, r);
}
function ma(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Sn(t, o), r = Hu(e, t, n, r, i, o), n = Wu(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && n && Ou(t), t.flags |= 1, ve(e, t, r, o), t.child);
}
function ha(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wf(e, t, i, r, o)) : (e = ho(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(l, r) && e.ref === t.ref)
      return ht(e, t, o);
  }
  return t.flags |= 1, e = Lt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hr(i, r) && e.ref === t.ref)
      if (xe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (xe = !0);
      else
        return t.lanes = e.lanes, ht(e, t, o);
  }
  return Kl(e, t, n, r, o);
}
function Vf(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(hn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(hn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, U(hn, Ne), Ne |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, U(hn, Ne), Ne |= r;
  return ve(e, t, o, n), t.child;
}
function Kf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Kl(e, t, n, r, o) {
  var i = _e(n) ? Yt : ge.current;
  return i = _n(t, i), Sn(t, o), n = Hu(e, t, n, r, i, o), r = Wu(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && r && Ou(t), t.flags |= 1, ve(e, t, n, o), t.child);
}
function ya(e, t, n, r, o) {
  if (_e(n)) {
    var i = !0;
    Oo(t);
  } else
    i = !1;
  if (Sn(t, o), t.stateNode === null)
    fo(e, t), Uf(t, n, r), Wl(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = He(a) : (a = _e(n) ? Yt : ge.current, a = _n(t, a));
    var h = n.getDerivedStateFromProps, d = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ca(t, l, r, a), St = !1;
    var m = t.memoizedState;
    l.state = m, Ao(t, r, l, o), s = t.memoizedState, u !== r || m !== s || Ee.current || St ? (typeof h == "function" && (Hl(t, n, h, r), s = t.memoizedState), (u = St || aa(t, n, u, r, m, s, a)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, wf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Qe(t.type, u), l.props = a, d = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = _e(n) ? Yt : ge.current, s = _n(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== d || m !== s) && ca(t, l, r, s), St = !1, m = t.memoizedState, l.state = m, Ao(t, r, l, o);
    var y = t.memoizedState;
    u !== d || m !== y || Ee.current || St ? (typeof v == "function" && (Hl(t, n, v, r), y = t.memoizedState), (a = St || aa(t, n, a, r, m, y, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ql(e, t, n, r, i, o);
}
function Ql(e, t, n, r, o, i) {
  Kf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && ta(t, n, !1), ht(e, t, i);
  r = t.stateNode, bm.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Tn(t, e.child, null, i), t.child = Tn(t, null, u, i)) : ve(e, t, u, i), t.memoizedState = r.state, o && ta(t, n, !0), t.child;
}
function Qf(e) {
  var t = e.stateNode;
  t.pendingContext ? ea(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ea(e, t.context, !1), Fu(e, t.containerInfo);
}
function ga(e, t, n, r, o) {
  return Pn(), zu(o), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gf(e, t, n) {
  var r = t.pendingProps, o = V.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), U(V, o & 1), e === null)
    return Ul(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = oi(l, r, 0, null), e = Gt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Yl(n), t.memoizedState = Gl, e) : Qu(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return eh(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Lt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = Lt(u, i) : (i = Gt(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Yl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Gl, r;
  }
  return i = e.child, e = i.sibling, r = Lt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qu(e, t) {
  return t = oi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && zu(r), Tn(t, e.child, null, n), e = Qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function eh(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = nl(Error(k(422))), qr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = oi({ mode: "visible", children: r.children }, o, 0, null), i = Gt(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Tn(t, e.child, null, l), t.child.memoizedState = Yl(l), t.memoizedState = Gl, i);
  if (!(t.mode & 1))
    return qr(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(k(419)), r = nl(i, r, void 0), qr(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, xe || u) {
    if (r = ie, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, mt(e, o), Ze(r, e, o, -1));
    }
    return qu(), r = nl(Error(k(421))), qr(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ph.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Oe = Rt(o.nextSibling), $e = t, W = !0, Ye = null, e !== null && (je[Fe++] = at, je[Fe++] = ct, je[Fe++] = Xt, at = e.id, ct = e.overflow, Xt = t), t = Qu(t, r.children), t.flags |= 4096, t);
}
function va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bl(e.return, t, n);
}
function rl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Yf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ve(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && va(e, n, t);
          else if (e.tag === 19)
            va(e, n, t);
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
  if (U(V, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Mo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), rl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Mo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        rl(t, !0, n, null, i);
        break;
      case "together":
        rl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Jt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Lt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function th(e, t, n) {
  switch (t.tag) {
    case 3:
      Qf(t), Pn();
      break;
    case 5:
      Sf(t);
      break;
    case 1:
      _e(t.type) && Oo(t);
      break;
    case 4:
      Fu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      U(Lo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gf(e, t, n) : (U(V, V.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Yf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), U(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Vf(e, t, n);
  }
  return ht(e, t, n);
}
var Xf, Xl, Zf, Jf;
Xf = function(e, t) {
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
Xl = function() {
};
Zf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Kt(it.current);
    var i = null;
    switch (n) {
      case "input":
        o = gl(e, o), r = gl(e, r), i = [];
        break;
      case "select":
        o = Q({}, o, { value: void 0 }), r = Q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Sl(e, o), r = Sl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = No);
    }
    Cl(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (sr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (sr.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Jf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!W)
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function nh(e, t, n) {
  var r = t.pendingProps;
  switch ($u(t), t.tag) {
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
      return me(t), null;
    case 1:
      return _e(t.type) && Ro(), me(t), null;
    case 3:
      return r = t.stateNode, Nn(), H(Ee), H(ge), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (ru(Ye), Ye = null))), Xl(e, t), me(t), null;
    case 5:
      Du(t);
      var o = Kt(Sr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Zf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return me(t), null;
        }
        if (e = Kt(it.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rt] = t, r[vr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Jn.length; o++)
                B(Jn[o], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              Ts(r, i), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, B("invalid", r);
              break;
            case "textarea":
              Rs(r, i), B("invalid", r);
          }
          Cl(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : sr.hasOwnProperty(l) && u != null && l === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), Ns(r, i, !0);
              break;
            case "textarea":
              Br(r), Os(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = No);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ec(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[rt] = t, e[vr] = r, Xf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = xl(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Jn.length; o++)
                  B(Jn[o], e);
                o = r;
                break;
              case "source":
                B("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), o = r;
                break;
              case "details":
                B("toggle", e), o = r;
                break;
              case "input":
                Ts(e, r), o = gl(e, r), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Rs(e, r), o = Sl(e, r), B("invalid", e);
                break;
              default:
                o = r;
            }
            Cl(n, o), u = o;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Tc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && _c(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ar(e, s) : typeof s == "number" && ar(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (sr.hasOwnProperty(i) ? s != null && i === "onScroll" && B("scroll", e) : s != null && yu(e, i, s, l));
              }
            switch (n) {
              case "input":
                Br(e), Ns(e, r, !1);
                break;
              case "textarea":
                Br(e), Os(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? yn(e, !!r.multiple, i, !1) : r.defaultValue != null && yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = No);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null)
        Jf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Kt(Sr.current), Kt(it.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (i = r.nodeValue !== n) && (e = $e, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (H(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Oe !== null && t.mode & 1 && !(t.flags & 128))
          hf(), Pn(), t.flags |= 98560, i = !1;
        else if (i = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(k(317));
            i[rt] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else
          Ye !== null && (ru(Ye), Ye = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : qu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Nn(), Xl(e, t), e === null && yr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Au(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && Ro(), me(t), null;
    case 19:
      if (H(V), i = t.memoizedState, i === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Vn(i, !1);
        else {
          if (ne !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Mo(e), l !== null) {
                for (t.flags |= 128, Vn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && J() > On && (t.flags |= 128, r = !0, Vn(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Mo(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !W)
              return me(t), null;
          } else
            2 * J() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Vn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = J(), t.sibling = null, n = V.current, U(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Ju(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function rh(e, t) {
  switch ($u(t), t.tag) {
    case 1:
      return _e(t.type) && Ro(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Nn(), H(Ee), H(ge), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Du(t), null;
    case 13:
      if (H(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(V), null;
    case 4:
      return Nn(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1, ye = !1, oh = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else
      n.current = null;
}
function Zl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var wa = !1;
function ih(e, t) {
  if (Ll = _o, e = tf(), Ru(e)) {
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
          var l = 0, u = -1, s = -1, a = 0, h = 0, d = e, m = null;
          t:
            for (; ; ) {
              for (var v; d !== n || o !== 0 && d.nodeType !== 3 || (u = l + o), d !== i || r !== 0 && d.nodeType !== 3 || (s = l + r), d.nodeType === 3 && (l += d.nodeValue.length), (v = d.firstChild) !== null; )
                m = d, d = v;
              for (; ; ) {
                if (d === e)
                  break t;
                if (m === n && ++a === o && (u = l), m === i && ++h === r && (s = l), (v = d.nextSibling) !== null)
                  break;
                d = m, m = d.parentNode;
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
  for (Il = { focusedElem: e, selectionRange: n }, _o = !1, _ = t; _ !== null; )
    if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, _ = e;
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps, x = y.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Qe(t.type, g), x);
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
                throw Error(k(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, _ = e;
          break;
        }
        _ = t.return;
      }
  return y = wa, wa = !1, y;
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Zl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ni(e, t) {
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
function Jl(e) {
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
function qf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[vr], delete t[jl], delete t[Bm], delete t[Hm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function bf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sa(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bf(e.return))
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
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = No));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ql(e, t, n), e = e.sibling; e !== null; )
      ql(e, t, n), e = e.sibling;
}
function bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; )
      bl(e, t, n), e = e.sibling;
}
var ue = null, Ge = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    ed(e, t, n), n = n.sibling;
}
function ed(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Yo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ye || mn(n, t);
    case 6:
      var r = ue, o = Ge;
      ue = null, vt(e, t, n), ue = r, Ge = o, ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Zi(e.parentNode, n) : e.nodeType === 1 && Zi(e, n), pr(e)) : Zi(ue, n.stateNode));
      break;
    case 4:
      r = ue, o = Ge, ue = n.stateNode.containerInfo, Ge = !0, vt(e, t, n), ue = r, Ge = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Zl(n, t, l), o = o.next;
        } while (o !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!ye && (mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, vt(e, t, n), ye = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function ka(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new oh()), t.forEach(function(r) {
      var o = mh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ke(e, t) {
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
                ue = u.stateNode, Ge = !1;
                break e;
              case 3:
                ue = u.stateNode.containerInfo, Ge = !0;
                break e;
              case 4:
                ue = u.stateNode.containerInfo, Ge = !0;
                break e;
            }
            u = u.return;
          }
        if (ue === null)
          throw Error(k(160));
        ed(i, l, o), ue = null, Ge = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      td(t, e), t = t.sibling;
}
function td(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), qe(e), r & 4) {
        try {
          or(3, e, e.return), ni(3, e);
        } catch (g) {
          X(e, e.return, g);
        }
        try {
          or(5, e, e.return);
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 1:
      Ke(t, e), qe(e), r & 512 && n !== null && mn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), qe(e), r & 512 && n !== null && mn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ar(o, "");
        } catch (g) {
          X(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && Cc(o, i), xl(u, l);
            var a = xl(u, i);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], d = s[l + 1];
              h === "style" ? Tc(o, d) : h === "dangerouslySetInnerHTML" ? _c(o, d) : h === "children" ? ar(o, d) : yu(o, h, d, a);
            }
            switch (u) {
              case "input":
                vl(o, i);
                break;
              case "textarea":
                xc(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? yn(o, !!i.multiple, v, !1) : m !== !!i.multiple && (i.defaultValue != null ? yn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : yn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[vr] = i;
          } catch (g) {
            X(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Ke(t, e), qe(e), r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ke(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          pr(t.containerInfo);
        } catch (g) {
          X(e, e.return, g);
        }
      break;
    case 4:
      Ke(t, e), qe(e);
      break;
    case 13:
      Ke(t, e), qe(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Xu = J())), r & 4 && ka(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (a = ye) || h, Ke(t, e), ye = a) : Ke(t, e), qe(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (_ = e, h = e.child; h !== null; ) {
            for (d = _ = h; _ !== null; ) {
              switch (m = _, v = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  or(4, m, m.return);
                  break;
                case 1:
                  mn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                    } catch (g) {
                      X(r, n, g);
                    }
                  }
                  break;
                case 5:
                  mn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    xa(d);
                    continue;
                  }
              }
              v !== null ? (v.return = m, _ = v) : xa(d);
            }
            h = h.sibling;
          }
        e:
          for (h = null, d = e; ; ) {
            if (d.tag === 5) {
              if (h === null) {
                h = d;
                try {
                  o = d.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Pc("display", l));
                } catch (g) {
                  X(e, e.return, g);
                }
              }
            } else if (d.tag === 6) {
              if (h === null)
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (g) {
                  X(e, e.return, g);
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
              h === d && (h = null), d = d.return;
            }
            h === d && (h = null), d.sibling.return = d.return, d = d.sibling;
          }
      }
      break;
    case 19:
      Ke(t, e), qe(e), r & 4 && ka(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ar(o, ""), r.flags &= -33);
          var i = Sa(e);
          bl(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Sa(e);
          ql(e, u, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lh(e, t, n) {
  _ = e, nd(e);
}
function nd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || br;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || ye;
        u = br;
        var a = ye;
        if (br = l, (ye = s) && !a)
          for (_ = o; _ !== null; )
            l = _, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ea(o) : s !== null ? (s.return = l, _ = s) : Ea(o);
        for (; i !== null; )
          _ = i, nd(i), i = i.sibling;
        _ = o, br = u, ye = a;
      }
      Ca(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, _ = i) : Ca(e);
  }
}
function Ca(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || ni(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && la(t, i, r);
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
                la(t, l, n);
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
                    var d = h.dehydrated;
                    d !== null && pr(d);
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
              throw Error(k(163));
          }
        ye || t.flags & 512 && Jl(t);
      } catch (m) {
        X(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function xa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function Ea(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ni(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, o, s);
            }
          }
          var i = t.return;
          try {
            Jl(t);
          } catch (s) {
            X(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Jl(t);
          } catch (s) {
            X(t, l, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, _ = u;
      break;
    }
    _ = t.return;
  }
}
var uh = Math.ceil, Do = gt.ReactCurrentDispatcher, Gu = gt.ReactCurrentOwner, Be = gt.ReactCurrentBatchConfig, I = 0, ie = null, ee = null, ae = 0, Ne = 0, hn = jt(0), ne = 0, Er = null, Jt = 0, ri = 0, Yu = 0, ir = null, Ce = null, Xu = 0, On = 1 / 0, ut = null, Uo = !1, eu = null, $t = null, eo = !1, _t = null, Bo = 0, lr = 0, tu = null, po = -1, mo = 0;
function we() {
  return I & 6 ? J() : po !== -1 ? po : po = J();
}
function zt(e) {
  return e.mode & 1 ? I & 2 && ae !== 0 ? ae & -ae : Vm.transition !== null ? (mo === 0 && (mo = Dc()), mo) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < lr)
    throw lr = 0, tu = null, Error(k(185));
  Rr(e, n, r), (!(I & 2) || e !== ie) && (e === ie && (!(I & 2) && (ri |= n), ne === 4 && Ct(e, ae)), Pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && (On = J() + 500, bo && Ft()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Vp(e, t);
  var r = Eo(e, e === ie ? ae : 0);
  if (r === 0)
    n !== null && Ls(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ls(n), t === 1)
      e.tag === 0 ? Wm(_a.bind(null, e)) : df(_a.bind(null, e)), Dm(function() {
        !(I & 6) && Ft();
      }), n = null;
    else {
      switch (Uc(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = jc;
          break;
        case 16:
          n = xo;
          break;
        case 536870912:
          n = Fc;
          break;
        default:
          n = xo;
      }
      n = cd(n, rd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function rd(e, t) {
  if (po = -1, mo = 0, I & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n)
    return null;
  var r = Eo(e, e === ie ? ae : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ho(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var i = id();
    (ie !== e || ae !== t) && (ut = null, On = J() + 500, Qt(e, t));
    do
      try {
        ch();
        break;
      } catch (u) {
        od(e, u);
      }
    while (1);
    Iu(), Do.current = i, I = o, ee !== null ? t = 0 : (ie = null, ae = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (o = Nl(e), o !== 0 && (r = o, t = nu(e, o))), t === 1)
      throw n = Er, Qt(e, 0), Ct(e, r), Pe(e, J()), n;
    if (t === 6)
      Ct(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !sh(o) && (t = Ho(e, r), t === 2 && (i = Nl(e), i !== 0 && (r = i, t = nu(e, i))), t === 1))
        throw n = Er, Qt(e, 0), Ct(e, r), Pe(e, J()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ht(e, Ce, ut);
          break;
        case 3:
          if (Ct(e, r), (r & 130023424) === r && (t = Xu + 500 - J(), 10 < t)) {
            if (Eo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ml(Ht.bind(null, e, Ce, ut), t);
            break;
          }
          Ht(e, Ce, ut);
          break;
        case 4:
          if (Ct(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Xe(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ml(Ht.bind(null, e, Ce, ut), r);
            break;
          }
          Ht(e, Ce, ut);
          break;
        case 5:
          Ht(e, Ce, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? rd.bind(null, e) : null;
}
function nu(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256), e = Ho(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && ru(t)), e;
}
function ru(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function sh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], i = o.getSnapshot;
          o = o.value;
          try {
            if (!Je(i(), o))
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
function Ct(e, t) {
  for (t &= ~Yu, t &= ~ri, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _a(e) {
  if (I & 6)
    throw Error(k(327));
  kn();
  var t = Eo(e, 0);
  if (!(t & 1))
    return Pe(e, J()), null;
  var n = Ho(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nl(e);
    r !== 0 && (t = r, n = nu(e, r));
  }
  if (n === 1)
    throw n = Er, Qt(e, 0), Ct(e, t), Pe(e, J()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, Ce, ut), Pe(e, J()), null;
}
function Zu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (On = J() + 500, bo && Ft());
  }
}
function qt(e) {
  _t !== null && _t.tag === 0 && !(I & 6) && kn();
  var t = I;
  I |= 1;
  var n = Be.transition, r = j;
  try {
    if (Be.transition = null, j = 1, e)
      return e();
  } finally {
    j = r, Be.transition = n, I = t, !(I & 6) && Ft();
  }
}
function Ju() {
  Ne = hn.current, H(hn);
}
function Qt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fm(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ($u(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ro();
          break;
        case 3:
          Nn(), H(Ee), H(ge), Uu();
          break;
        case 5:
          Du(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          H(V);
          break;
        case 19:
          H(V);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (ie = e, ee = e = Lt(e.current, null), ae = Ne = t, ne = 0, Er = null, Yu = ri = Jt = 0, Ce = ir = null, Vt !== null) {
    for (t = 0; t < Vt.length; t++)
      if (n = Vt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function od(e, t) {
  do {
    var n = ee;
    try {
      if (Iu(), ao.current = Fo, jo) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        jo = !1;
      }
      if (Zt = 0, oe = te = K = null, rr = !1, kr = 0, Gu.current = null, n === null || n.return === null) {
        ne = 1, Er = t, ee = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = ae, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = da(l);
          if (v !== null) {
            v.flags &= -257, pa(v, l, u, i, t), v.mode & 1 && fa(i, a, t), t = v, s = a;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              fa(i, a, t), qu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var x = da(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), pa(x, l, u, i, t), zu(Rn(s, u));
            break e;
          }
        }
        i = s = Rn(s, u), ne !== 4 && (ne = 2), ir === null ? ir = [i] : ir.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Bf(i, s, t);
              ia(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && ($t === null || !$t.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Hf(i, u, t);
                ia(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ud(n);
    } catch (E) {
      t = E, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function id() {
  var e = Do.current;
  return Do.current = Fo, e === null ? Fo : e;
}
function qu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), ie === null || !(Jt & 268435455) && !(ri & 268435455) || Ct(ie, ae);
}
function Ho(e, t) {
  var n = I;
  I |= 2;
  var r = id();
  (ie !== e || ae !== t) && (ut = null, Qt(e, t));
  do
    try {
      ah();
      break;
    } catch (o) {
      od(e, o);
    }
  while (1);
  if (Iu(), I = n, Do.current = r, ee !== null)
    throw Error(k(261));
  return ie = null, ae = 0, ne;
}
function ah() {
  for (; ee !== null; )
    ld(ee);
}
function ch() {
  for (; ee !== null && !Ap(); )
    ld(ee);
}
function ld(e) {
  var t = ad(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? ud(e) : ee = t, Gu.current = null;
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = rh(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (n = nh(n, t, Ne), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Ht(e, t, n) {
  var r = j, o = Be.transition;
  try {
    Be.transition = null, j = 1, fh(e, t, n, r);
  } finally {
    Be.transition = o, j = r;
  }
  return null;
}
function fh(e, t, n, r) {
  do
    kn();
  while (_t !== null);
  if (I & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Kp(e, i), e === ie && (ee = ie = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || eo || (eo = !0, cd(xo, function() {
    return kn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Be.transition, Be.transition = null;
    var l = j;
    j = 1;
    var u = I;
    I |= 4, Gu.current = null, ih(e, n), td(n, e), $m(Il), _o = !!Ll, Il = Ll = null, e.current = n, lh(n), Mp(), I = u, j = l, Be.transition = i;
  } else
    e.current = n;
  if (eo && (eo = !1, _t = e, Bo = o), i = e.pendingLanes, i === 0 && ($t = null), Dp(n.stateNode), Pe(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Uo)
    throw Uo = !1, e = eu, eu = null, e;
  return Bo & 1 && e.tag !== 0 && kn(), i = e.pendingLanes, i & 1 ? e === tu ? lr++ : (lr = 0, tu = e) : lr = 0, Ft(), null;
}
function kn() {
  if (_t !== null) {
    var e = Uc(Bo), t = Be.transition, n = j;
    try {
      if (Be.transition = null, j = 16 > e ? 16 : e, _t === null)
        var r = !1;
      else {
        if (e = _t, _t = null, Bo = 0, I & 6)
          throw Error(k(331));
        var o = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var i = _, l = i.child;
          if (_.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, h, i);
                  }
                  var d = h.child;
                  if (d !== null)
                    d.return = h, _ = d;
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling, v = h.return;
                      if (qf(h), h === a) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = v, _ = m;
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var x = g.sibling;
                    g.sibling = null, g = x;
                  } while (g !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null)
            l.return = i, _ = l;
          else
            e:
              for (; _ !== null; ) {
                if (i = _, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  f.return = i.return, _ = f;
                  break e;
                }
                _ = i.return;
              }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          l = _;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null)
            p.return = l, _ = p;
          else
            e:
              for (l = c; _ !== null; ) {
                if (u = _, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ni(9, u);
                    }
                  } catch (E) {
                    X(u, u.return, E);
                  }
                if (u === l) {
                  _ = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, _ = w;
                  break e;
                }
                _ = u.return;
              }
        }
        if (I = o, Ft(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(Yo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      j = n, Be.transition = t;
    }
  }
  return !1;
}
function Pa(e, t, n) {
  t = Rn(n, t), t = Bf(e, t, 1), e = Ot(e, t, 1), t = we(), e !== null && (Rr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3)
    Pa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
          e = Rn(n, e), e = Hf(t, e, 1), t = Ot(t, e, 1), e = we(), t !== null && (Rr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ae & n) === n && (ne === 4 || ne === 3 && (ae & 130023424) === ae && 500 > J() - Xu ? Qt(e, 0) : Yu |= n), Pe(e, t);
}
function sd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (Rr(e, t, n), Pe(e, n));
}
function ph(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), sd(e, n);
}
function mh(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), sd(e, n);
}
var ad;
ad = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current)
      xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return xe = !1, th(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else
    xe = !1, W && t.flags & 1048576 && pf(t, zo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fo(e, t), e = t.pendingProps;
      var o = _n(t, ge.current);
      Sn(t, n), o = Hu(null, t, r, e, o, n);
      var i = Wu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (i = !0, Oo(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ju(t), o.updater = ti, t.stateNode = o, o._reactInternals = t, Wl(t, r, e, n), t = Ql(null, t, r, !0, i, n)) : (t.tag = 0, W && i && Ou(t), ve(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = yh(r), e = Qe(r, e), o) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = ya(null, t, r, e, n);
            break e;
          case 11:
            t = ma(null, t, r, e, n);
            break e;
          case 14:
            t = ha(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(k(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Kl(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), ya(e, t, r, o, n);
    case 3:
      e: {
        if (Qf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, wf(e, t), Ao(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Rn(Error(k(423)), t), t = ga(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Rn(Error(k(424)), t), t = ga(e, t, r, n, o);
            break e;
          } else
            for (Oe = Rt(t.stateNode.containerInfo.firstChild), $e = t, W = !0, Ye = null, n = gf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === o) {
            t = ht(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Sf(t), e === null && Ul(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Al(r, o) ? l = null : i !== null && Al(r, i) && (t.flags |= 32), Kf(e, t), ve(e, t, l, n), t.child;
    case 6:
      return e === null && Ul(t), null;
    case 13:
      return Gf(e, t, n);
    case 4:
      return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Tn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), ma(e, t, r, o, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, U(Lo, r._currentValue), r._currentValue = l, i !== null)
          if (Je(i.value, l)) {
            if (i.children === o.children && !Ee.current) {
              t = ht(e, t, n);
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
                      s = ft(-1, n & -n), s.tag = 2;
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Bl(
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
                  throw Error(k(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Bl(l, n, t), l = i.sibling;
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
        ve(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Sn(t, n), o = He(o), r = r(o), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), ha(e, t, r, o, n);
    case 15:
      return Wf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), fo(e, t), t.tag = 1, _e(r) ? (e = !0, Oo(t)) : e = !1, Sn(t, n), Uf(t, r, o), Wl(t, r, o, n), Ql(null, t, r, !0, e, n);
    case 19:
      return Yf(e, t, n);
    case 22:
      return Vf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function cd(e, t) {
  return Mc(e, t);
}
function hh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new hh(e, t, n, r);
}
function bu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function yh(e) {
  if (typeof e == "function")
    return bu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === vu)
      return 11;
    if (e === wu)
      return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ho(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    bu(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case on:
          return Gt(n.children, o, i, t);
        case gu:
          l = 8, o |= 8;
          break;
        case pl:
          return e = Ue(12, n, t, o | 2), e.elementType = pl, e.lanes = i, e;
        case ml:
          return e = Ue(13, n, t, o), e.elementType = ml, e.lanes = i, e;
        case hl:
          return e = Ue(19, n, t, o), e.elementType = hl, e.lanes = i, e;
        case wc:
          return oi(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gc:
                l = 10;
                break e;
              case vc:
                l = 9;
                break e;
              case vu:
                l = 11;
                break e;
              case wu:
                l = 14;
                break e;
              case wt:
                l = 16, r = null;
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
  return t = Ue(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Gt(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function oi(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = wc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ol(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function il(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Di(0), this.expirationTimes = Di(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Di(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function es(e, t, n, r, o, i, l, u, s) {
  return e = new gh(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ue(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(i), e;
}
function vh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fd(e) {
  if (!e)
    return At;
  e = e._reactInternals;
  e: {
    if (en(e) !== e || e.tag !== 1)
      throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n))
      return ff(e, n, t);
  }
  return t;
}
function dd(e, t, n, r, o, i, l, u, s) {
  return e = es(n, r, !0, e, o, i, l, u, s), e.context = fd(null), n = e.current, r = we(), o = zt(n), i = ft(r, o), i.callback = t ?? null, Ot(n, i, o), e.current.lanes = o, Rr(e, o, r), Pe(e, r), e;
}
function ii(e, t, n, r) {
  var o = t.current, i = we(), l = zt(o);
  return n = fd(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(o, t, l), e !== null && (Ze(e, o, l, i), so(e, o, l)), l;
}
function Wo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ta(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ts(e, t) {
  Ta(e, t), (e = e.alternate) && Ta(e, t);
}
function wh() {
  return null;
}
var pd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ns(e) {
  this._internalRoot = e;
}
li.prototype.render = ns.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  ii(e, t, null, null);
};
li.prototype.unmount = ns.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function() {
      ii(null, e, null, null);
    }), t[pt] = null;
  }
};
function li(e) {
  this._internalRoot = e;
}
li.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Wc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Kc(e);
  }
};
function rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ui(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Na() {
}
function Sh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Wo(l);
        i.call(a);
      };
    }
    var l = dd(t, r, e, 0, null, !1, !1, "", Na);
    return e._reactRootContainer = l, e[pt] = l.current, yr(e.nodeType === 8 ? e.parentNode : e), qt(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Wo(s);
      u.call(a);
    };
  }
  var s = es(e, 0, !1, null, null, !1, !1, "", Na);
  return e._reactRootContainer = s, e[pt] = s.current, yr(e.nodeType === 8 ? e.parentNode : e), qt(function() {
    ii(t, s, n, r);
  }), s;
}
function si(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Wo(l);
        u.call(s);
      };
    }
    ii(t, l, e, o);
  } else
    l = Sh(n, t, e, o, r);
  return Wo(l);
}
Bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (Cu(t, n | 1), Pe(t, J()), !(I & 6) && (On = J() + 500, Ft()));
      }
      break;
    case 13:
      qt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var o = we();
          Ze(r, e, 1, o);
        }
      }), ts(e, 1);
  }
};
xu = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    ts(e, 134217728);
  }
};
Hc = function(e) {
  if (e.tag === 13) {
    var t = zt(e), n = mt(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    ts(e, t);
  }
};
Wc = function() {
  return j;
};
Vc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
_l = function(e, t, n) {
  switch (t) {
    case "input":
      if (vl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = qo(r);
            if (!o)
              throw Error(k(90));
            kc(r), vl(r, o);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      t = n.value, t != null && yn(e, !!n.multiple, t, !1);
  }
};
Oc = Zu;
$c = qt;
var kh = { usingClientEntryPoint: !1, Events: [$r, an, qo, Nc, Rc, Zu] }, Kn = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ch = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ic(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || wh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!to.isDisabled && to.supportsFiber)
    try {
      Yo = to.inject(Ch), ot = to;
    } catch {
    }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rs(t))
    throw Error(k(200));
  return vh(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!rs(e))
    throw Error(k(299));
  var n = !1, r = "", o = pd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = es(e, 1, !1, null, null, n, !1, r, o), e[pt] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new ns(t);
};
Ie.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Ic(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return qt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!ui(t))
    throw Error(k(200));
  return si(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!rs(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = pd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = dd(t, null, e, 1, n ?? null, o, !1, i, l), e[pt] = t.current, yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new li(t);
};
Ie.render = function(e, t, n) {
  if (!ui(t))
    throw Error(k(200));
  return si(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!ui(e))
    throw Error(k(40));
  return e._reactRootContainer ? (qt(function() {
    si(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Zu;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ui(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return si(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function md() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md);
    } catch (e) {
      console.error(e);
    }
}
md(), pc.exports = Ie;
var xh = pc.exports, hd, Ra = xh;
hd = Ra.createRoot, Ra.hydrateRoot;
function Eh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Oa = "$$material";
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ce.apply(null, arguments);
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
var _h = !1;
function Ph(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Th(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Nh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !_h : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Th(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ph(o);
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
}(), he = "-ms-", Vo = "-moz-", A = "-webkit-", yd = "comm", os = "rule", is = "decl", Rh = "@import", gd = "@keyframes", Oh = "@layer", $h = Math.abs, ci = String.fromCharCode, zh = Object.assign;
function Lh(e, t) {
  return se(e, 0) ^ 45 ? (((t << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function vd(e) {
  return e.trim();
}
function Ih(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function M(e, t, n) {
  return e.replace(t, n);
}
function ou(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function no(e, t) {
  return t.push(e), e;
}
function Ah(e, t) {
  return e.map(t).join("");
}
var fi = 1, $n = 1, wd = 0, Te = 0, b = 0, An = "";
function di(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: fi, column: $n, length: l, return: "" };
}
function Qn(e, t) {
  return zh(di("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Mh() {
  return b;
}
function jh() {
  return b = Te > 0 ? se(An, --Te) : 0, $n--, b === 10 && ($n = 1, fi--), b;
}
function ze() {
  return b = Te < wd ? se(An, Te++) : 0, $n++, b === 10 && ($n = 1, fi++), b;
}
function lt() {
  return se(An, Te);
}
function yo() {
  return Te;
}
function Lr(e, t) {
  return _r(An, e, t);
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
function Sd(e) {
  return fi = $n = 1, wd = tt(An = e), Te = 0, [];
}
function kd(e) {
  return An = "", e;
}
function go(e) {
  return vd(Lr(Te - 1, iu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fh(e) {
  for (; (b = lt()) && b < 33; )
    ze();
  return Pr(e) > 2 || Pr(b) > 3 ? "" : " ";
}
function Dh(e, t) {
  for (; --t && ze() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return Lr(e, yo() + (t < 6 && lt() == 32 && ze() == 32));
}
function iu(e) {
  for (; ze(); )
    switch (b) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && iu(b);
        break;
      case 40:
        e === 41 && iu(e);
        break;
      case 92:
        ze();
        break;
    }
  return Te;
}
function Uh(e, t) {
  for (; ze() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && lt() === 47)
      break;
  return "/*" + Lr(t, Te - 1) + "*" + ci(e === 47 ? e : ze());
}
function Bh(e) {
  for (; !Pr(lt()); )
    ze();
  return Lr(e, Te);
}
function Hh(e) {
  return kd(vo("", null, null, null, [""], e = Sd(e), 0, [0], e));
}
function vo(e, t, n, r, o, i, l, u, s) {
  for (var a = 0, h = 0, d = l, m = 0, v = 0, y = 0, g = 1, x = 1, f = 1, c = 0, p = "", w = o, E = i, C = r, S = p; x; )
    switch (y = c, c = ze()) {
      case 40:
        if (y != 108 && se(S, d - 1) == 58) {
          ou(S += M(go(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += go(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Fh(y);
        break;
      case 92:
        S += Dh(yo() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            no(Wh(Uh(ze(), yo()), t, n), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        u[a++] = tt(S) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            x = 0;
          case 59 + h:
            f == -1 && (S = M(S, /\f/g, "")), v > 0 && tt(S) - d && no(v > 32 ? za(S + ";", r, n, d - 1) : za(M(S, " ", "") + ";", r, n, d - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (no(C = $a(S, t, n, a, h, o, u, p, w = [], E = [], d), i), c === 123)
              if (h === 0)
                vo(S, t, C, C, w, i, d, u, E);
              else
                switch (m === 99 && se(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vo(e, C, C, r && no($a(e, C, C, 0, 0, o, u, p, o, w = [], d), E), o, E, d, u, r ? w : E);
                    break;
                  default:
                    vo(S, C, C, C, [""], E, 0, u, E);
                }
        }
        a = h = v = 0, g = f = 1, p = S = "", d = l;
        break;
      case 58:
        d = 1 + tt(S), v = y;
      default:
        if (g < 1) {
          if (c == 123)
            --g;
          else if (c == 125 && g++ == 0 && jh() == 125)
            continue;
        }
        switch (S += ci(c), c * g) {
          case 38:
            f = h > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(S) - 1) * f, f = 1;
            break;
          case 64:
            lt() === 45 && (S += go(ze())), m = lt(), h = d = tt(p = S += Bh(yo())), c++;
            break;
          case 45:
            y === 45 && tt(S) == 2 && (g = 0);
        }
    }
  return i;
}
function $a(e, t, n, r, o, i, l, u, s, a, h) {
  for (var d = o - 1, m = o === 0 ? i : [""], v = ls(m), y = 0, g = 0, x = 0; y < r; ++y)
    for (var f = 0, c = _r(e, d + 1, d = $h(g = l[y])), p = e; f < v; ++f)
      (p = vd(g > 0 ? m[f] + " " + c : M(c, /&\f/g, m[f]))) && (s[x++] = p);
  return di(e, t, n, o === 0 ? os : u, s, a, h);
}
function Wh(e, t, n) {
  return di(e, t, n, yd, ci(Mh()), _r(e, 2, -2), 0);
}
function za(e, t, n, r) {
  return di(e, t, n, is, _r(e, 0, r), _r(e, r + 1, -1), r);
}
function Cn(e, t) {
  for (var n = "", r = ls(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Vh(e, t, n, r) {
  switch (e.type) {
    case Oh:
      if (e.children.length)
        break;
    case Rh:
    case is:
      return e.return = e.return || e.value;
    case yd:
      return "";
    case gd:
      return e.return = e.value + "{" + Cn(e.children, r) + "}";
    case os:
      e.value = e.props.join(",");
  }
  return tt(n = Cn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Kh(e) {
  var t = ls(e);
  return function(n, r, o, i) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, o, i) || "";
    return l;
  };
}
function Qh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Cd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Gh = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = lt(), o === 38 && i === 12 && (n[r] = 1), !Pr(i); )
    ze();
  return Lr(t, Te);
}, Yh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Pr(o)) {
      case 0:
        o === 38 && lt() === 12 && (n[r] = 1), t[r] += Gh(Te - 1, n, r);
        break;
      case 2:
        t[r] += go(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = lt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ci(o);
    }
  while (o = ze());
  return t;
}, Xh = function(t, n) {
  return kd(Yh(Sd(t), n));
}, La = /* @__PURE__ */ new WeakMap(), Zh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !La.get(r)) && !o) {
      La.set(t, !0);
      for (var i = [], l = Xh(n, i), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = i[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, Jh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function xd(e, t) {
  switch (Lh(e, t)) {
    case 5103:
      return A + "print-" + e + e;
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
      return A + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return A + e + Vo + e + he + e + e;
    case 6828:
    case 4268:
      return A + e + he + e + e;
    case 6165:
      return A + e + he + "flex-" + e + e;
    case 5187:
      return A + e + M(e, /(\w+).+(:[^]+)/, A + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return A + e + he + "flex-item-" + M(e, /flex-|-self/, "") + e;
    case 4675:
      return A + e + he + "flex-line-pack" + M(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return A + e + he + M(e, "shrink", "negative") + e;
    case 5292:
      return A + e + he + M(e, "basis", "preferred-size") + e;
    case 6060:
      return A + "box-" + M(e, "-grow", "") + A + e + he + M(e, "grow", "positive") + e;
    case 4554:
      return A + M(e, /([^-])(transform)/g, "$1" + A + "$2") + e;
    case 6187:
      return M(M(M(e, /(zoom-|grab)/, A + "$1"), /(image-set)/, A + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return M(e, /(image-set\([^]*)/, A + "$1$`$1");
    case 4968:
      return M(M(e, /(.+:)(flex-)?(.*)/, A + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + A + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return M(e, /(.+)-inline(.+)/, A + "$1$2") + e;
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
        switch (se(e, t + 1)) {
          case 109:
            if (se(e, t + 4) !== 45)
              break;
          case 102:
            return M(e, /(.+:)(.+)-([^]+)/, "$1" + A + "$2-$3$1" + Vo + (se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ou(e, "stretch") ? xd(M(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115)
        break;
    case 6444:
      switch (se(e, tt(e) - 3 - (~ou(e, "!important") && 10))) {
        case 107:
          return M(e, ":", ":" + A) + e;
        case 101:
          return M(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + A + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + A + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return A + e + he + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return A + e + he + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return A + e + he + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return A + e + he + e + e;
  }
  return e;
}
var qh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case is:
        t.return = xd(t.value, t.length);
        break;
      case gd:
        return Cn([Qn(t, {
          value: M(t.value, "@", "@" + A)
        })], o);
      case os:
        if (t.length)
          return Ah(t.props, function(i) {
            switch (Ih(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Cn([Qn(t, {
                  props: [M(i, /:(read-\w+)/, ":" + Vo + "$1")]
                })], o);
              case "::placeholder":
                return Cn([Qn(t, {
                  props: [M(i, /:(plac\w+)/, ":" + A + "input-$1")]
                }), Qn(t, {
                  props: [M(i, /:(plac\w+)/, ":" + Vo + "$1")]
                }), Qn(t, {
                  props: [M(i, /:(plac\w+)/, he + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, bh = [qh], ey = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var x = g.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || bh, i = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var x = g.getAttribute("data-emotion").split(" "), f = 1; f < x.length; f++)
        i[x[f]] = !0;
      u.push(g);
    }
  );
  var s, a = [Zh, Jh];
  {
    var h, d = [Vh, Qh(function(g) {
      h.insert(g);
    })], m = Kh(a.concat(o, d)), v = function(x) {
      return Cn(Hh(x), m);
    };
    s = function(x, f, c, p) {
      h = c, v(x ? x + "{" + f.styles + "}" : f.styles), p && (y.inserted[f.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Nh({
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
  return y.sheet.hydrate(u), y;
}, Ed = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le = typeof Symbol == "function" && Symbol.for, us = le ? Symbol.for("react.element") : 60103, ss = le ? Symbol.for("react.portal") : 60106, pi = le ? Symbol.for("react.fragment") : 60107, mi = le ? Symbol.for("react.strict_mode") : 60108, hi = le ? Symbol.for("react.profiler") : 60114, yi = le ? Symbol.for("react.provider") : 60109, gi = le ? Symbol.for("react.context") : 60110, as = le ? Symbol.for("react.async_mode") : 60111, vi = le ? Symbol.for("react.concurrent_mode") : 60111, wi = le ? Symbol.for("react.forward_ref") : 60112, Si = le ? Symbol.for("react.suspense") : 60113, ty = le ? Symbol.for("react.suspense_list") : 60120, ki = le ? Symbol.for("react.memo") : 60115, Ci = le ? Symbol.for("react.lazy") : 60116, ny = le ? Symbol.for("react.block") : 60121, ry = le ? Symbol.for("react.fundamental") : 60117, oy = le ? Symbol.for("react.responder") : 60118, iy = le ? Symbol.for("react.scope") : 60119;
function Me(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case us:
        switch (e = e.type, e) {
          case as:
          case vi:
          case pi:
          case hi:
          case mi:
          case Si:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case gi:
              case wi:
              case Ci:
              case ki:
              case yi:
                return e;
              default:
                return t;
            }
        }
      case ss:
        return t;
    }
  }
}
function _d(e) {
  return Me(e) === vi;
}
F.AsyncMode = as;
F.ConcurrentMode = vi;
F.ContextConsumer = gi;
F.ContextProvider = yi;
F.Element = us;
F.ForwardRef = wi;
F.Fragment = pi;
F.Lazy = Ci;
F.Memo = ki;
F.Portal = ss;
F.Profiler = hi;
F.StrictMode = mi;
F.Suspense = Si;
F.isAsyncMode = function(e) {
  return _d(e) || Me(e) === as;
};
F.isConcurrentMode = _d;
F.isContextConsumer = function(e) {
  return Me(e) === gi;
};
F.isContextProvider = function(e) {
  return Me(e) === yi;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === us;
};
F.isForwardRef = function(e) {
  return Me(e) === wi;
};
F.isFragment = function(e) {
  return Me(e) === pi;
};
F.isLazy = function(e) {
  return Me(e) === Ci;
};
F.isMemo = function(e) {
  return Me(e) === ki;
};
F.isPortal = function(e) {
  return Me(e) === ss;
};
F.isProfiler = function(e) {
  return Me(e) === hi;
};
F.isStrictMode = function(e) {
  return Me(e) === mi;
};
F.isSuspense = function(e) {
  return Me(e) === Si;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pi || e === vi || e === hi || e === mi || e === Si || e === ty || typeof e == "object" && e !== null && (e.$$typeof === Ci || e.$$typeof === ki || e.$$typeof === yi || e.$$typeof === gi || e.$$typeof === wi || e.$$typeof === ry || e.$$typeof === oy || e.$$typeof === iy || e.$$typeof === ny);
};
F.typeOf = Me;
Ed.exports = F;
var ly = Ed.exports, Pd = ly, uy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, sy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Td = {};
Td[Pd.ForwardRef] = uy;
Td[Pd.Memo] = sy;
var ay = !0;
function Nd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var cs = function(t, n, r) {
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
  ay === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, fs = function(t, n, r) {
  cs(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function cy(e) {
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
var fy = {
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
}, dy = !1, py = /[A-Z]|^ms/g, my = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Rd = function(t) {
  return t.charCodeAt(1) === 45;
}, Ia = function(t) {
  return t != null && typeof t != "boolean";
}, ll = /* @__PURE__ */ Cd(function(e) {
  return Rd(e) ? e : e.replace(py, "-$&").toLowerCase();
}), Aa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(my, function(r, o, i) {
          return nt = {
            name: o,
            styles: i,
            next: nt
          }, o;
        });
  }
  return fy[t] !== 1 && !Rd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, hy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Tr(e, t, n) {
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
        return nt = {
          name: o.name,
          styles: o.styles,
          next: nt
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var l = i.next;
        if (l !== void 0)
          for (; l !== void 0; )
            nt = {
              name: l.name,
              styles: l.styles,
              next: nt
            }, l = l.next;
        var u = i.styles + ";";
        return u;
      }
      return yy(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = nt, a = n(e);
        return nt = s, Tr(e, t, a);
      }
      break;
    }
  }
  var h = n;
  if (t == null)
    return h;
  var d = t[h];
  return d !== void 0 ? d : h;
}
function yy(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Tr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += i + "{" + t[u] + "}" : Ia(u) && (r += ll(i) + ":" + Aa(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && dy)
          throw new Error(hy);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Ia(l[s]) && (r += ll(i) + ":" + Aa(i, l[s]) + ";");
        else {
          var a = Tr(e, t, l);
          switch (i) {
            case "animation":
            case "animationName": {
              r += ll(i) + ":" + a + ";";
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
var Ma = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function xi(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Tr(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Tr(n, t, e[u]), r) {
      var s = i;
      o += s[u];
    }
  Ma.lastIndex = 0;
  for (var a = "", h; (h = Ma.exec(o)) !== null; )
    a += "-" + h[1];
  var d = cy(o) + a;
  return {
    name: d,
    styles: o,
    next: nt
  };
}
var gy = function(t) {
  return t();
}, Od = fl["useInsertionEffect"] ? fl["useInsertionEffect"] : !1, $d = Od || gy, ja = Od || N.useLayoutEffect, vy = !1, zd = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ey({
    key: "css"
  }) : null
);
zd.Provider;
var ds = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(zd);
    return t(n, o, r);
  });
}, Ir = /* @__PURE__ */ N.createContext({}), ps = {}.hasOwnProperty, lu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", wy = function(t, n) {
  var r = {};
  for (var o in n)
    ps.call(n, o) && (r[o] = n[o]);
  return r[lu] = t, r;
}, Sy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return cs(n, r, o), $d(function() {
    return fs(n, r, o);
  }), null;
}, ky = /* @__PURE__ */ ds(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[lu], i = [r], l = "";
  typeof e.className == "string" ? l = Nd(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = xi(i, void 0, N.useContext(Ir));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ps.call(e, a) && a !== "css" && a !== lu && !vy && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Sy, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), Cy = ky, ul = { exports: {} }, Fa;
function xy() {
  return Fa || (Fa = 1, function(e) {
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
  }(ul)), ul.exports;
}
xy();
var Da = function(t, n) {
  var r = arguments;
  if (n == null || !ps.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Cy, i[1] = wy(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return N.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Da || (Da = {}));
var Ey = /* @__PURE__ */ ds(function(e, t) {
  var n = e.styles, r = xi([n], void 0, N.useContext(Ir)), o = N.useRef();
  return ja(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), l.hydrate([s])), o.current = [l, u], function() {
      l.flush();
    };
  }, [t]), ja(function() {
    var i = o.current, l = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && fs(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), _y = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Py = /* @__PURE__ */ Cd(
  function(e) {
    return _y.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ty = !1, Ny = Py, Ry = function(t) {
  return t !== "theme";
}, Ua = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ny : Ry;
}, Ba = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Oy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return cs(n, r, o), $d(function() {
    return fs(n, r, o);
  }), null;
}, $y = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var u = Ba(t, n, r), s = u || Ua(o), a = !s("as");
  return function() {
    var h = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0)
      d.push.apply(d, h);
    else {
      var m = h[0];
      d.push(m[0]);
      for (var v = h.length, y = 1; y < v; y++)
        d.push(h[y], m[y]);
    }
    var g = ds(function(x, f, c) {
      var p = a && x.as || o, w = "", E = [], C = x;
      if (x.theme == null) {
        C = {};
        for (var S in x)
          C[S] = x[S];
        C.theme = N.useContext(Ir);
      }
      typeof x.className == "string" ? w = Nd(f.registered, E, x.className) : x.className != null && (w = x.className + " ");
      var T = xi(d.concat(E), f.registered, C);
      w += f.key + "-" + T.name, l !== void 0 && (w += " " + l);
      var D = a && u === void 0 ? Ua(p) : s, O = {};
      for (var de in x)
        a && de === "as" || D(de) && (O[de] = x[de]);
      return O.className = w, c && (O.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Oy, {
        cache: f,
        serialized: T,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ N.createElement(p, O));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return l === void 0 && Ty ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), g.withComponent = function(x, f) {
      var c = e(x, ce({}, n, f, {
        shouldForwardProp: Ba(g, f, !0)
      }));
      return c.apply(void 0, d);
    }, g;
  };
}, zy = [
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
], Ha = $y.bind(null);
zy.forEach(function(e) {
  Ha[e] = Ha(e);
});
function Ly(e) {
  return e == null || Object.keys(e).length === 0;
}
function Iy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ L(Ey, {
    styles: typeof t == "function" ? (o) => t(Ly(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Wa = [];
function Ay(e) {
  return Wa[0] = e, xi(Wa);
}
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ld(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ld(e[n]);
  }), t;
}
function Ko(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? ce({}, e) : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : nn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && nn(e[o]) ? r[o] = Ko(e[o], t[o], n) : n.clone ? r[o] = nn(t[o]) ? Ld(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const My = ["values", "unit", "step"], jy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ce({}, n, {
    [r.key]: r.val
  }), {});
};
function Fy(e) {
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
  } = e, o = ai(e, My), i = jy(t), l = Object.keys(i);
  function u(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function s(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function a(m, v) {
    const y = l.indexOf(v);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(y !== -1 && typeof t[l[y]] == "number" ? t[l[y]] : v) - r / 100}${n})`;
  }
  function h(m) {
    return l.indexOf(m) + 1 < l.length ? a(m, l[l.indexOf(m) + 1]) : u(m);
  }
  function d(m) {
    const v = l.indexOf(m);
    return v === 0 ? u(l[1]) : v === l.length - 1 ? s(l[v]) : a(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return ce({
    keys: l,
    values: i,
    up: u,
    down: s,
    between: a,
    only: h,
    not: d,
    unit: n
  }, o);
}
const Dy = {
  borderRadius: 4
}, Uy = Dy;
function ur(e, t) {
  return t ? Ko(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ms = {
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
}, Va = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ms[e]}px)`
};
function yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Va;
    return t.reduce((l, u, s) => (l[i.up(i.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Va;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(i.values || ms).indexOf(u) !== -1) {
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
function By(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ka(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Id(e) {
  if (typeof e != "string")
    throw new Error(Eh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ei(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Qo(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ei(e, n) || r, t && (o = t(o, r, e)), o;
}
function q(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (l) => {
    if (l[t] == null)
      return null;
    const u = l[t], s = l.theme, a = Ei(s, r) || {};
    return yt(l, u, (d) => {
      let m = Qo(a, o, d);
      return d === m && typeof d == "string" && (m = Qo(a, o, `${t}${d === "default" ? "" : Id(d)}`, d)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Hy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Wy = {
  m: "margin",
  p: "padding"
}, Vy = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Qa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ky = Hy((e) => {
  if (e.length > 2)
    if (Qa[e])
      e = Qa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Wy[t], o = Vy[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), hs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hs, ...ys];
function Ar(e, t, n, r) {
  var o;
  const i = (o = Ei(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function Ad(e) {
  return Ar(e, "spacing", 8);
}
function Mr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Qy(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Mr(t, n), r), {});
}
function Gy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Ky(n), i = Qy(o, r), l = e[n];
  return yt(e, l, i);
}
function Md(e, t) {
  const n = Ad(e.theme);
  return Object.keys(e).map((r) => Gy(e, t, r, n)).reduce(ur, {});
}
function G(e) {
  return Md(e, hs);
}
G.propTypes = {};
G.filterProps = hs;
function Y(e) {
  return Md(e, ys);
}
Y.propTypes = {};
Y.filterProps = ys;
function Yy(e = 8) {
  if (e.mui)
    return e;
  const t = Ad({
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
function De(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xy = Ve("border", De), Zy = Ve("borderTop", De), Jy = Ve("borderRight", De), qy = Ve("borderBottom", De), by = Ve("borderLeft", De), eg = Ve("borderColor"), tg = Ve("borderTopColor"), ng = Ve("borderRightColor"), rg = Ve("borderBottomColor"), og = Ve("borderLeftColor"), ig = Ve("outline", De), lg = Ve("outlineColor"), Pi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ar(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mr(t, r)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
Pi.propTypes = {};
Pi.filterProps = ["borderRadius"];
_i(Xy, Zy, Jy, qy, by, eg, tg, ng, rg, og, Pi, ig, lg);
const Ti = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      gap: Mr(t, r)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["gap"];
const Ni = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mr(t, r)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
Ni.propTypes = {};
Ni.filterProps = ["columnGap"];
const Ri = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mr(t, r)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
Ri.propTypes = {};
Ri.filterProps = ["rowGap"];
const ug = q({
  prop: "gridColumn"
}), sg = q({
  prop: "gridRow"
}), ag = q({
  prop: "gridAutoFlow"
}), cg = q({
  prop: "gridAutoColumns"
}), fg = q({
  prop: "gridAutoRows"
}), dg = q({
  prop: "gridTemplateColumns"
}), pg = q({
  prop: "gridTemplateRows"
}), mg = q({
  prop: "gridTemplateAreas"
}), hg = q({
  prop: "gridArea"
});
_i(Ti, Ni, Ri, ug, sg, ag, cg, fg, dg, pg, mg, hg);
function xn(e, t) {
  return t === "grey" ? t : e;
}
const yg = q({
  prop: "color",
  themeKey: "palette",
  transform: xn
}), gg = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xn
}), vg = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xn
});
_i(yg, gg, vg);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wg = q({
  prop: "width",
  transform: Re
}), gs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ms[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Re(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
gs.filterProps = ["maxWidth"];
const Sg = q({
  prop: "minWidth",
  transform: Re
}), kg = q({
  prop: "height",
  transform: Re
}), Cg = q({
  prop: "maxHeight",
  transform: Re
}), xg = q({
  prop: "minHeight",
  transform: Re
});
q({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
q({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const Eg = q({
  prop: "boxSizing"
});
_i(wg, gs, Sg, kg, Cg, xg, Eg);
const _g = {
  // borders
  border: {
    themeKey: "borders",
    transform: De
  },
  borderTop: {
    themeKey: "borders",
    transform: De
  },
  borderRight: {
    themeKey: "borders",
    transform: De
  },
  borderBottom: {
    themeKey: "borders",
    transform: De
  },
  borderLeft: {
    themeKey: "borders",
    transform: De
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
    transform: De
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
    transform: xn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xn
  },
  // spacing
  p: {
    style: Y
  },
  pt: {
    style: Y
  },
  pr: {
    style: Y
  },
  pb: {
    style: Y
  },
  pl: {
    style: Y
  },
  px: {
    style: Y
  },
  py: {
    style: Y
  },
  padding: {
    style: Y
  },
  paddingTop: {
    style: Y
  },
  paddingRight: {
    style: Y
  },
  paddingBottom: {
    style: Y
  },
  paddingLeft: {
    style: Y
  },
  paddingX: {
    style: Y
  },
  paddingY: {
    style: Y
  },
  paddingInline: {
    style: Y
  },
  paddingInlineStart: {
    style: Y
  },
  paddingInlineEnd: {
    style: Y
  },
  paddingBlock: {
    style: Y
  },
  paddingBlockStart: {
    style: Y
  },
  paddingBlockEnd: {
    style: Y
  },
  m: {
    style: G
  },
  mt: {
    style: G
  },
  mr: {
    style: G
  },
  mb: {
    style: G
  },
  ml: {
    style: G
  },
  mx: {
    style: G
  },
  my: {
    style: G
  },
  margin: {
    style: G
  },
  marginTop: {
    style: G
  },
  marginRight: {
    style: G
  },
  marginBottom: {
    style: G
  },
  marginLeft: {
    style: G
  },
  marginX: {
    style: G
  },
  marginY: {
    style: G
  },
  marginInline: {
    style: G
  },
  marginInlineStart: {
    style: G
  },
  marginInlineEnd: {
    style: G
  },
  marginBlock: {
    style: G
  },
  marginBlockStart: {
    style: G
  },
  marginBlockEnd: {
    style: G
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
    transform: Re
  },
  maxWidth: {
    style: gs
  },
  minWidth: {
    transform: Re
  },
  height: {
    transform: Re
  },
  maxHeight: {
    transform: Re
  },
  minHeight: {
    transform: Re
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
}, jd = _g;
function Pg(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Tg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ng() {
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
      transform: h,
      style: d
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Ei(o, a) || {};
    return d ? d(l) : yt(l, r, (y) => {
      let g = Qo(m, h, y);
      return y === g && typeof y == "string" && (g = Qo(m, h, `${n}${y === "default" ? "" : Id(y)}`, y)), s === !1 ? g : {
        [s]: g
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
    const u = (r = i.unstable_sxConfig) != null ? r : jd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(i);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const d = By(i.breakpoints), m = Object.keys(d);
      let v = d;
      return Object.keys(h).forEach((y) => {
        const g = Tg(h[y], i);
        if (g != null)
          if (typeof g == "object")
            if (u[y])
              v = ur(v, e(y, g, i, u));
            else {
              const x = yt({
                theme: i
              }, g, (f) => ({
                [y]: f
              }));
              Pg(x, g) ? v[y] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : v = ur(v, x);
            }
          else
            v = ur(v, e(y, g, i, u));
      }), !l && i.modularCssLayers ? {
        "@layer sx": Ka(m, v)
      } : Ka(m, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Fd = Ng();
Fd.filterProps = ["sx"];
const Rg = Fd;
function Og(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const $g = ["breakpoints", "palette", "spacing", "shape"];
function zg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = ai(e, $g), u = Fy(n), s = Yy(o);
  let a = Ko({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ce({
      mode: "light"
    }, r),
    spacing: s,
    shape: ce({}, Uy, i)
  }, l);
  return a.applyStyles = Og, a = t.reduce((h, d) => Ko(h, d), a), a.unstable_sxConfig = ce({}, jd, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(d) {
    return Rg({
      sx: d,
      theme: this
    });
  }, a;
}
function Lg(e) {
  return Object.keys(e).length === 0;
}
function vs(e = null) {
  const t = N.useContext(Ir);
  return !t || Lg(t) ? e : t;
}
const Ig = zg();
function Ag(e = Ig) {
  return vs(e);
}
function sl(e) {
  const t = Ay(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Mg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ag(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => sl(typeof l == "function" ? l(o) : l)) : i = sl(i)), /* @__PURE__ */ L(Iy, {
    styles: i
  });
}
const jg = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Fg = jg;
let Ga = 0;
function Dg(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Ga += 1, n(`mui-${Ga}`));
  }, [t]), r;
}
const Ya = fl["useId".toString()];
function Ug(e) {
  if (Ya !== void 0) {
    const t = Ya();
    return e ?? t;
  }
  return Dg(e);
}
const Bg = /* @__PURE__ */ N.createContext(null), Dd = Bg;
function Ud() {
  return N.useContext(Dd);
}
const Hg = typeof Symbol == "function" && Symbol.for, Wg = Hg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Vg(e, t) {
  return typeof t == "function" ? t(e) : ce({}, e, t);
}
function Kg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ud(), o = N.useMemo(() => {
    const i = r === null ? n : Vg(r, n);
    return i != null && (i[Wg] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ L(Dd.Provider, {
    value: o,
    children: t
  });
}
const Qg = ["value"], Gg = /* @__PURE__ */ N.createContext();
function Yg(e) {
  let {
    value: t
  } = e, n = ai(e, Qg);
  return /* @__PURE__ */ L(Gg.Provider, ce({
    value: t ?? !0
  }, n));
}
const Xg = /* @__PURE__ */ N.createContext(void 0);
function Zg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ L(Xg.Provider, {
    value: e,
    children: t
  });
}
function Jg(e) {
  const t = vs(), n = Ug() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Fg(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ L(Mg, {
    styles: o
  }) : null;
}
const Xa = {};
function Za(e, t, n, r = !1) {
  return N.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o), l = e ? ce({}, t, {
        [e]: i
      }) : i;
      return r ? () => l : l;
    }
    return e ? ce({}, t, {
      [e]: n
    }) : ce({}, t, n);
  }, [e, t, n, r]);
}
function qg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = vs(Xa), i = Ud() || Xa, l = Za(r, o, n), u = Za(r, i, n, !0), s = l.direction === "rtl", a = Jg(l);
  return /* @__PURE__ */ L(Kg, {
    theme: u,
    children: /* @__PURE__ */ L(Ir.Provider, {
      value: l,
      children: /* @__PURE__ */ L(Yg, {
        value: s,
        children: /* @__PURE__ */ be(Zg, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const bg = ["theme"];
function ev(e) {
  let {
    theme: t
  } = e, n = ai(e, bg);
  const r = t[Oa];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = ce({}, r, {
    vars: null
  }) : t && !t.vars && (o = ce({}, t, {
    vars: null
  }))), /* @__PURE__ */ L(qg, ce({}, n, {
    themeId: r ? Oa : void 0,
    theme: o
  }));
}
const Bd = [137, 80, 78, 71, 13, 10, 26, 10];
function tv(e) {
  if (e.length < 26)
    return null;
  for (let t = 0; t < 8; t++)
    if (e[t] !== Bd[t])
      return null;
  return e[25];
}
function nv(e) {
  return e === 4 || e === 6;
}
function rv(e) {
  if (e.length < 8)
    return !1;
  for (let t = 0; t < 8; t++)
    if (e[t] !== Bd[t])
      return !1;
  return !0;
}
const ov = 0.01, iv = 250;
async function lv(e) {
  const t = await createImageBitmap(e);
  try {
    const n = document.createElement("canvas");
    n.width = t.width, n.height = t.height;
    const r = n.getContext("2d", { willReadFrequently: !0 });
    if (!r)
      throw new Error("Canvas context unavailable");
    r.drawImage(t, 0, 0);
    const i = r.getImageData(0, 0, t.width, t.height).data, l = t.width * t.height;
    let u = 0;
    for (let s = 3; s < i.length; s += 4)
      i[s] < iv && u++;
    return u / l;
  } finally {
    t.close();
  }
}
async function Hd(e) {
  const t = await createImageBitmap(e);
  try {
    return { width: t.width, height: t.height };
  } finally {
    t.close();
  }
}
async function uv(e, t) {
  const n = new Uint8Array(await e.slice(0, 32).arrayBuffer());
  if (!rv(n))
    return { ok: !1, reason: "Result is not a PNG." };
  const r = tv(n);
  if (!nv(r))
    return {
      ok: !1,
      reason: "Result has no alpha channel, so it cannot be a transparent cutout."
    };
  let o;
  try {
    o = await Hd(e);
  } catch {
    return { ok: !1, reason: "Could not read result image dimensions." };
  }
  if (t && (o.width !== t.width || o.height !== t.height))
    return {
      ok: !1,
      reason: `Result is ${o.width}x${o.height}, source is ${t.width}x${t.height}.`
    };
  let i;
  try {
    i = await lv(e);
  } catch {
    return { ok: !1, reason: "Could not analyze result image transparency." };
  }
  return i < ov ? {
    ok: !1,
    reason: "Result is fully opaque. The background was not removed."
  } : { ok: !0 };
}
const sv = {
  fal_auth_failed: "The fal.ai API key is missing or invalid.",
  rate_limited: "fal.ai is rate limiting requests. Wait a moment and try again.",
  content_policy_rejection: "Seedream could not process this prompt or image. Try a different prompt.",
  seedream_timeout: "Seedream took too long to respond. Please try again.",
  source_image_unreachable: "The proxy could not download the Content Hub preview rendition.",
  source_image_too_large: "The Content Hub preview rendition is too large to transform.",
  unsupported_source_image: "Seedream requires a JPEG, PNG, or WebP preview rendition.",
  image_host_not_allowed: "This Content Hub image host is not allowed by the proxy.",
  seedream_result_too_large: "The generated image is too large to upload from this component.",
  unauthorized: "The image transform proxy rejected this component configuration."
};
function av(e) {
  const t = e.toLowerCase();
  return /\b(transparent|alpha|cut\s*-?out|knock\s*-?out|isolate)\b/.test(t) ? !0 : /\b(remove|erase|delete|without)\b/.test(t) && /\b(background|backdrop|bg)\b/.test(t);
}
async function cv(e) {
  const t = await fetch(e, { method: "GET" });
  if (!t.ok)
    throw new Error("Could not load source image for dimension check.");
  const n = await t.blob();
  return Hd(n);
}
async function fv(e, t, n) {
  const r = new AbortController(), o = window.setTimeout(
    () => r.abort(),
    n.requestTimeoutMs ?? 65e3
  ), i = av(t);
  let l;
  try {
    if (i)
      try {
        l = await cv(e);
      } catch {
        console.warn("[CHImageTransform] Could not fetch source dimensions for cutout validation.");
      }
    const u = await fetch(
      `${n.apiBaseUrl.replace(/\/+$/, "")}/api/seedream/transform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...n.apiToken ? { Authorization: `Bearer ${n.apiToken}` } : {}
        },
        body: JSON.stringify({
          imageUrl: e,
          prompt: t.trim(),
          outputFormat: "png",
          removeBackground: i
        }),
        signal: r.signal
      }
    );
    if (!u.ok) {
      const d = await u.json().catch(() => ({})), m = typeof (d == null ? void 0 : d.error) == "string" ? d.error : "generation_failed";
      throw new Error(sv[m] || "Image generation failed. Please try again.");
    }
    if (!(u.headers.get("Content-Type") || "").split(";")[0].trim().startsWith("image/"))
      throw new Error("The proxy returned an invalid image response.");
    const a = await u.blob();
    if (!a.size)
      throw new Error("The proxy returned an empty image.");
    const h = await pv(a);
    if (i) {
      const d = await uv(h, l ?? null);
      if (!d.ok)
        throw new Error(d.reason);
    }
    return {
      blob: h,
      objectUrl: URL.createObjectURL(h),
      mimeType: "image/png",
      isCutout: i,
      sourceDimensions: l
    };
  } catch (u) {
    throw u instanceof DOMException && u.name === "AbortError" ? new Error("Image generation timed out. Please try again.") : u;
  } finally {
    window.clearTimeout(o);
  }
}
function dv(e) {
  const t = new Uint8Array(e, 0, Math.min(4, e.byteLength));
  return t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71;
}
async function pv(e) {
  const t = await e.arrayBuffer();
  return dv(t) ? new Blob([t], { type: "image/png" }) : mv(new Blob([t], { type: e.type || "image/jpeg" }));
}
async function mv(e) {
  const t = await createImageBitmap(e);
  try {
    const n = document.createElement("canvas");
    n.width = t.width, n.height = t.height;
    const r = n.getContext("2d");
    if (!r)
      throw new Error("The browser could not prepare the generated image.");
    return r.drawImage(t, 0, 0), await new Promise((o, i) => {
      n.toBlob(
        (l) => l ? o(l) : i(new Error("The browser could not create a PNG image.")),
        "image/png"
      );
    });
  } finally {
    t.close();
  }
}
const Ja = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview",
  "medium"
];
function Oi(e) {
  if (typeof e == "string")
    return e.trim();
  if (typeof e == "number" || typeof e == "boolean")
    return String(e);
  if (e && typeof e == "object") {
    const t = e;
    for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en"]) {
      const r = Oi(t[n]);
      if (r)
        return r;
    }
  }
  return "";
}
function al(e, t) {
  var n;
  for (const r of t) {
    const o = Oi((n = e == null ? void 0 : e.properties) == null ? void 0 : n[r]);
    if (o)
      return o;
  }
  return "";
}
function uu(e) {
  return Oi((e == null ? void 0 : e.href) ?? e);
}
function hv(e, t) {
  var n, r, o, i, l;
  for (const u of t)
    try {
      const s = uu((o = (r = (n = e == null ? void 0 : e.getRendition) == null ? void 0 : n.call(e, u)) == null ? void 0 : r.items) == null ? void 0 : o[0]);
      if (s)
        return s;
    } catch {
    }
  for (const u of t) {
    const s = Array.isArray(e == null ? void 0 : e.renditions) ? e.renditions.find((h) => (h == null ? void 0 : h.name) === u) : (i = e == null ? void 0 : e.renditions) == null ? void 0 : i[u], a = uu(((l = s == null ? void 0 : s.items) == null ? void 0 : l[0]) ?? (s == null ? void 0 : s[0]));
    if (a)
      return a;
  }
  return "";
}
function yv(e, t) {
  var n, r;
  for (const o of t) {
    const i = uu((r = (n = e == null ? void 0 : e.renditions) == null ? void 0 : n[o]) == null ? void 0 : r[0]);
    if (i)
      return i;
  }
  return "";
}
function gv(e) {
  return /\.png$/i.test(e) ? "image/png" : /\.webp$/i.test(e) ? "image/webp" : /\.jpe?g$/i.test(e) ? "image/jpeg" : "";
}
async function vv(e, t) {
  var u, s;
  const n = Oi(((u = t == null ? void 0 : t.systemProperties) == null ? void 0 : u.id) ?? (t == null ? void 0 : t.id));
  if (!n)
    return null;
  let r = hv(t, Ja);
  if (!r && ((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    try {
      const a = await e.raw.getAsync(`/api/entities/${n}`);
      a != null && a.isSuccessStatusCode && (r || (r = yv(a.content, Ja)));
    } catch {
    }
  const o = al(t, ["FileName", "fileName"]) || `asset-${n}.jpg`, i = gv(o) || al(t, ["MimeType", "mimeType", "ContentType"]) || "image/jpeg", l = al(t, ["Title", "title", "Name", "name"]) || o;
  return !r || !i.toLowerCase().startsWith("image/") ? null : {
    id: n,
    name: l,
    fileName: o,
    mimeType: i,
    previewUrl: r,
    sourceUrl: r
  };
}
function wv(e) {
  return e === "image/webp" ? "webp" : "png";
}
function Sv(e = /* @__PURE__ */ new Date()) {
  const t = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ], n = String(e.getDate()).padStart(2, "0"), r = String(e.getHours()).padStart(2, "0"), o = String(e.getMinutes()).padStart(2, "0");
  return `${n}${t[e.getMonth()]}${e.getFullYear()}-${r}${o}`;
}
function qa(e) {
  let t = e;
  if (typeof t == "string") {
    const n = t.trim();
    if (!n)
      return null;
    try {
      t = JSON.parse(n);
    } catch {
      return null;
    }
  }
  return !t || typeof t != "object" || Array.isArray(t) ? null : t;
}
function ws(e) {
  const t = qa(e);
  return t ? "asset_id" in t || "assetId" in t || "AssetId" in t || "asset_identifier" in t || "assetIdentifier" in t || "AssetIdentifier" in t || "success" in t ? t : qa(t.content ?? t.Content) ?? t : null;
}
function xt(e) {
  if (typeof e == "string") {
    const n = e.match(/\/api\/entities\/(\d+)/i);
    if (n)
      return xt(n[1]);
  }
  if (e && typeof e == "object") {
    const n = e;
    return xt(n.id ?? n.Id ?? n.href ?? n.Href);
  }
  const t = typeof e == "number" ? e : Number(e);
  return Number.isSafeInteger(t) && t > 0 ? t : null;
}
function Wd(e) {
  const t = ws(e);
  return t ? xt(t.asset_id) ?? xt(t.assetId) ?? xt(t.AssetId) ?? xt(t.id) ?? xt(t.Id) : null;
}
function kv(e) {
  const t = ws(e);
  if (!t)
    return null;
  const n = t.asset_identifier ?? t.assetIdentifier ?? t.AssetIdentifier ?? t.identifier ?? t.Identifier;
  return typeof n != "string" ? null : n.trim() || null;
}
function Cv(e) {
  const t = ws(e);
  return !t || t.success !== !1 ? null : typeof t.message == "string" && t.message.trim() ? t.message.trim() : "Content Hub reported that the upload failed.";
}
function Vd(e, t) {
  if (!e)
    return "";
  const n = t.toLowerCase();
  if (typeof e.get == "function") {
    const i = e.get(t);
    return i == null ? "" : String(i);
  }
  if (e instanceof Map) {
    for (const [i, l] of e.entries())
      if (String(i).toLowerCase() === n)
        return l == null ? "" : String(l);
    return "";
  }
  if (typeof e != "object")
    return "";
  const r = Object.entries(e).find(
    ([i]) => i.toLowerCase() === n
  ), o = r == null ? void 0 : r[1];
  return Array.isArray(o) ? o[0] == null ? "" : String(o[0]) : o == null ? "" : String(o);
}
function Kd(e) {
  return xt(Vd(e, "location"));
}
function xv(e) {
  const n = Vd(e, "location").match(/\/api\/entities\/identifier\/([^/?#]+)/i);
  if (!n)
    return null;
  try {
    return decodeURIComponent(n[1]);
  } catch {
    return n[1];
  }
}
async function Ev(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    return null;
  const n = await e.raw.getAsync(
    `/api/entities/identifier/${encodeURIComponent(t)}`
  );
  return (n == null ? void 0 : n.isSuccessStatusCode) === !1 ? null : Wd(n == null ? void 0 : n.content) ?? Kd(n == null ? void 0 : n.responseHeaders);
}
async function _v(e, t) {
  const n = Wd(t == null ? void 0 : t.content) ?? Kd(t == null ? void 0 : t.responseHeaders);
  if (n)
    return n;
  const r = kv(t == null ? void 0 : t.content) ?? xv(t == null ? void 0 : t.responseHeaders);
  if (r) {
    const o = await Ev(e, r);
    if (o)
      return o;
    throw new Error(
      `Content Hub created the asset (${r}) but did not return its numeric asset ID.`
    );
  }
  throw new Error("Content Hub created the asset but did not return its Content Hub ID.");
}
function ba(e) {
  const t = e.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return t.startsWith("file") || t.includes("mimetype") || t.includes("identifier") || t.includes("contenthubid") || ["width", "height", "imagewidth", "imageheight", "dimensions"].includes(t);
}
function su(e) {
  return typeof e == "number" ? !0 : Array.isArray(e) ? e.some(su) : e && typeof e == "object" ? Object.values(e).some(su) : !1;
}
function Pv(e) {
  return /assetmedia|mediamatrix|rendition|repository|lifecycle|publiclink|version|masterasset/i.test(
    e
  );
}
async function ec(e, t, n) {
  var o;
  if (!((o = e.raw) != null && o.putAsync))
    throw new Error("The Content Hub entity client is unavailable for setting asset variant.");
  const r = await e.raw.putAsync(`/api/entities/${t}`, {
    entitydefinition: { href: "/api/entitydefinitions/M.Asset" },
    properties: { AssetVariant: n }
  });
  if (!r.isSuccessStatusCode)
    throw new Error(
      `Content Hub could not set assetVariant property (HTTP ${r.statusCode ?? "unknown"}).`
    );
}
async function Tv(e, t, n) {
  var r;
  if (!((r = e.raw) != null && r.putAsync))
    return console.warn(
      "[CHImageTransform] Entity client unavailable for creating EPAMCutoutToSourceAsset relation."
    ), !1;
  try {
    const o = await e.raw.putAsync(`/api/entities/${n}`, {
      entitydefinition: { href: "/api/entitydefinitions/M.Asset" },
      relations: {
        EPAMCutoutToSourceAsset: {
          parents: [{ href: `/api/entities/${t}` }]
        }
      }
    });
    return o.isSuccessStatusCode ? !0 : (console.warn(
      `[CHImageTransform] Could not create EPAMCutoutToSourceAsset relation (HTTP ${o.statusCode ?? "unknown"}). The relation may not exist on this instance.`
    ), !1);
  } catch (o) {
    return console.warn(
      "[CHImageTransform] Could not create EPAMCutoutToSourceAsset relation.",
      o
    ), !1;
  }
}
async function Nv(e, t, n) {
  var m, v;
  if (!((m = e.raw) != null && m.getAsync) || !((v = e.raw) != null && v.postAsync))
    throw new Error("The Content Hub entity client is unavailable for copying metadata.");
  const r = await e.raw.getAsync(`/api/entities/${t}`);
  if (!r.isSuccessStatusCode || !r.content)
    throw new Error("Content Hub could not load the original asset metadata.");
  const o = r.content.properties ?? {}, i = {}, l = Object.entries(o).map(
    ([y, g]) => {
      const x = su(g);
      return x && !ba(y) && (i[y] = g), {
        property: y,
        method: ba(y) || x ? "Ignore" : "Keep"
      };
    }
  ), u = Object.keys(r.content.relations ?? {}).map(
    (y) => ({
      relation: y,
      method: Pv(y) ? "Ignore" : "Keep"
    })
  ), s = {
    destination_entity_id: n,
    property_copy_options: l,
    relation_copy_options: u
  }, a = [0, 750, 2e3];
  let h, d = "";
  for (const y of a) {
    y && await new Promise((f) => window.setTimeout(f, y));
    const g = await e.raw.postAsync(
      `/api/entities/${t}/copy`,
      s
    ), x = g.content && typeof g.content == "object" ? g.content : void 0;
    if (g.isSuccessStatusCode && (x == null ? void 0 : x.success) !== !1) {
      await Rv(
        e,
        n,
        i,
        r.content.entitydefinition
      );
      return;
    }
    h = g.statusCode, d = typeof (x == null ? void 0 : x.message) == "string" ? x.message : "";
  }
  throw new Error(
    `The new asset was created as ${n}, but its metadata could not be copied (HTTP ${h ?? "unknown"}${d ? `: ${d}` : ""}).`
  );
}
async function Rv(e, t, n, r) {
  var o;
  if (!(!((o = e.raw) != null && o.putAsync) || Object.keys(n).length === 0))
    for (const [i, l] of Object.entries(n))
      try {
        (await e.raw.putAsync(`/api/entities/${t}`, {
          entitydefinition: {
            href: (r == null ? void 0 : r.href) || "/api/entitydefinitions/M.Asset"
          },
          properties: { [i]: l }
        })).isSuccessStatusCode || console.warn(`[CHImageTransform] Could not copy numeric property "${i}".`);
      } catch {
        console.warn(`[CHImageTransform] Could not copy numeric property "${i}".`);
      }
}
async function Ov(e, t, n, r, o) {
  var f;
  if (!((f = e == null ? void 0 : e.uploads) != null && f.uploadAsync))
    throw new Error("The Content Hub upload client is not available in this component context.");
  const i = Number(t.id);
  if (!Number.isSafeInteger(i) || i <= 0)
    throw new Error("Content Hub returned an invalid numeric asset ID.");
  const l = o, u = !!n.isCutout, s = n.blob.type === "image/png" ? n.blob : new Blob([await n.blob.arrayBuffer()], { type: "image/png" }), a = wv(s.type), h = t.fileName.replace(/\.[^.]+$/, "") || `asset-${t.id}`, d = u && l === "new-asset" ? `${h}-cutout.${a}` : `${h}-${Sv()}.${a}`, m = await s.arrayBuffer(), v = {
    source: {
      name: d,
      getReadableSourceAsync: () => Promise.resolve(m)
    },
    configurationName: r.uploadConfiguration || "AssetUploadConfiguration",
    actionName: l === "version" ? "NewMainFile" : "NewAsset",
    actionParameters: l === "version" ? { AssetId: String(i) } : {}
  }, y = await e.uploads.uploadAsync(v), g = Cv(y == null ? void 0 : y.content);
  if ((y == null ? void 0 : y.isSuccessStatusCode) === !1 || g)
    throw new Error(
      `Content Hub could not ${l === "version" ? "create the new version" : "create the new asset"} (HTTP ${(y == null ? void 0 : y.statusCode) ?? "unknown"}${g ? `: ${g}` : ""}).`
    );
  if (l === "version")
    return u && await ec(e, i, "cutout"), i;
  const x = await _v(e, y);
  return await Nv(e, i, x), u && (await ec(e, x, "cutout"), await Tv(e, i, x)), x;
}
function tc(e) {
  return e instanceof Error ? e.message : "Something went wrong. Please try again.";
}
function $v({ client: e, entity: t, options: n }) {
  const [r, o] = N.useState(null), [i, l] = N.useState(!0), [u, s] = N.useState(""), [a, h] = N.useState(null), [d, m] = N.useState(!1), [v, y] = N.useState(null), [g, x] = N.useState(""), f = v != null, c = N.useMemo(() => {
    var S, T, D;
    const C = (S = n.apiBaseUrl) == null ? void 0 : S.trim();
    return C ? {
      apiBaseUrl: C,
      apiToken: (T = n.apiToken) == null ? void 0 : T.trim(),
      uploadConfiguration: ((D = n.uploadConfiguration) == null ? void 0 : D.trim()) || "AssetUploadConfiguration",
      requestTimeoutMs: Math.max(165e3, n.requestTimeoutMs ?? 165e3)
    } : null;
  }, [n]);
  N.useEffect(() => {
    let C = !0;
    return l(!0), vv(e, t).then((S) => {
      C && o(S);
    }).finally(() => {
      C && l(!1);
    }), () => {
      C = !1;
    };
  }, [e, t]), N.useEffect(
    () => () => {
      a && URL.revokeObjectURL(a.objectUrl);
    },
    [a]
  );
  const p = N.useCallback(() => {
    a && URL.revokeObjectURL(a.objectUrl), h(null), x("");
  }, [a]), w = N.useCallback(async () => {
    if (!(!r || !c || !u.trim())) {
      m(!0), x(""), a && URL.revokeObjectURL(a.objectUrl), h(null);
      try {
        h(
          await fv(
            r.sourceUrl,
            u.trim(),
            c
          )
        );
      } catch (C) {
        x(tc(C));
      } finally {
        m(!1);
      }
    }
  }, [r, a, u, c]), E = N.useCallback(async (C) => {
    if (!(!r || !a || !c)) {
      y(C), x("");
      try {
        const S = await Ov(
          e,
          r,
          a,
          c,
          C
        );
        C === "version" ? window.location.reload() : window.location.assign(`/en-us/asset/${S}`);
      } catch (S) {
        x(tc(S));
      } finally {
        y(null);
      }
    }
  }, [r, e, a, c]);
  return c ? i ? /* @__PURE__ */ be("section", { className: "ch-image-transform ch-image-transform--center", children: [
    /* @__PURE__ */ L("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ L("p", { children: "Loading image…" })
  ] }) : r ? /* @__PURE__ */ be("section", { className: "ch-image-transform", children: [
    /* @__PURE__ */ L("header", { className: "ch-image-transform__header", children: /* @__PURE__ */ L("h2", { children: "Transform image" }) }),
    /* @__PURE__ */ be("div", { className: `ch-image-transform__images${a ? " ch-image-transform__images--split" : ""}`, children: [
      /* @__PURE__ */ be("figure", { children: [
        /* @__PURE__ */ L("span", { children: "Before" }),
        /* @__PURE__ */ L("img", { src: r.previewUrl, alt: `Current version of ${r.name}` })
      ] }),
      a ? /* @__PURE__ */ be("figure", { className: "ch-image-transform__images-after", children: [
        /* @__PURE__ */ L("span", { children: "After" }),
        /* @__PURE__ */ L("img", { src: a.objectUrl, alt: a.altText || `Generated version of ${r.name}` })
      ] }) : null
    ] }),
    /* @__PURE__ */ be("div", { className: "ch-image-transform__controls", children: [
      /* @__PURE__ */ L("label", { htmlFor: "ch-image-transform-prompt", children: "Describe the new image" }),
      /* @__PURE__ */ L(
        "textarea",
        {
          id: "ch-image-transform-prompt",
          value: u,
          maxLength: 1024,
          rows: 4,
          disabled: d || f,
          placeholder: "For example: Remove the background, or reimagine this scene at sunset with warm cinematic lighting",
          onChange: (C) => s(C.target.value)
        }
      ),
      d ? /* @__PURE__ */ be("div", { className: "ch-image-transform__working", role: "status", children: [
        /* @__PURE__ */ L("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
        /* @__PURE__ */ L("span", { children: "Generating with Seedream. Complex edits can take up to two minutes." })
      ] }) : null,
      g ? /* @__PURE__ */ L("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: g }) : null,
      /* @__PURE__ */ L("div", { className: "ch-image-transform__actions", children: a ? /* @__PURE__ */ be(vp, { children: [
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button", disabled: f, onClick: () => E("version"), children: v === "version" ? "Creating version…" : "Create version" }),
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: () => E("new-asset"), children: v === "new-asset" ? "Creating asset…" : "Create as new asset" }),
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: p, children: "Discard and try again" })
      ] }) : /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button", disabled: !u.trim() || d, onClick: w, children: d ? "Generating…" : "Generate" }) })
    ] })
  ] }) : /* @__PURE__ */ L("section", { className: "ch-image-transform", children: /* @__PURE__ */ L("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: "This component needs an image asset with an accessible preview and download rendition." }) }) : /* @__PURE__ */ L("section", { className: "ch-image-transform", children: /* @__PURE__ */ be("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: [
    "Configure ",
    /* @__PURE__ */ L("code", { children: "apiBaseUrl" }),
    " for this external component."
  ] }) });
}
const zv = ["config", "settings", "json", "componentOptions"], Lv = ["newAsset", "newVersion"];
function Qd(e) {
  if (e) {
    if (typeof e == "string")
      try {
        return Qd(JSON.parse(e));
      } catch {
        return;
      }
    return typeof e == "object" && !Array.isArray(e) ? e : void 0;
  }
}
function Gn(e, t) {
  const n = Object.entries(e).find(([r]) => r.toLowerCase() === t.toLowerCase());
  return n == null ? void 0 : n[1];
}
function cl(e) {
  if (typeof e != "string")
    return;
  const t = e.trim();
  return t && !/^https?:\/\/your|^your[-_]|^optional-/i.test(t) ? t : void 0;
}
function Iv(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : void 0;
}
function Av(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  if (t === "newasset")
    return "newAsset";
  if (t === "newversion")
    return "newVersion";
  if (Lv.includes(e.trim()))
    return e.trim();
}
function wo(e) {
  const t = Qd(e);
  if (!t)
    return {};
  let n = {
    apiBaseUrl: cl(Gn(t, "apiBaseUrl")),
    apiToken: cl(Gn(t, "apiToken")),
    uploadConfiguration: cl(Gn(t, "uploadConfiguration")),
    requestTimeoutMs: Iv(Gn(t, "requestTimeoutMs")),
    cutoutOutputMode: Av(Gn(t, "cutoutOutputMode"))
  };
  for (const r of zv)
    t[r] != null && (n = { ...n, ...wo(t[r]) });
  return n;
}
function Mv(e, t) {
  return {
    ...wo(t == null ? void 0 : t.config),
    ...wo(e),
    ...wo(t)
  };
}
function jv(e) {
  const t = hd(e);
  return {
    render(n) {
      const r = Mv(n == null ? void 0 : n.options, n);
      t.render(
        /* @__PURE__ */ L(ev, { theme: n.theme, children: /* @__PURE__ */ L(
          $v,
          {
            client: n.client,
            entity: n.entity,
            options: r
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
  jv as default
};
