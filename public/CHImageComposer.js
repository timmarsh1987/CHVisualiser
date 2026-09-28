function jd(e, t) {
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
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ja = { exports: {} }, bo = {}, qa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar = Symbol.for("react.element"), Dd = Symbol.for("react.portal"), Ud = Symbol.for("react.fragment"), Bd = Symbol.for("react.strict_mode"), Hd = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Kd = Symbol.for("react.forward_ref"), Qd = Symbol.for("react.suspense"), Yd = Symbol.for("react.memo"), Gd = Symbol.for("react.lazy"), ws = Symbol.iterator;
function Xd(e) {
  return e === null || typeof e != "object" ? null : (e = ws && e[ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ba = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ec = Object.assign, tc = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || ba;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nc() {
}
nc.prototype = Fn.prototype;
function au(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || ba;
}
var cu = au.prototype = new nc();
cu.constructor = au;
ec(cu, Fn.prototype);
cu.isPureReactComponent = !0;
var Ss = Array.isArray, rc = Object.prototype.hasOwnProperty, fu = { current: null }, oc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      rc.call(t, r) && !oc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ar, type: e, key: l, ref: i, props: o, _owner: fu.current };
}
function Zd(e, t) {
  return { $$typeof: Ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function Jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ks = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jd("" + e.key) : t.toString(36);
}
function ao(e, t, n, r, o) {
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
          case Ar:
          case Dd:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Fl(i, 0) : r, Ss(o) ? (n = "", e != null && (n = e.replace(ks, "$&/") + "/"), ao(o, t, n, "", function(a) {
      return a;
    })) : o != null && (du(o) && (o = Zd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(ks, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Ss(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + Fl(l, u);
      i += ao(l, t, n, s, o);
    }
  else if (s = Xd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, s = r + Fl(l, u++), i += ao(l, t, n, s, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Kr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return ao(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function qd(e) {
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
var Ee = { current: null }, co = { transition: null }, bd = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: co, ReactCurrentOwner: fu };
function ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Kr, forEach: function(e, t, n) {
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
  if (!du(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = Fn;
$.Fragment = Ud;
$.Profiler = Hd;
$.PureComponent = au;
$.StrictMode = Bd;
$.Suspense = Qd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
$.act = ic;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ec({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = fu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      rc.call(t, s) && !oc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Ar, type: e.type, key: o, ref: l, props: r, _owner: i };
};
$.createContext = function(e) {
  return e = { $$typeof: Vd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Wd, _context: e }, e.Consumer = e;
};
$.createElement = lc;
$.createFactory = function(e) {
  var t = lc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Kd, render: e };
};
$.isValidElement = du;
$.lazy = function(e) {
  return { $$typeof: Gd, _payload: { _status: -1, _result: e }, _init: qd };
};
$.memo = function(e, t) {
  return { $$typeof: Yd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = co.transition;
  co.transition = {};
  try {
    e();
  } finally {
    co.transition = t;
  }
};
$.unstable_act = ic;
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
qa.exports = $;
var O = qa.exports;
const ep = /* @__PURE__ */ Fd(O), pi = /* @__PURE__ */ jd({
  __proto__: null,
  default: ep
}, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tp = O, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), op = Object.prototype.hasOwnProperty, lp = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    op.call(t, r) && !ip.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: np, type: e, key: l, ref: i, props: o, _owner: lp.current };
}
bo.Fragment = rp;
bo.jsx = uc;
bo.jsxs = uc;
Ja.exports = bo;
var sc = Ja.exports;
const I = sc.jsx, qe = sc.jsxs;
var ac = { exports: {} }, Ue = {}, cc = { exports: {} }, fc = {};
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
  function t(P, z) {
    var L = P.length;
    P.push(z);
    e:
      for (; 0 < L; ) {
        var Y = L - 1 >>> 1, N = P[Y];
        if (0 < o(N, z))
          P[Y] = z, P[L] = N, L = Y;
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
    var z = P[0], L = P.pop();
    if (L !== z) {
      P[0] = L;
      e:
        for (var Y = 0, N = P.length, j = N >>> 1; Y < j; ) {
          var V = 2 * (Y + 1) - 1, $e = P[V], ue = V + 1, Pe = P[ue];
          if (0 > o($e, L))
            ue < N && 0 > o(Pe, $e) ? (P[Y] = Pe, P[ue] = L, Y = ue) : (P[Y] = $e, P[V] = L, Y = V);
          else if (ue < N && 0 > o(Pe, L))
            P[Y] = Pe, P[ue] = L, Y = ue;
          else
            break e;
        }
    }
    return z;
  }
  function o(P, z) {
    var L = P.sortIndex - z.sortIndex;
    return L !== 0 ? L : P.id - z.id;
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
  var s = [], a = [], h = 1, m = null, p = 3, v = !1, g = !1, y = !1, _ = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= P)
        r(a), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(a);
    }
  }
  function w(P) {
    if (y = !1, d(P), !g)
      if (n(s) !== null)
        g = !0, Hn(x);
      else {
        var z = n(a);
        z !== null && Wn(w, z.startTime - P);
      }
  }
  function x(P, z) {
    g = !1, y && (y = !1, f(E), E = -1), v = !0;
    var L = p;
    try {
      for (d(z), m = n(s); m !== null && (!(m.expirationTime > z) || P && !H()); ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          m.callback = null, p = m.priorityLevel;
          var N = Y(m.expirationTime <= z);
          z = e.unstable_now(), typeof N == "function" ? m.callback = N : m === n(s) && r(s), d(z);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var j = !0;
      else {
        var V = n(a);
        V !== null && Wn(w, V.startTime - z), j = !1;
      }
      return j;
    } finally {
      m = null, p = L, v = !1;
    }
  }
  var C = !1, k = null, E = -1, M = 5, R = -1;
  function H() {
    return !(e.unstable_now() - R < M);
  }
  function fe() {
    if (k !== null) {
      var P = e.unstable_now();
      R = P;
      var z = !0;
      try {
        z = k(!0, P);
      } finally {
        z ? Kt() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var Kt;
  if (typeof c == "function")
    Kt = function() {
      c(fe);
    };
  else if (typeof MessageChannel < "u") {
    var Vr = new MessageChannel(), Ml = Vr.port2;
    Vr.port1.onmessage = fe, Kt = function() {
      Ml.postMessage(null);
    };
  } else
    Kt = function() {
      _(fe, 0);
    };
  function Hn(P) {
    k = P, C || (C = !0, Kt());
  }
  function Wn(P, z) {
    E = _(function() {
      P(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Hn(x));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
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
      return P();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, z) {
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
    var L = p;
    p = P;
    try {
      return z();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(P, z, L) {
    var Y = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Y + L : Y) : L = Y, P) {
      case 1:
        var N = -1;
        break;
      case 2:
        N = 250;
        break;
      case 5:
        N = 1073741823;
        break;
      case 4:
        N = 1e4;
        break;
      default:
        N = 5e3;
    }
    return N = L + N, P = { id: h++, callback: z, priorityLevel: P, startTime: L, expirationTime: N, sortIndex: -1 }, L > Y ? (P.sortIndex = L, t(a, P), n(s) === null && P === n(a) && (y ? (f(E), E = -1) : y = !0, Wn(w, L - Y))) : (P.sortIndex = N, t(s, P), g || v || (g = !0, Hn(x))), P;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(P) {
    var z = p;
    return function() {
      var L = p;
      p = z;
      try {
        return P.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(fc);
cc.exports = fc;
var up = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = O, De = up;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var dc = /* @__PURE__ */ new Set(), hr = {};
function on(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (hr[e] = t, e = 0; e < t.length; e++)
    dc.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mi = Object.prototype.hasOwnProperty, ap = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xs = {}, Cs = {};
function cp(e) {
  return mi.call(Cs, e) ? !0 : mi.call(xs, e) ? !1 : ap.test(e) ? Cs[e] = !0 : (xs[e] = !0, !1);
}
function fp(e, t, n, r) {
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
function dp(e, t, n, r) {
  if (t === null || typeof t > "u" || fp(e, t, n, r))
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
function _e(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new _e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ye[t] = new _e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pu, mu);
  ye[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pu, mu);
  ye[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dp(t, n, o, r) && (n = null), r || o === null ? cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qr = Symbol.for("react.element"), cn = Symbol.for("react.portal"), fn = Symbol.for("react.fragment"), yu = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), mc = Symbol.for("react.context"), gu = Symbol.for("react.forward_ref"), yi = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), hc = Symbol.for("react.offscreen"), Es = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object" ? null : (e = Es && e[Es] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Dl;
function tr(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = t && t[1] || "";
    }
  return `
` + Dl + e;
}
var Ul = !1;
function Bl(e, t) {
  if (!e || Ul)
    return "";
  Ul = !0;
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
    Ul = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? tr(e) : "";
}
function pp(e) {
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
      return e = Bl(e.type, !1), e;
    case 11:
      return e = Bl(e.type.render, !1), e;
    case 1:
      return e = Bl(e.type, !0), e;
    default:
      return "";
  }
}
function vi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case fn:
      return "Fragment";
    case cn:
      return "Portal";
    case hi:
      return "Profiler";
    case yu:
      return "StrictMode";
    case yi:
      return "Suspense";
    case gi:
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
        return t = e.displayName || null, t !== null ? t : vi(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return vi(e(t));
        } catch {
        }
    }
  return null;
}
function mp(e) {
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
      return vi(t);
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
function yc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hp(e) {
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
function Yr(e) {
  e._valueTracker || (e._valueTracker = hp(e));
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
function Po(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _s(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && hu(e, "checked", t, !1);
}
function Si(e, t) {
  vc(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && ki(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function ki(e, t, n) {
  (t !== "number" || Po(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var nr = Array.isArray;
function xn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function xi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ts(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (nr(n)) {
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
function wc(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
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
function Ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, kc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var lr = {
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
}, yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(lr).forEach(function(e) {
  yp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var gp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ei(e, t) {
  if (t) {
    if (gp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function _i(e, t) {
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
var Pi = null;
function wu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ti = null, Cn = null, En = null;
function Rs(e) {
  if (e = Fr(e)) {
    if (typeof Ti != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = ol(t), Ti(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  Cn ? En ? En.push(e) : En = [e] : Cn = e;
}
function _c() {
  if (Cn) {
    var e = Cn, t = En;
    if (En = Cn = null, Rs(e), t)
      for (e = 0; e < t.length; e++)
        Rs(t[e]);
  }
}
function Pc(e, t) {
  return e(t);
}
function Tc() {
}
var Hl = !1;
function Nc(e, t, n) {
  if (Hl)
    return e(t, n);
  Hl = !0;
  try {
    return Pc(e, t, n);
  } finally {
    Hl = !1, (Cn !== null || En !== null) && (Tc(), _c());
  }
}
function gr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ol(n);
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
var Ni = !1;
if (vt)
  try {
    var Kn = {};
    Object.defineProperty(Kn, "passive", { get: function() {
      Ni = !0;
    } }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
  } catch {
    Ni = !1;
  }
function vp(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var ir = !1, To = null, No = !1, Ri = null, wp = { onError: function(e) {
  ir = !0, To = e;
} };
function Sp(e, t, n, r, o, l, i, u, s) {
  ir = !1, To = null, vp.apply(wp, arguments);
}
function kp(e, t, n, r, o, l, i, u, s) {
  if (Sp.apply(this, arguments), ir) {
    if (ir) {
      var a = To;
      ir = !1, To = null;
    } else
      throw Error(S(198));
    No || (No = !0, Ri = a);
  }
}
function ln(e) {
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
  if (ln(e) !== e)
    throw Error(S(188));
}
function xp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ln(e), t === null)
      throw Error(S(188));
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
      throw Error(S(188));
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
function Oc(e) {
  return e = xp(e), e !== null ? zc(e) : null;
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
var Lc = De.unstable_scheduleCallback, zs = De.unstable_cancelCallback, Cp = De.unstable_shouldYield, Ep = De.unstable_requestPaint, te = De.unstable_now, _p = De.unstable_getCurrentPriorityLevel, Su = De.unstable_ImmediatePriority, $c = De.unstable_UserBlockingPriority, Ro = De.unstable_NormalPriority, Pp = De.unstable_LowPriority, Ic = De.unstable_IdlePriority, el = null, ct = null;
function Tp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var nt = Math.clz32 ? Math.clz32 : Op, Np = Math.log, Rp = Math.LN2;
function Op(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Np(e) / Rp | 0) | 0;
}
var Xr = 64, Zr = 4194304;
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
function Oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = rr(u) : (l &= i, l !== 0 && (r = rr(l)));
  } else
    i = n & ~o, i !== 0 ? r = rr(i) : l !== 0 && (r = rr(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - nt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function zp(e, t) {
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
function Lp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - nt(l), u = 1 << i, s = o[i];
    s === -1 ? (!(u & n) || u & r) && (o[i] = zp(u, t)) : s <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Oi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ac() {
  var e = Xr;
  return Xr <<= 1, !(Xr & 4194240) && (Xr = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function $p(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - nt(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function ku(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var U = 0;
function Mc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var jc, xu, Fc, Dc, Uc, zi = !1, Jr = [], Lt = null, $t = null, It = null, vr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), Nt = [], Ip = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Fr(t), t !== null && xu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ap(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Lt = Qn(Lt, e, t, n, r, o), !0;
    case "dragenter":
      return $t = Qn($t, e, t, n, r, o), !0;
    case "mouseover":
      return It = Qn(It, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return vr.set(l, Qn(vr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, wr.set(l, Qn(wr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Bc(e) {
  var t = Gt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rc(n), t !== null) {
          e.blockedOn = t, Uc(e.priority, function() {
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
function fo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Pi = r, n.target.dispatchEvent(r), Pi = null;
    } else
      return t = Fr(n), t !== null && xu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $s(e, t, n) {
  fo(e) && n.delete(t);
}
function Mp() {
  zi = !1, Lt !== null && fo(Lt) && (Lt = null), $t !== null && fo($t) && ($t = null), It !== null && fo(It) && (It = null), vr.forEach($s), wr.forEach($s);
}
function Yn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zi || (zi = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, Mp)));
}
function Sr(e) {
  function t(o) {
    return Yn(o, e);
  }
  if (0 < Jr.length) {
    Yn(Jr[0], e);
    for (var n = 1; n < Jr.length; n++) {
      var r = Jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Lt !== null && Yn(Lt, e), $t !== null && Yn($t, e), It !== null && Yn(It, e), vr.forEach(t), wr.forEach(t), n = 0; n < Nt.length; n++)
    r = Nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && (n = Nt[0], n.blockedOn === null); )
    Bc(n), n.blockedOn === null && Nt.shift();
}
var _n = Ct.ReactCurrentBatchConfig, zo = !0;
function jp(e, t, n, r) {
  var o = U, l = _n.transition;
  _n.transition = null;
  try {
    U = 1, Cu(e, t, n, r);
  } finally {
    U = o, _n.transition = l;
  }
}
function Fp(e, t, n, r) {
  var o = U, l = _n.transition;
  _n.transition = null;
  try {
    U = 4, Cu(e, t, n, r);
  } finally {
    U = o, _n.transition = l;
  }
}
function Cu(e, t, n, r) {
  if (zo) {
    var o = Li(e, t, n, r);
    if (o === null)
      bl(e, t, r, Lo, n), Ls(e, r);
    else if (Ap(o, e, t, n, r))
      r.stopPropagation();
    else if (Ls(e, r), t & 4 && -1 < Ip.indexOf(e)) {
      for (; o !== null; ) {
        var l = Fr(o);
        if (l !== null && jc(l), l = Li(e, t, n, r), l === null && bl(e, t, r, Lo, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      bl(e, t, r, null, n);
  }
}
var Lo = null;
function Li(e, t, n, r) {
  if (Lo = null, e = wu(r), e = Gt(e), e !== null)
    if (t = ln(e), t === null)
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
  return Lo = e, null;
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
      switch (_p()) {
        case Su:
          return 1;
        case $c:
          return 4;
        case Ro:
        case Pp:
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
var Ot = null, Eu = null, po = null;
function Wc() {
  if (po)
    return po;
  var e, t = Eu, n = t.length, r, o = "value" in Ot ? Ot.value : Ot.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return po = o.slice(e, 1 < r ? 1 - r : void 0);
}
function mo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qr() {
  return !0;
}
function Is() {
  return !1;
}
function Be(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? qr : Is, this.isPropagationStopped = Is, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, _u = Be(Dn), jr = J({}, Dn, { view: 0, detail: 0 }), Dp = Be(jr), Vl, Kl, Gn, tl = J({}, jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (Vl = e.screenX - Gn.screenX, Kl = e.screenY - Gn.screenY) : Kl = Vl = 0, Gn = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Kl;
} }), As = Be(tl), Up = J({}, tl, { dataTransfer: 0 }), Bp = Be(Up), Hp = J({}, jr, { relatedTarget: 0 }), Ql = Be(Hp), Wp = J({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = Be(Wp), Kp = J({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qp = Be(Kp), Yp = J({}, Dn, { data: 0 }), Ms = Be(Yp), Gp = {
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
}, Xp = {
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
}, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zp[e]) ? !!t[e] : !1;
}
function Pu() {
  return Jp;
}
var qp = J({}, jr, { key: function(e) {
  if (e.key) {
    var t = Gp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pu, charCode: function(e) {
  return e.type === "keypress" ? mo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bp = Be(qp), em = J({}, tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), js = Be(em), tm = J({}, jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pu }), nm = Be(tm), rm = J({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), om = Be(rm), lm = J({}, tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), im = Be(lm), um = [9, 13, 27, 32], Tu = vt && "CompositionEvent" in window, ur = null;
vt && "documentMode" in document && (ur = document.documentMode);
var sm = vt && "TextEvent" in window && !ur, Vc = vt && (!Tu || ur && 8 < ur && 11 >= ur), Fs = String.fromCharCode(32), Ds = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return um.indexOf(t.keyCode) !== -1;
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
var dn = !1;
function am(e, t) {
  switch (e) {
    case "compositionend":
      return Qc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ds = !0, Fs);
    case "textInput":
      return e = t.data, e === Fs && Ds ? null : e;
    default:
      return null;
  }
}
function cm(e, t) {
  if (dn)
    return e === "compositionend" || !Tu && Kc(e, t) ? (e = Wc(), po = Eu = Ot = null, dn = !1, e) : null;
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
var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fm[e.type] : t === "textarea";
}
function Yc(e, t, n, r) {
  Ec(r), t = $o(t, "onChange"), 0 < t.length && (n = new _u("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var sr = null, kr = null;
function dm(e) {
  of(e, 0);
}
function nl(e) {
  var t = hn(e);
  if (gc(t))
    return e;
}
function pm(e, t) {
  if (e === "change")
    return t;
}
var Gc = !1;
if (vt) {
  var Yl;
  if (vt) {
    var Gl = "oninput" in document;
    if (!Gl) {
      var Bs = document.createElement("div");
      Bs.setAttribute("oninput", "return;"), Gl = typeof Bs.oninput == "function";
    }
    Yl = Gl;
  } else
    Yl = !1;
  Gc = Yl && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  sr && (sr.detachEvent("onpropertychange", Xc), kr = sr = null);
}
function Xc(e) {
  if (e.propertyName === "value" && nl(kr)) {
    var t = [];
    Yc(t, kr, e, wu(e)), Nc(dm, t);
  }
}
function mm(e, t, n) {
  e === "focusin" ? (Hs(), sr = t, kr = n, sr.attachEvent("onpropertychange", Xc)) : e === "focusout" && Hs();
}
function hm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return nl(kr);
}
function ym(e, t) {
  if (e === "click")
    return nl(t);
}
function gm(e, t) {
  if (e === "input" || e === "change")
    return nl(t);
}
function vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : vm;
function xr(e, t) {
  if (ot(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!mi.call(t, o) || !ot(e[o], t[o]))
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
  for (var e = window, t = Po(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Po(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function wm(e) {
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
var Sm = vt && "documentMode" in document && 11 >= document.documentMode, pn = null, $i = null, ar = null, Ii = !1;
function Ks(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii || pn == null || pn !== Po(r) || (r = pn, "selectionStart" in r && Nu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && xr(ar, r) || (ar = r, r = $o($i, "onSelect"), 0 < r.length && (t = new _u("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = pn)));
}
function br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var mn = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, Xl = {}, qc = {};
vt && (qc = document.createElement("div").style, "AnimationEvent" in window || (delete mn.animationend.animation, delete mn.animationiteration.animation, delete mn.animationstart.animation), "TransitionEvent" in window || delete mn.transitionend.transition);
function rl(e) {
  if (Xl[e])
    return Xl[e];
  if (!mn[e])
    return e;
  var t = mn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in qc)
      return Xl[e] = t[n];
  return e;
}
var bc = rl("animationend"), ef = rl("animationiteration"), tf = rl("animationstart"), nf = rl("transitionend"), rf = /* @__PURE__ */ new Map(), Qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  rf.set(e, t), on(t, [e]);
}
for (var Zl = 0; Zl < Qs.length; Zl++) {
  var Jl = Qs[Zl], km = Jl.toLowerCase(), xm = Jl[0].toUpperCase() + Jl.slice(1);
  Ht(km, "on" + xm);
}
Ht(bc, "onAnimationEnd");
Ht(ef, "onAnimationIteration");
Ht(tf, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(nf, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function Ys(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, kp(r, t, void 0, e), e.currentTarget = null;
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
          Ys(o, u, a), l = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Ys(o, u, a), l = s;
        }
    }
  }
  if (No)
    throw e = Ri, No = !1, Ri = null, e;
}
function K(e, t) {
  var n = t[Di];
  n === void 0 && (n = t[Di] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (lf(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), lf(n, e, r, t);
}
var eo = "_reactListening" + Math.random().toString(36).slice(2);
function Cr(e) {
  if (!e[eo]) {
    e[eo] = !0, dc.forEach(function(n) {
      n !== "selectionchange" && (Cm.has(n) || ql(n, !1, e), ql(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[eo] || (t[eo] = !0, ql("selectionchange", !1, t));
  }
}
function lf(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var o = jp;
      break;
    case 4:
      o = Fp;
      break;
    default:
      o = Cu;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function bl(e, t, n, r, o) {
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
            if (i = Gt(u), i === null)
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
            if (mo(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = bp;
            break;
          case "focusin":
            g = "focus", v = Ql;
            break;
          case "focusout":
            g = "blur", v = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ql;
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
            v = As;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = nm;
            break;
          case bc:
          case ef:
          case tf:
            v = Vp;
            break;
          case nf:
            v = om;
            break;
          case "scroll":
            v = Dp;
            break;
          case "wheel":
            v = im;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qp;
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
        var y = (t & 4) !== 0, _ = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = gr(c, f), w != null && y.push(Er(c, w, d)))), _)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Pi && (g = n.relatedTarget || n.fromElement) && (Gt(g) || g[wt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Gt(g) : null, g !== null && (_ = ln(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = As, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = js, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), _ = v == null ? p : hn(v), d = g == null ? p : hn(g), p = new y(w, c + "leave", v, n, h), p.target = _, p.relatedTarget = d, w = null, Gt(h) === a && (y = new y(f, c + "enter", g, n, h), y.target = d, y.relatedTarget = _, w = y), _ = w, v && g)
            t: {
              for (y = v, f = g, c = 0, d = y; d; d = un(d))
                c++;
              for (d = 0, w = f; w; w = un(w))
                d++;
              for (; 0 < c - d; )
                y = un(y), c--;
              for (; 0 < d - c; )
                f = un(f), d--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = un(y), f = un(f);
              }
              y = null;
            }
          else
            y = null;
          v !== null && Gs(m, p, v, y, !1), g !== null && _ !== null && Gs(m, _, g, y, !0);
        }
      }
      e: {
        if (p = a ? hn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var x = pm;
        else if (Us(p))
          if (Gc)
            x = gm;
          else {
            x = hm;
            var C = mm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = ym);
        if (x && (x = x(e, a))) {
          Yc(m, x, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && ki(p, "number", p.value);
      }
      switch (C = a ? hn(a) : window, e) {
        case "focusin":
          (Us(C) || C.contentEditable === "true") && (pn = C, $i = a, ar = null);
          break;
        case "focusout":
          ar = $i = pn = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ii = !1, Ks(m, n, h);
          break;
        case "selectionchange":
          if (Sm)
            break;
        case "keydown":
        case "keyup":
          Ks(m, n, h);
      }
      var k;
      if (Tu)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        dn ? Kc(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Vc && n.locale !== "ko" && (dn || E !== "onCompositionStart" ? E === "onCompositionEnd" && dn && (k = Wc()) : (Ot = h, Eu = "value" in Ot ? Ot.value : Ot.textContent, dn = !0)), C = $o(a, E), 0 < C.length && (E = new Ms(E, e, null, n, h), m.push({ event: E, listeners: C }), k ? E.data = k : (k = Qc(n), k !== null && (E.data = k)))), (k = sm ? am(e, n) : cm(e, n)) && (a = $o(a, "onBeforeInput"), 0 < a.length && (h = new Ms("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = k));
    }
    of(m, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $o(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = gr(e, n), l != null && r.unshift(Er(e, l, o)), l = gr(e, t), l != null && r.push(Er(e, l, o))), e = e.return;
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
function Gs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = gr(n, l), s != null && i.unshift(Er(n, s, u))) : o || (s = gr(n, l), s != null && i.push(Er(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Em = /\r\n?/g, _m = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Em, `
`).replace(_m, "");
}
function to(e, t, n) {
  if (t = Xs(t), Xs(e) !== t && n)
    throw Error(S(425));
}
function Io() {
}
var Ai = null, Mi = null;
function ji(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Fi = typeof setTimeout == "function" ? setTimeout : void 0, Pm = typeof clearTimeout == "function" ? clearTimeout : void 0, Zs = typeof Promise == "function" ? Promise : void 0, Tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zs < "u" ? function(e) {
  return Zs.resolve(null).then(e).catch(Nm);
} : Fi;
function Nm(e) {
  setTimeout(function() {
    throw e;
  });
}
function ei(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Sr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Sr(t);
}
function At(e) {
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
var Un = Math.random().toString(36).slice(2), at = "__reactFiber$" + Un, _r = "__reactProps$" + Un, wt = "__reactContainer$" + Un, Di = "__reactEvents$" + Un, Rm = "__reactListeners$" + Un, Om = "__reactHandles$" + Un;
function Gt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Js(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = Js(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Fr(e) {
  return e = e[at] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function ol(e) {
  return e[_r] || null;
}
var Ui = [], yn = -1;
function Wt(e) {
  return { current: e };
}
function Q(e) {
  0 > yn || (e.current = Ui[yn], Ui[yn] = null, yn--);
}
function W(e, t) {
  yn++, Ui[yn] = e.current, e.current = t;
}
var Bt = {}, ke = Wt(Bt), Re = Wt(!1), bt = Bt;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Oe(e) {
  return e = e.childContextTypes, e != null;
}
function Ao() {
  Q(Re), Q(ke);
}
function qs(e, t, n) {
  if (ke.current !== Bt)
    throw Error(S(168));
  W(ke, t), W(Re, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(S(108, mp(e) || "Unknown", o));
  return J({}, n, r);
}
function Mo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, bt = ke.current, W(ke, e), W(Re, Re.current), !0;
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = uf(e, t, bt), r.__reactInternalMemoizedMergedChildContext = e, Q(Re), Q(ke), W(ke, e)) : Q(Re), W(Re, n);
}
var mt = null, ll = !1, ti = !1;
function sf(e) {
  mt === null ? mt = [e] : mt.push(e);
}
function zm(e) {
  ll = !0, sf(e);
}
function Vt() {
  if (!ti && mt !== null) {
    ti = !0;
    var e = 0, t = U;
    try {
      var n = mt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mt = null, ll = !1;
    } catch (o) {
      throw mt !== null && (mt = mt.slice(e + 1)), Lc(Su, Vt), o;
    } finally {
      U = t, ti = !1;
    }
  }
  return null;
}
var gn = [], vn = 0, jo = null, Fo = 0, We = [], Ve = 0, en = null, ht = 1, yt = "";
function Qt(e, t) {
  gn[vn++] = Fo, gn[vn++] = jo, jo = e, Fo = t;
}
function af(e, t, n) {
  We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = en, en = e;
  var r = ht;
  e = yt;
  var o = 32 - nt(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - nt(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, ht = 1 << 32 - nt(t) + o | n << o | r, yt = l + e;
  } else
    ht = 1 << l | n << o | r, yt = e;
}
function Ru(e) {
  e.return !== null && (Qt(e, 1), af(e, 1, 0));
}
function Ou(e) {
  for (; e === jo; )
    jo = gn[--vn], gn[vn] = null, Fo = gn[--vn], gn[vn] = null;
  for (; e === en; )
    en = We[--Ve], We[Ve] = null, yt = We[--Ve], We[Ve] = null, ht = We[--Ve], We[Ve] = null;
}
var je = null, Me = null, G = !1, tt = null;
function cf(e, t) {
  var n = Qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Me = At(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = en !== null ? { id: ht, overflow: yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hi(e) {
  if (G) {
    var t = Me;
    if (t) {
      var n = t;
      if (!ea(e, t)) {
        if (Bi(e))
          throw Error(S(418));
        t = At(n.nextSibling);
        var r = je;
        t && ea(e, t) ? cf(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, je = e);
      }
    } else {
      if (Bi(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, G = !1, je = e;
    }
  }
}
function ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function no(e) {
  if (e !== je)
    return !1;
  if (!G)
    return ta(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ji(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Bi(e))
      throw ff(), Error(S(418));
    for (; t; )
      cf(e, t), t = At(t.nextSibling);
  }
  if (ta(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = At(e.nextSibling);
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
    Me = je ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = Me; e; )
    e = At(e.nextSibling);
}
function Ln() {
  Me = je = null, G = !1;
}
function zu(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var Lm = Ct.ReactCurrentBatchConfig;
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
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var u = o.refs;
        i === null ? delete u[l] : u[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function ro(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
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
    return f = Dt(f, c), f.index = 0, f.sibling = null, f;
  }
  function l(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = si(d, f.mode, w), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var x = d.type;
    return x === fn ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && na(x) === c.type) ? (w = o(c, d.props), w.ref = Xn(f, c, d), w.return = f, w) : (w = ko(d.type, d.key, d.props, null, f.mode, w), w.ref = Xn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ai(d, f.mode, w), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = qt(d, f.mode, w, x), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = si("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Qr:
          return d = ko(c.type, c.key, c.props, null, f.mode, d), d.ref = Xn(f, null, c), d.return = f, d;
        case cn:
          return c = ai(c, f.mode, d), c.return = f, c;
        case _t:
          var w = c._init;
          return m(f, w(c._payload), d);
      }
      if (nr(c) || Vn(c))
        return c = qt(c, f.mode, d, null), c.return = f, c;
      ro(f, c);
    }
    return null;
  }
  function p(f, c, d, w) {
    var x = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return x !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Qr:
          return d.key === x ? s(f, c, d, w) : null;
        case cn:
          return d.key === x ? a(f, c, d, w) : null;
        case _t:
          return x = d._init, p(
            f,
            c,
            x(d._payload),
            w
          );
      }
      if (nr(d) || Vn(d))
        return x !== null ? null : h(f, c, d, w, null);
      ro(f, d);
    }
    return null;
  }
  function v(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Qr:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case cn:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, x);
        case _t:
          var C = w._init;
          return v(f, c, d, C(w._payload), x);
      }
      if (nr(w) || Vn(w))
        return f = f.get(d) || null, h(c, f, w, x, null);
      ro(c, w);
    }
    return null;
  }
  function g(f, c, d, w) {
    for (var x = null, C = null, k = c, E = c = 0, M = null; k !== null && E < d.length; E++) {
      k.index > E ? (M = k, k = null) : M = k.sibling;
      var R = p(f, k, d[E], w);
      if (R === null) {
        k === null && (k = M);
        break;
      }
      e && k && R.alternate === null && t(f, k), c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R, k = M;
    }
    if (E === d.length)
      return n(f, k), G && Qt(f, E), x;
    if (k === null) {
      for (; E < d.length; E++)
        k = m(f, d[E], w), k !== null && (c = l(k, c, E), C === null ? x = k : C.sibling = k, C = k);
      return G && Qt(f, E), x;
    }
    for (k = r(f, k); E < d.length; E++)
      M = v(k, f, E, d[E], w), M !== null && (e && M.alternate !== null && k.delete(M.key === null ? E : M.key), c = l(M, c, E), C === null ? x = M : C.sibling = M, C = M);
    return e && k.forEach(function(H) {
      return t(f, H);
    }), G && Qt(f, E), x;
  }
  function y(f, c, d, w) {
    var x = Vn(d);
    if (typeof x != "function")
      throw Error(S(150));
    if (d = x.call(d), d == null)
      throw Error(S(151));
    for (var C = x = null, k = c, E = c = 0, M = null, R = d.next(); k !== null && !R.done; E++, R = d.next()) {
      k.index > E ? (M = k, k = null) : M = k.sibling;
      var H = p(f, k, R.value, w);
      if (H === null) {
        k === null && (k = M);
        break;
      }
      e && k && H.alternate === null && t(f, k), c = l(H, c, E), C === null ? x = H : C.sibling = H, C = H, k = M;
    }
    if (R.done)
      return n(
        f,
        k
      ), G && Qt(f, E), x;
    if (k === null) {
      for (; !R.done; E++, R = d.next())
        R = m(f, R.value, w), R !== null && (c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R);
      return G && Qt(f, E), x;
    }
    for (k = r(f, k); !R.done; E++, R = d.next())
      R = v(k, f, E, R.value, w), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? E : R.key), c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R);
    return e && k.forEach(function(fe) {
      return t(f, fe);
    }), G && Qt(f, E), x;
  }
  function _(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === fn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Qr:
          e: {
            for (var x = d.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === fn) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && na(x) === C.type) {
                  n(f, C.sibling), c = o(C, d.props), c.ref = Xn(f, C, d), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === fn ? (c = qt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = ko(d.type, d.key, d.props, null, f.mode, w), w.ref = Xn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case cn:
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
            c = ai(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case _t:
          return C = d._init, _(f, c, C(d._payload), w);
      }
      if (nr(d))
        return g(f, c, d, w);
      if (Vn(d))
        return y(f, c, d, w);
      ro(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = si(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return _;
}
var $n = df(!0), pf = df(!1), Do = Wt(null), Uo = null, wn = null, Lu = null;
function $u() {
  Lu = wn = Uo = null;
}
function Iu(e) {
  var t = Do.current;
  Q(Do), e._currentValue = t;
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Pn(e, t) {
  Uo = e, Lu = wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, wn === null) {
      if (Uo === null)
        throw Error(S(308));
      wn = e, Uo.dependencies = { lanes: 0, firstContext: e };
    } else
      wn = wn.next = e;
  return t;
}
var Xt = null;
function Au(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function mf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Au(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function hf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, A & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Au(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function ho(e, t, n) {
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
function Bo(e, t, n, r) {
  var o = e.updateQueue;
  Pt = !1;
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
              m = J({}, m, p);
              break e;
            case 2:
              Pt = !0;
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
    nn |= i, e.lanes = i, e.memoizedState = m;
  }
}
function oa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(S(191, o));
        o.call(r);
      }
    }
}
var Dr = {}, ft = Wt(Dr), Pr = Wt(Dr), Tr = Wt(Dr);
function Zt(e) {
  if (e === Dr)
    throw Error(S(174));
  return e;
}
function ju(e, t) {
  switch (W(Tr, t), W(Pr, e), W(ft, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ci(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ci(t, e);
  }
  Q(ft), W(ft, t);
}
function In() {
  Q(ft), Q(Pr), Q(Tr);
}
function yf(e) {
  Zt(Tr.current);
  var t = Zt(ft.current), n = Ci(t, e.type);
  t !== n && (W(Pr, e), W(ft, n));
}
function Fu(e) {
  Pr.current === e && (Q(ft), Q(Pr));
}
var X = Wt(0);
function Ho(e) {
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
var ni = [];
function Du() {
  for (var e = 0; e < ni.length; e++)
    ni[e]._workInProgressVersionPrimary = null;
  ni.length = 0;
}
var yo = Ct.ReactCurrentDispatcher, ri = Ct.ReactCurrentBatchConfig, tn = 0, Z = null, le = null, se = null, Wo = !1, cr = !1, Nr = 0, $m = 0;
function ge() {
  throw Error(S(321));
}
function Uu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n]))
      return !1;
  return !0;
}
function Bu(e, t, n, r, o, l) {
  if (tn = l, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, yo.current = e === null || e.memoizedState === null ? jm : Fm, e = n(r, o), cr) {
    l = 0;
    do {
      if (cr = !1, Nr = 0, 25 <= l)
        throw Error(S(301));
      l += 1, se = le = null, t.updateQueue = null, yo.current = Dm, e = n(r, o);
    } while (cr);
  }
  if (yo.current = Vo, t = le !== null && le.next !== null, tn = 0, se = le = Z = null, Wo = !1, t)
    throw Error(S(300));
  return e;
}
function Hu() {
  var e = Nr !== 0;
  return Nr = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? Z.memoizedState = se = e : se = se.next = e, se;
}
function Xe() {
  if (le === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = le.next;
  var t = se === null ? Z.memoizedState : se.next;
  if (t !== null)
    se = t, le = e;
  else {
    if (e === null)
      throw Error(S(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, se === null ? Z.memoizedState = se = e : se = se.next = e;
  }
  return se;
}
function Rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oi(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = le, o = r.baseQueue, l = n.pending;
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
      if ((tn & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, Z.lanes |= h, nn |= h;
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? i = r : s.next = u, ot(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, Z.lanes |= l, nn |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function li(e) {
  var t = Xe(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    ot(l, t.memoizedState) || (Ne = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function gf() {
}
function vf(e, t) {
  var n = Z, r = Xe(), o = t(), l = !ot(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ne = !0), r = r.queue, Wu(kf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Or(9, Sf.bind(null, n, r, o, t), void 0, null), ae === null)
      throw Error(S(349));
    tn & 30 || wf(n, t, o);
  }
  return o;
}
function wf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Cf(e) {
  var t = St(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function la(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Rr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Mm.bind(null, Z, e), [t.memoizedState, e];
}
function Or(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ef() {
  return Xe().memoizedState;
}
function go(e, t, n, r) {
  var o = it();
  Z.flags |= e, o.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r);
}
function il(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (l = i.destroy, r !== null && Uu(r, i.deps)) {
      o.memoizedState = Or(t, n, l, r);
      return;
    }
  }
  Z.flags |= e, o.memoizedState = Or(1 | t, n, l, r);
}
function ia(e, t) {
  return go(8390656, 8, e, t);
}
function Wu(e, t) {
  return il(2048, 8, e, t);
}
function _f(e, t) {
  return il(4, 2, e, t);
}
function Pf(e, t) {
  return il(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, il(4, 4, Tf.bind(null, t, e), n);
}
function Vu() {
}
function Rf(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Of(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zf(e, t, n) {
  return tn & 21 ? (ot(n, t) || (n = Ac(), Z.lanes |= n, nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function Im(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ri.transition;
  ri.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, ri.transition = r;
  }
}
function Lf() {
  return Xe().memoizedState;
}
function Am(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $f(e))
    If(t, n);
  else if (n = mf(e, t, n, r), n !== null) {
    var o = Ce();
    rt(n, e, r, o), Af(n, t, r);
  }
}
function Mm(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e))
    If(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, ot(u, i)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Au(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = mf(e, t, o, r), n !== null && (o = Ce(), rt(n, e, r, o), Af(n, t, r));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function If(e, t) {
  cr = Wo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Af(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
  }
}
var Vo = { readContext: Ge, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, jm = { readContext: Ge, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: ia, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, go(
    4194308,
    4,
    Tf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return go(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return go(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Am.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: la, useDebugValue: Vu, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = la(!1), t = e[0];
  return e = Im.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, o = it();
  if (G) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ae === null)
      throw Error(S(349));
    tn & 30 || wf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, ia(kf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Or(9, Sf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = ae.identifierPrefix;
  if (G) {
    var n = yt, r = ht;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Nr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = $m++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Fm = {
  readContext: Ge,
  useCallback: Rf,
  useContext: Ge,
  useEffect: Wu,
  useImperativeHandle: Nf,
  useInsertionEffect: _f,
  useLayoutEffect: Pf,
  useMemo: Of,
  useReducer: oi,
  useRef: Ef,
  useState: function() {
    return oi(Rr);
  },
  useDebugValue: Vu,
  useDeferredValue: function(e) {
    var t = Xe();
    return zf(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = oi(Rr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: gf,
  useSyncExternalStore: vf,
  useId: Lf,
  unstable_isNewReconciler: !1
}, Dm = { readContext: Ge, useCallback: Rf, useContext: Ge, useEffect: Wu, useImperativeHandle: Nf, useInsertionEffect: _f, useLayoutEffect: Pf, useMemo: Of, useReducer: li, useRef: Ef, useState: function() {
  return li(Rr);
}, useDebugValue: Vu, useDeferredValue: function(e) {
  var t = Xe();
  return le === null ? t.memoizedState = e : zf(t, le.memoizedState, e);
}, useTransition: function() {
  var e = li(Rr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: gf, useSyncExternalStore: vf, useId: Lf, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = { isMounted: function(e) {
  return (e = e._reactInternals) ? ln(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), o = Ft(e), l = gt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), ho(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), o = Ft(e), l = gt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), ho(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ce(), r = Ft(e), o = gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Mt(e, o, r), t !== null && (rt(t, e, r, n), ho(t, e, r));
} };
function ua(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !xr(n, r) || !xr(o, l) : !0;
}
function Mf(e, t, n) {
  var r = !1, o = Bt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Ge(l) : (o = Oe(t) ? bt : ke.current, r = t.contextTypes, l = (r = r != null) ? zn(e, o) : Bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function sa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function Ki(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Mu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Ge(l) : (l = Oe(t) ? bt : ke.current, o.context = zn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Vi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ul.enqueueReplaceState(o, o.state, null), Bo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t) {
  try {
    var n = "", r = t;
    do
      n += pp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;
function jf(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Qo || (Qo = !0, nu = r), Qi(e, t);
  }, n;
}
function Ff(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Qi(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Qi(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function aa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Um();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = eh.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e);
}
var Bm = Ct.ReactCurrentOwner, Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? pf(t, null, n, r) : $n(t, e.child, n, r);
}
function da(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Pn(t, o), r = Bu(e, t, n, r, l, o), n = Hu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (G && n && Ru(t), t.flags |= 1, xe(e, t, r, o), t.child);
}
function pa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !qu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Df(e, t, l, r, o)) : (e = ko(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xr, n(i, r) && e.ref === t.ref)
      return kt(e, t, o);
  }
  return t.flags |= 1, e = Dt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Df(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (xr(l, r) && e.ref === t.ref)
      if (Ne = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ne = !0);
      else
        return t.lanes = e.lanes, kt(e, t, o);
  }
  return Yi(e, t, n, r, o);
}
function Uf(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(kn, Ie), Ie |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(kn, Ie), Ie |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, W(kn, Ie), Ie |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, W(kn, Ie), Ie |= r;
  return xe(e, t, o, n), t.child;
}
function Bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Yi(e, t, n, r, o) {
  var l = Oe(n) ? bt : ke.current;
  return l = zn(t, l), Pn(t, o), n = Bu(e, t, n, r, l, o), r = Hu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (G && r && Ru(t), t.flags |= 1, xe(e, t, n, o), t.child);
}
function ma(e, t, n, r, o) {
  if (Oe(n)) {
    var l = !0;
    Mo(t);
  } else
    l = !1;
  if (Pn(t, o), t.stateNode === null)
    vo(e, t), Mf(t, n, r), Ki(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ge(a) : (a = Oe(n) ? bt : ke.current, a = zn(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && sa(t, i, r, a), Pt = !1;
    var p = t.memoizedState;
    i.state = p, Bo(t, r, i, o), s = t.memoizedState, u !== r || p !== s || Re.current || Pt ? (typeof h == "function" && (Vi(t, n, h, r), s = t.memoizedState), (u = Pt || ua(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, hf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : be(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ge(s) : (s = Oe(n) ? bt : ke.current, s = zn(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && sa(t, i, r, s), Pt = !1, p = t.memoizedState, i.state = p, Bo(t, r, i, o);
    var g = t.memoizedState;
    u !== m || p !== g || Re.current || Pt ? (typeof v == "function" && (Vi(t, n, v, r), g = t.memoizedState), (a = Pt || ua(t, n, a, r, p, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Gi(e, t, n, r, l, o);
}
function Gi(e, t, n, r, o, l) {
  Bf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && bs(t, n, !1), kt(e, t, l);
  r = t.stateNode, Bm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = $n(t, e.child, null, l), t.child = $n(t, null, u, l)) : xe(e, t, u, l), t.memoizedState = r.state, o && bs(t, n, !0), t.child;
}
function Hf(e) {
  var t = e.stateNode;
  t.pendingContext ? qs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qs(e, t.context, !1), ju(e, t.containerInfo);
}
function ha(e, t, n, r, o) {
  return Ln(), zu(o), t.flags |= 256, xe(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wf(e, t, n) {
  var r = t.pendingProps, o = X.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), W(X, o & 1), e === null)
    return Hi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = cl(i, r, 0, null), e = qt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Zi(n), t.memoizedState = Xi, e) : Ku(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Hm(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Dt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Dt(u, l) : (l = qt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Zi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Xi, r;
  }
  return l = e.child, e = l.sibling, r = Dt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ku(e, t) {
  return t = cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function oo(e, t, n, r) {
  return r !== null && zu(r), $n(t, e.child, null, n), e = Ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Hm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ii(Error(S(422))), oo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = cl({ mode: "visible", children: r.children }, o, 0, null), l = qt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && $n(t, e.child, null, i), t.child.memoizedState = Zi(i), t.memoizedState = Xi, l);
  if (!(t.mode & 1))
    return oo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(S(419)), r = ii(l, r, void 0), oo(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ne || u) {
    if (r = ae, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, St(e, o), rt(r, e, o, -1));
    }
    return Ju(), r = ii(Error(S(421))), oo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = th.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Me = At(o.nextSibling), je = t, G = !0, tt = null, e !== null && (We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = en, ht = e.id, yt = e.overflow, en = t), t = Ku(t, r.children), t.flags |= 4096, t);
}
function ya(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function ui(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Vf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (xe(e, t, r.children, n), r = X.current, r & 2)
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
  if (W(X, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Ho(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ui(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Ho(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        ui(t, !0, n, null, l);
        break;
      case "together":
        ui(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function vo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), nn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wm(e, t, n) {
  switch (t.tag) {
    case 3:
      Hf(t), Ln();
      break;
    case 5:
      yf(t);
      break;
    case 1:
      Oe(t.type) && Mo(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      W(Do, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wf(e, t, n) : (W(X, X.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Vf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uf(e, t, n);
  }
  return kt(e, t, n);
}
var Kf, Ji, Qf, Yf;
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
Ji = function() {
};
Qf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Zt(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = wi(e, o), r = wi(e, r), l = [];
        break;
      case "select":
        o = J({}, o, { value: void 0 }), r = J({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = xi(e, o), r = xi(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Io);
    }
    Ei(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (hr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (hr.hasOwnProperty(a) ? (s != null && a === "onScroll" && K("scroll", e), l || u === s || (l = [])) : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Yf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!G)
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
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Vm(e, t, n) {
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
      return ve(t), null;
    case 1:
      return Oe(t.type) && Ao(), ve(t), null;
    case 3:
      return r = t.stateNode, In(), Q(Re), Q(ke), Du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (no(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (lu(tt), tt = null))), Ji(e, t), ve(t), null;
    case 5:
      Fu(t);
      var o = Zt(Tr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Qf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return ve(t), null;
        }
        if (e = Zt(ft.current), no(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[at] = t, r[_r] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < or.length; o++)
                K(or[o], r);
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
              _s(r, l), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, K("invalid", r);
              break;
            case "textarea":
              Ts(r, l), K("invalid", r);
          }
          Ei(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && to(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && to(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : hr.hasOwnProperty(i) && u != null && i === "onScroll" && K("scroll", r);
            }
          switch (n) {
            case "input":
              Yr(r), Ps(r, l, !0);
              break;
            case "textarea":
              Yr(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Io);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[_r] = r, Kf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = _i(n, r), n) {
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
                for (o = 0; o < or.length; o++)
                  K(or[o], e);
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
                _s(e, r), o = wi(e, r), K("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = J({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                Ts(e, r), o = xi(e, r), K("invalid", e);
                break;
              default:
                o = r;
            }
            Ei(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style" ? Cc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && kc(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && yr(e, s) : typeof s == "number" && yr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (hr.hasOwnProperty(l) ? s != null && l === "onScroll" && K("scroll", e) : s != null && hu(e, l, s, i));
              }
            switch (n) {
              case "input":
                Yr(e), Ps(e, r, !1);
                break;
              case "textarea":
                Yr(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? xn(e, !!r.multiple, l, !1) : r.defaultValue != null && xn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Io);
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
        Yf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Zt(Tr.current), Zt(ft.current), no(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (l = r.nodeValue !== n) && (e = je, e !== null))
            switch (e.tag) {
              case 3:
                to(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && to(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ve(t), null;
    case 13:
      if (Q(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Me !== null && t.mode & 1 && !(t.flags & 128))
          ff(), Ln(), t.flags |= 98560, l = !1;
        else if (l = no(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(S(317));
            l[at] = t;
          } else
            Ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), l = !1;
        } else
          tt !== null && (lu(tt), tt = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? ie === 0 && (ie = 3) : Ju())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return In(), Ji(e, t), e === null && Cr(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Iu(t.type._context), ve(t), null;
    case 17:
      return Oe(t.type) && Ao(), ve(t), null;
    case 19:
      if (Q(X), l = t.memoizedState, l === null)
        return ve(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Zn(l, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ho(e), i !== null) {
                for (t.flags |= 128, Zn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return W(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && te() > Mn && (t.flags |= 128, r = !0, Zn(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ho(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !G)
              return ve(t), null;
          } else
            2 * te() - l.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, Zn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = te(), t.sibling = null, n = X.current, W(X, r ? n & 1 | 2 : n & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return Zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Km(e, t) {
  switch (Ou(t), t.tag) {
    case 1:
      return Oe(t.type) && Ao(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return In(), Q(Re), Q(ke), Du(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fu(t), null;
    case 13:
      if (Q(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        Ln();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(X), null;
    case 4:
      return In(), null;
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
var lo = !1, Se = !1, Qm = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Sn(e, t) {
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
function qi(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var ga = !1;
function Ym(e, t) {
  if (Ai = zo, e = Jc(), Nu(e)) {
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
  for (Mi = { focusedElem: e, selectionRange: n }, zo = !1, T = t; T !== null; )
    if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, T = e;
    else
      for (; T !== null; ) {
        t = T;
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
                  var y = g.memoizedProps, _ = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : be(t.type, y), _);
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
                throw Error(S(163));
            }
        } catch (w) {
          ee(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, T = e;
          break;
        }
        T = t.return;
      }
  return g = ga, ga = !1, g;
}
function fr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && qi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function sl(e, t) {
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
function bi(e) {
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
function Gf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[_r], delete t[Di], delete t[Rm], delete t[Om])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Io));
  else if (r !== 4 && (e = e.child, e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; )
      eu(e, t, n), e = e.sibling;
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; )
      tu(e, t, n), e = e.sibling;
}
var de = null, et = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; )
    Zf(e, t, n), n = n.sibling;
}
function Zf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(el, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Se || Sn(n, t);
    case 6:
      var r = de, o = et;
      de = null, Et(e, t, n), de = r, et = o, de !== null && (et ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (et ? (e = de, n = n.stateNode, e.nodeType === 8 ? ei(e.parentNode, n) : e.nodeType === 1 && ei(e, n), Sr(e)) : ei(de, n.stateNode));
      break;
    case 4:
      r = de, o = et, de = n.stateNode.containerInfo, et = !0, Et(e, t, n), de = r, et = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && qi(n, t, i), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Se && (Sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ee(n, t, u);
        }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Et(e, t, n), Se = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function wa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qm()), t.forEach(function(r) {
      var o = nh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Je(e, t) {
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
                de = u.stateNode, et = !1;
                break e;
              case 3:
                de = u.stateNode.containerInfo, et = !0;
                break e;
              case 4:
                de = u.stateNode.containerInfo, et = !0;
                break e;
            }
            u = u.return;
          }
        if (de === null)
          throw Error(S(160));
        Zf(l, i, o), de = null, et = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        ee(o, t, a);
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
      if (Je(t, e), lt(e), r & 4) {
        try {
          fr(3, e, e.return), sl(3, e);
        } catch (y) {
          ee(e, e.return, y);
        }
        try {
          fr(5, e, e.return);
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 1:
      Je(t, e), lt(e), r & 512 && n !== null && Sn(n, n.return);
      break;
    case 5:
      if (Je(t, e), lt(e), r & 512 && n !== null && Sn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          yr(o, "");
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && vc(o, l), _i(u, i);
            var a = _i(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Cc(o, m) : h === "dangerouslySetInnerHTML" ? kc(o, m) : h === "children" ? yr(o, m) : hu(o, h, m, a);
            }
            switch (u) {
              case "input":
                Si(o, l);
                break;
              case "textarea":
                wc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? xn(o, !!l.multiple, v, !1) : p !== !!l.multiple && (l.defaultValue != null ? xn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : xn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[_r] = l;
          } catch (y) {
            ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Je(t, e), lt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Je(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Sr(t.containerInfo);
        } catch (y) {
          ee(e, e.return, y);
        }
      break;
    case 4:
      Je(t, e), lt(e);
      break;
    case 13:
      Je(t, e), lt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Gu = te())), r & 4 && wa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || h, Je(t, e), Se = a) : Je(t, e), lt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (T = e, h = e.child; h !== null; ) {
            for (m = T = h; T !== null; ) {
              switch (p = T, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fr(4, p, p.return);
                  break;
                case 1:
                  Sn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Sn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ka(m);
                    continue;
                  }
              }
              v !== null ? (v.return = p, T = v) : ka(m);
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
                  ee(e, e.return, y);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (y) {
                  ee(e, e.return, y);
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
      Je(t, e), lt(e), r & 4 && wa(e);
      break;
    case 21:
      break;
    default:
      Je(
        t,
        e
      ), lt(e);
  }
}
function lt(e) {
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
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (yr(o, ""), r.flags &= -33);
          var l = va(e);
          tu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = va(e);
          eu(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      ee(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, n) {
  T = e, qf(e);
}
function qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || lo;
      if (!i) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || Se;
        u = lo;
        var a = Se;
        if (lo = i, (Se = s) && !a)
          for (T = o; T !== null; )
            i = T, s = i.child, i.tag === 22 && i.memoizedState !== null ? xa(o) : s !== null ? (s.return = i, T = s) : xa(o);
        for (; l !== null; )
          T = l, qf(l), l = l.sibling;
        T = o, lo = u, Se = a;
      }
      Sa(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, T = l) : Sa(e);
  }
}
function Sa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || sl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
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
                    m !== null && Sr(m);
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
        Se || t.flags & 512 && bi(t);
      } catch (p) {
        ee(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function ka(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function xa(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            sl(4, t);
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
          var l = t.return;
          try {
            bi(t);
          } catch (s) {
            ee(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            bi(t);
          } catch (s) {
            ee(t, i, s);
          }
      }
    } catch (s) {
      ee(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var Xm = Math.ceil, Ko = Ct.ReactCurrentDispatcher, Qu = Ct.ReactCurrentOwner, Ye = Ct.ReactCurrentBatchConfig, A = 0, ae = null, oe = null, me = 0, Ie = 0, kn = Wt(0), ie = 0, zr = null, nn = 0, al = 0, Yu = 0, dr = null, Te = null, Gu = 0, Mn = 1 / 0, pt = null, Qo = !1, nu = null, jt = null, io = !1, zt = null, Yo = 0, pr = 0, ru = null, wo = -1, So = 0;
function Ce() {
  return A & 6 ? te() : wo !== -1 ? wo : wo = te();
}
function Ft(e) {
  return e.mode & 1 ? A & 2 && me !== 0 ? me & -me : Lm.transition !== null ? (So === 0 && (So = Ac()), So) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < pr)
    throw pr = 0, ru = null, Error(S(185));
  Mr(e, n, r), (!(A & 2) || e !== ae) && (e === ae && (!(A & 2) && (al |= n), ie === 4 && Rt(e, me)), ze(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Mn = te() + 500, ll && Vt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = Oo(e, e === ae ? me : 0);
  if (r === 0)
    n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zs(n), t === 1)
      e.tag === 0 ? zm(Ca.bind(null, e)) : sf(Ca.bind(null, e)), Tm(function() {
        !(A & 6) && Vt();
      }), n = null;
    else {
      switch (Mc(r)) {
        case 1:
          n = Su;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = Ro;
          break;
        case 536870912:
          n = Ic;
          break;
        default:
          n = Ro;
      }
      n = id(n, bf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bf(e, t) {
  if (wo = -1, So = 0, A & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n)
    return null;
  var r = Oo(e, e === ae ? me : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Go(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var l = td();
    (ae !== e || me !== t) && (pt = null, Mn = te() + 500, Jt(e, t));
    do
      try {
        qm();
        break;
      } catch (u) {
        ed(e, u);
      }
    while (1);
    $u(), Ko.current = l, A = o, oe !== null ? t = 0 : (ae = null, me = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (o = Oi(e), o !== 0 && (r = o, t = ou(e, o))), t === 1)
      throw n = zr, Jt(e, 0), Rt(e, r), ze(e, te()), n;
    if (t === 6)
      Rt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Zm(o) && (t = Go(e, r), t === 2 && (l = Oi(e), l !== 0 && (r = l, t = ou(e, l))), t === 1))
        throw n = zr, Jt(e, 0), Rt(e, r), ze(e, te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Yt(e, Te, pt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = Gu + 500 - te(), 10 < t)) {
            if (Oo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ce(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Fi(Yt.bind(null, e, Te, pt), t);
            break;
          }
          Yt(e, Te, pt);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - nt(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Fi(Yt.bind(null, e, Te, pt), r);
            break;
          }
          Yt(e, Te, pt);
          break;
        case 5:
          Yt(e, Te, pt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ze(e, te()), e.callbackNode === n ? bf.bind(null, e) : null;
}
function ou(e, t) {
  var n = dr;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Go(e, t), e !== 2 && (t = Te, Te = n, t !== null && lu(t)), e;
}
function lu(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Zm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!ot(l(), o))
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
function Rt(e, t) {
  for (t &= ~Yu, t &= ~al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ca(e) {
  if (A & 6)
    throw Error(S(327));
  Tn();
  var t = Oo(e, 0);
  if (!(t & 1))
    return ze(e, te()), null;
  var n = Go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oi(e);
    r !== 0 && (t = r, n = ou(e, r));
  }
  if (n === 1)
    throw n = zr, Jt(e, 0), Rt(e, t), ze(e, te()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, Te, pt), ze(e, te()), null;
}
function Xu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Mn = te() + 500, ll && Vt());
  }
}
function rn(e) {
  zt !== null && zt.tag === 0 && !(A & 6) && Tn();
  var t = A;
  A |= 1;
  var n = Ye.transition, r = U;
  try {
    if (Ye.transition = null, U = 1, e)
      return e();
  } finally {
    U = r, Ye.transition = n, A = t, !(A & 6) && Vt();
  }
}
function Zu() {
  Ie = kn.current, Q(kn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pm(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Ou(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ao();
          break;
        case 3:
          In(), Q(Re), Q(ke), Du();
          break;
        case 5:
          Fu(r);
          break;
        case 4:
          In();
          break;
        case 13:
          Q(X);
          break;
        case 19:
          Q(X);
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
  if (ae = e, oe = e = Dt(e.current, null), me = Ie = t, ie = 0, zr = null, Yu = al = nn = 0, Te = dr = null, Xt !== null) {
    for (t = 0; t < Xt.length; t++)
      if (n = Xt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    Xt = null;
  }
  return e;
}
function ed(e, t) {
  do {
    var n = oe;
    try {
      if ($u(), yo.current = Vo, Wo) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Wo = !1;
      }
      if (tn = 0, se = le = Z = null, cr = !1, Nr = 0, Qu.current = null, n === null || n.return === null) {
        ie = 1, zr = t, oe = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, s = t;
        if (t = me, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
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
            s = Error(S(426));
          }
        } else if (G && u.mode & 1) {
          var _ = ca(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), fa(_, i, u, l, t), zu(An(s, u));
            break e;
          }
        }
        l = s = An(s, u), ie !== 4 && (ie = 2), dr === null ? dr = [l] : dr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = jf(l, s, t);
              ra(l, f);
              break e;
            case 1:
              u = s;
              var c = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (jt === null || !jt.has(d)))) {
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
      t = x, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function td() {
  var e = Ko.current;
  return Ko.current = Vo, e === null ? Vo : e;
}
function Ju() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ae === null || !(nn & 268435455) && !(al & 268435455) || Rt(ae, me);
}
function Go(e, t) {
  var n = A;
  A |= 2;
  var r = td();
  (ae !== e || me !== t) && (pt = null, Jt(e, t));
  do
    try {
      Jm();
      break;
    } catch (o) {
      ed(e, o);
    }
  while (1);
  if ($u(), A = n, Ko.current = r, oe !== null)
    throw Error(S(261));
  return ae = null, me = 0, ie;
}
function Jm() {
  for (; oe !== null; )
    nd(oe);
}
function qm() {
  for (; oe !== null && !Cp(); )
    nd(oe);
}
function nd(e) {
  var t = ld(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? rd(e) : oe = t, Qu.current = null;
}
function rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Km(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, oe = null;
        return;
      }
    } else if (n = Vm(n, t, Ie), n !== null) {
      oe = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Yt(e, t, n) {
  var r = U, o = Ye.transition;
  try {
    Ye.transition = null, U = 1, bm(e, t, n, r);
  } finally {
    Ye.transition = o, U = r;
  }
  return null;
}
function bm(e, t, n, r) {
  do
    Tn();
  while (zt !== null);
  if (A & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if ($p(e, l), e === ae && (oe = ae = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || io || (io = !0, id(Ro, function() {
    return Tn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Ye.transition, Ye.transition = null;
    var i = U;
    U = 1;
    var u = A;
    A |= 4, Qu.current = null, Ym(e, n), Jf(n, e), wm(Mi), zo = !!Ai, Mi = Ai = null, e.current = n, Gm(n), Ep(), A = u, U = i, Ye.transition = l;
  } else
    e.current = n;
  if (io && (io = !1, zt = e, Yo = o), l = e.pendingLanes, l === 0 && (jt = null), Tp(n.stateNode), ze(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Qo)
    throw Qo = !1, e = nu, nu = null, e;
  return Yo & 1 && e.tag !== 0 && Tn(), l = e.pendingLanes, l & 1 ? e === ru ? pr++ : (pr = 0, ru = e) : pr = 0, Vt(), null;
}
function Tn() {
  if (zt !== null) {
    var e = Mc(Yo), t = Ye.transition, n = U;
    try {
      if (Ye.transition = null, U = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, Yo = 0, A & 6)
          throw Error(S(331));
        var o = A;
        for (A |= 4, T = e.current; T !== null; ) {
          var l = T, i = l.child;
          if (T.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (T = a; T !== null; ) {
                  var h = T;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fr(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, T = m;
                  else
                    for (; T !== null; ) {
                      h = T;
                      var p = h.sibling, v = h.return;
                      if (Gf(h), h === a) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, T = p;
                        break;
                      }
                      T = v;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var _ = y.sibling;
                    y.sibling = null, y = _;
                  } while (y !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, T = i;
          else
            e:
              for (; T !== null; ) {
                if (l = T, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fr(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, T = f;
                  break e;
                }
                T = l.return;
              }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          i = T;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, T = d;
          else
            e:
              for (i = c; T !== null; ) {
                if (u = T, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        sl(9, u);
                    }
                  } catch (x) {
                    ee(u, u.return, x);
                  }
                if (u === i) {
                  T = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, T = w;
                  break e;
                }
                T = u.return;
              }
        }
        if (A = o, Vt(), ct && typeof ct.onPostCommitFiberRoot == "function")
          try {
            ct.onPostCommitFiberRoot(el, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      U = n, Ye.transition = t;
    }
  }
  return !1;
}
function Ea(e, t, n) {
  t = An(n, t), t = jf(e, t, 1), e = Mt(e, t, 1), t = Ce(), e !== null && (Mr(e, 1, t), ze(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    Ea(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ea(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
          e = An(n, e), e = Ff(t, e, 1), t = Mt(t, e, 1), e = Ce(), t !== null && (Mr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (me & n) === n && (ie === 4 || ie === 3 && (me & 130023424) === me && 500 > te() - Gu ? Jt(e, 0) : Yu |= n), ze(e, t);
}
function od(e, t) {
  t === 0 && (e.mode & 1 ? (t = Zr, Zr <<= 1, !(Zr & 130023424) && (Zr = 4194304)) : t = 1);
  var n = Ce();
  e = St(e, t), e !== null && (Mr(e, t, n), ze(e, n));
}
function th(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), od(e, n);
}
function nh(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), od(e, n);
}
var ld;
ld = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current)
      Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ne = !1, Wm(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else
    Ne = !1, G && t.flags & 1048576 && af(t, Fo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      vo(e, t), e = t.pendingProps;
      var o = zn(t, ke.current);
      Pn(t, n), o = Bu(null, t, r, e, o, n);
      var l = Hu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (l = !0, Mo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Mu(t), o.updater = ul, t.stateNode = o, o._reactInternals = t, Ki(t, r, e, n), t = Gi(null, t, r, !0, l, n)) : (t.tag = 0, G && l && Ru(t), xe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (vo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = oh(r), e = be(r, e), o) {
          case 0:
            t = Yi(null, t, r, e, n);
            break e;
          case 1:
            t = ma(null, t, r, e, n);
            break e;
          case 11:
            t = da(null, t, r, e, n);
            break e;
          case 14:
            t = pa(null, t, r, be(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), Yi(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), ma(e, t, r, o, n);
    case 3:
      e: {
        if (Hf(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, hf(e, t), Bo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = An(Error(S(423)), t), t = ha(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = An(Error(S(424)), t), t = ha(e, t, r, n, o);
            break e;
          } else
            for (Me = At(t.stateNode.containerInfo.firstChild), je = t, G = !0, tt = null, n = pf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ln(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yf(t), e === null && Hi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, ji(r, o) ? i = null : l !== null && ji(r, l) && (t.flags |= 32), Bf(e, t), xe(e, t, i, n), t.child;
    case 6:
      return e === null && Hi(t), null;
    case 13:
      return Wf(e, t, n);
    case 4:
      return ju(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), da(e, t, r, o, n);
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, W(Do, r._currentValue), r._currentValue = i, l !== null)
          if (ot(l.value, i)) {
            if (l.children === o.children && !Re.current) {
              t = kt(e, t, n);
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
                      s = gt(-1, n & -n), s.tag = 2;
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Wi(
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
                  throw Error(S(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Wi(i, n, t), i = l.sibling;
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
        xe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Pn(t, n), o = Ge(o), r = r(o), t.flags |= 1, xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = be(r, t.pendingProps), o = be(r.type, o), pa(e, t, r, o, n);
    case 15:
      return Df(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), vo(e, t), t.tag = 1, Oe(r) ? (e = !0, Mo(t)) : e = !1, Pn(t, n), Mf(t, r, o), Ki(t, r, o, n), Gi(null, t, r, !0, e, n);
    case 19:
      return Vf(e, t, n);
    case 22:
      return Uf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function id(e, t) {
  return Lc(e, t);
}
function rh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Qe(e, t, n, r) {
  return new rh(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function oh(e) {
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
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ko(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    qu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case fn:
          return qt(n.children, o, l, t);
        case yu:
          i = 8, o |= 8;
          break;
        case hi:
          return e = Qe(12, n, t, o | 2), e.elementType = hi, e.lanes = l, e;
        case yi:
          return e = Qe(13, n, t, o), e.elementType = yi, e.lanes = l, e;
        case gi:
          return e = Qe(19, n, t, o), e.elementType = gi, e.lanes = l, e;
        case hc:
          return cl(n, o, l, t);
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
              case _t:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Qe(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function qt(e, t, n, r) {
  return e = Qe(7, e, r, t), e.lanes = n, e;
}
function cl(e, t, n, r) {
  return e = Qe(22, e, r, t), e.elementType = hc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Qe(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = Qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function lh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function bu(e, t, n, r, o, l, i, u, s) {
  return e = new lh(e, t, n, u, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Qe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(l), e;
}
function ih(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: cn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ud(e) {
  if (!e)
    return Bt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1)
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
      return uf(e, n, t);
  }
  return t;
}
function sd(e, t, n, r, o, l, i, u, s) {
  return e = bu(n, r, !0, e, o, l, i, u, s), e.context = ud(null), n = e.current, r = Ce(), o = Ft(n), l = gt(r, o), l.callback = t ?? null, Mt(n, l, o), e.current.lanes = o, Mr(e, o, r), ze(e, r), e;
}
function fl(e, t, n, r) {
  var o = t.current, l = Ce(), i = Ft(o);
  return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(o, t, i), e !== null && (rt(e, o, i, l), ho(e, o, i)), i;
}
function Xo(e) {
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
function uh() {
  return null;
}
var ad = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ts(e) {
  this._internalRoot = e;
}
dl.prototype.render = ts.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  fl(e, t, null, null);
};
dl.prototype.unmount = ts.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rn(function() {
      fl(null, e, null, null);
    }), t[wt] = null;
  }
};
function dl(e) {
  this._internalRoot = e;
}
dl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++)
      ;
    Nt.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function ns(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function pl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pa() {
}
function sh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Xo(i);
        l.call(a);
      };
    }
    var i = sd(t, r, e, 0, null, !1, !1, "", Pa);
    return e._reactRootContainer = i, e[wt] = i.current, Cr(e.nodeType === 8 ? e.parentNode : e), rn(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Xo(s);
      u.call(a);
    };
  }
  var s = bu(e, 0, !1, null, null, !1, !1, "", Pa);
  return e._reactRootContainer = s, e[wt] = s.current, Cr(e.nodeType === 8 ? e.parentNode : e), rn(function() {
    fl(t, s, n, r);
  }), s;
}
function ml(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Xo(i);
        u.call(s);
      };
    }
    fl(t, i, e, o);
  } else
    i = sh(n, t, e, o, r);
  return Xo(i);
}
jc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = rr(t.pendingLanes);
        n !== 0 && (ku(t, n | 1), ze(t, te()), !(A & 6) && (Mn = te() + 500, Vt()));
      }
      break;
    case 13:
      rn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = Ce();
          rt(r, e, 1, o);
        }
      }), es(e, 1);
  }
};
xu = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Ce();
      rt(t, e, 134217728, n);
    }
    es(e, 134217728);
  }
};
Fc = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = St(e, t);
    if (n !== null) {
      var r = Ce();
      rt(n, e, t, r);
    }
    es(e, t);
  }
};
Dc = function() {
  return U;
};
Uc = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
  }
};
Ti = function(e, t, n) {
  switch (t) {
    case "input":
      if (Si(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ol(r);
            if (!o)
              throw Error(S(90));
            gc(r), Si(r, o);
          }
        }
      }
      break;
    case "textarea":
      wc(e, n);
      break;
    case "select":
      t = n.value, t != null && xn(e, !!n.multiple, t, !1);
  }
};
Pc = Xu;
Tc = rn;
var ah = { usingClientEntryPoint: !1, Events: [Fr, hn, ol, Ec, _c, Xu] }, Jn = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ch = { bundleType: Jn.bundleType, version: Jn.version, rendererPackageName: Jn.rendererPackageName, rendererConfig: Jn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Oc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Jn.findFiberByHostInstance || uh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!uo.isDisabled && uo.supportsFiber)
    try {
      el = uo.inject(ch), ct = uo;
    } catch {
    }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ah;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ns(t))
    throw Error(S(200));
  return ih(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!ns(e))
    throw Error(S(299));
  var n = !1, r = "", o = ad;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = bu(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Cr(e.nodeType === 8 ? e.parentNode : e), new ts(t);
};
Ue.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Oc(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return rn(e);
};
Ue.hydrate = function(e, t, n) {
  if (!pl(t))
    throw Error(S(200));
  return ml(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!ns(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = ad;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = sd(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Cr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new dl(t);
};
Ue.render = function(e, t, n) {
  if (!pl(t))
    throw Error(S(200));
  return ml(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!pl(e))
    throw Error(S(40));
  return e._reactRootContainer ? (rn(function() {
    ml(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = Xu;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!pl(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return ml(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function cd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd);
    } catch (e) {
      console.error(e);
    }
}
cd(), ac.exports = Ue;
var fh = ac.exports, fd, Ta = fh;
fd = Ta.createRoot, Ta.hydrateRoot;
function dh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Na = "$$material";
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
function hl(e, t) {
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
var ph = !1;
function mh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function hh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var yh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !ph : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = mh(o);
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
}(), we = "-ms-", Zo = "-moz-", F = "-webkit-", dd = "comm", rs = "rule", os = "decl", gh = "@import", pd = "@keyframes", vh = "@layer", wh = Math.abs, yl = String.fromCharCode, Sh = Object.assign;
function kh(e, t) {
  return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function md(e) {
  return e.trim();
}
function xh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function iu(e, t) {
  return e.indexOf(t);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lr(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function so(e, t) {
  return t.push(e), e;
}
function Ch(e, t) {
  return e.map(t).join("");
}
var gl = 1, jn = 1, hd = 0, Le = 0, re = 0, Bn = "";
function vl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: gl, column: jn, length: i, return: "" };
}
function qn(e, t) {
  return Sh(vl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Eh() {
  return re;
}
function _h() {
  return re = Le > 0 ? pe(Bn, --Le) : 0, jn--, re === 10 && (jn = 1, gl--), re;
}
function Fe() {
  return re = Le < hd ? pe(Bn, Le++) : 0, jn++, re === 10 && (jn = 1, gl++), re;
}
function dt() {
  return pe(Bn, Le);
}
function xo() {
  return Le;
}
function Ur(e, t) {
  return Lr(Bn, e, t);
}
function $r(e) {
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
  return gl = jn = 1, hd = ut(Bn = e), Le = 0, [];
}
function gd(e) {
  return Bn = "", e;
}
function Co(e) {
  return md(Ur(Le - 1, uu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ph(e) {
  for (; (re = dt()) && re < 33; )
    Fe();
  return $r(e) > 2 || $r(re) > 3 ? "" : " ";
}
function Th(e, t) {
  for (; --t && Fe() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return Ur(e, xo() + (t < 6 && dt() == 32 && Fe() == 32));
}
function uu(e) {
  for (; Fe(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uu(re);
        break;
      case 40:
        e === 41 && uu(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Le;
}
function Nh(e, t) {
  for (; Fe() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && dt() === 47)
      break;
  return "/*" + Ur(t, Le - 1) + "*" + yl(e === 47 ? e : Fe());
}
function Rh(e) {
  for (; !$r(dt()); )
    Fe();
  return Ur(e, Le);
}
function Oh(e) {
  return gd(Eo("", null, null, null, [""], e = yd(e), 0, [0], e));
}
function Eo(e, t, n, r, o, l, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, v = 0, g = 0, y = 1, _ = 1, f = 1, c = 0, d = "", w = o, x = l, C = r, k = d; _; )
    switch (g = c, c = Fe()) {
      case 40:
        if (g != 108 && pe(k, m - 1) == 58) {
          iu(k += D(Co(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Co(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ph(g);
        break;
      case 92:
        k += Th(xo() - 1, 7);
        continue;
      case 47:
        switch (dt()) {
          case 42:
          case 47:
            so(zh(Nh(Fe(), xo()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = ut(k) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            _ = 0;
          case 59 + h:
            f == -1 && (k = D(k, /\f/g, "")), v > 0 && ut(k) - m && so(v > 32 ? Oa(k + ";", r, n, m - 1) : Oa(D(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (so(C = Ra(k, t, n, a, h, o, u, d, w = [], x = [], m), l), c === 123)
              if (h === 0)
                Eo(k, t, C, C, w, l, m, u, x);
              else
                switch (p === 99 && pe(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Eo(e, C, C, r && so(Ra(e, C, C, 0, 0, o, u, d, o, w = [], m), x), o, x, m, u, r ? w : x);
                    break;
                  default:
                    Eo(k, C, C, C, [""], x, 0, u, x);
                }
        }
        a = h = v = 0, y = f = 1, d = k = "", m = i;
        break;
      case 58:
        m = 1 + ut(k), v = g;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && _h() == 125)
            continue;
        }
        switch (k += yl(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(k) - 1) * f, f = 1;
            break;
          case 64:
            dt() === 45 && (k += Co(Fe())), p = dt(), h = m = ut(d = k += Rh(xo())), c++;
            break;
          case 45:
            g === 45 && ut(k) == 2 && (y = 0);
        }
    }
  return l;
}
function Ra(e, t, n, r, o, l, i, u, s, a, h) {
  for (var m = o - 1, p = o === 0 ? l : [""], v = ls(p), g = 0, y = 0, _ = 0; g < r; ++g)
    for (var f = 0, c = Lr(e, m + 1, m = wh(y = i[g])), d = e; f < v; ++f)
      (d = md(y > 0 ? p[f] + " " + c : D(c, /&\f/g, p[f]))) && (s[_++] = d);
  return vl(e, t, n, o === 0 ? rs : u, s, a, h);
}
function zh(e, t, n) {
  return vl(e, t, n, dd, yl(Eh()), Lr(e, 2, -2), 0);
}
function Oa(e, t, n, r) {
  return vl(e, t, n, os, Lr(e, 0, r), Lr(e, r + 1, -1), r);
}
function Nn(e, t) {
  for (var n = "", r = ls(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Lh(e, t, n, r) {
  switch (e.type) {
    case vh:
      if (e.children.length)
        break;
    case gh:
    case os:
      return e.return = e.return || e.value;
    case dd:
      return "";
    case pd:
      return e.return = e.value + "{" + Nn(e.children, r) + "}";
    case rs:
      e.value = e.props.join(",");
  }
  return ut(n = Nn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function $h(e) {
  var t = ls(e);
  return function(n, r, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, o, l) || "";
    return i;
  };
}
function Ih(e) {
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
var Ah = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = dt(), o === 38 && l === 12 && (n[r] = 1), !$r(l); )
    Fe();
  return Ur(t, Le);
}, Mh = function(t, n) {
  var r = -1, o = 44;
  do
    switch ($r(o)) {
      case 0:
        o === 38 && dt() === 12 && (n[r] = 1), t[r] += Ah(Le - 1, n, r);
        break;
      case 2:
        t[r] += Co(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += yl(o);
    }
  while (o = Fe());
  return t;
}, jh = function(t, n) {
  return gd(Mh(yd(t), n));
}, za = /* @__PURE__ */ new WeakMap(), Fh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !za.get(r)) && !o) {
      za.set(t, !0);
      for (var l = [], i = jh(n, l), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = l[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Dh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wd(e, t) {
  switch (kh(e, t)) {
    case 5103:
      return F + "print-" + e + e;
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
      return F + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return F + e + Zo + e + we + e + e;
    case 6828:
    case 4268:
      return F + e + we + e + e;
    case 6165:
      return F + e + we + "flex-" + e + e;
    case 5187:
      return F + e + D(e, /(\w+).+(:[^]+)/, F + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
      return F + e + we + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return F + e + we + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return F + e + we + D(e, "shrink", "negative") + e;
    case 5292:
      return F + e + we + D(e, "basis", "preferred-size") + e;
    case 6060:
      return F + "box-" + D(e, "-grow", "") + F + e + we + D(e, "grow", "positive") + e;
    case 4554:
      return F + D(e, /([^-])(transform)/g, "$1" + F + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, F + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, F + "box-pack:$3" + we + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + F + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, F + "$1$2") + e;
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
        switch (pe(e, t + 1)) {
          case 109:
            if (pe(e, t + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + F + "$2-$3$1" + Zo + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~iu(e, "stretch") ? wd(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (pe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (pe(e, ut(e) - 3 - (~iu(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + F) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + F + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + F + "$2$3$1" + we + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return F + e + we + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return F + e + we + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return F + e + we + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return F + e + we + e + e;
  }
  return e;
}
var Uh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case os:
        t.return = wd(t.value, t.length);
        break;
      case pd:
        return Nn([qn(t, {
          value: D(t.value, "@", "@" + F)
        })], o);
      case rs:
        if (t.length)
          return Ch(t.props, function(l) {
            switch (xh(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Nn([qn(t, {
                  props: [D(l, /:(read-\w+)/, ":" + Zo + "$1")]
                })], o);
              case "::placeholder":
                return Nn([qn(t, {
                  props: [D(l, /:(plac\w+)/, ":" + F + "input-$1")]
                }), qn(t, {
                  props: [D(l, /:(plac\w+)/, ":" + Zo + "$1")]
                }), qn(t, {
                  props: [D(l, /:(plac\w+)/, we + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Bh = [Uh], Hh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var _ = y.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Bh, l = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var _ = y.getAttribute("data-emotion").split(" "), f = 1; f < _.length; f++)
        l[_[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [Fh, Dh];
  {
    var h, m = [Lh, Ih(function(y) {
      h.insert(y);
    })], p = $h(a.concat(o, m)), v = function(_) {
      return Nn(Oh(_), p);
    };
    s = function(_, f, c, d) {
      h = c, v(_ ? _ + "{" + f.styles + "}" : f.styles), d && (g.inserted[f.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new yh({
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
}, Sd = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = typeof Symbol == "function" && Symbol.for, is = ce ? Symbol.for("react.element") : 60103, us = ce ? Symbol.for("react.portal") : 60106, wl = ce ? Symbol.for("react.fragment") : 60107, Sl = ce ? Symbol.for("react.strict_mode") : 60108, kl = ce ? Symbol.for("react.profiler") : 60114, xl = ce ? Symbol.for("react.provider") : 60109, Cl = ce ? Symbol.for("react.context") : 60110, ss = ce ? Symbol.for("react.async_mode") : 60111, El = ce ? Symbol.for("react.concurrent_mode") : 60111, _l = ce ? Symbol.for("react.forward_ref") : 60112, Pl = ce ? Symbol.for("react.suspense") : 60113, Wh = ce ? Symbol.for("react.suspense_list") : 60120, Tl = ce ? Symbol.for("react.memo") : 60115, Nl = ce ? Symbol.for("react.lazy") : 60116, Vh = ce ? Symbol.for("react.block") : 60121, Kh = ce ? Symbol.for("react.fundamental") : 60117, Qh = ce ? Symbol.for("react.responder") : 60118, Yh = ce ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case is:
        switch (e = e.type, e) {
          case ss:
          case El:
          case wl:
          case kl:
          case Sl:
          case Pl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Cl:
              case _l:
              case Nl:
              case Tl:
              case xl:
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
  return He(e) === El;
}
B.AsyncMode = ss;
B.ConcurrentMode = El;
B.ContextConsumer = Cl;
B.ContextProvider = xl;
B.Element = is;
B.ForwardRef = _l;
B.Fragment = wl;
B.Lazy = Nl;
B.Memo = Tl;
B.Portal = us;
B.Profiler = kl;
B.StrictMode = Sl;
B.Suspense = Pl;
B.isAsyncMode = function(e) {
  return kd(e) || He(e) === ss;
};
B.isConcurrentMode = kd;
B.isContextConsumer = function(e) {
  return He(e) === Cl;
};
B.isContextProvider = function(e) {
  return He(e) === xl;
};
B.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === is;
};
B.isForwardRef = function(e) {
  return He(e) === _l;
};
B.isFragment = function(e) {
  return He(e) === wl;
};
B.isLazy = function(e) {
  return He(e) === Nl;
};
B.isMemo = function(e) {
  return He(e) === Tl;
};
B.isPortal = function(e) {
  return He(e) === us;
};
B.isProfiler = function(e) {
  return He(e) === kl;
};
B.isStrictMode = function(e) {
  return He(e) === Sl;
};
B.isSuspense = function(e) {
  return He(e) === Pl;
};
B.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === wl || e === El || e === kl || e === Sl || e === Pl || e === Wh || typeof e == "object" && e !== null && (e.$$typeof === Nl || e.$$typeof === Tl || e.$$typeof === xl || e.$$typeof === Cl || e.$$typeof === _l || e.$$typeof === Kh || e.$$typeof === Qh || e.$$typeof === Yh || e.$$typeof === Vh);
};
B.typeOf = He;
Sd.exports = B;
var Gh = Sd.exports, xd = Gh, Xh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Zh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cd = {};
Cd[xd.ForwardRef] = Xh;
Cd[xd.Memo] = Zh;
var Jh = !0;
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
  Jh === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
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
function qh(e) {
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
var bh = {
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
}, ey = !1, ty = /[A-Z]|^ms/g, ny = /_EMO_([^_]+?)_([^]*?)_EMO_/g, _d = function(t) {
  return t.charCodeAt(1) === 45;
}, La = function(t) {
  return t != null && typeof t != "boolean";
}, ci = /* @__PURE__ */ vd(function(e) {
  return _d(e) ? e : e.replace(ty, "-$&").toLowerCase();
}), $a = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ny, function(r, o, l) {
          return st = {
            name: o,
            styles: l,
            next: st
          }, o;
        });
  }
  return bh[t] !== 1 && !_d(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ry = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ir(e, t, n) {
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
      var l = n;
      if (l.styles !== void 0) {
        var i = l.next;
        if (i !== void 0)
          for (; i !== void 0; )
            st = {
              name: i.name,
              styles: i.styles,
              next: st
            }, i = i.next;
        var u = l.styles + ";";
        return u;
      }
      return oy(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, Ir(e, t, a);
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
function oy(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Ir(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += l + "{" + t[u] + "}" : La(u) && (r += ci(l) + ":" + $a(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && ey)
          throw new Error(ry);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            La(i[s]) && (r += ci(l) + ":" + $a(l, i[s]) + ";");
        else {
          var a = Ir(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += ci(l) + ":" + a + ";";
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
var Ia = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Rl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  st = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += Ir(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Ir(n, t, e[u]), r) {
      var s = l;
      o += s[u];
    }
  Ia.lastIndex = 0;
  for (var a = "", h; (h = Ia.exec(o)) !== null; )
    a += "-" + h[1];
  var m = qh(o) + a;
  return {
    name: m,
    styles: o,
    next: st
  };
}
var ly = function(t) {
  return t();
}, Pd = pi["useInsertionEffect"] ? pi["useInsertionEffect"] : !1, Td = Pd || ly, Aa = Pd || O.useLayoutEffect, iy = !1, Nd = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Hh({
    key: "css"
  }) : null
);
Nd.Provider;
var fs = function(t) {
  return /* @__PURE__ */ O.forwardRef(function(n, r) {
    var o = O.useContext(Nd);
    return t(n, o, r);
  });
}, Br = /* @__PURE__ */ O.createContext({}), ds = {}.hasOwnProperty, su = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uy = function(t, n) {
  var r = {};
  for (var o in n)
    ds.call(n, o) && (r[o] = n[o]);
  return r[su] = t, r;
}, sy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Td(function() {
    return cs(n, r, o);
  }), null;
}, ay = /* @__PURE__ */ fs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[su], l = [r], i = "";
  typeof e.className == "string" ? i = Ed(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = Rl(l, void 0, O.useContext(Br));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ds.call(e, a) && a !== "css" && a !== su && !iy && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(sy, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, s));
}), cy = ay, fi = { exports: {} }, Ma;
function fy() {
  return Ma || (Ma = 1, function(e) {
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
  }(fi)), fi.exports;
}
fy();
var ja = function(t, n) {
  var r = arguments;
  if (n == null || !ds.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = cy, l[1] = uy(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return O.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ja || (ja = {}));
var dy = /* @__PURE__ */ fs(function(e, t) {
  var n = e.styles, r = Rl([n], void 0, O.useContext(Br)), o = O.useRef();
  return Aa(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Aa(function() {
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
}), py = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, my = /* @__PURE__ */ vd(
  function(e) {
    return py.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hy = !1, yy = my, gy = function(t) {
  return t !== "theme";
}, Fa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? yy : gy;
}, Da = function(t, n, r) {
  var o;
  if (n) {
    var l = n.shouldForwardProp;
    o = t.__emotion_forwardProp && l ? function(i) {
      return t.__emotion_forwardProp(i) && l(i);
    } : l;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, vy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return as(n, r, o), Td(function() {
    return cs(n, r, o);
  }), null;
}, wy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var u = Da(t, n, r), s = u || Fa(o), a = !s("as");
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
    var y = fs(function(_, f, c) {
      var d = a && _.as || o, w = "", x = [], C = _;
      if (_.theme == null) {
        C = {};
        for (var k in _)
          C[k] = _[k];
        C.theme = O.useContext(Br);
      }
      typeof _.className == "string" ? w = Ed(f.registered, x, _.className) : _.className != null && (w = _.className + " ");
      var E = Rl(m.concat(x), f.registered, C);
      w += f.key + "-" + E.name, i !== void 0 && (w += " " + i);
      var M = a && u === void 0 ? Fa(d) : s, R = {};
      for (var H in _)
        a && H === "as" || M(H) && (R[H] = _[H]);
      return R.className = w, c && (R.ref = c), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(vy, {
        cache: f,
        serialized: E,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ O.createElement(d, R));
    });
    return y.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && hy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(_, f) {
      var c = e(_, he({}, n, f, {
        shouldForwardProp: Da(y, f, !0)
      }));
      return c.apply(void 0, m);
    }, y;
  };
}, Sy = [
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
], Ua = wy.bind(null);
Sy.forEach(function(e) {
  Ua[e] = Ua(e);
});
function ky(e) {
  return e == null || Object.keys(e).length === 0;
}
function xy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ I(dy, {
    styles: typeof t == "function" ? (o) => t(ky(o) ? n : o) : t
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
function Cy(e) {
  return Ba[0] = e, Rl(Ba);
}
function an(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Rd(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !an(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Rd(e[n]);
  }), t;
}
function Jo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? he({}, e) : e;
  return an(e) && an(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) ? r[o] = t[o] : an(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && an(e[o]) ? r[o] = Jo(e[o], t[o], n) : n.clone ? r[o] = an(t[o]) ? Rd(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ey = ["values", "unit", "step"], _y = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => he({}, n, {
    [r.key]: r.val
  }), {});
};
function Py(e) {
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
  } = e, o = hl(e, Ey), l = _y(t), i = Object.keys(l);
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
  return he({
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
const Ty = {
  borderRadius: 4
}, Ny = Ty;
function mr(e, t) {
  return t ? Jo(e, t, {
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
function xt(e, t, n) {
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
function Ry(e = {}) {
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
    throw new Error(dh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ol(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function qo(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Ol(e, n) || r, t && (o = t(o, r, e)), o;
}
function ne(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, l = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Ol(s, r) || {};
    return xt(i, u, (m) => {
      let p = qo(a, o, m);
      return m === p && typeof m == "string" && (p = qo(a, o, `${t}${m === "default" ? "" : Od(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function Oy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const zy = {
  m: "margin",
  p: "padding"
}, Ly = {
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
}, $y = Oy((e) => {
  if (e.length > 2)
    if (Va[e])
      e = Va[e];
    else
      return [e];
  const [t, n] = e.split(""), r = zy[t], o = Ly[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), ms = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ms, ...hs];
function Hr(e, t, n, r) {
  var o;
  const l = (o = Ol(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function zd(e) {
  return Hr(e, "spacing", 8);
}
function Wr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Iy(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Wr(t, n), r), {});
}
function Ay(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = $y(n), l = Iy(o, r), i = e[n];
  return xt(e, i, l);
}
function Ld(e, t) {
  const n = zd(e.theme);
  return Object.keys(e).map((r) => Ay(e, t, r, n)).reduce(mr, {});
}
function q(e) {
  return Ld(e, ms);
}
q.propTypes = {};
q.filterProps = ms;
function b(e) {
  return Ld(e, hs);
}
b.propTypes = {};
b.filterProps = hs;
function My(e = 8) {
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
function zl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? mr(o, t[l](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Ke(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ze(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const jy = Ze("border", Ke), Fy = Ze("borderTop", Ke), Dy = Ze("borderRight", Ke), Uy = Ze("borderBottom", Ke), By = Ze("borderLeft", Ke), Hy = Ze("borderColor"), Wy = Ze("borderTopColor"), Vy = Ze("borderRightColor"), Ky = Ze("borderBottomColor"), Qy = Ze("borderLeftColor"), Yy = Ze("outline", Ke), Gy = Ze("outlineColor"), Ll = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Hr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Wr(t, r)
    });
    return xt(e, e.borderRadius, n);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ["borderRadius"];
zl(jy, Fy, Dy, Uy, By, Hy, Wy, Vy, Ky, Qy, Ll, Yy, Gy);
const $l = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      gap: Wr(t, r)
    });
    return xt(e, e.gap, n);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ["gap"];
const Il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Wr(t, r)
    });
    return xt(e, e.columnGap, n);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ["columnGap"];
const Al = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Hr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Wr(t, r)
    });
    return xt(e, e.rowGap, n);
  }
  return null;
};
Al.propTypes = {};
Al.filterProps = ["rowGap"];
const Xy = ne({
  prop: "gridColumn"
}), Zy = ne({
  prop: "gridRow"
}), Jy = ne({
  prop: "gridAutoFlow"
}), qy = ne({
  prop: "gridAutoColumns"
}), by = ne({
  prop: "gridAutoRows"
}), eg = ne({
  prop: "gridTemplateColumns"
}), tg = ne({
  prop: "gridTemplateRows"
}), ng = ne({
  prop: "gridTemplateAreas"
}), rg = ne({
  prop: "gridArea"
});
zl($l, Il, Al, Xy, Zy, Jy, qy, by, eg, tg, ng, rg);
function Rn(e, t) {
  return t === "grey" ? t : e;
}
const og = ne({
  prop: "color",
  themeKey: "palette",
  transform: Rn
}), lg = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Rn
}), ig = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Rn
});
zl(og, lg, ig);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ug = ne({
  prop: "width",
  transform: Ae
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
        maxWidth: Ae(n)
      };
    };
    return xt(e, e.maxWidth, t);
  }
  return null;
};
ys.filterProps = ["maxWidth"];
const sg = ne({
  prop: "minWidth",
  transform: Ae
}), ag = ne({
  prop: "height",
  transform: Ae
}), cg = ne({
  prop: "maxHeight",
  transform: Ae
}), fg = ne({
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
const dg = ne({
  prop: "boxSizing"
});
zl(ug, ys, sg, ag, cg, fg, dg);
const pg = {
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
    style: Ll
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Rn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Rn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Rn
  },
  // spacing
  p: {
    style: b
  },
  pt: {
    style: b
  },
  pr: {
    style: b
  },
  pb: {
    style: b
  },
  pl: {
    style: b
  },
  px: {
    style: b
  },
  py: {
    style: b
  },
  padding: {
    style: b
  },
  paddingTop: {
    style: b
  },
  paddingRight: {
    style: b
  },
  paddingBottom: {
    style: b
  },
  paddingLeft: {
    style: b
  },
  paddingX: {
    style: b
  },
  paddingY: {
    style: b
  },
  paddingInline: {
    style: b
  },
  paddingInlineStart: {
    style: b
  },
  paddingInlineEnd: {
    style: b
  },
  paddingBlock: {
    style: b
  },
  paddingBlockStart: {
    style: b
  },
  paddingBlockEnd: {
    style: b
  },
  m: {
    style: q
  },
  mt: {
    style: q
  },
  mr: {
    style: q
  },
  mb: {
    style: q
  },
  ml: {
    style: q
  },
  mx: {
    style: q
  },
  my: {
    style: q
  },
  margin: {
    style: q
  },
  marginTop: {
    style: q
  },
  marginRight: {
    style: q
  },
  marginBottom: {
    style: q
  },
  marginLeft: {
    style: q
  },
  marginX: {
    style: q
  },
  marginY: {
    style: q
  },
  marginInline: {
    style: q
  },
  marginInlineStart: {
    style: q
  },
  marginInlineEnd: {
    style: q
  },
  marginBlock: {
    style: q
  },
  marginBlockStart: {
    style: q
  },
  marginBlockEnd: {
    style: q
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
    style: $l
  },
  rowGap: {
    style: Al
  },
  columnGap: {
    style: Il
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
    style: ys
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
}, $d = pg;
function mg(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function hg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yg() {
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
    const p = Ol(o, a) || {};
    return m ? m(i) : xt(i, r, (g) => {
      let y = qo(p, h, g);
      return g === y && typeof g == "string" && (y = qo(p, h, `${n}${g === "default" ? "" : Od(g)}`, g)), s === !1 ? y : {
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
      const m = Ry(l.breakpoints), p = Object.keys(m);
      let v = m;
      return Object.keys(h).forEach((g) => {
        const y = hg(h[g], l);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = mr(v, e(g, y, l, u));
            else {
              const _ = xt({
                theme: l
              }, y, (f) => ({
                [g]: f
              }));
              mg(_, y) ? v[g] = t({
                sx: y,
                theme: l,
                nested: !0
              }) : v = mr(v, _);
            }
          else
            v = mr(v, e(g, y, l, u));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Wa(p, v)
      } : Wa(p, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Id = yg();
Id.filterProps = ["sx"];
const gg = Id;
function vg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const wg = ["breakpoints", "palette", "spacing", "shape"];
function Sg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: l = {}
  } = e, i = hl(e, wg), u = Py(n), s = My(o);
  let a = Jo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: he({
      mode: "light"
    }, r),
    spacing: s,
    shape: he({}, Ny, l)
  }, i);
  return a.applyStyles = vg, a = t.reduce((h, m) => Jo(h, m), a), a.unstable_sxConfig = he({}, $d, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return gg({
      sx: m,
      theme: this
    });
  }, a;
}
function kg(e) {
  return Object.keys(e).length === 0;
}
function gs(e = null) {
  const t = O.useContext(Br);
  return !t || kg(t) ? e : t;
}
const xg = Sg();
function Cg(e = xg) {
  return gs(e);
}
function di(e) {
  const t = Cy(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Eg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Cg(n), o = t && r[t] || r;
  let l = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => di(typeof i == "function" ? i(o) : i)) : l = di(l)), /* @__PURE__ */ I(xy, {
    styles: l
  });
}
const _g = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Pg = _g;
let Ka = 0;
function Tg(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Ka += 1, n(`mui-${Ka}`));
  }, [t]), r;
}
const Qa = pi["useId".toString()];
function Ng(e) {
  if (Qa !== void 0) {
    const t = Qa();
    return e ?? t;
  }
  return Tg(e);
}
const Rg = /* @__PURE__ */ O.createContext(null), Ad = Rg;
function Md() {
  return O.useContext(Ad);
}
const Og = typeof Symbol == "function" && Symbol.for, zg = Og ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Lg(e, t) {
  return typeof t == "function" ? t(e) : he({}, e, t);
}
function $g(e) {
  const {
    children: t,
    theme: n
  } = e, r = Md(), o = O.useMemo(() => {
    const l = r === null ? n : Lg(r, n);
    return l != null && (l[zg] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ I(Ad.Provider, {
    value: o,
    children: t
  });
}
const Ig = ["value"], Ag = /* @__PURE__ */ O.createContext();
function Mg(e) {
  let {
    value: t
  } = e, n = hl(e, Ig);
  return /* @__PURE__ */ I(Ag.Provider, he({
    value: t ?? !0
  }, n));
}
const jg = /* @__PURE__ */ O.createContext(void 0);
function Fg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ I(jg.Provider, {
    value: e,
    children: t
  });
}
function Dg(e) {
  const t = gs(), n = Ng() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Pg(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ I(Eg, {
    styles: o
  }) : null;
}
const Ya = {};
function Ga(e, t, n, r = !1) {
  return O.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(o), i = e ? he({}, t, {
        [e]: l
      }) : l;
      return r ? () => i : i;
    }
    return e ? he({}, t, {
      [e]: n
    }) : he({}, t, n);
  }, [e, t, n, r]);
}
function Ug(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = gs(Ya), l = Md() || Ya, i = Ga(r, o, n), u = Ga(r, l, n, !0), s = i.direction === "rtl", a = Dg(i);
  return /* @__PURE__ */ I($g, {
    theme: u,
    children: /* @__PURE__ */ I(Br.Provider, {
      value: i,
      children: /* @__PURE__ */ I(Mg, {
        value: s,
        children: /* @__PURE__ */ qe(Fg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Bg = ["theme"];
function bn(e) {
  let {
    theme: t
  } = e, n = hl(e, Bg);
  const r = t[Na];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = he({}, r, {
    vars: null
  }) : t && !t.vars && (o = he({}, t, {
    vars: null
  }))), /* @__PURE__ */ I(Ug, he({}, n, {
    themeId: r ? Na : void 0,
    theme: o
  }));
}
const er = 1200, sn = 1200;
function Xa(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.onload = () => t(r), r.onerror = () => n(new Error(`Could not load ${e}`)), r.src = e;
  });
}
function Hg(e) {
  const n = 64 / Math.max(e.naturalWidth, e.naturalHeight), r = Math.max(1, Math.round(e.naturalWidth * n)), o = Math.max(1, Math.round(e.naturalHeight * n)), l = document.createElement("canvas");
  l.width = r, l.height = o;
  const i = l.getContext("2d");
  if (!i)
    return !0;
  try {
    i.drawImage(e, 0, 0, r, o);
    const u = i.getImageData(0, 0, r, o).data;
    let s = 0;
    for (let a = 3; a < u.length; a += 4)
      u[a] < 250 && s++;
    return s / (r * o) >= 0.01;
  } catch {
    return !0;
  }
}
function Wg({
  cutoutUrl: e,
  cutoutAssetId: t,
  cutoutFingerprint: n,
  backgrounds: r,
  initial: o,
  onSave: l,
  buildAssetUrl: i
}) {
  var Y;
  const u = O.useRef(null), [s, a] = O.useState(null), [h, m] = O.useState({}), [p, v] = O.useState(
    (o == null ? void 0 : o.backgroundId) ?? ((Y = r[0]) == null ? void 0 : Y.id) ?? null
  ), [g, y] = O.useState(!1), [_, f] = O.useState(null), [c, d] = O.useState(null), [w, x] = O.useState(!1), [C, k] = O.useState(!1), E = O.useRef(null), M = O.useCallback(
    (N) => ({
      cx: N.anchorX,
      by: N.anchorBottom,
      h: N.headshotHeight,
      flipped: !1,
      cutoutAssetId: t,
      cutoutFingerprint: n
    }),
    [t, n]
  ), [R, H] = O.useState(() => o ? o.layout : r[0] ? M(r[0]) : { cx: 0.5, by: 1, h: 0.85, flipped: !1, cutoutAssetId: t, cutoutFingerprint: n }), fe = r.find((N) => N.id === p) ?? null, Kt = !!o && !C && !!o.layout.cutoutFingerprint && o.layout.cutoutFingerprint !== n;
  O.useEffect(() => {
    let N = !1;
    return (async () => {
      try {
        const [j, ...V] = await Promise.all([
          Xa(e),
          ...r.map((ue) => Xa(ue.url))
        ]);
        if (N)
          return;
        a(j), x(!Hg(j));
        const $e = {};
        r.forEach((ue, Pe) => $e[ue.id] = V[Pe]), m($e);
      } catch (j) {
        N || f(j.message);
      }
    })(), () => {
      N = !0;
    };
  }, [e, r]), O.useEffect(() => {
    const N = u.current;
    if (!N || !s || !fe)
      return;
    const j = h[fe.id];
    if (!j)
      return;
    const V = N.getContext("2d");
    if (!V)
      return;
    V.clearRect(0, 0, er, sn);
    const $e = Math.max(er / j.naturalWidth, sn / j.naturalHeight), ue = j.naturalWidth * $e, Pe = j.naturalHeight * $e;
    V.drawImage(j, (er - ue) / 2, (sn - Pe) / 2, ue, Pe);
    const jl = sn * R.h, vs = jl * (s.naturalWidth / s.naturalHeight);
    V.save(), V.translate(R.cx * er, R.by * sn), R.flipped && V.scale(-1, 1), V.drawImage(s, -vs / 2, -jl, vs, jl), V.restore();
  }, [s, h, fe, R]);
  const Vr = (N) => {
    v(N.id), H(M(N)), k(!0);
  }, Ml = (N) => {
    N.currentTarget.setPointerCapture(N.pointerId), E.current = { startX: N.clientX, startY: N.clientY, cx: R.cx, by: R.by };
  }, Hn = (N) => {
    const j = E.current;
    if (!j)
      return;
    const V = N.currentTarget.getBoundingClientRect(), $e = (N.clientX - j.startX) / V.width, ue = (N.clientY - j.startY) / V.height;
    H((Pe) => ({ ...Pe, cx: j.cx + $e, by: j.by + ue }));
  }, Wn = () => {
    E.current = null;
  }, P = (N) => {
    H((j) => {
      const V = j.h * (N.deltaY < 0 ? 1.03 : 0.97);
      return { ...j, h: Math.min(1.6, Math.max(0.1, V)) };
    });
  }, z = () => fe && H(M(fe)), L = O.useCallback(async () => {
    const N = u.current;
    if (!(!N || !fe)) {
      y(!0), f(null), d(null);
      try {
        const j = await new Promise(
          ($e, ue) => N.toBlob(
            (Pe) => Pe ? $e(Pe) : ue(new Error("Canvas export failed")),
            "image/jpeg",
            0.92
          )
        ), V = await l(j, { ...R, cutoutAssetId: t, cutoutFingerprint: n }, fe);
        d(V);
      } catch (j) {
        f(j.message);
      } finally {
        y(!1);
      }
    }
  }, [R, l, fe, t, n]);
  return /* @__PURE__ */ qe("div", { style: { display: "grid", gridTemplateColumns: "minmax(0, 1fr) 260px", gap: 16 }, children: [
    /* @__PURE__ */ qe("div", { children: [
      w && /* @__PURE__ */ I(
        "div",
        {
          role: "alert",
          style: {
            background: "#fdecea",
            border: "1px solid #f1a9a0",
            borderRadius: 6,
            padding: "8px 12px",
            marginBottom: 8,
            fontSize: 13
          },
          children: "This cutout has no transparent area. The headshot will show as a box. Re-run background removal."
        }
      ),
      Kt && /* @__PURE__ */ qe(
        "div",
        {
          style: {
            background: "#fff4e5",
            border: "1px solid #f0c36d",
            borderRadius: 6,
            padding: "8px 12px",
            marginBottom: 8,
            fontSize: 13,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ I("span", { children: "The cutout has changed since this was saved." }),
            /* @__PURE__ */ I("button", { onClick: () => k(!0), children: "Keep layout" })
          ]
        }
      ),
      /* @__PURE__ */ I(
        "canvas",
        {
          ref: u,
          width: er,
          height: sn,
          style: {
            width: "100%",
            aspectRatio: "1 / 1",
            touchAction: "none",
            cursor: "grab",
            borderRadius: 8
          },
          onPointerDown: Ml,
          onPointerMove: Hn,
          onPointerUp: Wn,
          onWheel: P
        }
      )
    ] }),
    /* @__PURE__ */ qe("aside", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
      /* @__PURE__ */ qe("div", { children: [
        /* @__PURE__ */ I("strong", { children: "Background" }),
        /* @__PURE__ */ I("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }, children: r.map((N) => /* @__PURE__ */ qe(
          "button",
          {
            onClick: () => Vr(N),
            style: {
              padding: 0,
              border: N.id === p ? "2px solid #0a6cff" : "2px solid transparent",
              borderRadius: 6,
              background: "none",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ I(
                "img",
                {
                  src: N.url,
                  alt: N.name,
                  style: { width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 4 }
                }
              ),
              /* @__PURE__ */ I("div", { style: { fontSize: 12, padding: "4px 0" }, children: N.name })
            ]
          },
          N.id
        )) })
      ] }),
      /* @__PURE__ */ qe("label", { children: [
        "Size",
        /* @__PURE__ */ I(
          "input",
          {
            type: "range",
            min: 0.2,
            max: 1.6,
            step: 0.01,
            value: R.h,
            onChange: (N) => H((j) => ({ ...j, h: Number(N.target.value) })),
            style: { width: "100%" }
          }
        )
      ] }),
      /* @__PURE__ */ qe("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ I("button", { onClick: () => H((N) => ({ ...N, flipped: !N.flipped })), children: "Flip" }),
        /* @__PURE__ */ I("button", { onClick: z, children: "Reset" })
      ] }),
      /* @__PURE__ */ I(
        "button",
        {
          onClick: L,
          disabled: g || !s || w,
          style: { padding: "10px 14px" },
          children: g ? "Saving..." : "Save as new asset"
        }
      ),
      c !== null && /* @__PURE__ */ qe("div", { role: "status", style: { color: "#1a7f37", fontSize: 13 }, children: [
        "Saved as a new asset.",
        " ",
        i ? /* @__PURE__ */ I("a", { href: i(c), children: "Open it" }) : `Asset id ${c}.`
      ] }),
      _ && /* @__PURE__ */ I("div", { role: "alert", style: { color: "#b00020", fontSize: 13 }, children: _ })
    ] })
  ] });
}
function Vg(e = /* @__PURE__ */ new Date()) {
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
function Kg(e) {
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
function Qg(e) {
  if (!e)
    return null;
  const t = Object.entries(e).find(
    ([l]) => l.toLowerCase() === "location"
  ), r = String((t == null ? void 0 : t[1]) ?? "").match(/\/api\/entities\/(\d+)/i);
  if (!r)
    return null;
  const o = Number(r[1]);
  return Number.isSafeInteger(o) && o > 0 ? o : null;
}
async function Yg(e) {
  var o, l, i, u, s, a, h, m, p, v, g, y, _, f, c, d, w, x, C, k;
  if (!((o = e.raw) != null && o.getAsync))
    throw new Error("Content Hub client is not available");
  const t = encodeURIComponent(
    "Definition.Name=='EPAM.ComposerBackground' AND isActive==true"
  ), n = await e.raw.getAsync(`/api/entities/query?query=${t}&take=20`);
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error("Failed to load composer backgrounds");
  const r = [];
  for (const E of n.content.items ?? []) {
    const M = (i = (l = E.relations) == null ? void 0 : l.EPAMComposerBackgroundToAsset) == null ? void 0 : i.href;
    if (!M)
      continue;
    const R = await e.raw.getAsync(M);
    if (!R.isSuccessStatusCode)
      continue;
    const H = ((s = (u = R.content) == null ? void 0 : u.items) == null ? void 0 : s[0]) ?? ((a = R.content) == null ? void 0 : a.parent);
    if (!H)
      continue;
    const fe = ((p = (m = (h = H.renditions) == null ? void 0 : h.preview) == null ? void 0 : m[0]) == null ? void 0 : p.href) ?? ((y = (g = (v = H.renditions) == null ? void 0 : v.downloadOriginal) == null ? void 0 : g[0]) == null ? void 0 : y.href) ?? ((c = (f = (_ = H.renditions) == null ? void 0 : _.original) == null ? void 0 : f[0]) == null ? void 0 : c.href);
    fe && r.push({
      id: E.id,
      name: ((d = E.properties) == null ? void 0 : d.backgroundName) ?? "Background",
      url: fe,
      anchorX: ((w = E.properties) == null ? void 0 : w.defaultAnchorX) ?? 0.5,
      anchorBottom: ((x = E.properties) == null ? void 0 : x.defaultAnchorBottom) ?? 1,
      headshotHeight: ((C = E.properties) == null ? void 0 : C.defaultHeadshotHeight) ?? 0.85,
      sortOrder: ((k = E.properties) == null ? void 0 : k.sortOrder) ?? 100
    });
  }
  return r.sort((E, M) => E.sortOrder - M.sortOrder);
}
function Gg(e) {
  let t = e;
  if (typeof t == "string")
    try {
      t = JSON.parse(t);
    } catch {
      return null;
    }
  if (!t || typeof t != "object")
    return null;
  const n = t, r = Number(n.backgroundId), o = Number(n.cutoutAssetId), l = Number(n.cx), i = Number(n.by), u = Number(n.h);
  return ![r, o, l, i, u].every((s) => Number.isFinite(s)) || r <= 0 ? null : {
    backgroundId: r,
    layout: {
      cx: l,
      by: i,
      h: u,
      flipped: !!n.flipped,
      cutoutAssetId: o,
      cutoutFingerprint: String(n.cutoutFingerprint ?? "")
    }
  };
}
async function Xg(e, t) {
  var o;
  if (!((o = e.raw) != null && o.getAsync))
    return null;
  const n = await e.raw.getAsync(
    `/api/entities/${t}?members=properties`
  );
  if (!n.isSuccessStatusCode || !n.content)
    return null;
  const r = n.content.properties ?? {};
  return Gg(r.CompositionLayout ?? r.compositionLayout);
}
async function Zg(e, t, n) {
  var u;
  if (!((u = e.uploads) != null && u.uploadAsync))
    throw new Error("The Content Hub upload client is not available in this component context.");
  const r = await t.arrayBuffer(), o = {
    source: {
      name: n,
      getReadableSourceAsync: () => Promise.resolve(r)
    },
    configurationName: "AssetUploadConfiguration",
    actionName: "NewAsset",
    actionParameters: {}
  }, l = await e.uploads.uploadAsync(o);
  if ((l == null ? void 0 : l.isSuccessStatusCode) === !1)
    throw new Error(
      `Content Hub could not create the new asset (HTTP ${l.statusCode ?? "unknown"}).`
    );
  const i = Kg(l == null ? void 0 : l.content) || Qg(l == null ? void 0 : l.responseHeaders);
  if (!i)
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  return i;
}
async function Jg(e, t) {
  var i;
  const r = `${t.fileName.replace(/\.[^.]+$/, "") || "composed"}-${Vg()}.jpg`, o = await Zg(e, t.blob, r);
  if (!((i = e.raw) != null && i.putAsync))
    throw new Error("Content Hub client cannot update entity properties.");
  const l = await e.raw.putAsync(`/api/entities/${o}`, {
    entitydefinition: { href: "/api/entitydefinitions/M.Asset" },
    properties: {
      AssetVariant: "composed",
      CompositionLayout: {
        ...t.layout,
        backgroundId: t.background.id
      }
    }
  });
  return l.isSuccessStatusCode || console.warn(
    `[CHImageComposer] Could not set properties on asset ${o}: ${l.statusCode}`
  ), o;
}
async function qg(e, t) {
  var s, a, h, m, p, v, g, y, _, f, c, d, w, x;
  if (!((s = e.raw) != null && s.getAsync))
    throw new Error("Content Hub client is not available");
  const n = await e.raw.getAsync(
    `/api/entities/${t}?members=renditions,properties`
  );
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error(`Could not load cutout asset ${t}: ${n.statusCode}`);
  const r = n.content, o = ((m = (h = (a = r.renditions) == null ? void 0 : a.downloadOriginal) == null ? void 0 : h[0]) == null ? void 0 : m.href) ?? ((g = (v = (p = r.renditions) == null ? void 0 : p.original) == null ? void 0 : v[0]) == null ? void 0 : g.href) ?? ((f = (_ = (y = r.renditions) == null ? void 0 : y.preview) == null ? void 0 : _[0]) == null ? void 0 : f.href);
  if (!o)
    throw new Error("No original rendition found on the cutout asset");
  const l = ((c = r.properties) == null ? void 0 : c.AssetVariant) ?? ((d = r.properties) == null ? void 0 : d.assetVariant), i = Array.isArray(l) ? l[0] ?? null : l ?? null, u = String(
    ((w = r.properties) == null ? void 0 : w.modifiedOn) ?? ((x = r.properties) == null ? void 0 : x["Content-Md5"]) ?? r.id ?? ""
  );
  return { url: o, assetId: t, fingerprint: u, variant: i };
}
function _o(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    try {
      return _o(JSON.parse(e));
    } catch {
      return null;
    }
  return typeof e == "object" && !Array.isArray(e) ? e : null;
}
function Tt(e, t) {
  if (!e)
    return null;
  const n = Object.entries(e).find(([o]) => o.toLowerCase() === t.toLowerCase()), r = Number(n == null ? void 0 : n[1]);
  return Number.isSafeInteger(r) && r > 0 ? r : null;
}
function Za(e) {
  try {
    return Tt({ [e]: new URLSearchParams(window.location.search).get(e) ?? "" }, e);
  } catch {
    return null;
  }
}
function bg(e) {
  var t;
  return Tt(
    { id: ((t = e == null ? void 0 : e.systemProperties) == null ? void 0 : t.id) ?? (e == null ? void 0 : e.id) },
    "id"
  );
}
function ev(e) {
  const t = _o(e == null ? void 0 : e.config), n = _o(e == null ? void 0 : e.options), r = Tt(t, "cutoutAssetId") ?? Tt(n, "cutoutAssetId") ?? Za("cutoutAssetId") ?? Tt(n, "entityId") ?? Tt(_o(e), "entityId") ?? bg(e == null ? void 0 : e.entity), o = Tt(t, "composedAssetId") ?? Tt(n, "composedAssetId") ?? Za("composedAssetId");
  return { cutoutAssetId: r, composedAssetId: o };
}
function tv(e) {
  const t = fd(e);
  return {
    async render(n) {
      const { cutoutAssetId: r, composedAssetId: o } = ev(n);
      if (!r) {
        t.render(
          /* @__PURE__ */ I(bn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "No cutout asset was supplied." }) })
        );
        return;
      }
      try {
        const [l, i, u] = await Promise.all([
          Yg(n.client),
          qg(n.client, r),
          o ? Xg(n.client, o) : Promise.resolve(null)
        ]);
        if (i.variant !== "cutout") {
          t.render(
            /* @__PURE__ */ I(bn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "This asset is not a cutout. Run background removal first." }) })
          );
          return;
        }
        if (l.length === 0) {
          t.render(
            /* @__PURE__ */ I(bn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "No active composer backgrounds are set up yet." }) })
          );
          return;
        }
        t.render(
          /* @__PURE__ */ I(bn, { theme: n.theme, children: /* @__PURE__ */ I(
            Wg,
            {
              cutoutUrl: i.url,
              cutoutAssetId: i.assetId,
              cutoutFingerprint: i.fingerprint,
              backgrounds: l,
              initial: u ?? void 0,
              buildAssetUrl: (s) => `/en-us/asset/${s}`,
              onSave: (s, a, h) => Jg(n.client, {
                blob: s,
                fileName: `composed-${r}.jpg`,
                cutoutAssetId: r,
                background: h,
                layout: a
              })
            }
          ) })
        );
      } catch (l) {
        t.render(
          /* @__PURE__ */ I(bn, { theme: n.theme, children: /* @__PURE__ */ qe("div", { style: { color: "#b00020" }, children: [
            "Failed to load composer: ",
            l.message
          ] }) })
        );
      }
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  tv as default
};
