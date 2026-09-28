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
function Bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ec = { exports: {} }, el = {}, tc = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr = Symbol.for("react.element"), Hd = Symbol.for("react.portal"), Wd = Symbol.for("react.fragment"), Vd = Symbol.for("react.strict_mode"), Kd = Symbol.for("react.profiler"), Qd = Symbol.for("react.provider"), Yd = Symbol.for("react.context"), Gd = Symbol.for("react.forward_ref"), Xd = Symbol.for("react.suspense"), Zd = Symbol.for("react.memo"), Jd = Symbol.for("react.lazy"), ks = Symbol.iterator;
function qd(e) {
  return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var nc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, rc = Object.assign, oc = {};
function Dn(e, t, n) {
  this.props = e, this.context = t, this.refs = oc, this.updater = n || nc;
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lc() {
}
lc.prototype = Dn.prototype;
function fu(e, t, n) {
  this.props = e, this.context = t, this.refs = oc, this.updater = n || nc;
}
var du = fu.prototype = new lc();
du.constructor = fu;
rc(du, Dn.prototype);
du.isPureReactComponent = !0;
var xs = Array.isArray, ic = Object.prototype.hasOwnProperty, pu = { current: null }, uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function sc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      ic.call(t, r) && !uc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Mr, type: e, key: l, ref: i, props: o, _owner: pu.current };
}
function bd(e, t) {
  return { $$typeof: Mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mr;
}
function ep(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Cs = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ep("" + e.key) : t.toString(36);
}
function co(e, t, n, r, o) {
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
          case Mr:
          case Hd:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + Dl(i, 0) : r, xs(o) ? (n = "", e != null && (n = e.replace(Cs, "$&/") + "/"), co(o, t, n, "", function(a) {
      return a;
    })) : o != null && (mu(o) && (o = bd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Cs, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", xs(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + Dl(l, u);
      i += co(l, t, n, s, o);
    }
  else if (s = qd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, s = r + Dl(l, u++), i += co(l, t, n, s, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Qr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return co(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function tp(e) {
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
var Ce = { current: null }, fo = { transition: null }, np = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: fo, ReactCurrentOwner: pu };
function ac() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Qr, forEach: function(e, t, n) {
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
  if (!mu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = Dn;
$.Fragment = Wd;
$.Profiler = Kd;
$.PureComponent = fu;
$.StrictMode = Vd;
$.Suspense = Xd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
$.act = ac;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = rc({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = pu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      ic.call(t, s) && !uc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Mr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
$.createContext = function(e) {
  return e = { $$typeof: Yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Qd, _context: e }, e.Consumer = e;
};
$.createElement = sc;
$.createFactory = function(e) {
  var t = sc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Gd, render: e };
};
$.isValidElement = mu;
$.lazy = function(e) {
  return { $$typeof: Jd, _payload: { _status: -1, _result: e }, _init: tp };
};
$.memo = function(e, t) {
  return { $$typeof: Zd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = fo.transition;
  fo.transition = {};
  try {
    e();
  } finally {
    fo.transition = t;
  }
};
$.unstable_act = ac;
$.useCallback = function(e, t) {
  return Ce.current.useCallback(e, t);
};
$.useContext = function(e) {
  return Ce.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return Ce.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return Ce.current.useEffect(e, t);
};
$.useId = function() {
  return Ce.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return Ce.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return Ce.current.useRef(e);
};
$.useState = function(e) {
  return Ce.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return Ce.current.useTransition();
};
$.version = "18.3.1";
tc.exports = $;
var O = tc.exports;
const rp = /* @__PURE__ */ Bd(O), mi = /* @__PURE__ */ Ud({
  __proto__: null,
  default: rp
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
var op = O, lp = Symbol.for("react.element"), ip = Symbol.for("react.fragment"), up = Object.prototype.hasOwnProperty, sp = op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    up.call(t, r) && !ap.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: lp, type: e, key: l, ref: i, props: o, _owner: sp.current };
}
el.Fragment = ip;
el.jsx = cc;
el.jsxs = cc;
ec.exports = el;
var fc = ec.exports;
const A = fc.jsx, We = fc.jsxs;
var dc = { exports: {} }, Ue = {}, pc = { exports: {} }, mc = {};
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
        var Q = L - 1 >>> 1, N = E[Q];
        if (0 < o(N, z))
          E[Q] = z, E[L] = N, L = Q;
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
        for (var Q = 0, N = E.length, M = N >>> 1; Q < M; ) {
          var W = 2 * (Q + 1) - 1, $e = E[W], ue = W + 1, Pe = E[ue];
          if (0 > o($e, L))
            ue < N && 0 > o(Pe, $e) ? (E[Q] = Pe, E[ue] = L, Q = ue) : (E[Q] = $e, E[W] = L, Q = W);
          else if (ue < N && 0 > o(Pe, L))
            E[Q] = Pe, E[ue] = L, Q = ue;
          else
            break e;
        }
    }
    return z;
  }
  function o(E, z) {
    var L = E.sortIndex - z.sortIndex;
    return L !== 0 ? L : E.id - z.id;
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
  function d(E) {
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
    if (y = !1, d(E), !g)
      if (n(s) !== null)
        g = !0, Wn(x);
      else {
        var z = n(a);
        z !== null && Vn(w, z.startTime - E);
      }
  }
  function x(E, z) {
    g = !1, y && (y = !1, f(T), T = -1), v = !0;
    var L = p;
    try {
      for (d(z), m = n(s); m !== null && (!(m.expirationTime > z) || E && !G()); ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          m.callback = null, p = m.priorityLevel;
          var N = Q(m.expirationTime <= z);
          z = e.unstable_now(), typeof N == "function" ? m.callback = N : m === n(s) && r(s), d(z);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var M = !0;
      else {
        var W = n(a);
        W !== null && Vn(w, W.startTime - z), M = !1;
      }
      return M;
    } finally {
      m = null, p = L, v = !1;
    }
  }
  var C = !1, k = null, T = -1, B = 5, R = -1;
  function G() {
    return !(e.unstable_now() - R < B);
  }
  function _e() {
    if (k !== null) {
      var E = e.unstable_now();
      R = E;
      var z = !0;
      try {
        z = k(!0, E);
      } finally {
        z ? Kt() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var Kt;
  if (typeof c == "function")
    Kt = function() {
      c(_e);
    };
  else if (typeof MessageChannel < "u") {
    var Kr = new MessageChannel(), jl = Kr.port2;
    Kr.port1.onmessage = _e, Kt = function() {
      jl.postMessage(null);
    };
  } else
    Kt = function() {
      P(_e, 0);
    };
  function Wn(E) {
    k = E, C || (C = !0, Kt());
  }
  function Vn(E, z) {
    T = P(function() {
      E(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Wn(x));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
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
    var Q = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Q + L : Q) : L = Q, E) {
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
    return N = L + N, E = { id: h++, callback: z, priorityLevel: E, startTime: L, expirationTime: N, sortIndex: -1 }, L > Q ? (E.sortIndex = L, t(a, E), n(s) === null && E === n(a) && (y ? (f(T), T = -1) : y = !0, Vn(w, L - Q))) : (E.sortIndex = N, t(s, E), g || v || (g = !0, Wn(x))), E;
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(E) {
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
})(mc);
pc.exports = mc;
var cp = pc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = O, De = cp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hc = /* @__PURE__ */ new Set(), yr = {};
function on(e, t) {
  zn(e, t), zn(e + "Capture", t);
}
function zn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++)
    hc.add(t[e]);
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hi = Object.prototype.hasOwnProperty, dp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Es = {}, _s = {};
function pp(e) {
  return hi.call(_s, e) ? !0 : hi.call(Es, e) ? !1 : dp.test(e) ? _s[e] = !0 : (Es[e] = !0, !1);
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
function Ee(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hu,
    yu
  );
  he[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hu, yu);
  he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hu, yu);
  he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gu(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hp(t, n, o, r) && (n = null), r || o === null ? pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ct = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Yr = Symbol.for("react.element"), fn = Symbol.for("react.portal"), dn = Symbol.for("react.fragment"), vu = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), yc = Symbol.for("react.provider"), gc = Symbol.for("react.context"), wu = Symbol.for("react.forward_ref"), gi = Symbol.for("react.suspense"), vi = Symbol.for("react.suspense_list"), Su = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), vc = Symbol.for("react.offscreen"), Ps = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object" ? null : (e = Ps && e[Ps] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, Ul;
function nr(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = t && t[1] || "";
    }
  return `
` + Ul + e;
}
var Bl = !1;
function Hl(e, t) {
  if (!e || Bl)
    return "";
  Bl = !0;
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
    Bl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? nr(e) : "";
}
function yp(e) {
  switch (e.tag) {
    case 5:
      return nr(e.type);
    case 16:
      return nr("Lazy");
    case 13:
      return nr("Suspense");
    case 19:
      return nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Hl(e.type, !1), e;
    case 11:
      return e = Hl(e.type.render, !1), e;
    case 1:
      return e = Hl(e.type, !0), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case dn:
      return "Fragment";
    case fn:
      return "Portal";
    case yi:
      return "Profiler";
    case vu:
      return "StrictMode";
    case gi:
      return "Suspense";
    case vi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case gc:
        return (e.displayName || "Context") + ".Consumer";
      case yc:
        return (e._context.displayName || "Context") + ".Provider";
      case wu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Su:
        return t = e.displayName || null, t !== null ? t : wi(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return wi(e(t));
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
      return wi(t);
    case 8:
      return t === vu ? "StrictMode" : "Mode";
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
function wc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function vp(e) {
  var t = wc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Gr(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function Sc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = wc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function To(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ts(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Ut(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kc(e, t) {
  t = t.checked, t != null && gu(e, "checked", t, !1);
}
function ki(e, t) {
  kc(e, t);
  var n = Ut(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function xi(e, t, n) {
  (t !== "number" || To(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rr = Array.isArray;
function Cn(e, t, n, r) {
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
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Rs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (rr(n)) {
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
function xc(e, t) {
  var n = Ut(t.value), r = Ut(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Os(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Xr, Ec = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function gr(e, t) {
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
}, wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function(e) {
  wp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
  });
});
function _c(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
}
function Pc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = _c(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var Sp = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function _i(e, t) {
  if (t) {
    if (Sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Pi(e, t) {
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
var Ti = null;
function ku(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ni = null, En = null, _n = null;
function zs(e) {
  if (e = Dr(e)) {
    if (typeof Ni != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = ll(t), Ni(e.stateNode, e.type, t));
  }
}
function Tc(e) {
  En ? _n ? _n.push(e) : _n = [e] : En = e;
}
function Nc() {
  if (En) {
    var e = En, t = _n;
    if (_n = En = null, zs(e), t)
      for (e = 0; e < t.length; e++)
        zs(t[e]);
  }
}
function Rc(e, t) {
  return e(t);
}
function Oc() {
}
var Wl = !1;
function zc(e, t, n) {
  if (Wl)
    return e(t, n);
  Wl = !0;
  try {
    return Rc(e, t, n);
  } finally {
    Wl = !1, (En !== null || _n !== null) && (Oc(), Nc());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ll(n);
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
var Ri = !1;
if (vt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", { get: function() {
      Ri = !0;
    } }), window.addEventListener("test", Qn, Qn), window.removeEventListener("test", Qn, Qn);
  } catch {
    Ri = !1;
  }
function kp(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var ur = !1, No = null, Ro = !1, Oi = null, xp = { onError: function(e) {
  ur = !0, No = e;
} };
function Cp(e, t, n, r, o, l, i, u, s) {
  ur = !1, No = null, kp.apply(xp, arguments);
}
function Ep(e, t, n, r, o, l, i, u, s) {
  if (Cp.apply(this, arguments), ur) {
    if (ur) {
      var a = No;
      ur = !1, No = null;
    } else
      throw Error(S(198));
    Ro || (Ro = !0, Oi = a);
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
function Lc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ls(e) {
  if (ln(e) !== e)
    throw Error(S(188));
}
function _p(e) {
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
          return Ls(o), e;
        if (l === r)
          return Ls(o), t;
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
function $c(e) {
  return e = _p(e), e !== null ? Ic(e) : null;
}
function Ic(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Ic(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Ac = De.unstable_scheduleCallback, $s = De.unstable_cancelCallback, Pp = De.unstable_shouldYield, Tp = De.unstable_requestPaint, te = De.unstable_now, Np = De.unstable_getCurrentPriorityLevel, xu = De.unstable_ImmediatePriority, Mc = De.unstable_UserBlockingPriority, Oo = De.unstable_NormalPriority, Rp = De.unstable_LowPriority, jc = De.unstable_IdlePriority, tl = null, ct = null;
function Op(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var nt = Math.clz32 ? Math.clz32 : $p, zp = Math.log, Lp = Math.LN2;
function $p(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Lp | 0) | 0;
}
var Zr = 64, Jr = 4194304;
function or(e) {
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
function zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = or(u) : (l &= i, l !== 0 && (r = or(l)));
  } else
    i = n & ~o, i !== 0 ? r = or(i) : l !== 0 && (r = or(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - nt(t), o = 1 << n, r |= e[n], t &= ~o;
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
function Ap(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - nt(l), u = 1 << i, s = o[i];
    s === -1 ? (!(u & n) || u & r) && (o[i] = Ip(u, t)) : s <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function zi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Fc() {
  var e = Zr;
  return Zr <<= 1, !(Zr & 4194240) && (Zr = 64), e;
}
function Vl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function jr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n;
}
function Mp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - nt(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Cu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var D = 0;
function Dc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uc, Eu, Bc, Hc, Wc, Li = !1, qr = [], Lt = null, $t = null, It = null, wr = /* @__PURE__ */ new Map(), Sr = /* @__PURE__ */ new Map(), Nt = [], jp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Is(e, t) {
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
      wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function Yn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Dr(t), t !== null && Eu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Fp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Lt = Yn(Lt, e, t, n, r, o), !0;
    case "dragenter":
      return $t = Yn($t, e, t, n, r, o), !0;
    case "mouseover":
      return It = Yn(It, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return wr.set(l, Yn(wr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, Sr.set(l, Yn(Sr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vc(e) {
  var t = Gt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lc(n), t !== null) {
          e.blockedOn = t, Wc(e.priority, function() {
            Bc(n);
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
function po(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ti = r, n.target.dispatchEvent(r), Ti = null;
    } else
      return t = Dr(n), t !== null && Eu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  po(e) && n.delete(t);
}
function Dp() {
  Li = !1, Lt !== null && po(Lt) && (Lt = null), $t !== null && po($t) && ($t = null), It !== null && po(It) && (It = null), wr.forEach(As), Sr.forEach(As);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, Dp)));
}
function kr(e) {
  function t(o) {
    return Gn(o, e);
  }
  if (0 < qr.length) {
    Gn(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Lt !== null && Gn(Lt, e), $t !== null && Gn($t, e), It !== null && Gn(It, e), wr.forEach(t), Sr.forEach(t), n = 0; n < Nt.length; n++)
    r = Nt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && (n = Nt[0], n.blockedOn === null); )
    Vc(n), n.blockedOn === null && Nt.shift();
}
var Pn = Ct.ReactCurrentBatchConfig, Lo = !0;
function Up(e, t, n, r) {
  var o = D, l = Pn.transition;
  Pn.transition = null;
  try {
    D = 1, _u(e, t, n, r);
  } finally {
    D = o, Pn.transition = l;
  }
}
function Bp(e, t, n, r) {
  var o = D, l = Pn.transition;
  Pn.transition = null;
  try {
    D = 4, _u(e, t, n, r);
  } finally {
    D = o, Pn.transition = l;
  }
}
function _u(e, t, n, r) {
  if (Lo) {
    var o = $i(e, t, n, r);
    if (o === null)
      ei(e, t, r, $o, n), Is(e, r);
    else if (Fp(o, e, t, n, r))
      r.stopPropagation();
    else if (Is(e, r), t & 4 && -1 < jp.indexOf(e)) {
      for (; o !== null; ) {
        var l = Dr(o);
        if (l !== null && Uc(l), l = $i(e, t, n, r), l === null && ei(e, t, r, $o, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      ei(e, t, r, null, n);
  }
}
var $o = null;
function $i(e, t, n, r) {
  if ($o = null, e = ku(r), e = Gt(e), e !== null)
    if (t = ln(e), t === null)
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
  return $o = e, null;
}
function Kc(e) {
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
        case xu:
          return 1;
        case Mc:
          return 4;
        case Oo:
        case Rp:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null, Pu = null, mo = null;
function Qc() {
  if (mo)
    return mo;
  var e, t = Pu, n = t.length, r, o = "value" in Ot ? Ot.value : Ot.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return mo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ho(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function br() {
  return !0;
}
function Ms() {
  return !1;
}
function Be(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? br : Ms, this.isPropagationStopped = Ms, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = br);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = br);
  }, persist: function() {
  }, isPersistent: br }), t;
}
var Un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Tu = Be(Un), Fr = J({}, Un, { view: 0, detail: 0 }), Hp = Be(Fr), Kl, Ql, Xn, nl = J({}, Fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Xn && (Xn && e.type === "mousemove" ? (Kl = e.screenX - Xn.screenX, Ql = e.screenY - Xn.screenY) : Ql = Kl = 0, Xn = e), Kl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ql;
} }), js = Be(nl), Wp = J({}, nl, { dataTransfer: 0 }), Vp = Be(Wp), Kp = J({}, Fr, { relatedTarget: 0 }), Yl = Be(Kp), Qp = J({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = Be(Qp), Gp = J({}, Un, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Xp = Be(Gp), Zp = J({}, Un, { data: 0 }), Fs = Be(Zp), Jp = {
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
function Nu() {
  return em;
}
var tm = J({}, Fr, { key: function(e) {
  if (e.key) {
    var t = Jp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nu, charCode: function(e) {
  return e.type === "keypress" ? ho(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), nm = Be(tm), rm = J({}, nl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ds = Be(rm), om = J({}, Fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nu }), lm = Be(om), im = J({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), um = Be(im), sm = J({}, nl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), am = Be(sm), cm = [9, 13, 27, 32], Ru = vt && "CompositionEvent" in window, sr = null;
vt && "documentMode" in document && (sr = document.documentMode);
var fm = vt && "TextEvent" in window && !sr, Yc = vt && (!Ru || sr && 8 < sr && 11 >= sr), Us = String.fromCharCode(32), Bs = !1;
function Gc(e, t) {
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
function Xc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function dm(e, t) {
  switch (e) {
    case "compositionend":
      return Xc(t);
    case "keypress":
      return t.which !== 32 ? null : (Bs = !0, Us);
    case "textInput":
      return e = t.data, e === Us && Bs ? null : e;
    default:
      return null;
  }
}
function pm(e, t) {
  if (pn)
    return e === "compositionend" || !Ru && Gc(e, t) ? (e = Qc(), mo = Pu = Ot = null, pn = !1, e) : null;
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
var mm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!mm[e.type] : t === "textarea";
}
function Zc(e, t, n, r) {
  Tc(r), t = Io(t, "onChange"), 0 < t.length && (n = new Tu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ar = null, xr = null;
function hm(e) {
  sf(e, 0);
}
function rl(e) {
  var t = yn(e);
  if (Sc(t))
    return e;
}
function ym(e, t) {
  if (e === "change")
    return t;
}
var Jc = !1;
if (vt) {
  var Gl;
  if (vt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Ws = document.createElement("div");
      Ws.setAttribute("oninput", "return;"), Xl = typeof Ws.oninput == "function";
    }
    Gl = Xl;
  } else
    Gl = !1;
  Jc = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Vs() {
  ar && (ar.detachEvent("onpropertychange", qc), xr = ar = null);
}
function qc(e) {
  if (e.propertyName === "value" && rl(xr)) {
    var t = [];
    Zc(t, xr, e, ku(e)), zc(hm, t);
  }
}
function gm(e, t, n) {
  e === "focusin" ? (Vs(), ar = t, xr = n, ar.attachEvent("onpropertychange", qc)) : e === "focusout" && Vs();
}
function vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl(xr);
}
function wm(e, t) {
  if (e === "click")
    return rl(t);
}
function Sm(e, t) {
  if (e === "input" || e === "change")
    return rl(t);
}
function km(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ot = typeof Object.is == "function" ? Object.is : km;
function Cr(e, t) {
  if (ot(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hi.call(t, o) || !ot(e[o], t[o]))
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
function bc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ef() {
  for (var e = window, t = To(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = To(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xm(e) {
  var t = ef(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ou(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Qs(n, l);
        var i = Qs(
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
var Cm = vt && "documentMode" in document && 11 >= document.documentMode, mn = null, Ii = null, cr = null, Ai = !1;
function Ys(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || mn == null || mn !== To(r) || (r = mn, "selectionStart" in r && Ou(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), cr && Cr(cr, r) || (cr = r, r = Io(Ii, "onSelect"), 0 < r.length && (t = new Tu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function eo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var hn = { animationend: eo("Animation", "AnimationEnd"), animationiteration: eo("Animation", "AnimationIteration"), animationstart: eo("Animation", "AnimationStart"), transitionend: eo("Transition", "TransitionEnd") }, Zl = {}, tf = {};
vt && (tf = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
function ol(e) {
  if (Zl[e])
    return Zl[e];
  if (!hn[e])
    return e;
  var t = hn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in tf)
      return Zl[e] = t[n];
  return e;
}
var nf = ol("animationend"), rf = ol("animationiteration"), of = ol("animationstart"), lf = ol("transitionend"), uf = /* @__PURE__ */ new Map(), Gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ht(e, t) {
  uf.set(e, t), on(t, [e]);
}
for (var Jl = 0; Jl < Gs.length; Jl++) {
  var ql = Gs[Jl], Em = ql.toLowerCase(), _m = ql[0].toUpperCase() + ql.slice(1);
  Ht(Em, "on" + _m);
}
Ht(nf, "onAnimationEnd");
Ht(rf, "onAnimationIteration");
Ht(of, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(lf, "onTransitionEnd");
zn("onMouseEnter", ["mouseout", "mouseover"]);
zn("onMouseLeave", ["mouseout", "mouseover"]);
zn("onPointerEnter", ["pointerout", "pointerover"]);
zn("onPointerLeave", ["pointerout", "pointerover"]);
on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
function Xs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ep(r, t, void 0, e), e.currentTarget = null;
}
function sf(e, t) {
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
          Xs(o, u, a), l = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Xs(o, u, a), l = s;
        }
    }
  }
  if (Ro)
    throw e = Oi, Ro = !1, Oi = null, e;
}
function V(e, t) {
  var n = t[Ui];
  n === void 0 && (n = t[Ui] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (af(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), af(n, e, r, t);
}
var to = "_reactListening" + Math.random().toString(36).slice(2);
function Er(e) {
  if (!e[to]) {
    e[to] = !0, hc.forEach(function(n) {
      n !== "selectionchange" && (Pm.has(n) || bl(n, !1, e), bl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[to] || (t[to] = !0, bl("selectionchange", !1, t));
  }
}
function af(e, t, n, r) {
  switch (Kc(t)) {
    case 1:
      var o = Up;
      break;
    case 4:
      o = Bp;
      break;
    default:
      o = _u;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, o) {
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
  zc(function() {
    var a = l, h = ku(n), m = [];
    e: {
      var p = uf.get(e);
      if (p !== void 0) {
        var v = Tu, g = e;
        switch (e) {
          case "keypress":
            if (ho(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = nm;
            break;
          case "focusin":
            g = "focus", v = Yl;
            break;
          case "focusout":
            g = "blur", v = Yl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Yl;
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
            v = Vp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = lm;
            break;
          case nf:
          case rf:
          case of:
            v = Yp;
            break;
          case lf:
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
            v = Ds;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = vr(c, f), w != null && y.push(_r(c, w, d)))), P)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Ti && (g = n.relatedTarget || n.fromElement) && (Gt(g) || g[wt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Gt(g) : null, g !== null && (P = ln(g), g !== P || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = js, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ds, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = v == null ? p : yn(v), d = g == null ? p : yn(g), p = new y(w, c + "leave", v, n, h), p.target = P, p.relatedTarget = d, w = null, Gt(h) === a && (y = new y(f, c + "enter", g, n, h), y.target = d, y.relatedTarget = P, w = y), P = w, v && g)
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
          v !== null && Zs(m, p, v, y, !1), g !== null && P !== null && Zs(m, P, g, y, !0);
        }
      }
      e: {
        if (p = a ? yn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var x = ym;
        else if (Hs(p))
          if (Jc)
            x = Sm;
          else {
            x = vm;
            var C = gm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = wm);
        if (x && (x = x(e, a))) {
          Zc(m, x, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && xi(p, "number", p.value);
      }
      switch (C = a ? yn(a) : window, e) {
        case "focusin":
          (Hs(C) || C.contentEditable === "true") && (mn = C, Ii = a, cr = null);
          break;
        case "focusout":
          cr = Ii = mn = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, Ys(m, n, h);
          break;
        case "selectionchange":
          if (Cm)
            break;
        case "keydown":
        case "keyup":
          Ys(m, n, h);
      }
      var k;
      if (Ru)
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
        pn ? Gc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Yc && n.locale !== "ko" && (pn || T !== "onCompositionStart" ? T === "onCompositionEnd" && pn && (k = Qc()) : (Ot = h, Pu = "value" in Ot ? Ot.value : Ot.textContent, pn = !0)), C = Io(a, T), 0 < C.length && (T = new Fs(T, e, null, n, h), m.push({ event: T, listeners: C }), k ? T.data = k : (k = Xc(n), k !== null && (T.data = k)))), (k = fm ? dm(e, n) : pm(e, n)) && (a = Io(a, "onBeforeInput"), 0 < a.length && (h = new Fs("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = k));
    }
    sf(m, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = vr(e, n), l != null && r.unshift(_r(e, l, o)), l = vr(e, t), l != null && r.push(_r(e, l, o))), e = e.return;
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
function Zs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = vr(n, l), s != null && i.unshift(_r(n, s, u))) : o || (s = vr(n, l), s != null && i.push(_r(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Tm = /\r\n?/g, Nm = /\u0000|\uFFFD/g;
function Js(e) {
  return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Nm, "");
}
function no(e, t, n) {
  if (t = Js(t), Js(e) !== t && n)
    throw Error(S(425));
}
function Ao() {
}
var Mi = null, ji = null;
function Fi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Di = typeof setTimeout == "function" ? setTimeout : void 0, Rm = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = typeof Promise == "function" ? Promise : void 0, Om = typeof queueMicrotask == "function" ? queueMicrotask : typeof qs < "u" ? function(e) {
  return qs.resolve(null).then(e).catch(zm);
} : Di;
function zm(e) {
  setTimeout(function() {
    throw e;
  });
}
function ti(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), kr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  kr(t);
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
var Bn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Bn, Pr = "__reactProps$" + Bn, wt = "__reactContainer$" + Bn, Ui = "__reactEvents$" + Bn, Lm = "__reactListeners$" + Bn, $m = "__reactHandles$" + Bn;
function Gt(e) {
  var t = e[at];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[at]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = bs(e); e !== null; ) {
          if (n = e[at])
            return n;
          e = bs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Dr(e) {
  return e = e[at] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function ll(e) {
  return e[Pr] || null;
}
var Bi = [], gn = -1;
function Wt(e) {
  return { current: e };
}
function K(e) {
  0 > gn || (e.current = Bi[gn], Bi[gn] = null, gn--);
}
function H(e, t) {
  gn++, Bi[gn] = e.current, e.current = t;
}
var Bt = {}, Se = Wt(Bt), Re = Wt(!1), bt = Bt;
function Ln(e, t) {
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
function Mo() {
  K(Re), K(Se);
}
function ea(e, t, n) {
  if (Se.current !== Bt)
    throw Error(S(168));
  H(Se, t), H(Re, n);
}
function cf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(S(108, gp(e) || "Unknown", o));
  return J({}, n, r);
}
function jo(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, bt = Se.current, H(Se, e), H(Re, Re.current), !0;
}
function ta(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = cf(e, t, bt), r.__reactInternalMemoizedMergedChildContext = e, K(Re), K(Se), H(Se, e)) : K(Re), H(Re, n);
}
var mt = null, il = !1, ni = !1;
function ff(e) {
  mt === null ? mt = [e] : mt.push(e);
}
function Im(e) {
  il = !0, ff(e);
}
function Vt() {
  if (!ni && mt !== null) {
    ni = !0;
    var e = 0, t = D;
    try {
      var n = mt;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mt = null, il = !1;
    } catch (o) {
      throw mt !== null && (mt = mt.slice(e + 1)), Ac(xu, Vt), o;
    } finally {
      D = t, ni = !1;
    }
  }
  return null;
}
var vn = [], wn = 0, Fo = null, Do = 0, Ve = [], Ke = 0, en = null, ht = 1, yt = "";
function Qt(e, t) {
  vn[wn++] = Do, vn[wn++] = Fo, Fo = e, Do = t;
}
function df(e, t, n) {
  Ve[Ke++] = ht, Ve[Ke++] = yt, Ve[Ke++] = en, en = e;
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
function zu(e) {
  e.return !== null && (Qt(e, 1), df(e, 1, 0));
}
function Lu(e) {
  for (; e === Fo; )
    Fo = vn[--wn], vn[wn] = null, Do = vn[--wn], vn[wn] = null;
  for (; e === en; )
    en = Ve[--Ke], Ve[Ke] = null, yt = Ve[--Ke], Ve[Ke] = null, ht = Ve[--Ke], Ve[Ke] = null;
}
var je = null, Me = null, Y = !1, tt = null;
function pf(e, t) {
  var n = Ye(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function na(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, je = e, Me = At(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, je = e, Me = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = en !== null ? { id: ht, overflow: yt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, je = e, Me = null, !0) : !1;
    default:
      return !1;
  }
}
function Hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wi(e) {
  if (Y) {
    var t = Me;
    if (t) {
      var n = t;
      if (!na(e, t)) {
        if (Hi(e))
          throw Error(S(418));
        t = At(n.nextSibling);
        var r = je;
        t && na(e, t) ? pf(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, je = e);
      }
    } else {
      if (Hi(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, Y = !1, je = e;
    }
  }
}
function ra(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function ro(e) {
  if (e !== je)
    return !1;
  if (!Y)
    return ra(e), Y = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps)), t && (t = Me)) {
    if (Hi(e))
      throw mf(), Error(S(418));
    for (; t; )
      pf(e, t), t = At(t.nextSibling);
  }
  if (ra(e), e.tag === 13) {
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
function mf() {
  for (var e = Me; e; )
    e = At(e.nextSibling);
}
function $n() {
  Me = je = null, Y = !1;
}
function $u(e) {
  tt === null ? tt = [e] : tt.push(e);
}
var Am = Ct.ReactCurrentBatchConfig;
function Zn(e, t, n) {
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
function oo(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function oa(e) {
  var t = e._init;
  return t(e._payload);
}
function hf(e) {
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
    return c === null || c.tag !== 6 ? (c = ai(d, f.mode, w), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var x = d.type;
    return x === dn ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && oa(x) === c.type) ? (w = o(c, d.props), w.ref = Zn(f, c, d), w.return = f, w) : (w = xo(d.type, d.key, d.props, null, f.mode, w), w.ref = Zn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ci(d, f.mode, w), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = qt(d, f.mode, w, x), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ai("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Yr:
          return d = xo(c.type, c.key, c.props, null, f.mode, d), d.ref = Zn(f, null, c), d.return = f, d;
        case fn:
          return c = ci(c, f.mode, d), c.return = f, c;
        case _t:
          var w = c._init;
          return m(f, w(c._payload), d);
      }
      if (rr(c) || Kn(c))
        return c = qt(c, f.mode, d, null), c.return = f, c;
      oo(f, c);
    }
    return null;
  }
  function p(f, c, d, w) {
    var x = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return x !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Yr:
          return d.key === x ? s(f, c, d, w) : null;
        case fn:
          return d.key === x ? a(f, c, d, w) : null;
        case _t:
          return x = d._init, p(
            f,
            c,
            x(d._payload),
            w
          );
      }
      if (rr(d) || Kn(d))
        return x !== null ? null : h(f, c, d, w, null);
      oo(f, d);
    }
    return null;
  }
  function v(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Yr:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case fn:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, x);
        case _t:
          var C = w._init;
          return v(f, c, d, C(w._payload), x);
      }
      if (rr(w) || Kn(w))
        return f = f.get(d) || null, h(c, f, w, x, null);
      oo(c, w);
    }
    return null;
  }
  function g(f, c, d, w) {
    for (var x = null, C = null, k = c, T = c = 0, B = null; k !== null && T < d.length; T++) {
      k.index > T ? (B = k, k = null) : B = k.sibling;
      var R = p(f, k, d[T], w);
      if (R === null) {
        k === null && (k = B);
        break;
      }
      e && k && R.alternate === null && t(f, k), c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R, k = B;
    }
    if (T === d.length)
      return n(f, k), Y && Qt(f, T), x;
    if (k === null) {
      for (; T < d.length; T++)
        k = m(f, d[T], w), k !== null && (c = l(k, c, T), C === null ? x = k : C.sibling = k, C = k);
      return Y && Qt(f, T), x;
    }
    for (k = r(f, k); T < d.length; T++)
      B = v(k, f, T, d[T], w), B !== null && (e && B.alternate !== null && k.delete(B.key === null ? T : B.key), c = l(B, c, T), C === null ? x = B : C.sibling = B, C = B);
    return e && k.forEach(function(G) {
      return t(f, G);
    }), Y && Qt(f, T), x;
  }
  function y(f, c, d, w) {
    var x = Kn(d);
    if (typeof x != "function")
      throw Error(S(150));
    if (d = x.call(d), d == null)
      throw Error(S(151));
    for (var C = x = null, k = c, T = c = 0, B = null, R = d.next(); k !== null && !R.done; T++, R = d.next()) {
      k.index > T ? (B = k, k = null) : B = k.sibling;
      var G = p(f, k, R.value, w);
      if (G === null) {
        k === null && (k = B);
        break;
      }
      e && k && G.alternate === null && t(f, k), c = l(G, c, T), C === null ? x = G : C.sibling = G, C = G, k = B;
    }
    if (R.done)
      return n(
        f,
        k
      ), Y && Qt(f, T), x;
    if (k === null) {
      for (; !R.done; T++, R = d.next())
        R = m(f, R.value, w), R !== null && (c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R);
      return Y && Qt(f, T), x;
    }
    for (k = r(f, k); !R.done; T++, R = d.next())
      R = v(k, f, T, R.value, w), R !== null && (e && R.alternate !== null && k.delete(R.key === null ? T : R.key), c = l(R, c, T), C === null ? x = R : C.sibling = R, C = R);
    return e && k.forEach(function(_e) {
      return t(f, _e);
    }), Y && Qt(f, T), x;
  }
  function P(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === dn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Yr:
          e: {
            for (var x = d.key, C = c; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === dn) {
                  if (C.tag === 7) {
                    n(f, C.sibling), c = o(C, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === _t && oa(x) === C.type) {
                  n(f, C.sibling), c = o(C, d.props), c.ref = Zn(f, C, d), c.return = f, f = c;
                  break e;
                }
                n(f, C);
                break;
              } else
                t(f, C);
              C = C.sibling;
            }
            d.type === dn ? (c = qt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = xo(d.type, d.key, d.props, null, f.mode, w), w.ref = Zn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case fn:
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
            c = ci(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case _t:
          return C = d._init, P(f, c, C(d._payload), w);
      }
      if (rr(d))
        return g(f, c, d, w);
      if (Kn(d))
        return y(f, c, d, w);
      oo(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = ai(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return P;
}
var In = hf(!0), yf = hf(!1), Uo = Wt(null), Bo = null, Sn = null, Iu = null;
function Au() {
  Iu = Sn = Bo = null;
}
function Mu(e) {
  var t = Uo.current;
  K(Uo), e._currentValue = t;
}
function Vi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  Bo = e, Iu = Sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null);
}
function Xe(e) {
  var t = e._currentValue;
  if (Iu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Sn === null) {
      if (Bo === null)
        throw Error(S(308));
      Sn = e, Bo.dependencies = { lanes: 0, firstContext: e };
    } else
      Sn = Sn.next = e;
  return t;
}
var Xt = null;
function ju(e) {
  Xt === null ? Xt = [e] : Xt.push(e);
}
function gf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, ju(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Pt = !1;
function Fu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, ju(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
}
function yo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
function la(e, t) {
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
function Ho(e, t, n, r) {
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
function ia(e, t, n) {
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
var Ur = {}, ft = Wt(Ur), Tr = Wt(Ur), Nr = Wt(Ur);
function Zt(e) {
  if (e === Ur)
    throw Error(S(174));
  return e;
}
function Du(e, t) {
  switch (H(Nr, t), H(Tr, e), H(ft, Ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ei(t, e);
  }
  K(ft), H(ft, t);
}
function An() {
  K(ft), K(Tr), K(Nr);
}
function wf(e) {
  Zt(Nr.current);
  var t = Zt(ft.current), n = Ei(t, e.type);
  t !== n && (H(Tr, e), H(ft, n));
}
function Uu(e) {
  Tr.current === e && (K(ft), K(Tr));
}
var X = Wt(0);
function Wo(e) {
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
var ri = [];
function Bu() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var go = Ct.ReactCurrentDispatcher, oi = Ct.ReactCurrentBatchConfig, tn = 0, Z = null, le = null, se = null, Vo = !1, fr = !1, Rr = 0, Mm = 0;
function ye() {
  throw Error(S(321));
}
function Hu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n]))
      return !1;
  return !0;
}
function Wu(e, t, n, r, o, l) {
  if (tn = l, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, go.current = e === null || e.memoizedState === null ? Um : Bm, e = n(r, o), fr) {
    l = 0;
    do {
      if (fr = !1, Rr = 0, 25 <= l)
        throw Error(S(301));
      l += 1, se = le = null, t.updateQueue = null, go.current = Hm, e = n(r, o);
    } while (fr);
  }
  if (go.current = Ko, t = le !== null && le.next !== null, tn = 0, se = le = Z = null, Vo = !1, t)
    throw Error(S(300));
  return e;
}
function Vu() {
  var e = Rr !== 0;
  return Rr = 0, e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return se === null ? Z.memoizedState = se = e : se = se.next = e, se;
}
function Ze() {
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
function Or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function li(e) {
  var t = Ze(), n = t.queue;
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
function ii(e) {
  var t = Ze(), n = t.queue;
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
function Sf() {
}
function kf(e, t) {
  var n = Z, r = Ze(), o = t(), l = !ot(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ne = !0), r = r.queue, Ku(Ef.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || se !== null && se.memoizedState.tag & 1) {
    if (n.flags |= 2048, zr(9, Cf.bind(null, n, r, o, t), void 0, null), ae === null)
      throw Error(S(349));
    tn & 30 || xf(n, t, o);
  }
  return o;
}
function xf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, _f(t) && Pf(e);
}
function Ef(e, t, n) {
  return n(function() {
    _f(t) && Pf(e);
  });
}
function _f(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Pf(e) {
  var t = St(e, 1);
  t !== null && rt(t, e, 1, -1);
}
function ua(e) {
  var t = it();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Dm.bind(null, Z, e), [t.memoizedState, e];
}
function zr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tf() {
  return Ze().memoizedState;
}
function vo(e, t, n, r) {
  var o = it();
  Z.flags |= e, o.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ul(e, t, n, r) {
  var o = Ze();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (l = i.destroy, r !== null && Hu(r, i.deps)) {
      o.memoizedState = zr(t, n, l, r);
      return;
    }
  }
  Z.flags |= e, o.memoizedState = zr(1 | t, n, l, r);
}
function sa(e, t) {
  return vo(8390656, 8, e, t);
}
function Ku(e, t) {
  return ul(2048, 8, e, t);
}
function Nf(e, t) {
  return ul(4, 2, e, t);
}
function Rf(e, t) {
  return ul(4, 4, e, t);
}
function Of(e, t) {
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
  return n = n != null ? n.concat([e]) : null, ul(4, 4, Of.bind(null, t, e), n);
}
function Qu() {
}
function Lf(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function $f(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function If(e, t, n) {
  return tn & 21 ? (ot(n, t) || (n = Fc(), Z.lanes |= n, nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n);
}
function jm(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, oi.transition = r;
  }
}
function Af() {
  return Ze().memoizedState;
}
function Fm(e, t, n) {
  var r = Ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Mf(e))
    jf(t, n);
  else if (n = gf(e, t, n, r), n !== null) {
    var o = xe();
    rt(n, e, r, o), Ff(n, t, r);
  }
}
function Dm(e, t, n) {
  var r = Ft(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mf(e))
    jf(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, ot(u, i)) {
          var s = t.interleaved;
          s === null ? (o.next = o, ju(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = gf(e, t, o, r), n !== null && (o = xe(), rt(n, e, r, o), Ff(n, t, r));
  }
}
function Mf(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function jf(e, t) {
  fr = Vo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ff(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Cu(e, n);
  }
}
var Ko = { readContext: Xe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, Um = { readContext: Xe, useCallback: function(e, t) {
  return it().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Xe, useEffect: sa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vo(
    4194308,
    4,
    Of.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return vo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return vo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = it();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = it();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = it();
  return e = { current: e }, t.memoizedState = e;
}, useState: ua, useDebugValue: Qu, useDeferredValue: function(e) {
  return it().memoizedState = e;
}, useTransition: function() {
  var e = ua(!1), t = e[0];
  return e = jm.bind(null, e[1]), it().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, o = it();
  if (Y) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ae === null)
      throw Error(S(349));
    tn & 30 || xf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, sa(Ef.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, zr(9, Cf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = it(), t = ae.identifierPrefix;
  if (Y) {
    var n = yt, r = ht;
    n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Rr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Mm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bm = {
  readContext: Xe,
  useCallback: Lf,
  useContext: Xe,
  useEffect: Ku,
  useImperativeHandle: zf,
  useInsertionEffect: Nf,
  useLayoutEffect: Rf,
  useMemo: $f,
  useReducer: li,
  useRef: Tf,
  useState: function() {
    return li(Or);
  },
  useDebugValue: Qu,
  useDeferredValue: function(e) {
    var t = Ze();
    return If(t, le.memoizedState, e);
  },
  useTransition: function() {
    var e = li(Or)[0], t = Ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Sf,
  useSyncExternalStore: kf,
  useId: Af,
  unstable_isNewReconciler: !1
}, Hm = { readContext: Xe, useCallback: Lf, useContext: Xe, useEffect: Ku, useImperativeHandle: zf, useInsertionEffect: Nf, useLayoutEffect: Rf, useMemo: $f, useReducer: ii, useRef: Tf, useState: function() {
  return ii(Or);
}, useDebugValue: Qu, useDeferredValue: function(e) {
  var t = Ze();
  return le === null ? t.memoizedState = e : If(t, le.memoizedState, e);
}, useTransition: function() {
  var e = ii(Or)[0], t = Ze().memoizedState;
  return [e, t];
}, useMutableSource: Sf, useSyncExternalStore: kf, useId: Af, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ki(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? ln(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Ft(e), l = gt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), yo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = xe(), o = Ft(e), l = gt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Mt(e, l, o), t !== null && (rt(t, e, o, r), yo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = xe(), r = Ft(e), o = gt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Mt(e, o, r), t !== null && (rt(t, e, r, n), yo(t, e, r));
} };
function aa(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Cr(n, r) || !Cr(o, l) : !0;
}
function Df(e, t, n) {
  var r = !1, o = Bt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = Xe(l) : (o = Oe(t) ? bt : Se.current, r = t.contextTypes, l = (r = r != null) ? Ln(e, o) : Bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function ca(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
}
function Qi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Fu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = Xe(l) : (l = Oe(t) ? bt : Se.current, o.context = Ln(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ki(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && sl.enqueueReplaceState(o, o.state, null), Ho(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mn(e, t) {
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
function ui(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Wm = typeof WeakMap == "function" ? WeakMap : Map;
function Uf(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yo || (Yo = !0, ru = r), Yi(e, t);
  }, n;
}
function Bf(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Yi(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Yi(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function fa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = rh.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e);
}
var Vm = Ct.ReactCurrentOwner, Ne = !1;
function ke(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : In(t, e.child, n, r);
}
function ma(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Tn(t, o), r = Wu(e, t, n, r, l, o), n = Vu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (Y && n && zu(t), t.flags |= 1, ke(e, t, r, o), t.child);
}
function ha(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !es(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Hf(e, t, l, r, o)) : (e = xo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Cr, n(i, r) && e.ref === t.ref)
      return kt(e, t, o);
  }
  return t.flags |= 1, e = Dt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Hf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Cr(l, r) && e.ref === t.ref)
      if (Ne = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ne = !0);
      else
        return t.lanes = e.lanes, kt(e, t, o);
  }
  return Gi(e, t, n, r, o);
}
function Wf(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(xn, Ie), Ie |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(xn, Ie), Ie |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, H(xn, Ie), Ie |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, H(xn, Ie), Ie |= r;
  return ke(e, t, o, n), t.child;
}
function Vf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Gi(e, t, n, r, o) {
  var l = Oe(n) ? bt : Se.current;
  return l = Ln(t, l), Tn(t, o), n = Wu(e, t, n, r, l, o), r = Vu(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, kt(e, t, o)) : (Y && r && zu(t), t.flags |= 1, ke(e, t, n, o), t.child);
}
function ya(e, t, n, r, o) {
  if (Oe(n)) {
    var l = !0;
    jo(t);
  } else
    l = !1;
  if (Tn(t, o), t.stateNode === null)
    wo(e, t), Df(t, n, r), Qi(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Xe(a) : (a = Oe(n) ? bt : Se.current, a = Ln(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ca(t, i, r, a), Pt = !1;
    var p = t.memoizedState;
    i.state = p, Ho(t, r, i, o), s = t.memoizedState, u !== r || p !== s || Re.current || Pt ? (typeof h == "function" && (Ki(t, n, h, r), s = t.memoizedState), (u = Pt || aa(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, vf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : be(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Oe(n) ? bt : Se.current, s = Ln(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && ca(t, i, r, s), Pt = !1, p = t.memoizedState, i.state = p, Ho(t, r, i, o);
    var g = t.memoizedState;
    u !== m || p !== g || Re.current || Pt ? (typeof v == "function" && (Ki(t, n, v, r), g = t.memoizedState), (a = Pt || aa(t, n, a, r, p, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Xi(e, t, n, r, l, o);
}
function Xi(e, t, n, r, o, l) {
  Vf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && ta(t, n, !1), kt(e, t, l);
  r = t.stateNode, Vm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = In(t, e.child, null, l), t.child = In(t, null, u, l)) : ke(e, t, u, l), t.memoizedState = r.state, o && ta(t, n, !0), t.child;
}
function Kf(e) {
  var t = e.stateNode;
  t.pendingContext ? ea(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ea(e, t.context, !1), Du(e, t.containerInfo);
}
function ga(e, t, n, r, o) {
  return $n(), $u(o), t.flags |= 256, ke(e, t, n, r), t.child;
}
var Zi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ji(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps, o = X.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), H(X, o & 1), e === null)
    return Wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = fl(i, r, 0, null), e = qt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ji(n), t.memoizedState = Zi, e) : Yu(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Km(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Dt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Dt(u, l) : (l = qt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ji(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Zi, r;
  }
  return l = e.child, e = l.sibling, r = Dt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yu(e, t) {
  return t = fl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function lo(e, t, n, r) {
  return r !== null && $u(r), In(t, e.child, null, n), e = Yu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Km(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ui(Error(S(422))), lo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = fl({ mode: "visible", children: r.children }, o, 0, null), l = qt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && In(t, e.child, null, i), t.child.memoizedState = Ji(i), t.memoizedState = Zi, l);
  if (!(t.mode & 1))
    return lo(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(S(419)), r = ui(l, r, void 0), lo(e, t, i, r);
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
    return bu(), r = ui(Error(S(421))), lo(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = oh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Me = At(o.nextSibling), je = t, Y = !0, tt = null, e !== null && (Ve[Ke++] = ht, Ve[Ke++] = yt, Ve[Ke++] = en, ht = e.id, yt = e.overflow, en = t), t = Yu(t, r.children), t.flags |= 4096, t);
}
function va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vi(e.return, t, n);
}
function si(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Yf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (ke(e, t, r.children, n), r = X.current, r & 2)
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
  if (H(X, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Wo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), si(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Wo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        si(t, !0, n, null, l);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wo(e, t) {
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
function Qm(e, t, n) {
  switch (t.tag) {
    case 3:
      Kf(t), $n();
      break;
    case 5:
      wf(t);
      break;
    case 1:
      Oe(t.type) && jo(t);
      break;
    case 4:
      Du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      H(Uo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qf(e, t, n) : (H(X, X.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      H(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Yf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), H(X, X.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Wf(e, t, n);
  }
  return kt(e, t, n);
}
var Gf, qi, Xf, Zf;
Gf = function(e, t) {
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
qi = function() {
};
Xf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Zt(ft.current);
    var l = null;
    switch (n) {
      case "input":
        o = Si(e, o), r = Si(e, r), l = [];
        break;
      case "select":
        o = J({}, o, { value: void 0 }), r = J({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Ci(e, o), r = Ci(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ao);
    }
    _i(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (yr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (yr.hasOwnProperty(a) ? (s != null && a === "onScroll" && V("scroll", e), l || u === s || (l = [])) : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Zf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jn(e, t) {
  if (!Y)
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
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ym(e, t, n) {
  var r = t.pendingProps;
  switch (Lu(t), t.tag) {
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
      return Oe(t.type) && Mo(), ge(t), null;
    case 3:
      return r = t.stateNode, An(), K(Re), K(Se), Bu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ro(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, tt !== null && (iu(tt), tt = null))), qi(e, t), ge(t), null;
    case 5:
      Uu(t);
      var o = Zt(Nr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Xf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return ge(t), null;
        }
        if (e = Zt(ft.current), ro(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[at] = t, r[Pr] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < lr.length; o++)
                V(lr[o], r);
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
              Ts(r, l), V("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, V("invalid", r);
              break;
            case "textarea":
              Rs(r, l), V("invalid", r);
          }
          _i(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && no(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && no(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : yr.hasOwnProperty(i) && u != null && i === "onScroll" && V("scroll", r);
            }
          switch (n) {
            case "input":
              Gr(r), Ns(r, l, !0);
              break;
            case "textarea":
              Gr(r), Os(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ao);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[Pr] = r, Gf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Pi(n, r), n) {
              case "dialog":
                V("cancel", e), V("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < lr.length; o++)
                  V(lr[o], e);
                o = r;
                break;
              case "source":
                V("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                V(
                  "error",
                  e
                ), V("load", e), o = r;
                break;
              case "details":
                V("toggle", e), o = r;
                break;
              case "input":
                Ts(e, r), o = Si(e, r), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = J({}, r, { value: void 0 }), V("invalid", e);
                break;
              case "textarea":
                Rs(e, r), o = Ci(e, r), V("invalid", e);
                break;
              default:
                o = r;
            }
            _i(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style" ? Pc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ec(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && gr(e, s) : typeof s == "number" && gr(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (yr.hasOwnProperty(l) ? s != null && l === "onScroll" && V("scroll", e) : s != null && gu(e, l, s, i));
              }
            switch (n) {
              case "input":
                Gr(e), Ns(e, r, !1);
                break;
              case "textarea":
                Gr(e), Os(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? Cn(e, !!r.multiple, l, !1) : r.defaultValue != null && Cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ao);
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
        Zf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Zt(Nr.current), Zt(ft.current), ro(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (l = r.nodeValue !== n) && (e = je, e !== null))
            switch (e.tag) {
              case 3:
                no(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && no(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
      }
      return ge(t), null;
    case 13:
      if (K(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Y && Me !== null && t.mode & 1 && !(t.flags & 128))
          mf(), $n(), t.flags |= 98560, l = !1;
        else if (l = ro(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(S(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(S(317));
            l[at] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ge(t), l = !1;
        } else
          tt !== null && (iu(tt), tt = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? ie === 0 && (ie = 3) : bu())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
    case 4:
      return An(), qi(e, t), e === null && Er(t.stateNode.containerInfo), ge(t), null;
    case 10:
      return Mu(t.type._context), ge(t), null;
    case 17:
      return Oe(t.type) && Mo(), ge(t), null;
    case 19:
      if (K(X), l = t.memoizedState, l === null)
        return ge(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Jn(l, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Wo(e), i !== null) {
                for (t.flags |= 128, Jn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return H(X, X.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && te() > jn && (t.flags |= 128, r = !0, Jn(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Wo(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Jn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !Y)
              return ge(t), null;
          } else
            2 * te() - l.renderingStartTime > jn && n !== 1073741824 && (t.flags |= 128, r = !0, Jn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = te(), t.sibling = null, n = X.current, H(X, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
    case 22:
    case 23:
      return qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ie & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Gm(e, t) {
  switch (Lu(t), t.tag) {
    case 1:
      return Oe(t.type) && Mo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), K(Re), K(Se), Bu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Uu(t), null;
    case 13:
      if (K(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(X), null;
    case 4:
      return An(), null;
    case 10:
      return Mu(t.type._context), null;
    case 22:
    case 23:
      return qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = !1, we = !1, Xm = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function kn(e, t) {
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
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var wa = !1;
function Zm(e, t) {
  if (Mi = Lo, e = ef(), Ou(e)) {
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
  for (ji = { focusedElem: e, selectionRange: n }, Lo = !1, _ = t; _ !== null; )
    if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, _ = e;
    else
      for (; _ !== null; ) {
        t = _;
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
                  var y = g.memoizedProps, P = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : be(t.type, y), P);
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
          e.return = t.return, _ = e;
          break;
        }
        _ = t.return;
      }
  return g = wa, wa = !1, g;
}
function dr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && bi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function al(e, t) {
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
function eu(e) {
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
function Jf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Jf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Pr], delete t[Ui], delete t[Lm], delete t[$m])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function qf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sa(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qf(e.return))
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
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ao));
  else if (r !== 4 && (e = e.child, e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; )
      tu(e, t, n), e = e.sibling;
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; )
      nu(e, t, n), e = e.sibling;
}
var fe = null, et = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; )
    bf(e, t, n), n = n.sibling;
}
function bf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(tl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      we || kn(n, t);
    case 6:
      var r = fe, o = et;
      fe = null, Et(e, t, n), fe = r, et = o, fe !== null && (et ? (e = fe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null && (et ? (e = fe, n = n.stateNode, e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n), kr(e)) : ti(fe, n.stateNode));
      break;
    case 4:
      r = fe, o = et, fe = n.stateNode.containerInfo, et = !0, Et(e, t, n), fe = r, et = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && bi(n, t, i), o = o.next;
        } while (o !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!we && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Et(e, t, n), we = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function ka(e) {
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
function qe(e, t) {
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
                fe = u.stateNode, et = !1;
                break e;
              case 3:
                fe = u.stateNode.containerInfo, et = !0;
                break e;
              case 4:
                fe = u.stateNode.containerInfo, et = !0;
                break e;
            }
            u = u.return;
          }
        if (fe === null)
          throw Error(S(160));
        bf(l, i, o), fe = null, et = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        ee(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ed(t, e), t = t.sibling;
}
function ed(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (qe(t, e), lt(e), r & 4) {
        try {
          dr(3, e, e.return), al(3, e);
        } catch (y) {
          ee(e, e.return, y);
        }
        try {
          dr(5, e, e.return);
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      break;
    case 1:
      qe(t, e), lt(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (qe(t, e), lt(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          gr(o, "");
        } catch (y) {
          ee(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && kc(o, l), Pi(u, i);
            var a = Pi(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Pc(o, m) : h === "dangerouslySetInnerHTML" ? Ec(o, m) : h === "children" ? gr(o, m) : gu(o, h, m, a);
            }
            switch (u) {
              case "input":
                ki(o, l);
                break;
              case "textarea":
                xc(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null ? Cn(o, !!l.multiple, v, !1) : p !== !!l.multiple && (l.defaultValue != null ? Cn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : Cn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Pr] = l;
          } catch (y) {
            ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if (qe(t, e), lt(e), r & 4) {
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
      if (qe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          kr(t.containerInfo);
        } catch (y) {
          ee(e, e.return, y);
        }
      break;
    case 4:
      qe(t, e), lt(e);
      break;
    case 13:
      qe(t, e), lt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Zu = te())), r & 4 && ka(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (a = we) || h, qe(t, e), we = a) : qe(t, e), lt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (p = _, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, p, p.return);
                  break;
                case 1:
                  kn(p, p.return);
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
                  kn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ca(m);
                    continue;
                  }
              }
              v !== null ? (v.return = p, _ = v) : Ca(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = _c("display", i));
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
      qe(t, e), lt(e), r & 4 && ka(e);
      break;
    case 21:
      break;
    default:
      qe(
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
          if (qf(n)) {
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
          r.flags & 32 && (gr(o, ""), r.flags &= -33);
          var l = Sa(e);
          nu(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Sa(e);
          tu(e, u, i);
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
function Jm(e, t, n) {
  _ = e, td(e);
}
function td(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || io;
      if (!i) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || we;
        u = io;
        var a = we;
        if (io = i, (we = s) && !a)
          for (_ = o; _ !== null; )
            i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ea(o) : s !== null ? (s.return = i, _ = s) : Ea(o);
        for (; l !== null; )
          _ = l, td(l), l = l.sibling;
        _ = o, io = u, we = a;
      }
      xa(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, _ = l) : xa(e);
  }
}
function xa(e) {
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
              we || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && ia(t, l, r);
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
                ia(t, i, n);
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
                    m !== null && kr(m);
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
        we || t.flags & 512 && eu(t);
      } catch (p) {
        ee(t, t.return, p);
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
function Ca(e) {
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
            al(4, t);
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
            eu(t);
          } catch (s) {
            ee(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            eu(t);
          } catch (s) {
            ee(t, i, s);
          }
      }
    } catch (s) {
      ee(t, t.return, s);
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
var qm = Math.ceil, Qo = Ct.ReactCurrentDispatcher, Gu = Ct.ReactCurrentOwner, Ge = Ct.ReactCurrentBatchConfig, I = 0, ae = null, oe = null, pe = 0, Ie = 0, xn = Wt(0), ie = 0, Lr = null, nn = 0, cl = 0, Xu = 0, pr = null, Te = null, Zu = 0, jn = 1 / 0, pt = null, Yo = !1, ru = null, jt = null, uo = !1, zt = null, Go = 0, mr = 0, ou = null, So = -1, ko = 0;
function xe() {
  return I & 6 ? te() : So !== -1 ? So : So = te();
}
function Ft(e) {
  return e.mode & 1 ? I & 2 && pe !== 0 ? pe & -pe : Am.transition !== null ? (ko === 0 && (ko = Fc()), ko) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Kc(e.type)), e) : 1;
}
function rt(e, t, n, r) {
  if (50 < mr)
    throw mr = 0, ou = null, Error(S(185));
  jr(e, n, r), (!(I & 2) || e !== ae) && (e === ae && (!(I & 2) && (cl |= n), ie === 4 && Rt(e, pe)), ze(e, r), n === 1 && I === 0 && !(t.mode & 1) && (jn = te() + 500, il && Vt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Ap(e, t);
  var r = zo(e, e === ae ? pe : 0);
  if (r === 0)
    n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $s(n), t === 1)
      e.tag === 0 ? Im(_a.bind(null, e)) : ff(_a.bind(null, e)), Om(function() {
        !(I & 6) && Vt();
      }), n = null;
    else {
      switch (Dc(r)) {
        case 1:
          n = xu;
          break;
        case 4:
          n = Mc;
          break;
        case 16:
          n = Oo;
          break;
        case 536870912:
          n = jc;
          break;
        default:
          n = Oo;
      }
      n = ad(n, nd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function nd(e, t) {
  if (So = -1, ko = 0, I & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n)
    return null;
  var r = zo(e, e === ae ? pe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Xo(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var l = od();
    (ae !== e || pe !== t) && (pt = null, jn = te() + 500, Jt(e, t));
    do
      try {
        th();
        break;
      } catch (u) {
        rd(e, u);
      }
    while (1);
    Au(), Qo.current = l, I = o, oe !== null ? t = 0 : (ae = null, pe = 0, t = ie);
  }
  if (t !== 0) {
    if (t === 2 && (o = zi(e), o !== 0 && (r = o, t = lu(e, o))), t === 1)
      throw n = Lr, Jt(e, 0), Rt(e, r), ze(e, te()), n;
    if (t === 6)
      Rt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !bm(o) && (t = Xo(e, r), t === 2 && (l = zi(e), l !== 0 && (r = l, t = lu(e, l))), t === 1))
        throw n = Lr, Jt(e, 0), Rt(e, r), ze(e, te()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Yt(e, Te, pt);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = Zu + 500 - te(), 10 < t)) {
            if (zo(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              xe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Di(Yt.bind(null, e, Te, pt), t);
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
          if (r = o, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Di(Yt.bind(null, e, Te, pt), r);
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
  return ze(e, te()), e.callbackNode === n ? nd.bind(null, e) : null;
}
function lu(e, t) {
  var n = pr;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = Xo(e, t), e !== 2 && (t = Te, Te = n, t !== null && iu(t)), e;
}
function iu(e) {
  Te === null ? Te = e : Te.push.apply(Te, e);
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
  for (t &= ~Xu, t &= ~cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - nt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function _a(e) {
  if (I & 6)
    throw Error(S(327));
  Nn();
  var t = zo(e, 0);
  if (!(t & 1))
    return ze(e, te()), null;
  var n = Xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zi(e);
    r !== 0 && (t = r, n = lu(e, r));
  }
  if (n === 1)
    throw n = Lr, Jt(e, 0), Rt(e, t), ze(e, te()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yt(e, Te, pt), ze(e, te()), null;
}
function Ju(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (jn = te() + 500, il && Vt());
  }
}
function rn(e) {
  zt !== null && zt.tag === 0 && !(I & 6) && Nn();
  var t = I;
  I |= 1;
  var n = Ge.transition, r = D;
  try {
    if (Ge.transition = null, D = 1, e)
      return e();
  } finally {
    D = r, Ge.transition = n, I = t, !(I & 6) && Vt();
  }
}
function qu() {
  Ie = xn.current, K(xn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rm(n)), oe !== null)
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch (Lu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Mo();
          break;
        case 3:
          An(), K(Re), K(Se), Bu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          An();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          qu();
      }
      n = n.return;
    }
  if (ae = e, oe = e = Dt(e.current, null), pe = Ie = t, ie = 0, Lr = null, Xu = cl = nn = 0, Te = pr = null, Xt !== null) {
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
function rd(e, t) {
  do {
    var n = oe;
    try {
      if (Au(), go.current = Ko, Vo) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Vo = !1;
      }
      if (tn = 0, se = le = Z = null, fr = !1, Rr = 0, Gu.current = null, n === null || n.return === null) {
        ie = 1, Lr = t, oe = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, s = t;
        if (t = pe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = da(i);
          if (v !== null) {
            v.flags &= -257, pa(v, i, u, l, t), v.mode & 1 && fa(l, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              fa(l, a, t), bu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (Y && u.mode & 1) {
          var P = da(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), pa(P, i, u, l, t), $u(Mn(s, u));
            break e;
          }
        }
        l = s = Mn(s, u), ie !== 4 && (ie = 2), pr === null ? pr = [l] : pr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = Uf(l, s, t);
              la(l, f);
              break e;
            case 1:
              u = s;
              var c = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (jt === null || !jt.has(d)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = Bf(l, u, t);
                la(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      id(n);
    } catch (x) {
      t = x, oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function od() {
  var e = Qo.current;
  return Qo.current = Ko, e === null ? Ko : e;
}
function bu() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ae === null || !(nn & 268435455) && !(cl & 268435455) || Rt(ae, pe);
}
function Xo(e, t) {
  var n = I;
  I |= 2;
  var r = od();
  (ae !== e || pe !== t) && (pt = null, Jt(e, t));
  do
    try {
      eh();
      break;
    } catch (o) {
      rd(e, o);
    }
  while (1);
  if (Au(), I = n, Qo.current = r, oe !== null)
    throw Error(S(261));
  return ae = null, pe = 0, ie;
}
function eh() {
  for (; oe !== null; )
    ld(oe);
}
function th() {
  for (; oe !== null && !Pp(); )
    ld(oe);
}
function ld(e) {
  var t = sd(e.alternate, e, Ie);
  e.memoizedProps = e.pendingProps, t === null ? id(e) : oe = t, Gu.current = null;
}
function id(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gm(n, t), n !== null) {
        n.flags &= 32767, oe = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ie = 6, oe = null;
        return;
      }
    } else if (n = Ym(n, t, Ie), n !== null) {
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
  var r = D, o = Ge.transition;
  try {
    Ge.transition = null, D = 1, nh(e, t, n, r);
  } finally {
    Ge.transition = o, D = r;
  }
  return null;
}
function nh(e, t, n, r) {
  do
    Nn();
  while (zt !== null);
  if (I & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Mp(e, l), e === ae && (oe = ae = null, pe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || uo || (uo = !0, ad(Oo, function() {
    return Nn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Ge.transition, Ge.transition = null;
    var i = D;
    D = 1;
    var u = I;
    I |= 4, Gu.current = null, Zm(e, n), ed(n, e), xm(ji), Lo = !!Mi, ji = Mi = null, e.current = n, Jm(n), Tp(), I = u, D = i, Ge.transition = l;
  } else
    e.current = n;
  if (uo && (uo = !1, zt = e, Go = o), l = e.pendingLanes, l === 0 && (jt = null), Op(n.stateNode), ze(e, te()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yo)
    throw Yo = !1, e = ru, ru = null, e;
  return Go & 1 && e.tag !== 0 && Nn(), l = e.pendingLanes, l & 1 ? e === ou ? mr++ : (mr = 0, ou = e) : mr = 0, Vt(), null;
}
function Nn() {
  if (zt !== null) {
    var e = Dc(Go), t = Ge.transition, n = D;
    try {
      if (Ge.transition = null, D = 16 > e ? 16 : e, zt === null)
        var r = !1;
      else {
        if (e = zt, zt = null, Go = 0, I & 6)
          throw Error(S(331));
        var o = I;
        for (I |= 4, _ = e.current; _ !== null; ) {
          var l = _, i = l.child;
          if (_.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(8, h, l);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, _ = m;
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var p = h.sibling, v = h.return;
                      if (Jf(h), h === a) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, _ = p;
                        break;
                      }
                      _ = v;
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
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, _ = i;
          else
            e:
              for (; _ !== null; ) {
                if (l = _, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, _ = f;
                  break e;
                }
                _ = l.return;
              }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          i = _;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, _ = d;
          else
            e:
              for (i = c; _ !== null; ) {
                if (u = _, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        al(9, u);
                    }
                  } catch (x) {
                    ee(u, u.return, x);
                  }
                if (u === i) {
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
        if (I = o, Vt(), ct && typeof ct.onPostCommitFiberRoot == "function")
          try {
            ct.onPostCommitFiberRoot(tl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      D = n, Ge.transition = t;
    }
  }
  return !1;
}
function Pa(e, t, n) {
  t = Mn(n, t), t = Uf(e, t, 1), e = Mt(e, t, 1), t = xe(), e !== null && (jr(e, 1, t), ze(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3)
    Pa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
          e = Mn(n, e), e = Bf(t, e, 1), t = Mt(t, e, 1), e = xe(), t !== null && (jr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = xe(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (pe & n) === n && (ie === 4 || ie === 3 && (pe & 130023424) === pe && 500 > te() - Zu ? Jt(e, 0) : Xu |= n), ze(e, t);
}
function ud(e, t) {
  t === 0 && (e.mode & 1 ? (t = Jr, Jr <<= 1, !(Jr & 130023424) && (Jr = 4194304)) : t = 1);
  var n = xe();
  e = St(e, t), e !== null && (jr(e, t, n), ze(e, n));
}
function oh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ud(e, n);
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), ud(e, n);
}
var sd;
sd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current)
      Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ne = !1, Qm(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else
    Ne = !1, Y && t.flags & 1048576 && df(t, Do, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wo(e, t), e = t.pendingProps;
      var o = Ln(t, Se.current);
      Tn(t, n), o = Wu(null, t, r, e, o, n);
      var l = Vu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (l = !0, jo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Fu(t), o.updater = sl, t.stateNode = o, o._reactInternals = t, Qi(t, r, e, n), t = Xi(null, t, r, !0, l, n)) : (t.tag = 0, Y && l && zu(t), ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = uh(r), e = be(r, e), o) {
          case 0:
            t = Gi(null, t, r, e, n);
            break e;
          case 1:
            t = ya(null, t, r, e, n);
            break e;
          case 11:
            t = ma(null, t, r, e, n);
            break e;
          case 14:
            t = ha(null, t, r, be(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), Gi(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), ya(e, t, r, o, n);
    case 3:
      e: {
        if (Kf(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, vf(e, t), Ho(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Mn(Error(S(423)), t), t = ga(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Mn(Error(S(424)), t), t = ga(e, t, r, n, o);
            break e;
          } else
            for (Me = At(t.stateNode.containerInfo.firstChild), je = t, Y = !0, tt = null, n = yf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === o) {
            t = kt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wf(t), e === null && Wi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Fi(r, o) ? i = null : l !== null && Fi(r, l) && (t.flags |= 32), Vf(e, t), ke(e, t, i, n), t.child;
    case 6:
      return e === null && Wi(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), ma(e, t, r, o, n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, H(Uo, r._currentValue), r._currentValue = i, l !== null)
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
                    l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Vi(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Vi(i, n, t), i = l.sibling;
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
        ke(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Tn(t, n), o = Xe(o), r = r(o), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = be(r, t.pendingProps), o = be(r.type, o), ha(e, t, r, o, n);
    case 15:
      return Hf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : be(r, o), wo(e, t), t.tag = 1, Oe(r) ? (e = !0, jo(t)) : e = !1, Tn(t, n), Df(t, r, o), Qi(t, r, o, n), Xi(null, t, r, !0, e, n);
    case 19:
      return Yf(e, t, n);
    case 22:
      return Wf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function ad(e, t) {
  return Ac(e, t);
}
function ih(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ye(e, t, n, r) {
  return new ih(e, t, n, r);
}
function es(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function uh(e) {
  if (typeof e == "function")
    return es(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === wu)
      return 11;
    if (e === Su)
      return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function xo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    es(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case dn:
          return qt(n.children, o, l, t);
        case vu:
          i = 8, o |= 8;
          break;
        case yi:
          return e = Ye(12, n, t, o | 2), e.elementType = yi, e.lanes = l, e;
        case gi:
          return e = Ye(13, n, t, o), e.elementType = gi, e.lanes = l, e;
        case vi:
          return e = Ye(19, n, t, o), e.elementType = vi, e.lanes = l, e;
        case vc:
          return fl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yc:
                i = 10;
                break e;
              case gc:
                i = 9;
                break e;
              case wu:
                i = 11;
                break e;
              case Su:
                i = 14;
                break e;
              case _t:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Ye(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function qt(e, t, n, r) {
  return e = Ye(7, e, r, t), e.lanes = n, e;
}
function fl(e, t, n, r) {
  return e = Ye(22, e, r, t), e.elementType = vc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ai(e, t, n) {
  return e = Ye(6, e, null, t), e.lanes = n, e;
}
function ci(e, t, n) {
  return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sh(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function ts(e, t, n, r, o, l, i, u, s) {
  return e = new sh(e, t, n, u, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ye(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fu(l), e;
}
function ah(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function cd(e) {
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
      return cf(e, n, t);
  }
  return t;
}
function fd(e, t, n, r, o, l, i, u, s) {
  return e = ts(n, r, !0, e, o, l, i, u, s), e.context = cd(null), n = e.current, r = xe(), o = Ft(n), l = gt(r, o), l.callback = t ?? null, Mt(n, l, o), e.current.lanes = o, jr(e, o, r), ze(e, r), e;
}
function dl(e, t, n, r) {
  var o = t.current, l = xe(), i = Ft(o);
  return n = cd(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(o, t, i), e !== null && (rt(e, o, i, l), yo(e, o, i)), i;
}
function Zo(e) {
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
function ns(e, t) {
  Ta(e, t), (e = e.alternate) && Ta(e, t);
}
function ch() {
  return null;
}
var dd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function rs(e) {
  this._internalRoot = e;
}
pl.prototype.render = rs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  dl(e, t, null, null);
};
pl.prototype.unmount = rs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rn(function() {
      dl(null, e, null, null);
    }), t[wt] = null;
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++)
      ;
    Nt.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function os(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ml(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Na() {
}
function fh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Zo(i);
        l.call(a);
      };
    }
    var i = fd(t, r, e, 0, null, !1, !1, "", Na);
    return e._reactRootContainer = i, e[wt] = i.current, Er(e.nodeType === 8 ? e.parentNode : e), rn(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Zo(s);
      u.call(a);
    };
  }
  var s = ts(e, 0, !1, null, null, !1, !1, "", Na);
  return e._reactRootContainer = s, e[wt] = s.current, Er(e.nodeType === 8 ? e.parentNode : e), rn(function() {
    dl(t, s, n, r);
  }), s;
}
function hl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Zo(i);
        u.call(s);
      };
    }
    dl(t, i, e, o);
  } else
    i = fh(n, t, e, o, r);
  return Zo(i);
}
Uc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 && (Cu(t, n | 1), ze(t, te()), !(I & 6) && (jn = te() + 500, Vt()));
      }
      break;
    case 13:
      rn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var o = xe();
          rt(r, e, 1, o);
        }
      }), ns(e, 1);
  }
};
Eu = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = xe();
      rt(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
Bc = function(e) {
  if (e.tag === 13) {
    var t = Ft(e), n = St(e, t);
    if (n !== null) {
      var r = xe();
      rt(n, e, t, r);
    }
    ns(e, t);
  }
};
Hc = function() {
  return D;
};
Wc = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Ni = function(e, t, n) {
  switch (t) {
    case "input":
      if (ki(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ll(r);
            if (!o)
              throw Error(S(90));
            Sc(r), ki(r, o);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      t = n.value, t != null && Cn(e, !!n.multiple, t, !1);
  }
};
Rc = Ju;
Oc = rn;
var dh = { usingClientEntryPoint: !1, Events: [Dr, yn, ll, Tc, Nc, Ju] }, qn = { findFiberByHostInstance: Gt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: qn.bundleType, version: qn.version, rendererPackageName: qn.rendererPackageName, rendererConfig: qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ct.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $c(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qn.findFiberByHostInstance || ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
    try {
      tl = so.inject(ph), ct = so;
    } catch {
    }
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh;
Ue.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!os(t))
    throw Error(S(200));
  return ah(e, t, null, n);
};
Ue.createRoot = function(e, t) {
  if (!os(e))
    throw Error(S(299));
  var n = !1, r = "", o = dd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ts(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Er(e.nodeType === 8 ? e.parentNode : e), new rs(t);
};
Ue.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = $c(t), e = e === null ? null : e.stateNode, e;
};
Ue.flushSync = function(e) {
  return rn(e);
};
Ue.hydrate = function(e, t, n) {
  if (!ml(t))
    throw Error(S(200));
  return hl(null, e, t, !0, n);
};
Ue.hydrateRoot = function(e, t, n) {
  if (!os(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = dd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = fd(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Er(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new pl(t);
};
Ue.render = function(e, t, n) {
  if (!ml(t))
    throw Error(S(200));
  return hl(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function(e) {
  if (!ml(e))
    throw Error(S(40));
  return e._reactRootContainer ? (rn(function() {
    hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
Ue.unstable_batchedUpdates = Ju;
Ue.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ml(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return hl(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function pd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd);
    } catch (e) {
      console.error(e);
    }
}
pd(), dc.exports = Ue;
var mh = dc.exports, md, Ra = mh;
md = Ra.createRoot, Ra.hydrateRoot;
function hh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Oa = "$$material";
function me() {
  return me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, me.apply(null, arguments);
}
function yl(e, t) {
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
}(), ve = "-ms-", Jo = "-moz-", j = "-webkit-", hd = "comm", ls = "rule", is = "decl", Sh = "@import", yd = "@keyframes", kh = "@layer", xh = Math.abs, gl = String.fromCharCode, Ch = Object.assign;
function Eh(e, t) {
  return de(e, 0) ^ 45 ? (((t << 2 ^ de(e, 0)) << 2 ^ de(e, 1)) << 2 ^ de(e, 2)) << 2 ^ de(e, 3) : 0;
}
function gd(e) {
  return e.trim();
}
function _h(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function F(e, t, n) {
  return e.replace(t, n);
}
function uu(e, t) {
  return e.indexOf(t);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function $r(e, t, n) {
  return e.slice(t, n);
}
function ut(e) {
  return e.length;
}
function us(e) {
  return e.length;
}
function ao(e, t) {
  return t.push(e), e;
}
function Ph(e, t) {
  return e.map(t).join("");
}
var vl = 1, Fn = 1, vd = 0, Le = 0, re = 0, Hn = "";
function wl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: vl, column: Fn, length: i, return: "" };
}
function bn(e, t) {
  return Ch(wl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Th() {
  return re;
}
function Nh() {
  return re = Le > 0 ? de(Hn, --Le) : 0, Fn--, re === 10 && (Fn = 1, vl--), re;
}
function Fe() {
  return re = Le < vd ? de(Hn, Le++) : 0, Fn++, re === 10 && (Fn = 1, vl++), re;
}
function dt() {
  return de(Hn, Le);
}
function Co() {
  return Le;
}
function Br(e, t) {
  return $r(Hn, e, t);
}
function Ir(e) {
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
function wd(e) {
  return vl = Fn = 1, vd = ut(Hn = e), Le = 0, [];
}
function Sd(e) {
  return Hn = "", e;
}
function Eo(e) {
  return gd(Br(Le - 1, su(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rh(e) {
  for (; (re = dt()) && re < 33; )
    Fe();
  return Ir(e) > 2 || Ir(re) > 3 ? "" : " ";
}
function Oh(e, t) {
  for (; --t && Fe() && !(re < 48 || re > 102 || re > 57 && re < 65 || re > 70 && re < 97); )
    ;
  return Br(e, Co() + (t < 6 && dt() == 32 && Fe() == 32));
}
function su(e) {
  for (; Fe(); )
    switch (re) {
      case e:
        return Le;
      case 34:
      case 39:
        e !== 34 && e !== 39 && su(re);
        break;
      case 40:
        e === 41 && su(e);
        break;
      case 92:
        Fe();
        break;
    }
  return Le;
}
function zh(e, t) {
  for (; Fe() && e + re !== 47 + 10; )
    if (e + re === 42 + 42 && dt() === 47)
      break;
  return "/*" + Br(t, Le - 1) + "*" + gl(e === 47 ? e : Fe());
}
function Lh(e) {
  for (; !Ir(dt()); )
    Fe();
  return Br(e, Le);
}
function $h(e) {
  return Sd(_o("", null, null, null, [""], e = wd(e), 0, [0], e));
}
function _o(e, t, n, r, o, l, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, v = 0, g = 0, y = 1, P = 1, f = 1, c = 0, d = "", w = o, x = l, C = r, k = d; P; )
    switch (g = c, c = Fe()) {
      case 40:
        if (g != 108 && de(k, m - 1) == 58) {
          uu(k += F(Eo(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Eo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Rh(g);
        break;
      case 92:
        k += Oh(Co() - 1, 7);
        continue;
      case 47:
        switch (dt()) {
          case 42:
          case 47:
            ao(Ih(zh(Fe(), Co()), t, n), s);
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
            P = 0;
          case 59 + h:
            f == -1 && (k = F(k, /\f/g, "")), v > 0 && ut(k) - m && ao(v > 32 ? La(k + ";", r, n, m - 1) : La(F(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (ao(C = za(k, t, n, a, h, o, u, d, w = [], x = [], m), l), c === 123)
              if (h === 0)
                _o(k, t, C, C, w, l, m, u, x);
              else
                switch (p === 99 && de(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(e, C, C, r && ao(za(e, C, C, 0, 0, o, u, d, o, w = [], m), x), o, x, m, u, r ? w : x);
                    break;
                  default:
                    _o(k, C, C, C, [""], x, 0, u, x);
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
          else if (c == 125 && y++ == 0 && Nh() == 125)
            continue;
        }
        switch (k += gl(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (ut(k) - 1) * f, f = 1;
            break;
          case 64:
            dt() === 45 && (k += Eo(Fe())), p = dt(), h = m = ut(d = k += Lh(Co())), c++;
            break;
          case 45:
            g === 45 && ut(k) == 2 && (y = 0);
        }
    }
  return l;
}
function za(e, t, n, r, o, l, i, u, s, a, h) {
  for (var m = o - 1, p = o === 0 ? l : [""], v = us(p), g = 0, y = 0, P = 0; g < r; ++g)
    for (var f = 0, c = $r(e, m + 1, m = xh(y = i[g])), d = e; f < v; ++f)
      (d = gd(y > 0 ? p[f] + " " + c : F(c, /&\f/g, p[f]))) && (s[P++] = d);
  return wl(e, t, n, o === 0 ? ls : u, s, a, h);
}
function Ih(e, t, n) {
  return wl(e, t, n, hd, gl(Th()), $r(e, 2, -2), 0);
}
function La(e, t, n, r) {
  return wl(e, t, n, is, $r(e, 0, r), $r(e, r + 1, -1), r);
}
function Rn(e, t) {
  for (var n = "", r = us(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Ah(e, t, n, r) {
  switch (e.type) {
    case kh:
      if (e.children.length)
        break;
    case Sh:
    case is:
      return e.return = e.return || e.value;
    case hd:
      return "";
    case yd:
      return e.return = e.value + "{" + Rn(e.children, r) + "}";
    case ls:
      e.value = e.props.join(",");
  }
  return ut(n = Rn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Mh(e) {
  var t = us(e);
  return function(n, r, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, o, l) || "";
    return i;
  };
}
function jh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function kd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Fh = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = dt(), o === 38 && l === 12 && (n[r] = 1), !Ir(l); )
    Fe();
  return Br(t, Le);
}, Dh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ir(o)) {
      case 0:
        o === 38 && dt() === 12 && (n[r] = 1), t[r] += Fh(Le - 1, n, r);
        break;
      case 2:
        t[r] += Eo(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = dt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += gl(o);
    }
  while (o = Fe());
  return t;
}, Uh = function(t, n) {
  return Sd(Dh(wd(t), n));
}, $a = /* @__PURE__ */ new WeakMap(), Bh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !$a.get(r)) && !o) {
      $a.set(t, !0);
      for (var l = [], i = Uh(n, l), u = r.props, s = 0, a = 0; s < i.length; s++)
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
function xd(e, t) {
  switch (Eh(e, t)) {
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
      return j + e + Jo + e + ve + e + e;
    case 6828:
    case 4268:
      return j + e + ve + e + e;
    case 6165:
      return j + e + ve + "flex-" + e + e;
    case 5187:
      return j + e + F(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return j + e + ve + "flex-item-" + F(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + ve + "flex-line-pack" + F(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + ve + F(e, "shrink", "negative") + e;
    case 5292:
      return j + e + ve + F(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + F(e, "-grow", "") + j + e + ve + F(e, "grow", "positive") + e;
    case 4554:
      return j + F(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return F(F(F(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return F(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return F(F(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return F(e, /(.+)-inline(.+)/, j + "$1$2") + e;
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
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45)
              break;
          case 102:
            return F(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + Jo + (de(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~uu(e, "stretch") ? xd(F(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (de(e, t + 1) !== 115)
        break;
    case 6444:
      switch (de(e, ut(e) - 3 - (~uu(e, "!important") && 10))) {
        case 107:
          return F(e, ":", ":" + j) + e;
        case 101:
          return F(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (de(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return j + e + ve + F(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + ve + F(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + ve + F(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + ve + e + e;
  }
  return e;
}
var Wh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case is:
        t.return = xd(t.value, t.length);
        break;
      case yd:
        return Rn([bn(t, {
          value: F(t.value, "@", "@" + j)
        })], o);
      case ls:
        if (t.length)
          return Ph(t.props, function(l) {
            switch (_h(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Rn([bn(t, {
                  props: [F(l, /:(read-\w+)/, ":" + Jo + "$1")]
                })], o);
              case "::placeholder":
                return Rn([bn(t, {
                  props: [F(l, /:(plac\w+)/, ":" + j + "input-$1")]
                }), bn(t, {
                  props: [F(l, /:(plac\w+)/, ":" + Jo + "$1")]
                }), bn(t, {
                  props: [F(l, /:(plac\w+)/, ve + "input-$1")]
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
    var h, m = [Ah, jh(function(y) {
      h.insert(y);
    })], p = Mh(a.concat(o, m)), v = function(P) {
      return Rn($h(P), p);
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
}, Cd = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce = typeof Symbol == "function" && Symbol.for, ss = ce ? Symbol.for("react.element") : 60103, as = ce ? Symbol.for("react.portal") : 60106, Sl = ce ? Symbol.for("react.fragment") : 60107, kl = ce ? Symbol.for("react.strict_mode") : 60108, xl = ce ? Symbol.for("react.profiler") : 60114, Cl = ce ? Symbol.for("react.provider") : 60109, El = ce ? Symbol.for("react.context") : 60110, cs = ce ? Symbol.for("react.async_mode") : 60111, _l = ce ? Symbol.for("react.concurrent_mode") : 60111, Pl = ce ? Symbol.for("react.forward_ref") : 60112, Tl = ce ? Symbol.for("react.suspense") : 60113, Qh = ce ? Symbol.for("react.suspense_list") : 60120, Nl = ce ? Symbol.for("react.memo") : 60115, Rl = ce ? Symbol.for("react.lazy") : 60116, Yh = ce ? Symbol.for("react.block") : 60121, Gh = ce ? Symbol.for("react.fundamental") : 60117, Xh = ce ? Symbol.for("react.responder") : 60118, Zh = ce ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ss:
        switch (e = e.type, e) {
          case cs:
          case _l:
          case Sl:
          case xl:
          case kl:
          case Tl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case El:
              case Pl:
              case Rl:
              case Nl:
              case Cl:
                return e;
              default:
                return t;
            }
        }
      case as:
        return t;
    }
  }
}
function Ed(e) {
  return He(e) === _l;
}
U.AsyncMode = cs;
U.ConcurrentMode = _l;
U.ContextConsumer = El;
U.ContextProvider = Cl;
U.Element = ss;
U.ForwardRef = Pl;
U.Fragment = Sl;
U.Lazy = Rl;
U.Memo = Nl;
U.Portal = as;
U.Profiler = xl;
U.StrictMode = kl;
U.Suspense = Tl;
U.isAsyncMode = function(e) {
  return Ed(e) || He(e) === cs;
};
U.isConcurrentMode = Ed;
U.isContextConsumer = function(e) {
  return He(e) === El;
};
U.isContextProvider = function(e) {
  return He(e) === Cl;
};
U.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ss;
};
U.isForwardRef = function(e) {
  return He(e) === Pl;
};
U.isFragment = function(e) {
  return He(e) === Sl;
};
U.isLazy = function(e) {
  return He(e) === Rl;
};
U.isMemo = function(e) {
  return He(e) === Nl;
};
U.isPortal = function(e) {
  return He(e) === as;
};
U.isProfiler = function(e) {
  return He(e) === xl;
};
U.isStrictMode = function(e) {
  return He(e) === kl;
};
U.isSuspense = function(e) {
  return He(e) === Tl;
};
U.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Sl || e === _l || e === xl || e === kl || e === Tl || e === Qh || typeof e == "object" && e !== null && (e.$$typeof === Rl || e.$$typeof === Nl || e.$$typeof === Cl || e.$$typeof === El || e.$$typeof === Pl || e.$$typeof === Gh || e.$$typeof === Xh || e.$$typeof === Zh || e.$$typeof === Yh);
};
U.typeOf = He;
Cd.exports = U;
var Jh = Cd.exports, _d = Jh, qh = {
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
}, Pd = {};
Pd[_d.ForwardRef] = qh;
Pd[_d.Memo] = bh;
var ey = !0;
function Td(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var fs = function(t, n, r) {
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
}, ds = function(t, n, r) {
  fs(t, n, r);
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
}, ry = !1, oy = /[A-Z]|^ms/g, ly = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Nd = function(t) {
  return t.charCodeAt(1) === 45;
}, Ia = function(t) {
  return t != null && typeof t != "boolean";
}, fi = /* @__PURE__ */ kd(function(e) {
  return Nd(e) ? e : e.replace(oy, "-$&").toLowerCase();
}), Aa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ly, function(r, o, l) {
          return st = {
            name: o,
            styles: l,
            next: st
          }, o;
        });
  }
  return ny[t] !== 1 && !Nd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, iy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return uy(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = st, a = n(e);
        return st = s, Ar(e, t, a);
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
      r += Ar(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += l + "{" + t[u] + "}" : Ia(u) && (r += fi(l) + ":" + Aa(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && ry)
          throw new Error(iy);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Ia(i[s]) && (r += fi(l) + ":" + Aa(l, i[s]) + ";");
        else {
          var a = Ar(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += fi(l) + ":" + a + ";";
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
var Ma = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function Ol(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  st = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += Ar(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += Ar(n, t, e[u]), r) {
      var s = l;
      o += s[u];
    }
  Ma.lastIndex = 0;
  for (var a = "", h; (h = Ma.exec(o)) !== null; )
    a += "-" + h[1];
  var m = ty(o) + a;
  return {
    name: m,
    styles: o,
    next: st
  };
}
var sy = function(t) {
  return t();
}, Rd = mi["useInsertionEffect"] ? mi["useInsertionEffect"] : !1, Od = Rd || sy, ja = Rd || O.useLayoutEffect, ay = !1, zd = /* @__PURE__ */ O.createContext(
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
zd.Provider;
var ps = function(t) {
  return /* @__PURE__ */ O.forwardRef(function(n, r) {
    var o = O.useContext(zd);
    return t(n, o, r);
  });
}, Hr = /* @__PURE__ */ O.createContext({}), ms = {}.hasOwnProperty, au = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", cy = function(t, n) {
  var r = {};
  for (var o in n)
    ms.call(n, o) && (r[o] = n[o]);
  return r[au] = t, r;
}, fy = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return fs(n, r, o), Od(function() {
    return ds(n, r, o);
  }), null;
}, dy = /* @__PURE__ */ ps(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[au], l = [r], i = "";
  typeof e.className == "string" ? i = Td(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = Ol(l, void 0, O.useContext(Hr));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ms.call(e, a) && a !== "css" && a !== au && !ay && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(fy, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, s));
}), py = dy, di = { exports: {} }, Fa;
function my() {
  return Fa || (Fa = 1, function(e) {
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
  }(di)), di.exports;
}
my();
var Da = function(t, n) {
  var r = arguments;
  if (n == null || !ms.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = py, l[1] = cy(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return O.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Da || (Da = {}));
var hy = /* @__PURE__ */ ps(function(e, t) {
  var n = e.styles, r = Ol([n], void 0, O.useContext(Hr)), o = O.useRef();
  return ja(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), ja(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && ds(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), yy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, gy = /* @__PURE__ */ kd(
  function(e) {
    return yy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), vy = !1, wy = gy, Sy = function(t) {
  return t !== "theme";
}, Ua = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? wy : Sy;
}, Ba = function(t, n, r) {
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
  return fs(n, r, o), Od(function() {
    return ds(n, r, o);
  }), null;
}, xy = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var u = Ba(t, n, r), s = u || Ua(o), a = !s("as");
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
    var y = ps(function(P, f, c) {
      var d = a && P.as || o, w = "", x = [], C = P;
      if (P.theme == null) {
        C = {};
        for (var k in P)
          C[k] = P[k];
        C.theme = O.useContext(Hr);
      }
      typeof P.className == "string" ? w = Td(f.registered, x, P.className) : P.className != null && (w = P.className + " ");
      var T = Ol(m.concat(x), f.registered, C);
      w += f.key + "-" + T.name, i !== void 0 && (w += " " + i);
      var B = a && u === void 0 ? Ua(d) : s, R = {};
      for (var G in P)
        a && G === "as" || B(G) && (R[G] = P[G]);
      return R.className = w, c && (R.ref = c), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(ky, {
        cache: f,
        serialized: T,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ O.createElement(d, R));
    });
    return y.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && vy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(P, f) {
      var c = e(P, me({}, n, f, {
        shouldForwardProp: Ba(y, f, !0)
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
], Ha = xy.bind(null);
Cy.forEach(function(e) {
  Ha[e] = Ha(e);
});
function Ey(e) {
  return e == null || Object.keys(e).length === 0;
}
function _y(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ A(hy, {
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
const Wa = [];
function Py(e) {
  return Wa[0] = e, Ol(Wa);
}
function an(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ld(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !an(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ld(e[n]);
  }), t;
}
function qo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? me({}, e) : e;
  return an(e) && an(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ O.isValidElement(t[o]) ? r[o] = t[o] : an(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && an(e[o]) ? r[o] = qo(e[o], t[o], n) : n.clone ? r[o] = an(t[o]) ? Ld(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Ty = ["values", "unit", "step"], Ny = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => me({}, n, {
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
  } = e, o = yl(e, Ty), l = Ny(t), i = Object.keys(l);
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
  return me({
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
function hr(e, t) {
  return t ? qo(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const hs = {
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
  up: (e) => `@media (min-width:${hs[e]}px)`
};
function xt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Va;
    return t.reduce((i, u, s) => (i[l.up(l.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Va;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(l.values || hs).indexOf(u) !== -1) {
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
function Ka(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function $d(e) {
  if (typeof e != "string")
    throw new Error(hh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function bo(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = zl(e, n) || r, t && (o = t(o, r, e)), o;
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
    const u = i[t], s = i.theme, a = zl(s, r) || {};
    return xt(i, u, (m) => {
      let p = bo(a, o, m);
      return m === p && typeof m == "string" && (p = bo(a, o, `${t}${m === "default" ? "" : $d(m)}`, m)), n === !1 ? p : {
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
}, Ay = {
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
}, My = $y((e) => {
  if (e.length > 2)
    if (Qa[e])
      e = Qa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Iy[t], o = Ay[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), ys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], gs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ys, ...gs];
function Wr(e, t, n, r) {
  var o;
  const l = (o = zl(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function Id(e) {
  return Wr(e, "spacing", 8);
}
function Vr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function jy(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Vr(t, n), r), {});
}
function Fy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = My(n), l = jy(o, r), i = e[n];
  return xt(e, i, l);
}
function Ad(e, t) {
  const n = Id(e.theme);
  return Object.keys(e).map((r) => Fy(e, t, r, n)).reduce(hr, {});
}
function q(e) {
  return Ad(e, ys);
}
q.propTypes = {};
q.filterProps = ys;
function b(e) {
  return Ad(e, gs);
}
b.propTypes = {};
b.filterProps = gs;
function Dy(e = 8) {
  if (e.mui)
    return e;
  const t = Id({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((l) => {
    const i = t(l);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Ll(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? hr(o, t[l](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Qe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Je(e, t) {
  return ne({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Uy = Je("border", Qe), By = Je("borderTop", Qe), Hy = Je("borderRight", Qe), Wy = Je("borderBottom", Qe), Vy = Je("borderLeft", Qe), Ky = Je("borderColor"), Qy = Je("borderTopColor"), Yy = Je("borderRightColor"), Gy = Je("borderBottomColor"), Xy = Je("borderLeftColor"), Zy = Je("outline", Qe), Jy = Je("outlineColor"), $l = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Wr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Vr(t, r)
    });
    return xt(e, e.borderRadius, n);
  }
  return null;
};
$l.propTypes = {};
$l.filterProps = ["borderRadius"];
Ll(Uy, By, Hy, Wy, Vy, Ky, Qy, Yy, Gy, Xy, $l, Zy, Jy);
const Il = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      gap: Vr(t, r)
    });
    return xt(e, e.gap, n);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ["gap"];
const Al = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Vr(t, r)
    });
    return xt(e, e.columnGap, n);
  }
  return null;
};
Al.propTypes = {};
Al.filterProps = ["columnGap"];
const Ml = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Wr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Vr(t, r)
    });
    return xt(e, e.rowGap, n);
  }
  return null;
};
Ml.propTypes = {};
Ml.filterProps = ["rowGap"];
const qy = ne({
  prop: "gridColumn"
}), by = ne({
  prop: "gridRow"
}), eg = ne({
  prop: "gridAutoFlow"
}), tg = ne({
  prop: "gridAutoColumns"
}), ng = ne({
  prop: "gridAutoRows"
}), rg = ne({
  prop: "gridTemplateColumns"
}), og = ne({
  prop: "gridTemplateRows"
}), lg = ne({
  prop: "gridTemplateAreas"
}), ig = ne({
  prop: "gridArea"
});
Ll(Il, Al, Ml, qy, by, eg, tg, ng, rg, og, lg, ig);
function On(e, t) {
  return t === "grey" ? t : e;
}
const ug = ne({
  prop: "color",
  themeKey: "palette",
  transform: On
}), sg = ne({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: On
}), ag = ne({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: On
});
Ll(ug, sg, ag);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const cg = ne({
  prop: "width",
  transform: Ae
}), vs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const l = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || hs[n];
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
vs.filterProps = ["maxWidth"];
const fg = ne({
  prop: "minWidth",
  transform: Ae
}), dg = ne({
  prop: "height",
  transform: Ae
}), pg = ne({
  prop: "maxHeight",
  transform: Ae
}), mg = ne({
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
const hg = ne({
  prop: "boxSizing"
});
Ll(cg, vs, fg, dg, pg, mg, hg);
const yg = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qe
  },
  borderTop: {
    themeKey: "borders",
    transform: Qe
  },
  borderRight: {
    themeKey: "borders",
    transform: Qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qe
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
    transform: Qe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: $l
  },
  // palette
  color: {
    themeKey: "palette",
    transform: On
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: On
  },
  backgroundColor: {
    themeKey: "palette",
    transform: On
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
    style: Il
  },
  rowGap: {
    style: Ml
  },
  columnGap: {
    style: Al
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
    style: vs
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
}, Md = yg;
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
    const p = zl(o, a) || {};
    return m ? m(i) : xt(i, r, (g) => {
      let y = bo(p, h, g);
      return g === y && typeof g == "string" && (y = bo(p, h, `${n}${g === "default" ? "" : $d(g)}`, g)), s === !1 ? y : {
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
    const u = (r = l.unstable_sxConfig) != null ? r : Md;
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
              v = hr(v, e(g, y, l, u));
            else {
              const P = xt({
                theme: l
              }, y, (f) => ({
                [g]: f
              }));
              gg(P, y) ? v[g] = t({
                sx: y,
                theme: l,
                nested: !0
              }) : v = hr(v, P);
            }
          else
            v = hr(v, e(g, y, l, u));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Ka(p, v)
      } : Ka(p, v);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const jd = wg();
jd.filterProps = ["sx"];
const Sg = jd;
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
  } = e, i = yl(e, xg), u = Ry(n), s = Dy(o);
  let a = qo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: me({
      mode: "light"
    }, r),
    spacing: s,
    shape: me({}, zy, l)
  }, i);
  return a.applyStyles = kg, a = t.reduce((h, m) => qo(h, m), a), a.unstable_sxConfig = me({}, Md, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return Sg({
      sx: m,
      theme: this
    });
  }, a;
}
function Eg(e) {
  return Object.keys(e).length === 0;
}
function ws(e = null) {
  const t = O.useContext(Hr);
  return !t || Eg(t) ? e : t;
}
const _g = Cg();
function Pg(e = _g) {
  return ws(e);
}
function pi(e) {
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
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => pi(typeof i == "function" ? i(o) : i)) : l = pi(l)), /* @__PURE__ */ A(_y, {
    styles: l
  });
}
const Ng = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Rg = Ng;
let Ya = 0;
function Og(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Ya += 1, n(`mui-${Ya}`));
  }, [t]), r;
}
const Ga = mi["useId".toString()];
function zg(e) {
  if (Ga !== void 0) {
    const t = Ga();
    return e ?? t;
  }
  return Og(e);
}
const Lg = /* @__PURE__ */ O.createContext(null), Fd = Lg;
function Dd() {
  return O.useContext(Fd);
}
const $g = typeof Symbol == "function" && Symbol.for, Ig = $g ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ag(e, t) {
  return typeof t == "function" ? t(e) : me({}, e, t);
}
function Mg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Dd(), o = O.useMemo(() => {
    const l = r === null ? n : Ag(r, n);
    return l != null && (l[Ig] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ A(Fd.Provider, {
    value: o,
    children: t
  });
}
const jg = ["value"], Fg = /* @__PURE__ */ O.createContext();
function Dg(e) {
  let {
    value: t
  } = e, n = yl(e, jg);
  return /* @__PURE__ */ A(Fg.Provider, me({
    value: t ?? !0
  }, n));
}
const Ug = /* @__PURE__ */ O.createContext(void 0);
function Bg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ A(Ug.Provider, {
    value: e,
    children: t
  });
}
function Hg(e) {
  const t = ws(), n = zg() || "", {
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
  }, [o, n]), o ? /* @__PURE__ */ A(Tg, {
    styles: o
  }) : null;
}
const Xa = {};
function Za(e, t, n, r = !1) {
  return O.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(o), i = e ? me({}, t, {
        [e]: l
      }) : l;
      return r ? () => i : i;
    }
    return e ? me({}, t, {
      [e]: n
    }) : me({}, t, n);
  }, [e, t, n, r]);
}
function Wg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = ws(Xa), l = Dd() || Xa, i = Za(r, o, n), u = Za(r, l, n, !0), s = i.direction === "rtl", a = Hg(i);
  return /* @__PURE__ */ A(Mg, {
    theme: u,
    children: /* @__PURE__ */ A(Hr.Provider, {
      value: i,
      children: /* @__PURE__ */ A(Dg, {
        value: s,
        children: /* @__PURE__ */ We(Bg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Vg = ["theme"];
function er(e) {
  let {
    theme: t
  } = e, n = yl(e, Vg);
  const r = t[Oa];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = me({}, r, {
    vars: null
  }) : t && !t.vars && (o = me({}, t, {
    vars: null
  }))), /* @__PURE__ */ A(Wg, me({}, n, {
    themeId: r ? Oa : void 0,
    theme: o
  }));
}
const tr = 1200, sn = 1200;
function Ja(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.onload = () => t(r), r.onerror = () => n(new Error(`Could not load ${e}`)), r.src = e;
  });
}
function Kg(e) {
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
function Qg({
  cutoutUrl: e,
  cutoutAssetId: t,
  cutoutFingerprint: n,
  backgrounds: r,
  initial: o,
  onSave: l,
  buildAssetUrl: i
}) {
  var Q;
  const u = O.useRef(null), [s, a] = O.useState(null), [h, m] = O.useState({}), [p, v] = O.useState(
    (o == null ? void 0 : o.backgroundId) ?? ((Q = r[0]) == null ? void 0 : Q.id) ?? null
  ), [g, y] = O.useState(!1), [P, f] = O.useState(null), [c, d] = O.useState(null), [w, x] = O.useState(!1), [C, k] = O.useState(!1), T = O.useRef(null), B = O.useCallback(
    (N) => ({
      cx: N.anchorX,
      by: N.anchorBottom,
      h: N.headshotHeight,
      flipped: !1,
      cutoutAssetId: t,
      cutoutFingerprint: n
    }),
    [t, n]
  ), [R, G] = O.useState(() => o ? o.layout : r[0] ? B(r[0]) : { cx: 0.5, by: 1, h: 0.85, flipped: !1, cutoutAssetId: t, cutoutFingerprint: n }), _e = r.find((N) => N.id === p) ?? null, Kt = !!o && !C && !!o.layout.cutoutFingerprint && o.layout.cutoutFingerprint !== n;
  O.useEffect(() => {
    let N = !1;
    return (async () => {
      try {
        const [M, ...W] = await Promise.all([
          Ja(e),
          ...r.map((ue) => Ja(ue.url))
        ]);
        if (N)
          return;
        a(M), x(!Kg(M));
        const $e = {};
        r.forEach((ue, Pe) => $e[ue.id] = W[Pe]), m($e);
      } catch (M) {
        N || f(M.message);
      }
    })(), () => {
      N = !0;
    };
  }, [e, r]), O.useEffect(() => {
    const N = u.current;
    if (!N || !s || !_e)
      return;
    const M = h[_e.id];
    if (!M)
      return;
    const W = N.getContext("2d");
    if (!W)
      return;
    W.clearRect(0, 0, tr, sn);
    const $e = Math.max(tr / M.naturalWidth, sn / M.naturalHeight), ue = M.naturalWidth * $e, Pe = M.naturalHeight * $e;
    W.drawImage(M, (tr - ue) / 2, (sn - Pe) / 2, ue, Pe);
    const Fl = sn * R.h, Ss = Fl * (s.naturalWidth / s.naturalHeight);
    W.save(), W.translate(R.cx * tr, R.by * sn), R.flipped && W.scale(-1, 1), W.drawImage(s, -Ss / 2, -Fl, Ss, Fl), W.restore();
  }, [s, h, _e, R]);
  const Kr = (N) => {
    v(N.id), G(B(N)), k(!0);
  }, jl = (N) => {
    N.currentTarget.setPointerCapture(N.pointerId), T.current = { startX: N.clientX, startY: N.clientY, cx: R.cx, by: R.by };
  }, Wn = (N) => {
    const M = T.current;
    if (!M)
      return;
    const W = N.currentTarget.getBoundingClientRect(), $e = (N.clientX - M.startX) / W.width, ue = (N.clientY - M.startY) / W.height;
    G((Pe) => ({ ...Pe, cx: M.cx + $e, by: M.by + ue }));
  }, Vn = () => {
    T.current = null;
  }, E = (N) => {
    G((M) => {
      const W = M.h * (N.deltaY < 0 ? 1.03 : 0.97);
      return { ...M, h: Math.min(1.6, Math.max(0.1, W)) };
    });
  }, z = () => _e && G(B(_e)), L = O.useCallback(async () => {
    const N = u.current;
    if (!(!N || !_e)) {
      y(!0), f(null), d(null);
      try {
        const M = await new Promise(
          ($e, ue) => N.toBlob(
            (Pe) => Pe ? $e(Pe) : ue(new Error("Canvas export failed")),
            "image/jpeg",
            0.92
          )
        ), W = await l(M, { ...R, cutoutAssetId: t, cutoutFingerprint: n }, _e);
        d(W);
      } catch (M) {
        f(M.message);
      } finally {
        y(!1);
      }
    }
  }, [R, l, _e, t, n]);
  return /* @__PURE__ */ We("div", { style: { display: "grid", gridTemplateColumns: "minmax(0, 1fr) 260px", gap: 16 }, children: [
    /* @__PURE__ */ We("div", { children: [
      w && /* @__PURE__ */ A(
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
      Kt && /* @__PURE__ */ We(
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
            /* @__PURE__ */ A("span", { children: "The cutout has changed since this was saved." }),
            /* @__PURE__ */ A("button", { onClick: () => k(!0), children: "Keep layout" })
          ]
        }
      ),
      /* @__PURE__ */ A(
        "canvas",
        {
          ref: u,
          width: tr,
          height: sn,
          style: {
            width: "100%",
            aspectRatio: "1 / 1",
            touchAction: "none",
            cursor: "grab",
            borderRadius: 8
          },
          onPointerDown: jl,
          onPointerMove: Wn,
          onPointerUp: Vn,
          onWheel: E
        }
      )
    ] }),
    /* @__PURE__ */ We("aside", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
      /* @__PURE__ */ We("div", { children: [
        /* @__PURE__ */ A("strong", { children: "Background" }),
        /* @__PURE__ */ A("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }, children: r.map((N) => /* @__PURE__ */ We(
          "button",
          {
            onClick: () => Kr(N),
            style: {
              padding: 0,
              border: N.id === p ? "2px solid #0a6cff" : "2px solid transparent",
              borderRadius: 6,
              background: "none",
              cursor: "pointer"
            },
            children: [
              /* @__PURE__ */ A(
                "img",
                {
                  src: N.url,
                  alt: N.name,
                  style: { width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 4 }
                }
              ),
              /* @__PURE__ */ A("div", { style: { fontSize: 12, padding: "4px 0" }, children: N.name })
            ]
          },
          N.id
        )) })
      ] }),
      /* @__PURE__ */ We("label", { children: [
        "Size",
        /* @__PURE__ */ A(
          "input",
          {
            type: "range",
            min: 0.2,
            max: 1.6,
            step: 0.01,
            value: R.h,
            onChange: (N) => G((M) => ({ ...M, h: Number(N.target.value) })),
            style: { width: "100%" }
          }
        )
      ] }),
      /* @__PURE__ */ We("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ A("button", { onClick: () => G((N) => ({ ...N, flipped: !N.flipped })), children: "Flip" }),
        /* @__PURE__ */ A("button", { onClick: z, children: "Reset" })
      ] }),
      /* @__PURE__ */ A(
        "button",
        {
          onClick: L,
          disabled: g || !s || w,
          style: { padding: "10px 14px" },
          children: g ? "Saving..." : "Save as new asset"
        }
      ),
      c !== null && /* @__PURE__ */ We("div", { role: "status", style: { color: "#1a7f37", fontSize: 13 }, children: [
        "Saved as a new asset.",
        " ",
        i ? /* @__PURE__ */ A("a", { href: i(c), children: "Open it" }) : `Asset id ${c}.`
      ] }),
      P && /* @__PURE__ */ A("div", { role: "alert", style: { color: "#b00020", fontSize: 13 }, children: P })
    ] })
  ] });
}
function Yg(e = /* @__PURE__ */ new Date()) {
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
  const n = t, r = Number(n.asset_id ?? n.assetId ?? n.id);
  return Number.isSafeInteger(r) && r > 0 ? r : null;
}
function Xg(e) {
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
function cn(e, ...t) {
  if (e) {
    for (const n of t)
      if (e[n] != null && e[n] !== "")
        return e[n];
  }
}
function Zg(e) {
  const t = cn(e, "isActive", "IsActive");
  return t !== !1 && t !== "false";
}
function Jg(e) {
  const t = String(e ?? "").match(/\/api\/entities\/(\d+)/i);
  if (!t)
    return null;
  const n = Number(t[1]);
  return Number.isSafeInteger(n) && n > 0 ? n : null;
}
function qg(e) {
  var t, n, r, o, l, i, u, s, a;
  return ((r = (n = (t = e == null ? void 0 : e.renditions) == null ? void 0 : t.preview) == null ? void 0 : n[0]) == null ? void 0 : r.href) ?? ((i = (l = (o = e == null ? void 0 : e.renditions) == null ? void 0 : o.downloadOriginal) == null ? void 0 : l[0]) == null ? void 0 : i.href) ?? ((a = (s = (u = e == null ? void 0 : e.renditions) == null ? void 0 : u.original) == null ? void 0 : s[0]) == null ? void 0 : a.href) ?? null;
}
async function qa(e, t) {
  var o, l, i;
  if (!((o = e.raw) != null && o.getAsync))
    return t ?? null;
  const n = Number(t == null ? void 0 : t.id) || Jg(((l = t == null ? void 0 : t.full) == null ? void 0 : l.href) ?? (t == null ? void 0 : t.href) ?? ((i = t == null ? void 0 : t.self) == null ? void 0 : i.href));
  if (!n)
    return t ?? null;
  const r = await e.raw.getAsync(`/api/entities/${n}`);
  return r.isSuccessStatusCode && r.content ? r.content : t;
}
function bg(e) {
  var r;
  if (!e)
    return null;
  const t = Object.entries(e).find(
    ([o]) => o.toLowerCase() === "epamcomposerbackgroundtoasset"
  ), n = t == null ? void 0 : t[1];
  return (n == null ? void 0 : n.href) ?? ((r = n == null ? void 0 : n.self) == null ? void 0 : r.href) ?? null;
}
async function ev(e) {
  var o, l, i, u;
  if (!((o = e.raw) != null && o.getAsync))
    throw new Error("Content Hub client is not available");
  const t = encodeURIComponent("Definition.Name=='EPAM.ComposerBackground'"), n = await e.raw.getAsync(
    `/api/entities/query?query=${t}&take=20`
  );
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error("Failed to load composer backgrounds");
  const r = [];
  for (const s of n.content.items ?? []) {
    const a = await qa(e, s);
    if (!a || !Zg(a.properties))
      continue;
    const h = bg(a.relations);
    if (!h)
      continue;
    const m = await e.raw.getAsync(h);
    if (!m.isSuccessStatusCode)
      continue;
    const p = ((i = (l = m.content) == null ? void 0 : l.items) == null ? void 0 : i[0]) ?? ((u = m.content) == null ? void 0 : u.parent), v = await qa(e, p), g = qg(v);
    if (!g)
      continue;
    const y = a.properties ?? {};
    r.push({
      id: a.id,
      name: String(cn(y, "backgroundName", "BackgroundName") ?? "Background"),
      url: g,
      anchorX: Number(cn(y, "defaultAnchorX", "DefaultAnchorX") ?? 0.5),
      anchorBottom: Number(cn(y, "defaultAnchorBottom", "DefaultAnchorBottom") ?? 1),
      headshotHeight: Number(
        cn(y, "defaultHeadshotHeight", "DefaultHeadshotHeight") ?? 0.85
      ),
      sortOrder: Number(cn(y, "sortOrder", "SortOrder") ?? 100)
    });
  }
  return r.sort((s, a) => s.sortOrder - a.sortOrder);
}
function tv(e) {
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
async function nv(e, t) {
  var o;
  if (!((o = e.raw) != null && o.getAsync))
    return null;
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  if (!n.isSuccessStatusCode || !n.content)
    return null;
  const r = n.content.properties ?? {};
  return tv(r.CompositionLayout ?? r.compositionLayout);
}
async function rv(e, t, n) {
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
  const i = Gg(l == null ? void 0 : l.content) || Xg(l == null ? void 0 : l.responseHeaders);
  if (!i)
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  return i;
}
async function ov(e, t) {
  var i;
  const r = `${t.fileName.replace(/\.[^.]+$/, "") || "composed"}-${Yg()}.jpg`, o = await rv(e, t.blob, r);
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
function cu(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "string")
    return e;
  if (typeof e == "number" || typeof e == "boolean")
    return String(e);
  if (Array.isArray(e))
    return cu(e[0]);
  if (typeof e == "object") {
    const t = e;
    return cu(
      t.identifier ?? t.value ?? t.Invariant ?? t["en-US"] ?? t["en-us"]
    );
  }
  return null;
}
async function lv(e, t) {
  var u, s, a, h, m, p, v, g, y, P, f, c, d, w;
  if (!((u = e.raw) != null && u.getAsync))
    throw new Error("Content Hub client is not available");
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error(`Could not load cutout asset ${t}: ${n.statusCode}`);
  const r = n.content, o = ((h = (a = (s = r.renditions) == null ? void 0 : s.downloadOriginal) == null ? void 0 : a[0]) == null ? void 0 : h.href) ?? ((v = (p = (m = r.renditions) == null ? void 0 : m.original) == null ? void 0 : p[0]) == null ? void 0 : v.href) ?? ((P = (y = (g = r.renditions) == null ? void 0 : g.preview) == null ? void 0 : y[0]) == null ? void 0 : P.href);
  if (!o)
    throw new Error("No original rendition found on the cutout asset");
  const l = cu(((f = r.properties) == null ? void 0 : f.AssetVariant) ?? ((c = r.properties) == null ? void 0 : c.assetVariant)), i = String(
    r.modified_on ?? ((d = r.properties) == null ? void 0 : d.modifiedOn) ?? ((w = r.properties) == null ? void 0 : w["Content-Md5"]) ?? r.id ?? ""
  );
  return { url: o, assetId: t, fingerprint: i, variant: l };
}
function Po(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    try {
      return Po(JSON.parse(e));
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
function ba(e) {
  try {
    return Tt({ [e]: new URLSearchParams(window.location.search).get(e) ?? "" }, e);
  } catch {
    return null;
  }
}
function iv(e) {
  var t;
  return Tt(
    { id: ((t = e == null ? void 0 : e.systemProperties) == null ? void 0 : t.id) ?? (e == null ? void 0 : e.id) },
    "id"
  );
}
function uv(e) {
  const t = Po(e == null ? void 0 : e.config), n = Po(e == null ? void 0 : e.options), r = Tt(t, "cutoutAssetId") ?? Tt(n, "cutoutAssetId") ?? ba("cutoutAssetId") ?? Tt(n, "entityId") ?? Tt(Po(e), "entityId") ?? iv(e == null ? void 0 : e.entity), o = Tt(t, "composedAssetId") ?? Tt(n, "composedAssetId") ?? ba("composedAssetId");
  return { cutoutAssetId: r, composedAssetId: o };
}
function sv(e) {
  const t = md(e);
  return {
    async render(n) {
      const { cutoutAssetId: r, composedAssetId: o } = uv(n);
      if (!r) {
        t.render(
          /* @__PURE__ */ A(er, { theme: n.theme, children: /* @__PURE__ */ A("div", { children: "No cutout asset was supplied." }) })
        );
        return;
      }
      try {
        const [l, i, u] = await Promise.all([
          ev(n.client),
          lv(n.client, r),
          o ? nv(n.client, o) : Promise.resolve(null)
        ]);
        if (i.variant !== "cutout") {
          t.render(
            /* @__PURE__ */ A(er, { theme: n.theme, children: /* @__PURE__ */ We("div", { children: [
              "Asset ",
              i.assetId,
              " is not a cutout (AssetVariant is ",
              i.variant ?? "empty",
              "). Run background removal first."
            ] }) })
          );
          return;
        }
        if (l.length === 0) {
          t.render(
            /* @__PURE__ */ A(er, { theme: n.theme, children: /* @__PURE__ */ A("div", { children: "No active composer backgrounds are set up yet." }) })
          );
          return;
        }
        t.render(
          /* @__PURE__ */ A(er, { theme: n.theme, children: /* @__PURE__ */ A(
            Qg,
            {
              cutoutUrl: i.url,
              cutoutAssetId: i.assetId,
              cutoutFingerprint: i.fingerprint,
              backgrounds: l,
              initial: u ?? void 0,
              buildAssetUrl: (s) => `/en-us/asset/${s}`,
              onSave: (s, a, h) => ov(n.client, {
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
          /* @__PURE__ */ A(er, { theme: n.theme, children: /* @__PURE__ */ We("div", { style: { color: "#b00020" }, children: [
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
  sv as default
};
