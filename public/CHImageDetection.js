(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ch-image-detection{--ch-id-pad: 12px;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:0;height:100%;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#102a43;background:#f5f8fb}.ch-image-detection *,.ch-image-detection *:before,.ch-image-detection *:after{box-sizing:border-box}.ch-image-detection__header{display:flex;flex-direction:column;gap:10px;padding:var(--ch-id-pad);border-bottom:1px solid #d9e2ec;background:#fff;flex-shrink:0}.ch-image-detection__eyebrow{margin:0 0 2px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0b5cab}.ch-image-detection__title{margin:0;font-size:16px;font-weight:700;line-height:1.3}.ch-image-detection__checks{display:grid;gap:8px;margin:0;padding:0;border:none;min-width:0}.ch-image-detection__checks-legend{margin:0 0 2px;padding:0;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#627d98}.ch-image-detection__check{display:flex;align-items:flex-start;gap:8px;margin:0;font-size:13px;line-height:1.35;cursor:pointer}.ch-image-detection__check input{margin-top:2px;flex-shrink:0}.ch-image-detection__check span{display:flex;flex-direction:column;gap:2px;min-width:0}.ch-image-detection__check small{color:#627d98;font-size:11px;line-height:1.4}.ch-image-detection__check--all{font-weight:700;padding-bottom:6px;border-bottom:1px solid #edf2f7}.ch-image-detection__checks:disabled{opacity:.65}.ch-image-detection__primary-button{width:100%;border:none;border-radius:8px;padding:10px 14px;background:#0b5cab;color:#fff;font-size:13px;font-weight:600;cursor:pointer}.ch-image-detection__primary-button:disabled{opacity:.55;cursor:not-allowed}.ch-image-detection__body{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0}.ch-image-detection__column{min-width:0;padding:var(--ch-id-pad);background:#fff;padding-bottom:24px;flex:1}.ch-image-detection__asset-card{margin-bottom:14px;min-width:0}.ch-image-detection__asset-title{margin:0 0 8px;font-size:14px;font-weight:600;line-height:1.35;word-break:break-word}.ch-image-detection__asset-details{display:grid;gap:6px;margin:0}.ch-image-detection__asset-details div{display:grid;grid-template-columns:48px minmax(0,1fr);gap:8px;align-items:start}.ch-image-detection__asset-details dt{margin:0;color:#627d98;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.02em;padding-top:1px}.ch-image-detection__asset-details dd{margin:0;font-size:12px;line-height:1.35;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__empty{display:flex;flex-direction:column;justify-content:center;min-height:100px;padding:14px;border:1px dashed #bcccdc;border-radius:8px;background:#fff}.ch-image-detection__empty h3{margin:0 0 6px;font-size:14px}.ch-image-detection__empty p,.ch-image-detection__hint{margin:0;color:#486581;font-size:12px;line-height:1.5}.ch-image-detection__empty--error{border-color:#f9b8b8;background:#fff5f5}.ch-image-detection__report{min-width:0;margin-top:4px}.ch-image-detection__report-header{display:flex;flex-direction:column;align-items:flex-start;gap:8px;margin-bottom:14px}.ch-image-detection__status{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.02em}.ch-image-detection__status--clear{background:#e3f9e5;color:#0f7b3a}.ch-image-detection__status--flagged{background:#ffe3e3;color:#ab091e}.ch-image-detection__report-summary{margin:0;font-size:13px;line-height:1.55;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__report-meta{margin:0;color:#627d98;font-size:11px}.ch-image-detection__report-meta--ok{color:#0f7b3a}.ch-image-detection__report-meta--error{color:#ab091e}.ch-image-detection__finding-list{display:grid;gap:10px}.ch-image-detection__finding{border:1px solid #d9e2ec;border-radius:8px;padding:10px 12px;background:#f8fbff;min-width:0}.ch-image-detection__finding--flagged{border-color:#f9b8b8;background:#fff5f5}.ch-image-detection__finding--clear{border-color:#b7ebc1;background:#f3fbf5}.ch-image-detection__finding-header{display:flex;flex-wrap:wrap;align-items:center;gap:6px}.ch-image-detection__finding-title{margin:0;font-size:13px;flex:1 1 140px;overflow-wrap:anywhere}.ch-image-detection__badge{display:inline-flex;align-items:center;border-radius:999px;padding:2px 7px;background:#ab091e;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-detection__badge--clear{background:#0f7b3a}.ch-image-detection__badge--muted{background:#e0e7ff;color:#334e68}.ch-image-detection__finding-copy{margin:8px 0 0;color:#486581;font-size:12px;line-height:1.5;overflow-wrap:anywhere;word-break:break-word}.ch-image-detection__loading{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;min-height:120px;padding:12px}.ch-image-detection__loading-label{margin:0;max-width:100%;text-align:center;color:#486581;font-size:12px}.ch-image-detection__spinner{width:28px;height:28px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-detection-spin .8s linear infinite}@keyframes ch-image-detection-spin{to{transform:rotate(360deg)}}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
function tp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o && Object.defineProperty(e, i, o.get ? o : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function np(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ac = { exports: {} }, qi = {}, cc = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr = Symbol.for("react.element"), rp = Symbol.for("react.portal"), ip = Symbol.for("react.fragment"), op = Symbol.for("react.strict_mode"), lp = Symbol.for("react.profiler"), up = Symbol.for("react.provider"), sp = Symbol.for("react.context"), ap = Symbol.for("react.forward_ref"), cp = Symbol.for("react.suspense"), fp = Symbol.for("react.memo"), dp = Symbol.for("react.lazy"), xs = Symbol.iterator;
function pp(e) {
  return e === null || typeof e != "object" ? null : (e = xs && e[xs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var fc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dc = Object.assign, pc = {};
function $n(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || fc;
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
function mc() {
}
mc.prototype = $n.prototype;
function yu(e, t, n) {
  this.props = e, this.context = t, this.refs = pc, this.updater = n || fc;
}
var gu = yu.prototype = new mc();
gu.constructor = yu;
dc(gu, $n.prototype);
gu.isPureReactComponent = !0;
var Ps = Array.isArray, hc = Object.prototype.hasOwnProperty, vu = { current: null }, yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function gc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      hc.call(t, r) && !yc.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    i.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      i[r] === void 0 && (i[r] = u[r]);
  return { $$typeof: Lr, type: e, key: o, ref: l, props: i, _owner: vu.current };
}
function mp(e, t) {
  return { $$typeof: Lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function hp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ns = /\/+/g;
function Do(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? hp("" + e.key) : t.toString(36);
}
function si(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Lr:
          case rp:
            l = !0;
        }
    }
  if (l)
    return l = e, i = i(l), e = r === "" ? "." + Do(l, 0) : r, Ps(i) ? (n = "", e != null && (n = e.replace(Ns, "$&/") + "/"), si(i, t, n, "", function(a) {
      return a;
    })) : i != null && (wu(i) && (i = mp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(Ns, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Ps(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Do(o, u);
      l += si(o, t, n, s, i);
    }
  else if (s = pp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Do(o, u++), l += si(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Vr(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return si(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function yp(e) {
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
var ke = { current: null }, ai = { transition: null }, gp = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ai, ReactCurrentOwner: vu };
function vc() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: Vr, forEach: function(e, t, n) {
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
  if (!wu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = $n;
L.Fragment = ip;
L.Profiler = lp;
L.PureComponent = yu;
L.StrictMode = op;
L.Suspense = cp;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gp;
L.act = vc;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = vu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      hc.call(t, s) && !yc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Lr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
L.createContext = function(e) {
  return e = { $$typeof: sp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: up, _context: e }, e.Consumer = e;
};
L.createElement = gc;
L.createFactory = function(e) {
  var t = gc.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: ap, render: e };
};
L.isValidElement = wu;
L.lazy = function(e) {
  return { $$typeof: dp, _payload: { _status: -1, _result: e }, _init: yp };
};
L.memo = function(e, t) {
  return { $$typeof: fp, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = ai.transition;
  ai.transition = {};
  try {
    e();
  } finally {
    ai.transition = t;
  }
};
L.unstable_act = vc;
L.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
L.useContext = function(e) {
  return ke.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
L.useId = function() {
  return ke.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return ke.current.useRef(e);
};
L.useState = function(e) {
  return ke.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return ke.current.useTransition();
};
L.version = "18.3.1";
cc.exports = L;
var R = cc.exports;
const vp = /* @__PURE__ */ np(R), hl = /* @__PURE__ */ tp({
  __proto__: null,
  default: vp
}, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp = R, Sp = Symbol.for("react.element"), kp = Symbol.for("react.fragment"), Ep = Object.prototype.hasOwnProperty, Cp = wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Ep.call(t, r) && !_p.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Sp, type: e, key: o, ref: l, props: i, _owner: Cp.current };
}
qi.Fragment = kp;
qi.jsx = wc;
qi.jsxs = wc;
ac.exports = qi;
var Sc = ac.exports;
const O = Sc.jsx, M = Sc.jsxs;
var kc = { exports: {} }, $e = {}, Ec = { exports: {} }, Cc = {};
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
  function t(P, x) {
    var z = P.length;
    P.push(x);
    e:
      for (; 0 < z; ) {
        var D = z - 1 >>> 1, q = P[D];
        if (0 < i(q, x))
          P[D] = x, P[z] = q, z = D;
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
    var x = P[0], z = P.pop();
    if (z !== x) {
      P[0] = z;
      e:
        for (var D = 0, q = P.length, Hr = q >>> 1; D < Hr; ) {
          var Bt = 2 * (D + 1) - 1, jo = P[Bt], Ht = Bt + 1, Wr = P[Ht];
          if (0 > i(jo, z))
            Ht < q && 0 > i(Wr, jo) ? (P[D] = Wr, P[Ht] = z, D = Ht) : (P[D] = jo, P[Bt] = z, D = Bt);
          else if (Ht < q && 0 > i(Wr, z))
            P[D] = Wr, P[Ht] = z, D = Ht;
          else
            break e;
        }
    }
    return x;
  }
  function i(P, x) {
    var z = P.sortIndex - x.sortIndex;
    return z !== 0 ? z : P.id - x.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], a = [], h = 1, f = null, p = 3, v = !1, g = !1, y = !1, _ = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var x = n(a); x !== null; ) {
      if (x.callback === null)
        r(a);
      else if (x.startTime <= P)
        r(a), x.sortIndex = x.expirationTime, t(s, x);
      else
        break;
      x = n(a);
    }
  }
  function w(P) {
    if (y = !1, m(P), !g)
      if (n(s) !== null)
        g = !0, Un(E);
      else {
        var x = n(a);
        x !== null && Bn(w, x.startTime - P);
      }
  }
  function E(P, x) {
    g = !1, y && (y = !1, d(T), T = -1), v = !0;
    var z = p;
    try {
      for (m(x), f = n(s); f !== null && (!(f.expirationTime > x) || P && !re()); ) {
        var D = f.callback;
        if (typeof D == "function") {
          f.callback = null, p = f.priorityLevel;
          var q = D(f.expirationTime <= x);
          x = e.unstable_now(), typeof q == "function" ? f.callback = q : f === n(s) && r(s), m(x);
        } else
          r(s);
        f = n(s);
      }
      if (f !== null)
        var Hr = !0;
      else {
        var Bt = n(a);
        Bt !== null && Bn(w, Bt.startTime - x), Hr = !1;
      }
      return Hr;
    } finally {
      f = null, p = z, v = !1;
    }
  }
  var C = !1, k = null, T = -1, B = 5, A = -1;
  function re() {
    return !(e.unstable_now() - A < B);
  }
  function wt() {
    if (k !== null) {
      var P = e.unstable_now();
      A = P;
      var x = !0;
      try {
        x = k(!0, P);
      } finally {
        x ? Qe() : (C = !1, k = null);
      }
    } else
      C = !1;
  }
  var Qe;
  if (typeof c == "function")
    Qe = function() {
      c(wt);
    };
  else if (typeof MessageChannel < "u") {
    var Fn = new MessageChannel(), St = Fn.port2;
    Fn.port1.onmessage = wt, Qe = function() {
      St.postMessage(null);
    };
  } else
    Qe = function() {
      _(wt, 0);
    };
  function Un(P) {
    k = P, C || (C = !0, Qe());
  }
  function Bn(P, x) {
    T = _(function() {
      P(e.unstable_now());
    }, x);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || v || (g = !0, Un(E));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var x = 3;
        break;
      default:
        x = p;
    }
    var z = p;
    p = x;
    try {
      return P();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, x) {
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
    var z = p;
    p = P;
    try {
      return x();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(P, x, z) {
    var D = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? D + z : D) : z = D, P) {
      case 1:
        var q = -1;
        break;
      case 2:
        q = 250;
        break;
      case 5:
        q = 1073741823;
        break;
      case 4:
        q = 1e4;
        break;
      default:
        q = 5e3;
    }
    return q = z + q, P = { id: h++, callback: x, priorityLevel: P, startTime: z, expirationTime: q, sortIndex: -1 }, z > D ? (P.sortIndex = z, t(a, P), n(s) === null && P === n(a) && (y ? (d(T), T = -1) : y = !0, Bn(w, z - D))) : (P.sortIndex = q, t(s, P), g || v || (g = !0, Un(E))), P;
  }, e.unstable_shouldYield = re, e.unstable_wrapCallback = function(P) {
    var x = p;
    return function() {
      var z = p;
      p = x;
      try {
        return P.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Cc);
Ec.exports = Cc;
var xp = Ec.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = R, Ie = xp;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _c = /* @__PURE__ */ new Set(), dr = {};
function nn(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (dr[e] = t, e = 0; e < t.length; e++)
    _c.add(t[e]);
}
var pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yl = Object.prototype.hasOwnProperty, Np = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ts = {}, Os = {};
function Tp(e) {
  return yl.call(Os, e) ? !0 : yl.call(Ts, e) ? !1 : Np.test(e) ? Os[e] = !0 : (Ts[e] = !0, !1);
}
function Op(e, t, n, r) {
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
function Rp(e, t, n, r) {
  if (t === null || typeof t > "u" || Op(e, t, n, r))
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
function Ee(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Su = /[\-:]([a-z])/g;
function ku(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Su,
    ku
  );
  pe[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Su, ku);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Su, ku);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eu(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rp(t, n, i, r) && (n = null), r || i === null ? Tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kr = Symbol.for("react.element"), un = Symbol.for("react.portal"), sn = Symbol.for("react.fragment"), Cu = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), xc = Symbol.for("react.provider"), Pc = Symbol.for("react.context"), _u = Symbol.for("react.forward_ref"), vl = Symbol.for("react.suspense"), wl = Symbol.for("react.suspense_list"), xu = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), Nc = Symbol.for("react.offscreen"), Rs = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object" ? null : (e = Rs && e[Rs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, Fo;
function qn(e) {
  if (Fo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fo = t && t[1] || "";
    }
  return `
` + Fo + e;
}
var Uo = !1;
function Bo(e, t) {
  if (!e || Uo)
    return "";
  Uo = !0;
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
      for (var i = a.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, u = o.length - 1; 1 <= l && 0 <= u && i[l] !== o[u]; )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (i[l] !== o[u]) {
          if (l !== 1 || u !== 1)
            do
              if (l--, u--, 0 > u || i[l] !== o[u]) {
                var s = `
` + i[l].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    Uo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function zp(e) {
  switch (e.tag) {
    case 5:
      return qn(e.type);
    case 16:
      return qn("Lazy");
    case 13:
      return qn("Suspense");
    case 19:
      return qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Bo(e.type, !1), e;
    case 11:
      return e = Bo(e.type.render, !1), e;
    case 1:
      return e = Bo(e.type, !0), e;
    default:
      return "";
  }
}
function Sl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case sn:
      return "Fragment";
    case un:
      return "Portal";
    case gl:
      return "Profiler";
    case Cu:
      return "StrictMode";
    case vl:
      return "Suspense";
    case wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Pc:
        return (e.displayName || "Context") + ".Consumer";
      case xc:
        return (e._context.displayName || "Context") + ".Provider";
      case _u:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xu:
        return t = e.displayName || null, t !== null ? t : Sl(e.type) || "Memo";
      case Et:
        t = e._payload, e = e._init;
        try {
          return Sl(e(t));
        } catch {
        }
    }
  return null;
}
function Ap(e) {
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
      return Sl(t);
    case 8:
      return t === Cu ? "StrictMode" : "Mode";
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
function Tc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lp(e) {
  var t = Tc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(l) {
      r = "" + l, o.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = Lp(e));
}
function Oc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function _i(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Mt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Rc(e, t) {
  t = t.checked, t != null && Eu(e, "checked", t, !1);
}
function El(e, t) {
  Rc(e, t);
  var n = Mt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Cl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Cl(e, t.type, Mt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function As(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Cl(e, t, n) {
  (t !== "number" || _i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function wn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Mt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _l(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(S(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(S(92));
      if (bn(n)) {
        if (1 < n.length)
          throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Mt(n) };
}
function zc(e, t) {
  var n = Mt(t.value), r = Mt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ac(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, Lc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
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
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
}, Ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  Ip.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function Ic(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Ic(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var $p = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Pl(e, t) {
  if (t) {
    if ($p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Nl(e, t) {
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
var Tl = null;
function Pu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ol = null, Sn = null, kn = null;
function $s(e) {
  if (e = Mr(e)) {
    if (typeof Ol != "function")
      throw Error(S(280));
    var t = e.stateNode;
    t && (t = ro(t), Ol(e.stateNode, e.type, t));
  }
}
function Mc(e) {
  Sn ? kn ? kn.push(e) : kn = [e] : Sn = e;
}
function jc() {
  if (Sn) {
    var e = Sn, t = kn;
    if (kn = Sn = null, $s(e), t)
      for (e = 0; e < t.length; e++)
        $s(t[e]);
  }
}
function Dc(e, t) {
  return e(t);
}
function Fc() {
}
var Ho = !1;
function Uc(e, t, n) {
  if (Ho)
    return e(t, n);
  Ho = !0;
  try {
    return Dc(e, t, n);
  } finally {
    Ho = !1, (Sn !== null || kn !== null) && (Fc(), jc());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = ro(n);
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
var Rl = !1;
if (pt)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", { get: function() {
      Rl = !0;
    } }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
  } catch {
    Rl = !1;
  }
function Mp(e, t, n, r, i, o, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var rr = !1, xi = null, Pi = !1, zl = null, jp = { onError: function(e) {
  rr = !0, xi = e;
} };
function Dp(e, t, n, r, i, o, l, u, s) {
  rr = !1, xi = null, Mp.apply(jp, arguments);
}
function Fp(e, t, n, r, i, o, l, u, s) {
  if (Dp.apply(this, arguments), rr) {
    if (rr) {
      var a = xi;
      rr = !1, xi = null;
    } else
      throw Error(S(198));
    Pi || (Pi = !0, zl = a);
  }
}
function rn(e) {
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
function Bc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ms(e) {
  if (rn(e) !== e)
    throw Error(S(188));
}
function Up(e) {
  var t = e.alternate;
  if (!t) {
    if (t = rn(e), t === null)
      throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null)
      break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n)
          return Ms(i), e;
        if (o === r)
          return Ms(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return)
      n = i, r = o;
    else {
      for (var l = !1, u = i.child; u; ) {
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
      if (!l) {
        for (u = o.child; u; ) {
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
        if (!l)
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
function Hc(e) {
  return e = Up(e), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Vc = Ie.unstable_scheduleCallback, js = Ie.unstable_cancelCallback, Bp = Ie.unstable_shouldYield, Hp = Ie.unstable_requestPaint, b = Ie.unstable_now, Wp = Ie.unstable_getCurrentPriorityLevel, Nu = Ie.unstable_ImmediatePriority, Kc = Ie.unstable_UserBlockingPriority, Ni = Ie.unstable_NormalPriority, Vp = Ie.unstable_LowPriority, Qc = Ie.unstable_IdlePriority, bi = null, ot = null;
function Kp(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(bi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Ze = Math.clz32 ? Math.clz32 : Yp, Qp = Math.log, Gp = Math.LN2;
function Yp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Qp(e) / Gp | 0) | 0;
}
var Yr = 64, Xr = 4194304;
function er(e) {
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
function Ti(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = er(u) : (o &= l, o !== 0 && (r = er(o)));
  } else
    l = n & ~i, l !== 0 ? r = er(l) : o !== 0 && (r = er(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Ze(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Xp(e, t) {
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
function Jp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - Ze(o), u = 1 << l, s = i[l];
    s === -1 ? (!(u & n) || u & r) && (i[l] = Xp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Al(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gc() {
  var e = Yr;
  return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
}
function Wo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Zp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function Tu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var F = 0;
function Yc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Xc, Ou, Jc, Zc, qc, Ll = !1, Jr = [], Tt = null, Ot = null, Rt = null, hr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), _t = [], qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ds(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ot = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      yr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Mr(t), t !== null && Ou(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function bp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Tt = Vn(Tt, e, t, n, r, i), !0;
    case "dragenter":
      return Ot = Vn(Ot, e, t, n, r, i), !0;
    case "mouseover":
      return Rt = Vn(Rt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return hr.set(o, Vn(hr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, yr.set(o, Vn(yr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function bc(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bc(n), t !== null) {
          e.blockedOn = t, qc(e.priority, function() {
            Jc(n);
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
function ci(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Tl = r, n.target.dispatchEvent(r), Tl = null;
    } else
      return t = Mr(n), t !== null && Ou(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fs(e, t, n) {
  ci(e) && n.delete(t);
}
function em() {
  Ll = !1, Tt !== null && ci(Tt) && (Tt = null), Ot !== null && ci(Ot) && (Ot = null), Rt !== null && ci(Rt) && (Rt = null), hr.forEach(Fs), yr.forEach(Fs);
}
function Kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ll || (Ll = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, em)));
}
function gr(e) {
  function t(i) {
    return Kn(i, e);
  }
  if (0 < Jr.length) {
    Kn(Jr[0], e);
    for (var n = 1; n < Jr.length; n++) {
      var r = Jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Tt !== null && Kn(Tt, e), Ot !== null && Kn(Ot, e), Rt !== null && Kn(Rt, e), hr.forEach(t), yr.forEach(t), n = 0; n < _t.length; n++)
    r = _t[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _t.length && (n = _t[0], n.blockedOn === null); )
    bc(n), n.blockedOn === null && _t.shift();
}
var En = vt.ReactCurrentBatchConfig, Oi = !0;
function tm(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 1, Ru(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function nm(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 4, Ru(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function Ru(e, t, n, r) {
  if (Oi) {
    var i = Il(e, t, n, r);
    if (i === null)
      bo(e, t, r, Ri, n), Ds(e, r);
    else if (bp(i, e, t, n, r))
      r.stopPropagation();
    else if (Ds(e, r), t & 4 && -1 < qp.indexOf(e)) {
      for (; i !== null; ) {
        var o = Mr(i);
        if (o !== null && Xc(o), o = Il(e, t, n, r), o === null && bo(e, t, r, Ri, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      bo(e, t, r, null, n);
  }
}
var Ri = null;
function Il(e, t, n, r) {
  if (Ri = null, e = Pu(r), e = Kt(e), e !== null)
    if (t = rn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Bc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ri = e, null;
}
function ef(e) {
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
      switch (Wp()) {
        case Nu:
          return 1;
        case Kc:
          return 4;
        case Ni:
        case Vp:
          return 16;
        case Qc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, zu = null, fi = null;
function tf() {
  if (fi)
    return fi;
  var e, t = zu, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
    ;
  return fi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function di(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Zr() {
  return !0;
}
function Us() {
  return !1;
}
function Me(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Zr : Us, this.isPropagationStopped = Us, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Zr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Zr);
  }, persist: function() {
  }, isPersistent: Zr }), t;
}
var Mn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Au = Me(Mn), $r = Y({}, Mn, { view: 0, detail: 0 }), rm = Me($r), Vo, Ko, Qn, eo = Y({}, $r, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Lu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (Vo = e.screenX - Qn.screenX, Ko = e.screenY - Qn.screenY) : Ko = Vo = 0, Qn = e), Vo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ko;
} }), Bs = Me(eo), im = Y({}, eo, { dataTransfer: 0 }), om = Me(im), lm = Y({}, $r, { relatedTarget: 0 }), Qo = Me(lm), um = Y({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sm = Me(um), am = Y({}, Mn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), cm = Me(am), fm = Y({}, Mn, { data: 0 }), Hs = Me(fm), dm = {
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
}, pm = {
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
}, mm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function hm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mm[e]) ? !!t[e] : !1;
}
function Lu() {
  return hm;
}
var ym = Y({}, $r, { key: function(e) {
  if (e.key) {
    var t = dm[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = di(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Lu, charCode: function(e) {
  return e.type === "keypress" ? di(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), gm = Me(ym), vm = Y({}, eo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ws = Me(vm), wm = Y({}, $r, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Lu }), Sm = Me(wm), km = Y({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Em = Me(km), Cm = Y({}, eo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _m = Me(Cm), xm = [9, 13, 27, 32], Iu = pt && "CompositionEvent" in window, ir = null;
pt && "documentMode" in document && (ir = document.documentMode);
var Pm = pt && "TextEvent" in window && !ir, nf = pt && (!Iu || ir && 8 < ir && 11 >= ir), Vs = String.fromCharCode(32), Ks = !1;
function rf(e, t) {
  switch (e) {
    case "keyup":
      return xm.indexOf(t.keyCode) !== -1;
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
function of(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Nm(e, t) {
  switch (e) {
    case "compositionend":
      return of(t);
    case "keypress":
      return t.which !== 32 ? null : (Ks = !0, Vs);
    case "textInput":
      return e = t.data, e === Vs && Ks ? null : e;
    default:
      return null;
  }
}
function Tm(e, t) {
  if (an)
    return e === "compositionend" || !Iu && rf(e, t) ? (e = tf(), fi = zu = Pt = null, an = !1, e) : null;
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
      return nf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Om = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Om[e.type] : t === "textarea";
}
function lf(e, t, n, r) {
  Mc(r), t = zi(t, "onChange"), 0 < t.length && (n = new Au("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var or = null, vr = null;
function Rm(e) {
  gf(e, 0);
}
function to(e) {
  var t = dn(e);
  if (Oc(t))
    return e;
}
function zm(e, t) {
  if (e === "change")
    return t;
}
var uf = !1;
if (pt) {
  var Go;
  if (pt) {
    var Yo = "oninput" in document;
    if (!Yo) {
      var Gs = document.createElement("div");
      Gs.setAttribute("oninput", "return;"), Yo = typeof Gs.oninput == "function";
    }
    Go = Yo;
  } else
    Go = !1;
  uf = Go && (!document.documentMode || 9 < document.documentMode);
}
function Ys() {
  or && (or.detachEvent("onpropertychange", sf), vr = or = null);
}
function sf(e) {
  if (e.propertyName === "value" && to(vr)) {
    var t = [];
    lf(t, vr, e, Pu(e)), Uc(Rm, t);
  }
}
function Am(e, t, n) {
  e === "focusin" ? (Ys(), or = t, vr = n, or.attachEvent("onpropertychange", sf)) : e === "focusout" && Ys();
}
function Lm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return to(vr);
}
function Im(e, t) {
  if (e === "click")
    return to(t);
}
function $m(e, t) {
  if (e === "input" || e === "change")
    return to(t);
}
function Mm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var be = typeof Object.is == "function" ? Object.is : Mm;
function wr(e, t) {
  if (be(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !be(e[i], t[i]))
      return !1;
  }
  return !0;
}
function Xs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Js(e, t) {
  var n = Xs(e);
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
    n = Xs(n);
  }
}
function af(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function cf() {
  for (var e = window, t = _i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = _i(e.document);
  }
  return t;
}
function $u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jm(e) {
  var t = cf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && af(n.ownerDocument.documentElement, n)) {
    if (r !== null && $u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Js(n, o);
        var l = Js(
          n,
          r
        );
        i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dm = pt && "documentMode" in document && 11 >= document.documentMode, cn = null, $l = null, lr = null, Ml = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ml || cn == null || cn !== _i(r) || (r = cn, "selectionStart" in r && $u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && wr(lr, r) || (lr = r, r = zi($l, "onSelect"), 0 < r.length && (t = new Au("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = cn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var fn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Xo = {}, ff = {};
pt && (ff = document.createElement("div").style, "AnimationEvent" in window || (delete fn.animationend.animation, delete fn.animationiteration.animation, delete fn.animationstart.animation), "TransitionEvent" in window || delete fn.transitionend.transition);
function no(e) {
  if (Xo[e])
    return Xo[e];
  if (!fn[e])
    return e;
  var t = fn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in ff)
      return Xo[e] = t[n];
  return e;
}
var df = no("animationend"), pf = no("animationiteration"), mf = no("animationstart"), hf = no("transitionend"), yf = /* @__PURE__ */ new Map(), qs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Dt(e, t) {
  yf.set(e, t), nn(t, [e]);
}
for (var Jo = 0; Jo < qs.length; Jo++) {
  var Zo = qs[Jo], Fm = Zo.toLowerCase(), Um = Zo[0].toUpperCase() + Zo.slice(1);
  Dt(Fm, "on" + Um);
}
Dt(df, "onAnimationEnd");
Dt(pf, "onAnimationIteration");
Dt(mf, "onAnimationStart");
Dt("dblclick", "onDoubleClick");
Dt("focusin", "onFocus");
Dt("focusout", "onBlur");
Dt(hf, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function bs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fp(r, t, void 0, e), e.currentTarget = null;
}
function gf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          bs(i, u, a), o = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          bs(i, u, a), o = s;
        }
    }
  }
  if (Pi)
    throw e = zl, Pi = !1, zl = null, e;
}
function W(e, t) {
  var n = t[Bl];
  n === void 0 && (n = t[Bl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vf(t, e, 2, !1), n.add(r));
}
function qo(e, t, n) {
  var r = 0;
  t && (r |= 4), vf(n, e, r, t);
}
var br = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[br]) {
    e[br] = !0, _c.forEach(function(n) {
      n !== "selectionchange" && (Bm.has(n) || qo(n, !1, e), qo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[br] || (t[br] = !0, qo("selectionchange", !1, t));
  }
}
function vf(e, t, n, r) {
  switch (ef(t)) {
    case 1:
      var i = tm;
      break;
    case 4:
      i = nm;
      break;
    default:
      i = Ru;
  }
  n = i.bind(null, t, n, e), i = void 0, !Rl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function bo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var u = r.stateNode.containerInfo;
          if (u === i || u.nodeType === 8 && u.parentNode === i)
            break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var s = l.tag;
              if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === i || s.nodeType === 8 && s.parentNode === i))
                return;
              l = l.return;
            }
          for (; u !== null; ) {
            if (l = Kt(u), l === null)
              return;
            if (s = l.tag, s === 5 || s === 6) {
              r = o = l;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Uc(function() {
    var a = o, h = Pu(n), f = [];
    e: {
      var p = yf.get(e);
      if (p !== void 0) {
        var v = Au, g = e;
        switch (e) {
          case "keypress":
            if (di(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            v = gm;
            break;
          case "focusin":
            g = "focus", v = Qo;
            break;
          case "focusout":
            g = "blur", v = Qo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Qo;
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
            v = Bs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = om;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Sm;
            break;
          case df:
          case pf:
          case mf:
            v = sm;
            break;
          case hf:
            v = Em;
            break;
          case "scroll":
            v = rm;
            break;
          case "wheel":
            v = _m;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = cm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ws;
        }
        var y = (t & 4) !== 0, _ = !y && e === "scroll", d = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, d !== null && (w = mr(c, d), w != null && y.push(kr(c, w, m)))), _)
            break;
          c = c.return;
        }
        0 < y.length && (p = new v(p, g, null, n, h), f.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", p && n !== Tl && (g = n.relatedTarget || n.fromElement) && (Kt(g) || g[mt]))
          break e;
        if ((v || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, v ? (g = n.relatedTarget || n.toElement, v = a, g = g ? Kt(g) : null, g !== null && (_ = rn(g), g !== _ || g.tag !== 5 && g.tag !== 6) && (g = null)) : (v = null, g = a), v !== g)) {
          if (y = Bs, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ws, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), _ = v == null ? p : dn(v), m = g == null ? p : dn(g), p = new y(w, c + "leave", v, n, h), p.target = _, p.relatedTarget = m, w = null, Kt(h) === a && (y = new y(d, c + "enter", g, n, h), y.target = m, y.relatedTarget = _, w = y), _ = w, v && g)
            t: {
              for (y = v, d = g, c = 0, m = y; m; m = on(m))
                c++;
              for (m = 0, w = d; w; w = on(w))
                m++;
              for (; 0 < c - m; )
                y = on(y), c--;
              for (; 0 < m - c; )
                d = on(d), m--;
              for (; c--; ) {
                if (y === d || d !== null && y === d.alternate)
                  break t;
                y = on(y), d = on(d);
              }
              y = null;
            }
          else
            y = null;
          v !== null && ea(f, p, v, y, !1), g !== null && _ !== null && ea(f, _, g, y, !0);
        }
      }
      e: {
        if (p = a ? dn(a) : window, v = p.nodeName && p.nodeName.toLowerCase(), v === "select" || v === "input" && p.type === "file")
          var E = zm;
        else if (Qs(p))
          if (uf)
            E = $m;
          else {
            E = Lm;
            var C = Am;
          }
        else
          (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Im);
        if (E && (E = E(e, a))) {
          lf(f, E, n, h);
          break e;
        }
        C && C(e, p, a), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Cl(p, "number", p.value);
      }
      switch (C = a ? dn(a) : window, e) {
        case "focusin":
          (Qs(C) || C.contentEditable === "true") && (cn = C, $l = a, lr = null);
          break;
        case "focusout":
          lr = $l = cn = null;
          break;
        case "mousedown":
          Ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ml = !1, Zs(f, n, h);
          break;
        case "selectionchange":
          if (Dm)
            break;
        case "keydown":
        case "keyup":
          Zs(f, n, h);
      }
      var k;
      if (Iu)
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
        an ? rf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (nf && n.locale !== "ko" && (an || T !== "onCompositionStart" ? T === "onCompositionEnd" && an && (k = tf()) : (Pt = h, zu = "value" in Pt ? Pt.value : Pt.textContent, an = !0)), C = zi(a, T), 0 < C.length && (T = new Hs(T, e, null, n, h), f.push({ event: T, listeners: C }), k ? T.data = k : (k = of(n), k !== null && (T.data = k)))), (k = Pm ? Nm(e, n) : Tm(e, n)) && (a = zi(a, "onBeforeInput"), 0 < a.length && (h = new Hs("onBeforeInput", "beforeinput", null, n, h), f.push({ event: h, listeners: a }), h.data = k));
    }
    gf(f, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = mr(e, n), o != null && r.unshift(kr(e, o, i)), o = mr(e, t), o != null && r.push(kr(e, o, i))), e = e.return;
  }
  return r;
}
function on(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ea(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, i ? (s = mr(n, o), s != null && l.unshift(kr(n, s, u))) : i || (s = mr(n, o), s != null && l.push(kr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Hm = /\r\n?/g, Wm = /\u0000|\uFFFD/g;
function ta(e) {
  return (typeof e == "string" ? e : "" + e).replace(Hm, `
`).replace(Wm, "");
}
function ei(e, t, n) {
  if (t = ta(t), ta(e) !== t && n)
    throw Error(S(425));
}
function Ai() {
}
var jl = null, Dl = null;
function Fl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ul = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, na = typeof Promise == "function" ? Promise : void 0, Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof na < "u" ? function(e) {
  return na.resolve(null).then(e).catch(Qm);
} : Ul;
function Qm(e) {
  setTimeout(function() {
    throw e;
  });
}
function el(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
      if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), gr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  gr(t);
}
function zt(e) {
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
function ra(e) {
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
var jn = Math.random().toString(36).slice(2), it = "__reactFiber$" + jn, Er = "__reactProps$" + jn, mt = "__reactContainer$" + jn, Bl = "__reactEvents$" + jn, Gm = "__reactListeners$" + jn, Ym = "__reactHandles$" + jn;
function Kt(e) {
  var t = e[it];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[mt] || n[it]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ra(e); e !== null; ) {
          if (n = e[it])
            return n;
          e = ra(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Mr(e) {
  return e = e[it] || e[mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function dn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(S(33));
}
function ro(e) {
  return e[Er] || null;
}
var Hl = [], pn = -1;
function Ft(e) {
  return { current: e };
}
function V(e) {
  0 > pn || (e.current = Hl[pn], Hl[pn] = null, pn--);
}
function H(e, t) {
  pn++, Hl[pn] = e.current, e.current = t;
}
var jt = {}, ve = Ft(jt), xe = Ft(!1), Zt = jt;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function Li() {
  V(xe), V(ve);
}
function ia(e, t, n) {
  if (ve.current !== jt)
    throw Error(S(168));
  H(ve, t), H(xe, n);
}
function wf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(S(108, Ap(e) || "Unknown", i));
  return Y({}, n, r);
}
function Ii(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jt, Zt = ve.current, H(ve, e), H(xe, xe.current), !0;
}
function oa(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(S(169));
  n ? (e = wf(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, V(xe), V(ve), H(ve, e)) : V(xe), H(xe, n);
}
var at = null, io = !1, tl = !1;
function Sf(e) {
  at === null ? at = [e] : at.push(e);
}
function Xm(e) {
  io = !0, Sf(e);
}
function Ut() {
  if (!tl && at !== null) {
    tl = !0;
    var e = 0, t = F;
    try {
      var n = at;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      at = null, io = !1;
    } catch (i) {
      throw at !== null && (at = at.slice(e + 1)), Vc(Nu, Ut), i;
    } finally {
      F = t, tl = !1;
    }
  }
  return null;
}
var mn = [], hn = 0, $i = null, Mi = 0, De = [], Fe = 0, qt = null, ct = 1, ft = "";
function Wt(e, t) {
  mn[hn++] = Mi, mn[hn++] = $i, $i = e, Mi = t;
}
function kf(e, t, n) {
  De[Fe++] = ct, De[Fe++] = ft, De[Fe++] = qt, qt = e;
  var r = ct;
  e = ft;
  var i = 32 - Ze(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, ct = 1 << 32 - Ze(t) + i | n << i | r, ft = o + e;
  } else
    ct = 1 << o | n << i | r, ft = e;
}
function Mu(e) {
  e.return !== null && (Wt(e, 1), kf(e, 1, 0));
}
function ju(e) {
  for (; e === $i; )
    $i = mn[--hn], mn[hn] = null, Mi = mn[--hn], mn[hn] = null;
  for (; e === qt; )
    qt = De[--Fe], De[Fe] = null, ft = De[--Fe], De[Fe] = null, ct = De[--Fe], De[Fe] = null;
}
var Ae = null, ze = null, K = !1, Je = null;
function Ef(e, t) {
  var n = Be(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function la(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, ze = zt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qt !== null ? { id: ct, overflow: ft } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, ze = null, !0) : !1;
    default:
      return !1;
  }
}
function Wl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vl(e) {
  if (K) {
    var t = ze;
    if (t) {
      var n = t;
      if (!la(e, t)) {
        if (Wl(e))
          throw Error(S(418));
        t = zt(n.nextSibling);
        var r = Ae;
        t && la(e, t) ? Ef(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ae = e);
      }
    } else {
      if (Wl(e))
        throw Error(S(418));
      e.flags = e.flags & -4097 | 2, K = !1, Ae = e;
    }
  }
}
function ua(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function ti(e) {
  if (e !== Ae)
    return !1;
  if (!K)
    return ua(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps)), t && (t = ze)) {
    if (Wl(e))
      throw Cf(), Error(S(418));
    for (; t; )
      Ef(e, t), t = zt(t.nextSibling);
  }
  if (ua(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = zt(e.nextSibling);
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
    ze = Ae ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function Cf() {
  for (var e = ze; e; )
    e = zt(e.nextSibling);
}
function On() {
  ze = Ae = null, K = !1;
}
function Du(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var Jm = vt.ReactCurrentBatchConfig;
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
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(S(284));
    if (!n._owner)
      throw Error(S(290, e));
  }
  return e;
}
function ni(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function sa(e) {
  var t = e._init;
  return t(e._payload);
}
function _f(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function i(d, c) {
    return d = $t(d, c), d.index = 0, d.sibling = null, d;
  }
  function o(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 6 ? (c = sl(m, d.mode, w), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function s(d, c, m, w) {
    var E = m.type;
    return E === sn ? h(d, c, m.props.children, w, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Et && sa(E) === c.type) ? (w = i(c, m.props), w.ref = Gn(d, c, m), w.return = d, w) : (w = wi(m.type, m.key, m.props, null, d.mode, w), w.ref = Gn(d, c, m), w.return = d, w);
  }
  function a(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = al(m, d.mode, w), c.return = d, c) : (c = i(c, m.children || []), c.return = d, c);
  }
  function h(d, c, m, w, E) {
    return c === null || c.tag !== 7 ? (c = Xt(m, d.mode, w, E), c.return = d, c) : (c = i(c, m), c.return = d, c);
  }
  function f(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = sl("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Kr:
          return m = wi(c.type, c.key, c.props, null, d.mode, m), m.ref = Gn(d, null, c), m.return = d, m;
        case un:
          return c = al(c, d.mode, m), c.return = d, c;
        case Et:
          var w = c._init;
          return f(d, w(c._payload), m);
      }
      if (bn(c) || Hn(c))
        return c = Xt(c, d.mode, m, null), c.return = d, c;
      ni(d, c);
    }
    return null;
  }
  function p(d, c, m, w) {
    var E = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return E !== null ? null : u(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Kr:
          return m.key === E ? s(d, c, m, w) : null;
        case un:
          return m.key === E ? a(d, c, m, w) : null;
        case Et:
          return E = m._init, p(
            d,
            c,
            E(m._payload),
            w
          );
      }
      if (bn(m) || Hn(m))
        return E !== null ? null : h(d, c, m, w, null);
      ni(d, m);
    }
    return null;
  }
  function v(d, c, m, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return d = d.get(m) || null, u(c, d, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Kr:
          return d = d.get(w.key === null ? m : w.key) || null, s(c, d, w, E);
        case un:
          return d = d.get(w.key === null ? m : w.key) || null, a(c, d, w, E);
        case Et:
          var C = w._init;
          return v(d, c, m, C(w._payload), E);
      }
      if (bn(w) || Hn(w))
        return d = d.get(m) || null, h(c, d, w, E, null);
      ni(c, w);
    }
    return null;
  }
  function g(d, c, m, w) {
    for (var E = null, C = null, k = c, T = c = 0, B = null; k !== null && T < m.length; T++) {
      k.index > T ? (B = k, k = null) : B = k.sibling;
      var A = p(d, k, m[T], w);
      if (A === null) {
        k === null && (k = B);
        break;
      }
      e && k && A.alternate === null && t(d, k), c = o(A, c, T), C === null ? E = A : C.sibling = A, C = A, k = B;
    }
    if (T === m.length)
      return n(d, k), K && Wt(d, T), E;
    if (k === null) {
      for (; T < m.length; T++)
        k = f(d, m[T], w), k !== null && (c = o(k, c, T), C === null ? E = k : C.sibling = k, C = k);
      return K && Wt(d, T), E;
    }
    for (k = r(d, k); T < m.length; T++)
      B = v(k, d, T, m[T], w), B !== null && (e && B.alternate !== null && k.delete(B.key === null ? T : B.key), c = o(B, c, T), C === null ? E = B : C.sibling = B, C = B);
    return e && k.forEach(function(re) {
      return t(d, re);
    }), K && Wt(d, T), E;
  }
  function y(d, c, m, w) {
    var E = Hn(m);
    if (typeof E != "function")
      throw Error(S(150));
    if (m = E.call(m), m == null)
      throw Error(S(151));
    for (var C = E = null, k = c, T = c = 0, B = null, A = m.next(); k !== null && !A.done; T++, A = m.next()) {
      k.index > T ? (B = k, k = null) : B = k.sibling;
      var re = p(d, k, A.value, w);
      if (re === null) {
        k === null && (k = B);
        break;
      }
      e && k && re.alternate === null && t(d, k), c = o(re, c, T), C === null ? E = re : C.sibling = re, C = re, k = B;
    }
    if (A.done)
      return n(
        d,
        k
      ), K && Wt(d, T), E;
    if (k === null) {
      for (; !A.done; T++, A = m.next())
        A = f(d, A.value, w), A !== null && (c = o(A, c, T), C === null ? E = A : C.sibling = A, C = A);
      return K && Wt(d, T), E;
    }
    for (k = r(d, k); !A.done; T++, A = m.next())
      A = v(k, d, T, A.value, w), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? T : A.key), c = o(A, c, T), C === null ? E = A : C.sibling = A, C = A);
    return e && k.forEach(function(wt) {
      return t(d, wt);
    }), K && Wt(d, T), E;
  }
  function _(d, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === sn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Kr:
          e: {
            for (var E = m.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (E = m.type, E === sn) {
                  if (C.tag === 7) {
                    n(d, C.sibling), c = i(C, m.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Et && sa(E) === C.type) {
                  n(d, C.sibling), c = i(C, m.props), c.ref = Gn(d, C, m), c.return = d, d = c;
                  break e;
                }
                n(d, C);
                break;
              } else
                t(d, C);
              C = C.sibling;
            }
            m.type === sn ? (c = Xt(m.props.children, d.mode, w, m.key), c.return = d, d = c) : (w = wi(m.type, m.key, m.props, null, d.mode, w), w.ref = Gn(d, c, m), w.return = d, d = w);
          }
          return l(d);
        case un:
          e: {
            for (C = m.key; c !== null; ) {
              if (c.key === C)
                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(d, c.sibling), c = i(c, m.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else
                t(d, c);
              c = c.sibling;
            }
            c = al(m, d.mode, w), c.return = d, d = c;
          }
          return l(d);
        case Et:
          return C = m._init, _(d, c, C(m._payload), w);
      }
      if (bn(m))
        return g(d, c, m, w);
      if (Hn(m))
        return y(d, c, m, w);
      ni(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = i(c, m), c.return = d, d = c) : (n(d, c), c = sl(m, d.mode, w), c.return = d, d = c), l(d)) : n(d, c);
  }
  return _;
}
var Rn = _f(!0), xf = _f(!1), ji = Ft(null), Di = null, yn = null, Fu = null;
function Uu() {
  Fu = yn = Di = null;
}
function Bu(e) {
  var t = ji.current;
  V(ji), e._currentValue = t;
}
function Kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Cn(e, t) {
  Di = e, Fu = yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_e = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (Fu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, yn === null) {
      if (Di === null)
        throw Error(S(308));
      yn = e, Di.dependencies = { lanes: 0, firstContext: e };
    } else
      yn = yn.next = e;
  return t;
}
var Qt = null;
function Hu(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function Pf(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Hu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Wu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function At(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ht(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Hu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ht(e, n);
}
function pi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tu(e, n);
  }
}
function aa(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = l : o = o.next = l, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else
      i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Fi(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate, l = i.lastBaseUpdate, u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? o = a : l.next = a, l = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== l && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var f = i.baseState;
    l = 0, h = a = s = null, u = o;
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
                f = g.call(v, f, p);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = y.payload, p = typeof g == "function" ? g.call(v, f, p) : g, p == null)
                break e;
              f = Y({}, f, p);
              break e;
            case 2:
              Ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [u] : p.push(u));
      } else
        v = { eventTime: v, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = v, s = f) : h = h.next = v, l |= p;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = f), i.baseState = s, i.firstBaseUpdate = a, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    en |= l, e.lanes = l, e.memoizedState = f;
  }
}
function ca(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var jr = {}, lt = Ft(jr), Cr = Ft(jr), _r = Ft(jr);
function Gt(e) {
  if (e === jr)
    throw Error(S(174));
  return e;
}
function Vu(e, t) {
  switch (H(_r, t), H(Cr, e), H(lt, jr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xl(t, e);
  }
  V(lt), H(lt, t);
}
function zn() {
  V(lt), V(Cr), V(_r);
}
function Tf(e) {
  Gt(_r.current);
  var t = Gt(lt.current), n = xl(t, e.type);
  t !== n && (H(Cr, e), H(lt, n));
}
function Ku(e) {
  Cr.current === e && (V(lt), V(Cr));
}
var Q = Ft(0);
function Ui(e) {
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
var nl = [];
function Qu() {
  for (var e = 0; e < nl.length; e++)
    nl[e]._workInProgressVersionPrimary = null;
  nl.length = 0;
}
var mi = vt.ReactCurrentDispatcher, rl = vt.ReactCurrentBatchConfig, bt = 0, G = null, ie = null, le = null, Bi = !1, ur = !1, xr = 0, Zm = 0;
function me() {
  throw Error(S(321));
}
function Gu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n]))
      return !1;
  return !0;
}
function Yu(e, t, n, r, i, o) {
  if (bt = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, mi.current = e === null || e.memoizedState === null ? th : nh, e = n(r, i), ur) {
    o = 0;
    do {
      if (ur = !1, xr = 0, 25 <= o)
        throw Error(S(301));
      o += 1, le = ie = null, t.updateQueue = null, mi.current = rh, e = n(r, i);
    } while (ur);
  }
  if (mi.current = Hi, t = ie !== null && ie.next !== null, bt = 0, le = ie = G = null, Bi = !1, t)
    throw Error(S(300));
  return e;
}
function Xu() {
  var e = xr !== 0;
  return xr = 0, e;
}
function tt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? G.memoizedState = le = e : le = le.next = e, le;
}
function Ve() {
  if (ie === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ie.next;
  var t = le === null ? G.memoizedState : le.next;
  if (t !== null)
    le = t, ie = e;
  else {
    if (e === null)
      throw Error(S(310));
    ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, le === null ? G.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
  var t = Ve(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ie, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      i.next = o.next, o.next = l;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var u = l = null, s = null, a = o;
    do {
      var h = a.lane;
      if ((bt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = f, l = r) : s = s.next = f, G.lanes |= h, en |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? l = r : s.next = u, be(r, t.memoizedState) || (_e = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, G.lanes |= o, en |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ol(e) {
  var t = Ve(), n = t.queue;
  if (n === null)
    throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    be(o, t.memoizedState) || (_e = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Of() {
}
function Rf(e, t) {
  var n = G, r = Ve(), i = t(), o = !be(r.memoizedState, i);
  if (o && (r.memoizedState = i, _e = !0), r = r.queue, Ju(Lf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, Nr(9, Af.bind(null, n, r, i, t), void 0, null), ue === null)
      throw Error(S(349));
    bt & 30 || zf(n, t, i);
  }
  return i;
}
function zf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Af(e, t, n, r) {
  t.value = n, t.getSnapshot = r, If(t) && $f(e);
}
function Lf(e, t, n) {
  return n(function() {
    If(t) && $f(e);
  });
}
function If(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function $f(e) {
  var t = ht(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function fa(e) {
  var t = tt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = eh.bind(null, G, e), [t.memoizedState, e];
}
function Nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Mf() {
  return Ve().memoizedState;
}
function hi(e, t, n, r) {
  var i = tt();
  G.flags |= e, i.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function oo(e, t, n, r) {
  var i = Ve();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var l = ie.memoizedState;
    if (o = l.destroy, r !== null && Gu(r, l.deps)) {
      i.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  G.flags |= e, i.memoizedState = Nr(1 | t, n, o, r);
}
function da(e, t) {
  return hi(8390656, 8, e, t);
}
function Ju(e, t) {
  return oo(2048, 8, e, t);
}
function jf(e, t) {
  return oo(4, 2, e, t);
}
function Df(e, t) {
  return oo(4, 4, e, t);
}
function Ff(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Uf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oo(4, 4, Ff.bind(null, t, e), n);
}
function Zu() {
}
function Bf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Hf(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Gu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Wf(e, t, n) {
  return bt & 21 ? (be(n, t) || (n = Gc(), G.lanes |= n, en |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _e = !0), e.memoizedState = n);
}
function qm(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = rl.transition;
  rl.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, rl.transition = r;
  }
}
function Vf() {
  return Ve().memoizedState;
}
function bm(e, t, n) {
  var r = It(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kf(e))
    Qf(t, n);
  else if (n = Pf(e, t, n, r), n !== null) {
    var i = Se();
    qe(n, e, r, i), Gf(n, t, r);
  }
}
function eh(e, t, n) {
  var r = It(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kf(e))
    Qf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var l = t.lastRenderedState, u = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = u, be(u, l)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Hu(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Pf(e, t, i, r), n !== null && (i = Se(), qe(n, e, r, i), Gf(n, t, r));
  }
}
function Kf(e) {
  var t = e.alternate;
  return e === G || t !== null && t === G;
}
function Qf(e, t) {
  ur = Bi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Tu(e, n);
  }
}
var Hi = { readContext: We, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, th = { readContext: We, useCallback: function(e, t) {
  return tt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: da, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hi(
    4194308,
    4,
    Ff.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return hi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return hi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = bm.bind(null, G, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tt();
  return e = { current: e }, t.memoizedState = e;
}, useState: fa, useDebugValue: Zu, useDeferredValue: function(e) {
  return tt().memoizedState = e;
}, useTransition: function() {
  var e = fa(!1), t = e[0];
  return e = qm.bind(null, e[1]), tt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = G, i = tt();
  if (K) {
    if (n === void 0)
      throw Error(S(407));
    n = n();
  } else {
    if (n = t(), ue === null)
      throw Error(S(349));
    bt & 30 || zf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, da(Lf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Nr(9, Af.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = tt(), t = ue.identifierPrefix;
  if (K) {
    var n = ft, r = ct;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = xr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Zm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, nh = {
  readContext: We,
  useCallback: Bf,
  useContext: We,
  useEffect: Ju,
  useImperativeHandle: Uf,
  useInsertionEffect: jf,
  useLayoutEffect: Df,
  useMemo: Hf,
  useReducer: il,
  useRef: Mf,
  useState: function() {
    return il(Pr);
  },
  useDebugValue: Zu,
  useDeferredValue: function(e) {
    var t = Ve();
    return Wf(t, ie.memoizedState, e);
  },
  useTransition: function() {
    var e = il(Pr)[0], t = Ve().memoizedState;
    return [e, t];
  },
  useMutableSource: Of,
  useSyncExternalStore: Rf,
  useId: Vf,
  unstable_isNewReconciler: !1
}, rh = { readContext: We, useCallback: Bf, useContext: We, useEffect: Ju, useImperativeHandle: Uf, useInsertionEffect: jf, useLayoutEffect: Df, useMemo: Hf, useReducer: ol, useRef: Mf, useState: function() {
  return ol(Pr);
}, useDebugValue: Zu, useDeferredValue: function(e) {
  var t = Ve();
  return ie === null ? t.memoizedState = e : Wf(t, ie.memoizedState, e);
}, useTransition: function() {
  var e = ol(Pr)[0], t = Ve().memoizedState;
  return [e, t];
}, useMutableSource: Of, useSyncExternalStore: Rf, useId: Vf, unstable_isNewReconciler: !1 };
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lo = { isMounted: function(e) {
  return (e = e._reactInternals) ? rn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), i = It(e), o = dt(r, i);
  o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (qe(t, e, i, r), pi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), i = It(e), o = dt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = At(e, o, i), t !== null && (qe(t, e, i, r), pi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = It(e), i = dt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = At(e, i, r), t !== null && (qe(t, e, r, n), pi(t, e, r));
} };
function pa(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(i, o) : !0;
}
function Yf(e, t, n) {
  var r = !1, i = jt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = We(o) : (i = Pe(t) ? Zt : ve.current, r = t.contextTypes, o = (r = r != null) ? Tn(e, i) : jt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ma(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lo.enqueueReplaceState(t, t.state, null);
}
function Gl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Wu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = We(o) : (o = Pe(t) ? Zt : ve.current, i.context = Tn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ql(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && lo.enqueueReplaceState(i, i.state, null), Fi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t) {
  try {
    var n = "", r = t;
    do
      n += zp(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ih = typeof WeakMap == "function" ? WeakMap : Map;
function Xf(e, t, n) {
  n = dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Vi || (Vi = !0, iu = r), Yl(e, t);
  }, n;
}
function Jf(e, t, n) {
  n = dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Yl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Yl(e, t), typeof r != "function" && (Lt === null ? Lt = /* @__PURE__ */ new Set([this]) : Lt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function ha(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ih();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = vh.bind(null, e, t, n), t.then(e, e));
}
function ya(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ga(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e);
}
var oh = vt.ReactCurrentOwner, _e = !1;
function we(e, t, n, r) {
  t.child = e === null ? xf(t, null, n, r) : Rn(t, e.child, n, r);
}
function va(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return Cn(t, i), r = Yu(e, t, n, r, o, i), n = Xu(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yt(e, t, i)) : (K && n && Mu(t), t.flags |= 1, we(e, t, r, i), t.child);
}
function wa(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !os(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Zf(e, t, o, r, i)) : (e = wi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(l, r) && e.ref === t.ref)
      return yt(e, t, i);
  }
  return t.flags |= 1, e = $t(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Zf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (_e = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (_e = !0);
      else
        return t.lanes = e.lanes, yt(e, t, i);
  }
  return Xl(e, t, n, r, i);
}
function qf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, H(vn, Oe), Oe |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, H(vn, Oe), Oe |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, H(vn, Oe), Oe |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, H(vn, Oe), Oe |= r;
  return we(e, t, i, n), t.child;
}
function bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Xl(e, t, n, r, i) {
  var o = Pe(n) ? Zt : ve.current;
  return o = Tn(t, o), Cn(t, i), n = Yu(e, t, n, r, o, i), r = Xu(), e !== null && !_e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, yt(e, t, i)) : (K && r && Mu(t), t.flags |= 1, we(e, t, n, i), t.child);
}
function Sa(e, t, n, r, i) {
  if (Pe(n)) {
    var o = !0;
    Ii(t);
  } else
    o = !1;
  if (Cn(t, i), t.stateNode === null)
    yi(e, t), Yf(t, n, r), Gl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = We(a) : (a = Pe(n) ? Zt : ve.current, a = Tn(t, a));
    var h = n.getDerivedStateFromProps, f = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ma(t, l, r, a), Ct = !1;
    var p = t.memoizedState;
    l.state = p, Fi(t, r, l, i), s = t.memoizedState, u !== r || p !== s || xe.current || Ct ? (typeof h == "function" && (Ql(t, n, h, r), s = t.memoizedState), (u = Ct || pa(t, n, u, r, p, s, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Nf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ye(t.type, u), l.props = a, f = t.pendingProps, p = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Pe(n) ? Zt : ve.current, s = Tn(t, s));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== f || p !== s) && ma(t, l, r, s), Ct = !1, p = t.memoizedState, l.state = p, Fi(t, r, l, i);
    var g = t.memoizedState;
    u !== f || p !== g || xe.current || Ct ? (typeof v == "function" && (Ql(t, n, v, r), g = t.memoizedState), (a = Ct || pa(t, n, a, r, p, g, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Jl(e, t, n, r, o, i);
}
function Jl(e, t, n, r, i, o) {
  bf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return i && oa(t, n, !1), yt(e, t, o);
  r = t.stateNode, oh.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Rn(t, e.child, null, o), t.child = Rn(t, null, u, o)) : we(e, t, u, o), t.memoizedState = r.state, i && oa(t, n, !0), t.child;
}
function ed(e) {
  var t = e.stateNode;
  t.pendingContext ? ia(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ia(e, t.context, !1), Vu(e, t.containerInfo);
}
function ka(e, t, n, r, i) {
  return On(), Du(i), t.flags |= 256, we(e, t, n, r), t.child;
}
var Zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function td(e, t, n) {
  var r = t.pendingProps, i = Q.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), H(Q, i & 1), e === null)
    return Vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = ao(l, r, 0, null), e = Xt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ql(n), t.memoizedState = Zl, e) : qu(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null))
    return lh(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = $t(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = $t(u, o) : (o = Xt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? ql(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Zl, r;
  }
  return o = e.child, e = o.sibling, r = $t(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function qu(e, t) {
  return t = ao({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ri(e, t, n, r) {
  return r !== null && Du(r), Rn(t, e.child, null, n), e = qu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function lh(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ll(Error(S(422))), ri(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = ao({ mode: "visible", children: r.children }, i, 0, null), o = Xt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Rn(t, e.child, null, l), t.child.memoizedState = ql(l), t.memoizedState = Zl, o);
  if (!(t.mode & 1))
    return ri(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(S(419)), r = ll(o, r, void 0), ri(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, _e || u) {
    if (r = ue, r !== null) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, ht(e, i), qe(r, e, i, -1));
    }
    return is(), r = ll(Error(S(421))), ri(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wh.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, ze = zt(i.nextSibling), Ae = t, K = !0, Je = null, e !== null && (De[Fe++] = ct, De[Fe++] = ft, De[Fe++] = qt, ct = e.id, ft = e.overflow, qt = t), t = qu(t, r.children), t.flags |= 4096, t);
}
function Ea(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kl(e.return, t, n);
}
function ul(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function nd(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = Q.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ea(e, n, t);
          else if (e.tag === 19)
            Ea(e, n, t);
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
  if (H(Q, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Ui(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ul(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Ui(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        ul(t, !0, n, null, o);
        break;
      case "together":
        ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function yt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), en |= t.lanes, !(n & t.childLanes))
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
function uh(e, t, n) {
  switch (t.tag) {
    case 3:
      ed(t), On();
      break;
    case 5:
      Tf(t);
      break;
    case 1:
      Pe(t.type) && Ii(t);
      break;
    case 4:
      Vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      H(ji, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (H(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? td(e, t, n) : (H(Q, Q.current & 1), e = yt(e, t, n), e !== null ? e.sibling : null);
      H(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return nd(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), H(Q, Q.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qf(e, t, n);
  }
  return yt(e, t, n);
}
var rd, bl, id, od;
rd = function(e, t) {
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
bl = function() {
};
id = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Gt(lt.current);
    var o = null;
    switch (n) {
      case "input":
        i = kl(e, i), r = kl(e, r), o = [];
        break;
      case "select":
        i = Y({}, i, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = _l(e, i), r = _l(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ai);
    }
    Pl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var u = i[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (dr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = i != null ? i[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
            for (l in s)
              s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (dr.hasOwnProperty(a) ? (s != null && a === "onScroll" && W("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
od = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
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
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function sh(e, t, n) {
  var r = t.pendingProps;
  switch (ju(t), t.tag) {
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
      return Pe(t.type) && Li(), he(t), null;
    case 3:
      return r = t.stateNode, zn(), V(xe), V(ve), Qu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (uu(Je), Je = null))), bl(e, t), he(t), null;
    case 5:
      Ku(t);
      var i = Gt(_r.current);
      if (n = t.type, e !== null && t.stateNode != null)
        id(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(S(166));
          return he(t), null;
        }
        if (e = Gt(lt.current), ti(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[it] = t, r[Er] = o, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < tr.length; i++)
                W(tr[i], r);
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
              zs(r, o), W("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, W("invalid", r);
              break;
            case "textarea":
              Ls(r, o), W("invalid", r);
          }
          Pl(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ei(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ei(
                r.textContent,
                u,
                e
              ), i = ["children", "" + u]) : dr.hasOwnProperty(l) && u != null && l === "onScroll" && W("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), As(r, o, !0);
              break;
            case "textarea":
              Qr(r), Is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ai);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[it] = t, e[Er] = r, rd(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Nl(n, r), n) {
              case "dialog":
                W("cancel", e), W("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < tr.length; i++)
                  W(tr[i], e);
                i = r;
                break;
              case "source":
                W("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                W(
                  "error",
                  e
                ), W("load", e), i = r;
                break;
              case "details":
                W("toggle", e), i = r;
                break;
              case "input":
                zs(e, r), i = kl(e, r), W("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Y({}, r, { value: void 0 }), W("invalid", e);
                break;
              case "textarea":
                Ls(e, r), i = _l(e, r), W("invalid", e);
                break;
              default:
                i = r;
            }
            Pl(n, i), u = i;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? $c(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Lc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && pr(e, s) : typeof s == "number" && pr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (dr.hasOwnProperty(o) ? s != null && o === "onScroll" && W("scroll", e) : s != null && Eu(e, o, s, l));
              }
            switch (n) {
              case "input":
                Qr(e), As(e, r, !1);
                break;
              case "textarea":
                Qr(e), Is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Mt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? wn(e, !!r.multiple, o, !1) : r.defaultValue != null && wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ai);
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
        od(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(S(166));
        if (n = Gt(_r.current), Gt(lt.current), ti(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[it] = t, (o = r.nodeValue !== n) && (e = Ae, e !== null))
            switch (e.tag) {
              case 3:
                ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[it] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (V(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && ze !== null && t.mode & 1 && !(t.flags & 128))
          Cf(), On(), t.flags |= 98560, o = !1;
        else if (o = ti(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(S(317));
            o[it] = t;
          } else
            On(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else
          Je !== null && (uu(Je), Je = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? oe === 0 && (oe = 3) : is())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return zn(), bl(e, t), e === null && Sr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Bu(t.type._context), he(t), null;
    case 17:
      return Pe(t.type) && Li(), he(t), null;
    case 19:
      if (V(Q), o = t.memoizedState, o === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Yn(o, !1);
        else {
          if (oe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Ui(e), l !== null) {
                for (t.flags |= 128, Yn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return H(Q, Q.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && b() > Ln && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ui(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !K)
              return he(t), null;
          } else
            2 * b() - o.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = Q.current, H(Q, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return rs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Oe & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ah(e, t) {
  switch (ju(t), t.tag) {
    case 1:
      return Pe(t.type) && Li(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zn(), V(xe), V(ve), Qu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ku(t), null;
    case 13:
      if (V(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(S(340));
        On();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return V(Q), null;
    case 4:
      return zn(), null;
    case 10:
      return Bu(t.type._context), null;
    case 22:
    case 23:
      return rs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ii = !1, ge = !1, ch = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function gn(e, t) {
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
function eu(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Ca = !1;
function fh(e, t) {
  if (jl = Oi, e = cf(), $u(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0, u = -1, s = -1, a = 0, h = 0, f = e, p = null;
          t:
            for (; ; ) {
              for (var v; f !== n || i !== 0 && f.nodeType !== 3 || (u = l + i), f !== o || r !== 0 && f.nodeType !== 3 || (s = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (v = f.firstChild) !== null; )
                p = f, f = v;
              for (; ; ) {
                if (f === e)
                  break t;
                if (p === n && ++a === i && (u = l), p === o && ++h === r && (s = l), (v = f.nextSibling) !== null)
                  break;
                f = p, p = f.parentNode;
              }
              f = v;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Dl = { focusedElem: e, selectionRange: n }, Oi = !1, N = t; N !== null; )
    if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, N = e;
    else
      for (; N !== null; ) {
        t = N;
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
                  var y = g.memoizedProps, _ = g.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ye(t.type, y), _);
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
          e.return = t.return, N = e;
          break;
        }
        N = t.return;
      }
  return g = Ca, Ca = !1, g;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && eu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function uo(e, t) {
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
function tu(e) {
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
function ld(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[it], delete t[Er], delete t[Bl], delete t[Gm], delete t[Ym])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _a(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ud(e.return))
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
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ai));
  else if (r !== 4 && (e = e.child, e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; )
      nu(e, t, n), e = e.sibling;
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; )
      ru(e, t, n), e = e.sibling;
}
var ae = null, Xe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; )
    sd(e, t, n), n = n.sibling;
}
function sd(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(bi, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || gn(n, t);
    case 6:
      var r = ae, i = Xe;
      ae = null, kt(e, t, n), ae = r, Xe = i, ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null && (Xe ? (e = ae, n = n.stateNode, e.nodeType === 8 ? el(e.parentNode, n) : e.nodeType === 1 && el(e, n), gr(e)) : el(ae, n.stateNode));
      break;
    case 4:
      r = ae, i = Xe, ae = n.stateNode.containerInfo, Xe = !0, kt(e, t, n), ae = r, Xe = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && eu(n, t, l), i = i.next;
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (!ge && (gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, kt(e, t, n), ge = r) : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function xa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ch()), t.forEach(function(r) {
      var i = Sh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, l = t, u = l;
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
        sd(o, l, i), ae = null, Xe = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (a) {
        Z(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ad(t, e), t = t.sibling;
}
function ad(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ge(t, e), et(e), r & 4) {
        try {
          sr(3, e, e.return), uo(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          sr(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      Ge(t, e), et(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (Ge(t, e), et(e), r & 512 && n !== null && gn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          pr(i, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Rc(i, o), Nl(u, l);
            var a = Nl(u, o);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], f = s[l + 1];
              h === "style" ? $c(i, f) : h === "dangerouslySetInnerHTML" ? Lc(i, f) : h === "children" ? pr(i, f) : Eu(i, h, f, a);
            }
            switch (u) {
              case "input":
                El(i, o);
                break;
              case "textarea":
                zc(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? wn(i, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? wn(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : wn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Er] = o;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ge(t, e), et(e), r & 4) {
        if (e.stateNode === null)
          throw Error(S(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ge(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          gr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      Ge(t, e), et(e);
      break;
    case 13:
      Ge(t, e), et(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ts = b())), r & 4 && xa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (a = ge) || h, Ge(t, e), ge = a) : Ge(t, e), et(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (N = e, h = e.child; h !== null; ) {
            for (f = N = h; N !== null; ) {
              switch (p = N, v = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  sr(4, p, p.return);
                  break;
                case 1:
                  gn(p, p.return);
                  var g = p.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
                    }
                  }
                  break;
                case 5:
                  gn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Na(f);
                    continue;
                  }
              }
              v !== null ? (v.return = p, N = v) : Na(f);
            }
            h = h.sibling;
          }
        e:
          for (h = null, f = e; ; ) {
            if (f.tag === 5) {
              if (h === null) {
                h = f;
                try {
                  i = f.stateNode, a ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, s = f.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ic("display", l));
                } catch (y) {
                  Z(e, e.return, y);
                }
              }
            } else if (f.tag === 6) {
              if (h === null)
                try {
                  f.stateNode.nodeValue = a ? "" : f.memoizedProps;
                } catch (y) {
                  Z(e, e.return, y);
                }
            } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
            if (f === e)
              break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e)
                break e;
              h === f && (h = null), f = f.return;
            }
            h === f && (h = null), f.sibling.return = f.return, f = f.sibling;
          }
      }
      break;
    case 19:
      Ge(t, e), et(e), r & 4 && xa(e);
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
          if (ud(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (pr(i, ""), r.flags &= -33);
          var o = _a(e);
          ru(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = _a(e);
          nu(e, u, l);
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
function dh(e, t, n) {
  N = e, cd(e);
}
function cd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || ii;
      if (!l) {
        var u = i.alternate, s = u !== null && u.memoizedState !== null || ge;
        u = ii;
        var a = ge;
        if (ii = l, (ge = s) && !a)
          for (N = i; N !== null; )
            l = N, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ta(i) : s !== null ? (s.return = l, N = s) : Ta(i);
        for (; o !== null; )
          N = o, cd(o), o = o.sibling;
        N = i, ii = u, ge = a;
      }
      Pa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, N = o) : Pa(e);
  }
}
function Pa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || uo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ca(t, o, r);
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
                ca(t, l, n);
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
                    var f = h.dehydrated;
                    f !== null && gr(f);
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
        ge || t.flags & 512 && tu(t);
      } catch (p) {
        Z(t, t.return, p);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Na(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Ta(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uo(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, i, s);
            }
          }
          var o = t.return;
          try {
            tu(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            tu(t);
          } catch (s) {
            Z(t, l, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var ph = Math.ceil, Wi = vt.ReactCurrentDispatcher, bu = vt.ReactCurrentOwner, He = vt.ReactCurrentBatchConfig, I = 0, ue = null, ne = null, fe = 0, Oe = 0, vn = Ft(0), oe = 0, Tr = null, en = 0, so = 0, es = 0, ar = null, Ce = null, ts = 0, Ln = 1 / 0, st = null, Vi = !1, iu = null, Lt = null, oi = !1, Nt = null, Ki = 0, cr = 0, ou = null, gi = -1, vi = 0;
function Se() {
  return I & 6 ? b() : gi !== -1 ? gi : gi = b();
}
function It(e) {
  return e.mode & 1 ? I & 2 && fe !== 0 ? fe & -fe : Jm.transition !== null ? (vi === 0 && (vi = Gc()), vi) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ef(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < cr)
    throw cr = 0, ou = null, Error(S(185));
  Ir(e, n, r), (!(I & 2) || e !== ue) && (e === ue && (!(I & 2) && (so |= n), oe === 4 && xt(e, fe)), Ne(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Ln = b() + 500, io && Ut()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = Ti(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && js(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && js(n), t === 1)
      e.tag === 0 ? Xm(Oa.bind(null, e)) : Sf(Oa.bind(null, e)), Km(function() {
        !(I & 6) && Ut();
      }), n = null;
    else {
      switch (Yc(r)) {
        case 1:
          n = Nu;
          break;
        case 4:
          n = Kc;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = Qc;
          break;
        default:
          n = Ni;
      }
      n = vd(n, fd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fd(e, t) {
  if (gi = -1, vi = 0, I & 6)
    throw Error(S(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n)
    return null;
  var r = Ti(e, e === ue ? fe : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Qi(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = pd();
    (ue !== e || fe !== t) && (st = null, Ln = b() + 500, Yt(e, t));
    do
      try {
        yh();
        break;
      } catch (u) {
        dd(e, u);
      }
    while (1);
    Uu(), Wi.current = o, I = i, ne !== null ? t = 0 : (ue = null, fe = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (i = Al(e), i !== 0 && (r = i, t = lu(e, i))), t === 1)
      throw n = Tr, Yt(e, 0), xt(e, r), Ne(e, b()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !mh(i) && (t = Qi(e, r), t === 2 && (o = Al(e), o !== 0 && (r = o, t = lu(e, o))), t === 1))
        throw n = Tr, Yt(e, 0), xt(e, r), Ne(e, b()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Vt(e, Ce, st);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = ts + 500 - b(), 10 < t)) {
            if (Ti(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Ul(Vt.bind(null, e, Ce, st), t);
            break;
          }
          Vt(e, Ce, st);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ze(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ph(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ul(Vt.bind(null, e, Ce, st), r);
            break;
          }
          Vt(e, Ce, st);
          break;
        case 5:
          Vt(e, Ce, st);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ne(e, b()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function lu(e, t) {
  var n = ar;
  return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), e = Qi(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && uu(t)), e;
}
function uu(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function mh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!be(o(), i))
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
  for (t &= ~es, t &= ~so, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Oa(e) {
  if (I & 6)
    throw Error(S(327));
  _n();
  var t = Ti(e, 0);
  if (!(t & 1))
    return Ne(e, b()), null;
  var n = Qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Al(e);
    r !== 0 && (t = r, n = lu(e, r));
  }
  if (n === 1)
    throw n = Tr, Yt(e, 0), xt(e, t), Ne(e, b()), n;
  if (n === 6)
    throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vt(e, Ce, st), Ne(e, b()), null;
}
function ns(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (Ln = b() + 500, io && Ut());
  }
}
function tn(e) {
  Nt !== null && Nt.tag === 0 && !(I & 6) && _n();
  var t = I;
  I |= 1;
  var n = He.transition, r = F;
  try {
    if (He.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, He.transition = n, I = t, !(I & 6) && Ut();
  }
}
function rs() {
  Oe = vn.current, V(vn);
}
function Yt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Vm(n)), ne !== null)
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch (ju(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Li();
          break;
        case 3:
          zn(), V(xe), V(ve), Qu();
          break;
        case 5:
          Ku(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          V(Q);
          break;
        case 19:
          V(Q);
          break;
        case 10:
          Bu(r.type._context);
          break;
        case 22:
        case 23:
          rs();
      }
      n = n.return;
    }
  if (ue = e, ne = e = $t(e.current, null), fe = Oe = t, oe = 0, Tr = null, es = so = en = 0, Ce = ar = null, Qt !== null) {
    for (t = 0; t < Qt.length; t++)
      if (n = Qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
    Qt = null;
  }
  return e;
}
function dd(e, t) {
  do {
    var n = ne;
    try {
      if (Uu(), mi.current = Hi, Bi) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Bi = !1;
      }
      if (bt = 0, le = ie = G = null, ur = !1, xr = 0, bu.current = null, n === null || n.return === null) {
        oe = 1, Tr = t, ne = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = fe, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var v = ya(l);
          if (v !== null) {
            v.flags &= -257, ga(v, l, u, o, t), v.mode & 1 && ha(o, a, t), t = v, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ha(o, a, t), is();
              break e;
            }
            s = Error(S(426));
          }
        } else if (K && u.mode & 1) {
          var _ = ya(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), ga(_, l, u, o, t), Du(An(s, u));
            break e;
          }
        }
        o = s = An(s, u), oe !== 4 && (oe = 2), ar === null ? ar = [o] : ar.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var d = Xf(o, s, t);
              aa(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Lt === null || !Lt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Jf(o, u, t);
                aa(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hd(n);
    } catch (E) {
      t = E, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function pd() {
  var e = Wi.current;
  return Wi.current = Hi, e === null ? Hi : e;
}
function is() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ue === null || !(en & 268435455) && !(so & 268435455) || xt(ue, fe);
}
function Qi(e, t) {
  var n = I;
  I |= 2;
  var r = pd();
  (ue !== e || fe !== t) && (st = null, Yt(e, t));
  do
    try {
      hh();
      break;
    } catch (i) {
      dd(e, i);
    }
  while (1);
  if (Uu(), I = n, Wi.current = r, ne !== null)
    throw Error(S(261));
  return ue = null, fe = 0, oe;
}
function hh() {
  for (; ne !== null; )
    md(ne);
}
function yh() {
  for (; ne !== null && !Bp(); )
    md(ne);
}
function md(e) {
  var t = gd(e.alternate, e, Oe);
  e.memoizedProps = e.pendingProps, t === null ? hd(e) : ne = t, bu.current = null;
}
function hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ah(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, ne = null;
        return;
      }
    } else if (n = sh(n, t, Oe), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Vt(e, t, n) {
  var r = F, i = He.transition;
  try {
    He.transition = null, F = 1, gh(e, t, n, r);
  } finally {
    He.transition = i, F = r;
  }
  return null;
}
function gh(e, t, n, r) {
  do
    _n();
  while (Nt !== null);
  if (I & 6)
    throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Zp(e, o), e === ue && (ne = ue = null, fe = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0, vd(Ni, function() {
    return _n(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = He.transition, He.transition = null;
    var l = F;
    F = 1;
    var u = I;
    I |= 4, bu.current = null, fh(e, n), ad(n, e), jm(Dl), Oi = !!jl, Dl = jl = null, e.current = n, dh(n), Hp(), I = u, F = l, He.transition = o;
  } else
    e.current = n;
  if (oi && (oi = !1, Nt = e, Ki = i), o = e.pendingLanes, o === 0 && (Lt = null), Kp(n.stateNode), Ne(e, b()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vi)
    throw Vi = !1, e = iu, iu = null, e;
  return Ki & 1 && e.tag !== 0 && _n(), o = e.pendingLanes, o & 1 ? e === ou ? cr++ : (cr = 0, ou = e) : cr = 0, Ut(), null;
}
function _n() {
  if (Nt !== null) {
    var e = Yc(Ki), t = He.transition, n = F;
    try {
      if (He.transition = null, F = 16 > e ? 16 : e, Nt === null)
        var r = !1;
      else {
        if (e = Nt, Nt = null, Ki = 0, I & 6)
          throw Error(S(331));
        var i = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var o = N, l = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, h, o);
                  }
                  var f = h.child;
                  if (f !== null)
                    f.return = h, N = f;
                  else
                    for (; N !== null; ) {
                      h = N;
                      var p = h.sibling, v = h.return;
                      if (ld(h), h === a) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = v, N = p;
                        break;
                      }
                      N = v;
                    }
                }
              }
              var g = o.alternate;
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
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null)
            l.return = o, N = l;
          else
            e:
              for (; N !== null; ) {
                if (o = N, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(9, o, o.return);
                  }
                var d = o.sibling;
                if (d !== null) {
                  d.return = o.return, N = d;
                  break e;
                }
                N = o.return;
              }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          l = N;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null)
            m.return = l, N = m;
          else
            e:
              for (l = c; N !== null; ) {
                if (u = N, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        uo(9, u);
                    }
                  } catch (E) {
                    Z(u, u.return, E);
                  }
                if (u === l) {
                  N = null;
                  break e;
                }
                var w = u.sibling;
                if (w !== null) {
                  w.return = u.return, N = w;
                  break e;
                }
                N = u.return;
              }
        }
        if (I = i, Ut(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(bi, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, He.transition = t;
    }
  }
  return !1;
}
function Ra(e, t, n) {
  t = An(n, t), t = Xf(e, t, 1), e = At(e, t, 1), t = Se(), e !== null && (Ir(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3)
    Ra(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ra(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Lt === null || !Lt.has(r))) {
          e = An(n, e), e = Jf(t, e, 1), t = At(t, e, 1), e = Se(), t !== null && (Ir(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, ue === e && (fe & n) === n && (oe === 4 || oe === 3 && (fe & 130023424) === fe && 500 > b() - ts ? Yt(e, 0) : es |= n), Ne(e, t);
}
function yd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = Se();
  e = ht(e, t), e !== null && (Ir(e, t, n), Ne(e, n));
}
function wh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yd(e, n);
}
function Sh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), yd(e, n);
}
var gd;
gd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current)
      _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return _e = !1, uh(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else
    _e = !1, K && t.flags & 1048576 && kf(t, Mi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      yi(e, t), e = t.pendingProps;
      var i = Tn(t, ve.current);
      Cn(t, n), i = Yu(null, t, r, e, i, n);
      var o = Xu();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Ii(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Wu(t), i.updater = lo, t.stateNode = i, i._reactInternals = t, Gl(t, r, e, n), t = Jl(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Mu(t), we(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (yi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Eh(r), e = Ye(r, e), i) {
          case 0:
            t = Xl(null, t, r, e, n);
            break e;
          case 1:
            t = Sa(null, t, r, e, n);
            break e;
          case 11:
            t = va(null, t, r, e, n);
            break e;
          case 14:
            t = wa(null, t, r, Ye(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ye(r, i), Xl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ye(r, i), Sa(e, t, r, i, n);
    case 3:
      e: {
        if (ed(t), e === null)
          throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Nf(e, t), Fi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = An(Error(S(423)), t), t = ka(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = An(Error(S(424)), t), t = ka(e, t, r, n, i);
            break e;
          } else
            for (ze = zt(t.stateNode.containerInfo.firstChild), Ae = t, K = !0, Je = null, n = xf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (On(), r === i) {
            t = yt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tf(t), e === null && Vl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Fl(r, i) ? l = null : o !== null && Fl(r, o) && (t.flags |= 32), bf(e, t), we(e, t, l, n), t.child;
    case 6:
      return e === null && Vl(t), null;
    case 13:
      return td(e, t, n);
    case 4:
      return Vu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ye(r, i), va(e, t, r, i, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, H(ji, r._currentValue), r._currentValue = l, o !== null)
          if (be(o.value, l)) {
            if (o.children === i.children && !xe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                l = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = dt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Kl(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (l = o.return, l === null)
                  throw Error(S(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Kl(l, n, t), l = o.sibling;
              } else
                l = o.child;
              if (l !== null)
                l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (o = l.sibling, o !== null) {
                    o.return = l.return, l = o;
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        we(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Cn(t, n), i = We(i), r = r(i), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Ye(r, t.pendingProps), i = Ye(r.type, i), wa(e, t, r, i, n);
    case 15:
      return Zf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ye(r, i), yi(e, t), t.tag = 1, Pe(r) ? (e = !0, Ii(t)) : e = !1, Cn(t, n), Yf(t, r, i), Gl(t, r, i, n), Jl(null, t, r, !0, e, n);
    case 19:
      return nd(e, t, n);
    case 22:
      return qf(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function vd(e, t) {
  return Vc(e, t);
}
function kh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Be(e, t, n, r) {
  return new kh(e, t, n, r);
}
function os(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Eh(e) {
  if (typeof e == "function")
    return os(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === _u)
      return 11;
    if (e === xu)
      return 14;
  }
  return 2;
}
function $t(e, t) {
  var n = e.alternate;
  return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wi(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function")
    os(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case sn:
          return Xt(n.children, i, o, t);
        case Cu:
          l = 8, i |= 8;
          break;
        case gl:
          return e = Be(12, n, t, i | 2), e.elementType = gl, e.lanes = o, e;
        case vl:
          return e = Be(13, n, t, i), e.elementType = vl, e.lanes = o, e;
        case wl:
          return e = Be(19, n, t, i), e.elementType = wl, e.lanes = o, e;
        case Nc:
          return ao(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xc:
                l = 10;
                break e;
              case Pc:
                l = 9;
                break e;
              case _u:
                l = 11;
                break e;
              case xu:
                l = 14;
                break e;
              case Et:
                l = 16, r = null;
                break e;
            }
          throw Error(S(130, e == null ? e : typeof e, ""));
      }
  return t = Be(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Xt(e, t, n, r) {
  return e = Be(7, e, r, t), e.lanes = n, e;
}
function ao(e, t, n, r) {
  return e = Be(22, e, r, t), e.elementType = Nc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sl(e, t, n) {
  return e = Be(6, e, null, t), e.lanes = n, e;
}
function al(e, t, n) {
  return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ch(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wo(0), this.expirationTimes = Wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ls(e, t, n, r, i, o, l, u, s) {
  return e = new Ch(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Wu(o), e;
}
function _h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: un, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wd(e) {
  if (!e)
    return jt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1)
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
      return wf(e, n, t);
  }
  return t;
}
function Sd(e, t, n, r, i, o, l, u, s) {
  return e = ls(n, r, !0, e, i, o, l, u, s), e.context = wd(null), n = e.current, r = Se(), i = It(n), o = dt(r, i), o.callback = t ?? null, At(n, o, i), e.current.lanes = i, Ir(e, i, r), Ne(e, r), e;
}
function co(e, t, n, r) {
  var i = t.current, o = Se(), l = It(i);
  return n = wd(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(i, t, l), e !== null && (qe(e, i, l, o), pi(e, i, l)), l;
}
function Gi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function za(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function us(e, t) {
  za(e, t), (e = e.alternate) && za(e, t);
}
function xh() {
  return null;
}
var kd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ss(e) {
  this._internalRoot = e;
}
fo.prototype.render = ss.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(S(409));
  co(e, t, null, null);
};
fo.prototype.unmount = ss.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function() {
      co(null, e, null, null);
    }), t[mt] = null;
  }
};
function fo(e) {
  this._internalRoot = e;
}
fo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Zc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _t.length && t !== 0 && t < _t[n].priority; n++)
      ;
    _t.splice(n, 0, e), n === 0 && bc(e);
  }
};
function as(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function po(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Aa() {
}
function Ph(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Gi(l);
        o.call(a);
      };
    }
    var l = Sd(t, r, e, 0, null, !1, !1, "", Aa);
    return e._reactRootContainer = l, e[mt] = l.current, Sr(e.nodeType === 8 ? e.parentNode : e), tn(), l;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Gi(s);
      u.call(a);
    };
  }
  var s = ls(e, 0, !1, null, null, !1, !1, "", Aa);
  return e._reactRootContainer = s, e[mt] = s.current, Sr(e.nodeType === 8 ? e.parentNode : e), tn(function() {
    co(t, s, n, r);
  }), s;
}
function mo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = Gi(l);
        u.call(s);
      };
    }
    co(t, l, e, i);
  } else
    l = Ph(n, t, e, i, r);
  return Gi(l);
}
Xc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 && (Tu(t, n | 1), Ne(t, b()), !(I & 6) && (Ln = b() + 500, Ut()));
      }
      break;
    case 13:
      tn(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var i = Se();
          qe(r, e, 1, i);
        }
      }), us(e, 1);
  }
};
Ou = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = Se();
      qe(t, e, 134217728, n);
    }
    us(e, 134217728);
  }
};
Jc = function(e) {
  if (e.tag === 13) {
    var t = It(e), n = ht(e, t);
    if (n !== null) {
      var r = Se();
      qe(n, e, t, r);
    }
    us(e, t);
  }
};
Zc = function() {
  return F;
};
qc = function(e, t) {
  var n = F;
  try {
    return F = e, t();
  } finally {
    F = n;
  }
};
Ol = function(e, t, n) {
  switch (t) {
    case "input":
      if (El(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ro(r);
            if (!i)
              throw Error(S(90));
            Oc(r), El(r, i);
          }
        }
      }
      break;
    case "textarea":
      zc(e, n);
      break;
    case "select":
      t = n.value, t != null && wn(e, !!n.multiple, t, !1);
  }
};
Dc = ns;
Fc = tn;
var Nh = { usingClientEntryPoint: !1, Events: [Mr, dn, ro, Mc, jc, ns] }, Xn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Th = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || xh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!li.isDisabled && li.supportsFiber)
    try {
      bi = li.inject(Th), ot = li;
    } catch {
    }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!as(t))
    throw Error(S(200));
  return _h(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!as(e))
    throw Error(S(299));
  var n = !1, r = "", i = kd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ls(e, 1, !1, null, null, n, !1, r, i), e[mt] = t.current, Sr(e.nodeType === 8 ? e.parentNode : e), new ss(t);
};
$e.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = Hc(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return tn(e);
};
$e.hydrate = function(e, t, n) {
  if (!po(t))
    throw Error(S(200));
  return mo(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!as(e))
    throw Error(S(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = kd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Sd(t, null, e, 1, n ?? null, i, !1, o, l), e[mt] = t.current, Sr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new fo(t);
};
$e.render = function(e, t, n) {
  if (!po(t))
    throw Error(S(200));
  return mo(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!po(e))
    throw Error(S(40));
  return e._reactRootContainer ? (tn(function() {
    mo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[mt] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = ns;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!po(n))
    throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(S(38));
  return mo(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function Ed() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed);
    } catch (e) {
      console.error(e);
    }
}
Ed(), kc.exports = $e;
var Oh = kc.exports, Cd, La = Oh;
Cd = La.createRoot, La.hydrateRoot;
function Rh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ia = "$$material";
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
function ho(e, t) {
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
var zh = !1;
function Ah(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Lh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ih = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !zh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lh(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Ah(i);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ye = "-ms-", Yi = "-moz-", $ = "-webkit-", _d = "comm", cs = "rule", fs = "decl", $h = "@import", xd = "@keyframes", Mh = "@layer", jh = Math.abs, yo = String.fromCharCode, Dh = Object.assign;
function Fh(e, t) {
  return ce(e, 0) ^ 45 ? (((t << 2 ^ ce(e, 0)) << 2 ^ ce(e, 1)) << 2 ^ ce(e, 2)) << 2 ^ ce(e, 3) : 0;
}
function Pd(e) {
  return e.trim();
}
function Uh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function su(e, t) {
  return e.indexOf(t);
}
function ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function Or(e, t, n) {
  return e.slice(t, n);
}
function nt(e) {
  return e.length;
}
function ds(e) {
  return e.length;
}
function ui(e, t) {
  return t.push(e), e;
}
function Bh(e, t) {
  return e.map(t).join("");
}
var go = 1, In = 1, Nd = 0, Te = 0, te = 0, Dn = "";
function vo(e, t, n, r, i, o, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: go, column: In, length: l, return: "" };
}
function Jn(e, t) {
  return Dh(vo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Hh() {
  return te;
}
function Wh() {
  return te = Te > 0 ? ce(Dn, --Te) : 0, In--, te === 10 && (In = 1, go--), te;
}
function Le() {
  return te = Te < Nd ? ce(Dn, Te++) : 0, In++, te === 10 && (In = 1, go++), te;
}
function ut() {
  return ce(Dn, Te);
}
function Si() {
  return Te;
}
function Dr(e, t) {
  return Or(Dn, e, t);
}
function Rr(e) {
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
function Td(e) {
  return go = In = 1, Nd = nt(Dn = e), Te = 0, [];
}
function Od(e) {
  return Dn = "", e;
}
function ki(e) {
  return Pd(Dr(Te - 1, au(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vh(e) {
  for (; (te = ut()) && te < 33; )
    Le();
  return Rr(e) > 2 || Rr(te) > 3 ? "" : " ";
}
function Kh(e, t) {
  for (; --t && Le() && !(te < 48 || te > 102 || te > 57 && te < 65 || te > 70 && te < 97); )
    ;
  return Dr(e, Si() + (t < 6 && ut() == 32 && Le() == 32));
}
function au(e) {
  for (; Le(); )
    switch (te) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && au(te);
        break;
      case 40:
        e === 41 && au(e);
        break;
      case 92:
        Le();
        break;
    }
  return Te;
}
function Qh(e, t) {
  for (; Le() && e + te !== 47 + 10; )
    if (e + te === 42 + 42 && ut() === 47)
      break;
  return "/*" + Dr(t, Te - 1) + "*" + yo(e === 47 ? e : Le());
}
function Gh(e) {
  for (; !Rr(ut()); )
    Le();
  return Dr(e, Te);
}
function Yh(e) {
  return Od(Ei("", null, null, null, [""], e = Td(e), 0, [0], e));
}
function Ei(e, t, n, r, i, o, l, u, s) {
  for (var a = 0, h = 0, f = l, p = 0, v = 0, g = 0, y = 1, _ = 1, d = 1, c = 0, m = "", w = i, E = o, C = r, k = m; _; )
    switch (g = c, c = Le()) {
      case 40:
        if (g != 108 && ce(k, f - 1) == 58) {
          su(k += j(ki(c), "&", "&\f"), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ki(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Vh(g);
        break;
      case 92:
        k += Kh(Si() - 1, 7);
        continue;
      case 47:
        switch (ut()) {
          case 42:
          case 47:
            ui(Xh(Qh(Le(), Si()), t, n), s);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        u[a++] = nt(k) * d;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            _ = 0;
          case 59 + h:
            d == -1 && (k = j(k, /\f/g, "")), v > 0 && nt(k) - f && ui(v > 32 ? Ma(k + ";", r, n, f - 1) : Ma(j(k, " ", "") + ";", r, n, f - 2), s);
            break;
          case 59:
            k += ";";
          default:
            if (ui(C = $a(k, t, n, a, h, i, u, m, w = [], E = [], f), o), c === 123)
              if (h === 0)
                Ei(k, t, C, C, w, o, f, u, E);
              else
                switch (p === 99 && ce(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ei(e, C, C, r && ui($a(e, C, C, 0, 0, i, u, m, i, w = [], f), E), i, E, f, u, r ? w : E);
                    break;
                  default:
                    Ei(k, C, C, C, [""], E, 0, u, E);
                }
        }
        a = h = v = 0, y = d = 1, m = k = "", f = l;
        break;
      case 58:
        f = 1 + nt(k), v = g;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Wh() == 125)
            continue;
        }
        switch (k += yo(c), c * y) {
          case 38:
            d = h > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            u[a++] = (nt(k) - 1) * d, d = 1;
            break;
          case 64:
            ut() === 45 && (k += ki(Le())), p = ut(), h = f = nt(m = k += Gh(Si())), c++;
            break;
          case 45:
            g === 45 && nt(k) == 2 && (y = 0);
        }
    }
  return o;
}
function $a(e, t, n, r, i, o, l, u, s, a, h) {
  for (var f = i - 1, p = i === 0 ? o : [""], v = ds(p), g = 0, y = 0, _ = 0; g < r; ++g)
    for (var d = 0, c = Or(e, f + 1, f = jh(y = l[g])), m = e; d < v; ++d)
      (m = Pd(y > 0 ? p[d] + " " + c : j(c, /&\f/g, p[d]))) && (s[_++] = m);
  return vo(e, t, n, i === 0 ? cs : u, s, a, h);
}
function Xh(e, t, n) {
  return vo(e, t, n, _d, yo(Hh()), Or(e, 2, -2), 0);
}
function Ma(e, t, n, r) {
  return vo(e, t, n, fs, Or(e, 0, r), Or(e, r + 1, -1), r);
}
function xn(e, t) {
  for (var n = "", r = ds(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Jh(e, t, n, r) {
  switch (e.type) {
    case Mh:
      if (e.children.length)
        break;
    case $h:
    case fs:
      return e.return = e.return || e.value;
    case _d:
      return "";
    case xd:
      return e.return = e.value + "{" + xn(e.children, r) + "}";
    case cs:
      e.value = e.props.join(",");
  }
  return nt(n = xn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Zh(e) {
  var t = ds(e);
  return function(n, r, i, o) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, i, o) || "";
    return l;
  };
}
function qh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Rd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var bh = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = ut(), i === 38 && o === 12 && (n[r] = 1), !Rr(o); )
    Le();
  return Dr(t, Te);
}, ey = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Rr(i)) {
      case 0:
        i === 38 && ut() === 12 && (n[r] = 1), t[r] += bh(Te - 1, n, r);
        break;
      case 2:
        t[r] += ki(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = ut() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += yo(i);
    }
  while (i = Le());
  return t;
}, ty = function(t, n) {
  return Od(ey(Td(t), n));
}, ja = /* @__PURE__ */ new WeakMap(), ny = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ja.get(r)) && !i) {
      ja.set(t, !0);
      for (var o = [], l = ty(n, o), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, ry = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function zd(e, t) {
  switch (Fh(e, t)) {
    case 5103:
      return $ + "print-" + e + e;
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
      return $ + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return $ + e + Yi + e + ye + e + e;
    case 6828:
    case 4268:
      return $ + e + ye + e + e;
    case 6165:
      return $ + e + ye + "flex-" + e + e;
    case 5187:
      return $ + e + j(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return $ + e + ye + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return $ + e + ye + "flex-line-pack" + j(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return $ + e + ye + j(e, "shrink", "negative") + e;
    case 5292:
      return $ + e + ye + j(e, "basis", "preferred-size") + e;
    case 6060:
      return $ + "box-" + j(e, "-grow", "") + $ + e + ye + j(e, "grow", "positive") + e;
    case 4554:
      return $ + j(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, $ + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
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
      if (nt(e) - 1 - t > 6)
        switch (ce(e, t + 1)) {
          case 109:
            if (ce(e, t + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + Yi + (ce(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~su(e, "stretch") ? zd(j(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ce(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ce(e, nt(e) - 3 - (~su(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + $) + e;
        case 101:
          return j(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $ + (ce(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ce(e, t + 11)) {
        case 114:
          return $ + e + ye + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return $ + e + ye + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return $ + e + ye + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return $ + e + ye + e + e;
  }
  return e;
}
var iy = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case fs:
        t.return = zd(t.value, t.length);
        break;
      case xd:
        return xn([Jn(t, {
          value: j(t.value, "@", "@" + $)
        })], i);
      case cs:
        if (t.length)
          return Bh(t.props, function(o) {
            switch (Uh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return xn([Jn(t, {
                  props: [j(o, /:(read-\w+)/, ":" + Yi + "$1")]
                })], i);
              case "::placeholder":
                return xn([Jn(t, {
                  props: [j(o, /:(plac\w+)/, ":" + $ + "input-$1")]
                }), Jn(t, {
                  props: [j(o, /:(plac\w+)/, ":" + Yi + "$1")]
                }), Jn(t, {
                  props: [j(o, /:(plac\w+)/, ye + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, oy = [iy], ly = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var _ = y.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || oy, o = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var _ = y.getAttribute("data-emotion").split(" "), d = 1; d < _.length; d++)
        o[_[d]] = !0;
      u.push(y);
    }
  );
  var s, a = [ny, ry];
  {
    var h, f = [Jh, qh(function(y) {
      h.insert(y);
    })], p = Zh(a.concat(i, f)), v = function(_) {
      return xn(Yh(_), p);
    };
    s = function(_, d, c, m) {
      h = c, v(_ ? _ + "{" + d.styles + "}" : d.styles), m && (g.inserted[d.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Ih({
      key: n,
      container: l,
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
}, Ad = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se = typeof Symbol == "function" && Symbol.for, ps = se ? Symbol.for("react.element") : 60103, ms = se ? Symbol.for("react.portal") : 60106, wo = se ? Symbol.for("react.fragment") : 60107, So = se ? Symbol.for("react.strict_mode") : 60108, ko = se ? Symbol.for("react.profiler") : 60114, Eo = se ? Symbol.for("react.provider") : 60109, Co = se ? Symbol.for("react.context") : 60110, hs = se ? Symbol.for("react.async_mode") : 60111, _o = se ? Symbol.for("react.concurrent_mode") : 60111, xo = se ? Symbol.for("react.forward_ref") : 60112, Po = se ? Symbol.for("react.suspense") : 60113, uy = se ? Symbol.for("react.suspense_list") : 60120, No = se ? Symbol.for("react.memo") : 60115, To = se ? Symbol.for("react.lazy") : 60116, sy = se ? Symbol.for("react.block") : 60121, ay = se ? Symbol.for("react.fundamental") : 60117, cy = se ? Symbol.for("react.responder") : 60118, fy = se ? Symbol.for("react.scope") : 60119;
function je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ps:
        switch (e = e.type, e) {
          case hs:
          case _o:
          case wo:
          case ko:
          case So:
          case Po:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Co:
              case xo:
              case To:
              case No:
              case Eo:
                return e;
              default:
                return t;
            }
        }
      case ms:
        return t;
    }
  }
}
function Ld(e) {
  return je(e) === _o;
}
U.AsyncMode = hs;
U.ConcurrentMode = _o;
U.ContextConsumer = Co;
U.ContextProvider = Eo;
U.Element = ps;
U.ForwardRef = xo;
U.Fragment = wo;
U.Lazy = To;
U.Memo = No;
U.Portal = ms;
U.Profiler = ko;
U.StrictMode = So;
U.Suspense = Po;
U.isAsyncMode = function(e) {
  return Ld(e) || je(e) === hs;
};
U.isConcurrentMode = Ld;
U.isContextConsumer = function(e) {
  return je(e) === Co;
};
U.isContextProvider = function(e) {
  return je(e) === Eo;
};
U.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ps;
};
U.isForwardRef = function(e) {
  return je(e) === xo;
};
U.isFragment = function(e) {
  return je(e) === wo;
};
U.isLazy = function(e) {
  return je(e) === To;
};
U.isMemo = function(e) {
  return je(e) === No;
};
U.isPortal = function(e) {
  return je(e) === ms;
};
U.isProfiler = function(e) {
  return je(e) === ko;
};
U.isStrictMode = function(e) {
  return je(e) === So;
};
U.isSuspense = function(e) {
  return je(e) === Po;
};
U.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === wo || e === _o || e === ko || e === So || e === Po || e === uy || typeof e == "object" && e !== null && (e.$$typeof === To || e.$$typeof === No || e.$$typeof === Eo || e.$$typeof === Co || e.$$typeof === xo || e.$$typeof === ay || e.$$typeof === cy || e.$$typeof === fy || e.$$typeof === sy);
};
U.typeOf = je;
Ad.exports = U;
var dy = Ad.exports, Id = dy, py = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, my = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $d = {};
$d[Id.ForwardRef] = py;
$d[Id.Memo] = my;
var hy = !0;
function Md(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var ys = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  hy === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, gs = function(t, n, r) {
  ys(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function yy(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var gy = {
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
}, vy = !1, wy = /[A-Z]|^ms/g, Sy = /_EMO_([^_]+?)_([^]*?)_EMO_/g, jd = function(t) {
  return t.charCodeAt(1) === 45;
}, Da = function(t) {
  return t != null && typeof t != "boolean";
}, cl = /* @__PURE__ */ Rd(function(e) {
  return jd(e) ? e : e.replace(wy, "-$&").toLowerCase();
}), Fa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Sy, function(r, i, o) {
          return rt = {
            name: i,
            styles: o,
            next: rt
          }, i;
        });
  }
  return gy[t] !== 1 && !jd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, ky = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function zr(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return rt = {
          name: i.name,
          styles: i.styles,
          next: rt
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            rt = {
              name: l.name,
              styles: l.styles,
              next: rt
            }, l = l.next;
        var u = o.styles + ";";
        return u;
      }
      return Ey(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = rt, a = n(e);
        return rt = s, zr(e, t, a);
      }
      break;
    }
  }
  var h = n;
  if (t == null)
    return h;
  var f = t[h];
  return f !== void 0 ? f : h;
}
function Ey(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += zr(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Da(u) && (r += cl(o) + ":" + Fa(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && vy)
          throw new Error(ky);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Da(l[s]) && (r += cl(o) + ":" + Fa(o, l[s]) + ";");
        else {
          var a = zr(e, t, l);
          switch (o) {
            case "animation":
            case "animationName": {
              r += cl(o) + ":" + a + ";";
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
var Ua = /label:\s*([^\s;{]+)\s*(;|$)/g, rt;
function Oo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  rt = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += zr(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (i += zr(n, t, e[u]), r) {
      var s = o;
      i += s[u];
    }
  Ua.lastIndex = 0;
  for (var a = "", h; (h = Ua.exec(i)) !== null; )
    a += "-" + h[1];
  var f = yy(i) + a;
  return {
    name: f,
    styles: i,
    next: rt
  };
}
var Cy = function(t) {
  return t();
}, Dd = hl["useInsertionEffect"] ? hl["useInsertionEffect"] : !1, Fd = Dd || Cy, Ba = Dd || R.useLayoutEffect, _y = !1, Ud = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ly({
    key: "css"
  }) : null
);
Ud.Provider;
var vs = function(t) {
  return /* @__PURE__ */ R.forwardRef(function(n, r) {
    var i = R.useContext(Ud);
    return t(n, i, r);
  });
}, Fr = /* @__PURE__ */ R.createContext({}), ws = {}.hasOwnProperty, cu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xy = function(t, n) {
  var r = {};
  for (var i in n)
    ws.call(n, i) && (r[i] = n[i]);
  return r[cu] = t, r;
}, Py = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ys(n, r, i), Fd(function() {
    return gs(n, r, i);
  }), null;
}, Ny = /* @__PURE__ */ vs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[cu], o = [r], l = "";
  typeof e.className == "string" ? l = Md(t.registered, o, e.className) : e.className != null && (l = e.className + " ");
  var u = Oo(o, void 0, R.useContext(Fr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    ws.call(e, a) && a !== "css" && a !== cu && !_y && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Py, {
    cache: t,
    serialized: u,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ R.createElement(i, s));
}), Ty = Ny, fl = { exports: {} }, Ha;
function Oy() {
  return Ha || (Ha = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          for (var o in i)
            ({}).hasOwnProperty.call(i, o) && (n[o] = i[o]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(fl)), fl.exports;
}
Oy();
var Wa = function(t, n) {
  var r = arguments;
  if (n == null || !ws.call(n, "css"))
    return R.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = Ty, o[1] = xy(t, n);
  for (var l = 2; l < i; l++)
    o[l] = r[l];
  return R.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Wa || (Wa = {}));
var Ry = /* @__PURE__ */ vs(function(e, t) {
  var n = e.styles, r = Oo([n], void 0, R.useContext(Fr)), i = R.useRef();
  return Ba(function() {
    var o = t.key + "-global", l = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), l.hydrate([s])), i.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Ba(function() {
    var o = i.current, l = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && gs(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), zy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ay = /* @__PURE__ */ Rd(
  function(e) {
    return zy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ly = !1, Iy = Ay, $y = function(t) {
  return t !== "theme";
}, Va = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Iy : $y;
}, Ka = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(l) {
      return t.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, My = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ys(n, r, i), Fd(function() {
    return gs(n, r, i);
  }), null;
}, jy = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, l;
  n !== void 0 && (o = n.label, l = n.target);
  var u = Ka(t, n, r), s = u || Va(i), a = !s("as");
  return function() {
    var h = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && f.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      f.push.apply(f, h);
    else {
      var p = h[0];
      f.push(p[0]);
      for (var v = h.length, g = 1; g < v; g++)
        f.push(h[g], p[g]);
    }
    var y = vs(function(_, d, c) {
      var m = a && _.as || i, w = "", E = [], C = _;
      if (_.theme == null) {
        C = {};
        for (var k in _)
          C[k] = _[k];
        C.theme = R.useContext(Fr);
      }
      typeof _.className == "string" ? w = Md(d.registered, E, _.className) : _.className != null && (w = _.className + " ");
      var T = Oo(f.concat(E), d.registered, C);
      w += d.key + "-" + T.name, l !== void 0 && (w += " " + l);
      var B = a && u === void 0 ? Va(m) : s, A = {};
      for (var re in _)
        a && re === "as" || B(re) && (A[re] = _[re]);
      return A.className = w, c && (A.ref = c), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(My, {
        cache: d,
        serialized: T,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ R.createElement(m, A));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = f, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return l === void 0 && Ly ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), y.withComponent = function(_, d) {
      var c = e(_, de({}, n, d, {
        shouldForwardProp: Ka(y, d, !0)
      }));
      return c.apply(void 0, f);
    }, y;
  };
}, Dy = [
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
], Qa = jy.bind(null);
Dy.forEach(function(e) {
  Qa[e] = Qa(e);
});
function Fy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Uy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ O(Ry, {
    styles: typeof t == "function" ? (i) => t(Fy(i) ? n : i) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ga = [];
function By(e) {
  return Ga[0] = e, Oo(Ga);
}
function ln(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Bd(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || !ln(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Bd(e[n]);
  }), t;
}
function Xi(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? de({}, e) : e;
  return ln(e) && ln(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ R.isValidElement(t[i]) ? r[i] = t[i] : ln(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && ln(e[i]) ? r[i] = Xi(e[i], t[i], n) : n.clone ? r[i] = ln(t[i]) ? Bd(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Hy = ["values", "unit", "step"], Wy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => de({}, n, {
    [r.key]: r.val
  }), {});
};
function Vy(e) {
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
  } = e, i = ho(e, Hy), o = Wy(t), l = Object.keys(o);
  function u(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${n})`;
  }
  function a(p, v) {
    const g = l.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n}) and (max-width:${(g !== -1 && typeof t[l[g]] == "number" ? t[l[g]] : v) - r / 100}${n})`;
  }
  function h(p) {
    return l.indexOf(p) + 1 < l.length ? a(p, l[l.indexOf(p) + 1]) : u(p);
  }
  function f(p) {
    const v = l.indexOf(p);
    return v === 0 ? u(l[1]) : v === l.length - 1 ? s(l[v]) : a(p, l[l.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return de({
    keys: l,
    values: o,
    up: u,
    down: s,
    between: a,
    only: h,
    not: f,
    unit: n
  }, i);
}
const Ky = {
  borderRadius: 4
}, Qy = Ky;
function fr(e, t) {
  return t ? Xi(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ss = {
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
}, Ya = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ss[e]}px)`
};
function gt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Ya;
    return t.reduce((l, u, s) => (l[o.up(o.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Ya;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(o.values || Ss).indexOf(u) !== -1) {
        const s = o.up(u);
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
function Gy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function Xa(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Hd(e) {
  if (typeof e != "string")
    throw new Error(Rh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ro(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Ji(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Ro(e, n) || r, t && (i = t(i, r, e)), i;
}
function ee(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (l) => {
    if (l[t] == null)
      return null;
    const u = l[t], s = l.theme, a = Ro(s, r) || {};
    return gt(l, u, (f) => {
      let p = Ji(a, i, f);
      return f === p && typeof f == "string" && (p = Ji(a, i, `${t}${f === "default" ? "" : Hd(f)}`, f)), n === !1 ? p : {
        [n]: p
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function Yy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Xy = {
  m: "margin",
  p: "padding"
}, Jy = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ja = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zy = Yy((e) => {
  if (e.length > 2)
    if (Ja[e])
      e = Ja[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Xy[t], i = Jy[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), ks = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Es = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ks, ...Es];
function Ur(e, t, n, r) {
  var i;
  const o = (i = Ro(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (l) => typeof l == "string" ? l : o * l : Array.isArray(o) ? (l) => typeof l == "string" ? l : o[l] : typeof o == "function" ? o : () => {
  };
}
function Wd(e) {
  return Ur(e, "spacing", 8);
}
function Br(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function qy(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Br(t, n), r), {});
}
function by(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Zy(n), o = qy(i, r), l = e[n];
  return gt(e, l, o);
}
function Vd(e, t) {
  const n = Wd(e.theme);
  return Object.keys(e).map((r) => by(e, t, r, n)).reduce(fr, {});
}
function X(e) {
  return Vd(e, ks);
}
X.propTypes = {};
X.filterProps = ks;
function J(e) {
  return Vd(e, Es);
}
J.propTypes = {};
J.filterProps = Es;
function eg(e = 8) {
  if (e.mui)
    return e;
  const t = Wd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const l = t(o);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function zo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? fr(i, t[o](r)) : i, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Ue(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ke(e, t) {
  return ee({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const tg = Ke("border", Ue), ng = Ke("borderTop", Ue), rg = Ke("borderRight", Ue), ig = Ke("borderBottom", Ue), og = Ke("borderLeft", Ue), lg = Ke("borderColor"), ug = Ke("borderTopColor"), sg = Ke("borderRightColor"), ag = Ke("borderBottomColor"), cg = Ke("borderLeftColor"), fg = Ke("outline", Ue), dg = Ke("outlineColor"), Ao = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ur(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return gt(e, e.borderRadius, n);
  }
  return null;
};
Ao.propTypes = {};
Ao.filterProps = ["borderRadius"];
zo(tg, ng, rg, ig, og, lg, ug, sg, ag, cg, Ao, fg, dg);
const Lo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      gap: Br(t, r)
    });
    return gt(e, e.gap, n);
  }
  return null;
};
Lo.propTypes = {};
Lo.filterProps = ["gap"];
const Io = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Br(t, r)
    });
    return gt(e, e.columnGap, n);
  }
  return null;
};
Io.propTypes = {};
Io.filterProps = ["columnGap"];
const $o = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Br(t, r)
    });
    return gt(e, e.rowGap, n);
  }
  return null;
};
$o.propTypes = {};
$o.filterProps = ["rowGap"];
const pg = ee({
  prop: "gridColumn"
}), mg = ee({
  prop: "gridRow"
}), hg = ee({
  prop: "gridAutoFlow"
}), yg = ee({
  prop: "gridAutoColumns"
}), gg = ee({
  prop: "gridAutoRows"
}), vg = ee({
  prop: "gridTemplateColumns"
}), wg = ee({
  prop: "gridTemplateRows"
}), Sg = ee({
  prop: "gridTemplateAreas"
}), kg = ee({
  prop: "gridArea"
});
zo(Lo, Io, $o, pg, mg, hg, yg, gg, vg, wg, Sg, kg);
function Pn(e, t) {
  return t === "grey" ? t : e;
}
const Eg = ee({
  prop: "color",
  themeKey: "palette",
  transform: Pn
}), Cg = ee({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Pn
}), _g = ee({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Pn
});
zo(Eg, Cg, _g);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xg = ee({
  prop: "width",
  transform: Re
}), Cs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ss[n];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Re(n)
      };
    };
    return gt(e, e.maxWidth, t);
  }
  return null;
};
Cs.filterProps = ["maxWidth"];
const Pg = ee({
  prop: "minWidth",
  transform: Re
}), Ng = ee({
  prop: "height",
  transform: Re
}), Tg = ee({
  prop: "maxHeight",
  transform: Re
}), Og = ee({
  prop: "minHeight",
  transform: Re
});
ee({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
ee({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const Rg = ee({
  prop: "boxSizing"
});
zo(xg, Cs, Pg, Ng, Tg, Og, Rg);
const zg = {
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
    style: Ao
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Pn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Pn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Pn
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
    style: Lo
  },
  rowGap: {
    style: $o
  },
  columnGap: {
    style: Io
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
    style: Cs
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
}, Kd = zg;
function Ag(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Lg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ig() {
  function e(n, r, i, o) {
    const l = {
      [n]: r,
      theme: i
    }, u = o[n];
    if (!u)
      return {
        [n]: r
      };
    const {
      cssProperty: s = n,
      themeKey: a,
      transform: h,
      style: f
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const p = Ro(i, a) || {};
    return f ? f(l) : gt(l, r, (g) => {
      let y = Ji(p, h, g);
      return g === y && typeof g == "string" && (y = Ji(p, h, `${n}${g === "default" ? "" : Hd(g)}`, g)), s === !1 ? y : {
        [s]: y
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: o = {},
      nested: l
    } = n || {};
    if (!i)
      return null;
    const u = (r = o.unstable_sxConfig) != null ? r : Kd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const f = Gy(o.breakpoints), p = Object.keys(f);
      let v = f;
      return Object.keys(h).forEach((g) => {
        const y = Lg(h[g], o);
        if (y != null)
          if (typeof y == "object")
            if (u[g])
              v = fr(v, e(g, y, o, u));
            else {
              const _ = gt({
                theme: o
              }, y, (d) => ({
                [g]: d
              }));
              Ag(_, y) ? v[g] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : v = fr(v, _);
            }
          else
            v = fr(v, e(g, y, o, u));
      }), !l && o.modularCssLayers ? {
        "@layer sx": Xa(p, v)
      } : Xa(p, v);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Qd = Ig();
Qd.filterProps = ["sx"];
const $g = Qd;
function Mg(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const jg = ["breakpoints", "palette", "spacing", "shape"];
function Dg(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, l = ho(e, jg), u = Vy(n), s = eg(i);
  let a = Xi({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: de({
      mode: "light"
    }, r),
    spacing: s,
    shape: de({}, Qy, o)
  }, l);
  return a.applyStyles = Mg, a = t.reduce((h, f) => Xi(h, f), a), a.unstable_sxConfig = de({}, Kd, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(f) {
    return $g({
      sx: f,
      theme: this
    });
  }, a;
}
function Fg(e) {
  return Object.keys(e).length === 0;
}
function _s(e = null) {
  const t = R.useContext(Fr);
  return !t || Fg(t) ? e : t;
}
const Ug = Dg();
function Bg(e = Ug) {
  return _s(e);
}
function dl(e) {
  const t = By(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Hg({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Bg(n), i = t && r[t] || r;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((l) => dl(typeof l == "function" ? l(i) : l)) : o = dl(o)), /* @__PURE__ */ O(Uy, {
    styles: o
  });
}
const Wg = typeof window < "u" ? R.useLayoutEffect : R.useEffect, Vg = Wg;
let Za = 0;
function Kg(e) {
  const [t, n] = R.useState(e), r = e || t;
  return R.useEffect(() => {
    t == null && (Za += 1, n(`mui-${Za}`));
  }, [t]), r;
}
const qa = hl["useId".toString()];
function Qg(e) {
  if (qa !== void 0) {
    const t = qa();
    return e ?? t;
  }
  return Kg(e);
}
const Gg = /* @__PURE__ */ R.createContext(null), Gd = Gg;
function Yd() {
  return R.useContext(Gd);
}
const Yg = typeof Symbol == "function" && Symbol.for, Xg = Yg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Jg(e, t) {
  return typeof t == "function" ? t(e) : de({}, e, t);
}
function Zg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Yd(), i = R.useMemo(() => {
    const o = r === null ? n : Jg(r, n);
    return o != null && (o[Xg] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ O(Gd.Provider, {
    value: i,
    children: t
  });
}
const qg = ["value"], bg = /* @__PURE__ */ R.createContext();
function ev(e) {
  let {
    value: t
  } = e, n = ho(e, qg);
  return /* @__PURE__ */ O(bg.Provider, de({
    value: t ?? !0
  }, n));
}
const tv = /* @__PURE__ */ R.createContext(void 0);
function nv({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ O(tv.Provider, {
    value: e,
    children: t
  });
}
function rv(e) {
  const t = _s(), n = Qg() || "", {
    modularCssLayers: r
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? i = "" : typeof r == "string" ? i = r.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Vg(() => {
    const o = document.querySelector("head");
    if (!o)
      return;
    const l = o.firstChild;
    if (i) {
      var u;
      if (l && (u = l.hasAttribute) != null && u.call(l, "data-mui-layer-order") && l.getAttribute("data-mui-layer-order") === n)
        return;
      const a = document.createElement("style");
      a.setAttribute("data-mui-layer-order", n), a.textContent = i, o.prepend(a);
    } else {
      var s;
      (s = o.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || s.remove();
    }
  }, [i, n]), i ? /* @__PURE__ */ O(Hg, {
    styles: i
  }) : null;
}
const ba = {};
function ec(e, t, n, r = !1) {
  return R.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(i), l = e ? de({}, t, {
        [e]: o
      }) : o;
      return r ? () => l : l;
    }
    return e ? de({}, t, {
      [e]: n
    }) : de({}, t, n);
  }, [e, t, n, r]);
}
function iv(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, i = _s(ba), o = Yd() || ba, l = ec(r, i, n), u = ec(r, o, n, !0), s = l.direction === "rtl", a = rv(l);
  return /* @__PURE__ */ O(Zg, {
    theme: u,
    children: /* @__PURE__ */ O(Fr.Provider, {
      value: l,
      children: /* @__PURE__ */ O(ev, {
        value: s,
        children: /* @__PURE__ */ M(nv, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const ov = ["theme"];
function lv(e) {
  let {
    theme: t
  } = e, n = ho(e, ov);
  const r = t[Ia];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = de({}, r, {
    vars: null
  }) : t && !t.vars && (i = de({}, t, {
    vars: null
  }))), /* @__PURE__ */ O(iv, de({}, n, {
    themeId: r ? Ia : void 0,
    theme: i
  }));
}
const Jt = [
  {
    id: "minors",
    label: "Children / minors",
    optionKey: "detectMinors",
    description: "Flag if people who appear to be minors are visible."
  },
  {
    id: "animals",
    label: "Animals",
    optionKey: "detectAnimals",
    description: "Flag if any animal is visible."
  },
  {
    id: "culturalSensitive",
    label: "Cultural or sensitive imagery",
    optionKey: "detectCulturalSensitive",
    description: "Flag religious, cultural, memorial, or politically sensitive scenes for review."
  },
  {
    id: "firearmsOffensive",
    label: "Firearms or offensive items",
    optionKey: "detectFirearmsOffensive",
    description: "Flag firearms, other weapons, hate symbols, or graphic violence."
  }
], uv = [
  "apiBaseUrl",
  "apiToken",
  "nameProperty",
  "fileNameProperty",
  "descriptionProperty",
  "detectionReportProperty",
  "detectionStatusProperty",
  "detectionAnalyzedAtProperty"
], sv = [
  "detectMinors",
  "detectAnimals",
  "detectCulturalSensitive",
  "detectFirearmsOffensive"
], av = ["config", "settings", "json", "componentOptions"], cv = [
  /^optional-/i,
  /^your[-_]/i,
  /^https?:\/\/your/i,
  /^same-as-/i
];
function Xd(e) {
  const t = e.trim();
  return t ? cv.some((n) => n.test(t)) : !0;
}
function Jd(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return !1;
  const t = e;
  return typeof t.setEntityId == "function" || typeof t.setCulture == "function" || "entityId" in t && "culture" in t && "editingMode" in t;
}
function Ar(e) {
  if (e != null) {
    if (typeof e == "string")
      return e.trim() || void 0;
    if (typeof e == "number" || typeof e == "boolean")
      return String(e);
    if (Array.isArray(e)) {
      for (const t of e) {
        const n = Ar(t);
        if (n)
          return n;
      }
      return;
    }
    if (typeof e == "object") {
      const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us"];
      for (const r of n)
        if (r in t) {
          const i = Ar(t[r]);
          if (i)
            return i;
        }
    }
  }
}
function Zd(e) {
  if (typeof e == "boolean")
    return e;
  if (typeof e == "number")
    return e === 1 ? !0 : e === 0 ? !1 : void 0;
  if (typeof e == "string") {
    const t = e.trim().toLowerCase();
    return t === "true" || t === "yes" || t === "1" ? !0 : t === "false" || t === "no" || t === "0" ? !1 : void 0;
  }
  if (e && typeof e == "object" && !Array.isArray(e)) {
    const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us"];
    for (const r of n)
      if (r in t) {
        const i = Zd(t[r]);
        if (i != null)
          return i;
      }
  }
}
function tc(e, ...t) {
  for (const n of t)
    for (const [r, i] of Object.entries(e))
      if (r.toLowerCase() === n.toLowerCase()) {
        const o = Ar(i);
        if (o && !Xd(o))
          return o;
      }
}
function fv(e, t) {
  for (const [n, r] of Object.entries(e))
    if (n.toLowerCase() === t.toLowerCase())
      return Zd(r);
}
function dv(e) {
  for (const [t, n] of Object.entries(e)) {
    if (t.toLowerCase() !== "metadataproperties")
      continue;
    if (Array.isArray(n)) {
      const i = n.map((o) => Ar(o)).filter((o) => !!o);
      if (i.length > 0)
        return i.join(", ");
    }
    const r = Ar(n);
    if (r && !Xd(r))
      return r;
  }
}
function pv(e) {
  const t = {};
  for (const i of uv) {
    const o = tc(e, i);
    o && (t[i] = o);
  }
  for (const i of sv) {
    const o = fv(e, i);
    o != null && (t[i] = o);
  }
  const n = tc(e, "detectionReportStorage");
  n && (t.detectionReportStorage = n.trim().toLowerCase() === "string" ? "string" : "json");
  const r = dv(e);
  return r && (t.metadataProperties = r), t;
}
function fu(...e) {
  return e.reduce((t, n) => n ? {
    ...t,
    ...Object.fromEntries(
      Object.entries(n).filter(([, r]) => r != null && r !== "")
    )
  } : t, {});
}
function Ci(e) {
  if (!e || Jd(e))
    return;
  if (typeof e == "string") {
    const r = e.trim();
    if (!r)
      return;
    try {
      return Ci(JSON.parse(r));
    } catch {
      console.error("[CHImageDetection] Options must be valid JSON when provided as a string.");
      return;
    }
  }
  if (typeof e != "object" || Array.isArray(e))
    return;
  const t = e;
  let n = pv(t);
  for (const r of av) {
    const i = t[r];
    if (typeof i == "string" && i.trim())
      try {
        const o = Ci(JSON.parse(i));
        n = fu(n, o);
      } catch {
      }
    else
      i && typeof i == "object" && (n = fu(n, Ci(i)));
  }
  return n;
}
function mv(e, t) {
  const n = [];
  (t == null ? void 0 : t.config) != null && n.push(t.config), e != null && !Jd(e) && n.push(e), t && n.push(t);
  const r = fu(...n.map((i) => Ci(i)));
  return Object.keys(r).length > 0 ? r : void 0;
}
function hv(e) {
  var n, r;
  const t = [];
  return (n = e == null ? void 0 : e.apiBaseUrl) != null && n.trim() || t.push("apiBaseUrl"), (r = e == null ? void 0 : e.apiToken) != null && r.trim() || t.push("apiToken"), t;
}
function yv(e) {
  return e && {
    ...e,
    apiToken: e.apiToken ? "[set]" : void 0
  };
}
function gv(e) {
  return e != null && e.trim() ? e.split(/[,;\n]/).map((t) => t.trim()).filter(Boolean) : [];
}
function nc(e) {
  const t = {};
  for (const n of Jt)
    t[n.id] = (e == null ? void 0 : e[n.optionKey]) !== !1;
  return t;
}
function vv(e) {
  return Jt.filter((t) => e[t.id]).map((t) => t.id);
}
const wv = /\.(pdf|docx?|pptx?|xlsx?|mp4|mov|avi|mkv|webm|mp3|wav|zip|txt|html?)$/i, Sv = /\.(jpe?g|png|gif|webp|tiff?|bmp|heic|heif|svg)$/i;
function rc(e) {
  const t = (e.mimeType || "").toLowerCase(), n = (e.fileName || "").toLowerCase();
  return t.startsWith("image/") || Sv.test(n) ? !1 : !!(t.startsWith("video/") || t.startsWith("audio/") || t.startsWith("application/") || t.startsWith("text/") || wv.test(n));
}
const ic = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview",
  "medium"
], oc = [
  "downloadOriginal",
  "original",
  "download",
  "high"
], kv = ["FileName", "fileName", "Title", "title", "Name", "name"], Ev = ["FileName", "fileName"], Cv = [
  "Description",
  "description",
  "AssetDescription",
  "Summary",
  "summary"
];
function du(e) {
  if (typeof e == "string" && e.trim())
    return e.trim();
  if (e != null && typeof e == "object") {
    const t = e.href;
    if (typeof t == "string" && t.trim())
      return t.trim();
  }
}
function Mo(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e, n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"];
  for (const i of n)
    if (i in t) {
      const o = Mo(t[i]);
      if (typeof o == "string" && o.trim() || o != null && typeof o != "object")
        return o;
    }
  return Object.values(t).find(
    (i) => typeof i == "string" && i.trim() || typeof i == "number" || typeof i == "boolean"
  );
}
function Zn(e, t) {
  if (!e)
    return "";
  for (const n of t) {
    const r = Mo(e[n]);
    if (r == null || typeof r == "object")
      continue;
    const i = String(r).trim();
    if (i && i !== "[object Object]")
      return i;
  }
  return "";
}
function pu(e, t) {
  var r;
  if (e == null || typeof e != "object")
    return;
  const n = e;
  for (const i of t) {
    const o = n[i];
    if (!Array.isArray(o) || o.length === 0)
      continue;
    const l = du(((r = o[0]) == null ? void 0 : r.href) ?? o[0]);
    if (l)
      return l;
  }
}
function lc(e, t, n) {
  var i, o, l, u, s, a;
  for (const h of t)
    try {
      const f = (i = e == null ? void 0 : e.getRendition) == null ? void 0 : i.call(e, h), p = du((l = (o = f == null ? void 0 : f.items) == null ? void 0 : o[0]) == null ? void 0 : l.href);
      if (p)
        return p;
    } catch {
    }
  if (Array.isArray(e == null ? void 0 : e.renditions))
    for (const h of t) {
      const f = e.renditions.find((v) => (v == null ? void 0 : v.name) === h), p = du((s = (u = f == null ? void 0 : f.items) == null ? void 0 : u[0]) == null ? void 0 : s.href);
      if (p)
        return p;
    }
  const r = pu(e == null ? void 0 : e.renditions, t);
  if (r)
    return r;
  for (const h of n)
    try {
      const f = (a = e == null ? void 0 : e.getPublicLink) == null ? void 0 : a.call(e, h);
      if (typeof f == "string" && f.trim())
        return f.trim();
    } catch {
    }
}
async function _v(e, t) {
  var n;
  if (!((n = e == null ? void 0 : e.raw) != null && n.getAsync))
    return null;
  try {
    const r = await e.raw.getAsync(`/api/entities/${t}`);
    if (r.isSuccessStatusCode && r.content)
      return r.content;
  } catch {
  }
  return null;
}
function Zi(e) {
  if (e == null)
    return "";
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") {
    const t = String(e).trim();
    return t === "[object Object]" ? "" : t;
  }
  if (typeof e == "object") {
    const t = Mo(e);
    if (t != null && t !== e)
      return Zi(t);
  }
  return "";
}
function xv(e, t) {
  return e ? (t.length > 0 ? t : Object.keys(e).slice(0, 12)).map((r) => {
    const i = Zi(Mo(e[r]));
    return i ? { key: r, value: i } : null;
  }).filter((r) => r != null) : [];
}
function Pv(e) {
  var r;
  const t = Zi((r = e == null ? void 0 : e.definition) == null ? void 0 : r.name);
  if (t)
    return t;
  const n = Zi(e == null ? void 0 : e.definitionName);
  return n || (typeof (e == null ? void 0 : e.definition) == "string" ? e.definition.trim() : "");
}
async function Nv(e, t, n) {
  var y;
  const r = String(((y = t == null ? void 0 : t.systemProperties) == null ? void 0 : y.id) ?? (t == null ? void 0 : t.id) ?? "").trim();
  if (!r)
    return null;
  const i = (t == null ? void 0 : t.properties) ?? {}, o = n.nameProperty ? [n.nameProperty] : kv, l = n.fileNameProperty ? [n.fileNameProperty] : Ev, u = n.descriptionProperty ? [n.descriptionProperty] : Cv, s = gv(n.metadataProperties), a = Zn(i, l) || void 0, h = Zn(i, ["MimeType", "mimeType", "ContentType", "contentType"]) || void 0;
  let f = lc(t, ic, ["preview", "thumbnail"]), p = lc(t, oc, [
    "downloadOriginal",
    "original",
    "download"
  ]);
  if (!f || !p) {
    const _ = await _v(e, r);
    _ && (f || (f = pu(_.renditions, ic)), p || (p = pu(_.renditions, oc)));
  }
  const v = f || p, g = Zn(i, o) || a || `Asset ${r}`;
  return {
    id: r,
    name: g,
    fileName: a,
    mimeType: h,
    description: Zn(i, u) || void 0,
    previewUrl: f,
    downloadUrl: p,
    fileUrl: v,
    definition: Zn(i, ["Definition", "definition"]) || Pv(t) || void 0,
    metadata: xv(i, s)
  };
}
function Tv(e) {
  return e.replace(/\/$/, "");
}
async function Ov(e, t, n) {
  const r = `${Tv(e.apiBaseUrl)}${t}`, i = await fetch(r, {
    ...n,
    headers: {
      Authorization: `Bearer ${e.apiToken}`,
      "Content-Type": "application/json",
      ...(n == null ? void 0 : n.headers) ?? {}
    }
  }), o = await i.json();
  if (!i.ok)
    throw new Error(o.error ?? `Request failed (${i.status})`);
  return o;
}
async function Rv(e, t) {
  return (await Ov(
    e,
    "/api/image-detection/analyze",
    {
      method: "POST",
      body: JSON.stringify(t)
    }
  )).report;
}
const zv = new Set(Jt.map((e) => e.id));
function qd(e) {
  return e === "clear" || e === "flagged";
}
function bd(e) {
  return typeof e == "string" && zv.has(e);
}
function Av(e, t) {
  const n = [e.entitydefinition, e.entityDefinition, e.definition];
  for (const r of n) {
    if (r == null || typeof r != "object")
      continue;
    const i = r.href;
    if (typeof i == "string" && i.trim())
      return Lv(i.trim());
  }
  if (t != null && t.trim())
    return `/api/entitydefinitions/${t.trim()}`;
  throw new Error("Could not resolve entity definition for Content Hub update.");
}
function Lv(e) {
  try {
    if (e.startsWith("/"))
      return e;
    const t = new URL(e);
    return `${t.pathname}${t.search}`;
  } catch {
    return e;
  }
}
function Iv(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    return null;
  const t = e;
  if (!bd(t.id))
    return null;
  const n = Jt.find((o) => o.id === t.id), r = Number(t.confidence), i = Number.isFinite(r) ? Math.max(0, Math.min(100, r)) : 0;
  return {
    id: t.id,
    label: typeof t.label == "string" && t.label.trim() ? t.label : (n == null ? void 0 : n.label) ?? t.id,
    detected: t.detected === !0,
    confidence: i,
    summary: typeof t.summary == "string" ? t.summary : ""
  };
}
function ep(e) {
  let t = mu(e);
  if (typeof t == "string") {
    const o = t.trim();
    if (!o)
      return null;
    try {
      t = JSON.parse(o);
    } catch {
      return null;
    }
  }
  if (!t || typeof t != "object" || Array.isArray(t))
    return null;
  const n = t;
  if (!qd(n.status)) {
    const o = mu(n);
    return o && o !== t && typeof o == "object" && !Array.isArray(o) ? ep(o) : null;
  }
  const r = Array.isArray(n.findings) ? n.findings.map((o) => Iv(o)).filter((o) => o != null) : [], i = Array.isArray(n.checksRun) ? n.checksRun.filter(bd) : r.map((o) => o.id);
  return {
    status: n.status,
    summary: typeof n.summary == "string" ? n.summary : "",
    findings: r,
    checksRun: i,
    analyzedAt: typeof n.analyzedAt == "string" && n.analyzedAt.trim() ? n.analyzedAt : (/* @__PURE__ */ new Date()).toISOString(),
    imageAttached: typeof n.imageAttached == "boolean" ? n.imageAttached : void 0,
    imageUploadError: typeof n.imageUploadError == "string" ? n.imageUploadError : void 0
  };
}
function mu(e) {
  if (e == null)
    return;
  if (typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  if (qd(t.status))
    return e;
  const n = ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"];
  for (const r of n)
    if (r in t)
      return mu(t[r]);
  return e;
}
function $v(e, t) {
  if (!t.trim())
    return;
  try {
    if (typeof (e == null ? void 0 : e.getPropertyValue) == "function") {
      const r = e.getPropertyValue(t);
      if (r != null)
        return r;
    }
  } catch {
  }
  const n = (e == null ? void 0 : e.properties) ?? {};
  for (const [r, i] of Object.entries(n))
    if (r.toLowerCase() === t.toLowerCase())
      return i;
}
function Mv(e, t) {
  return ep($v(e, t));
}
async function jv(e, t) {
  var r;
  if (!((r = e == null ? void 0 : e.raw) != null && r.getAsync))
    throw new Error("Content Hub client is not available.");
  const n = await e.raw.getAsync(
    `/api/entities/${t}`
  );
  if (!n.isSuccessStatusCode || !n.content)
    throw new Error(
      `Could not load asset entity ${t} for saving (HTTP ${n.statusCode ?? "unknown"}).`
    );
  return n.content;
}
function Dv(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return !1;
  const t = e;
  return "Invariant" in t || "invariant" in t || "en-US" in t || "en-us" in t;
}
function pl(e, t) {
  if (e) {
    for (const [n, r] of Object.entries(e))
      if (n.toLowerCase() === t.toLowerCase())
        return r;
  }
}
function uc(e, t) {
  return Dv(t) ? { Invariant: e } : e;
}
function Fv(e) {
  if (e == null)
    return "";
  if (typeof e == "string") {
    const t = e.trim();
    return t ? t.startsWith("<") ? "HTML error page from Content Hub" : t.slice(0, 300) : "";
  }
  if (typeof e == "object") {
    const t = e, n = [t.Message, t.message, t.title, t.detail, t.error];
    for (const r of n)
      if (typeof r == "string" && r.trim())
        return r.trim();
    try {
      return JSON.stringify(e).slice(0, 300);
    } catch {
      return "";
    }
  }
  return "";
}
function Uv(e, t, n) {
  var p, v;
  const r = t.reportProperty.trim(), i = (p = t.statusProperty) == null ? void 0 : p.trim(), o = (v = t.analyzedAtProperty) == null ? void 0 : v.trim(), l = t.reportStorage === "string", u = pl(n, r), s = i ? pl(n, i) : void 0, a = o ? pl(n, o) : void 0, h = (g, y) => {
    const _ = {
      [r]: g
    };
    return i && (_[i] = y === "invariant" ? { Invariant: e.status } : uc(e.status, s)), o && (_[o] = y === "invariant" ? { Invariant: e.analyzedAt } : uc(e.analyzedAt, a)), _;
  }, f = [];
  return l ? (f.push({
    label: "report-string-plain",
    properties: { [r]: JSON.stringify(e) }
  }), f.push({
    label: "report-string-invariant",
    properties: { [r]: { Invariant: JSON.stringify(e) } }
  })) : (f.push({
    label: "report-json-only",
    properties: { [r]: e }
  }), f.push({
    label: "report-json-with-plain-companions",
    properties: h(e, "plain")
  }), f.push({
    label: "report-json-invariant-object",
    properties: { [r]: { Invariant: e } }
  }), f.push({
    label: "report-json-stringified",
    properties: { [r]: JSON.stringify(e) }
  })), f.push({
    label: "report-with-invariant-companions",
    properties: h(
      l ? { Invariant: JSON.stringify(e) } : e,
      "invariant"
    )
  }), !l && typeof u == "string" && f.unshift({
    label: "report-match-existing-string",
    properties: { [r]: JSON.stringify(e) }
  }), f;
}
async function Bv(e, t, n, r) {
  var a;
  if (!((a = e == null ? void 0 : e.raw) != null && a.putAsync))
    throw new Error("Content Hub client is not available for saving detection results.");
  if (!r.reportProperty.trim())
    throw new Error("detectionReportProperty is not configured.");
  const o = await jv(e, t), l = Av(o, r.definitionName), u = Uv(n, r, o.properties), s = [];
  for (const h of u) {
    const f = {
      entitydefinition: {
        href: l
      },
      properties: h.properties
    }, p = await e.raw.putAsync(
      `/api/entities/${t}`,
      f
    );
    if (p.isSuccessStatusCode)
      return;
    const v = p.statusCode ?? "unknown", g = Fv(p.content);
    s.push(`${h.label} → HTTP ${v}${g ? ` (${g})` : ""}`);
  }
  throw new Error(
    `Failed to save image detection report to Content Hub after ${u.length} attempts: ${s.join("; ")}`
  );
}
const ml = [
  "Sending the image to the CodeMie detection assistant…",
  "Looking through the frame for the checks you selected…",
  "Reading what is actually in the picture…",
  "Comparing the image against the selected detection rules…",
  "Waiting on a structured read of the image…",
  "Almost there — collecting findings…"
];
function Hv(e, t = 2800) {
  const [n, r] = R.useState(0);
  return R.useEffect(() => {
    if (!e) {
      r(0);
      return;
    }
    const i = () => {
      r((l) => {
        if (ml.length <= 1)
          return 0;
        let u = l;
        for (; u === l; )
          u = Math.floor(Math.random() * ml.length);
        return u;
      });
    }, o = window.setInterval(i, t);
    return () => window.clearInterval(o);
  }, [e, t]), ml[n];
}
function sc({
  active: e,
  label: t = "Loading…",
  className: n = "ch-image-detection__empty"
}) {
  const r = Hv(e);
  return /* @__PURE__ */ O("div", { className: n, role: "status", "aria-live": "polite", "aria-busy": "true", children: /* @__PURE__ */ M("div", { className: "ch-image-detection__loading", children: [
    /* @__PURE__ */ O("div", { className: "ch-image-detection__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ O("p", { className: "ch-image-detection__loading-label", children: e ? r : t })
  ] }) });
}
const hu = "ImageDetectionReport";
function Wv(e) {
  var r, i, o, l, u, s, a, h, f, p;
  const t = (r = e == null ? void 0 : e.apiBaseUrl) == null ? void 0 : r.trim(), n = (i = e == null ? void 0 : e.apiToken) == null ? void 0 : i.trim();
  return !t || !n ? null : {
    apiBaseUrl: t,
    apiToken: n,
    detectMinors: e == null ? void 0 : e.detectMinors,
    detectAnimals: e == null ? void 0 : e.detectAnimals,
    detectCulturalSensitive: e == null ? void 0 : e.detectCulturalSensitive,
    detectFirearmsOffensive: e == null ? void 0 : e.detectFirearmsOffensive,
    nameProperty: (o = e == null ? void 0 : e.nameProperty) == null ? void 0 : o.trim(),
    fileNameProperty: (l = e == null ? void 0 : e.fileNameProperty) == null ? void 0 : l.trim(),
    descriptionProperty: (u = e == null ? void 0 : e.descriptionProperty) == null ? void 0 : u.trim(),
    metadataProperties: (s = e == null ? void 0 : e.metadataProperties) == null ? void 0 : s.trim(),
    detectionReportProperty: ((a = e == null ? void 0 : e.detectionReportProperty) == null ? void 0 : a.trim()) || hu,
    detectionReportStorage: ((h = e == null ? void 0 : e.detectionReportStorage) == null ? void 0 : h.trim()) === "string" ? "string" : "json",
    detectionStatusProperty: (f = e == null ? void 0 : e.detectionStatusProperty) == null ? void 0 : f.trim(),
    detectionAnalyzedAtProperty: (p = e == null ? void 0 : e.detectionAnalyzedAtProperty) == null ? void 0 : p.trim()
  };
}
function Vv(e) {
  return new Date(e).toLocaleString(void 0, {
    dateStyle: "medium",
    timeStyle: "short"
  });
}
function Kv(e) {
  return e === "flagged" ? "Flagged" : "Clear";
}
function Qv({ finding: e }) {
  return /* @__PURE__ */ M(
    "article",
    {
      className: `ch-image-detection__finding ch-image-detection__finding--${e.detected ? "flagged" : "clear"}`,
      children: [
        /* @__PURE__ */ M("div", { className: "ch-image-detection__finding-header", children: [
          /* @__PURE__ */ O("h4", { className: "ch-image-detection__finding-title", children: e.label }),
          /* @__PURE__ */ O(
            "span",
            {
              className: `ch-image-detection__badge ${e.detected ? "" : "ch-image-detection__badge--clear"}`,
              children: e.detected ? "Detected" : "Not detected"
            }
          ),
          /* @__PURE__ */ M("span", { className: "ch-image-detection__badge ch-image-detection__badge--muted", children: [
            Math.round(e.confidence),
            "% confidence"
          ] })
        ] }),
        e.summary ? /* @__PURE__ */ O("p", { className: "ch-image-detection__finding-copy", children: e.summary }) : null
      ]
    }
  );
}
function Gv({ client: e, entity: t, options: n }) {
  const r = R.useMemo(() => Wv(n), [n]), i = R.useMemo(() => hv(n), [n]), [o, l] = R.useState(null), [u, s] = R.useState(!1), [a, h] = R.useState(null), [f, p] = R.useState(null), [v, g] = R.useState(null), [y, _] = R.useState(!1), [d, c] = R.useState(null), [m, w] = R.useState("idle"), [E, C] = R.useState(null), [k, T] = R.useState(
    () => nc(n)
  ), B = (r == null ? void 0 : r.detectMinors) ?? (n == null ? void 0 : n.detectMinors), A = (r == null ? void 0 : r.detectAnimals) ?? (n == null ? void 0 : n.detectAnimals), re = (r == null ? void 0 : r.detectCulturalSensitive) ?? (n == null ? void 0 : n.detectCulturalSensitive), wt = (r == null ? void 0 : r.detectFirearmsOffensive) ?? (n == null ? void 0 : n.detectFirearmsOffensive);
  R.useEffect(() => {
    T(
      nc({
        detectMinors: B,
        detectAnimals: A,
        detectCulturalSensitive: re,
        detectFirearmsOffensive: wt
      })
    );
  }, [B, A, re, wt]), R.useEffect(() => {
    if (!r) {
      l(null), p(null), g(null);
      return;
    }
    let x = !1;
    return (async () => {
      s(!0), h(null), w("idle"), C(null);
      try {
        const D = await Nv(e, t, r);
        if (x)
          return;
        if (l(D), !D) {
          h("No asset entity found on this page."), p(null), g(null);
          return;
        }
        const q = Mv(
          t,
          r.detectionReportProperty || hu
        );
        q ? (p(q), g("saved")) : (p(null), g(null));
      } catch (D) {
        x || (l(null), p(null), g(null), h(D instanceof Error ? D.message : "Could not load asset context."));
      } finally {
        x || s(!1);
      }
    })(), () => {
      x = !0;
    };
  }, [e, t, r]);
  const Qe = R.useMemo(() => vv(k), [k]), Fn = Jt.every((x) => k[x.id]), St = o ? rc(o) : !1, Un = () => {
    const x = !Fn, z = {};
    for (const D of Jt)
      z[D.id] = x;
    T(z);
  }, Bn = (x) => {
    T((z) => ({
      ...z,
      [x]: !z[x]
    }));
  }, P = R.useCallback(async () => {
    if (!(!r || !o || Qe.length === 0 || rc(o))) {
      _(!0), c(null), w("idle"), C(null);
      try {
        const x = await Rv(r, {
          asset: o,
          checks: Qe
        });
        p(x), g("fresh"), w("saving");
        try {
          await Bv(e, o.id, x, {
            reportProperty: r.detectionReportProperty || hu,
            reportStorage: r.detectionReportStorage,
            statusProperty: r.detectionStatusProperty,
            analyzedAtProperty: r.detectionAnalyzedAtProperty,
            definitionName: o.definition
          }), w("saved");
        } catch (z) {
          w("error"), C(
            z instanceof Error ? z.message : "Could not save detection report to Content Hub."
          );
        }
      } catch (x) {
        c(x instanceof Error ? x.message : "Image detection failed.");
      } finally {
        _(!1);
      }
    }
  }, [o, Qe, e, r]);
  return r ? /* @__PURE__ */ M("div", { className: "ch-image-detection", children: [
    /* @__PURE__ */ M("header", { className: "ch-image-detection__header", children: [
      /* @__PURE__ */ M("div", { children: [
        /* @__PURE__ */ O("p", { className: "ch-image-detection__eyebrow", children: "Content Hub" }),
        /* @__PURE__ */ O("h2", { className: "ch-image-detection__title", children: "Image detection" })
      ] }),
      /* @__PURE__ */ M("fieldset", { className: "ch-image-detection__checks", disabled: y || u, children: [
        /* @__PURE__ */ O("legend", { className: "ch-image-detection__checks-legend", children: "Checks to run" }),
        /* @__PURE__ */ M("label", { className: "ch-image-detection__check ch-image-detection__check--all", children: [
          /* @__PURE__ */ O("input", { type: "checkbox", checked: Fn, onChange: Un }),
          /* @__PURE__ */ O("span", { children: "All" })
        ] }),
        Jt.map((x) => /* @__PURE__ */ M("label", { className: "ch-image-detection__check", children: [
          /* @__PURE__ */ O(
            "input",
            {
              type: "checkbox",
              checked: k[x.id],
              onChange: () => Bn(x.id)
            }
          ),
          /* @__PURE__ */ M("span", { children: [
            x.label,
            /* @__PURE__ */ O("small", { children: x.description })
          ] })
        ] }, x.id))
      ] }),
      /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          className: "ch-image-detection__primary-button",
          onClick: () => void P(),
          disabled: !o || y || u || Qe.length === 0 || St,
          children: y ? "Analyzing…" : f ? "Re-run detection" : "Analyze image"
        }
      ),
      Qe.length === 0 ? /* @__PURE__ */ O("p", { className: "ch-image-detection__hint", children: "Select at least one check." }) : null
    ] }),
    /* @__PURE__ */ O("div", { className: "ch-image-detection__body", children: /* @__PURE__ */ M("section", { className: "ch-image-detection__column", children: [
      o && !u ? /* @__PURE__ */ M("div", { className: "ch-image-detection__asset-card", children: [
        /* @__PURE__ */ O("h3", { className: "ch-image-detection__asset-title", children: o.name }),
        /* @__PURE__ */ M("dl", { className: "ch-image-detection__asset-details", children: [
          o.fileName ? /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ O("dt", { children: "File" }),
            /* @__PURE__ */ O("dd", { children: o.fileName })
          ] }) : null,
          o.mimeType ? /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ O("dt", { children: "Type" }),
            /* @__PURE__ */ O("dd", { children: o.mimeType })
          ] }) : null
        ] })
      ] }) : null,
      u ? /* @__PURE__ */ O(sc, { active: !0, label: "Loading…" }) : null,
      !u && a ? /* @__PURE__ */ M("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ O("h3", { children: "Asset unavailable" }),
        /* @__PURE__ */ O("p", { children: a })
      ] }) : null,
      !u && !a && St ? /* @__PURE__ */ M("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ O("h3", { children: "Image required" }),
        /* @__PURE__ */ O("p", { children: "Image detection runs on image assets. This file is not an image." })
      ] }) : null,
      !u && !a && !St && y ? /* @__PURE__ */ O(sc, { active: !0, label: "Analyzing…" }) : null,
      !u && !a && !St && !y && d ? /* @__PURE__ */ M("div", { className: "ch-image-detection__empty ch-image-detection__empty--error", children: [
        /* @__PURE__ */ O("h3", { children: "Analysis failed" }),
        /* @__PURE__ */ O("p", { children: d })
      ] }) : null,
      !u && !a && !St && !y && !d && !f ? /* @__PURE__ */ M("div", { className: "ch-image-detection__empty", children: [
        /* @__PURE__ */ O("h3", { children: "Ready to analyze" }),
        /* @__PURE__ */ M("p", { children: [
          "Choose the checks above, then click ",
          /* @__PURE__ */ O("strong", { children: "Analyze image" }),
          "."
        ] })
      ] }) : null,
      !y && !St && f ? /* @__PURE__ */ M("div", { className: "ch-image-detection__report", children: [
        /* @__PURE__ */ M("div", { className: "ch-image-detection__report-header", children: [
          /* @__PURE__ */ O(
            "span",
            {
              className: `ch-image-detection__status ch-image-detection__status--${f.status}`,
              children: Kv(f.status)
            }
          ),
          /* @__PURE__ */ O("p", { className: "ch-image-detection__report-summary", children: f.summary }),
          /* @__PURE__ */ M("p", { className: "ch-image-detection__report-meta", children: [
            v === "saved" ? "Saved result · " : "",
            "Analyzed ",
            Vv(f.analyzedAt),
            f.imageAttached ? " · Visual review included" : f.imageUploadError ? " · Image unavailable" : ""
          ] }),
          m === "saving" ? /* @__PURE__ */ O("p", { className: "ch-image-detection__report-meta", children: "Saving to Content Hub…" }) : null,
          m === "saved" ? /* @__PURE__ */ O("p", { className: "ch-image-detection__report-meta ch-image-detection__report-meta--ok", children: "Saved to asset" }) : null,
          m === "error" && E ? /* @__PURE__ */ M("p", { className: "ch-image-detection__report-meta ch-image-detection__report-meta--error", children: [
            "Analysis succeeded, but save failed: ",
            E
          ] }) : null
        ] }),
        /* @__PURE__ */ O("div", { className: "ch-image-detection__finding-list", children: f.findings.map((x) => /* @__PURE__ */ O(Qv, { finding: x }, x.id)) })
      ] }) : null
    ] }) })
  ] }) : /* @__PURE__ */ M("div", { className: "ch-image-detection", children: [
    /* @__PURE__ */ O("header", { className: "ch-image-detection__header", children: /* @__PURE__ */ M("div", { children: [
      /* @__PURE__ */ O("p", { className: "ch-image-detection__eyebrow", children: "Content Hub" }),
      /* @__PURE__ */ O("h2", { className: "ch-image-detection__title", children: "Image detection" })
    ] }) }),
    /* @__PURE__ */ O("div", { className: "ch-image-detection__body", children: /* @__PURE__ */ M("div", { className: "ch-image-detection__empty", children: [
      /* @__PURE__ */ O("h3", { children: "Configuration required" }),
      /* @__PURE__ */ M("p", { children: [
        "Add ",
        /* @__PURE__ */ O("code", { children: "apiBaseUrl" }),
        " and ",
        /* @__PURE__ */ O("code", { children: "apiToken" }),
        " to the component config in Content Hub."
      ] }),
      i.length > 0 ? /* @__PURE__ */ M("p", { className: "ch-image-detection__hint", children: [
        "Missing: ",
        i.join(", ")
      ] }) : null
    ] }) })
  ] });
}
function Yv(e) {
  const t = Cd(e);
  return console.log("%c[CHImageDetection] Starting up...", "color: #0B5CAB; font-weight: bold"), {
    render(n) {
      const r = mv(n == null ? void 0 : n.options, n);
      console.log(
        "%c[CHImageDetection] context keys:",
        "color: #0B5CAB; font-weight: bold",
        Object.keys(n ?? {})
      ), console.log(
        "%c[CHImageDetection] parsed options:",
        "color: #0B5CAB; font-weight: bold",
        yv(r)
      ), t.render(
        /* @__PURE__ */ O(lv, { theme: n.theme, children: /* @__PURE__ */ O(Gv, { client: n.client, entity: n.entity, options: r }) })
      );
    },
    unmount() {
      t.unmount();
    }
  };
}
export {
  Yv as default
};
