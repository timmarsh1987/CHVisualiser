(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-image-transform{display:flex;flex-direction:column;width:100%;min-width:0;min-height:100%;box-sizing:border-box;overflow:auto;color:#102a43;background:#f5f8fb;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.ch-image-transform *,.ch-image-transform *:before,.ch-image-transform *:after{box-sizing:border-box}.ch-image-transform--center{align-items:center;justify-content:center;gap:10px;color:#486581}.ch-image-transform__header{padding:14px;border-bottom:1px solid #d9e2ec;background:#fff}.ch-image-transform__header h2,.ch-image-transform__header p{margin:0}.ch-image-transform__header h2{font-size:17px}.ch-image-transform__images{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:14px}.ch-image-transform__images--split{grid-template-columns:repeat(2,minmax(0,1fr))}.ch-image-transform__images figure{position:relative;min-width:0;margin:0;overflow:hidden;border:1px solid #d9e2ec;border-radius:9px;background:#e9eef3}.ch-image-transform__images-after{background-color:#f7fafc;background-image:linear-gradient(45deg,#d9e2ec 25%,transparent 25%),linear-gradient(-45deg,#d9e2ec 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#d9e2ec 75%),linear-gradient(-45deg,transparent 75%,#d9e2ec 75%);background-size:16px 16px;background-position:0 0,0 8px,8px -8px,-8px 0}.ch-image-transform__images figure>span{position:absolute;z-index:1;top:8px;left:8px;padding:3px 7px;border-radius:999px;color:#fff;background:rgb(16 42 67 / 82%);font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-transform__images img{display:block;width:100%;height:clamp(180px,38vh,420px);object-fit:contain}.ch-image-transform__controls{display:grid;gap:10px;padding:0 14px 18px}.ch-image-transform__controls label{font-size:12px;font-weight:700}.ch-image-transform__controls textarea{width:100%;resize:vertical;min-height:88px;padding:10px;border:1px solid #bcccdc;border-radius:8px;color:#102a43;background:#fff;font:inherit;font-size:13px;line-height:1.45}.ch-image-transform__controls textarea:focus{outline:2px solid #9ac7f1;border-color:#0b5cab}.ch-image-transform__working{display:flex;align-items:center;gap:9px;color:#486581;font-size:12px}.ch-image-transform__spinner{display:inline-block;flex:0 0 auto;width:22px;height:22px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-transform-spin .8s linear infinite}.ch-image-transform__actions{display:flex;flex-wrap:wrap;gap:8px}.ch-image-transform__button{flex:1 1 170px;min-height:38px;padding:9px 13px;border:1px solid #0b5cab;border-radius:8px;color:#fff;background:#0b5cab;font-size:12px;font-weight:700;cursor:pointer}.ch-image-transform__button--secondary{color:#0b5cab;background:#fff}.ch-image-transform__button:disabled{opacity:.55;cursor:not-allowed}.ch-image-transform__notice{margin:14px;padding:10px 12px;border:1px solid #bcccdc;border-radius:8px;background:#fff;font-size:12px;line-height:1.45}.ch-image-transform__controls .ch-image-transform__notice{margin:0}.ch-image-transform__notice--error{border-color:#f9b8b8;color:#ab091e;background:#fff5f5}.ch-image-transform__notice--success{border-color:#9adbad;color:#0f6b35;background:#f0fff4}@keyframes ch-image-transform-spin{to{transform:rotate(360deg)}}@media (max-width: 520px){.ch-image-transform__images--split{grid-template-columns:minmax(0,1fr)}.ch-image-transform__images img{height:220px}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Hd(e, t) {
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
function Wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ba = { exports: {} }, Qo = {}, ec = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), Vd = Symbol.for("react.portal"), Kd = Symbol.for("react.fragment"), Qd = Symbol.for("react.strict_mode"), Gd = Symbol.for("react.profiler"), Yd = Symbol.for("react.provider"), Xd = Symbol.for("react.context"), Zd = Symbol.for("react.forward_ref"), Jd = Symbol.for("react.suspense"), qd = Symbol.for("react.memo"), bd = Symbol.for("react.lazy"), ws = Symbol.iterator;
function ep(e) {
  return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var tc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nc = Object.assign, rc = {};
function zn(e, t, n) {
  this.props = e, this.context = t, this.refs = rc, this.updater = n || tc;
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
function oc() {
}
oc.prototype = zn.prototype;
function su(e, t, n) {
  this.props = e, this.context = t, this.refs = rc, this.updater = n || tc;
}
var au = su.prototype = new oc();
au.constructor = su;
nc(au, zn.prototype);
au.isPureReactComponent = !0;
var Ss = Array.isArray, ic = Object.prototype.hasOwnProperty, cu = { current: null }, lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      ic.call(t, r) && !lc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Tr, type: e, key: i, ref: l, props: o, _owner: cu.current };
}
function tp(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function np(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ks = /\/+/g;
function Li(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? np("" + e.key) : t.toString(36);
}
function no(e, t, n, r, o) {
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
          case Tr:
          case Vd:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + Li(l, 0) : r, Ss(o) ? (n = "", e != null && (n = e.replace(ks, "$&/") + "/"), no(o, t, n, "", function(a) {
      return a;
    })) : o != null && (fu(o) && (o = tp(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ks, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Ss(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Li(i, u);
      l += no(i, t, n, s, o);
    }
  else if (s = ep(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + Li(i, u++), l += no(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Dr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return no(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function rp(e) {
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
var Se = { current: null }, ro = { transition: null }, op = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ro, ReactCurrentOwner: cu };
function sc() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Dr, forEach: function(e, t, n) {
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
  if (!fu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = zn;
$.Fragment = Kd;
$.Profiler = Gd;
$.PureComponent = su;
$.StrictMode = Qd;
$.Suspense = Jd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = op;
$.act = sc;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nc({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = cu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ic.call(t, s) && !lc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Tr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
$.createContext = function(e) {
  return e = { $$typeof: Xd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Yd, _context: e }, e.Consumer = e;
};
$.createElement = uc;
$.createFactory = function(e) {
  var t = uc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Zd, render: e };
};
$.isValidElement = fu;
$.lazy = function(e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: rp };
};
$.memo = function(e, t) {
  return { $$typeof: qd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = ro.transition;
  ro.transition = {};
  try {
    e();
  } finally {
    ro.transition = t;
  }
};
$.unstable_act = sc;
$.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
$.useContext = function(e) {
  return Se.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
$.useId = function() {
  return Se.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return Se.current.useRef(e);
};
$.useState = function(e) {
  return Se.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return Se.current.useTransition();
};
$.version = "18.3.1";
ec.exports = $;
var N = ec.exports;
const ip = /* @__PURE__ */ Wd(N), cl = /* @__PURE__ */ Hd({
  __proto__: null,
  default: ip
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
var lp = N, up = Symbol.for("react.element"), sp = Symbol.for("react.fragment"), ap = Object.prototype.hasOwnProperty, cp = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    ap.call(t, r) && !fp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: up, type: e, key: i, ref: l, props: o, _owner: cp.current };
}
Qo.Fragment = sp;
Qo.jsx = ac;
Qo.jsxs = ac;
ba.exports = Qo;
var du = ba.exports;
const dp = du.Fragment, L = du.jsx, be = du.jsxs;
var cc = { exports: {} }, Ae = {}, fc = { exports: {} }, dc = {};
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
  function t(P, O) {
    var z = P.length;
    P.push(O);
    e:
      for (; 0 < z; ) {
        var Z = z - 1 >>> 1, re = P[Z];
        if (0 < o(re, O))
          P[Z] = O, P[z] = re, z = Z;
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
    var O = P[0], z = P.pop();
    if (z !== O) {
      P[0] = z;
      e:
        for (var Z = 0, re = P.length, Ir = re >>> 1; Z < Ir; ) {
          var Dt = 2 * (Z + 1) - 1, $i = P[Dt], Ft = Dt + 1, jr = P[Ft];
          if (0 > o($i, z))
            Ft < re && 0 > o(jr, $i) ? (P[Z] = jr, P[Ft] = z, Z = Ft) : (P[Z] = $i, P[Dt] = z, Z = Dt);
          else if (Ft < re && 0 > o(jr, z))
            P[Z] = jr, P[Ft] = z, Z = Ft;
          else
            break e;
        }
    }
    return O;
  }
  function o(P, O) {
    var z = P.sortIndex - O.sortIndex;
    return z !== 0 ? z : P.id - O.id;
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
  var s = [], a = [], h = 1, d = null, m = 3, v = !1, y = !1, g = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null)
        r(a);
      else if (O.startTime <= P)
        r(a), O.sortIndex = O.expirationTime, t(s, O);
      else
        break;
      O = n(a);
    }
  }
  function w(P) {
    if (g = !1, p(P), !y)
      if (n(s) !== null)
        y = !0, Ri(x);
      else {
        var O = n(a);
        O !== null && zi(w, O.startTime - P);
      }
  }
  function x(P, O) {
    y = !1, g && (g = !1, f(T), T = -1), v = !0;
    var z = m;
    try {
      for (p(O), d = n(s); d !== null && (!(d.expirationTime > O) || P && !de()); ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          d.callback = null, m = d.priorityLevel;
          var re = Z(d.expirationTime <= O);
          O = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(s) && r(s), p(O);
        } else
          r(s);
        d = n(s);
      }
      if (d !== null)
        var Ir = !0;
      else {
        var Dt = n(a);
        Dt !== null && zi(w, Dt.startTime - O), Ir = !1;
      }
      return Ir;
    } finally {
      d = null, m = z, v = !1;
    }
  }
  var C = !1, S = null, T = -1, F = 5, R = -1;
  function de() {
    return !(e.unstable_now() - R < F);
  }
  function Mn() {
    if (S !== null) {
      var P = e.unstable_now();
      R = P;
      var O = !0;
      try {
        O = S(!0, P);
      } finally {
        O ? In() : (C = !1, S = null);
      }
    } else
      C = !1;
  }
  var In;
  if (typeof c == "function")
    In = function() {
      c(Mn);
    };
  else if (typeof MessageChannel < "u") {
    var vs = new MessageChannel(), Bd = vs.port2;
    vs.port1.onmessage = Mn, In = function() {
      Bd.postMessage(null);
    };
  } else
    In = function() {
      E(Mn, 0);
    };
  function Ri(P) {
    S = P, C || (C = !0, In());
  }
  function zi(P, O) {
    T = E(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, Ri(x));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var z = m;
    m = O;
    try {
      return P();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, O) {
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
    var z = m;
    m = P;
    try {
      return O();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(P, O, z) {
    var Z = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Z + z : Z) : z = Z, P) {
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
    return re = z + re, P = { id: h++, callback: O, priorityLevel: P, startTime: z, expirationTime: re, sortIndex: -1 }, z > Z ? (P.sortIndex = z, t(a, P), n(s) === null && P === n(a) && (g ? (f(T), T = -1) : g = !0, zi(w, z - Z))) : (P.sortIndex = re, t(s, P), y || v || (y = !0, Ri(x))), P;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(P) {
    var O = m;
    return function() {
      var z = m;
      m = O;
      try {
        return P.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(dc);
fc.exports = dc;
var pp = fc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = N, Le = pp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pc = /* @__PURE__ */ new Set(), ur = {};
function qt(e, t) {
  xn(e, t), xn(e + "Capture", t);
}
function xn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++)
    pc.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fl = Object.prototype.hasOwnProperty, hp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cs = {}, xs = {};
function gp(e) {
  return fl.call(xs, e) ? !0 : fl.call(Cs, e) ? !1 : hp.test(e) ? xs[e] = !0 : (Cs[e] = !0, !1);
}
function yp(e, t, n, r) {
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
function vp(e, t, n, r) {
  if (t === null || typeof t > "u" || yp(e, t, n, r))
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
var pu = /[\-:]([a-z])/g;
function mu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    pu,
    mu
  );
  fe[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pu, mu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pu, mu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vp(t, n, o, r) && (n = null), r || o === null ? gp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fr = Symbol.for("react.element"), nn = Symbol.for("react.portal"), rn = Symbol.for("react.fragment"), gu = Symbol.for("react.strict_mode"), dl = Symbol.for("react.profiler"), mc = Symbol.for("react.provider"), hc = Symbol.for("react.context"), yu = Symbol.for("react.forward_ref"), pl = Symbol.for("react.suspense"), ml = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), gc = Symbol.for("react.offscreen"), Es = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = Es && e[Es] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Ai;
function Gn(e) {
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
function Ii(e, t) {
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
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function wp(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn("Lazy");
    case 13:
      return Gn("Suspense");
    case 19:
      return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ii(e.type, !1), e;
    case 11:
      return e = Ii(e.type.render, !1), e;
    case 1:
      return e = Ii(e.type, !0), e;
    default:
      return "";
  }
}
function hl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case dl:
      return "Profiler";
    case gu:
      return "StrictMode";
    case pl:
      return "Suspense";
    case ml:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case hc:
        return (e.displayName || "Context") + ".Consumer";
      case mc:
        return (e._context.displayName || "Context") + ".Provider";
      case yu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case vu:
        return t = e.displayName || null, t !== null ? t : hl(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return hl(e(t));
        } catch {
        }
    }
  return null;
}
function Sp(e) {
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
      return hl(t);
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
function Lt(e) {
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
function yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kp(e) {
  var t = yc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ur(e) {
  e._valueTracker || (e._valueTracker = kp(e));
}
function vc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = yc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function wo(e) {
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
function _s(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wc(e, t) {
  t = t.checked, t != null && hu(e, "checked", t, !1);
}
function yl(e, t) {
  wc(e, t);
  var n = Lt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vl(e, t.type, n) : t.hasOwnProperty("defaultValue") && vl(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ps(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vl(e, t, n) {
  (t !== "number" || wo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function hn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function wl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ts(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(k(92));
      if (Yn(n)) {
        if (1 < n.length)
          throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function Sc(e, t) {
  var n = Lt(t.value), r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? kc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Br, Cc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Br = Br || document.createElement("div"), Br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Br.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function sr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
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
}, Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
  Cp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
}
function Ec(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var xp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function kl(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Cl(e, t) {
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
var xl = null;
function wu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var El = null, gn = null, yn = null;
function Os(e) {
  if (e = Rr(e)) {
    if (typeof El != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = Jo(t), El(e.stateNode, e.type, t));
  }
}
function _c(e) {
  gn ? yn ? yn.push(e) : yn = [e] : gn = e;
}
function Pc() {
  if (gn) {
    var e = gn, t = yn;
    if (yn = gn = null, Os(e), t)
      for (e = 0; e < t.length; e++)
        Os(t[e]);
  }
}
function Tc(e, t) {
  return e(t);
}
function Nc() {
}
var ji = !1;
function Oc(e, t, n) {
  if (ji)
    return e(t, n);
  ji = !0;
  try {
    return Tc(e, t, n);
  } finally {
    ji = !1, (gn !== null || yn !== null) && (Nc(), Pc());
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Jo(n);
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
var _l = !1;
if (dt)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", { get: function() {
      _l = !0;
    } }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
  } catch {
    _l = !1;
  }
function Ep(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var qn = !1, So = null, ko = !1, Pl = null, _p = { onError: function(e) {
  qn = !0, So = e;
} };
function Pp(e, t, n, r, o, i, l, u, s) {
  qn = !1, So = null, Ep.apply(_p, arguments);
}
function Tp(e, t, n, r, o, i, l, u, s) {
  if (Pp.apply(this, arguments), qn) {
    if (qn) {
      var a = So;
      qn = !1, So = null;
    } else
      throw Error(k(198));
    ko || (ko = !0, Pl = a);
  }
}
function bt(e) {
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
function Rc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Rs(e) {
  if (bt(e) !== e)
    throw Error(k(188));
}
function Np(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bt(e), t === null)
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
          return Rs(o), e;
        if (i === r)
          return Rs(o), t;
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
function zc(e) {
  return e = Np(e), e !== null ? $c(e) : null;
}
function $c(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = $c(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Lc = Le.unstable_scheduleCallback, zs = Le.unstable_cancelCallback, Op = Le.unstable_shouldYield, Rp = Le.unstable_requestPaint, J = Le.unstable_now, zp = Le.unstable_getCurrentPriorityLevel, Su = Le.unstable_ImmediatePriority, Ac = Le.unstable_UserBlockingPriority, Co = Le.unstable_NormalPriority, $p = Le.unstable_LowPriority, Mc = Le.unstable_IdlePriority, Go = null, ot = null;
function Lp(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Xe = Math.clz32 ? Math.clz32 : Ip, Ap = Math.log, Mp = Math.LN2;
function Ip(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ap(e) / Mp | 0) | 0;
}
var Hr = 64, Wr = 4194304;
function Xn(e) {
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
function xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? r = Xn(u) : (i &= l, i !== 0 && (r = Xn(i)));
  } else
    l = n & ~o, l !== 0 ? r = Xn(l) : i !== 0 && (r = Xn(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Xe(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function jp(e, t) {
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
function Dp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Xe(i), u = 1 << l, s = o[l];
    s === -1 ? (!(u & n) || u & r) && (o[l] = jp(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Tl(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ic() {
  var e = Hr;
  return Hr <<= 1, !(Hr & 4194240) && (Hr = 64), e;
}
function Di(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function Fp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ku(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var j = 0;
function jc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Dc, Cu, Fc, Uc, Bc, Nl = !1, Vr = [], _t = null, Pt = null, Tt = null, cr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), kt = [], Up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Tt = null;
      break;
    case "pointerover":
    case "pointerout":
      cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Rr(t), t !== null && Cu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Bp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return _t = Fn(_t, e, t, n, r, o), !0;
    case "dragenter":
      return Pt = Fn(Pt, e, t, n, r, o), !0;
    case "mouseover":
      return Tt = Fn(Tt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return cr.set(i, Fn(cr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, fr.set(i, Fn(fr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Hc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rc(n), t !== null) {
          e.blockedOn = t, Bc(e.priority, function() {
            Fc(n);
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
function oo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xl = r, n.target.dispatchEvent(r), xl = null;
    } else
      return t = Rr(n), t !== null && Cu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ls(e, t, n) {
  oo(e) && n.delete(t);
}
function Hp() {
  Nl = !1, _t !== null && oo(_t) && (_t = null), Pt !== null && oo(Pt) && (Pt = null), Tt !== null && oo(Tt) && (Tt = null), cr.forEach(Ls), fr.forEach(Ls);
}
function Un(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Nl || (Nl = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Hp)));
}
function dr(e) {
  function t(o) {
    return Un(o, e);
  }
  if (0 < Vr.length) {
    Un(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && Un(_t, e), Pt !== null && Un(Pt, e), Tt !== null && Un(Tt, e), cr.forEach(t), fr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Hc(n), n.blockedOn === null && kt.shift();
}
var vn = yt.ReactCurrentBatchConfig, Eo = !0;
function Wp(e, t, n, r) {
  var o = j, i = vn.transition;
  vn.transition = null;
  try {
    j = 1, xu(e, t, n, r);
  } finally {
    j = o, vn.transition = i;
  }
}
function Vp(e, t, n, r) {
  var o = j, i = vn.transition;
  vn.transition = null;
  try {
    j = 4, xu(e, t, n, r);
  } finally {
    j = o, vn.transition = i;
  }
}
function xu(e, t, n, r) {
  if (Eo) {
    var o = Ol(e, t, n, r);
    if (o === null)
      Yi(e, t, r, _o, n), $s(e, r);
    else if (Bp(o, e, t, n, r))
      r.stopPropagation();
    else if ($s(e, r), t & 4 && -1 < Up.indexOf(e)) {
      for (; o !== null; ) {
        var i = Rr(o);
        if (i !== null && Dc(i), i = Ol(e, t, n, r), i === null && Yi(e, t, r, _o, n), i === o)
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else
      Yi(e, t, r, null, n);
  }
}
var _o = null;
function Ol(e, t, n, r) {
  if (_o = null, e = wu(r), e = Ht(e), e !== null)
    if (t = bt(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Rc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return _o = e, null;
}
function Wc(e) {
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
      switch (zp()) {
        case Su:
          return 1;
        case Ac:
          return 4;
        case Co:
        case $p:
          return 16;
        case Mc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var xt = null, Eu = null, io = null;
function Vc() {
  if (io)
    return io;
  var e, t = Eu, n = t.length, r, o = "value" in xt ? xt.value : xt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
    ;
  return io = o.slice(e, 1 < r ? 1 - r : void 0);
}
function lo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kr() {
  return !0;
}
function As() {
  return !1;
}
function Me(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Kr : As, this.isPropagationStopped = As, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kr);
  }, persist: function() {
  }, isPersistent: Kr }), t;
}
var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _u = Me($n), Or = Q({}, $n, { view: 0, detail: 0 }), Kp = Me(Or), Fi, Ui, Bn, Yo = Q({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Bn && (Bn && e.type === "mousemove" ? (Fi = e.screenX - Bn.screenX, Ui = e.screenY - Bn.screenY) : Ui = Fi = 0, Bn = e), Fi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ui;
} }), Ms = Me(Yo), Qp = Q({}, Yo, { dataTransfer: 0 }), Gp = Me(Qp), Yp = Q({}, Or, { relatedTarget: 0 }), Bi = Me(Yp), Xp = Q({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Zp = Me(Xp), Jp = Q({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), qp = Me(Jp), bp = Q({}, $n, { data: 0 }), Is = Me(bp), em = {
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
}, tm = {
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
}, nm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function rm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nm[e]) ? !!t[e] : !1;
}
function Pu() {
  return rm;
}
var om = Q({}, Or, { key: function(e) {
  if (e.key) {
    var t = em[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pu, charCode: function(e) {
  return e.type === "keypress" ? lo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), im = Me(om), lm = Q({}, Yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), js = Me(lm), um = Q({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pu }), sm = Me(um), am = Q({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), cm = Me(am), fm = Q({}, Yo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), dm = Me(fm), pm = [9, 13, 27, 32], Tu = dt && "CompositionEvent" in window, bn = null;
dt && "documentMode" in document && (bn = document.documentMode);
var mm = dt && "TextEvent" in window && !bn, Kc = dt && (!Tu || bn && 8 < bn && 11 >= bn), Ds = String.fromCharCode(32), Fs = !1;
function Qc(e, t) {
  switch (e) {
    case "keyup":
      return pm.indexOf(t.keyCode) !== -1;
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
function Gc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function hm(e, t) {
  switch (e) {
    case "compositionend":
      return Gc(t);
    case "keypress":
      return t.which !== 32 ? null : (Fs = !0, Ds);
    case "textInput":
      return e = t.data, e === Ds && Fs ? null : e;
    default:
      return null;
  }
}
function gm(e, t) {
  if (on)
    return e === "compositionend" || !Tu && Qc(e, t) ? (e = Vc(), io = Eu = xt = null, on = !1, e) : null;
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
      return Kc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ym = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ym[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
  _c(r), t = Po(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var er = null, pr = null;
function vm(e) {
  lf(e, 0);
}
function Xo(e) {
  var t = sn(e);
  if (vc(t))
    return e;
}
function wm(e, t) {
  if (e === "change")
    return t;
}
var Xc = !1;
if (dt) {
  var Hi;
  if (dt) {
    var Wi = "oninput" in document;
    if (!Wi) {
      var Bs = document.createElement("div");
      Bs.setAttribute("oninput", "return;"), Wi = typeof Bs.oninput == "function";
    }
    Hi = Wi;
  } else
    Hi = !1;
  Xc = Hi && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  er && (er.detachEvent("onpropertychange", Zc), pr = er = null);
}
function Zc(e) {
  if (e.propertyName === "value" && Xo(pr)) {
    var t = [];
    Yc(t, pr, e, wu(e)), Oc(vm, t);
  }
}
function Sm(e, t, n) {
  e === "focusin" ? (Hs(), er = t, pr = n, er.attachEvent("onpropertychange", Zc)) : e === "focusout" && Hs();
}
function km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xo(pr);
}
function Cm(e, t) {
  if (e === "click")
    return Xo(t);
}
function xm(e, t) {
  if (e === "input" || e === "change")
    return Xo(t);
}
function Em(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Em;
function mr(e, t) {
  if (Je(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fl.call(t, o) || !Je(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Ws(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Vs(e, t) {
  var n = Ws(e);
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
    n = Ws(n);
  }
}
function Jc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qc() {
  for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = wo(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _m(e) {
  var t = qc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Jc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Vs(n, i);
        var l = Vs(
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
var Pm = dt && "documentMode" in document && 11 >= document.documentMode, ln = null, Rl = null, tr = null, zl = !1;
function Ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl || ln == null || ln !== wo(r) || (r = ln, "selectionStart" in r && Nu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && mr(tr, r) || (tr = r, r = Po(Rl, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ln)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var un = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, Vi = {}, bc = {};
dt && (bc = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
function Zo(e) {
  if (Vi[e])
    return Vi[e];
  if (!un[e])
    return e;
  var t = un[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in bc)
      return Vi[e] = t[n];
  return e;
}
var ef = Zo("animationend"), tf = Zo("animationiteration"), nf = Zo("animationstart"), rf = Zo("transitionend"), of = /* @__PURE__ */ new Map(), Qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  of.set(e, t), qt(t, [e]);
}
for (var Ki = 0; Ki < Qs.length; Ki++) {
  var Qi = Qs[Ki], Tm = Qi.toLowerCase(), Nm = Qi[0].toUpperCase() + Qi.slice(1);
  Mt(Tm, "on" + Nm);
}
Mt(ef, "onAnimationEnd");
Mt(tf, "onAnimationIteration");
Mt(nf, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(rf, "onTransitionEnd");
xn("onMouseEnter", ["mouseout", "mouseover"]);
xn("onMouseLeave", ["mouseout", "mouseover"]);
xn("onPointerEnter", ["pointerout", "pointerover"]);
xn("onPointerLeave", ["pointerout", "pointerover"]);
qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Gs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tp(r, t, void 0, e), e.currentTarget = null;
}
function lf(e, t) {
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
          Gs(o, u, a), i = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped())
            break e;
          Gs(o, u, a), i = s;
        }
    }
  }
  if (ko)
    throw e = Pl, ko = !1, Pl = null, e;
}
function B(e, t) {
  var n = t[Il];
  n === void 0 && (n = t[Il] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (uf(t, e, 2, !1), n.add(r));
}
function Gi(e, t, n) {
  var r = 0;
  t && (r |= 4), uf(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, pc.forEach(function(n) {
      n !== "selectionchange" && (Om.has(n) || Gi(n, !1, e), Gi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, Gi("selectionchange", !1, t));
  }
}
function uf(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var o = Wp;
      break;
    case 4:
      o = Vp;
      break;
    default:
      o = xu;
  }
  n = o.bind(null, t, n, e), o = void 0, !_l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Yi(e, t, n, r, o) {
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
            if (l = Ht(u), l === null)
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
  Oc(function() {
    var a = i, h = wu(n), d = [];
    e: {
      var m = of.get(e);
      if (m !== void 0) {
        var v = _u, y = e;
        switch (e) {
          case "keypress":
            if (lo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = im;
            break;
          case "focusin":
            y = "focus", v = Bi;
            break;
          case "focusout":
            y = "blur", v = Bi;
            break;
          case "beforeblur":
          case "afterblur":
            v = Bi;
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
            v = Ms;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = sm;
            break;
          case ef:
          case tf:
          case nf:
            v = Zp;
            break;
          case rf:
            v = cm;
            break;
          case "scroll":
            v = Kp;
            break;
          case "wheel":
            v = dm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = js;
        }
        var g = (t & 4) !== 0, E = !g && e === "scroll", f = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = ar(c, f), w != null && g.push(gr(c, w, p)))), E)
            break;
          c = c.return;
        }
        0 < g.length && (m = new v(m, y, null, n, h), d.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== xl && (y = n.relatedTarget || n.fromElement) && (Ht(y) || y[pt]))
          break e;
        if ((v || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? Ht(y) : null, y !== null && (E = bt(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
          if (g = Ms, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = js, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), E = v == null ? m : sn(v), p = y == null ? m : sn(y), m = new g(w, c + "leave", v, n, h), m.target = E, m.relatedTarget = p, w = null, Ht(h) === a && (g = new g(f, c + "enter", y, n, h), g.target = p, g.relatedTarget = E, w = g), E = w, v && y)
            t: {
              for (g = v, f = y, c = 0, p = g; p; p = en(p))
                c++;
              for (p = 0, w = f; w; w = en(w))
                p++;
              for (; 0 < c - p; )
                g = en(g), c--;
              for (; 0 < p - c; )
                f = en(f), p--;
              for (; c--; ) {
                if (g === f || f !== null && g === f.alternate)
                  break t;
                g = en(g), f = en(f);
              }
              g = null;
            }
          else
            g = null;
          v !== null && Ys(d, m, v, g, !1), y !== null && E !== null && Ys(d, E, y, g, !0);
        }
      }
      e: {
        if (m = a ? sn(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file")
          var x = wm;
        else if (Us(m))
          if (Xc)
            x = xm;
          else {
            x = km;
            var C = Sm;
          }
        else
          (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Cm);
        if (x && (x = x(e, a))) {
          Yc(d, x, n, h);
          break e;
        }
        C && C(e, m, a), e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && vl(m, "number", m.value);
      }
      switch (C = a ? sn(a) : window, e) {
        case "focusin":
          (Us(C) || C.contentEditable === "true") && (ln = C, Rl = a, tr = null);
          break;
        case "focusout":
          tr = Rl = ln = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zl = !1, Ks(d, n, h);
          break;
        case "selectionchange":
          if (Pm)
            break;
        case "keydown":
        case "keyup":
          Ks(d, n, h);
      }
      var S;
      if (Tu)
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
        on ? Qc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Kc && n.locale !== "ko" && (on || T !== "onCompositionStart" ? T === "onCompositionEnd" && on && (S = Vc()) : (xt = h, Eu = "value" in xt ? xt.value : xt.textContent, on = !0)), C = Po(a, T), 0 < C.length && (T = new Is(T, e, null, n, h), d.push({ event: T, listeners: C }), S ? T.data = S : (S = Gc(n), S !== null && (T.data = S)))), (S = mm ? hm(e, n) : gm(e, n)) && (a = Po(a, "onBeforeInput"), 0 < a.length && (h = new Is("onBeforeInput", "beforeinput", null, n, h), d.push({ event: h, listeners: a }), h.data = S));
    }
    lf(d, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Po(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ar(e, n), i != null && r.unshift(gr(e, i, o)), i = ar(e, t), i != null && r.push(gr(e, i, o))), e = e.return;
  }
  return r;
}
function en(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ys(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = ar(n, i), s != null && l.unshift(gr(n, s, u))) : o || (s = ar(n, i), s != null && l.push(gr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Rm = /\r\n?/g, zm = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Rm, `
`).replace(zm, "");
}
function Yr(e, t, n) {
  if (t = Xs(t), Xs(e) !== t && n)
    throw Error(k(425));
}
function To() {
}
var $l = null, Ll = null;
function Al(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0, $m = typeof clearTimeout == "function" ? clearTimeout : void 0, Zs = typeof Promise == "function" ? Promise : void 0, Lm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zs < "u" ? function(e) {
  return Zs.resolve(null).then(e).catch(Am);
} : Ml;
function Am(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xi(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), dr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  dr(t);
}
function Nt(e) {
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
function Js(e) {
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
var Ln = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Ln, yr = "__reactProps$" + Ln, pt = "__reactContainer$" + Ln, Il = "__reactEvents$" + Ln, Mm = "__reactListeners$" + Ln, Im = "__reactHandles$" + Ln;
function Ht(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Js(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = Js(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rr(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function Jo(e) {
  return e[yr] || null;
}
var jl = [], an = -1;
function It(e) {
  return { current: e };
}
function H(e) {
  0 > an || (e.current = jl[an], jl[an] = null, an--);
}
function U(e, t) {
  an++, jl[an] = e.current, e.current = t;
}
var At = {}, ye = It(At), Ee = It(!1), Gt = At;
function En(e, t) {
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
function No() {
  H(Ee), H(ye);
}
function qs(e, t, n) {
  if (ye.current !== At)
    throw Error(k(168));
  U(ye, t), U(Ee, n);
}
function sf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(k(108, Sp(e) || "Unknown", o));
  return Q({}, n, r);
}
function Oo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Gt = ye.current, U(ye, e), U(Ee, Ee.current), !0;
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = sf(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, H(Ee), H(ye), U(ye, e)) : H(Ee), U(Ee, n);
}
var st = null, qo = !1, Zi = !1;
function af(e) {
  st === null ? st = [e] : st.push(e);
}
function jm(e) {
  qo = !0, af(e);
}
function jt() {
  if (!Zi && st !== null) {
    Zi = !0;
    var e = 0, t = j;
    try {
      var n = st;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, qo = !1;
    } catch (o) {
      throw st !== null && (st = st.slice(e + 1)), Lc(Su, jt), o;
    } finally {
      j = t, Zi = !1;
    }
  }
  return null;
}
var cn = [], fn = 0, Ro = null, zo = 0, je = [], De = 0, Yt = null, at = 1, ct = "";
function Ut(e, t) {
  cn[fn++] = zo, cn[fn++] = Ro, Ro = e, zo = t;
}
function cf(e, t, n) {
  je[De++] = at, je[De++] = ct, je[De++] = Yt, Yt = e;
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
  e.return !== null && (Ut(e, 1), cf(e, 1, 0));
}
function Ru(e) {
  for (; e === Ro; )
    Ro = cn[--fn], cn[fn] = null, zo = cn[--fn], cn[fn] = null;
  for (; e === Yt; )
    Yt = je[--De], je[De] = null, ct = je[--De], je[De] = null, at = je[--De], je[De] = null;
}
var ze = null, Re = null, W = !1, Ye = null;
function ff(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ze = e, Re = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ze = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ze = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function Dl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fl(e) {
  if (W) {
    var t = Re;
    if (t) {
      var n = t;
      if (!ea(e, t)) {
        if (Dl(e))
          throw Error(k(418));
        t = Nt(n.nextSibling);
        var r = ze;
        t && ea(e, t) ? ff(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, ze = e);
      }
    } else {
      if (Dl(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, ze = e;
    }
  }
}
function ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Xr(e) {
  if (e !== ze)
    return !1;
  if (!W)
    return ta(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps)), t && (t = Re)) {
    if (Dl(e))
      throw df(), Error(k(418));
    for (; t; )
      ff(e, t), t = Nt(t.nextSibling);
  }
  if (ta(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else
    Re = ze ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Re; e; )
    e = Nt(e.nextSibling);
}
function _n() {
  Re = ze = null, W = !1;
}
function zu(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Dm = yt.ReactCurrentBatchConfig;
function Hn(e, t, n) {
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
function Zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function na(e) {
  var t = e._init;
  return t(e._payload);
}
function pf(e) {
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
    return f = $t(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, w) {
    return c === null || c.tag !== 6 ? (c = rl(p, f.mode, w), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function s(f, c, p, w) {
    var x = p.type;
    return x === rn ? h(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && na(x) === c.type) ? (w = o(c, p.props), w.ref = Hn(f, c, p), w.return = f, w) : (w = mo(p.type, p.key, p.props, null, f.mode, w), w.ref = Hn(f, c, p), w.return = f, w);
  }
  function a(f, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ol(p, f.mode, w), c.return = f, c) : (c = o(c, p.children || []), c.return = f, c);
  }
  function h(f, c, p, w, x) {
    return c === null || c.tag !== 7 ? (c = Qt(p, f.mode, w, x), c.return = f, c) : (c = o(c, p), c.return = f, c);
  }
  function d(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = rl("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Fr:
          return p = mo(c.type, c.key, c.props, null, f.mode, p), p.ref = Hn(f, null, c), p.return = f, p;
        case nn:
          return c = ol(c, f.mode, p), c.return = f, c;
        case wt:
          var w = c._init;
          return d(f, w(c._payload), p);
      }
      if (Yn(c) || jn(c))
        return c = Qt(c, f.mode, p, null), c.return = f, c;
      Zr(f, c);
    }
    return null;
  }
  function m(f, c, p, w) {
    var x = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return x !== null ? null : u(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Fr:
          return p.key === x ? s(f, c, p, w) : null;
        case nn:
          return p.key === x ? a(f, c, p, w) : null;
        case wt:
          return x = p._init, m(
            f,
            c,
            x(p._payload),
            w
          );
      }
      if (Yn(p) || jn(p))
        return x !== null ? null : h(f, c, p, w, null);
      Zr(f, p);
    }
    return null;
  }
  function v(f, c, p, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(p) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Fr:
          return f = f.get(w.key === null ? p : w.key) || null, s(c, f, w, x);
        case nn:
          return f = f.get(w.key === null ? p : w.key) || null, a(c, f, w, x);
        case wt:
          var C = w._init;
          return v(f, c, p, C(w._payload), x);
      }
      if (Yn(w) || jn(w))
        return f = f.get(p) || null, h(c, f, w, x, null);
      Zr(c, w);
    }
    return null;
  }
  function y(f, c, p, w) {
    for (var x = null, C = null, S = c, T = c = 0, F = null; S !== null && T < p.length; T++) {
      S.index > T ? (F = S, S = null) : F = S.sibling;
      var R = m(f, S, p[T], w);
      if (R === null) {
        S === null && (S = F);
        break;
      }
      e && S && R.alternate === null && t(f, S), c = i(R, c, T), C === null ? x = R : C.sibling = R, C = R, S = F;
    }
    if (T === p.length)
      return n(f, S), W && Ut(f, T), x;
    if (S === null) {
      for (; T < p.length; T++)
        S = d(f, p[T], w), S !== null && (c = i(S, c, T), C === null ? x = S : C.sibling = S, C = S);
      return W && Ut(f, T), x;
    }
    for (S = r(f, S); T < p.length; T++)
      F = v(S, f, T, p[T], w), F !== null && (e && F.alternate !== null && S.delete(F.key === null ? T : F.key), c = i(F, c, T), C === null ? x = F : C.sibling = F, C = F);
    return e && S.forEach(function(de) {
      return t(f, de);
    }), W && Ut(f, T), x;
  }
  function g(f, c, p, w) {
    var x = jn(p);
    if (typeof x != "function")
      throw Error(k(150));
    if (p = x.call(p), p == null)
      throw Error(k(151));
    for (var C = x = null, S = c, T = c = 0, F = null, R = p.next(); S !== null && !R.done; T++, R = p.next()) {
      S.index > T ? (F = S, S = null) : F = S.sibling;
      var de = m(f, S, R.value, w);
      if (de === null) {
        S === null && (S = F);
        break;
      }
      e && S && de.alternate === null && t(f, S), c = i(de, c, T), C === null ? x = de : C.sibling = de, C = de, S = F;
    }
    if (R.done)
      return n(
        f,
        S
      ), W && Ut(f, T), x;
    if (S === null) {
      for (; !R.done; T++, R = p.next())
        R = d(f, R.value, w), R !== null && (c = i(R, c, T), C === null ? x = R : C.sibling = R, C = R);
      return W && Ut(f, T), x;
    }
    for (S = r(f, S); !R.done; T++, R = p.next())
      R = v(S, f, T, R.value, w), R !== null && (e && R.alternate !== null && S.delete(R.key === null ? T : R.key), c = i(R, c, T), C === null ? x = R : C.sibling = R, C = R);
    return e && S.forEach(function(Mn) {
      return t(f, Mn);
    }), W && Ut(f, T), x;
  }
  function E(f, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === rn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Fr:
          e: {
            for (var x = p.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = p.type, x === rn) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && na(x) === C.type) {
                  n(f, C.sibling), c = o(C, p.props), c.ref = Hn(f, C, p), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            p.type === rn ? (c = Qt(p.props.children, f.mode, w, p.key), c.return = f, f = c) : (w = mo(p.type, p.key, p.props, null, f.mode, w), w.ref = Hn(f, c, p), w.return = f, f = w);
          }
          return l(f);
        case nn:
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
            c = ol(p, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case wt:
          return C = p._init, E(f, c, C(p._payload), w);
      }
      if (Yn(p))
        return y(f, c, p, w);
      if (jn(p))
        return g(f, c, p, w);
      Zr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, p), c.return = f, f = c) : (n(f, c), c = rl(p, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return E;
}
var Pn = pf(!0), mf = pf(!1), $o = It(null), Lo = null, dn = null, $u = null;
function Lu() {
  $u = dn = Lo = null;
}
function Au(e) {
  var t = $o.current;
  H($o), e._currentValue = t;
}
function Ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function wn(e, t) {
  Lo = e, $u = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if ($u !== e)
    if (e = { context: e, memoizedValue: t, next: null }, dn === null) {
      if (Lo === null)
        throw Error(k(308));
      dn = e, Lo.dependencies = { lanes: 0, firstContext: e };
    } else
      dn = dn.next = e;
  return t;
}
var Wt = null;
function Mu(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function hf(e, t, n, r) {
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
function Iu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function gf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, A & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Mu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, mt(e, n);
}
function uo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
  }
}
function ra(e, t) {
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
    Zt |= l, e.lanes = l, e.memoizedState = d;
  }
}
function oa(e, t, n) {
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
var zr = {}, it = It(zr), vr = It(zr), wr = It(zr);
function Vt(e) {
  if (e === zr)
    throw Error(k(174));
  return e;
}
function ju(e, t) {
  switch (U(wr, t), U(vr, e), U(it, zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Sl(t, e);
  }
  H(it), U(it, t);
}
function Tn() {
  H(it), H(vr), H(wr);
}
function yf(e) {
  Vt(wr.current);
  var t = Vt(it.current), n = Sl(t, e.type);
  t !== n && (U(vr, e), U(it, n));
}
function Du(e) {
  vr.current === e && (H(it), H(vr));
}
var V = It(0);
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
var Ji = [];
function Fu() {
  for (var e = 0; e < Ji.length; e++)
    Ji[e]._workInProgressVersionPrimary = null;
  Ji.length = 0;
}
var so = yt.ReactCurrentDispatcher, qi = yt.ReactCurrentBatchConfig, Xt = 0, K = null, te = null, oe = null, Io = !1, nr = !1, Sr = 0, Fm = 0;
function pe() {
  throw Error(k(321));
}
function Uu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n]))
      return !1;
  return !0;
}
function Bu(e, t, n, r, o, i) {
  if (Xt = i, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, so.current = e === null || e.memoizedState === null ? Wm : Vm, e = n(r, o), nr) {
    i = 0;
    do {
      if (nr = !1, Sr = 0, 25 <= i)
        throw Error(k(301));
      i += 1, oe = te = null, t.updateQueue = null, so.current = Km, e = n(r, o);
    } while (nr);
  }
  if (so.current = jo, t = te !== null && te.next !== null, Xt = 0, oe = te = K = null, Io = !1, t)
    throw Error(k(300));
  return e;
}
function Hu() {
  var e = Sr !== 0;
  return Sr = 0, e;
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
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bi(e) {
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
      if ((Xt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var d = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, l = r) : s = s.next = d, K.lanes |= h, Zt |= h;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? l = r : s.next = u, Je(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, K.lanes |= i, Zt |= i, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function el(e) {
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
function vf() {
}
function wf(e, t) {
  var n = K, r = We(), o = t(), i = !Je(r.memoizedState, o);
  if (i && (r.memoizedState = o, xe = !0), r = r.queue, Wu(Cf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Cr(9, kf.bind(null, n, r, o, t), void 0, null), ie === null)
      throw Error(k(349));
    Xt & 30 || Sf(n, t, o);
  }
  return o;
}
function Sf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xf(t) && Ef(e);
}
function Cf(e, t, n) {
  return n(function() {
    xf(t) && Ef(e);
  });
}
function xf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Ef(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function ia(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hm.bind(null, K, e), [t.memoizedState, e];
}
function Cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _f() {
  return We().memoizedState;
}
function ao(e, t, n, r) {
  var o = et();
  K.flags |= e, o.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function bo(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (te !== null) {
    var l = te.memoizedState;
    if (i = l.destroy, r !== null && Uu(r, l.deps)) {
      o.memoizedState = Cr(t, n, i, r);
      return;
    }
  }
  K.flags |= e, o.memoizedState = Cr(1 | t, n, i, r);
}
function la(e, t) {
  return ao(8390656, 8, e, t);
}
function Wu(e, t) {
  return bo(2048, 8, e, t);
}
function Pf(e, t) {
  return bo(4, 2, e, t);
}
function Tf(e, t) {
  return bo(4, 4, e, t);
}
function Nf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Of(e, t, n) {
  return n = n != null ? n.concat([e]) : null, bo(4, 4, Nf.bind(null, t, e), n);
}
function Vu() {
}
function Rf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $f(e, t, n) {
  return Xt & 21 ? (Je(n, t) || (n = Ic(), K.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
}
function Um(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = qi.transition;
  qi.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, qi.transition = r;
  }
}
function Lf() {
  return We().memoizedState;
}
function Bm(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Af(e))
    Mf(t, n);
  else if (n = hf(e, t, n, r), n !== null) {
    var o = we();
    Ze(n, e, r, o), If(n, t, r);
  }
}
function Hm(e, t, n) {
  var r = zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Af(e))
    Mf(t, o);
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
    n = hf(e, t, o, r), n !== null && (o = we(), Ze(n, e, r, o), If(n, t, r));
  }
}
function Af(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Mf(e, t) {
  nr = Io = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function If(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
  }
}
var jo = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Wm = { readContext: He, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: la, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ao(
    4194308,
    4,
    Nf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ao(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ao(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Bm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: ia, useDebugValue: Vu, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = ia(!1), t = e[0];
  return e = Um.bind(null, e[1]), et().memoizedState = e, [t, e];
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
    Xt & 30 || Sf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, la(Cf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Cr(9, kf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = ie.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Fm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Vm = {
  readContext: He,
  useCallback: Rf,
  useContext: He,
  useEffect: Wu,
  useImperativeHandle: Of,
  useInsertionEffect: Pf,
  useLayoutEffect: Tf,
  useMemo: zf,
  useReducer: bi,
  useRef: _f,
  useState: function() {
    return bi(kr);
  },
  useDebugValue: Vu,
  useDeferredValue: function(e) {
    var t = We();
    return $f(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = bi(kr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: vf,
  useSyncExternalStore: wf,
  useId: Lf,
  unstable_isNewReconciler: !1
}, Km = { readContext: He, useCallback: Rf, useContext: He, useEffect: Wu, useImperativeHandle: Of, useInsertionEffect: Pf, useLayoutEffect: Tf, useMemo: zf, useReducer: el, useRef: _f, useState: function() {
  return el(kr);
}, useDebugValue: Vu, useDeferredValue: function(e) {
  var t = We();
  return te === null ? t.memoizedState = e : $f(t, te.memoizedState, e);
}, useTransition: function() {
  var e = el(kr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: vf, useSyncExternalStore: wf, useId: Lf, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ei = { isMounted: function(e) {
  return (e = e._reactInternals) ? bt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), i = ft(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ot(e, i, o), t !== null && (Ze(t, e, o, r), uo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), i = ft(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ot(e, i, o), t !== null && (Ze(t, e, o, r), uo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = zt(e), o = ft(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ot(e, o, r), t !== null && (Ze(t, e, r, n), uo(t, e, r));
} };
function ua(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(o, i) : !0;
}
function jf(e, t, n) {
  var r = !1, o = At, i = t.contextType;
  return typeof i == "object" && i !== null ? i = He(i) : (o = _e(t) ? Gt : ye.current, r = t.contextTypes, i = (r = r != null) ? En(e, o) : At), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ei, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function sa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ei.enqueueReplaceState(t, t.state, null);
}
function Hl(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Iu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = He(i) : (i = _e(t) ? Gt : ye.current, o.context = En(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Bl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ei.enqueueReplaceState(o, o.state, null), Ao(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += wp(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Qm = typeof WeakMap == "function" ? WeakMap : Map;
function Df(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fo || (Fo = !0, bl = r), Wl(e, t);
  }, n;
}
function Ff(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Wl(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Wl(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = lh.bind(null, e, t, n), t.then(e, e));
}
function ca(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fa(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var Gm = yt.ReactCurrentOwner, xe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? mf(t, null, n, r) : Pn(t, e.child, n, r);
}
function da(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return wn(t, o), r = Bu(e, t, n, r, i, o), n = Hu(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && n && Ou(t), t.flags |= 1, ve(e, t, r, o), t.child);
}
function pa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !qu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Uf(e, t, i, r, o)) : (e = mo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mr, n(l, r) && e.ref === t.ref)
      return ht(e, t, o);
  }
  return t.flags |= 1, e = $t(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uf(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mr(i, r) && e.ref === t.ref)
      if (xe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
        e.flags & 131072 && (xe = !0);
      else
        return t.lanes = e.lanes, ht(e, t, o);
  }
  return Vl(e, t, n, r, o);
}
function Bf(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(mn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(mn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, U(mn, Ne), Ne |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, U(mn, Ne), Ne |= r;
  return ve(e, t, o, n), t.child;
}
function Hf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vl(e, t, n, r, o) {
  var i = _e(n) ? Gt : ye.current;
  return i = En(t, i), wn(t, o), n = Bu(e, t, n, r, i, o), r = Hu(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && r && Ou(t), t.flags |= 1, ve(e, t, n, o), t.child);
}
function ma(e, t, n, r, o) {
  if (_e(n)) {
    var i = !0;
    Oo(t);
  } else
    i = !1;
  if (wn(t, o), t.stateNode === null)
    co(e, t), jf(t, n, r), Hl(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = He(a) : (a = _e(n) ? Gt : ye.current, a = En(t, a));
    var h = n.getDerivedStateFromProps, d = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && sa(t, l, r, a), St = !1;
    var m = t.memoizedState;
    l.state = m, Ao(t, r, l, o), s = t.memoizedState, u !== r || m !== s || Ee.current || St ? (typeof h == "function" && (Bl(t, n, h, r), s = t.memoizedState), (u = St || ua(t, n, u, r, m, s, a)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, gf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Qe(t.type, u), l.props = a, d = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = _e(n) ? Gt : ye.current, s = En(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== d || m !== s) && sa(t, l, r, s), St = !1, m = t.memoizedState, l.state = m, Ao(t, r, l, o);
    var y = t.memoizedState;
    u !== d || m !== y || Ee.current || St ? (typeof v == "function" && (Bl(t, n, v, r), y = t.memoizedState), (a = St || ua(t, n, a, r, m, y, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Kl(e, t, n, r, i, o);
}
function Kl(e, t, n, r, o, i) {
  Hf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return o && bs(t, n, !1), ht(e, t, i);
  r = t.stateNode, Gm.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Pn(t, e.child, null, i), t.child = Pn(t, null, u, i)) : ve(e, t, u, i), t.memoizedState = r.state, o && bs(t, n, !0), t.child;
}
function Wf(e) {
  var t = e.stateNode;
  t.pendingContext ? qs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qs(e, t.context, !1), ju(e, t.containerInfo);
}
function ha(e, t, n, r, o) {
  return _n(), zu(o), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vf(e, t, n) {
  var r = t.pendingProps, o = V.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), U(V, o & 1), e === null)
    return Fl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = ri(l, r, 0, null), e = Qt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gl(n), t.memoizedState = Ql, e) : Ku(t, l));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Ym(e, t, l, r, u, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = $t(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? i = $t(u, i) : (i = Qt(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Gl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ql, r;
  }
  return i = e.child, e = i.sibling, r = $t(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ku(e, t) {
  return t = ri({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jr(e, t, n, r) {
  return r !== null && zu(r), Pn(t, e.child, null, n), e = Ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ym(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = tl(Error(k(422))), Jr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ri({ mode: "visible", children: r.children }, o, 0, null), i = Qt(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Pn(t, e.child, null, l), t.child.memoizedState = Gl(l), t.memoizedState = Ql, i);
  if (!(t.mode & 1))
    return Jr(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(k(419)), r = tl(i, r, void 0), Jr(e, t, l, r);
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
    return Ju(), r = tl(Error(k(421))), Jr(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uh.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Re = Nt(o.nextSibling), ze = t, W = !0, Ye = null, e !== null && (je[De++] = at, je[De++] = ct, je[De++] = Yt, at = e.id, ct = e.overflow, Yt = t), t = Ku(t, r.children), t.flags |= 4096, t);
}
function ga(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ul(e.return, t, n);
}
function nl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Kf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ve(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ga(e, n, t);
          else if (e.tag === 19)
            ga(e, n, t);
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
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), nl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Mo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        nl(t, !0, n, null, i);
        break;
      case "together":
        nl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Xm(e, t, n) {
  switch (t.tag) {
    case 3:
      Wf(t), _n();
      break;
    case 5:
      yf(t);
      break;
    case 1:
      _e(t.type) && Oo(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      U($o, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vf(e, t, n) : (U(V, V.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Kf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), U(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bf(e, t, n);
  }
  return ht(e, t, n);
}
var Qf, Yl, Gf, Yf;
Qf = function(e, t) {
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
Yl = function() {
};
Gf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Vt(it.current);
    var i = null;
    switch (n) {
      case "input":
        o = gl(e, o), r = gl(e, r), i = [];
        break;
      case "select":
        o = Q({}, o, { value: void 0 }), r = Q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = wl(e, o), r = wl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = To);
    }
    kl(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ur.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ur.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Yf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wn(e, t) {
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
function Zm(e, t, n) {
  var r = t.pendingProps;
  switch (Ru(t), t.tag) {
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
      return _e(t.type) && No(), me(t), null;
    case 3:
      return r = t.stateNode, Tn(), H(Ee), H(ye), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (nu(Ye), Ye = null))), Yl(e, t), me(t), null;
    case 5:
      Du(t);
      var o = Vt(wr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Gf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return me(t), null;
        }
        if (e = Vt(it.current), Xr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rt] = t, r[yr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Zn.length; o++)
                B(Zn[o], r);
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
              _s(r, i), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, B("invalid", r);
              break;
            case "textarea":
              Ts(r, i), B("invalid", r);
          }
          kl(n, i), o = null;
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Yr(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : ur.hasOwnProperty(l) && u != null && l === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), Ps(r, i, !0);
              break;
            case "textarea":
              Ur(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = To);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = kc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[rt] = t, e[yr] = r, Qf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Cl(n, r), n) {
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
                for (o = 0; o < Zn.length; o++)
                  B(Zn[o], e);
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
                _s(e, r), o = gl(e, r), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Ts(e, r), o = wl(e, r), B("invalid", e);
                break;
              default:
                o = r;
            }
            kl(n, o), u = o;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Ec(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Cc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && sr(e, s) : typeof s == "number" && sr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ur.hasOwnProperty(i) ? s != null && i === "onScroll" && B("scroll", e) : s != null && hu(e, i, s, l));
              }
            switch (n) {
              case "input":
                Ur(e), Ps(e, r, !1);
                break;
              case "textarea":
                Ur(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? hn(e, !!r.multiple, i, !1) : r.defaultValue != null && hn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = To);
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
        Yf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Vt(wr.current), Vt(it.current), Xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (i = r.nodeValue !== n) && (e = ze, e !== null))
            switch (e.tag) {
              case 3:
                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (H(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Re !== null && t.mode & 1 && !(t.flags & 128))
          df(), _n(), t.flags |= 98560, i = !1;
        else if (i = Xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(k(317));
            i[rt] = t;
          } else
            _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), i = !1;
        } else
          Ye !== null && (nu(Ye), Ye = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : Ju())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Tn(), Yl(e, t), e === null && hr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Au(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && No(), me(t), null;
    case 19:
      if (H(V), i = t.memoizedState, i === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null)
        if (r)
          Wn(i, !1);
        else {
          if (ne !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Mo(e), l !== null) {
                for (t.flags |= 128, Wn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && J() > On && (t.flags |= 128, r = !0, Wn(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Mo(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !W)
              return me(t), null;
          } else
            2 * J() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Wn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = J(), t.sibling = null, n = V.current, U(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Jm(e, t) {
  switch (Ru(t), t.tag) {
    case 1:
      return _e(t.type) && No(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), H(Ee), H(ye), Fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Du(t), null;
    case 13:
      if (H(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(V), null;
    case 4:
      return Tn(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, ge = !1, qm = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function pn(e, t) {
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
function Xl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ya = !1;
function bm(e, t) {
  if ($l = Eo, e = qc(), Nu(e)) {
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
  for (Ll = { focusedElem: e, selectionRange: n }, Eo = !1, _ = t; _ !== null; )
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
                  var g = y.memoizedProps, E = y.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Qe(t.type, g), E);
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
  return y = ya, ya = !1, y;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Xl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ti(e, t) {
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
function Zl(e) {
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
function Xf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Xf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[yr], delete t[Il], delete t[Mm], delete t[Im])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function va(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zf(e.return))
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
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = To));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Jl(e, t, n), e = e.sibling; e !== null; )
      Jl(e, t, n), e = e.sibling;
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (ql(e, t, n), e = e.sibling; e !== null; )
      ql(e, t, n), e = e.sibling;
}
var ue = null, Ge = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    Jf(e, t, n), n = n.sibling;
}
function Jf(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Go, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || pn(n, t);
    case 6:
      var r = ue, o = Ge;
      ue = null, vt(e, t, n), ue = r, Ge = o, ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n), dr(e)) : Xi(ue, n.stateNode));
      break;
    case 4:
      r = ue, o = Ge, ue = n.stateNode.containerInfo, Ge = !0, vt(e, t, n), ue = r, Ge = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Xl(n, t, l), o = o.next;
        } while (o !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!ge && (pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, vt(e, t, n), ge = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function wa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qm()), t.forEach(function(r) {
      var o = sh.bind(null, e, r);
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
        Jf(i, l, o), ue = null, Ge = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      qf(t, e), t = t.sibling;
}
function qf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), qe(e), r & 4) {
        try {
          rr(3, e, e.return), ti(3, e);
        } catch (g) {
          X(e, e.return, g);
        }
        try {
          rr(5, e, e.return);
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 1:
      Ke(t, e), qe(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), qe(e), r & 512 && n !== null && pn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          sr(o, "");
        } catch (g) {
          X(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && wc(o, i), Cl(u, l);
            var a = Cl(u, i);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], d = s[l + 1];
              h === "style" ? Ec(o, d) : h === "dangerouslySetInnerHTML" ? Cc(o, d) : h === "children" ? sr(o, d) : hu(o, h, d, a);
            }
            switch (u) {
              case "input":
                yl(o, i);
                break;
              case "textarea":
                Sc(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? hn(o, !!i.multiple, v, !1) : m !== !!i.multiple && (i.defaultValue != null ? hn(
                  o,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : hn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[yr] = i;
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
          dr(t.containerInfo);
        } catch (g) {
          X(e, e.return, g);
        }
      break;
    case 4:
      Ke(t, e), qe(e);
      break;
    case 13:
      Ke(t, e), qe(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Yu = J())), r & 4 && wa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (a = ge) || h, Ke(t, e), ge = a) : Ke(t, e), qe(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (_ = e, h = e.child; h !== null; ) {
            for (d = _ = h; _ !== null; ) {
              switch (m = _, v = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, m, m.return);
                  break;
                case 1:
                  pn(m, m.return);
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
                  pn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ka(d);
                    continue;
                  }
              }
              v !== null ? (v.return = m, _ = v) : ka(d);
            }
            h = h.sibling;
          }
        e:
          for (h = null, d = e; ; ) {
            if (d.tag === 5) {
              if (h === null) {
                h = d;
                try {
                  o = d.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xc("display", l));
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
      Ke(t, e), qe(e), r & 4 && wa(e);
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
          if (Zf(n)) {
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
          r.flags & 32 && (sr(o, ""), r.flags &= -33);
          var i = va(e);
          ql(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = va(e);
          Jl(e, u, l);
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
function eh(e, t, n) {
  _ = e, bf(e);
}
function bf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || qr;
      if (!l) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || ge;
        u = qr;
        var a = ge;
        if (qr = l, (ge = s) && !a)
          for (_ = o; _ !== null; )
            l = _, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ca(o) : s !== null ? (s.return = l, _ = s) : Ca(o);
        for (; i !== null; )
          _ = i, bf(i), i = i.sibling;
        _ = o, qr = u, ge = a;
      }
      Sa(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? (i.return = o, _ = i) : Sa(e);
  }
}
function Sa(e) {
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
              ge || ti(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && oa(t, i, r);
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
                oa(t, l, n);
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
                    d !== null && dr(d);
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
        ge || t.flags & 512 && Zl(t);
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
function ka(e) {
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
function Ca(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ti(4, t);
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
            Zl(t);
          } catch (s) {
            X(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Zl(t);
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
var th = Math.ceil, Do = yt.ReactCurrentDispatcher, Qu = yt.ReactCurrentOwner, Be = yt.ReactCurrentBatchConfig, A = 0, ie = null, ee = null, ae = 0, Ne = 0, mn = It(0), ne = 0, xr = null, Zt = 0, ni = 0, Gu = 0, or = null, Ce = null, Yu = 0, On = 1 / 0, ut = null, Fo = !1, bl = null, Rt = null, br = !1, Et = null, Uo = 0, ir = 0, eu = null, fo = -1, po = 0;
function we() {
  return A & 6 ? J() : fo !== -1 ? fo : fo = J();
}
function zt(e) {
  return e.mode & 1 ? A & 2 && ae !== 0 ? ae & -ae : Dm.transition !== null ? (po === 0 && (po = Ic()), po) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < ir)
    throw ir = 0, eu = null, Error(k(185));
  Nr(e, n, r), (!(A & 2) || e !== ie) && (e === ie && (!(A & 2) && (ni |= n), ne === 4 && Ct(e, ae)), Pe(e, r), n === 1 && A === 0 && !(t.mode & 1) && (On = J() + 500, qo && jt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Dp(e, t);
  var r = xo(e, e === ie ? ae : 0);
  if (r === 0)
    n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zs(n), t === 1)
      e.tag === 0 ? jm(xa.bind(null, e)) : af(xa.bind(null, e)), Lm(function() {
        !(A & 6) && jt();
      }), n = null;
    else {
      switch (jc(r)) {
        case 1:
          n = Su;
          break;
        case 4:
          n = Ac;
          break;
        case 16:
          n = Co;
          break;
        case 536870912:
          n = Mc;
          break;
        default:
          n = Co;
      }
      n = ud(n, ed.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ed(e, t) {
  if (fo = -1, po = 0, A & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n)
    return null;
  var r = xo(e, e === ie ? ae : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bo(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var i = nd();
    (ie !== e || ae !== t) && (ut = null, On = J() + 500, Kt(e, t));
    do
      try {
        oh();
        break;
      } catch (u) {
        td(e, u);
      }
    while (1);
    Lu(), Do.current = i, A = o, ee !== null ? t = 0 : (ie = null, ae = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (o = Tl(e), o !== 0 && (r = o, t = tu(e, o))), t === 1)
      throw n = xr, Kt(e, 0), Ct(e, r), Pe(e, J()), n;
    if (t === 6)
      Ct(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !nh(o) && (t = Bo(e, r), t === 2 && (i = Tl(e), i !== 0 && (r = i, t = tu(e, i))), t === 1))
        throw n = xr, Kt(e, 0), Ct(e, r), Pe(e, J()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Bt(e, Ce, ut);
          break;
        case 3:
          if (Ct(e, r), (r & 130023424) === r && (t = Yu + 500 - J(), 10 < t)) {
            if (xo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ml(Bt.bind(null, e, Ce, ut), t);
            break;
          }
          Bt(e, Ce, ut);
          break;
        case 4:
          if (Ct(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Xe(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * th(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ml(Bt.bind(null, e, Ce, ut), r);
            break;
          }
          Bt(e, Ce, ut);
          break;
        case 5:
          Bt(e, Ce, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? ed.bind(null, e) : null;
}
function tu(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Bo(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && nu(t)), e;
}
function nu(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function nh(e) {
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
  for (t &= ~Gu, t &= ~ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xa(e) {
  if (A & 6)
    throw Error(k(327));
  Sn();
  var t = xo(e, 0);
  if (!(t & 1))
    return Pe(e, J()), null;
  var n = Bo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tl(e);
    r !== 0 && (t = r, n = tu(e, r));
  }
  if (n === 1)
    throw n = xr, Kt(e, 0), Ct(e, t), Pe(e, J()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, Ce, ut), Pe(e, J()), null;
}
function Xu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (On = J() + 500, qo && jt());
  }
}
function Jt(e) {
  Et !== null && Et.tag === 0 && !(A & 6) && Sn();
  var t = A;
  A |= 1;
  var n = Be.transition, r = j;
  try {
    if (Be.transition = null, j = 1, e)
      return e();
  } finally {
    j = r, Be.transition = n, A = t, !(A & 6) && jt();
  }
}
function Zu() {
  Ne = mn.current, H(mn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $m(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch (Ru(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && No();
          break;
        case 3:
          Tn(), H(Ee), H(ye), Fu();
          break;
        case 5:
          Du(r);
          break;
        case 4:
          Tn();
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
          Zu();
      }
      n = n.return;
    }
  if (ie = e, ee = e = $t(e.current, null), ae = Ne = t, ne = 0, xr = null, Gu = ni = Zt = 0, Ce = or = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++)
      if (n = Wt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, i = n.pending;
        if (i !== null) {
          var l = i.next;
          i.next = o, r.next = l;
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function td(e, t) {
  do {
    var n = ee;
    try {
      if (Lu(), so.current = jo, Io) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Io = !1;
      }
      if (Xt = 0, oe = te = K = null, nr = !1, Sr = 0, Qu.current = null, n === null || n.return === null) {
        ne = 1, xr = t, ee = null;
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
          var v = ca(l);
          if (v !== null) {
            v.flags &= -257, fa(v, l, u, i, t), v.mode & 1 && aa(i, a, t), t = v, s = a;
            var y = t.updateQueue;
            if (y === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              aa(i, a, t), Ju();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var E = ca(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), fa(E, l, u, i, t), zu(Nn(s, u));
            break e;
          }
        }
        i = s = Nn(s, u), ne !== 4 && (ne = 2), or === null ? or = [i] : or.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Df(i, s, t);
              ra(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Rt === null || !Rt.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Ff(i, u, t);
                ra(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      od(n);
    } catch (x) {
      t = x, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function nd() {
  var e = Do.current;
  return Do.current = jo, e === null ? jo : e;
}
function Ju() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), ie === null || !(Zt & 268435455) && !(ni & 268435455) || Ct(ie, ae);
}
function Bo(e, t) {
  var n = A;
  A |= 2;
  var r = nd();
  (ie !== e || ae !== t) && (ut = null, Kt(e, t));
  do
    try {
      rh();
      break;
    } catch (o) {
      td(e, o);
    }
  while (1);
  if (Lu(), A = n, Do.current = r, ee !== null)
    throw Error(k(261));
  return ie = null, ae = 0, ne;
}
function rh() {
  for (; ee !== null; )
    rd(ee);
}
function oh() {
  for (; ee !== null && !Op(); )
    rd(ee);
}
function rd(e) {
  var t = ld(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? od(e) : ee = t, Qu.current = null;
}
function od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Jm(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (n = Zm(n, t, Ne), n !== null) {
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
function Bt(e, t, n) {
  var r = j, o = Be.transition;
  try {
    Be.transition = null, j = 1, ih(e, t, n, r);
  } finally {
    Be.transition = o, j = r;
  }
  return null;
}
function ih(e, t, n, r) {
  do
    Sn();
  while (Et !== null);
  if (A & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Fp(e, i), e === ie && (ee = ie = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || br || (br = !0, ud(Co, function() {
    return Sn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Be.transition, Be.transition = null;
    var l = j;
    j = 1;
    var u = A;
    A |= 4, Qu.current = null, bm(e, n), qf(n, e), _m(Ll), Eo = !!$l, Ll = $l = null, e.current = n, eh(n), Rp(), A = u, j = l, Be.transition = i;
  } else
    e.current = n;
  if (br && (br = !1, Et = e, Uo = o), i = e.pendingLanes, i === 0 && (Rt = null), Lp(n.stateNode), Pe(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fo)
    throw Fo = !1, e = bl, bl = null, e;
  return Uo & 1 && e.tag !== 0 && Sn(), i = e.pendingLanes, i & 1 ? e === eu ? ir++ : (ir = 0, eu = e) : ir = 0, jt(), null;
}
function Sn() {
  if (Et !== null) {
    var e = jc(Uo), t = Be.transition, n = j;
    try {
      if (Be.transition = null, j = 16 > e ? 16 : e, Et === null)
        var r = !1;
      else {
        if (e = Et, Et = null, Uo = 0, A & 6)
          throw Error(k(331));
        var o = A;
        for (A |= 4, _ = e.current; _ !== null; ) {
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
                      rr(8, h, i);
                  }
                  var d = h.child;
                  if (d !== null)
                    d.return = h, _ = d;
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var m = h.sibling, v = h.return;
                      if (Xf(h), h === a) {
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
                    var E = g.sibling;
                    g.sibling = null, g = E;
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
                      rr(9, i, i.return);
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
                        ti(9, u);
                    }
                  } catch (x) {
                    X(u, u.return, x);
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
        if (A = o, jt(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(Go, e);
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
function Ea(e, t, n) {
  t = Nn(n, t), t = Df(e, t, 1), e = Ot(e, t, 1), t = we(), e !== null && (Nr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3)
    Ea(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ea(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
          e = Nn(n, e), e = Ff(t, e, 1), t = Ot(t, e, 1), e = we(), t !== null && (Nr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ae & n) === n && (ne === 4 || ne === 3 && (ae & 130023424) === ae && 500 > J() - Yu ? Kt(e, 0) : Gu |= n), Pe(e, t);
}
function id(e, t) {
  t === 0 && (e.mode & 1 ? (t = Wr, Wr <<= 1, !(Wr & 130023424) && (Wr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (Nr(e, t, n), Pe(e, n));
}
function uh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), id(e, n);
}
function sh(e, t) {
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
  r !== null && r.delete(t), id(e, n);
}
var ld;
ld = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current)
      xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return xe = !1, Xm(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else
    xe = !1, W && t.flags & 1048576 && cf(t, zo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      co(e, t), e = t.pendingProps;
      var o = En(t, ye.current);
      wn(t, n), o = Bu(null, t, r, e, o, n);
      var i = Hu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (i = !0, Oo(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Iu(t), o.updater = ei, t.stateNode = o, o._reactInternals = t, Hl(t, r, e, n), t = Kl(null, t, r, !0, i, n)) : (t.tag = 0, W && i && Ou(t), ve(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (co(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ch(r), e = Qe(r, e), o) {
          case 0:
            t = Vl(null, t, r, e, n);
            break e;
          case 1:
            t = ma(null, t, r, e, n);
            break e;
          case 11:
            t = da(null, t, r, e, n);
            break e;
          case 14:
            t = pa(null, t, r, Qe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Vl(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), ma(e, t, r, o, n);
    case 3:
      e: {
        if (Wf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, gf(e, t), Ao(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = Nn(Error(k(423)), t), t = ha(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Nn(Error(k(424)), t), t = ha(e, t, r, n, o);
            break e;
          } else
            for (Re = Nt(t.stateNode.containerInfo.firstChild), ze = t, W = !0, Ye = null, n = mf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === o) {
            t = ht(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yf(t), e === null && Fl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Al(r, o) ? l = null : i !== null && Al(r, i) && (t.flags |= 32), Hf(e, t), ve(e, t, l, n), t.child;
    case 6:
      return e === null && Fl(t), null;
    case 13:
      return Vf(e, t, n);
    case 4:
      return ju(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), da(e, t, r, o, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, U($o, r._currentValue), r._currentValue = l, i !== null)
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
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ul(
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
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ul(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, wn(t, n), o = He(o), r = r(o), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), pa(e, t, r, o, n);
    case 15:
      return Uf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), co(e, t), t.tag = 1, _e(r) ? (e = !0, Oo(t)) : e = !1, wn(t, n), jf(t, r, o), Hl(t, r, o, n), Kl(null, t, r, !0, e, n);
    case 19:
      return Kf(e, t, n);
    case 22:
      return Bf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function ud(e, t) {
  return Lc(e, t);
}
function ah(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new ah(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ch(e) {
  if (typeof e == "function")
    return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yu)
      return 11;
    if (e === vu)
      return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function mo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function")
    qu(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case rn:
          return Qt(n.children, o, i, t);
        case gu:
          l = 8, o |= 8;
          break;
        case dl:
          return e = Ue(12, n, t, o | 2), e.elementType = dl, e.lanes = i, e;
        case pl:
          return e = Ue(13, n, t, o), e.elementType = pl, e.lanes = i, e;
        case ml:
          return e = Ue(19, n, t, o), e.elementType = ml, e.lanes = i, e;
        case gc:
          return ri(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case mc:
                l = 10;
                break e;
              case hc:
                l = 9;
                break e;
              case yu:
                l = 11;
                break e;
              case vu:
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
function Qt(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function ri(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = gc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function rl(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function ol(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function fh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Di(0), this.expirationTimes = Di(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Di(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function bu(e, t, n, r, o, i, l, u, s) {
  return e = new fh(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ue(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(i), e;
}
function dh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function sd(e) {
  if (!e)
    return At;
  e = e._reactInternals;
  e: {
    if (bt(e) !== e || e.tag !== 1)
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
      return sf(e, n, t);
  }
  return t;
}
function ad(e, t, n, r, o, i, l, u, s) {
  return e = bu(n, r, !0, e, o, i, l, u, s), e.context = sd(null), n = e.current, r = we(), o = zt(n), i = ft(r, o), i.callback = t ?? null, Ot(n, i, o), e.current.lanes = o, Nr(e, o, r), Pe(e, r), e;
}
function oi(e, t, n, r) {
  var o = t.current, i = we(), l = zt(o);
  return n = sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(o, t, l), e !== null && (Ze(e, o, l, i), uo(e, o, l)), l;
}
function Ho(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _a(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function es(e, t) {
  _a(e, t), (e = e.alternate) && _a(e, t);
}
function ph() {
  return null;
}
var cd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ts(e) {
  this._internalRoot = e;
}
ii.prototype.render = ts.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  oi(e, t, null, null);
};
ii.prototype.unmount = ts.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function() {
      oi(null, e, null, null);
    }), t[pt] = null;
  }
};
function ii(e) {
  this._internalRoot = e;
}
ii.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Hc(e);
  }
};
function ns(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function li(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pa() {
}
function mh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Ho(l);
        i.call(a);
      };
    }
    var l = ad(t, r, e, 0, null, !1, !1, "", Pa);
    return e._reactRootContainer = l, e[pt] = l.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(), l;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Ho(s);
      u.call(a);
    };
  }
  var s = bu(e, 0, !1, null, null, !1, !1, "", Pa);
  return e._reactRootContainer = s, e[pt] = s.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
    oi(t, s, n, r);
  }), s;
}
function ui(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Ho(l);
        u.call(s);
      };
    }
    oi(t, l, e, o);
  } else
    l = mh(n, t, e, o, r);
  return Ho(l);
}
Dc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (ku(t, n | 1), Pe(t, J()), !(A & 6) && (On = J() + 500, jt()));
      }
      break;
    case 13:
      Jt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var o = we();
          Ze(r, e, 1, o);
        }
      }), es(e, 1);
  }
};
Cu = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    es(e, 134217728);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = zt(e), n = mt(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    es(e, t);
  }
};
Uc = function() {
  return j;
};
Bc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
El = function(e, t, n) {
  switch (t) {
    case "input":
      if (yl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jo(r);
            if (!o)
              throw Error(k(90));
            vc(r), yl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Sc(e, n);
      break;
    case "select":
      t = n.value, t != null && hn(e, !!n.multiple, t, !1);
  }
};
Tc = Xu;
Nc = Jt;
var hh = { usingClientEntryPoint: !1, Events: [Rr, sn, Jo, _c, Pc, Xu] }, Vn = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gh = { bundleType: Vn.bundleType, version: Vn.version, rendererPackageName: Vn.rendererPackageName, rendererConfig: Vn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = zc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vn.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      Go = eo.inject(gh), ot = eo;
    } catch {
    }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ns(t))
    throw Error(k(200));
  return dh(e, t, null, n);
};
Ae.createRoot = function(e, t) {
  if (!ns(e))
    throw Error(k(299));
  var n = !1, r = "", o = cd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = bu(e, 1, !1, null, null, n, !1, r, o), e[pt] = t.current, hr(e.nodeType === 8 ? e.parentNode : e), new ts(t);
};
Ae.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = zc(t), e = e === null ? null : e.stateNode, e;
};
Ae.flushSync = function(e) {
  return Jt(e);
};
Ae.hydrate = function(e, t, n) {
  if (!li(t))
    throw Error(k(200));
  return ui(null, e, t, !0, n);
};
Ae.hydrateRoot = function(e, t, n) {
  if (!ns(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = cd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = ad(t, null, e, 1, n ?? null, o, !1, i, l), e[pt] = t.current, hr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new ii(t);
};
Ae.render = function(e, t, n) {
  if (!li(t))
    throw Error(k(200));
  return ui(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function(e) {
  if (!li(e))
    throw Error(k(40));
  return e._reactRootContainer ? (Jt(function() {
    ui(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ae.unstable_batchedUpdates = Xu;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!li(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return ui(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function fd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd);
    } catch (e) {
      console.error(e);
    }
}
fd(), cc.exports = Ae;
var yh = cc.exports, dd, Ta = yh;
dd = Ta.createRoot, Ta.hydrateRoot;
function vh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Na = "$$material";
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
function si(e, t) {
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
var wh = !1;
function Sh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function kh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ch = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !wh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(kh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Sh(o);
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
}(), he = "-ms-", Wo = "-moz-", M = "-webkit-", pd = "comm", rs = "rule", os = "decl", xh = "@import", md = "@keyframes", Eh = "@layer", _h = Math.abs, ai = String.fromCharCode, Ph = Object.assign;
function Th(e, t) {
  return se(e, 0) ^ 45 ? (((t << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function hd(e) {
  return e.trim();
}
function Nh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function ru(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function is(e) {
  return e.length;
}
function to(e, t) {
  return t.push(e), e;
}
function Oh(e, t) {
  return e.map(t).join("");
}
var ci = 1, Rn = 1, gd = 0, Te = 0, b = 0, An = "";
function fi(e, t, n, r, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ci, column: Rn, length: l, return: "" };
}
function Kn(e, t) {
  return Ph(fi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rh() {
  return b;
}
function zh() {
  return b = Te > 0 ? se(An, --Te) : 0, Rn--, b === 10 && (Rn = 1, ci--), b;
}
function $e() {
  return b = Te < gd ? se(An, Te++) : 0, Rn++, b === 10 && (Rn = 1, ci++), b;
}
function lt() {
  return se(An, Te);
}
function ho() {
  return Te;
}
function $r(e, t) {
  return Er(An, e, t);
}
function _r(e) {
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
function yd(e) {
  return ci = Rn = 1, gd = tt(An = e), Te = 0, [];
}
function vd(e) {
  return An = "", e;
}
function go(e) {
  return hd($r(Te - 1, ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $h(e) {
  for (; (b = lt()) && b < 33; )
    $e();
  return _r(e) > 2 || _r(b) > 3 ? "" : " ";
}
function Lh(e, t) {
  for (; --t && $e() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return $r(e, ho() + (t < 6 && lt() == 32 && $e() == 32));
}
function ou(e) {
  for (; $e(); )
    switch (b) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ou(b);
        break;
      case 40:
        e === 41 && ou(e);
        break;
      case 92:
        $e();
        break;
    }
  return Te;
}
function Ah(e, t) {
  for (; $e() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && lt() === 47)
      break;
  return "/*" + $r(t, Te - 1) + "*" + ai(e === 47 ? e : $e());
}
function Mh(e) {
  for (; !_r(lt()); )
    $e();
  return $r(e, Te);
}
function Ih(e) {
  return vd(yo("", null, null, null, [""], e = yd(e), 0, [0], e));
}
function yo(e, t, n, r, o, i, l, u, s) {
  for (var a = 0, h = 0, d = l, m = 0, v = 0, y = 0, g = 1, E = 1, f = 1, c = 0, p = "", w = o, x = i, C = r, S = p; E; )
    switch (y = c, c = $e()) {
      case 40:
        if (y != 108 && se(S, d - 1) == 58) {
          ru(S += I(go(c), "&", "&\f"), "&\f") != -1 && (f = -1);
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
        S += $h(y);
        break;
      case 92:
        S += Lh(ho() - 1, 7);
        continue;
      case 47:
        switch (lt()) {
          case 42:
          case 47:
            to(jh(Ah($e(), ho()), t, n), s);
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
            E = 0;
          case 59 + h:
            f == -1 && (S = I(S, /\f/g, "")), v > 0 && tt(S) - d && to(v > 32 ? Ra(S + ";", r, n, d - 1) : Ra(I(S, " ", "") + ";", r, n, d - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (to(C = Oa(S, t, n, a, h, o, u, p, w = [], x = [], d), i), c === 123)
              if (h === 0)
                yo(S, t, C, C, w, i, d, u, x);
              else
                switch (m === 99 && se(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yo(e, C, C, r && to(Oa(e, C, C, 0, 0, o, u, p, o, w = [], d), x), o, x, d, u, r ? w : x);
                    break;
                  default:
                    yo(S, C, C, C, [""], x, 0, u, x);
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
          else if (c == 125 && g++ == 0 && zh() == 125)
            continue;
        }
        switch (S += ai(c), c * g) {
          case 38:
            f = h > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(S) - 1) * f, f = 1;
            break;
          case 64:
            lt() === 45 && (S += go($e())), m = lt(), h = d = tt(p = S += Mh(ho())), c++;
            break;
          case 45:
            y === 45 && tt(S) == 2 && (g = 0);
        }
    }
  return i;
}
function Oa(e, t, n, r, o, i, l, u, s, a, h) {
  for (var d = o - 1, m = o === 0 ? i : [""], v = is(m), y = 0, g = 0, E = 0; y < r; ++y)
    for (var f = 0, c = Er(e, d + 1, d = _h(g = l[y])), p = e; f < v; ++f)
      (p = hd(g > 0 ? m[f] + " " + c : I(c, /&\f/g, m[f]))) && (s[E++] = p);
  return fi(e, t, n, o === 0 ? rs : u, s, a, h);
}
function jh(e, t, n) {
  return fi(e, t, n, pd, ai(Rh()), Er(e, 2, -2), 0);
}
function Ra(e, t, n, r) {
  return fi(e, t, n, os, Er(e, 0, r), Er(e, r + 1, -1), r);
}
function kn(e, t) {
  for (var n = "", r = is(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Dh(e, t, n, r) {
  switch (e.type) {
    case Eh:
      if (e.children.length)
        break;
    case xh:
    case os:
      return e.return = e.return || e.value;
    case pd:
      return "";
    case md:
      return e.return = e.value + "{" + kn(e.children, r) + "}";
    case rs:
      e.value = e.props.join(",");
  }
  return tt(n = kn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Fh(e) {
  var t = is(e);
  return function(n, r, o, i) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, o, i) || "";
    return l;
  };
}
function Uh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function wd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Bh = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = lt(), o === 38 && i === 12 && (n[r] = 1), !_r(i); )
    $e();
  return $r(t, Te);
}, Hh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (_r(o)) {
      case 0:
        o === 38 && lt() === 12 && (n[r] = 1), t[r] += Bh(Te - 1, n, r);
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
        t[r] += ai(o);
    }
  while (o = $e());
  return t;
}, Wh = function(t, n) {
  return vd(Hh(yd(t), n));
}, za = /* @__PURE__ */ new WeakMap(), Vh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !za.get(r)) && !o) {
      za.set(t, !0);
      for (var i = [], l = Wh(n, i), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = i[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, Kh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Sd(e, t) {
  switch (Th(e, t)) {
    case 5103:
      return M + "print-" + e + e;
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
      return M + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + Wo + e + he + e + e;
    case 6828:
    case 4268:
      return M + e + he + e + e;
    case 6165:
      return M + e + he + "flex-" + e + e;
    case 5187:
      return M + e + I(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return M + e + he + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + he + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + he + I(e, "shrink", "negative") + e;
    case 5292:
      return M + e + he + I(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + I(e, "-grow", "") + M + e + he + I(e, "grow", "positive") + e;
    case 4554:
      return M + I(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
            return I(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Wo + (se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ru(e, "stretch") ? Sd(I(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115)
        break;
    case 6444:
      switch (se(e, tt(e) - 3 - (~ru(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + M) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return M + e + he + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + he + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + he + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + he + e + e;
  }
  return e;
}
var Qh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case os:
        t.return = Sd(t.value, t.length);
        break;
      case md:
        return kn([Kn(t, {
          value: I(t.value, "@", "@" + M)
        })], o);
      case rs:
        if (t.length)
          return Oh(t.props, function(i) {
            switch (Nh(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return kn([Kn(t, {
                  props: [I(i, /:(read-\w+)/, ":" + Wo + "$1")]
                })], o);
              case "::placeholder":
                return kn([Kn(t, {
                  props: [I(i, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Kn(t, {
                  props: [I(i, /:(plac\w+)/, ":" + Wo + "$1")]
                }), Kn(t, {
                  props: [I(i, /:(plac\w+)/, he + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Gh = [Qh], Yh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var E = g.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Gh, i = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var E = g.getAttribute("data-emotion").split(" "), f = 1; f < E.length; f++)
        i[E[f]] = !0;
      u.push(g);
    }
  );
  var s, a = [Vh, Kh];
  {
    var h, d = [Dh, Uh(function(g) {
      h.insert(g);
    })], m = Fh(a.concat(o, d)), v = function(E) {
      return kn(Ih(E), m);
    };
    s = function(E, f, c, p) {
      h = c, v(E ? E + "{" + f.styles + "}" : f.styles), p && (y.inserted[f.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Ch({
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
}, kd = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le = typeof Symbol == "function" && Symbol.for, ls = le ? Symbol.for("react.element") : 60103, us = le ? Symbol.for("react.portal") : 60106, di = le ? Symbol.for("react.fragment") : 60107, pi = le ? Symbol.for("react.strict_mode") : 60108, mi = le ? Symbol.for("react.profiler") : 60114, hi = le ? Symbol.for("react.provider") : 60109, gi = le ? Symbol.for("react.context") : 60110, ss = le ? Symbol.for("react.async_mode") : 60111, yi = le ? Symbol.for("react.concurrent_mode") : 60111, vi = le ? Symbol.for("react.forward_ref") : 60112, wi = le ? Symbol.for("react.suspense") : 60113, Xh = le ? Symbol.for("react.suspense_list") : 60120, Si = le ? Symbol.for("react.memo") : 60115, ki = le ? Symbol.for("react.lazy") : 60116, Zh = le ? Symbol.for("react.block") : 60121, Jh = le ? Symbol.for("react.fundamental") : 60117, qh = le ? Symbol.for("react.responder") : 60118, bh = le ? Symbol.for("react.scope") : 60119;
function Ie(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ls:
        switch (e = e.type, e) {
          case ss:
          case yi:
          case di:
          case mi:
          case pi:
          case wi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case gi:
              case vi:
              case ki:
              case Si:
              case hi:
                return e;
              default:
                return t;
            }
        }
      case us:
        return t;
    }
  }
}
function Cd(e) {
  return Ie(e) === yi;
}
D.AsyncMode = ss;
D.ConcurrentMode = yi;
D.ContextConsumer = gi;
D.ContextProvider = hi;
D.Element = ls;
D.ForwardRef = vi;
D.Fragment = di;
D.Lazy = ki;
D.Memo = Si;
D.Portal = us;
D.Profiler = mi;
D.StrictMode = pi;
D.Suspense = wi;
D.isAsyncMode = function(e) {
  return Cd(e) || Ie(e) === ss;
};
D.isConcurrentMode = Cd;
D.isContextConsumer = function(e) {
  return Ie(e) === gi;
};
D.isContextProvider = function(e) {
  return Ie(e) === hi;
};
D.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ls;
};
D.isForwardRef = function(e) {
  return Ie(e) === vi;
};
D.isFragment = function(e) {
  return Ie(e) === di;
};
D.isLazy = function(e) {
  return Ie(e) === ki;
};
D.isMemo = function(e) {
  return Ie(e) === Si;
};
D.isPortal = function(e) {
  return Ie(e) === us;
};
D.isProfiler = function(e) {
  return Ie(e) === mi;
};
D.isStrictMode = function(e) {
  return Ie(e) === pi;
};
D.isSuspense = function(e) {
  return Ie(e) === wi;
};
D.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === di || e === yi || e === mi || e === pi || e === wi || e === Xh || typeof e == "object" && e !== null && (e.$$typeof === ki || e.$$typeof === Si || e.$$typeof === hi || e.$$typeof === gi || e.$$typeof === vi || e.$$typeof === Jh || e.$$typeof === qh || e.$$typeof === bh || e.$$typeof === Zh);
};
D.typeOf = Ie;
kd.exports = D;
var eg = kd.exports, xd = eg, tg = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ng = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ed = {};
Ed[xd.ForwardRef] = tg;
Ed[xd.Memo] = ng;
var rg = !0;
function _d(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var as = function(t, n, r) {
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
  rg === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, cs = function(t, n, r) {
  as(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function og(e) {
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
var ig = {
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
}, lg = !1, ug = /[A-Z]|^ms/g, sg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Pd = function(t) {
  return t.charCodeAt(1) === 45;
}, $a = function(t) {
  return t != null && typeof t != "boolean";
}, il = /* @__PURE__ */ wd(function(e) {
  return Pd(e) ? e : e.replace(ug, "-$&").toLowerCase();
}), La = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(sg, function(r, o, i) {
          return nt = {
            name: o,
            styles: i,
            next: nt
          }, o;
        });
  }
  return ig[t] !== 1 && !Pd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ag = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Pr(e, t, n) {
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
      return cg(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = nt, a = n(e);
        return nt = s, Pr(e, t, a);
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
function cg(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Pr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += i + "{" + t[u] + "}" : $a(u) && (r += il(i) + ":" + La(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && lg)
          throw new Error(ag);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            $a(l[s]) && (r += il(i) + ":" + La(i, l[s]) + ";");
        else {
          var a = Pr(e, t, l);
          switch (i) {
            case "animation":
            case "animationName": {
              r += il(i) + ":" + a + ";";
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
var Aa = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function Ci(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Pr(n, t, i);
  else {
    var l = i;
    o += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Pr(n, t, e[u]), r) {
      var s = i;
      o += s[u];
    }
  Aa.lastIndex = 0;
  for (var a = "", h; (h = Aa.exec(o)) !== null; )
    a += "-" + h[1];
  var d = og(o) + a;
  return {
    name: d,
    styles: o,
    next: nt
  };
}
var fg = function(t) {
  return t();
}, Td = cl["useInsertionEffect"] ? cl["useInsertionEffect"] : !1, Nd = Td || fg, Ma = Td || N.useLayoutEffect, dg = !1, Od = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Yh({
    key: "css"
  }) : null
);
Od.Provider;
var fs = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(Od);
    return t(n, o, r);
  });
}, Lr = /* @__PURE__ */ N.createContext({}), ds = {}.hasOwnProperty, iu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", pg = function(t, n) {
  var r = {};
  for (var o in n)
    ds.call(n, o) && (r[o] = n[o]);
  return r[iu] = t, r;
}, mg = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Nd(function() {
    return cs(n, r, o);
  }), null;
}, hg = /* @__PURE__ */ fs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[iu], i = [r], l = "";
  typeof e.className == "string" ? l = _d(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = Ci(i, void 0, N.useContext(Lr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ds.call(e, a) && a !== "css" && a !== iu && !dg && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(mg, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), gg = hg, ll = { exports: {} }, Ia;
function yg() {
  return Ia || (Ia = 1, function(e) {
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
  }(ll)), ll.exports;
}
yg();
var ja = function(t, n) {
  var r = arguments;
  if (n == null || !ds.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = gg, i[1] = pg(t, n);
  for (var l = 2; l < o; l++)
    i[l] = r[l];
  return N.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ja || (ja = {}));
var vg = /* @__PURE__ */ fs(function(e, t) {
  var n = e.styles, r = Ci([n], void 0, N.useContext(Lr)), o = N.useRef();
  return Ma(function() {
    var i = t.key + "-global", l = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), l.hydrate([s])), o.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Ma(function() {
    var i = o.current, l = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && cs(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), wg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Sg = /* @__PURE__ */ wd(
  function(e) {
    return wg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), kg = !1, Cg = Sg, xg = function(t) {
  return t !== "theme";
}, Da = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Cg : xg;
}, Fa = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(l) {
      return t.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Eg = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Nd(function() {
    return cs(n, r, o);
  }), null;
}, _g = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, l;
  n !== void 0 && (i = n.label, l = n.target);
  var u = Fa(t, n, r), s = u || Da(o), a = !s("as");
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
    var g = fs(function(E, f, c) {
      var p = a && E.as || o, w = "", x = [], C = E;
      if (E.theme == null) {
        C = {};
        for (var S in E)
          C[S] = E[S];
        C.theme = N.useContext(Lr);
      }
      typeof E.className == "string" ? w = _d(f.registered, x, E.className) : E.className != null && (w = E.className + " ");
      var T = Ci(d.concat(x), f.registered, C);
      w += f.key + "-" + T.name, l !== void 0 && (w += " " + l);
      var F = a && u === void 0 ? Da(p) : s, R = {};
      for (var de in E)
        a && de === "as" || F(de) && (R[de] = E[de]);
      return R.className = w, c && (R.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Eg, {
        cache: f,
        serialized: T,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ N.createElement(p, R));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = d, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return l === void 0 && kg ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), g.withComponent = function(E, f) {
      var c = e(E, ce({}, n, f, {
        shouldForwardProp: Fa(g, f, !0)
      }));
      return c.apply(void 0, d);
    }, g;
  };
}, Pg = [
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
], Ua = _g.bind(null);
Pg.forEach(function(e) {
  Ua[e] = Ua(e);
});
function Tg(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ng(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ L(vg, {
    styles: typeof t == "function" ? (o) => t(Tg(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ba = [];
function Og(e) {
  return Ba[0] = e, Ci(Ba);
}
function tn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Rd(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !tn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Rd(e[n]);
  }), t;
}
function Vo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? ce({}, e) : e;
  return tn(e) && tn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : tn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && tn(e[o]) ? r[o] = Vo(e[o], t[o], n) : n.clone ? r[o] = tn(t[o]) ? Rd(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Rg = ["values", "unit", "step"], zg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ce({}, n, {
    [r.key]: r.val
  }), {});
};
function $g(e) {
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
  } = e, o = si(e, Rg), i = zg(t), l = Object.keys(i);
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
const Lg = {
  borderRadius: 4
}, Ag = Lg;
function lr(e, t) {
  return t ? Vo(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ps = {
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
}, Ha = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ps[e]}px)`
};
function gt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ha;
    return t.reduce((l, u, s) => (l[i.up(i.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ha;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(i.values || ps).indexOf(u) !== -1) {
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
function Mg(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Wa(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function zd(e) {
  if (typeof e != "string")
    throw new Error(vh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ko(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = xi(e, n) || r, t && (o = t(o, r, e)), o;
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
    const u = l[t], s = l.theme, a = xi(s, r) || {};
    return gt(l, u, (d) => {
      let m = Ko(a, o, d);
      return d === m && typeof d == "string" && (m = Ko(a, o, `${t}${d === "default" ? "" : zd(d)}`, d)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Ig(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const jg = {
  m: "margin",
  p: "padding"
}, Dg = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Va = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Fg = Ig((e) => {
  if (e.length > 2)
    if (Va[e])
      e = Va[e];
    else
      return [e];
  const [t, n] = e.split(""), r = jg[t], o = Dg[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), ms = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ms, ...hs];
function Ar(e, t, n, r) {
  var o;
  const i = (o = xi(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? (l) => typeof l == "string" ? l : i * l : Array.isArray(i) ? (l) => typeof l == "string" ? l : i[l] : typeof i == "function" ? i : () => {
  };
}
function $d(e) {
  return Ar(e, "spacing", 8);
}
function Mr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ug(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Mr(t, n), r), {});
}
function Bg(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Fg(n), i = Ug(o, r), l = e[n];
  return gt(e, l, i);
}
function Ld(e, t) {
  const n = $d(e.theme);
  return Object.keys(e).map((r) => Bg(e, t, r, n)).reduce(lr, {});
}
function G(e) {
  return Ld(e, ms);
}
G.propTypes = {};
G.filterProps = ms;
function Y(e) {
  return Ld(e, hs);
}
Y.propTypes = {};
Y.filterProps = hs;
function Hg(e = 8) {
  if (e.mui)
    return e;
  const t = $d({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const l = t(i);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function Ei(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? lr(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Wg = Ve("border", Fe), Vg = Ve("borderTop", Fe), Kg = Ve("borderRight", Fe), Qg = Ve("borderBottom", Fe), Gg = Ve("borderLeft", Fe), Yg = Ve("borderColor"), Xg = Ve("borderTopColor"), Zg = Ve("borderRightColor"), Jg = Ve("borderBottomColor"), qg = Ve("borderLeftColor"), bg = Ve("outline", Fe), ey = Ve("outlineColor"), _i = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ar(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mr(t, r)
    });
    return gt(e, e.borderRadius, n);
  }
  return null;
};
_i.propTypes = {};
_i.filterProps = ["borderRadius"];
Ei(Wg, Vg, Kg, Qg, Gg, Yg, Xg, Zg, Jg, qg, _i, bg, ey);
const Pi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      gap: Mr(t, r)
    });
    return gt(e, e.gap, n);
  }
  return null;
};
Pi.propTypes = {};
Pi.filterProps = ["gap"];
const Ti = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mr(t, r)
    });
    return gt(e, e.columnGap, n);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["columnGap"];
const Ni = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mr(t, r)
    });
    return gt(e, e.rowGap, n);
  }
  return null;
};
Ni.propTypes = {};
Ni.filterProps = ["rowGap"];
const ty = q({
  prop: "gridColumn"
}), ny = q({
  prop: "gridRow"
}), ry = q({
  prop: "gridAutoFlow"
}), oy = q({
  prop: "gridAutoColumns"
}), iy = q({
  prop: "gridAutoRows"
}), ly = q({
  prop: "gridTemplateColumns"
}), uy = q({
  prop: "gridTemplateRows"
}), sy = q({
  prop: "gridTemplateAreas"
}), ay = q({
  prop: "gridArea"
});
Ei(Pi, Ti, Ni, ty, ny, ry, oy, iy, ly, uy, sy, ay);
function Cn(e, t) {
  return t === "grey" ? t : e;
}
const cy = q({
  prop: "color",
  themeKey: "palette",
  transform: Cn
}), fy = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Cn
}), dy = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Cn
});
Ei(cy, fy, dy);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const py = q({
  prop: "width",
  transform: Oe
}), gs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ps[n];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Oe(n)
      };
    };
    return gt(e, e.maxWidth, t);
  }
  return null;
};
gs.filterProps = ["maxWidth"];
const my = q({
  prop: "minWidth",
  transform: Oe
}), hy = q({
  prop: "height",
  transform: Oe
}), gy = q({
  prop: "maxHeight",
  transform: Oe
}), yy = q({
  prop: "minHeight",
  transform: Oe
});
q({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
q({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const vy = q({
  prop: "boxSizing"
});
Ei(py, gs, my, hy, gy, yy, vy);
const wy = {
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
    style: _i
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Cn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Cn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Cn
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
    style: Pi
  },
  rowGap: {
    style: Ni
  },
  columnGap: {
    style: Ti
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
    transform: Oe
  },
  maxWidth: {
    style: gs
  },
  minWidth: {
    transform: Oe
  },
  height: {
    transform: Oe
  },
  maxHeight: {
    transform: Oe
  },
  minHeight: {
    transform: Oe
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
}, Ad = wy;
function Sy(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ky(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cy() {
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
    const m = xi(o, a) || {};
    return d ? d(l) : gt(l, r, (y) => {
      let g = Ko(m, h, y);
      return y === g && typeof y == "string" && (g = Ko(m, h, `${n}${y === "default" ? "" : zd(y)}`, y)), s === !1 ? g : {
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
    const u = (r = i.unstable_sxConfig) != null ? r : Ad;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(i);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const d = Mg(i.breakpoints), m = Object.keys(d);
      let v = d;
      return Object.keys(h).forEach((y) => {
        const g = ky(h[y], i);
        if (g != null)
          if (typeof g == "object")
            if (u[y])
              v = lr(v, e(y, g, i, u));
            else {
              const E = gt({
                theme: i
              }, g, (f) => ({
                [y]: f
              }));
              Sy(E, g) ? v[y] = t({
                sx: g,
                theme: i,
                nested: !0
              }) : v = lr(v, E);
            }
          else
            v = lr(v, e(y, g, i, u));
      }), !l && i.modularCssLayers ? {
        "@layer sx": Wa(m, v)
      } : Wa(m, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Md = Cy();
Md.filterProps = ["sx"];
const xy = Md;
function Ey(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const _y = ["breakpoints", "palette", "spacing", "shape"];
function Py(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, l = si(e, _y), u = $g(n), s = Hg(o);
  let a = Vo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ce({
      mode: "light"
    }, r),
    spacing: s,
    shape: ce({}, Ag, i)
  }, l);
  return a.applyStyles = Ey, a = t.reduce((h, d) => Vo(h, d), a), a.unstable_sxConfig = ce({}, Ad, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(d) {
    return xy({
      sx: d,
      theme: this
    });
  }, a;
}
function Ty(e) {
  return Object.keys(e).length === 0;
}
function ys(e = null) {
  const t = N.useContext(Lr);
  return !t || Ty(t) ? e : t;
}
const Ny = Py();
function Oy(e = Ny) {
  return ys(e);
}
function ul(e) {
  const t = Og(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Ry({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Oy(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((l) => ul(typeof l == "function" ? l(o) : l)) : i = ul(i)), /* @__PURE__ */ L(Ng, {
    styles: i
  });
}
const zy = typeof window < "u" ? N.useLayoutEffect : N.useEffect, $y = zy;
let Ka = 0;
function Ly(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Ka += 1, n(`mui-${Ka}`));
  }, [t]), r;
}
const Qa = cl["useId".toString()];
function Ay(e) {
  if (Qa !== void 0) {
    const t = Qa();
    return e ?? t;
  }
  return Ly(e);
}
const My = /* @__PURE__ */ N.createContext(null), Id = My;
function jd() {
  return N.useContext(Id);
}
const Iy = typeof Symbol == "function" && Symbol.for, jy = Iy ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Dy(e, t) {
  return typeof t == "function" ? t(e) : ce({}, e, t);
}
function Fy(e) {
  const {
    children: t,
    theme: n
  } = e, r = jd(), o = N.useMemo(() => {
    const i = r === null ? n : Dy(r, n);
    return i != null && (i[jy] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ L(Id.Provider, {
    value: o,
    children: t
  });
}
const Uy = ["value"], By = /* @__PURE__ */ N.createContext();
function Hy(e) {
  let {
    value: t
  } = e, n = si(e, Uy);
  return /* @__PURE__ */ L(By.Provider, ce({
    value: t ?? !0
  }, n));
}
const Wy = /* @__PURE__ */ N.createContext(void 0);
function Vy({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ L(Wy.Provider, {
    value: e,
    children: t
  });
}
function Ky(e) {
  const t = ys(), n = Ay() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, $y(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ L(Ry, {
    styles: o
  }) : null;
}
const Ga = {};
function Ya(e, t, n, r = !1) {
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
function Qy(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ys(Ga), i = jd() || Ga, l = Ya(r, o, n), u = Ya(r, i, n, !0), s = l.direction === "rtl", a = Ky(l);
  return /* @__PURE__ */ L(Fy, {
    theme: u,
    children: /* @__PURE__ */ L(Lr.Provider, {
      value: l,
      children: /* @__PURE__ */ L(Hy, {
        value: s,
        children: /* @__PURE__ */ be(Vy, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const Gy = ["theme"];
function Yy(e) {
  let {
    theme: t
  } = e, n = si(e, Gy);
  const r = t[Na];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = ce({}, r, {
    vars: null
  }) : t && !t.vars && (o = ce({}, t, {
    vars: null
  }))), /* @__PURE__ */ L(Qy, ce({}, n, {
    themeId: r ? Na : void 0,
    theme: o
  }));
}
const Dd = [137, 80, 78, 71, 13, 10, 26, 10];
function Xy(e) {
  if (e.length < 26)
    return null;
  for (let t = 0; t < 8; t++)
    if (e[t] !== Dd[t])
      return null;
  return e[25];
}
function Zy(e) {
  return e === 4 || e === 6;
}
function Jy(e) {
  if (e.length < 8)
    return !1;
  for (let t = 0; t < 8; t++)
    if (e[t] !== Dd[t])
      return !1;
  return !0;
}
const qy = 0.01, by = 250;
async function ev(e) {
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
      i[s] < by && u++;
    return u / l;
  } finally {
    t.close();
  }
}
async function Fd(e) {
  const t = await createImageBitmap(e);
  try {
    return { width: t.width, height: t.height };
  } finally {
    t.close();
  }
}
async function tv(e, t) {
  const n = new Uint8Array(await e.slice(0, 32).arrayBuffer());
  if (!Jy(n))
    return { ok: !1, reason: "Result is not a PNG." };
  const r = Xy(n);
  if (!Zy(r))
    return {
      ok: !1,
      reason: "Result has no alpha channel, so it cannot be a transparent cutout."
    };
  let o;
  try {
    o = await Fd(e);
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
    i = await ev(e);
  } catch {
    return { ok: !1, reason: "Could not analyze result image transparency." };
  }
  return i < qy ? {
    ok: !1,
    reason: "Result is fully opaque. The background was not removed."
  } : { ok: !0 };
}
const nv = {
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
function rv(e) {
  const t = e.toLowerCase();
  return /\b(transparent|alpha|cut\s*-?out|knock\s*-?out|isolate)\b/.test(t) ? !0 : /\b(remove|erase|delete|without)\b/.test(t) && /\b(background|backdrop|bg)\b/.test(t);
}
async function ov(e) {
  const t = await fetch(e, { method: "GET" });
  if (!t.ok)
    throw new Error("Could not load source image for dimension check.");
  const n = await t.blob();
  return Fd(n);
}
async function iv(e, t, n) {
  const r = new AbortController(), o = window.setTimeout(
    () => r.abort(),
    n.requestTimeoutMs ?? 65e3
  ), i = rv(t);
  let l;
  try {
    if (i)
      try {
        l = await ov(e);
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
      throw new Error(nv[m] || "Image generation failed. Please try again.");
    }
    if (!(u.headers.get("Content-Type") || "").split(";")[0].trim().startsWith("image/"))
      throw new Error("The proxy returned an invalid image response.");
    const a = await u.blob();
    if (!a.size)
      throw new Error("The proxy returned an empty image.");
    const h = await uv(a);
    if (i) {
      const d = await tv(h, l ?? null);
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
function lv(e) {
  const t = new Uint8Array(e, 0, Math.min(4, e.byteLength));
  return t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71;
}
async function uv(e) {
  const t = await e.arrayBuffer();
  return lv(t) ? new Blob([t], { type: "image/png" }) : sv(new Blob([t], { type: e.type || "image/jpeg" }));
}
async function sv(e) {
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
const Xa = [
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
function sl(e, t) {
  var n;
  for (const r of t) {
    const o = Oi((n = e == null ? void 0 : e.properties) == null ? void 0 : n[r]);
    if (o)
      return o;
  }
  return "";
}
function lu(e) {
  return Oi((e == null ? void 0 : e.href) ?? e);
}
function av(e, t) {
  var n, r, o, i, l;
  for (const u of t)
    try {
      const s = lu((o = (r = (n = e == null ? void 0 : e.getRendition) == null ? void 0 : n.call(e, u)) == null ? void 0 : r.items) == null ? void 0 : o[0]);
      if (s)
        return s;
    } catch {
    }
  for (const u of t) {
    const s = Array.isArray(e == null ? void 0 : e.renditions) ? e.renditions.find((h) => (h == null ? void 0 : h.name) === u) : (i = e == null ? void 0 : e.renditions) == null ? void 0 : i[u], a = lu(((l = s == null ? void 0 : s.items) == null ? void 0 : l[0]) ?? (s == null ? void 0 : s[0]));
    if (a)
      return a;
  }
  return "";
}
function cv(e, t) {
  var n, r;
  for (const o of t) {
    const i = lu((r = (n = e == null ? void 0 : e.renditions) == null ? void 0 : n[o]) == null ? void 0 : r[0]);
    if (i)
      return i;
  }
  return "";
}
function fv(e) {
  return /\.png$/i.test(e) ? "image/png" : /\.webp$/i.test(e) ? "image/webp" : /\.jpe?g$/i.test(e) ? "image/jpeg" : "";
}
async function dv(e, t) {
  var u, s;
  const n = Oi(((u = t == null ? void 0 : t.systemProperties) == null ? void 0 : u.id) ?? (t == null ? void 0 : t.id));
  if (!n)
    return null;
  let r = av(t, Xa);
  if (!r && ((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    try {
      const a = await e.raw.getAsync(`/api/entities/${n}`);
      a != null && a.isSuccessStatusCode && (r || (r = cv(a.content, Xa)));
    } catch {
    }
  const o = sl(t, ["FileName", "fileName"]) || `asset-${n}.jpg`, i = fv(o) || sl(t, ["MimeType", "mimeType", "ContentType"]) || "image/jpeg", l = sl(t, ["Title", "title", "Name", "name"]) || o;
  return !r || !i.toLowerCase().startsWith("image/") ? null : {
    id: n,
    name: l,
    fileName: o,
    mimeType: i,
    previewUrl: r,
    sourceUrl: r
  };
}
function pv(e) {
  return e === "image/webp" ? "webp" : "png";
}
function mv(e = /* @__PURE__ */ new Date()) {
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
function hv(e) {
  let t = e;
  if (typeof t == "string")
    try {
      t = JSON.parse(t);
    } catch {
      return null;
    }
  if (!t || typeof t != "object")
    return null;
  const n = t, r = Number(n.asset_id ?? n.assetId ?? n.id);
  return Number.isSafeInteger(r) && r > 0 ? r : null;
}
function gv(e) {
  if (!e)
    return null;
  const t = Object.entries(e).find(
    ([i]) => i.toLowerCase() === "location"
  ), r = String((t == null ? void 0 : t[1]) ?? "").match(/\/api\/entities\/(\d+)/i);
  if (!r)
    return null;
  const o = Number(r[1]);
  return Number.isSafeInteger(o) && o > 0 ? o : null;
}
function Za(e) {
  const t = e.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return t.startsWith("file") || t.includes("mimetype") || ["width", "height", "imagewidth", "imageheight", "dimensions"].includes(t);
}
function uu(e) {
  return typeof e == "number" ? !0 : Array.isArray(e) ? e.some(uu) : e && typeof e == "object" ? Object.values(e).some(uu) : !1;
}
function yv(e) {
  return /assetmedia|mediamatrix|rendition|repository|lifecycle|publiclink|version|masterasset/i.test(
    e
  );
}
async function Ja(e, t, n) {
  var o;
  if (!((o = e.raw) != null && o.putAsync))
    throw new Error("The Content Hub entity client is unavailable for setting asset variant.");
  const r = await e.raw.putAsync(`/api/entities/${t}`, {
    entitydefinition: { href: "/api/entitydefinitions/M.Asset" },
    properties: { assetVariant: n }
  });
  if (!r.isSuccessStatusCode)
    throw new Error(
      `Content Hub could not set assetVariant property (HTTP ${r.statusCode ?? "unknown"}).`
    );
}
async function vv(e, t, n) {
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
async function wv(e, t, n) {
  var m, v;
  if (!((m = e.raw) != null && m.getAsync) || !((v = e.raw) != null && v.postAsync))
    throw new Error("The Content Hub entity client is unavailable for copying metadata.");
  const r = await e.raw.getAsync(`/api/entities/${t}`);
  if (!r.isSuccessStatusCode || !r.content)
    throw new Error("Content Hub could not load the original asset metadata.");
  const o = r.content.properties ?? {}, i = {}, l = Object.entries(o).map(
    ([y, g]) => {
      const E = uu(g);
      return E && !Za(y) && (i[y] = g), {
        property: y,
        method: Za(y) || E ? "Ignore" : "Keep"
      };
    }
  ), u = Object.keys(r.content.relations ?? {}).map(
    (y) => ({
      relation: y,
      method: yv(y) ? "Ignore" : "Keep"
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
    ), E = g.content && typeof g.content == "object" ? g.content : void 0;
    if (g.isSuccessStatusCode && (E == null ? void 0 : E.success) !== !1) {
      await Sv(
        e,
        n,
        i,
        r.content.entitydefinition
      );
      return;
    }
    h = g.statusCode, d = typeof (E == null ? void 0 : E.message) == "string" ? E.message : "";
  }
  throw new Error(
    `The new asset was created as ${n}, but its metadata could not be copied (HTTP ${h ?? "unknown"}${d ? `: ${d}` : ""}).`
  );
}
async function Sv(e, t, n, r) {
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
function kv(e, t, n) {
  return e.isCutout ? (t.cutoutOutputMode ?? "newAsset") === "newVersion" ? { uploadMode: "version", shouldTagAsCutout: !0 } : { uploadMode: "new-asset", shouldTagAsCutout: !0 } : { uploadMode: n, shouldTagAsCutout: !1 };
}
async function Cv(e, t, n, r, o) {
  var E;
  if (!((E = e == null ? void 0 : e.uploads) != null && E.uploadAsync))
    throw new Error("The Content Hub upload client is not available in this component context.");
  const i = Number(t.id);
  if (!Number.isSafeInteger(i) || i <= 0)
    throw new Error("Content Hub returned an invalid numeric asset ID.");
  const { uploadMode: l, shouldTagAsCutout: u } = kv(n, r, o), s = n.blob.type === "image/png" ? n.blob : new Blob([await n.blob.arrayBuffer()], { type: "image/png" }), a = pv(s.type), h = t.fileName.replace(/\.[^.]+$/, "") || `asset-${t.id}`, d = u && l === "new-asset" ? `${h}-cutout.${a}` : `${h}-${mv()}.${a}`, m = await s.arrayBuffer(), v = {
    source: {
      name: d,
      getReadableSourceAsync: () => Promise.resolve(m)
    },
    configurationName: r.uploadConfiguration || "AssetUploadConfiguration",
    actionName: l === "version" ? "NewMainFile" : "NewAsset",
    actionParameters: l === "version" ? { AssetId: i } : {}
  }, y = await e.uploads.uploadAsync(v);
  if ((y == null ? void 0 : y.isSuccessStatusCode) === !1)
    throw new Error(
      `Content Hub could not ${l === "version" ? "create the new version" : "create the new asset"} (HTTP ${y.statusCode ?? "unknown"}).`
    );
  if (l === "version")
    return u && await Ja(e, i, "cutout"), i;
  const g = hv(y == null ? void 0 : y.content) || gv(y == null ? void 0 : y.responseHeaders);
  if (!g)
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  return await wv(e, i, g), u && (await Ja(e, g, "cutout"), await vv(e, i, g)), g;
}
function qa(e) {
  return e instanceof Error ? e.message : "Something went wrong. Please try again.";
}
function xv({ client: e, entity: t, options: n }) {
  const [r, o] = N.useState(null), [i, l] = N.useState(!0), [u, s] = N.useState(""), [a, h] = N.useState(null), [d, m] = N.useState(!1), [v, y] = N.useState(null), [g, E] = N.useState(""), f = v != null, c = N.useMemo(() => {
    var S, T, F;
    const C = (S = n.apiBaseUrl) == null ? void 0 : S.trim();
    return C ? {
      apiBaseUrl: C,
      apiToken: (T = n.apiToken) == null ? void 0 : T.trim(),
      uploadConfiguration: ((F = n.uploadConfiguration) == null ? void 0 : F.trim()) || "AssetUploadConfiguration",
      requestTimeoutMs: Math.max(165e3, n.requestTimeoutMs ?? 165e3)
    } : null;
  }, [n]);
  N.useEffect(() => {
    let C = !0;
    return l(!0), dv(e, t).then((S) => {
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
    a && URL.revokeObjectURL(a.objectUrl), h(null), E("");
  }, [a]), w = N.useCallback(async () => {
    if (!(!r || !c || !u.trim())) {
      m(!0), E(""), a && URL.revokeObjectURL(a.objectUrl), h(null);
      try {
        h(
          await iv(
            r.sourceUrl,
            u.trim(),
            c
          )
        );
      } catch (C) {
        E(qa(C));
      } finally {
        m(!1);
      }
    }
  }, [r, a, u, c]), x = N.useCallback(async (C) => {
    if (!(!r || !a || !c)) {
      y(C), E("");
      try {
        const S = await Cv(
          e,
          r,
          a,
          c,
          C
        );
        C === "version" && !a.isCutout || a.isCutout && c.cutoutOutputMode === "newVersion" ? window.location.reload() : window.location.assign(`/en-us/asset/${S}`);
      } catch (S) {
        E(qa(S));
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
      /* @__PURE__ */ L("div", { className: "ch-image-transform__actions", children: a ? /* @__PURE__ */ be(dp, { children: [
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button", disabled: f, onClick: () => x("version"), children: v === "version" ? "Creating version…" : "Create version" }),
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: () => x("new-asset"), children: v === "new-asset" ? "Creating asset…" : "Create as new asset" }),
        /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: p, children: "Discard and try again" })
      ] }) : /* @__PURE__ */ L("button", { type: "button", className: "ch-image-transform__button", disabled: !u.trim() || d, onClick: w, children: d ? "Generating…" : "Generate" }) })
    ] })
  ] }) : /* @__PURE__ */ L("section", { className: "ch-image-transform", children: /* @__PURE__ */ L("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: "This component needs an image asset with an accessible preview and download rendition." }) }) : /* @__PURE__ */ L("section", { className: "ch-image-transform", children: /* @__PURE__ */ be("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: [
    "Configure ",
    /* @__PURE__ */ L("code", { children: "apiBaseUrl" }),
    " for this external component."
  ] }) });
}
const Ev = ["config", "settings", "json", "componentOptions"], _v = ["newAsset", "newVersion"];
function Ud(e) {
  if (e) {
    if (typeof e == "string")
      try {
        return Ud(JSON.parse(e));
      } catch {
        return;
      }
    return typeof e == "object" && !Array.isArray(e) ? e : void 0;
  }
}
function Qn(e, t) {
  const n = Object.entries(e).find(([r]) => r.toLowerCase() === t.toLowerCase());
  return n == null ? void 0 : n[1];
}
function al(e) {
  if (typeof e != "string")
    return;
  const t = e.trim();
  return t && !/^https?:\/\/your|^your[-_]|^optional-/i.test(t) ? t : void 0;
}
function Pv(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : void 0;
}
function Tv(e) {
  if (typeof e != "string")
    return;
  const t = e.trim().toLowerCase();
  if (t === "newasset")
    return "newAsset";
  if (t === "newversion")
    return "newVersion";
  if (_v.includes(e.trim()))
    return e.trim();
}
function vo(e) {
  const t = Ud(e);
  if (!t)
    return {};
  let n = {
    apiBaseUrl: al(Qn(t, "apiBaseUrl")),
    apiToken: al(Qn(t, "apiToken")),
    uploadConfiguration: al(Qn(t, "uploadConfiguration")),
    requestTimeoutMs: Pv(Qn(t, "requestTimeoutMs")),
    cutoutOutputMode: Tv(Qn(t, "cutoutOutputMode"))
  };
  for (const r of Ev)
    t[r] != null && (n = { ...n, ...vo(t[r]) });
  return n;
}
function Nv(e, t) {
  return {
    ...vo(t == null ? void 0 : t.config),
    ...vo(e),
    ...vo(t)
  };
}
function Ov(e) {
  const t = dd(e);
  return {
    render(n) {
      const r = Nv(n == null ? void 0 : n.options, n);
      t.render(
        /* @__PURE__ */ L(Yy, { theme: n.theme, children: /* @__PURE__ */ L(
          xv,
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
  Ov as default
};
