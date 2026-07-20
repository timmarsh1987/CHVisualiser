function Ad(e, t) {
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
function Md(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, Kl = {}, Xa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr = Symbol.for("react.element"), Dd = Symbol.for("react.portal"), Fd = Symbol.for("react.fragment"), jd = Symbol.for("react.strict_mode"), Bd = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"), Wd = Symbol.for("react.context"), Hd = Symbol.for("react.forward_ref"), Vd = Symbol.for("react.suspense"), Kd = Symbol.for("react.memo"), Qd = Symbol.for("react.lazy"), gs = Symbol.iterator;
function Gd(e) {
  return e === null || typeof e != "object" ? null : (e = gs && e[gs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Za = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ja = Object.assign, qa = {};
function In(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
}
In.prototype.isReactComponent = {};
In.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
In.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ba() {
}
ba.prototype = In.prototype;
function iu(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
}
var uu = iu.prototype = new ba();
uu.constructor = iu;
Ja(uu, In.prototype);
uu.isPureReactComponent = !0;
var vs = Array.isArray, ec = Object.prototype.hasOwnProperty, su = { current: null }, tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      ec.call(t, r) && !tc.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: zr, type: e, key: o, ref: i, props: l, _owner: su.current };
}
function Yd(e, t) {
  return { $$typeof: zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zr;
}
function Xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ws = /\/+/g;
function Oo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Xd("" + e.key) : t.toString(36);
}
function rl(e, t, n, r, l) {
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
          case zr:
          case Dd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Oo(i, 0) : r, vs(l) ? (n = "", e != null && (n = e.replace(ws, "$&/") + "/"), rl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (au(l) && (l = Yd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ws, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", vs(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Oo(o, u);
      i += rl(o, t, n, s, l);
    }
  else if (s = Gd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Oo(o, u++), i += rl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function jr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return rl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Zd(e) {
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
var xe = { current: null }, ll = { transition: null }, Jd = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: ll, ReactCurrentOwner: su };
function rc() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: jr, forEach: function(e, t, n) {
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
  if (!au(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = In;
$.Fragment = Fd;
$.Profiler = Bd;
$.PureComponent = iu;
$.StrictMode = jd;
$.Suspense = Vd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd;
$.act = rc;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ja({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = su.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
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
  return { $$typeof: zr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function(e) {
  return e = { $$typeof: Wd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ud, _context: e }, e.Consumer = e;
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
$.isValidElement = au;
$.lazy = function(e) {
  return { $$typeof: Qd, _payload: { _status: -1, _result: e }, _init: Zd };
};
$.memo = function(e, t) {
  return { $$typeof: Kd, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function(e) {
  var t = ll.transition;
  ll.transition = {};
  try {
    e();
  } finally {
    ll.transition = t;
  }
};
$.unstable_act = rc;
$.useCallback = function(e, t) {
  return xe.current.useCallback(e, t);
};
$.useContext = function(e) {
  return xe.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return xe.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return xe.current.useEffect(e, t);
};
$.useId = function() {
  return xe.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return xe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return xe.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return xe.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return xe.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return xe.current.useRef(e);
};
$.useState = function(e) {
  return xe.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return xe.current.useTransition();
};
$.version = "18.3.1";
Xa.exports = $;
var N = Xa.exports;
const qd = /* @__PURE__ */ Md(N), si = /* @__PURE__ */ Ad({
  __proto__: null,
  default: qd
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
var bd = N, ep = Symbol.for("react.element"), tp = Symbol.for("react.fragment"), np = Object.prototype.hasOwnProperty, rp = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    np.call(t, r) && !lp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ep, type: e, key: o, ref: i, props: l, _owner: rp.current };
}
Kl.Fragment = tp;
Kl.jsx = lc;
Kl.jsxs = lc;
Ya.exports = Kl;
var oc = Ya.exports;
const x = oc.jsx, F = oc.jsxs;
var ic = { exports: {} }, Me = {}, uc = { exports: {} }, sc = {};
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
  function t(P, L) {
    var I = P.length;
    P.push(L);
    e:
      for (; 0 < I; ) {
        var q = I - 1 >>> 1, oe = P[q];
        if (0 < l(oe, L))
          P[q] = L, P[I] = oe, I = q;
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
    var L = P[0], I = P.pop();
    if (I !== L) {
      P[0] = I;
      e:
        for (var q = 0, oe = P.length, Dr = oe >>> 1; q < Dr; ) {
          var Bt = 2 * (q + 1) - 1, Lo = P[Bt], Ut = Bt + 1, Fr = P[Ut];
          if (0 > l(Lo, I))
            Ut < oe && 0 > l(Fr, Lo) ? (P[q] = Fr, P[Ut] = I, q = Ut) : (P[q] = Lo, P[Bt] = I, q = Bt);
          else if (Ut < oe && 0 > l(Fr, I))
            P[q] = Fr, P[Ut] = I, q = Ut;
          else
            break e;
        }
    }
    return L;
  }
  function l(P, L) {
    var I = P.sortIndex - L.sortIndex;
    return I !== 0 ? I : P.id - L.id;
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
  var s = [], a = [], h = 1, m = null, p = 3, v = !1, g = !1, y = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null)
        r(a);
      else if (L.startTime <= P)
        r(a), L.sortIndex = L.expirationTime, t(s, L);
      else
        break;
      L = n(a);
    }
  }
  function w(P) {
    if (y = !1, d(P), !g)
      if (n(s) !== null)
        g = !0, Ro(C);
      else {
        var L = n(a);
        L !== null && No(w, L.startTime - P);
      }
  }
  function C(P, L) {
    g = !1, y && (y = !1, f(z), z = -1), v = !0;
    var I = p;
    try {
      for (d(L), m = n(s); m !== null && (!(m.expirationTime > L) || P && !me()); ) {
        var q = m.callback;
        if (typeof q == "function") {
          m.callback = null, p = m.priorityLevel;
          var oe = q(m.expirationTime <= L);
          L = e.unstable_now(), typeof oe == "function" ? m.callback = oe : m === n(s) && r(s), d(L);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var Dr = !0;
      else {
        var Bt = n(a);
        Bt !== null && No(w, Bt.startTime - L), Dr = !1;
      }
      return Dr;
    } finally {
      m = null, p = I, v = !1;
    }
  }
  var E = !1, k = null, z = -1, K = 5, O = -1;
  function me() {
    return !(e.unstable_now() - O < K);
  }
  function Dn() {
    if (k !== null) {
      var P = e.unstable_now();
      O = P;
      var L = !0;
      try {
        L = k(!0, P);
      } finally {
        L ? Fn() : (E = !1, k = null);
      }
    } else
      E = !1;
  }
  var Fn;
  if (typeof c == "function")
    Fn = function() {
      c(Dn);
    };
  else if (typeof MessageChannel < "u") {
    var ys = new MessageChannel(), $d = ys.port2;
    ys.port1.onmessage = Dn, Fn = function() {
      $d.postMessage(null);
    };
  } else
    Fn = function() {
      T(Dn, 0);
    };
  function Ro(P) {
    k = P, E || (E = !0, Fn());
  }
  function No(P, L) {
    z = T(function() {
      P(e.unstable_now());
    }, L);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Ro(C));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var L = 3;
        break;
      default:
        L = p;
    }
    var I = p;
    p = L;
    try {
      return P();
    } finally {
      p = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, L) {
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
    var I = p;
    p = P;
    try {
      return L();
    } finally {
      p = I;
    }
  }, e.unstable_scheduleCallback = function(P, L, I) {
    var q = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? q + I : q) : I = q, P) {
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
    return oe = I + oe, P = { id: h++, callback: L, priorityLevel: P, startTime: I, expirationTime: oe, sortIndex: -1 }, I > q ? (P.sortIndex = I, t(a, P), n(s) === null && P === n(a) && (y ? (f(z), z = -1) : y = !0, No(w, I - q))) : (P.sortIndex = oe, t(s, P), g || v || (g = !0, Ro(C))), P;
  }, e.unstable_shouldYield = me, e.unstable_wrapCallback = function(P) {
    var L = p;
    return function() {
      var I = p;
      p = L;
      try {
        return P.apply(this, arguments);
      } finally {
        p = I;
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
var ip = N, Ae = op;
function S(e) {
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
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ai = Object.prototype.hasOwnProperty, up = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ss = {}, ks = {};
function sp(e) {
  return ai.call(ks, e) ? !0 : ai.call(Ss, e) ? !1 : up.test(e) ? ks[e] = !0 : (Ss[e] = !0, !1);
}
function ap(e, t, n, r) {
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
function cp(e, t, n, r) {
  if (t === null || typeof t > "u" || ap(e, t, n, r))
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
function Ce(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cu,
    fu
  );
  pe[t] = new Ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cu, fu);
  pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cu, fu);
  pe[t] = new Ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (cp(t, n, l, r) && (n = null), r || l === null ? sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Br = Symbol.for("react.element"), ln = Symbol.for("react.portal"), on = Symbol.for("react.fragment"), pu = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), mu = Symbol.for("react.forward_ref"), fi = Symbol.for("react.suspense"), di = Symbol.for("react.suspense_list"), hu = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), dc = Symbol.for("react.offscreen"), xs = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Io;
function Yn(e) {
  if (Io === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Io = t && t[1] || "";
    }
  return `
` + Io + e;
}
var $o = !1;
function Ao(e, t) {
  if (!e || $o)
    return "";
  $o = !0;
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
    $o = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function fp(e) {
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
      return e = Ao(e.type, !1), e;
    case 11:
      return e = Ao(e.type.render, !1), e;
    case 1:
      return e = Ao(e.type, !0), e;
    default:
      return "";
  }
}
function pi(e) {
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
    case ci:
      return "Profiler";
    case pu:
      return "StrictMode";
    case fi:
      return "Suspense";
    case di:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case mu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case hu:
        return t = e.displayName || null, t !== null ? t : pi(e.type) || "Memo";
      case kt:
        t = e._payload, e = e._init;
        try {
          return pi(e(t));
        } catch {
        }
    }
  return null;
}
function dp(e) {
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
      return pi(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
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
function At(e) {
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
function pp(e) {
  var t = pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ur(e) {
  e._valueTracker || (e._valueTracker = pp(e));
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
function mi(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = At(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hc(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function hi(e, t) {
  hc(e, t);
  var n = At(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yi(e, t.type, n) : t.hasOwnProperty("defaultValue") && yi(e, t.type, At(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function yi(e, t, n) {
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
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function gi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _s(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (Xn(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: At(n) };
}
function yc(e, t) {
  var n = At(t.value), r = At(t.defaultValue);
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
function vi(e, t) {
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
}, mp = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function(e) {
  mp.forEach(function(t) {
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
var hp = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wi(e, t) {
  if (t) {
    if (hp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Si(e, t) {
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
var ki = null;
function yu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xi = null, vn = null, wn = null;
function Ts(e) {
  if (e = Lr(e)) {
    if (typeof xi != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = Zl(t), xi(e.stateNode, e.type, t));
  }
}
function kc(e) {
  vn ? wn ? wn.push(e) : wn = [e] : vn = e;
}
function xc() {
  if (vn) {
    var e = vn, t = wn;
    if (wn = vn = null, Ts(e), t)
      for (e = 0; e < t.length; e++)
        Ts(t[e]);
  }
}
function Cc(e, t) {
  return e(t);
}
function Ec() {
}
var Mo = !1;
function _c(e, t, n) {
  if (Mo)
    return e(t, n);
  Mo = !0;
  try {
    return Cc(e, t, n);
  } finally {
    Mo = !1, (vn !== null || wn !== null) && (Ec(), xc());
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
    throw Error(S(231, t, typeof n));
  return n;
}
var Ci = !1;
if (mt)
  try {
    var Bn = {};
    Object.defineProperty(Bn, "passive", { get: function() {
      Ci = !0;
    } }), window.addEventListener("test", Bn, Bn), window.removeEventListener("test", Bn, Bn);
  } catch {
    Ci = !1;
  }
function yp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var bn = !1, wl = null, Sl = !1, Ei = null, gp = { onError: function(e) {
  bn = !0, wl = e;
} };
function vp(e, t, n, r, l, o, i, u, s) {
  bn = !1, wl = null, yp.apply(gp, arguments);
}
function wp(e, t, n, r, l, o, i, u, s) {
  if (vp.apply(this, arguments), bn) {
    if (bn) {
      var a = wl;
      bn = !1, wl = null;
    } else
      throw Error(S(198));
    Sl || (Sl = !0, Ei = a);
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
function zs(e) {
  if (tn(e) !== e)
    throw Error(S(188));
}
function Sp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = tn(e), t === null)
      throw Error(S(188));
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
          return zs(l), e;
        if (o === r)
          return zs(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
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
  return e = Sp(e), e !== null ? zc(e) : null;
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
var Rc = Ae.unstable_scheduleCallback, Rs = Ae.unstable_cancelCallback, kp = Ae.unstable_shouldYield, xp = Ae.unstable_requestPaint, b = Ae.unstable_now, Cp = Ae.unstable_getCurrentPriorityLevel, gu = Ae.unstable_ImmediatePriority, Nc = Ae.unstable_UserBlockingPriority, kl = Ae.unstable_NormalPriority, Ep = Ae.unstable_LowPriority, Lc = Ae.unstable_IdlePriority, Ql = null, it = null;
function _p(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Je = Math.clz32 ? Math.clz32 : zp, Pp = Math.log, Tp = Math.LN2;
function zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pp(e) / Tp | 0) | 0;
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
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Zn(u) : (o &= i, o !== 0 && (r = Zn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Zn(i) : o !== 0 && (r = Zn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Je(t), l = 1 << n, r |= e[n], t &= ~l;
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Je(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Rp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function _i(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Oc() {
  var e = Hr;
  return Hr <<= 1, !(Hr & 4194240) && (Hr = 64), e;
}
function Do(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Rr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function Lp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Je(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $c, wu, Ac, Mc, Dc, Pi = !1, Kr = [], Tt = null, zt = null, Rt = null, fr = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), Ct = [], Op = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ns(e, t) {
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
      Rt = null;
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
function Un(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Lr(t), t !== null && wu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ip(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Tt = Un(Tt, e, t, n, r, l), !0;
    case "dragenter":
      return zt = Un(zt, e, t, n, r, l), !0;
    case "mouseover":
      return Rt = Un(Rt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return fr.set(o, Un(fr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, dr.set(o, Un(dr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Fc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, Dc(e.priority, function() {
            Ac(n);
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
function ol(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ki = r, n.target.dispatchEvent(r), ki = null;
    } else
      return t = Lr(n), t !== null && wu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ls(e, t, n) {
  ol(e) && n.delete(t);
}
function $p() {
  Pi = !1, Tt !== null && ol(Tt) && (Tt = null), zt !== null && ol(zt) && (zt = null), Rt !== null && ol(Rt) && (Rt = null), fr.forEach(Ls), dr.forEach(Ls);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pi || (Pi = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, $p)));
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
  for (Tt !== null && Wn(Tt, e), zt !== null && Wn(zt, e), Rt !== null && Wn(Rt, e), fr.forEach(t), dr.forEach(t), n = 0; n < Ct.length; n++)
    r = Ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && (n = Ct[0], n.blockedOn === null); )
    Fc(n), n.blockedOn === null && Ct.shift();
}
var Sn = wt.ReactCurrentBatchConfig, Cl = !0;
function Ap(e, t, n, r) {
  var l = j, o = Sn.transition;
  Sn.transition = null;
  try {
    j = 1, Su(e, t, n, r);
  } finally {
    j = l, Sn.transition = o;
  }
}
function Mp(e, t, n, r) {
  var l = j, o = Sn.transition;
  Sn.transition = null;
  try {
    j = 4, Su(e, t, n, r);
  } finally {
    j = l, Sn.transition = o;
  }
}
function Su(e, t, n, r) {
  if (Cl) {
    var l = Ti(e, t, n, r);
    if (l === null)
      Go(e, t, r, El, n), Ns(e, r);
    else if (Ip(l, e, t, n, r))
      r.stopPropagation();
    else if (Ns(e, r), t & 4 && -1 < Op.indexOf(e)) {
      for (; l !== null; ) {
        var o = Lr(l);
        if (o !== null && $c(o), o = Ti(e, t, n, r), o === null && Go(e, t, r, El, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Go(e, t, r, null, n);
  }
}
var El = null;
function Ti(e, t, n, r) {
  if (El = null, e = yu(r), e = Vt(e), e !== null)
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
      switch (Cp()) {
        case gu:
          return 1;
        case Nc:
          return 4;
        case kl:
        case Ep:
          return 16;
        case Lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, ku = null, il = null;
function Bc() {
  if (il)
    return il;
  var e, t = ku, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return il = l.slice(e, 1 < r ? 1 - r : void 0);
}
function ul(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Qr() {
  return !0;
}
function Os() {
  return !1;
}
function De(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Qr : Os, this.isPropagationStopped = Os, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
  }, persist: function() {
  }, isPersistent: Qr }), t;
}
var $n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xu = De($n), Nr = Y({}, $n, { view: 0, detail: 0 }), Dp = De(Nr), Fo, jo, Hn, Gl = Y({}, Nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Fo = e.screenX - Hn.screenX, jo = e.screenY - Hn.screenY) : jo = Fo = 0, Hn = e), Fo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jo;
} }), Is = De(Gl), Fp = Y({}, Gl, { dataTransfer: 0 }), jp = De(Fp), Bp = Y({}, Nr, { relatedTarget: 0 }), Bo = De(Bp), Up = Y({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wp = De(Up), Hp = Y({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Vp = De(Hp), Kp = Y({}, $n, { data: 0 }), $s = De(Kp), Qp = {
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
}, Gp = {
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
function Xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yp[e]) ? !!t[e] : !1;
}
function Cu() {
  return Xp;
}
var Zp = Y({}, Nr, { key: function(e) {
  if (e.key) {
    var t = Qp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ul(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cu, charCode: function(e) {
  return e.type === "keypress" ? ul(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Jp = De(Zp), qp = Y({}, Gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = De(qp), bp = Y({}, Nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cu }), em = De(bp), tm = Y({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), nm = De(tm), rm = Y({}, Gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), lm = De(rm), om = [9, 13, 27, 32], Eu = mt && "CompositionEvent" in window, er = null;
mt && "documentMode" in document && (er = document.documentMode);
var im = mt && "TextEvent" in window && !er, Uc = mt && (!Eu || er && 8 < er && 11 >= er), Ms = String.fromCharCode(32), Ds = !1;
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
function um(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : (Ds = !0, Ms);
    case "textInput":
      return e = t.data, e === Ms && Ds ? null : e;
    default:
      return null;
  }
}
function sm(e, t) {
  if (un)
    return e === "compositionend" || !Eu && Wc(e, t) ? (e = Bc(), il = ku = _t = null, un = !1, e) : null;
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
var am = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!am[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  kc(r), t = _l(t, "onChange"), 0 < t.length && (n = new xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var tr = null, mr = null;
function cm(e) {
  tf(e, 0);
}
function Yl(e) {
  var t = cn(e);
  if (mc(t))
    return e;
}
function fm(e, t) {
  if (e === "change")
    return t;
}
var Kc = !1;
if (mt) {
  var Uo;
  if (mt) {
    var Wo = "oninput" in document;
    if (!Wo) {
      var js = document.createElement("div");
      js.setAttribute("oninput", "return;"), Wo = typeof js.oninput == "function";
    }
    Uo = Wo;
  } else
    Uo = !1;
  Kc = Uo && (!document.documentMode || 9 < document.documentMode);
}
function Bs() {
  tr && (tr.detachEvent("onpropertychange", Qc), mr = tr = null);
}
function Qc(e) {
  if (e.propertyName === "value" && Yl(mr)) {
    var t = [];
    Vc(t, mr, e, yu(e)), _c(cm, t);
  }
}
function dm(e, t, n) {
  e === "focusin" ? (Bs(), tr = t, mr = n, tr.attachEvent("onpropertychange", Qc)) : e === "focusout" && Bs();
}
function pm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(mr);
}
function mm(e, t) {
  if (e === "click")
    return Yl(t);
}
function hm(e, t) {
  if (e === "input" || e === "change")
    return Yl(t);
}
function ym(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var be = typeof Object.is == "function" ? Object.is : ym;
function hr(e, t) {
  if (be(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ai.call(t, l) || !be(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Us(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ws(e, t) {
  var n = Us(e);
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
    n = Us(n);
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
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function gm(e) {
  var t = Yc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
    if (r !== null && _u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ws(n, o);
        var i = Ws(
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
var vm = mt && "documentMode" in document && 11 >= document.documentMode, sn = null, zi = null, nr = null, Ri = !1;
function Hs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ri || sn == null || sn !== vl(r) || (r = sn, "selectionStart" in r && _u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), nr && hr(nr, r) || (nr = r, r = _l(zi, "onSelect"), 0 < r.length && (t = new xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = sn)));
}
function Gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var an = { animationend: Gr("Animation", "AnimationEnd"), animationiteration: Gr("Animation", "AnimationIteration"), animationstart: Gr("Animation", "AnimationStart"), transitionend: Gr("Transition", "TransitionEnd") }, Ho = {}, Xc = {};
mt && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete an.animationend.animation, delete an.animationiteration.animation, delete an.animationstart.animation), "TransitionEvent" in window || delete an.transitionend.transition);
function Xl(e) {
  if (Ho[e])
    return Ho[e];
  if (!an[e])
    return e;
  var t = an[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xc)
      return Ho[e] = t[n];
  return e;
}
var Zc = Xl("animationend"), Jc = Xl("animationiteration"), qc = Xl("animationstart"), bc = Xl("transitionend"), ef = /* @__PURE__ */ new Map(), Vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dt(e, t) {
  ef.set(e, t), en(t, [e]);
}
for (var Vo = 0; Vo < Vs.length; Vo++) {
  var Ko = Vs[Vo], wm = Ko.toLowerCase(), Sm = Ko[0].toUpperCase() + Ko.slice(1);
  Dt(wm, "on" + Sm);
}
Dt(Zc, "onAnimationEnd");
Dt(Jc, "onAnimationIteration");
Dt(qc, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(bc, "onTransitionEnd");
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
var Jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function Ks(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wp(r, t, void 0, e), e.currentTarget = null;
}
function tf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Ks(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Ks(l, u, a), o = s;
        }
    }
  }
  if (Sl)
    throw e = Ei, Sl = !1, Ei = null, e;
}
function W(e, t) {
  var n = t[$i];
  n === void 0 && (n = t[$i] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function Qo(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var Yr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Yr]) {
    e[Yr] = !0, ac.forEach(function(n) {
      n !== "selectionchange" && (km.has(n) || Qo(n, !1, e), Qo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yr] || (t[Yr] = !0, Qo("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (jc(t)) {
    case 1:
      var l = Ap;
      break;
    case 4:
      l = Mp;
      break;
    default:
      l = Su;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Go(e, t, n, r, l) {
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
  _c(function() {
    var a = o, h = yu(n), m = [];
    e: {
      var p = ef.get(e);
      if (p !== void 0) {
        var v = xu, g = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = Jp;
            break;
          case "focusin":
            g = "focus", v = Bo;
            break;
          case "focusout":
            g = "blur", v = Bo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Bo;
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
            v = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = jp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = em;
            break;
          case Zc:
          case Jc:
          case qc:
            v = Wp;
            break;
          case bc:
            v = nm;
            break;
          case "scroll":
            v = Dp;
            break;
          case "wheel":
            v = lm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Vp;
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
        var y = (t & 4) !== 0, T = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = cr(c, f), w != null && y.push(gr(c, w, d)))), T)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== ki && (g = n.relatedTarget || n.fromElement) && (Vt(g) || g[ht]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Vt(g) : null, g !== null && (T = tn(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = Is, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = As, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), T = v == null ? p : cn(v), d = g == null ? p : cn(g), p = new y(w, c + "leave", v, n, h), p.target = T, p.relatedTarget = d, w = null, Vt(h) === a && (y = new y(f, c + "enter", g, n, h), y.target = d, y.relatedTarget = T, w = y), T = w, v && g)
            t: {
              for (y = v, f = g, c = 0, d = y; d; d = nn(d))
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
          v !== null && Qs(m, p, v, y, !1), g !== null && T !== null && Qs(m, T, g, y, !0);
        }
      }
      e: {
        if (p = a ? cn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var C = fm;
        else if (Fs(p))
          if (Kc)
            C = hm;
          else {
            C = pm;
            var E = dm;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = mm);
        if (C && (C = C(e, a))) {
          Vc(m, C, n, h);
          break e;
        }
        E && E(e, p, a), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && yi(p, "number", p.value);
      }
      switch (E = a ? cn(a) : window, e) {
        case "focusin":
          (Fs(E) || E.contentEditable === "true") && (sn = E, zi = a, nr = null);
          break;
        case "focusout":
          nr = zi = sn = null;
          break;
        case "mousedown":
          Ri = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ri = !1, Hs(m, n, h);
          break;
        case "selectionchange":
          if (vm)
            break;
        case "keydown":
        case "keyup":
          Hs(m, n, h);
      }
      var k;
      if (Eu)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        un ? Wc(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Uc && n.locale !== "ko" && (un || z !== "onCompositionStart" ? z === "onCompositionEnd" && un && (k = Bc()) : (_t = h, ku = "value" in _t ? _t.value : _t.textContent, un = !0)), E = _l(a, z), 0 < E.length && (z = new $s(z, e, null, n, h), m.push({ event: z, listeners: E }), k ? z.data = k : (k = Hc(n), k !== null && (z.data = k)))), (k = im ? um(e, n) : sm(e, n)) && (a = _l(a, "onBeforeInput"), 0 < a.length && (h = new $s("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = k));
    }
    tf(m, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = cr(e, n), o != null && r.unshift(gr(e, o, l)), o = cr(e, t), o != null && r.push(gr(e, o, l))), e = e.return;
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
function Qs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = cr(n, o), s != null && i.unshift(gr(n, s, u))) : l || (s = cr(n, o), s != null && i.push(gr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var xm = /\r\n?/g, Cm = /\u0000|\uFFFD/g;
function Gs(e) {
  return (typeof e == "string" ? e : "" + e).replace(xm, `
`).replace(Cm, "");
}
function Xr(e, t, n) {
  if (t = Gs(t), Gs(e) !== t && n)
    throw Error(S(425));
}
function Pl() {
}
var Ni = null, Li = null;
function Oi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, Ys = typeof Promise == "function" ? Promise : void 0, _m = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ys < "u" ? function(e) {
  return Ys.resolve(null).then(e).catch(Pm);
} : Ii;
function Pm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yo(e, t) {
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
var An = Math.random().toString(36).slice(2), ot = "__reactFiber$" + An, vr = "__reactProps$" + An, ht = "__reactContainer$" + An, $i = "__reactEvents$" + An, Tm = "__reactListeners$" + An, zm = "__reactHandles$" + An;
function Vt(e) {
  var t = e[ot];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ht] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Xs(e); e !== null; ) {
          if (n = e[ot])
            return n;
          e = Xs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[ot] || e[ht], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function Zl(e) {
  return e[vr] || null;
}
var Ai = [], fn = -1;
function Ft(e) {
  return { current: e };
}
function H(e) {
  0 > fn || (e.current = Ai[fn], Ai[fn] = null, fn--);
}
function U(e, t) {
  fn++, Ai[fn] = e.current, e.current = t;
}
var Mt = {}, we = Ft(Mt), Pe = Ft(!1), Xt = Mt;
function Pn(e, t) {
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
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  H(Pe), H(we);
}
function Zs(e, t, n) {
  if (we.current !== Mt)
    throw Error(S(168));
  U(we, t), U(Pe, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(S(108, dp(e) || "Unknown", l));
  return Y({}, n, r);
}
function zl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Xt = we.current, U(we, e), U(Pe, Pe.current), !0;
}
function Js(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = rf(e, t, Xt), r.__reactInternalMemoizedMergedChildContext = e, H(Pe), H(we), U(we, e)) : H(Pe), U(Pe, n);
}
var ct = null, Jl = !1, Xo = !1;
function lf(e) {
  ct === null ? ct = [e] : ct.push(e);
}
function Rm(e) {
  Jl = !0, lf(e);
}
function jt() {
  if (!Xo && ct !== null) {
    Xo = !0;
    var e = 0, t = j;
    try {
      var n = ct;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ct = null, Jl = !1;
    } catch (l) {
      throw ct !== null && (ct = ct.slice(e + 1)), Rc(gu, jt), l;
    } finally {
      j = t, Xo = !1;
    }
  }
  return null;
}
var dn = [], pn = 0, Rl = null, Nl = 0, je = [], Be = 0, Zt = null, ft = 1, dt = "";
function Wt(e, t) {
  dn[pn++] = Nl, dn[pn++] = Rl, Rl = e, Nl = t;
}
function of(e, t, n) {
  je[Be++] = ft, je[Be++] = dt, je[Be++] = Zt, Zt = e;
  var r = ft;
  e = dt;
  var l = 32 - Je(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Je(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, ft = 1 << 32 - Je(t) + l | n << l | r, dt = o + e;
  } else
    ft = 1 << o | n << l | r, dt = e;
}
function Pu(e) {
  e.return !== null && (Wt(e, 1), of(e, 1, 0));
}
function Tu(e) {
  for (; e === Rl; )
    Rl = dn[--pn], dn[pn] = null, Nl = dn[--pn], dn[pn] = null;
  for (; e === Zt; )
    Zt = je[--Be], je[Be] = null, dt = je[--Be], je[Be] = null, ft = je[--Be], je[Be] = null;
}
var Ie = null, Oe = null, V = !1, Ze = null;
function uf(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function qs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ie = e, Oe = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ie = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: ft, overflow: dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ie = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (V) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!qs(e, t)) {
        if (Mi(e))
          throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Ie;
        t && qs(e, t) ? uf(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, Ie = e);
      }
    } else {
      if (Mi(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, V = !1, Ie = e;
    }
  }
}
function bs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Zr(e) {
  if (e !== Ie)
    return !1;
  if (!V)
    return bs(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Mi(e))
      throw sf(), Error(S(418));
    for (; t; )
      uf(e, t), t = Nt(t.nextSibling);
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
    Oe = Ie ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function sf() {
  for (var e = Oe; e; )
    e = Nt(e.nextSibling);
}
function Tn() {
  Oe = Ie = null, V = !1;
}
function zu(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var Nm = wt.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function Jr(e, t) {
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
  function l(f, c) {
    return f = $t(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = ni(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var C = d.type;
    return C === on ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kt && ea(C) === c.type) ? (w = l(c, d.props), w.ref = Vn(f, c, d), w.return = f, w) : (w = ml(d.type, d.key, d.props, null, f.mode, w), w.ref = Vn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ri(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, C) {
    return c === null || c.tag !== 7 ? (c = Yt(d, f.mode, w, C), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ni("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Br:
          return d = ml(c.type, c.key, c.props, null, f.mode, d), d.ref = Vn(f, null, c), d.return = f, d;
        case ln:
          return c = ri(c, f.mode, d), c.return = f, c;
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
    var C = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return C !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Br:
          return d.key === C ? s(f, c, d, w) : null;
        case ln:
          return d.key === C ? a(f, c, d, w) : null;
        case kt:
          return C = d._init, p(
            f,
            c,
            C(d._payload),
            w
          );
      }
      if (Xn(d) || jn(d))
        return C !== null ? null : h(f, c, d, w, null);
      Jr(f, d);
    }
    return null;
  }
  function v(f, c, d, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Br:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, C);
        case ln:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, C);
        case kt:
          var E = w._init;
          return v(f, c, d, E(w._payload), C);
      }
      if (Xn(w) || jn(w))
        return f = f.get(d) || null, h(c, f, w, C, null);
      Jr(c, w);
    }
    return null;
  }
  function g(f, c, d, w) {
    for (var C = null, E = null, k = c, z = c = 0, K = null; k !== null && z < d.length; z++) {
      k.index > z ? (K = k, k = null) : K = k.sibling;
      var O = p(f, k, d[z], w);
      if (O === null) {
        k === null && (k = K);
        break;
      }
      e && k && O.alternate === null && t(f, k), c = o(O, c, z), E === null ? C = O : E.sibling = O, E = O, k = K;
    }
    if (z === d.length)
      return n(f, k), V && Wt(f, z), C;
    if (k === null) {
      for (; z < d.length; z++)
        k = m(f, d[z], w), k !== null && (c = o(k, c, z), E === null ? C = k : E.sibling = k, E = k);
      return V && Wt(f, z), C;
    }
    for (k = r(f, k); z < d.length; z++)
      K = v(k, f, z, d[z], w), K !== null && (e && K.alternate !== null && k.delete(K.key === null ? z : K.key), c = o(K, c, z), E === null ? C = K : E.sibling = K, E = K);
    return e && k.forEach(function(me) {
      return t(f, me);
    }), V && Wt(f, z), C;
  }
  function y(f, c, d, w) {
    var C = jn(d);
    if (typeof C != "function")
      throw Error(S(150));
    if (d = C.call(d), d == null)
      throw Error(S(151));
    for (var E = C = null, k = c, z = c = 0, K = null, O = d.next(); k !== null && !O.done; z++, O = d.next()) {
      k.index > z ? (K = k, k = null) : K = k.sibling;
      var me = p(f, k, O.value, w);
      if (me === null) {
        k === null && (k = K);
        break;
      }
      e && k && me.alternate === null && t(f, k), c = o(me, c, z), E === null ? C = me : E.sibling = me, E = me, k = K;
    }
    if (O.done)
      return n(
        f,
        k
      ), V && Wt(f, z), C;
    if (k === null) {
      for (; !O.done; z++, O = d.next())
        O = m(f, O.value, w), O !== null && (c = o(O, c, z), E === null ? C = O : E.sibling = O, E = O);
      return V && Wt(f, z), C;
    }
    for (k = r(f, k); !O.done; z++, O = d.next())
      O = v(k, f, z, O.value, w), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? z : O.key), c = o(O, c, z), E === null ? C = O : E.sibling = O, E = O);
    return e && k.forEach(function(Dn) {
      return t(f, Dn);
    }), V && Wt(f, z), C;
  }
  function T(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === on && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Br:
          e: {
            for (var C = d.key, E = c; E !== null; ) {
              if (E.key === C) {
                if (C = d.type, C === on) {
                  if (E.tag === 7) {
                    n(f, E.sibling), c = l(E, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === kt && ea(C) === E.type) {
                  n(f, E.sibling), c = l(E, d.props), c.ref = Vn(f, E, d), c.return = f, f = c;
                  break e;
                }
                n(f, E);
                break;
              } else
                t(f, E);
              E = E.sibling;
            }
            d.type === on ? (c = Yt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = ml(d.type, d.key, d.props, null, f.mode, w), w.ref = Vn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case ln:
          e: {
            for (E = d.key; c !== null; ) {
              if (c.key === E)
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
            c = ri(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case kt:
          return E = d._init, T(f, c, E(d._payload), w);
      }
      if (Xn(d))
        return g(f, c, d, w);
      if (jn(d))
        return y(f, c, d, w);
      Jr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = ni(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return T;
}
var zn = af(!0), cf = af(!1), Ll = Ft(null), Ol = null, mn = null, Ru = null;
function Nu() {
  Ru = mn = Ol = null;
}
function Lu(e) {
  var t = Ll.current;
  H(Ll), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function kn(e, t) {
  Ol = e, Ru = mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function Ve(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (e = { context: e, memoizedValue: t, next: null }, mn === null) {
      if (Ol === null)
        throw Error(S(308));
      mn = e, Ol.dependencies = { lanes: 0, firstContext: e };
    } else
      mn = mn.next = e;
  return t;
}
var Kt = null;
function Ou(e) {
  Kt === null ? Kt = [e] : Kt.push(e);
}
function ff(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ou(t)) : (n.next = l.next, l.next = n), t.interleaved = n, yt(e, r);
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Iu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function df(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function pt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, yt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ou(r)) : (t.next = l.next, l.next = t), r.interleaved = t, yt(e, n);
}
function sl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
function ta(e, t) {
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
function Il(e, t, n, r) {
  var l = e.updateQueue;
  xt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = a = s = null, u = o;
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
              m = Y({}, m, p);
              break e;
            case 2:
              xt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = v, s = m) : h = h.next = v, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    qt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function na(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var Or = {}, ut = Ft(Or), wr = Ft(Or), Sr = Ft(Or);
function Qt(e) {
  if (e === Or)
    throw Error(S(174));
  return e;
}
function $u(e, t) {
  switch (U(Sr, t), U(wr, e), U(ut, Or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vi(t, e);
  }
  H(ut), U(ut, t);
}
function Rn() {
  H(ut), H(wr), H(Sr);
}
function pf(e) {
  Qt(Sr.current);
  var t = Qt(ut.current), n = vi(t, e.type);
  t !== n && (U(wr, e), U(ut, n));
}
function Au(e) {
  wr.current === e && (H(ut), H(wr));
}
var Q = Ft(0);
function $l(e) {
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
var Zo = [];
function Mu() {
  for (var e = 0; e < Zo.length; e++)
    Zo[e]._workInProgressVersionPrimary = null;
  Zo.length = 0;
}
var al = wt.ReactCurrentDispatcher, Jo = wt.ReactCurrentBatchConfig, Jt = 0, G = null, re = null, ie = null, Al = !1, rr = !1, kr = 0, Lm = 0;
function he() {
  throw Error(S(321));
}
function Du(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n]))
      return !1;
  return !0;
}
function Fu(e, t, n, r, l, o) {
  if (Jt = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? Am : Mm, e = n(r, l), rr) {
    o = 0;
    do {
      if (rr = !1, kr = 0, 25 <= o)
        throw Error(S(301));
      o += 1, ie = re = null, t.updateQueue = null, al.current = Dm, e = n(r, l);
    } while (rr);
  }
  if (al.current = Ml, t = re !== null && re.next !== null, Jt = 0, ie = re = G = null, Al = !1, t)
    throw Error(S(300));
  return e;
}
function ju() {
  var e = kr !== 0;
  return kr = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? G.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Ke() {
  if (re === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = re.next;
  var t = ie === null ? G.memoizedState : ie.next;
  if (t !== null)
    ie = t, re = e;
  else {
    if (e === null)
      throw Error(S(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, ie === null ? G.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(S(311));
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
    var u = i = null, s = null, a = o;
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
        s === null ? (u = s = m, i = r) : s = s.next = m, G.lanes |= h, qt |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, be(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, G.lanes |= o, qt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bo(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    be(o, t.memoizedState) || (_e = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function mf() {
}
function hf(e, t) {
  var n = G, r = Ke(), l = t(), o = !be(r.memoizedState, l);
  if (o && (r.memoizedState = l, _e = !0), r = r.queue, Bu(vf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Cr(9, gf.bind(null, n, r, l, t), void 0, null), ue === null)
      throw Error(S(349));
    Jt & 30 || yf(n, t, l);
  }
  return l;
}
function yf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !be(e, n);
  } catch {
    return !0;
  }
}
function Sf(e) {
  var t = yt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function ra(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $m.bind(null, G, e), [t.memoizedState, e];
}
function Cr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kf() {
  return Ke().memoizedState;
}
function cl(e, t, n, r) {
  var l = nt();
  G.flags |= e, l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ql(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (o = i.destroy, r !== null && Du(r, i.deps)) {
      l.memoizedState = Cr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, l.memoizedState = Cr(1 | t, n, o, r);
}
function la(e, t) {
  return cl(8390656, 8, e, t);
}
function Bu(e, t) {
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
function Uu() {
}
function Pf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zf(e, t, n) {
  return Jt & 21 ? (be(n, t) || (n = Oc(), G.lanes |= n, qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function Om(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Jo.transition;
  Jo.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, Jo.transition = r;
  }
}
function Rf() {
  return Ke().memoizedState;
}
function Im(e, t, n) {
  var r = It(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Nf(e))
    Lf(t, n);
  else if (n = ff(e, t, n, r), n !== null) {
    var l = ke();
    qe(n, e, r, l), Of(n, t, r);
  }
}
function $m(e, t, n) {
  var r = It(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nf(e))
    Lf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, be(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Ou(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = ff(e, t, l, r), n !== null && (l = ke(), qe(n, e, r, l), Of(n, t, r));
  }
}
function Nf(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Lf(e, t) {
  rr = Al = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
var Ml = { readContext: Ve, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Am = { readContext: Ve, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ve, useEffect: la, useImperativeHandle: function(e, t, n) {
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Im.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ra, useDebugValue: Uu, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = ra(!1), t = e[0];
  return e = Om.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, l = nt();
  if (V) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ue === null)
      throw Error(S(349));
    Jt & 30 || yf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, la(vf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Cr(9, gf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = ue.identifierPrefix;
  if (V) {
    var n = dt, r = ft;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Lm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Mm = {
  readContext: Ve,
  useCallback: Pf,
  useContext: Ve,
  useEffect: Bu,
  useImperativeHandle: _f,
  useInsertionEffect: xf,
  useLayoutEffect: Cf,
  useMemo: Tf,
  useReducer: qo,
  useRef: kf,
  useState: function() {
    return qo(xr);
  },
  useDebugValue: Uu,
  useDeferredValue: function(e) {
    var t = Ke();
    return zf(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = qo(xr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: mf,
  useSyncExternalStore: hf,
  useId: Rf,
  unstable_isNewReconciler: !1
}, Dm = { readContext: Ve, useCallback: Pf, useContext: Ve, useEffect: Bu, useImperativeHandle: _f, useInsertionEffect: xf, useLayoutEffect: Cf, useMemo: Tf, useReducer: bo, useRef: kf, useState: function() {
  return bo(xr);
}, useDebugValue: Uu, useDeferredValue: function(e) {
  var t = Ke();
  return re === null ? t.memoizedState = e : zf(t, re.memoizedState, e);
}, useTransition: function() {
  var e = bo(xr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: mf, useSyncExternalStore: hf, useId: Rf, unstable_isNewReconciler: !1 };
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ji(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? tn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = It(e), o = pt(r, l);
  o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (qe(t, e, l, r), sl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ke(), l = It(e), o = pt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Lt(e, o, l), t !== null && (qe(t, e, l, r), sl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ke(), r = It(e), l = pt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Lt(e, l, r), t !== null && (qe(t, e, r, n), sl(t, e, r));
} };
function oa(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !hr(n, r) || !hr(l, o) : !0;
}
function If(e, t, n) {
  var r = !1, l = Mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ve(o) : (l = Te(t) ? Xt : we.current, r = t.contextTypes, o = (r = r != null) ? Pn(e, l) : Mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ia(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Iu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ve(o) : (o = Te(t) ? Xt : we.current, l.context = Pn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ji(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bl.enqueueReplaceState(l, l.state, null), Il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += fp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ei(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ui(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Fm = typeof WeakMap == "function" ? WeakMap : Map;
function $f(e, t, n) {
  n = pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fl || (Fl = !0, Ji = r), Ui(e, t);
  }, n;
}
function Af(e, t, n) {
  n = pt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ui(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Ui(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = qm.bind(null, e, t, n), t.then(e, e));
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
function aa(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pt(-1, 1), t.tag = 2, Lt(n, t, 1))), n.lanes |= 1), e);
}
var jm = wt.ReactCurrentOwner, _e = !1;
function Se(e, t, n, r) {
  t.child = e === null ? cf(t, null, n, r) : zn(t, e.child, n, r);
}
function ca(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return kn(t, l), r = Fu(e, t, n, r, o, l), n = ju(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (V && n && Pu(t), t.flags |= 1, Se(e, t, r, l), t.child);
}
function fa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Xu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Mf(e, t, o, r, l)) : (e = ml(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : hr, n(i, r) && e.ref === t.ref)
      return gt(e, t, l);
  }
  return t.flags |= 1, e = $t(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Mf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (hr(o, r) && e.ref === t.ref)
      if (_e = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (_e = !0);
      else
        return t.lanes = e.lanes, gt(e, t, l);
  }
  return Wi(e, t, n, r, l);
}
function Df(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(yn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(yn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(yn, Ne), Ne |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(yn, Ne), Ne |= r;
  return Se(e, t, l, n), t.child;
}
function Ff(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wi(e, t, n, r, l) {
  var o = Te(n) ? Xt : we.current;
  return o = Pn(t, o), kn(t, l), n = Fu(e, t, n, r, o, l), r = ju(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, gt(e, t, l)) : (V && r && Pu(t), t.flags |= 1, Se(e, t, n, l), t.child);
}
function da(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    zl(t);
  } else
    o = !1;
  if (kn(t, l), t.stateNode === null)
    fl(e, t), If(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ve(a) : (a = Te(n) ? Xt : we.current, a = Pn(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ia(t, i, r, a), xt = !1;
    var p = t.memoizedState;
    i.state = p, Il(t, r, i, l), s = t.memoizedState, u !== r || p !== s || Pe.current || xt ? (typeof h == "function" && (ji(t, n, h, r), s = t.memoizedState), (u = xt || oa(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, df(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ye(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ve(s) : (s = Te(n) ? Xt : we.current, s = Pn(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && ia(t, i, r, s), xt = !1, p = t.memoizedState, i.state = p, Il(t, r, i, l);
    var g = t.memoizedState;
    u !== m || p !== g || Pe.current || xt ? (typeof v == "function" && (ji(t, n, v, r), g = t.memoizedState), (a = xt || oa(t, n, a, r, p, g, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Hi(e, t, n, r, o, l);
}
function Hi(e, t, n, r, l, o) {
  Ff(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Js(t, n, !1), gt(e, t, o);
  r = t.stateNode, jm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = zn(t, e.child, null, o), t.child = zn(t, null, u, o)) : Se(e, t, u, o), t.memoizedState = r.state, l && Js(t, n, !0), t.child;
}
function jf(e) {
  var t = e.stateNode;
  t.pendingContext ? Zs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zs(e, t.context, !1), $u(e, t.containerInfo);
}
function pa(e, t, n, r, l) {
  return Tn(), zu(l), t.flags |= 256, Se(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bf(e, t, n) {
  var r = t.pendingProps, l = Q.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(Q, l & 1), e === null)
    return Di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = no(i, r, 0, null), e = Yt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ki(n), t.memoizedState = Vi, e) : Wu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Bm(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = $t(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = $t(u, o) : (o = Yt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Ki(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r;
  }
  return o = e.child, e = o.sibling, r = $t(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wu(e, t) {
  return t = no({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && zu(r), zn(t, e.child, null, n), e = Wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Bm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ei(Error(S(422))), qr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = no({ mode: "visible", children: r.children }, l, 0, null), o = Yt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zn(t, e.child, null, i), t.child.memoizedState = Ki(i), t.memoizedState = Vi, o);
  if (!(t.mode & 1))
    return qr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = ei(o, r, void 0), qr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, _e || u) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, yt(e, l), qe(r, e, l, -1));
    }
    return Yu(), r = ei(Error(S(421))), qr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = bm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Oe = Nt(l.nextSibling), Ie = t, V = !0, Ze = null, e !== null && (je[Be++] = ft, je[Be++] = dt, je[Be++] = Zt, ft = e.id, dt = e.overflow, Zt = t), t = Wu(t, r.children), t.flags |= 4096, t);
}
function ma(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ti(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Uf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = Q.current, r & 2)
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
  if (U(Q, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && $l(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ti(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && $l(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ti(t, !0, n, null, o);
        break;
      case "together":
        ti(t, !1, null, null, void 0);
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
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Um(e, t, n) {
  switch (t.tag) {
    case 3:
      jf(t), Tn();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      Te(t.type) && zl(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      U(Ll, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bf(e, t, n) : (U(Q, Q.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Uf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(Q, Q.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Df(e, t, n);
  }
  return gt(e, t, n);
}
var Wf, Qi, Hf, Vf;
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
Qi = function() {
};
Hf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Qt(ut.current);
    var o = null;
    switch (n) {
      case "input":
        l = mi(e, l), r = mi(e, r), o = [];
        break;
      case "select":
        l = Y({}, l, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = gi(e, l), r = gi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pl);
    }
    wi(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (sr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (sr.hasOwnProperty(a) ? (s != null && a === "onScroll" && W("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Wm(e, t, n) {
  var r = t.pendingProps;
  switch (Tu(t), t.tag) {
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
      return ye(t), null;
    case 1:
      return Te(t.type) && Tl(), ye(t), null;
    case 3:
      return r = t.stateNode, Rn(), H(Pe), H(we), Mu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (eu(Ze), Ze = null))), Qi(e, t), ye(t), null;
    case 5:
      Au(t);
      var l = Qt(Sr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Hf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return ye(t), null;
        }
        if (e = Qt(ut.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ot] = t, r[vr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Jn.length; l++)
                W(Jn[l], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W(
                "error",
                r
              ), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              Cs(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              _s(r, o), W("invalid", r);
          }
          wi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : sr.hasOwnProperty(i) && u != null && i === "onScroll" && W("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), Es(r, o, !0);
              break;
            case "textarea":
              Ur(r), Ps(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ot] = t, e[vr] = r, Wf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Si(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jn.length; l++)
                  W(Jn[l], e);
                l = r;
                break;
              case "source":
                W("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), l = r;
                break;
              case "details":
                W("toggle", e), l = r;
                break;
              case "input":
                Cs(e, r), l = mi(e, r), W("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Y({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                _s(e, r), l = gi(e, r), W("invalid", e);
                break;
              default:
                l = r;
            }
            wi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Sc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ar(e, s) : typeof s == "number" && ar(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (sr.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && du(e, o, s, i));
              }
            switch (n) {
              case "input":
                Ur(e), Es(e, r, !1);
                break;
              case "textarea":
                Ur(e), Ps(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? gn(e, !!r.multiple, o, !1) : r.defaultValue != null && gn(
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
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null)
        Vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Qt(Sr.current), Qt(ut.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = Ie, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return ye(t), null;
    case 13:
      if (H(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && Oe !== null && t.mode & 1 && !(t.flags & 128))
          sf(), Tn(), t.flags |= 98560, o = !1;
        else if (o = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[ot] = t;
          } else
            Tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ye(t), o = !1;
        } else
          Ze !== null && (eu(Ze), Ze = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? le === 0 && (le = 3) : Yu())), t.updateQueue !== null && (t.flags |= 4), ye(t), null);
    case 4:
      return Rn(), Qi(e, t), e === null && yr(t.stateNode.containerInfo), ye(t), null;
    case 10:
      return Lu(t.type._context), ye(t), null;
    case 17:
      return Te(t.type) && Tl(), ye(t), null;
    case 19:
      if (H(Q), o = t.memoizedState, o === null)
        return ye(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Kn(o, !1);
        else {
          if (le !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = $l(e), i !== null) {
                for (t.flags |= 128, Kn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(Q, Q.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && b() > Ln && (t.flags |= 128, r = !0, Kn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = $l(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
              return ye(t), null;
          } else
            2 * b() - o.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = Q.current, U(Q, r ? n & 1 | 2 : n & 1), t) : (ye(t), null);
    case 22:
    case 23:
      return Gu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ye(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Hm(e, t) {
  switch (Tu(t), t.tag) {
    case 1:
      return Te(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Rn(), H(Pe), H(we), Mu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Au(t), null;
    case 13:
      if (H(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        Tn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(Q), null;
    case 4:
      return Rn(), null;
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
var br = !1, ve = !1, Vm = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else
      n.current = null;
}
function Gi(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var ha = !1;
function Km(e, t) {
  if (Ni = Cl, e = Yc(), _u(e)) {
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
          var i = 0, u = -1, s = -1, a = 0, h = 0, m = e, p = null;
          t:
            for (; ; ) {
              for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (v = m.firstChild) !== null; )
                p = m, m = v;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++a === l && (u = i), p === o && ++h === r && (s = i), (v = m.nextSibling) !== null)
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
  for (Li = { focusedElem: e, selectionRange: n }, Cl = !1, _ = t; _ !== null; )
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
                  var y = g.memoizedProps, T = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ye(t.type, y), T);
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
          J(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, _ = e;
          break;
        }
        _ = t.return;
      }
  return g = ha, ha = !1, g;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Gi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function eo(e, t) {
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
function Yi(e) {
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
  t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[vr], delete t[$i], delete t[Tm], delete t[zm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Xi(e, t, n), e = e.sibling; e !== null; )
      Xi(e, t, n), e = e.sibling;
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; )
      Zi(e, t, n), e = e.sibling;
}
var ae = null, Xe = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; )
    Gf(e, t, n), n = n.sibling;
}
function Gf(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Ql, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || hn(n, t);
    case 6:
      var r = ae, l = Xe;
      ae = null, St(e, t, n), ae = r, Xe = l, ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? Yo(e.parentNode, n) : e.nodeType === 1 && Yo(e, n), pr(e)) : Yo(ae, n.stateNode));
      break;
    case 4:
      r = ae, l = Xe, ae = n.stateNode.containerInfo, Xe = !0, St(e, t, n), ae = r, Xe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Gi(n, t, i), l = l.next;
        } while (l !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (!ve && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          J(n, t, u);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, St(e, t, n), ve = r) : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vm()), t.forEach(function(r) {
      var l = eh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Ge(e, t) {
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
          throw Error(S(160));
        Gf(o, i, l), ae = null, Xe = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        J(l, t, a);
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
      if (Ge(t, e), et(e), r & 4) {
        try {
          lr(3, e, e.return), eo(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          lr(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      Ge(t, e), et(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Ge(t, e), et(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          ar(l, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && hc(l, o), Si(u, i);
            var a = Si(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Sc(l, m) : h === "dangerouslySetInnerHTML" ? vc(l, m) : h === "children" ? ar(l, m) : du(l, h, m, a);
            }
            switch (u) {
              case "input":
                hi(l, o);
                break;
              case "textarea":
                yc(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? gn(l, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? gn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[vr] = o;
          } catch (y) {
            J(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ge(t, e), et(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ge(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          pr(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      break;
    case 4:
      Ge(t, e), et(e);
      break;
    case 13:
      Ge(t, e), et(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ku = b())), r & 4 && ga(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || h, Ge(t, e), ve = a) : Ge(t, e), et(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (_ = e, h = e.child; h !== null; ) {
            for (m = _ = h; _ !== null; ) {
              switch (p = _, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, p, p.return);
                  break;
                case 1:
                  hn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      J(r, n, y);
                    }
                  }
                  break;
                case 5:
                  hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    wa(m);
                    continue;
                  }
              }
              v !== null ? (v.return = p, _ = v) : wa(m);
            }
            h = h.sibling;
          }
        e:
          for (h = null, m = e; ; ) {
            if (m.tag === 5) {
              if (h === null) {
                h = m;
                try {
                  l = m.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = wc("display", i));
                } catch (y) {
                  J(e, e.return, y);
                }
              }
            } else if (m.tag === 6) {
              if (h === null)
                try {
                  m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                } catch (y) {
                  J(e, e.return, y);
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
      Ge(t, e), et(e), r & 4 && ga(e);
      break;
    case 21:
      break;
    default:
      Ge(
        t,
        e
      ), et(e);
  }
}
function et(e) {
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
          var l = r.stateNode;
          r.flags & 32 && (ar(l, ""), r.flags &= -33);
          var o = ya(e);
          Zi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ya(e);
          Xi(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      J(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qm(e, t, n) {
  _ = e, Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || br;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = br;
        var a = ve;
        if (br = i, (ve = s) && !a)
          for (_ = l; _ !== null; )
            i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? Sa(l) : s !== null ? (s.return = i, _ = s) : Sa(l);
        for (; o !== null; )
          _ = o, Xf(o), o = o.sibling;
        _ = l, br = u, ve = a;
      }
      va(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, _ = o) : va(e);
  }
}
function va(e) {
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
              ve || eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && na(t, o, r);
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
              throw Error(S(163));
          }
        ve || t.flags & 512 && Yi(t);
      } catch (p) {
        J(t, t.return, p);
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
function wa(e) {
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
function Sa(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eo(4, t);
          } catch (s) {
            J(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              J(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yi(t);
          } catch (s) {
            J(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yi(t);
          } catch (s) {
            J(t, i, s);
          }
      }
    } catch (s) {
      J(t, t.return, s);
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
var Gm = Math.ceil, Dl = wt.ReactCurrentDispatcher, Hu = wt.ReactCurrentOwner, He = wt.ReactCurrentBatchConfig, A = 0, ue = null, ne = null, fe = 0, Ne = 0, yn = Ft(0), le = 0, Er = null, qt = 0, to = 0, Vu = 0, or = null, Ee = null, Ku = 0, Ln = 1 / 0, at = null, Fl = !1, Ji = null, Ot = null, el = !1, Pt = null, jl = 0, ir = 0, qi = null, dl = -1, pl = 0;
function ke() {
  return A & 6 ? b() : dl !== -1 ? dl : dl = b();
}
function It(e) {
  return e.mode & 1 ? A & 2 && fe !== 0 ? fe & -fe : Nm.transition !== null ? (pl === 0 && (pl = Oc()), pl) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jc(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < ir)
    throw ir = 0, qi = null, Error(S(185));
  Rr(e, n, r), (!(A & 2) || e !== ue) && (e === ue && (!(A & 2) && (to |= n), le === 4 && Et(e, fe)), ze(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Ln = b() + 500, Jl && jt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Np(e, t);
  var r = xl(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && Rs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Rs(n), t === 1)
      e.tag === 0 ? Rm(ka.bind(null, e)) : lf(ka.bind(null, e)), _m(function() {
        !(A & 6) && jt();
      }), n = null;
    else {
      switch (Ic(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = Nc;
          break;
        case 16:
          n = kl;
          break;
        case 536870912:
          n = Lc;
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
  if (dl = -1, pl = 0, A & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n)
    return null;
  var r = xl(e, e === ue ? fe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = qf();
    (ue !== e || fe !== t) && (at = null, Ln = b() + 500, Gt(e, t));
    do
      try {
        Zm();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (1);
    Nu(), Dl.current = o, A = l, ne !== null ? t = 0 : (ue = null, fe = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (l = _i(e), l !== 0 && (r = l, t = bi(e, l))), t === 1)
      throw n = Er, Gt(e, 0), Et(e, r), ze(e, b()), n;
    if (t === 6)
      Et(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Ym(l) && (t = Bl(e, r), t === 2 && (o = _i(e), o !== 0 && (r = o, t = bi(e, o))), t === 1))
        throw n = Er, Gt(e, 0), Et(e, r), ze(e, b()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ht(e, Ee, at);
          break;
        case 3:
          if (Et(e, r), (r & 130023424) === r && (t = Ku + 500 - b(), 10 < t)) {
            if (xl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ke(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ii(Ht.bind(null, e, Ee, at), t);
            break;
          }
          Ht(e, Ee, at);
          break;
        case 4:
          if (Et(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Je(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ii(Ht.bind(null, e, Ee, at), r);
            break;
          }
          Ht(e, Ee, at);
          break;
        case 5:
          Ht(e, Ee, at);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ze(e, b()), e.callbackNode === n ? Zf.bind(null, e) : null;
}
function bi(e, t) {
  var n = or;
  return e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && eu(t)), e;
}
function eu(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function Ym(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!be(o(), l))
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
  for (t &= ~Vu, t &= ~to, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ka(e) {
  if (A & 6)
    throw Error(S(327));
  xn();
  var t = xl(e, 0);
  if (!(t & 1))
    return ze(e, b()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && (t = r, n = bi(e, r));
  }
  if (n === 1)
    throw n = Er, Gt(e, 0), Et(e, t), ze(e, b()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ht(e, Ee, at), ze(e, b()), null;
}
function Qu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Ln = b() + 500, Jl && jt());
  }
}
function bt(e) {
  Pt !== null && Pt.tag === 0 && !(A & 6) && xn();
  var t = A;
  A |= 1;
  var n = He.transition, r = j;
  try {
    if (He.transition = null, j = 1, e)
      return e();
  } finally {
    j = r, He.transition = n, A = t, !(A & 6) && jt();
  }
}
function Gu() {
  Ne = yn.current, H(yn);
}
function Gt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Em(n)), ne !== null)
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch (Tu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Tl();
          break;
        case 3:
          Rn(), H(Pe), H(we), Mu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
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
  if (ue = e, ne = e = $t(e.current, null), fe = Ne = t, le = 0, Er = null, Vu = to = qt = 0, Ee = or = null, Kt !== null) {
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
function Jf(e, t) {
  do {
    var n = ne;
    try {
      if (Nu(), al.current = Ml, Al) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Al = !1;
      }
      if (Jt = 0, ie = re = G = null, rr = !1, kr = 0, Hu.current = null, n === null || n.return === null) {
        le = 1, Er = t, ne = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = fe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = sa(i);
          if (v !== null) {
            v.flags &= -257, aa(v, i, u, o, t), v.mode & 1 && ua(o, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ua(o, a, t), Yu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var T = sa(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), aa(T, i, u, o, t), zu(Nn(s, u));
            break e;
          }
        }
        o = s = Nn(s, u), le !== 4 && (le = 2), or === null ? or = [o] : or.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = $f(o, s, t);
              ta(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Af(o, u, t);
                ta(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ed(n);
    } catch (C) {
      t = C, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qf() {
  var e = Dl.current;
  return Dl.current = Ml, e === null ? Ml : e;
}
function Yu() {
  (le === 0 || le === 3 || le === 2) && (le = 4), ue === null || !(qt & 268435455) && !(to & 268435455) || Et(ue, fe);
}
function Bl(e, t) {
  var n = A;
  A |= 2;
  var r = qf();
  (ue !== e || fe !== t) && (at = null, Gt(e, t));
  do
    try {
      Xm();
      break;
    } catch (l) {
      Jf(e, l);
    }
  while (1);
  if (Nu(), A = n, Dl.current = r, ne !== null)
    throw Error(S(261));
  return ue = null, fe = 0, le;
}
function Xm() {
  for (; ne !== null; )
    bf(ne);
}
function Zm() {
  for (; ne !== null && !kp(); )
    bf(ne);
}
function bf(e) {
  var t = nd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : ne = t, Hu.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hm(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, ne = null;
        return;
      }
    } else if (n = Wm(n, t, Ne), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Ht(e, t, n) {
  var r = j, l = He.transition;
  try {
    He.transition = null, j = 1, Jm(e, t, n, r);
  } finally {
    He.transition = l, j = r;
  }
  return null;
}
function Jm(e, t, n, r) {
  do
    xn();
  while (Pt !== null);
  if (A & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Lp(e, o), e === ue && (ne = ue = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, rd(kl, function() {
    return xn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = He.transition, He.transition = null;
    var i = j;
    j = 1;
    var u = A;
    A |= 4, Hu.current = null, Km(e, n), Yf(n, e), gm(Li), Cl = !!Ni, Li = Ni = null, e.current = n, Qm(n), xp(), A = u, j = i, He.transition = o;
  } else
    e.current = n;
  if (el && (el = !1, Pt = e, jl = l), o = e.pendingLanes, o === 0 && (Ot = null), _p(n.stateNode), ze(e, b()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Fl)
    throw Fl = !1, e = Ji, Ji = null, e;
  return jl & 1 && e.tag !== 0 && xn(), o = e.pendingLanes, o & 1 ? e === qi ? ir++ : (ir = 0, qi = e) : ir = 0, jt(), null;
}
function xn() {
  if (Pt !== null) {
    var e = Ic(jl), t = He.transition, n = j;
    try {
      if (He.transition = null, j = 16 > e ? 16 : e, Pt === null)
        var r = !1;
      else {
        if (e = Pt, Pt = null, jl = 0, A & 6)
          throw Error(S(331));
        var l = A;
        for (A |= 4, _ = e.current; _ !== null; ) {
          var o = _, i = o.child;
          if (_.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, _ = m;
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var p = h.sibling, v = h.return;
                      if (Kf(h), h === a) {
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
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var T = y.sibling;
                    y.sibling = null, y = T;
                  } while (y !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, _ = i;
          else
            e:
              for (; _ !== null; ) {
                if (o = _, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, _ = f;
                  break e;
                }
                _ = o.return;
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
                        eo(9, u);
                    }
                  } catch (C) {
                    J(u, u.return, C);
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
        if (A = l, jt(), it && typeof it.onPostCommitFiberRoot == "function")
          try {
            it.onPostCommitFiberRoot(Ql, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      j = n, He.transition = t;
    }
  }
  return !1;
}
function xa(e, t, n) {
  t = Nn(n, t), t = $f(e, t, 1), e = Lt(e, t, 1), t = ke(), e !== null && (Rr(e, 1, t), ze(e, t));
}
function J(e, t, n) {
  if (e.tag === 3)
    xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = Nn(n, e), e = Af(t, e, 1), t = Lt(t, e, 1), e = ke(), t !== null && (Rr(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ke(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (fe & n) === n && (le === 4 || le === 3 && (fe & 130023424) === fe && 500 > b() - Ku ? Gt(e, 0) : Vu |= n), ze(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = ke();
  e = yt(e, t), e !== null && (Rr(e, t, n), ze(e, n));
}
function bm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function eh(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), td(e, n);
}
var nd;
nd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current)
      _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return _e = !1, Um(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else
    _e = !1, V && t.flags & 1048576 && of(t, Nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fl(e, t), e = t.pendingProps;
      var l = Pn(t, we.current);
      kn(t, n), l = Fu(null, t, r, e, l, n);
      var o = ju();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (o = !0, zl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Iu(t), l.updater = bl, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Hi(null, t, r, !0, o, n)) : (t.tag = 0, V && o && Pu(t), Se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = nh(r), e = Ye(r, e), l) {
          case 0:
            t = Wi(null, t, r, e, n);
            break e;
          case 1:
            t = da(null, t, r, e, n);
            break e;
          case 11:
            t = ca(null, t, r, e, n);
            break e;
          case 14:
            t = fa(null, t, r, Ye(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), Wi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), da(e, t, r, l, n);
    case 3:
      e: {
        if (jf(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, df(e, t), Il(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = Nn(Error(S(423)), t), t = pa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Nn(Error(S(424)), t), t = pa(e, t, r, n, l);
            break e;
          } else
            for (Oe = Nt(t.stateNode.containerInfo.firstChild), Ie = t, V = !0, Ze = null, n = cf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Tn(), r === l) {
            t = gt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pf(t), e === null && Di(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Oi(r, l) ? i = null : o !== null && Oi(r, o) && (t.flags |= 32), Ff(e, t), Se(e, t, i, n), t.child;
    case 6:
      return e === null && Di(t), null;
    case 13:
      return Bf(e, t, n);
    case 4:
      return $u(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), ca(e, t, r, l, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(Ll, r._currentValue), r._currentValue = i, o !== null)
          if (be(o.value, i)) {
            if (o.children === l.children && !Pe.current) {
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
                      s = pt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Fi(
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
                  throw Error(S(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Fi(i, n, t), i = o.sibling;
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
        Se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, kn(t, n), l = Ve(l), r = r(l), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ye(r, t.pendingProps), l = Ye(r.type, l), fa(e, t, r, l, n);
    case 15:
      return Mf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ye(r, l), fl(e, t), t.tag = 1, Te(r) ? (e = !0, zl(t)) : e = !1, kn(t, n), If(t, r, l), Bi(t, r, l, n), Hi(null, t, r, !0, e, n);
    case 19:
      return Uf(e, t, n);
    case 22:
      return Df(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function rd(e, t) {
  return Rc(e, t);
}
function th(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new th(e, t, n, r);
}
function Xu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function nh(e) {
  if (typeof e == "function")
    return Xu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mu)
      return 11;
    if (e === hu)
      return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ml(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Xu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case on:
          return Yt(n.children, l, o, t);
        case pu:
          i = 8, l |= 8;
          break;
        case ci:
          return e = We(12, n, t, l | 2), e.elementType = ci, e.lanes = o, e;
        case fi:
          return e = We(13, n, t, l), e.elementType = fi, e.lanes = o, e;
        case di:
          return e = We(19, n, t, l), e.elementType = di, e.lanes = o, e;
        case dc:
          return no(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case cc:
                i = 10;
                break e;
              case fc:
                i = 9;
                break e;
              case mu:
                i = 11;
                break e;
              case hu:
                i = 14;
                break e;
              case kt:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = We(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Yt(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function no(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ni(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function ri(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function rh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Do(0), this.expirationTimes = Do(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Do(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zu(e, t, n, r, l, o, i, u, s) {
  return e = new rh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Iu(o), e;
}
function lh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ln, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ld(e) {
  if (!e)
    return Mt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1)
      throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
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
    if (Te(n))
      return rf(e, n, t);
  }
  return t;
}
function od(e, t, n, r, l, o, i, u, s) {
  return e = Zu(n, r, !0, e, l, o, i, u, s), e.context = ld(null), n = e.current, r = ke(), l = It(n), o = pt(r, l), o.callback = t ?? null, Lt(n, o, l), e.current.lanes = l, Rr(e, l, r), ze(e, r), e;
}
function ro(e, t, n, r) {
  var l = t.current, o = ke(), i = It(l);
  return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = pt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Lt(l, t, i), e !== null && (qe(e, l, i, o), sl(e, l, i)), i;
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
function Ca(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ju(e, t) {
  Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function oh() {
  return null;
}
var id = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qu(e) {
  this._internalRoot = e;
}
lo.prototype.render = qu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  ro(e, t, null, null);
};
lo.prototype.unmount = qu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    bt(function() {
      ro(null, e, null, null);
    }), t[ht] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Mc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
      ;
    Ct.splice(n, 0, e), n === 0 && Fc(e);
  }
};
function bu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function oo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ea() {
}
function ih(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Ul(i);
        o.call(a);
      };
    }
    var i = od(t, r, e, 0, null, !1, !1, "", Ea);
    return e._reactRootContainer = i, e[ht] = i.current, yr(e.nodeType === 8 ? e.parentNode : e), bt(), i;
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
  var s = Zu(e, 0, !1, null, null, !1, !1, "", Ea);
  return e._reactRootContainer = s, e[ht] = s.current, yr(e.nodeType === 8 ? e.parentNode : e), bt(function() {
    ro(t, s, n, r);
  }), s;
}
function io(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Ul(i);
        u.call(s);
      };
    }
    ro(t, i, e, l);
  } else
    i = ih(n, t, e, l, r);
  return Ul(i);
}
$c = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 && (vu(t, n | 1), ze(t, b()), !(A & 6) && (Ln = b() + 500, jt()));
      }
      break;
    case 13:
      bt(function() {
        var r = yt(e, 1);
        if (r !== null) {
          var l = ke();
          qe(r, e, 1, l);
        }
      }), Ju(e, 1);
  }
};
wu = function(e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = ke();
      qe(t, e, 134217728, n);
    }
    Ju(e, 134217728);
  }
};
Ac = function(e) {
  if (e.tag === 13) {
    var t = It(e), n = yt(e, t);
    if (n !== null) {
      var r = ke();
      qe(n, e, t, r);
    }
    Ju(e, t);
  }
};
Mc = function() {
  return j;
};
Dc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
xi = function(e, t, n) {
  switch (t) {
    case "input":
      if (hi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Zl(r);
            if (!l)
              throw Error(S(90));
            mc(r), hi(r, l);
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
Cc = Qu;
Ec = bt;
var uh = { usingClientEntryPoint: !1, Events: [Lr, cn, Zl, kc, xc, Qu] }, Qn = { findFiberByHostInstance: Vt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sh = { bundleType: Qn.bundleType, version: Qn.version, rendererPackageName: Qn.rendererPackageName, rendererConfig: Qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Qn.findFiberByHostInstance || oh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      Ql = tl.inject(sh), it = tl;
    } catch {
    }
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uh;
Me.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bu(t))
    throw Error(S(200));
  return lh(e, t, null, n);
};
Me.createRoot = function(e, t) {
  if (!bu(e))
    throw Error(S(299));
  var n = !1, r = "", l = id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zu(e, 1, !1, null, null, n, !1, r, l), e[ht] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new qu(t);
};
Me.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Me.flushSync = function(e) {
  return bt(e);
};
Me.hydrate = function(e, t, n) {
  if (!oo(t))
    throw Error(S(200));
  return io(null, e, t, !0, n);
};
Me.hydrateRoot = function(e, t, n) {
  if (!bu(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = id;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, l, !1, o, i), e[ht] = t.current, yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new lo(t);
};
Me.render = function(e, t, n) {
  if (!oo(t))
    throw Error(S(200));
  return io(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function(e) {
  if (!oo(e))
    throw Error(S(40));
  return e._reactRootContainer ? (bt(function() {
    io(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ht] = null;
    });
  }), !0) : !1;
};
Me.unstable_batchedUpdates = Qu;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!oo(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return io(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function ud() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (e) {
      console.error(e);
    }
}
ud(), ic.exports = Me;
var ah = ic.exports, sd, _a = ah;
sd = _a.createRoot, _a.hydrateRoot;
function ch(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Pa = "$$material";
function de() {
  return de = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, de.apply(null, arguments);
}
function uo(e, t) {
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
var fh = !1;
function dh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ph(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var mh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !fh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ph(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = dh(l);
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
}(), ge = "-ms-", Wl = "-moz-", M = "-webkit-", ad = "comm", es = "rule", ts = "decl", hh = "@import", cd = "@keyframes", yh = "@layer", gh = Math.abs, so = String.fromCharCode, vh = Object.assign;
function wh(e, t) {
  return ce(e, 0) ^ 45 ? (((t << 2 ^ ce(e, 0)) << 2 ^ ce(e, 1)) << 2 ^ ce(e, 2)) << 2 ^ ce(e, 3) : 0;
}
function fd(e) {
  return e.trim();
}
function Sh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function tu(e, t) {
  return e.indexOf(t);
}
function ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function _r(e, t, n) {
  return e.slice(t, n);
}
function rt(e) {
  return e.length;
}
function ns(e) {
  return e.length;
}
function nl(e, t) {
  return t.push(e), e;
}
function kh(e, t) {
  return e.map(t).join("");
}
var ao = 1, On = 1, dd = 0, Re = 0, te = 0, Mn = "";
function co(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: ao, column: On, length: i, return: "" };
}
function Gn(e, t) {
  return vh(co("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xh() {
  return te;
}
function Ch() {
  return te = Re > 0 ? ce(Mn, --Re) : 0, On--, te === 10 && (On = 1, ao--), te;
}
function $e() {
  return te = Re < dd ? ce(Mn, Re++) : 0, On++, te === 10 && (On = 1, ao++), te;
}
function st() {
  return ce(Mn, Re);
}
function hl() {
  return Re;
}
function Ir(e, t) {
  return _r(Mn, e, t);
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
  return ao = On = 1, dd = rt(Mn = e), Re = 0, [];
}
function md(e) {
  return Mn = "", e;
}
function yl(e) {
  return fd(Ir(Re - 1, nu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Eh(e) {
  for (; (te = st()) && te < 33; )
    $e();
  return Pr(e) > 2 || Pr(te) > 3 ? "" : " ";
}
function _h(e, t) {
  for (; --t && $e() && !(te < 48 || te > 102 || te > 57 && te < 65 || te > 70 && te < 97); )
    ;
  return Ir(e, hl() + (t < 6 && st() == 32 && $e() == 32));
}
function nu(e) {
  for (; $e(); )
    switch (te) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && nu(te);
        break;
      case 40:
        e === 41 && nu(e);
        break;
      case 92:
        $e();
        break;
    }
  return Re;
}
function Ph(e, t) {
  for (; $e() && e + te !== 47 + 10; )
    if (e + te === 42 + 42 && st() === 47)
      break;
  return "/*" + Ir(t, Re - 1) + "*" + so(e === 47 ? e : $e());
}
function Th(e) {
  for (; !Pr(st()); )
    $e();
  return Ir(e, Re);
}
function zh(e) {
  return md(gl("", null, null, null, [""], e = pd(e), 0, [0], e));
}
function gl(e, t, n, r, l, o, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, v = 0, g = 0, y = 1, T = 1, f = 1, c = 0, d = "", w = l, C = o, E = r, k = d; T; )
    switch (g = c, c = $e()) {
      case 40:
        if (g != 108 && ce(k, m - 1) == 58) {
          tu(k += D(yl(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += yl(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Eh(g);
        break;
      case 92:
        k += _h(hl() - 1, 7);
        continue;
      case 47:
        switch (st()) {
          case 42:
          case 47:
            nl(Rh(Ph($e(), hl()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = rt(k) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            T = 0;
          case 59 + h:
            f == -1 && (k = D(k, /\f/g, "")), v > 0 && rt(k) - m && nl(v > 32 ? za(k + ";", r, n, m - 1) : za(D(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (nl(E = Ta(k, t, n, a, h, l, u, d, w = [], C = [], m), o), c === 123)
              if (h === 0)
                gl(k, t, E, E, w, o, m, u, C);
              else
                switch (p === 99 && ce(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(e, E, E, r && nl(Ta(e, E, E, 0, 0, l, u, d, l, w = [], m), C), l, C, m, u, r ? w : C);
                    break;
                  default:
                    gl(k, E, E, E, [""], C, 0, u, C);
                }
        }
        a = h = v = 0, y = f = 1, d = k = "", m = i;
        break;
      case 58:
        m = 1 + rt(k), v = g;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Ch() == 125)
            continue;
        }
        switch (k += so(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (rt(k) - 1) * f, f = 1;
            break;
          case 64:
            st() === 45 && (k += yl($e())), p = st(), h = m = rt(d = k += Th(hl())), c++;
            break;
          case 45:
            g === 45 && rt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Ta(e, t, n, r, l, o, i, u, s, a, h) {
  for (var m = l - 1, p = l === 0 ? o : [""], v = ns(p), g = 0, y = 0, T = 0; g < r; ++g)
    for (var f = 0, c = _r(e, m + 1, m = gh(y = i[g])), d = e; f < v; ++f)
      (d = fd(y > 0 ? p[f] + " " + c : D(c, /&\f/g, p[f]))) && (s[T++] = d);
  return co(e, t, n, l === 0 ? es : u, s, a, h);
}
function Rh(e, t, n) {
  return co(e, t, n, ad, so(xh()), _r(e, 2, -2), 0);
}
function za(e, t, n, r) {
  return co(e, t, n, ts, _r(e, 0, r), _r(e, r + 1, -1), r);
}
function Cn(e, t) {
  for (var n = "", r = ns(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Nh(e, t, n, r) {
  switch (e.type) {
    case yh:
      if (e.children.length)
        break;
    case hh:
    case ts:
      return e.return = e.return || e.value;
    case ad:
      return "";
    case cd:
      return e.return = e.value + "{" + Cn(e.children, r) + "}";
    case es:
      e.value = e.props.join(",");
  }
  return rt(n = Cn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Lh(e) {
  var t = ns(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
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
var Ih = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = st(), l === 38 && o === 12 && (n[r] = 1), !Pr(o); )
    $e();
  return Ir(t, Re);
}, $h = function(t, n) {
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
        t[r] += so(l);
    }
  while (l = $e());
  return t;
}, Ah = function(t, n) {
  return md($h(pd(t), n));
}, Ra = /* @__PURE__ */ new WeakMap(), Mh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ra.get(r)) && !l) {
      Ra.set(t, !0);
      for (var o = [], i = Ah(n, o), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
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
  switch (wh(e, t)) {
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
      return M + e + Wl + e + ge + e + e;
    case 6828:
    case 4268:
      return M + e + ge + e + e;
    case 6165:
      return M + e + ge + "flex-" + e + e;
    case 5187:
      return M + e + D(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + ge + "flex-$1$2") + e;
    case 5443:
      return M + e + ge + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + ge + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + ge + D(e, "shrink", "negative") + e;
    case 5292:
      return M + e + ge + D(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + D(e, "-grow", "") + M + e + ge + D(e, "grow", "positive") + e;
    case 4554:
      return M + D(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
        switch (ce(e, t + 1)) {
          case 109:
            if (ce(e, t + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Wl + (ce(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~tu(e, "stretch") ? yd(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ce(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ce(e, rt(e) - 3 - (~tu(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + M) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ce(e, t + 11)) {
        case 114:
          return M + e + ge + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + ge + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + ge + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + ge + e + e;
  }
  return e;
}
var Fh = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ts:
        t.return = yd(t.value, t.length);
        break;
      case cd:
        return Cn([Gn(t, {
          value: D(t.value, "@", "@" + M)
        })], l);
      case es:
        if (t.length)
          return kh(t.props, function(o) {
            switch (Sh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Cn([Gn(t, {
                  props: [D(o, /:(read-\w+)/, ":" + Wl + "$1")]
                })], l);
              case "::placeholder":
                return Cn([Gn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Gn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + Wl + "$1")]
                }), Gn(t, {
                  props: [D(o, /:(plac\w+)/, ge + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, jh = [Fh], Bh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var T = y.getAttribute("data-emotion");
      T.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || jh, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var T = y.getAttribute("data-emotion").split(" "), f = 1; f < T.length; f++)
        o[T[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [Mh, Dh];
  {
    var h, m = [Nh, Oh(function(y) {
      h.insert(y);
    })], p = Lh(a.concat(l, m)), v = function(T) {
      return Cn(zh(T), p);
    };
    s = function(T, f, c, d) {
      h = c, v(T ? T + "{" + f.styles + "}" : f.styles), d && (g.inserted[f.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new mh({
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
var se = typeof Symbol == "function" && Symbol.for, rs = se ? Symbol.for("react.element") : 60103, ls = se ? Symbol.for("react.portal") : 60106, fo = se ? Symbol.for("react.fragment") : 60107, po = se ? Symbol.for("react.strict_mode") : 60108, mo = se ? Symbol.for("react.profiler") : 60114, ho = se ? Symbol.for("react.provider") : 60109, yo = se ? Symbol.for("react.context") : 60110, os = se ? Symbol.for("react.async_mode") : 60111, go = se ? Symbol.for("react.concurrent_mode") : 60111, vo = se ? Symbol.for("react.forward_ref") : 60112, wo = se ? Symbol.for("react.suspense") : 60113, Uh = se ? Symbol.for("react.suspense_list") : 60120, So = se ? Symbol.for("react.memo") : 60115, ko = se ? Symbol.for("react.lazy") : 60116, Wh = se ? Symbol.for("react.block") : 60121, Hh = se ? Symbol.for("react.fundamental") : 60117, Vh = se ? Symbol.for("react.responder") : 60118, Kh = se ? Symbol.for("react.scope") : 60119;
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rs:
        switch (e = e.type, e) {
          case os:
          case go:
          case fo:
          case mo:
          case po:
          case wo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case yo:
              case vo:
              case ko:
              case So:
              case ho:
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
  return Fe(e) === go;
}
B.AsyncMode = os;
B.ConcurrentMode = go;
B.ContextConsumer = yo;
B.ContextProvider = ho;
B.Element = rs;
B.ForwardRef = vo;
B.Fragment = fo;
B.Lazy = ko;
B.Memo = So;
B.Portal = ls;
B.Profiler = mo;
B.StrictMode = po;
B.Suspense = wo;
B.isAsyncMode = function(e) {
  return vd(e) || Fe(e) === os;
};
B.isConcurrentMode = vd;
B.isContextConsumer = function(e) {
  return Fe(e) === yo;
};
B.isContextProvider = function(e) {
  return Fe(e) === ho;
};
B.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rs;
};
B.isForwardRef = function(e) {
  return Fe(e) === vo;
};
B.isFragment = function(e) {
  return Fe(e) === fo;
};
B.isLazy = function(e) {
  return Fe(e) === ko;
};
B.isMemo = function(e) {
  return Fe(e) === So;
};
B.isPortal = function(e) {
  return Fe(e) === ls;
};
B.isProfiler = function(e) {
  return Fe(e) === mo;
};
B.isStrictMode = function(e) {
  return Fe(e) === po;
};
B.isSuspense = function(e) {
  return Fe(e) === wo;
};
B.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === fo || e === go || e === mo || e === po || e === wo || e === Uh || typeof e == "object" && e !== null && (e.$$typeof === ko || e.$$typeof === So || e.$$typeof === ho || e.$$typeof === yo || e.$$typeof === vo || e.$$typeof === Hh || e.$$typeof === Vh || e.$$typeof === Kh || e.$$typeof === Wh);
};
B.typeOf = Fe;
gd.exports = B;
var Qh = gd.exports, wd = Qh, Gh = {
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
Sd[wd.ForwardRef] = Gh;
Sd[wd.Memo] = Yh;
var Xh = !0;
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
  Xh === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, us = function(t, n, r) {
  is(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Zh(e) {
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
var Jh = {
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
}, qh = !1, bh = /[A-Z]|^ms/g, ey = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xd = function(t) {
  return t.charCodeAt(1) === 45;
}, Na = function(t) {
  return t != null && typeof t != "boolean";
}, li = /* @__PURE__ */ hd(function(e) {
  return xd(e) ? e : e.replace(bh, "-$&").toLowerCase();
}), La = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ey, function(r, l, o) {
          return lt = {
            name: l,
            styles: o,
            next: lt
          }, l;
        });
  }
  return Jh[t] !== 1 && !xd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ty = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            lt = {
              name: i.name,
              styles: i.styles,
              next: lt
            }, i = i.next;
        var u = o.styles + ";";
        return u;
      }
      return ny(e, t, n);
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
function ny(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += Tr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Na(u) && (r += li(o) + ":" + La(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && qh)
          throw new Error(ty);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Na(i[s]) && (r += li(o) + ":" + La(o, i[s]) + ";");
        else {
          var a = Tr(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += li(o) + ":" + a + ";";
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
var Oa = /label:\s*([^\s;{]+)\s*(;|$)/g, lt;
function xo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  lt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, l += Tr(n, t, o);
  else {
    var i = o;
    l += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += Tr(n, t, e[u]), r) {
      var s = o;
      l += s[u];
    }
  Oa.lastIndex = 0;
  for (var a = "", h; (h = Oa.exec(l)) !== null; )
    a += "-" + h[1];
  var m = Zh(l) + a;
  return {
    name: m,
    styles: l,
    next: lt
  };
}
var ry = function(t) {
  return t();
}, Cd = si["useInsertionEffect"] ? si["useInsertionEffect"] : !1, Ed = Cd || ry, Ia = Cd || N.useLayoutEffect, ly = !1, _d = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Bh({
    key: "css"
  }) : null
);
_d.Provider;
var ss = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var l = N.useContext(_d);
    return t(n, l, r);
  });
}, $r = /* @__PURE__ */ N.createContext({}), as = {}.hasOwnProperty, ru = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", oy = function(t, n) {
  var r = {};
  for (var l in n)
    as.call(n, l) && (r[l] = n[l]);
  return r[ru] = t, r;
}, iy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Ed(function() {
    return us(n, r, l);
  }), null;
}, uy = /* @__PURE__ */ ss(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[ru], o = [r], i = "";
  typeof e.className == "string" ? i = kd(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = xo(o, void 0, N.useContext($r));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    as.call(e, a) && a !== "css" && a !== ru && !ly && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(iy, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ N.createElement(l, s));
}), sy = uy, oi = { exports: {} }, $a;
function ay() {
  return $a || ($a = 1, function(e) {
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
  }(oi)), oi.exports;
}
ay();
var Aa = function(t, n) {
  var r = arguments;
  if (n == null || !as.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = sy, o[1] = oy(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return N.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Aa || (Aa = {}));
var cy = /* @__PURE__ */ ss(function(e, t) {
  var n = e.styles, r = xo([n], void 0, N.useContext($r)), l = N.useRef();
  return Ia(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Ia(function() {
    var o = l.current, i = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && us(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), fy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, dy = /* @__PURE__ */ hd(
  function(e) {
    return fy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), py = !1, my = dy, hy = function(t) {
  return t !== "theme";
}, Ma = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? my : hy;
}, Da = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, yy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Ed(function() {
    return us(n, r, l);
  }), null;
}, gy = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = Da(t, n, r), s = u || Ma(l), a = !s("as");
  return function() {
    var h = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && m.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var p = h[0];
      m.push(p[0]);
      for (var v = h.length, g = 1; g < v; g++)
        m.push(h[g], p[g]);
    }
    var y = ss(function(T, f, c) {
      var d = a && T.as || l, w = "", C = [], E = T;
      if (T.theme == null) {
        E = {};
        for (var k in T)
          E[k] = T[k];
        E.theme = N.useContext($r);
      }
      typeof T.className == "string" ? w = kd(f.registered, C, T.className) : T.className != null && (w = T.className + " ");
      var z = xo(m.concat(C), f.registered, E);
      w += f.key + "-" + z.name, i !== void 0 && (w += " " + i);
      var K = a && u === void 0 ? Ma(d) : s, O = {};
      for (var me in T)
        a && me === "as" || K(me) && (O[me] = T[me]);
      return O.className = w, c && (O.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(yy, {
        cache: f,
        serialized: z,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ N.createElement(d, O));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = l, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && py ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(T, f) {
      var c = e(T, de({}, n, f, {
        shouldForwardProp: Da(y, f, !0)
      }));
      return c.apply(void 0, m);
    }, y;
  };
}, vy = [
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
], Fa = gy.bind(null);
vy.forEach(function(e) {
  Fa[e] = Fa(e);
});
function wy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Sy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ x(cy, {
    styles: typeof t == "function" ? (l) => t(wy(l) ? n : l) : t
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
function ky(e) {
  return ja[0] = e, xo(ja);
}
function rn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pd(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !rn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pd(e[n]);
  }), t;
}
function Hl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return rn(e) && rn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ N.isValidElement(t[l]) ? r[l] = t[l] : rn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && rn(e[l]) ? r[l] = Hl(e[l], t[l], n) : n.clone ? r[l] = rn(t[l]) ? Pd(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const xy = ["values", "unit", "step"], Cy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function Ey(e) {
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
  } = e, l = uo(e, xy), o = Cy(t), i = Object.keys(o);
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
  return de({
    keys: i,
    values: o,
    up: u,
    down: s,
    between: a,
    only: h,
    not: m,
    unit: n
  }, l);
}
const _y = {
  borderRadius: 4
}, Py = _y;
function ur(e, t) {
  return t ? Hl(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const cs = {
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
}, Ba = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cs[e]}px)`
};
function vt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Ba;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Ba;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(o.values || cs).indexOf(u) !== -1) {
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
function Ty(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const o = e.up(l);
    return r[o] = {}, r;
  }, {})) || {};
}
function Ua(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Td(e) {
  if (typeof e != "string")
    throw new Error(ch(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Co(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((l, o) => l && l[o] ? l[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, l) => r && r[l] != null ? r[l] : null, e);
}
function Vl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = Co(e, n) || r, t && (l = t(l, r, e)), l;
}
function ee(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Co(s, r) || {};
    return vt(i, u, (m) => {
      let p = Vl(a, l, m);
      return m === p && typeof m == "string" && (p = Vl(a, l, `${t}${m === "default" ? "" : Td(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function zy(e) {
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
}, Wa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ly = zy((e) => {
  if (e.length > 2)
    if (Wa[e])
      e = Wa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ry[t], l = Ny[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), fs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ds = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...fs, ...ds];
function Ar(e, t, n, r) {
  var l;
  const o = (l = Co(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function zd(e) {
  return Ar(e, "spacing", 8);
}
function Mr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Oy(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Mr(t, n), r), {});
}
function Iy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = Ly(n), o = Oy(l, r), i = e[n];
  return vt(e, i, o);
}
function Rd(e, t) {
  const n = zd(e.theme);
  return Object.keys(e).map((r) => Iy(e, t, r, n)).reduce(ur, {});
}
function X(e) {
  return Rd(e, fs);
}
X.propTypes = {};
X.filterProps = fs;
function Z(e) {
  return Rd(e, ds);
}
Z.propTypes = {};
Z.filterProps = ds;
function $y(e = 8) {
  if (e.mui)
    return e;
  const t = zd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Eo(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? ur(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Qe(e, t) {
  return ee({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ay = Qe("border", Ue), My = Qe("borderTop", Ue), Dy = Qe("borderRight", Ue), Fy = Qe("borderBottom", Ue), jy = Qe("borderLeft", Ue), By = Qe("borderColor"), Uy = Qe("borderTopColor"), Wy = Qe("borderRightColor"), Hy = Qe("borderBottomColor"), Vy = Qe("borderLeftColor"), Ky = Qe("outline", Ue), Qy = Qe("outlineColor"), _o = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ar(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Mr(t, r)
    });
    return vt(e, e.borderRadius, n);
  }
  return null;
};
_o.propTypes = {};
_o.filterProps = ["borderRadius"];
Eo(Ay, My, Dy, Fy, jy, By, Uy, Wy, Hy, Vy, _o, Ky, Qy);
const Po = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      gap: Mr(t, r)
    });
    return vt(e, e.gap, n);
  }
  return null;
};
Po.propTypes = {};
Po.filterProps = ["gap"];
const To = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Mr(t, r)
    });
    return vt(e, e.columnGap, n);
  }
  return null;
};
To.propTypes = {};
To.filterProps = ["columnGap"];
const zo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ar(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Mr(t, r)
    });
    return vt(e, e.rowGap, n);
  }
  return null;
};
zo.propTypes = {};
zo.filterProps = ["rowGap"];
const Gy = ee({
  prop: "gridColumn"
}), Yy = ee({
  prop: "gridRow"
}), Xy = ee({
  prop: "gridAutoFlow"
}), Zy = ee({
  prop: "gridAutoColumns"
}), Jy = ee({
  prop: "gridAutoRows"
}), qy = ee({
  prop: "gridTemplateColumns"
}), by = ee({
  prop: "gridTemplateRows"
}), e0 = ee({
  prop: "gridTemplateAreas"
}), t0 = ee({
  prop: "gridArea"
});
Eo(Po, To, zo, Gy, Yy, Xy, Zy, Jy, qy, by, e0, t0);
function En(e, t) {
  return t === "grey" ? t : e;
}
const n0 = ee({
  prop: "color",
  themeKey: "palette",
  transform: En
}), r0 = ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: En
}), l0 = ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: En
});
Eo(n0, r0, l0);
function Le(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const o0 = ee({
  prop: "width",
  transform: Le
}), ps = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || cs[n];
      return o ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Le(n)
      };
    };
    return vt(e, e.maxWidth, t);
  }
  return null;
};
ps.filterProps = ["maxWidth"];
const i0 = ee({
  prop: "minWidth",
  transform: Le
}), u0 = ee({
  prop: "height",
  transform: Le
}), s0 = ee({
  prop: "maxHeight",
  transform: Le
}), a0 = ee({
  prop: "minHeight",
  transform: Le
});
ee({
  prop: "size",
  cssProperty: "width",
  transform: Le
});
ee({
  prop: "size",
  cssProperty: "height",
  transform: Le
});
const c0 = ee({
  prop: "boxSizing"
});
Eo(o0, ps, i0, u0, s0, a0, c0);
const f0 = {
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
    style: _o
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
    style: Z
  },
  pt: {
    style: Z
  },
  pr: {
    style: Z
  },
  pb: {
    style: Z
  },
  pl: {
    style: Z
  },
  px: {
    style: Z
  },
  py: {
    style: Z
  },
  padding: {
    style: Z
  },
  paddingTop: {
    style: Z
  },
  paddingRight: {
    style: Z
  },
  paddingBottom: {
    style: Z
  },
  paddingLeft: {
    style: Z
  },
  paddingX: {
    style: Z
  },
  paddingY: {
    style: Z
  },
  paddingInline: {
    style: Z
  },
  paddingInlineStart: {
    style: Z
  },
  paddingInlineEnd: {
    style: Z
  },
  paddingBlock: {
    style: Z
  },
  paddingBlockStart: {
    style: Z
  },
  paddingBlockEnd: {
    style: Z
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
    style: Po
  },
  rowGap: {
    style: zo
  },
  columnGap: {
    style: To
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
    style: ps
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
}, Nd = f0;
function d0(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function p0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function m0() {
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
    const p = Co(l, a) || {};
    return m ? m(i) : vt(i, r, (g) => {
      let y = Vl(p, h, g);
      return g === y && typeof g == "string" && (y = Vl(p, h, `${n}${g === "default" ? "" : Td(g)}`, g)), s === !1 ? y : {
        [s]: y
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
    const u = (r = o.unstable_sxConfig) != null ? r : Nd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const m = Ty(o.breakpoints), p = Object.keys(m);
      let v = m;
      return Object.keys(h).forEach((g) => {
        const y = p0(h[g], o);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = ur(v, e(g, y, o, u));
            else {
              const T = vt({
                theme: o
              }, y, (f) => ({
                [g]: f
              }));
              d0(T, y) ? v[g] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : v = ur(v, T);
            }
          else
            v = ur(v, e(g, y, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ua(p, v)
      } : Ua(p, v);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Ld = m0();
Ld.filterProps = ["sx"];
const h0 = Ld;
function y0(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const g0 = ["breakpoints", "palette", "spacing", "shape"];
function v0(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: o = {}
  } = e, i = uo(e, g0), u = Ey(n), s = $y(l);
  let a = Hl({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, Py, o)
  }, i);
  return a.applyStyles = y0, a = t.reduce((h, m) => Hl(h, m), a), a.unstable_sxConfig = de({}, Nd, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return h0({
      sx: m,
      theme: this
    });
  }, a;
}
function w0(e) {
  return Object.keys(e).length === 0;
}
function ms(e = null) {
  const t = N.useContext($r);
  return !t || w0(t) ? e : t;
}
const S0 = v0();
function k0(e = S0) {
  return ms(e);
}
function ii(e) {
  const t = ky(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function x0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = k0(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => ii(typeof i == "function" ? i(l) : i)) : o = ii(o)), /* @__PURE__ */ x(Sy, {
    styles: o
  });
}
const C0 = typeof window < "u" ? N.useLayoutEffect : N.useEffect, E0 = C0;
let Ha = 0;
function _0(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Ha += 1, n(`mui-${Ha}`));
  }, [t]), r;
}
const Va = si["useId".toString()];
function P0(e) {
  if (Va !== void 0) {
    const t = Va();
    return e ?? t;
  }
  return _0(e);
}
const T0 = /* @__PURE__ */ N.createContext(null), Od = T0;
function Id() {
  return N.useContext(Od);
}
const z0 = typeof Symbol == "function" && Symbol.for, R0 = z0 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function N0(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function L0(e) {
  const {
    children: t,
    theme: n
  } = e, r = Id(), l = N.useMemo(() => {
    const o = r === null ? n : N0(r, n);
    return o != null && (o[R0] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ x(Od.Provider, {
    value: l,
    children: t
  });
}
const O0 = ["value"], I0 = /* @__PURE__ */ N.createContext();
function $0(e) {
  let {
    value: t
  } = e, n = uo(e, O0);
  return /* @__PURE__ */ x(I0.Provider, de({
    value: t ?? !0
  }, n));
}
const A0 = /* @__PURE__ */ N.createContext(void 0);
function M0({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ x(A0.Provider, {
    value: e,
    children: t
  });
}
function D0(e) {
  const t = ms(), n = P0() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, E0(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const i = o.firstChild;
    if (l) {
      var u;
      if (i && (u = i.hasAttribute) != null && u.call(i, "data-mui-layer-order") && i.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = l, o.prepend(a);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [l, n]), l ? /* @__PURE__ */ x(x0, {
    styles: l
  }) : null;
}
const Ka = {};
function Qa(e, t, n, r = !1) {
  return N.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(l), i = e ? de({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? de({}, t, {
      [e]: n
    }) : de({}, t, n);
  }, [e, t, n, r]);
}
function F0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = ms(Ka), o = Id() || Ka, i = Qa(r, l, n), u = Qa(r, o, n, !0), s = i.direction === "rtl", a = D0(i);
  return /* @__PURE__ */ x(L0, {
    theme: u,
    children: /* @__PURE__ */ x($r.Provider, {
      value: i,
      children: /* @__PURE__ */ x($0, {
        value: s,
        children: /* @__PURE__ */ F(M0, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const j0 = ["theme"];
function B0(e) {
  let {
    theme: t
  } = e, n = uo(e, j0);
  const r = t[Pa];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = de({}, r, {
    vars: null
  }) : t && !t.vars && (l = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ x(F0, de({}, n, {
    themeId: r ? Pa : void 0,
    theme: l
  }));
}
const lu = {
  VERCEL_BASE_URL: "https://your-project.vercel.app",
  // swap this out
  SF_LOGIN_URL: "https://login.salesforce.com",
  SF_CLIENT_ID: "YOUR_CONNECTED_APP_CLIENT_ID",
  SF_REDIRECT_URI: "https://your-project.vercel.app/api/auth/callback"
};
function U0(e = "") {
  return e.split(" ").slice(0, 2).map((t) => t[0]).join("").toUpperCase();
}
const Ga = ["blue", "green", "orange", "purple"];
function W0(e) {
  return Ga[e % Ga.length];
}
const H0 = {
  "Active Listing": "green",
  Offer: "orange",
  Enquiry: "grey",
  Watchlist: "blue",
  Seller: "green",
  Contact: "blue"
}, V0 = lu.VERCEL_BASE_URL.includes("your-project.vercel.app");
function K0(e) {
  return {
    artwork: {
      id: "a0B5g000001XyZEA0",
      artworkId: e,
      title: "Twilight Over the Downs",
      artist: "Margaret Ellison",
      medium: "Oil on canvas",
      year: "2019",
      dimensions: "120cm × 90cm",
      listPrice: "£24,500.00",
      status: "Active Listing",
      dateListed: "14 Jan 2024",
      contentHubId: "CHB-7742918"
    },
    seller: {
      id: "0035g000002AbCDE1",
      name: "Richard Hargreaves",
      company: "Hargreaves Fine Art Ltd",
      email: "richard@hargreaves-fineart.co.uk",
      phone: "+44 207 946 0312"
    },
    primaryContact: {
      id: "0035g000002AbCDE2",
      name: "Sophia Cartwright",
      company: "Private collector",
      email: "sophia.cartwright@email.com",
      phone: "+44 7700 900411"
    },
    buyers: [
      {
        id: "0035g000002AbCDE3",
        name: "Thomas Mellor",
        company: "Mellor Collection",
        status: "Offer",
        detail: "Offer submitted: £21,000"
      },
      {
        id: "0035g000002AbCDE4",
        name: "Amara Livingston",
        company: "Independent",
        status: "Enquiry",
        detail: "No offer yet"
      },
      {
        id: "0035g000002AbCDE5",
        name: "Felix Okafor",
        company: "Okafor Art Fund",
        status: "Watchlist",
        detail: "High interest"
      }
    ]
  };
}
const R = {
  wrap: {
    fontFamily: "Arial, sans-serif",
    fontSize: 13,
    color: "#16325c",
    background: "#f3f2f2",
    minHeight: 600,
    position: "relative"
  },
  // Header
  header: {
    background: "#0070d2",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 52
  },
  appName: { color: "white", fontSize: 15, fontWeight: 600, letterSpacing: 0.2 },
  headerUser: {
    marginLeft: "auto",
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  // Nav
  nav: {
    background: "#16325c",
    padding: "0 16px",
    display: "flex",
    height: 36,
    alignItems: "center"
  },
  navItem: (e) => ({
    color: e ? "white" : "rgba(255,255,255,0.75)",
    fontSize: 12,
    padding: "0 12px",
    height: 36,
    display: "flex",
    alignItems: "center",
    borderBottom: e ? "2px solid white" : "2px solid transparent",
    cursor: "pointer"
  }),
  // Breadcrumb
  breadcrumb: {
    background: "white",
    padding: "8px 16px",
    fontSize: 12,
    color: "#0070d2",
    borderBottom: "1px solid #dddbda",
    display: "flex",
    gap: 6,
    alignItems: "center"
  },
  // Record header
  recordHeader: {
    background: "white",
    padding: "12px 16px 0",
    borderBottom: "1px solid #dddbda"
  },
  recordTitleRow: { display: "flex", alignItems: "flex-start", gap: 12, paddingBottom: 12 },
  recordIcon: {
    width: 36,
    height: 36,
    background: "#0070d2",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  },
  recordType: { fontSize: 11, color: "#706e6b", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 },
  recordName: { fontSize: 18, fontWeight: 600, color: "#16325c" },
  tabs: { display: "flex" },
  tab: (e) => ({
    fontSize: 13,
    padding: "8px 16px",
    cursor: "pointer",
    color: e ? "#0070d2" : "#706e6b",
    borderBottom: e ? "2px solid #0070d2" : "2px solid transparent",
    fontWeight: e ? 600 : 400
  }),
  // Body
  body: {
    padding: 16,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12
  },
  // Card
  card: {
    background: "white",
    borderRadius: 4,
    border: "1px solid #dddbda",
    overflow: "hidden"
  },
  cardHeader: {
    padding: "10px 14px",
    borderBottom: "1px solid #dddbda",
    fontSize: 12,
    fontWeight: 600,
    color: "#16325c",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    padding: "6px 14px",
    borderBottom: "0.5px solid #f3f2f2",
    alignItems: "start"
  },
  fieldLabel: { fontSize: 11, color: "#706e6b", paddingTop: 1 },
  fieldValue: { fontSize: 13, color: "#16325c" },
  fieldLink: { fontSize: 13, color: "#0070d2", cursor: "pointer" },
  // Contact card
  contactCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderBottom: "0.5px solid #f3f2f2"
  },
  contactName: { fontSize: 13, fontWeight: 600, color: "#0070d2", cursor: "pointer" },
  contactSub: { fontSize: 11, color: "#706e6b", marginTop: 1 },
  // Avatar
  avatar: (e) => ({
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    flexShrink: 0,
    ...{
      blue: { background: "#d8edff", color: "#0070d2" },
      green: { background: "#d4efdf", color: "#04844b" },
      orange: { background: "#fce8c5", color: "#c86b09" },
      purple: { background: "#efe8f5", color: "#7744a4" }
    }[e]
  }),
  // Badge
  badge: (e) => ({
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 3,
    fontSize: 11,
    fontWeight: 600,
    alignSelf: "flex-start",
    ...{
      green: { background: "#04844b", color: "white" },
      blue: { background: "#0070d2", color: "white" },
      orange: { background: "#e8830c", color: "white" },
      grey: { background: "#dddbda", color: "#16325c" }
    }[e || "grey"]
  }),
  fullWidth: { gridColumn: "1 / -1" },
  rightCol: { display: "flex", flexDirection: "column", gap: 12 },
  // Login overlay
  loginOverlay: {
    position: "absolute",
    inset: 0,
    background: "#f4f6f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 500
  },
  loginBox: {
    background: "white",
    border: "1px solid #dddbda",
    borderRadius: 4,
    padding: 32,
    width: 320
  },
  loginTitle: { fontSize: 18, fontWeight: 600, color: "#16325c", textAlign: "center", marginBottom: 4 },
  loginSubtitle: { fontSize: 12, color: "#706e6b", textAlign: "center", marginBottom: 24 },
  input: {
    width: "100%",
    border: "1px solid #dddbda",
    borderRadius: 4,
    padding: "8px 10px",
    fontSize: 14,
    color: "#16325c",
    marginBottom: 12,
    outline: "none",
    boxSizing: "border-box"
  },
  loginBtn: {
    width: "100%",
    background: "#0070d2",
    color: "white",
    border: "none",
    borderRadius: 4,
    padding: 10,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4
  },
  ssoBtn: {
    width: "100%",
    background: "white",
    color: "#0070d2",
    border: "1px solid #0070d2",
    borderRadius: 4,
    padding: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4
  },
  loginFooter: { fontSize: 11, color: "#706e6b", textAlign: "center", marginTop: 16 },
  // Loader overlay
  loaderOverlay: {
    position: "absolute",
    inset: 0,
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    minHeight: 500,
    gap: 16
  },
  loaderText: { fontSize: 14, color: "#16325c", fontWeight: 500 },
  loaderSub: { fontSize: 12, color: "#706e6b" },
  // Error
  errorBox: {
    margin: 24,
    padding: 16,
    background: "#fef1ee",
    border: "1px solid #ea7460",
    borderRadius: 4,
    color: "#c23934",
    fontSize: 13
  }
};
function hs({ width: e = 160, height: t = 36 }) {
  return /* @__PURE__ */ F("svg", { viewBox: "0 0 180 40", width: e, height: t, xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ x(
      "path",
      {
        d: `M36 12c2.2-2.3 5.2-3.7 8.6-3.7 4.8 0 9 2.7 11.2 6.7 2-0.9 4.1-1.4 6.4-1.4
           8.6 0 15.6 7 15.6 15.7 0 8.6-7 15.6-15.6 15.6H19.2C11.9 44.9 6 39 6 31.7
           c0-6.1 4-11.4 9.6-13.3C14.9 15.5 15 12.7 16.5 10.6 18 8.5 20.4 7.4 23 7.4
           c2.7 0 5.1 1.3 6.6 3.3L36 12z`,
        fill: "#00A1E0"
      }
    ),
    /* @__PURE__ */ x("text", { x: "85", y: "30", fontFamily: "Arial", fontSize: "22", fontWeight: "700", fill: "#00A1E0", children: "salesforce" })
  ] });
}
function Q0() {
  return /* @__PURE__ */ x(
    "div",
    {
      style: {
        width: 40,
        height: 40,
        border: "3px solid #dddbda",
        borderTop: "3px solid #0070d2",
        borderRadius: "50%",
        animation: "sf-spin 0.8s linear infinite"
      }
    }
  );
}
function ou({ label: e }) {
  const t = H0[e] || "grey";
  return /* @__PURE__ */ x("span", { style: R.badge(t), children: e });
}
function G0({ name: e, colorIndex: t = 0 }) {
  return /* @__PURE__ */ x("div", { style: R.avatar(W0(t)), children: U0(e) });
}
function tt({ label: e, value: t, link: n = !1 }) {
  return /* @__PURE__ */ F("div", { style: R.fieldRow, children: [
    /* @__PURE__ */ x("div", { style: R.fieldLabel, children: e }),
    /* @__PURE__ */ x("div", { style: n ? R.fieldLink : R.fieldValue, children: t })
  ] });
}
function ui({ contact: e, role: t, colorIndex: n, showBadge: r }) {
  return /* @__PURE__ */ F("div", { style: R.contactCard, children: [
    /* @__PURE__ */ x(G0, { name: e.name, colorIndex: n }),
    /* @__PURE__ */ F("div", { style: { flex: 1 }, children: [
      /* @__PURE__ */ x("div", { style: R.contactName, children: e.name }),
      e.company && /* @__PURE__ */ x("div", { style: R.contactSub, children: e.company }),
      e.email && /* @__PURE__ */ x("div", { style: R.contactSub, children: e.email }),
      e.phone && /* @__PURE__ */ x("div", { style: R.contactSub, children: e.phone }),
      e.detail && /* @__PURE__ */ x("div", { style: R.contactSub, children: e.detail })
    ] }),
    r && /* @__PURE__ */ x(ou, { label: e.status || t })
  ] });
}
function Y0({ onLogin: e, loading: t }) {
  const [n, r] = N.useState(""), [l, o] = N.useState("");
  function i() {
    !n || !l || e({ username: n, password: l });
  }
  return /* @__PURE__ */ F("div", { style: R.loginOverlay, children: [
    /* @__PURE__ */ x("style", { children: "@keyframes sf-spin { to { transform: rotate(360deg); } }" }),
    /* @__PURE__ */ x("div", { style: { marginBottom: 24 }, children: /* @__PURE__ */ x(hs, { width: 180, height: 40 }) }),
    /* @__PURE__ */ F("div", { style: R.loginBox, children: [
      /* @__PURE__ */ x("div", { style: R.loginTitle, children: "Log in to Salesforce" }),
      /* @__PURE__ */ x("div", { style: R.loginSubtitle, children: "Connected App: Content Hub DAM Integration" }),
      /* @__PURE__ */ x(
        "input",
        {
          style: R.input,
          type: "text",
          placeholder: "Username",
          value: n,
          onChange: (u) => r(u.target.value),
          onKeyDown: (u) => u.key === "Enter" && i(),
          disabled: t
        }
      ),
      /* @__PURE__ */ x(
        "input",
        {
          style: R.input,
          type: "password",
          placeholder: "Password",
          value: l,
          onChange: (u) => o(u.target.value),
          onKeyDown: (u) => u.key === "Enter" && i(),
          disabled: t
        }
      ),
      /* @__PURE__ */ x("button", { style: R.loginBtn, onClick: i, disabled: t, children: t ? "Logging in..." : "Log In" }),
      /* @__PURE__ */ F("div", { style: { textAlign: "center", fontSize: 12, color: "#706e6b", margin: "16px 0", position: "relative" }, children: [
        /* @__PURE__ */ x("div", { style: { position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "#dddbda" } }),
        /* @__PURE__ */ x("span", { style: { background: "white", padding: "0 8px", position: "relative" }, children: "or" })
      ] }),
      /* @__PURE__ */ x("button", { style: R.ssoBtn, onClick: i, disabled: t, children: "Use Custom Domain (SSO)" }),
      /* @__PURE__ */ x("div", { style: R.loginFooter, children: "Forgot your password?  |  Help" })
    ] }),
    /* @__PURE__ */ x("div", { style: { fontSize: 11, color: "#706e6b", marginTop: 16 }, children: "© 2024 Salesforce, inc. All rights reserved." })
  ] });
}
function X0({ artworkId: e }) {
  return /* @__PURE__ */ F("div", { style: R.loaderOverlay, children: [
    /* @__PURE__ */ x(hs, { width: 140, height: 32 }),
    /* @__PURE__ */ x(Q0, {}),
    /* @__PURE__ */ x("div", { style: R.loaderText, children: "Reading artwork data from Salesforce" }),
    /* @__PURE__ */ F("div", { style: R.loaderSub, children: [
      "Fetching record: ",
      e,
      "..."
    ] })
  ] });
}
function Z0({ data: e }) {
  const { artwork: t, seller: n, primaryContact: r, buyers: l } = e, [o, i] = N.useState("Details");
  return /* @__PURE__ */ F("div", { style: R.wrap, children: [
    /* @__PURE__ */ F("div", { style: R.header, children: [
      /* @__PURE__ */ x(hs, { width: 48, height: 22 }),
      /* @__PURE__ */ x("span", { style: R.appName, children: "Sales" }),
      /* @__PURE__ */ F("div", { style: R.headerUser, children: [
        /* @__PURE__ */ F("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "white", children: [
          /* @__PURE__ */ x("circle", { cx: "12", cy: "8", r: "4" }),
          /* @__PURE__ */ x("path", { d: "M4 20c0-4 3.6-7 8-7s8 3 8 7" })
        ] }),
        "James Whitfield"
      ] })
    ] }),
    /* @__PURE__ */ x("div", { style: R.nav, children: ["Artworks", "Contacts", "Opportunities", "Reports"].map((u) => /* @__PURE__ */ x("div", { style: R.navItem(u === "Artworks"), children: u }, u)) }),
    /* @__PURE__ */ F("div", { style: R.breadcrumb, children: [
      /* @__PURE__ */ x("span", { style: { cursor: "pointer" }, children: "Artworks" }),
      /* @__PURE__ */ x("span", { style: { color: "#706e6b" }, children: "/" }),
      /* @__PURE__ */ F("span", { style: { color: "#706e6b" }, children: [
        t.artworkId,
        " · ",
        t.title
      ] })
    ] }),
    /* @__PURE__ */ F("div", { style: R.recordHeader, children: [
      /* @__PURE__ */ F("div", { style: R.recordTitleRow, children: [
        /* @__PURE__ */ x("div", { style: R.recordIcon, children: /* @__PURE__ */ F("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ x("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", stroke: "white", strokeWidth: "1.5" }),
          /* @__PURE__ */ x("path", { d: "M3 15l5-5 4 4 3-3 6 6", stroke: "white", strokeWidth: "1.5" }),
          /* @__PURE__ */ x("circle", { cx: "8.5", cy: "8.5", r: "1.5", fill: "white" })
        ] }) }),
        /* @__PURE__ */ F("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ x("div", { style: R.recordType, children: "Artwork__c" }),
          /* @__PURE__ */ F("div", { style: R.recordName, children: [
            t.title,
            " ",
            /* @__PURE__ */ x(ou, { label: t.status })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ x("div", { style: R.tabs, children: ["Details", "Activity", "Chatter", "Files"].map((u) => /* @__PURE__ */ x("div", { style: R.tab(u === o), onClick: () => i(u), children: u }, u)) })
    ] }),
    /* @__PURE__ */ F("div", { style: R.body, children: [
      /* @__PURE__ */ F("div", { style: R.card, children: [
        /* @__PURE__ */ x("div", { style: R.cardHeader, children: "Artwork information" }),
        /* @__PURE__ */ F("div", { children: [
          /* @__PURE__ */ x(tt, { label: "Artwork ID", value: t.artworkId, link: !0 }),
          /* @__PURE__ */ x(tt, { label: "Title", value: t.title }),
          /* @__PURE__ */ x(tt, { label: "Artist", value: t.artist, link: !0 }),
          /* @__PURE__ */ x(tt, { label: "Medium", value: t.medium }),
          /* @__PURE__ */ x(tt, { label: "Year", value: t.year }),
          /* @__PURE__ */ x(tt, { label: "Dimensions", value: t.dimensions }),
          /* @__PURE__ */ x(tt, { label: "List price", value: t.listPrice }),
          /* @__PURE__ */ x(tt, { label: "Status", value: /* @__PURE__ */ x(ou, { label: t.status }) }),
          /* @__PURE__ */ x(tt, { label: "Date listed", value: t.dateListed }),
          /* @__PURE__ */ x(tt, { label: "Content Hub ID", value: t.contentHubId, link: !0 })
        ] })
      ] }),
      /* @__PURE__ */ F("div", { style: R.rightCol, children: [
        /* @__PURE__ */ F("div", { style: R.card, children: [
          /* @__PURE__ */ x("div", { style: R.cardHeader, children: "Seller" }),
          /* @__PURE__ */ x(ui, { contact: n, role: "Seller", colorIndex: 1, showBadge: !0 })
        ] }),
        /* @__PURE__ */ F("div", { style: R.card, children: [
          /* @__PURE__ */ x("div", { style: R.cardHeader, children: "Primary contact" }),
          /* @__PURE__ */ x(ui, { contact: r, role: "Contact", colorIndex: 0, showBadge: !0 })
        ] })
      ] }),
      /* @__PURE__ */ F("div", { style: { ...R.card, ...R.fullWidth }, children: [
        /* @__PURE__ */ F("div", { style: R.cardHeader, children: [
          "Potential buyers (",
          l.length,
          ")"
        ] }),
        /* @__PURE__ */ x("div", { children: l.map((u, s) => /* @__PURE__ */ x(ui, { contact: u, colorIndex: s + 2, showBadge: !0 }, u.id)) })
      ] })
    ] })
  ] });
}
function J0({ options: e = {} }) {
  const t = e.artworkId || "ART-00123", [n, r] = N.useState("login"), [l, o] = N.useState(null), [i, u] = N.useState(null), s = N.useCallback(async ({ username: a, password: h }) => {
    r("loading");
    try {
      if (V0) {
        await new Promise((y) => setTimeout(y, 600)), o(K0(t)), r("record");
        return;
      }
      const m = await fetch(`${lu.VERCEL_BASE_URL}/api/auth/callback`);
      if (!m.ok)
        throw new Error("Authentication failed");
      const { access_token: p } = await m.json(), v = await fetch(
        `${lu.VERCEL_BASE_URL}/api/salesforce/artwork?artworkId=${encodeURIComponent(t)}`,
        { headers: { Authorization: `Bearer ${p}` } }
      );
      if (!v.ok)
        throw new Error("Failed to fetch artwork data");
      const g = await v.json();
      o(g), r("record");
    } catch (m) {
      u(m.message), r("error");
    }
  }, [t]);
  return /* @__PURE__ */ F("div", { style: { position: "relative", minHeight: 600 }, children: [
    /* @__PURE__ */ x("style", { children: "@keyframes sf-spin { to { transform: rotate(360deg); } }" }),
    n === "login" && /* @__PURE__ */ x(Y0, { onLogin: s, loading: !1 }),
    n === "loading" && /* @__PURE__ */ x(X0, { artworkId: t }),
    n === "record" && l && /* @__PURE__ */ x(Z0, { data: l }),
    n === "error" && /* @__PURE__ */ F("div", { style: R.errorBox, children: [
      /* @__PURE__ */ x("strong", { children: "Something went wrong:" }),
      " ",
      i,
      /* @__PURE__ */ x("br", {}),
      /* @__PURE__ */ x("button", { style: { marginTop: 8, cursor: "pointer" }, onClick: () => r("login"), children: "Try again" })
    ] })
  ] });
}
function q0(e) {
  const t = sd(e);
  return console.log("%c[SalesforceArtworkPanel] Starting up...", "color: #1D9E75; font-weight: bold"), {
    render(n) {
      console.log("%c[SalesforceArtworkPanel] Context:", "color: #1D9E75; font-weight: bold", n), t.render(
        /* @__PURE__ */ x(B0, { theme: n.theme, children: /* @__PURE__ */ x(
          J0,
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
  q0 as default
};
