function Ad(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i && Object.defineProperty(e, l, i.get ? i : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xa = { exports: {} }, Kl = {}, Za = { exports: {} }, A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr = Symbol.for("react.element"), Dd = Symbol.for("react.portal"), jd = Symbol.for("react.fragment"), Bd = Symbol.for("react.strict_mode"), Ud = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Hd = Symbol.for("react.context"), Vd = Symbol.for("react.forward_ref"), Kd = Symbol.for("react.suspense"), Qd = Symbol.for("react.memo"), Gd = Symbol.for("react.lazy"), hs = Symbol.iterator;
function Yd(e) {
  return e === null || typeof e != "object" ? null : (e = hs && e[hs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ja = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, qa = Object.assign, ba = {};
function $n(e, t, n) {
  this.props = e, this.context = t, this.refs = ba, this.updater = n || Ja;
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
function ec() {
}
ec.prototype = $n.prototype;
function lu(e, t, n) {
  this.props = e, this.context = t, this.refs = ba, this.updater = n || Ja;
}
var iu = lu.prototype = new ec();
iu.constructor = lu;
qa(iu, $n.prototype);
iu.isPureReactComponent = !0;
var ys = Array.isArray, tc = Object.prototype.hasOwnProperty, ou = { current: null }, nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null)
    for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      tc.call(t, r) && !nc.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: zr, type: e, key: i, ref: o, props: l, _owner: ou.current };
}
function Xd(e, t) {
  return { $$typeof: zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zr;
}
function Zd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var gs = /\/+/g;
function Ni(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Zd("" + e.key) : t.toString(36);
}
function rl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null)
    o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case zr:
          case Dd:
            o = !0;
        }
    }
  if (o)
    return o = e, l = l(o), e = r === "" ? "." + Ni(o, 0) : r, ys(l) ? (n = "", e != null && (n = e.replace(gs, "$&/") + "/"), rl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (uu(l) && (l = Xd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(gs, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", ys(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Ni(i, u);
      o += rl(i, t, n, s, l);
    }
  else if (s = Yd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + Ni(i, u++), o += rl(i, t, n, s, l);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function jr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return rl(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Jd(e) {
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
var Ce = { current: null }, ll = { transition: null }, qd = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: ll, ReactCurrentOwner: ou };
function lc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = { map: jr, forEach: function(e, t, n) {
  jr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return jr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return jr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!uu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
A.Component = $n;
A.Fragment = jd;
A.Profiler = Ud;
A.PureComponent = lu;
A.StrictMode = Bd;
A.Suspense = Kd;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qd;
A.act = lc;
A.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = qa({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = ou.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      tc.call(t, s) && !nc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: zr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
A.createContext = function(e) {
  return e = { $$typeof: Hd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Wd, _context: e }, e.Consumer = e;
};
A.createElement = rc;
A.createFactory = function(e) {
  var t = rc.bind(null, e);
  return t.type = e, t;
};
A.createRef = function() {
  return { current: null };
};
A.forwardRef = function(e) {
  return { $$typeof: Vd, render: e };
};
A.isValidElement = uu;
A.lazy = function(e) {
  return { $$typeof: Gd, _payload: { _status: -1, _result: e }, _init: Jd };
};
A.memo = function(e, t) {
  return { $$typeof: Qd, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function(e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
A.unstable_act = lc;
A.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
A.useContext = function(e) {
  return Ce.current.useContext(e);
};
A.useDebugValue = function() {
};
A.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
A.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
A.useId = function() {
  return Ce.current.useId();
};
A.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
A.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
A.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
A.useRef = function(e) {
  return Ce.current.useRef(e);
};
A.useState = function(e) {
  return Ce.current.useState(e);
};
A.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function() {
  return Ce.current.useTransition();
};
A.version = "18.3.1";
Za.exports = A;
var O = Za.exports;
const bd = /* @__PURE__ */ Fd(O), uo = /* @__PURE__ */ Ad({
  __proto__: null,
  default: bd
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
var ep = O, tp = Symbol.for("react.element"), np = Symbol.for("react.fragment"), rp = Object.prototype.hasOwnProperty, lp = ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t)
    rp.call(t, r) && !ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: tp, type: e, key: i, ref: o, props: l, _owner: lp.current };
}
Kl.Fragment = np;
Kl.jsx = ic;
Kl.jsxs = ic;
Xa.exports = Kl;
var su = Xa.exports;
const vs = su.Fragment, S = su.jsx, z = su.jsxs;
var oc = { exports: {} }, Fe = {}, uc = { exports: {} }, sc = {};
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
  function t(T, $) {
    var M = T.length;
    T.push($);
    e:
      for (; 0 < M; ) {
        var b = M - 1 >>> 1, oe = T[b];
        if (0 < l(oe, $))
          T[b] = $, T[M] = oe, M = b;
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
    var $ = T[0], M = T.pop();
    if (M !== $) {
      T[0] = M;
      e:
        for (var b = 0, oe = T.length, Fr = oe >>> 1; b < Fr; ) {
          var Bt = 2 * (b + 1) - 1, Ri = T[Bt], Ut = Bt + 1, Dr = T[Ut];
          if (0 > l(Ri, M))
            Ut < oe && 0 > l(Dr, Ri) ? (T[b] = Dr, T[Ut] = M, b = Ut) : (T[b] = Ri, T[Bt] = M, b = Bt);
          else if (Ut < oe && 0 > l(Dr, M))
            T[b] = Dr, T[Ut] = M, b = Ut;
          else
            break e;
        }
    }
    return $;
  }
  function l(T, $) {
    var M = T.sortIndex - $.sortIndex;
    return M !== 0 ? M : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], a = [], h = 1, m = null, p = 3, g = !1, v = !1, y = !1, L = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var $ = n(a); $ !== null; ) {
      if ($.callback === null)
        r(a);
      else if ($.startTime <= T)
        r(a), $.sortIndex = $.expirationTime, t(s, $);
      else
        break;
      $ = n(a);
    }
  }
  function w(T) {
    if (y = !1, d(T), !v)
      if (n(s) !== null)
        v = !0, zi(E);
      else {
        var $ = n(a);
        $ !== null && Li(w, $.startTime - T);
      }
  }
  function E(T, $) {
    v = !1, y && (y = !1, f(N), N = -1), g = !0;
    var M = p;
    try {
      for (d($), m = n(s); m !== null && (!(m.expirationTime > $) || T && !he()); ) {
        var b = m.callback;
        if (typeof b == "function") {
          m.callback = null, p = m.priorityLevel;
          var oe = b(m.expirationTime <= $);
          $ = e.unstable_now(), typeof oe == "function" ? m.callback = oe : m === n(s) && r(s), d($);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var Fr = !0;
      else {
        var Bt = n(a);
        Bt !== null && Li(w, Bt.startTime - $), Fr = !1;
      }
      return Fr;
    } finally {
      m = null, p = M, g = !1;
    }
  }
  var _ = !1, x = null, N = -1, Q = 5, I = -1;
  function he() {
    return !(e.unstable_now() - I < Q);
  }
  function Fn() {
    if (x !== null) {
      var T = e.unstable_now();
      I = T;
      var $ = !0;
      try {
        $ = x(!0, T);
      } finally {
        $ ? Dn() : (_ = !1, x = null);
      }
    } else
      _ = !1;
  }
  var Dn;
  if (typeof c == "function")
    Dn = function() {
      c(Fn);
    };
  else if (typeof MessageChannel < "u") {
    var ms = new MessageChannel(), Md = ms.port2;
    ms.port1.onmessage = Fn, Dn = function() {
      Md.postMessage(null);
    };
  } else
    Dn = function() {
      L(Fn, 0);
    };
  function zi(T) {
    x = T, _ || (_ = !0, Dn());
  }
  function Li(T, $) {
    N = L(function() {
      T(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    v || g || (v = !0, zi(E));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = p;
    }
    var M = p;
    p = $;
    try {
      return T();
    } finally {
      p = M;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(T, $) {
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
    var M = p;
    p = T;
    try {
      return $();
    } finally {
      p = M;
    }
  }, e.unstable_scheduleCallback = function(T, $, M) {
    var b = e.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? b + M : b) : M = b, T) {
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
    return oe = M + oe, T = { id: h++, callback: $, priorityLevel: T, startTime: M, expirationTime: oe, sortIndex: -1 }, M > b ? (T.sortIndex = M, t(a, T), n(s) === null && T === n(a) && (y ? (f(N), N = -1) : y = !0, Li(w, M - b))) : (T.sortIndex = oe, t(s, T), v || g || (v = !0, zi(E))), T;
  }, e.unstable_shouldYield = he, e.unstable_wrapCallback = function(T) {
    var $ = p;
    return function() {
      var M = p;
      p = $;
      try {
        return T.apply(this, arguments);
      } finally {
        p = M;
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
var up = O, Ae = op;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ac = /* @__PURE__ */ new Set(), sr = {};
function en(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++)
    ac.add(t[e]);
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), so = Object.prototype.hasOwnProperty, sp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ws = {}, Ss = {};
function ap(e) {
  return so.call(Ss, e) ? !0 : so.call(ws, e) ? !1 : sp.test(e) ? Ss[e] = !0 : (ws[e] = !0, !1);
}
function cp(e, t, n, r) {
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
function fp(e, t, n, r) {
  if (t === null || typeof t > "u" || cp(e, t, n, r))
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
function Ee(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  me[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  me[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  me[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  me[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  me[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  me[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  me[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  me[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  me[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var au = /[\-:]([a-z])/g;
function cu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    au,
    cu
  );
  me[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(au, cu);
  me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(au, cu);
  me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var l = me.hasOwnProperty(t) ? me[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fp(t, n, l, r) && (n = null), r || l === null ? ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Br = Symbol.for("react.element"), ln = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), du = Symbol.for("react.strict_mode"), ao = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), pu = Symbol.for("react.forward_ref"), co = Symbol.for("react.suspense"), fo = Symbol.for("react.suspense_list"), mu = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), dc = Symbol.for("react.offscreen"), ks = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var X = Object.assign, Oi;
function Yn(e) {
  if (Oi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oi = t && t[1] || "";
    }
  return `
` + Oi + e;
}
var $i = !1;
function Ii(e, t) {
  if (!e || $i)
    return "";
  $i = !0;
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
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    $i = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function dp(e) {
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
      return e = Ii(e.type, !1), e;
    case 11:
      return e = Ii(e.type.render, !1), e;
    case 1:
      return e = Ii(e.type, !0), e;
    default:
      return "";
  }
}
function po(e) {
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
    case ao:
      return "Profiler";
    case du:
      return "StrictMode";
    case co:
      return "Suspense";
    case fo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case pu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case mu:
        return t = e.displayName || null, t !== null ? t : po(e.type) || "Memo";
      case kt:
        t = e._payload, e = e._init;
        try {
          return po(e(t));
        } catch {
        }
    }
  return null;
}
function pp(e) {
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
      return po(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
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
function Mt(e) {
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
function mp(e) {
  var t = pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ur(e) {
  e._valueTracker || (e._valueTracker = mp(e));
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
function vl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mo(e, t) {
  var n = t.checked;
  return X({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Mt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hc(e, t) {
  t = t.checked, t != null && fu(e, "checked", t, !1);
}
function ho(e, t) {
  hc(e, t);
  var n = Mt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yo(e, t.type, n) : t.hasOwnProperty("defaultValue") && yo(e, t.type, Mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Cs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yo(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function gn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function go(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return X({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Es(e, t) {
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
  e._wrapperState = { initialValue: Mt(n) };
}
function yc(e, t) {
  var n = Mt(t.value), r = Mt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function _s(e) {
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
function vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Wr, vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Wr = Wr || document.createElement("div"), Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Wr.firstChild; e.firstChild; )
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
}, hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  hp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var yp = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wo(e, t) {
  if (t) {
    if (yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function So(e, t) {
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
var ko = null;
function hu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xo = null, vn = null, wn = null;
function Ps(e) {
  if (e = Nr(e)) {
    if (typeof xo != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = Zl(t), xo(e.stateNode, e.type, t));
  }
}
function kc(e) {
  vn ? wn ? wn.push(e) : wn = [e] : vn = e;
}
function xc() {
  if (vn) {
    var e = vn, t = wn;
    if (wn = vn = null, Ps(e), t)
      for (e = 0; e < t.length; e++)
        Ps(t[e]);
  }
}
function Cc(e, t) {
  return e(t);
}
function Ec() {
}
var Mi = !1;
function _c(e, t, n) {
  if (Mi)
    return e(t, n);
  Mi = !0;
  try {
    return Cc(e, t, n);
  } finally {
    Mi = !1, (vn !== null || wn !== null) && (Ec(), xc());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Zl(n);
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
var Co = !1;
if (mt)
  try {
    var Bn = {};
    Object.defineProperty(Bn, "passive", { get: function() {
      Co = !0;
    } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
  } catch {
    Co = !1;
  }
function gp(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var bn = !1, wl = null, Sl = !1, Eo = null, vp = { onError: function(e) {
  bn = !0, wl = e;
} };
function wp(e, t, n, r, l, i, o, u, s) {
  bn = !1, wl = null, gp.apply(vp, arguments);
}
function Sp(e, t, n, r, l, i, o, u, s) {
  if (wp.apply(this, arguments), bn) {
    if (bn) {
      var a = wl;
      bn = !1, wl = null;
    } else
      throw Error(k(198));
    Sl || (Sl = !0, Eo = a);
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ts(e) {
  if (tn(e) !== e)
    throw Error(k(188));
}
function kp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null)
      throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n)
          return Ts(l), e;
        if (i === r)
          return Ts(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return)
      n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o)
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
function Tc(e) {
  return e = kp(e), e !== null ? zc(e) : null;
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
var Lc = Ae.unstable_scheduleCallback, zs = Ae.unstable_cancelCallback, xp = Ae.unstable_shouldYield, Cp = Ae.unstable_requestPaint, ee = Ae.unstable_now, Ep = Ae.unstable_getCurrentPriorityLevel, yu = Ae.unstable_ImmediatePriority, Rc = Ae.unstable_UserBlockingPriority, kl = Ae.unstable_NormalPriority, _p = Ae.unstable_LowPriority, Nc = Ae.unstable_IdlePriority, Ql = null, ot = null;
function Pp(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var qe = Math.clz32 ? Math.clz32 : Lp, Tp = Math.log, zp = Math.LN2;
function Lp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Tp(e) / zp | 0) | 0;
}
var Hr = 64, Vr = 4194304;
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
function xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Zn(u) : (i &= o, i !== 0 && (r = Zn(i)));
  } else
    o = n & ~l, o !== 0 ? r = Zn(o) : i !== 0 && (r = Zn(i));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - qe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Rp(e, t) {
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
function Np(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - qe(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = Rp(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function _o(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oc() {
  var e = Hr;
  return Hr <<= 1, !(Hr & 4194240) && (Hr = 64), e;
}
function Ai(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
}
function Op(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - qe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function gu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var B = 0;
function $c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ic, vu, Mc, Ac, Fc, Po = !1, Kr = [], Tt = null, zt = null, Lt = null, fr = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), Ct = [], $p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
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
function Un(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Nr(t), t !== null && vu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ip(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Tt = Un(Tt, e, t, n, r, l), !0;
    case "dragenter":
      return zt = Un(zt, e, t, n, r, l), !0;
    case "mouseover":
      return Lt = Un(Lt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return fr.set(i, Un(fr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, dr.set(i, Un(dr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Dc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = tn(t);
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
function il(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = To(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ko = r, n.target.dispatchEvent(r), ko = null;
    } else
      return t = Nr(n), t !== null && vu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Rs(e, t, n) {
  il(e) && n.delete(t);
}
function Mp() {
  Po = !1, Tt !== null && il(Tt) && (Tt = null), zt !== null && il(zt) && (zt = null), Lt !== null && il(Lt) && (Lt = null), fr.forEach(Rs), dr.forEach(Rs);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Po || (Po = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Mp)));
}
function pr(e) {
  function t(l) {
    return Wn(l, e);
  }
  if (0 < Kr.length) {
    Wn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tt !== null && Wn(Tt, e), zt !== null && Wn(zt, e), Lt !== null && Wn(Lt, e), fr.forEach(t), dr.forEach(t), n = 0; n < Ct.length; n++)
    r = Ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && (n = Ct[0], n.blockedOn === null); )
    Dc(n), n.blockedOn === null && Ct.shift();
}
var Sn = wt.ReactCurrentBatchConfig, Cl = !0;
function Ap(e, t, n, r) {
  var l = B, i = Sn.transition;
  Sn.transition = null;
  try {
    B = 1, wu(e, t, n, r);
  } finally {
    B = l, Sn.transition = i;
  }
}
function Fp(e, t, n, r) {
  var l = B, i = Sn.transition;
  Sn.transition = null;
  try {
    B = 4, wu(e, t, n, r);
  } finally {
    B = l, Sn.transition = i;
  }
}
function wu(e, t, n, r) {
  if (Cl) {
    var l = To(e, t, n, r);
    if (l === null)
      Qi(e, t, r, El, n), Ls(e, r);
    else if (Ip(l, e, t, n, r))
      r.stopPropagation();
    else if (Ls(e, r), t & 4 && -1 < $p.indexOf(e)) {
      for (; l !== null; ) {
        var i = Nr(l);
        if (i !== null && Ic(i), i = To(e, t, n, r), i === null && Qi(e, t, r, El, n), i === l)
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else
      Qi(e, t, r, null, n);
  }
}
var El = null;
function To(e, t, n, r) {
  if (El = null, e = hu(r), e = Vt(e), e !== null)
    if (t = tn(e), t === null)
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
  return El = e, null;
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
      switch (Ep()) {
        case yu:
          return 1;
        case Rc:
          return 4;
        case kl:
        case _p:
          return 16;
        case Nc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, Su = null, ol = null;
function Bc() {
  if (ol)
    return ol;
  var e, t = Su, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
    ;
  return ol = l.slice(e, 1 < r ? 1 - r : void 0);
}
function ul(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qr() {
  return !0;
}
function Ns() {
  return !1;
}
function De(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Qr : Ns, this.isPropagationStopped = Ns, this;
  }
  return X(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
  }, persist: function() {
  }, isPersistent: Qr }), t;
}
var In = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ku = De(In), Rr = X({}, In, { view: 0, detail: 0 }), Dp = De(Rr), Fi, Di, Hn, Gl = X({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Fi = e.screenX - Hn.screenX, Di = e.screenY - Hn.screenY) : Di = Fi = 0, Hn = e), Fi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Di;
} }), Os = De(Gl), jp = X({}, Gl, { dataTransfer: 0 }), Bp = De(jp), Up = X({}, Rr, { relatedTarget: 0 }), ji = De(Up), Wp = X({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hp = De(Wp), Vp = X({}, In, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Kp = De(Vp), Qp = X({}, In, { data: 0 }), $s = De(Qp), Gp = {
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
}, Yp = {
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
}, Xp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1;
}
function xu() {
  return Zp;
}
var Jp = X({}, Rr, { key: function(e) {
  if (e.key) {
    var t = Gp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ul(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xu, charCode: function(e) {
  return e.type === "keypress" ? ul(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), qp = De(Jp), bp = X({}, Gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Is = De(bp), em = X({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xu }), tm = De(em), nm = X({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rm = De(nm), lm = X({}, Gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), im = De(lm), om = [9, 13, 27, 32], Cu = mt && "CompositionEvent" in window, er = null;
mt && "documentMode" in document && (er = document.documentMode);
var um = mt && "TextEvent" in window && !er, Uc = mt && (!Cu || er && 8 < er && 11 >= er), Ms = String.fromCharCode(32), As = !1;
function Wc(e, t) {
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
function Hc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function sm(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : (As = !0, Ms);
    case "textInput":
      return e = t.data, e === Ms && As ? null : e;
    default:
      return null;
  }
}
function am(e, t) {
  if (un)
    return e === "compositionend" || !Cu && Wc(e, t) ? (e = Bc(), ol = Su = _t = null, un = !1, e) : null;
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
      return Uc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cm[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  kc(r), t = _l(t, "onChange"), 0 < t.length && (n = new ku("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, mr = null;
function fm(e) {
  tf(e, 0);
}
function Yl(e) {
  var t = cn(e);
  if (mc(t))
    return e;
}
function dm(e, t) {
  if (e === "change")
    return t;
}
var Kc = !1;
if (mt) {
  var Bi;
  if (mt) {
    var Ui = "oninput" in document;
    if (!Ui) {
      var Ds = document.createElement("div");
      Ds.setAttribute("oninput", "return;"), Ui = typeof Ds.oninput == "function";
    }
    Bi = Ui;
  } else
    Bi = !1;
  Kc = Bi && (!document.documentMode || 9 < document.documentMode);
}
function js() {
  tr && (tr.detachEvent("onpropertychange", Qc), mr = tr = null);
}
function Qc(e) {
  if (e.propertyName === "value" && Yl(mr)) {
    var t = [];
    Vc(t, mr, e, hu(e)), _c(fm, t);
  }
}
function pm(e, t, n) {
  e === "focusin" ? (js(), tr = t, mr = n, tr.attachEvent("onpropertychange", Qc)) : e === "focusout" && js();
}
function mm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(mr);
}
function hm(e, t) {
  if (e === "click")
    return Yl(t);
}
function ym(e, t) {
  if (e === "input" || e === "change")
    return Yl(t);
}
function gm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : gm;
function hr(e, t) {
  if (et(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!so.call(t, l) || !et(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Us(e, t) {
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
function Gc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Yc() {
  for (var e = window, t = vl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = vl(e.document);
  }
  return t;
}
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function vm(e) {
  var t = Yc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Eu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Us(n, i);
        var o = Us(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var wm = mt && "documentMode" in document && 11 >= document.documentMode, sn = null, zo = null, nr = null, Lo = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Lo || sn == null || sn !== vl(r) || (r = sn, "selectionStart" in r && Eu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && hr(nr, r) || (nr = r, r = _l(zo, "onSelect"), 0 < r.length && (t = new ku("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = sn)));
}
function Gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var an = { animationend: Gr("Animation", "AnimationEnd"), animationiteration: Gr("Animation", "AnimationIteration"), animationstart: Gr("Animation", "AnimationStart"), transitionend: Gr("Transition", "TransitionEnd") }, Wi = {}, Xc = {};
mt && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete an.animationend.animation, delete an.animationiteration.animation, delete an.animationstart.animation), "TransitionEvent" in window || delete an.transitionend.transition);
function Xl(e) {
  if (Wi[e])
    return Wi[e];
  if (!an[e])
    return e;
  var t = an[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xc)
      return Wi[e] = t[n];
  return e;
}
var Zc = Xl("animationend"), Jc = Xl("animationiteration"), qc = Xl("animationstart"), bc = Xl("transitionend"), ef = /* @__PURE__ */ new Map(), Hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  ef.set(e, t), en(t, [e]);
}
for (var Hi = 0; Hi < Hs.length; Hi++) {
  var Vi = Hs[Hi], Sm = Vi.toLowerCase(), km = Vi[0].toUpperCase() + Vi.slice(1);
  Ft(Sm, "on" + km);
}
Ft(Zc, "onAnimationEnd");
Ft(Jc, "onAnimationIteration");
Ft(qc, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(bc, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
en("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
en("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
en("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Sp(r, t, void 0, e), e.currentTarget = null;
}
function tf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== i && l.isPropagationStopped())
            break e;
          Vs(l, u, a), i = s;
        }
      else
        for (o = 0; o < r.length; o++) {
          if (u = r[o], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped())
            break e;
          Vs(l, u, a), i = s;
        }
    }
  }
  if (Sl)
    throw e = Eo, Sl = !1, Eo = null, e;
}
function H(e, t) {
  var n = t[Io];
  n === void 0 && (n = t[Io] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function Ki(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var Yr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Yr]) {
    e[Yr] = !0, ac.forEach(function(n) {
      n !== "selectionchange" && (xm.has(n) || Ki(n, !1, e), Ki(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yr] || (t[Yr] = !0, Ki("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (jc(t)) {
    case 1:
      var l = Ap;
      break;
    case 4:
      l = Fp;
      break;
    default:
      l = wu;
  }
  n = l.bind(null, t, n, e), l = void 0, !Co || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Qi(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (o = Vt(u), o === null)
              return;
            if (s = o.tag, s === 5 || s === 6) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  _c(function() {
    var a = i, h = hu(n), m = [];
    e: {
      var p = ef.get(e);
      if (p !== void 0) {
        var g = ku, v = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = qp;
            break;
          case "focusin":
            v = "focus", g = ji;
            break;
          case "focusout":
            v = "blur", g = ji;
            break;
          case "beforeblur":
          case "afterblur":
            g = ji;
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
            g = Os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = tm;
            break;
          case Zc:
          case Jc:
          case qc:
            g = Hp;
            break;
          case bc:
            g = rm;
            break;
          case "scroll":
            g = Dp;
            break;
          case "wheel":
            g = im;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Is;
        }
        var y = (t & 4) !== 0, L = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = cr(c, f), w != null && y.push(gr(c, w, d)))), L)
            break;
          c = c.return;
        }
        0 < y.length && (p = new g(p, v, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== ko && (v = n.relatedTarget || n.fromElement) && (Vt(v) || v[ht]))
          break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = a, v = v ? Vt(v) : null, v !== null && (L = tn(v), v !== L || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = a), g !== v)) {
          if (y = Os, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Is, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), L = g == null ? p : cn(g), d = v == null ? p : cn(v), p = new y(w, c + "leave", g, n, h), p.target = L, p.relatedTarget = d, w = null, Vt(h) === a && (y = new y(f, c + "enter", v, n, h), y.target = d, y.relatedTarget = L, w = y), L = w, g && v)
            t: {
              for (y = g, f = v, c = 0, d = y; d; d = nn(d))
                c++;
              for (d = 0, w = f; w; w = nn(w))
                d++;
              for (; 0 < c - d; )
                y = nn(y), c--;
              for (; 0 < d - c; )
                f = nn(f), d--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = nn(y), f = nn(f);
              }
              y = null;
            }
          else
            y = null;
          g !== null && Ks(m, p, g, y, !1), v !== null && L !== null && Ks(m, L, v, y, !0);
        }
      }
      e: {
        if (p = a ? cn(a) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = dm;
        else if (Fs(p))
          if (Kc)
            E = ym;
          else {
            E = mm;
            var _ = pm;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = hm);
        if (E && (E = E(e, a))) {
          Vc(m, E, n, h);
          break e;
        }
        _ && _(e, p, a), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && yo(p, "number", p.value);
      }
      switch (_ = a ? cn(a) : window, e) {
        case "focusin":
          (Fs(_) || _.contentEditable === "true") && (sn = _, zo = a, nr = null);
          break;
        case "focusout":
          nr = zo = sn = null;
          break;
        case "mousedown":
          Lo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Lo = !1, Ws(m, n, h);
          break;
        case "selectionchange":
          if (wm)
            break;
        case "keydown":
        case "keyup":
          Ws(m, n, h);
      }
      var x;
      if (Cu)
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
        un ? Wc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Uc && n.locale !== "ko" && (un || N !== "onCompositionStart" ? N === "onCompositionEnd" && un && (x = Bc()) : (_t = h, Su = "value" in _t ? _t.value : _t.textContent, un = !0)), _ = _l(a, N), 0 < _.length && (N = new $s(N, e, null, n, h), m.push({ event: N, listeners: _ }), x ? N.data = x : (x = Hc(n), x !== null && (N.data = x)))), (x = um ? sm(e, n) : am(e, n)) && (a = _l(a, "onBeforeInput"), 0 < a.length && (h = new $s("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = x));
    }
    tf(m, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = cr(e, n), i != null && r.unshift(gr(e, i, l)), i = cr(e, t), i != null && r.push(gr(e, i, l))), e = e.return;
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
function Ks(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = cr(n, i), s != null && o.unshift(gr(n, s, u))) : l || (s = cr(n, i), s != null && o.push(gr(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cm = /\r\n?/g, Em = /\u0000|\uFFFD/g;
function Qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Cm, `
`).replace(Em, "");
}
function Xr(e, t, n) {
  if (t = Qs(t), Qs(e) !== t && n)
    throw Error(k(425));
}
function Pl() {
}
var Ro = null, No = null;
function Oo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0, _m = typeof clearTimeout == "function" ? clearTimeout : void 0, Gs = typeof Promise == "function" ? Promise : void 0, Pm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gs < "u" ? function(e) {
  return Gs.resolve(null).then(e).catch(Tm);
} : $o;
function Tm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), pr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
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
function Ys(e) {
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
var Mn = Math.random().toString(36).slice(2), it = "__reactFiber$" + Mn, vr = "__reactProps$" + Mn, ht = "__reactContainer$" + Mn, Io = "__reactEvents$" + Mn, zm = "__reactListeners$" + Mn, Lm = "__reactHandles$" + Mn;
function Vt(e) {
  var t = e[it];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ht] || n[it]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ys(e); e !== null; ) {
          if (n = e[it])
            return n;
          e = Ys(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Nr(e) {
  return e = e[it] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function Zl(e) {
  return e[vr] || null;
}
var Mo = [], fn = -1;
function Dt(e) {
  return { current: e };
}
function V(e) {
  0 > fn || (e.current = Mo[fn], Mo[fn] = null, fn--);
}
function W(e, t) {
  fn++, Mo[fn] = e.current, e.current = t;
}
var At = {}, Se = Dt(At), Te = Dt(!1), Xt = At;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return At;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n)
    l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  V(Te), V(Se);
}
function Xs(e, t, n) {
  if (Se.current !== At)
    throw Error(k(168));
  W(Se, t), W(Te, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(k(108, pp(e) || "Unknown", l));
  return X({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Xt = Se.current, W(Se, e), W(Te, Te.current), !0;
}
function Zs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = rf(e, t, Xt), r.__reactInternalMemoizedMergedChildContext = e, V(Te), V(Se), W(Se, e)) : V(Te), W(Te, n);
}
var ct = null, Jl = !1, Yi = !1;
function lf(e) {
  ct === null ? ct = [e] : ct.push(e);
}
function Rm(e) {
  Jl = !0, lf(e);
}
function jt() {
  if (!Yi && ct !== null) {
    Yi = !0;
    var e = 0, t = B;
    try {
      var n = ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ct = null, Jl = !1;
    } catch (l) {
      throw ct !== null && (ct = ct.slice(e + 1)), Lc(yu, jt), l;
    } finally {
      B = t, Yi = !1;
    }
  }
  return null;
}
var dn = [], pn = 0, Ll = null, Rl = 0, Be = [], Ue = 0, Zt = null, ft = 1, dt = "";
function Wt(e, t) {
  dn[pn++] = Rl, dn[pn++] = Ll, Ll = e, Rl = t;
}
function of(e, t, n) {
  Be[Ue++] = ft, Be[Ue++] = dt, Be[Ue++] = Zt, Zt = e;
  var r = ft;
  e = dt;
  var l = 32 - qe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - qe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, ft = 1 << 32 - qe(t) + l | n << l | r, dt = i + e;
  } else
    ft = 1 << i | n << l | r, dt = e;
}
function _u(e) {
  e.return !== null && (Wt(e, 1), of(e, 1, 0));
}
function Pu(e) {
  for (; e === Ll; )
    Ll = dn[--pn], dn[pn] = null, Rl = dn[--pn], dn[pn] = null;
  for (; e === Zt; )
    Zt = Be[--Ue], Be[Ue] = null, dt = Be[--Ue], Be[Ue] = null, ft = Be[--Ue], Be[Ue] = null;
}
var Ie = null, $e = null, K = !1, Je = null;
function uf(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Js(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, $e = Rt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, $e = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: ft, overflow: dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, $e = null, !0) : !1;
    default:
      return !1;
  }
}
function Ao(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fo(e) {
  if (K) {
    var t = $e;
    if (t) {
      var n = t;
      if (!Js(e, t)) {
        if (Ao(e))
          throw Error(k(418));
        t = Rt(n.nextSibling);
        var r = Ie;
        t && Js(e, t) ? uf(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ie = e);
      }
    } else {
      if (Ao(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, K = !1, Ie = e;
    }
  }
}
function qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Zr(e) {
  if (e !== Ie)
    return !1;
  if (!K)
    return qs(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps)), t && (t = $e)) {
    if (Ao(e))
      throw sf(), Error(k(418));
    for (; t; )
      uf(e, t), t = Rt(t.nextSibling);
  }
  if (qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $e = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      $e = null;
    }
  } else
    $e = Ie ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function sf() {
  for (var e = $e; e; )
    e = Rt(e.nextSibling);
}
function Tn() {
  $e = Ie = null, K = !1;
}
function Tu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var Nm = wt.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(k(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
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
function bs(e) {
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
  function l(f, c) {
    return f = It(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = to(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var E = d.type;
    return E === on ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kt && bs(E) === c.type) ? (w = l(c, d.props), w.ref = Vn(f, c, d), w.return = f, w) : (w = ml(d.type, d.key, d.props, null, f.mode, w), w.ref = Vn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = no(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, E) {
    return c === null || c.tag !== 7 ? (c = Yt(d, f.mode, w, E), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = to("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Br:
          return d = ml(c.type, c.key, c.props, null, f.mode, d), d.ref = Vn(f, null, c), d.return = f, d;
        case ln:
          return c = no(c, f.mode, d), c.return = f, c;
        case kt:
          var w = c._init;
          return m(f, w(c._payload), d);
      }
      if (Xn(c) || jn(c))
        return c = Yt(c, f.mode, d, null), c.return = f, c;
      Jr(f, c);
    }
    return null;
  }
  function p(f, c, d, w) {
    var E = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Br:
          return d.key === E ? s(f, c, d, w) : null;
        case ln:
          return d.key === E ? a(f, c, d, w) : null;
        case kt:
          return E = d._init, p(
            f,
            c,
            E(d._payload),
            w
          );
      }
      if (Xn(d) || jn(d))
        return E !== null ? null : h(f, c, d, w, null);
      Jr(f, d);
    }
    return null;
  }
  function g(f, c, d, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Br:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, E);
        case ln:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, E);
        case kt:
          var _ = w._init;
          return g(f, c, d, _(w._payload), E);
      }
      if (Xn(w) || jn(w))
        return f = f.get(d) || null, h(c, f, w, E, null);
      Jr(c, w);
    }
    return null;
  }
  function v(f, c, d, w) {
    for (var E = null, _ = null, x = c, N = c = 0, Q = null; x !== null && N < d.length; N++) {
      x.index > N ? (Q = x, x = null) : Q = x.sibling;
      var I = p(f, x, d[N], w);
      if (I === null) {
        x === null && (x = Q);
        break;
      }
      e && x && I.alternate === null && t(f, x), c = i(I, c, N), _ === null ? E = I : _.sibling = I, _ = I, x = Q;
    }
    if (N === d.length)
      return n(f, x), K && Wt(f, N), E;
    if (x === null) {
      for (; N < d.length; N++)
        x = m(f, d[N], w), x !== null && (c = i(x, c, N), _ === null ? E = x : _.sibling = x, _ = x);
      return K && Wt(f, N), E;
    }
    for (x = r(f, x); N < d.length; N++)
      Q = g(x, f, N, d[N], w), Q !== null && (e && Q.alternate !== null && x.delete(Q.key === null ? N : Q.key), c = i(Q, c, N), _ === null ? E = Q : _.sibling = Q, _ = Q);
    return e && x.forEach(function(he) {
      return t(f, he);
    }), K && Wt(f, N), E;
  }
  function y(f, c, d, w) {
    var E = jn(d);
    if (typeof E != "function")
      throw Error(k(150));
    if (d = E.call(d), d == null)
      throw Error(k(151));
    for (var _ = E = null, x = c, N = c = 0, Q = null, I = d.next(); x !== null && !I.done; N++, I = d.next()) {
      x.index > N ? (Q = x, x = null) : Q = x.sibling;
      var he = p(f, x, I.value, w);
      if (he === null) {
        x === null && (x = Q);
        break;
      }
      e && x && he.alternate === null && t(f, x), c = i(he, c, N), _ === null ? E = he : _.sibling = he, _ = he, x = Q;
    }
    if (I.done)
      return n(
        f,
        x
      ), K && Wt(f, N), E;
    if (x === null) {
      for (; !I.done; N++, I = d.next())
        I = m(f, I.value, w), I !== null && (c = i(I, c, N), _ === null ? E = I : _.sibling = I, _ = I);
      return K && Wt(f, N), E;
    }
    for (x = r(f, x); !I.done; N++, I = d.next())
      I = g(x, f, N, I.value, w), I !== null && (e && I.alternate !== null && x.delete(I.key === null ? N : I.key), c = i(I, c, N), _ === null ? E = I : _.sibling = I, _ = I);
    return e && x.forEach(function(Fn) {
      return t(f, Fn);
    }), K && Wt(f, N), E;
  }
  function L(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === on && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Br:
          e: {
            for (var E = d.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === on) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = l(_, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === kt && bs(E) === _.type) {
                  n(f, _.sibling), c = l(_, d.props), c.ref = Vn(f, _, d), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else
                t(f, _);
              _ = _.sibling;
            }
            d.type === on ? (c = Yt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = ml(d.type, d.key, d.props, null, f.mode, w), w.ref = Vn(f, c, d), w.return = f, f = w);
          }
          return o(f);
        case ln:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                  n(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = no(d, f.mode, w), c.return = f, f = c;
          }
          return o(f);
        case kt:
          return _ = d._init, L(f, c, _(d._payload), w);
      }
      if (Xn(d))
        return v(f, c, d, w);
      if (jn(d))
        return y(f, c, d, w);
      Jr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = to(d, f.mode, w), c.return = f, f = c), o(f)) : n(f, c);
  }
  return L;
}
var zn = af(!0), cf = af(!1), Nl = Dt(null), Ol = null, mn = null, zu = null;
function Lu() {
  zu = mn = Ol = null;
}
function Ru(e) {
  var t = Nl.current;
  V(Nl), e._currentValue = t;
}
function Do(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function kn(e, t) {
  Ol = e, zu = mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function Ke(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, mn === null) {
      if (Ol === null)
        throw Error(k(308));
      mn = e, Ol.dependencies = { lanes: 0, firstContext: e };
    } else
      mn = mn.next = e;
  return t;
}
var Kt = null;
function Nu(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
function ff(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Nu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, yt(e, r);
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Ou(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function df(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, yt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Nu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, yt(e, n);
}
function sl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
function ea(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else
      l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function $l(e, t, n, r) {
  var l = e.updateQueue;
  xt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, o === null ? i = a : o.next = a, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, h = a = s = null, u = i;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, y = u;
          switch (p = t, g = n, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                m = v.call(g, m, p);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, p = typeof v == "function" ? v.call(g, m, p) : v, p == null)
                break e;
              m = X({}, m, p);
              break e;
            case 2:
              xt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = g, s = m) : h = h.next = g, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else
      i === null && (l.shared.lanes = 0);
    qt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function ta(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Or = {}, ut = Dt(Or), wr = Dt(Or), Sr = Dt(Or);
function Qt(e) {
  if (e === Or)
    throw Error(k(174));
  return e;
}
function $u(e, t) {
  switch (W(Sr, t), W(wr, e), W(ut, Or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vo(t, e);
  }
  V(ut), W(ut, t);
}
function Ln() {
  V(ut), V(wr), V(Sr);
}
function pf(e) {
  Qt(Sr.current);
  var t = Qt(ut.current), n = vo(t, e.type);
  t !== n && (W(wr, e), W(ut, n));
}
function Iu(e) {
  wr.current === e && (V(ut), V(wr));
}
var G = Dt(0);
function Il(e) {
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
var Xi = [];
function Mu() {
  for (var e = 0; e < Xi.length; e++)
    Xi[e]._workInProgressVersionPrimary = null;
  Xi.length = 0;
}
var al = wt.ReactCurrentDispatcher, Zi = wt.ReactCurrentBatchConfig, Jt = 0, Y = null, le = null, ue = null, Ml = !1, rr = !1, kr = 0, Om = 0;
function ye() {
  throw Error(k(321));
}
function Au(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n]))
      return !1;
  return !0;
}
function Fu(e, t, n, r, l, i) {
  if (Jt = i, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? Am : Fm, e = n(r, l), rr) {
    i = 0;
    do {
      if (rr = !1, kr = 0, 25 <= i)
        throw Error(k(301));
      i += 1, ue = le = null, t.updateQueue = null, al.current = Dm, e = n(r, l);
    } while (rr);
  }
  if (al.current = Al, t = le !== null && le.next !== null, Jt = 0, ue = le = Y = null, Ml = !1, t)
    throw Error(k(300));
  return e;
}
function Du() {
  var e = kr !== 0;
  return kr = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? Y.memoizedState = ue = e : ue = ue.next = e, ue;
}
function Qe() {
  if (le === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = le.next;
  var t = ue === null ? Y.memoizedState : ue.next;
  if (t !== null)
    ue = t, le = e;
  else {
    if (e === null)
      throw Error(k(310));
    le = e, e = { memoizedState: le.memoizedState, baseState: le.baseState, baseQueue: le.baseQueue, queue: le.queue, next: null }, ue === null ? Y.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ji(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = le, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, a = i;
    do {
      var h = a.lane;
      if ((Jt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var m = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, Y.lanes |= h, qt |= h;
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? o = r : s.next = u, et(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, Y.lanes |= i, qt |= i, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qi(e) {
  var t = Qe(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    et(i, t.memoizedState) || (Pe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function mf() {
}
function hf(e, t) {
  var n = Y, r = Qe(), l = t(), i = !et(r.memoizedState, l);
  if (i && (r.memoizedState = l, Pe = !0), r = r.queue, ju(vf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, Cr(9, gf.bind(null, n, r, l, t), void 0, null), se === null)
      throw Error(k(349));
    Jt & 30 || yf(n, t, l);
  }
  return l;
}
function yf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !et(e, n);
  } catch {
    return !0;
  }
}
function Sf(e) {
  var t = yt(e, 1);
  t !== null && be(t, e, 1, -1);
}
function na(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Mm.bind(null, Y, e), [t.memoizedState, e];
}
function Cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Y.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kf() {
  return Qe().memoizedState;
}
function cl(e, t, n, r) {
  var l = nt();
  Y.flags |= e, l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ql(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (le !== null) {
    var o = le.memoizedState;
    if (i = o.destroy, r !== null && Au(r, o.deps)) {
      l.memoizedState = Cr(t, n, i, r);
      return;
    }
  }
  Y.flags |= e, l.memoizedState = Cr(1 | t, n, i, r);
}
function ra(e, t) {
  return cl(8390656, 8, e, t);
}
function ju(e, t) {
  return ql(2048, 8, e, t);
}
function xf(e, t) {
  return ql(4, 2, e, t);
}
function Cf(e, t) {
  return ql(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, ql(4, 4, Ef.bind(null, t, e), n);
}
function Bu() {
}
function Pf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tf(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zf(e, t, n) {
  return Jt & 21 ? (et(n, t) || (n = Oc(), Y.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function $m(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zi.transition;
  Zi.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Zi.transition = r;
  }
}
function Lf() {
  return Qe().memoizedState;
}
function Im(e, t, n) {
  var r = $t(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Rf(e))
    Nf(t, n);
  else if (n = ff(e, t, n, r), n !== null) {
    var l = xe();
    be(n, e, r, l), Of(n, t, r);
  }
}
function Mm(e, t, n) {
  var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rf(e))
    Nf(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
      try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, et(u, o)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Nu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = ff(e, t, l, r), n !== null && (l = xe(), be(n, e, r, l), Of(n, t, r));
  }
}
function Rf(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y;
}
function Nf(e, t) {
  rr = Ml = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
var Al = { readContext: Ke, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Am = { readContext: Ke, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ke, useEffect: ra, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(
    4194308,
    4,
    Ef.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return cl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return cl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, Y, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: na, useDebugValue: Bu, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = na(!1), t = e[0];
  return e = $m.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Y, l = nt();
  if (K) {
    if (n === void 0)
      throw Error(k(407));
    n = n();
  } else {
    if (n = t(), se === null)
      throw Error(k(349));
    Jt & 30 || yf(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, ra(vf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Cr(9, gf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = se.identifierPrefix;
  if (K) {
    var n = dt, r = ft;
    n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Om++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Fm = {
  readContext: Ke,
  useCallback: Pf,
  useContext: Ke,
  useEffect: ju,
  useImperativeHandle: _f,
  useInsertionEffect: xf,
  useLayoutEffect: Cf,
  useMemo: Tf,
  useReducer: Ji,
  useRef: kf,
  useState: function() {
    return Ji(xr);
  },
  useDebugValue: Bu,
  useDeferredValue: function(e) {
    var t = Qe();
    return zf(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = Ji(xr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: mf,
  useSyncExternalStore: hf,
  useId: Lf,
  unstable_isNewReconciler: !1
}, Dm = { readContext: Ke, useCallback: Pf, useContext: Ke, useEffect: ju, useImperativeHandle: _f, useInsertionEffect: xf, useLayoutEffect: Cf, useMemo: Tf, useReducer: qi, useRef: kf, useState: function() {
  return qi(xr);
}, useDebugValue: Bu, useDeferredValue: function(e) {
  var t = Qe();
  return le === null ? t.memoizedState = e : zf(t, le.memoizedState, e);
}, useTransition: function() {
  var e = qi(xr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: mf, useSyncExternalStore: hf, useId: Lf, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = X({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = $t(e), i = pt(r, l);
  i.payload = t, n != null && (i.callback = n), t = Nt(e, i, l), t !== null && (be(t, e, l, r), sl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), l = $t(e), i = pt(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Nt(e, i, l), t !== null && (be(t, e, l, r), sl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = $t(e), l = pt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Nt(e, l, r), t !== null && (be(t, e, r, n), sl(t, e, r));
} };
function la(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, i) : !0;
}
function $f(e, t, n) {
  var r = !1, l = At, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ke(i) : (l = ze(t) ? Xt : Se.current, r = t.contextTypes, i = (r = r != null) ? Pn(e, l) : At), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ia(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function Bo(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ou(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ke(i) : (i = ze(t) ? Xt : Se.current, l.context = Pn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (jo(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bl.enqueueReplaceState(l, l.state, null), $l(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t) {
  try {
    var n = "", r = t;
    do
      n += dp(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var jm = typeof WeakMap == "function" ? WeakMap : Map;
function If(e, t, n) {
  n = pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Dl || (Dl = !0, Jo = r), Uo(e, t);
  }, n;
}
function Mf(e, t, n) {
  n = pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Uo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Uo(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = bm.bind(null, e, t, n), t.then(e, e));
}
function ua(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sa(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pt(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e);
}
var Bm = wt.ReactCurrentOwner, Pe = !1;
function ke(e, t, n, r) {
  t.child = e === null ? cf(t, null, n, r) : zn(t, e.child, n, r);
}
function aa(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return kn(t, l), r = Fu(e, t, n, r, i, l), n = Du(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (K && n && _u(t), t.flags |= 1, ke(e, t, r, l), t.child);
}
function ca(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Yu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Af(e, t, i, r, l)) : (e = ml(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(o, r) && e.ref === t.ref)
      return gt(e, t, l);
  }
  return t.flags |= 1, e = It(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Af(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hr(i, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, gt(e, t, l);
  }
  return Wo(e, t, n, r, l);
}
function Ff(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(yn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(yn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, W(yn, Ne), Ne |= r;
    }
  else
    i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, W(yn, Ne), Ne |= r;
  return ke(e, t, l, n), t.child;
}
function Df(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wo(e, t, n, r, l) {
  var i = ze(n) ? Xt : Se.current;
  return i = Pn(t, i), kn(t, l), n = Fu(e, t, n, r, i, l), r = Du(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (K && r && _u(t), t.flags |= 1, ke(e, t, n, l), t.child);
}
function fa(e, t, n, r, l) {
  if (ze(n)) {
    var i = !0;
    zl(t);
  } else
    i = !1;
  if (kn(t, l), t.stateNode === null)
    fl(e, t), $f(t, n, r), Bo(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ke(a) : (a = ze(n) ? Xt : Se.current, a = Pn(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== a) && ia(t, o, r, a), xt = !1;
    var p = t.memoizedState;
    o.state = p, $l(t, r, o, l), s = t.memoizedState, u !== r || p !== s || Te.current || xt ? (typeof h == "function" && (jo(t, n, h, r), s = t.memoizedState), (u = xt || la(t, n, u, r, p, s, a)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = a, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, df(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Xe(t.type, u), o.props = a, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ke(s) : (s = ze(n) ? Xt : Se.current, s = Pn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && ia(t, o, r, s), xt = !1, p = t.memoizedState, o.state = p, $l(t, r, o, l);
    var v = t.memoizedState;
    u !== m || p !== v || Te.current || xt ? (typeof g == "function" && (jo(t, n, g, r), v = t.memoizedState), (a = xt || la(t, n, a, r, p, v, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = s, r = a) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ho(e, t, n, r, i, l);
}
function Ho(e, t, n, r, l, i) {
  Df(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
    return l && Zs(t, n, !1), gt(e, t, i);
  r = t.stateNode, Bm.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = zn(t, e.child, null, i), t.child = zn(t, null, u, i)) : ke(e, t, u, i), t.memoizedState = r.state, l && Zs(t, n, !0), t.child;
}
function jf(e) {
  var t = e.stateNode;
  t.pendingContext ? Xs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xs(e, t.context, !1), $u(e, t.containerInfo);
}
function da(e, t, n, r, l) {
  return Tn(), Tu(l), t.flags |= 256, ke(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ko(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bf(e, t, n) {
  var r = t.pendingProps, l = G.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), W(G, l & 1), e === null)
    return Fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = ni(o, r, 0, null), e = Yt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ko(n), t.memoizedState = Vo, e) : Uu(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Um(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = It(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = It(u, i) : (i = Yt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ko(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Vo, r;
  }
  return i = e.child, e = i.sibling, r = It(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Uu(e, t) {
  return t = ni({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && Tu(r), zn(t, e.child, null, n), e = Uu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Um(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bi(Error(k(422))), qr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = ni({ mode: "visible", children: r.children }, l, 0, null), i = Yt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zn(t, e.child, null, o), t.child.memoizedState = Ko(o), t.memoizedState = Vo, i);
  if (!(t.mode & 1))
    return qr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, i = Error(k(419)), r = bi(i, r, void 0), qr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, Pe || u) {
    if (r = se, r !== null) {
      switch (o & -o) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, yt(e, l), be(r, e, l, -1));
    }
    return Gu(), r = bi(Error(k(421))), qr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = eh.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, $e = Rt(l.nextSibling), Ie = t, K = !0, Je = null, e !== null && (Be[Ue++] = ft, Be[Ue++] = dt, Be[Ue++] = Zt, ft = e.id, dt = e.overflow, Zt = t), t = Uu(t, r.children), t.flags |= 4096, t);
}
function pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Do(e.return, t, n);
}
function eo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Uf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ke(e, t, r.children, n), r = G.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && pa(e, n, t);
          else if (e.tag === 19)
            pa(e, n, t);
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
  if (W(G, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Il(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), eo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Il(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        eo(t, !0, n, null, i);
        break;
      case "together":
        eo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), qt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = It(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wm(e, t, n) {
  switch (t.tag) {
    case 3:
      jf(t), Tn();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      ze(t.type) && zl(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      W(Nl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bf(e, t, n) : (W(G, G.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      W(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Uf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), W(G, G.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ff(e, t, n);
  }
  return gt(e, t, n);
}
var Wf, Qo, Hf, Vf;
Wf = function(e, t) {
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
Qo = function() {
};
Hf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Qt(ut.current);
    var i = null;
    switch (n) {
      case "input":
        l = mo(e, l), r = mo(e, r), i = [];
        break;
      case "select":
        l = X({}, l, { value: void 0 }), r = X({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = go(e, l), r = go(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pl);
    }
    wo(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u)
            u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (sr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
            for (o in s)
              s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
          } else
            n || (i || (i = []), i.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (sr.hasOwnProperty(a) ? (s != null && a === "onScroll" && H("scroll", e), i || u === s || (i = [])) : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
  if (!K)
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
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Hm(e, t, n) {
  var r = t.pendingProps;
  switch (Pu(t), t.tag) {
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
      return ge(t), null;
    case 1:
      return ze(t.type) && Tl(), ge(t), null;
    case 3:
      return r = t.stateNode, Ln(), V(Te), V(Se), Mu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (eu(Je), Je = null))), Qo(e, t), ge(t), null;
    case 5:
      Iu(t);
      var l = Qt(Sr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Hf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return ge(t), null;
        }
        if (e = Qt(ut.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[it] = t, r[vr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Jn.length; l++)
                H(Jn[l], r);
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
              xs(r, i), H("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, H("invalid", r);
              break;
            case "textarea":
              Es(r, i), H("invalid", r);
          }
          wo(n, i), l = null;
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : sr.hasOwnProperty(o) && u != null && o === "onScroll" && H("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), Cs(r, i, !0);
              break;
            case "textarea":
              Ur(r), _s(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[it] = t, e[vr] = r, Wf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = So(n, r), n) {
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
                for (l = 0; l < Jn.length; l++)
                  H(Jn[l], e);
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
                xs(e, r), l = mo(e, r), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = X({}, r, { value: void 0 }), H("invalid", e);
                break;
              case "textarea":
                Es(e, r), l = go(e, r), H("invalid", e);
                break;
              default:
                l = r;
            }
            wo(n, l), u = l;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style" ? Sc(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vc(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ar(e, s) : typeof s == "number" && ar(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (sr.hasOwnProperty(i) ? s != null && i === "onScroll" && H("scroll", e) : s != null && fu(e, i, s, o));
              }
            switch (n) {
              case "input":
                Ur(e), Cs(e, r, !1);
                break;
              case "textarea":
                Ur(e), _s(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? gn(e, !!r.multiple, i, !1) : r.defaultValue != null && gn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Pl);
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
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null)
        Vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Qt(Sr.current), Qt(ut.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (i = r.nodeValue !== n) && (e = Ie, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
      }
      return ge(t), null;
    case 13:
      if (V(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && $e !== null && t.mode & 1 && !(t.flags & 128))
          sf(), Tn(), t.flags |= 98560, i = !1;
        else if (i = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i)
              throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
              throw Error(k(317));
            i[it] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), i = !1;
        } else
          Je !== null && (eu(Je), Je = null), i = !0;
        if (!i)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ie === 0 && (ie = 3) : Gu())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
      return Ln(), Qo(e, t), e === null && yr(t.stateNode.containerInfo), ge(t), null;
    case 10:
      return Ru(t.type._context), ge(t), null;
    case 17:
      return ze(t.type) && Tl(), ge(t), null;
    case 19:
      if (V(G), i = t.memoizedState, i === null)
        return ge(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
        if (r)
          Kn(i, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (o = Il(e), o !== null) {
                for (t.flags |= 128, Kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return W(G, G.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && ee() > Nn && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Il(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !K)
              return ge(t), null;
          } else
            2 * ee() - i.renderingStartTime > Nn && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ee(), t.sibling = null, n = G.current, W(G, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
    case 22:
    case 23:
      return Qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Vm(e, t) {
  switch (Pu(t), t.tag) {
    case 1:
      return ze(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ln(), V(Te), V(Se), Mu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Iu(t), null;
    case 13:
      if (V(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        Tn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(G), null;
    case 4:
      return Ln(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1, we = !1, Km = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else
      n.current = null;
}
function Go(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var ma = !1;
function Qm(e, t) {
  if (Ro = Cl, e = Yc(), Eu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, s = -1, a = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (g = m.firstChild) !== null; )
                p = m, m = g;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++a === l && (u = o), p === i && ++h === r && (s = o), (g = m.nextSibling) !== null)
                  break;
                m = p, p = m.parentNode;
              }
              m = g;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (No = { focusedElem: e, selectionRange: n }, Cl = !1, P = t; P !== null; )
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
                  var y = v.memoizedProps, L = v.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), L);
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
          q(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, P = e;
          break;
        }
        P = t.return;
      }
  return v = ma, ma = !1, v;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Go(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function ei(e, t) {
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
function Yo(e) {
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
  t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[vr], delete t[Io], delete t[zm], delete t[Lm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ha(e) {
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
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; )
      Xo(e, t, n), e = e.sibling;
}
function Zo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zo(e, t, n), e = e.sibling; e !== null; )
      Zo(e, t, n), e = e.sibling;
}
var ce = null, Ze = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; )
    Gf(e, t, n), n = n.sibling;
}
function Gf(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Ql, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      we || hn(n, t);
    case 6:
      var r = ce, l = Ze;
      ce = null, St(e, t, n), ce = r, Ze = l, ce !== null && (Ze ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null && (Ze ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Gi(e.parentNode, n) : e.nodeType === 1 && Gi(e, n), pr(e)) : Gi(ce, n.stateNode));
      break;
    case 4:
      r = ce, l = Ze, ce = n.stateNode.containerInfo, Ze = !0, St(e, t, n), ce = r, Ze = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Go(n, t, o), l = l.next;
        } while (l !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (!we && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          q(n, t, u);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, St(e, t, n), we = r) : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function ya(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Km()), t.forEach(function(r) {
      var l = th.bind(null, e, r);
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
        var i = e, o = t, u = o;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                ce = u.stateNode, Ze = !1;
                break e;
              case 3:
                ce = u.stateNode.containerInfo, Ze = !0;
                break e;
              case 4:
                ce = u.stateNode.containerInfo, Ze = !0;
                break e;
            }
            u = u.return;
          }
        if (ce === null)
          throw Error(k(160));
        Gf(i, o, l), ce = null, Ze = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        q(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Yf(t, e), t = t.sibling;
}
function Yf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), tt(e), r & 4) {
        try {
          lr(3, e, e.return), ei(3, e);
        } catch (y) {
          q(e, e.return, y);
        }
        try {
          lr(5, e, e.return);
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 1:
      Ye(t, e), tt(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), tt(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ar(l, "");
        } catch (y) {
          q(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && i.type === "radio" && i.name != null && hc(l, i), So(u, o);
            var a = So(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o], m = s[o + 1];
              h === "style" ? Sc(l, m) : h === "dangerouslySetInnerHTML" ? vc(l, m) : h === "children" ? ar(l, m) : fu(l, h, m, a);
            }
            switch (u) {
              case "input":
                ho(l, i);
                break;
              case "textarea":
                yc(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null ? gn(l, !!i.multiple, g, !1) : p !== !!i.multiple && (i.defaultValue != null ? gn(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : gn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[vr] = i;
          } catch (y) {
            q(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ye(t, e), tt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (y) {
          q(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          pr(t.containerInfo);
        } catch (y) {
          q(e, e.return, y);
        }
      break;
    case 4:
      Ye(t, e), tt(e);
      break;
    case 13:
      Ye(t, e), tt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Vu = ee())), r & 4 && ya(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (a = we) || h, Ye(t, e), we = a) : Ye(t, e), tt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (P = e, h = e.child; h !== null; ) {
            for (m = P = h; P !== null; ) {
              switch (p = P, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, p, p.return);
                  break;
                case 1:
                  hn(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (y) {
                      q(r, n, y);
                    }
                  }
                  break;
                case 5:
                  hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    va(m);
                    continue;
                  }
              }
              g !== null ? (g.return = p, P = g) : va(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, a ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = wc("display", o));
                } catch (y) {
                  q(e, e.return, y);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (y) {
                  q(e, e.return, y);
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
      Ye(t, e), tt(e), r & 4 && ya(e);
      break;
    case 21:
      break;
    default:
      Ye(
        t,
        e
      ), tt(e);
  }
}
function tt(e) {
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
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ar(l, ""), r.flags &= -33);
          var i = ha(e);
          Zo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = ha(e);
          Xo(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, n) {
  P = e, Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || br;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || we;
        u = br;
        var a = we;
        if (br = o, (we = s) && !a)
          for (P = l; P !== null; )
            o = P, s = o.child, o.tag === 22 && o.memoizedState !== null ? wa(l) : s !== null ? (s.return = o, P = s) : wa(l);
        for (; i !== null; )
          P = i, Xf(i), i = i.sibling;
        P = l, br = u, we = a;
      }
      ga(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : ga(e);
  }
}
function ga(e) {
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
              we || ei(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && ta(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ta(t, o, n);
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
                    m !== null && pr(m);
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
        we || t.flags & 512 && Yo(t);
      } catch (p) {
        q(t, t.return, p);
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
function va(e) {
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
function wa(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ei(4, t);
          } catch (s) {
            q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              q(t, l, s);
            }
          }
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            q(t, o, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
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
var Ym = Math.ceil, Fl = wt.ReactCurrentDispatcher, Wu = wt.ReactCurrentOwner, Ve = wt.ReactCurrentBatchConfig, F = 0, se = null, re = null, de = 0, Ne = 0, yn = Dt(0), ie = 0, Er = null, qt = 0, ti = 0, Hu = 0, ir = null, _e = null, Vu = 0, Nn = 1 / 0, at = null, Dl = !1, Jo = null, Ot = null, el = !1, Pt = null, jl = 0, or = 0, qo = null, dl = -1, pl = 0;
function xe() {
  return F & 6 ? ee() : dl !== -1 ? dl : dl = ee();
}
function $t(e) {
  return e.mode & 1 ? F & 2 && de !== 0 ? de & -de : Nm.transition !== null ? (pl === 0 && (pl = Oc()), pl) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jc(e.type)), e) : 1;
}
function be(e, t, n, r) {
  if (50 < or)
    throw or = 0, qo = null, Error(k(185));
  Lr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (ti |= n), ie === 4 && Et(e, de)), Le(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Nn = ee() + 500, Jl && jt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Np(e, t);
  var r = xl(e, e === se ? de : 0);
  if (r === 0)
    n !== null && zs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && zs(n), t === 1)
      e.tag === 0 ? Rm(Sa.bind(null, e)) : lf(Sa.bind(null, e)), Pm(function() {
        !(F & 6) && jt();
      }), n = null;
    else {
      switch ($c(r)) {
        case 1:
          n = yu;
          break;
        case 4:
          n = Rc;
          break;
        case 16:
          n = kl;
          break;
        case 536870912:
          n = Nc;
          break;
        default:
          n = kl;
      }
      n = rd(n, Zf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zf(e, t) {
  if (dl = -1, pl = 0, F & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n)
    return null;
  var r = xl(e, e === se ? de : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = qf();
    (se !== e || de !== t) && (at = null, Nn = ee() + 500, Gt(e, t));
    do
      try {
        Jm();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (1);
    Lu(), Fl.current = i, F = l, re !== null ? t = 0 : (se = null, de = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (l = _o(e), l !== 0 && (r = l, t = bo(e, l))), t === 1)
      throw n = Er, Gt(e, 0), Et(e, r), Le(e, ee()), n;
    if (t === 6)
      Et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Xm(l) && (t = Bl(e, r), t === 2 && (i = _o(e), i !== 0 && (r = i, t = bo(e, i))), t === 1))
        throw n = Er, Gt(e, 0), Et(e, r), Le(e, ee()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ht(e, _e, at);
          break;
        case 3:
          if (Et(e, r), (r & 130023424) === r && (t = Vu + 500 - ee(), 10 < t)) {
            if (xl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = $o(Ht.bind(null, e, _e, at), t);
            break;
          }
          Ht(e, _e, at);
          break;
        case 4:
          if (Et(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - qe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ym(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = $o(Ht.bind(null, e, _e, at), r);
            break;
          }
          Ht(e, _e, at);
          break;
        case 5:
          Ht(e, _e, at);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Le(e, ee()), e.callbackNode === n ? Zf.bind(null, e) : null;
}
function bo(e, t) {
  var n = ir;
  return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = _e, _e = n, t !== null && eu(t)), e;
}
function eu(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function Xm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!et(i(), l))
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
  for (t &= ~Hu, t &= ~ti, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sa(e) {
  if (F & 6)
    throw Error(k(327));
  xn();
  var t = xl(e, 0);
  if (!(t & 1))
    return Le(e, ee()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _o(e);
    r !== 0 && (t = r, n = bo(e, r));
  }
  if (n === 1)
    throw n = Er, Gt(e, 0), Et(e, t), Le(e, ee()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, _e, at), Le(e, ee()), null;
}
function Ku(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Nn = ee() + 500, Jl && jt());
  }
}
function bt(e) {
  Pt !== null && Pt.tag === 0 && !(F & 6) && xn();
  var t = F;
  F |= 1;
  var n = Ve.transition, r = B;
  try {
    if (Ve.transition = null, B = 1, e)
      return e();
  } finally {
    B = r, Ve.transition = n, F = t, !(F & 6) && jt();
  }
}
function Qu() {
  Ne = yn.current, V(yn);
}
function Gt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, _m(n)), re !== null)
    for (n = re.return; n !== null; ) {
      var r = n;
      switch (Pu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Tl();
          break;
        case 3:
          Ln(), V(Te), V(Se), Mu();
          break;
        case 5:
          Iu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          V(G);
          break;
        case 19:
          V(G);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Qu();
      }
      n = n.return;
    }
  if (se = e, re = e = It(e.current, null), de = Ne = t, ie = 0, Er = null, Hu = ti = qt = 0, _e = ir = null, Kt !== null) {
    for (t = 0; t < Kt.length; t++)
      if (n = Kt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
    Kt = null;
  }
  return e;
}
function Jf(e, t) {
  do {
    var n = re;
    try {
      if (Lu(), al.current = Al, Ml) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ml = !1;
      }
      if (Jt = 0, ue = le = Y = null, rr = !1, kr = 0, Wu.current = null, n === null || n.return === null) {
        ie = 1, Er = t, re = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = de, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = ua(o);
          if (g !== null) {
            g.flags &= -257, sa(g, o, u, i, t), g.mode & 1 && oa(i, a, t), t = g, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              oa(i, a, t), Gu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (K && u.mode & 1) {
          var L = ua(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256), sa(L, o, u, i, t), Tu(Rn(s, u));
            break e;
          }
        }
        i = s = Rn(s, u), ie !== 4 && (ie = 2), ir === null ? ir = [i] : ir.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = If(i, s, t);
              ea(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Mf(i, u, t);
                ea(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ed(n);
    } catch (E) {
      t = E, re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qf() {
  var e = Fl.current;
  return Fl.current = Al, e === null ? Al : e;
}
function Gu() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || !(qt & 268435455) && !(ti & 268435455) || Et(se, de);
}
function Bl(e, t) {
  var n = F;
  F |= 2;
  var r = qf();
  (se !== e || de !== t) && (at = null, Gt(e, t));
  do
    try {
      Zm();
      break;
    } catch (l) {
      Jf(e, l);
    }
  while (1);
  if (Lu(), F = n, Fl.current = r, re !== null)
    throw Error(k(261));
  return se = null, de = 0, ie;
}
function Zm() {
  for (; re !== null; )
    bf(re);
}
function Jm() {
  for (; re !== null && !xp(); )
    bf(re);
}
function bf(e) {
  var t = nd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : re = t, Wu.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Vm(n, t), n !== null) {
        n.flags &= 32767, re = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, re = null;
        return;
      }
    } else if (n = Hm(n, t, Ne), n !== null) {
      re = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Ht(e, t, n) {
  var r = B, l = Ve.transition;
  try {
    Ve.transition = null, B = 1, qm(e, t, n, r);
  } finally {
    Ve.transition = l, B = r;
  }
  return null;
}
function qm(e, t, n, r) {
  do
    xn();
  while (Pt !== null);
  if (F & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Op(e, i), e === se && (re = se = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, rd(kl, function() {
    return xn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ve.transition, Ve.transition = null;
    var o = B;
    B = 1;
    var u = F;
    F |= 4, Wu.current = null, Qm(e, n), Yf(n, e), vm(No), Cl = !!Ro, No = Ro = null, e.current = n, Gm(n), Cp(), F = u, B = o, Ve.transition = i;
  } else
    e.current = n;
  if (el && (el = !1, Pt = e, jl = l), i = e.pendingLanes, i === 0 && (Ot = null), Pp(n.stateNode), Le(e, ee()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Dl)
    throw Dl = !1, e = Jo, Jo = null, e;
  return jl & 1 && e.tag !== 0 && xn(), i = e.pendingLanes, i & 1 ? e === qo ? or++ : (or = 0, qo = e) : or = 0, jt(), null;
}
function xn() {
  if (Pt !== null) {
    var e = $c(jl), t = Ve.transition, n = B;
    try {
      if (Ve.transition = null, B = 16 > e ? 16 : e, Pt === null)
        var r = !1;
      else {
        if (e = Pt, Pt = null, jl = 0, F & 6)
          throw Error(k(331));
        var l = F;
        for (F |= 4, P = e.current; P !== null; ) {
          var i = P, o = i.child;
          if (P.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (P = a; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, P = m;
                  else
                    for (; P !== null; ) {
                      h = P;
                      var p = h.sibling, g = h.return;
                      if (Kf(h), h === a) {
                        P = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, P = p;
                        break;
                      }
                      P = g;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var L = y.sibling;
                    y.sibling = null, y = L;
                  } while (y !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null)
            o.return = i, P = o;
          else
            e:
              for (; P !== null; ) {
                if (i = P, i.flags & 2048)
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  f.return = i.return, P = f;
                  break e;
                }
                P = i.return;
              }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null)
            d.return = o, P = d;
          else
            e:
              for (o = c; P !== null; ) {
                if (u = P, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ei(9, u);
                    }
                  } catch (E) {
                    q(u, u.return, E);
                  }
                if (u === o) {
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
        if (F = l, jt(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(Ql, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      B = n, Ve.transition = t;
    }
  }
  return !1;
}
function ka(e, t, n) {
  t = Rn(n, t), t = If(e, t, 1), e = Nt(e, t, 1), t = xe(), e !== null && (Lr(e, 1, t), Le(e, t));
}
function q(e, t, n) {
  if (e.tag === 3)
    ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = Rn(n, e), e = Mf(t, e, 1), t = Nt(t, e, 1), e = xe(), t !== null && (Lr(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, se === e && (de & n) === n && (ie === 4 || ie === 3 && (de & 130023424) === de && 500 > ee() - Vu ? Gt(e, 0) : Hu |= n), Le(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = xe();
  e = yt(e, t), e !== null && (Lr(e, t, n), Le(e, n));
}
function eh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function th(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), td(e, n);
}
var nd;
nd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, Wm(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, K && t.flags & 1048576 && of(t, Rl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fl(e, t), e = t.pendingProps;
      var l = Pn(t, Se.current);
      kn(t, n), l = Fu(null, t, r, e, l, n);
      var i = Du();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (i = !0, zl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ou(t), l.updater = bl, t.stateNode = l, l._reactInternals = t, Bo(t, r, e, n), t = Ho(null, t, r, !0, i, n)) : (t.tag = 0, K && i && _u(t), ke(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = rh(r), e = Xe(r, e), l) {
          case 0:
            t = Wo(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = aa(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, Xe(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), Wo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), fa(e, t, r, l, n);
    case 3:
      e: {
        if (jf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, df(e, t), $l(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated)
          if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Rn(Error(k(423)), t), t = da(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Rn(Error(k(424)), t), t = da(e, t, r, n, l);
            break e;
          } else
            for ($e = Rt(t.stateNode.containerInfo.firstChild), Ie = t, K = !0, Je = null, n = cf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Tn(), r === l) {
            t = gt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pf(t), e === null && Fo(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Oo(r, l) ? o = null : i !== null && Oo(r, i) && (t.flags |= 32), Df(e, t), ke(e, t, o, n), t.child;
    case 6:
      return e === null && Fo(t), null;
    case 13:
      return Bf(e, t, n);
    case 4:
      return $u(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), aa(e, t, r, l, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, W(Nl, r._currentValue), r._currentValue = o, i !== null)
          if (et(i.value, o)) {
            if (i.children === l.children && !Te.current) {
              t = gt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      s = pt(-1, n & -n), s.tag = 2;
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Do(
                      i.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10)
                o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (o = i.return, o === null)
                  throw Error(k(341));
                o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Do(o, n, t), o = i.sibling;
              } else
                o = i.child;
              if (o !== null)
                o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (i = o.sibling, i !== null) {
                    i.return = o.return, o = i;
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ke(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, kn(t, n), l = Ke(l), r = r(l), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Xe(r, t.pendingProps), l = Xe(r.type, l), ca(e, t, r, l, n);
    case 15:
      return Af(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Xe(r, l), fl(e, t), t.tag = 1, ze(r) ? (e = !0, zl(t)) : e = !1, kn(t, n), $f(t, r, l), Bo(t, r, l, n), Ho(null, t, r, !0, e, n);
    case 19:
      return Uf(e, t, n);
    case 22:
      return Ff(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function rd(e, t) {
  return Lc(e, t);
}
function nh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new nh(e, t, n, r);
}
function Yu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function rh(e) {
  if (typeof e == "function")
    return Yu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === pu)
      return 11;
    if (e === mu)
      return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ml(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function")
    Yu(e) && (o = 1);
  else if (typeof e == "string")
    o = 5;
  else
    e:
      switch (e) {
        case on:
          return Yt(n.children, l, i, t);
        case du:
          o = 8, l |= 8;
          break;
        case ao:
          return e = He(12, n, t, l | 2), e.elementType = ao, e.lanes = i, e;
        case co:
          return e = He(13, n, t, l), e.elementType = co, e.lanes = i, e;
        case fo:
          return e = He(19, n, t, l), e.elementType = fo, e.lanes = i, e;
        case dc:
          return ni(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cc:
                o = 10;
                break e;
              case fc:
                o = 9;
                break e;
              case pu:
                o = 11;
                break e;
              case mu:
                o = 14;
                break e;
              case kt:
                o = 16, r = null;
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
  return t = He(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Yt(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function ni(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function to(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function no(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function lh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ai(0), this.expirationTimes = Ai(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ai(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xu(e, t, n, r, l, i, o, u, s) {
  return e = new lh(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = He(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ou(i), e;
}
function ih(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ld(e) {
  if (!e)
    return At;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1)
      throw Error(k(170));
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
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n))
      return rf(e, n, t);
  }
  return t;
}
function id(e, t, n, r, l, i, o, u, s) {
  return e = Xu(n, r, !0, e, l, i, o, u, s), e.context = ld(null), n = e.current, r = xe(), l = $t(n), i = pt(r, l), i.callback = t ?? null, Nt(n, i, l), e.current.lanes = l, Lr(e, l, r), Le(e, r), e;
}
function ri(e, t, n, r) {
  var l = t.current, i = xe(), o = $t(l);
  return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = pt(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(l, t, o), e !== null && (be(e, l, o, i), sl(e, l, o)), o;
}
function Ul(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zu(e, t) {
  xa(e, t), (e = e.alternate) && xa(e, t);
}
function oh() {
  return null;
}
var od = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ju(e) {
  this._internalRoot = e;
}
li.prototype.render = Ju.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  ri(e, t, null, null);
};
li.prototype.unmount = Ju.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function() {
      ri(null, e, null, null);
    }), t[ht] = null;
  }
};
function li(e) {
  this._internalRoot = e;
}
li.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ac();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
      ;
    Ct.splice(n, 0, e), n === 0 && Dc(e);
  }
};
function qu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ii(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ca() {
}
function uh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Ul(o);
        i.call(a);
      };
    }
    var o = id(t, r, e, 0, null, !1, !1, "", Ca);
    return e._reactRootContainer = o, e[ht] = o.current, yr(e.nodeType === 8 ? e.parentNode : e), bt(), o;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Ul(s);
      u.call(a);
    };
  }
  var s = Xu(e, 0, !1, null, null, !1, !1, "", Ca);
  return e._reactRootContainer = s, e[ht] = s.current, yr(e.nodeType === 8 ? e.parentNode : e), bt(function() {
    ri(t, s, n, r);
  }), s;
}
function oi(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Ul(o);
        u.call(s);
      };
    }
    ri(t, o, e, l);
  } else
    o = uh(n, t, e, l, r);
  return Ul(o);
}
Ic = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (gu(t, n | 1), Le(t, ee()), !(F & 6) && (Nn = ee() + 500, jt()));
      }
      break;
    case 13:
      bt(function() {
        var r = yt(e, 1);
        if (r !== null) {
          var l = xe();
          be(r, e, 1, l);
        }
      }), Zu(e, 1);
  }
};
vu = function(e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = xe();
      be(t, e, 134217728, n);
    }
    Zu(e, 134217728);
  }
};
Mc = function(e) {
  if (e.tag === 13) {
    var t = $t(e), n = yt(e, t);
    if (n !== null) {
      var r = xe();
      be(n, e, t, r);
    }
    Zu(e, t);
  }
};
Ac = function() {
  return B;
};
Fc = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
xo = function(e, t, n) {
  switch (t) {
    case "input":
      if (ho(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Zl(r);
            if (!l)
              throw Error(k(90));
            mc(r), ho(r, l);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && gn(e, !!n.multiple, t, !1);
  }
};
Cc = Ku;
Ec = bt;
var sh = { usingClientEntryPoint: !1, Events: [Nr, cn, Zl, kc, xc, Ku] }, Qn = { findFiberByHostInstance: Vt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ah = { bundleType: Qn.bundleType, version: Qn.version, rendererPackageName: Qn.rendererPackageName, rendererConfig: Qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Qn.findFiberByHostInstance || oh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      Ql = tl.inject(ah), ot = tl;
    } catch {
    }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sh;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t))
    throw Error(k(200));
  return ih(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!qu(e))
    throw Error(k(299));
  var n = !1, r = "", l = od;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xu(e, 1, !1, null, null, n, !1, r, l), e[ht] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new Ju(t);
};
Fe.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return bt(e);
};
Fe.hydrate = function(e, t, n) {
  if (!ii(t))
    throw Error(k(200));
  return oi(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!qu(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = od;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = id(t, null, e, 1, n ?? null, l, !1, i, o), e[ht] = t.current, yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new li(t);
};
Fe.render = function(e, t, n) {
  if (!ii(t))
    throw Error(k(200));
  return oi(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!ii(e))
    throw Error(k(40));
  return e._reactRootContainer ? (bt(function() {
    oi(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = Ku;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ii(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return oi(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function ud() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (e) {
      console.error(e);
    }
}
ud(), oc.exports = Fe;
var ch = oc.exports, sd, Ea = ch;
sd = Ea.createRoot, Ea.hydrateRoot;
function fh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const _a = "$$material";
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, pe.apply(null, arguments);
}
function ui(e, t) {
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
var dh = !1;
function ph(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function mh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var hh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, i), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !dh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(mh(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = ph(l);
      try {
        i.insertRule(r, i.cssRules.length);
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
}(), ve = "-ms-", Wl = "-moz-", D = "-webkit-", ad = "comm", bu = "rule", es = "decl", yh = "@import", cd = "@keyframes", gh = "@layer", vh = Math.abs, si = String.fromCharCode, wh = Object.assign;
function Sh(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function fd(e) {
  return e.trim();
}
function kh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function tu(e, t) {
  return e.indexOf(t);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function rt(e) {
  return e.length;
}
function ts(e) {
  return e.length;
}
function nl(e, t) {
  return t.push(e), e;
}
function xh(e, t) {
  return e.map(t).join("");
}
var ai = 1, On = 1, dd = 0, Re = 0, ne = 0, An = "";
function ci(e, t, n, r, l, i, o) {
  return { value: e, root: t, parent: n, type: r, props: l, children: i, line: ai, column: On, length: o, return: "" };
}
function Gn(e, t) {
  return wh(ci("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ch() {
  return ne;
}
function Eh() {
  return ne = Re > 0 ? fe(An, --Re) : 0, On--, ne === 10 && (On = 1, ai--), ne;
}
function Me() {
  return ne = Re < dd ? fe(An, Re++) : 0, On++, ne === 10 && (On = 1, ai++), ne;
}
function st() {
  return fe(An, Re);
}
function hl() {
  return Re;
}
function $r(e, t) {
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
function pd(e) {
  return ai = On = 1, dd = rt(An = e), Re = 0, [];
}
function md(e) {
  return An = "", e;
}
function yl(e) {
  return fd($r(Re - 1, nu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _h(e) {
  for (; (ne = st()) && ne < 33; )
    Me();
  return Pr(e) > 2 || Pr(ne) > 3 ? "" : " ";
}
function Ph(e, t) {
  for (; --t && Me() && !(ne < 48 || ne > 102 || ne > 57 && ne < 65 || ne > 70 && ne < 97); )
    ;
  return $r(e, hl() + (t < 6 && st() == 32 && Me() == 32));
}
function nu(e) {
  for (; Me(); )
    switch (ne) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nu(ne);
        break;
      case 40:
        e === 41 && nu(e);
        break;
      case 92:
        Me();
        break;
    }
  return Re;
}
function Th(e, t) {
  for (; Me() && e + ne !== 47 + 10; )
    if (e + ne === 42 + 42 && st() === 47)
      break;
  return "/*" + $r(t, Re - 1) + "*" + si(e === 47 ? e : Me());
}
function zh(e) {
  for (; !Pr(st()); )
    Me();
  return $r(e, Re);
}
function Lh(e) {
  return md(gl("", null, null, null, [""], e = pd(e), 0, [0], e));
}
function gl(e, t, n, r, l, i, o, u, s) {
  for (var a = 0, h = 0, m = o, p = 0, g = 0, v = 0, y = 1, L = 1, f = 1, c = 0, d = "", w = l, E = i, _ = r, x = d; L; )
    switch (v = c, c = Me()) {
      case 40:
        if (v != 108 && fe(x, m - 1) == 58) {
          tu(x += j(yl(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += yl(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += _h(v);
        break;
      case 92:
        x += Ph(hl() - 1, 7);
        continue;
      case 47:
        switch (st()) {
          case 42:
          case 47:
            nl(Rh(Th(Me(), hl()), t, n), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * y:
        u[a++] = rt(x) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            L = 0;
          case 59 + h:
            f == -1 && (x = j(x, /\f/g, "")), g > 0 && rt(x) - m && nl(g > 32 ? Ta(x + ";", r, n, m - 1) : Ta(j(x, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            x += ";";
          default:
            if (nl(_ = Pa(x, t, n, a, h, l, u, d, w = [], E = [], m), i), c === 123)
              if (h === 0)
                gl(x, t, _, _, w, i, m, u, E);
              else
                switch (p === 99 && fe(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(e, _, _, r && nl(Pa(e, _, _, 0, 0, l, u, d, l, w = [], m), E), l, E, m, u, r ? w : E);
                    break;
                  default:
                    gl(x, _, _, _, [""], E, 0, u, E);
                }
        }
        a = h = g = 0, y = f = 1, d = x = "", m = o;
        break;
      case 58:
        m = 1 + rt(x), g = v;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Eh() == 125)
            continue;
        }
        switch (x += si(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            u[a++] = (rt(x) - 1) * f, f = 1;
            break;
          case 64:
            st() === 45 && (x += yl(Me())), p = st(), h = m = rt(d = x += zh(hl())), c++;
            break;
          case 45:
            v === 45 && rt(x) == 2 && (y = 0);
        }
    }
  return i;
}
function Pa(e, t, n, r, l, i, o, u, s, a, h) {
  for (var m = l - 1, p = l === 0 ? i : [""], g = ts(p), v = 0, y = 0, L = 0; v < r; ++v)
    for (var f = 0, c = _r(e, m + 1, m = vh(y = o[v])), d = e; f < g; ++f)
      (d = fd(y > 0 ? p[f] + " " + c : j(c, /&\f/g, p[f]))) && (s[L++] = d);
  return ci(e, t, n, l === 0 ? bu : u, s, a, h);
}
function Rh(e, t, n) {
  return ci(e, t, n, ad, si(Ch()), _r(e, 2, -2), 0);
}
function Ta(e, t, n, r) {
  return ci(e, t, n, es, _r(e, 0, r), _r(e, r + 1, -1), r);
}
function Cn(e, t) {
  for (var n = "", r = ts(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Nh(e, t, n, r) {
  switch (e.type) {
    case gh:
      if (e.children.length)
        break;
    case yh:
    case es:
      return e.return = e.return || e.value;
    case ad:
      return "";
    case cd:
      return e.return = e.value + "{" + Cn(e.children, r) + "}";
    case bu:
      e.value = e.props.join(",");
  }
  return rt(n = Cn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Oh(e) {
  var t = ts(e);
  return function(n, r, l, i) {
    for (var o = "", u = 0; u < t; u++)
      o += e[u](n, r, l, i) || "";
    return o;
  };
}
function $h(e) {
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
var Ih = function(t, n, r) {
  for (var l = 0, i = 0; l = i, i = st(), l === 38 && i === 12 && (n[r] = 1), !Pr(i); )
    Me();
  return $r(t, Re);
}, Mh = function(t, n) {
  var r = -1, l = 44;
  do
    switch (Pr(l)) {
      case 0:
        l === 38 && st() === 12 && (n[r] = 1), t[r] += Ih(Re - 1, n, r);
        break;
      case 2:
        t[r] += yl(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = st() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += si(l);
    }
  while (l = Me());
  return t;
}, Ah = function(t, n) {
  return md(Mh(pd(t), n));
}, za = /* @__PURE__ */ new WeakMap(), Fh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !za.get(r)) && !l) {
      za.set(t, !0);
      for (var i = [], o = Ah(n, i), u = r.props, s = 0, a = 0; s < o.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = i[s] ? o[s].replace(/&\f/g, u[h]) : u[h] + " " + o[s];
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
function yd(e, t) {
  switch (Sh(e, t)) {
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
      return D + e + Wl + e + ve + e + e;
    case 6828:
    case 4268:
      return D + e + ve + e + e;
    case 6165:
      return D + e + ve + "flex-" + e + e;
    case 5187:
      return D + e + j(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return D + e + ve + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return D + e + ve + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return D + e + ve + j(e, "shrink", "negative") + e;
    case 5292:
      return D + e + ve + j(e, "basis", "preferred-size") + e;
    case 6060:
      return D + "box-" + j(e, "-grow", "") + D + e + ve + j(e, "grow", "positive") + e;
    case 4554:
      return D + j(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + D + e + e;
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
      if (rt(e) - 1 - t > 6)
        switch (fe(e, t + 1)) {
          case 109:
            if (fe(e, t + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + D + "$2-$3$1" + Wl + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tu(e, "stretch") ? yd(j(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (fe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (fe(e, rt(e) - 3 - (~tu(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + D) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + D + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + D + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, t + 11)) {
        case 114:
          return D + e + ve + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + ve + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + ve + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + ve + e + e;
  }
  return e;
}
var jh = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case es:
        t.return = yd(t.value, t.length);
        break;
      case cd:
        return Cn([Gn(t, {
          value: j(t.value, "@", "@" + D)
        })], l);
      case bu:
        if (t.length)
          return xh(t.props, function(i) {
            switch (kh(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Cn([Gn(t, {
                  props: [j(i, /:(read-\w+)/, ":" + Wl + "$1")]
                })], l);
              case "::placeholder":
                return Cn([Gn(t, {
                  props: [j(i, /:(plac\w+)/, ":" + D + "input-$1")]
                }), Gn(t, {
                  props: [j(i, /:(plac\w+)/, ":" + Wl + "$1")]
                }), Gn(t, {
                  props: [j(i, /:(plac\w+)/, ve + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Bh = [jh], Uh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var L = y.getAttribute("data-emotion");
      L.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Bh, i = {}, o, u = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var L = y.getAttribute("data-emotion").split(" "), f = 1; f < L.length; f++)
        i[L[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [Fh, Dh];
  {
    var h, m = [Nh, $h(function(y) {
      h.insert(y);
    })], p = Oh(a.concat(l, m)), g = function(L) {
      return Cn(Lh(L), p);
    };
    s = function(L, f, c, d) {
      h = c, g(L ? L + "{" + f.styles + "}" : f.styles), d && (v.inserted[f.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new hh({
      key: n,
      container: o,
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
  return v.sheet.hydrate(u), v;
}, gd = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae = typeof Symbol == "function" && Symbol.for, ns = ae ? Symbol.for("react.element") : 60103, rs = ae ? Symbol.for("react.portal") : 60106, fi = ae ? Symbol.for("react.fragment") : 60107, di = ae ? Symbol.for("react.strict_mode") : 60108, pi = ae ? Symbol.for("react.profiler") : 60114, mi = ae ? Symbol.for("react.provider") : 60109, hi = ae ? Symbol.for("react.context") : 60110, ls = ae ? Symbol.for("react.async_mode") : 60111, yi = ae ? Symbol.for("react.concurrent_mode") : 60111, gi = ae ? Symbol.for("react.forward_ref") : 60112, vi = ae ? Symbol.for("react.suspense") : 60113, Wh = ae ? Symbol.for("react.suspense_list") : 60120, wi = ae ? Symbol.for("react.memo") : 60115, Si = ae ? Symbol.for("react.lazy") : 60116, Hh = ae ? Symbol.for("react.block") : 60121, Vh = ae ? Symbol.for("react.fundamental") : 60117, Kh = ae ? Symbol.for("react.responder") : 60118, Qh = ae ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ns:
        switch (e = e.type, e) {
          case ls:
          case yi:
          case fi:
          case pi:
          case di:
          case vi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case hi:
              case gi:
              case Si:
              case wi:
              case mi:
                return e;
              default:
                return t;
            }
        }
      case rs:
        return t;
    }
  }
}
function vd(e) {
  return je(e) === yi;
}
U.AsyncMode = ls;
U.ConcurrentMode = yi;
U.ContextConsumer = hi;
U.ContextProvider = mi;
U.Element = ns;
U.ForwardRef = gi;
U.Fragment = fi;
U.Lazy = Si;
U.Memo = wi;
U.Portal = rs;
U.Profiler = pi;
U.StrictMode = di;
U.Suspense = vi;
U.isAsyncMode = function(e) {
  return vd(e) || je(e) === ls;
};
U.isConcurrentMode = vd;
U.isContextConsumer = function(e) {
  return je(e) === hi;
};
U.isContextProvider = function(e) {
  return je(e) === mi;
};
U.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ns;
};
U.isForwardRef = function(e) {
  return je(e) === gi;
};
U.isFragment = function(e) {
  return je(e) === fi;
};
U.isLazy = function(e) {
  return je(e) === Si;
};
U.isMemo = function(e) {
  return je(e) === wi;
};
U.isPortal = function(e) {
  return je(e) === rs;
};
U.isProfiler = function(e) {
  return je(e) === pi;
};
U.isStrictMode = function(e) {
  return je(e) === di;
};
U.isSuspense = function(e) {
  return je(e) === vi;
};
U.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === fi || e === yi || e === pi || e === di || e === vi || e === Wh || typeof e == "object" && e !== null && (e.$$typeof === Si || e.$$typeof === wi || e.$$typeof === mi || e.$$typeof === hi || e.$$typeof === gi || e.$$typeof === Vh || e.$$typeof === Kh || e.$$typeof === Qh || e.$$typeof === Hh);
};
U.typeOf = je;
gd.exports = U;
var Gh = gd.exports, wd = Gh, Yh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Xh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Sd = {};
Sd[wd.ForwardRef] = Yh;
Sd[wd.Memo] = Xh;
var Zh = !0;
function kd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var is = function(t, n, r) {
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
  Zh === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, os = function(t, n, r) {
  is(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + l : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Jh(e) {
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
var qh = {
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
}, bh = !1, ey = /[A-Z]|^ms/g, ty = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xd = function(t) {
  return t.charCodeAt(1) === 45;
}, La = function(t) {
  return t != null && typeof t != "boolean";
}, ro = /* @__PURE__ */ hd(function(e) {
  return xd(e) ? e : e.replace(ey, "-$&").toLowerCase();
}), Ra = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ty, function(r, l, i) {
          return lt = {
            name: l,
            styles: i,
            next: lt
          }, l;
        });
  }
  return qh[t] !== 1 && !xd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ny = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var l = n;
      if (l.anim === 1)
        return lt = {
          name: l.name,
          styles: l.styles,
          next: lt
        }, l.name;
      var i = n;
      if (i.styles !== void 0) {
        var o = i.next;
        if (o !== void 0)
          for (; o !== void 0; )
            lt = {
              name: o.name,
              styles: o.styles,
              next: lt
            }, o = o.next;
        var u = i.styles + ";";
        return u;
      }
      return ry(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = lt, a = n(e);
        return lt = s, Tr(e, t, a);
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
function ry(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += Tr(e, t, n[l]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object") {
        var u = o;
        t != null && t[u] !== void 0 ? r += i + "{" + t[u] + "}" : La(u) && (r += ro(i) + ":" + Ra(i, u) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && bh)
          throw new Error(ny);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var s = 0; s < o.length; s++)
            La(o[s]) && (r += ro(i) + ":" + Ra(i, o[s]) + ";");
        else {
          var a = Tr(e, t, o);
          switch (i) {
            case "animation":
            case "animationName": {
              r += ro(i) + ":" + a + ";";
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
var Na = /label:\s*([^\s;{]+)\s*(;|$)/g, lt;
function ki(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  lt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, l += Tr(n, t, i);
  else {
    var o = i;
    l += o[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += Tr(n, t, e[u]), r) {
      var s = i;
      l += s[u];
    }
  Na.lastIndex = 0;
  for (var a = "", h; (h = Na.exec(l)) !== null; )
    a += "-" + h[1];
  var m = Jh(l) + a;
  return {
    name: m,
    styles: l,
    next: lt
  };
}
var ly = function(t) {
  return t();
}, Cd = uo["useInsertionEffect"] ? uo["useInsertionEffect"] : !1, Ed = Cd || ly, Oa = Cd || O.useLayoutEffect, iy = !1, _d = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Uh({
    key: "css"
  }) : null
);
_d.Provider;
var us = function(t) {
  return /* @__PURE__ */ O.forwardRef(function(n, r) {
    var l = O.useContext(_d);
    return t(n, l, r);
  });
}, Ir = /* @__PURE__ */ O.createContext({}), ss = {}.hasOwnProperty, ru = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", oy = function(t, n) {
  var r = {};
  for (var l in n)
    ss.call(n, l) && (r[l] = n[l]);
  return r[ru] = t, r;
}, uy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Ed(function() {
    return os(n, r, l);
  }), null;
}, sy = /* @__PURE__ */ us(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[ru], i = [r], o = "";
  typeof e.className == "string" ? o = kd(t.registered, i, e.className) : e.className != null && (o = e.className + " ");
  var u = ki(i, void 0, O.useContext(Ir));
  o += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ss.call(e, a) && a !== "css" && a !== ru && !iy && (s[a] = e[a]);
  return s.className = o, n && (s.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(uy, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ O.createElement(l, s));
}), ay = sy, lo = { exports: {} }, $a;
function cy() {
  return $a || ($a = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var l = arguments[r];
          for (var i in l)
            ({}).hasOwnProperty.call(l, i) && (n[i] = l[i]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(lo)), lo.exports;
}
cy();
var Ia = function(t, n) {
  var r = arguments;
  if (n == null || !ss.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var l = r.length, i = new Array(l);
  i[0] = ay, i[1] = oy(t, n);
  for (var o = 2; o < l; o++)
    i[o] = r[o];
  return O.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ia || (Ia = {}));
var fy = /* @__PURE__ */ us(function(e, t) {
  var n = e.styles, r = ki([n], void 0, O.useContext(Ir)), l = O.useRef();
  return Oa(function() {
    var i = t.key + "-global", o = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (o.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", i), o.hydrate([s])), l.current = [o, u], function() {
      o.flush();
    };
  }, [t]), Oa(function() {
    var i = l.current, o = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && os(t, r.next, !0), o.tags.length) {
      var s = o.tags[o.tags.length - 1].nextElementSibling;
      o.before = s, o.flush();
    }
    t.insert("", r, o, !1);
  }, [t, r.name]), null;
}), dy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, py = /* @__PURE__ */ hd(
  function(e) {
    return dy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), my = !1, hy = py, yy = function(t) {
  return t !== "theme";
}, Ma = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? hy : yy;
}, Aa = function(t, n, r) {
  var l;
  if (n) {
    var i = n.shouldForwardProp;
    l = t.__emotion_forwardProp && i ? function(o) {
      return t.__emotion_forwardProp(o) && i(o);
    } : i;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, gy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Ed(function() {
    return os(n, r, l);
  }), null;
}, vy = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, i, o;
  n !== void 0 && (i = n.label, o = n.target);
  var u = Aa(t, n, r), s = u || Ma(l), a = !s("as");
  return function() {
    var h = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var p = h[0];
      m.push(p[0]);
      for (var g = h.length, v = 1; v < g; v++)
        m.push(h[v], p[v]);
    }
    var y = us(function(L, f, c) {
      var d = a && L.as || l, w = "", E = [], _ = L;
      if (L.theme == null) {
        _ = {};
        for (var x in L)
          _[x] = L[x];
        _.theme = O.useContext(Ir);
      }
      typeof L.className == "string" ? w = kd(f.registered, E, L.className) : L.className != null && (w = L.className + " ");
      var N = ki(m.concat(E), f.registered, _);
      w += f.key + "-" + N.name, o !== void 0 && (w += " " + o);
      var Q = a && u === void 0 ? Ma(d) : s, I = {};
      for (var he in L)
        a && he === "as" || Q(he) && (I[he] = L[he]);
      return I.className = w, c && (I.ref = c), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(gy, {
        cache: f,
        serialized: N,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ O.createElement(d, I));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = l, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return o === void 0 && my ? "NO_COMPONENT_SELECTOR" : "." + o;
      }
    }), y.withComponent = function(L, f) {
      var c = e(L, pe({}, n, f, {
        shouldForwardProp: Aa(y, f, !0)
      }));
      return c.apply(void 0, m);
    }, y;
  };
}, wy = [
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
], Fa = vy.bind(null);
wy.forEach(function(e) {
  Fa[e] = Fa(e);
});
function Sy(e) {
  return e == null || Object.keys(e).length === 0;
}
function ky(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ S(fy, {
    styles: typeof t == "function" ? (l) => t(Sy(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Da = [];
function xy(e) {
  return Da[0] = e, ki(Da);
}
function rn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pd(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !rn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pd(e[n]);
  }), t;
}
function Hl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? pe({}, e) : e;
  return rn(e) && rn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ O.isValidElement(t[l]) ? r[l] = t[l] : rn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && rn(e[l]) ? r[l] = Hl(e[l], t[l], n) : n.clone ? r[l] = rn(t[l]) ? Pd(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const Cy = ["values", "unit", "step"], Ey = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => pe({}, n, {
    [r.key]: r.val
  }), {});
};
function _y(e) {
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
  } = e, l = ui(e, Cy), i = Ey(t), o = Object.keys(i);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function a(p, g) {
    const v = o.indexOf(g);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[o[v]] == "number" ? t[o[v]] : g) - r / 100}${n})`;
  }
  function h(p) {
    return o.indexOf(p) + 1 < o.length ? a(p, o[o.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const g = o.indexOf(p);
    return g === 0 ? u(o[1]) : g === o.length - 1 ? s(o[g]) : a(p, o[o.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return pe({
    keys: o,
    values: i,
    up: u,
    down: s,
    between: a,
    only: h,
    not: m,
    unit: n
  }, l);
}
const Py = {
  borderRadius: 4
}, Ty = Py;
function ur(e, t) {
  return t ? Hl(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const as = {
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
}, ja = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${as[e]}px)`
};
function vt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || ja;
    return t.reduce((o, u, s) => (o[i.up(i.keys[s])] = n(t[s]), o), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || ja;
    return Object.keys(t).reduce((o, u) => {
      if (Object.keys(i.values || as).indexOf(u) !== -1) {
        const s = i.up(u);
        o[s] = n(t[u], u);
      } else {
        const s = u;
        o[s] = t[s];
      }
      return o;
    }, {});
  }
  return n(t);
}
function zy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const i = e.up(l);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ba(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Td(e) {
  if (typeof e != "string")
    throw new Error(fh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function xi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, i) => l && l[i] ? l[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function Vl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = xi(e, n) || r, t && (l = t(l, r, e)), l;
}
function te(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, i = (o) => {
    if (o[t] == null)
      return null;
    const u = o[t], s = o.theme, a = xi(s, r) || {};
    return vt(o, u, (m) => {
      let p = Vl(a, l, m);
      return m === p && typeof m == "string" && (p = Vl(a, l, `${t}${m === "default" ? "" : Td(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Ly(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ry = {
  m: "margin",
  p: "padding"
}, Ny = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ua = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Oy = Ly((e) => {
  if (e.length > 2)
    if (Ua[e])
      e = Ua[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ry[t], l = Ny[n] || "";
  return Array.isArray(l) ? l.map((i) => r + i) : [r + l];
}), cs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], fs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...cs, ...fs];
function Mr(e, t, n, r) {
  var l;
  const i = (l = xi(e, t, !1)) != null ? l : n;
  return typeof i == "number" ? (o) => typeof o == "string" ? o : i * o : Array.isArray(i) ? (o) => typeof o == "string" ? o : i[o] : typeof i == "function" ? i : () => {
  };
}
function zd(e) {
  return Mr(e, "spacing", 8);
}
function Ar(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function $y(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Ar(t, n), r), {});
}
function Iy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = Oy(n), i = $y(l, r), o = e[n];
  return vt(e, o, i);
}
function Ld(e, t) {
  const n = zd(e.theme);
  return Object.keys(e).map((r) => Iy(e, t, r, n)).reduce(ur, {});
}
function Z(e) {
  return Ld(e, cs);
}
Z.propTypes = {};
Z.filterProps = cs;
function J(e) {
  return Ld(e, fs);
}
J.propTypes = {};
J.filterProps = fs;
function My(e = 8) {
  if (e.mui)
    return e;
  const t = zd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const o = t(i);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" ");
  return n.mui = !0, n;
}
function Ci(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((i) => {
    r[i] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, i) => t[i] ? ur(l, t[i](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function We(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ge(e, t) {
  return te({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ay = Ge("border", We), Fy = Ge("borderTop", We), Dy = Ge("borderRight", We), jy = Ge("borderBottom", We), By = Ge("borderLeft", We), Uy = Ge("borderColor"), Wy = Ge("borderTopColor"), Hy = Ge("borderRightColor"), Vy = Ge("borderBottomColor"), Ky = Ge("borderLeftColor"), Qy = Ge("outline", We), Gy = Ge("outlineColor"), Ei = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ar(t, r)
    });
    return vt(e, e.borderRadius, n);
  }
  return null;
};
Ei.propTypes = {};
Ei.filterProps = ["borderRadius"];
Ci(Ay, Fy, Dy, jy, By, Uy, Wy, Hy, Vy, Ky, Ei, Qy, Gy);
const _i = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      gap: Ar(t, r)
    });
    return vt(e, e.gap, n);
  }
  return null;
};
_i.propTypes = {};
_i.filterProps = ["gap"];
const Pi = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ar(t, r)
    });
    return vt(e, e.columnGap, n);
  }
  return null;
};
Pi.propTypes = {};
Pi.filterProps = ["columnGap"];
const Ti = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ar(t, r)
    });
    return vt(e, e.rowGap, n);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["rowGap"];
const Yy = te({
  prop: "gridColumn"
}), Xy = te({
  prop: "gridRow"
}), Zy = te({
  prop: "gridAutoFlow"
}), Jy = te({
  prop: "gridAutoColumns"
}), qy = te({
  prop: "gridAutoRows"
}), by = te({
  prop: "gridTemplateColumns"
}), eg = te({
  prop: "gridTemplateRows"
}), tg = te({
  prop: "gridTemplateAreas"
}), ng = te({
  prop: "gridArea"
});
Ci(_i, Pi, Ti, Yy, Xy, Zy, Jy, qy, by, eg, tg, ng);
function En(e, t) {
  return t === "grey" ? t : e;
}
const rg = te({
  prop: "color",
  themeKey: "palette",
  transform: En
}), lg = te({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: En
}), ig = te({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: En
});
Ci(rg, lg, ig);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const og = te({
  prop: "width",
  transform: Oe
}), ds = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || as[n];
      return i ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Oe(n)
      };
    };
    return vt(e, e.maxWidth, t);
  }
  return null;
};
ds.filterProps = ["maxWidth"];
const ug = te({
  prop: "minWidth",
  transform: Oe
}), sg = te({
  prop: "height",
  transform: Oe
}), ag = te({
  prop: "maxHeight",
  transform: Oe
}), cg = te({
  prop: "minHeight",
  transform: Oe
});
te({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
te({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const fg = te({
  prop: "boxSizing"
});
Ci(og, ds, ug, sg, ag, cg, fg);
const dg = {
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
    style: Ei
  },
  // palette
  color: {
    themeKey: "palette",
    transform: En
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: En
  },
  backgroundColor: {
    themeKey: "palette",
    transform: En
  },
  // spacing
  p: {
    style: J
  },
  pt: {
    style: J
  },
  pr: {
    style: J
  },
  pb: {
    style: J
  },
  pl: {
    style: J
  },
  px: {
    style: J
  },
  py: {
    style: J
  },
  padding: {
    style: J
  },
  paddingTop: {
    style: J
  },
  paddingRight: {
    style: J
  },
  paddingBottom: {
    style: J
  },
  paddingLeft: {
    style: J
  },
  paddingX: {
    style: J
  },
  paddingY: {
    style: J
  },
  paddingInline: {
    style: J
  },
  paddingInlineStart: {
    style: J
  },
  paddingInlineEnd: {
    style: J
  },
  paddingBlock: {
    style: J
  },
  paddingBlockStart: {
    style: J
  },
  paddingBlockEnd: {
    style: J
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
    style: _i
  },
  rowGap: {
    style: Ti
  },
  columnGap: {
    style: Pi
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
    style: ds
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
}, Rd = dg;
function pg(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function mg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hg() {
  function e(n, r, l, i) {
    const o = {
      [n]: r,
      theme: l
    }, u = i[n];
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
    const p = xi(l, a) || {};
    return m ? m(o) : vt(o, r, (v) => {
      let y = Vl(p, h, v);
      return v === y && typeof v == "string" && (y = Vl(p, h, `${n}${v === "default" ? "" : Td(v)}`, v)), s === !1 ? y : {
        [s]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: l,
      theme: i = {},
      nested: o
    } = n || {};
    if (!l)
      return null;
    const u = (r = i.unstable_sxConfig) != null ? r : Rd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(i);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const m = zy(i.breakpoints), p = Object.keys(m);
      let g = m;
      return Object.keys(h).forEach((v) => {
        const y = mg(h[v], i);
        if (y != null)
          if (typeof y == "object")
            if (u[v])
              g = ur(g, e(v, y, i, u));
            else {
              const L = vt({
                theme: i
              }, y, (f) => ({
                [v]: f
              }));
              pg(L, y) ? g[v] = t({
                sx: y,
                theme: i,
                nested: !0
              }) : g = ur(g, L);
            }
          else
            g = ur(g, e(v, y, i, u));
      }), !o && i.modularCssLayers ? {
        "@layer sx": Ba(p, g)
      } : Ba(p, g);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Nd = hg();
Nd.filterProps = ["sx"];
const yg = Nd;
function gg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const vg = ["breakpoints", "palette", "spacing", "shape"];
function wg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: i = {}
  } = e, o = ui(e, vg), u = _y(n), s = My(l);
  let a = Hl({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: pe({
      mode: "light"
    }, r),
    spacing: s,
    shape: pe({}, Ty, i)
  }, o);
  return a.applyStyles = gg, a = t.reduce((h, m) => Hl(h, m), a), a.unstable_sxConfig = pe({}, Rd, o == null ? void 0 : o.unstable_sxConfig), a.unstable_sx = function(m) {
    return yg({
      sx: m,
      theme: this
    });
  }, a;
}
function Sg(e) {
  return Object.keys(e).length === 0;
}
function ps(e = null) {
  const t = O.useContext(Ir);
  return !t || Sg(t) ? e : t;
}
const kg = wg();
function xg(e = kg) {
  return ps(e);
}
function io(e) {
  const t = xy(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Cg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = xg(n), l = t && r[t] || r;
  let i = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(i) ? i = i.map((o) => io(typeof o == "function" ? o(l) : o)) : i = io(i)), /* @__PURE__ */ S(ky, {
    styles: i
  });
}
const Eg = typeof window < "u" ? O.useLayoutEffect : O.useEffect, _g = Eg;
let Wa = 0;
function Pg(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Wa += 1, n(`mui-${Wa}`));
  }, [t]), r;
}
const Ha = uo["useId".toString()];
function Tg(e) {
  if (Ha !== void 0) {
    const t = Ha();
    return e ?? t;
  }
  return Pg(e);
}
const zg = /* @__PURE__ */ O.createContext(null), Od = zg;
function $d() {
  return O.useContext(Od);
}
const Lg = typeof Symbol == "function" && Symbol.for, Rg = Lg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ng(e, t) {
  return typeof t == "function" ? t(e) : pe({}, e, t);
}
function Og(e) {
  const {
    children: t,
    theme: n
  } = e, r = $d(), l = O.useMemo(() => {
    const i = r === null ? n : Ng(r, n);
    return i != null && (i[Rg] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ S(Od.Provider, {
    value: l,
    children: t
  });
}
const $g = ["value"], Ig = /* @__PURE__ */ O.createContext();
function Mg(e) {
  let {
    value: t
  } = e, n = ui(e, $g);
  return /* @__PURE__ */ S(Ig.Provider, pe({
    value: t ?? !0
  }, n));
}
const Ag = /* @__PURE__ */ O.createContext(void 0);
function Fg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ S(Ag.Provider, {
    value: e,
    children: t
  });
}
function Dg(e) {
  const t = ps(), n = Tg() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, _g(() => {
    const i = document.querySelector("head");
    if (!i)
      return;
    const o = i.firstChild;
    if (l) {
      var u;
      if (o && (u = o.hasAttribute) != null && u.call(o, "data-mui-layer-order") && o.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = l, i.prepend(a);
    } else {
      var s;
      (s = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [l, n]), l ? /* @__PURE__ */ S(Cg, {
    styles: l
  }) : null;
}
const Va = {};
function Ka(e, t, n, r = !1) {
  return O.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(l), o = e ? pe({}, t, {
        [e]: i
      }) : i;
      return r ? () => o : o;
    }
    return e ? pe({}, t, {
      [e]: n
    }) : pe({}, t, n);
  }, [e, t, n, r]);
}
function jg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = ps(Va), i = $d() || Va, o = Ka(r, l, n), u = Ka(r, i, n, !0), s = o.direction === "rtl", a = Dg(o);
  return /* @__PURE__ */ S(Og, {
    theme: u,
    children: /* @__PURE__ */ S(Ir.Provider, {
      value: o,
      children: /* @__PURE__ */ S(Mg, {
        value: s,
        children: /* @__PURE__ */ z(Fg, {
          value: o == null ? void 0 : o.components,
          children: [a, t]
        })
      })
    })
  });
}
const Bg = ["theme"];
function Ug(e) {
  let {
    theme: t
  } = e, n = ui(e, Bg);
  const r = t[_a];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = pe({}, r, {
    vars: null
  }) : t && !t.vars && (l = pe({}, t, {
    vars: null
  }))), /* @__PURE__ */ S(jg, pe({}, n, {
    themeId: r ? _a : void 0,
    theme: l
  }));
}
const Qa = {
  VERCEL_BASE_URL: "https://your-project.vercel.app"
};
function oo(e) {
  return e ? new Date(parseInt(e, 10) * 1e3).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }) : "—";
}
function Ga(e) {
  return e ? new Date(e).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—";
}
function Wg(e = "") {
  return e.split(" ").slice(0, 2).map((t) => t[0]).join("").toUpperCase();
}
const Hg = {
  Excellent: { color: "#1a7f4b", bg: "#e6f4ed", dot: "#1a7f4b" },
  Good: { color: "#0f6bb5", bg: "#e3f0fb", dot: "#0f6bb5" },
  Fair: { color: "#b45309", bg: "#fef3e2", dot: "#b45309" },
  Poor: { color: "#c0392b", bg: "#fdecea", dot: "#c0392b" },
  Critical: { color: "#7b1fa2", bg: "#f3e5f5", dot: "#7b1fa2" }
};
function Ya(e) {
  return Hg[e] || { color: "#555", bg: "#f0f0f0", dot: "#999" };
}
const R = {
  navy: "#1a2744",
  navyLight: "#2a3a5c",
  accent: "#3d7fd4",
  accentHov: "#2c6bb8",
  border: "#e2e5ec",
  borderMed: "#c8cdd8",
  surface: "#ffffff",
  surfaceAlt: "#f7f8fc",
  textPri: "#1a2744",
  textSec: "#5a6478",
  textHint: "#8a93a6",
  red: "#c0392b"
}, C = {
  wrap: {
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: 13,
    color: R.textPri,
    background: R.surfaceAlt,
    minHeight: 600,
    position: "relative"
  },
  // Header bar
  header: {
    background: R.navy,
    padding: "0 20px",
    height: 52,
    display: "flex",
    alignItems: "center",
    gap: 12,
    justifyContent: "space-between"
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 10 },
  headerTitle: { color: "white", fontSize: 14, fontWeight: 600, letterSpacing: 0.3 },
  headerBadge: {
    background: R.accent,
    color: "white",
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: 10,
    letterSpacing: 0.5,
    textTransform: "uppercase"
  },
  headerUser: { color: "rgba(255,255,255,0.7)", fontSize: 12, display: "flex", alignItems: "center", gap: 6 },
  // Artifact summary bar
  summaryBar: {
    background: R.surface,
    borderBottom: `1px solid ${R.border}`,
    padding: "14px 20px",
    display: "flex",
    alignItems: "flex-start",
    gap: 16
  },
  summaryThumb: {
    width: 48,
    height: 48,
    borderRadius: 6,
    background: "#e8eaf0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: 20,
    color: R.textHint
  },
  summaryMeta: { flex: 1 },
  summaryTitle: { fontSize: 16, fontWeight: 700, color: R.textPri, marginBottom: 3 },
  summaryRow: { display: "flex", gap: 16, flexWrap: "wrap" },
  summaryField: { fontSize: 12, color: R.textSec },
  summaryFieldLabel: { color: R.textHint, marginRight: 4 },
  artifactLink: {
    fontSize: 12,
    color: R.accent,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginTop: 6,
    cursor: "pointer"
  },
  // Body layout
  body: { padding: 20, display: "flex", flexDirection: "column", gap: 16 },
  // Section heading
  sectionHead: {
    fontSize: 11,
    fontWeight: 700,
    color: R.textHint,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 8
  },
  // Report card
  reportCard: {
    background: R.surface,
    border: `1px solid ${R.border}`,
    borderRadius: 8,
    overflow: "hidden"
  },
  reportCardHeader: {
    padding: "12px 16px",
    borderBottom: `1px solid ${R.border}`,
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    userSelect: "none"
  },
  reportCardBody: { padding: "16px" },
  // Condition badge
  condBadge: (e) => {
    const t = Ya(e);
    return {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: t.bg,
      color: t.color,
      fontSize: 12,
      fontWeight: 600,
      padding: "3px 10px",
      borderRadius: 20
    };
  },
  condDot: (e) => ({
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: Ya(e).dot,
    flexShrink: 0
  }),
  // Two-col grid for report details
  detailGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px 24px",
    marginBottom: 14
  },
  detailItem: {},
  detailLabel: { fontSize: 11, color: R.textHint, marginBottom: 2, textTransform: "uppercase", letterSpacing: 0.5 },
  detailValue: { fontSize: 13, color: R.textPri },
  // Notes block
  notesBlock: {
    background: R.surfaceAlt,
    border: `1px solid ${R.border}`,
    borderRadius: 6,
    padding: "10px 14px",
    fontSize: 13,
    color: R.textPri,
    lineHeight: 1.6,
    marginBottom: 14
  },
  // Image strip
  imageStrip: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 14
  },
  imageThumb: {
    width: 120,
    height: 80,
    borderRadius: 6,
    border: `1px solid ${R.border}`,
    objectFit: "cover",
    cursor: "pointer",
    background: "#e8eaf0"
  },
  imageLabel: { fontSize: 11, color: R.textSec, marginTop: 3, textAlign: "center", width: 120 },
  // PDF buttons
  pdfRow: { display: "flex", gap: 8, marginTop: 4 },
  pdfBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: R.navy,
    color: "white",
    border: "none",
    borderRadius: 5,
    padding: "7px 13px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none"
  },
  pdfBtnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: "white",
    color: R.navy,
    border: `1px solid ${R.borderMed}`,
    borderRadius: 5,
    padding: "7px 13px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none"
  },
  // Groups / history
  groupList: { display: "flex", flexDirection: "column", gap: 8 },
  groupCard: {
    background: R.surface,
    border: `1px solid ${R.border}`,
    borderRadius: 8,
    padding: "12px 14px",
    display: "flex",
    gap: 12,
    alignItems: "flex-start"
  },
  groupDot: (e) => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: e === "exhibition" ? R.accent : R.textHint,
    marginTop: 5,
    flexShrink: 0
  }),
  groupName: { fontSize: 13, fontWeight: 600, color: R.textPri, marginBottom: 2 },
  groupMeta: { fontSize: 12, color: R.textSec },
  groupType: (e) => ({
    display: "inline-block",
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    padding: "2px 7px",
    borderRadius: 10,
    background: e === "exhibition" ? "#e3f0fb" : "#f0f0f4",
    color: e === "exhibition" ? R.accent : R.textSec,
    marginBottom: 4
  }),
  // Examiner avatar
  avatar: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#e3f0fb",
    color: R.accent,
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  // Login overlay
  loginOverlay: {
    position: "absolute",
    inset: 0,
    background: R.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 560
  },
  loginBox: {
    background: "white",
    borderRadius: 10,
    padding: "32px 28px",
    width: 340
  },
  loginLogoWrap: { textAlign: "center", marginBottom: 20 },
  loginTitle: { fontSize: 17, fontWeight: 700, color: R.textPri, textAlign: "center", marginBottom: 4 },
  loginSub: { fontSize: 12, color: R.textSec, textAlign: "center", marginBottom: 22 },
  inputWrap: { marginBottom: 12 },
  inputLabel: { fontSize: 11, color: R.textSec, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, display: "block", marginBottom: 4 },
  input: {
    width: "100%",
    border: `1px solid ${R.borderMed}`,
    borderRadius: 5,
    padding: "9px 11px",
    fontSize: 14,
    color: R.textPri,
    outline: "none",
    boxSizing: "border-box"
  },
  loginBtn: {
    width: "100%",
    background: R.accent,
    color: "white",
    border: "none",
    borderRadius: 5,
    padding: 11,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 4,
    letterSpacing: 0.2
  },
  loginFooter: { fontSize: 11, color: R.textSec, textAlign: "center", marginTop: 14 },
  loginFooterLink: { color: R.accent, cursor: "pointer" },
  // Loader overlay
  loaderOverlay: {
    position: "absolute",
    inset: 0,
    background: R.navy,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    gap: 18,
    minHeight: 560
  },
  loaderText: { color: "white", fontSize: 14, fontWeight: 600 },
  loaderSub: { color: "rgba(255,255,255,0.55)", fontSize: 12 },
  // Error
  errorBox: {
    margin: 20,
    padding: 14,
    background: "#fdecea",
    border: "1px solid #e57373",
    borderRadius: 6,
    color: R.red,
    fontSize: 13
  },
  divider: { height: 1, background: R.border, margin: "12px 0" },
  chevron: (e) => ({
    marginLeft: "auto",
    fontSize: 16,
    color: R.textHint,
    transform: e ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s",
    lineHeight: 1
  })
};
function Vg({ size: e = "md" }) {
  const t = e === "sm" ? 22 : 32;
  return /* @__PURE__ */ z("svg", { viewBox: "0 0 160 36", width: t * (160 / 36), height: t, xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ S("circle", { cx: "18", cy: "18", r: "14", fill: "#3d7fd4" }),
    /* @__PURE__ */ S("path", { d: "M11 24 L18 10 L25 24", stroke: "white", strokeWidth: "2.5", fill: "none", strokeLinejoin: "round" }),
    /* @__PURE__ */ S("path", { d: "M13.5 20 L22.5 20", stroke: "white", strokeWidth: "2" }),
    /* @__PURE__ */ S("text", { x: "38", y: "25", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "17", fontWeight: "700", fill: "#1a2744", children: "articheck" })
  ] });
}
function Id({ size: e = "md" }) {
  const t = e === "sm" ? 22 : 32;
  return /* @__PURE__ */ z("svg", { viewBox: "0 0 160 36", width: t * (160 / 36), height: t, xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ S("circle", { cx: "18", cy: "18", r: "14", fill: "white", fillOpacity: "0.9" }),
    /* @__PURE__ */ S("path", { d: "M11 24 L18 10 L25 24", stroke: "#3d7fd4", strokeWidth: "2.5", fill: "none", strokeLinejoin: "round" }),
    /* @__PURE__ */ S("path", { d: "M13.5 20 L22.5 20", stroke: "#3d7fd4", strokeWidth: "2" }),
    /* @__PURE__ */ S("text", { x: "38", y: "25", fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: "17", fontWeight: "700", fill: "white", children: "articheck" })
  ] });
}
function Kg({ color: e = "white" }) {
  return /* @__PURE__ */ S("div", { style: {
    width: 38,
    height: 38,
    border: `3px solid ${e === "white" ? "rgba(255,255,255,0.25)" : "#dde"}`,
    borderTop: `3px solid ${e === "white" ? "white" : R.accent}`,
    borderRadius: "50%",
    animation: "ac-spin 0.75s linear infinite"
  } });
}
function Qg({ onLogin: e, loading: t }) {
  const [n, r] = O.useState(""), [l, i] = O.useState(""), [o, u] = O.useState("");
  function s() {
    if (!n || !l) {
      u("Please enter your email and password.");
      return;
    }
    u(""), e({ username: n, password: l });
  }
  return /* @__PURE__ */ z("div", { style: C.loginOverlay, children: [
    /* @__PURE__ */ S("style", { children: "@keyframes ac-spin { to { transform: rotate(360deg); } }" }),
    /* @__PURE__ */ z("div", { style: C.loginBox, children: [
      /* @__PURE__ */ S("div", { style: C.loginLogoWrap, children: /* @__PURE__ */ S(Vg, { size: "md" }) }),
      /* @__PURE__ */ S("div", { style: C.loginTitle, children: "Sign in to Articheck" }),
      /* @__PURE__ */ S("div", { style: C.loginSub, children: "Condition reporting — Content Hub integration" }),
      o && /* @__PURE__ */ S("div", { style: { fontSize: 12, color: R.red, marginBottom: 10, background: "#fdecea", padding: "8px 10px", borderRadius: 4 }, children: o }),
      /* @__PURE__ */ z("div", { style: C.inputWrap, children: [
        /* @__PURE__ */ S("label", { style: C.inputLabel, children: "Email" }),
        /* @__PURE__ */ S(
          "input",
          {
            style: C.input,
            type: "email",
            placeholder: "you@organisation.com",
            value: n,
            onChange: (a) => r(a.target.value),
            onKeyDown: (a) => a.key === "Enter" && s(),
            disabled: t
          }
        )
      ] }),
      /* @__PURE__ */ z("div", { style: C.inputWrap, children: [
        /* @__PURE__ */ S("label", { style: C.inputLabel, children: "Password" }),
        /* @__PURE__ */ S(
          "input",
          {
            style: C.input,
            type: "password",
            placeholder: "••••••••",
            value: l,
            onChange: (a) => i(a.target.value),
            onKeyDown: (a) => a.key === "Enter" && s(),
            disabled: t
          }
        )
      ] }),
      /* @__PURE__ */ S("button", { style: C.loginBtn, onClick: s, disabled: t, children: t ? "Signing in..." : "Sign in" }),
      /* @__PURE__ */ z("div", { style: C.loginFooter, children: [
        /* @__PURE__ */ S("span", { style: C.loginFooterLink, children: "Forgot password?" }),
        "  ·  ",
        /* @__PURE__ */ S("span", { style: C.loginFooterLink, children: "Get a demo" })
      ] })
    ] }),
    /* @__PURE__ */ S("div", { style: { marginTop: 20, fontSize: 11, color: "rgba(255,255,255,0.4)" }, children: "© Articheck Ltd. All rights reserved." })
  ] });
}
function Gg({ artworkId: e }) {
  return /* @__PURE__ */ z("div", { style: C.loaderOverlay, children: [
    /* @__PURE__ */ S(Id, {}),
    /* @__PURE__ */ S(Kg, { color: "white" }),
    /* @__PURE__ */ S("div", { style: C.loaderText, children: "Fetching condition reports" }),
    /* @__PURE__ */ z("div", { style: C.loaderSub, children: [
      "Artwork ID: ",
      e
    ] })
  ] });
}
function Yg({ report: e, index: t }) {
  const [n, r] = O.useState(t === 0), [l, i] = O.useState(null), o = e.general_conditions_category;
  return /* @__PURE__ */ z("div", { style: C.reportCard, children: [
    /* @__PURE__ */ z("div", { style: C.reportCardHeader, onClick: () => r((u) => !u), children: [
      /* @__PURE__ */ S("div", { style: C.avatar, children: Wg(e.examined_by) }),
      /* @__PURE__ */ z("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ z("div", { style: { fontSize: 13, fontWeight: 600, color: R.textPri }, children: [
          e.examined_by,
          e.examiner_title && /* @__PURE__ */ z("span", { style: { fontWeight: 400, color: R.textSec }, children: [
            " · ",
            e.examiner_title
          ] })
        ] }),
        /* @__PURE__ */ z("div", { style: { fontSize: 11, color: R.textHint, marginTop: 1 }, children: [
          oo(e.created_at),
          " · ",
          e.examination_location
        ] })
      ] }),
      /* @__PURE__ */ z("div", { style: C.condBadge(o), children: [
        /* @__PURE__ */ S("div", { style: C.condDot(o) }),
        o || "Not set"
      ] }),
      /* @__PURE__ */ S("div", { style: C.chevron(n), children: "▾" })
    ] }),
    n && /* @__PURE__ */ z("div", { style: C.reportCardBody, children: [
      /* @__PURE__ */ z("div", { style: C.detailGrid, children: [
        /* @__PURE__ */ z("div", { style: C.detailItem, children: [
          /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Examined by" }),
          /* @__PURE__ */ z("div", { style: C.detailValue, children: [
            e.examined_by,
            e.examiner_title ? `, ${e.examiner_title}` : ""
          ] })
        ] }),
        /* @__PURE__ */ z("div", { style: C.detailItem, children: [
          /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Examination date" }),
          /* @__PURE__ */ S("div", { style: C.detailValue, children: oo(e.created_at) })
        ] }),
        /* @__PURE__ */ z("div", { style: C.detailItem, children: [
          /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Location" }),
          /* @__PURE__ */ S("div", { style: C.detailValue, children: e.examination_location || "—" })
        ] }),
        /* @__PURE__ */ z("div", { style: C.detailItem, children: [
          /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Last updated" }),
          /* @__PURE__ */ z("div", { style: C.detailValue, children: [
            oo(e.updated_at),
            " · ",
            e.updated_by
          ] })
        ] })
      ] }),
      e.general_conditions_notes && /* @__PURE__ */ z(vs, { children: [
        /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Condition notes" }),
        /* @__PURE__ */ S("div", { style: { ...C.notesBlock, marginTop: 6 }, children: e.general_conditions_notes })
      ] }),
      e.images && e.images.length > 0 && /* @__PURE__ */ z(vs, { children: [
        /* @__PURE__ */ S("div", { style: C.detailLabel, children: "Condition images" }),
        /* @__PURE__ */ S("div", { style: { ...C.imageStrip, marginTop: 6 }, children: e.images.map((u) => /* @__PURE__ */ z("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
          /* @__PURE__ */ S(
            "img",
            {
              src: u.url,
              alt: u.title,
              style: C.imageThumb,
              onClick: () => i(u)
            }
          ),
          /* @__PURE__ */ S("div", { style: C.imageLabel, children: u.title })
        ] }, u.id)) })
      ] }),
      /* @__PURE__ */ S("div", { style: C.divider }),
      /* @__PURE__ */ S("div", { style: { ...C.detailLabel, marginBottom: 8 }, children: "Downloads" }),
      /* @__PURE__ */ z("div", { style: C.pdfRow, children: [
        /* @__PURE__ */ z("a", { href: e.pdf_url, target: "_blank", rel: "noreferrer", style: C.pdfBtn, children: [
          /* @__PURE__ */ z("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
            /* @__PURE__ */ S("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
            /* @__PURE__ */ S("polyline", { points: "14,2 14,8 20,8" })
          ] }),
          "Full report PDF"
        ] }),
        /* @__PURE__ */ z("a", { href: e.summary_pdf_url, target: "_blank", rel: "noreferrer", style: C.pdfBtnSecondary, children: [
          /* @__PURE__ */ z("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
            /* @__PURE__ */ S("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
            /* @__PURE__ */ S("polyline", { points: "14,2 14,8 20,8" })
          ] }),
          "Summary PDF"
        ] })
      ] }),
      l && /* @__PURE__ */ S(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "pointer"
          },
          onClick: () => i(null),
          children: /* @__PURE__ */ z("div", { style: { textAlign: "center" }, children: [
            /* @__PURE__ */ S("img", { src: l.url, alt: l.title, style: { maxWidth: "80vw", maxHeight: "75vh", borderRadius: 6 } }),
            /* @__PURE__ */ S("div", { style: { color: "white", fontSize: 13, marginTop: 10 }, children: l.title }),
            /* @__PURE__ */ S("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 4 }, children: "Click anywhere to close" })
          ] })
        }
      )
    ] })
  ] });
}
function Xg({ groups: e }) {
  return !e || e.length === 0 ? null : /* @__PURE__ */ z("div", { children: [
    /* @__PURE__ */ S("div", { style: C.sectionHead, children: "Exhibition & loan history" }),
    /* @__PURE__ */ S("div", { style: C.groupList, children: e.map((t) => /* @__PURE__ */ z("div", { style: C.groupCard, children: [
      /* @__PURE__ */ S("div", { style: C.groupDot(t.type) }),
      /* @__PURE__ */ z("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ S("div", { style: C.groupType(t.type), children: t.type === "exhibition" ? "Exhibition" : "Loan / General" }),
        /* @__PURE__ */ S("div", { style: C.groupName, children: t.name }),
        t.venues && /* @__PURE__ */ S("div", { style: C.groupMeta, children: t.venues }),
        t.start && /* @__PURE__ */ z("div", { style: { ...C.groupMeta, marginTop: 2 }, children: [
          Ga(t.start),
          " — ",
          Ga(t.end)
        ] }),
        t.description && /* @__PURE__ */ S("div", { style: { ...C.groupMeta, marginTop: 4, fontStyle: "italic" }, children: t.description })
      ] })
    ] }, t.id)) })
  ] });
}
function Zg({ data: e, loggedInAs: t }) {
  var r, l, i, o;
  const n = (l = (r = e.reports) == null ? void 0 : r[0]) == null ? void 0 : l.general_conditions_category;
  return /* @__PURE__ */ z("div", { style: C.wrap, children: [
    /* @__PURE__ */ z("div", { style: C.header, children: [
      /* @__PURE__ */ z("div", { style: C.headerLeft, children: [
        /* @__PURE__ */ S(Id, { size: "sm" }),
        /* @__PURE__ */ S("div", { style: C.headerBadge, children: "Condition Reports" })
      ] }),
      /* @__PURE__ */ z("div", { style: C.headerUser, children: [
        /* @__PURE__ */ z("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "white", children: [
          /* @__PURE__ */ S("circle", { cx: "12", cy: "8", r: "4" }),
          /* @__PURE__ */ S("path", { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7" })
        ] }),
        t
      ] })
    ] }),
    /* @__PURE__ */ z("div", { style: C.summaryBar, children: [
      /* @__PURE__ */ S("div", { style: C.summaryThumb, children: /* @__PURE__ */ z("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: R.textHint, strokeWidth: "1.5", children: [
        /* @__PURE__ */ S("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        /* @__PURE__ */ S("path", { d: "M3 15l5-5 4 4 3-3 6 6" }),
        /* @__PURE__ */ S("circle", { cx: "8.5", cy: "8.5", r: "1.5", fill: R.textHint })
      ] }) }),
      /* @__PURE__ */ z("div", { style: C.summaryMeta, children: [
        /* @__PURE__ */ S("div", { style: C.summaryTitle, children: e.title }),
        /* @__PURE__ */ z("div", { style: C.summaryRow, children: [
          e.artist && /* @__PURE__ */ z("span", { style: C.summaryField, children: [
            /* @__PURE__ */ S("span", { style: C.summaryFieldLabel, children: "Artist" }),
            e.artist
          ] }),
          e.date_of_creation && /* @__PURE__ */ z("span", { style: C.summaryField, children: [
            /* @__PURE__ */ S("span", { style: C.summaryFieldLabel, children: "Year" }),
            e.date_of_creation
          ] }),
          e.media_template && /* @__PURE__ */ z("span", { style: C.summaryField, children: [
            /* @__PURE__ */ S("span", { style: C.summaryFieldLabel, children: "Type" }),
            e.media_template
          ] }),
          e.dimensions && /* @__PURE__ */ z("span", { style: C.summaryField, children: [
            /* @__PURE__ */ S("span", { style: C.summaryFieldLabel, children: "Dimensions" }),
            e.dimensions,
            " cm"
          ] }),
          e.lender && /* @__PURE__ */ z("span", { style: C.summaryField, children: [
            /* @__PURE__ */ S("span", { style: C.summaryFieldLabel, children: "Lender" }),
            e.lender
          ] })
        ] }),
        n && /* @__PURE__ */ z("div", { style: { marginTop: 6, display: "flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ S("span", { style: { fontSize: 11, color: R.textHint }, children: "Current condition" }),
          /* @__PURE__ */ z("span", { style: C.condBadge(n), children: [
            /* @__PURE__ */ S("div", { style: C.condDot(n) }),
            n
          ] })
        ] }),
        /* @__PURE__ */ z("a", { href: e.artifact_url, target: "_blank", rel: "noreferrer", style: C.artifactLink, children: [
          /* @__PURE__ */ z("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: [
            /* @__PURE__ */ S("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
            /* @__PURE__ */ S("polyline", { points: "15 3 21 3 21 9" }),
            /* @__PURE__ */ S("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
          ] }),
          "View in Articheck"
        ] })
      ] }),
      /* @__PURE__ */ z("div", { style: { textAlign: "right", flexShrink: 0 }, children: [
        /* @__PURE__ */ S("div", { style: { fontSize: 11, color: R.textHint, marginBottom: 2 }, children: "Reports" }),
        /* @__PURE__ */ S("div", { style: { fontSize: 22, fontWeight: 700, color: R.textPri }, children: ((i = e.reports) == null ? void 0 : i.length) || 0 })
      ] })
    ] }),
    /* @__PURE__ */ z("div", { style: C.body, children: [
      /* @__PURE__ */ z("div", { children: [
        /* @__PURE__ */ S("div", { style: C.sectionHead, children: "Condition reports — most recent first" }),
        /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: (o = e.reports) == null ? void 0 : o.map((u, s) => /* @__PURE__ */ S(Yg, { report: u, index: s }, u.report_id)) })
      ] }),
      /* @__PURE__ */ S(Xg, { groups: e.groups })
    ] })
  ] });
}
function Jg({ options: e = {} }) {
  const t = e.artworkId || "ART-00123", [n, r] = O.useState("login"), [l, i] = O.useState(null), [o, u] = O.useState(null), [s, a] = O.useState(""), h = O.useCallback(async ({ username: m, password: p }) => {
    r("loading");
    try {
      const g = await fetch(`${Qa.VERCEL_BASE_URL}/api/articheck/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: m, password: p })
      });
      if (!g.ok)
        throw new Error("Authentication failed. Check your credentials.");
      const { token: v } = await g.json(), y = await fetch(
        `${Qa.VERCEL_BASE_URL}/api/articheck/reports?artworkId=${encodeURIComponent(t)}`,
        { headers: { Authorization: `Bearer ${v}` } }
      );
      if (!y.ok)
        throw new Error("Failed to fetch condition reports.");
      const L = await y.json();
      a(m), i(L), r("record");
    } catch (g) {
      u(g.message), r("error");
    }
  }, [t]);
  return /* @__PURE__ */ z("div", { style: { position: "relative", minHeight: 600 }, children: [
    /* @__PURE__ */ S("style", { children: "@keyframes ac-spin { to { transform: rotate(360deg); } }" }),
    n === "login" && /* @__PURE__ */ S(Qg, { onLogin: h, loading: !1 }),
    n === "loading" && /* @__PURE__ */ S(Gg, { artworkId: t }),
    n === "record" && l && /* @__PURE__ */ S(Zg, { data: l, loggedInAs: s }),
    n === "error" && /* @__PURE__ */ z("div", { style: C.errorBox, children: [
      /* @__PURE__ */ S("strong", { children: "Error:" }),
      " ",
      o,
      /* @__PURE__ */ S("br", {}),
      /* @__PURE__ */ S("button", { style: { marginTop: 8, cursor: "pointer", fontSize: 12 }, onClick: () => {
        u(null), r("login");
      }, children: "Try again" })
    ] })
  ] });
}
function qg(e) {
  const t = sd(e);
  return console.log("%c[ArticheckPanel] Starting up...", "color: #1D9E75; font-weight: bold"), {
    render(n) {
      console.log("%c[ArticheckPanel] Context:", "color: #1D9E75; font-weight: bold", n), t.render(
        /* @__PURE__ */ S(Ug, { theme: n.theme, children: /* @__PURE__ */ S(
          Jg,
          {
            client: n.client,
            entity: n.entity,
            options: n.options
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
  qg as default
};
