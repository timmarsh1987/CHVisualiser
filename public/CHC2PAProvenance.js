(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-c2pa{box-sizing:border-box;width:100%;padding:20px;color:#1f2937;background:#fff;border:1px solid #d9dee7;border-radius:8px;font-family:Inter,Arial,sans-serif}.ch-c2pa__header{display:flex;gap:16px;align-items:center;justify-content:space-between;margin-bottom:18px}.ch-c2pa__header h2{margin:2px 0 0;font-size:20px}.ch-c2pa__eyebrow{margin:0;color:#667085;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}.ch-c2pa__button{min-width:150px;padding:10px 16px;color:#fff;background:#0b5cab;border:0;border-radius:5px;cursor:pointer;font-weight:700}.ch-c2pa__button:disabled{cursor:not-allowed;opacity:.55}.ch-c2pa__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:10px}.ch-c2pa__grid article{padding:12px;background:#f6f8fb;border-radius:6px}.ch-c2pa__grid span,.ch-c2pa__grid strong{display:block}.ch-c2pa__grid span{margin-bottom:5px;color:#667085;font-size:12px}.ch-c2pa__grid strong{overflow-wrap:anywhere;font-size:15px}.ch-c2pa__meta{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:14px;color:#667085;font-size:12px}.ch-c2pa__message{margin:0 0 14px;padding:10px 12px;border-radius:5px}.ch-c2pa__message--error,.ch-c2pa--error{color:#9b1c1c;background:#fff1f1}.ch-c2pa__message--success{color:#176b3a;background:#edf9f1}.ch-c2pa__details{margin-top:16px}.ch-c2pa__details summary{cursor:pointer;font-weight:600}.ch-c2pa__details pre{max-height:360px;margin:10px 0 0;padding:12px;overflow:auto;background:#111827;border-radius:6px;color:#e5e7eb;font-size:11px;white-space:pre-wrap}@media (max-width: 520px){.ch-c2pa__header{align-items:stretch;flex-direction:column}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function jd(e, t) {
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
function Fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ya = { exports: {} }, Kl = {}, Xa = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), Dd = Symbol.for("react.portal"), Ud = Symbol.for("react.fragment"), Bd = Symbol.for("react.strict_mode"), Wd = Symbol.for("react.profiler"), Hd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Kd = Symbol.for("react.forward_ref"), Qd = Symbol.for("react.suspense"), Gd = Symbol.for("react.memo"), Yd = Symbol.for("react.lazy"), ys = Symbol.iterator;
function Xd(e) {
  return e === null || typeof e != "object" ? null : (e = ys && e[ys] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Za = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ja = Object.assign, qa = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
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
function ba() {
}
ba.prototype = Ln.prototype;
function iu(e, t, n) {
  this.props = e, this.context = t, this.refs = qa, this.updater = n || Za;
}
var uu = iu.prototype = new ba();
uu.constructor = iu;
Ja(uu, Ln.prototype);
uu.isPureReactComponent = !0;
var gs = Array.isArray, ec = Object.prototype.hasOwnProperty, su = { current: null }, tc = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return { $$typeof: Tr, type: e, key: o, ref: i, props: l, _owner: su.current };
}
function Zd(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function Jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vs = /\/+/g;
function Lo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jd("" + e.key) : t.toString(36);
}
function nl(e, t, n, r, l) {
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
          case Tr:
          case Dd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Lo(i, 0) : r, gs(l) ? (n = "", e != null && (n = e.replace(vs, "$&/") + "/"), nl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (au(l) && (l = Zd(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(vs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", gs(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Lo(o, u);
      i += nl(o, t, n, s, l);
    }
  else if (s = Xd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Lo(o, u++), i += nl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Fr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return nl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
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
var Se = { current: null }, rl = { transition: null }, bd = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: rl, ReactCurrentOwner: su };
function rc() {
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
  if (!au(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = Ln;
L.Fragment = Ud;
L.Profiler = Wd;
L.PureComponent = iu;
L.StrictMode = Bd;
L.Suspense = Qd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
L.act = rc;
L.cloneElement = function(e, t, n) {
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
  return { $$typeof: Tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Vd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hd, _context: e }, e.Consumer = e;
};
L.createElement = nc;
L.createFactory = function(e) {
  var t = nc.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Kd, render: e };
};
L.isValidElement = au;
L.lazy = function(e) {
  return { $$typeof: Yd, _payload: { _status: -1, _result: e }, _init: qd };
};
L.memo = function(e, t) {
  return { $$typeof: Gd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = rl.transition;
  rl.transition = {};
  try {
    e();
  } finally {
    rl.transition = t;
  }
};
L.unstable_act = rc;
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
Xa.exports = L;
var N = Xa.exports;
const ep = /* @__PURE__ */ Fd(N), ai = /* @__PURE__ */ jd({
  __proto__: null,
  default: ep
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
var tp = N, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), lp = Object.prototype.hasOwnProperty, op = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    lp.call(t, r) && !ip.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: np, type: e, key: o, ref: i, props: l, _owner: op.current };
}
Kl.Fragment = rp;
Kl.jsx = lc;
Kl.jsxs = lc;
Ya.exports = Kl;
var oc = Ya.exports;
const I = oc.jsx, Ne = oc.jsxs;
var ic = { exports: {} }, Ae = {}, uc = { exports: {} }, sc = {};
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
  function t(_, z) {
    var R = _.length;
    _.push(z);
    e:
      for (; 0 < R; ) {
        var Z = R - 1 >>> 1, re = _[Z];
        if (0 < l(re, z))
          _[Z] = z, _[R] = re, R = Z;
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
    var z = _[0], R = _.pop();
    if (R !== z) {
      _[0] = R;
      e:
        for (var Z = 0, re = _.length, Ir = re >>> 1; Z < Ir; ) {
          var Ft = 2 * (Z + 1) - 1, Ro = _[Ft], Dt = Ft + 1, jr = _[Dt];
          if (0 > l(Ro, R))
            Dt < re && 0 > l(jr, Ro) ? (_[Z] = jr, _[Dt] = R, Z = Dt) : (_[Z] = Ro, _[Ft] = R, Z = Ft);
          else if (Dt < re && 0 > l(jr, R))
            _[Z] = jr, _[Dt] = R, Z = Dt;
          else
            break e;
        }
    }
    return z;
  }
  function l(_, z) {
    var R = _.sortIndex - z.sortIndex;
    return R !== 0 ? R : _.id - z.id;
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
  var s = [], a = [], h = 1, m = null, p = 3, g = !1, v = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= _)
        r(a), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(a);
    }
  }
  function w(_) {
    if (y = !1, d(_), !v)
      if (n(s) !== null)
        v = !0, zo(x);
      else {
        var z = n(a);
        z !== null && Oo(w, z.startTime - _);
      }
  }
  function x(_, z) {
    v = !1, y && (y = !1, f(T), T = -1), g = !0;
    var R = p;
    try {
      for (d(z), m = n(s); m !== null && (!(m.expirationTime > z) || _ && !de()); ) {
        var Z = m.callback;
        if (typeof Z == "function") {
          m.callback = null, p = m.priorityLevel;
          var re = Z(m.expirationTime <= z);
          z = e.unstable_now(), typeof re == "function" ? m.callback = re : m === n(s) && r(s), d(z);
        } else
          r(s);
        m = n(s);
      }
      if (m !== null)
        var Ir = !0;
      else {
        var Ft = n(a);
        Ft !== null && Oo(w, Ft.startTime - z), Ir = !1;
      }
      return Ir;
    } finally {
      m = null, p = R, g = !1;
    }
  }
  var E = !1, k = null, T = -1, H = 5, O = -1;
  function de() {
    return !(e.unstable_now() - O < H);
  }
  function In() {
    if (k !== null) {
      var _ = e.unstable_now();
      O = _;
      var z = !0;
      try {
        z = k(!0, _);
      } finally {
        z ? jn() : (E = !1, k = null);
      }
    } else
      E = !1;
  }
  var jn;
  if (typeof c == "function")
    jn = function() {
      c(In);
    };
  else if (typeof MessageChannel < "u") {
    var hs = new MessageChannel(), Id = hs.port2;
    hs.port1.onmessage = In, jn = function() {
      Id.postMessage(null);
    };
  } else
    jn = function() {
      P(In, 0);
    };
  function zo(_) {
    k = _, E || (E = !0, jn());
  }
  function Oo(_, z) {
    T = P(function() {
      _(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    v || g || (v = !0, zo(x));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = p;
    }
    var R = p;
    p = z;
    try {
      return _();
    } finally {
      p = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, z) {
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
    var R = p;
    p = _;
    try {
      return z();
    } finally {
      p = R;
    }
  }, e.unstable_scheduleCallback = function(_, z, R) {
    var Z = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? Z + R : Z) : R = Z, _) {
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
    return re = R + re, _ = { id: h++, callback: z, priorityLevel: _, startTime: R, expirationTime: re, sortIndex: -1 }, R > Z ? (_.sortIndex = R, t(a, _), n(s) === null && _ === n(a) && (y ? (f(T), T = -1) : y = !0, Oo(w, R - Z))) : (_.sortIndex = re, t(s, _), v || g || (v = !0, zo(x))), _;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(_) {
    var z = p;
    return function() {
      var R = p;
      p = z;
      try {
        return _.apply(this, arguments);
      } finally {
        p = R;
      }
    };
  };
})(sc);
uc.exports = sc;
var up = uc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp = N, Me = up;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ac = /* @__PURE__ */ new Set(), ur = {};
function qt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++)
    ac.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, ap = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ws = {}, Ss = {};
function cp(e) {
  return ci.call(Ss, e) ? !0 : ci.call(ws, e) ? !1 : ap.test(e) ? Ss[e] = !0 : (ws[e] = !0, !1);
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
function ke(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
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
var cu = /[\-:]([a-z])/g;
function fu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    cu,
    fu
  );
  fe[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(cu, fu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(cu, fu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dp(t, n, l, r) && (n = null), r || l === null ? cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dr = Symbol.for("react.element"), rn = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), pu = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), cc = Symbol.for("react.provider"), fc = Symbol.for("react.context"), mu = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), hu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), dc = Symbol.for("react.offscreen"), ks = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object" ? null : (e = ks && e[ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, $o;
function Gn(e) {
  if ($o === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $o = t && t[1] || "";
    }
  return `
` + $o + e;
}
var Mo = !1;
function Ao(e, t) {
  if (!e || Mo)
    return "";
  Mo = !0;
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
    Mo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function pp(e) {
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
      return e = Ao(e.type, !1), e;
    case 11:
      return e = Ao(e.type.render, !1), e;
    case 1:
      return e = Ao(e.type, !0), e;
    default:
      return "";
  }
}
function mi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case ln:
      return "Fragment";
    case rn:
      return "Portal";
    case fi:
      return "Profiler";
    case pu:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
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
        return t = e.displayName || null, t !== null ? t : mi(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return mi(e(t));
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
      return mi(t);
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
function pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hp(e) {
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
  e._valueTracker || (e._valueTracker = hp(e));
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
function hi(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function xs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function hc(e, t) {
  t = t.checked, t != null && du(e, "checked", t, !1);
}
function yi(e, t) {
  hc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? gi(e, t.type, n) : t.hasOwnProperty("defaultValue") && gi(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
function gi(e, t, n) {
  (t !== "number" || vl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function yn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (Yn(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function yc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
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
function wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? gc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Br, vc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
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
}, yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
  yp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var gp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Si(e, t) {
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
function ki(e, t) {
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
var xi = null;
function yu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ei = null, gn = null, vn = null;
function Ps(e) {
  if (e = Or(e)) {
    if (typeof Ei != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = Zl(t), Ei(e.stateNode, e.type, t));
  }
}
function kc(e) {
  gn ? vn ? vn.push(e) : vn = [e] : gn = e;
}
function xc() {
  if (gn) {
    var e = gn, t = vn;
    if (vn = gn = null, Ps(e), t)
      for (e = 0; e < t.length; e++)
        Ps(t[e]);
  }
}
function Ec(e, t) {
  return e(t);
}
function Cc() {
}
var Io = !1;
function _c(e, t, n) {
  if (Io)
    return e(t, n);
  Io = !0;
  try {
    return Ec(e, t, n);
  } finally {
    Io = !1, (gn !== null || vn !== null) && (Cc(), xc());
  }
}
function ar(e, t) {
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
if (dt)
  try {
    var Dn = {};
    Object.defineProperty(Dn, "passive", { get: function() {
      Ci = !0;
    } }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
  } catch {
    Ci = !1;
  }
function vp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var qn = !1, wl = null, Sl = !1, _i = null, wp = { onError: function(e) {
  qn = !0, wl = e;
} };
function Sp(e, t, n, r, l, o, i, u, s) {
  qn = !1, wl = null, vp.apply(wp, arguments);
}
function kp(e, t, n, r, l, o, i, u, s) {
  if (Sp.apply(this, arguments), qn) {
    if (qn) {
      var a = wl;
      qn = !1, wl = null;
    } else
      throw Error(S(198));
    Sl || (Sl = !0, _i = a);
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
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ts(e) {
  if (bt(e) !== e)
    throw Error(S(188));
}
function xp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bt(e), t === null)
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
          return Ts(l), e;
        if (o === r)
          return Ts(l), t;
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
  return e = xp(e), e !== null ? Nc(e) : null;
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
var zc = Me.unstable_scheduleCallback, Ns = Me.unstable_cancelCallback, Ep = Me.unstable_shouldYield, Cp = Me.unstable_requestPaint, J = Me.unstable_now, _p = Me.unstable_getCurrentPriorityLevel, gu = Me.unstable_ImmediatePriority, Oc = Me.unstable_UserBlockingPriority, kl = Me.unstable_NormalPriority, Pp = Me.unstable_LowPriority, Rc = Me.unstable_IdlePriority, Ql = null, lt = null;
function Tp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Ql, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : Op, Np = Math.log, zp = Math.LN2;
function Op(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Np(e) / zp | 0) | 0;
}
var Wr = 64, Hr = 4194304;
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
function xl(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Xn(u) : (o &= i, o !== 0 && (r = Xn(o)));
  } else
    i = n & ~l, i !== 0 ? r = Xn(i) : o !== 0 && (r = Xn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ze(t), l = 1 << n, r |= e[n], t &= ~l;
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
function Lp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ze(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Rp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Pi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Lc() {
  var e = Wr;
  return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
}
function jo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function $p(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function vu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function $c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mc, wu, Ac, Ic, jc, Ti = !1, Vr = [], _t = null, Pt = null, Tt = null, cr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), kt = [], Mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function zs(e, t) {
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
function Un(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = Or(t), t !== null && wu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ap(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return _t = Un(_t, e, t, n, r, l), !0;
    case "dragenter":
      return Pt = Un(Pt, e, t, n, r, l), !0;
    case "mouseover":
      return Tt = Un(Tt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return cr.set(o, Un(cr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, fr.set(o, Un(fr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Fc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Pc(n), t !== null) {
          e.blockedOn = t, jc(e.priority, function() {
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
function ll(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      xi = r, n.target.dispatchEvent(r), xi = null;
    } else
      return t = Or(n), t !== null && wu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Os(e, t, n) {
  ll(e) && n.delete(t);
}
function Ip() {
  Ti = !1, _t !== null && ll(_t) && (_t = null), Pt !== null && ll(Pt) && (Pt = null), Tt !== null && ll(Tt) && (Tt = null), cr.forEach(Os), fr.forEach(Os);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ti || (Ti = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Ip)));
}
function dr(e) {
  function t(l) {
    return Bn(l, e);
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
    Fc(n), n.blockedOn === null && kt.shift();
}
var wn = gt.ReactCurrentBatchConfig, El = !0;
function jp(e, t, n, r) {
  var l = j, o = wn.transition;
  wn.transition = null;
  try {
    j = 1, Su(e, t, n, r);
  } finally {
    j = l, wn.transition = o;
  }
}
function Fp(e, t, n, r) {
  var l = j, o = wn.transition;
  wn.transition = null;
  try {
    j = 4, Su(e, t, n, r);
  } finally {
    j = l, wn.transition = o;
  }
}
function Su(e, t, n, r) {
  if (El) {
    var l = Ni(e, t, n, r);
    if (l === null)
      Go(e, t, r, Cl, n), zs(e, r);
    else if (Ap(l, e, t, n, r))
      r.stopPropagation();
    else if (zs(e, r), t & 4 && -1 < Mp.indexOf(e)) {
      for (; l !== null; ) {
        var o = Or(l);
        if (o !== null && Mc(o), o = Ni(e, t, n, r), o === null && Go(e, t, r, Cl, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Go(e, t, r, null, n);
  }
}
var Cl = null;
function Ni(e, t, n, r) {
  if (Cl = null, e = yu(r), e = Wt(e), e !== null)
    if (t = bt(e), t === null)
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
  return Cl = e, null;
}
function Dc(e) {
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
        case gu:
          return 1;
        case Oc:
          return 4;
        case kl:
        case Pp:
          return 16;
        case Rc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Et = null, ku = null, ol = null;
function Uc() {
  if (ol)
    return ol;
  var e, t = ku, n = t.length, r, l = "value" in Et ? Et.value : Et.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return ol = l.slice(e, 1 < r ? 1 - r : void 0);
}
function il(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Kr() {
  return !0;
}
function Rs() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Kr : Rs, this.isPropagationStopped = Rs, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, xu = Ie($n), zr = Q({}, $n, { view: 0, detail: 0 }), Dp = Ie(zr), Fo, Do, Wn, Gl = Q({}, zr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Eu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Wn && (Wn && e.type === "mousemove" ? (Fo = e.screenX - Wn.screenX, Do = e.screenY - Wn.screenY) : Do = Fo = 0, Wn = e), Fo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Do;
} }), Ls = Ie(Gl), Up = Q({}, Gl, { dataTransfer: 0 }), Bp = Ie(Up), Wp = Q({}, zr, { relatedTarget: 0 }), Uo = Ie(Wp), Hp = Q({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vp = Ie(Hp), Kp = Q({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qp = Ie(Kp), Gp = Q({}, $n, { data: 0 }), $s = Ie(Gp), Yp = {
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
function Eu() {
  return Jp;
}
var qp = Q({}, zr, { key: function(e) {
  if (e.key) {
    var t = Yp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = il(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Eu, charCode: function(e) {
  return e.type === "keypress" ? il(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? il(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bp = Ie(qp), em = Q({}, Gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ms = Ie(em), tm = Q({}, zr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Eu }), nm = Ie(tm), rm = Q({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = Ie(rm), om = Q({}, Gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), im = Ie(om), um = [9, 13, 27, 32], Cu = dt && "CompositionEvent" in window, bn = null;
dt && "documentMode" in document && (bn = document.documentMode);
var sm = dt && "TextEvent" in window && !bn, Bc = dt && (!Cu || bn && 8 < bn && 11 >= bn), As = String.fromCharCode(32), Is = !1;
function Wc(e, t) {
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
function Hc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function am(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : (Is = !0, As);
    case "textInput":
      return e = t.data, e === As && Is ? null : e;
    default:
      return null;
  }
}
function cm(e, t) {
  if (on)
    return e === "compositionend" || !Cu && Wc(e, t) ? (e = Uc(), ol = ku = Et = null, on = !1, e) : null;
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
var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fm[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  kc(r), t = _l(t, "onChange"), 0 < t.length && (n = new xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var er = null, pr = null;
function dm(e) {
  tf(e, 0);
}
function Yl(e) {
  var t = an(e);
  if (mc(t))
    return e;
}
function pm(e, t) {
  if (e === "change")
    return t;
}
var Kc = !1;
if (dt) {
  var Bo;
  if (dt) {
    var Wo = "oninput" in document;
    if (!Wo) {
      var Fs = document.createElement("div");
      Fs.setAttribute("oninput", "return;"), Wo = typeof Fs.oninput == "function";
    }
    Bo = Wo;
  } else
    Bo = !1;
  Kc = Bo && (!document.documentMode || 9 < document.documentMode);
}
function Ds() {
  er && (er.detachEvent("onpropertychange", Qc), pr = er = null);
}
function Qc(e) {
  if (e.propertyName === "value" && Yl(pr)) {
    var t = [];
    Vc(t, pr, e, yu(e)), _c(dm, t);
  }
}
function mm(e, t, n) {
  e === "focusin" ? (Ds(), er = t, pr = n, er.attachEvent("onpropertychange", Qc)) : e === "focusout" && Ds();
}
function hm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yl(pr);
}
function ym(e, t) {
  if (e === "click")
    return Yl(t);
}
function gm(e, t) {
  if (e === "input" || e === "change")
    return Yl(t);
}
function vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : vm;
function mr(e, t) {
  if (qe(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !qe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Us(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Bs(e, t) {
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
function wm(e) {
  var t = Yc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Gc(n.ownerDocument.documentElement, n)) {
    if (r !== null && _u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Bs(n, o);
        var i = Bs(
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
var Sm = dt && "documentMode" in document && 11 >= document.documentMode, un = null, zi = null, tr = null, Oi = !1;
function Ws(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oi || un == null || un !== vl(r) || (r = un, "selectionStart" in r && _u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && mr(tr, r) || (tr = r, r = _l(zi, "onSelect"), 0 < r.length && (t = new xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = un)));
}
function Qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var sn = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, Ho = {}, Xc = {};
dt && (Xc = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function Xl(e) {
  if (Ho[e])
    return Ho[e];
  if (!sn[e])
    return e;
  var t = sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Xc)
      return Ho[e] = t[n];
  return e;
}
var Zc = Xl("animationend"), Jc = Xl("animationiteration"), qc = Xl("animationstart"), bc = Xl("transitionend"), ef = /* @__PURE__ */ new Map(), Hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function At(e, t) {
  ef.set(e, t), qt(t, [e]);
}
for (var Vo = 0; Vo < Hs.length; Vo++) {
  var Ko = Hs[Vo], km = Ko.toLowerCase(), xm = Ko[0].toUpperCase() + Ko.slice(1);
  At(km, "on" + xm);
}
At(Zc, "onAnimationEnd");
At(Jc, "onAnimationIteration");
At(qc, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(bc, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
qt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, kp(r, t, void 0, e), e.currentTarget = null;
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
          Vs(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Vs(l, u, a), o = s;
        }
    }
  }
  if (Sl)
    throw e = _i, Sl = !1, _i = null, e;
}
function U(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function Qo(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, ac.forEach(function(n) {
      n !== "selectionchange" && (Em.has(n) || Qo(n, !1, e), Qo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, Qo("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (Dc(t)) {
    case 1:
      var l = jp;
      break;
    case 4:
      l = Fp;
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
            if (i = Wt(u), i === null)
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
        var g = xu, v = e;
        switch (e) {
          case "keypress":
            if (il(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = bp;
            break;
          case "focusin":
            v = "focus", g = Uo;
            break;
          case "focusout":
            v = "blur", g = Uo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Uo;
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
            g = Ls;
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
            g = nm;
            break;
          case Zc:
          case Jc:
          case qc:
            g = Vp;
            break;
          case bc:
            g = lm;
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
            g = Qp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ms;
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
        0 < y.length && (p = new g(p, v, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== xi && (v = n.relatedTarget || n.fromElement) && (Wt(v) || v[pt]))
          break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = a, v = v ? Wt(v) : null, v !== null && (P = bt(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = a), g !== v)) {
          if (y = Ls, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ms, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = g == null ? p : an(g), d = v == null ? p : an(v), p = new y(w, c + "leave", g, n, h), p.target = P, p.relatedTarget = d, w = null, Wt(h) === a && (y = new y(f, c + "enter", v, n, h), y.target = d, y.relatedTarget = P, w = y), P = w, g && v)
            t: {
              for (y = g, f = v, c = 0, d = y; d; d = en(d))
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
          g !== null && Ks(m, p, g, y, !1), v !== null && P !== null && Ks(m, P, v, y, !0);
        }
      }
      e: {
        if (p = a ? an(a) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var x = pm;
        else if (js(p))
          if (Kc)
            x = gm;
          else {
            x = hm;
            var E = mm;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = ym);
        if (x && (x = x(e, a))) {
          Vc(m, x, n, h);
          break e;
        }
        E && E(e, p, a), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && gi(p, "number", p.value);
      }
      switch (E = a ? an(a) : window, e) {
        case "focusin":
          (js(E) || E.contentEditable === "true") && (un = E, zi = a, tr = null);
          break;
        case "focusout":
          tr = zi = un = null;
          break;
        case "mousedown":
          Oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oi = !1, Ws(m, n, h);
          break;
        case "selectionchange":
          if (Sm)
            break;
        case "keydown":
        case "keyup":
          Ws(m, n, h);
      }
      var k;
      if (Cu)
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
        on ? Wc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Bc && n.locale !== "ko" && (on || T !== "onCompositionStart" ? T === "onCompositionEnd" && on && (k = Uc()) : (Et = h, ku = "value" in Et ? Et.value : Et.textContent, on = !0)), E = _l(a, T), 0 < E.length && (T = new $s(T, e, null, n, h), m.push({ event: T, listeners: E }), k ? T.data = k : (k = Hc(n), k !== null && (T.data = k)))), (k = sm ? am(e, n) : cm(e, n)) && (a = _l(a, "onBeforeInput"), 0 < a.length && (h = new $s("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: a }), h.data = k));
    }
    tf(m, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = ar(e, n), o != null && r.unshift(yr(e, o, l)), o = ar(e, t), o != null && r.push(yr(e, o, l))), e = e.return;
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
function Ks(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = ar(n, o), s != null && i.unshift(yr(n, s, u))) : l || (s = ar(n, o), s != null && i.push(yr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Cm = /\r\n?/g, _m = /\u0000|\uFFFD/g;
function Qs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Cm, `
`).replace(_m, "");
}
function Yr(e, t, n) {
  if (t = Qs(t), Qs(e) !== t && n)
    throw Error(S(425));
}
function Pl() {
}
var Ri = null, Li = null;
function $i(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Mi = typeof setTimeout == "function" ? setTimeout : void 0, Pm = typeof clearTimeout == "function" ? clearTimeout : void 0, Gs = typeof Promise == "function" ? Promise : void 0, Tm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gs < "u" ? function(e) {
  return Gs.resolve(null).then(e).catch(Nm);
} : Mi;
function Nm(e) {
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
          e.removeChild(l), dr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
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
var Mn = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Mn, gr = "__reactProps$" + Mn, pt = "__reactContainer$" + Mn, Ai = "__reactEvents$" + Mn, zm = "__reactListeners$" + Mn, Om = "__reactHandles$" + Mn;
function Wt(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Ys(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = Ys(e);
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
  throw Error(S(33));
}
function Zl(e) {
  return e[gr] || null;
}
var Ii = [], cn = -1;
function It(e) {
  return { current: e };
}
function B(e) {
  0 > cn || (e.current = Ii[cn], Ii[cn] = null, cn--);
}
function D(e, t) {
  cn++, Ii[cn] = e.current, e.current = t;
}
var Mt = {}, ge = It(Mt), Ce = It(!1), Gt = Mt;
function _n(e, t) {
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
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  B(Ce), B(ge);
}
function Xs(e, t, n) {
  if (ge.current !== Mt)
    throw Error(S(168));
  D(ge, t), D(Ce, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(S(108, mp(e) || "Unknown", l));
  return Q({}, n, r);
}
function Nl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Gt = ge.current, D(ge, e), D(Ce, Ce.current), !0;
}
function Zs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = rf(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, B(Ce), B(ge), D(ge, e)) : B(Ce), D(Ce, n);
}
var st = null, Jl = !1, Xo = !1;
function lf(e) {
  st === null ? st = [e] : st.push(e);
}
function Rm(e) {
  Jl = !0, lf(e);
}
function jt() {
  if (!Xo && st !== null) {
    Xo = !0;
    var e = 0, t = j;
    try {
      var n = st;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, Jl = !1;
    } catch (l) {
      throw st !== null && (st = st.slice(e + 1)), zc(gu, jt), l;
    } finally {
      j = t, Xo = !1;
    }
  }
  return null;
}
var fn = [], dn = 0, zl = null, Ol = 0, Fe = [], De = 0, Yt = null, at = 1, ct = "";
function Ut(e, t) {
  fn[dn++] = Ol, fn[dn++] = zl, zl = e, Ol = t;
}
function of(e, t, n) {
  Fe[De++] = at, Fe[De++] = ct, Fe[De++] = Yt, Yt = e;
  var r = at;
  e = ct;
  var l = 32 - Ze(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ze(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, at = 1 << 32 - Ze(t) + l | n << l | r, ct = o + e;
  } else
    at = 1 << o | n << l | r, ct = e;
}
function Pu(e) {
  e.return !== null && (Ut(e, 1), of(e, 1, 0));
}
function Tu(e) {
  for (; e === zl; )
    zl = fn[--dn], fn[dn] = null, Ol = fn[--dn], fn[dn] = null;
  for (; e === Yt; )
    Yt = Fe[--De], Fe[De] = null, ct = Fe[--De], Fe[De] = null, at = Fe[--De], Fe[De] = null;
}
var Le = null, Re = null, W = !1, Xe = null;
function uf(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Js(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, Re = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function ji(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if (W) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Js(e, t)) {
        if (ji(e))
          throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Le;
        t && Js(e, t) ? uf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Le = e);
      }
    } else {
      if (ji(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, W = !1, Le = e;
    }
  }
}
function qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Xr(e) {
  if (e !== Le)
    return !1;
  if (!W)
    return qs(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps)), t && (t = Re)) {
    if (ji(e))
      throw sf(), Error(S(418));
    for (; t; )
      uf(e, t), t = Nt(t.nextSibling);
  }
  if (qs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
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
    Re = Le ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function sf() {
  for (var e = Re; e; )
    e = Nt(e.nextSibling);
}
function Pn() {
  Re = Le = null, W = !1;
}
function Nu(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var Lm = gt.ReactCurrentBatchConfig;
function Hn(e, t, n) {
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
function Zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
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
    return f = Lt(f, c), f.index = 0, f.sibling = null, f;
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
    var x = d.type;
    return x === ln ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && bs(x) === c.type) ? (w = l(c, d.props), w.ref = Hn(f, c, d), w.return = f, w) : (w = pl(d.type, d.key, d.props, null, f.mode, w), w.ref = Hn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = ri(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, x) {
    return c === null || c.tag !== 7 ? (c = Qt(d, f.mode, w, x), c.return = f, c) : (c = l(c, d), c.return = f, c);
  }
  function m(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ni("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Dr:
          return d = pl(c.type, c.key, c.props, null, f.mode, d), d.ref = Hn(f, null, c), d.return = f, d;
        case rn:
          return c = ri(c, f.mode, d), c.return = f, c;
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
        case Dr:
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
  function g(f, c, d, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Dr:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
        case rn:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, x);
        case wt:
          var E = w._init;
          return g(f, c, d, E(w._payload), x);
      }
      if (Yn(w) || Fn(w))
        return f = f.get(d) || null, h(c, f, w, x, null);
      Zr(c, w);
    }
    return null;
  }
  function v(f, c, d, w) {
    for (var x = null, E = null, k = c, T = c = 0, H = null; k !== null && T < d.length; T++) {
      k.index > T ? (H = k, k = null) : H = k.sibling;
      var O = p(f, k, d[T], w);
      if (O === null) {
        k === null && (k = H);
        break;
      }
      e && k && O.alternate === null && t(f, k), c = o(O, c, T), E === null ? x = O : E.sibling = O, E = O, k = H;
    }
    if (T === d.length)
      return n(f, k), W && Ut(f, T), x;
    if (k === null) {
      for (; T < d.length; T++)
        k = m(f, d[T], w), k !== null && (c = o(k, c, T), E === null ? x = k : E.sibling = k, E = k);
      return W && Ut(f, T), x;
    }
    for (k = r(f, k); T < d.length; T++)
      H = g(k, f, T, d[T], w), H !== null && (e && H.alternate !== null && k.delete(H.key === null ? T : H.key), c = o(H, c, T), E === null ? x = H : E.sibling = H, E = H);
    return e && k.forEach(function(de) {
      return t(f, de);
    }), W && Ut(f, T), x;
  }
  function y(f, c, d, w) {
    var x = Fn(d);
    if (typeof x != "function")
      throw Error(S(150));
    if (d = x.call(d), d == null)
      throw Error(S(151));
    for (var E = x = null, k = c, T = c = 0, H = null, O = d.next(); k !== null && !O.done; T++, O = d.next()) {
      k.index > T ? (H = k, k = null) : H = k.sibling;
      var de = p(f, k, O.value, w);
      if (de === null) {
        k === null && (k = H);
        break;
      }
      e && k && de.alternate === null && t(f, k), c = o(de, c, T), E === null ? x = de : E.sibling = de, E = de, k = H;
    }
    if (O.done)
      return n(
        f,
        k
      ), W && Ut(f, T), x;
    if (k === null) {
      for (; !O.done; T++, O = d.next())
        O = m(f, O.value, w), O !== null && (c = o(O, c, T), E === null ? x = O : E.sibling = O, E = O);
      return W && Ut(f, T), x;
    }
    for (k = r(f, k); !O.done; T++, O = d.next())
      O = g(k, f, T, O.value, w), O !== null && (e && O.alternate !== null && k.delete(O.key === null ? T : O.key), c = o(O, c, T), E === null ? x = O : E.sibling = O, E = O);
    return e && k.forEach(function(In) {
      return t(f, In);
    }), W && Ut(f, T), x;
  }
  function P(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === ln && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Dr:
          e: {
            for (var x = d.key, E = c; E !== null; ) {
              if (E.key === x) {
                if (x = d.type, x === ln) {
                  if (E.tag === 7) {
                    n(f, E.sibling), c = l(E, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (E.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && bs(x) === E.type) {
                  n(f, E.sibling), c = l(E, d.props), c.ref = Hn(f, E, d), c.return = f, f = c;
                  break e;
                }
                n(f, E);
                break;
              } else
                t(f, E);
              E = E.sibling;
            }
            d.type === ln ? (c = Qt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = pl(d.type, d.key, d.props, null, f.mode, w), w.ref = Hn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case rn:
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
        case wt:
          return E = d._init, P(f, c, E(d._payload), w);
      }
      if (Yn(d))
        return v(f, c, d, w);
      if (Fn(d))
        return y(f, c, d, w);
      Zr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, d), c.return = f, f = c) : (n(f, c), c = ni(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return P;
}
var Tn = af(!0), cf = af(!1), Rl = It(null), Ll = null, pn = null, zu = null;
function Ou() {
  zu = pn = Ll = null;
}
function Ru(e) {
  var t = Rl.current;
  B(Rl), e._currentValue = t;
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Sn(e, t) {
  Ll = e, zu = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
      if (Ll === null)
        throw Error(S(308));
      pn = e, Ll.dependencies = { lanes: 0, firstContext: e };
    } else
      pn = pn.next = e;
  return t;
}
var Ht = null;
function Lu(e) {
  Ht === null ? Ht = [e] : Ht.push(e);
}
function ff(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Lu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function $u(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function df(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, $ & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Lu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, mt(e, n);
}
function ul(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
function ea(e, t) {
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
function $l(e, t, n, r) {
  var l = e.updateQueue;
  St = !1;
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
              m = Q({}, m, p);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = g, s = m) : h = h.next = g, i |= p;
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
    Zt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function ta(e, t, n) {
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
var Rr = {}, ot = It(Rr), vr = It(Rr), wr = It(Rr);
function Vt(e) {
  if (e === Rr)
    throw Error(S(174));
  return e;
}
function Mu(e, t) {
  switch (D(wr, t), D(vr, e), D(ot, Rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wi(t, e);
  }
  B(ot), D(ot, t);
}
function Nn() {
  B(ot), B(vr), B(wr);
}
function pf(e) {
  Vt(wr.current);
  var t = Vt(ot.current), n = wi(t, e.type);
  t !== n && (D(vr, e), D(ot, n));
}
function Au(e) {
  vr.current === e && (B(ot), B(vr));
}
var V = It(0);
function Ml(e) {
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
function Iu() {
  for (var e = 0; e < Zo.length; e++)
    Zo[e]._workInProgressVersionPrimary = null;
  Zo.length = 0;
}
var sl = gt.ReactCurrentDispatcher, Jo = gt.ReactCurrentBatchConfig, Xt = 0, K = null, te = null, le = null, Al = !1, nr = !1, Sr = 0, $m = 0;
function pe() {
  throw Error(S(321));
}
function ju(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n]))
      return !1;
  return !0;
}
function Fu(e, t, n, r, l, o) {
  if (Xt = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sl.current = e === null || e.memoizedState === null ? jm : Fm, e = n(r, l), nr) {
    o = 0;
    do {
      if (nr = !1, Sr = 0, 25 <= o)
        throw Error(S(301));
      o += 1, le = te = null, t.updateQueue = null, sl.current = Dm, e = n(r, l);
    } while (nr);
  }
  if (sl.current = Il, t = te !== null && te.next !== null, Xt = 0, le = te = K = null, Al = !1, t)
    throw Error(S(300));
  return e;
}
function Du() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? K.memoizedState = le = e : le = le.next = e, le;
}
function Ve() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = te.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null)
    le = t, te = e;
  else {
    if (e === null)
      throw Error(S(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, le === null ? K.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = Ve(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = te, l = r.baseQueue, o = n.pending;
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
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, qe(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, K.lanes |= o, Zt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bo(e) {
  var t = Ve(), n = t.queue;
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
    qe(o, t.memoizedState) || (Ee = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function mf() {
}
function hf(e, t) {
  var n = K, r = Ve(), l = t(), o = !qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ee = !0), r = r.queue, Uu(vf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, gf.bind(null, n, r, l, t), void 0, null), oe === null)
      throw Error(S(349));
    Xt & 30 || yf(n, t, l);
  }
  return l;
}
function yf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function Sf(e) {
  var t = mt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function na(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Im.bind(null, K, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kf() {
  return Ve().memoizedState;
}
function al(e, t, n, r) {
  var l = et();
  K.flags |= e, l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function ql(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (o = i.destroy, r !== null && ju(r, i.deps)) {
      l.memoizedState = xr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, l.memoizedState = xr(1 | t, n, o, r);
}
function ra(e, t) {
  return al(8390656, 8, e, t);
}
function Uu(e, t) {
  return ql(2048, 8, e, t);
}
function xf(e, t) {
  return ql(4, 2, e, t);
}
function Ef(e, t) {
  return ql(4, 4, e, t);
}
function Cf(e, t) {
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
  return n = n != null ? n.concat([e]) : null, ql(4, 4, Cf.bind(null, t, e), n);
}
function Bu() {
}
function Pf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Tf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ju(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Nf(e, t, n) {
  return Xt & 21 ? (qe(n, t) || (n = Lc(), K.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n);
}
function Mm(e, t) {
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
function zf() {
  return Ve().memoizedState;
}
function Am(e, t, n) {
  var r = Rt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Of(e))
    Rf(t, n);
  else if (n = ff(e, t, n, r), n !== null) {
    var l = we();
    Je(n, e, r, l), Lf(n, t, r);
  }
}
function Im(e, t, n) {
  var r = Rt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Of(e))
    Rf(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, qe(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Lu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = ff(e, t, l, r), n !== null && (l = we(), Je(n, e, r, l), Lf(n, t, r));
  }
}
function Of(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Rf(e, t) {
  nr = Al = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vu(e, n);
  }
}
var Il = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, jm = { readContext: He, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: ra, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, al(
    4194308,
    4,
    Cf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return al(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return al(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Am.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: na, useDebugValue: Bu, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = na(!1), t = e[0];
  return e = Mm.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, l = et();
  if (W) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), oe === null)
      throw Error(S(349));
    Xt & 30 || yf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, ra(vf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, xr(9, gf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = oe.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = $m++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Fm = {
  readContext: He,
  useCallback: Pf,
  useContext: He,
  useEffect: Uu,
  useImperativeHandle: _f,
  useInsertionEffect: xf,
  useLayoutEffect: Ef,
  useMemo: Tf,
  useReducer: qo,
  useRef: kf,
  useState: function() {
    return qo(kr);
  },
  useDebugValue: Bu,
  useDeferredValue: function(e) {
    var t = Ve();
    return Nf(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = qo(kr)[0], t = Ve().memoizedState;
    return [e, t];
  },
  useMutableSource: mf,
  useSyncExternalStore: hf,
  useId: zf,
  unstable_isNewReconciler: !1
}, Dm = { readContext: He, useCallback: Pf, useContext: He, useEffect: Uu, useImperativeHandle: _f, useInsertionEffect: xf, useLayoutEffect: Ef, useMemo: Tf, useReducer: bo, useRef: kf, useState: function() {
  return bo(kr);
}, useDebugValue: Bu, useDeferredValue: function(e) {
  var t = Ve();
  return te === null ? t.memoizedState = e : Nf(t, te.memoizedState, e);
}, useTransition: function() {
  var e = bo(kr)[0], t = Ve().memoizedState;
  return [e, t];
}, useMutableSource: mf, useSyncExternalStore: hf, useId: zf, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ui(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bl = { isMounted: function(e) {
  return (e = e._reactInternals) ? bt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Rt(e), o = ft(r, l);
  o.payload = t, n != null && (o.callback = n), t = zt(e, o, l), t !== null && (Je(t, e, l, r), ul(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), l = Rt(e), o = ft(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = zt(e, o, l), t !== null && (Je(t, e, l, r), ul(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = Rt(e), l = ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = zt(e, l, r), t !== null && (Je(t, e, r, n), ul(t, e, r));
} };
function la(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(l, o) : !0;
}
function $f(e, t, n) {
  var r = !1, l = Mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = He(o) : (l = _e(t) ? Gt : ge.current, r = t.contextTypes, o = (r = r != null) ? _n(e, l) : Mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function oa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, $u(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = He(o) : (o = _e(t) ? Gt : ge.current, l.context = _n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ui(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && bl.enqueueReplaceState(l, l.state, null), $l(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += pp(r), r = r.return;
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
function Wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Um = typeof WeakMap == "function" ? WeakMap : Map;
function Mf(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fl || (Fl = !0, qi = r), Wi(e, t);
  }, n;
}
function Af(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Wi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Wi(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Um();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = eh.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, zt(n, t, 1))), n.lanes |= 1), e);
}
var Bm = gt.ReactCurrentOwner, Ee = !1;
function ve(e, t, n, r) {
  t.child = e === null ? cf(t, null, n, r) : Tn(t, e.child, n, r);
}
function aa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Sn(t, l), r = Fu(e, t, n, r, o, l), n = Du(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (W && n && Pu(t), t.flags |= 1, ve(e, t, r, l), t.child);
}
function ca(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Xu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, If(e, t, o, r, l)) : (e = pl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mr, n(i, r) && e.ref === t.ref)
      return ht(e, t, l);
  }
  return t.flags |= 1, e = Lt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function If(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (mr(o, r) && e.ref === t.ref)
      if (Ee = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ee = !0);
      else
        return t.lanes = e.lanes, ht(e, t, l);
  }
  return Hi(e, t, n, r, l);
}
function jf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, D(hn, ze), ze |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, D(hn, ze), ze |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, D(hn, ze), ze |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, D(hn, ze), ze |= r;
  return ve(e, t, l, n), t.child;
}
function Ff(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Hi(e, t, n, r, l) {
  var o = _e(n) ? Gt : ge.current;
  return o = _n(t, o), Sn(t, l), n = Fu(e, t, n, r, o, l), r = Du(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (W && r && Pu(t), t.flags |= 1, ve(e, t, n, l), t.child);
}
function fa(e, t, n, r, l) {
  if (_e(n)) {
    var o = !0;
    Nl(t);
  } else
    o = !1;
  if (Sn(t, l), t.stateNode === null)
    cl(e, t), $f(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = He(a) : (a = _e(n) ? Gt : ge.current, a = _n(t, a));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && oa(t, i, r, a), St = !1;
    var p = t.memoizedState;
    i.state = p, $l(t, r, i, l), s = t.memoizedState, u !== r || p !== s || Ce.current || St ? (typeof h == "function" && (Ui(t, n, h, r), s = t.memoizedState), (u = St || la(t, n, u, r, p, s, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, df(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ge(t.type, u), i.props = a, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = _e(n) ? Gt : ge.current, s = _n(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && oa(t, i, r, s), St = !1, p = t.memoizedState, i.state = p, $l(t, r, i, l);
    var v = t.memoizedState;
    u !== m || p !== v || Ce.current || St ? (typeof g == "function" && (Ui(t, n, g, r), v = t.memoizedState), (a = St || la(t, n, a, r, p, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vi(e, t, n, r, o, l);
}
function Vi(e, t, n, r, l, o) {
  Ff(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Zs(t, n, !1), ht(e, t, o);
  r = t.stateNode, Bm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Tn(t, e.child, null, o), t.child = Tn(t, null, u, o)) : ve(e, t, u, o), t.memoizedState = r.state, l && Zs(t, n, !0), t.child;
}
function Df(e) {
  var t = e.stateNode;
  t.pendingContext ? Xs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xs(e, t.context, !1), Mu(e, t.containerInfo);
}
function da(e, t, n, r, l) {
  return Pn(), Nu(l), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uf(e, t, n) {
  var r = t.pendingProps, l = V.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(V, l & 1), e === null)
    return Fi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = no(i, r, 0, null), e = Qt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qi(n), t.memoizedState = Ki, e) : Wu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Wm(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Lt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Lt(u, o) : (o = Qt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Qi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Ki, r;
  }
  return o = e.child, e = o.sibling, r = Lt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Wu(e, t) {
  return t = no({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Jr(e, t, n, r) {
  return r !== null && Nu(r), Tn(t, e.child, null, n), e = Wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Wm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ei(Error(S(422))), Jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = no({ mode: "visible", children: r.children }, l, 0, null), o = Qt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Tn(t, e.child, null, i), t.child.memoizedState = Qi(i), t.memoizedState = Ki, o);
  if (!(t.mode & 1))
    return Jr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = ei(o, r, void 0), Jr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ee || u) {
    if (r = oe, r !== null) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, mt(e, l), Je(r, e, l, -1));
    }
    return Yu(), r = ei(Error(S(421))), Jr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = th.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Re = Nt(l.nextSibling), Le = t, W = !0, Xe = null, e !== null && (Fe[De++] = at, Fe[De++] = ct, Fe[De++] = Yt, at = e.id, ct = e.overflow, Yt = t), t = Wu(t, r.children), t.flags |= 4096, t);
}
function pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ti(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Bf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ve(e, t, r.children, n), r = V.current, r & 2)
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
  if (D(V, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Ml(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ti(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ml(e) === null) {
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
function cl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Lt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Hm(e, t, n) {
  switch (t.tag) {
    case 3:
      Df(t), Pn();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      _e(t.type) && Nl(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      D(Rl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (D(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Uf(e, t, n) : (D(V, V.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      D(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Bf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, jf(e, t, n);
  }
  return ht(e, t, n);
}
var Wf, Gi, Hf, Vf;
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
Gi = function() {
};
Hf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Vt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        l = hi(e, l), r = hi(e, r), o = [];
        break;
      case "select":
        l = Q({}, l, { value: void 0 }), r = Q({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = vi(e, l), r = vi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Pl);
    }
    Si(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ur.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ur.hasOwnProperty(a) ? (s != null && a === "onScroll" && U("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vf = function(e, t, n, r) {
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
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Vm(e, t, n) {
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
      return me(t), null;
    case 1:
      return _e(t.type) && Tl(), me(t), null;
    case 3:
      return r = t.stateNode, Nn(), B(Ce), B(ge), Iu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (tu(Xe), Xe = null))), Gi(e, t), me(t), null;
    case 5:
      Au(t);
      var l = Vt(wr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Hf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return me(t), null;
        }
        if (e = Vt(ot.current), Xr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[gr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Zn.length; l++)
                U(Zn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              xs(r, o), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, U("invalid", r);
              break;
            case "textarea":
              Cs(r, o), U("invalid", r);
          }
          Si(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Yr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Yr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : ur.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r);
            }
          switch (n) {
            case "input":
              Ur(r), Es(r, o, !0);
              break;
            case "textarea":
              Ur(r), _s(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Pl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[gr] = r, Wf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ki(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++)
                  U(Zn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                xs(e, r), l = hi(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Q({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                Cs(e, r), l = vi(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Si(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Sc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && vc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && sr(e, s) : typeof s == "number" && sr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ur.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && du(e, o, s, i));
              }
            switch (n) {
              case "input":
                Ur(e), Es(e, r, !1);
                break;
              case "textarea":
                Ur(e), _s(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? yn(e, !!r.multiple, o, !1) : r.defaultValue != null && yn(
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null)
        Vf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Vt(wr.current), Vt(ot.current), Xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Le, e !== null))
            switch (e.tag) {
              case 3:
                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (B(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Re !== null && t.mode & 1 && !(t.flags & 128))
          sf(), Pn(), t.flags |= 98560, o = !1;
        else if (o = Xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[rt] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else
          Xe !== null && (tu(Xe), Xe = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : Yu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Nn(), Gi(e, t), e === null && hr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return Ru(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && Tl(), me(t), null;
    case 19:
      if (B(V), o = t.memoizedState, o === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Vn(o, !1);
        else {
          if (ne !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ml(e), i !== null) {
                for (t.flags |= 128, Vn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return D(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && J() > On && (t.flags |= 128, r = !0, Vn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ml(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
              return me(t), null;
          } else
            2 * J() - o.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Vn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = V.current, D(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Gu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ze & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Km(e, t) {
  switch (Tu(t), t.tag) {
    case 1:
      return _e(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Nn(), B(Ce), B(ge), Iu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Au(t), null;
    case 13:
      if (B(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(V), null;
    case 4:
      return Nn(), null;
    case 10:
      return Ru(t.type._context), null;
    case 22:
    case 23:
      return Gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qr = !1, ye = !1, Qm = typeof WeakSet == "function" ? WeakSet : Set, C = null;
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
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ma = !1;
function Gm(e, t) {
  if (Ri = El, e = Yc(), _u(e)) {
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
              for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (g = m.firstChild) !== null; )
                p = m, m = g;
              for (; ; ) {
                if (m === e)
                  break t;
                if (p === n && ++a === l && (u = i), p === o && ++h === r && (s = i), (g = m.nextSibling) !== null)
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
  for (Li = { focusedElem: e, selectionRange: n }, El = !1, C = t; C !== null; )
    if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, C = e;
    else
      for (; C !== null; ) {
        t = C;
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
                  var y = v.memoizedProps, P = v.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ge(t.type, y), P);
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
          X(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, C = e;
          break;
        }
        C = t.return;
      }
  return v = ma, ma = !1, v;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Yi(t, n, o);
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
function Xi(e) {
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
  t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[gr], delete t[Ai], delete t[zm], delete t[Om])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pl));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; )
      Zi(e, t, n), e = e.sibling;
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; )
      Ji(e, t, n), e = e.sibling;
}
var ue = null, Ye = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    Gf(e, t, n), n = n.sibling;
}
function Gf(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Ql, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ye || mn(n, t);
    case 6:
      var r = ue, l = Ye;
      ue = null, vt(e, t, n), ue = r, Ye = l, ue !== null && (Ye ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ye ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Yo(e.parentNode, n) : e.nodeType === 1 && Yo(e, n), dr(e)) : Yo(ue, n.stateNode));
      break;
    case 4:
      r = ue, l = Ye, ue = n.stateNode.containerInfo, Ye = !0, vt(e, t, n), ue = r, Ye = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Yi(n, t, i), l = l.next;
        } while (l !== r);
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
function ya(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qm()), t.forEach(function(r) {
      var l = nh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Qe(e, t) {
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
                ue = u.stateNode, Ye = !1;
                break e;
              case 3:
                ue = u.stateNode.containerInfo, Ye = !0;
                break e;
              case 4:
                ue = u.stateNode.containerInfo, Ye = !0;
                break e;
            }
            u = u.return;
          }
        if (ue === null)
          throw Error(S(160));
        Gf(o, i, l), ue = null, Ye = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        X(l, t, a);
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
      if (Qe(t, e), be(e), r & 4) {
        try {
          rr(3, e, e.return), eo(3, e);
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
      Qe(t, e), be(e), r & 512 && n !== null && mn(n, n.return);
      break;
    case 5:
      if (Qe(t, e), be(e), r & 512 && n !== null && mn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          sr(l, "");
        } catch (y) {
          X(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && hc(l, o), ki(u, i);
            var a = ki(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], m = s[i + 1];
              h === "style" ? Sc(l, m) : h === "dangerouslySetInnerHTML" ? vc(l, m) : h === "children" ? sr(l, m) : du(l, h, m, a);
            }
            switch (u) {
              case "input":
                yi(l, o);
                break;
              case "textarea":
                yc(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? yn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? yn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[gr] = o;
          } catch (y) {
            X(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Qe(t, e), be(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (y) {
          X(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Qe(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          dr(t.containerInfo);
        } catch (y) {
          X(e, e.return, y);
        }
      break;
    case 4:
      Qe(t, e), be(e);
      break;
    case 13:
      Qe(t, e), be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ku = J())), r & 4 && ya(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (a = ye) || h, Qe(t, e), ye = a) : Qe(t, e), be(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (C = e, h = e.child; h !== null; ) {
            for (m = C = h; C !== null; ) {
              switch (p = C, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, p, p.return);
                  break;
                case 1:
                  mn(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
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
                    va(m);
                    continue;
                  }
              }
              g !== null ? (g.return = p, C = g) : va(m);
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
      Qe(t, e), be(e), r & 4 && ya(e);
      break;
    case 21:
      break;
    default:
      Qe(
        t,
        e
      ), be(e);
  }
}
function be(e) {
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
          r.flags & 32 && (sr(l, ""), r.flags &= -33);
          var o = ha(e);
          Ji(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ha(e);
          Zi(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ym(e, t, n) {
  C = e, Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || qr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ye;
        u = qr;
        var a = ye;
        if (qr = i, (ye = s) && !a)
          for (C = l; C !== null; )
            i = C, s = i.child, i.tag === 22 && i.memoizedState !== null ? wa(l) : s !== null ? (s.return = i, C = s) : wa(l);
        for (; o !== null; )
          C = o, Xf(o), o = o.sibling;
        C = l, qr = u, ye = a;
      }
      ga(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, C = o) : ga(e);
  }
}
function ga(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ta(t, o, r);
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
                ta(t, i, n);
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
              throw Error(S(163));
          }
        ye || t.flags & 512 && Xi(t);
      } catch (p) {
        X(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function va(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function wa(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eo(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, l, s);
            }
          }
          var o = t.return;
          try {
            Xi(t);
          } catch (s) {
            X(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Xi(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var Xm = Math.ceil, jl = gt.ReactCurrentDispatcher, Hu = gt.ReactCurrentOwner, We = gt.ReactCurrentBatchConfig, $ = 0, oe = null, ee = null, ae = 0, ze = 0, hn = It(0), ne = 0, Er = null, Zt = 0, to = 0, Vu = 0, lr = null, xe = null, Ku = 0, On = 1 / 0, ut = null, Fl = !1, qi = null, Ot = null, br = !1, Ct = null, Dl = 0, or = 0, bi = null, fl = -1, dl = 0;
function we() {
  return $ & 6 ? J() : fl !== -1 ? fl : fl = J();
}
function Rt(e) {
  return e.mode & 1 ? $ & 2 && ae !== 0 ? ae & -ae : Lm.transition !== null ? (dl === 0 && (dl = Lc()), dl) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Dc(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < or)
    throw or = 0, bi = null, Error(S(185));
  Nr(e, n, r), (!($ & 2) || e !== oe) && (e === oe && (!($ & 2) && (to |= n), ne === 4 && xt(e, ae)), Pe(e, r), n === 1 && $ === 0 && !(t.mode & 1) && (On = J() + 500, Jl && jt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = xl(e, e === oe ? ae : 0);
  if (r === 0)
    n !== null && Ns(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ns(n), t === 1)
      e.tag === 0 ? Rm(Sa.bind(null, e)) : lf(Sa.bind(null, e)), Tm(function() {
        !($ & 6) && jt();
      }), n = null;
    else {
      switch ($c(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = Oc;
          break;
        case 16:
          n = kl;
          break;
        case 536870912:
          n = Rc;
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
  if (fl = -1, dl = 0, $ & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n)
    return null;
  var r = xl(e, e === oe ? ae : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ul(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var o = qf();
    (oe !== e || ae !== t) && (ut = null, On = J() + 500, Kt(e, t));
    do
      try {
        qm();
        break;
      } catch (u) {
        Jf(e, u);
      }
    while (1);
    Ou(), jl.current = o, $ = l, ee !== null ? t = 0 : (oe = null, ae = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (l = Pi(e), l !== 0 && (r = l, t = eu(e, l))), t === 1)
      throw n = Er, Kt(e, 0), xt(e, r), Pe(e, J()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Zm(l) && (t = Ul(e, r), t === 2 && (o = Pi(e), o !== 0 && (r = o, t = eu(e, o))), t === 1))
        throw n = Er, Kt(e, 0), xt(e, r), Pe(e, J()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Bt(e, xe, ut);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Ku + 500 - J(), 10 < t)) {
            if (xl(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Mi(Bt.bind(null, e, xe, ut), t);
            break;
          }
          Bt(e, xe, ut);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Mi(Bt.bind(null, e, xe, ut), r);
            break;
          }
          Bt(e, xe, ut);
          break;
        case 5:
          Bt(e, xe, ut);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? Zf.bind(null, e) : null;
}
function eu(e, t) {
  var n = lr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Ul(e, t), e !== 2 && (t = xe, xe = n, t !== null && tu(t)), e;
}
function tu(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Zm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!qe(o(), l))
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
  for (t &= ~Vu, t &= ~to, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sa(e) {
  if ($ & 6)
    throw Error(S(327));
  kn();
  var t = xl(e, 0);
  if (!(t & 1))
    return Pe(e, J()), null;
  var n = Ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pi(e);
    r !== 0 && (t = r, n = eu(e, r));
  }
  if (n === 1)
    throw n = Er, Kt(e, 0), xt(e, t), Pe(e, J()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, xe, ut), Pe(e, J()), null;
}
function Qu(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    $ = n, $ === 0 && (On = J() + 500, Jl && jt());
  }
}
function Jt(e) {
  Ct !== null && Ct.tag === 0 && !($ & 6) && kn();
  var t = $;
  $ |= 1;
  var n = We.transition, r = j;
  try {
    if (We.transition = null, j = 1, e)
      return e();
  } finally {
    j = r, We.transition = n, $ = t, !($ & 6) && jt();
  }
}
function Gu() {
  ze = hn.current, B(hn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pm(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch (Tu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Tl();
          break;
        case 3:
          Nn(), B(Ce), B(ge), Iu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          B(V);
          break;
        case 19:
          B(V);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          Gu();
      }
      n = n.return;
    }
  if (oe = e, ee = e = Lt(e.current, null), ae = ze = t, ne = 0, Er = null, Vu = to = Zt = 0, xe = lr = null, Ht !== null) {
    for (t = 0; t < Ht.length; t++)
      if (n = Ht[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Ht = null;
  }
  return e;
}
function Jf(e, t) {
  do {
    var n = ee;
    try {
      if (Ou(), sl.current = Il, Al) {
        for (var r = K.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Al = !1;
      }
      if (Xt = 0, le = te = K = null, nr = !1, Sr = 0, Hu.current = null, n === null || n.return === null) {
        ne = 1, Er = t, ee = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ae, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = ua(i);
          if (g !== null) {
            g.flags &= -257, sa(g, i, u, o, t), g.mode & 1 && ia(o, a, t), t = g, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ia(o, a, t), Yu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (W && u.mode & 1) {
          var P = ua(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), sa(P, i, u, o, t), Nu(zn(s, u));
            break e;
          }
        }
        o = s = zn(s, u), ne !== 4 && (ne = 2), lr === null ? lr = [o] : lr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Mf(o, s, t);
              ea(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Af(o, u, t);
                ea(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ed(n);
    } catch (x) {
      t = x, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qf() {
  var e = jl.current;
  return jl.current = Il, e === null ? Il : e;
}
function Yu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), oe === null || !(Zt & 268435455) && !(to & 268435455) || xt(oe, ae);
}
function Ul(e, t) {
  var n = $;
  $ |= 2;
  var r = qf();
  (oe !== e || ae !== t) && (ut = null, Kt(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      Jf(e, l);
    }
  while (1);
  if (Ou(), $ = n, jl.current = r, ee !== null)
    throw Error(S(261));
  return oe = null, ae = 0, ne;
}
function Jm() {
  for (; ee !== null; )
    bf(ee);
}
function qm() {
  for (; ee !== null && !Ep(); )
    bf(ee);
}
function bf(e) {
  var t = nd(e.alternate, e, ze);
  e.memoizedProps = e.pendingProps, t === null ? ed(e) : ee = t, Hu.current = null;
}
function ed(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Km(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (n = Vm(n, t, ze), n !== null) {
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
  var r = j, l = We.transition;
  try {
    We.transition = null, j = 1, bm(e, t, n, r);
  } finally {
    We.transition = l, j = r;
  }
  return null;
}
function bm(e, t, n, r) {
  do
    kn();
  while (Ct !== null);
  if ($ & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if ($p(e, o), e === oe && (ee = oe = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || br || (br = !0, rd(kl, function() {
    return kn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = We.transition, We.transition = null;
    var i = j;
    j = 1;
    var u = $;
    $ |= 4, Hu.current = null, Gm(e, n), Yf(n, e), wm(Li), El = !!Ri, Li = Ri = null, e.current = n, Ym(n), Cp(), $ = u, j = i, We.transition = o;
  } else
    e.current = n;
  if (br && (br = !1, Ct = e, Dl = l), o = e.pendingLanes, o === 0 && (Ot = null), Tp(n.stateNode), Pe(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Fl)
    throw Fl = !1, e = qi, qi = null, e;
  return Dl & 1 && e.tag !== 0 && kn(), o = e.pendingLanes, o & 1 ? e === bi ? or++ : (or = 0, bi = e) : or = 0, jt(), null;
}
function kn() {
  if (Ct !== null) {
    var e = $c(Dl), t = We.transition, n = j;
    try {
      if (We.transition = null, j = 16 > e ? 16 : e, Ct === null)
        var r = !1;
      else {
        if (e = Ct, Ct = null, Dl = 0, $ & 6)
          throw Error(S(331));
        var l = $;
        for ($ |= 4, C = e.current; C !== null; ) {
          var o = C, i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null)
                    m.return = h, C = m;
                  else
                    for (; C !== null; ) {
                      h = C;
                      var p = h.sibling, g = h.return;
                      if (Kf(h), h === a) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, C = p;
                        break;
                      }
                      C = g;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var P = y.sibling;
                    y.sibling = null, y = P;
                  } while (y !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, C = i;
          else
            e:
              for (; C !== null; ) {
                if (o = C, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, C = f;
                  break e;
                }
                C = o.return;
              }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          i = C;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, C = d;
          else
            e:
              for (i = c; C !== null; ) {
                if (u = C, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        eo(9, u);
                    }
                  } catch (x) {
                    X(u, u.return, x);
                  }
                if (u === i) {
                  C = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, C = w;
                  break e;
                }
                C = u.return;
              }
        }
        if ($ = l, jt(), lt && typeof lt.onPostCommitFiberRoot == "function")
          try {
            lt.onPostCommitFiberRoot(Ql, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      j = n, We.transition = t;
    }
  }
  return !1;
}
function ka(e, t, n) {
  t = zn(n, t), t = Mf(e, t, 1), e = zt(e, t, 1), t = we(), e !== null && (Nr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
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
          e = zn(n, e), e = Af(t, e, 1), t = zt(t, e, 1), e = we(), t !== null && (Nr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ae & n) === n && (ne === 4 || ne === 3 && (ae & 130023424) === ae && 500 > J() - Ku ? Kt(e, 0) : Vu |= n), Pe(e, t);
}
function td(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hr, Hr <<= 1, !(Hr & 130023424) && (Hr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (Nr(e, t, n), Pe(e, n));
}
function th(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), td(e, n);
}
function nh(e, t) {
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
    if (e.memoizedProps !== t.pendingProps || Ce.current)
      Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ee = !1, Hm(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else
    Ee = !1, W && t.flags & 1048576 && of(t, Ol, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      cl(e, t), e = t.pendingProps;
      var l = _n(t, ge.current);
      Sn(t, n), l = Fu(null, t, r, e, l, n);
      var o = Du();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (o = !0, Nl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $u(t), l.updater = bl, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Vi(null, t, r, !0, o, n)) : (t.tag = 0, W && o && Pu(t), ve(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (cl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = lh(r), e = Ge(r, e), l) {
          case 0:
            t = Hi(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = aa(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, Ge(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Hi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), fa(e, t, r, l, n);
    case 3:
      e: {
        if (Df(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, df(e, t), $l(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = zn(Error(S(423)), t), t = da(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(S(424)), t), t = da(e, t, r, n, l);
            break e;
          } else
            for (Re = Nt(t.stateNode.containerInfo.firstChild), Le = t, W = !0, Xe = null, n = cf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === l) {
            t = ht(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return pf(t), e === null && Fi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, $i(r, l) ? i = null : o !== null && $i(r, o) && (t.flags |= 32), Ff(e, t), ve(e, t, i, n), t.child;
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return Uf(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Tn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), aa(e, t, r, l, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, D(Rl, r._currentValue), r._currentValue = i, o !== null)
          if (qe(o.value, i)) {
            if (o.children === l.children && !Ce.current) {
              t = ht(e, t, n);
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
                      s = ft(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Di(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Di(i, n, t), i = o.sibling;
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
        ve(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Sn(t, n), l = He(l), r = r(l), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), ca(e, t, r, l, n);
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), cl(e, t), t.tag = 1, _e(r) ? (e = !0, Nl(t)) : e = !1, Sn(t, n), $f(t, r, l), Bi(t, r, l, n), Vi(null, t, r, !0, e, n);
    case 19:
      return Bf(e, t, n);
    case 22:
      return jf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function rd(e, t) {
  return zc(e, t);
}
function rh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new rh(e, t, n, r);
}
function Xu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function lh(e) {
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
function Lt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function pl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Xu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case ln:
          return Qt(n.children, l, o, t);
        case pu:
          i = 8, l |= 8;
          break;
        case fi:
          return e = Be(12, n, t, l | 2), e.elementType = fi, e.lanes = o, e;
        case di:
          return e = Be(13, n, t, l), e.elementType = di, e.lanes = o, e;
        case pi:
          return e = Be(19, n, t, l), e.elementType = pi, e.lanes = o, e;
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
              case wt:
                i = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Be(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Qt(e, t, n, r) {
  return e = Be(7, e, r, t), e.lanes = n, e;
}
function no(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = dc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ni(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function ri(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function oh(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jo(0), this.expirationTimes = jo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zu(e, t, n, r, l, o, i, u, s) {
  return e = new oh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $u(o), e;
}
function ih(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ld(e) {
  if (!e)
    return Mt;
  e = e._reactInternals;
  e: {
    if (bt(e) !== e || e.tag !== 1)
      throw Error(S(170));
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
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n))
      return rf(e, n, t);
  }
  return t;
}
function od(e, t, n, r, l, o, i, u, s) {
  return e = Zu(n, r, !0, e, l, o, i, u, s), e.context = ld(null), n = e.current, r = we(), l = Rt(n), o = ft(r, l), o.callback = t ?? null, zt(n, o, l), e.current.lanes = l, Nr(e, l, r), Pe(e, r), e;
}
function ro(e, t, n, r) {
  var l = t.current, o = we(), i = Rt(l);
  return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = zt(l, t, i), e !== null && (Je(e, l, i, o), ul(e, l, i)), i;
}
function Bl(e) {
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
function Ju(e, t) {
  xa(e, t), (e = e.alternate) && xa(e, t);
}
function uh() {
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
    Jt(function() {
      ro(null, e, null, null);
    }), t[pt] = null;
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ic();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Fc(e);
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
function sh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Bl(i);
        o.call(a);
      };
    }
    var i = od(t, r, e, 0, null, !1, !1, "", Ea);
    return e._reactRootContainer = i, e[pt] = i.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Bl(s);
      u.call(a);
    };
  }
  var s = Zu(e, 0, !1, null, null, !1, !1, "", Ea);
  return e._reactRootContainer = s, e[pt] = s.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
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
        var s = Bl(i);
        u.call(s);
      };
    }
    ro(t, i, e, l);
  } else
    i = sh(n, t, e, l, r);
  return Bl(i);
}
Mc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (vu(t, n | 1), Pe(t, J()), !($ & 6) && (On = J() + 500, jt()));
      }
      break;
    case 13:
      Jt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var l = we();
          Je(r, e, 1, l);
        }
      }), Ju(e, 1);
  }
};
wu = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = we();
      Je(t, e, 134217728, n);
    }
    Ju(e, 134217728);
  }
};
Ac = function(e) {
  if (e.tag === 13) {
    var t = Rt(e), n = mt(e, t);
    if (n !== null) {
      var r = we();
      Je(n, e, t, r);
    }
    Ju(e, t);
  }
};
Ic = function() {
  return j;
};
jc = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
Ei = function(e, t, n) {
  switch (t) {
    case "input":
      if (yi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Zl(r);
            if (!l)
              throw Error(S(90));
            mc(r), yi(r, l);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && yn(e, !!n.multiple, t, !1);
  }
};
Ec = Qu;
Cc = Jt;
var ah = { usingClientEntryPoint: !1, Events: [Or, an, Zl, kc, xc, Qu] }, Kn = { findFiberByHostInstance: Wt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ch = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Tc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || uh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var el = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!el.isDisabled && el.supportsFiber)
    try {
      Ql = el.inject(ch), lt = el;
    } catch {
    }
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ah;
Ae.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bu(t))
    throw Error(S(200));
  return ih(e, t, null, n);
};
Ae.createRoot = function(e, t) {
  if (!bu(e))
    throw Error(S(299));
  var n = !1, r = "", l = id;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zu(e, 1, !1, null, null, n, !1, r, l), e[pt] = t.current, hr(e.nodeType === 8 ? e.parentNode : e), new qu(t);
};
Ae.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Tc(t), e = e === null ? null : e.stateNode, e;
};
Ae.flushSync = function(e) {
  return Jt(e);
};
Ae.hydrate = function(e, t, n) {
  if (!oo(t))
    throw Error(S(200));
  return io(null, e, t, !0, n);
};
Ae.hydrateRoot = function(e, t, n) {
  if (!bu(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = id;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = od(t, null, e, 1, n ?? null, l, !1, o, i), e[pt] = t.current, hr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new lo(t);
};
Ae.render = function(e, t, n) {
  if (!oo(t))
    throw Error(S(200));
  return io(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function(e) {
  if (!oo(e))
    throw Error(S(40));
  return e._reactRootContainer ? (Jt(function() {
    io(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ae.unstable_batchedUpdates = Qu;
Ae.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!oo(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return io(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function ud() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud);
    } catch (e) {
      console.error(e);
    }
}
ud(), ic.exports = Ae;
var fh = ic.exports, sd, Ca = fh;
sd = Ca.createRoot, Ca.hydrateRoot;
function dh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const _a = "$$material";
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
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !ph : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hh(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = mh(l);
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
}(), he = "-ms-", Wl = "-moz-", M = "-webkit-", ad = "comm", es = "rule", ts = "decl", gh = "@import", cd = "@keyframes", vh = "@layer", wh = Math.abs, so = String.fromCharCode, Sh = Object.assign;
function kh(e, t) {
  return se(e, 0) ^ 45 ? (((t << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function fd(e) {
  return e.trim();
}
function xh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function A(e, t, n) {
  return e.replace(t, n);
}
function nu(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function Cr(e, t, n) {
  return e.slice(t, n);
}
function tt(e) {
  return e.length;
}
function ns(e) {
  return e.length;
}
function tl(e, t) {
  return t.push(e), e;
}
function Eh(e, t) {
  return e.map(t).join("");
}
var ao = 1, Rn = 1, dd = 0, Te = 0, b = 0, An = "";
function co(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: ao, column: Rn, length: i, return: "" };
}
function Qn(e, t) {
  return Sh(co("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ch() {
  return b;
}
function _h() {
  return b = Te > 0 ? se(An, --Te) : 0, Rn--, b === 10 && (Rn = 1, ao--), b;
}
function $e() {
  return b = Te < dd ? se(An, Te++) : 0, Rn++, b === 10 && (Rn = 1, ao++), b;
}
function it() {
  return se(An, Te);
}
function ml() {
  return Te;
}
function Lr(e, t) {
  return Cr(An, e, t);
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
function pd(e) {
  return ao = Rn = 1, dd = tt(An = e), Te = 0, [];
}
function md(e) {
  return An = "", e;
}
function hl(e) {
  return fd(Lr(Te - 1, ru(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ph(e) {
  for (; (b = it()) && b < 33; )
    $e();
  return _r(e) > 2 || _r(b) > 3 ? "" : " ";
}
function Th(e, t) {
  for (; --t && $e() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return Lr(e, ml() + (t < 6 && it() == 32 && $e() == 32));
}
function ru(e) {
  for (; $e(); )
    switch (b) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ru(b);
        break;
      case 40:
        e === 41 && ru(e);
        break;
      case 92:
        $e();
        break;
    }
  return Te;
}
function Nh(e, t) {
  for (; $e() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && it() === 47)
      break;
  return "/*" + Lr(t, Te - 1) + "*" + so(e === 47 ? e : $e());
}
function zh(e) {
  for (; !_r(it()); )
    $e();
  return Lr(e, Te);
}
function Oh(e) {
  return md(yl("", null, null, null, [""], e = pd(e), 0, [0], e));
}
function yl(e, t, n, r, l, o, i, u, s) {
  for (var a = 0, h = 0, m = i, p = 0, g = 0, v = 0, y = 1, P = 1, f = 1, c = 0, d = "", w = l, x = o, E = r, k = d; P; )
    switch (v = c, c = $e()) {
      case 40:
        if (v != 108 && se(k, m - 1) == 58) {
          nu(k += A(hl(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += hl(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ph(v);
        break;
      case 92:
        k += Th(ml() - 1, 7);
        continue;
      case 47:
        switch (it()) {
          case 42:
          case 47:
            tl(Rh(Nh($e(), ml()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = tt(k) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            P = 0;
          case 59 + h:
            f == -1 && (k = A(k, /\f/g, "")), g > 0 && tt(k) - m && tl(g > 32 ? Ta(k + ";", r, n, m - 1) : Ta(A(k, " ", "") + ";", r, n, m - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (tl(E = Pa(k, t, n, a, h, l, u, d, w = [], x = [], m), o), c === 123)
              if (h === 0)
                yl(k, t, E, E, w, o, m, u, x);
              else
                switch (p === 99 && se(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yl(e, E, E, r && tl(Pa(e, E, E, 0, 0, l, u, d, l, w = [], m), x), l, x, m, u, r ? w : x);
                    break;
                  default:
                    yl(k, E, E, E, [""], x, 0, u, x);
                }
        }
        a = h = g = 0, y = f = 1, d = k = "", m = i;
        break;
      case 58:
        m = 1 + tt(k), g = v;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && _h() == 125)
            continue;
        }
        switch (k += so(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(k) - 1) * f, f = 1;
            break;
          case 64:
            it() === 45 && (k += hl($e())), p = it(), h = m = tt(d = k += zh(ml())), c++;
            break;
          case 45:
            v === 45 && tt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Pa(e, t, n, r, l, o, i, u, s, a, h) {
  for (var m = l - 1, p = l === 0 ? o : [""], g = ns(p), v = 0, y = 0, P = 0; v < r; ++v)
    for (var f = 0, c = Cr(e, m + 1, m = wh(y = i[v])), d = e; f < g; ++f)
      (d = fd(y > 0 ? p[f] + " " + c : A(c, /&\f/g, p[f]))) && (s[P++] = d);
  return co(e, t, n, l === 0 ? es : u, s, a, h);
}
function Rh(e, t, n) {
  return co(e, t, n, ad, so(Ch()), Cr(e, 2, -2), 0);
}
function Ta(e, t, n, r) {
  return co(e, t, n, ts, Cr(e, 0, r), Cr(e, r + 1, -1), r);
}
function xn(e, t) {
  for (var n = "", r = ns(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Lh(e, t, n, r) {
  switch (e.type) {
    case vh:
      if (e.children.length)
        break;
    case gh:
    case ts:
      return e.return = e.return || e.value;
    case ad:
      return "";
    case cd:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case es:
      e.value = e.props.join(",");
  }
  return tt(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function $h(e) {
  var t = ns(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function Mh(e) {
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
var Ah = function(t, n, r) {
  for (var l = 0, o = 0; l = o, o = it(), l === 38 && o === 12 && (n[r] = 1), !_r(o); )
    $e();
  return Lr(t, Te);
}, Ih = function(t, n) {
  var r = -1, l = 44;
  do
    switch (_r(l)) {
      case 0:
        l === 38 && it() === 12 && (n[r] = 1), t[r] += Ah(Te - 1, n, r);
        break;
      case 2:
        t[r] += hl(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = it() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += so(l);
    }
  while (l = $e());
  return t;
}, jh = function(t, n) {
  return md(Ih(pd(t), n));
}, Na = /* @__PURE__ */ new WeakMap(), Fh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Na.get(r)) && !l) {
      Na.set(t, !0);
      for (var o = [], i = jh(n, o), u = r.props, s = 0, a = 0; s < i.length; s++)
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
  switch (kh(e, t)) {
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
      return M + e + Wl + e + he + e + e;
    case 6828:
    case 4268:
      return M + e + he + e + e;
    case 6165:
      return M + e + he + "flex-" + e + e;
    case 5187:
      return M + e + A(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + he + "flex-$1$2") + e;
    case 5443:
      return M + e + he + "flex-item-" + A(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + he + "flex-line-pack" + A(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + he + A(e, "shrink", "negative") + e;
    case 5292:
      return M + e + he + A(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + A(e, "-grow", "") + M + e + he + A(e, "grow", "positive") + e;
    case 4554:
      return M + A(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return A(A(A(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return A(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return A(A(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(e, /(.+)-inline(.+)/, M + "$1$2") + e;
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
            return A(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Wl + (se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~nu(e, "stretch") ? yd(A(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115)
        break;
    case 6444:
      switch (se(e, tt(e) - 3 - (~nu(e, "!important") && 10))) {
        case 107:
          return A(e, ":", ":" + M) + e;
        case 101:
          return A(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return M + e + he + A(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + he + A(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + he + A(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + he + e + e;
  }
  return e;
}
var Uh = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ts:
        t.return = yd(t.value, t.length);
        break;
      case cd:
        return xn([Qn(t, {
          value: A(t.value, "@", "@" + M)
        })], l);
      case es:
        if (t.length)
          return Eh(t.props, function(o) {
            switch (xh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xn([Qn(t, {
                  props: [A(o, /:(read-\w+)/, ":" + Wl + "$1")]
                })], l);
              case "::placeholder":
                return xn([Qn(t, {
                  props: [A(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Qn(t, {
                  props: [A(o, /:(plac\w+)/, ":" + Wl + "$1")]
                }), Qn(t, {
                  props: [A(o, /:(plac\w+)/, he + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Bh = [Uh], Wh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var P = y.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Bh, o = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var P = y.getAttribute("data-emotion").split(" "), f = 1; f < P.length; f++)
        o[P[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [Fh, Dh];
  {
    var h, m = [Lh, Mh(function(y) {
      h.insert(y);
    })], p = $h(a.concat(l, m)), g = function(P) {
      return xn(Oh(P), p);
    };
    s = function(P, f, c, d) {
      h = c, g(P ? P + "{" + f.styles + "}" : f.styles), d && (v.inserted[f.name] = !0);
    };
  }
  var v = {
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
    inserted: o,
    registered: {},
    insert: s
  };
  return v.sheet.hydrate(u), v;
}, gd = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie = typeof Symbol == "function" && Symbol.for, rs = ie ? Symbol.for("react.element") : 60103, ls = ie ? Symbol.for("react.portal") : 60106, fo = ie ? Symbol.for("react.fragment") : 60107, po = ie ? Symbol.for("react.strict_mode") : 60108, mo = ie ? Symbol.for("react.profiler") : 60114, ho = ie ? Symbol.for("react.provider") : 60109, yo = ie ? Symbol.for("react.context") : 60110, os = ie ? Symbol.for("react.async_mode") : 60111, go = ie ? Symbol.for("react.concurrent_mode") : 60111, vo = ie ? Symbol.for("react.forward_ref") : 60112, wo = ie ? Symbol.for("react.suspense") : 60113, Hh = ie ? Symbol.for("react.suspense_list") : 60120, So = ie ? Symbol.for("react.memo") : 60115, ko = ie ? Symbol.for("react.lazy") : 60116, Vh = ie ? Symbol.for("react.block") : 60121, Kh = ie ? Symbol.for("react.fundamental") : 60117, Qh = ie ? Symbol.for("react.responder") : 60118, Gh = ie ? Symbol.for("react.scope") : 60119;
function je(e) {
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
  return je(e) === go;
}
F.AsyncMode = os;
F.ConcurrentMode = go;
F.ContextConsumer = yo;
F.ContextProvider = ho;
F.Element = rs;
F.ForwardRef = vo;
F.Fragment = fo;
F.Lazy = ko;
F.Memo = So;
F.Portal = ls;
F.Profiler = mo;
F.StrictMode = po;
F.Suspense = wo;
F.isAsyncMode = function(e) {
  return vd(e) || je(e) === os;
};
F.isConcurrentMode = vd;
F.isContextConsumer = function(e) {
  return je(e) === yo;
};
F.isContextProvider = function(e) {
  return je(e) === ho;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rs;
};
F.isForwardRef = function(e) {
  return je(e) === vo;
};
F.isFragment = function(e) {
  return je(e) === fo;
};
F.isLazy = function(e) {
  return je(e) === ko;
};
F.isMemo = function(e) {
  return je(e) === So;
};
F.isPortal = function(e) {
  return je(e) === ls;
};
F.isProfiler = function(e) {
  return je(e) === mo;
};
F.isStrictMode = function(e) {
  return je(e) === po;
};
F.isSuspense = function(e) {
  return je(e) === wo;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === fo || e === go || e === mo || e === po || e === wo || e === Hh || typeof e == "object" && e !== null && (e.$$typeof === ko || e.$$typeof === So || e.$$typeof === ho || e.$$typeof === yo || e.$$typeof === vo || e.$$typeof === Kh || e.$$typeof === Qh || e.$$typeof === Gh || e.$$typeof === Vh);
};
F.typeOf = je;
gd.exports = F;
var Yh = gd.exports, wd = Yh, Xh = {
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
}, Sd = {};
Sd[wd.ForwardRef] = Xh;
Sd[wd.Memo] = Zh;
var Jh = !0;
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
  Jh === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
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
function qh(e) {
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
}, ey = !1, ty = /[A-Z]|^ms/g, ny = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xd = function(t) {
  return t.charCodeAt(1) === 45;
}, za = function(t) {
  return t != null && typeof t != "boolean";
}, li = /* @__PURE__ */ hd(function(e) {
  return xd(e) ? e : e.replace(ty, "-$&").toLowerCase();
}), Oa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ny, function(r, l, o) {
          return nt = {
            name: l,
            styles: o,
            next: nt
          }, l;
        });
  }
  return bh[t] !== 1 && !xd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ry = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      var l = n;
      if (l.anim === 1)
        return nt = {
          name: l.name,
          styles: l.styles,
          next: nt
        }, l.name;
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            nt = {
              name: i.name,
              styles: i.styles,
              next: nt
            }, i = i.next;
        var u = o.styles + ";";
        return u;
      }
      return ly(e, t, n);
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
function ly(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += Pr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : za(u) && (r += li(o) + ":" + Oa(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && ey)
          throw new Error(ry);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            za(i[s]) && (r += li(o) + ":" + Oa(o, i[s]) + ";");
        else {
          var a = Pr(e, t, i);
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
var Ra = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function xo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, l = "";
  nt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, l += Pr(n, t, o);
  else {
    var i = o;
    l += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (l += Pr(n, t, e[u]), r) {
      var s = o;
      l += s[u];
    }
  Ra.lastIndex = 0;
  for (var a = "", h; (h = Ra.exec(l)) !== null; )
    a += "-" + h[1];
  var m = qh(l) + a;
  return {
    name: m,
    styles: l,
    next: nt
  };
}
var oy = function(t) {
  return t();
}, Ed = ai["useInsertionEffect"] ? ai["useInsertionEffect"] : !1, Cd = Ed || oy, La = Ed || N.useLayoutEffect, iy = !1, _d = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Wh({
    key: "css"
  }) : null
);
_d.Provider;
var ss = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var l = N.useContext(_d);
    return t(n, l, r);
  });
}, $r = /* @__PURE__ */ N.createContext({}), as = {}.hasOwnProperty, lu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", uy = function(t, n) {
  var r = {};
  for (var l in n)
    as.call(n, l) && (r[l] = n[l]);
  return r[lu] = t, r;
}, sy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Cd(function() {
    return us(n, r, l);
  }), null;
}, ay = /* @__PURE__ */ ss(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[lu], o = [r], i = "";
  typeof e.className == "string" ? i = kd(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = xo(o, void 0, N.useContext($r));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    as.call(e, a) && a !== "css" && a !== lu && !iy && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(sy, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ N.createElement(l, s));
}), cy = ay, oi = { exports: {} }, $a;
function fy() {
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
fy();
var Ma = function(t, n) {
  var r = arguments;
  if (n == null || !as.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = cy, o[1] = uy(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return N.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ma || (Ma = {}));
var dy = /* @__PURE__ */ ss(function(e, t) {
  var n = e.styles, r = xo([n], void 0, N.useContext($r)), l = N.useRef();
  return La(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), i.hydrate([s])), l.current = [i, u], function() {
      i.flush();
    };
  }, [t]), La(function() {
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
}), py = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, my = /* @__PURE__ */ hd(
  function(e) {
    return py.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hy = !1, yy = my, gy = function(t) {
  return t !== "theme";
}, Aa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? yy : gy;
}, Ia = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, vy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return is(n, r, l), Cd(function() {
    return us(n, r, l);
  }), null;
}, wy = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = Ia(t, n, r), s = u || Aa(l), a = !s("as");
  return function() {
    var h = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && m.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var p = h[0];
      m.push(p[0]);
      for (var g = h.length, v = 1; v < g; v++)
        m.push(h[v], p[v]);
    }
    var y = ss(function(P, f, c) {
      var d = a && P.as || l, w = "", x = [], E = P;
      if (P.theme == null) {
        E = {};
        for (var k in P)
          E[k] = P[k];
        E.theme = N.useContext($r);
      }
      typeof P.className == "string" ? w = kd(f.registered, x, P.className) : P.className != null && (w = P.className + " ");
      var T = xo(m.concat(x), f.registered, E);
      w += f.key + "-" + T.name, i !== void 0 && (w += " " + i);
      var H = a && u === void 0 ? Aa(d) : s, O = {};
      for (var de in P)
        a && de === "as" || H(de) && (O[de] = P[de]);
      return O.className = w, c && (O.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(vy, {
        cache: f,
        serialized: T,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ N.createElement(d, O));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = l, y.__emotion_styles = m, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && hy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(P, f) {
      var c = e(P, ce({}, n, f, {
        shouldForwardProp: Ia(y, f, !0)
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
], ja = wy.bind(null);
Sy.forEach(function(e) {
  ja[e] = ja(e);
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
    styles: typeof t == "function" ? (l) => t(ky(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Fa = [];
function Ey(e) {
  return Fa[0] = e, xo(Fa);
}
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pd(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Pd(e[n]);
  }), t;
}
function Hl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? ce({}, e) : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ N.isValidElement(t[l]) ? r[l] = t[l] : nn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && nn(e[l]) ? r[l] = Hl(e[l], t[l], n) : n.clone ? r[l] = nn(t[l]) ? Pd(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const Cy = ["values", "unit", "step"], _y = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ce({}, n, {
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
  } = e, l = uo(e, Cy), o = _y(t), i = Object.keys(o);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function a(p, g) {
    const v = i.indexOf(g);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : g) - r / 100}${n})`;
  }
  function h(p) {
    return i.indexOf(p) + 1 < i.length ? a(p, i[i.indexOf(p) + 1]) : u(p);
  }
  function m(p) {
    const g = i.indexOf(p);
    return g === 0 ? u(i[1]) : g === i.length - 1 ? s(i[g]) : a(p, i[i.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return ce({
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
const Ty = {
  borderRadius: 4
}, Ny = Ty;
function ir(e, t) {
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
}, Da = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cs[e]}px)`
};
function yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Da;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Da;
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
function zy(e = {}) {
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
    throw new Error(dh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Eo(e, t, n = !0) {
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
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = Eo(e, n) || r, t && (l = t(l, r, e)), l;
}
function q(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Eo(s, r) || {};
    return yt(i, u, (m) => {
      let p = Vl(a, l, m);
      return m === p && typeof m == "string" && (p = Vl(a, l, `${t}${m === "default" ? "" : Td(m)}`, m)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function Oy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ry = {
  m: "margin",
  p: "padding"
}, Ly = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ba = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $y = Oy((e) => {
  if (e.length > 2)
    if (Ba[e])
      e = Ba[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Ry[t], l = Ly[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), fs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ds = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...fs, ...ds];
function Mr(e, t, n, r) {
  var l;
  const o = (l = Eo(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function Nd(e) {
  return Mr(e, "spacing", 8);
}
function Ar(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function My(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Ar(t, n), r), {});
}
function Ay(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = $y(n), o = My(l, r), i = e[n];
  return yt(e, i, o);
}
function zd(e, t) {
  const n = Nd(e.theme);
  return Object.keys(e).map((r) => Ay(e, t, r, n)).reduce(ir, {});
}
function G(e) {
  return zd(e, fs);
}
G.propTypes = {};
G.filterProps = fs;
function Y(e) {
  return zd(e, ds);
}
Y.propTypes = {};
Y.filterProps = ds;
function Iy(e = 8) {
  if (e.mui)
    return e;
  const t = Nd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Co(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? ir(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const jy = Ke("border", Ue), Fy = Ke("borderTop", Ue), Dy = Ke("borderRight", Ue), Uy = Ke("borderBottom", Ue), By = Ke("borderLeft", Ue), Wy = Ke("borderColor"), Hy = Ke("borderTopColor"), Vy = Ke("borderRightColor"), Ky = Ke("borderBottomColor"), Qy = Ke("borderLeftColor"), Gy = Ke("outline", Ue), Yy = Ke("outlineColor"), _o = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ar(t, r)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
_o.propTypes = {};
_o.filterProps = ["borderRadius"];
Co(jy, Fy, Dy, Uy, By, Wy, Hy, Vy, Ky, Qy, _o, Gy, Yy);
const Po = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      gap: Ar(t, r)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
Po.propTypes = {};
Po.filterProps = ["gap"];
const To = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ar(t, r)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
To.propTypes = {};
To.filterProps = ["columnGap"];
const No = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ar(t, r)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
No.propTypes = {};
No.filterProps = ["rowGap"];
const Xy = q({
  prop: "gridColumn"
}), Zy = q({
  prop: "gridRow"
}), Jy = q({
  prop: "gridAutoFlow"
}), qy = q({
  prop: "gridAutoColumns"
}), by = q({
  prop: "gridAutoRows"
}), eg = q({
  prop: "gridTemplateColumns"
}), tg = q({
  prop: "gridTemplateRows"
}), ng = q({
  prop: "gridTemplateAreas"
}), rg = q({
  prop: "gridArea"
});
Co(Po, To, No, Xy, Zy, Jy, qy, by, eg, tg, ng, rg);
function En(e, t) {
  return t === "grey" ? t : e;
}
const lg = q({
  prop: "color",
  themeKey: "palette",
  transform: En
}), og = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: En
}), ig = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: En
});
Co(lg, og, ig);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ug = q({
  prop: "width",
  transform: Oe
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
        maxWidth: Oe(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
ps.filterProps = ["maxWidth"];
const sg = q({
  prop: "minWidth",
  transform: Oe
}), ag = q({
  prop: "height",
  transform: Oe
}), cg = q({
  prop: "maxHeight",
  transform: Oe
}), fg = q({
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
const dg = q({
  prop: "boxSizing"
});
Co(ug, ps, sg, ag, cg, fg, dg);
const pg = {
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
    style: Po
  },
  rowGap: {
    style: No
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
    transform: Oe
  },
  maxWidth: {
    style: ps
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
}, Od = pg;
function mg(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function hg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yg() {
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
    const p = Eo(l, a) || {};
    return m ? m(i) : yt(i, r, (v) => {
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
      theme: o = {},
      nested: i
    } = n || {};
    if (!l)
      return null;
    const u = (r = o.unstable_sxConfig) != null ? r : Od;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const m = zy(o.breakpoints), p = Object.keys(m);
      let g = m;
      return Object.keys(h).forEach((v) => {
        const y = hg(h[v], o);
        if (y != null)
          if (typeof y == "object")
            if (u[v])
              g = ir(g, e(v, y, o, u));
            else {
              const P = yt({
                theme: o
              }, y, (f) => ({
                [v]: f
              }));
              mg(P, y) ? g[v] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : g = ir(g, P);
            }
          else
            g = ir(g, e(v, y, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ua(p, g)
      } : Ua(p, g);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Rd = yg();
Rd.filterProps = ["sx"];
const gg = Rd;
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
    spacing: l,
    shape: o = {}
  } = e, i = uo(e, wg), u = Py(n), s = Iy(l);
  let a = Hl({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ce({
      mode: "light"
    }, r),
    spacing: s,
    shape: ce({}, Ny, o)
  }, i);
  return a.applyStyles = vg, a = t.reduce((h, m) => Hl(h, m), a), a.unstable_sxConfig = ce({}, Od, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(m) {
    return gg({
      sx: m,
      theme: this
    });
  }, a;
}
function kg(e) {
  return Object.keys(e).length === 0;
}
function ms(e = null) {
  const t = N.useContext($r);
  return !t || kg(t) ? e : t;
}
const xg = Sg();
function Eg(e = xg) {
  return ms(e);
}
function ii(e) {
  const t = Ey(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Cg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Eg(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => ii(typeof i == "function" ? i(l) : i)) : o = ii(o)), /* @__PURE__ */ I(xy, {
    styles: o
  });
}
const _g = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Pg = _g;
let Wa = 0;
function Tg(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Wa += 1, n(`mui-${Wa}`));
  }, [t]), r;
}
const Ha = ai["useId".toString()];
function Ng(e) {
  if (Ha !== void 0) {
    const t = Ha();
    return e ?? t;
  }
  return Tg(e);
}
const zg = /* @__PURE__ */ N.createContext(null), Ld = zg;
function $d() {
  return N.useContext(Ld);
}
const Og = typeof Symbol == "function" && Symbol.for, Rg = Og ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Lg(e, t) {
  return typeof t == "function" ? t(e) : ce({}, e, t);
}
function $g(e) {
  const {
    children: t,
    theme: n
  } = e, r = $d(), l = N.useMemo(() => {
    const o = r === null ? n : Lg(r, n);
    return o != null && (o[Rg] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ I(Ld.Provider, {
    value: l,
    children: t
  });
}
const Mg = ["value"], Ag = /* @__PURE__ */ N.createContext();
function Ig(e) {
  let {
    value: t
  } = e, n = uo(e, Mg);
  return /* @__PURE__ */ I(Ag.Provider, ce({
    value: t ?? !0
  }, n));
}
const jg = /* @__PURE__ */ N.createContext(void 0);
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
  const t = ms(), n = Ng() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, Pg(() => {
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
  }, [l, n]), l ? /* @__PURE__ */ I(Cg, {
    styles: l
  }) : null;
}
const Va = {};
function Ka(e, t, n, r = !1) {
  return N.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(l), i = e ? ce({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? ce({}, t, {
      [e]: n
    }) : ce({}, t, n);
  }, [e, t, n, r]);
}
function Ug(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = ms(Va), o = $d() || Va, i = Ka(r, l, n), u = Ka(r, o, n, !0), s = i.direction === "rtl", a = Dg(i);
  return /* @__PURE__ */ I($g, {
    theme: u,
    children: /* @__PURE__ */ I($r.Provider, {
      value: i,
      children: /* @__PURE__ */ I(Ig, {
        value: s,
        children: /* @__PURE__ */ Ne(Fg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Bg = ["theme"];
function Wg(e) {
  let {
    theme: t
  } = e, n = uo(e, Bg);
  const r = t[_a];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = ce({}, r, {
    vars: null
  }) : t && !t.vars && (l = ce({}, t, {
    vars: null
  }))), /* @__PURE__ */ I(Ug, ce({}, n, {
    themeId: r ? _a : void 0,
    theme: l
  }));
}
function Hg(e, t) {
  if (e && typeof e == "object") {
    const n = e;
    if (typeof n.message == "string")
      return n.message;
  }
  return `Provenance check failed (HTTP ${t}).`;
}
async function Vg(e, t) {
  const n = new AbortController(), r = window.setTimeout(() => n.abort(), t.requestTimeoutMs);
  try {
    const l = await fetch(
      `${t.apiBaseUrl.replace(/\/+$/, "")}/api/c2pa/webhook`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${t.apiToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ assetId: e }),
        signal: n.signal
      }
    ), o = await l.json().catch(() => null);
    if (!l.ok)
      throw new Error(Hg(o, l.status));
  } catch (l) {
    throw l instanceof DOMException && l.name === "AbortError" ? new Error("The provenance check timed out.") : l;
  } finally {
    window.clearTimeout(r);
  }
}
function ou(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value"])
    if (n in t)
      return ou(t[n]);
  return e;
}
function tn(e, t) {
  var l;
  try {
    const o = (l = e == null ? void 0 : e.getPropertyValue) == null ? void 0 : l.call(e, t);
    if (o !== void 0)
      return ou(o);
  } catch {
  }
  const n = e == null ? void 0 : e.properties, r = Object.keys(n ?? {}).find(
    (o) => o.toLowerCase() === t.toLowerCase()
  );
  return r ? ou(n == null ? void 0 : n[r]) : void 0;
}
function ui(e) {
  return e === !0 || e === "true" || e === 1;
}
function Qa(e) {
  return typeof e == "string" && e.trim() ? e.trim() : null;
}
function Md(e) {
  if (typeof e == "string")
    try {
      return Md(JSON.parse(e));
    } catch {
      return null;
    }
  return e && typeof e == "object" && !Array.isArray(e) ? e : null;
}
function Kg(e) {
  var n;
  const t = ((n = e == null ? void 0 : e.systemProperties) == null ? void 0 : n.id) ?? (e == null ? void 0 : e.id);
  return t == null || !String(t).trim() ? null : String(t).trim();
}
function si(e) {
  return {
    aiGenerated: ui(tn(e, "EPAM.aiGenerated")),
    aiEdited: ui(tn(e, "EPAM.aiEdited")),
    sourceTool: Qa(tn(e, "EPAM.aiSourceTool")),
    provenanceVerified: ui(tn(e, "EPAM.provenanceVerified")),
    checkedAt: Qa(tn(e, "EPAM.provenanceCheckedAt")),
    summary: Md(tn(e, "SC.Asset.C2PA.Summary"))
  };
}
async function Qg(e, t) {
  var r;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is unavailable.");
  const n = await e.raw.getAsync(`/api/entities/${encodeURIComponent(t)}`);
  if (!(n != null && n.isSuccessStatusCode) || !n.content)
    throw new Error(`Could not reload asset ${t} (HTTP ${(n == null ? void 0 : n.statusCode) ?? "unknown"}).`);
  return n.content;
}
function Gg(e) {
  if (!e)
    return "Not checked";
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function Yg(e) {
  const t = e == null ? void 0 : e.history;
  return Array.isArray(t) ? t.length : 0;
}
function Xg({ client: e, entity: t, options: n }) {
  const r = N.useMemo(() => Kg(t), [t]), l = N.useMemo(() => {
    var f, c;
    const y = (f = n.apiBaseUrl) == null ? void 0 : f.trim(), P = (c = n.apiToken) == null ? void 0 : c.trim();
    return !y || !P ? null : {
      apiBaseUrl: y,
      apiToken: P,
      requestTimeoutMs: Math.max(3e4, n.requestTimeoutMs ?? 3e5)
    };
  }, [n]), [o, i] = N.useState(() => si(t)), [u, s] = N.useState(!1), [a, h] = N.useState(""), [m, p] = N.useState(""), g = N.useCallback(async () => {
    if (!r)
      return;
    const y = await Qg(e, r);
    i(si(y));
  }, [e, r]);
  N.useEffect(() => {
    var y;
    i(si(t)), r && ((y = e == null ? void 0 : e.raw) != null && y.getAsync) && g().catch(() => {
    });
  }, [e, t, r, g]);
  const v = N.useCallback(async () => {
    if (!(!r || !l)) {
      s(!0), h(""), p("");
      try {
        await Vg(r, l), await g(), p("Provenance check completed and the asset was updated.");
      } catch (y) {
        h(y instanceof Error ? y.message : "Provenance check failed.");
      } finally {
        s(!1);
      }
    }
  }, [l, r, g]);
  return r ? /* @__PURE__ */ Ne("section", { className: "ch-c2pa", children: [
    /* @__PURE__ */ Ne("header", { className: "ch-c2pa__header", children: [
      /* @__PURE__ */ Ne("div", { children: [
        /* @__PURE__ */ I("p", { className: "ch-c2pa__eyebrow", children: "Content authenticity" }),
        /* @__PURE__ */ I("h2", { children: "C2PA provenance" })
      ] }),
      /* @__PURE__ */ I(
        "button",
        {
          type: "button",
          className: "ch-c2pa__button",
          disabled: u || !l,
          onClick: () => void v(),
          children: u ? "Checking…" : "Check provenance"
        }
      )
    ] }),
    !l && /* @__PURE__ */ I("p", { className: "ch-c2pa__message ch-c2pa__message--error", children: "Configure apiBaseUrl and apiToken on this external component." }),
    a && /* @__PURE__ */ I("p", { className: "ch-c2pa__message ch-c2pa__message--error", children: a }),
    m && /* @__PURE__ */ I("p", { className: "ch-c2pa__message ch-c2pa__message--success", children: m }),
    /* @__PURE__ */ Ne("div", { className: "ch-c2pa__grid", children: [
      /* @__PURE__ */ Ne("article", { children: [
        /* @__PURE__ */ I("span", { children: "Verified manifest" }),
        /* @__PURE__ */ I("strong", { children: o.provenanceVerified ? "Yes" : "No" })
      ] }),
      /* @__PURE__ */ Ne("article", { children: [
        /* @__PURE__ */ I("span", { children: "AI generated" }),
        /* @__PURE__ */ I("strong", { children: o.aiGenerated ? "Yes" : "No" })
      ] }),
      /* @__PURE__ */ Ne("article", { children: [
        /* @__PURE__ */ I("span", { children: "AI edited" }),
        /* @__PURE__ */ I("strong", { children: o.aiEdited ? "Yes" : "No" })
      ] }),
      /* @__PURE__ */ Ne("article", { children: [
        /* @__PURE__ */ I("span", { children: "Source tool" }),
        /* @__PURE__ */ I("strong", { children: o.sourceTool ?? "Not declared" })
      ] })
    ] }),
    /* @__PURE__ */ Ne("div", { className: "ch-c2pa__meta", children: [
      /* @__PURE__ */ Ne("span", { children: [
        "Last checked: ",
        Gg(o.checkedAt)
      ] }),
      /* @__PURE__ */ Ne("span", { children: [
        "Stored checks: ",
        Yg(o.summary)
      ] })
    ] }),
    o.summary && /* @__PURE__ */ Ne("details", { className: "ch-c2pa__details", children: [
      /* @__PURE__ */ I("summary", { children: "View stored C2PA summary" }),
      /* @__PURE__ */ I("pre", { children: JSON.stringify(o.summary, null, 2) })
    ] })
  ] }) : /* @__PURE__ */ I("div", { className: "ch-c2pa ch-c2pa--error", children: "Open this component on an asset detail page." });
}
function Ad(e) {
  if (typeof e == "string")
    try {
      return Ad(JSON.parse(e));
    } catch {
      return null;
    }
  return e && typeof e == "object" && !Array.isArray(e) ? e : null;
}
function Ga(e) {
  return typeof e == "string" && e.trim() ? e.trim() : void 0;
}
function gl(e) {
  const t = Ad(e);
  if (!t)
    return {};
  const n = gl(t.config ?? t.settings ?? t.json), r = Number(t.requestTimeoutMs);
  return {
    ...n,
    apiBaseUrl: Ga(t.apiBaseUrl) ?? n.apiBaseUrl,
    apiToken: Ga(t.apiToken) ?? n.apiToken,
    requestTimeoutMs: Number.isFinite(r) && r > 0 ? r : n.requestTimeoutMs
  };
}
function Zg(e, t) {
  return {
    ...gl(t == null ? void 0 : t.config),
    ...gl(e),
    ...gl(t)
  };
}
function Jg(e) {
  const t = sd(e);
  return {
    render(n) {
      t.render(
        /* @__PURE__ */ I(Wg, { theme: n.theme, children: /* @__PURE__ */ I(
          Xg,
          {
            client: n.client,
            entity: n.entity,
            options: Zg(n.options, n)
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
  Jg as default
};
