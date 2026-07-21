(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-brand-compliance{--ch-bc-pad: 12px;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:0;height:100%;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#102a43;background:#f5f8fb}.ch-brand-compliance *,.ch-brand-compliance *:before,.ch-brand-compliance *:after{box-sizing:border-box}.ch-brand-compliance__header{display:flex;flex-direction:column;gap:10px;padding:var(--ch-bc-pad);border-bottom:1px solid #d9e2ec;background:#fff;flex-shrink:0}.ch-brand-compliance__eyebrow{margin:0 0 2px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0b5cab}.ch-brand-compliance__title{margin:0;font-size:16px;font-weight:700;line-height:1.3}.ch-brand-compliance__subtitle{display:none}.ch-brand-compliance__primary-button{width:100%;border:none;border-radius:8px;padding:10px 14px;background:#0b5cab;color:#fff;font-size:13px;font-weight:600;cursor:pointer}.ch-brand-compliance__primary-button:disabled{opacity:.55;cursor:not-allowed}.ch-brand-compliance__body{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;gap:0}.ch-brand-compliance__column{min-width:0;padding:var(--ch-bc-pad)}.ch-brand-compliance__column--results{background:#fff;padding-bottom:24px;flex:1}.ch-brand-compliance__asset-card{display:block;min-width:0;width:100%}.ch-brand-compliance__asset-meta{width:100%;min-width:0}.ch-brand-compliance__asset-title{margin:0 0 10px;font-size:14px;font-weight:600;line-height:1.35;word-break:break-word}.ch-brand-compliance__asset-details{display:grid;gap:6px;margin:0}.ch-brand-compliance__asset-details div{display:grid;grid-template-columns:48px minmax(0,1fr);gap:8px;align-items:start}.ch-brand-compliance__asset-details dt{margin:0;color:#627d98;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;padding-top:1px}.ch-brand-compliance__asset-details dd{margin:0;font-size:12px;line-height:1.35;overflow-wrap:anywhere;word-break:break-word}.ch-brand-compliance__empty{display:flex;flex-direction:column;justify-content:center;min-height:100px;padding:14px;border:1px dashed #bcccdc;border-radius:8px;background:#fff}.ch-brand-compliance__empty h3{margin:0 0 6px;font-size:14px}.ch-brand-compliance__empty p{margin:0;color:#486581;font-size:12px;line-height:1.5}.ch-brand-compliance__empty--error{border-color:#f9b8b8;background:#fff5f5}.ch-brand-compliance__hint{margin-top:10px!important;font-size:12px}.ch-brand-compliance__report{min-width:0}.ch-brand-compliance__report-header{display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;margin-bottom:16px}.ch-brand-compliance__report-copy{min-width:0;width:100%}.ch-brand-compliance__score{position:relative;width:88px;height:88px;flex-shrink:0}.ch-brand-compliance__score svg{width:100%;height:100%;transform:rotate(-90deg)}.ch-brand-compliance__score-track,.ch-brand-compliance__score-progress{fill:none;stroke-width:8}.ch-brand-compliance__score-track{stroke:#d9e2ec}.ch-brand-compliance__score-progress{stroke:#0b5cab;stroke-linecap:round;transition:stroke-dashoffset .4s ease}.ch-brand-compliance__score--warning .ch-brand-compliance__score-progress{stroke:#f0b429}.ch-brand-compliance__score--fail .ch-brand-compliance__score-progress{stroke:#d64545}.ch-brand-compliance__score-value{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.ch-brand-compliance__score-value strong{font-size:22px;line-height:1}.ch-brand-compliance__score-value span{margin-top:2px;font-size:10px;color:#627d98;text-transform:uppercase}.ch-brand-compliance__status{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}.ch-brand-compliance__status--pass{background:#e3f9e5;color:#0f7b3a}.ch-brand-compliance__status--warning{background:#fff3c4;color:#8a6100}.ch-brand-compliance__status--fail{background:#ffe3e3;color:#ab091e}.ch-brand-compliance__report-summary{margin:10px 0 0;font-size:13px;line-height:1.55;text-align:left;overflow-wrap:anywhere;word-break:break-word}.ch-brand-compliance__report-meta{margin:8px 0 0;color:#627d98;font-size:11px;text-align:left}.ch-brand-compliance__panel{margin-top:14px;padding-top:14px;border-top:1px solid #edf2f7;min-width:0}.ch-brand-compliance__panel-title{margin:0 0 10px;font-size:13px}.ch-brand-compliance__passed-list{margin:0;padding-left:16px;color:#243b53;font-size:12px;line-height:1.55;overflow-wrap:anywhere}.ch-brand-compliance__issue-list{display:grid;gap:10px}.ch-brand-compliance__issue{border:1px solid #d9e2ec;border-radius:8px;padding:10px 12px;background:#f8fbff;min-width:0}.ch-brand-compliance__issue--critical{border-color:#f9b8b8;background:#fff5f5}.ch-brand-compliance__issue--major{border-color:#fadb5f;background:#fffbea}.ch-brand-compliance__issue-header{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}.ch-brand-compliance__badge{display:inline-flex;align-items:center;border-radius:999px;padding:2px 7px;background:#0b5cab;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}.ch-brand-compliance__badge--muted{background:#e0e7ff;color:#334e68}.ch-brand-compliance__issue-title{margin:0 0 6px;font-size:13px;overflow-wrap:anywhere}.ch-brand-compliance__issue-copy,.ch-brand-compliance__issue-recommendation{margin:0;color:#486581;font-size:12px;line-height:1.5;overflow-wrap:anywhere;word-break:break-word}.ch-brand-compliance__issue-recommendation{margin-top:8px}.ch-brand-compliance__loading{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:120px;padding:12px}.ch-brand-compliance__loading-label{margin:0;max-width:100%;text-align:center;color:#486581;font-size:12px}.ch-brand-compliance__spinner{width:28px;height:28px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-brand-compliance-spin .8s linear infinite}.ch-brand-compliance__spinner--small{width:14px;height:14px;border-width:2px}.ch-brand-compliance__inline-loading{display:inline-flex;align-items:center;gap:8px}@keyframes ch-brand-compliance-spin{to{transform:rotate(360deg)}}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
function Bd(e, t) {
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
function Hd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ja = { exports: {} }, Gl = {}, qa = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), Wd = Symbol.for("react.portal"), Vd = Symbol.for("react.fragment"), Kd = Symbol.for("react.strict_mode"), Qd = Symbol.for("react.profiler"), Gd = Symbol.for("react.provider"), Yd = Symbol.for("react.context"), Xd = Symbol.for("react.forward_ref"), Zd = Symbol.for("react.suspense"), Jd = Symbol.for("react.memo"), qd = Symbol.for("react.lazy"), Ss = Symbol.iterator;
function bd(e) {
  return e === null || typeof e != "object" ? null : (e = Ss && e[Ss] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ba = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ec = Object.assign, tc = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || ba;
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
function nc() {
}
nc.prototype = Ln.prototype;
function cu(e, t, n) {
  this.props = e, this.context = t, this.refs = tc, this.updater = n || ba;
}
var fu = cu.prototype = new nc();
fu.constructor = cu;
ec(fu, Ln.prototype);
fu.isPureReactComponent = !0;
var ks = Array.isArray, rc = Object.prototype.hasOwnProperty, du = { current: null }, lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      rc.call(t, r) && !lc.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: Tr, type: e, key: o, ref: i, props: l, _owner: du.current };
}
function ep(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function tp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xs = /\/+/g;
function Mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? tp("" + e.key) : t.toString(36);
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
          case Tr:
          case Wd:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + Mo(i, 0) : r, ks(l) ? (n = "", e != null && (n = e.replace(xs, "$&/") + "/"), rl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (pu(l) && (l = ep(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(xs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ks(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Mo(o, u);
      i += rl(o, t, n, s, l);
    }
  else if (s = bd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Mo(o, u++), i += rl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Fr(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return rl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function np(e) {
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
var ke = { current: null }, ll = { transition: null }, rp = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ll, ReactCurrentOwner: du };
function ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = { map: Fr, forEach: function(e, t, n) {
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
  if (!pu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
$.Component = Ln;
$.Fragment = Vd;
$.Profiler = Qd;
$.PureComponent = cu;
$.StrictMode = Kd;
$.Suspense = Zd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
$.act = ic;
$.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ec({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = du.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      rc.call(t, s) && !lc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
$.createContext = function(e) {
  return e = { $$typeof: Yd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Gd, _context: e }, e.Consumer = e;
};
$.createElement = oc;
$.createFactory = function(e) {
  var t = oc.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: Xd, render: e };
};
$.isValidElement = pu;
$.lazy = function(e) {
  return { $$typeof: qd, _payload: { _status: -1, _result: e }, _init: np };
};
$.memo = function(e, t) {
  return { $$typeof: Jd, type: e, compare: t === void 0 ? null : t };
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
$.unstable_act = ic;
$.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
$.useContext = function(e) {
  return ke.current.useContext(e);
};
$.useDebugValue = function() {
};
$.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
$.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
$.useId = function() {
  return ke.current.useId();
};
$.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
$.useRef = function(e) {
  return ke.current.useRef(e);
};
$.useState = function(e) {
  return ke.current.useState(e);
};
$.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function() {
  return ke.current.useTransition();
};
$.version = "18.3.1";
qa.exports = $;
var O = qa.exports;
const lp = /* @__PURE__ */ Hd(O), fi = /* @__PURE__ */ Bd({
  __proto__: null,
  default: lp
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
var op = O, ip = Symbol.for("react.element"), up = Symbol.for("react.fragment"), sp = Object.prototype.hasOwnProperty, ap = op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, cp = { key: !0, ref: !0, __self: !0, __source: !0 };
function uc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    sp.call(t, r) && !cp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: ip, type: e, key: o, ref: i, props: l, _owner: ap.current };
}
Gl.Fragment = up;
Gl.jsx = uc;
Gl.jsxs = uc;
Ja.exports = Gl;
var sc = Ja.exports;
const T = sc.jsx, j = sc.jsxs;
var ac = { exports: {} }, Me = {}, cc = { exports: {} }, fc = {};
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
  function t(C, R) {
    var L = C.length;
    C.push(R);
    e:
      for (; 0 < L; ) {
        var J = L - 1 >>> 1, le = C[J];
        if (0 < l(le, R))
          C[J] = R, C[L] = le, L = J;
        else
          break e;
      }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var R = C[0], L = C.pop();
    if (L !== R) {
      C[0] = L;
      e:
        for (var J = 0, le = C.length, jr = le >>> 1; J < jr; ) {
          var Dt = 2 * (J + 1) - 1, Ao = C[Dt], Ft = Dt + 1, Dr = C[Ft];
          if (0 > l(Ao, L))
            Ft < le && 0 > l(Dr, Ao) ? (C[J] = Dr, C[Ft] = L, J = Ft) : (C[J] = Ao, C[Dt] = L, J = Dt);
          else if (Ft < le && 0 > l(Dr, L))
            C[J] = Dr, C[Ft] = L, J = Ft;
          else
            break e;
        }
    }
    return R;
  }
  function l(C, R) {
    var L = C.sortIndex - R.sortIndex;
    return L !== 0 ? L : C.id - R.id;
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
  var s = [], a = [], h = 1, d = null, m = 3, g = !1, v = !1, y = !1, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null)
        r(a);
      else if (R.startTime <= C)
        r(a), R.sortIndex = R.expirationTime, t(s, R);
      else
        break;
      R = n(a);
    }
  }
  function w(C) {
    if (y = !1, p(C), !v)
      if (n(s) !== null)
        v = !0, Lo(x);
      else {
        var R = n(a);
        R !== null && $o(w, R.startTime - C);
      }
  }
  function x(C, R) {
    v = !1, y && (y = !1, f(N), N = -1), g = !0;
    var L = m;
    try {
      for (p(R), d = n(s); d !== null && (!(d.expirationTime > R) || C && !pe()); ) {
        var J = d.callback;
        if (typeof J == "function") {
          d.callback = null, m = d.priorityLevel;
          var le = J(d.expirationTime <= R);
          R = e.unstable_now(), typeof le == "function" ? d.callback = le : d === n(s) && r(s), p(R);
        } else
          r(s);
        d = n(s);
      }
      if (d !== null)
        var jr = !0;
      else {
        var Dt = n(a);
        Dt !== null && $o(w, Dt.startTime - R), jr = !1;
      }
      return jr;
    } finally {
      d = null, m = L, g = !1;
    }
  }
  var _ = !1, k = null, N = -1, V = 5, z = -1;
  function pe() {
    return !(e.unstable_now() - z < V);
  }
  function In() {
    if (k !== null) {
      var C = e.unstable_now();
      z = C;
      var R = !0;
      try {
        R = k(!0, C);
      } finally {
        R ? jn() : (_ = !1, k = null);
      }
    } else
      _ = !1;
  }
  var jn;
  if (typeof c == "function")
    jn = function() {
      c(In);
    };
  else if (typeof MessageChannel < "u") {
    var ws = new MessageChannel(), Ud = ws.port2;
    ws.port1.onmessage = In, jn = function() {
      Ud.postMessage(null);
    };
  } else
    jn = function() {
      P(In, 0);
    };
  function Lo(C) {
    k = C, _ || (_ = !0, jn());
  }
  function $o(C, R) {
    N = P(function() {
      C(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    v || g || (v = !0, Lo(x));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var L = m;
    m = R;
    try {
      return C();
    } finally {
      m = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, R) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var L = m;
    m = C;
    try {
      return R();
    } finally {
      m = L;
    }
  }, e.unstable_scheduleCallback = function(C, R, L) {
    var J = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? J + L : J) : L = J, C) {
      case 1:
        var le = -1;
        break;
      case 2:
        le = 250;
        break;
      case 5:
        le = 1073741823;
        break;
      case 4:
        le = 1e4;
        break;
      default:
        le = 5e3;
    }
    return le = L + le, C = { id: h++, callback: R, priorityLevel: C, startTime: L, expirationTime: le, sortIndex: -1 }, L > J ? (C.sortIndex = L, t(a, C), n(s) === null && C === n(a) && (y ? (f(N), N = -1) : y = !0, $o(w, L - J))) : (C.sortIndex = le, t(s, C), v || g || (v = !0, Lo(x))), C;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(C) {
    var R = m;
    return function() {
      var L = m;
      m = R;
      try {
        return C.apply(this, arguments);
      } finally {
        m = L;
      }
    };
  };
})(fc);
cc.exports = fc;
var fp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp = O, Ae = fp;
function S(e) {
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
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), di = Object.prototype.hasOwnProperty, pp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _s = {}, Es = {};
function mp(e) {
  return di.call(Es, e) ? !0 : di.call(_s, e) ? !1 : pp.test(e) ? Es[e] = !0 : (_s[e] = !0, !1);
}
function hp(e, t, n, r) {
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
function yp(e, t, n, r) {
  if (t === null || typeof t > "u" || hp(e, t, n, r))
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
function xe(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  de[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mu, hu);
  de[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mu, hu);
  de[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var l = de.hasOwnProperty(t) ? de[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yp(t, n, l, r) && (n = null), r || l === null ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ur = Symbol.for("react.element"), rn = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), gu = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), pc = Symbol.for("react.provider"), mc = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), mi = Symbol.for("react.suspense"), hi = Symbol.for("react.suspense_list"), wu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), hc = Symbol.for("react.offscreen"), Cs = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object" ? null : (e = Cs && e[Cs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Io;
function Gn(e) {
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
var jo = !1;
function Do(e, t) {
  if (!e || jo)
    return "";
  jo = !0;
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
    jo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function gp(e) {
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
      return e = Do(e.type, !1), e;
    case 11:
      return e = Do(e.type.render, !1), e;
    case 1:
      return e = Do(e.type, !0), e;
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
    case ln:
      return "Fragment";
    case rn:
      return "Portal";
    case pi:
      return "Profiler";
    case gu:
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
      case vu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case wu:
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
function vp(e) {
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
function wp(e) {
  var t = yc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Br(e) {
  e._valueTracker || (e._valueTracker = wp(e));
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
function wl(e) {
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
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ps(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vc(e, t) {
  t = t.checked, t != null && yu(e, "checked", t, !1);
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
function Ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function wi(e, t, n) {
  (t !== "number" || wl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function Si(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ts(e, t) {
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
function wc(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Os(e) {
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
var Hr, kc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
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
}, Sp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function(e) {
  Sp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Jn[t] = Jn[e];
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + t).trim() : t + "px";
}
function _c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var kp = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function xi(e, t) {
  if (t) {
    if (kp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
var Ei = null;
function Su(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ci = null, gn = null, vn = null;
function Rs(e) {
  if (e = zr(e)) {
    if (typeof Ci != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = ql(t), Ci(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  gn ? vn ? vn.push(e) : vn = [e] : gn = e;
}
function Cc() {
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
function Nc() {
}
var Fo = !1;
function Tc(e, t, n) {
  if (Fo)
    return e(t, n);
  Fo = !0;
  try {
    return Pc(e, t, n);
  } finally {
    Fo = !1, (gn !== null || vn !== null) && (Nc(), Cc());
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ql(n);
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
if (dt)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      Pi = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    Pi = !1;
  }
function xp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var qn = !1, Sl = null, kl = !1, Ni = null, _p = { onError: function(e) {
  qn = !0, Sl = e;
} };
function Ep(e, t, n, r, l, o, i, u, s) {
  qn = !1, Sl = null, xp.apply(_p, arguments);
}
function Cp(e, t, n, r, l, o, i, u, s) {
  if (Ep.apply(this, arguments), qn) {
    if (qn) {
      var a = Sl;
      qn = !1, Sl = null;
    } else
      throw Error(S(198));
    kl || (kl = !0, Ni = a);
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
function Oc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function zs(e) {
  if (bt(e) !== e)
    throw Error(S(188));
}
function Pp(e) {
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
function Rc(e) {
  return e = Pp(e), e !== null ? zc(e) : null;
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
var Lc = Ae.unstable_scheduleCallback, Ls = Ae.unstable_cancelCallback, Np = Ae.unstable_shouldYield, Tp = Ae.unstable_requestPaint, q = Ae.unstable_now, Op = Ae.unstable_getCurrentPriorityLevel, ku = Ae.unstable_ImmediatePriority, $c = Ae.unstable_UserBlockingPriority, xl = Ae.unstable_NormalPriority, Rp = Ae.unstable_LowPriority, Ac = Ae.unstable_IdlePriority, Yl = null, lt = null;
function zp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : Ap, Lp = Math.log, $p = Math.LN2;
function Ap(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Lp(e) / $p | 0) | 0;
}
var Wr = 64, Vr = 4194304;
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
function _l(e, t) {
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
function Mp(e, t) {
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
function Ip(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Ze(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Mp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ti(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Mc() {
  var e = Wr;
  return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
}
function Uo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function jp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ze(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function xu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var D = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var jc, _u, Dc, Fc, Uc, Oi = !1, Kr = [], Ct = null, Pt = null, Nt = null, cr = /* @__PURE__ */ new Map(), fr = /* @__PURE__ */ new Map(), kt = [], Dp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $s(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
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
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = zr(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Fp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return Ct = Un(Ct, e, t, n, r, l), !0;
    case "dragenter":
      return Pt = Un(Pt, e, t, n, r, l), !0;
    case "mouseover":
      return Nt = Un(Nt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return cr.set(o, Un(cr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, fr.set(o, Un(fr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Bc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Oc(n), t !== null) {
          e.blockedOn = t, Uc(e.priority, function() {
            Dc(n);
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
    var n = Ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ei = r, n.target.dispatchEvent(r), Ei = null;
    } else
      return t = zr(n), t !== null && _u(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  ol(e) && n.delete(t);
}
function Up() {
  Oi = !1, Ct !== null && ol(Ct) && (Ct = null), Pt !== null && ol(Pt) && (Pt = null), Nt !== null && ol(Nt) && (Nt = null), cr.forEach(As), fr.forEach(As);
}
function Bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Oi || (Oi = !0, Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Up)));
}
function dr(e) {
  function t(l) {
    return Bn(l, e);
  }
  if (0 < Kr.length) {
    Bn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && Bn(Ct, e), Pt !== null && Bn(Pt, e), Nt !== null && Bn(Nt, e), cr.forEach(t), fr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Bc(n), n.blockedOn === null && kt.shift();
}
var wn = gt.ReactCurrentBatchConfig, El = !0;
function Bp(e, t, n, r) {
  var l = D, o = wn.transition;
  wn.transition = null;
  try {
    D = 1, Eu(e, t, n, r);
  } finally {
    D = l, wn.transition = o;
  }
}
function Hp(e, t, n, r) {
  var l = D, o = wn.transition;
  wn.transition = null;
  try {
    D = 4, Eu(e, t, n, r);
  } finally {
    D = l, wn.transition = o;
  }
}
function Eu(e, t, n, r) {
  if (El) {
    var l = Ri(e, t, n, r);
    if (l === null)
      Zo(e, t, r, Cl, n), $s(e, r);
    else if (Fp(l, e, t, n, r))
      r.stopPropagation();
    else if ($s(e, r), t & 4 && -1 < Dp.indexOf(e)) {
      for (; l !== null; ) {
        var o = zr(l);
        if (o !== null && jc(o), o = Ri(e, t, n, r), o === null && Zo(e, t, r, Cl, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Zo(e, t, r, null, n);
  }
}
var Cl = null;
function Ri(e, t, n, r) {
  if (Cl = null, e = Su(r), e = Ht(e), e !== null)
    if (t = bt(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Oc(t), e !== null)
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
      switch (Op()) {
        case ku:
          return 1;
        case $c:
          return 4;
        case xl:
        case Rp:
          return 16;
        case Ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null, Cu = null, il = null;
function Wc() {
  if (il)
    return il;
  var e, t = Cu, n = t.length, r, l = "value" in _t ? _t.value : _t.textContent, o = l.length;
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
function Ms() {
  return !1;
}
function Ie(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Qr : Ms, this.isPropagationStopped = Ms, this;
  }
  return G(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Pu = Ie($n), Rr = G({}, $n, { view: 0, detail: 0 }), Wp = Ie(Rr), Bo, Ho, Hn, Xl = G({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Nu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Hn && (Hn && e.type === "mousemove" ? (Bo = e.screenX - Hn.screenX, Ho = e.screenY - Hn.screenY) : Ho = Bo = 0, Hn = e), Bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ho;
} }), Is = Ie(Xl), Vp = G({}, Xl, { dataTransfer: 0 }), Kp = Ie(Vp), Qp = G({}, Rr, { relatedTarget: 0 }), Wo = Ie(Qp), Gp = G({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = Ie(Gp), Xp = G({}, $n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zp = Ie(Xp), Jp = G({}, $n, { data: 0 }), js = Ie(Jp), qp = {
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
}, bp = {
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
}, em = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function tm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = em[e]) ? !!t[e] : !1;
}
function Nu() {
  return tm;
}
var nm = G({}, Rr, { key: function(e) {
  if (e.key) {
    var t = qp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = ul(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Nu, charCode: function(e) {
  return e.type === "keypress" ? ul(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rm = Ie(nm), lm = G({}, Xl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ds = Ie(lm), om = G({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Nu }), im = Ie(om), um = G({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sm = Ie(um), am = G({}, Xl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cm = Ie(am), fm = [9, 13, 27, 32], Tu = dt && "CompositionEvent" in window, bn = null;
dt && "documentMode" in document && (bn = document.documentMode);
var dm = dt && "TextEvent" in window && !bn, Vc = dt && (!Tu || bn && 8 < bn && 11 >= bn), Fs = String.fromCharCode(32), Us = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return fm.indexOf(t.keyCode) !== -1;
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
var on = !1;
function pm(e, t) {
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
function mm(e, t) {
  if (on)
    return e === "compositionend" || !Tu && Kc(e, t) ? (e = Wc(), il = Cu = _t = null, on = !1, e) : null;
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
var hm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hm[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Ec(r), t = Pl(t, "onChange"), 0 < t.length && (n = new Pu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var er = null, pr = null;
function ym(e) {
  lf(e, 0);
}
function Zl(e) {
  var t = an(e);
  if (gc(t))
    return e;
}
function gm(e, t) {
  if (e === "change")
    return t;
}
var Yc = !1;
if (dt) {
  var Vo;
  if (dt) {
    var Ko = "oninput" in document;
    if (!Ko) {
      var Hs = document.createElement("div");
      Hs.setAttribute("oninput", "return;"), Ko = typeof Hs.oninput == "function";
    }
    Vo = Ko;
  } else
    Vo = !1;
  Yc = Vo && (!document.documentMode || 9 < document.documentMode);
}
function Ws() {
  er && (er.detachEvent("onpropertychange", Xc), pr = er = null);
}
function Xc(e) {
  if (e.propertyName === "value" && Zl(pr)) {
    var t = [];
    Gc(t, pr, e, Su(e)), Tc(ym, t);
  }
}
function vm(e, t, n) {
  e === "focusin" ? (Ws(), er = t, pr = n, er.attachEvent("onpropertychange", Xc)) : e === "focusout" && Ws();
}
function wm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zl(pr);
}
function Sm(e, t) {
  if (e === "click")
    return Zl(t);
}
function km(e, t) {
  if (e === "input" || e === "change")
    return Zl(t);
}
function xm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var qe = typeof Object.is == "function" ? Object.is : xm;
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
    if (!di.call(t, l) || !qe(e[l], t[l]))
      return !1;
  }
  return !0;
}
function Vs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ks(e, t) {
  var n = Vs(e);
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
    n = Vs(n);
  }
}
function Zc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Jc() {
  for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = wl(e.document);
  }
  return t;
}
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _m(e) {
  var t = Jc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ou(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ks(n, o);
        var i = Ks(
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
var Em = dt && "documentMode" in document && 11 >= document.documentMode, un = null, zi = null, tr = null, Li = !1;
function Qs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li || un == null || un !== wl(r) || (r = un, "selectionStart" in r && Ou(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), tr && mr(tr, r) || (tr = r, r = Pl(zi, "onSelect"), 0 < r.length && (t = new Pu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = un)));
}
function Gr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var sn = { animationend: Gr("Animation", "AnimationEnd"), animationiteration: Gr("Animation", "AnimationIteration"), animationstart: Gr("Animation", "AnimationStart"), transitionend: Gr("Transition", "TransitionEnd") }, Qo = {}, qc = {};
dt && (qc = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
function Jl(e) {
  if (Qo[e])
    return Qo[e];
  if (!sn[e])
    return e;
  var t = sn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in qc)
      return Qo[e] = t[n];
  return e;
}
var bc = Jl("animationend"), ef = Jl("animationiteration"), tf = Jl("animationstart"), nf = Jl("transitionend"), rf = /* @__PURE__ */ new Map(), Gs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  rf.set(e, t), qt(t, [e]);
}
for (var Go = 0; Go < Gs.length; Go++) {
  var Yo = Gs[Go], Cm = Yo.toLowerCase(), Pm = Yo[0].toUpperCase() + Yo.slice(1);
  Mt(Cm, "on" + Pm);
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
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Ys(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Cp(r, t, void 0, e), e.currentTarget = null;
}
function lf(e, t) {
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
          Ys(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          Ys(l, u, a), o = s;
        }
    }
  }
  if (kl)
    throw e = Ni, kl = !1, Ni = null, e;
}
function B(e, t) {
  var n = t[ji];
  n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (of(t, e, 2, !1), n.add(r));
}
function Xo(e, t, n) {
  var r = 0;
  t && (r |= 4), of(n, e, r, t);
}
var Yr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Yr]) {
    e[Yr] = !0, dc.forEach(function(n) {
      n !== "selectionchange" && (Nm.has(n) || Xo(n, !1, e), Xo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yr] || (t[Yr] = !0, Xo("selectionchange", !1, t));
  }
}
function of(e, t, n, r) {
  switch (Hc(t)) {
    case 1:
      var l = Bp;
      break;
    case 4:
      l = Hp;
      break;
    default:
      l = Eu;
  }
  n = l.bind(null, t, n, e), l = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zo(e, t, n, r, l) {
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
            if (i = Ht(u), i === null)
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
  Tc(function() {
    var a = o, h = Su(n), d = [];
    e: {
      var m = rf.get(e);
      if (m !== void 0) {
        var g = Pu, v = e;
        switch (e) {
          case "keypress":
            if (ul(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = rm;
            break;
          case "focusin":
            v = "focus", g = Wo;
            break;
          case "focusout":
            v = "blur", g = Wo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Wo;
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
            g = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = im;
            break;
          case bc:
          case ef:
          case tf:
            g = Yp;
            break;
          case nf:
            g = sm;
            break;
          case "scroll":
            g = Wp;
            break;
          case "wheel":
            g = cm;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Zp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ds;
        }
        var y = (t & 4) !== 0, P = !y && e === "scroll", f = y ? m !== null ? m + "Capture" : null : m;
        y = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, f !== null && (w = ar(c, f), w != null && y.push(yr(c, w, p)))), P)
            break;
          c = c.return;
        }
        0 < y.length && (m = new g(m, v, null, n, h), d.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", m && n !== Ei && (v = n.relatedTarget || n.fromElement) && (Ht(v) || v[pt]))
          break e;
        if ((g || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = a, v = v ? Ht(v) : null, v !== null && (P = bt(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = a), g !== v)) {
          if (y = Is, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ds, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = g == null ? m : an(g), p = v == null ? m : an(v), m = new y(w, c + "leave", g, n, h), m.target = P, m.relatedTarget = p, w = null, Ht(h) === a && (y = new y(f, c + "enter", v, n, h), y.target = p, y.relatedTarget = P, w = y), P = w, g && v)
            t: {
              for (y = g, f = v, c = 0, p = y; p; p = en(p))
                c++;
              for (p = 0, w = f; w; w = en(w))
                p++;
              for (; 0 < c - p; )
                y = en(y), c--;
              for (; 0 < p - c; )
                f = en(f), p--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = en(y), f = en(f);
              }
              y = null;
            }
          else
            y = null;
          g !== null && Xs(d, m, g, y, !1), v !== null && P !== null && Xs(d, P, v, y, !0);
        }
      }
      e: {
        if (m = a ? an(a) : window, g = m.nodeName && m.nodeName.toLowerCase(), g === "select" || g === "input" && m.type === "file")
          var x = gm;
        else if (Bs(m))
          if (Yc)
            x = km;
          else {
            x = wm;
            var _ = vm;
          }
        else
          (g = m.nodeName) && g.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (x = Sm);
        if (x && (x = x(e, a))) {
          Gc(d, x, n, h);
          break e;
        }
        _ && _(e, m, a), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && wi(m, "number", m.value);
      }
      switch (_ = a ? an(a) : window, e) {
        case "focusin":
          (Bs(_) || _.contentEditable === "true") && (un = _, zi = a, tr = null);
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
          Li = !1, Qs(d, n, h);
          break;
        case "selectionchange":
          if (Em)
            break;
        case "keydown":
        case "keyup":
          Qs(d, n, h);
      }
      var k;
      if (Tu)
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
        on ? Kc(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Vc && n.locale !== "ko" && (on || N !== "onCompositionStart" ? N === "onCompositionEnd" && on && (k = Wc()) : (_t = h, Cu = "value" in _t ? _t.value : _t.textContent, on = !0)), _ = Pl(a, N), 0 < _.length && (N = new js(N, e, null, n, h), d.push({ event: N, listeners: _ }), k ? N.data = k : (k = Qc(n), k !== null && (N.data = k)))), (k = dm ? pm(e, n) : mm(e, n)) && (a = Pl(a, "onBeforeInput"), 0 < a.length && (h = new js("onBeforeInput", "beforeinput", null, n, h), d.push({ event: h, listeners: a }), h.data = k));
    }
    lf(d, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pl(e, t) {
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
function Xs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = ar(n, o), s != null && i.unshift(yr(n, s, u))) : l || (s = ar(n, o), s != null && i.push(yr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Tm = /\r\n?/g, Om = /\u0000|\uFFFD/g;
function Zs(e) {
  return (typeof e == "string" ? e : "" + e).replace(Tm, `
`).replace(Om, "");
}
function Xr(e, t, n) {
  if (t = Zs(t), Zs(e) !== t && n)
    throw Error(S(425));
}
function Nl() {
}
var $i = null, Ai = null;
function Mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ii = typeof setTimeout == "function" ? setTimeout : void 0, Rm = typeof clearTimeout == "function" ? clearTimeout : void 0, Js = typeof Promise == "function" ? Promise : void 0, zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Js < "u" ? function(e) {
  return Js.resolve(null).then(e).catch(Lm);
} : Ii;
function Lm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jo(e, t) {
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
function Tt(e) {
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
function qs(e) {
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
var An = Math.random().toString(36).slice(2), rt = "__reactFiber$" + An, gr = "__reactProps$" + An, pt = "__reactContainer$" + An, ji = "__reactEvents$" + An, $m = "__reactListeners$" + An, Am = "__reactHandles$" + An;
function Ht(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = qs(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = qs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function zr(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function an(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function ql(e) {
  return e[gr] || null;
}
var Di = [], cn = -1;
function It(e) {
  return { current: e };
}
function H(e) {
  0 > cn || (e.current = Di[cn], Di[cn] = null, cn--);
}
function U(e, t) {
  cn++, Di[cn] = e.current, e.current = t;
}
var At = {}, ve = It(At), Ce = It(!1), Gt = At;
function Cn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return At;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function Tl() {
  H(Ce), H(ve);
}
function bs(e, t, n) {
  if (ve.current !== At)
    throw Error(S(168));
  U(ve, t), U(Ce, n);
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(S(108, vp(e) || "Unknown", l));
  return G({}, n, r);
}
function Ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || At, Gt = ve.current, U(ve, e), U(Ce, Ce.current), !0;
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = uf(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, H(Ce), H(ve), U(ve, e)) : H(Ce), U(Ce, n);
}
var st = null, bl = !1, qo = !1;
function sf(e) {
  st === null ? st = [e] : st.push(e);
}
function Mm(e) {
  bl = !0, sf(e);
}
function jt() {
  if (!qo && st !== null) {
    qo = !0;
    var e = 0, t = D;
    try {
      var n = st;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, bl = !1;
    } catch (l) {
      throw st !== null && (st = st.slice(e + 1)), Lc(ku, jt), l;
    } finally {
      D = t, qo = !1;
    }
  }
  return null;
}
var fn = [], dn = 0, Rl = null, zl = 0, De = [], Fe = 0, Yt = null, at = 1, ct = "";
function Ut(e, t) {
  fn[dn++] = zl, fn[dn++] = Rl, Rl = e, zl = t;
}
function af(e, t, n) {
  De[Fe++] = at, De[Fe++] = ct, De[Fe++] = Yt, Yt = e;
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
function Ru(e) {
  e.return !== null && (Ut(e, 1), af(e, 1, 0));
}
function zu(e) {
  for (; e === Rl; )
    Rl = fn[--dn], fn[dn] = null, zl = fn[--dn], fn[dn] = null;
  for (; e === Yt; )
    Yt = De[--Fe], De[Fe] = null, ct = De[--Fe], De[Fe] = null, at = De[--Fe], De[Fe] = null;
}
var Le = null, ze = null, W = !1, Xe = null;
function cf(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ta(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Le = e, ze = Tt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Le = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Le = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if (W) {
    var t = ze;
    if (t) {
      var n = t;
      if (!ta(e, t)) {
        if (Fi(e))
          throw Error(S(418));
        t = Tt(n.nextSibling);
        var r = Le;
        t && ta(e, t) ? cf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Le = e);
      }
    } else {
      if (Fi(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, W = !1, Le = e;
    }
  }
}
function na(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Zr(e) {
  if (e !== Le)
    return !1;
  if (!W)
    return na(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Mi(e.type, e.memoizedProps)), t && (t = ze)) {
    if (Fi(e))
      throw ff(), Error(S(418));
    for (; t; )
      cf(e, t), t = Tt(t.nextSibling);
  }
  if (na(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Tt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else
    ze = Le ? Tt(e.stateNode.nextSibling) : null;
  return !0;
}
function ff() {
  for (var e = ze; e; )
    e = Tt(e.nextSibling);
}
function Pn() {
  ze = Le = null, W = !1;
}
function Lu(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var Im = gt.ReactCurrentBatchConfig;
function Wn(e, t, n) {
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
function ra(e) {
  var t = e._init;
  return t(e._payload);
}
function df(e) {
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
  function l(f, c) {
    return f = Lt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, p) {
    return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, w) {
    return c === null || c.tag !== 6 ? (c = oi(p, f.mode, w), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function s(f, c, p, w) {
    var x = p.type;
    return x === ln ? h(f, c, p.props.children, w, p.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && ra(x) === c.type) ? (w = l(c, p.props), w.ref = Wn(f, c, p), w.return = f, w) : (w = ml(p.type, p.key, p.props, null, f.mode, w), w.ref = Wn(f, c, p), w.return = f, w);
  }
  function a(f, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ii(p, f.mode, w), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
  }
  function h(f, c, p, w, x) {
    return c === null || c.tag !== 7 ? (c = Qt(p, f.mode, w, x), c.return = f, c) : (c = l(c, p), c.return = f, c);
  }
  function d(f, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = oi("" + c, f.mode, p), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ur:
          return p = ml(c.type, c.key, c.props, null, f.mode, p), p.ref = Wn(f, null, c), p.return = f, p;
        case rn:
          return c = ii(c, f.mode, p), c.return = f, c;
        case wt:
          var w = c._init;
          return d(f, w(c._payload), p);
      }
      if (Yn(c) || Dn(c))
        return c = Qt(c, f.mode, p, null), c.return = f, c;
      Jr(f, c);
    }
    return null;
  }
  function m(f, c, p, w) {
    var x = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number")
      return x !== null ? null : u(f, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ur:
          return p.key === x ? s(f, c, p, w) : null;
        case rn:
          return p.key === x ? a(f, c, p, w) : null;
        case wt:
          return x = p._init, m(
            f,
            c,
            x(p._payload),
            w
          );
      }
      if (Yn(p) || Dn(p))
        return x !== null ? null : h(f, c, p, w, null);
      Jr(f, p);
    }
    return null;
  }
  function g(f, c, p, w, x) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(p) || null, u(c, f, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ur:
          return f = f.get(w.key === null ? p : w.key) || null, s(c, f, w, x);
        case rn:
          return f = f.get(w.key === null ? p : w.key) || null, a(c, f, w, x);
        case wt:
          var _ = w._init;
          return g(f, c, p, _(w._payload), x);
      }
      if (Yn(w) || Dn(w))
        return f = f.get(p) || null, h(c, f, w, x, null);
      Jr(c, w);
    }
    return null;
  }
  function v(f, c, p, w) {
    for (var x = null, _ = null, k = c, N = c = 0, V = null; k !== null && N < p.length; N++) {
      k.index > N ? (V = k, k = null) : V = k.sibling;
      var z = m(f, k, p[N], w);
      if (z === null) {
        k === null && (k = V);
        break;
      }
      e && k && z.alternate === null && t(f, k), c = o(z, c, N), _ === null ? x = z : _.sibling = z, _ = z, k = V;
    }
    if (N === p.length)
      return n(f, k), W && Ut(f, N), x;
    if (k === null) {
      for (; N < p.length; N++)
        k = d(f, p[N], w), k !== null && (c = o(k, c, N), _ === null ? x = k : _.sibling = k, _ = k);
      return W && Ut(f, N), x;
    }
    for (k = r(f, k); N < p.length; N++)
      V = g(k, f, N, p[N], w), V !== null && (e && V.alternate !== null && k.delete(V.key === null ? N : V.key), c = o(V, c, N), _ === null ? x = V : _.sibling = V, _ = V);
    return e && k.forEach(function(pe) {
      return t(f, pe);
    }), W && Ut(f, N), x;
  }
  function y(f, c, p, w) {
    var x = Dn(p);
    if (typeof x != "function")
      throw Error(S(150));
    if (p = x.call(p), p == null)
      throw Error(S(151));
    for (var _ = x = null, k = c, N = c = 0, V = null, z = p.next(); k !== null && !z.done; N++, z = p.next()) {
      k.index > N ? (V = k, k = null) : V = k.sibling;
      var pe = m(f, k, z.value, w);
      if (pe === null) {
        k === null && (k = V);
        break;
      }
      e && k && pe.alternate === null && t(f, k), c = o(pe, c, N), _ === null ? x = pe : _.sibling = pe, _ = pe, k = V;
    }
    if (z.done)
      return n(
        f,
        k
      ), W && Ut(f, N), x;
    if (k === null) {
      for (; !z.done; N++, z = p.next())
        z = d(f, z.value, w), z !== null && (c = o(z, c, N), _ === null ? x = z : _.sibling = z, _ = z);
      return W && Ut(f, N), x;
    }
    for (k = r(f, k); !z.done; N++, z = p.next())
      z = g(k, f, N, z.value, w), z !== null && (e && z.alternate !== null && k.delete(z.key === null ? N : z.key), c = o(z, c, N), _ === null ? x = z : _.sibling = z, _ = z);
    return e && k.forEach(function(In) {
      return t(f, In);
    }), W && Ut(f, N), x;
  }
  function P(f, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === ln && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ur:
          e: {
            for (var x = p.key, _ = c; _ !== null; ) {
              if (_.key === x) {
                if (x = p.type, x === ln) {
                  if (_.tag === 7) {
                    n(f, _.sibling), c = l(_, p.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (_.elementType === x || typeof x == "object" && x !== null && x.$$typeof === wt && ra(x) === _.type) {
                  n(f, _.sibling), c = l(_, p.props), c.ref = Wn(f, _, p), c.return = f, f = c;
                  break e;
                }
                n(f, _);
                break;
              } else
                t(f, _);
              _ = _.sibling;
            }
            p.type === ln ? (c = Qt(p.props.children, f.mode, w, p.key), c.return = f, f = c) : (w = ml(p.type, p.key, p.props, null, f.mode, w), w.ref = Wn(f, c, p), w.return = f, f = w);
          }
          return i(f);
        case rn:
          e: {
            for (_ = p.key; c !== null; ) {
              if (c.key === _)
                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = ii(p, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case wt:
          return _ = p._init, P(f, c, _(p._payload), w);
      }
      if (Yn(p))
        return v(f, c, p, w);
      if (Dn(p))
        return y(f, c, p, w);
      Jr(f, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = oi(p, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return P;
}
var Nn = df(!0), pf = df(!1), Ll = It(null), $l = null, pn = null, $u = null;
function Au() {
  $u = pn = $l = null;
}
function Mu(e) {
  var t = Ll.current;
  H(Ll), e._currentValue = t;
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
  $l = e, $u = pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if ($u !== e)
    if (e = { context: e, memoizedValue: t, next: null }, pn === null) {
      if ($l === null)
        throw Error(S(308));
      pn = e, $l.dependencies = { lanes: 0, firstContext: e };
    } else
      pn = pn.next = e;
  return t;
}
var Wt = null;
function Iu(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function mf(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Iu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, mt(e, r);
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
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, A & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, mt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Iu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, mt(e, n);
}
function sl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xu(e, n);
  }
}
function la(e, t) {
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
function Al(e, t, n, r) {
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
    var d = l.baseState;
    i = 0, h = a = s = null, u = o;
    do {
      var m = u.lane, g = u.eventTime;
      if ((r & m) === m) {
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
          switch (m = t, g = n, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                d = v.call(g, d, m);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, m = typeof v == "function" ? v.call(g, d, m) : v, m == null)
                break e;
              d = G({}, d, m);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u));
      } else
        g = { eventTime: g, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = g, s = d) : h = h.next = g, i |= m;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = d), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Zt |= i, e.lanes = i, e.memoizedState = d;
  }
}
function oa(e, t, n) {
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
var Lr = {}, ot = It(Lr), vr = It(Lr), wr = It(Lr);
function Vt(e) {
  if (e === Lr)
    throw Error(S(174));
  return e;
}
function Du(e, t) {
  switch (U(wr, t), U(vr, e), U(ot, Lr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
  }
  H(ot), U(ot, t);
}
function Tn() {
  H(ot), H(vr), H(wr);
}
function yf(e) {
  Vt(wr.current);
  var t = Vt(ot.current), n = ki(t, e.type);
  t !== n && (U(vr, e), U(ot, n));
}
function Fu(e) {
  vr.current === e && (H(ot), H(vr));
}
var K = It(0);
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
var bo = [];
function Uu() {
  for (var e = 0; e < bo.length; e++)
    bo[e]._workInProgressVersionPrimary = null;
  bo.length = 0;
}
var al = gt.ReactCurrentDispatcher, ei = gt.ReactCurrentBatchConfig, Xt = 0, Q = null, ne = null, oe = null, Il = !1, nr = !1, Sr = 0, jm = 0;
function me() {
  throw Error(S(321));
}
function Bu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n]))
      return !1;
  return !0;
}
function Hu(e, t, n, r, l, o) {
  if (Xt = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? Bm : Hm, e = n(r, l), nr) {
    o = 0;
    do {
      if (nr = !1, Sr = 0, 25 <= o)
        throw Error(S(301));
      o += 1, oe = ne = null, t.updateQueue = null, al.current = Wm, e = n(r, l);
    } while (nr);
  }
  if (al.current = jl, t = ne !== null && ne.next !== null, Xt = 0, oe = ne = Q = null, Il = !1, t)
    throw Error(S(300));
  return e;
}
function Wu() {
  var e = Sr !== 0;
  return Sr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? Q.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ve() {
  if (ne === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ne.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null)
    oe = t, ne = e;
  else {
    if (e === null)
      throw Error(S(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, oe === null ? Q.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ti(e) {
  var t = Ve(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ne, l = r.baseQueue, o = n.pending;
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
        var d = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, i = r) : s = s.next = d, Q.lanes |= h, Zt |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, qe(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, Zt |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ni(e) {
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
function gf() {
}
function vf(e, t) {
  var n = Q, r = Ve(), l = t(), o = !qe(r.memoizedState, l);
  if (o && (r.memoizedState = l, Ee = !0), r = r.queue, Vu(kf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, Sf.bind(null, n, r, l, t), void 0, null), ie === null)
      throw Error(S(349));
    Xt & 30 || wf(n, t, l);
  }
  return l;
}
function wf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Sf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xf(t) && _f(e);
}
function kf(e, t, n) {
  return n(function() {
    xf(t) && _f(e);
  });
}
function xf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function _f(e) {
  var t = mt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function ia(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Um.bind(null, Q, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ef() {
  return Ve().memoizedState;
}
function cl(e, t, n, r) {
  var l = et();
  Q.flags |= e, l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function eo(e, t, n, r) {
  var l = Ve();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (o = i.destroy, r !== null && Bu(r, i.deps)) {
      l.memoizedState = xr(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = xr(1 | t, n, o, r);
}
function ua(e, t) {
  return cl(8390656, 8, e, t);
}
function Vu(e, t) {
  return eo(2048, 8, e, t);
}
function Cf(e, t) {
  return eo(4, 2, e, t);
}
function Pf(e, t) {
  return eo(4, 4, e, t);
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
function Tf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, eo(4, 4, Nf.bind(null, t, e), n);
}
function Ku() {
}
function Of(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function zf(e, t, n) {
  return Xt & 21 ? (qe(n, t) || (n = Mc(), Q.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n);
}
function Dm(e, t) {
  var n = D;
  D = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    D = n, ei.transition = r;
  }
}
function Lf() {
  return Ve().memoizedState;
}
function Fm(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $f(e))
    Af(t, n);
  else if (n = mf(e, t, n, r), n !== null) {
    var l = Se();
    Je(n, e, r, l), Mf(n, t, r);
  }
}
function Um(e, t, n) {
  var r = zt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($f(e))
    Af(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, qe(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, Iu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = mf(e, t, l, r), n !== null && (l = Se(), Je(n, e, r, l), Mf(n, t, r));
  }
}
function $f(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function Af(e, t) {
  nr = Il = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Mf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xu(e, n);
  }
}
var jl = { readContext: We, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, Bm = { readContext: We, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: ua, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, cl(
    4194308,
    4,
    Nf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return cl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return cl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fm.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: ia, useDebugValue: Ku, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = ia(!1), t = e[0];
  return e = Dm.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, l = et();
  if (W) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ie === null)
      throw Error(S(349));
    Xt & 30 || wf(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, ua(kf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, xr(9, Sf.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = ie.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Sr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = jm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hm = {
  readContext: We,
  useCallback: Of,
  useContext: We,
  useEffect: Vu,
  useImperativeHandle: Tf,
  useInsertionEffect: Cf,
  useLayoutEffect: Pf,
  useMemo: Rf,
  useReducer: ti,
  useRef: Ef,
  useState: function() {
    return ti(kr);
  },
  useDebugValue: Ku,
  useDeferredValue: function(e) {
    var t = Ve();
    return zf(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = ti(kr)[0], t = Ve().memoizedState;
    return [e, t];
  },
  useMutableSource: gf,
  useSyncExternalStore: vf,
  useId: Lf,
  unstable_isNewReconciler: !1
}, Wm = { readContext: We, useCallback: Of, useContext: We, useEffect: Vu, useImperativeHandle: Tf, useInsertionEffect: Cf, useLayoutEffect: Pf, useMemo: Rf, useReducer: ni, useRef: Ef, useState: function() {
  return ni(kr);
}, useDebugValue: Ku, useDeferredValue: function(e) {
  var t = Ve();
  return ne === null ? t.memoizedState = e : zf(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = ni(kr)[0], t = Ve().memoizedState;
  return [e, t];
}, useMutableSource: gf, useSyncExternalStore: vf, useId: Lf, unstable_isNewReconciler: !1 };
function Ge(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var to = { isMounted: function(e) {
  return (e = e._reactInternals) ? bt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = zt(e), o = ft(r, l);
  o.payload = t, n != null && (o.callback = n), t = Ot(e, o, l), t !== null && (Je(t, e, l, r), sl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), l = zt(e), o = ft(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ot(e, o, l), t !== null && (Je(t, e, l, r), sl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = zt(e), l = ft(n, r);
  l.tag = 2, t != null && (l.callback = t), t = Ot(e, l, r), t !== null && (Je(t, e, r, n), sl(t, e, r));
} };
function sa(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(l, o) : !0;
}
function If(e, t, n) {
  var r = !1, l = At, o = t.contextType;
  return typeof o == "object" && o !== null ? o = We(o) : (l = Pe(t) ? Gt : ve.current, r = t.contextTypes, o = (r = r != null) ? Cn(e, l) : At), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = to, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function aa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && to.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, ju(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = We(o) : (o = Pe(t) ? Gt : ve.current, l.context = Cn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && to.enqueueReplaceState(l, l.state, null), Al(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += gp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
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
var Vm = typeof WeakMap == "function" ? WeakMap : Map;
function jf(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Fl || (Fl = !0, eu = r), Vi(e, t);
  }, n;
}
function Df(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vi(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (Rt === null ? Rt = /* @__PURE__ */ new Set([this]) : Rt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function ca(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vm();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = lh.bind(null, e, t, n), t.then(e, e));
}
function fa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function da(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var Km = gt.ReactCurrentOwner, Ee = !1;
function we(e, t, n, r) {
  t.child = e === null ? pf(t, null, n, r) : Nn(t, e.child, n, r);
}
function pa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Sn(t, l), r = Hu(e, t, n, r, o, l), n = Wu(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (W && n && Ru(t), t.flags |= 1, we(e, t, r, l), t.child);
}
function ma(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !bu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ff(e, t, o, r, l)) : (e = ml(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : mr, n(i, r) && e.ref === t.ref)
      return ht(e, t, l);
  }
  return t.flags |= 1, e = Lt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ff(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (mr(o, r) && e.ref === t.ref)
      if (Ee = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Ee = !0);
      else
        return t.lanes = e.lanes, ht(e, t, l);
  }
  return Ki(e, t, n, r, l);
}
function Uf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(hn, Oe), Oe |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(hn, Oe), Oe |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(hn, Oe), Oe |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(hn, Oe), Oe |= r;
  return we(e, t, l, n), t.child;
}
function Bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ki(e, t, n, r, l) {
  var o = Pe(n) ? Gt : ve.current;
  return o = Cn(t, o), Sn(t, l), n = Hu(e, t, n, r, o, l), r = Wu(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, ht(e, t, l)) : (W && r && Ru(t), t.flags |= 1, we(e, t, n, l), t.child);
}
function ha(e, t, n, r, l) {
  if (Pe(n)) {
    var o = !0;
    Ol(t);
  } else
    o = !1;
  if (Sn(t, l), t.stateNode === null)
    fl(e, t), If(t, n, r), Wi(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = We(a) : (a = Pe(n) ? Gt : ve.current, a = Cn(t, a));
    var h = n.getDerivedStateFromProps, d = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && aa(t, i, r, a), St = !1;
    var m = t.memoizedState;
    i.state = m, Al(t, r, i, l), s = t.memoizedState, u !== r || m !== s || Ce.current || St ? (typeof h == "function" && (Hi(t, n, h, r), s = t.memoizedState), (u = St || sa(t, n, u, r, m, s, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, hf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ge(t.type, u), i.props = a, d = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Pe(n) ? Gt : ve.current, s = Cn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || m !== s) && aa(t, i, r, s), St = !1, m = t.memoizedState, i.state = m, Al(t, r, i, l);
    var v = t.memoizedState;
    u !== d || m !== v || Ce.current || St ? (typeof g == "function" && (Hi(t, n, g, r), v = t.memoizedState), (a = St || sa(t, n, a, r, m, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qi(e, t, n, r, o, l);
}
function Qi(e, t, n, r, l, o) {
  Bf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && ea(t, n, !1), ht(e, t, o);
  r = t.stateNode, Km.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Nn(t, e.child, null, o), t.child = Nn(t, null, u, o)) : we(e, t, u, o), t.memoizedState = r.state, l && ea(t, n, !0), t.child;
}
function Hf(e) {
  var t = e.stateNode;
  t.pendingContext ? bs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bs(e, t.context, !1), Du(e, t.containerInfo);
}
function ya(e, t, n, r, l) {
  return Pn(), Lu(l), t.flags |= 256, we(e, t, n, r), t.child;
}
var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wf(e, t, n) {
  var r = t.pendingProps, l = K.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(K, l & 1), e === null)
    return Ui(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = lo(i, r, 0, null), e = Qt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Yi(n), t.memoizedState = Gi, e) : Qu(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Qm(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Lt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Lt(u, o) : (o = Qt(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Yi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = Gi, r;
  }
  return o = e.child, e = o.sibling, r = Lt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Qu(e, t) {
  return t = lo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function qr(e, t, n, r) {
  return r !== null && Lu(r), Nn(t, e.child, null, n), e = Qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ri(Error(S(422))), qr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = lo({ mode: "visible", children: r.children }, l, 0, null), o = Qt(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Nn(t, e.child, null, i), t.child.memoizedState = Yi(i), t.memoizedState = Gi, o);
  if (!(t.mode & 1))
    return qr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = ri(o, r, void 0), qr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ee || u) {
    if (r = ie, r !== null) {
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
    return qu(), r = ri(Error(S(421))), qr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = oh.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ze = Tt(l.nextSibling), Le = t, W = !0, Xe = null, e !== null && (De[Fe++] = at, De[Fe++] = ct, De[Fe++] = Yt, at = e.id, ct = e.overflow, Yt = t), t = Qu(t, r.children), t.flags |= 4096, t);
}
function ga(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function li(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function Vf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = K.current, r & 2)
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
  if (U(K, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && Ml(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), li(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Ml(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        li(t, !0, n, null, o);
        break;
      case "together":
        li(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fl(e, t) {
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
function Gm(e, t, n) {
  switch (t.tag) {
    case 3:
      Hf(t), Pn();
      break;
    case 5:
      yf(t);
      break;
    case 1:
      Pe(t.type) && Ol(t);
      break;
    case 4:
      Du(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      U(Ll, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wf(e, t, n) : (U(K, K.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Vf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(K, K.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uf(e, t, n);
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
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Vt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        l = gi(e, l), r = gi(e, r), o = [];
        break;
      case "select":
        l = G({}, l, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Si(e, l), r = Si(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
    }
    xi(n, r);
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ur.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ym(e, t, n) {
  var r = t.pendingProps;
  switch (zu(t), t.tag) {
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
      return he(t), null;
    case 1:
      return Pe(t.type) && Tl(), he(t), null;
    case 3:
      return r = t.stateNode, Tn(), H(Ce), H(ve), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (ru(Xe), Xe = null))), Xi(e, t), he(t), null;
    case 5:
      Fu(t);
      var l = Vt(wr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Qf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return he(t), null;
        }
        if (e = Vt(ot.current), Zr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[gr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Zn.length; l++)
                B(Zn[l], r);
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
              Ps(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Ts(r, o), B("invalid", r);
          }
          xi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Xr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Xr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : ur.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Br(r), Ns(r, o, !0);
              break;
            case "textarea":
              Br(r), Os(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Nl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[gr] = r, Kf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = _i(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Zn.length; l++)
                  B(Zn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                Ps(e, r), l = gi(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = G({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Ts(e, r), l = Si(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            xi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? _c(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && kc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && sr(e, s) : typeof s == "number" && sr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ur.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && yu(e, o, s, i));
              }
            switch (n) {
              case "input":
                Br(e), Ns(e, r, !1);
                break;
              case "textarea":
                Br(e), Os(e);
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
                typeof l.onClick == "function" && (e.onclick = Nl);
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
      return he(t), null;
    case 6:
      if (e && t.stateNode != null)
        Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Vt(wr.current), Vt(ot.current), Zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Le, e !== null))
            switch (e.tag) {
              case 3:
                Xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (H(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && ze !== null && t.mode & 1 && !(t.flags & 128))
          ff(), Pn(), t.flags |= 98560, o = !1;
        else if (o = Zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[rt] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else
          Xe !== null && (ru(Xe), Xe = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? re === 0 && (re = 3) : qu())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return Tn(), Xi(e, t), e === null && hr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Mu(t.type._context), he(t), null;
    case 17:
      return Pe(t.type) && Tl(), he(t), null;
    case 19:
      if (H(K), o = t.memoizedState, o === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Vn(o, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Ml(e), i !== null) {
                for (t.flags |= 128, Vn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(K, K.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && q() > Rn && (t.flags |= 128, r = !0, Vn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ml(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
              return he(t), null;
          } else
            2 * q() - o.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Vn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = K.current, U(K, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return Ju(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Xm(e, t) {
  switch (zu(t), t.tag) {
    case 1:
      return Pe(t.type) && Tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), H(Ce), H(ve), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Fu(t), null;
    case 13:
      if (H(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(K), null;
    case 4:
      return Tn(), null;
    case 10:
      return Mu(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1, ge = !1, Zm = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else
      n.current = null;
}
function Zi(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var va = !1;
function Jm(e, t) {
  if ($i = El, e = Jc(), Ou(e)) {
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
          var i = 0, u = -1, s = -1, a = 0, h = 0, d = e, m = null;
          t:
            for (; ; ) {
              for (var g; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (s = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (g = d.firstChild) !== null; )
                m = d, d = g;
              for (; ; ) {
                if (d === e)
                  break t;
                if (m === n && ++a === l && (u = i), m === o && ++h === r && (s = i), (g = d.nextSibling) !== null)
                  break;
                d = m, m = d.parentNode;
              }
              d = g;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Ai = { focusedElem: e, selectionRange: n }, El = !1, E = t; E !== null; )
    if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, E = e;
    else
      for (; E !== null; ) {
        t = E;
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
                var p = t.stateNode.containerInfo;
                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
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
          Z(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, E = e;
          break;
        }
        E = t.return;
      }
  return v = va, va = !1, v;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Zi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function no(e, t) {
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
  t !== null && (e.alternate = null, Yf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[gr], delete t[ji], delete t[$m], delete t[Am])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wa(e) {
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
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
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
var se = null, Ye = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    Zf(e, t, n), n = n.sibling;
}
function Zf(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Yl, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || mn(n, t);
    case 6:
      var r = se, l = Ye;
      se = null, vt(e, t, n), se = r, Ye = l, se !== null && (Ye ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Ye ? (e = se, n = n.stateNode, e.nodeType === 8 ? Jo(e.parentNode, n) : e.nodeType === 1 && Jo(e, n), dr(e)) : Jo(se, n.stateNode));
      break;
    case 4:
      r = se, l = Ye, se = n.stateNode.containerInfo, Ye = !0, vt(e, t, n), se = r, Ye = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Zi(n, t, i), l = l.next;
        } while (l !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!ge && (mn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
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
function Sa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zm()), t.forEach(function(r) {
      var l = ih.bind(null, e, r);
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
                se = u.stateNode, Ye = !1;
                break e;
              case 3:
                se = u.stateNode.containerInfo, Ye = !0;
                break e;
              case 4:
                se = u.stateNode.containerInfo, Ye = !0;
                break e;
            }
            u = u.return;
          }
        if (se === null)
          throw Error(S(160));
        Zf(o, i, l), se = null, Ye = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        Z(l, t, a);
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
      if (Qe(t, e), be(e), r & 4) {
        try {
          rr(3, e, e.return), no(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          rr(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
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
          Z(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && vc(l, o), _i(u, i);
            var a = _i(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], d = s[i + 1];
              h === "style" ? _c(l, d) : h === "dangerouslySetInnerHTML" ? kc(l, d) : h === "children" ? sr(l, d) : yu(l, h, d, a);
            }
            switch (u) {
              case "input":
                vi(l, o);
                break;
              case "textarea":
                wc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? yn(l, !!o.multiple, g, !1) : m !== !!o.multiple && (o.defaultValue != null ? yn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[gr] = o;
          } catch (y) {
            Z(e, e.return, y);
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
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Qe(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          dr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      Qe(t, e), be(e);
      break;
    case 13:
      Qe(t, e), be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Xu = q())), r & 4 && Sa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (a = ge) || h, Qe(t, e), ge = a) : Qe(t, e), be(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (E = e, h = e.child; h !== null; ) {
            for (d = E = h; E !== null; ) {
              switch (m = E, g = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, m, m.return);
                  break;
                case 1:
                  mn(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
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
              g !== null ? (g.return = m, E = g) : xa(d);
            }
            h = h.sibling;
          }
        e:
          for (h = null, d = e; ; ) {
            if (d.tag === 5) {
              if (h === null) {
                h = d;
                try {
                  l = d.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = xc("display", i));
                } catch (y) {
                  Z(e, e.return, y);
                }
              }
            } else if (d.tag === 6) {
              if (h === null)
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (y) {
                  Z(e, e.return, y);
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
      Qe(t, e), be(e), r & 4 && Sa(e);
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
          var l = r.stateNode;
          r.flags & 32 && (sr(l, ""), r.flags &= -33);
          var o = wa(e);
          bi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = wa(e);
          qi(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qm(e, t, n) {
  E = e, qf(e);
}
function qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || br;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ge;
        u = br;
        var a = ge;
        if (br = i, (ge = s) && !a)
          for (E = l; E !== null; )
            i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? _a(l) : s !== null ? (s.return = i, E = s) : _a(l);
        for (; o !== null; )
          E = o, qf(o), o = o.sibling;
        E = l, br = u, ge = a;
      }
      ka(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : ka(e);
  }
}
function ka(e) {
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
              ge || no(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && oa(t, o, r);
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
              throw Error(S(163));
          }
        ge || t.flags & 512 && Ji(t);
      } catch (m) {
        Z(t, t.return, m);
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
function xa(e) {
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
function _a(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            no(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ji(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ji(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
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
var bm = Math.ceil, Dl = gt.ReactCurrentDispatcher, Gu = gt.ReactCurrentOwner, He = gt.ReactCurrentBatchConfig, A = 0, ie = null, te = null, ce = 0, Oe = 0, hn = It(0), re = 0, _r = null, Zt = 0, ro = 0, Yu = 0, lr = null, _e = null, Xu = 0, Rn = 1 / 0, ut = null, Fl = !1, eu = null, Rt = null, el = !1, Et = null, Ul = 0, or = 0, tu = null, dl = -1, pl = 0;
function Se() {
  return A & 6 ? q() : dl !== -1 ? dl : dl = q();
}
function zt(e) {
  return e.mode & 1 ? A & 2 && ce !== 0 ? ce & -ce : Im.transition !== null ? (pl === 0 && (pl = Mc()), pl) : (e = D, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Hc(e.type)), e) : 1;
}
function Je(e, t, n, r) {
  if (50 < or)
    throw or = 0, tu = null, Error(S(185));
  Or(e, n, r), (!(A & 2) || e !== ie) && (e === ie && (!(A & 2) && (ro |= n), re === 4 && xt(e, ce)), Ne(e, r), n === 1 && A === 0 && !(t.mode & 1) && (Rn = q() + 500, bl && jt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Ip(e, t);
  var r = _l(e, e === ie ? ce : 0);
  if (r === 0)
    n !== null && Ls(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ls(n), t === 1)
      e.tag === 0 ? Mm(Ea.bind(null, e)) : sf(Ea.bind(null, e)), zm(function() {
        !(A & 6) && jt();
      }), n = null;
    else {
      switch (Ic(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = $c;
          break;
        case 16:
          n = xl;
          break;
        case 536870912:
          n = Ac;
          break;
        default:
          n = xl;
      }
      n = id(n, bf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function bf(e, t) {
  if (dl = -1, pl = 0, A & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n)
    return null;
  var r = _l(e, e === ie ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bl(e, r);
  else {
    t = r;
    var l = A;
    A |= 2;
    var o = td();
    (ie !== e || ce !== t) && (ut = null, Rn = q() + 500, Kt(e, t));
    do
      try {
        nh();
        break;
      } catch (u) {
        ed(e, u);
      }
    while (1);
    Au(), Dl.current = o, A = l, te !== null ? t = 0 : (ie = null, ce = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ti(e), l !== 0 && (r = l, t = nu(e, l))), t === 1)
      throw n = _r, Kt(e, 0), xt(e, r), Ne(e, q()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !eh(l) && (t = Bl(e, r), t === 2 && (o = Ti(e), o !== 0 && (r = o, t = nu(e, o))), t === 1))
        throw n = _r, Kt(e, 0), xt(e, r), Ne(e, q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Bt(e, _e, ut);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Xu + 500 - q(), 10 < t)) {
            if (_l(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ii(Bt.bind(null, e, _e, ut), t);
            break;
          }
          Bt(e, _e, ut);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ze(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ii(Bt.bind(null, e, _e, ut), r);
            break;
          }
          Bt(e, _e, ut);
          break;
        case 5:
          Bt(e, _e, ut);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ne(e, q()), e.callbackNode === n ? bf.bind(null, e) : null;
}
function nu(e, t) {
  var n = lr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Bl(e, t), e !== 2 && (t = _e, _e = n, t !== null && ru(t)), e;
}
function ru(e) {
  _e === null ? _e = e : _e.push.apply(_e, e);
}
function eh(e) {
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
  for (t &= ~Yu, t &= ~ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ea(e) {
  if (A & 6)
    throw Error(S(327));
  kn();
  var t = _l(e, 0);
  if (!(t & 1))
    return Ne(e, q()), null;
  var n = Bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ti(e);
    r !== 0 && (t = r, n = nu(e, r));
  }
  if (n === 1)
    throw n = _r, Kt(e, 0), xt(e, t), Ne(e, q()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, _e, ut), Ne(e, q()), null;
}
function Zu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    A = n, A === 0 && (Rn = q() + 500, bl && jt());
  }
}
function Jt(e) {
  Et !== null && Et.tag === 0 && !(A & 6) && kn();
  var t = A;
  A |= 1;
  var n = He.transition, r = D;
  try {
    if (He.transition = null, D = 1, e)
      return e();
  } finally {
    D = r, He.transition = n, A = t, !(A & 6) && jt();
  }
}
function Ju() {
  Oe = hn.current, H(hn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Rm(n)), te !== null)
    for (n = te.return; n !== null; ) {
      var r = n;
      switch (zu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Tl();
          break;
        case 3:
          Tn(), H(Ce), H(ve), Uu();
          break;
        case 5:
          Fu(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          Mu(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (ie = e, te = e = Lt(e.current, null), ce = Oe = t, re = 0, _r = null, Yu = ro = Zt = 0, _e = lr = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++)
      if (n = Wt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function ed(e, t) {
  do {
    var n = te;
    try {
      if (Au(), al.current = jl, Il) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Il = !1;
      }
      if (Xt = 0, oe = ne = Q = null, nr = !1, Sr = 0, Gu.current = null, n === null || n.return === null) {
        re = 1, _r = t, te = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = ce, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, d = h.tag;
          if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = fa(i);
          if (g !== null) {
            g.flags &= -257, da(g, i, u, o, t), g.mode & 1 && ca(o, a, t), t = g, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ca(o, a, t), qu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (W && u.mode & 1) {
          var P = fa(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), da(P, i, u, o, t), Lu(On(s, u));
            break e;
          }
        }
        o = s = On(s, u), re !== 4 && (re = 2), lr === null ? lr = [o] : lr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = jf(o, s, t);
              la(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, p = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Rt === null || !Rt.has(p)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Df(o, u, t);
                la(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rd(n);
    } catch (x) {
      t = x, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function td() {
  var e = Dl.current;
  return Dl.current = jl, e === null ? jl : e;
}
function qu() {
  (re === 0 || re === 3 || re === 2) && (re = 4), ie === null || !(Zt & 268435455) && !(ro & 268435455) || xt(ie, ce);
}
function Bl(e, t) {
  var n = A;
  A |= 2;
  var r = td();
  (ie !== e || ce !== t) && (ut = null, Kt(e, t));
  do
    try {
      th();
      break;
    } catch (l) {
      ed(e, l);
    }
  while (1);
  if (Au(), A = n, Dl.current = r, te !== null)
    throw Error(S(261));
  return ie = null, ce = 0, re;
}
function th() {
  for (; te !== null; )
    nd(te);
}
function nh() {
  for (; te !== null && !Np(); )
    nd(te);
}
function nd(e) {
  var t = od(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? rd(e) : te = t, Gu.current = null;
}
function rd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Xm(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, te = null;
        return;
      }
    } else if (n = Ym(n, t, Oe), n !== null) {
      te = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  re === 0 && (re = 5);
}
function Bt(e, t, n) {
  var r = D, l = He.transition;
  try {
    He.transition = null, D = 1, rh(e, t, n, r);
  } finally {
    He.transition = l, D = r;
  }
  return null;
}
function rh(e, t, n, r) {
  do
    kn();
  while (Et !== null);
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
  if (jp(e, o), e === ie && (te = ie = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || el || (el = !0, id(xl, function() {
    return kn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = He.transition, He.transition = null;
    var i = D;
    D = 1;
    var u = A;
    A |= 4, Gu.current = null, Jm(e, n), Jf(n, e), _m(Ai), El = !!$i, Ai = $i = null, e.current = n, qm(n), Tp(), A = u, D = i, He.transition = o;
  } else
    e.current = n;
  if (el && (el = !1, Et = e, Ul = l), o = e.pendingLanes, o === 0 && (Rt = null), zp(n.stateNode), Ne(e, q()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Fl)
    throw Fl = !1, e = eu, eu = null, e;
  return Ul & 1 && e.tag !== 0 && kn(), o = e.pendingLanes, o & 1 ? e === tu ? or++ : (or = 0, tu = e) : or = 0, jt(), null;
}
function kn() {
  if (Et !== null) {
    var e = Ic(Ul), t = He.transition, n = D;
    try {
      if (He.transition = null, D = 16 > e ? 16 : e, Et === null)
        var r = !1;
      else {
        if (e = Et, Et = null, Ul = 0, A & 6)
          throw Error(S(331));
        var l = A;
        for (A |= 4, E = e.current; E !== null; ) {
          var o = E, i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, h, o);
                  }
                  var d = h.child;
                  if (d !== null)
                    d.return = h, E = d;
                  else
                    for (; E !== null; ) {
                      h = E;
                      var m = h.sibling, g = h.return;
                      if (Yf(h), h === a) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = g, E = m;
                        break;
                      }
                      E = g;
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
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, E = i;
          else
            e:
              for (; E !== null; ) {
                if (o = E, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, E = f;
                  break e;
                }
                E = o.return;
              }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null)
            p.return = i, E = p;
          else
            e:
              for (i = c; E !== null; ) {
                if (u = E, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        no(9, u);
                    }
                  } catch (x) {
                    Z(u, u.return, x);
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
        if (A = l, jt(), lt && typeof lt.onPostCommitFiberRoot == "function")
          try {
            lt.onPostCommitFiberRoot(Yl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      D = n, He.transition = t;
    }
  }
  return !1;
}
function Ca(e, t, n) {
  t = On(n, t), t = jf(e, t, 1), e = Ot(e, t, 1), t = Se(), e !== null && (Or(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3)
    Ca(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ca(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
          e = On(n, e), e = Df(t, e, 1), t = Ot(t, e, 1), e = Se(), t !== null && (Or(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > q() - Xu ? Kt(e, 0) : Yu |= n), Ne(e, t);
}
function ld(e, t) {
  t === 0 && (e.mode & 1 ? (t = Vr, Vr <<= 1, !(Vr & 130023424) && (Vr = 4194304)) : t = 1);
  var n = Se();
  e = mt(e, t), e !== null && (Or(e, t, n), Ne(e, n));
}
function oh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ld(e, n);
}
function ih(e, t) {
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
  r !== null && r.delete(t), ld(e, n);
}
var od;
od = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current)
      Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ee = !1, Gm(e, t, n);
      Ee = !!(e.flags & 131072);
    }
  else
    Ee = !1, W && t.flags & 1048576 && af(t, zl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      fl(e, t), e = t.pendingProps;
      var l = Cn(t, ve.current);
      Sn(t, n), l = Hu(null, t, r, e, l, n);
      var o = Wu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Ol(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ju(t), l.updater = to, t.stateNode = l, l._reactInternals = t, Wi(t, r, e, n), t = Qi(null, t, r, !0, o, n)) : (t.tag = 0, W && o && Ru(t), we(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = sh(r), e = Ge(r, e), l) {
          case 0:
            t = Ki(null, t, r, e, n);
            break e;
          case 1:
            t = ha(null, t, r, e, n);
            break e;
          case 11:
            t = pa(null, t, r, e, n);
            break e;
          case 14:
            t = ma(null, t, r, Ge(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), Ki(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), ha(e, t, r, l, n);
    case 3:
      e: {
        if (Hf(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, hf(e, t), Al(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = On(Error(S(423)), t), t = ya(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = On(Error(S(424)), t), t = ya(e, t, r, n, l);
            break e;
          } else
            for (ze = Tt(t.stateNode.containerInfo.firstChild), Le = t, W = !0, Xe = null, n = pf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === l) {
            t = ht(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return yf(t), e === null && Ui(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Mi(r, l) ? i = null : o !== null && Mi(r, o) && (t.flags |= 32), Bf(e, t), we(e, t, i, n), t.child;
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return Wf(e, t, n);
    case 4:
      return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), pa(e, t, r, l, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(Ll, r._currentValue), r._currentValue = i, o !== null)
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
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Bi(
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
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Bi(i, n, t), i = o.sibling;
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
        we(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Sn(t, n), l = We(l), r = r(l), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ge(r, t.pendingProps), l = Ge(r.type, l), ma(e, t, r, l, n);
    case 15:
      return Ff(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ge(r, l), fl(e, t), t.tag = 1, Pe(r) ? (e = !0, Ol(t)) : e = !1, Sn(t, n), If(t, r, l), Wi(t, r, l, n), Qi(null, t, r, !0, e, n);
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
function uh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new uh(e, t, n, r);
}
function bu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sh(e) {
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
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ml(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    bu(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case ln:
          return Qt(n.children, l, o, t);
        case gu:
          i = 8, l |= 8;
          break;
        case pi:
          return e = Be(12, n, t, l | 2), e.elementType = pi, e.lanes = o, e;
        case mi:
          return e = Be(13, n, t, l), e.elementType = mi, e.lanes = o, e;
        case hi:
          return e = Be(19, n, t, l), e.elementType = hi, e.lanes = o, e;
        case hc:
          return lo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case pc:
                i = 10;
                break e;
              case mc:
                i = 9;
                break e;
              case vu:
                i = 11;
                break e;
              case wu:
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
function lo(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = hc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function oi(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function ii(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ah(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uo(0), this.expirationTimes = Uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function es(e, t, n, r, l, o, i, u, s) {
  return e = new ah(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(o), e;
}
function ch(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ud(e) {
  if (!e)
    return At;
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
          if (Pe(t.type)) {
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
    if (Pe(n))
      return uf(e, n, t);
  }
  return t;
}
function sd(e, t, n, r, l, o, i, u, s) {
  return e = es(n, r, !0, e, l, o, i, u, s), e.context = ud(null), n = e.current, r = Se(), l = zt(n), o = ft(r, l), o.callback = t ?? null, Ot(n, o, l), e.current.lanes = l, Or(e, l, r), Ne(e, r), e;
}
function oo(e, t, n, r) {
  var l = t.current, o = Se(), i = zt(l);
  return n = ud(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(l, t, i), e !== null && (Je(e, l, i, o), sl(e, l, i)), i;
}
function Hl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ts(e, t) {
  Pa(e, t), (e = e.alternate) && Pa(e, t);
}
function fh() {
  return null;
}
var ad = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ns(e) {
  this._internalRoot = e;
}
io.prototype.render = ns.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  oo(e, t, null, null);
};
io.prototype.unmount = ns.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function() {
      oo(null, e, null, null);
    }), t[pt] = null;
  }
};
function io(e) {
  this._internalRoot = e;
}
io.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Bc(e);
  }
};
function rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function uo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Na() {
}
function dh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Hl(i);
        o.call(a);
      };
    }
    var i = sd(t, r, e, 0, null, !1, !1, "", Na);
    return e._reactRootContainer = i, e[pt] = i.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Hl(s);
      u.call(a);
    };
  }
  var s = es(e, 0, !1, null, null, !1, !1, "", Na);
  return e._reactRootContainer = s, e[pt] = s.current, hr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
    oo(t, s, n, r);
  }), s;
}
function so(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Hl(i);
        u.call(s);
      };
    }
    oo(t, i, e, l);
  } else
    i = dh(n, t, e, l, r);
  return Hl(i);
}
jc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (xu(t, n | 1), Ne(t, q()), !(A & 6) && (Rn = q() + 500, jt()));
      }
      break;
    case 13:
      Jt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var l = Se();
          Je(r, e, 1, l);
        }
      }), ts(e, 1);
  }
};
_u = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    ts(e, 134217728);
  }
};
Dc = function(e) {
  if (e.tag === 13) {
    var t = zt(e), n = mt(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    ts(e, t);
  }
};
Fc = function() {
  return D;
};
Uc = function(e, t) {
  var n = D;
  try {
    return D = e, t();
  } finally {
    D = n;
  }
};
Ci = function(e, t, n) {
  switch (t) {
    case "input":
      if (vi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ql(r);
            if (!l)
              throw Error(S(90));
            gc(r), vi(r, l);
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
Pc = Zu;
Nc = Jt;
var ph = { usingClientEntryPoint: !1, Events: [zr, an, ql, Ec, Cc, Zu] }, Kn = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mh = { bundleType: Kn.bundleType, version: Kn.version, rendererPackageName: Kn.rendererPackageName, rendererConfig: Kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Rc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Kn.findFiberByHostInstance || fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!tl.isDisabled && tl.supportsFiber)
    try {
      Yl = tl.inject(mh), lt = tl;
    } catch {
    }
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ph;
Me.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rs(t))
    throw Error(S(200));
  return ch(e, t, null, n);
};
Me.createRoot = function(e, t) {
  if (!rs(e))
    throw Error(S(299));
  var n = !1, r = "", l = ad;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = es(e, 1, !1, null, null, n, !1, r, l), e[pt] = t.current, hr(e.nodeType === 8 ? e.parentNode : e), new ns(t);
};
Me.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Rc(t), e = e === null ? null : e.stateNode, e;
};
Me.flushSync = function(e) {
  return Jt(e);
};
Me.hydrate = function(e, t, n) {
  if (!uo(t))
    throw Error(S(200));
  return so(null, e, t, !0, n);
};
Me.hydrateRoot = function(e, t, n) {
  if (!rs(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = ad;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = sd(t, null, e, 1, n ?? null, l, !1, o, i), e[pt] = t.current, hr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new io(t);
};
Me.render = function(e, t, n) {
  if (!uo(t))
    throw Error(S(200));
  return so(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function(e) {
  if (!uo(e))
    throw Error(S(40));
  return e._reactRootContainer ? (Jt(function() {
    so(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Me.unstable_batchedUpdates = Zu;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!uo(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return so(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function cd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd);
    } catch (e) {
      console.error(e);
    }
}
cd(), ac.exports = Me;
var hh = ac.exports, fd, Ta = hh;
fd = Ta.createRoot, Ta.hydrateRoot;
function yh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Oa = "$$material";
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
function ao(e, t) {
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
var gh = !1;
function vh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function wh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Sh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(l) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(l, o), r.tags.push(l);
    }, this.isSpeedy = n.speedy === void 0 ? !gh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(wh(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = vh(l);
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
}(), ye = "-ms-", Wl = "-moz-", M = "-webkit-", dd = "comm", ls = "rule", os = "decl", kh = "@import", pd = "@keyframes", xh = "@layer", _h = Math.abs, co = String.fromCharCode, Eh = Object.assign;
function Ch(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function md(e) {
  return e.trim();
}
function Ph(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function lu(e, t) {
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
function is(e) {
  return e.length;
}
function nl(e, t) {
  return t.push(e), e;
}
function Nh(e, t) {
  return e.map(t).join("");
}
var fo = 1, zn = 1, hd = 0, Te = 0, ee = 0, Mn = "";
function po(e, t, n, r, l, o, i) {
  return { value: e, root: t, parent: n, type: r, props: l, children: o, line: fo, column: zn, length: i, return: "" };
}
function Qn(e, t) {
  return Eh(po("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Th() {
  return ee;
}
function Oh() {
  return ee = Te > 0 ? ae(Mn, --Te) : 0, zn--, ee === 10 && (zn = 1, fo--), ee;
}
function $e() {
  return ee = Te < hd ? ae(Mn, Te++) : 0, zn++, ee === 10 && (zn = 1, fo++), ee;
}
function it() {
  return ae(Mn, Te);
}
function hl() {
  return Te;
}
function $r(e, t) {
  return Er(Mn, e, t);
}
function Cr(e) {
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
  return fo = zn = 1, hd = tt(Mn = e), Te = 0, [];
}
function gd(e) {
  return Mn = "", e;
}
function yl(e) {
  return md($r(Te - 1, ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Rh(e) {
  for (; (ee = it()) && ee < 33; )
    $e();
  return Cr(e) > 2 || Cr(ee) > 3 ? "" : " ";
}
function zh(e, t) {
  for (; --t && $e() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return $r(e, hl() + (t < 6 && it() == 32 && $e() == 32));
}
function ou(e) {
  for (; $e(); )
    switch (ee) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ou(ee);
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
function Lh(e, t) {
  for (; $e() && e + ee !== 47 + 10; )
    if (e + ee === 42 + 42 && it() === 47)
      break;
  return "/*" + $r(t, Te - 1) + "*" + co(e === 47 ? e : $e());
}
function $h(e) {
  for (; !Cr(it()); )
    $e();
  return $r(e, Te);
}
function Ah(e) {
  return gd(gl("", null, null, null, [""], e = yd(e), 0, [0], e));
}
function gl(e, t, n, r, l, o, i, u, s) {
  for (var a = 0, h = 0, d = i, m = 0, g = 0, v = 0, y = 1, P = 1, f = 1, c = 0, p = "", w = l, x = o, _ = r, k = p; P; )
    switch (v = c, c = $e()) {
      case 40:
        if (v != 108 && ae(k, d - 1) == 58) {
          lu(k += I(yl(c), "&", "&\f"), "&\f") != -1 && (f = -1);
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
        k += Rh(v);
        break;
      case 92:
        k += zh(hl() - 1, 7);
        continue;
      case 47:
        switch (it()) {
          case 42:
          case 47:
            nl(Mh(Lh($e(), hl()), t, n), s);
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
            f == -1 && (k = I(k, /\f/g, "")), g > 0 && tt(k) - d && nl(g > 32 ? za(k + ";", r, n, d - 1) : za(I(k, " ", "") + ";", r, n, d - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (nl(_ = Ra(k, t, n, a, h, l, u, p, w = [], x = [], d), o), c === 123)
              if (h === 0)
                gl(k, t, _, _, w, o, d, u, x);
              else
                switch (m === 99 && ae(k, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(e, _, _, r && nl(Ra(e, _, _, 0, 0, l, u, p, l, w = [], d), x), l, x, d, u, r ? w : x);
                    break;
                  default:
                    gl(k, _, _, _, [""], x, 0, u, x);
                }
        }
        a = h = g = 0, y = f = 1, p = k = "", d = i;
        break;
      case 58:
        d = 1 + tt(k), g = v;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Oh() == 125)
            continue;
        }
        switch (k += co(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(k) - 1) * f, f = 1;
            break;
          case 64:
            it() === 45 && (k += yl($e())), m = it(), h = d = tt(p = k += $h(hl())), c++;
            break;
          case 45:
            v === 45 && tt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function Ra(e, t, n, r, l, o, i, u, s, a, h) {
  for (var d = l - 1, m = l === 0 ? o : [""], g = is(m), v = 0, y = 0, P = 0; v < r; ++v)
    for (var f = 0, c = Er(e, d + 1, d = _h(y = i[v])), p = e; f < g; ++f)
      (p = md(y > 0 ? m[f] + " " + c : I(c, /&\f/g, m[f]))) && (s[P++] = p);
  return po(e, t, n, l === 0 ? ls : u, s, a, h);
}
function Mh(e, t, n) {
  return po(e, t, n, dd, co(Th()), Er(e, 2, -2), 0);
}
function za(e, t, n, r) {
  return po(e, t, n, os, Er(e, 0, r), Er(e, r + 1, -1), r);
}
function xn(e, t) {
  for (var n = "", r = is(e), l = 0; l < r; l++)
    n += t(e[l], l, e, t) || "";
  return n;
}
function Ih(e, t, n, r) {
  switch (e.type) {
    case xh:
      if (e.children.length)
        break;
    case kh:
    case os:
      return e.return = e.return || e.value;
    case dd:
      return "";
    case pd:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case ls:
      e.value = e.props.join(",");
  }
  return tt(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function jh(e) {
  var t = is(e);
  return function(n, r, l, o) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, l, o) || "";
    return i;
  };
}
function Dh(e) {
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
  for (var l = 0, o = 0; l = o, o = it(), l === 38 && o === 12 && (n[r] = 1), !Cr(o); )
    $e();
  return $r(t, Te);
}, Uh = function(t, n) {
  var r = -1, l = 44;
  do
    switch (Cr(l)) {
      case 0:
        l === 38 && it() === 12 && (n[r] = 1), t[r] += Fh(Te - 1, n, r);
        break;
      case 2:
        t[r] += yl(l);
        break;
      case 4:
        if (l === 44) {
          t[++r] = it() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += co(l);
    }
  while (l = $e());
  return t;
}, Bh = function(t, n) {
  return gd(Uh(yd(t), n));
}, La = /* @__PURE__ */ new WeakMap(), Hh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, l = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !La.get(r)) && !l) {
      La.set(t, !0);
      for (var o = [], i = Bh(n, o), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Wh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wd(e, t) {
  switch (Ch(e, t)) {
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
      return M + e + Wl + e + ye + e + e;
    case 6828:
    case 4268:
      return M + e + ye + e + e;
    case 6165:
      return M + e + ye + "flex-" + e + e;
    case 5187:
      return M + e + I(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return M + e + ye + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + ye + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + ye + I(e, "shrink", "negative") + e;
    case 5292:
      return M + e + ye + I(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + I(e, "-grow", "") + M + e + ye + I(e, "grow", "positive") + e;
    case 4554:
      return M + I(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
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
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45)
              break;
          case 102:
            return I(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Wl + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~lu(e, "stretch") ? wd(I(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, tt(e) - 3 - (~lu(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + M) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + ye + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + ye + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + ye + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + ye + e + e;
  }
  return e;
}
var Vh = function(t, n, r, l) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case os:
        t.return = wd(t.value, t.length);
        break;
      case pd:
        return xn([Qn(t, {
          value: I(t.value, "@", "@" + M)
        })], l);
      case ls:
        if (t.length)
          return Nh(t.props, function(o) {
            switch (Ph(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xn([Qn(t, {
                  props: [I(o, /:(read-\w+)/, ":" + Wl + "$1")]
                })], l);
              case "::placeholder":
                return xn([Qn(t, {
                  props: [I(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Qn(t, {
                  props: [I(o, /:(plac\w+)/, ":" + Wl + "$1")]
                }), Qn(t, {
                  props: [I(o, /:(plac\w+)/, ye + "input-$1")]
                })], l);
            }
            return "";
          });
    }
}, Kh = [Vh], Qh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var P = y.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var l = t.stylisPlugins || Kh, o = {}, i, u = [];
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
  var s, a = [Hh, Wh];
  {
    var h, d = [Ih, Dh(function(y) {
      h.insert(y);
    })], m = jh(a.concat(l, d)), g = function(P) {
      return xn(Ah(P), m);
    };
    s = function(P, f, c, p) {
      h = c, g(P ? P + "{" + f.styles + "}" : f.styles), p && (v.inserted[f.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Sh({
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
}, Sd = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, us = ue ? Symbol.for("react.element") : 60103, ss = ue ? Symbol.for("react.portal") : 60106, mo = ue ? Symbol.for("react.fragment") : 60107, ho = ue ? Symbol.for("react.strict_mode") : 60108, yo = ue ? Symbol.for("react.profiler") : 60114, go = ue ? Symbol.for("react.provider") : 60109, vo = ue ? Symbol.for("react.context") : 60110, as = ue ? Symbol.for("react.async_mode") : 60111, wo = ue ? Symbol.for("react.concurrent_mode") : 60111, So = ue ? Symbol.for("react.forward_ref") : 60112, ko = ue ? Symbol.for("react.suspense") : 60113, Gh = ue ? Symbol.for("react.suspense_list") : 60120, xo = ue ? Symbol.for("react.memo") : 60115, _o = ue ? Symbol.for("react.lazy") : 60116, Yh = ue ? Symbol.for("react.block") : 60121, Xh = ue ? Symbol.for("react.fundamental") : 60117, Zh = ue ? Symbol.for("react.responder") : 60118, Jh = ue ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case us:
        switch (e = e.type, e) {
          case as:
          case wo:
          case mo:
          case yo:
          case ho:
          case ko:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case vo:
              case So:
              case _o:
              case xo:
              case go:
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
function kd(e) {
  return je(e) === wo;
}
F.AsyncMode = as;
F.ConcurrentMode = wo;
F.ContextConsumer = vo;
F.ContextProvider = go;
F.Element = us;
F.ForwardRef = So;
F.Fragment = mo;
F.Lazy = _o;
F.Memo = xo;
F.Portal = ss;
F.Profiler = yo;
F.StrictMode = ho;
F.Suspense = ko;
F.isAsyncMode = function(e) {
  return kd(e) || je(e) === as;
};
F.isConcurrentMode = kd;
F.isContextConsumer = function(e) {
  return je(e) === vo;
};
F.isContextProvider = function(e) {
  return je(e) === go;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === us;
};
F.isForwardRef = function(e) {
  return je(e) === So;
};
F.isFragment = function(e) {
  return je(e) === mo;
};
F.isLazy = function(e) {
  return je(e) === _o;
};
F.isMemo = function(e) {
  return je(e) === xo;
};
F.isPortal = function(e) {
  return je(e) === ss;
};
F.isProfiler = function(e) {
  return je(e) === yo;
};
F.isStrictMode = function(e) {
  return je(e) === ho;
};
F.isSuspense = function(e) {
  return je(e) === ko;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === mo || e === wo || e === yo || e === ho || e === ko || e === Gh || typeof e == "object" && e !== null && (e.$$typeof === _o || e.$$typeof === xo || e.$$typeof === go || e.$$typeof === vo || e.$$typeof === So || e.$$typeof === Xh || e.$$typeof === Zh || e.$$typeof === Jh || e.$$typeof === Yh);
};
F.typeOf = je;
Sd.exports = F;
var qh = Sd.exports, xd = qh, bh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ey = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _d = {};
_d[xd.ForwardRef] = bh;
_d[xd.Memo] = ey;
var ty = !0;
function Ed(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(l) {
    e[l] !== void 0 ? t.push(e[l] + ";") : l && (r += l + " ");
  }), r;
}
var cs = function(t, n, r) {
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
  ty === !1) && t.registered[l] === void 0 && (t.registered[l] = n.styles);
}, fs = function(t, n, r) {
  cs(t, n, r);
  var l = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + l : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function ny(e) {
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
var ry = {
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
}, ly = !1, oy = /[A-Z]|^ms/g, iy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cd = function(t) {
  return t.charCodeAt(1) === 45;
}, $a = function(t) {
  return t != null && typeof t != "boolean";
}, ui = /* @__PURE__ */ vd(function(e) {
  return Cd(e) ? e : e.replace(oy, "-$&").toLowerCase();
}), Aa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(iy, function(r, l, o) {
          return nt = {
            name: l,
            styles: o,
            next: nt
          }, l;
        });
  }
  return ry[t] !== 1 && !Cd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, uy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return sy(e, t, n);
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
function sy(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var l = 0; l < n.length; l++)
      r += Pr(e, t, n[l]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : $a(u) && (r += ui(o) + ":" + Aa(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && ly)
          throw new Error(uy);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            $a(i[s]) && (r += ui(o) + ":" + Aa(o, i[s]) + ";");
        else {
          var a = Pr(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += ui(o) + ":" + a + ";";
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
var Ma = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function Eo(e, t, n) {
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
  Ma.lastIndex = 0;
  for (var a = "", h; (h = Ma.exec(l)) !== null; )
    a += "-" + h[1];
  var d = ny(l) + a;
  return {
    name: d,
    styles: l,
    next: nt
  };
}
var ay = function(t) {
  return t();
}, Pd = fi["useInsertionEffect"] ? fi["useInsertionEffect"] : !1, Nd = Pd || ay, Ia = Pd || O.useLayoutEffect, cy = !1, Td = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Qh({
    key: "css"
  }) : null
);
Td.Provider;
var ds = function(t) {
  return /* @__PURE__ */ O.forwardRef(function(n, r) {
    var l = O.useContext(Td);
    return t(n, l, r);
  });
}, Ar = /* @__PURE__ */ O.createContext({}), ps = {}.hasOwnProperty, iu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fy = function(t, n) {
  var r = {};
  for (var l in n)
    ps.call(n, l) && (r[l] = n[l]);
  return r[iu] = t, r;
}, dy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return cs(n, r, l), Nd(function() {
    return fs(n, r, l);
  }), null;
}, py = /* @__PURE__ */ ds(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var l = e[iu], o = [r], i = "";
  typeof e.className == "string" ? i = Ed(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var u = Eo(o, void 0, O.useContext(Ar));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ps.call(e, a) && a !== "css" && a !== iu && !cy && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(dy, {
    cache: t,
    serialized: u,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ O.createElement(l, s));
}), my = py, si = { exports: {} }, ja;
function hy() {
  return ja || (ja = 1, function(e) {
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
  }(si)), si.exports;
}
hy();
var Da = function(t, n) {
  var r = arguments;
  if (n == null || !ps.call(n, "css"))
    return O.createElement.apply(void 0, r);
  var l = r.length, o = new Array(l);
  o[0] = my, o[1] = fy(t, n);
  for (var i = 2; i < l; i++)
    o[i] = r[i];
  return O.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Da || (Da = {}));
var yy = /* @__PURE__ */ ds(function(e, t) {
  var n = e.styles, r = Eo([n], void 0, O.useContext(Ar)), l = O.useRef();
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
    if (r.next !== void 0 && fs(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), gy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vy = /* @__PURE__ */ vd(
  function(e) {
    return gy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wy = !1, Sy = vy, ky = function(t) {
  return t !== "theme";
}, Fa = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Sy : ky;
}, Ua = function(t, n, r) {
  var l;
  if (n) {
    var o = n.shouldForwardProp;
    l = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof l != "function" && r && (l = t.__emotion_forwardProp), l;
}, xy = function(t) {
  var n = t.cache, r = t.serialized, l = t.isStringTag;
  return cs(n, r, l), Nd(function() {
    return fs(n, r, l);
  }), null;
}, _y = function e(t, n) {
  var r = t.__emotion_real === t, l = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var u = Ua(t, n, r), s = u || Fa(l), a = !s("as");
  return function() {
    var h = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      d.push.apply(d, h);
    else {
      var m = h[0];
      d.push(m[0]);
      for (var g = h.length, v = 1; v < g; v++)
        d.push(h[v], m[v]);
    }
    var y = ds(function(P, f, c) {
      var p = a && P.as || l, w = "", x = [], _ = P;
      if (P.theme == null) {
        _ = {};
        for (var k in P)
          _[k] = P[k];
        _.theme = O.useContext(Ar);
      }
      typeof P.className == "string" ? w = Ed(f.registered, x, P.className) : P.className != null && (w = P.className + " ");
      var N = Eo(d.concat(x), f.registered, _);
      w += f.key + "-" + N.name, i !== void 0 && (w += " " + i);
      var V = a && u === void 0 ? Fa(p) : s, z = {};
      for (var pe in P)
        a && pe === "as" || V(pe) && (z[pe] = P[pe]);
      return z.className = w, c && (z.ref = c), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(xy, {
        cache: f,
        serialized: N,
        isStringTag: typeof p == "string"
      }), /* @__PURE__ */ O.createElement(p, z));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof l == "string" ? l : l.displayName || l.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = l, y.__emotion_styles = d, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return i === void 0 && wy ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), y.withComponent = function(P, f) {
      var c = e(P, fe({}, n, f, {
        shouldForwardProp: Ua(y, f, !0)
      }));
      return c.apply(void 0, d);
    }, y;
  };
}, Ey = [
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
], Ba = _y.bind(null);
Ey.forEach(function(e) {
  Ba[e] = Ba(e);
});
function Cy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Py(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ T(yy, {
    styles: typeof t == "function" ? (l) => t(Cy(l) ? n : l) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ha = [];
function Ny(e) {
  return Ha[0] = e, Eo(Ha);
}
function nn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Od(e) {
  if (/* @__PURE__ */ O.isValidElement(e) || !nn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Od(e[n]);
  }), t;
}
function Vl(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? fe({}, e) : e;
  return nn(e) && nn(t) && Object.keys(t).forEach((l) => {
    /* @__PURE__ */ O.isValidElement(t[l]) ? r[l] = t[l] : nn(t[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, l) && nn(e[l]) ? r[l] = Vl(e[l], t[l], n) : n.clone ? r[l] = nn(t[l]) ? Od(t[l]) : t[l] : r[l] = t[l];
  }), r;
}
const Ty = ["values", "unit", "step"], Oy = (e) => {
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
  } = e, l = ao(e, Ty), o = Oy(t), i = Object.keys(o);
  function u(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function s(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function a(m, g) {
    const v = i.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : g) - r / 100}${n})`;
  }
  function h(m) {
    return i.indexOf(m) + 1 < i.length ? a(m, i[i.indexOf(m) + 1]) : u(m);
  }
  function d(m) {
    const g = i.indexOf(m);
    return g === 0 ? u(i[1]) : g === i.length - 1 ? s(i[g]) : a(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return fe({
    keys: i,
    values: o,
    up: u,
    down: s,
    between: a,
    only: h,
    not: d,
    unit: n
  }, l);
}
const zy = {
  borderRadius: 4
}, Ly = zy;
function ir(e, t) {
  return t ? Vl(e, t, {
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
}, Wa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ms[e]}px)`
};
function yt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Wa;
    return t.reduce((i, u, s) => (i[o.up(o.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Wa;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(o.values || ms).indexOf(u) !== -1) {
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
function $y(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, l) => {
    const o = e.up(l);
    return r[o] = {}, r;
  }, {})) || {};
}
function Va(e, t) {
  return e.reduce((n, r) => {
    const l = n[r];
    return (!l || Object.keys(l).length === 0) && delete n[r], n;
  }, t);
}
function Rd(e) {
  if (typeof e != "string")
    throw new Error(yh(7));
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
function Kl(e, t, n, r = n) {
  let l;
  return typeof e == "function" ? l = e(n) : Array.isArray(e) ? l = e[n] || r : l = Co(e, n) || r, t && (l = t(l, r, e)), l;
}
function b(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: l
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Co(s, r) || {};
    return yt(i, u, (d) => {
      let m = Kl(a, l, d);
      return d === m && typeof d == "string" && (m = Kl(a, l, `${t}${d === "default" ? "" : Rd(d)}`, d)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function Ay(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const My = {
  m: "margin",
  p: "padding"
}, Iy = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ka = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jy = Ay((e) => {
  if (e.length > 2)
    if (Ka[e])
      e = Ka[e];
    else
      return [e];
  const [t, n] = e.split(""), r = My[t], l = Iy[n] || "";
  return Array.isArray(l) ? l.map((o) => r + o) : [r + l];
}), hs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hs, ...ys];
function Mr(e, t, n, r) {
  var l;
  const o = (l = Co(e, t, !1)) != null ? l : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : o * i : Array.isArray(o) ? (i) => typeof i == "string" ? i : o[i] : typeof o == "function" ? o : () => {
  };
}
function zd(e) {
  return Mr(e, "spacing", 8);
}
function Ir(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Dy(e, t) {
  return (n) => e.reduce((r, l) => (r[l] = Ir(t, n), r), {});
}
function Fy(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const l = jy(n), o = Dy(l, r), i = e[n];
  return yt(e, i, o);
}
function Ld(e, t) {
  const n = zd(e.theme);
  return Object.keys(e).map((r) => Fy(e, t, r, n)).reduce(ir, {});
}
function Y(e) {
  return Ld(e, hs);
}
Y.propTypes = {};
Y.filterProps = hs;
function X(e) {
  return Ld(e, ys);
}
X.propTypes = {};
X.filterProps = ys;
function Uy(e = 8) {
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
function Po(...e) {
  const t = e.reduce((r, l) => (l.filterProps.forEach((o) => {
    r[o] = l;
  }), r), {}), n = (r) => Object.keys(r).reduce((l, o) => t[o] ? ir(l, t[o](r)) : l, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, l) => r.concat(l.filterProps), []), n;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return b({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const By = Ke("border", Ue), Hy = Ke("borderTop", Ue), Wy = Ke("borderRight", Ue), Vy = Ke("borderBottom", Ue), Ky = Ke("borderLeft", Ue), Qy = Ke("borderColor"), Gy = Ke("borderTopColor"), Yy = Ke("borderRightColor"), Xy = Ke("borderBottomColor"), Zy = Ke("borderLeftColor"), Jy = Ke("outline", Ue), qy = Ke("outlineColor"), No = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Mr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ir(t, r)
    });
    return yt(e, e.borderRadius, n);
  }
  return null;
};
No.propTypes = {};
No.filterProps = ["borderRadius"];
Po(By, Hy, Wy, Vy, Ky, Qy, Gy, Yy, Xy, Zy, No, Jy, qy);
const To = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      gap: Ir(t, r)
    });
    return yt(e, e.gap, n);
  }
  return null;
};
To.propTypes = {};
To.filterProps = ["gap"];
const Oo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ir(t, r)
    });
    return yt(e, e.columnGap, n);
  }
  return null;
};
Oo.propTypes = {};
Oo.filterProps = ["columnGap"];
const Ro = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Mr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ir(t, r)
    });
    return yt(e, e.rowGap, n);
  }
  return null;
};
Ro.propTypes = {};
Ro.filterProps = ["rowGap"];
const by = b({
  prop: "gridColumn"
}), eg = b({
  prop: "gridRow"
}), tg = b({
  prop: "gridAutoFlow"
}), ng = b({
  prop: "gridAutoColumns"
}), rg = b({
  prop: "gridAutoRows"
}), lg = b({
  prop: "gridTemplateColumns"
}), og = b({
  prop: "gridTemplateRows"
}), ig = b({
  prop: "gridTemplateAreas"
}), ug = b({
  prop: "gridArea"
});
Po(To, Oo, Ro, by, eg, tg, ng, rg, lg, og, ig, ug);
function _n(e, t) {
  return t === "grey" ? t : e;
}
const sg = b({
  prop: "color",
  themeKey: "palette",
  transform: _n
}), ag = b({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: _n
}), cg = b({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: _n
});
Po(sg, ag, cg);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fg = b({
  prop: "width",
  transform: Re
}), gs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, l;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ms[n];
      return o ? ((l = e.theme) == null || (l = l.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Re(n)
      };
    };
    return yt(e, e.maxWidth, t);
  }
  return null;
};
gs.filterProps = ["maxWidth"];
const dg = b({
  prop: "minWidth",
  transform: Re
}), pg = b({
  prop: "height",
  transform: Re
}), mg = b({
  prop: "maxHeight",
  transform: Re
}), hg = b({
  prop: "minHeight",
  transform: Re
});
b({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
b({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const yg = b({
  prop: "boxSizing"
});
Po(fg, gs, dg, pg, mg, hg, yg);
const gg = {
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
    style: No
  },
  // palette
  color: {
    themeKey: "palette",
    transform: _n
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: _n
  },
  backgroundColor: {
    themeKey: "palette",
    transform: _n
  },
  // spacing
  p: {
    style: X
  },
  pt: {
    style: X
  },
  pr: {
    style: X
  },
  pb: {
    style: X
  },
  pl: {
    style: X
  },
  px: {
    style: X
  },
  py: {
    style: X
  },
  padding: {
    style: X
  },
  paddingTop: {
    style: X
  },
  paddingRight: {
    style: X
  },
  paddingBottom: {
    style: X
  },
  paddingLeft: {
    style: X
  },
  paddingX: {
    style: X
  },
  paddingY: {
    style: X
  },
  paddingInline: {
    style: X
  },
  paddingInlineStart: {
    style: X
  },
  paddingInlineEnd: {
    style: X
  },
  paddingBlock: {
    style: X
  },
  paddingBlockStart: {
    style: X
  },
  paddingBlockEnd: {
    style: X
  },
  m: {
    style: Y
  },
  mt: {
    style: Y
  },
  mr: {
    style: Y
  },
  mb: {
    style: Y
  },
  ml: {
    style: Y
  },
  mx: {
    style: Y
  },
  my: {
    style: Y
  },
  margin: {
    style: Y
  },
  marginTop: {
    style: Y
  },
  marginRight: {
    style: Y
  },
  marginBottom: {
    style: Y
  },
  marginLeft: {
    style: Y
  },
  marginX: {
    style: Y
  },
  marginY: {
    style: Y
  },
  marginInline: {
    style: Y
  },
  marginInlineStart: {
    style: Y
  },
  marginInlineEnd: {
    style: Y
  },
  marginBlock: {
    style: Y
  },
  marginBlockStart: {
    style: Y
  },
  marginBlockEnd: {
    style: Y
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
    style: To
  },
  rowGap: {
    style: Ro
  },
  columnGap: {
    style: Oo
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
}, $d = gg;
function vg(...e) {
  const t = e.reduce((r, l) => r.concat(Object.keys(l)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function wg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sg() {
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
      style: d
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Co(l, a) || {};
    return d ? d(i) : yt(i, r, (v) => {
      let y = Kl(m, h, v);
      return v === y && typeof v == "string" && (y = Kl(m, h, `${n}${v === "default" ? "" : Rd(v)}`, v)), s === !1 ? y : {
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
    const u = (r = o.unstable_sxConfig) != null ? r : $d;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const d = $y(o.breakpoints), m = Object.keys(d);
      let g = d;
      return Object.keys(h).forEach((v) => {
        const y = wg(h[v], o);
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
              vg(P, y) ? g[v] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : g = ir(g, P);
            }
          else
            g = ir(g, e(v, y, o, u));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Va(m, g)
      } : Va(m, g);
    }
    return Array.isArray(l) ? l.map(s) : s(l);
  }
  return t;
}
const Ad = Sg();
Ad.filterProps = ["sx"];
const kg = Ad;
function xg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const _g = ["breakpoints", "palette", "spacing", "shape"];
function Eg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: l,
    shape: o = {}
  } = e, i = ao(e, _g), u = Ry(n), s = Uy(l);
  let a = Vl({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, r),
    spacing: s,
    shape: fe({}, Ly, o)
  }, i);
  return a.applyStyles = xg, a = t.reduce((h, d) => Vl(h, d), a), a.unstable_sxConfig = fe({}, $d, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(d) {
    return kg({
      sx: d,
      theme: this
    });
  }, a;
}
function Cg(e) {
  return Object.keys(e).length === 0;
}
function vs(e = null) {
  const t = O.useContext(Ar);
  return !t || Cg(t) ? e : t;
}
const Pg = Eg();
function Ng(e = Pg) {
  return vs(e);
}
function ai(e) {
  const t = Ny(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Tg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ng(n), l = t && r[t] || r;
  let o = typeof e == "function" ? e(l) : e;
  return l.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => ai(typeof i == "function" ? i(l) : i)) : o = ai(o)), /* @__PURE__ */ T(Py, {
    styles: o
  });
}
const Og = typeof window < "u" ? O.useLayoutEffect : O.useEffect, Rg = Og;
let Qa = 0;
function zg(e) {
  const [t, n] = O.useState(e), r = e || t;
  return O.useEffect(() => {
    t == null && (Qa += 1, n(`mui-${Qa}`));
  }, [t]), r;
}
const Ga = fi["useId".toString()];
function Lg(e) {
  if (Ga !== void 0) {
    const t = Ga();
    return e ?? t;
  }
  return zg(e);
}
const $g = /* @__PURE__ */ O.createContext(null), Md = $g;
function Id() {
  return O.useContext(Md);
}
const Ag = typeof Symbol == "function" && Symbol.for, Mg = Ag ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Ig(e, t) {
  return typeof t == "function" ? t(e) : fe({}, e, t);
}
function jg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Id(), l = O.useMemo(() => {
    const o = r === null ? n : Ig(r, n);
    return o != null && (o[Mg] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ T(Md.Provider, {
    value: l,
    children: t
  });
}
const Dg = ["value"], Fg = /* @__PURE__ */ O.createContext();
function Ug(e) {
  let {
    value: t
  } = e, n = ao(e, Dg);
  return /* @__PURE__ */ T(Fg.Provider, fe({
    value: t ?? !0
  }, n));
}
const Bg = /* @__PURE__ */ O.createContext(void 0);
function Hg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ T(Bg.Provider, {
    value: e,
    children: t
  });
}
function Wg(e) {
  const t = vs(), n = Lg() || "", {
    modularCssLayers: r
  } = e;
  let l = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? l = "" : typeof r == "string" ? l = r.replace(/mui(?!\.)/g, l) : l = `@layer ${l};`, Rg(() => {
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
  }, [l, n]), l ? /* @__PURE__ */ T(Tg, {
    styles: l
  }) : null;
}
const Ya = {};
function Xa(e, t, n, r = !1) {
  return O.useMemo(() => {
    const l = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(l), i = e ? fe({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? fe({}, t, {
      [e]: n
    }) : fe({}, t, n);
  }, [e, t, n, r]);
}
function Vg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, l = vs(Ya), o = Id() || Ya, i = Xa(r, l, n), u = Xa(r, o, n, !0), s = i.direction === "rtl", a = Wg(i);
  return /* @__PURE__ */ T(jg, {
    theme: u,
    children: /* @__PURE__ */ T(Ar.Provider, {
      value: i,
      children: /* @__PURE__ */ T(Ug, {
        value: s,
        children: /* @__PURE__ */ j(Hg, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Kg = ["theme"];
function Qg(e) {
  let {
    theme: t
  } = e, n = ao(e, Kg);
  const r = t[Oa];
  let l = r || t;
  return typeof t != "function" && (r && !r.vars ? l = fe({}, r, {
    vars: null
  }) : t && !t.vars && (l = fe({}, t, {
    vars: null
  }))), /* @__PURE__ */ T(Vg, fe({}, n, {
    themeId: r ? Oa : void 0,
    theme: l
  }));
}
const Gg = [
  "apiBaseUrl",
  "apiToken",
  "brandName",
  "brandGuidelines",
  "nameProperty",
  "fileNameProperty",
  "descriptionProperty"
], Yg = ["config", "settings", "json", "componentOptions"], Xg = [
  /^optional-/i,
  /^your[-_]/i,
  /^https?:\/\/your/i,
  /^same-as-/i
];
function jd(e) {
  const t = e.trim();
  return t ? Xg.some((n) => n.test(t)) : !0;
}
function Dd(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return !1;
  const t = e;
  return typeof t.setEntityId == "function" || typeof t.setCulture == "function" || "entityId" in t && "culture" in t && "editingMode" in t;
}
function Nr(e) {
  if (e != null) {
    if (typeof e == "string")
      return e.trim() || void 0;
    if (typeof e == "number" || typeof e == "boolean")
      return String(e);
    if (Array.isArray(e)) {
      for (const t of e) {
        const n = Nr(t);
        if (n)
          return n;
      }
      return;
    }
    if (typeof e == "object") {
      const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us"];
      for (const r of n)
        if (r in t) {
          const l = Nr(t[r]);
          if (l)
            return l;
        }
    }
  }
}
function Zg(e, ...t) {
  for (const n of t)
    for (const [r, l] of Object.entries(e))
      if (r.toLowerCase() === n.toLowerCase()) {
        const o = Nr(l);
        if (o && !jd(o))
          return o;
      }
}
function Jg(e) {
  for (const [t, n] of Object.entries(e)) {
    if (t.toLowerCase() !== "metadataproperties")
      continue;
    if (Array.isArray(n)) {
      const l = n.map((o) => Nr(o)).filter((o) => !!o);
      if (l.length > 0)
        return l.join(", ");
    }
    const r = Nr(n);
    if (r && !jd(r))
      return r;
  }
}
function qg(e) {
  const t = {};
  for (const r of Gg) {
    const l = Zg(e, r);
    l && (t[r] = l);
  }
  const n = Jg(e);
  return n && (t.metadataProperties = n), t;
}
function uu(...e) {
  return e.reduce((t, n) => n ? {
    ...t,
    ...Object.fromEntries(
      Object.entries(n).filter(([, r]) => r != null && r !== "")
    )
  } : t, {});
}
function vl(e) {
  if (!e || Dd(e))
    return;
  if (typeof e == "string") {
    const r = e.trim();
    if (!r)
      return;
    try {
      return vl(JSON.parse(r));
    } catch {
      console.error(
        "[CHBrandCompliance] Options must be valid JSON when provided as a string."
      );
      return;
    }
  }
  if (typeof e != "object" || Array.isArray(e))
    return;
  const t = e;
  let n = qg(t);
  for (const r of Yg) {
    const l = t[r];
    if (typeof l == "string" && l.trim())
      try {
        const o = vl(JSON.parse(l));
        n = uu(n, o);
      } catch {
      }
    else
      l && typeof l == "object" && (n = uu(n, vl(l)));
  }
  return n;
}
function bg(e, t) {
  const n = [];
  (t == null ? void 0 : t.config) != null && n.push(t.config), e != null && !Dd(e) && n.push(e), t && n.push(t);
  const r = uu(...n.map((l) => vl(l)));
  return Object.keys(r).length > 0 ? r : void 0;
}
function ev(e) {
  var n, r;
  const t = [];
  return (n = e == null ? void 0 : e.apiBaseUrl) != null && n.trim() || t.push("apiBaseUrl"), (r = e == null ? void 0 : e.apiToken) != null && r.trim() || t.push("apiToken"), t;
}
function tv(e) {
  return e && {
    ...e,
    apiToken: e.apiToken ? "[set]" : void 0
  };
}
function nv(e) {
  return e != null && e.trim() ? e.split(/[,;\n]/).map((t) => t.trim()).filter(Boolean) : [];
}
const su = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview"
], rv = ["FileName", "fileName", "Title", "title", "Name", "name"], lv = ["FileName", "fileName"], ov = [
  "Description",
  "description",
  "AssetDescription",
  "Summary",
  "summary"
];
function au(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function zo(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e, n = [
    "Invariant",
    "invariant",
    "_value",
    "value",
    "en-US",
    "en-us",
    "en"
  ];
  for (const l of n)
    if (l in t) {
      const o = zo(t[l]);
      if (o != null && typeof o != "object" || typeof o == "string" && o.trim())
        return o;
    }
  return Object.values(t).find(
    (l) => typeof l == "string" && l.trim() || typeof l == "number" || typeof l == "boolean"
  );
}
function tn(e, t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = zo(e[n]);
    if (r == null || typeof r == "object")
      continue;
    const l = String(r).trim();
    if (l && l !== "[object Object]")
      return l;
  }
  return "";
}
function Fd(e) {
  var n;
  if (e == null || typeof e != "object")
    return;
  const t = e;
  for (const r of su) {
    const l = t[r];
    if (!Array.isArray(l) || l.length === 0)
      continue;
    const o = au(((n = l[0]) == null ? void 0 : n.href) ?? l[0]);
    if (o)
      return o;
  }
}
function iv(e) {
  var n, r, l, o, i, u, s;
  for (const a of su)
    try {
      const h = (n = e == null ? void 0 : e.getRendition) == null ? void 0 : n.call(e, a), d = au((l = (r = h == null ? void 0 : h.items) == null ? void 0 : r[0]) == null ? void 0 : l.href);
      if (d)
        return d;
    } catch {
    }
  if (Array.isArray(e == null ? void 0 : e.renditions))
    for (const a of su) {
      const h = e.renditions.find((m) => (m == null ? void 0 : m.name) === a), d = au((i = (o = h == null ? void 0 : h.items) == null ? void 0 : o[0]) == null ? void 0 : i.href);
      if (d)
        return d;
    }
  const t = Fd(e == null ? void 0 : e.renditions);
  if (t)
    return t;
  try {
    const a = ((u = e == null ? void 0 : e.getPublicLink) == null ? void 0 : u.call(e, "preview")) ?? ((s = e == null ? void 0 : e.getPublicLink) == null ? void 0 : s.call(e, "thumbnail"));
    return typeof a == "string" ? a : void 0;
  } catch {
    return;
  }
}
async function uv(e, t, n) {
  var l;
  const r = iv(t);
  if (r)
    return r;
  if ((l = e == null ? void 0 : e.raw) != null && l.getAsync)
    try {
      const o = await e.raw.getAsync(`/api/entities/${n}`);
      if (o.isSuccessStatusCode && o.content)
        return Fd(o.content.renditions);
    } catch {
    }
}
function Ql(e) {
  if (e == null)
    return "";
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") {
    const t = String(e).trim();
    return t === "[object Object]" ? "" : t;
  }
  if (typeof e == "object") {
    const t = zo(e);
    if (t != null && t !== e)
      return Ql(t);
  }
  return "";
}
function sv(e, t) {
  return e ? (t.length > 0 ? t : Object.keys(e).slice(0, 12)).map((r) => {
    const l = Ql(zo(e[r]));
    return l ? { key: r, value: l } : null;
  }).filter((r) => r != null) : [];
}
function av(e) {
  var r;
  const t = Ql((r = e == null ? void 0 : e.definition) == null ? void 0 : r.name);
  if (t)
    return t;
  const n = Ql(e == null ? void 0 : e.definitionName);
  return n || (typeof (e == null ? void 0 : e.definition) == "string" ? e.definition.trim() : "");
}
async function cv(e, t, n) {
  var d;
  const r = String(((d = t == null ? void 0 : t.systemProperties) == null ? void 0 : d.id) ?? (t == null ? void 0 : t.id) ?? "").trim();
  if (!r)
    return null;
  const l = (t == null ? void 0 : t.properties) ?? {}, o = n.nameProperty ? [n.nameProperty] : rv, i = n.fileNameProperty ? [n.fileNameProperty] : lv, u = n.descriptionProperty ? [n.descriptionProperty] : ov, s = nv(n.metadataProperties), a = await uv(e, t, r), h = tn(l, o) || tn(l, i) || `Asset ${r}`;
  return {
    id: r,
    name: h,
    fileName: tn(l, i) || void 0,
    mimeType: tn(l, ["MimeType", "mimeType", "ContentType", "contentType"]) || void 0,
    description: tn(l, u) || void 0,
    previewUrl: a,
    definition: tn(l, ["Definition", "definition"]) || av(t) || void 0,
    metadata: sv(l, s)
  };
}
function fv(e) {
  return e.replace(/\/$/, "");
}
async function dv(e, t, n) {
  const r = `${fv(e.apiBaseUrl)}${t}`, l = await fetch(r, {
    ...n,
    headers: {
      Authorization: `Bearer ${e.apiToken}`,
      "Content-Type": "application/json",
      ...(n == null ? void 0 : n.headers) ?? {}
    }
  }), o = await l.json();
  if (!l.ok)
    throw new Error(o.error ?? `Request failed (${l.status})`);
  return o;
}
async function pv(e, t) {
  return (await dv(
    e,
    "/api/brand-compliance/analyze",
    {
      method: "POST",
      body: JSON.stringify(t)
    }
  )).report;
}
const ci = [
  "Reviewing logo placement against the brand bible…",
  "Checking if this shade of blue is actually Cytiva blue…",
  "Consulting the CodeMie brand compliance agent…",
  "Scanning metadata for rogue fonts…",
  "Measuring whitespace with digital calipers…",
  "Verifying disclaimers are where legal expects them…",
  "Cross-referencing color codes with the style guide…",
  "Politely judging your kerning choices…",
  "Almost there — aligning pixels with brand standards…"
];
function mv(e, t = 2800) {
  const [n, r] = O.useState(0);
  return O.useEffect(() => {
    if (!e) {
      r(0);
      return;
    }
    const l = () => {
      r((i) => {
        if (ci.length <= 1)
          return 0;
        let u = i;
        for (; u === i; )
          u = Math.floor(Math.random() * ci.length);
        return u;
      });
    }, o = window.setInterval(l, t);
    return () => window.clearInterval(o);
  }, [e, t]), ci[n];
}
function Za({
  active: e,
  label: t = "Loading…",
  className: n = "ch-brand-compliance__empty"
}) {
  const r = mv(e);
  return /* @__PURE__ */ T("div", { className: n, role: "status", "aria-live": "polite", "aria-busy": "true", children: /* @__PURE__ */ j("div", { className: "ch-brand-compliance__loading", children: [
    /* @__PURE__ */ T("div", { className: "ch-brand-compliance__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ T("p", { className: "ch-brand-compliance__loading-label", children: e ? r : t })
  ] }) });
}
function hv(e) {
  var r, l, o, i, u, s, a, h;
  const t = (r = e == null ? void 0 : e.apiBaseUrl) == null ? void 0 : r.trim(), n = (l = e == null ? void 0 : e.apiToken) == null ? void 0 : l.trim();
  return !t || !n ? null : {
    apiBaseUrl: t,
    apiToken: n,
    brandName: ((o = e == null ? void 0 : e.brandName) == null ? void 0 : o.trim()) || "Cytiva",
    brandGuidelines: (i = e == null ? void 0 : e.brandGuidelines) == null ? void 0 : i.trim(),
    nameProperty: (u = e == null ? void 0 : e.nameProperty) == null ? void 0 : u.trim(),
    fileNameProperty: (s = e == null ? void 0 : e.fileNameProperty) == null ? void 0 : s.trim(),
    descriptionProperty: (a = e == null ? void 0 : e.descriptionProperty) == null ? void 0 : a.trim(),
    metadataProperties: (h = e == null ? void 0 : e.metadataProperties) == null ? void 0 : h.trim()
  };
}
function yv(e) {
  return new Date(e).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function gv(e) {
  switch (e) {
    case "pass":
      return "Compliant";
    case "warning":
      return "Needs review";
    case "fail":
      return "Non-compliant";
    default:
      return e;
  }
}
function vv(e) {
  switch (e) {
    case "critical":
      return "Critical";
    case "major":
      return "Major";
    case "minor":
      return "Minor";
    default:
      return e;
  }
}
function wv({ score: e, status: t }) {
  const r = 2 * Math.PI * 42, l = Math.max(0, Math.min(100, e)), o = r - l / 100 * r;
  return /* @__PURE__ */ j("div", { className: `ch-brand-compliance__score ch-brand-compliance__score--${t}`, children: [
    /* @__PURE__ */ j("svg", { viewBox: "0 0 100 100", "aria-hidden": "true", children: [
      /* @__PURE__ */ T("circle", { className: "ch-brand-compliance__score-track", cx: "50", cy: "50", r: 42 }),
      /* @__PURE__ */ T(
        "circle",
        {
          className: "ch-brand-compliance__score-progress",
          cx: "50",
          cy: "50",
          r: 42,
          strokeDasharray: `${r} ${r}`,
          strokeDashoffset: o
        }
      )
    ] }),
    /* @__PURE__ */ j("div", { className: "ch-brand-compliance__score-value", children: [
      /* @__PURE__ */ T("strong", { children: Math.round(e) }),
      /* @__PURE__ */ T("span", { children: "score" })
    ] })
  ] });
}
function Sv({ issue: e }) {
  return /* @__PURE__ */ j("article", { className: `ch-brand-compliance__issue ch-brand-compliance__issue--${e.severity}`, children: [
    /* @__PURE__ */ j("div", { className: "ch-brand-compliance__issue-header", children: [
      /* @__PURE__ */ T("span", { className: "ch-brand-compliance__badge", children: vv(e.severity) }),
      /* @__PURE__ */ T("span", { className: "ch-brand-compliance__badge ch-brand-compliance__badge--muted", children: e.category })
    ] }),
    /* @__PURE__ */ T("h4", { className: "ch-brand-compliance__issue-title", children: e.title }),
    /* @__PURE__ */ T("p", { className: "ch-brand-compliance__issue-copy", children: e.description }),
    e.recommendation ? /* @__PURE__ */ j("p", { className: "ch-brand-compliance__issue-recommendation", children: [
      /* @__PURE__ */ T("strong", { children: "Recommendation:" }),
      " ",
      e.recommendation
    ] }) : null
  ] });
}
function kv({
  client: e,
  entity: t,
  options: n
}) {
  const r = O.useMemo(() => hv(n), [n]), l = O.useMemo(() => ev(n), [n]), [o, i] = O.useState(null), [u, s] = O.useState(!1), [a, h] = O.useState(null), [d, m] = O.useState(null), [g, v] = O.useState(!1), [y, P] = O.useState(null);
  O.useEffect(() => {
    if (!r) {
      i(null);
      return;
    }
    let c = !1;
    return (async () => {
      s(!0), h(null);
      try {
        const w = await cv(e, t, r);
        c || (i(w), w || h("No asset entity found on this page."));
      } catch (w) {
        c || (i(null), h(
          w instanceof Error ? w.message : "Could not load asset context."
        ));
      } finally {
        c || s(!1);
      }
    })(), () => {
      c = !0;
    };
  }, [e, t, r]);
  const f = O.useCallback(async () => {
    if (!(!r || !o)) {
      v(!0), P(null);
      try {
        const c = await pv(r, {
          asset: o,
          options: {
            brandName: r.brandName,
            brandGuidelines: r.brandGuidelines
          }
        });
        m(c);
      } catch (c) {
        P(
          c instanceof Error ? c.message : "Brand compliance analysis failed."
        );
      } finally {
        v(!1);
      }
    }
  }, [o, r]);
  return r ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance", children: [
    /* @__PURE__ */ j("header", { className: "ch-brand-compliance__header", children: [
      /* @__PURE__ */ j("div", { children: [
        /* @__PURE__ */ j("p", { className: "ch-brand-compliance__eyebrow", children: [
          r.brandName,
          " DAM"
        ] }),
        /* @__PURE__ */ T("h2", { className: "ch-brand-compliance__title", children: "Brand Compliance Manager" })
      ] }),
      /* @__PURE__ */ T(
        "button",
        {
          type: "button",
          className: "ch-brand-compliance__primary-button",
          onClick: () => void f(),
          disabled: !o || g || u,
          children: g ? "Analyzing…" : "Run compliance check"
        }
      )
    ] }),
    /* @__PURE__ */ T("div", { className: "ch-brand-compliance__body", children: /* @__PURE__ */ j("section", { className: "ch-brand-compliance__column ch-brand-compliance__column--results", children: [
      u ? /* @__PURE__ */ T(Za, { active: !0, label: "Loading…" }) : null,
      !u && a ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance__empty ch-brand-compliance__empty--error", children: [
        /* @__PURE__ */ T("h3", { children: "Asset unavailable" }),
        /* @__PURE__ */ T("p", { children: a })
      ] }) : null,
      !u && !a && g ? /* @__PURE__ */ T(Za, { active: !0, label: "Analyzing…" }) : null,
      !u && !a && !g && y ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance__empty ch-brand-compliance__empty--error", children: [
        /* @__PURE__ */ T("h3", { children: "Analysis failed" }),
        /* @__PURE__ */ T("p", { children: y })
      ] }) : null,
      !u && !a && !g && !y && !d ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance__empty", children: [
        /* @__PURE__ */ T("h3", { children: "Ready to review" }),
        /* @__PURE__ */ j("p", { children: [
          "Click ",
          /* @__PURE__ */ T("strong", { children: "Run compliance check" }),
          " to analyze this asset."
        ] })
      ] }) : null,
      !g && d ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance__report", children: [
        /* @__PURE__ */ j("div", { className: "ch-brand-compliance__report-header", children: [
          /* @__PURE__ */ T(wv, { score: d.score, status: d.status }),
          /* @__PURE__ */ j("div", { className: "ch-brand-compliance__report-copy", children: [
            /* @__PURE__ */ T(
              "span",
              {
                className: `ch-brand-compliance__status ch-brand-compliance__status--${d.status}`,
                children: gv(d.status)
              }
            ),
            /* @__PURE__ */ T("p", { className: "ch-brand-compliance__report-summary", children: d.summary }),
            /* @__PURE__ */ j("p", { className: "ch-brand-compliance__report-meta", children: [
              "Analyzed ",
              yv(d.analyzedAt),
              d.imageAttached ? " · Visual review included" : d.imageUploadError ? " · Metadata only (image unavailable)" : ""
            ] })
          ] })
        ] }),
        d.passedChecks.length > 0 ? /* @__PURE__ */ j("div", { className: "ch-brand-compliance__panel", children: [
          /* @__PURE__ */ T("h3", { className: "ch-brand-compliance__panel-title", children: "Passed checks" }),
          /* @__PURE__ */ T("ul", { className: "ch-brand-compliance__passed-list", children: d.passedChecks.map((c) => /* @__PURE__ */ T("li", { children: c }, c)) })
        ] }) : null,
        /* @__PURE__ */ j("div", { className: "ch-brand-compliance__panel", children: [
          /* @__PURE__ */ j("h3", { className: "ch-brand-compliance__panel-title", children: [
            "Issues (",
            d.issues.length,
            ")"
          ] }),
          d.issues.length === 0 ? /* @__PURE__ */ T("p", { className: "ch-brand-compliance__hint", children: "No issues reported." }) : /* @__PURE__ */ T("div", { className: "ch-brand-compliance__issue-list", children: d.issues.map((c) => /* @__PURE__ */ T(Sv, { issue: c }, c.id)) })
        ] })
      ] }) : null
    ] }) })
  ] }) : /* @__PURE__ */ j("div", { className: "ch-brand-compliance", children: [
    /* @__PURE__ */ T("header", { className: "ch-brand-compliance__header", children: /* @__PURE__ */ j("div", { children: [
      /* @__PURE__ */ T("p", { className: "ch-brand-compliance__eyebrow", children: "Cytiva DAM" }),
      /* @__PURE__ */ T("h2", { className: "ch-brand-compliance__title", children: "Brand Compliance Manager" })
    ] }) }),
    /* @__PURE__ */ T("div", { className: "ch-brand-compliance__body", children: /* @__PURE__ */ j("div", { className: "ch-brand-compliance__empty", children: [
      /* @__PURE__ */ T("h3", { children: "Configuration required" }),
      /* @__PURE__ */ j("p", { children: [
        "Add ",
        /* @__PURE__ */ T("code", { children: "apiBaseUrl" }),
        " and ",
        /* @__PURE__ */ T("code", { children: "apiToken" }),
        " to the component config in Content Hub."
      ] }),
      l.length > 0 ? /* @__PURE__ */ j("p", { className: "ch-brand-compliance__hint", children: [
        "Missing: ",
        l.join(", ")
      ] }) : null
    ] }) })
  ] });
}
function xv(e) {
  const t = fd(e);
  return console.log("%c[CHBrandCompliance] Starting up...", "color: #0B5CAB; font-weight: bold"), {
    render(n) {
      const r = bg(n == null ? void 0 : n.options, n);
      console.log(
        "%c[CHBrandCompliance] context keys:",
        "color: #0B5CAB; font-weight: bold",
        Object.keys(n ?? {})
      ), console.log(
        "%c[CHBrandCompliance] parsed options:",
        "color: #0B5CAB; font-weight: bold",
        tv(r)
      ), t.render(
        /* @__PURE__ */ T(Qg, { theme: n.theme, children: /* @__PURE__ */ T(
          kv,
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
  xv as default
};
