(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".ch-image-transform{display:flex;flex-direction:column;width:100%;min-width:0;min-height:100%;box-sizing:border-box;overflow:auto;color:#102a43;background:#f5f8fb;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.ch-image-transform *,.ch-image-transform *:before,.ch-image-transform *:after{box-sizing:border-box}.ch-image-transform--center{align-items:center;justify-content:center;gap:10px;color:#486581}.ch-image-transform__header{padding:14px;border-bottom:1px solid #d9e2ec;background:#fff}.ch-image-transform__header h2,.ch-image-transform__header p{margin:0}.ch-image-transform__header h2{font-size:17px}.ch-image-transform__images{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:14px}.ch-image-transform__images--split{grid-template-columns:repeat(2,minmax(0,1fr))}.ch-image-transform__images figure{position:relative;min-width:0;margin:0;overflow:hidden;border:1px solid #d9e2ec;border-radius:9px;background:#e9eef3}.ch-image-transform__images figure>span{position:absolute;z-index:1;top:8px;left:8px;padding:3px 7px;border-radius:999px;color:#fff;background:rgb(16 42 67 / 82%);font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-transform__images img{display:block;width:100%;height:clamp(180px,38vh,420px);object-fit:contain}.ch-image-transform__controls{display:grid;gap:10px;padding:0 14px 18px}.ch-image-transform__controls label{font-size:12px;font-weight:700}.ch-image-transform__controls textarea{width:100%;resize:vertical;min-height:88px;padding:10px;border:1px solid #bcccdc;border-radius:8px;color:#102a43;background:#fff;font:inherit;font-size:13px;line-height:1.45}.ch-image-transform__controls textarea:focus{outline:2px solid #9ac7f1;border-color:#0b5cab}.ch-image-transform__working{display:flex;align-items:center;gap:9px;color:#486581;font-size:12px}.ch-image-transform__spinner{display:inline-block;flex:0 0 auto;width:22px;height:22px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-transform-spin .8s linear infinite}.ch-image-transform__actions{display:flex;flex-wrap:wrap;gap:8px}.ch-image-transform__button{flex:1 1 170px;min-height:38px;padding:9px 13px;border:1px solid #0b5cab;border-radius:8px;color:#fff;background:#0b5cab;font-size:12px;font-weight:700;cursor:pointer}.ch-image-transform__button--secondary{color:#0b5cab;background:#fff}.ch-image-transform__button:disabled{opacity:.55;cursor:not-allowed}.ch-image-transform__notice{margin:14px;padding:10px 12px;border:1px solid #bcccdc;border-radius:8px;background:#fff;font-size:12px;line-height:1.45}.ch-image-transform__controls .ch-image-transform__notice{margin:0}.ch-image-transform__notice--error{border-color:#f9b8b8;color:#ab091e;background:#fff5f5}.ch-image-transform__notice--success{border-color:#9adbad;color:#0f6b35;background:#f0fff4}@keyframes ch-image-transform-spin{to{transform:rotate(360deg)}}@media (max-width: 520px){.ch-image-transform__images--split{grid-template-columns:minmax(0,1fr)}.ch-image-transform__images img{height:220px}}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function Ud(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qa = { exports: {} }, Yo = {}, ba = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), Bd = Symbol.for("react.portal"), Hd = Symbol.for("react.fragment"), Wd = Symbol.for("react.strict_mode"), Vd = Symbol.for("react.profiler"), Kd = Symbol.for("react.provider"), Qd = Symbol.for("react.context"), Gd = Symbol.for("react.forward_ref"), Yd = Symbol.for("react.suspense"), Xd = Symbol.for("react.memo"), Zd = Symbol.for("react.lazy"), ws = Symbol.iterator;
function Jd(e) {
  return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ec = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, tc = Object.assign, nc = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rc() {
}
rc.prototype = Ln.prototype;
function su(e, t, n) {
  this.props = e, this.context = t, this.refs = nc, this.updater = n || ec;
}
var au = su.prototype = new rc();
au.constructor = su;
tc(au, Ln.prototype);
au.isPureReactComponent = !0;
var Ss = Array.isArray, oc = Object.prototype.hasOwnProperty, cu = { current: null }, lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      oc.call(t, r) && !lc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Tr, type: e, key: l, ref: i, props: o, _owner: cu.current };
}
function qd(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function bd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ks = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bd("" + e.key) : t.toString(36);
}
function ro(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Tr:
          case Bd:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Ml(i, 0) : r, Ss(o) ? (n = "", e != null && (n = e.replace(ks, "$&/") + "/"), ro(o, t, n, "", function(a) {
      return a;
    })) : o != null && (fu(o) && (o = qd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(ks, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ss(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + Ml(l, u);
      i += ro(l, t, n, s, o);
    }
  else if (s = Jd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, s = r + Ml(l, u++), i += ro(l, t, n, s, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Fr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ro(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function ep(e) {
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
var Se = { current: null }, oo = { transition: null }, tp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: oo, ReactCurrentOwner: cu };
function uc() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: Fr, forEach: function(e, t, n) {
  Fr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Fr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Fr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!fu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = Ln;
L.Fragment = Hd;
L.Profiler = Vd;
L.PureComponent = su;
L.StrictMode = Wd;
L.Suspense = Yd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
L.act = uc;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = tc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = cu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      oc.call(t, s) && !lc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Tr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Qd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Kd, _context: e }, e.Consumer = e;
};
L.createElement = ic;
L.createFactory = function(e) {
  var t = ic.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Gd, render: e };
};
L.isValidElement = fu;
L.lazy = function(e) {
  return { $$typeof: Zd, _payload: { _status: -1, _result: e }, _init: ep };
};
L.memo = function(e, t) {
  return { $$typeof: Xd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = oo.transition;
  oo.transition = {};
  try {
    e();
  } finally {
    oo.transition = t;
  }
};
L.unstable_act = uc;
L.useCallback = function(e, t) {
  return Se.current.useCallback(e, t);
};
L.useContext = function(e) {
  return Se.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return Se.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return Se.current.useEffect(e, t);
};
L.useId = function() {
  return Se.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return Se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return Se.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return Se.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return Se.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return Se.current.useRef(e);
};
L.useState = function(e) {
  return Se.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return Se.current.useTransition();
};
L.version = "18.3.1";
ba.exports = L;
var N = ba.exports;
const np = /* @__PURE__ */ Dd(N), fi = /* @__PURE__ */ Ud({
  __proto__: null,
  default: np
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
var rp = N, op = Symbol.for("react.element"), lp = Symbol.for("react.fragment"), ip = Object.prototype.hasOwnProperty, up = rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    ip.call(t, r) && !sp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: op, type: e, key: l, ref: i, props: o, _owner: up.current };
}
Yo.Fragment = lp;
Yo.jsx = sc;
Yo.jsxs = sc;
qa.exports = Yo;
var du = qa.exports;
const ap = du.Fragment, $ = du.jsx, be = du.jsxs;
var ac = { exports: {} }, Ie = {}, cc = { exports: {} }, fc = {};
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
  function t(_, O) {
    var z = _.length;
    _.push(O);
    e:
      for (; 0 < z; ) {
        var Z = z - 1 >>> 1, oe = _[Z];
        if (0 < o(oe, O))
          _[Z] = O, _[z] = oe, z = Z;
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
    var O = _[0], z = _.pop();
    if (z !== O) {
      _[0] = z;
      e:
        for (var Z = 0, oe = _.length, jr = oe >>> 1; Z < jr; ) {
          var Ft = 2 * (Z + 1) - 1, Il = _[Ft], Ut = Ft + 1, Ar = _[Ut];
          if (0 > o(Il, z))
            Ut < oe && 0 > o(Ar, Il) ? (_[Z] = Ar, _[Ut] = z, Z = Ut) : (_[Z] = Il, _[Ft] = z, Z = Ft);
          else if (Ut < oe && 0 > o(Ar, z))
            _[Z] = Ar, _[Ut] = z, Z = Ut;
          else
            break e;
        }
    }
    return O;
  }
  function o(_, O) {
    var z = _.sortIndex - O.sortIndex;
    return z !== 0 ? z : _.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], h = 1, m = null, p = 3, v = !1, g = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var O = n(a); O !== null; ) {
      if (O.callback === null)
        r(a);
      else if (O.startTime <= _)
        r(a), O.sortIndex = O.expirationTime, t(s, O);
      else
        break;
      O = n(a);
    }
  }
  function w(_) {
    if (y = !1, d(_), !g)
      if (n(s) !== null)
        g = !0, Ll(x);
      else {
        var O = n(a);
        O !== null && $l(w, O.startTime - _);
      }
  }
  function x(_, O) {
    g = !1, y && (y = !1, f(T), T = -1), v = !0;
    var z = p;
    try {
      for (d(O), m = n(s); m !== null && (!(m.expirationTime > O) || _ && !te()); ) {
        var Z = m.callback;
        if (typeof Z == "function") {
          m.callback = null, p = m.priorityLevel;
          var oe = Z(m.expirationTime <= O);
          O = e.unstable_now(), typeof oe == "function" ? m.callback = oe : m === n(s) && r(s), d(O);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var jr = !0;
      else {
        var Ft = n(a);
        Ft !== null && $l(w, Ft.startTime - O), jr = !1;
      }
      return jr;
    } finally {
      m = null, p = z, v = !1;
    }
  }
  var C = !1, S = null, T = -1, U = 5, R = -1;
  function te() {
    return !(e.unstable_now() - R < U);
  }
  function jn() {
    if (S !== null) {
      var _ = e.unstable_now();
      R = _;
      var O = !0;
      try {
        O = S(!0, _);
      } finally {
        O ? An() : (C = !1, S = null);
      }
    } else
      C = !1;
  }
  var An;
  if (typeof c == "function")
    An = function() {
      c(jn);
    };
  else if (typeof MessageChannel < "u") {
    var vs = new MessageChannel(), Fd = vs.port2;
    vs.port1.onmessage = jn, An = function() {
      Fd.postMessage(null);
    };
  } else
    An = function() {
      P(jn, 0);
    };
  function Ll(_) {
    S = _, C || (C = !0, An());
  }
  function $l(_, O) {
    T = P(function() {
      _(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Ll(x));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
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
      return _();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, O) {
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
    var z = p;
    p = _;
    try {
      return O();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(_, O, z) {
    var Z = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Z + z : Z) : z = Z, _) {
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
    return oe = z + oe, _ = { id: h++, callback: O, priorityLevel: _, startTime: z, expirationTime: oe, sortIndex: -1 }, z > Z ? (_.sortIndex = z, t(a, _), n(s) === null && _ === n(a) && (y ? (f(T), T = -1) : y = !0, $l(w, z - Z))) : (_.sortIndex = oe, t(s, _), g || v || (g = !0, Ll(x))), _;
  }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(_) {
    var O = p;
    return function() {
      var z = p;
      p = O;
      try {
        return _.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(fc);
cc.exports = fc;
var cp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = N, $e = cp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dc = /* @__PURE__ */ new Set(), ur = {};
function qt(e, t) {
  En(e, t), En(e + "Capture", t);
}
function En(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++)
    dc.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), di = Object.prototype.hasOwnProperty, dp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xs = {}, Cs = {};
function pp(e) {
  return di.call(Cs, e) ? !0 : di.call(xs, e) ? !1 : dp.test(e) ? Cs[e] = !0 : (xs[e] = !0, !1);
}
function mp(e, t, n, r) {
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
function hp(e, t, n, r) {
  if (t === null || typeof t > "u" || mp(e, t, n, r))
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
function ke(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new ke(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  de[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pu, mu);
  de[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pu, mu);
  de[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = de.hasOwnProperty(t) ? de[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hp(t, n, o, r) && (n = null), r || o === null ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), rn = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), yu = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), mc = Symbol.for("react.context"), gu = Symbol.for("react.forward_ref"), mi = Symbol.for("react.suspense"), hi = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), hc = Symbol.for("react.offscreen"), Es = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object" ? null : (e = Es && e[Es] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, jl;
function Gn(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jl = t && t[1] || "";
    }
  return `
` + jl + e;
}
var Al = !1;
function Fl(e, t) {
  if (!e || Al)
    return "";
  Al = !0;
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
`), l = r.stack.split(`
`), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || o[i] !== l[u]) {
                var s = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function yp(e) {
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
      return e = Fl(e.type, !1), e;
    case 11:
      return e = Fl(e.type.render, !1), e;
    case 1:
      return e = Fl(e.type, !0), e;
    default:
      return "";
  }
}
function yi(e) {
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
    case pi:
      return "Profiler";
    case yu:
      return "StrictMode";
    case mi:
      return "Suspense";
    case hi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || "Context") + ".Consumer";
      case pc:
        return (e._context.displayName || "Context") + ".Provider";
      case gu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case vu:
        return t = e.displayName || null, t !== null ? t : yi(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return yi(e(t));
        } catch {
        }
    }
  return null;
}
function gp(e) {
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
      return yi(t);
    case 8:
      return t === yu ? "StrictMode" : "Mode";
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
function yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vp(e) {
  var t = yc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Dr(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function gc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = yc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ko(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gi(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _s(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && hu(e, "checked", t, !1);
}
function vi(e, t) {
  vc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wi(e, t.type, n) : t.hasOwnProperty("defaultValue") && wi(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function wi(e, t, n) {
  (t !== "number" || ko(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function yn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Si(e, t) {
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
  e._wrapperState = { initialValue: $t(n) };
}
function wc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Br, kc = function(e) {
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
}, wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
  wp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Sp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (Sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ci(e, t) {
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
var Ei = null;
function wu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _i = null, gn = null, vn = null;
function Rs(e) {
  if (e = Or(e)) {
    if (typeof _i != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = bo(t), _i(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  gn ? vn ? vn.push(e) : vn = [e] : gn = e;
}
function _c() {
  if (gn) {
    var e = gn, t = vn;
    if (vn = gn = null, Rs(e), t)
      for (e = 0; e < t.length; e++)
        Rs(t[e]);
  }
}
function Pc(e, t) {
  return e(t);
}
function Tc() {
}
var Ul = !1;
function Nc(e, t, n) {
  if (Ul)
    return e(t, n);
  Ul = !0;
  try {
    return Pc(e, t, n);
  } finally {
    Ul = !1, (gn !== null || vn !== null) && (Tc(), _c());
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = bo(n);
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
var Pi = !1;
if (dt)
  try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      Pi = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    Pi = !1;
  }
function kp(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var qn = !1, xo = null, Co = !1, Ti = null, xp = { onError: function(e) {
  qn = !0, xo = e;
} };
function Cp(e, t, n, r, o, l, i, u, s) {
  qn = !1, xo = null, kp.apply(xp, arguments);
}
function Ep(e, t, n, r, o, l, i, u, s) {
  if (Cp.apply(this, arguments), qn) {
    if (qn) {
      var a = xo;
      qn = !1, xo = null;
    } else
      throw Error(k(198));
    Co || (Co = !0, Ti = a);
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
function Os(e) {
  if (bt(e) !== e)
    throw Error(k(188));
}
function _p(e) {
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
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n)
          return Os(o), e;
        if (l === r)
          return Os(o), t;
        l = l.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return)
      n = o, r = l;
    else {
      for (var i = !1, u = o.child; u; ) {
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
      if (!i) {
        for (u = l.child; u; ) {
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
        if (!i)
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
function Oc(e) {
  return e = _p(e), e !== null ? zc(e) : null;
}
function zc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = zc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Lc = $e.unstable_scheduleCallback, zs = $e.unstable_cancelCallback, Pp = $e.unstable_shouldYield, Tp = $e.unstable_requestPaint, J = $e.unstable_now, Np = $e.unstable_getCurrentPriorityLevel, Su = $e.unstable_ImmediatePriority, $c = $e.unstable_UserBlockingPriority, Eo = $e.unstable_NormalPriority, Rp = $e.unstable_LowPriority, Ic = $e.unstable_IdlePriority, Xo = null, ot = null;
function Op(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Xo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Xe = Math.clz32 ? Math.clz32 : $p, zp = Math.log, Lp = Math.LN2;
function $p(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Lp | 0) | 0;
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
function _o(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = Xn(u) : (l &= i, l !== 0 && (r = Xn(l)));
  } else
    i = n & ~o, i !== 0 ? r = Xn(i) : l !== 0 && (r = Xn(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Xe(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Ip(e, t) {
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
function Mp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Xe(l), u = 1 << i, s = o[i];
    s === -1 ? (!(u & n) || u & r) && (o[i] = Ip(u, t)) : s <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Ni(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = Hr;
  return Hr <<= 1, !(Hr & 4194240) && (Hr = 64), e;
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function jp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function ku(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var A = 0;
function jc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ac, xu, Fc, Uc, Dc, Ri = !1, Vr = [], _t = null, Pt = null, Tt = null, cr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), kt = [], Ap = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ls(e, t) {
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
function Dn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Or(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Fp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return _t = Dn(_t, e, t, n, r, o), !0;
    case "dragenter":
      return Pt = Dn(Pt, e, t, n, r, o), !0;
    case "mouseover":
      return Tt = Dn(Tt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return cr.set(l, Dn(cr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, fr.set(l, Dn(fr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Bc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rc(n), t !== null) {
          e.blockedOn = t, Dc(e.priority, function() {
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
function lo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ei = r, n.target.dispatchEvent(r), Ei = null;
    } else
      return t = Or(n), t !== null && xu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  lo(e) && n.delete(t);
}
function Up() {
  Ri = !1, _t !== null && lo(_t) && (_t = null), Pt !== null && lo(Pt) && (Pt = null), Tt !== null && lo(Tt) && (Tt = null), cr.forEach($s), fr.forEach($s);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ri || (Ri = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, Up)));
}
function dr(e) {
  function t(o) {
    return Bn(o, e);
  }
  if (0 < Vr.length) {
    Bn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && Bn(_t, e), Pt !== null && Bn(Pt, e), Tt !== null && Bn(Tt, e), cr.forEach(t), fr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Bc(n), n.blockedOn === null && kt.shift();
}
var wn = gt.ReactCurrentBatchConfig, Po = !0;
function Dp(e, t, n, r) {
  var o = A, l = wn.transition;
  wn.transition = null;
  try {
    A = 1, Cu(e, t, n, r);
  } finally {
    A = o, wn.transition = l;
  }
}
function Bp(e, t, n, r) {
  var o = A, l = wn.transition;
  wn.transition = null;
  try {
    A = 4, Cu(e, t, n, r);
  } finally {
    A = o, wn.transition = l;
  }
}
function Cu(e, t, n, r) {
  if (Po) {
    var o = Oi(e, t, n, r);
    if (o === null)
      Zl(e, t, r, To, n), Ls(e, r);
    else if (Fp(o, e, t, n, r))
      r.stopPropagation();
    else if (Ls(e, r), t & 4 && -1 < Ap.indexOf(e)) {
      for (; o !== null; ) {
        var l = Or(o);
        if (l !== null && Ac(l), l = Oi(e, t, n, r), l === null && Zl(e, t, r, To, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      Zl(e, t, r, null, n);
  }
}
var To = null;
function Oi(e, t, n, r) {
  if (To = null, e = wu(r), e = Ht(e), e !== null)
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
  return To = e, null;
}
function Hc(e) {
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
      switch (Np()) {
        case Su:
          return 1;
        case $c:
          return 4;
        case Eo:
        case Rp:
          return 16;
        case Ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null, Eu = null, io = null;
function Wc() {
  if (io)
    return io;
  var e, t = Eu, n = t.length, r, o = "value" in Ct ? Ct.value : Ct.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return io = o.slice(e, 1 < r ? 1 - r : void 0);
}
function uo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kr() {
  return !0;
}
function Is() {
  return !1;
}
function Me(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Kr : Is, this.isPropagationStopped = Is, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, _u = Me($n), Rr = Q({}, $n, { view: 0, detail: 0 }), Hp = Me(Rr), Bl, Hl, Hn, Zo = Q({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Bl = e.screenX - Hn.screenX, Hl = e.screenY - Hn.screenY) : Hl = Bl = 0, Hn = e), Bl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Hl;
} }), Ms = Me(Zo), Wp = Q({}, Zo, { dataTransfer: 0 }), Vp = Me(Wp), Kp = Q({}, Rr, { relatedTarget: 0 }), Wl = Me(Kp), Qp = Q({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gp = Me(Qp), Yp = Q({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Xp = Me(Yp), Zp = Q({}, $n, { data: 0 }), js = Me(Zp), Jp = {
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
}, qp = {
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
}, bp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function em(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bp[e]) ? !!t[e] : !1;
}
function Pu() {
  return em;
}
var tm = Q({}, Rr, { key: function(e) {
  if (e.key) {
    var t = Jp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pu, charCode: function(e) {
  return e.type === "keypress" ? uo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), nm = Me(tm), rm = Q({}, Zo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = Me(rm), om = Q({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pu }), lm = Me(om), im = Q({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), um = Me(im), sm = Q({}, Zo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), am = Me(sm), cm = [9, 13, 27, 32], Tu = dt && "CompositionEvent" in window, bn = null;
dt && "documentMode" in document && (bn = document.documentMode);
var fm = dt && "TextEvent" in window && !bn, Vc = dt && (!Tu || bn && 8 < bn && 11 >= bn), Fs = String.fromCharCode(32), Us = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return cm.indexOf(t.keyCode) !== -1;
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
function Qc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function dm(e, t) {
  switch (e) {
    case "compositionend":
      return Qc(t);
    case "keypress":
      return t.which !== 32 ? null : (Us = !0, Fs);
    case "textInput":
      return e = t.data, e === Fs && Us ? null : e;
    default:
      return null;
  }
}
function pm(e, t) {
  if (ln)
    return e === "compositionend" || !Tu && Kc(e, t) ? (e = Wc(), io = Eu = Ct = null, ln = !1, e) : null;
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
      return Vc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mm[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Ec(r), t = No(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var er = null, pr = null;
function hm(e) {
  of(e, 0);
}
function Jo(e) {
  var t = an(e);
  if (gc(t))
    return e;
}
function ym(e, t) {
  if (e === "change")
    return t;
}
var Yc = !1;
if (dt) {
  var Vl;
  if (dt) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var Bs = document.createElement("div");
      Bs.setAttribute("oninput", "return;"), Kl = typeof Bs.oninput == "function";
    }
    Vl = Kl;
  } else
    Vl = !1;
  Yc = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  er && (er.detachEvent("onpropertychange", Xc), pr = er = null);
}
function Xc(e) {
  if (e.propertyName === "value" && Jo(pr)) {
    var t = [];
    Gc(t, pr, e, wu(e)), Nc(hm, t);
  }
}
function gm(e, t, n) {
  e === "focusin" ? (Hs(), er = t, pr = n, er.attachEvent("onpropertychange", Xc)) : e === "focusout" && Hs();
}
function vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Jo(pr);
}
function wm(e, t) {
  if (e === "click")
    return Jo(t);
}
function Sm(e, t) {
  if (e === "input" || e === "change")
    return Jo(t);
}
function km(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : km;
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
    if (!di.call(t, o) || !Je(e[o], t[o]))
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
function Zc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Jc() {
  for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = ko(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xm(e) {
  var t = Jc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Vs(n, l);
        var i = Vs(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Cm = dt && "documentMode" in document && 11 >= document.documentMode, un = null, zi = null, tr = null, Li = !1;
function Ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li || un == null || un !== ko(r) || (r = un, "selectionStart" in r && Nu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && mr(tr, r) || (tr = r, r = No(zi, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = un)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var sn = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, Ql = {}, qc = {};
dt && (qc = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function qo(e) {
  if (Ql[e])
    return Ql[e];
  if (!sn[e])
    return e;
  var t = sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in qc)
      return Ql[e] = t[n];
  return e;
}
var bc = qo("animationend"), ef = qo("animationiteration"), tf = qo("animationstart"), nf = qo("transitionend"), rf = /* @__PURE__ */ new Map(), Qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  rf.set(e, t), qt(t, [e]);
}
for (var Gl = 0; Gl < Qs.length; Gl++) {
  var Yl = Qs[Gl], Em = Yl.toLowerCase(), _m = Yl[0].toUpperCase() + Yl.slice(1);
  Mt(Em, "on" + _m);
}
Mt(bc, "onAnimationEnd");
Mt(ef, "onAnimationIteration");
Mt(tf, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(nf, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Gs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ep(r, t, void 0, e), e.currentTarget = null;
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Gs(o, u, a), l = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Gs(o, u, a), l = s;
        }
    }
  }
  if (Co)
    throw e = Ti, Co = !1, Ti = null, e;
}
function B(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lf(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), lf(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, dc.forEach(function(n) {
      n !== "selectionchange" && (Pm.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, Xl("selectionchange", !1, t));
  }
}
function lf(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var o = Dp;
      break;
    case 4:
      o = Bp;
      break;
    default:
      o = Cu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === o || u.nodeType === 8 && u.parentNode === o)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Ht(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = l = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Nc(function() {
    var a = l, h = wu(n), m = [];
    e: {
      var p = rf.get(e);
      if (p !== void 0) {
        var v = _u, g = e;
        switch (e) {
          case "keypress":
            if (uo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = nm;
            break;
          case "focusin":
            g = "focus", v = Wl;
            break;
          case "focusout":
            g = "blur", v = Wl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Wl;
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
            v = Vp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = lm;
            break;
          case bc:
          case ef:
          case tf:
            v = Gp;
            break;
          case nf:
            v = um;
            break;
          case "scroll":
            v = Hp;
            break;
          case "wheel":
            v = am;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Xp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = As;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = ar(c, f), w != null && y.push(yr(c, w, d)))), P)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Ei && (g = n.relatedTarget || n.fromElement) && (Ht(g) || g[pt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Ht(g) : null, g !== null && (P = bt(g), g !== P || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = Ms, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = As, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = v == null ? p : an(v), d = g == null ? p : an(g), p = new y(w, c + "leave", v, n, h), p.target = P, p.relatedTarget = d, w = null, Ht(h) === a && (y = new y(f, c + "enter", g, n, h), y.target = d, y.relatedTarget = P, w = y), P = w, v && g)
            t: {
              for (y = v, f = g, c = 0, d = y; d; d = en(d))
                c++;
              for (d = 0, w = f; w; w = en(w))
                d++;
              for (; 0 < c - d; )
                y = en(y), c--;
              for (; 0 < d - c; )
                f = en(f), d--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = en(y), f = en(f);
              }
              y = null;
            }
          else
            y = null;
          v !== null && Ys(m, p, v, y, !1), g !== null && P !== null && Ys(m, P, g, y, !0);
        }
      }
      e: {
        if (p = a ? an(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var x = ym;
        else if (Ds(p))
          if (Yc)
            x = Sm;
          else {
            x = vm;
            var C = gm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = wm);
        if (x && (x = x(e, a))) {
          Gc(m, x, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && wi(p, "number", p.value);
      }
      switch (C = a ? an(a) : window, e) {
        case "focusin":
          (Ds(C) || C.contentEditable === "true") && (un = C, zi = a, tr = null);
          break;
        case "focusout":
          tr = zi = un = null;
          break;
        case "mousedown":
          Li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Li = !1, Ks(m, n, h);
          break;
        case "selectionchange":
          if (Cm)
            break;
        case "keydown":
        case "keyup":
          Ks(m, n, h);
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
        ln ? Kc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Vc && n.locale !== "ko" && (ln || T !== "onCompositionStart" ? T === "onCompositionEnd" && ln && (S = Wc()) : (Ct = h, Eu = "value" in Ct ? Ct.value : Ct.textContent, ln = !0)), C = No(a, T), 0 < C.length && (T = new js(T, e, null, n, h), m.push({ event: T, listeners: C }), S ? T.data = S : (S = Qc(n), S !== null && (T.data = S)))), (S = fm ? dm(e, n) : pm(e, n)) && (a = No(a, "onBeforeInput"), 0 < a.length && (h = new js("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = S));
    }
    of(m, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = ar(e, n), l != null && r.unshift(yr(e, l, o)), l = ar(e, t), l != null && r.push(yr(e, l, o))), e = e.return;
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
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = ar(n, l), s != null && i.unshift(yr(n, s, u))) : o || (s = ar(n, l), s != null && i.push(yr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Tm = /\r\n?/g, Nm = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Nm, "");
}
function Yr(e, t, n) {
  if (t = Xs(t), Xs(e) !== t && n)
    throw Error(k(425));
}
function Ro() {
}
var $i = null, Ii = null;
function Mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ji = typeof setTimeout == "function" ? setTimeout : void 0, Rm = typeof clearTimeout == "function" ? clearTimeout : void 0, Zs = typeof Promise == "function" ? Promise : void 0, Om = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zs < "u" ? function(e) {
  return Zs.resolve(null).then(e).catch(zm);
} : ji;
function zm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jl(e, t) {
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
var In = Math.random().toString(36).slice(2), rt = "__reactFiber$" + In, gr = "__reactProps$" + In, pt = "__reactContainer$" + In, Ai = "__reactEvents$" + In, Lm = "__reactListeners$" + In, $m = "__reactHandles$" + In;
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
function Or(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function an(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function bo(e) {
  return e[gr] || null;
}
var Fi = [], cn = -1;
function jt(e) {
  return { current: e };
}
function H(e) {
  0 > cn || (e.current = Fi[cn], Fi[cn] = null, cn--);
}
function D(e, t) {
  cn++, Fi[cn] = e.current, e.current = t;
}
var It = {}, ge = jt(It), Ee = jt(!1), Gt = It;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function Oo() {
  H(Ee), H(ge);
}
function qs(e, t, n) {
  if (ge.current !== It)
    throw Error(k(168));
  D(ge, t), D(Ee, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(k(108, gp(e) || "Unknown", o));
  return Q({}, n, r);
}
function zo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Gt = ge.current, D(ge, e), D(Ee, Ee.current), !0;
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = uf(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, H(Ee), H(ge), D(ge, e)) : H(Ee), D(Ee, n);
}
var st = null, el = !1, ql = !1;
function sf(e) {
  st === null ? st = [e] : st.push(e);
}
function Im(e) {
  el = !0, sf(e);
}
function At() {
  if (!ql && st !== null) {
    ql = !0;
    var e = 0, t = A;
    try {
      var n = st;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, el = !1;
    } catch (o) {
      throw st !== null && (st = st.slice(e + 1)), Lc(Su, At), o;
    } finally {
      A = t, ql = !1;
    }
  }
  return null;
}
var fn = [], dn = 0, Lo = null, $o = 0, Ae = [], Fe = 0, Yt = null, at = 1, ct = "";
function Dt(e, t) {
  fn[dn++] = $o, fn[dn++] = Lo, Lo = e, $o = t;
}
function af(e, t, n) {
  Ae[Fe++] = at, Ae[Fe++] = ct, Ae[Fe++] = Yt, Yt = e;
  var r = at;
  e = ct;
  var o = 32 - Xe(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Xe(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, at = 1 << 32 - Xe(t) + o | n << o | r, ct = l + e;
  } else
    at = 1 << l | n << o | r, ct = e;
}
function Ru(e) {
  e.return !== null && (Dt(e, 1), af(e, 1, 0));
}
function Ou(e) {
  for (; e === Lo; )
    Lo = fn[--dn], fn[dn] = null, $o = fn[--dn], fn[dn] = null;
  for (; e === Yt; )
    Yt = Ae[--Fe], Ae[Fe] = null, ct = Ae[--Fe], Ae[Fe] = null, at = Ae[--Fe], Ae[Fe] = null;
}
var ze = null, Oe = null, W = !1, Ye = null;
function cf(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ze = e, Oe = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ze = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ze = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ui(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (W) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!ea(e, t)) {
        if (Ui(e))
          throw Error(k(418));
        t = Nt(n.nextSibling);
        var r = ze;
        t && ea(e, t) ? cf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, ze = e);
      }
    } else {
      if (Ui(e))
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
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Ui(e))
      throw ff(), Error(k(418));
    for (; t; )
      cf(e, t), t = Nt(t.nextSibling);
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
              Oe = Nt(e.nextSibling);
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
    Oe = ze ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = Oe; e; )
    e = Nt(e.nextSibling);
}
function Pn() {
  Oe = ze = null, W = !1;
}
function zu(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var Mm = gt.ReactCurrentBatchConfig;
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
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var u = o.refs;
        i === null ? delete u[l] : u[l] = i;
      }, t._stringRef = l, t);
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
function df(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
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
  function l(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = li(d, f.mode, w), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var x = d.type;
    return x === on ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && na(x) === c.type) ? (w = o(c, d.props), w.ref = Wn(f, c, d), w.return = f, w) : (w = ho(d.type, d.key, d.props, null, f.mode, w), w.ref = Wn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ii(d, f.mode, w), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = Qt(d, f.mode, w, x), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = li("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ur:
          return d = ho(c.type, c.key, c.props, null, f.mode, d), d.ref = Wn(f, null, c), d.return = f, d;
        case rn:
          return c = ii(c, f.mode, d), c.return = f, c;
        case wt:
          var w = c._init;
          return m(f, w(c._payload), d);
      }
      if (Yn(c) || Fn(c))
        return c = Qt(c, f.mode, d, null), c.return = f, c;
      Zr(f, c);
    }
    return null;
  }
  function p(f, c, d, w) {
    var x = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return x !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ur:
          return d.key === x ? s(f, c, d, w) : null;
        case rn:
          return d.key === x ? a(f, c, d, w) : null;
        case wt:
          return x = d._init, p(
            f,
            c,
            x(d._payload),
            w
          );
      }
      if (Yn(d) || Fn(d))
        return x !== null ? null : h(f, c, d, w, null);
      Zr(f, d);
    }
    return null;
  }
  function v(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ur:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case rn:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, x);
        case wt:
          var C = w._init;
          return v(f, c, d, C(w._payload), x);
      }
      if (Yn(w) || Fn(w))
        return f = f.get(d) || null, h(c, f, w, x, null);
      Zr(c, w);
    }
    return null;
  }
  function g(f, c, d, w) {
    for (var x = null, C = null, S = c, T = c = 0, U = null; S !== null && T < d.length; T++) {
      S.index > T ? (U = S, S = null) : U = S.sibling;
      var R = p(f, S, d[T], w);
      if (R === null) {
        S === null && (S = U);
        break;
      }
      e && S && R.alternate === null && t(f, S), c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R, S = U;
    }
    if (T === d.length)
      return n(f, S), W && Dt(f, T), x;
    if (S === null) {
      for (; T < d.length; T++)
        S = m(f, d[T], w), S !== null && (c = l(S, c, T), C === null ? x = S : C.sibling = S, C = S);
      return W && Dt(f, T), x;
    }
    for (S = r(f, S); T < d.length; T++)
      U = v(S, f, T, d[T], w), U !== null && (e && U.alternate !== null && S.delete(U.key === null ? T : U.key), c = l(U, c, T), C === null ? x = U : C.sibling = U, C = U);
    return e && S.forEach(function(te) {
      return t(f, te);
    }), W && Dt(f, T), x;
  }
  function y(f, c, d, w) {
    var x = Fn(d);
    if (typeof x != "function")
      throw Error(k(150));
    if (d = x.call(d), d == null)
      throw Error(k(151));
    for (var C = x = null, S = c, T = c = 0, U = null, R = d.next(); S !== null && !R.done; T++, R = d.next()) {
      S.index > T ? (U = S, S = null) : U = S.sibling;
      var te = p(f, S, R.value, w);
      if (te === null) {
        S === null && (S = U);
        break;
      }
      e && S && te.alternate === null && t(f, S), c = l(te, c, T), C === null ? x = te : C.sibling = te, C = te, S = U;
    }
    if (R.done)
      return n(
        f,
        S
      ), W && Dt(f, T), x;
    if (S === null) {
      for (; !R.done; T++, R = d.next())
        R = m(f, R.value, w), R !== null && (c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R);
      return W && Dt(f, T), x;
    }
    for (S = r(f, S); !R.done; T++, R = d.next())
      R = v(S, f, T, R.value, w), R !== null && (e && R.alternate !== null && S.delete(R.key === null ? T : R.key), c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R);
    return e && S.forEach(function(jn) {
      return t(f, jn);
    }), W && Dt(f, T), x;
  }
  function P(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === on && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ur:
          e: {
            for (var x = d.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === on) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && na(x) === C.type) {
                  n(f, C.sibling), c = o(C, d.props), c.ref = Wn(f, C, d), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === on ? (c = Qt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = ho(d.type, d.key, d.props, null, f.mode, w), w.ref = Wn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case rn:
          e: {
            for (C = d.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(f, c.sibling), c = o(c, d.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = ii(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case wt:
          return C = d._init, P(f, c, C(d._payload), w);
      }
      if (Yn(d))
        return g(f, c, d, w);
      if (Fn(d))
        return y(f, c, d, w);
      Zr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = li(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return P;
}
var Tn = df(!0), pf = df(!1), Io = jt(null), Mo = null, pn = null, Lu = null;
function $u() {
  Lu = pn = Mo = null;
}
function Iu(e) {
  var t = Io.current;
  H(Io), e._currentValue = t;
}
function Bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  Mo = e, Lu = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
      if (Mo === null)
        throw Error(k(308));
      pn = e, Mo.dependencies = { lanes: 0, firstContext: e };
    } else
      pn = pn.next = e;
  return t;
}
var Wt = null;
function Mu(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function mf(e, t, n, r) {
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
function hf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t, n) {
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
    r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
  }
}
function ra(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else
      o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function jo(e, t, n, r) {
  var o = e.updateQueue;
  St = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? l = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (l !== null) {
    var m = o.baseState;
    i = 0, h = a = s = null, u = l;
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
                m = g.call(v, m, p);
                break e;
              }
              m = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, p = typeof g == "function" ? g.call(v, m, p) : g, p == null)
                break e;
              m = Q({}, m, p);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [u] : p.push(u));
      } else
        v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = v, s = m) : h = h.next = v, i |= p;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    Zt |= i, e.lanes = i, e.memoizedState = m;
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
var zr = {}, lt = jt(zr), vr = jt(zr), wr = jt(zr);
function Vt(e) {
  if (e === zr)
    throw Error(k(174));
  return e;
}
function Au(e, t) {
  switch (D(wr, t), D(vr, e), D(lt, zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
  }
  H(lt), D(lt, t);
}
function Nn() {
  H(lt), H(vr), H(wr);
}
function yf(e) {
  Vt(wr.current);
  var t = Vt(lt.current), n = ki(t, e.type);
  t !== n && (D(vr, e), D(lt, n));
}
function Fu(e) {
  vr.current === e && (H(lt), H(vr));
}
var V = jt(0);
function Ao(e) {
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
var bl = [];
function Uu() {
  for (var e = 0; e < bl.length; e++)
    bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var ao = gt.ReactCurrentDispatcher, ei = gt.ReactCurrentBatchConfig, Xt = 0, K = null, ne = null, le = null, Fo = !1, nr = !1, Sr = 0, jm = 0;
function pe() {
  throw Error(k(321));
}
function Du(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n]))
      return !1;
  return !0;
}
function Bu(e, t, n, r, o, l) {
  if (Xt = l, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ao.current = e === null || e.memoizedState === null ? Dm : Bm, e = n(r, o), nr) {
    l = 0;
    do {
      if (nr = !1, Sr = 0, 25 <= l)
        throw Error(k(301));
      l += 1, le = ne = null, t.updateQueue = null, ao.current = Hm, e = n(r, o);
    } while (nr);
  }
  if (ao.current = Uo, t = ne !== null && ne.next !== null, Xt = 0, le = ne = K = null, Fo = !1, t)
    throw Error(k(300));
  return e;
}
function Hu() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? K.memoizedState = le = e : le = le.next = e, le;
}
function We() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ne.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null)
    le = t, ne = e;
  else {
    if (e === null)
      throw Error(k(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, le === null ? K.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ti(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ne, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var u = i = null, s = null, a = l;
    do {
      var h = a.lane;
      if ((Xt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, K.lanes |= h, Zt |= h;
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? i = r : s.next = u, Je(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, K.lanes |= l, Zt |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ni(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    Je(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function gf() {
}
function vf(e, t) {
  var n = K, r = We(), o = t(), l = !Je(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ce = !0), r = r.queue, Wu(kf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, Sf.bind(null, n, r, o, t), void 0, null), ie === null)
      throw Error(k(349));
    Xt & 30 || wf(n, t, o);
  }
  return o;
}
function wf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Sf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xf(t) && Cf(e);
}
function kf(e, t, n) {
  return n(function() {
    xf(t) && Cf(e);
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
function Cf(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function la(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Um.bind(null, K, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ef() {
  return We().memoizedState;
}
function co(e, t, n, r) {
  var o = et();
  K.flags |= e, o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function tl(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (l = i.destroy, r !== null && Du(r, i.deps)) {
      o.memoizedState = xr(t, n, l, r);
      return;
    }
  }
  K.flags |= e, o.memoizedState = xr(1 | t, n, l, r);
}
function ia(e, t) {
  return co(8390656, 8, e, t);
}
function Wu(e, t) {
  return tl(2048, 8, e, t);
}
function _f(e, t) {
  return tl(4, 2, e, t);
}
function Pf(e, t) {
  return tl(4, 4, e, t);
}
function Tf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Nf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tl(4, 4, Tf.bind(null, t, e), n);
}
function Vu() {
}
function Rf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Of(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zf(e, t, n) {
  return Xt & 21 ? (Je(n, t) || (n = Mc(), K.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Am(e, t) {
  var n = A;
  A = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    A = n, ei.transition = r;
  }
}
function Lf() {
  return We().memoizedState;
}
function Fm(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $f(e))
    If(t, n);
  else if (n = mf(e, t, n, r), n !== null) {
    var o = we();
    Ze(n, e, r, o), Mf(n, t, r);
  }
}
function Um(e, t, n) {
  var r = zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e))
    If(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, Je(u, i)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Mu(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = mf(e, t, o, r), n !== null && (o = we(), Ze(n, e, r, o), Mf(n, t, r));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function If(e, t) {
  nr = Fo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
  }
}
var Uo = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Dm = { readContext: He, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: ia, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, co(
    4194308,
    4,
    Tf.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: la, useDebugValue: Vu, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = la(!1), t = e[0];
  return e = Am.bind(null, e[1]), et().memoizedState = e, [t, e];
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
    Xt & 30 || wf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, ia(kf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, xr(9, Sf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = ie.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = jm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bm = {
  readContext: He,
  useCallback: Rf,
  useContext: He,
  useEffect: Wu,
  useImperativeHandle: Nf,
  useInsertionEffect: _f,
  useLayoutEffect: Pf,
  useMemo: Of,
  useReducer: ti,
  useRef: Ef,
  useState: function() {
    return ti(kr);
  },
  useDebugValue: Vu,
  useDeferredValue: function(e) {
    var t = We();
    return zf(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ti(kr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: gf,
  useSyncExternalStore: vf,
  useId: Lf,
  unstable_isNewReconciler: !1
}, Hm = { readContext: He, useCallback: Rf, useContext: He, useEffect: Wu, useImperativeHandle: Nf, useInsertionEffect: _f, useLayoutEffect: Pf, useMemo: Of, useReducer: ni, useRef: Ef, useState: function() {
  return ni(kr);
}, useDebugValue: Vu, useDeferredValue: function(e) {
  var t = We();
  return ne === null ? t.memoizedState = e : zf(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = ni(kr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: gf, useSyncExternalStore: vf, useId: Lf, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nl = { isMounted: function(e) {
  return (e = e._reactInternals) ? bt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), l = ft(r, o);
  l.payload = t, n != null && (l.callback = n), t = Rt(e, l, o), t !== null && (Ze(t, e, o, r), so(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), l = ft(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Rt(e, l, o), t !== null && (Ze(t, e, o, r), so(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = zt(e), o = ft(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Rt(e, o, r), t !== null && (Ze(t, e, r, n), so(t, e, r));
} };
function ua(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(o, l) : !0;
}
function jf(e, t, n) {
  var r = !1, o = It, l = t.contextType;
  return typeof l == "object" && l !== null ? l = He(l) : (o = _e(t) ? Gt : ge.current, r = t.contextTypes, l = (r = r != null) ? _n(e, o) : It), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function sa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ju(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = He(l) : (l = _e(t) ? Gt : ge.current, o.context = _n(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Hi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nl.enqueueReplaceState(o, o.state, null), jo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "", r = t;
    do
      n += yp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ri(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Wm = typeof WeakMap == "function" ? WeakMap : Map;
function Af(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Bo || (Bo = !0, eu = r), Vi(e, t);
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
      Vi(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = rh.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e);
}
var Vm = gt.ReactCurrentOwner, Ce = !1;
function ve(e, t, n, r) {
  t.child = e === null ? pf(t, null, n, r) : Tn(t, e.child, n, r);
}
function da(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Sn(t, o), r = Bu(e, t, n, r, l, o), n = Hu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && n && Ru(t), t.flags |= 1, ve(e, t, r, o), t.child);
}
function pa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !qu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Uf(e, t, l, r, o)) : (e = ho(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mr, n(i, r) && e.ref === t.ref)
      return ht(e, t, o);
  }
  return t.flags |= 1, e = Lt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (mr(l, r) && e.ref === t.ref)
      if (Ce = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ce = !0);
      else
        return t.lanes = e.lanes, ht(e, t, o);
  }
  return Ki(e, t, n, r, o);
}
function Df(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(hn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(hn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, D(hn, Ne), Ne |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, D(hn, Ne), Ne |= r;
  return ve(e, t, o, n), t.child;
}
function Bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ki(e, t, n, r, o) {
  var l = _e(n) ? Gt : ge.current;
  return l = _n(t, l), Sn(t, o), n = Bu(e, t, n, r, l, o), r = Hu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && r && Ru(t), t.flags |= 1, ve(e, t, n, o), t.child);
}
function ma(e, t, n, r, o) {
  if (_e(n)) {
    var l = !0;
    zo(t);
  } else
    l = !1;
  if (Sn(t, o), t.stateNode === null)
    fo(e, t), jf(t, n, r), Wi(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = He(a) : (a = _e(n) ? Gt : ge.current, a = _n(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && sa(t, i, r, a), St = !1;
    var p = t.memoizedState;
    i.state = p, jo(t, r, i, o), s = t.memoizedState, u !== r || p !== s || Ee.current || St ? (typeof h == "function" && (Hi(t, n, h, r), s = t.memoizedState), (u = St || ua(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, hf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Qe(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = _e(n) ? Gt : ge.current, s = _n(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && sa(t, i, r, s), St = !1, p = t.memoizedState, i.state = p, jo(t, r, i, o);
    var g = t.memoizedState;
    u !== m || p !== g || Ee.current || St ? (typeof v == "function" && (Hi(t, n, v, r), g = t.memoizedState), (a = St || ua(t, n, a, r, p, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qi(e, t, n, r, l, o);
}
function Qi(e, t, n, r, o, l) {
  Bf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && bs(t, n, !1), ht(e, t, l);
  r = t.stateNode, Vm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Tn(t, e.child, null, l), t.child = Tn(t, null, u, l)) : ve(e, t, u, l), t.memoizedState = r.state, o && bs(t, n, !0), t.child;
}
function Hf(e) {
  var t = e.stateNode;
  t.pendingContext ? qs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qs(e, t.context, !1), Au(e, t.containerInfo);
}
function ha(e, t, n, r, o) {
  return Pn(), zu(o), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wf(e, t, n) {
  var r = t.pendingProps, o = V.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), D(V, o & 1), e === null)
    return Di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = ll(i, r, 0, null), e = Qt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Yi(n), t.memoizedState = Gi, e) : Ku(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Km(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Lt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Lt(u, l) : (l = Qt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Yi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Gi, r;
  }
  return l = e.child, e = l.sibling, r = Lt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ku(e, t) {
  return t = ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jr(e, t, n, r) {
  return r !== null && zu(r), Tn(t, e.child, null, n), e = Ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Km(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ri(Error(k(422))), Jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = ll({ mode: "visible", children: r.children }, o, 0, null), l = Qt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Tn(t, e.child, null, i), t.child.memoizedState = Yi(i), t.memoizedState = Gi, l);
  if (!(t.mode & 1))
    return Jr(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(k(419)), r = ri(l, r, void 0), Jr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = ie, r !== null) {
      switch (i & -i) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, mt(e, o), Ze(r, e, o, -1));
    }
    return Ju(), r = ri(Error(k(421))), Jr(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = oh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Oe = Nt(o.nextSibling), ze = t, W = !0, Ye = null, e !== null && (Ae[Fe++] = at, Ae[Fe++] = ct, Ae[Fe++] = Yt, at = e.id, ct = e.overflow, Yt = t), t = Ku(t, r.children), t.flags |= 4096, t);
}
function ya(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function oi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Vf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (ve(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ya(e, n, t);
          else if (e.tag === 19)
            ya(e, n, t);
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
  if (D(V, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Ao(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), oi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ao(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        oi(t, !0, n, null, l);
        break;
      case "together":
        oi(t, !1, null, null, void 0);
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
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes))
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
function Qm(e, t, n) {
  switch (t.tag) {
    case 3:
      Hf(t), Pn();
      break;
    case 5:
      yf(t);
      break;
    case 1:
      _e(t.type) && zo(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      D(Io, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wf(e, t, n) : (D(V, V.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      D(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Vf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), D(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Df(e, t, n);
  }
  return ht(e, t, n);
}
var Kf, Xi, Qf, Gf;
Kf = function(e, t) {
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
Xi = function() {
};
Qf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Vt(lt.current);
    var l = null;
    switch (n) {
      case "input":
        o = gi(e, o), r = gi(e, r), l = [];
        break;
      case "select":
        o = Q({}, o, { value: void 0 }), r = Q({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Si(e, o), r = Si(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ro);
    }
    xi(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ur.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (l || (l = []), l.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ur.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), l || u === s || (l = [])) : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Gf = function(e, t, n, r) {
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
function Gm(e, t, n) {
  var r = t.pendingProps;
  switch (Ou(t), t.tag) {
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
      return _e(t.type) && Oo(), me(t), null;
    case 3:
      return r = t.stateNode, Nn(), H(Ee), H(ge), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (ru(Ye), Ye = null))), Xi(e, t), me(t), null;
    case 5:
      Fu(t);
      var o = Vt(wr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Qf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return me(t), null;
        }
        if (e = Vt(lt.current), Xr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[rt] = t, r[gr] = l, e = (t.mode & 1) !== 0, n) {
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
              _s(r, l), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, B("invalid", r);
              break;
            case "textarea":
              Ts(r, l), B("invalid", r);
          }
          xi(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && Yr(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : ur.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), Ps(r, l, !0);
              break;
            case "textarea":
              Dr(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ro);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[gr] = r, Kf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ci(n, r), n) {
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
                _s(e, r), o = gi(e, r), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Ts(e, r), o = Si(e, r), B("invalid", e);
                break;
              default:
                o = r;
            }
            xi(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style" ? Cc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && kc(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && sr(e, s) : typeof s == "number" && sr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ur.hasOwnProperty(l) ? s != null && l === "onScroll" && B("scroll", e) : s != null && hu(e, l, s, i));
              }
            switch (n) {
              case "input":
                Dr(e), Ps(e, r, !1);
                break;
              case "textarea":
                Dr(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? yn(e, !!r.multiple, l, !1) : r.defaultValue != null && yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ro);
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
        Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Vt(wr.current), Vt(lt.current), Xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (l = r.nodeValue !== n) && (e = ze, e !== null))
            switch (e.tag) {
              case 3:
                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (H(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Oe !== null && t.mode & 1 && !(t.flags & 128))
          ff(), Pn(), t.flags |= 98560, l = !1;
        else if (l = Xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(k(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(k(317));
            l[rt] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), l = !1;
        } else
          Ye !== null && (ru(Ye), Ye = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? re === 0 && (re = 3) : Ju())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Nn(), Xi(e, t), e === null && hr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Iu(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && Oo(), me(t), null;
    case 19:
      if (H(V), l = t.memoizedState, l === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Vn(l, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ao(e), i !== null) {
                for (t.flags |= 128, Vn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return D(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && J() > On && (t.flags |= 128, r = !0, Vn(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ao(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !W)
              return me(t), null;
          } else
            2 * J() - l.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Vn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = J(), t.sibling = null, n = V.current, D(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
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
function Ym(e, t) {
  switch (Ou(t), t.tag) {
    case 1:
      return _e(t.type) && Oo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Nn(), H(Ee), H(ge), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fu(t), null;
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
      return Iu(t.type._context), null;
    case 22:
    case 23:
      return Zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, ye = !1, Xm = typeof WeakSet == "function" ? WeakSet : Set, E = null;
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
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ga = !1;
function Zm(e, t) {
  if ($i = Po, e = Jc(), Nu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var v; m !== n || o !== 0 && m.nodeType !== 3 || (u = i + o), m !== l || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (v = m.firstChild) !== null; )
                p = m, m = v;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++a === o && (u = i), p === l && ++h === r && (s = i), (v = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = v;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, Po = !1, E = t; E !== null; )
    if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, E = e;
    else
      for (; E !== null; ) {
        t = E;
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
                  var y = g.memoizedProps, P = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Qe(t.type, y), P);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(k(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, E = e;
          break;
        }
        E = t.return;
      }
  return g = ga, ga = !1, g;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Zi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function rl(e, t) {
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
function Ji(e) {
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
function Yf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Yf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[gr], delete t[Ai], delete t[Lm], delete t[$m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function va(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xf(e.return))
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
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ro));
  else if (r !== 4 && (e = e.child, e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; )
      qi(e, t, n), e = e.sibling;
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; )
      bi(e, t, n), e = e.sibling;
}
var se = null, Ge = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    Zf(e, t, n), n = n.sibling;
}
function Zf(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Xo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ye || mn(n, t);
    case 6:
      var r = se, o = Ge;
      se = null, vt(e, t, n), se = r, Ge = o, se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Ge ? (e = se, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), dr(e)) : Jl(se, n.stateNode));
      break;
    case 4:
      r = se, o = Ge, se = n.stateNode.containerInfo, Ge = !0, vt(e, t, n), se = r, Ge = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Zi(n, t, i), o = o.next;
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
function wa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xm()), t.forEach(function(r) {
      var o = lh.bind(null, e, r);
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
        var l = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                se = u.stateNode, Ge = !1;
                break e;
              case 3:
                se = u.stateNode.containerInfo, Ge = !0;
                break e;
              case 4:
                se = u.stateNode.containerInfo, Ge = !0;
                break e;
            }
            u = u.return;
          }
        if (se === null)
          throw Error(k(160));
        Zf(l, i, o), se = null, Ge = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Jf(t, e), t = t.sibling;
}
function Jf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), qe(e), r & 4) {
        try {
          rr(3, e, e.return), rl(3, e);
        } catch (y) {
          X(e, e.return, y);
        }
        try {
          rr(5, e, e.return);
        } catch (y) {
          X(e, e.return, y);
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
          sr(o, "");
        } catch (y) {
          X(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && vc(o, l), Ci(u, i);
            var a = Ci(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Cc(o, m) : h === "dangerouslySetInnerHTML" ? kc(o, m) : h === "children" ? sr(o, m) : hu(o, h, m, a);
            }
            switch (u) {
              case "input":
                vi(o, l);
                break;
              case "textarea":
                wc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? yn(o, !!l.multiple, v, !1) : p !== !!l.multiple && (l.defaultValue != null ? yn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : yn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[gr] = l;
          } catch (y) {
            X(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ke(t, e), qe(e), r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ke(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          dr(t.containerInfo);
        } catch (y) {
          X(e, e.return, y);
        }
      break;
    case 4:
      Ke(t, e), qe(e);
      break;
    case 13:
      Ke(t, e), qe(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Yu = J())), r & 4 && wa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (a = ye) || h, Ke(t, e), ye = a) : Ke(t, e), qe(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (E = e, h = e.child; h !== null; ) {
            for (m = E = h; E !== null; ) {
              switch (p = E, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, p, p.return);
                  break;
                case 1:
                  mn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      X(r, n, y);
                    }
                  }
                  break;
                case 5:
                  mn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ka(m);
                    continue;
                  }
              }
              v !== null ? (v.return = p, E = v) : ka(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xc("display", i));
                } catch (y) {
                  X(e, e.return, y);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (y) {
                  X(e, e.return, y);
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
          if (Xf(n)) {
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
          var l = va(e);
          bi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = va(e);
          qi(e, u, i);
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
function Jm(e, t, n) {
  E = e, qf(e);
}
function qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var o = E, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || qr;
      if (!i) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || ye;
        u = qr;
        var a = ye;
        if (qr = i, (ye = s) && !a)
          for (E = o; E !== null; )
            i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? xa(o) : s !== null ? (s.return = i, E = s) : xa(o);
        for (; l !== null; )
          E = l, qf(l), l = l.sibling;
        E = o, qr = u, ye = a;
      }
      Sa(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, E = l) : Sa(e);
  }
}
function Sa(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || rl(5, t);
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
              var l = t.updateQueue;
              l !== null && oa(t, l, r);
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
                oa(t, i, n);
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
                    var m = h.dehydrated;
                    m !== null && dr(m);
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
        ye || t.flags & 512 && Ji(t);
      } catch (p) {
        X(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function ka(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function xa(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rl(4, t);
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
          var l = t.return;
          try {
            Ji(t);
          } catch (s) {
            X(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ji(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var qm = Math.ceil, Do = gt.ReactCurrentDispatcher, Qu = gt.ReactCurrentOwner, Be = gt.ReactCurrentBatchConfig, I = 0, ie = null, ee = null, ce = 0, Ne = 0, hn = jt(0), re = 0, Cr = null, Zt = 0, ol = 0, Gu = 0, or = null, xe = null, Yu = 0, On = 1 / 0, ut = null, Bo = !1, eu = null, Ot = null, br = !1, Et = null, Ho = 0, lr = 0, tu = null, po = -1, mo = 0;
function we() {
  return I & 6 ? J() : po !== -1 ? po : po = J();
}
function zt(e) {
  return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : Mm.transition !== null ? (mo === 0 && (mo = Mc()), mo) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < lr)
    throw lr = 0, tu = null, Error(k(185));
  Nr(e, n, r), (!(I & 2) || e !== ie) && (e === ie && (!(I & 2) && (ol |= n), re === 4 && xt(e, ce)), Pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && (On = J() + 500, el && At()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Mp(e, t);
  var r = _o(e, e === ie ? ce : 0);
  if (r === 0)
    n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zs(n), t === 1)
      e.tag === 0 ? Im(Ca.bind(null, e)) : sf(Ca.bind(null, e)), Om(function() {
        !(I & 6) && At();
      }), n = null;
    else {
      switch (jc(r)) {
        case 1:
          n = Su;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = Eo;
          break;
        case 536870912:
          n = Ic;
          break;
        default:
          n = Eo;
      }
      n = id(n, bf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bf(e, t) {
  if (po = -1, mo = 0, I & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n)
    return null;
  var r = _o(e, e === ie ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Wo(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var l = td();
    (ie !== e || ce !== t) && (ut = null, On = J() + 500, Kt(e, t));
    do
      try {
        th();
        break;
      } catch (u) {
        ed(e, u);
      }
    while (1);
    $u(), Do.current = l, I = o, ee !== null ? t = 0 : (ie = null, ce = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ni(e), o !== 0 && (r = o, t = nu(e, o))), t === 1)
      throw n = Cr, Kt(e, 0), xt(e, r), Pe(e, J()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bm(o) && (t = Wo(e, r), t === 2 && (l = Ni(e), l !== 0 && (r = l, t = nu(e, l))), t === 1))
        throw n = Cr, Kt(e, 0), xt(e, r), Pe(e, J()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Bt(e, xe, ut);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Yu + 500 - J(), 10 < t)) {
            if (_o(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ji(Bt.bind(null, e, xe, ut), t);
            break;
          }
          Bt(e, xe, ut);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Xe(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ji(Bt.bind(null, e, xe, ut), r);
            break;
          }
          Bt(e, xe, ut);
          break;
        case 5:
          Bt(e, xe, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? bf.bind(null, e) : null;
}
function nu(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Wo(e, t), e !== 2 && (t = xe, xe = n, t !== null && ru(t)), e;
}
function ru(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function bm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!Je(l(), o))
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
function xt(e, t) {
  for (t &= ~Gu, t &= ~ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ca(e) {
  if (I & 6)
    throw Error(k(327));
  kn();
  var t = _o(e, 0);
  if (!(t & 1))
    return Pe(e, J()), null;
  var n = Wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ni(e);
    r !== 0 && (t = r, n = nu(e, r));
  }
  if (n === 1)
    throw n = Cr, Kt(e, 0), xt(e, t), Pe(e, J()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, xe, ut), Pe(e, J()), null;
}
function Xu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (On = J() + 500, el && At());
  }
}
function Jt(e) {
  Et !== null && Et.tag === 0 && !(I & 6) && kn();
  var t = I;
  I |= 1;
  var n = Be.transition, r = A;
  try {
    if (Be.transition = null, A = 1, e)
      return e();
  } finally {
    A = r, Be.transition = n, I = t, !(I & 6) && At();
  }
}
function Zu() {
  Ne = hn.current, H(hn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rm(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch (Ou(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Oo();
          break;
        case 3:
          Nn(), H(Ee), H(ge), Uu();
          break;
        case 5:
          Fu(r);
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
          Iu(r.type._context);
          break;
        case 22:
        case 23:
          Zu();
      }
      n = n.return;
    }
  if (ie = e, ee = e = Lt(e.current, null), ce = Ne = t, re = 0, Cr = null, Gu = ol = Zt = 0, xe = or = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++)
      if (n = Wt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function ed(e, t) {
  do {
    var n = ee;
    try {
      if ($u(), ao.current = Uo, Fo) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Fo = !1;
      }
      if (Xt = 0, le = ne = K = null, nr = !1, Sr = 0, Qu.current = null, n === null || n.return === null) {
        re = 1, Cr = t, ee = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, s = t;
        if (t = ce, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = ca(i);
          if (v !== null) {
            v.flags &= -257, fa(v, i, u, l, t), v.mode & 1 && aa(l, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              aa(l, a, t), Ju();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var P = ca(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), fa(P, i, u, l, t), zu(Rn(s, u));
            break e;
          }
        }
        l = s = Rn(s, u), re !== 4 && (re = 2), or === null ? or = [l] : or.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = Af(l, s, t);
              ra(l, f);
              break e;
            case 1:
              u = s;
              var c = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = Ff(l, u, t);
                ra(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      rd(n);
    } catch (x) {
      t = x, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function td() {
  var e = Do.current;
  return Do.current = Uo, e === null ? Uo : e;
}
function Ju() {
  (re === 0 || re === 3 || re === 2) && (re = 4), ie === null || !(Zt & 268435455) && !(ol & 268435455) || xt(ie, ce);
}
function Wo(e, t) {
  var n = I;
  I |= 2;
  var r = td();
  (ie !== e || ce !== t) && (ut = null, Kt(e, t));
  do
    try {
      eh();
      break;
    } catch (o) {
      ed(e, o);
    }
  while (1);
  if ($u(), I = n, Do.current = r, ee !== null)
    throw Error(k(261));
  return ie = null, ce = 0, re;
}
function eh() {
  for (; ee !== null; )
    nd(ee);
}
function th() {
  for (; ee !== null && !Pp(); )
    nd(ee);
}
function nd(e) {
  var t = ld(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? rd(e) : ee = t, Qu.current = null;
}
function rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ym(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, ee = null;
        return;
      }
    } else if (n = Gm(n, t, Ne), n !== null) {
      ee = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Bt(e, t, n) {
  var r = A, o = Be.transition;
  try {
    Be.transition = null, A = 1, nh(e, t, n, r);
  } finally {
    Be.transition = o, A = r;
  }
  return null;
}
function nh(e, t, n, r) {
  do
    kn();
  while (Et !== null);
  if (I & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (jp(e, l), e === ie && (ee = ie = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || br || (br = !0, id(Eo, function() {
    return kn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Be.transition, Be.transition = null;
    var i = A;
    A = 1;
    var u = I;
    I |= 4, Qu.current = null, Zm(e, n), Jf(n, e), xm(Ii), Po = !!$i, Ii = $i = null, e.current = n, Jm(n), Tp(), I = u, A = i, Be.transition = l;
  } else
    e.current = n;
  if (br && (br = !1, Et = e, Ho = o), l = e.pendingLanes, l === 0 && (Ot = null), Op(n.stateNode), Pe(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Bo)
    throw Bo = !1, e = eu, eu = null, e;
  return Ho & 1 && e.tag !== 0 && kn(), l = e.pendingLanes, l & 1 ? e === tu ? lr++ : (lr = 0, tu = e) : lr = 0, At(), null;
}
function kn() {
  if (Et !== null) {
    var e = jc(Ho), t = Be.transition, n = A;
    try {
      if (Be.transition = null, A = 16 > e ? 16 : e, Et === null)
        var r = !1;
      else {
        if (e = Et, Et = null, Ho = 0, I & 6)
          throw Error(k(331));
        var o = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var l = E, i = l.child;
          if (E.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, E = m;
                  else
                    for (; E !== null; ) {
                      h = E;
                      var p = h.sibling, v = h.return;
                      if (Yf(h), h === a) {
                        E = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, E = p;
                        break;
                      }
                      E = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var P = y.sibling;
                    y.sibling = null, y = P;
                  } while (y !== null);
                }
              }
              E = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, E = i;
          else
            e:
              for (; E !== null; ) {
                if (l = E, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, E = f;
                  break e;
                }
                E = l.return;
              }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, E = d;
          else
            e:
              for (i = c; E !== null; ) {
                if (u = E, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rl(9, u);
                    }
                  } catch (x) {
                    X(u, u.return, x);
                  }
                if (u === i) {
                  E = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, E = w;
                  break e;
                }
                E = u.return;
              }
        }
        if (I = o, At(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(Xo, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      A = n, Be.transition = t;
    }
  }
  return !1;
}
function Ea(e, t, n) {
  t = Rn(n, t), t = Af(e, t, 1), e = Rt(e, t, 1), t = we(), e !== null && (Nr(e, 1, t), Pe(e, t));
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
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = Rn(n, e), e = Ff(t, e, 1), t = Rt(t, e, 1), e = we(), t !== null && (Nr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > J() - Yu ? Kt(e, 0) : Gu |= n), Pe(e, t);
}
function od(e, t) {
  t === 0 && (e.mode & 1 ? (t = Wr, Wr <<= 1, !(Wr & 130023424) && (Wr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (Nr(e, t, n), Pe(e, n));
}
function oh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), od(e, n);
}
function lh(e, t) {
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
  r !== null && r.delete(t), od(e, n);
}
var ld;
ld = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current)
      Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ce = !1, Qm(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else
    Ce = !1, W && t.flags & 1048576 && af(t, $o, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fo(e, t), e = t.pendingProps;
      var o = _n(t, ge.current);
      Sn(t, n), o = Bu(null, t, r, e, o, n);
      var l = Hu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (l = !0, zo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ju(t), o.updater = nl, t.stateNode = o, o._reactInternals = t, Wi(t, r, e, n), t = Qi(null, t, r, !0, l, n)) : (t.tag = 0, W && l && Ru(t), ve(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = uh(r), e = Qe(r, e), o) {
          case 0:
            t = Ki(null, t, r, e, n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Ki(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), ma(e, t, r, o, n);
    case 3:
      e: {
        if (Hf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, hf(e, t), jo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Rn(Error(k(423)), t), t = ha(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Rn(Error(k(424)), t), t = ha(e, t, r, n, o);
            break e;
          } else
            for (Oe = Nt(t.stateNode.containerInfo.firstChild), ze = t, W = !0, Ye = null, n = pf(t, null, r, n), t.child = n; n; )
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
      return yf(t), e === null && Di(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Mi(r, o) ? i = null : l !== null && Mi(r, l) && (t.flags |= 32), Bf(e, t), ve(e, t, i, n), t.child;
    case 6:
      return e === null && Di(t), null;
    case 13:
      return Wf(e, t, n);
    case 4:
      return Au(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Tn(t, null, r, n) : ve(e, t, r, n), t.child;
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
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, D(Io, r._currentValue), r._currentValue = i, l !== null)
          if (Je(l.value, i)) {
            if (l.children === o.children && !Ee.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      s = ft(-1, n & -n), s.tag = 2;
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Bi(
                      l.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10)
                i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (i = l.return, i === null)
                  throw Error(k(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Bi(i, n, t), i = l.sibling;
              } else
                i = l.child;
              if (i !== null)
                i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (l = i.sibling, l !== null) {
                    l.return = i.return, i = l;
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        ve(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Sn(t, n), o = He(o), r = r(o), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), pa(e, t, r, o, n);
    case 15:
      return Uf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), fo(e, t), t.tag = 1, _e(r) ? (e = !0, zo(t)) : e = !1, Sn(t, n), jf(t, r, o), Wi(t, r, o, n), Qi(null, t, r, !0, e, n);
    case 19:
      return Vf(e, t, n);
    case 22:
      return Df(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function id(e, t) {
  return Lc(e, t);
}
function ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new ih(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function uh(e) {
  if (typeof e == "function")
    return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gu)
      return 11;
    if (e === vu)
      return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ho(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    qu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case on:
          return Qt(n.children, o, l, t);
        case yu:
          i = 8, o |= 8;
          break;
        case pi:
          return e = De(12, n, t, o | 2), e.elementType = pi, e.lanes = l, e;
        case mi:
          return e = De(13, n, t, o), e.elementType = mi, e.lanes = l, e;
        case hi:
          return e = De(19, n, t, o), e.elementType = hi, e.lanes = l, e;
        case hc:
          return ll(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pc:
                i = 10;
                break e;
              case mc:
                i = 9;
                break e;
              case gu:
                i = 11;
                break e;
              case vu:
                i = 14;
                break e;
              case wt:
                i = 16, r = null;
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
  return t = De(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function Qt(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function ll(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = hc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function li(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function ii(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dl(0), this.expirationTimes = Dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function bu(e, t, n, r, o, l, i, u, s) {
  return e = new sh(e, t, n, u, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = De(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(l), e;
}
function ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ud(e) {
  if (!e)
    return It;
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
      return uf(e, n, t);
  }
  return t;
}
function sd(e, t, n, r, o, l, i, u, s) {
  return e = bu(n, r, !0, e, o, l, i, u, s), e.context = ud(null), n = e.current, r = we(), o = zt(n), l = ft(r, o), l.callback = t ?? null, Rt(n, l, o), e.current.lanes = o, Nr(e, o, r), Pe(e, r), e;
}
function il(e, t, n, r) {
  var o = t.current, l = we(), i = zt(o);
  return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(o, t, i), e !== null && (Ze(e, o, i, l), so(e, o, i)), i;
}
function Vo(e) {
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
function ch() {
  return null;
}
var ad = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ts(e) {
  this._internalRoot = e;
}
ul.prototype.render = ts.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  il(e, t, null, null);
};
ul.prototype.unmount = ts.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function() {
      il(null, e, null, null);
    }), t[pt] = null;
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function ns(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function sl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pa() {
}
function fh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Vo(i);
        l.call(a);
      };
    }
    var i = sd(t, r, e, 0, null, !1, !1, "", Pa);
    return e._reactRootContainer = i, e[pt] = i.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Vo(s);
      u.call(a);
    };
  }
  var s = bu(e, 0, !1, null, null, !1, !1, "", Pa);
  return e._reactRootContainer = s, e[pt] = s.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
    il(t, s, n, r);
  }), s;
}
function al(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Vo(i);
        u.call(s);
      };
    }
    il(t, i, e, o);
  } else
    i = fh(n, t, e, o, r);
  return Vo(i);
}
Ac = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (ku(t, n | 1), Pe(t, J()), !(I & 6) && (On = J() + 500, At()));
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
xu = function(e) {
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
  return A;
};
Dc = function(e, t) {
  var n = A;
  try {
    return A = e, t();
  } finally {
    A = n;
  }
};
_i = function(e, t, n) {
  switch (t) {
    case "input":
      if (vi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = bo(r);
            if (!o)
              throw Error(k(90));
            gc(r), vi(r, o);
          }
        }
      }
      break;
    case "textarea":
      wc(e, n);
      break;
    case "select":
      t = n.value, t != null && yn(e, !!n.multiple, t, !1);
  }
};
Pc = Xu;
Tc = Jt;
var dh = { usingClientEntryPoint: !1, Events: [Or, an, bo, Ec, _c, Xu] }, Kn = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Oc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      Xo = eo.inject(ph), ot = eo;
    } catch {
    }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ns(t))
    throw Error(k(200));
  return ah(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!ns(e))
    throw Error(k(299));
  var n = !1, r = "", o = ad;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = bu(e, 1, !1, null, null, n, !1, r, o), e[pt] = t.current, hr(e.nodeType === 8 ? e.parentNode : e), new ts(t);
};
Ie.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Oc(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return Jt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!sl(t))
    throw Error(k(200));
  return al(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!ns(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = ad;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = sd(t, null, e, 1, n ?? null, o, !1, l, i), e[pt] = t.current, hr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new ul(t);
};
Ie.render = function(e, t, n) {
  if (!sl(t))
    throw Error(k(200));
  return al(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!sl(e))
    throw Error(k(40));
  return e._reactRootContainer ? (Jt(function() {
    al(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Xu;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!sl(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return al(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function cd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd);
    } catch (e) {
      console.error(e);
    }
}
cd(), ac.exports = Ie;
var mh = ac.exports, fd, Ta = mh;
fd = Ta.createRoot, Ta.hydrateRoot;
function hh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Na = "$$material";
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
function cl(e, t) {
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
var yh = !1;
function gh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function vh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var wh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !yh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(vh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = gh(o);
      try {
        l.insertRule(r, l.cssRules.length);
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
}(), he = "-ms-", Ko = "-moz-", M = "-webkit-", dd = "comm", rs = "rule", os = "decl", Sh = "@import", pd = "@keyframes", kh = "@layer", xh = Math.abs, fl = String.fromCharCode, Ch = Object.assign;
function Eh(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function md(e) {
  return e.trim();
}
function _h(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function ou(e, t) {
  return e.indexOf(t);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Er(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function to(e, t) {
  return t.push(e), e;
}
function Ph(e, t) {
  return e.map(t).join("");
}
var dl = 1, zn = 1, hd = 0, Te = 0, b = 0, Mn = "";
function pl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: dl, column: zn, length: i, return: "" };
}
function Qn(e, t) {
  return Ch(pl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Th() {
  return b;
}
function Nh() {
  return b = Te > 0 ? ae(Mn, --Te) : 0, zn--, b === 10 && (zn = 1, dl--), b;
}
function Le() {
  return b = Te < hd ? ae(Mn, Te++) : 0, zn++, b === 10 && (zn = 1, dl++), b;
}
function it() {
  return ae(Mn, Te);
}
function yo() {
  return Te;
}
function Lr(e, t) {
  return Er(Mn, e, t);
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
  return dl = zn = 1, hd = tt(Mn = e), Te = 0, [];
}
function gd(e) {
  return Mn = "", e;
}
function go(e) {
  return md(Lr(Te - 1, lu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rh(e) {
  for (; (b = it()) && b < 33; )
    Le();
  return _r(e) > 2 || _r(b) > 3 ? "" : " ";
}
function Oh(e, t) {
  for (; --t && Le() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return Lr(e, yo() + (t < 6 && it() == 32 && Le() == 32));
}
function lu(e) {
  for (; Le(); )
    switch (b) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lu(b);
        break;
      case 40:
        e === 41 && lu(e);
        break;
      case 92:
        Le();
        break;
    }
  return Te;
}
function zh(e, t) {
  for (; Le() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && it() === 47)
      break;
  return "/*" + Lr(t, Te - 1) + "*" + fl(e === 47 ? e : Le());
}
function Lh(e) {
  for (; !_r(it()); )
    Le();
  return Lr(e, Te);
}
function $h(e) {
  return gd(vo("", null, null, null, [""], e = yd(e), 0, [0], e));
}
function vo(e, t, n, r, o, l, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, v = 0, g = 0, y = 1, P = 1, f = 1, c = 0, d = "", w = o, x = l, C = r, S = d; P; )
    switch (g = c, c = Le()) {
      case 40:
        if (g != 108 && ae(S, m - 1) == 58) {
          ou(S += j(go(c), "&", "&\f"), "&\f") != -1 && (f = -1);
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
        S += Rh(g);
        break;
      case 92:
        S += Oh(yo() - 1, 7);
        continue;
      case 47:
        switch (it()) {
          case 42:
          case 47:
            to(Ih(zh(Le(), yo()), t, n), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * y:
        u[a++] = tt(S) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            P = 0;
          case 59 + h:
            f == -1 && (S = j(S, /\f/g, "")), v > 0 && tt(S) - m && to(v > 32 ? Oa(S + ";", r, n, m - 1) : Oa(j(S, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (to(C = Ra(S, t, n, a, h, o, u, d, w = [], x = [], m), l), c === 123)
              if (h === 0)
                vo(S, t, C, C, w, l, m, u, x);
              else
                switch (p === 99 && ae(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vo(e, C, C, r && to(Ra(e, C, C, 0, 0, o, u, d, o, w = [], m), x), o, x, m, u, r ? w : x);
                    break;
                  default:
                    vo(S, C, C, C, [""], x, 0, u, x);
                }
        }
        a = h = v = 0, y = f = 1, d = S = "", m = i;
        break;
      case 58:
        m = 1 + tt(S), v = g;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Nh() == 125)
            continue;
        }
        switch (S += fl(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(S) - 1) * f, f = 1;
            break;
          case 64:
            it() === 45 && (S += go(Le())), p = it(), h = m = tt(d = S += Lh(yo())), c++;
            break;
          case 45:
            g === 45 && tt(S) == 2 && (y = 0);
        }
    }
  return l;
}
function Ra(e, t, n, r, o, l, i, u, s, a, h) {
  for (var m = o - 1, p = o === 0 ? l : [""], v = ls(p), g = 0, y = 0, P = 0; g < r; ++g)
    for (var f = 0, c = Er(e, m + 1, m = xh(y = i[g])), d = e; f < v; ++f)
      (d = md(y > 0 ? p[f] + " " + c : j(c, /&\f/g, p[f]))) && (s[P++] = d);
  return pl(e, t, n, o === 0 ? rs : u, s, a, h);
}
function Ih(e, t, n) {
  return pl(e, t, n, dd, fl(Th()), Er(e, 2, -2), 0);
}
function Oa(e, t, n, r) {
  return pl(e, t, n, os, Er(e, 0, r), Er(e, r + 1, -1), r);
}
function xn(e, t) {
  for (var n = "", r = ls(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Mh(e, t, n, r) {
  switch (e.type) {
    case kh:
      if (e.children.length)
        break;
    case Sh:
    case os:
      return e.return = e.return || e.value;
    case dd:
      return "";
    case pd:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case rs:
      e.value = e.props.join(",");
  }
  return tt(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function jh(e) {
  var t = ls(e);
  return function(n, r, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, o, l) || "";
    return i;
  };
}
function Ah(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function vd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fh = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = it(), o === 38 && l === 12 && (n[r] = 1), !_r(l); )
    Le();
  return Lr(t, Te);
}, Uh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (_r(o)) {
      case 0:
        o === 38 && it() === 12 && (n[r] = 1), t[r] += Fh(Te - 1, n, r);
        break;
      case 2:
        t[r] += go(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = it() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += fl(o);
    }
  while (o = Le());
  return t;
}, Dh = function(t, n) {
  return gd(Uh(yd(t), n));
}, za = /* @__PURE__ */ new WeakMap(), Bh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !za.get(r)) && !o) {
      za.set(t, !0);
      for (var l = [], i = Dh(n, l), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = l[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Hh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wd(e, t) {
  switch (Eh(e, t)) {
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
      return M + e + Ko + e + he + e + e;
    case 6828:
    case 4268:
      return M + e + he + e + e;
    case 6165:
      return M + e + he + "flex-" + e + e;
    case 5187:
      return M + e + j(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return M + e + he + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + he + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + he + j(e, "shrink", "negative") + e;
    case 5292:
      return M + e + he + j(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + j(e, "-grow", "") + M + e + he + j(e, "grow", "positive") + e;
    case 4554:
      return M + j(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Ko + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ou(e, "stretch") ? wd(j(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, tt(e) - 3 - (~ou(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + M) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + he + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + he + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + he + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + he + e + e;
  }
  return e;
}
var Wh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case os:
        t.return = wd(t.value, t.length);
        break;
      case pd:
        return xn([Qn(t, {
          value: j(t.value, "@", "@" + M)
        })], o);
      case rs:
        if (t.length)
          return Ph(t.props, function(l) {
            switch (_h(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xn([Qn(t, {
                  props: [j(l, /:(read-\w+)/, ":" + Ko + "$1")]
                })], o);
              case "::placeholder":
                return xn([Qn(t, {
                  props: [j(l, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Qn(t, {
                  props: [j(l, /:(plac\w+)/, ":" + Ko + "$1")]
                }), Qn(t, {
                  props: [j(l, /:(plac\w+)/, he + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Vh = [Wh], Kh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var P = y.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Vh, l = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var P = y.getAttribute("data-emotion").split(" "), f = 1; f < P.length; f++)
        l[P[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [Bh, Hh];
  {
    var h, m = [Mh, Ah(function(y) {
      h.insert(y);
    })], p = jh(a.concat(o, m)), v = function(P) {
      return xn($h(P), p);
    };
    s = function(P, f, c, d) {
      h = c, v(P ? P + "{" + f.styles + "}" : f.styles), d && (g.inserted[f.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new wh({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: l,
    registered: {},
    insert: s
  };
  return g.sheet.hydrate(u), g;
}, Sd = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, is = ue ? Symbol.for("react.element") : 60103, us = ue ? Symbol.for("react.portal") : 60106, ml = ue ? Symbol.for("react.fragment") : 60107, hl = ue ? Symbol.for("react.strict_mode") : 60108, yl = ue ? Symbol.for("react.profiler") : 60114, gl = ue ? Symbol.for("react.provider") : 60109, vl = ue ? Symbol.for("react.context") : 60110, ss = ue ? Symbol.for("react.async_mode") : 60111, wl = ue ? Symbol.for("react.concurrent_mode") : 60111, Sl = ue ? Symbol.for("react.forward_ref") : 60112, kl = ue ? Symbol.for("react.suspense") : 60113, Qh = ue ? Symbol.for("react.suspense_list") : 60120, xl = ue ? Symbol.for("react.memo") : 60115, Cl = ue ? Symbol.for("react.lazy") : 60116, Gh = ue ? Symbol.for("react.block") : 60121, Yh = ue ? Symbol.for("react.fundamental") : 60117, Xh = ue ? Symbol.for("react.responder") : 60118, Zh = ue ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case is:
        switch (e = e.type, e) {
          case ss:
          case wl:
          case ml:
          case yl:
          case hl:
          case kl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vl:
              case Sl:
              case Cl:
              case xl:
              case gl:
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
function kd(e) {
  return je(e) === wl;
}
F.AsyncMode = ss;
F.ConcurrentMode = wl;
F.ContextConsumer = vl;
F.ContextProvider = gl;
F.Element = is;
F.ForwardRef = Sl;
F.Fragment = ml;
F.Lazy = Cl;
F.Memo = xl;
F.Portal = us;
F.Profiler = yl;
F.StrictMode = hl;
F.Suspense = kl;
F.isAsyncMode = function(e) {
  return kd(e) || je(e) === ss;
};
F.isConcurrentMode = kd;
F.isContextConsumer = function(e) {
  return je(e) === vl;
};
F.isContextProvider = function(e) {
  return je(e) === gl;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
};
F.isForwardRef = function(e) {
  return je(e) === Sl;
};
F.isFragment = function(e) {
  return je(e) === ml;
};
F.isLazy = function(e) {
  return je(e) === Cl;
};
F.isMemo = function(e) {
  return je(e) === xl;
};
F.isPortal = function(e) {
  return je(e) === us;
};
F.isProfiler = function(e) {
  return je(e) === yl;
};
F.isStrictMode = function(e) {
  return je(e) === hl;
};
F.isSuspense = function(e) {
  return je(e) === kl;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ml || e === wl || e === yl || e === hl || e === kl || e === Qh || typeof e == "object" && e !== null && (e.$$typeof === Cl || e.$$typeof === xl || e.$$typeof === gl || e.$$typeof === vl || e.$$typeof === Sl || e.$$typeof === Yh || e.$$typeof === Xh || e.$$typeof === Zh || e.$$typeof === Gh);
};
F.typeOf = je;
Sd.exports = F;
var Jh = Sd.exports, xd = Jh, qh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cd = {};
Cd[xd.ForwardRef] = qh;
Cd[xd.Memo] = bh;
var ey = !0;
function Ed(e, t, n) {
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
  ey === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, cs = function(t, n, r) {
  as(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + o : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function ty(e) {
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
var ny = {
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
}, ry = !1, oy = /[A-Z]|^ms/g, ly = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _d = function(t) {
  return t.charCodeAt(1) === 45;
}, La = function(t) {
  return t != null && typeof t != "boolean";
}, ui = /* @__PURE__ */ vd(function(e) {
  return _d(e) ? e : e.replace(oy, "-$&").toLowerCase();
}), $a = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ly, function(r, o, l) {
          return nt = {
            name: o,
            styles: l,
            next: nt
          }, o;
        });
  }
  return ny[t] !== 1 && !_d(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, iy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var l = n;
      if (l.styles !== void 0) {
        var i = l.next;
        if (i !== void 0)
          for (; i !== void 0; )
            nt = {
              name: i.name,
              styles: i.styles,
              next: nt
            }, i = i.next;
        var u = l.styles + ";";
        return u;
      }
      return uy(e, t, n);
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
  var m = t[h];
  return m !== void 0 ? m : h;
}
function uy(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Pr(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += l + "{" + t[u] + "}" : La(u) && (r += ui(l) + ":" + $a(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && ry)
          throw new Error(iy);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            La(i[s]) && (r += ui(l) + ":" + $a(l, i[s]) + ";");
        else {
          var a = Pr(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += ui(l) + ":" + a + ";";
              break;
            }
            default:
              r += l + "{" + a + "}";
          }
        }
      }
    }
  return r;
}
var Ia = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function El(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nt = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += Pr(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Pr(n, t, e[u]), r) {
      var s = l;
      o += s[u];
    }
  Ia.lastIndex = 0;
  for (var a = "", h; (h = Ia.exec(o)) !== null; )
    a += "-" + h[1];
  var m = ty(o) + a;
  return {
    name: m,
    styles: o,
    next: nt
  };
}
var sy = function(t) {
  return t();
}, Pd = fi["useInsertionEffect"] ? fi["useInsertionEffect"] : !1, Td = Pd || sy, Ma = Pd || N.useLayoutEffect, ay = !1, Nd = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Kh({
    key: "css"
  }) : null
);
Nd.Provider;
var fs = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(Nd);
    return t(n, o, r);
  });
}, $r = /* @__PURE__ */ N.createContext({}), ds = {}.hasOwnProperty, iu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", cy = function(t, n) {
  var r = {};
  for (var o in n)
    ds.call(n, o) && (r[o] = n[o]);
  return r[iu] = t, r;
}, fy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Td(function() {
    return cs(n, r, o);
  }), null;
}, dy = /* @__PURE__ */ fs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[iu], l = [r], i = "";
  typeof e.className == "string" ? i = Ed(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = El(l, void 0, N.useContext($r));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ds.call(e, a) && a !== "css" && a !== iu && !ay && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(fy, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), py = dy, si = { exports: {} }, ja;
function my() {
  return ja || (ja = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var l in o)
            ({}).hasOwnProperty.call(o, l) && (n[l] = o[l]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(si)), si.exports;
}
my();
var Aa = function(t, n) {
  var r = arguments;
  if (n == null || !ds.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = py, l[1] = cy(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return N.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Aa || (Aa = {}));
var hy = /* @__PURE__ */ fs(function(e, t) {
  var n = e.styles, r = El([n], void 0, N.useContext($r)), o = N.useRef();
  return Ma(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Ma(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && cs(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), yy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gy = /* @__PURE__ */ vd(
  function(e) {
    return yy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vy = !1, wy = gy, Sy = function(t) {
  return t !== "theme";
}, Fa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? wy : Sy;
}, Ua = function(t, n, r) {
  var o;
  if (n) {
    var l = n.shouldForwardProp;
    o = t.__emotion_forwardProp && l ? function(i) {
      return t.__emotion_forwardProp(i) && l(i);
    } : l;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, ky = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Td(function() {
    return cs(n, r, o);
  }), null;
}, xy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var u = Ua(t, n, r), s = u || Fa(o), a = !s("as");
  return function() {
    var h = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && m.push("label:" + l + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var p = h[0];
      m.push(p[0]);
      for (var v = h.length, g = 1; g < v; g++)
        m.push(h[g], p[g]);
    }
    var y = fs(function(P, f, c) {
      var d = a && P.as || o, w = "", x = [], C = P;
      if (P.theme == null) {
        C = {};
        for (var S in P)
          C[S] = P[S];
        C.theme = N.useContext($r);
      }
      typeof P.className == "string" ? w = Ed(f.registered, x, P.className) : P.className != null && (w = P.className + " ");
      var T = El(m.concat(x), f.registered, C);
      w += f.key + "-" + T.name, i !== void 0 && (w += " " + i);
      var U = a && u === void 0 ? Fa(d) : s, R = {};
      for (var te in P)
        a && te === "as" || U(te) && (R[te] = P[te]);
      return R.className = w, c && (R.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(ky, {
        cache: f,
        serialized: T,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ N.createElement(d, R));
    });
    return y.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && vy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(P, f) {
      var c = e(P, fe({}, n, f, {
        shouldForwardProp: Ua(y, f, !0)
      }));
      return c.apply(void 0, m);
    }, y;
  };
}, Cy = [
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
], Da = xy.bind(null);
Cy.forEach(function(e) {
  Da[e] = Da(e);
});
function Ey(e) {
  return e == null || Object.keys(e).length === 0;
}
function _y(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ $(hy, {
    styles: typeof t == "function" ? (o) => t(Ey(o) ? n : o) : t
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
function Py(e) {
  return Ba[0] = e, El(Ba);
}
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Rd(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Rd(e[n]);
  }), t;
}
function Qo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? fe({}, e) : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : nn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && nn(e[o]) ? r[o] = Qo(e[o], t[o], n) : n.clone ? r[o] = nn(t[o]) ? Rd(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ty = ["values", "unit", "step"], Ny = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => fe({}, n, {
    [r.key]: r.val
  }), {});
};
function Ry(e) {
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
  } = e, o = cl(e, Ty), l = Ny(t), i = Object.keys(l);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function a(p, v) {
    const g = i.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(g !== -1 && typeof t[i[g]] == "number" ? t[i[g]] : v) - r / 100}${n})`;
  }
  function h(p) {
    return i.indexOf(p) + 1 < i.length ? a(p, i[i.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const v = i.indexOf(p);
    return v === 0 ? u(i[1]) : v === i.length - 1 ? s(i[v]) : a(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return fe({
    keys: i,
    values: l,
    up: u,
    down: s,
    between: a,
    only: h,
    not: m,
    unit: n
  }, o);
}
const Oy = {
  borderRadius: 4
}, zy = Oy;
function ir(e, t) {
  return t ? Qo(e, t, {
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
function yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Ha;
    return t.reduce((i, u, s) => (i[l.up(l.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Ha;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(l.values || ps).indexOf(u) !== -1) {
        const s = l.up(u);
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
function Ly(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const l = e.up(o);
    return r[l] = {}, r;
  }, {})) || {};
}
function Wa(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Od(e) {
  if (typeof e != "string")
    throw new Error(hh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _l(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Go(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = _l(e, n) || r, t && (o = t(o, r, e)), o;
}
function q(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, l = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = _l(s, r) || {};
    return yt(i, u, (m) => {
      let p = Go(a, o, m);
      return m === p && typeof m == "string" && (p = Go(a, o, `${t}${m === "default" ? "" : Od(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function $y(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Iy = {
  m: "margin",
  p: "padding"
}, My = {
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
}, jy = $y((e) => {
  if (e.length > 2)
    if (Va[e])
      e = Va[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Iy[t], o = My[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), ms = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ms, ...hs];
function Ir(e, t, n, r) {
  var o;
  const l = (o = _l(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function zd(e) {
  return Ir(e, "spacing", 8);
}
function Mr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ay(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Mr(t, n), r), {});
}
function Fy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = jy(n), l = Ay(o, r), i = e[n];
  return yt(e, i, l);
}
function Ld(e, t) {
  const n = zd(e.theme);
  return Object.keys(e).map((r) => Fy(e, t, r, n)).reduce(ir, {});
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
function Uy(e = 8) {
  if (e.mui)
    return e;
  const t = zd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((l) => {
    const i = t(l);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Pl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? ir(o, t[l](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Dy = Ve("border", Ue), By = Ve("borderTop", Ue), Hy = Ve("borderRight", Ue), Wy = Ve("borderBottom", Ue), Vy = Ve("borderLeft", Ue), Ky = Ve("borderColor"), Qy = Ve("borderTopColor"), Gy = Ve("borderRightColor"), Yy = Ve("borderBottomColor"), Xy = Ve("borderLeftColor"), Zy = Ve("outline", Ue), Jy = Ve("outlineColor"), Tl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ir(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mr(t, r)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
Tl.propTypes = {};
Tl.filterProps = ["borderRadius"];
Pl(Dy, By, Hy, Wy, Vy, Ky, Qy, Gy, Yy, Xy, Tl, Zy, Jy);
const Nl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ir(e.theme, "spacing", 8), n = (r) => ({
      gap: Mr(t, r)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["gap"];
const Rl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ir(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mr(t, r)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
Rl.propTypes = {};
Rl.filterProps = ["columnGap"];
const Ol = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ir(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mr(t, r)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
Ol.propTypes = {};
Ol.filterProps = ["rowGap"];
const qy = q({
  prop: "gridColumn"
}), by = q({
  prop: "gridRow"
}), eg = q({
  prop: "gridAutoFlow"
}), tg = q({
  prop: "gridAutoColumns"
}), ng = q({
  prop: "gridAutoRows"
}), rg = q({
  prop: "gridTemplateColumns"
}), og = q({
  prop: "gridTemplateRows"
}), lg = q({
  prop: "gridTemplateAreas"
}), ig = q({
  prop: "gridArea"
});
Pl(Nl, Rl, Ol, qy, by, eg, tg, ng, rg, og, lg, ig);
function Cn(e, t) {
  return t === "grey" ? t : e;
}
const ug = q({
  prop: "color",
  themeKey: "palette",
  transform: Cn
}), sg = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Cn
}), ag = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Cn
});
Pl(ug, sg, ag);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const cg = q({
  prop: "width",
  transform: Re
}), ys = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const l = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ps[n];
      return l ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${l}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: l
      } : {
        maxWidth: Re(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
ys.filterProps = ["maxWidth"];
const fg = q({
  prop: "minWidth",
  transform: Re
}), dg = q({
  prop: "height",
  transform: Re
}), pg = q({
  prop: "maxHeight",
  transform: Re
}), mg = q({
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
const hg = q({
  prop: "boxSizing"
});
Pl(cg, ys, fg, dg, pg, mg, hg);
const yg = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ue
  },
  borderTop: {
    themeKey: "borders",
    transform: Ue
  },
  borderRight: {
    themeKey: "borders",
    transform: Ue
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ue
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ue
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
    transform: Ue
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Tl
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
    style: Nl
  },
  rowGap: {
    style: Ol
  },
  columnGap: {
    style: Rl
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
    style: ys
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
}, $d = yg;
function gg(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function vg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wg() {
  function e(n, r, o, l) {
    const i = {
      [n]: r,
      theme: o
    }, u = l[n];
    if (!u)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: a,
      transform: h,
      style: m
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = _l(o, a) || {};
    return m ? m(i) : yt(i, r, (g) => {
      let y = Go(p, h, g);
      return g === y && typeof g == "string" && (y = Go(p, h, `${n}${g === "default" ? "" : Od(g)}`, g)), s === !1 ? y : {
        [s]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: o,
      theme: l = {},
      nested: i
    } = n || {};
    if (!o)
      return null;
    const u = (r = l.unstable_sxConfig) != null ? r : $d;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(l);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const m = Ly(l.breakpoints), p = Object.keys(m);
      let v = m;
      return Object.keys(h).forEach((g) => {
        const y = vg(h[g], l);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = ir(v, e(g, y, l, u));
            else {
              const P = yt({
                theme: l
              }, y, (f) => ({
                [g]: f
              }));
              gg(P, y) ? v[g] = t({
                sx: y,
                theme: l,
                nested: !0
              }) : v = ir(v, P);
            }
          else
            v = ir(v, e(g, y, l, u));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Wa(p, v)
      } : Wa(p, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Id = wg();
Id.filterProps = ["sx"];
const Sg = Id;
function kg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const xg = ["breakpoints", "palette", "spacing", "shape"];
function Cg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: l = {}
  } = e, i = cl(e, xg), u = Ry(n), s = Uy(o);
  let a = Qo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, r),
    spacing: s,
    shape: fe({}, zy, l)
  }, i);
  return a.applyStyles = kg, a = t.reduce((h, m) => Qo(h, m), a), a.unstable_sxConfig = fe({}, $d, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return Sg({
      sx: m,
      theme: this
    });
  }, a;
}
function Eg(e) {
  return Object.keys(e).length === 0;
}
function gs(e = null) {
  const t = N.useContext($r);
  return !t || Eg(t) ? e : t;
}
const _g = Cg();
function Pg(e = _g) {
  return gs(e);
}
function ai(e) {
  const t = Py(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Tg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Pg(n), o = t && r[t] || r;
  let l = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => ai(typeof i == "function" ? i(o) : i)) : l = ai(l)), /* @__PURE__ */ $(_y, {
    styles: l
  });
}
const Ng = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Rg = Ng;
let Ka = 0;
function Og(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Ka += 1, n(`mui-${Ka}`));
  }, [t]), r;
}
const Qa = fi["useId".toString()];
function zg(e) {
  if (Qa !== void 0) {
    const t = Qa();
    return e ?? t;
  }
  return Og(e);
}
const Lg = /* @__PURE__ */ N.createContext(null), Md = Lg;
function jd() {
  return N.useContext(Md);
}
const $g = typeof Symbol == "function" && Symbol.for, Ig = $g ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Mg(e, t) {
  return typeof t == "function" ? t(e) : fe({}, e, t);
}
function jg(e) {
  const {
    children: t,
    theme: n
  } = e, r = jd(), o = N.useMemo(() => {
    const l = r === null ? n : Mg(r, n);
    return l != null && (l[Ig] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ $(Md.Provider, {
    value: o,
    children: t
  });
}
const Ag = ["value"], Fg = /* @__PURE__ */ N.createContext();
function Ug(e) {
  let {
    value: t
  } = e, n = cl(e, Ag);
  return /* @__PURE__ */ $(Fg.Provider, fe({
    value: t ?? !0
  }, n));
}
const Dg = /* @__PURE__ */ N.createContext(void 0);
function Bg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ $(Dg.Provider, {
    value: e,
    children: t
  });
}
function Hg(e) {
  const t = gs(), n = zg() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Rg(() => {
    const l = document.querySelector("head");
    if (!l)
      return;
    const i = l.firstChild;
    if (o) {
      var u;
      if (i && (u = i.hasAttribute) != null && u.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = o, l.prepend(a);
    } else {
      var s;
      (s = l.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [o, n]), o ? /* @__PURE__ */ $(Tg, {
    styles: o
  }) : null;
}
const Ga = {};
function Ya(e, t, n, r = !1) {
  return N.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(o), i = e ? fe({}, t, {
        [e]: l
      }) : l;
      return r ? () => i : i;
    }
    return e ? fe({}, t, {
      [e]: n
    }) : fe({}, t, n);
  }, [e, t, n, r]);
}
function Wg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = gs(Ga), l = jd() || Ga, i = Ya(r, o, n), u = Ya(r, l, n, !0), s = i.direction === "rtl", a = Hg(i);
  return /* @__PURE__ */ $(jg, {
    theme: u,
    children: /* @__PURE__ */ $($r.Provider, {
      value: i,
      children: /* @__PURE__ */ $(Ug, {
        value: s,
        children: /* @__PURE__ */ be(Bg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Vg = ["theme"];
function Kg(e) {
  let {
    theme: t
  } = e, n = cl(e, Vg);
  const r = t[Na];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = fe({}, r, {
    vars: null
  }) : t && !t.vars && (o = fe({}, t, {
    vars: null
  }))), /* @__PURE__ */ $(Wg, fe({}, n, {
    themeId: r ? Na : void 0,
    theme: o
  }));
}
const Qg = {
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
async function Gg(e, t, n) {
  const r = new AbortController(), o = window.setTimeout(
    () => r.abort(),
    n.requestTimeoutMs ?? 65e3
  );
  try {
    const l = await fetch(
      `${n.apiBaseUrl.replace(/\/+$/, "")}/api/seedream/transform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...n.apiToken ? { Authorization: `Bearer ${n.apiToken}` } : {}
        },
        body: JSON.stringify({
          imageUrl: e,
          prompt: t
        }),
        signal: r.signal
      }
    );
    if (!l.ok) {
      const s = await l.json().catch(() => ({})), a = typeof (s == null ? void 0 : s.error) == "string" ? s.error : "generation_failed";
      throw new Error(Qg[a] || "Image generation failed. Please try again.");
    }
    const i = (l.headers.get("Content-Type") || "").split(";")[0].trim();
    if (!i.startsWith("image/"))
      throw new Error("The proxy returned an invalid image response.");
    const u = await l.blob();
    if (!u.size)
      throw new Error("The proxy returned an empty image.");
    return {
      blob: u,
      objectUrl: URL.createObjectURL(u),
      mimeType: i
    };
  } catch (l) {
    throw l instanceof DOMException && l.name === "AbortError" ? new Error("Image generation timed out. Please try again.") : l;
  } finally {
    window.clearTimeout(o);
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
function zl(e) {
  if (typeof e == "string")
    return e.trim();
  if (typeof e == "number" || typeof e == "boolean")
    return String(e);
  if (e && typeof e == "object") {
    const t = e;
    for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en"]) {
      const r = zl(t[n]);
      if (r)
        return r;
    }
  }
  return "";
}
function ci(e, t) {
  var n;
  for (const r of t) {
    const o = zl((n = e == null ? void 0 : e.properties) == null ? void 0 : n[r]);
    if (o)
      return o;
  }
  return "";
}
function uu(e) {
  return zl((e == null ? void 0 : e.href) ?? e);
}
function Yg(e, t) {
  var n, r, o, l, i;
  for (const u of t)
    try {
      const s = uu((o = (r = (n = e == null ? void 0 : e.getRendition) == null ? void 0 : n.call(e, u)) == null ? void 0 : r.items) == null ? void 0 : o[0]);
      if (s)
        return s;
    } catch {
    }
  for (const u of t) {
    const s = Array.isArray(e == null ? void 0 : e.renditions) ? e.renditions.find((h) => (h == null ? void 0 : h.name) === u) : (l = e == null ? void 0 : e.renditions) == null ? void 0 : l[u], a = uu(((i = s == null ? void 0 : s.items) == null ? void 0 : i[0]) ?? (s == null ? void 0 : s[0]));
    if (a)
      return a;
  }
  return "";
}
function Xg(e, t) {
  var n, r;
  for (const o of t) {
    const l = uu((r = (n = e == null ? void 0 : e.renditions) == null ? void 0 : n[o]) == null ? void 0 : r[0]);
    if (l)
      return l;
  }
  return "";
}
async function Zg(e, t) {
  var u, s;
  const n = zl(((u = t == null ? void 0 : t.systemProperties) == null ? void 0 : u.id) ?? (t == null ? void 0 : t.id));
  if (!n)
    return null;
  let r = Yg(t, Xa);
  if (!r && ((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    try {
      const a = await e.raw.getAsync(`/api/entities/${n}`);
      a != null && a.isSuccessStatusCode && (r || (r = Xg(a.content, Xa)));
    } catch {
    }
  const o = ci(t, ["FileName", "fileName"]) || `asset-${n}.jpg`, l = ci(t, ["MimeType", "mimeType", "ContentType"]) || "image/jpeg", i = ci(t, ["Title", "title", "Name", "name"]) || o;
  return !r || !l.toLowerCase().startsWith("image/") ? null : {
    id: n,
    name: i,
    fileName: o,
    mimeType: l,
    previewUrl: r,
    sourceUrl: r
  };
}
function Jg(e) {
  return e === "image/png" ? "png" : e === "image/webp" ? "webp" : "jpg";
}
async function wo(e) {
  const t = await e.text();
  if (!t)
    return `HTTP ${e.status}`;
  try {
    const n = JSON.parse(t);
    return (n == null ? void 0 : n.message) || (n == null ? void 0 : n.error) || `HTTP ${e.status}`;
  } catch {
    return t.slice(0, 300);
  }
}
function qg() {
  const e = new Uint32Array(3);
  return crypto.getRandomValues(e), `${Date.now()}-${e[0]}${e[1]}-${e[2]}`;
}
async function bg(e, t, n, r, o) {
  const l = new URL(e, window.location.origin);
  if (l.origin !== window.location.origin)
    throw new Error("The create upload URL must use the current Content Hub origin.");
  if (!Number.isSafeInteger(t) || t <= 0)
    throw new Error("The create upload component ID is invalid.");
  const i = new FormData();
  i.append("id", String(n)), i.append("componentId", String(t)), i.append("chunk", "0"), i.append("chunks", "1"), i.append("chunkSize", String(r.size)), i.append("fileToken", qg()), i.append("name", r, o), i.append("name", o);
  const u = await fetch(l, {
    method: "POST",
    credentials: "include",
    body: i
  });
  if (!u.ok)
    throw new Error(`Content Hub could not upload the new version: ${await wo(u)}`);
  const s = await u.clone().json().catch(() => null);
  if ((s == null ? void 0 : s.success) === !1)
    throw new Error(s.message || "Content Hub reported that the upload failed.");
}
async function ev(e, t, n) {
  if (t.size > 10 * 1024 * 1024)
    throw new Error("The generated image exceeds the 10 MB browser upload limit.");
  const r = Jg(t.type), l = `${e.fileName.replace(/\.[^.]+$/, "") || `asset-${e.id}`}-seedream.${r}`, i = Number(e.id);
  if (!Number.isSafeInteger(i) || i <= 0)
    throw new Error("Content Hub returned an invalid numeric asset ID.");
  if (n.createUploadUrl) {
    if (n.createUploadComponentId == null)
      throw new Error("Configure createUploadComponentId with createUploadUrl.");
    await bg(
      n.createUploadUrl,
      n.createUploadComponentId,
      i,
      t,
      l
    );
    return;
  }
  const u = {
    file_name: l,
    file_size: t.size,
    upload_configuration: {
      name: n.uploadConfiguration || "AssetUploadConfiguration"
    },
    action: {
      name: "NewMainFile",
      parameters: { AssetId: i }
    }
  }, s = await fetch("/api/v2.0/upload", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json-patch+json" },
    body: JSON.stringify(u)
  });
  if (!s.ok)
    throw new Error(`Content Hub could not start the upload: ${await wo(s)}`);
  const a = await s.json(), h = s.headers.get("Location");
  if (!h)
    throw new Error("Content Hub did not return an upload URL.");
  const m = new FormData();
  m.append("file", t, l);
  const p = await fetch(h, {
    method: "POST",
    credentials: "include",
    body: m
  });
  if (!p.ok)
    throw new Error(`Content Hub could not upload the image: ${await wo(p)}`);
  const v = await fetch("/api/v2.0/upload/finalize", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json-patch+json" },
    body: JSON.stringify(a)
  });
  if (!v.ok)
    throw new Error(`Content Hub could not create the new version: ${await wo(v)}`);
  const g = await v.json().catch(() => ({}));
  if ((g == null ? void 0 : g.success) === !1)
    throw new Error(g.message || "Content Hub reported that the upload failed.");
}
function Za(e) {
  return e instanceof Error ? e.message : "Something went wrong. Please try again.";
}
function tv({ client: e, entity: t, options: n }) {
  const [r, o] = N.useState(null), [l, i] = N.useState(!0), [u, s] = N.useState(""), [a, h] = N.useState(null), [m, p] = N.useState(!1), [v, g] = N.useState(!1), [y, P] = N.useState(""), [f, c] = N.useState(""), d = N.useMemo(() => {
    var T, U, R, te;
    const S = (T = n.apiBaseUrl) == null ? void 0 : T.trim();
    return S ? {
      apiBaseUrl: S,
      apiToken: (U = n.apiToken) == null ? void 0 : U.trim(),
      uploadConfiguration: ((R = n.uploadConfiguration) == null ? void 0 : R.trim()) || "AssetUploadConfiguration",
      createUploadUrl: (te = n.createUploadUrl) == null ? void 0 : te.trim(),
      createUploadComponentId: n.createUploadComponentId,
      requestTimeoutMs: Math.max(165e3, n.requestTimeoutMs ?? 165e3)
    } : null;
  }, [n]);
  N.useEffect(() => {
    let S = !0;
    return i(!0), Zg(e, t).then((T) => {
      S && o(T);
    }).finally(() => {
      S && i(!1);
    }), () => {
      S = !1;
    };
  }, [e, t]), N.useEffect(
    () => () => {
      a && URL.revokeObjectURL(a.objectUrl);
    },
    [a]
  );
  const w = N.useCallback(() => {
    a && URL.revokeObjectURL(a.objectUrl), h(null), P(""), c("");
  }, [a]), x = N.useCallback(async () => {
    if (!(!r || !d || !u.trim())) {
      p(!0), P(""), c(""), a && URL.revokeObjectURL(a.objectUrl), h(null);
      try {
        h(await Gg(r.sourceUrl, u.trim(), d));
      } catch (S) {
        P(Za(S));
      } finally {
        p(!1);
      }
    }
  }, [r, a, u, d]), C = N.useCallback(async () => {
    if (!(!r || !a || !d)) {
      g(!0), P(""), c("");
      try {
        await ev(r, a.blob, d), c("New asset version uploaded successfully.");
      } catch (S) {
        P(Za(S));
      } finally {
        g(!1);
      }
    }
  }, [r, a, d]);
  return d ? l ? /* @__PURE__ */ be("section", { className: "ch-image-transform ch-image-transform--center", children: [
    /* @__PURE__ */ $("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ $("p", { children: "Loading image…" })
  ] }) : r ? /* @__PURE__ */ be("section", { className: "ch-image-transform", children: [
    /* @__PURE__ */ $("header", { className: "ch-image-transform__header", children: /* @__PURE__ */ $("h2", { children: "Transform image" }) }),
    /* @__PURE__ */ be("div", { className: `ch-image-transform__images${a ? " ch-image-transform__images--split" : ""}`, children: [
      /* @__PURE__ */ be("figure", { children: [
        /* @__PURE__ */ $("span", { children: "Before" }),
        /* @__PURE__ */ $("img", { src: r.previewUrl, alt: `Current version of ${r.name}` })
      ] }),
      a ? /* @__PURE__ */ be("figure", { children: [
        /* @__PURE__ */ $("span", { children: "After" }),
        /* @__PURE__ */ $("img", { src: a.objectUrl, alt: a.altText || `Generated version of ${r.name}` })
      ] }) : null
    ] }),
    /* @__PURE__ */ be("div", { className: "ch-image-transform__controls", children: [
      /* @__PURE__ */ $("label", { htmlFor: "ch-image-transform-prompt", children: "Describe the new image" }),
      /* @__PURE__ */ $(
        "textarea",
        {
          id: "ch-image-transform-prompt",
          value: u,
          maxLength: 1024,
          rows: 4,
          disabled: m || v,
          placeholder: "For example: Reimagine this scene at sunset with warm cinematic lighting",
          onChange: (S) => s(S.target.value)
        }
      ),
      m ? /* @__PURE__ */ be("div", { className: "ch-image-transform__working", role: "status", children: [
        /* @__PURE__ */ $("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
        /* @__PURE__ */ $("span", { children: "Generating with Seedream. Complex edits can take up to two minutes." })
      ] }) : null,
      y ? /* @__PURE__ */ $("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: y }) : null,
      f ? /* @__PURE__ */ $("div", { className: "ch-image-transform__notice ch-image-transform__notice--success", children: f }) : null,
      /* @__PURE__ */ $("div", { className: "ch-image-transform__actions", children: a ? /* @__PURE__ */ be(ap, { children: [
        /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button", disabled: v || !!f, onClick: C, children: v ? "Uploading…" : f ? "Version applied" : "Apply as new version" }),
        /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: v, onClick: w, children: "Discard and try again" })
      ] }) : /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button", disabled: !u.trim() || m, onClick: x, children: m ? "Generating…" : "Generate" }) })
    ] })
  ] }) : /* @__PURE__ */ $("section", { className: "ch-image-transform", children: /* @__PURE__ */ $("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: "This component needs an image asset with an accessible preview and download rendition." }) }) : /* @__PURE__ */ $("section", { className: "ch-image-transform", children: /* @__PURE__ */ be("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: [
    "Configure ",
    /* @__PURE__ */ $("code", { children: "apiBaseUrl" }),
    " for this external component."
  ] }) });
}
const nv = ["config", "settings", "json", "componentOptions"];
function Ad(e) {
  if (e) {
    if (typeof e == "string")
      try {
        return Ad(JSON.parse(e));
      } catch {
        return;
      }
    return typeof e == "object" && !Array.isArray(e) ? e : void 0;
  }
}
function tn(e, t) {
  const n = Object.entries(e).find(([r]) => r.toLowerCase() === t.toLowerCase());
  return n == null ? void 0 : n[1];
}
function no(e) {
  if (typeof e != "string")
    return;
  const t = e.trim();
  return t && !/^https?:\/\/your|^your[-_]|^optional-/i.test(t) ? t : void 0;
}
function Ja(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : void 0;
}
function So(e) {
  const t = Ad(e);
  if (!t)
    return {};
  let n = {
    apiBaseUrl: no(tn(t, "apiBaseUrl")),
    apiToken: no(tn(t, "apiToken")),
    uploadConfiguration: no(tn(t, "uploadConfiguration")),
    createUploadUrl: no(tn(t, "createUploadUrl")),
    createUploadComponentId: Ja(tn(t, "createUploadComponentId")),
    requestTimeoutMs: Ja(tn(t, "requestTimeoutMs"))
  };
  for (const r of nv)
    t[r] != null && (n = { ...n, ...So(t[r]) });
  return n;
}
function rv(e, t) {
  return {
    ...So(t == null ? void 0 : t.config),
    ...So(e),
    ...So(t)
  };
}
function ov(e) {
  const t = fd(e);
  return {
    render(n) {
      const r = rv(n == null ? void 0 : n.options, n);
      t.render(
        /* @__PURE__ */ $(Kg, { theme: n.theme, children: /* @__PURE__ */ $(
          tv,
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
  ov as default
};
