function Id(e, t) {
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
function Md(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ga = { exports: {} }, Jo = {}, Xa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir = Symbol.for("react.element"), Ad = Symbol.for("react.portal"), Fd = Symbol.for("react.fragment"), Dd = Symbol.for("react.strict_mode"), jd = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"), Bd = Symbol.for("react.context"), Hd = Symbol.for("react.forward_ref"), Wd = Symbol.for("react.suspense"), Vd = Symbol.for("react.memo"), Kd = Symbol.for("react.lazy"), gs = Symbol.iterator;
function Qd(e) {
  return e === null || typeof e != "object" ? null : (e = gs && e[gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Za = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ja = Object.assign, qa = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
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
function ba() {
}
ba.prototype = Fn.prototype;
function uu(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
}
var su = uu.prototype = new ba();
su.constructor = uu;
Ja(su, Fn.prototype);
su.isPureReactComponent = !0;
var vs = Array.isArray, ec = Object.prototype.hasOwnProperty, au = { current: null }, tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      ec.call(t, r) && !tc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Ir, type: e, key: l, ref: i, props: o, _owner: au.current };
}
function Yd(e, t) {
  return { $$typeof: Ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ir;
}
function Gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ws = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Gd("" + e.key) : t.toString(36);
}
function so(e, t, n, r, o) {
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
          case Ir:
          case Ad:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Al(i, 0) : r, vs(o) ? (n = "", e != null && (n = e.replace(ws, "$&/") + "/"), so(o, t, n, "", function(a) {
      return a;
    })) : o != null && (cu(o) && (o = Yd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(ws, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", vs(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + Al(l, u);
      i += so(l, t, n, s, o);
    }
  else if (s = Qd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, s = r + Al(l, u++), i += so(l, t, n, s, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Vr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return so(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function Xd(e) {
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
var Ee = { current: null }, ao = { transition: null }, Zd = { ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: ao, ReactCurrentOwner: au };
function rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Vr, forEach: function(e, t, n) {
  Vr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Vr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!cu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = Fn;
$.Fragment = Fd;
$.Profiler = jd;
$.PureComponent = uu;
$.StrictMode = Dd;
$.Suspense = Wd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd;
$.act = rc;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ja({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = au.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ec.call(t, s) && !tc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Ir, type: e.type, key: o, ref: l, props: r, _owner: i };
};
$.createContext = function(e) {
  return e = { $$typeof: Bd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ud, _context: e }, e.Consumer = e;
};
$.createElement = nc;
$.createFactory = function(e) {
  var t = nc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Hd, render: e };
};
$.isValidElement = cu;
$.lazy = function(e) {
  return { $$typeof: Kd, _payload: { _status: -1, _result: e }, _init: Xd };
};
$.memo = function(e, t) {
  return { $$typeof: Vd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = ao.transition;
  ao.transition = {};
  try {
    e();
  } finally {
    ao.transition = t;
  }
};
$.unstable_act = rc;
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
Xa.exports = $;
var z = Xa.exports;
const Jd = /* @__PURE__ */ Md(z), fi = /* @__PURE__ */ Id({
  __proto__: null,
  default: Jd
}, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd = z, bd = Symbol.for("react.element"), ep = Symbol.for("react.fragment"), tp = Object.prototype.hasOwnProperty, np = qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    tp.call(t, r) && !rp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: bd, type: e, key: l, ref: i, props: o, _owner: np.current };
}
Jo.Fragment = ep;
Jo.jsx = oc;
Jo.jsxs = oc;
Ga.exports = Jo;
var lc = Ga.exports;
const I = lc.jsx, qe = lc.jsxs;
var ic = { exports: {} }, Ue = {}, uc = { exports: {} }, sc = {};
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
    var L = P.length;
    P.push(O);
    e:
      for (; 0 < L; ) {
        var Y = L - 1 >>> 1, N = P[Y];
        if (0 < o(N, O))
          P[Y] = O, P[L] = N, L = Y;
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
    var O = P[0], L = P.pop();
    if (L !== O) {
      P[0] = L;
      e:
        for (var Y = 0, N = P.length, F = N >>> 1; Y < F; ) {
          var V = 2 * (Y + 1) - 1, $e = P[V], ue = V + 1, Pe = P[ue];
          if (0 > o($e, L))
            ue < N && 0 > o(Pe, $e) ? (P[Y] = Pe, P[ue] = L, Y = ue) : (P[Y] = $e, P[V] = L, Y = V);
          else if (ue < N && 0 > o(Pe, L))
            P[Y] = Pe, P[ue] = L, Y = ue;
          else
            break e;
        }
    }
    return O;
  }
  function o(P, O) {
    var L = P.sortIndex - O.sortIndex;
    return L !== 0 ? L : P.id - O.id;
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
    if (y = !1, d(P), !g)
      if (n(s) !== null)
        g = !0, Bn(x);
      else {
        var O = n(a);
        O !== null && Hn(w, O.startTime - P);
      }
  }
  function x(P, O) {
    g = !1, y && (y = !1, f(E), E = -1), v = !0;
    var L = p;
    try {
      for (d(O), m = n(s); m !== null && (!(m.expirationTime > O) || P && !H()); ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          m.callback = null, p = m.priorityLevel;
          var N = Y(m.expirationTime <= O);
          O = e.unstable_now(), typeof N == "function" ? m.callback = N : m === n(s) && r(s), d(O);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var F = !0;
      else {
        var V = n(a);
        V !== null && Hn(w, V.startTime - O), F = !1;
      }
      return F;
    } finally {
      m = null, p = L, v = !1;
    }
  }
  var C = !1, k = null, E = -1, A = 5, R = -1;
  function H() {
    return !(e.unstable_now() - R < A);
  }
  function fe() {
    if (k !== null) {
      var P = e.unstable_now();
      R = P;
      var O = !0;
      try {
        O = k(!0, P);
      } finally {
        O ? Vt() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var Vt;
  if (typeof c == "function")
    Vt = function() {
      c(fe);
    };
  else if (typeof MessageChannel < "u") {
    var Wr = new MessageChannel(), Il = Wr.port2;
    Wr.port1.onmessage = fe, Vt = function() {
      Il.postMessage(null);
    };
  } else
    Vt = function() {
      _(fe, 0);
    };
  function Bn(P) {
    k = P, C || (C = !0, Vt());
  }
  function Hn(P, O) {
    E = _(function() {
      P(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Bn(x));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = p;
    }
    var L = p;
    p = O;
    try {
      return P();
    } finally {
      p = L;
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
    var L = p;
    p = P;
    try {
      return O();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(P, O, L) {
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
    return N = L + N, P = { id: h++, callback: O, priorityLevel: P, startTime: L, expirationTime: N, sortIndex: -1 }, L > Y ? (P.sortIndex = L, t(a, P), n(s) === null && P === n(a) && (y ? (f(E), E = -1) : y = !0, Hn(w, L - Y))) : (P.sortIndex = N, t(s, P), g || v || (g = !0, Bn(x))), P;
  }, e.unstable_shouldYield = H, e.unstable_wrapCallback = function(P) {
    var O = p;
    return function() {
      var L = p;
      p = O;
      try {
        return P.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(sc);
uc.exports = sc;
var op = uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lp = z, je = op;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ac = /* @__PURE__ */ new Set(), mr = {};
function rn(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (mr[e] = t, e = 0; e < t.length; e++)
    ac.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), di = Object.prototype.hasOwnProperty, ip = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ss = {}, ks = {};
function up(e) {
  return di.call(ks, e) ? !0 : di.call(Ss, e) ? !1 : ip.test(e) ? ks[e] = !0 : (Ss[e] = !0, !1);
}
function sp(e, t, n, r) {
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
function ap(e, t, n, r) {
  if (t === null || typeof t > "u" || sp(e, t, n, r))
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
var fu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    fu,
    du
  );
  ye[t] = new _e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(fu, du);
  ye[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(fu, du);
  ye[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pu(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ap(t, n, o, r) && (n = null), r || o === null ? up(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kr = Symbol.for("react.element"), an = Symbol.for("react.portal"), cn = Symbol.for("react.fragment"), mu = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), hu = Symbol.for("react.forward_ref"), mi = Symbol.for("react.suspense"), hi = Symbol.for("react.suspense_list"), yu = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), dc = Symbol.for("react.offscreen"), xs = Symbol.iterator;
function Wn(e) {
  return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Fl;
function er(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = t && t[1] || "";
    }
  return `
` + Fl + e;
}
var Dl = !1;
function jl(e, t) {
  if (!e || Dl)
    return "";
  Dl = !0;
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
    Dl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? er(e) : "";
}
function cp(e) {
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
      return e = jl(e.type, !1), e;
    case 11:
      return e = jl(e.type.render, !1), e;
    case 1:
      return e = jl(e.type, !0), e;
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
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case pi:
      return "Profiler";
    case mu:
      return "StrictMode";
    case mi:
      return "Suspense";
    case hi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case yu:
        return t = e.displayName || null, t !== null ? t : yi(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return yi(e(t));
        } catch {
        }
    }
  return null;
}
function fp(e) {
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
      return t === mu ? "StrictMode" : "Mode";
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
function jt(e) {
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
function pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function dp(e) {
  var t = pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Qr(e) {
  e._valueTracker || (e._valueTracker = dp(e));
}
function mc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Eo(e) {
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
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = jt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hc(e, t) {
  t = t.checked, t != null && pu(e, "checked", t, !1);
}
function vi(e, t) {
  hc(e, t);
  var n = jt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? wi(e, t.type, n) : t.hasOwnProperty("defaultValue") && wi(e, t.type, jt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Es(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wi(e, t, n) {
  (t !== "number" || Eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var tr = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + jt(n), t = null, o = 0; o < e.length; o++) {
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
    throw Error(S(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _s(e, t) {
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
  e._wrapperState = { initialValue: jt(n) };
}
function yc(e, t) {
  var n = jt(t.value), r = jt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ps(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gc(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Yr, vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
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
var or = {
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
}, pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function(e) {
  pp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), or[t] = or[e];
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || or.hasOwnProperty(e) && or[e] ? ("" + t).trim() : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var mp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function gu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var _i = null, xn = null, Cn = null;
function Ts(e) {
  if (e = Fr(e)) {
    if (typeof _i != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = nl(t), _i(e.stateNode, e.type, t));
  }
}
function kc(e) {
  xn ? Cn ? Cn.push(e) : Cn = [e] : xn = e;
}
function xc() {
  if (xn) {
    var e = xn, t = Cn;
    if (Cn = xn = null, Ts(e), t)
      for (e = 0; e < t.length; e++)
        Ts(t[e]);
  }
}
function Cc(e, t) {
  return e(t);
}
function Ec() {
}
var Ul = !1;
function _c(e, t, n) {
  if (Ul)
    return e(t, n);
  Ul = !0;
  try {
    return Cc(e, t, n);
  } finally {
    Ul = !1, (xn !== null || Cn !== null) && (Ec(), xc());
  }
}
function yr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = nl(n);
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
var Pi = !1;
if (vt)
  try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", { get: function() {
      Pi = !0;
    } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
  } catch {
    Pi = !1;
  }
function hp(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var lr = !1, _o = null, Po = !1, Ti = null, yp = { onError: function(e) {
  lr = !0, _o = e;
} };
function gp(e, t, n, r, o, l, i, u, s) {
  lr = !1, _o = null, hp.apply(yp, arguments);
}
function vp(e, t, n, r, o, l, i, u, s) {
  if (gp.apply(this, arguments), lr) {
    if (lr) {
      var a = _o;
      lr = !1, _o = null;
    } else
      throw Error(S(198));
    Po || (Po = !0, Ti = a);
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ns(e) {
  if (on(e) !== e)
    throw Error(S(188));
}
function wp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null)
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
          return Ns(o), e;
        if (l === r)
          return Ns(o), t;
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
function Tc(e) {
  return e = wp(e), e !== null ? Nc(e) : null;
}
function Nc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Nc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Rc = je.unstable_scheduleCallback, Rs = je.unstable_cancelCallback, Sp = je.unstable_shouldYield, kp = je.unstable_requestPaint, te = je.unstable_now, xp = je.unstable_getCurrentPriorityLevel, vu = je.unstable_ImmediatePriority, zc = je.unstable_UserBlockingPriority, To = je.unstable_NormalPriority, Cp = je.unstable_LowPriority, Oc = je.unstable_IdlePriority, qo = null, ct = null;
function Ep(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var nt = Math.clz32 ? Math.clz32 : Tp, _p = Math.log, Pp = Math.LN2;
function Tp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (_p(e) / Pp | 0) | 0;
}
var Gr = 64, Xr = 4194304;
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
function No(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = nr(u) : (l &= i, l !== 0 && (r = nr(l)));
  } else
    i = n & ~o, i !== 0 ? r = nr(i) : l !== 0 && (r = nr(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - nt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Np(e, t) {
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
function Rp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - nt(l), u = 1 << i, s = o[i];
    s === -1 ? (!(u & n) || u & r) && (o[i] = Np(u, t)) : s <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Ni(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lc() {
  var e = Gr;
  return Gr <<= 1, !(Gr & 4194240) && (Gr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function zp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - nt(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var U = 0;
function $c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ic, Su, Mc, Ac, Fc, Ri = !1, Zr = [], Ot = null, Lt = null, $t = null, gr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Tt = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      Lt = null;
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
function Kn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Fr(t), t !== null && Su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Lp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ot = Kn(Ot, e, t, n, r, o), !0;
    case "dragenter":
      return Lt = Kn(Lt, e, t, n, r, o), !0;
    case "mouseover":
      return $t = Kn($t, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return gr.set(l, Kn(gr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, vr.set(l, Kn(vr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Dc(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
            Mc(n);
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
function co(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ei = r, n.target.dispatchEvent(r), Ei = null;
    } else
      return t = Fr(n), t !== null && Su(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Os(e, t, n) {
  co(e) && n.delete(t);
}
function $p() {
  Ri = !1, Ot !== null && co(Ot) && (Ot = null), Lt !== null && co(Lt) && (Lt = null), $t !== null && co($t) && ($t = null), gr.forEach(Os), vr.forEach(Os);
}
function Qn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ri || (Ri = !0, je.unstable_scheduleCallback(je.unstable_NormalPriority, $p)));
}
function wr(e) {
  function t(o) {
    return Qn(o, e);
  }
  if (0 < Zr.length) {
    Qn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && Qn(Ot, e), Lt !== null && Qn(Lt, e), $t !== null && Qn($t, e), gr.forEach(t), vr.forEach(t), n = 0; n < Tt.length; n++)
    r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); )
    Dc(n), n.blockedOn === null && Tt.shift();
}
var En = Ct.ReactCurrentBatchConfig, Ro = !0;
function Ip(e, t, n, r) {
  var o = U, l = En.transition;
  En.transition = null;
  try {
    U = 1, ku(e, t, n, r);
  } finally {
    U = o, En.transition = l;
  }
}
function Mp(e, t, n, r) {
  var o = U, l = En.transition;
  En.transition = null;
  try {
    U = 4, ku(e, t, n, r);
  } finally {
    U = o, En.transition = l;
  }
}
function ku(e, t, n, r) {
  if (Ro) {
    var o = zi(e, t, n, r);
    if (o === null)
      Jl(e, t, r, zo, n), zs(e, r);
    else if (Lp(o, e, t, n, r))
      r.stopPropagation();
    else if (zs(e, r), t & 4 && -1 < Op.indexOf(e)) {
      for (; o !== null; ) {
        var l = Fr(o);
        if (l !== null && Ic(l), l = zi(e, t, n, r), l === null && Jl(e, t, r, zo, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      Jl(e, t, r, null, n);
  }
}
var zo = null;
function zi(e, t, n, r) {
  if (zo = null, e = gu(r), e = Yt(e), e !== null)
    if (t = on(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Pc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return zo = e, null;
}
function jc(e) {
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
      switch (xp()) {
        case vu:
          return 1;
        case zc:
          return 4;
        case To:
        case Cp:
          return 16;
        case Oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Rt = null, xu = null, fo = null;
function Uc() {
  if (fo)
    return fo;
  var e, t = xu, n = t.length, r, o = "value" in Rt ? Rt.value : Rt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return fo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function po(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jr() {
  return !0;
}
function Ls() {
  return !1;
}
function Be(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Jr : Ls, this.isPropagationStopped = Ls, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
  }, persist: function() {
  }, isPersistent: Jr }), t;
}
var Dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Cu = Be(Dn), Ar = J({}, Dn, { view: 0, detail: 0 }), Ap = Be(Ar), Hl, Wl, Yn, bo = J({}, Ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Eu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (Hl = e.screenX - Yn.screenX, Wl = e.screenY - Yn.screenY) : Wl = Hl = 0, Yn = e), Hl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), $s = Be(bo), Fp = J({}, bo, { dataTransfer: 0 }), Dp = Be(Fp), jp = J({}, Ar, { relatedTarget: 0 }), Vl = Be(jp), Up = J({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Bp = Be(Up), Hp = J({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Wp = Be(Hp), Vp = J({}, Dn, { data: 0 }), Is = Be(Vp), Kp = {
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
}, Qp = {
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
}, Yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Gp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yp[e]) ? !!t[e] : !1;
}
function Eu() {
  return Gp;
}
var Xp = J({}, Ar, { key: function(e) {
  if (e.key) {
    var t = Kp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = po(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Eu, charCode: function(e) {
  return e.type === "keypress" ? po(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? po(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Zp = Be(Xp), Jp = J({}, bo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ms = Be(Jp), qp = J({}, Ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Eu }), bp = Be(qp), em = J({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), tm = Be(em), nm = J({}, bo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), rm = Be(nm), om = [9, 13, 27, 32], _u = vt && "CompositionEvent" in window, ir = null;
vt && "documentMode" in document && (ir = document.documentMode);
var lm = vt && "TextEvent" in window && !ir, Bc = vt && (!_u || ir && 8 < ir && 11 >= ir), As = String.fromCharCode(32), Fs = !1;
function Hc(e, t) {
  switch (e) {
    case "keyup":
      return om.indexOf(t.keyCode) !== -1;
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
function Wc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return Wc(t);
    case "keypress":
      return t.which !== 32 ? null : (Fs = !0, As);
    case "textInput":
      return e = t.data, e === As && Fs ? null : e;
    default:
      return null;
  }
}
function um(e, t) {
  if (fn)
    return e === "compositionend" || !_u && Hc(e, t) ? (e = Uc(), fo = xu = Rt = null, fn = !1, e) : null;
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
      return Bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sm[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  kc(r), t = Oo(t, "onChange"), 0 < t.length && (n = new Cu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ur = null, Sr = null;
function am(e) {
  tf(e, 0);
}
function el(e) {
  var t = mn(e);
  if (mc(t))
    return e;
}
function cm(e, t) {
  if (e === "change")
    return t;
}
var Kc = !1;
if (vt) {
  var Kl;
  if (vt) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var js = document.createElement("div");
      js.setAttribute("oninput", "return;"), Ql = typeof js.oninput == "function";
    }
    Kl = Ql;
  } else
    Kl = !1;
  Kc = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Us() {
  ur && (ur.detachEvent("onpropertychange", Qc), Sr = ur = null);
}
function Qc(e) {
  if (e.propertyName === "value" && el(Sr)) {
    var t = [];
    Vc(t, Sr, e, gu(e)), _c(am, t);
  }
}
function fm(e, t, n) {
  e === "focusin" ? (Us(), ur = t, Sr = n, ur.attachEvent("onpropertychange", Qc)) : e === "focusout" && Us();
}
function dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return el(Sr);
}
function pm(e, t) {
  if (e === "click")
    return el(t);
}
function mm(e, t) {
  if (e === "input" || e === "change")
    return el(t);
}
function hm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : hm;
function kr(e, t) {
  if (ot(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!di.call(t, o) || !ot(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Hs(e, t) {
  var n = Bs(e);
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
    n = Bs(n);
  }
}
function Yc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Gc() {
  for (var e = window, t = Eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Eo(e.document);
  }
  return t;
}
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ym(e) {
  var t = Gc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Pu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Hs(n, l);
        var i = Hs(
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
var gm = vt && "documentMode" in document && 11 >= document.documentMode, dn = null, Oi = null, sr = null, Li = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li || dn == null || dn !== Eo(r) || (r = dn, "selectionStart" in r && Pu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), sr && kr(sr, r) || (sr = r, r = Oo(Oi, "onSelect"), 0 < r.length && (t = new Cu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = dn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var pn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Yl = {}, Xc = {};
vt && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete pn.animationend.animation, delete pn.animationiteration.animation, delete pn.animationstart.animation), "TransitionEvent" in window || delete pn.transitionend.transition);
function tl(e) {
  if (Yl[e])
    return Yl[e];
  if (!pn[e])
    return e;
  var t = pn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xc)
      return Yl[e] = t[n];
  return e;
}
var Zc = tl("animationend"), Jc = tl("animationiteration"), qc = tl("animationstart"), bc = tl("transitionend"), ef = /* @__PURE__ */ new Map(), Vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Bt(e, t) {
  ef.set(e, t), rn(t, [e]);
}
for (var Gl = 0; Gl < Vs.length; Gl++) {
  var Xl = Vs[Gl], vm = Xl.toLowerCase(), wm = Xl[0].toUpperCase() + Xl.slice(1);
  Bt(vm, "on" + wm);
}
Bt(Zc, "onAnimationEnd");
Bt(Jc, "onAnimationIteration");
Bt(qc, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(bc, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
function Ks(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, vp(r, t, void 0, e), e.currentTarget = null;
}
function tf(e, t) {
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
          Ks(o, u, a), l = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Ks(o, u, a), l = s;
        }
    }
  }
  if (Po)
    throw e = Ti, Po = !1, Ti = null, e;
}
function K(e, t) {
  var n = t[Fi];
  n === void 0 && (n = t[Fi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var br = "_reactListening" + Math.random().toString(36).slice(2);
function xr(e) {
  if (!e[br]) {
    e[br] = !0, ac.forEach(function(n) {
      n !== "selectionchange" && (Sm.has(n) || Zl(n, !1, e), Zl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[br] || (t[br] = !0, Zl("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (jc(t)) {
    case 1:
      var o = Ip;
      break;
    case 4:
      o = Mp;
      break;
    default:
      o = ku;
  }
  n = o.bind(null, t, n, e), o = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, o) {
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
            if (i = Yt(u), i === null)
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
  _c(function() {
    var a = l, h = gu(n), m = [];
    e: {
      var p = ef.get(e);
      if (p !== void 0) {
        var v = Cu, g = e;
        switch (e) {
          case "keypress":
            if (po(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = Zp;
            break;
          case "focusin":
            g = "focus", v = Vl;
            break;
          case "focusout":
            g = "blur", v = Vl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Vl;
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
            v = $s;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Dp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = bp;
            break;
          case Zc:
          case Jc:
          case qc:
            v = Bp;
            break;
          case bc:
            v = tm;
            break;
          case "scroll":
            v = Ap;
            break;
          case "wheel":
            v = rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Wp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ms;
        }
        var y = (t & 4) !== 0, _ = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = yr(c, f), w != null && y.push(Cr(c, w, d)))), _)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Ei && (g = n.relatedTarget || n.fromElement) && (Yt(g) || g[wt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Yt(g) : null, g !== null && (_ = on(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = $s, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ms, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), _ = v == null ? p : mn(v), d = g == null ? p : mn(g), p = new y(w, c + "leave", v, n, h), p.target = _, p.relatedTarget = d, w = null, Yt(h) === a && (y = new y(f, c + "enter", g, n, h), y.target = d, y.relatedTarget = _, w = y), _ = w, v && g)
            t: {
              for (y = v, f = g, c = 0, d = y; d; d = ln(d))
                c++;
              for (d = 0, w = f; w; w = ln(w))
                d++;
              for (; 0 < c - d; )
                y = ln(y), c--;
              for (; 0 < d - c; )
                f = ln(f), d--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = ln(y), f = ln(f);
              }
              y = null;
            }
          else
            y = null;
          v !== null && Qs(m, p, v, y, !1), g !== null && _ !== null && Qs(m, _, g, y, !0);
        }
      }
      e: {
        if (p = a ? mn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var x = cm;
        else if (Ds(p))
          if (Kc)
            x = mm;
          else {
            x = dm;
            var C = fm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = pm);
        if (x && (x = x(e, a))) {
          Vc(m, x, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && wi(p, "number", p.value);
      }
      switch (C = a ? mn(a) : window, e) {
        case "focusin":
          (Ds(C) || C.contentEditable === "true") && (dn = C, Oi = a, sr = null);
          break;
        case "focusout":
          sr = Oi = dn = null;
          break;
        case "mousedown":
          Li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Li = !1, Ws(m, n, h);
          break;
        case "selectionchange":
          if (gm)
            break;
        case "keydown":
        case "keyup":
          Ws(m, n, h);
      }
      var k;
      if (_u)
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
        fn ? Hc(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Bc && n.locale !== "ko" && (fn || E !== "onCompositionStart" ? E === "onCompositionEnd" && fn && (k = Uc()) : (Rt = h, xu = "value" in Rt ? Rt.value : Rt.textContent, fn = !0)), C = Oo(a, E), 0 < C.length && (E = new Is(E, e, null, n, h), m.push({ event: E, listeners: C }), k ? E.data = k : (k = Wc(n), k !== null && (E.data = k)))), (k = lm ? im(e, n) : um(e, n)) && (a = Oo(a, "onBeforeInput"), 0 < a.length && (h = new Is("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = k));
    }
    tf(m, t);
  });
}
function Cr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = yr(e, n), l != null && r.unshift(Cr(e, l, o)), l = yr(e, t), l != null && r.push(Cr(e, l, o))), e = e.return;
  }
  return r;
}
function ln(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = yr(n, l), s != null && i.unshift(Cr(n, s, u))) : o || (s = yr(n, l), s != null && i.push(Cr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var km = /\r\n?/g, xm = /\u0000|\uFFFD/g;
function Ys(e) {
  return (typeof e == "string" ? e : "" + e).replace(km, `
`).replace(xm, "");
}
function eo(e, t, n) {
  if (t = Ys(t), Ys(e) !== t && n)
    throw Error(S(425));
}
function Lo() {
}
var $i = null, Ii = null;
function Mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ai = typeof setTimeout == "function" ? setTimeout : void 0, Cm = typeof clearTimeout == "function" ? clearTimeout : void 0, Gs = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gs < "u" ? function(e) {
  return Gs.resolve(null).then(e).catch(_m);
} : Ai;
function _m(e) {
  setTimeout(function() {
    throw e;
  });
}
function ql(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), wr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
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
function Xs(e) {
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
var jn = Math.random().toString(36).slice(2), at = "__reactFiber$" + jn, Er = "__reactProps$" + jn, wt = "__reactContainer$" + jn, Fi = "__reactEvents$" + jn, Pm = "__reactListeners$" + jn, Tm = "__reactHandles$" + jn;
function Yt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Xs(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = Xs(e);
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
function mn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function nl(e) {
  return e[Er] || null;
}
var Di = [], hn = -1;
function Ht(e) {
  return { current: e };
}
function Q(e) {
  0 > hn || (e.current = Di[hn], Di[hn] = null, hn--);
}
function W(e, t) {
  hn++, Di[hn] = e.current, e.current = t;
}
var Ut = {}, ke = Ht(Ut), Re = Ht(!1), qt = Ut;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function $o() {
  Q(Re), Q(ke);
}
function Zs(e, t, n) {
  if (ke.current !== Ut)
    throw Error(S(168));
  W(ke, t), W(Re, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(S(108, fp(e) || "Unknown", o));
  return J({}, n, r);
}
function Io(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, qt = ke.current, W(ke, e), W(Re, Re.current), !0;
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = rf(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, Q(Re), Q(ke), W(ke, e)) : Q(Re), W(Re, n);
}
var mt = null, rl = !1, bl = !1;
function of(e) {
  mt === null ? mt = [e] : mt.push(e);
}
function Nm(e) {
  rl = !0, of(e);
}
function Wt() {
  if (!bl && mt !== null) {
    bl = !0;
    var e = 0, t = U;
    try {
      var n = mt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mt = null, rl = !1;
    } catch (o) {
      throw mt !== null && (mt = mt.slice(e + 1)), Rc(vu, Wt), o;
    } finally {
      U = t, bl = !1;
    }
  }
  return null;
}
var yn = [], gn = 0, Mo = null, Ao = 0, We = [], Ve = 0, bt = null, ht = 1, yt = "";
function Kt(e, t) {
  yn[gn++] = Ao, yn[gn++] = Mo, Mo = e, Ao = t;
}
function lf(e, t, n) {
  We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = bt, bt = e;
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
function Tu(e) {
  e.return !== null && (Kt(e, 1), lf(e, 1, 0));
}
function Nu(e) {
  for (; e === Mo; )
    Mo = yn[--gn], yn[gn] = null, Ao = yn[--gn], yn[gn] = null;
  for (; e === bt; )
    bt = We[--Ve], We[Ve] = null, yt = We[--Ve], We[Ve] = null, ht = We[--Ve], We[Ve] = null;
}
var Fe = null, Ae = null, G = !1, tt = null;
function uf(e, t) {
  var n = Qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ae = It(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Fe = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: ht, overflow: yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Fe = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if (G) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!qs(e, t)) {
        if (ji(e))
          throw Error(S(418));
        t = It(n.nextSibling);
        var r = Fe;
        t && qs(e, t) ? uf(r, n) : (e.flags = e.flags & -4097 | 2, G = !1, Fe = e);
      }
    } else {
      if (ji(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, G = !1, Fe = e;
    }
  }
}
function bs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function to(e) {
  if (e !== Fe)
    return !1;
  if (!G)
    return bs(e), G = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (ji(e))
      throw sf(), Error(S(418));
    for (; t; )
      uf(e, t), t = It(t.nextSibling);
  }
  if (bs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = It(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else
    Ae = Fe ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function sf() {
  for (var e = Ae; e; )
    e = It(e.nextSibling);
}
function On() {
  Ae = Fe = null, G = !1;
}
function Ru(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var Rm = Ct.ReactCurrentBatchConfig;
function Gn(e, t, n) {
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
function no(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ea(e) {
  var t = e._init;
  return t(e._payload);
}
function af(e) {
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
    return c === null || c.tag !== 6 ? (c = ii(d, f.mode, w), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var x = d.type;
    return x === cn ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && ea(x) === c.type) ? (w = o(c, d.props), w.ref = Gn(f, c, d), w.return = f, w) : (w = So(d.type, d.key, d.props, null, f.mode, w), w.ref = Gn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ui(d, f.mode, w), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = Jt(d, f.mode, w, x), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ii("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Kr:
          return d = So(c.type, c.key, c.props, null, f.mode, d), d.ref = Gn(f, null, c), d.return = f, d;
        case an:
          return c = ui(c, f.mode, d), c.return = f, c;
        case _t:
          var w = c._init;
          return m(f, w(c._payload), d);
      }
      if (tr(c) || Wn(c))
        return c = Jt(c, f.mode, d, null), c.return = f, c;
      no(f, c);
    }
    return null;
  }
  function p(f, c, d, w) {
    var x = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return x !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Kr:
          return d.key === x ? s(f, c, d, w) : null;
        case an:
          return d.key === x ? a(f, c, d, w) : null;
        case _t:
          return x = d._init, p(
            f,
            c,
            x(d._payload),
            w
          );
      }
      if (tr(d) || Wn(d))
        return x !== null ? null : h(f, c, d, w, null);
      no(f, d);
    }
    return null;
  }
  function v(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Kr:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case an:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, x);
        case _t:
          var C = w._init;
          return v(f, c, d, C(w._payload), x);
      }
      if (tr(w) || Wn(w))
        return f = f.get(d) || null, h(c, f, w, x, null);
      no(c, w);
    }
    return null;
  }
  function g(f, c, d, w) {
    for (var x = null, C = null, k = c, E = c = 0, A = null; k !== null && E < d.length; E++) {
      k.index > E ? (A = k, k = null) : A = k.sibling;
      var R = p(f, k, d[E], w);
      if (R === null) {
        k === null && (k = A);
        break;
      }
      e && k && R.alternate === null && t(f, k), c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R, k = A;
    }
    if (E === d.length)
      return n(f, k), G && Kt(f, E), x;
    if (k === null) {
      for (; E < d.length; E++)
        k = m(f, d[E], w), k !== null && (c = l(k, c, E), C === null ? x = k : C.sibling = k, C = k);
      return G && Kt(f, E), x;
    }
    for (k = r(f, k); E < d.length; E++)
      A = v(k, f, E, d[E], w), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? E : A.key), c = l(A, c, E), C === null ? x = A : C.sibling = A, C = A);
    return e && k.forEach(function(H) {
      return t(f, H);
    }), G && Kt(f, E), x;
  }
  function y(f, c, d, w) {
    var x = Wn(d);
    if (typeof x != "function")
      throw Error(S(150));
    if (d = x.call(d), d == null)
      throw Error(S(151));
    for (var C = x = null, k = c, E = c = 0, A = null, R = d.next(); k !== null && !R.done; E++, R = d.next()) {
      k.index > E ? (A = k, k = null) : A = k.sibling;
      var H = p(f, k, R.value, w);
      if (H === null) {
        k === null && (k = A);
        break;
      }
      e && k && H.alternate === null && t(f, k), c = l(H, c, E), C === null ? x = H : C.sibling = H, C = H, k = A;
    }
    if (R.done)
      return n(
        f,
        k
      ), G && Kt(f, E), x;
    if (k === null) {
      for (; !R.done; E++, R = d.next())
        R = m(f, R.value, w), R !== null && (c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R);
      return G && Kt(f, E), x;
    }
    for (k = r(f, k); !R.done; E++, R = d.next())
      R = v(k, f, E, R.value, w), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? E : R.key), c = l(R, c, E), C === null ? x = R : C.sibling = R, C = R);
    return e && k.forEach(function(fe) {
      return t(f, fe);
    }), G && Kt(f, E), x;
  }
  function _(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === cn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Kr:
          e: {
            for (var x = d.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === cn) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && ea(x) === C.type) {
                  n(f, C.sibling), c = o(C, d.props), c.ref = Gn(f, C, d), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === cn ? (c = Jt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = So(d.type, d.key, d.props, null, f.mode, w), w.ref = Gn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case an:
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
            c = ui(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case _t:
          return C = d._init, _(f, c, C(d._payload), w);
      }
      if (tr(d))
        return g(f, c, d, w);
      if (Wn(d))
        return y(f, c, d, w);
      no(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = ii(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return _;
}
var Ln = af(!0), cf = af(!1), Fo = Ht(null), Do = null, vn = null, zu = null;
function Ou() {
  zu = vn = Do = null;
}
function Lu(e) {
  var t = Fo.current;
  Q(Fo), e._currentValue = t;
}
function Bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function _n(e, t) {
  Do = e, zu = vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, vn === null) {
      if (Do === null)
        throw Error(S(308));
      vn = e, Do.dependencies = { lanes: 0, firstContext: e };
    } else
      vn = vn.next = e;
  return t;
}
var Gt = null;
function $u(e) {
  Gt === null ? Gt = [e] : Gt.push(e);
}
function ff(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, $u(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Iu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function df(e, t) {
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
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, $u(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function mo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
function ta(e, t) {
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
    tn |= i, e.lanes = i, e.memoizedState = m;
  }
}
function na(e, t, n) {
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
var Dr = {}, ft = Ht(Dr), _r = Ht(Dr), Pr = Ht(Dr);
function Xt(e) {
  if (e === Dr)
    throw Error(S(174));
  return e;
}
function Mu(e, t) {
  switch (W(Pr, t), W(_r, e), W(ft, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
  }
  Q(ft), W(ft, t);
}
function $n() {
  Q(ft), Q(_r), Q(Pr);
}
function pf(e) {
  Xt(Pr.current);
  var t = Xt(ft.current), n = ki(t, e.type);
  t !== n && (W(_r, e), W(ft, n));
}
function Au(e) {
  _r.current === e && (Q(ft), Q(_r));
}
var X = Ht(0);
function Uo(e) {
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
var ei = [];
function Fu() {
  for (var e = 0; e < ei.length; e++)
    ei[e]._workInProgressVersionPrimary = null;
  ei.length = 0;
}
var ho = Ct.ReactCurrentDispatcher, ti = Ct.ReactCurrentBatchConfig, en = 0, Z = null, le = null, se = null, Bo = !1, ar = !1, Tr = 0, zm = 0;
function ge() {
  throw Error(S(321));
}
function Du(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n]))
      return !1;
  return !0;
}
function ju(e, t, n, r, o, l) {
  if (en = l, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ho.current = e === null || e.memoizedState === null ? Im : Mm, e = n(r, o), ar) {
    l = 0;
    do {
      if (ar = !1, Tr = 0, 25 <= l)
        throw Error(S(301));
      l += 1, se = le = null, t.updateQueue = null, ho.current = Am, e = n(r, o);
    } while (ar);
  }
  if (ho.current = Ho, t = le !== null && le.next !== null, en = 0, se = le = Z = null, Bo = !1, t)
    throw Error(S(300));
  return e;
}
function Uu() {
  var e = Tr !== 0;
  return Tr = 0, e;
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
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ni(e) {
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
      if ((en & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, Z.lanes |= h, tn |= h;
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? i = r : s.next = u, ot(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, Z.lanes |= l, tn |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ri(e) {
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
function mf() {
}
function hf(e, t) {
  var n = Z, r = Xe(), o = t(), l = !ot(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ne = !0), r = r.queue, Bu(vf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, Rr(9, gf.bind(null, n, r, o, t), void 0, null), ae === null)
      throw Error(S(349));
    en & 30 || yf(n, t, o);
  }
  return o;
}
function yf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function gf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wf(t) && Sf(e);
}
function vf(e, t, n) {
  return n(function() {
    wf(t) && Sf(e);
  });
}
function wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Sf(e) {
  var t = St(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function ra(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $m.bind(null, Z, e), [t.memoizedState, e];
}
function Rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kf() {
  return Xe().memoizedState;
}
function yo(e, t, n, r) {
  var o = it();
  Z.flags |= e, o.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ol(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (l = i.destroy, r !== null && Du(r, i.deps)) {
      o.memoizedState = Rr(t, n, l, r);
      return;
    }
  }
  Z.flags |= e, o.memoizedState = Rr(1 | t, n, l, r);
}
function oa(e, t) {
  return yo(8390656, 8, e, t);
}
function Bu(e, t) {
  return ol(2048, 8, e, t);
}
function xf(e, t) {
  return ol(4, 2, e, t);
}
function Cf(e, t) {
  return ol(4, 4, e, t);
}
function Ef(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function _f(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ol(4, 4, Ef.bind(null, t, e), n);
}
function Hu() {
}
function Pf(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tf(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Nf(e, t, n) {
  return en & 21 ? (ot(n, t) || (n = Lc(), Z.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function Om(e, t) {
  var n = U;
  U = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ti.transition;
  ti.transition = {};
  try {
    e(!1), t();
  } finally {
    U = n, ti.transition = r;
  }
}
function Rf() {
  return Xe().memoizedState;
}
function Lm(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zf(e))
    Of(t, n);
  else if (n = ff(e, t, n, r), n !== null) {
    var o = Ce();
    rt(n, e, r, o), Lf(n, t, r);
  }
}
function $m(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e))
    Of(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, ot(u, i)) {
          var s = t.interleaved;
          s === null ? (o.next = o, $u(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = ff(e, t, o, r), n !== null && (o = Ce(), rt(n, e, r, o), Lf(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function Of(e, t) {
  ar = Bo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
  }
}
var Ho = { readContext: Ge, useCallback: ge, useContext: ge, useEffect: ge, useImperativeHandle: ge, useInsertionEffect: ge, useLayoutEffect: ge, useMemo: ge, useReducer: ge, useRef: ge, useState: ge, useDebugValue: ge, useDeferredValue: ge, useTransition: ge, useMutableSource: ge, useSyncExternalStore: ge, useId: ge, unstable_isNewReconciler: !1 }, Im = { readContext: Ge, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: oa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yo(
    4194308,
    4,
    Ef.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return yo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return yo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Lm.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: ra, useDebugValue: Hu, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = ra(!1), t = e[0];
  return e = Om.bind(null, e[1]), it().memoizedState = e, [t, e];
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
    en & 30 || yf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, oa(vf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, Rr(9, gf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = ae.identifierPrefix;
  if (G) {
    var n = yt, r = ht;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = zm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Mm = {
  readContext: Ge,
  useCallback: Pf,
  useContext: Ge,
  useEffect: Bu,
  useImperativeHandle: _f,
  useInsertionEffect: xf,
  useLayoutEffect: Cf,
  useMemo: Tf,
  useReducer: ni,
  useRef: kf,
  useState: function() {
    return ni(Nr);
  },
  useDebugValue: Hu,
  useDeferredValue: function(e) {
    var t = Xe();
    return Nf(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = ni(Nr)[0], t = Xe().memoizedState;
    return [e, t];
  },
  useMutableSource: mf,
  useSyncExternalStore: hf,
  useId: Rf,
  unstable_isNewReconciler: !1
}, Am = { readContext: Ge, useCallback: Pf, useContext: Ge, useEffect: Bu, useImperativeHandle: _f, useInsertionEffect: xf, useLayoutEffect: Cf, useMemo: Tf, useReducer: ri, useRef: kf, useState: function() {
  return ri(Nr);
}, useDebugValue: Hu, useDeferredValue: function(e) {
  var t = Xe();
  return le === null ? t.memoizedState = e : Nf(t, le.memoizedState, e);
}, useTransition: function() {
  var e = ri(Nr)[0], t = Xe().memoizedState;
  return [e, t];
}, useMutableSource: mf, useSyncExternalStore: hf, useId: Rf, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ll = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), o = Ft(e), l = gt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), mo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Ce(), o = Ft(e), l = gt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), mo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Ce(), r = Ft(e), o = gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Mt(e, o, r), t !== null && (rt(t, e, r, n), mo(t, e, r));
} };
function la(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !kr(n, r) || !kr(o, l) : !0;
}
function $f(e, t, n) {
  var r = !1, o = Ut, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Ge(l) : (o = ze(t) ? qt : ke.current, r = t.contextTypes, l = (r = r != null) ? zn(e, o) : Ut), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ll, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function ia(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ll.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Iu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Ge(l) : (l = ze(t) ? qt : ke.current, o.context = zn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Hi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ll.enqueueReplaceState(o, o.state, null), jo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function In(e, t) {
  try {
    var n = "", r = t;
    do
      n += cp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function oi(e, t, n) {
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
var Fm = typeof WeakMap == "function" ? WeakMap : Map;
function If(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Vo || (Vo = !0, eu = r), Vi(e, t);
  }, n;
}
function Mf(e, t, n) {
  n = gt(-1, n), n.tag = 3;
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
    Vi(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Jm.bind(null, e, t, n), t.then(e, e));
}
function sa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function aa(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e);
}
var Dm = Ct.ReactCurrentOwner, Ne = !1;
function xe(e, t, n, r) {
  t.child = e === null ? cf(t, null, n, r) : Ln(t, e.child, n, r);
}
function ca(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return _n(t, o), r = ju(e, t, n, r, l, o), n = Uu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (G && n && Tu(t), t.flags |= 1, xe(e, t, r, o), t.child);
}
function fa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Zu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Af(e, t, l, r, o)) : (e = So(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : kr, n(i, r) && e.ref === t.ref)
      return kt(e, t, o);
  }
  return t.flags |= 1, e = Dt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Af(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (kr(l, r) && e.ref === t.ref)
      if (Ne = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ne = !0);
      else
        return t.lanes = e.lanes, kt(e, t, o);
  }
  return Ki(e, t, n, r, o);
}
function Ff(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(Sn, Ie), Ie |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(Sn, Ie), Ie |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, W(Sn, Ie), Ie |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, W(Sn, Ie), Ie |= r;
  return xe(e, t, o, n), t.child;
}
function Df(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ki(e, t, n, r, o) {
  var l = ze(n) ? qt : ke.current;
  return l = zn(t, l), _n(t, o), n = ju(e, t, n, r, l, o), r = Uu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (G && r && Tu(t), t.flags |= 1, xe(e, t, n, o), t.child);
}
function da(e, t, n, r, o) {
  if (ze(n)) {
    var l = !0;
    Io(t);
  } else
    l = !1;
  if (_n(t, o), t.stateNode === null)
    go(e, t), $f(t, n, r), Wi(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ge(a) : (a = ze(n) ? qt : ke.current, a = zn(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ia(t, i, r, a), Pt = !1;
    var p = t.memoizedState;
    i.state = p, jo(t, r, i, o), s = t.memoizedState, u !== r || p !== s || Re.current || Pt ? (typeof h == "function" && (Hi(t, n, h, r), s = t.memoizedState), (u = Pt || la(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, df(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : be(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ge(s) : (s = ze(n) ? qt : ke.current, s = zn(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && ia(t, i, r, s), Pt = !1, p = t.memoizedState, i.state = p, jo(t, r, i, o);
    var g = t.memoizedState;
    u !== m || p !== g || Re.current || Pt ? (typeof v == "function" && (Hi(t, n, v, r), g = t.memoizedState), (a = Pt || la(t, n, a, r, p, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qi(e, t, n, r, l, o);
}
function Qi(e, t, n, r, o, l) {
  Df(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && Js(t, n, !1), kt(e, t, l);
  r = t.stateNode, Dm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Ln(t, e.child, null, l), t.child = Ln(t, null, u, l)) : xe(e, t, u, l), t.memoizedState = r.state, o && Js(t, n, !0), t.child;
}
function jf(e) {
  var t = e.stateNode;
  t.pendingContext ? Zs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zs(e, t.context, !1), Mu(e, t.containerInfo);
}
function pa(e, t, n, r, o) {
  return On(), Ru(o), t.flags |= 256, xe(e, t, n, r), t.child;
}
var Yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uf(e, t, n) {
  var r = t.pendingProps, o = X.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), W(X, o & 1), e === null)
    return Ui(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = sl(i, r, 0, null), e = Jt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Gi(n), t.memoizedState = Yi, e) : Wu(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return jm(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Dt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Dt(u, l) : (l = Jt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Gi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Yi, r;
  }
  return l = e.child, e = l.sibling, r = Dt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wu(e, t) {
  return t = sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ro(e, t, n, r) {
  return r !== null && Ru(r), Ln(t, e.child, null, n), e = Wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function jm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = oi(Error(S(422))), ro(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = sl({ mode: "visible", children: r.children }, o, 0, null), l = Jt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Ln(t, e.child, null, i), t.child.memoizedState = Gi(i), t.memoizedState = Yi, l);
  if (!(t.mode & 1))
    return ro(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(S(419)), r = oi(l, r, void 0), ro(e, t, i, r);
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
    return Xu(), r = oi(Error(S(421))), ro(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ae = It(o.nextSibling), Fe = t, G = !0, tt = null, e !== null && (We[Ve++] = ht, We[Ve++] = yt, We[Ve++] = bt, ht = e.id, yt = e.overflow, bt = t), t = Wu(t, r.children), t.flags |= 4096, t);
}
function ma(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function li(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Bf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (xe(e, t, r.children, n), r = X.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ma(e, n, t);
          else if (e.tag === 19)
            ma(e, n, t);
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
          e = n.alternate, e !== null && Uo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), li(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Uo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        li(t, !0, n, null, l);
        break;
      case "together":
        li(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function go(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes))
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
function Um(e, t, n) {
  switch (t.tag) {
    case 3:
      jf(t), On();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      ze(t.type) && Io(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      W(Fo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Uf(e, t, n) : (W(X, X.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      W(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Bf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), W(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ff(e, t, n);
  }
  return kt(e, t, n);
}
var Hf, Xi, Wf, Vf;
Hf = function(e, t) {
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
Wf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Xt(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = gi(e, o), r = gi(e, r), l = [];
        break;
      case "select":
        o = J({}, o, { value: void 0 }), r = J({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Si(e, o), r = Si(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Lo);
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
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (mr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (mr.hasOwnProperty(a) ? (s != null && a === "onScroll" && K("scroll", e), l || u === s || (l = [])) : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xn(e, t) {
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
function Bm(e, t, n) {
  var r = t.pendingProps;
  switch (Nu(t), t.tag) {
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
      return ze(t.type) && $o(), ve(t), null;
    case 3:
      return r = t.stateNode, $n(), Q(Re), Q(ke), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (to(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (ru(tt), tt = null))), Xi(e, t), ve(t), null;
    case 5:
      Au(t);
      var o = Xt(Pr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Wf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return ve(t), null;
        }
        if (e = Xt(ft.current), to(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[at] = t, r[Er] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < rr.length; o++)
                K(rr[o], r);
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
              Cs(r, l), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, K("invalid", r);
              break;
            case "textarea":
              _s(r, l), K("invalid", r);
          }
          xi(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && eo(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && eo(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : mr.hasOwnProperty(i) && u != null && i === "onScroll" && K("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), Es(r, l, !0);
              break;
            case "textarea":
              Qr(r), Ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Lo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[Er] = r, Hf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Ci(n, r), n) {
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
                for (o = 0; o < rr.length; o++)
                  K(rr[o], e);
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
                Cs(e, r), o = gi(e, r), K("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = J({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                _s(e, r), o = Si(e, r), K("invalid", e);
                break;
              default:
                o = r;
            }
            xi(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style" ? Sc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vc(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && hr(e, s) : typeof s == "number" && hr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (mr.hasOwnProperty(l) ? s != null && l === "onScroll" && K("scroll", e) : s != null && pu(e, l, s, i));
              }
            switch (n) {
              case "input":
                Qr(e), Es(e, r, !1);
                break;
              case "textarea":
                Qr(e), Ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + jt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? kn(e, !!r.multiple, l, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Lo);
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
        Vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Xt(Pr.current), Xt(ft.current), to(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (l = r.nodeValue !== n) && (e = Fe, e !== null))
            switch (e.tag) {
              case 3:
                eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && eo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ve(t), null;
    case 13:
      if (Q(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (G && Ae !== null && t.mode & 1 && !(t.flags & 128))
          sf(), On(), t.flags |= 98560, l = !1;
        else if (l = to(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(S(317));
            l[at] = t;
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ve(t), l = !1;
        } else
          tt !== null && (ru(tt), tt = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? ie === 0 && (ie = 3) : Xu())), t.updateQueue !== null && (t.flags |= 4), ve(t), null);
    case 4:
      return $n(), Xi(e, t), e === null && xr(t.stateNode.containerInfo), ve(t), null;
    case 10:
      return Lu(t.type._context), ve(t), null;
    case 17:
      return ze(t.type) && $o(), ve(t), null;
    case 19:
      if (Q(X), l = t.memoizedState, l === null)
        return ve(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Xn(l, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Uo(e), i !== null) {
                for (t.flags |= 128, Xn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return W(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && te() > Mn && (t.flags |= 128, r = !0, Xn(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Uo(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !G)
              return ve(t), null;
          } else
            2 * te() - l.renderingStartTime > Mn && n !== 1073741824 && (t.flags |= 128, r = !0, Xn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = te(), t.sibling = null, n = X.current, W(X, r ? n & 1 | 2 : n & 1), t) : (ve(t), null);
    case 22:
    case 23:
      return Gu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ve(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Hm(e, t) {
  switch (Nu(t), t.tag) {
    case 1:
      return ze(t.type) && $o(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $n(), Q(Re), Q(ke), Fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Au(t), null;
    case 13:
      if (Q(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        On();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Q(X), null;
    case 4:
      return $n(), null;
    case 10:
      return Lu(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oo = !1, Se = !1, Wm = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function wn(e, t) {
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
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var ha = !1;
function Vm(e, t) {
  if ($i = Ro, e = Gc(), Pu(e)) {
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
  for (Ii = { focusedElem: e, selectionRange: n }, Ro = !1, T = t; T !== null; )
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
  return g = ha, ha = !1, g;
}
function cr(e, t, n) {
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
function il(e, t) {
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
function Kf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Er], delete t[Fi], delete t[Pm], delete t[Tm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ya(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qf(e.return))
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Lo));
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
var de = null, et = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; )
    Yf(e, t, n), n = n.sibling;
}
function Yf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(qo, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Se || wn(n, t);
    case 6:
      var r = de, o = et;
      de = null, Et(e, t, n), de = r, et = o, de !== null && (et ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
      break;
    case 18:
      de !== null && (et ? (e = de, n = n.stateNode, e.nodeType === 8 ? ql(e.parentNode, n) : e.nodeType === 1 && ql(e, n), wr(e)) : ql(de, n.stateNode));
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
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Zi(n, t, i), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!Se && (wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
function ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Wm()), t.forEach(function(r) {
      var o = bm.bind(null, e, r);
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
        Yf(l, i, o), de = null, et = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        ee(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Gf(t, e), t = t.sibling;
}
function Gf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Je(t, e), lt(e), r & 4) {
        try {
          cr(3, e, e.return), il(3, e);
        } catch (y) {
          ee(e, e.return, y);
        }
        try {
          cr(5, e, e.return);
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 1:
      Je(t, e), lt(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (Je(t, e), lt(e), r & 512 && n !== null && wn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          hr(o, "");
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && hc(o, l), Ci(u, i);
            var a = Ci(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Sc(o, m) : h === "dangerouslySetInnerHTML" ? vc(o, m) : h === "children" ? hr(o, m) : pu(o, h, m, a);
            }
            switch (u) {
              case "input":
                vi(o, l);
                break;
              case "textarea":
                yc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? kn(o, !!l.multiple, v, !1) : p !== !!l.multiple && (l.defaultValue != null ? kn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : kn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Er] = l;
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
          wr(t.containerInfo);
        } catch (y) {
          ee(e, e.return, y);
        }
      break;
    case 4:
      Je(t, e), lt(e);
      break;
    case 13:
      Je(t, e), lt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Qu = te())), r & 4 && ga(e);
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
                      ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    wa(m);
                    continue;
                  }
              }
              v !== null ? (v.return = p, T = v) : wa(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = wc("display", i));
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
      Je(t, e), lt(e), r & 4 && ga(e);
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
          if (Qf(n)) {
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
          r.flags & 32 && (hr(o, ""), r.flags &= -33);
          var l = ya(e);
          bi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ya(e);
          qi(e, u, i);
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
function Km(e, t, n) {
  T = e, Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || oo;
      if (!i) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || Se;
        u = oo;
        var a = Se;
        if (oo = i, (Se = s) && !a)
          for (T = o; T !== null; )
            i = T, s = i.child, i.tag === 22 && i.memoizedState !== null ? Sa(o) : s !== null ? (s.return = i, T = s) : Sa(o);
        for (; l !== null; )
          T = l, Xf(l), l = l.sibling;
        T = o, oo = u, Se = a;
      }
      va(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, T = l) : va(e);
  }
}
function va(e) {
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
              Se || il(5, t);
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
              l !== null && na(t, l, r);
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
                na(t, i, n);
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
              throw Error(S(163));
          }
        Se || t.flags & 512 && Ji(t);
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
function wa(e) {
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
function Sa(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            il(4, t);
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
            Ji(t);
          } catch (s) {
            ee(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ji(t);
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
var Qm = Math.ceil, Wo = Ct.ReactCurrentDispatcher, Vu = Ct.ReactCurrentOwner, Ye = Ct.ReactCurrentBatchConfig, M = 0, ae = null, oe = null, me = 0, Ie = 0, Sn = Ht(0), ie = 0, zr = null, tn = 0, ul = 0, Ku = 0, fr = null, Te = null, Qu = 0, Mn = 1 / 0, pt = null, Vo = !1, eu = null, At = null, lo = !1, zt = null, Ko = 0, dr = 0, tu = null, vo = -1, wo = 0;
function Ce() {
  return M & 6 ? te() : vo !== -1 ? vo : vo = te();
}
function Ft(e) {
  return e.mode & 1 ? M & 2 && me !== 0 ? me & -me : Rm.transition !== null ? (wo === 0 && (wo = Lc()), wo) : (e = U, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jc(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < dr)
    throw dr = 0, tu = null, Error(S(185));
  Mr(e, n, r), (!(M & 2) || e !== ae) && (e === ae && (!(M & 2) && (ul |= n), ie === 4 && Nt(e, me)), Oe(e, r), n === 1 && M === 0 && !(t.mode & 1) && (Mn = te() + 500, rl && Wt()));
}
function Oe(e, t) {
  var n = e.callbackNode;
  Rp(e, t);
  var r = No(e, e === ae ? me : 0);
  if (r === 0)
    n !== null && Rs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Rs(n), t === 1)
      e.tag === 0 ? Nm(ka.bind(null, e)) : of(ka.bind(null, e)), Em(function() {
        !(M & 6) && Wt();
      }), n = null;
    else {
      switch ($c(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = To;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = To;
      }
      n = rd(n, Zf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zf(e, t) {
  if (vo = -1, wo = 0, M & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n)
    return null;
  var r = No(e, e === ae ? me : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Qo(e, r);
  else {
    t = r;
    var o = M;
    M |= 2;
    var l = qf();
    (ae !== e || me !== t) && (pt = null, Mn = te() + 500, Zt(e, t));
    do
      try {
        Xm();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (1);
    Ou(), Wo.current = l, M = o, oe !== null ? t = 0 : (ae = null, me = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ni(e), o !== 0 && (r = o, t = nu(e, o))), t === 1)
      throw n = zr, Zt(e, 0), Nt(e, r), Oe(e, te()), n;
    if (t === 6)
      Nt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Ym(o) && (t = Qo(e, r), t === 2 && (l = Ni(e), l !== 0 && (r = l, t = nu(e, l))), t === 1))
        throw n = zr, Zt(e, 0), Nt(e, r), Oe(e, te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Qt(e, Te, pt);
          break;
        case 3:
          if (Nt(e, r), (r & 130023424) === r && (t = Qu + 500 - te(), 10 < t)) {
            if (No(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Ce(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ai(Qt.bind(null, e, Te, pt), t);
            break;
          }
          Qt(e, Te, pt);
          break;
        case 4:
          if (Nt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - nt(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ai(Qt.bind(null, e, Te, pt), r);
            break;
          }
          Qt(e, Te, pt);
          break;
        case 5:
          Qt(e, Te, pt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Oe(e, te()), e.callbackNode === n ? Zf.bind(null, e) : null;
}
function nu(e, t) {
  var n = fr;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), e = Qo(e, t), e !== 2 && (t = Te, Te = n, t !== null && ru(t)), e;
}
function ru(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
}
function Ym(e) {
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
function Nt(e, t) {
  for (t &= ~Ku, t &= ~ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ka(e) {
  if (M & 6)
    throw Error(S(327));
  Pn();
  var t = No(e, 0);
  if (!(t & 1))
    return Oe(e, te()), null;
  var n = Qo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ni(e);
    r !== 0 && (t = r, n = nu(e, r));
  }
  if (n === 1)
    throw n = zr, Zt(e, 0), Nt(e, t), Oe(e, te()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Qt(e, Te, pt), Oe(e, te()), null;
}
function Yu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (Mn = te() + 500, rl && Wt());
  }
}
function nn(e) {
  zt !== null && zt.tag === 0 && !(M & 6) && Pn();
  var t = M;
  M |= 1;
  var n = Ye.transition, r = U;
  try {
    if (Ye.transition = null, U = 1, e)
      return e();
  } finally {
    U = r, Ye.transition = n, M = t, !(M & 6) && Wt();
  }
}
function Gu() {
  Ie = Sn.current, Q(Sn);
}
function Zt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Cm(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Nu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $o();
          break;
        case 3:
          $n(), Q(Re), Q(ke), Fu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          $n();
          break;
        case 13:
          Q(X);
          break;
        case 19:
          Q(X);
          break;
        case 10:
          Lu(r.type._context);
          break;
        case 22:
        case 23:
          Gu();
      }
      n = n.return;
    }
  if (ae = e, oe = e = Dt(e.current, null), me = Ie = t, ie = 0, zr = null, Ku = ul = tn = 0, Te = fr = null, Gt !== null) {
    for (t = 0; t < Gt.length; t++)
      if (n = Gt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    Gt = null;
  }
  return e;
}
function Jf(e, t) {
  do {
    var n = oe;
    try {
      if (Ou(), ho.current = Ho, Bo) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Bo = !1;
      }
      if (en = 0, se = le = Z = null, ar = !1, Tr = 0, Vu.current = null, n === null || n.return === null) {
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
          var v = sa(i);
          if (v !== null) {
            v.flags &= -257, aa(v, i, u, l, t), v.mode & 1 && ua(l, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ua(l, a, t), Xu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (G && u.mode & 1) {
          var _ = sa(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), aa(_, i, u, l, t), Ru(In(s, u));
            break e;
          }
        }
        l = s = In(s, u), ie !== 4 && (ie = 2), fr === null ? fr = [l] : fr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = If(l, s, t);
              ta(l, f);
              break e;
            case 1:
              u = s;
              var c = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (At === null || !At.has(d)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = Mf(l, u, t);
                ta(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ed(n);
    } catch (x) {
      t = x, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qf() {
  var e = Wo.current;
  return Wo.current = Ho, e === null ? Ho : e;
}
function Xu() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ae === null || !(tn & 268435455) && !(ul & 268435455) || Nt(ae, me);
}
function Qo(e, t) {
  var n = M;
  M |= 2;
  var r = qf();
  (ae !== e || me !== t) && (pt = null, Zt(e, t));
  do
    try {
      Gm();
      break;
    } catch (o) {
      Jf(e, o);
    }
  while (1);
  if (Ou(), M = n, Wo.current = r, oe !== null)
    throw Error(S(261));
  return ae = null, me = 0, ie;
}
function Gm() {
  for (; oe !== null; )
    bf(oe);
}
function Xm() {
  for (; oe !== null && !Sp(); )
    bf(oe);
}
function bf(e) {
  var t = nd(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : oe = t, Vu.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hm(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, oe = null;
        return;
      }
    } else if (n = Bm(n, t, Ie), n !== null) {
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
function Qt(e, t, n) {
  var r = U, o = Ye.transition;
  try {
    Ye.transition = null, U = 1, Zm(e, t, n, r);
  } finally {
    Ye.transition = o, U = r;
  }
  return null;
}
function Zm(e, t, n, r) {
  do
    Pn();
  while (zt !== null);
  if (M & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (zp(e, l), e === ae && (oe = ae = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || lo || (lo = !0, rd(To, function() {
    return Pn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Ye.transition, Ye.transition = null;
    var i = U;
    U = 1;
    var u = M;
    M |= 4, Vu.current = null, Vm(e, n), Gf(n, e), ym(Ii), Ro = !!$i, Ii = $i = null, e.current = n, Km(n), kp(), M = u, U = i, Ye.transition = l;
  } else
    e.current = n;
  if (lo && (lo = !1, zt = e, Ko = o), l = e.pendingLanes, l === 0 && (At = null), Ep(n.stateNode), Oe(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Vo)
    throw Vo = !1, e = eu, eu = null, e;
  return Ko & 1 && e.tag !== 0 && Pn(), l = e.pendingLanes, l & 1 ? e === tu ? dr++ : (dr = 0, tu = e) : dr = 0, Wt(), null;
}
function Pn() {
  if (zt !== null) {
    var e = $c(Ko), t = Ye.transition, n = U;
    try {
      if (Ye.transition = null, U = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, Ko = 0, M & 6)
          throw Error(S(331));
        var o = M;
        for (M |= 4, T = e.current; T !== null; ) {
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
                      cr(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, T = m;
                  else
                    for (; T !== null; ) {
                      h = T;
                      var p = h.sibling, v = h.return;
                      if (Kf(h), h === a) {
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
                      cr(9, l, l.return);
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
                        il(9, u);
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
        if (M = o, Wt(), ct && typeof ct.onPostCommitFiberRoot == "function")
          try {
            ct.onPostCommitFiberRoot(qo, e);
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
function xa(e, t, n) {
  t = In(n, t), t = If(e, t, 1), e = Mt(e, t, 1), t = Ce(), e !== null && (Mr(e, 1, t), Oe(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
          e = In(n, e), e = Mf(t, e, 1), t = Mt(t, e, 1), e = Ce(), t !== null && (Mr(t, 1, e), Oe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Jm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (me & n) === n && (ie === 4 || ie === 3 && (me & 130023424) === me && 500 > te() - Qu ? Zt(e, 0) : Ku |= n), Oe(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = Ce();
  e = St(e, t), e !== null && (Mr(e, t, n), Oe(e, n));
}
function qm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function bm(e, t) {
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
  r !== null && r.delete(t), td(e, n);
}
var nd;
nd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current)
      Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ne = !1, Um(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else
    Ne = !1, G && t.flags & 1048576 && lf(t, Ao, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      go(e, t), e = t.pendingProps;
      var o = zn(t, ke.current);
      _n(t, n), o = ju(null, t, r, e, o, n);
      var l = Uu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (l = !0, Io(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Iu(t), o.updater = ll, t.stateNode = o, o._reactInternals = t, Wi(t, r, e, n), t = Qi(null, t, r, !0, l, n)) : (t.tag = 0, G && l && Tu(t), xe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (go(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = th(r), e = be(r, e), o) {
          case 0:
            t = Ki(null, t, r, e, n);
            break e;
          case 1:
            t = da(null, t, r, e, n);
            break e;
          case 11:
            t = ca(null, t, r, e, n);
            break e;
          case 14:
            t = fa(null, t, r, be(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), Ki(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), da(e, t, r, o, n);
    case 3:
      e: {
        if (jf(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, df(e, t), jo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = In(Error(S(423)), t), t = pa(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = In(Error(S(424)), t), t = pa(e, t, r, n, o);
            break e;
          } else
            for (Ae = It(t.stateNode.containerInfo.firstChild), Fe = t, G = !0, tt = null, n = cf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (On(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pf(t), e === null && Ui(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Mi(r, o) ? i = null : l !== null && Mi(r, l) && (t.flags |= 32), Df(e, t), xe(e, t, i, n), t.child;
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return Uf(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : xe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), ca(e, t, r, o, n);
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, W(Fo, r._currentValue), r._currentValue = i, l !== null)
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
                  throw Error(S(341));
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
        xe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, _n(t, n), o = Ge(o), r = r(o), t.flags |= 1, xe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = be(r, t.pendingProps), o = be(r.type, o), fa(e, t, r, o, n);
    case 15:
      return Af(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), go(e, t), t.tag = 1, ze(r) ? (e = !0, Io(t)) : e = !1, _n(t, n), $f(t, r, o), Wi(t, r, o, n), Qi(null, t, r, !0, e, n);
    case 19:
      return Bf(e, t, n);
    case 22:
      return Ff(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function rd(e, t) {
  return Rc(e, t);
}
function eh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Qe(e, t, n, r) {
  return new eh(e, t, n, r);
}
function Zu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function th(e) {
  if (typeof e == "function")
    return Zu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === hu)
      return 11;
    if (e === yu)
      return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function So(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    Zu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case cn:
          return Jt(n.children, o, l, t);
        case mu:
          i = 8, o |= 8;
          break;
        case pi:
          return e = Qe(12, n, t, o | 2), e.elementType = pi, e.lanes = l, e;
        case mi:
          return e = Qe(13, n, t, o), e.elementType = mi, e.lanes = l, e;
        case hi:
          return e = Qe(19, n, t, o), e.elementType = hi, e.lanes = l, e;
        case dc:
          return sl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cc:
                i = 10;
                break e;
              case fc:
                i = 9;
                break e;
              case hu:
                i = 11;
                break e;
              case yu:
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
function Jt(e, t, n, r) {
  return e = Qe(7, e, r, t), e.lanes = n, e;
}
function sl(e, t, n, r) {
  return e = Qe(22, e, r, t), e.elementType = dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ii(e, t, n) {
  return e = Qe(6, e, null, t), e.lanes = n, e;
}
function ui(e, t, n) {
  return t = Qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function nh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ju(e, t, n, r, o, l, i, u, s) {
  return e = new nh(e, t, n, u, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Qe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(l), e;
}
function rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: an, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function od(e) {
  if (!e)
    return Ut;
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
          if (ze(t.type)) {
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
    if (ze(n))
      return rf(e, n, t);
  }
  return t;
}
function ld(e, t, n, r, o, l, i, u, s) {
  return e = Ju(n, r, !0, e, o, l, i, u, s), e.context = od(null), n = e.current, r = Ce(), o = Ft(n), l = gt(r, o), l.callback = t ?? null, Mt(n, l, o), e.current.lanes = o, Mr(e, o, r), Oe(e, r), e;
}
function al(e, t, n, r) {
  var o = t.current, l = Ce(), i = Ft(o);
  return n = od(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(o, t, i), e !== null && (rt(e, o, i, l), mo(e, o, i)), i;
}
function Yo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ca(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qu(e, t) {
  Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function oh() {
  return null;
}
var id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function bu(e) {
  this._internalRoot = e;
}
cl.prototype.render = bu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  al(e, t, null, null);
};
cl.prototype.unmount = bu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function() {
      al(null, e, null, null);
    }), t[wt] = null;
  }
};
function cl(e) {
  this._internalRoot = e;
}
cl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++)
      ;
    Tt.splice(n, 0, e), n === 0 && Dc(e);
  }
};
function es(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ea() {
}
function lh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Yo(i);
        l.call(a);
      };
    }
    var i = ld(t, r, e, 0, null, !1, !1, "", Ea);
    return e._reactRootContainer = i, e[wt] = i.current, xr(e.nodeType === 8 ? e.parentNode : e), nn(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Yo(s);
      u.call(a);
    };
  }
  var s = Ju(e, 0, !1, null, null, !1, !1, "", Ea);
  return e._reactRootContainer = s, e[wt] = s.current, xr(e.nodeType === 8 ? e.parentNode : e), nn(function() {
    al(t, s, n, r);
  }), s;
}
function dl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Yo(i);
        u.call(s);
      };
    }
    al(t, i, e, o);
  } else
    i = lh(n, t, e, o, r);
  return Yo(i);
}
Ic = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = nr(t.pendingLanes);
        n !== 0 && (wu(t, n | 1), Oe(t, te()), !(M & 6) && (Mn = te() + 500, Wt()));
      }
      break;
    case 13:
      nn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = Ce();
          rt(r, e, 1, o);
        }
      }), qu(e, 1);
  }
};
Su = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Ce();
      rt(t, e, 134217728, n);
    }
    qu(e, 134217728);
  }
};
Mc = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = St(e, t);
    if (n !== null) {
      var r = Ce();
      rt(n, e, t, r);
    }
    qu(e, t);
  }
};
Ac = function() {
  return U;
};
Fc = function(e, t) {
  var n = U;
  try {
    return U = e, t();
  } finally {
    U = n;
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
            var o = nl(r);
            if (!o)
              throw Error(S(90));
            mc(r), vi(r, o);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
Cc = Yu;
Ec = nn;
var ih = { usingClientEntryPoint: !1, Events: [Fr, mn, nl, kc, xc, Yu] }, Zn = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, uh = { bundleType: Zn.bundleType, version: Zn.version, rendererPackageName: Zn.rendererPackageName, rendererConfig: Zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zn.findFiberByHostInstance || oh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!io.isDisabled && io.supportsFiber)
    try {
      qo = io.inject(uh), ct = io;
    } catch {
    }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!es(t))
    throw Error(S(200));
  return rh(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!es(e))
    throw Error(S(299));
  var n = !1, r = "", o = id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ju(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, xr(e.nodeType === 8 ? e.parentNode : e), new bu(t);
};
Ue.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return nn(e);
};
Ue.hydrate = function(e, t, n) {
  if (!fl(t))
    throw Error(S(200));
  return dl(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!es(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = id;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = ld(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, xr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new cl(t);
};
Ue.render = function(e, t, n) {
  if (!fl(t))
    throw Error(S(200));
  return dl(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!fl(e))
    throw Error(S(40));
  return e._reactRootContainer ? (nn(function() {
    dl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = Yu;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fl(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return dl(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function ud() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (e) {
      console.error(e);
    }
}
ud(), ic.exports = Ue;
var sh = ic.exports, sd, _a = sh;
sd = _a.createRoot, _a.hydrateRoot;
function ah(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Pa = "$$material";
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
function pl(e, t) {
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
var ch = !1;
function fh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function dh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ph = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !ch : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(dh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = fh(o);
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
}(), we = "-ms-", Go = "-moz-", D = "-webkit-", ad = "comm", ts = "rule", ns = "decl", mh = "@import", cd = "@keyframes", hh = "@layer", yh = Math.abs, ml = String.fromCharCode, gh = Object.assign;
function vh(e, t) {
  return pe(e, 0) ^ 45 ? (((t << 2 ^ pe(e, 0)) << 2 ^ pe(e, 1)) << 2 ^ pe(e, 2)) << 2 ^ pe(e, 3) : 0;
}
function fd(e) {
  return e.trim();
}
function wh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function ou(e, t) {
  return e.indexOf(t);
}
function pe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Or(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function rs(e) {
  return e.length;
}
function uo(e, t) {
  return t.push(e), e;
}
function Sh(e, t) {
  return e.map(t).join("");
}
var hl = 1, An = 1, dd = 0, Le = 0, re = 0, Un = "";
function yl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: hl, column: An, length: i, return: "" };
}
function Jn(e, t) {
  return gh(yl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function kh() {
  return re;
}
function xh() {
  return re = Le > 0 ? pe(Un, --Le) : 0, An--, re === 10 && (An = 1, hl--), re;
}
function De() {
  return re = Le < dd ? pe(Un, Le++) : 0, An++, re === 10 && (An = 1, hl++), re;
}
function dt() {
  return pe(Un, Le);
}
function ko() {
  return Le;
}
function jr(e, t) {
  return Or(Un, e, t);
}
function Lr(e) {
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
function pd(e) {
  return hl = An = 1, dd = ut(Un = e), Le = 0, [];
}
function md(e) {
  return Un = "", e;
}
function xo(e) {
  return fd(jr(Le - 1, lu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ch(e) {
  for (; (re = dt()) && re < 33; )
    De();
  return Lr(e) > 2 || Lr(re) > 3 ? "" : " ";
}
function Eh(e, t) {
  for (; --t && De() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return jr(e, ko() + (t < 6 && dt() == 32 && De() == 32));
}
function lu(e) {
  for (; De(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lu(re);
        break;
      case 40:
        e === 41 && lu(e);
        break;
      case 92:
        De();
        break;
    }
  return Le;
}
function _h(e, t) {
  for (; De() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && dt() === 47)
      break;
  return "/*" + jr(t, Le - 1) + "*" + ml(e === 47 ? e : De());
}
function Ph(e) {
  for (; !Lr(dt()); )
    De();
  return jr(e, Le);
}
function Th(e) {
  return md(Co("", null, null, null, [""], e = pd(e), 0, [0], e));
}
function Co(e, t, n, r, o, l, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, v = 0, g = 0, y = 1, _ = 1, f = 1, c = 0, d = "", w = o, x = l, C = r, k = d; _; )
    switch (g = c, c = De()) {
      case 40:
        if (g != 108 && pe(k, m - 1) == 58) {
          ou(k += j(xo(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += xo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ch(g);
        break;
      case 92:
        k += Eh(ko() - 1, 7);
        continue;
      case 47:
        switch (dt()) {
          case 42:
          case 47:
            uo(Nh(_h(De(), ko()), t, n), s);
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
            f == -1 && (k = j(k, /\f/g, "")), v > 0 && ut(k) - m && uo(v > 32 ? Na(k + ";", r, n, m - 1) : Na(j(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (uo(C = Ta(k, t, n, a, h, o, u, d, w = [], x = [], m), l), c === 123)
              if (h === 0)
                Co(k, t, C, C, w, l, m, u, x);
              else
                switch (p === 99 && pe(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Co(e, C, C, r && uo(Ta(e, C, C, 0, 0, o, u, d, o, w = [], m), x), o, x, m, u, r ? w : x);
                    break;
                  default:
                    Co(k, C, C, C, [""], x, 0, u, x);
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
          else if (c == 125 && y++ == 0 && xh() == 125)
            continue;
        }
        switch (k += ml(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(k) - 1) * f, f = 1;
            break;
          case 64:
            dt() === 45 && (k += xo(De())), p = dt(), h = m = ut(d = k += Ph(ko())), c++;
            break;
          case 45:
            g === 45 && ut(k) == 2 && (y = 0);
        }
    }
  return l;
}
function Ta(e, t, n, r, o, l, i, u, s, a, h) {
  for (var m = o - 1, p = o === 0 ? l : [""], v = rs(p), g = 0, y = 0, _ = 0; g < r; ++g)
    for (var f = 0, c = Or(e, m + 1, m = yh(y = i[g])), d = e; f < v; ++f)
      (d = fd(y > 0 ? p[f] + " " + c : j(c, /&\f/g, p[f]))) && (s[_++] = d);
  return yl(e, t, n, o === 0 ? ts : u, s, a, h);
}
function Nh(e, t, n) {
  return yl(e, t, n, ad, ml(kh()), Or(e, 2, -2), 0);
}
function Na(e, t, n, r) {
  return yl(e, t, n, ns, Or(e, 0, r), Or(e, r + 1, -1), r);
}
function Tn(e, t) {
  for (var n = "", r = rs(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Rh(e, t, n, r) {
  switch (e.type) {
    case hh:
      if (e.children.length)
        break;
    case mh:
    case ns:
      return e.return = e.return || e.value;
    case ad:
      return "";
    case cd:
      return e.return = e.value + "{" + Tn(e.children, r) + "}";
    case ts:
      e.value = e.props.join(",");
  }
  return ut(n = Tn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function zh(e) {
  var t = rs(e);
  return function(n, r, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, o, l) || "";
    return i;
  };
}
function Oh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function hd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Lh = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = dt(), o === 38 && l === 12 && (n[r] = 1), !Lr(l); )
    De();
  return jr(t, Le);
}, $h = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Lr(o)) {
      case 0:
        o === 38 && dt() === 12 && (n[r] = 1), t[r] += Lh(Le - 1, n, r);
        break;
      case 2:
        t[r] += xo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ml(o);
    }
  while (o = De());
  return t;
}, Ih = function(t, n) {
  return md($h(pd(t), n));
}, Ra = /* @__PURE__ */ new WeakMap(), Mh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ra.get(r)) && !o) {
      Ra.set(t, !0);
      for (var l = [], i = Ih(n, l), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = l[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Ah = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function yd(e, t) {
  switch (vh(e, t)) {
    case 5103:
      return D + "print-" + e + e;
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
      return D + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Go + e + we + e + e;
    case 6828:
    case 4268:
      return D + e + we + e + e;
    case 6165:
      return D + e + we + "flex-" + e + e;
    case 5187:
      return D + e + j(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + we + "flex-$1$2") + e;
    case 5443:
      return D + e + we + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return D + e + we + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return D + e + we + j(e, "shrink", "negative") + e;
    case 5292:
      return D + e + we + j(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + j(e, "-grow", "") + D + e + we + j(e, "grow", "positive") + e;
    case 4554:
      return D + j(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + we + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, D + "$1$2") + e;
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
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Go + (pe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ou(e, "stretch") ? yd(j(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (pe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (pe(e, ut(e) - 3 - (~ou(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + D) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (pe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + we + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (pe(e, t + 11)) {
        case 114:
          return D + e + we + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + we + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + we + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + we + e + e;
  }
  return e;
}
var Fh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ns:
        t.return = yd(t.value, t.length);
        break;
      case cd:
        return Tn([Jn(t, {
          value: j(t.value, "@", "@" + D)
        })], o);
      case ts:
        if (t.length)
          return Sh(t.props, function(l) {
            switch (wh(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Tn([Jn(t, {
                  props: [j(l, /:(read-\w+)/, ":" + Go + "$1")]
                })], o);
              case "::placeholder":
                return Tn([Jn(t, {
                  props: [j(l, /:(plac\w+)/, ":" + D + "input-$1")]
                }), Jn(t, {
                  props: [j(l, /:(plac\w+)/, ":" + Go + "$1")]
                }), Jn(t, {
                  props: [j(l, /:(plac\w+)/, we + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Dh = [Fh], jh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var _ = y.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Dh, l = {}, i, u = [];
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
  var s, a = [Mh, Ah];
  {
    var h, m = [Rh, Oh(function(y) {
      h.insert(y);
    })], p = zh(a.concat(o, m)), v = function(_) {
      return Tn(Th(_), p);
    };
    s = function(_, f, c, d) {
      h = c, v(_ ? _ + "{" + f.styles + "}" : f.styles), d && (g.inserted[f.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new ph({
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
}, gd = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = typeof Symbol == "function" && Symbol.for, os = ce ? Symbol.for("react.element") : 60103, ls = ce ? Symbol.for("react.portal") : 60106, gl = ce ? Symbol.for("react.fragment") : 60107, vl = ce ? Symbol.for("react.strict_mode") : 60108, wl = ce ? Symbol.for("react.profiler") : 60114, Sl = ce ? Symbol.for("react.provider") : 60109, kl = ce ? Symbol.for("react.context") : 60110, is = ce ? Symbol.for("react.async_mode") : 60111, xl = ce ? Symbol.for("react.concurrent_mode") : 60111, Cl = ce ? Symbol.for("react.forward_ref") : 60112, El = ce ? Symbol.for("react.suspense") : 60113, Uh = ce ? Symbol.for("react.suspense_list") : 60120, _l = ce ? Symbol.for("react.memo") : 60115, Pl = ce ? Symbol.for("react.lazy") : 60116, Bh = ce ? Symbol.for("react.block") : 60121, Hh = ce ? Symbol.for("react.fundamental") : 60117, Wh = ce ? Symbol.for("react.responder") : 60118, Vh = ce ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case os:
        switch (e = e.type, e) {
          case is:
          case xl:
          case gl:
          case wl:
          case vl:
          case El:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case kl:
              case Cl:
              case Pl:
              case _l:
              case Sl:
                return e;
              default:
                return t;
            }
        }
      case ls:
        return t;
    }
  }
}
function vd(e) {
  return He(e) === xl;
}
B.AsyncMode = is;
B.ConcurrentMode = xl;
B.ContextConsumer = kl;
B.ContextProvider = Sl;
B.Element = os;
B.ForwardRef = Cl;
B.Fragment = gl;
B.Lazy = Pl;
B.Memo = _l;
B.Portal = ls;
B.Profiler = wl;
B.StrictMode = vl;
B.Suspense = El;
B.isAsyncMode = function(e) {
  return vd(e) || He(e) === is;
};
B.isConcurrentMode = vd;
B.isContextConsumer = function(e) {
  return He(e) === kl;
};
B.isContextProvider = function(e) {
  return He(e) === Sl;
};
B.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === os;
};
B.isForwardRef = function(e) {
  return He(e) === Cl;
};
B.isFragment = function(e) {
  return He(e) === gl;
};
B.isLazy = function(e) {
  return He(e) === Pl;
};
B.isMemo = function(e) {
  return He(e) === _l;
};
B.isPortal = function(e) {
  return He(e) === ls;
};
B.isProfiler = function(e) {
  return He(e) === wl;
};
B.isStrictMode = function(e) {
  return He(e) === vl;
};
B.isSuspense = function(e) {
  return He(e) === El;
};
B.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === gl || e === xl || e === wl || e === vl || e === El || e === Uh || typeof e == "object" && e !== null && (e.$$typeof === Pl || e.$$typeof === _l || e.$$typeof === Sl || e.$$typeof === kl || e.$$typeof === Cl || e.$$typeof === Hh || e.$$typeof === Wh || e.$$typeof === Vh || e.$$typeof === Bh);
};
B.typeOf = He;
gd.exports = B;
var Kh = gd.exports, wd = Kh, Qh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sd = {};
Sd[wd.ForwardRef] = Qh;
Sd[wd.Memo] = Yh;
var Gh = !0;
function kd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var us = function(t, n, r) {
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
  Gh === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ss = function(t, n, r) {
  us(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + o : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function Xh(e) {
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
var Zh = {
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
}, Jh = !1, qh = /[A-Z]|^ms/g, bh = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xd = function(t) {
  return t.charCodeAt(1) === 45;
}, za = function(t) {
  return t != null && typeof t != "boolean";
}, si = /* @__PURE__ */ hd(function(e) {
  return xd(e) ? e : e.replace(qh, "-$&").toLowerCase();
}), Oa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(bh, function(r, o, l) {
          return st = {
            name: o,
            styles: l,
            next: st
          }, o;
        });
  }
  return Zh[t] !== 1 && !xd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ey = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function $r(e, t, n) {
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
      return ty(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, $r(e, t, a);
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
function ty(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += $r(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += l + "{" + t[u] + "}" : za(u) && (r += si(l) + ":" + Oa(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && Jh)
          throw new Error(ey);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            za(i[s]) && (r += si(l) + ":" + Oa(l, i[s]) + ";");
        else {
          var a = $r(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += si(l) + ":" + a + ";";
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
var La = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Tl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  st = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += $r(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += $r(n, t, e[u]), r) {
      var s = l;
      o += s[u];
    }
  La.lastIndex = 0;
  for (var a = "", h; (h = La.exec(o)) !== null; )
    a += "-" + h[1];
  var m = Xh(o) + a;
  return {
    name: m,
    styles: o,
    next: st
  };
}
var ny = function(t) {
  return t();
}, Cd = fi["useInsertionEffect"] ? fi["useInsertionEffect"] : !1, Ed = Cd || ny, $a = Cd || z.useLayoutEffect, ry = !1, _d = /* @__PURE__ */ z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ jh({
    key: "css"
  }) : null
);
_d.Provider;
var as = function(t) {
  return /* @__PURE__ */ z.forwardRef(function(n, r) {
    var o = z.useContext(_d);
    return t(n, o, r);
  });
}, Ur = /* @__PURE__ */ z.createContext({}), cs = {}.hasOwnProperty, iu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", oy = function(t, n) {
  var r = {};
  for (var o in n)
    cs.call(n, o) && (r[o] = n[o]);
  return r[iu] = t, r;
}, ly = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return us(n, r, o), Ed(function() {
    return ss(n, r, o);
  }), null;
}, iy = /* @__PURE__ */ as(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[iu], l = [r], i = "";
  typeof e.className == "string" ? i = kd(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = Tl(l, void 0, z.useContext(Ur));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    cs.call(e, a) && a !== "css" && a !== iu && !ry && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ly, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ z.createElement(o, s));
}), uy = iy, ai = { exports: {} }, Ia;
function sy() {
  return Ia || (Ia = 1, function(e) {
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
  }(ai)), ai.exports;
}
sy();
var Ma = function(t, n) {
  var r = arguments;
  if (n == null || !cs.call(n, "css"))
    return z.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = uy, l[1] = oy(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return z.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ma || (Ma = {}));
var ay = /* @__PURE__ */ as(function(e, t) {
  var n = e.styles, r = Tl([n], void 0, z.useContext(Ur)), o = z.useRef();
  return $a(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), $a(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && ss(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), cy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fy = /* @__PURE__ */ hd(
  function(e) {
    return cy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), dy = !1, py = fy, my = function(t) {
  return t !== "theme";
}, Aa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? py : my;
}, Fa = function(t, n, r) {
  var o;
  if (n) {
    var l = n.shouldForwardProp;
    o = t.__emotion_forwardProp && l ? function(i) {
      return t.__emotion_forwardProp(i) && l(i);
    } : l;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, hy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return us(n, r, o), Ed(function() {
    return ss(n, r, o);
  }), null;
}, yy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var u = Fa(t, n, r), s = u || Aa(o), a = !s("as");
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
    var y = as(function(_, f, c) {
      var d = a && _.as || o, w = "", x = [], C = _;
      if (_.theme == null) {
        C = {};
        for (var k in _)
          C[k] = _[k];
        C.theme = z.useContext(Ur);
      }
      typeof _.className == "string" ? w = kd(f.registered, x, _.className) : _.className != null && (w = _.className + " ");
      var E = Tl(m.concat(x), f.registered, C);
      w += f.key + "-" + E.name, i !== void 0 && (w += " " + i);
      var A = a && u === void 0 ? Aa(d) : s, R = {};
      for (var H in _)
        a && H === "as" || A(H) && (R[H] = _[H]);
      return R.className = w, c && (R.ref = c), /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(hy, {
        cache: f,
        serialized: E,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ z.createElement(d, R));
    });
    return y.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && dy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(_, f) {
      var c = e(_, he({}, n, f, {
        shouldForwardProp: Fa(y, f, !0)
      }));
      return c.apply(void 0, m);
    }, y;
  };
}, gy = [
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
], Da = yy.bind(null);
gy.forEach(function(e) {
  Da[e] = Da(e);
});
function vy(e) {
  return e == null || Object.keys(e).length === 0;
}
function wy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ I(ay, {
    styles: typeof t == "function" ? (o) => t(vy(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ja = [];
function Sy(e) {
  return ja[0] = e, Tl(ja);
}
function sn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pd(e) {
  if (/* @__PURE__ */ z.isValidElement(e) || !sn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pd(e[n]);
  }), t;
}
function Xo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? he({}, e) : e;
  return sn(e) && sn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ z.isValidElement(t[o]) ? r[o] = t[o] : sn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && sn(e[o]) ? r[o] = Xo(e[o], t[o], n) : n.clone ? r[o] = sn(t[o]) ? Pd(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const ky = ["values", "unit", "step"], xy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => he({}, n, {
    [r.key]: r.val
  }), {});
};
function Cy(e) {
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
  } = e, o = pl(e, ky), l = xy(t), i = Object.keys(l);
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
const Ey = {
  borderRadius: 4
}, _y = Ey;
function pr(e, t) {
  return t ? Xo(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fs = {
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
}, Ua = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fs[e]}px)`
};
function xt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Ua;
    return t.reduce((i, u, s) => (i[l.up(l.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Ua;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(l.values || fs).indexOf(u) !== -1) {
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
function Py(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const l = e.up(o);
    return r[l] = {}, r;
  }, {})) || {};
}
function Ba(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Td(e) {
  if (typeof e != "string")
    throw new Error(ah(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Nl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Zo(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Nl(e, n) || r, t && (o = t(o, r, e)), o;
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
    const u = i[t], s = i.theme, a = Nl(s, r) || {};
    return xt(i, u, (m) => {
      let p = Zo(a, o, m);
      return m === p && typeof m == "string" && (p = Zo(a, o, `${t}${m === "default" ? "" : Td(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function Ty(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ny = {
  m: "margin",
  p: "padding"
}, Ry = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ha = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, zy = Ty((e) => {
  if (e.length > 2)
    if (Ha[e])
      e = Ha[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ny[t], o = Ry[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), ds = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ps = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ds, ...ps];
function Br(e, t, n, r) {
  var o;
  const l = (o = Nl(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function Nd(e) {
  return Br(e, "spacing", 8);
}
function Hr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Oy(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Hr(t, n), r), {});
}
function Ly(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = zy(n), l = Oy(o, r), i = e[n];
  return xt(e, i, l);
}
function Rd(e, t) {
  const n = Nd(e.theme);
  return Object.keys(e).map((r) => Ly(e, t, r, n)).reduce(pr, {});
}
function q(e) {
  return Rd(e, ds);
}
q.propTypes = {};
q.filterProps = ds;
function b(e) {
  return Rd(e, ps);
}
b.propTypes = {};
b.filterProps = ps;
function $y(e = 8) {
  if (e.mui)
    return e;
  const t = Nd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((l) => {
    const i = t(l);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Rl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? pr(o, t[l](r)) : o, {});
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
const Iy = Ze("border", Ke), My = Ze("borderTop", Ke), Ay = Ze("borderRight", Ke), Fy = Ze("borderBottom", Ke), Dy = Ze("borderLeft", Ke), jy = Ze("borderColor"), Uy = Ze("borderTopColor"), By = Ze("borderRightColor"), Hy = Ze("borderBottomColor"), Wy = Ze("borderLeftColor"), Vy = Ze("outline", Ke), Ky = Ze("outlineColor"), zl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Br(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Hr(t, r)
    });
    return xt(e, e.borderRadius, n);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["borderRadius"];
Rl(Iy, My, Ay, Fy, Dy, jy, Uy, By, Hy, Wy, zl, Vy, Ky);
const Ol = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Br(e.theme, "spacing", 8), n = (r) => ({
      gap: Hr(t, r)
    });
    return xt(e, e.gap, n);
  }
  return null;
};
Ol.propTypes = {};
Ol.filterProps = ["gap"];
const Ll = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Br(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Hr(t, r)
    });
    return xt(e, e.columnGap, n);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ["columnGap"];
const $l = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Br(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Hr(t, r)
    });
    return xt(e, e.rowGap, n);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ["rowGap"];
const Qy = ne({
  prop: "gridColumn"
}), Yy = ne({
  prop: "gridRow"
}), Gy = ne({
  prop: "gridAutoFlow"
}), Xy = ne({
  prop: "gridAutoColumns"
}), Zy = ne({
  prop: "gridAutoRows"
}), Jy = ne({
  prop: "gridTemplateColumns"
}), qy = ne({
  prop: "gridTemplateRows"
}), by = ne({
  prop: "gridTemplateAreas"
}), eg = ne({
  prop: "gridArea"
});
Rl(Ol, Ll, $l, Qy, Yy, Gy, Xy, Zy, Jy, qy, by, eg);
function Nn(e, t) {
  return t === "grey" ? t : e;
}
const tg = ne({
  prop: "color",
  themeKey: "palette",
  transform: Nn
}), ng = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nn
}), rg = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nn
});
Rl(tg, ng, rg);
function Me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const og = ne({
  prop: "width",
  transform: Me
}), ms = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const l = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || fs[n];
      return l ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${l}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: l
      } : {
        maxWidth: Me(n)
      };
    };
    return xt(e, e.maxWidth, t);
  }
  return null;
};
ms.filterProps = ["maxWidth"];
const lg = ne({
  prop: "minWidth",
  transform: Me
}), ig = ne({
  prop: "height",
  transform: Me
}), ug = ne({
  prop: "maxHeight",
  transform: Me
}), sg = ne({
  prop: "minHeight",
  transform: Me
});
ne({
  prop: "size",
  cssProperty: "width",
  transform: Me
});
ne({
  prop: "size",
  cssProperty: "height",
  transform: Me
});
const ag = ne({
  prop: "boxSizing"
});
Rl(og, ms, lg, ig, ug, sg, ag);
const cg = {
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
    style: zl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Nn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Nn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Nn
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
    style: Ol
  },
  rowGap: {
    style: $l
  },
  columnGap: {
    style: Ll
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
    transform: Me
  },
  maxWidth: {
    style: ms
  },
  minWidth: {
    transform: Me
  },
  height: {
    transform: Me
  },
  maxHeight: {
    transform: Me
  },
  minHeight: {
    transform: Me
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
}, zd = cg;
function fg(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function dg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pg() {
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
    const p = Nl(o, a) || {};
    return m ? m(i) : xt(i, r, (g) => {
      let y = Zo(p, h, g);
      return g === y && typeof g == "string" && (y = Zo(p, h, `${n}${g === "default" ? "" : Td(g)}`, g)), s === !1 ? y : {
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
    const u = (r = l.unstable_sxConfig) != null ? r : zd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(l);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const m = Py(l.breakpoints), p = Object.keys(m);
      let v = m;
      return Object.keys(h).forEach((g) => {
        const y = dg(h[g], l);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = pr(v, e(g, y, l, u));
            else {
              const _ = xt({
                theme: l
              }, y, (f) => ({
                [g]: f
              }));
              fg(_, y) ? v[g] = t({
                sx: y,
                theme: l,
                nested: !0
              }) : v = pr(v, _);
            }
          else
            v = pr(v, e(g, y, l, u));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Ba(p, v)
      } : Ba(p, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Od = pg();
Od.filterProps = ["sx"];
const mg = Od;
function hg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const yg = ["breakpoints", "palette", "spacing", "shape"];
function gg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: l = {}
  } = e, i = pl(e, yg), u = Cy(n), s = $y(o);
  let a = Xo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: he({
      mode: "light"
    }, r),
    spacing: s,
    shape: he({}, _y, l)
  }, i);
  return a.applyStyles = hg, a = t.reduce((h, m) => Xo(h, m), a), a.unstable_sxConfig = he({}, zd, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return mg({
      sx: m,
      theme: this
    });
  }, a;
}
function vg(e) {
  return Object.keys(e).length === 0;
}
function hs(e = null) {
  const t = z.useContext(Ur);
  return !t || vg(t) ? e : t;
}
const wg = gg();
function Sg(e = wg) {
  return hs(e);
}
function ci(e) {
  const t = Sy(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function kg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Sg(n), o = t && r[t] || r;
  let l = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => ci(typeof i == "function" ? i(o) : i)) : l = ci(l)), /* @__PURE__ */ I(wy, {
    styles: l
  });
}
const xg = typeof window < "u" ? z.useLayoutEffect : z.useEffect, Cg = xg;
let Wa = 0;
function Eg(e) {
  const [t, n] = z.useState(e), r = e || t;
  return z.useEffect(() => {
    t == null && (Wa += 1, n(`mui-${Wa}`));
  }, [t]), r;
}
const Va = fi["useId".toString()];
function _g(e) {
  if (Va !== void 0) {
    const t = Va();
    return e ?? t;
  }
  return Eg(e);
}
const Pg = /* @__PURE__ */ z.createContext(null), Ld = Pg;
function $d() {
  return z.useContext(Ld);
}
const Tg = typeof Symbol == "function" && Symbol.for, Ng = Tg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Rg(e, t) {
  return typeof t == "function" ? t(e) : he({}, e, t);
}
function zg(e) {
  const {
    children: t,
    theme: n
  } = e, r = $d(), o = z.useMemo(() => {
    const l = r === null ? n : Rg(r, n);
    return l != null && (l[Ng] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ I(Ld.Provider, {
    value: o,
    children: t
  });
}
const Og = ["value"], Lg = /* @__PURE__ */ z.createContext();
function $g(e) {
  let {
    value: t
  } = e, n = pl(e, Og);
  return /* @__PURE__ */ I(Lg.Provider, he({
    value: t ?? !0
  }, n));
}
const Ig = /* @__PURE__ */ z.createContext(void 0);
function Mg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ I(Ig.Provider, {
    value: e,
    children: t
  });
}
function Ag(e) {
  const t = hs(), n = _g() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Cg(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ I(kg, {
    styles: o
  }) : null;
}
const Ka = {};
function Qa(e, t, n, r = !1) {
  return z.useMemo(() => {
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
function Fg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = hs(Ka), l = $d() || Ka, i = Qa(r, o, n), u = Qa(r, l, n, !0), s = i.direction === "rtl", a = Ag(i);
  return /* @__PURE__ */ I(zg, {
    theme: u,
    children: /* @__PURE__ */ I(Ur.Provider, {
      value: i,
      children: /* @__PURE__ */ I($g, {
        value: s,
        children: /* @__PURE__ */ qe(Mg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Dg = ["theme"];
function qn(e) {
  let {
    theme: t
  } = e, n = pl(e, Dg);
  const r = t[Pa];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = he({}, r, {
    vars: null
  }) : t && !t.vars && (o = he({}, t, {
    vars: null
  }))), /* @__PURE__ */ I(Fg, he({}, n, {
    themeId: r ? Pa : void 0,
    theme: o
  }));
}
const bn = 1200, un = 1200;
function Ya(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.onload = () => t(r), r.onerror = () => n(new Error(`Could not load ${e}`)), r.src = e;
  });
}
function jg(e) {
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
function Ug({
  cutoutUrl: e,
  cutoutAssetId: t,
  cutoutFingerprint: n,
  backgrounds: r,
  initial: o,
  onSave: l,
  buildAssetUrl: i
}) {
  var Y;
  const u = z.useRef(null), [s, a] = z.useState(null), [h, m] = z.useState({}), [p, v] = z.useState(
    (o == null ? void 0 : o.backgroundId) ?? ((Y = r[0]) == null ? void 0 : Y.id) ?? null
  ), [g, y] = z.useState(!1), [_, f] = z.useState(null), [c, d] = z.useState(null), [w, x] = z.useState(!1), [C, k] = z.useState(!1), E = z.useRef(null), A = z.useCallback(
    (N) => ({
      cx: N.anchorX,
      by: N.anchorBottom,
      h: N.headshotHeight,
      flipped: !1,
      cutoutAssetId: t,
      cutoutFingerprint: n
    }),
    [t, n]
  ), [R, H] = z.useState(() => o ? o.layout : r[0] ? A(r[0]) : { cx: 0.5, by: 1, h: 0.85, flipped: !1, cutoutAssetId: t, cutoutFingerprint: n }), fe = r.find((N) => N.id === p) ?? null, Vt = !!o && !C && !!o.layout.cutoutFingerprint && o.layout.cutoutFingerprint !== n;
  z.useEffect(() => {
    let N = !1;
    return (async () => {
      try {
        const [F, ...V] = await Promise.all([
          Ya(e),
          ...r.map((ue) => Ya(ue.url))
        ]);
        if (N)
          return;
        a(F), x(!jg(F));
        const $e = {};
        r.forEach((ue, Pe) => $e[ue.id] = V[Pe]), m($e);
      } catch (F) {
        N || f(F.message);
      }
    })(), () => {
      N = !0;
    };
  }, [e, r]), z.useEffect(() => {
    const N = u.current;
    if (!N || !s || !fe)
      return;
    const F = h[fe.id];
    if (!F)
      return;
    const V = N.getContext("2d");
    if (!V)
      return;
    V.clearRect(0, 0, bn, un);
    const $e = Math.max(bn / F.naturalWidth, un / F.naturalHeight), ue = F.naturalWidth * $e, Pe = F.naturalHeight * $e;
    V.drawImage(F, (bn - ue) / 2, (un - Pe) / 2, ue, Pe);
    const Ml = un * R.h, ys = Ml * (s.naturalWidth / s.naturalHeight);
    V.save(), V.translate(R.cx * bn, R.by * un), R.flipped && V.scale(-1, 1), V.drawImage(s, -ys / 2, -Ml, ys, Ml), V.restore();
  }, [s, h, fe, R]);
  const Wr = (N) => {
    v(N.id), H(A(N)), k(!0);
  }, Il = (N) => {
    N.currentTarget.setPointerCapture(N.pointerId), E.current = { startX: N.clientX, startY: N.clientY, cx: R.cx, by: R.by };
  }, Bn = (N) => {
    const F = E.current;
    if (!F)
      return;
    const V = N.currentTarget.getBoundingClientRect(), $e = (N.clientX - F.startX) / V.width, ue = (N.clientY - F.startY) / V.height;
    H((Pe) => ({ ...Pe, cx: F.cx + $e, by: F.by + ue }));
  }, Hn = () => {
    E.current = null;
  }, P = (N) => {
    H((F) => {
      const V = F.h * (N.deltaY < 0 ? 1.03 : 0.97);
      return { ...F, h: Math.min(1.6, Math.max(0.1, V)) };
    });
  }, O = () => fe && H(A(fe)), L = z.useCallback(async () => {
    const N = u.current;
    if (!(!N || !fe)) {
      y(!0), f(null), d(null);
      try {
        const F = await new Promise(
          ($e, ue) => N.toBlob(
            (Pe) => Pe ? $e(Pe) : ue(new Error("Canvas export failed")),
            "image/jpeg",
            0.92
          )
        ), V = await l(F, { ...R, cutoutAssetId: t, cutoutFingerprint: n }, fe);
        d(V);
      } catch (F) {
        f(F.message);
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
      Vt && /* @__PURE__ */ qe(
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
          width: bn,
          height: un,
          style: {
            width: "100%",
            aspectRatio: "1 / 1",
            touchAction: "none",
            cursor: "grab",
            borderRadius: 8
          },
          onPointerDown: Il,
          onPointerMove: Bn,
          onPointerUp: Hn,
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
            onClick: () => Wr(N),
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
            onChange: (N) => H((F) => ({ ...F, h: Number(N.target.value) })),
            style: { width: "100%" }
          }
        )
      ] }),
      /* @__PURE__ */ qe("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ I("button", { onClick: () => H((N) => ({ ...N, flipped: !N.flipped })), children: "Flip" }),
        /* @__PURE__ */ I("button", { onClick: O, children: "Reset" })
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
function Bg(e = /* @__PURE__ */ new Date()) {
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
function Hg(e) {
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
function Wg(e) {
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
async function Vg(e) {
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
    const A = (i = (l = E.relations) == null ? void 0 : l.EPAMComposerBackgroundToAsset) == null ? void 0 : i.href;
    if (!A)
      continue;
    const R = await e.raw.getAsync(A);
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
  return r.sort((E, A) => E.sortOrder - A.sortOrder);
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
async function Qg(e, t) {
  var o;
  if (!((o = e.raw) != null && o.getAsync))
    return null;
  const n = await e.raw.getAsync(
    `/api/entities/${t}?members=properties`
  );
  if (!n.isSuccessStatusCode || !n.content)
    return null;
  const r = n.content.properties ?? {};
  return Kg(r.CompositionLayout ?? r.compositionLayout);
}
async function Yg(e, t, n) {
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
  const i = Hg(l == null ? void 0 : l.content) || Wg(l == null ? void 0 : l.responseHeaders);
  if (!i)
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  return i;
}
async function Gg(e, t) {
  var i;
  const r = `${t.fileName.replace(/\.[^.]+$/, "") || "composed"}-${Bg()}.jpg`, o = await Yg(e, t.blob, r);
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
async function Xg(e, t) {
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
function Zg(e) {
  const t = sd(e);
  return {
    async render(n) {
      var l, i;
      const r = Number((l = n.options) == null ? void 0 : l.cutoutAssetId), o = (i = n.options) != null && i.composedAssetId ? Number(n.options.composedAssetId) : null;
      if (!r) {
        t.render(
          /* @__PURE__ */ I(qn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "No cutout asset was supplied." }) })
        );
        return;
      }
      try {
        const [u, s, a] = await Promise.all([
          Vg(n.client),
          Xg(n.client, r),
          o ? Qg(n.client, o) : Promise.resolve(null)
        ]);
        if (s.variant !== "cutout") {
          t.render(
            /* @__PURE__ */ I(qn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "This asset is not a cutout. Run background removal first." }) })
          );
          return;
        }
        if (u.length === 0) {
          t.render(
            /* @__PURE__ */ I(qn, { theme: n.theme, children: /* @__PURE__ */ I("div", { children: "No active composer backgrounds are set up yet." }) })
          );
          return;
        }
        t.render(
          /* @__PURE__ */ I(qn, { theme: n.theme, children: /* @__PURE__ */ I(
            Ug,
            {
              cutoutUrl: s.url,
              cutoutAssetId: s.assetId,
              cutoutFingerprint: s.fingerprint,
              backgrounds: u,
              initial: a ?? void 0,
              buildAssetUrl: (h) => `/en-us/asset/${h}`,
              onSave: (h, m, p) => Gg(n.client, {
                blob: h,
                fileName: `composed-${r}.jpg`,
                cutoutAssetId: r,
                background: p,
                layout: m
              })
            }
          ) })
        );
      } catch (u) {
        t.render(
          /* @__PURE__ */ I(qn, { theme: n.theme, children: /* @__PURE__ */ qe("div", { style: { color: "#b00020" }, children: [
            "Failed to load composer: ",
            u.message
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
  Zg as default
};
