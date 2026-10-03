(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".ch-ai-gov{--ch-gov-pad: 12px;--ch-gov-border: #d9e2ec;--ch-gov-bg: #f5f8fb;--ch-gov-card: #fff;--ch-gov-text: #102a43;--ch-gov-muted: #627d98;--ch-gov-accent: #0b5cab;--ch-gov-ok: #2f9e44;--ch-gov-warn: #f08c00;--ch-gov-bad: #e03131;--ch-gov-pending: #748ffc;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:0;height:100%;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:var(--ch-gov-text);background:var(--ch-gov-bg)}.ch-ai-gov *,.ch-ai-gov *:before,.ch-ai-gov *:after{box-sizing:border-box}.ch-ai-gov__header{display:flex;flex-direction:column;gap:10px;padding:var(--ch-gov-pad);border-bottom:1px solid var(--ch-gov-border);background:var(--ch-gov-card);flex-shrink:0}.ch-ai-gov__eyebrow{margin:0 0 2px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ch-gov-accent)}.ch-ai-gov__title{margin:0;font-size:16px;font-weight:700;line-height:1.3}.ch-ai-gov__tabs{display:flex;gap:4px;flex-wrap:wrap}.ch-ai-gov__tab{border:1px solid var(--ch-gov-border);background:#fff;color:var(--ch-gov-muted);border-radius:6px;padding:6px 10px;font-size:12px;font-weight:600;cursor:pointer}.ch-ai-gov__tab--active{background:var(--ch-gov-accent);border-color:var(--ch-gov-accent);color:#fff}.ch-ai-gov__body{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;padding:var(--ch-gov-pad);gap:12px}.ch-ai-gov__muted{margin:0;color:var(--ch-gov-muted);font-size:13px}.ch-ai-gov__error{margin:0;padding:10px 12px;border-radius:8px;background:#fff5f5;border:1px solid #ffc9c9;color:#c92a2a;font-size:13px;line-height:1.4}.ch-ai-gov__primary-button,.ch-ai-gov__secondary-button{border:none;border-radius:8px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer}.ch-ai-gov__primary-button{background:var(--ch-gov-accent);color:#fff}.ch-ai-gov__secondary-button{background:#e6eff8;color:var(--ch-gov-accent)}.ch-ai-gov__primary-button:disabled,.ch-ai-gov__secondary-button:disabled{opacity:.55;cursor:not-allowed}.ch-ai-gov__badge{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:.02em;text-transform:uppercase}.ch-ai-gov__badge--pending{background:#edf2ff;color:#3b5bdb}.ch-ai-gov__badge--compliant{background:#ebfbee;color:var(--ch-gov-ok)}.ch-ai-gov__badge--nonCompliant,.ch-ai-gov__badge--flagged{background:#fff5f5;color:var(--ch-gov-bad)}.ch-ai-gov__badge--needsReview{background:#fff9db;color:#e67700}.ch-ai-gov__badge--verified{background:#ebfbee;color:var(--ch-gov-ok)}.ch-ai-gov__badge--unverified,.ch-ai-gov__badge--notApplicable{background:#f1f3f5;color:#495057}.ch-ai-gov__badge--invalid{background:#fff5f5;color:var(--ch-gov-bad)}.ch-ai-gov__tags{display:flex;flex-wrap:wrap;gap:6px}.ch-ai-gov__tag{display:inline-flex;padding:4px 8px;border-radius:6px;background:#e8f1f8;color:var(--ch-gov-accent);font-size:12px;font-weight:600}.ch-ai-gov__card{background:var(--ch-gov-card);border:1px solid var(--ch-gov-border);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:10px}.ch-ai-gov__card-header{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.ch-ai-gov__card-title{margin:0;font-size:14px;font-weight:700}.ch-ai-gov__card-meta{margin:0;font-size:12px;color:var(--ch-gov-muted)}.ch-ai-gov__section{display:flex;flex-direction:column;gap:4px;padding-top:8px;border-top:1px solid #eef2f6}.ch-ai-gov__section:first-child{border-top:none;padding-top:0}.ch-ai-gov__section-title{margin:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ch-gov-muted)}.ch-ai-gov__section-body{margin:0;font-size:13px;line-height:1.45}.ch-ai-gov__field{display:flex;flex-direction:column;gap:4px}.ch-ai-gov__field label{font-size:12px;font-weight:600;color:var(--ch-gov-muted)}.ch-ai-gov__field input,.ch-ai-gov__field textarea{border:1px solid var(--ch-gov-border);border-radius:8px;padding:8px 10px;font:inherit;font-size:13px;color:var(--ch-gov-text);background:#fff}.ch-ai-gov__field textarea{min-height:80px;resize:vertical}.ch-ai-gov__checkbox{display:flex;align-items:flex-start;gap:8px;font-size:13px}.ch-ai-gov__checkbox input{margin-top:2px}.ch-ai-gov__checklist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}.ch-ai-gov__checklist-item{display:flex;align-items:center;gap:8px;font-size:13px;padding:8px 10px;border-radius:8px;background:#f8fafc;border:1px solid #eef2f6}.ch-ai-gov__checklist-item--ok{border-color:#b2f2bb;background:#ebfbee}.ch-ai-gov__checklist-item--missing{border-color:#ffc9c9;background:#fff5f5}.ch-ai-gov__timeline{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}.ch-ai-gov__timeline-item{position:relative;padding:10px 12px 10px 16px;border-left:3px solid var(--ch-gov-accent);background:var(--ch-gov-card);border-radius:0 8px 8px 0;border:1px solid var(--ch-gov-border);border-left-width:3px;border-left-color:var(--ch-gov-accent)}.ch-ai-gov__timeline-type{margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ch-gov-accent)}.ch-ai-gov__timeline-detail{margin:0 0 6px;font-size:13px;line-height:1.4}.ch-ai-gov__timeline-meta{margin:0;font-size:11px;color:var(--ch-gov-muted)}.ch-ai-gov__collector-actions{display:flex;flex-wrap:wrap;gap:8px}.c2pa-credentials--embedded .c2pa-section{margin-top:8px;padding-top:8px;border-top:1px solid #eef2f6}.c2pa-section__title{margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ch-gov-muted, #627d98)}.c2pa-section__body{margin:0;font-size:13px}.c2pa-muted{margin:0;color:var(--ch-gov-muted, #627d98);font-size:13px}.c2pa-error{margin:0;color:var(--ch-gov-bad, #e03131);font-size:13px}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function op(e, t) {
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
function lp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pc = { exports: {} }, to = {}, mc = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or = Symbol.for("react.element"), up = Symbol.for("react.portal"), sp = Symbol.for("react.fragment"), ap = Symbol.for("react.strict_mode"), cp = Symbol.for("react.profiler"), fp = Symbol.for("react.provider"), dp = Symbol.for("react.context"), pp = Symbol.for("react.forward_ref"), mp = Symbol.for("react.suspense"), hp = Symbol.for("react.memo"), yp = Symbol.for("react.lazy"), Ls = Symbol.iterator;
function vp(e) {
  return e === null || typeof e != "object" ? null : (e = Ls && e[Ls] || e["@@iterator"], typeof e == "function" ? e : null);
}
var hc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, yc = Object.assign, vc = {};
function Dn(e, t, n) {
  this.props = e, this.context = t, this.refs = vc, this.updater = n || hc;
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
function gc() {
}
gc.prototype = Dn.prototype;
function ku(e, t, n) {
  this.props = e, this.context = t, this.refs = vc, this.updater = n || hc;
}
var _u = ku.prototype = new gc();
_u.constructor = ku;
yc(_u, Dn.prototype);
_u.isPureReactComponent = !0;
var Os = Array.isArray, Sc = Object.prototype.hasOwnProperty, Cu = { current: null }, wc = { key: !0, ref: !0, __self: !0, __source: !0 };
function kc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Sc.call(t, r) && !wc.hasOwnProperty(r) && (i[r] = t[r]);
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
  return { $$typeof: Or, type: e, key: o, ref: l, props: i, _owner: Cu.current };
}
function gp(e, t) {
  return { $$typeof: Or, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Eu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Or;
}
function Sp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var zs = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sp("" + e.key) : t.toString(36);
}
function di(e, t, n, r, i) {
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
          case Or:
          case up:
            l = !0;
        }
    }
  if (l)
    return l = e, i = i(l), e = r === "" ? "." + Ho(l, 0) : r, Os(i) ? (n = "", e != null && (n = e.replace(zs, "$&/") + "/"), di(i, t, n, "", function(a) {
      return a;
    })) : i != null && (Eu(i) && (i = gp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(zs, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Os(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ho(o, u);
      l += di(o, t, n, s, i);
    }
  else if (s = vp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Ho(o, u++), l += di(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Vr(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return di(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function wp(e) {
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
var ke = { current: null }, pi = { transition: null }, kp = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: pi, ReactCurrentOwner: Cu };
function _c() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: Vr, forEach: function(e, t, n) {
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
  if (!Eu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Dn;
z.Fragment = sp;
z.Profiler = cp;
z.PureComponent = ku;
z.StrictMode = ap;
z.Suspense = mp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kp;
z.act = _c;
z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = yc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = Cu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Sc.call(t, s) && !wc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Or, type: e.type, key: i, ref: o, props: r, _owner: l };
};
z.createContext = function(e) {
  return e = { $$typeof: dp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fp, _context: e }, e.Consumer = e;
};
z.createElement = kc;
z.createFactory = function(e) {
  var t = kc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: pp, render: e };
};
z.isValidElement = Eu;
z.lazy = function(e) {
  return { $$typeof: yp, _payload: { _status: -1, _result: e }, _init: wp };
};
z.memo = function(e, t) {
  return { $$typeof: hp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = pi.transition;
  pi.transition = {};
  try {
    e();
  } finally {
    pi.transition = t;
  }
};
z.unstable_act = _c;
z.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
z.useContext = function(e) {
  return ke.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
z.useId = function() {
  return ke.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return ke.current.useRef(e);
};
z.useState = function(e) {
  return ke.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return ke.current.useTransition();
};
z.version = "18.3.1";
mc.exports = z;
var P = mc.exports;
const _p = /* @__PURE__ */ lp(P), Sl = /* @__PURE__ */ op({
  __proto__: null,
  default: _p
}, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = P, Ep = Symbol.for("react.element"), xp = Symbol.for("react.fragment"), Pp = Object.prototype.hasOwnProperty, Np = Cp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Pp.call(t, r) && !Tp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Ep, type: e, key: o, ref: l, props: i, _owner: Np.current };
}
to.Fragment = xp;
to.jsx = Cc;
to.jsxs = Cc;
pc.exports = to;
var xu = pc.exports;
const Jt = xu.Fragment, g = xu.jsx, A = xu.jsxs;
var Ec = { exports: {} }, Me = {}, xc = { exports: {} }, Pc = {};
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
    var O = T.length;
    T.push($);
    e:
      for (; 0 < O; ) {
        var J = O - 1 >>> 1, ie = T[J];
        if (0 < i(ie, $))
          T[J] = $, T[O] = ie, O = J;
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
    var $ = T[0], O = T.pop();
    if (O !== $) {
      T[0] = O;
      e:
        for (var J = 0, ie = T.length, Hr = ie >>> 1; J < Hr; ) {
          var Ht = 2 * (J + 1) - 1, Bo = T[Ht], Wt = Ht + 1, Wr = T[Wt];
          if (0 > i(Bo, O))
            Wt < ie && 0 > i(Wr, Bo) ? (T[J] = Wr, T[Wt] = O, J = Wt) : (T[J] = Bo, T[Ht] = O, J = Ht);
          else if (Wt < ie && 0 > i(Wr, O))
            T[J] = Wr, T[Wt] = O, J = Wt;
          else
            break e;
        }
    }
    return $;
  }
  function i(T, $) {
    var O = T.sortIndex - $.sortIndex;
    return O !== 0 ? O : T.id - $.id;
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
  var s = [], a = [], h = 1, p = null, d = 3, S = !1, v = !1, y = !1, E = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
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
    if (y = !1, m(T), !v)
      if (n(s) !== null)
        v = !0, jo(_);
      else {
        var $ = n(a);
        $ !== null && Uo(w, $.startTime - T);
      }
  }
  function _(T, $) {
    v = !1, y && (y = !1, f(R), R = -1), S = !0;
    var O = d;
    try {
      for (m($), p = n(s); p !== null && (!(p.expirationTime > $) || T && !pe()); ) {
        var J = p.callback;
        if (typeof J == "function") {
          p.callback = null, d = p.priorityLevel;
          var ie = J(p.expirationTime <= $);
          $ = e.unstable_now(), typeof ie == "function" ? p.callback = ie : p === n(s) && r(s), m($);
        } else
          r(s);
        p = n(s);
      }
      if (p !== null)
        var Hr = !0;
      else {
        var Ht = n(a);
        Ht !== null && Uo(w, Ht.startTime - $), Hr = !1;
      }
      return Hr;
    } finally {
      p = null, d = O, S = !1;
    }
  }
  var x = !1, C = null, R = -1, V = 5, L = -1;
  function pe() {
    return !(e.unstable_now() - L < V);
  }
  function Bn() {
    if (C !== null) {
      var T = e.unstable_now();
      L = T;
      var $ = !0;
      try {
        $ = C(!0, T);
      } finally {
        $ ? Hn() : (x = !1, C = null);
      }
    } else
      x = !1;
  }
  var Hn;
  if (typeof c == "function")
    Hn = function() {
      c(Bn);
    };
  else if (typeof MessageChannel < "u") {
    var $s = new MessageChannel(), ip = $s.port2;
    $s.port1.onmessage = Bn, Hn = function() {
      ip.postMessage(null);
    };
  } else
    Hn = function() {
      E(Bn, 0);
    };
  function jo(T) {
    C = T, x || (x = !0, Hn());
  }
  function Uo(T, $) {
    R = E(function() {
      T(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    v || S || (v = !0, jo(_));
  }, e.unstable_forceFrameRate = function(T) {
    0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < T ? Math.floor(1e3 / T) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(T) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = d;
    }
    var O = d;
    d = $;
    try {
      return T();
    } finally {
      d = O;
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
    var O = d;
    d = T;
    try {
      return $();
    } finally {
      d = O;
    }
  }, e.unstable_scheduleCallback = function(T, $, O) {
    var J = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? J + O : J) : O = J, T) {
      case 1:
        var ie = -1;
        break;
      case 2:
        ie = 250;
        break;
      case 5:
        ie = 1073741823;
        break;
      case 4:
        ie = 1e4;
        break;
      default:
        ie = 5e3;
    }
    return ie = O + ie, T = { id: h++, callback: $, priorityLevel: T, startTime: O, expirationTime: ie, sortIndex: -1 }, O > J ? (T.sortIndex = O, t(a, T), n(s) === null && T === n(a) && (y ? (f(R), R = -1) : y = !0, Uo(w, O - J))) : (T.sortIndex = ie, t(s, T), v || S || (v = !0, jo(_))), T;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(T) {
    var $ = d;
    return function() {
      var O = d;
      d = $;
      try {
        return T.apply(this, arguments);
      } finally {
        d = O;
      }
    };
  };
})(Pc);
xc.exports = Pc;
var Ap = xc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp = P, Ie = Ap;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Nc = /* @__PURE__ */ new Set(), pr = {};
function rn(e, t) {
  An(e, t), An(e + "Capture", t);
}
function An(e, t) {
  for (pr[e] = t, e = 0; e < t.length; e++)
    Nc.add(t[e]);
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wl = Object.prototype.hasOwnProperty, $p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Is = {}, Ms = {};
function Lp(e) {
  return wl.call(Ms, e) ? !0 : wl.call(Is, e) ? !1 : $p.test(e) ? Ms[e] = !0 : (Is[e] = !0, !1);
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
function zp(e, t, n, r) {
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
function _e(e, t, n, r, i, o, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  de[e] = new _e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  de[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  de[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  de[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  de[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  de[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  de[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  de[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  de[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pu = /[\-:]([a-z])/g;
function Nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pu,
    Nu
  );
  de[t] = new _e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pu, Nu);
  de[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pu, Nu);
  de[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tu(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zp(t, n, i, r) && (n = null), r || i === null ? Lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Gr = Symbol.for("react.element"), sn = Symbol.for("react.portal"), an = Symbol.for("react.fragment"), Au = Symbol.for("react.strict_mode"), kl = Symbol.for("react.profiler"), Tc = Symbol.for("react.provider"), Ac = Symbol.for("react.context"), Ru = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), $u = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), Rc = Symbol.for("react.offscreen"), Ds = Symbol.iterator;
function Wn(e) {
  return e === null || typeof e != "object" ? null : (e = Ds && e[Ds] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Wo;
function bn(e) {
  if (Wo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wo = t && t[1] || "";
    }
  return `
` + Wo + e;
}
var Vo = !1;
function Go(e, t) {
  if (!e || Vo)
    return "";
  Vo = !0;
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
    Vo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? bn(e) : "";
}
function Ip(e) {
  switch (e.tag) {
    case 5:
      return bn(e.type);
    case 16:
      return bn("Lazy");
    case 13:
      return bn("Suspense");
    case 19:
      return bn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Go(e.type, !1), e;
    case 11:
      return e = Go(e.type.render, !1), e;
    case 1:
      return e = Go(e.type, !0), e;
    default:
      return "";
  }
}
function El(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case an:
      return "Fragment";
    case sn:
      return "Portal";
    case kl:
      return "Profiler";
    case Au:
      return "StrictMode";
    case _l:
      return "Suspense";
    case Cl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ac:
        return (e.displayName || "Context") + ".Consumer";
      case Tc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ru:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $u:
        return t = e.displayName || null, t !== null ? t : El(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return El(e(t));
        } catch {
        }
    }
  return null;
}
function Mp(e) {
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
      return El(t);
    case 8:
      return t === Au ? "StrictMode" : "Mode";
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
function Dt(e) {
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
function $c(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Dp(e) {
  var t = $c(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Kr(e) {
  e._valueTracker || (e._valueTracker = Dp(e));
}
function Lc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = $c(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ti(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xl(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Fs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Oc(e, t) {
  t = t.checked, t != null && Tu(e, "checked", t, !1);
}
function Pl(e, t) {
  Oc(e, t);
  var n = Dt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Nl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Nl(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function js(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Nl(e, t, n) {
  (t !== "number" || Ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function kn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Tl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Us(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(k(92));
      if (er(n)) {
        if (1 < n.length)
          throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function zc(e, t) {
  var n = Dt(t.value), r = Dt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Bs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ic(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Al(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ic(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Qr, Mc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Qr = Qr || document.createElement("div"), Qr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Qr.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var rr = {
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
}, Fp = ["Webkit", "ms", "Moz", "O"];
Object.keys(rr).forEach(function(e) {
  Fp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), rr[t] = rr[e];
  });
});
function Dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || rr.hasOwnProperty(e) && rr[e] ? ("" + t).trim() : t + "px";
}
function Fc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var jp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Rl(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function $l(e, t) {
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
var Ll = null;
function Lu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ol = null, _n = null, Cn = null;
function Hs(e) {
  if (e = Mr(e)) {
    if (typeof Ol != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = lo(t), Ol(e.stateNode, e.type, t));
  }
}
function jc(e) {
  _n ? Cn ? Cn.push(e) : Cn = [e] : _n = e;
}
function Uc() {
  if (_n) {
    var e = _n, t = Cn;
    if (Cn = _n = null, Hs(e), t)
      for (e = 0; e < t.length; e++)
        Hs(t[e]);
  }
}
function Bc(e, t) {
  return e(t);
}
function Hc() {
}
var Ko = !1;
function Wc(e, t, n) {
  if (Ko)
    return e(t, n);
  Ko = !0;
  try {
    return Bc(e, t, n);
  } finally {
    Ko = !1, (_n !== null || Cn !== null) && (Hc(), Uc());
  }
}
function hr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = lo(n);
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
var zl = !1;
if (ht)
  try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", { get: function() {
      zl = !0;
    } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
  } catch {
    zl = !1;
  }
function Up(e, t, n, r, i, o, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var ir = !1, Ai = null, Ri = !1, Il = null, Bp = { onError: function(e) {
  ir = !0, Ai = e;
} };
function Hp(e, t, n, r, i, o, l, u, s) {
  ir = !1, Ai = null, Up.apply(Bp, arguments);
}
function Wp(e, t, n, r, i, o, l, u, s) {
  if (Hp.apply(this, arguments), ir) {
    if (ir) {
      var a = Ai;
      ir = !1, Ai = null;
    } else
      throw Error(k(198));
    Ri || (Ri = !0, Il = a);
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
function Vc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Ws(e) {
  if (on(e) !== e)
    throw Error(k(188));
}
function Vp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = on(e), t === null)
      throw Error(k(188));
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
          return Ws(i), e;
        if (o === r)
          return Ws(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
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
function Gc(e) {
  return e = Vp(e), e !== null ? Kc(e) : null;
}
function Kc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Kc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Qc = Ie.unstable_scheduleCallback, Vs = Ie.unstable_cancelCallback, Gp = Ie.unstable_shouldYield, Kp = Ie.unstable_requestPaint, q = Ie.unstable_now, Qp = Ie.unstable_getCurrentPriorityLevel, Ou = Ie.unstable_ImmediatePriority, Yc = Ie.unstable_UserBlockingPriority, $i = Ie.unstable_NormalPriority, Yp = Ie.unstable_LowPriority, Xc = Ie.unstable_IdlePriority, no = null, lt = null;
function Xp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var qe = Math.clz32 ? Math.clz32 : qp, Zp = Math.log, Jp = Math.LN2;
function qp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zp(e) / Jp | 0) | 0;
}
var Yr = 64, Xr = 4194304;
function tr(e) {
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
function Li(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~i;
    u !== 0 ? r = tr(u) : (o &= l, o !== 0 && (r = tr(o)));
  } else
    l = n & ~i, l !== 0 ? r = tr(l) : o !== 0 && (r = tr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - qe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function bp(e, t) {
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
function em(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - qe(o), u = 1 << l, s = i[l];
    s === -1 ? (!(u & n) || u & r) && (i[l] = bp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ml(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zc() {
  var e = Yr;
  return Yr <<= 1, !(Yr & 4194240) && (Yr = 64), e;
}
function Qo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function zr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n;
}
function tm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function zu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var F = 0;
function Jc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qc, Iu, bc, ef, tf, Dl = !1, Zr = [], At = null, Rt = null, $t = null, yr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Et = [], nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Mr(t), t !== null && Iu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function rm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return At = Gn(At, e, t, n, r, i), !0;
    case "dragenter":
      return Rt = Gn(Rt, e, t, n, r, i), !0;
    case "mouseover":
      return $t = Gn($t, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return yr.set(o, Gn(yr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, vr.set(o, Gn(vr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function nf(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Vc(n), t !== null) {
          e.blockedOn = t, tf(e.priority, function() {
            bc(n);
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
function mi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Fl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ll = r, n.target.dispatchEvent(r), Ll = null;
    } else
      return t = Mr(n), t !== null && Iu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ks(e, t, n) {
  mi(e) && n.delete(t);
}
function im() {
  Dl = !1, At !== null && mi(At) && (At = null), Rt !== null && mi(Rt) && (Rt = null), $t !== null && mi($t) && ($t = null), yr.forEach(Ks), vr.forEach(Ks);
}
function Kn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Dl || (Dl = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, im)));
}
function gr(e) {
  function t(i) {
    return Kn(i, e);
  }
  if (0 < Zr.length) {
    Kn(Zr[0], e);
    for (var n = 1; n < Zr.length; n++) {
      var r = Zr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && Kn(At, e), Rt !== null && Kn(Rt, e), $t !== null && Kn($t, e), yr.forEach(t), vr.forEach(t), n = 0; n < Et.length; n++)
    r = Et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && (n = Et[0], n.blockedOn === null); )
    nf(n), n.blockedOn === null && Et.shift();
}
var En = wt.ReactCurrentBatchConfig, Oi = !0;
function om(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 1, Mu(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function lm(e, t, n, r) {
  var i = F, o = En.transition;
  En.transition = null;
  try {
    F = 4, Mu(e, t, n, r);
  } finally {
    F = i, En.transition = o;
  }
}
function Mu(e, t, n, r) {
  if (Oi) {
    var i = Fl(e, t, n, r);
    if (i === null)
      rl(e, t, r, zi, n), Gs(e, r);
    else if (rm(i, e, t, n, r))
      r.stopPropagation();
    else if (Gs(e, r), t & 4 && -1 < nm.indexOf(e)) {
      for (; i !== null; ) {
        var o = Mr(i);
        if (o !== null && qc(o), o = Fl(e, t, n, r), o === null && rl(e, t, r, zi, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      rl(e, t, r, null, n);
  }
}
var zi = null;
function Fl(e, t, n, r) {
  if (zi = null, e = Lu(r), e = Kt(e), e !== null)
    if (t = on(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Vc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return zi = e, null;
}
function rf(e) {
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
      switch (Qp()) {
        case Ou:
          return 1;
        case Yc:
          return 4;
        case $i:
        case Yp:
          return 16;
        case Xc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, Du = null, hi = null;
function of() {
  if (hi)
    return hi;
  var e, t = Du, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
    ;
  return hi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function yi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Jr() {
  return !0;
}
function Qs() {
  return !1;
}
function De(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Jr : Qs, this.isPropagationStopped = Qs, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
  }, persist: function() {
  }, isPersistent: Jr }), t;
}
var Fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fu = De(Fn), Ir = Q({}, Fn, { view: 0, detail: 0 }), um = De(Ir), Yo, Xo, Qn, ro = Q({}, Ir, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ju, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (Yo = e.screenX - Qn.screenX, Xo = e.screenY - Qn.screenY) : Xo = Yo = 0, Qn = e), Yo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Xo;
} }), Ys = De(ro), sm = Q({}, ro, { dataTransfer: 0 }), am = De(sm), cm = Q({}, Ir, { relatedTarget: 0 }), Zo = De(cm), fm = Q({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), dm = De(fm), pm = Q({}, Fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mm = De(pm), hm = Q({}, Fn, { data: 0 }), Xs = De(hm), ym = {
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
}, vm = {
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
}, gm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gm[e]) ? !!t[e] : !1;
}
function ju() {
  return Sm;
}
var wm = Q({}, Ir, { key: function(e) {
  if (e.key) {
    var t = ym[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ju, charCode: function(e) {
  return e.type === "keypress" ? yi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), km = De(wm), _m = Q({}, ro, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zs = De(_m), Cm = Q({}, Ir, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ju }), Em = De(Cm), xm = Q({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pm = De(xm), Nm = Q({}, ro, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Tm = De(Nm), Am = [9, 13, 27, 32], Uu = ht && "CompositionEvent" in window, or = null;
ht && "documentMode" in document && (or = document.documentMode);
var Rm = ht && "TextEvent" in window && !or, lf = ht && (!Uu || or && 8 < or && 11 >= or), Js = String.fromCharCode(32), qs = !1;
function uf(e, t) {
  switch (e) {
    case "keyup":
      return Am.indexOf(t.keyCode) !== -1;
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
function sf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function $m(e, t) {
  switch (e) {
    case "compositionend":
      return sf(t);
    case "keypress":
      return t.which !== 32 ? null : (qs = !0, Js);
    case "textInput":
      return e = t.data, e === Js && qs ? null : e;
    default:
      return null;
  }
}
function Lm(e, t) {
  if (cn)
    return e === "compositionend" || !Uu && uf(e, t) ? (e = of(), hi = Du = Pt = null, cn = !1, e) : null;
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
      return lf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Om = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function bs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Om[e.type] : t === "textarea";
}
function af(e, t, n, r) {
  jc(r), t = Ii(t, "onChange"), 0 < t.length && (n = new Fu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var lr = null, Sr = null;
function zm(e) {
  wf(e, 0);
}
function io(e) {
  var t = pn(e);
  if (Lc(t))
    return e;
}
function Im(e, t) {
  if (e === "change")
    return t;
}
var cf = !1;
if (ht) {
  var Jo;
  if (ht) {
    var qo = "oninput" in document;
    if (!qo) {
      var ea = document.createElement("div");
      ea.setAttribute("oninput", "return;"), qo = typeof ea.oninput == "function";
    }
    Jo = qo;
  } else
    Jo = !1;
  cf = Jo && (!document.documentMode || 9 < document.documentMode);
}
function ta() {
  lr && (lr.detachEvent("onpropertychange", ff), Sr = lr = null);
}
function ff(e) {
  if (e.propertyName === "value" && io(Sr)) {
    var t = [];
    af(t, Sr, e, Lu(e)), Wc(zm, t);
  }
}
function Mm(e, t, n) {
  e === "focusin" ? (ta(), lr = t, Sr = n, lr.attachEvent("onpropertychange", ff)) : e === "focusout" && ta();
}
function Dm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return io(Sr);
}
function Fm(e, t) {
  if (e === "click")
    return io(t);
}
function jm(e, t) {
  if (e === "input" || e === "change")
    return io(t);
}
function Um(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : Um;
function wr(e, t) {
  if (et(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!wl.call(t, i) || !et(e[i], t[i]))
      return !1;
  }
  return !0;
}
function na(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ra(e, t) {
  var n = na(e);
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
    n = na(n);
  }
}
function df(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? df(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pf() {
  for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ti(e.document);
  }
  return t;
}
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Bm(e) {
  var t = pf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && df(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ra(n, o);
        var l = ra(
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
var Hm = ht && "documentMode" in document && 11 >= document.documentMode, fn = null, jl = null, ur = null, Ul = !1;
function ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ul || fn == null || fn !== Ti(r) || (r = fn, "selectionStart" in r && Bu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ur && wr(ur, r) || (ur = r, r = Ii(jl, "onSelect"), 0 < r.length && (t = new Fu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = fn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var dn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, bo = {}, mf = {};
ht && (mf = document.createElement("div").style, "AnimationEvent" in window || (delete dn.animationend.animation, delete dn.animationiteration.animation, delete dn.animationstart.animation), "TransitionEvent" in window || delete dn.transitionend.transition);
function oo(e) {
  if (bo[e])
    return bo[e];
  if (!dn[e])
    return e;
  var t = dn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in mf)
      return bo[e] = t[n];
  return e;
}
var hf = oo("animationend"), yf = oo("animationiteration"), vf = oo("animationstart"), gf = oo("transitionend"), Sf = /* @__PURE__ */ new Map(), oa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e, t) {
  Sf.set(e, t), rn(t, [e]);
}
for (var el = 0; el < oa.length; el++) {
  var tl = oa[el], Wm = tl.toLowerCase(), Vm = tl[0].toUpperCase() + tl.slice(1);
  jt(Wm, "on" + Vm);
}
jt(hf, "onAnimationEnd");
jt(yf, "onAnimationIteration");
jt(vf, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(gf, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function la(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Wp(r, t, void 0, e), e.currentTarget = null;
}
function wf(e, t) {
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
          la(i, u, a), o = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          la(i, u, a), o = s;
        }
    }
  }
  if (Ri)
    throw e = Il, Ri = !1, Il = null, e;
}
function B(e, t) {
  var n = t[Gl];
  n === void 0 && (n = t[Gl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (kf(t, e, 2, !1), n.add(r));
}
function nl(e, t, n) {
  var r = 0;
  t && (r |= 4), kf(n, e, r, t);
}
var br = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[br]) {
    e[br] = !0, Nc.forEach(function(n) {
      n !== "selectionchange" && (Gm.has(n) || nl(n, !1, e), nl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[br] || (t[br] = !0, nl("selectionchange", !1, t));
  }
}
function kf(e, t, n, r) {
  switch (rf(t)) {
    case 1:
      var i = om;
      break;
    case 4:
      i = lm;
      break;
    default:
      i = Mu;
  }
  n = i.bind(null, t, n, e), i = void 0, !zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function rl(e, t, n, r, i) {
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
  Wc(function() {
    var a = o, h = Lu(n), p = [];
    e: {
      var d = Sf.get(e);
      if (d !== void 0) {
        var S = Fu, v = e;
        switch (e) {
          case "keypress":
            if (yi(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            S = km;
            break;
          case "focusin":
            v = "focus", S = Zo;
            break;
          case "focusout":
            v = "blur", S = Zo;
            break;
          case "beforeblur":
          case "afterblur":
            S = Zo;
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
            S = Ys;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = am;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Em;
            break;
          case hf:
          case yf:
          case vf:
            S = dm;
            break;
          case gf:
            S = Pm;
            break;
          case "scroll":
            S = um;
            break;
          case "wheel":
            S = Tm;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = mm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Zs;
        }
        var y = (t & 4) !== 0, E = !y && e === "scroll", f = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, f !== null && (w = hr(c, f), w != null && y.push(_r(c, w, m)))), E)
            break;
          c = c.return;
        }
        0 < y.length && (d = new S(d, v, null, n, h), p.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", d && n !== Ll && (v = n.relatedTarget || n.fromElement) && (Kt(v) || v[yt]))
          break e;
        if ((S || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, S ? (v = n.relatedTarget || n.toElement, S = a, v = v ? Kt(v) : null, v !== null && (E = on(v), v !== E || v.tag !== 5 && v.tag !== 6) && (v = null)) : (S = null, v = a), S !== v)) {
          if (y = Ys, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Zs, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), E = S == null ? d : pn(S), m = v == null ? d : pn(v), d = new y(w, c + "leave", S, n, h), d.target = E, d.relatedTarget = m, w = null, Kt(h) === a && (y = new y(f, c + "enter", v, n, h), y.target = m, y.relatedTarget = E, w = y), E = w, S && v)
            t: {
              for (y = S, f = v, c = 0, m = y; m; m = ln(m))
                c++;
              for (m = 0, w = f; w; w = ln(w))
                m++;
              for (; 0 < c - m; )
                y = ln(y), c--;
              for (; 0 < m - c; )
                f = ln(f), m--;
              for (; c--; ) {
                if (y === f || f !== null && y === f.alternate)
                  break t;
                y = ln(y), f = ln(f);
              }
              y = null;
            }
          else
            y = null;
          S !== null && ua(p, d, S, y, !1), v !== null && E !== null && ua(p, E, v, y, !0);
        }
      }
      e: {
        if (d = a ? pn(a) : window, S = d.nodeName && d.nodeName.toLowerCase(), S === "select" || S === "input" && d.type === "file")
          var _ = Im;
        else if (bs(d))
          if (cf)
            _ = jm;
          else {
            _ = Dm;
            var x = Mm;
          }
        else
          (S = d.nodeName) && S.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (_ = Fm);
        if (_ && (_ = _(e, a))) {
          af(p, _, n, h);
          break e;
        }
        x && x(e, d, a), e === "focusout" && (x = d._wrapperState) && x.controlled && d.type === "number" && Nl(d, "number", d.value);
      }
      switch (x = a ? pn(a) : window, e) {
        case "focusin":
          (bs(x) || x.contentEditable === "true") && (fn = x, jl = a, ur = null);
          break;
        case "focusout":
          ur = jl = fn = null;
          break;
        case "mousedown":
          Ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ul = !1, ia(p, n, h);
          break;
        case "selectionchange":
          if (Hm)
            break;
        case "keydown":
        case "keyup":
          ia(p, n, h);
      }
      var C;
      if (Uu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        cn ? uf(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (lf && n.locale !== "ko" && (cn || R !== "onCompositionStart" ? R === "onCompositionEnd" && cn && (C = of()) : (Pt = h, Du = "value" in Pt ? Pt.value : Pt.textContent, cn = !0)), x = Ii(a, R), 0 < x.length && (R = new Xs(R, e, null, n, h), p.push({ event: R, listeners: x }), C ? R.data = C : (C = sf(n), C !== null && (R.data = C)))), (C = Rm ? $m(e, n) : Lm(e, n)) && (a = Ii(a, "onBeforeInput"), 0 < a.length && (h = new Xs("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = C));
    }
    wf(p, t);
  });
}
function _r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ii(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = hr(e, n), o != null && r.unshift(_r(e, o, i)), o = hr(e, t), o != null && r.push(_r(e, o, i))), e = e.return;
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
function ua(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, i ? (s = hr(n, o), s != null && l.unshift(_r(n, s, u))) : i || (s = hr(n, o), s != null && l.push(_r(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Km = /\r\n?/g, Qm = /\u0000|\uFFFD/g;
function sa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Km, `
`).replace(Qm, "");
}
function ei(e, t, n) {
  if (t = sa(t), sa(e) !== t && n)
    throw Error(k(425));
}
function Mi() {
}
var Bl = null, Hl = null;
function Wl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Vl = typeof setTimeout == "function" ? setTimeout : void 0, Ym = typeof clearTimeout == "function" ? clearTimeout : void 0, aa = typeof Promise == "function" ? Promise : void 0, Xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof aa < "u" ? function(e) {
  return aa.resolve(null).then(e).catch(Zm);
} : Vl;
function Zm(e) {
  setTimeout(function() {
    throw e;
  });
}
function il(e, t) {
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
function Lt(e) {
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
function ca(e) {
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
var jn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + jn, Cr = "__reactProps$" + jn, yt = "__reactContainer$" + jn, Gl = "__reactEvents$" + jn, Jm = "__reactListeners$" + jn, qm = "__reactHandles$" + jn;
function Kt(e) {
  var t = e[ot];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[yt] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ca(e); e !== null; ) {
          if (n = e[ot])
            return n;
          e = ca(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Mr(e) {
  return e = e[ot] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function lo(e) {
  return e[Cr] || null;
}
var Kl = [], mn = -1;
function Ut(e) {
  return { current: e };
}
function H(e) {
  0 > mn || (e.current = Kl[mn], Kl[mn] = null, mn--);
}
function U(e, t) {
  mn++, Kl[mn] = e.current, e.current = t;
}
var Ft = {}, ge = Ut(Ft), Pe = Ut(!1), qt = Ft;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n)
    i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Ne(e) {
  return e = e.childContextTypes, e != null;
}
function Di() {
  H(Pe), H(ge);
}
function fa(e, t, n) {
  if (ge.current !== Ft)
    throw Error(k(168));
  U(ge, t), U(Pe, n);
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(k(108, Mp(e) || "Unknown", i));
  return Q({}, n, r);
}
function Fi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, qt = ge.current, U(ge, e), U(Pe, Pe.current), !0;
}
function da(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = _f(e, t, qt), r.__reactInternalMemoizedMergedChildContext = e, H(Pe), H(ge), U(ge, e)) : H(Pe), U(Pe, n);
}
var ct = null, uo = !1, ol = !1;
function Cf(e) {
  ct === null ? ct = [e] : ct.push(e);
}
function bm(e) {
  uo = !0, Cf(e);
}
function Bt() {
  if (!ol && ct !== null) {
    ol = !0;
    var e = 0, t = F;
    try {
      var n = ct;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ct = null, uo = !1;
    } catch (i) {
      throw ct !== null && (ct = ct.slice(e + 1)), Qc(Ou, Bt), i;
    } finally {
      F = t, ol = !1;
    }
  }
  return null;
}
var hn = [], yn = 0, ji = null, Ui = 0, je = [], Ue = 0, bt = null, dt = 1, pt = "";
function Vt(e, t) {
  hn[yn++] = Ui, hn[yn++] = ji, ji = e, Ui = t;
}
function Ef(e, t, n) {
  je[Ue++] = dt, je[Ue++] = pt, je[Ue++] = bt, bt = e;
  var r = dt;
  e = pt;
  var i = 32 - qe(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - qe(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, dt = 1 << 32 - qe(t) + i | n << i | r, pt = o + e;
  } else
    dt = 1 << o | n << i | r, pt = e;
}
function Hu(e) {
  e.return !== null && (Vt(e, 1), Ef(e, 1, 0));
}
function Wu(e) {
  for (; e === ji; )
    ji = hn[--yn], hn[yn] = null, Ui = hn[--yn], hn[yn] = null;
  for (; e === bt; )
    bt = je[--Ue], je[Ue] = null, pt = je[--Ue], je[Ue] = null, dt = je[--Ue], je[Ue] = null;
}
var Oe = null, Le = null, W = !1, Je = null;
function xf(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function pa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Oe = e, Le = Lt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Oe = e, Le = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bt !== null ? { id: dt, overflow: pt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = We(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Oe = e, Le = null, !0) : !1;
    default:
      return !1;
  }
}
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (W) {
    var t = Le;
    if (t) {
      var n = t;
      if (!pa(e, t)) {
        if (Ql(e))
          throw Error(k(418));
        t = Lt(n.nextSibling);
        var r = Oe;
        t && pa(e, t) ? xf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Oe = e);
      }
    } else {
      if (Ql(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, Oe = e;
    }
  }
}
function ma(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function ti(e) {
  if (e !== Oe)
    return !1;
  if (!W)
    return ma(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wl(e.type, e.memoizedProps)), t && (t = Le)) {
    if (Ql(e))
      throw Pf(), Error(k(418));
    for (; t; )
      xf(e, t), t = Lt(t.nextSibling);
  }
  if (ma(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else
    Le = Oe ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function Pf() {
  for (var e = Le; e; )
    e = Lt(e.nextSibling);
}
function $n() {
  Le = Oe = null, W = !1;
}
function Vu(e) {
  Je === null ? Je = [e] : Je.push(e);
}
var eh = wt.ReactCurrentBatchConfig;
function Yn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(k(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
        var u = i.refs;
        l === null ? delete u[o] : u[o] = l;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(k(284));
    if (!n._owner)
      throw Error(k(290, e));
  }
  return e;
}
function ni(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ha(e) {
  var t = e._init;
  return t(e._payload);
}
function Nf(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? (f.deletions = [c], f.flags |= 16) : m.push(c);
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
  function i(f, c) {
    return f = Mt(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, m) {
    return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < c ? (f.flags |= 2, c) : m) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, m, w) {
    return c === null || c.tag !== 6 ? (c = dl(m, f.mode, w), c.return = f, c) : (c = i(c, m), c.return = f, c);
  }
  function s(f, c, m, w) {
    var _ = m.type;
    return _ === an ? h(f, c, m.props.children, w, m.key) : c !== null && (c.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === _t && ha(_) === c.type) ? (w = i(c, m.props), w.ref = Yn(f, c, m), w.return = f, w) : (w = Ci(m.type, m.key, m.props, null, f.mode, w), w.ref = Yn(f, c, m), w.return = f, w);
  }
  function a(f, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = pl(m, f.mode, w), c.return = f, c) : (c = i(c, m.children || []), c.return = f, c);
  }
  function h(f, c, m, w, _) {
    return c === null || c.tag !== 7 ? (c = Zt(m, f.mode, w, _), c.return = f, c) : (c = i(c, m), c.return = f, c);
  }
  function p(f, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = dl("" + c, f.mode, m), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Gr:
          return m = Ci(c.type, c.key, c.props, null, f.mode, m), m.ref = Yn(f, null, c), m.return = f, m;
        case sn:
          return c = pl(c, f.mode, m), c.return = f, c;
        case _t:
          var w = c._init;
          return p(f, w(c._payload), m);
      }
      if (er(c) || Wn(c))
        return c = Zt(c, f.mode, m, null), c.return = f, c;
      ni(f, c);
    }
    return null;
  }
  function d(f, c, m, w) {
    var _ = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return _ !== null ? null : u(f, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Gr:
          return m.key === _ ? s(f, c, m, w) : null;
        case sn:
          return m.key === _ ? a(f, c, m, w) : null;
        case _t:
          return _ = m._init, d(
            f,
            c,
            _(m._payload),
            w
          );
      }
      if (er(m) || Wn(m))
        return _ !== null ? null : h(f, c, m, w, null);
      ni(f, m);
    }
    return null;
  }
  function S(f, c, m, w, _) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(m) || null, u(c, f, "" + w, _);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Gr:
          return f = f.get(w.key === null ? m : w.key) || null, s(c, f, w, _);
        case sn:
          return f = f.get(w.key === null ? m : w.key) || null, a(c, f, w, _);
        case _t:
          var x = w._init;
          return S(f, c, m, x(w._payload), _);
      }
      if (er(w) || Wn(w))
        return f = f.get(m) || null, h(c, f, w, _, null);
      ni(c, w);
    }
    return null;
  }
  function v(f, c, m, w) {
    for (var _ = null, x = null, C = c, R = c = 0, V = null; C !== null && R < m.length; R++) {
      C.index > R ? (V = C, C = null) : V = C.sibling;
      var L = d(f, C, m[R], w);
      if (L === null) {
        C === null && (C = V);
        break;
      }
      e && C && L.alternate === null && t(f, C), c = o(L, c, R), x === null ? _ = L : x.sibling = L, x = L, C = V;
    }
    if (R === m.length)
      return n(f, C), W && Vt(f, R), _;
    if (C === null) {
      for (; R < m.length; R++)
        C = p(f, m[R], w), C !== null && (c = o(C, c, R), x === null ? _ = C : x.sibling = C, x = C);
      return W && Vt(f, R), _;
    }
    for (C = r(f, C); R < m.length; R++)
      V = S(C, f, R, m[R], w), V !== null && (e && V.alternate !== null && C.delete(V.key === null ? R : V.key), c = o(V, c, R), x === null ? _ = V : x.sibling = V, x = V);
    return e && C.forEach(function(pe) {
      return t(f, pe);
    }), W && Vt(f, R), _;
  }
  function y(f, c, m, w) {
    var _ = Wn(m);
    if (typeof _ != "function")
      throw Error(k(150));
    if (m = _.call(m), m == null)
      throw Error(k(151));
    for (var x = _ = null, C = c, R = c = 0, V = null, L = m.next(); C !== null && !L.done; R++, L = m.next()) {
      C.index > R ? (V = C, C = null) : V = C.sibling;
      var pe = d(f, C, L.value, w);
      if (pe === null) {
        C === null && (C = V);
        break;
      }
      e && C && pe.alternate === null && t(f, C), c = o(pe, c, R), x === null ? _ = pe : x.sibling = pe, x = pe, C = V;
    }
    if (L.done)
      return n(
        f,
        C
      ), W && Vt(f, R), _;
    if (C === null) {
      for (; !L.done; R++, L = m.next())
        L = p(f, L.value, w), L !== null && (c = o(L, c, R), x === null ? _ = L : x.sibling = L, x = L);
      return W && Vt(f, R), _;
    }
    for (C = r(f, C); !L.done; R++, L = m.next())
      L = S(C, f, R, L.value, w), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? R : L.key), c = o(L, c, R), x === null ? _ = L : x.sibling = L, x = L);
    return e && C.forEach(function(Bn) {
      return t(f, Bn);
    }), W && Vt(f, R), _;
  }
  function E(f, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === an && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Gr:
          e: {
            for (var _ = m.key, x = c; x !== null; ) {
              if (x.key === _) {
                if (_ = m.type, _ === an) {
                  if (x.tag === 7) {
                    n(f, x.sibling), c = i(x, m.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (x.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === _t && ha(_) === x.type) {
                  n(f, x.sibling), c = i(x, m.props), c.ref = Yn(f, x, m), c.return = f, f = c;
                  break e;
                }
                n(f, x);
                break;
              } else
                t(f, x);
              x = x.sibling;
            }
            m.type === an ? (c = Zt(m.props.children, f.mode, w, m.key), c.return = f, f = c) : (w = Ci(m.type, m.key, m.props, null, f.mode, w), w.ref = Yn(f, c, m), w.return = f, f = w);
          }
          return l(f);
        case sn:
          e: {
            for (x = m.key; c !== null; ) {
              if (c.key === x)
                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(f, c.sibling), c = i(c, m.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = pl(m, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case _t:
          return x = m._init, E(f, c, x(m._payload), w);
      }
      if (er(m))
        return v(f, c, m, w);
      if (Wn(m))
        return y(f, c, m, w);
      ni(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = i(c, m), c.return = f, f = c) : (n(f, c), c = dl(m, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return E;
}
var Ln = Nf(!0), Tf = Nf(!1), Bi = Ut(null), Hi = null, vn = null, Gu = null;
function Ku() {
  Gu = vn = Hi = null;
}
function Qu(e) {
  var t = Bi.current;
  H(Bi), e._currentValue = t;
}
function Xl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function xn(e, t) {
  Hi = e, Gu = vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Gu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, vn === null) {
      if (Hi === null)
        throw Error(k(308));
      vn = e, Hi.dependencies = { lanes: 0, firstContext: e };
    } else
      vn = vn.next = e;
  return t;
}
var Qt = null;
function Yu(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function Af(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Yu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, vt(e, r);
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Xu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Rf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function mt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, vt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Yu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, vt(e, n);
}
function vi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zu(e, n);
  }
}
function ya(e, t) {
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
function Wi(e, t, n, r) {
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
    var p = i.baseState;
    l = 0, h = a = s = null, u = o;
    do {
      var d = u.lane, S = u.eventTime;
      if ((r & d) === d) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, y = u;
          switch (d = t, S = n, y.tag) {
            case 1:
              if (v = y.payload, typeof v == "function") {
                p = v.call(S, p, d);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = y.payload, d = typeof v == "function" ? v.call(S, p, d) : v, d == null)
                break e;
              p = Q({}, p, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [u] : d.push(u));
      } else
        S = { eventTime: S, lane: d, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = S, s = p) : h = h.next = S, l |= d;
      if (u = u.next, u === null) {
        if (u = i.shared.pending, u === null)
          break;
        d = u, u = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = p), i.baseState = s, i.firstBaseUpdate = a, i.lastBaseUpdate = h, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        l |= i.lane, i = i.next;
      while (i !== t);
    } else
      o === null && (i.shared.lanes = 0);
    tn |= l, e.lanes = l, e.memoizedState = p;
  }
}
function va(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function")
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Dr = {}, ut = Ut(Dr), Er = Ut(Dr), xr = Ut(Dr);
function Yt(e) {
  if (e === Dr)
    throw Error(k(174));
  return e;
}
function Zu(e, t) {
  switch (U(xr, t), U(Er, e), U(ut, Dr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Al(t, e);
  }
  H(ut), U(ut, t);
}
function On() {
  H(ut), H(Er), H(xr);
}
function $f(e) {
  Yt(xr.current);
  var t = Yt(ut.current), n = Al(t, e.type);
  t !== n && (U(Er, e), U(ut, n));
}
function Ju(e) {
  Er.current === e && (H(ut), H(Er));
}
var G = Ut(0);
function Vi(e) {
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
var ll = [];
function qu() {
  for (var e = 0; e < ll.length; e++)
    ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var gi = wt.ReactCurrentDispatcher, ul = wt.ReactCurrentBatchConfig, en = 0, K = null, ne = null, oe = null, Gi = !1, sr = !1, Pr = 0, th = 0;
function me() {
  throw Error(k(321));
}
function bu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n]))
      return !1;
  return !0;
}
function es(e, t, n, r, i, o) {
  if (en = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gi.current = e === null || e.memoizedState === null ? oh : lh, e = n(r, i), sr) {
    o = 0;
    do {
      if (sr = !1, Pr = 0, 25 <= o)
        throw Error(k(301));
      o += 1, oe = ne = null, t.updateQueue = null, gi.current = uh, e = n(r, i);
    } while (sr);
  }
  if (gi.current = Ki, t = ne !== null && ne.next !== null, en = 0, oe = ne = K = null, Gi = !1, t)
    throw Error(k(300));
  return e;
}
function ts() {
  var e = Pr !== 0;
  return Pr = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? K.memoizedState = oe = e : oe = oe.next = e, oe;
}
function Ke() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = ne.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null)
    oe = t, ne = e;
  else {
    if (e === null)
      throw Error(k(310));
    ne = e, e = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, oe === null ? K.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sl(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ne, i = r.baseQueue, o = n.pending;
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
      if ((en & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = p, l = r) : s = s.next = p, K.lanes |= h, tn |= h;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? l = r : s.next = u, et(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, tn |= o, i = i.next;
    while (i !== e);
  } else
    i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function al(e) {
  var t = Ke(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = i = i.next;
    do
      o = e(o, l.action), l = l.next;
    while (l !== i);
    et(o, t.memoizedState) || (xe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Lf() {
}
function Of(e, t) {
  var n = K, r = Ke(), i = t(), o = !et(r.memoizedState, i);
  if (o && (r.memoizedState = i, xe = !0), r = r.queue, ns(Mf.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Tr(9, If.bind(null, n, r, i, t), void 0, null), le === null)
      throw Error(k(349));
    en & 30 || zf(n, t, i);
  }
  return i;
}
function zf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function If(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Df(t) && Ff(e);
}
function Mf(e, t, n) {
  return n(function() {
    Df(t) && Ff(e);
  });
}
function Df(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function Ff(e) {
  var t = vt(e, 1);
  t !== null && be(t, e, 1, -1);
}
function ga(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = ih.bind(null, K, e), [t.memoizedState, e];
}
function Tr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jf() {
  return Ke().memoizedState;
}
function Si(e, t, n, r) {
  var i = nt();
  K.flags |= e, i.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r);
}
function so(e, t, n, r) {
  var i = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var l = ne.memoizedState;
    if (o = l.destroy, r !== null && bu(r, l.deps)) {
      i.memoizedState = Tr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Tr(1 | t, n, o, r);
}
function Sa(e, t) {
  return Si(8390656, 8, e, t);
}
function ns(e, t) {
  return so(2048, 8, e, t);
}
function Uf(e, t) {
  return so(4, 2, e, t);
}
function Bf(e, t) {
  return so(4, 4, e, t);
}
function Hf(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Wf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, so(4, 4, Hf.bind(null, t, e), n);
}
function rs() {
}
function Vf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Kf(e, t, n) {
  return en & 21 ? (et(n, t) || (n = Zc(), K.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
}
function nh(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ul.transition;
  ul.transition = {};
  try {
    e(!1), t();
  } finally {
    F = n, ul.transition = r;
  }
}
function Qf() {
  return Ke().memoizedState;
}
function rh(e, t, n) {
  var r = It(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Yf(e))
    Xf(t, n);
  else if (n = Af(e, t, n, r), n !== null) {
    var i = we();
    be(n, e, r, i), Zf(n, t, r);
  }
}
function ih(e, t, n) {
  var r = It(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yf(e))
    Xf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var l = t.lastRenderedState, u = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = u, et(u, l)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Yu(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Af(e, t, i, r), n !== null && (i = we(), be(n, e, r, i), Zf(n, t, r));
  }
}
function Yf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Xf(e, t) {
  sr = Gi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Zf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, zu(e, n);
  }
}
var Ki = { readContext: Ge, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, oh = { readContext: Ge, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: Sa, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Si(
    4194308,
    4,
    Hf.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Si(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Si(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = rh.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ga, useDebugValue: rs, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = ga(!1), t = e[0];
  return e = nh.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = nt();
  if (W) {
    if (n === void 0)
      throw Error(k(407));
    n = n();
  } else {
    if (n = t(), le === null)
      throw Error(k(349));
    en & 30 || zf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, Sa(Mf.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Tr(9, If.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = le.identifierPrefix;
  if (W) {
    var n = pt, r = dt;
    n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Pr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = th++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, lh = {
  readContext: Ge,
  useCallback: Vf,
  useContext: Ge,
  useEffect: ns,
  useImperativeHandle: Wf,
  useInsertionEffect: Uf,
  useLayoutEffect: Bf,
  useMemo: Gf,
  useReducer: sl,
  useRef: jf,
  useState: function() {
    return sl(Nr);
  },
  useDebugValue: rs,
  useDeferredValue: function(e) {
    var t = Ke();
    return Kf(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = sl(Nr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: Lf,
  useSyncExternalStore: Of,
  useId: Qf,
  unstable_isNewReconciler: !1
}, uh = { readContext: Ge, useCallback: Vf, useContext: Ge, useEffect: ns, useImperativeHandle: Wf, useInsertionEffect: Uf, useLayoutEffect: Bf, useMemo: Gf, useReducer: al, useRef: jf, useState: function() {
  return al(Nr);
}, useDebugValue: rs, useDeferredValue: function(e) {
  var t = Ke();
  return ne === null ? t.memoizedState = e : Kf(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = al(Nr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: Lf, useSyncExternalStore: Of, useId: Qf, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ao = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = It(e), o = mt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (be(t, e, i, r), vi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = It(e), o = mt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (be(t, e, i, r), vi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = It(e), i = mt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Ot(e, i, r), t !== null && (be(t, e, r, n), vi(t, e, r));
} };
function wa(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !wr(n, r) || !wr(i, o) : !0;
}
function Jf(e, t, n) {
  var r = !1, i = Ft, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ge(o) : (i = Ne(t) ? qt : ge.current, r = t.contextTypes, o = (r = r != null) ? Rn(e, i) : Ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ao, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ka(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ao.enqueueReplaceState(t, t.state, null);
}
function Jl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Xu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ge(o) : (o = Ne(t) ? qt : ge.current, i.context = Rn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ao.enqueueReplaceState(i, i.state, null), Wi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ip(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function cl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var sh = typeof WeakMap == "function" ? WeakMap : Map;
function qf(e, t, n) {
  n = mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Yi || (Yi = !0, su = r), ql(e, t);
  }, n;
}
function bf(e, t, n) {
  n = mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      ql(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    ql(e, t), typeof r != "function" && (zt === null ? zt = /* @__PURE__ */ new Set([this]) : zt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function _a(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sh();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = _h.bind(null, e, t, n), t.then(e, e));
}
function Ca(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ea(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var ah = wt.ReactCurrentOwner, xe = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Tf(t, null, n, r) : Ln(t, e.child, n, r);
}
function xa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return xn(t, i), r = es(e, t, n, r, o, i), n = ts(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : (W && n && Hu(t), t.flags |= 1, Se(e, t, r, i), t.child);
}
function Pa(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !fs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ed(e, t, o, r, i)) : (e = Ci(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : wr, n(l, r) && e.ref === t.ref)
      return gt(e, t, i);
  }
  return t.flags |= 1, e = Mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ed(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (xe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (xe = !0);
      else
        return t.lanes = e.lanes, gt(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function td(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Sn, Re), Re |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Sn, Re), Re |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Sn, Re), Re |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Sn, Re), Re |= r;
  return Se(e, t, i, n), t.child;
}
function nd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function bl(e, t, n, r, i) {
  var o = Ne(n) ? qt : ge.current;
  return o = Rn(t, o), xn(t, i), n = es(e, t, n, r, o, i), r = ts(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : (W && r && Hu(t), t.flags |= 1, Se(e, t, n, i), t.child);
}
function Na(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    Fi(t);
  } else
    o = !1;
  if (xn(t, i), t.stateNode === null)
    wi(e, t), Jf(t, n, r), Jl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ge(a) : (a = Ne(n) ? qt : ge.current, a = Rn(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ka(t, l, r, a), Ct = !1;
    var d = t.memoizedState;
    l.state = d, Wi(t, r, l, i), s = t.memoizedState, u !== r || d !== s || Pe.current || Ct ? (typeof h == "function" && (Zl(t, n, h, r), s = t.memoizedState), (u = Ct || wa(t, n, u, r, d, s, a)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Rf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Xe(t.type, u), l.props = a, p = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ge(s) : (s = Ne(n) ? qt : ge.current, s = Rn(t, s));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== p || d !== s) && ka(t, l, r, s), Ct = !1, d = t.memoizedState, l.state = d, Wi(t, r, l, i);
    var v = t.memoizedState;
    u !== p || d !== v || Pe.current || Ct ? (typeof S == "function" && (Zl(t, n, S, r), v = t.memoizedState), (a = Ct || wa(t, n, a, r, d, v, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), l.props = r, l.state = v, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return eu(e, t, n, r, o, i);
}
function eu(e, t, n, r, i, o) {
  nd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return i && da(t, n, !1), gt(e, t, o);
  r = t.stateNode, ah.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = Ln(t, e.child, null, o), t.child = Ln(t, null, u, o)) : Se(e, t, u, o), t.memoizedState = r.state, i && da(t, n, !0), t.child;
}
function rd(e) {
  var t = e.stateNode;
  t.pendingContext ? fa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fa(e, t.context, !1), Zu(e, t.containerInfo);
}
function Ta(e, t, n, r, i) {
  return $n(), Vu(i), t.flags |= 256, Se(e, t, n, r), t.child;
}
var tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function nu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function id(e, t, n) {
  var r = t.pendingProps, i = G.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(G, i & 1), e === null)
    return Yl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = po(l, r, 0, null), e = Zt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = nu(n), t.memoizedState = tu, e) : is(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null))
    return ch(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Mt(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Mt(u, o) : (o = Zt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? nu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = tu, r;
  }
  return o = e.child, e = o.sibling, r = Mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function is(e, t) {
  return t = po({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ri(e, t, n, r) {
  return r !== null && Vu(r), Ln(t, e.child, null, n), e = is(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ch(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = cl(Error(k(422))), ri(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = po({ mode: "visible", children: r.children }, i, 0, null), o = Zt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ln(t, e.child, null, l), t.child.memoizedState = nu(l), t.memoizedState = tu, o);
  if (!(t.mode & 1))
    return ri(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(k(419)), r = cl(o, r, void 0), ri(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, xe || u) {
    if (r = le, r !== null) {
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, vt(e, i), be(r, e, i, -1));
    }
    return cs(), r = cl(Error(k(421))), ri(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ch.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Le = Lt(i.nextSibling), Oe = t, W = !0, Je = null, e !== null && (je[Ue++] = dt, je[Ue++] = pt, je[Ue++] = bt, dt = e.id, pt = e.overflow, bt = t), t = is(t, r.children), t.flags |= 4096, t);
}
function Aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xl(e.return, t, n);
}
function fl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function od(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = G.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Aa(e, n, t);
          else if (e.tag === 19)
            Aa(e, n, t);
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
  if (U(G, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && Vi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), fl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Vi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        fl(t, !0, n, null, o);
        break;
      case "together":
        fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function gt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Mt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fh(e, t, n) {
  switch (t.tag) {
    case 3:
      rd(t), $n();
      break;
    case 5:
      $f(t);
      break;
    case 1:
      Ne(t.type) && Fi(t);
      break;
    case 4:
      Zu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Bi, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? id(e, t, n) : (U(G, G.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      U(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return od(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(G, G.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, td(e, t, n);
  }
  return gt(e, t, n);
}
var ld, ru, ud, sd;
ld = function(e, t) {
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
ru = function() {
};
ud = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Yt(ut.current);
    var o = null;
    switch (n) {
      case "input":
        i = xl(e, i), r = xl(e, r), o = [];
        break;
      case "select":
        i = Q({}, i, { value: void 0 }), r = Q({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Tl(e, i), r = Tl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Mi);
    }
    Rl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var u = i[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (pr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (pr.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
sd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xn(e, t) {
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
    for (var i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else
    for (i = e.child; i !== null; )
      n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function dh(e, t, n) {
  var r = t.pendingProps;
  switch (Wu(t), t.tag) {
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
      return Ne(t.type) && Di(), he(t), null;
    case 3:
      return r = t.stateNode, On(), H(Pe), H(ge), qu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Je !== null && (fu(Je), Je = null))), ru(e, t), he(t), null;
    case 5:
      Ju(t);
      var i = Yt(xr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        ud(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return he(t), null;
        }
        if (e = Yt(ut.current), ti(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ot] = t, r[Cr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < nr.length; i++)
                B(nr[i], r);
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
              Fs(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Us(r, o), B("invalid", r);
          }
          Rl(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && ei(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && ei(
                r.textContent,
                u,
                e
              ), i = ["children", "" + u]) : pr.hasOwnProperty(l) && u != null && l === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Kr(r), js(r, o, !0);
              break;
            case "textarea":
              Kr(r), Bs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ic(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ot] = t, e[Cr] = r, ld(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = $l(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < nr.length; i++)
                  B(nr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                Fs(e, r), i = xl(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Us(e, r), i = Tl(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Rl(n, i), u = i;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Fc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Mc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && mr(e, s) : typeof s == "number" && mr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (pr.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && Tu(e, o, s, l));
              }
            switch (n) {
              case "input":
                Kr(e), js(e, r, !1);
                break;
              case "textarea":
                Kr(e), Bs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? kn(e, !!r.multiple, o, !1) : r.defaultValue != null && kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Mi);
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
        sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Yt(xr.current), Yt(ut.current), ti(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null))
            switch (e.tag) {
              case 3:
                ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (H(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Le !== null && t.mode & 1 && !(t.flags & 128))
          Pf(), $n(), t.flags |= 98560, o = !1;
        else if (o = ti(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(k(317));
            o[ot] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else
          Je !== null && (fu(Je), Je = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? re === 0 && (re = 3) : cs())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return On(), ru(e, t), e === null && kr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Qu(t.type._context), he(t), null;
    case 17:
      return Ne(t.type) && Di(), he(t), null;
    case 19:
      if (H(G), o = t.memoizedState, o === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Xn(o, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Vi(e), l !== null) {
                for (t.flags |= 128, Xn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(G, G.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && q() > In && (t.flags |= 128, r = !0, Xn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Vi(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !W)
              return he(t), null;
          } else
            2 * q() - o.renderingStartTime > In && n !== 1073741824 && (t.flags |= 128, r = !0, Xn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = G.current, U(G, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return as(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Re & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ph(e, t) {
  switch (Wu(t), t.tag) {
    case 1:
      return Ne(t.type) && Di(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return On(), H(Pe), H(ge), qu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ju(t), null;
    case 13:
      if (H(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(G), null;
    case 4:
      return On(), null;
    case 10:
      return Qu(t.type._context), null;
    case 22:
    case 23:
      return as(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ii = !1, ve = !1, mh = typeof WeakSet == "function" ? WeakSet : Set, N = null;
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
function iu(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Ra = !1;
function hh(e, t) {
  if (Bl = Oi, e = pf(), Bu(e)) {
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
          var l = 0, u = -1, s = -1, a = 0, h = 0, p = e, d = null;
          t:
            for (; ; ) {
              for (var S; p !== n || i !== 0 && p.nodeType !== 3 || (u = l + i), p !== o || r !== 0 && p.nodeType !== 3 || (s = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (S = p.firstChild) !== null; )
                d = p, p = S;
              for (; ; ) {
                if (p === e)
                  break t;
                if (d === n && ++a === i && (u = l), d === o && ++h === r && (s = l), (S = p.nextSibling) !== null)
                  break;
                p = d, d = p.parentNode;
              }
              p = S;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (Hl = { focusedElem: e, selectionRange: n }, Oi = !1, N = t; N !== null; )
    if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, N = e;
    else
      for (; N !== null; ) {
        t = N;
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
                  var y = v.memoizedProps, E = v.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), E);
                  f.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(k(163));
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
  return v = Ra, Ra = !1, v;
}
function ar(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && iu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function co(e, t) {
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
function ou(e) {
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
function ad(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[Cr], delete t[Gl], delete t[Jm], delete t[qm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $a(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cd(e.return))
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
function lu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Mi));
  else if (r !== 4 && (e = e.child, e !== null))
    for (lu(e, t, n), e = e.sibling; e !== null; )
      lu(e, t, n), e = e.sibling;
}
function uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (uu(e, t, n), e = e.sibling; e !== null; )
      uu(e, t, n), e = e.sibling;
}
var se = null, Ze = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; )
    fd(e, t, n), n = n.sibling;
}
function fd(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(no, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ve || gn(n, t);
    case 6:
      var r = se, i = Ze;
      se = null, kt(e, t, n), se = r, Ze = i, se !== null && (Ze ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (Ze ? (e = se, n = n.stateNode, e.nodeType === 8 ? il(e.parentNode, n) : e.nodeType === 1 && il(e, n), gr(e)) : il(se, n.stateNode));
      break;
    case 4:
      r = se, i = Ze, se = n.stateNode.containerInfo, Ze = !0, kt(e, t, n), se = r, Ze = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && iu(n, t, l), i = i.next;
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (!ve && (gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (ve = (r = ve) || n.memoizedState !== null, kt(e, t, n), ve = r) : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function La(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mh()), t.forEach(function(r) {
      var i = Eh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ye(e, t) {
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
                se = u.stateNode, Ze = !1;
                break e;
              case 3:
                se = u.stateNode.containerInfo, Ze = !0;
                break e;
              case 4:
                se = u.stateNode.containerInfo, Ze = !0;
                break e;
            }
            u = u.return;
          }
        if (se === null)
          throw Error(k(160));
        fd(o, l, i), se = null, Ze = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (a) {
        Z(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      dd(t, e), t = t.sibling;
}
function dd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), tt(e), r & 4) {
        try {
          ar(3, e, e.return), co(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          ar(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      Ye(t, e), tt(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (Ye(t, e), tt(e), r & 512 && n !== null && gn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          mr(i, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Oc(i, o), $l(u, l);
            var a = $l(u, o);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], p = s[l + 1];
              h === "style" ? Fc(i, p) : h === "dangerouslySetInnerHTML" ? Mc(i, p) : h === "children" ? mr(i, p) : Tu(i, h, p, a);
            }
            switch (u) {
              case "input":
                Pl(i, o);
                break;
              case "textarea":
                zc(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null ? kn(i, !!o.multiple, S, !1) : d !== !!o.multiple && (o.defaultValue != null ? kn(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : kn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Cr] = o;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if (Ye(t, e), tt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          gr(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      Ye(t, e), tt(e);
      break;
    case 13:
      Ye(t, e), tt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (us = q())), r & 4 && La(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ve = (a = ve) || h, Ye(t, e), ve = a) : Ye(t, e), tt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (N = e, h = e.child; h !== null; ) {
            for (p = N = h; N !== null; ) {
              switch (d = N, S = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ar(4, d, d.return);
                  break;
                case 1:
                  gn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (y) {
                      Z(r, n, y);
                    }
                  }
                  break;
                case 5:
                  gn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    za(p);
                    continue;
                  }
              }
              S !== null ? (S.return = d, N = S) : za(p);
            }
            h = h.sibling;
          }
        e:
          for (h = null, p = e; ; ) {
            if (p.tag === 5) {
              if (h === null) {
                h = p;
                try {
                  i = p.stateNode, a ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Dc("display", l));
                } catch (y) {
                  Z(e, e.return, y);
                }
              }
            } else if (p.tag === 6) {
              if (h === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (y) {
                  Z(e, e.return, y);
                }
            } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
            if (p === e)
              break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e)
                break e;
              h === p && (h = null), p = p.return;
            }
            h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
          }
      }
      break;
    case 19:
      Ye(t, e), tt(e), r & 4 && La(e);
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
          if (cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (mr(i, ""), r.flags &= -33);
          var o = $a(e);
          uu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = $a(e);
          lu(e, u, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yh(e, t, n) {
  N = e, pd(e);
}
function pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || ii;
      if (!l) {
        var u = i.alternate, s = u !== null && u.memoizedState !== null || ve;
        u = ii;
        var a = ve;
        if (ii = l, (ve = s) && !a)
          for (N = i; N !== null; )
            l = N, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ia(i) : s !== null ? (s.return = l, N = s) : Ia(i);
        for (; o !== null; )
          N = o, pd(o), o = o.sibling;
        N = i, ii = u, ve = a;
      }
      Oa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, N = o) : Oa(e);
  }
}
function Oa(e) {
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
              ve || co(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && va(t, o, r);
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
                va(t, l, n);
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
                    var p = h.dehydrated;
                    p !== null && gr(p);
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
        ve || t.flags & 512 && ou(t);
      } catch (d) {
        Z(t, t.return, d);
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
function za(e) {
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
function Ia(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            co(4, t);
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
            ou(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ou(t);
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
var vh = Math.ceil, Qi = wt.ReactCurrentDispatcher, os = wt.ReactCurrentOwner, Ve = wt.ReactCurrentBatchConfig, I = 0, le = null, te = null, ce = 0, Re = 0, Sn = Ut(0), re = 0, Ar = null, tn = 0, fo = 0, ls = 0, cr = null, Ee = null, us = 0, In = 1 / 0, at = null, Yi = !1, su = null, zt = null, oi = !1, Nt = null, Xi = 0, fr = 0, au = null, ki = -1, _i = 0;
function we() {
  return I & 6 ? q() : ki !== -1 ? ki : ki = q();
}
function It(e) {
  return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : eh.transition !== null ? (_i === 0 && (_i = Zc()), _i) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rf(e.type)), e) : 1;
}
function be(e, t, n, r) {
  if (50 < fr)
    throw fr = 0, au = null, Error(k(185));
  zr(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (fo |= n), re === 4 && xt(e, ce)), Te(e, r), n === 1 && I === 0 && !(t.mode & 1) && (In = q() + 500, uo && Bt()));
}
function Te(e, t) {
  var n = e.callbackNode;
  em(e, t);
  var r = Li(e, e === le ? ce : 0);
  if (r === 0)
    n !== null && Vs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Vs(n), t === 1)
      e.tag === 0 ? bm(Ma.bind(null, e)) : Cf(Ma.bind(null, e)), Xm(function() {
        !(I & 6) && Bt();
      }), n = null;
    else {
      switch (Jc(r)) {
        case 1:
          n = Ou;
          break;
        case 4:
          n = Yc;
          break;
        case 16:
          n = $i;
          break;
        case 536870912:
          n = Xc;
          break;
        default:
          n = $i;
      }
      n = kd(n, md.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function md(e, t) {
  if (ki = -1, _i = 0, I & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n)
    return null;
  var r = Li(e, e === le ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Zi(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = yd();
    (le !== e || ce !== t) && (at = null, In = q() + 500, Xt(e, t));
    do
      try {
        wh();
        break;
      } catch (u) {
        hd(e, u);
      }
    while (1);
    Ku(), Qi.current = o, I = i, te !== null ? t = 0 : (le = null, ce = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (i = Ml(e), i !== 0 && (r = i, t = cu(e, i))), t === 1)
      throw n = Ar, Xt(e, 0), xt(e, r), Te(e, q()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !gh(i) && (t = Zi(e, r), t === 2 && (o = Ml(e), o !== 0 && (r = o, t = cu(e, o))), t === 1))
        throw n = Ar, Xt(e, 0), xt(e, r), Te(e, q()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Gt(e, Ee, at);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = us + 500 - q(), 10 < t)) {
            if (Li(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Vl(Gt.bind(null, e, Ee, at), t);
            break;
          }
          Gt(e, Ee, at);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - qe(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Vl(Gt.bind(null, e, Ee, at), r);
            break;
          }
          Gt(e, Ee, at);
          break;
        case 5:
          Gt(e, Ee, at);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Te(e, q()), e.callbackNode === n ? md.bind(null, e) : null;
}
function cu(e, t) {
  var n = cr;
  return e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256), e = Zi(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && fu(t)), e;
}
function fu(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function gh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!et(o(), i))
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
  for (t &= ~ls, t &= ~fo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ma(e) {
  if (I & 6)
    throw Error(k(327));
  Pn();
  var t = Li(e, 0);
  if (!(t & 1))
    return Te(e, q()), null;
  var n = Zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ml(e);
    r !== 0 && (t = r, n = cu(e, r));
  }
  if (n === 1)
    throw n = Ar, Xt(e, 0), xt(e, t), Te(e, q()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Ee, at), Te(e, q()), null;
}
function ss(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (In = q() + 500, uo && Bt());
  }
}
function nn(e) {
  Nt !== null && Nt.tag === 0 && !(I & 6) && Pn();
  var t = I;
  I |= 1;
  var n = Ve.transition, r = F;
  try {
    if (Ve.transition = null, F = 1, e)
      return e();
  } finally {
    F = r, Ve.transition = n, I = t, !(I & 6) && Bt();
  }
}
function as() {
  Re = Sn.current, H(Sn);
}
function Xt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ym(n)), te !== null)
    for (n = te.return; n !== null; ) {
      var r = n;
      switch (Wu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Di();
          break;
        case 3:
          On(), H(Pe), H(ge), qu();
          break;
        case 5:
          Ju(r);
          break;
        case 4:
          On();
          break;
        case 13:
          H(G);
          break;
        case 19:
          H(G);
          break;
        case 10:
          Qu(r.type._context);
          break;
        case 22:
        case 23:
          as();
      }
      n = n.return;
    }
  if (le = e, te = e = Mt(e.current, null), ce = Re = t, re = 0, Ar = null, ls = fo = tn = 0, Ee = cr = null, Qt !== null) {
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
function hd(e, t) {
  do {
    var n = te;
    try {
      if (Ku(), gi.current = Ki, Gi) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Gi = !1;
      }
      if (en = 0, oe = ne = K = null, sr = !1, Pr = 0, os.current = null, n === null || n.return === null) {
        re = 1, Ar = t, te = null;
        break;
      }
      e: {
        var o = e, l = n.return, u = n, s = t;
        if (t = ce, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = h.alternate;
            d ? (h.updateQueue = d.updateQueue, h.memoizedState = d.memoizedState, h.lanes = d.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = Ca(l);
          if (S !== null) {
            S.flags &= -257, Ea(S, l, u, o, t), S.mode & 1 && _a(o, a, t), t = S, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _a(o, a, t), cs();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var E = Ca(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256), Ea(E, l, u, o, t), Vu(zn(s, u));
            break e;
          }
        }
        o = s = zn(s, u), re !== 4 && (re = 2), cr === null ? cr = [o] : cr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = qf(o, s, t);
              ya(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (zt === null || !zt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = bf(o, u, t);
                ya(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gd(n);
    } catch (_) {
      t = _, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function yd() {
  var e = Qi.current;
  return Qi.current = Ki, e === null ? Ki : e;
}
function cs() {
  (re === 0 || re === 3 || re === 2) && (re = 4), le === null || !(tn & 268435455) && !(fo & 268435455) || xt(le, ce);
}
function Zi(e, t) {
  var n = I;
  I |= 2;
  var r = yd();
  (le !== e || ce !== t) && (at = null, Xt(e, t));
  do
    try {
      Sh();
      break;
    } catch (i) {
      hd(e, i);
    }
  while (1);
  if (Ku(), I = n, Qi.current = r, te !== null)
    throw Error(k(261));
  return le = null, ce = 0, re;
}
function Sh() {
  for (; te !== null; )
    vd(te);
}
function wh() {
  for (; te !== null && !Gp(); )
    vd(te);
}
function vd(e) {
  var t = wd(e.alternate, e, Re);
  e.memoizedProps = e.pendingProps, t === null ? gd(e) : te = t, os.current = null;
}
function gd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ph(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, te = null;
        return;
      }
    } else if (n = dh(n, t, Re), n !== null) {
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
function Gt(e, t, n) {
  var r = F, i = Ve.transition;
  try {
    Ve.transition = null, F = 1, kh(e, t, n, r);
  } finally {
    Ve.transition = i, F = r;
  }
  return null;
}
function kh(e, t, n, r) {
  do
    Pn();
  while (Nt !== null);
  if (I & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (tm(e, o), e === le && (te = le = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0, kd($i, function() {
    return Pn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ve.transition, Ve.transition = null;
    var l = F;
    F = 1;
    var u = I;
    I |= 4, os.current = null, hh(e, n), dd(n, e), Bm(Hl), Oi = !!Bl, Hl = Bl = null, e.current = n, yh(n), Kp(), I = u, F = l, Ve.transition = o;
  } else
    e.current = n;
  if (oi && (oi = !1, Nt = e, Xi = i), o = e.pendingLanes, o === 0 && (zt = null), Xp(n.stateNode), Te(e, q()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Yi)
    throw Yi = !1, e = su, su = null, e;
  return Xi & 1 && e.tag !== 0 && Pn(), o = e.pendingLanes, o & 1 ? e === au ? fr++ : (fr = 0, au = e) : fr = 0, Bt(), null;
}
function Pn() {
  if (Nt !== null) {
    var e = Jc(Xi), t = Ve.transition, n = F;
    try {
      if (Ve.transition = null, F = 16 > e ? 16 : e, Nt === null)
        var r = !1;
      else {
        if (e = Nt, Nt = null, Xi = 0, I & 6)
          throw Error(k(331));
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
                      ar(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null)
                    p.return = h, N = p;
                  else
                    for (; N !== null; ) {
                      h = N;
                      var d = h.sibling, S = h.return;
                      if (ad(h), h === a) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = S, N = d;
                        break;
                      }
                      N = S;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var E = y.sibling;
                    y.sibling = null, y = E;
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
                      ar(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, N = f;
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
                        co(9, u);
                    }
                  } catch (_) {
                    Z(u, u.return, _);
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
        if (I = i, Bt(), lt && typeof lt.onPostCommitFiberRoot == "function")
          try {
            lt.onPostCommitFiberRoot(no, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      F = n, Ve.transition = t;
    }
  }
  return !1;
}
function Da(e, t, n) {
  t = zn(n, t), t = qf(e, t, 1), e = Ot(e, t, 1), t = we(), e !== null && (zr(e, 1, t), Te(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3)
    Da(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Da(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
          e = zn(n, e), e = bf(t, e, 1), t = Ot(t, e, 1), e = we(), t !== null && (zr(t, 1, e), Te(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _h(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > q() - us ? Xt(e, 0) : ls |= n), Te(e, t);
}
function Sd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
  var n = we();
  e = vt(e, t), e !== null && (zr(e, t, n), Te(e, n));
}
function Ch(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sd(e, n);
}
function Eh(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), Sd(e, n);
}
var wd;
wd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current)
      xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return xe = !1, fh(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else
    xe = !1, W && t.flags & 1048576 && Ef(t, Ui, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      wi(e, t), e = t.pendingProps;
      var i = Rn(t, ge.current);
      xn(t, n), i = es(null, t, r, e, i, n);
      var o = ts();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, Fi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Xu(t), i.updater = ao, t.stateNode = i, i._reactInternals = t, Jl(t, r, e, n), t = eu(null, t, r, !0, o, n)) : (t.tag = 0, W && o && Hu(t), Se(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (wi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Ph(r), e = Xe(r, e), i) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = Na(null, t, r, e, n);
            break e;
          case 11:
            t = xa(null, t, r, e, n);
            break e;
          case 14:
            t = Pa(null, t, r, Xe(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), bl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Na(e, t, r, i, n);
    case 3:
      e: {
        if (rd(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, Rf(e, t), Wi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = zn(Error(k(423)), t), t = Ta(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = zn(Error(k(424)), t), t = Ta(e, t, r, n, i);
            break e;
          } else
            for (Le = Lt(t.stateNode.containerInfo.firstChild), Oe = t, W = !0, Je = null, n = Tf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === i) {
            t = gt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return $f(t), e === null && Yl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Wl(r, i) ? l = null : o !== null && Wl(r, o) && (t.flags |= 32), nd(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return id(e, t, n);
    case 4:
      return Zu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ln(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), xa(e, t, r, i, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, U(Bi, r._currentValue), r._currentValue = l, o !== null)
          if (et(o.value, l)) {
            if (o.children === i.children && !Pe.current) {
              t = gt(e, t, n);
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
                      s = mt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Xl(
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
                  throw Error(k(341));
                l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Xl(l, n, t), l = o.sibling;
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
        Se(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, xn(t, n), i = Ge(i), r = r(i), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), Pa(e, t, r, i, n);
    case 15:
      return ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), wi(e, t), t.tag = 1, Ne(r) ? (e = !0, Fi(t)) : e = !1, xn(t, n), Jf(t, r, i), Jl(t, r, i, n), eu(null, t, r, !0, e, n);
    case 19:
      return od(e, t, n);
    case 22:
      return td(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function kd(e, t) {
  return Qc(e, t);
}
function xh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new xh(e, t, n, r);
}
function fs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Ph(e) {
  if (typeof e == "function")
    return fs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ru)
      return 11;
    if (e === $u)
      return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ci(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function")
    fs(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case an:
          return Zt(n.children, i, o, t);
        case Au:
          l = 8, i |= 8;
          break;
        case kl:
          return e = We(12, n, t, i | 2), e.elementType = kl, e.lanes = o, e;
        case _l:
          return e = We(13, n, t, i), e.elementType = _l, e.lanes = o, e;
        case Cl:
          return e = We(19, n, t, i), e.elementType = Cl, e.lanes = o, e;
        case Rc:
          return po(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Tc:
                l = 10;
                break e;
              case Ac:
                l = 9;
                break e;
              case Ru:
                l = 11;
                break e;
              case $u:
                l = 14;
                break e;
              case _t:
                l = 16, r = null;
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
  return t = We(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Zt(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function po(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = Rc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function dl(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function pl(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Nh(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Qo(0), this.expirationTimes = Qo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function ds(e, t, n, r, i, o, l, u, s) {
  return e = new Nh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xu(o), e;
}
function Th(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function _d(e) {
  if (!e)
    return Ft;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1)
      throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
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
    if (Ne(n))
      return _f(e, n, t);
  }
  return t;
}
function Cd(e, t, n, r, i, o, l, u, s) {
  return e = ds(n, r, !0, e, i, o, l, u, s), e.context = _d(null), n = e.current, r = we(), i = It(n), o = mt(r, i), o.callback = t ?? null, Ot(n, o, i), e.current.lanes = i, zr(e, i, r), Te(e, r), e;
}
function mo(e, t, n, r) {
  var i = t.current, o = we(), l = It(i);
  return n = _d(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(i, t, l), e !== null && (be(e, i, l, o), vi(e, i, l)), l;
}
function Ji(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fa(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ps(e, t) {
  Fa(e, t), (e = e.alternate) && Fa(e, t);
}
function Ah() {
  return null;
}
var Ed = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ms(e) {
  this._internalRoot = e;
}
ho.prototype.render = ms.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  mo(e, t, null, null);
};
ho.prototype.unmount = ms.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function() {
      mo(null, e, null, null);
    }), t[yt] = null;
  }
};
function ho(e) {
  this._internalRoot = e;
}
ho.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ef();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++)
      ;
    Et.splice(n, 0, e), n === 0 && nf(e);
  }
};
function hs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ja() {
}
function Rh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Ji(l);
        o.call(a);
      };
    }
    var l = Cd(t, r, e, 0, null, !1, !1, "", ja);
    return e._reactRootContainer = l, e[yt] = l.current, kr(e.nodeType === 8 ? e.parentNode : e), nn(), l;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Ji(s);
      u.call(a);
    };
  }
  var s = ds(e, 0, !1, null, null, !1, !1, "", ja);
  return e._reactRootContainer = s, e[yt] = s.current, kr(e.nodeType === 8 ? e.parentNode : e), nn(function() {
    mo(t, s, n, r);
  }), s;
}
function vo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = Ji(l);
        u.call(s);
      };
    }
    mo(t, l, e, i);
  } else
    l = Rh(n, t, e, i, r);
  return Ji(l);
}
qc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = tr(t.pendingLanes);
        n !== 0 && (zu(t, n | 1), Te(t, q()), !(I & 6) && (In = q() + 500, Bt()));
      }
      break;
    case 13:
      nn(function() {
        var r = vt(e, 1);
        if (r !== null) {
          var i = we();
          be(r, e, 1, i);
        }
      }), ps(e, 1);
  }
};
Iu = function(e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = we();
      be(t, e, 134217728, n);
    }
    ps(e, 134217728);
  }
};
bc = function(e) {
  if (e.tag === 13) {
    var t = It(e), n = vt(e, t);
    if (n !== null) {
      var r = we();
      be(n, e, t, r);
    }
    ps(e, t);
  }
};
ef = function() {
  return F;
};
tf = function(e, t) {
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
      if (Pl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = lo(r);
            if (!i)
              throw Error(k(90));
            Lc(r), Pl(r, i);
          }
        }
      }
      break;
    case "textarea":
      zc(e, n);
      break;
    case "select":
      t = n.value, t != null && kn(e, !!n.multiple, t, !1);
  }
};
Bc = ss;
Hc = nn;
var $h = { usingClientEntryPoint: !1, Events: [Mr, pn, lo, jc, Uc, ss] }, Zn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Lh = { bundleType: Zn.bundleType, version: Zn.version, rendererPackageName: Zn.rendererPackageName, rendererConfig: Zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Gc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zn.findFiberByHostInstance || Ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!li.isDisabled && li.supportsFiber)
    try {
      no = li.inject(Lh), lt = li;
    } catch {
    }
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $h;
Me.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hs(t))
    throw Error(k(200));
  return Th(e, t, null, n);
};
Me.createRoot = function(e, t) {
  if (!hs(e))
    throw Error(k(299));
  var n = !1, r = "", i = Ed;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ds(e, 1, !1, null, null, n, !1, r, i), e[yt] = t.current, kr(e.nodeType === 8 ? e.parentNode : e), new ms(t);
};
Me.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Gc(t), e = e === null ? null : e.stateNode, e;
};
Me.flushSync = function(e) {
  return nn(e);
};
Me.hydrate = function(e, t, n) {
  if (!yo(t))
    throw Error(k(200));
  return vo(null, e, t, !0, n);
};
Me.hydrateRoot = function(e, t, n) {
  if (!hs(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Ed;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Cd(t, null, e, 1, n ?? null, i, !1, o, l), e[yt] = t.current, kr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new ho(t);
};
Me.render = function(e, t, n) {
  if (!yo(t))
    throw Error(k(200));
  return vo(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function(e) {
  if (!yo(e))
    throw Error(k(40));
  return e._reactRootContainer ? (nn(function() {
    vo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[yt] = null;
    });
  }), !0) : !1;
};
Me.unstable_batchedUpdates = ss;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yo(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return vo(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function xd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd);
    } catch (e) {
      console.error(e);
    }
}
xd(), Ec.exports = Me;
var Oh = Ec.exports, Pd, Ua = Oh;
Pd = Ua.createRoot, Ua.hydrateRoot;
function zh(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ba = "$$material";
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
function go(e, t) {
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
var Ih = !1;
function Mh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Dh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Fh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Ih : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Dh(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Mh(i);
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
}(), ye = "-ms-", qi = "-moz-", M = "-webkit-", Nd = "comm", ys = "rule", vs = "decl", jh = "@import", Td = "@keyframes", Uh = "@layer", Bh = Math.abs, So = String.fromCharCode, Hh = Object.assign;
function Wh(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function Ad(e) {
  return e.trim();
}
function Vh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function du(e, t) {
  return e.indexOf(t);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Rr(e, t, n) {
  return e.slice(t, n);
}
function rt(e) {
  return e.length;
}
function gs(e) {
  return e.length;
}
function ui(e, t) {
  return t.push(e), e;
}
function Gh(e, t) {
  return e.map(t).join("");
}
var wo = 1, Mn = 1, Rd = 0, Ae = 0, ee = 0, Un = "";
function ko(e, t, n, r, i, o, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: wo, column: Mn, length: l, return: "" };
}
function Jn(e, t) {
  return Hh(ko("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Kh() {
  return ee;
}
function Qh() {
  return ee = Ae > 0 ? ae(Un, --Ae) : 0, Mn--, ee === 10 && (Mn = 1, wo--), ee;
}
function ze() {
  return ee = Ae < Rd ? ae(Un, Ae++) : 0, Mn++, ee === 10 && (Mn = 1, wo++), ee;
}
function st() {
  return ae(Un, Ae);
}
function Ei() {
  return Ae;
}
function Fr(e, t) {
  return Rr(Un, e, t);
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
function $d(e) {
  return wo = Mn = 1, Rd = rt(Un = e), Ae = 0, [];
}
function Ld(e) {
  return Un = "", e;
}
function xi(e) {
  return Ad(Fr(Ae - 1, pu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yh(e) {
  for (; (ee = st()) && ee < 33; )
    ze();
  return $r(e) > 2 || $r(ee) > 3 ? "" : " ";
}
function Xh(e, t) {
  for (; --t && ze() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Fr(e, Ei() + (t < 6 && st() == 32 && ze() == 32));
}
function pu(e) {
  for (; ze(); )
    switch (ee) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pu(ee);
        break;
      case 40:
        e === 41 && pu(e);
        break;
      case 92:
        ze();
        break;
    }
  return Ae;
}
function Zh(e, t) {
  for (; ze() && e + ee !== 47 + 10; )
    if (e + ee === 42 + 42 && st() === 47)
      break;
  return "/*" + Fr(t, Ae - 1) + "*" + So(e === 47 ? e : ze());
}
function Jh(e) {
  for (; !$r(st()); )
    ze();
  return Fr(e, Ae);
}
function qh(e) {
  return Ld(Pi("", null, null, null, [""], e = $d(e), 0, [0], e));
}
function Pi(e, t, n, r, i, o, l, u, s) {
  for (var a = 0, h = 0, p = l, d = 0, S = 0, v = 0, y = 1, E = 1, f = 1, c = 0, m = "", w = i, _ = o, x = r, C = m; E; )
    switch (v = c, c = ze()) {
      case 40:
        if (v != 108 && ae(C, p - 1) == 58) {
          du(C += D(xi(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += xi(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Yh(v);
        break;
      case 92:
        C += Xh(Ei() - 1, 7);
        continue;
      case 47:
        switch (st()) {
          case 42:
          case 47:
            ui(bh(Zh(ze(), Ei()), t, n), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * y:
        u[a++] = rt(C) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            E = 0;
          case 59 + h:
            f == -1 && (C = D(C, /\f/g, "")), S > 0 && rt(C) - p && ui(S > 32 ? Wa(C + ";", r, n, p - 1) : Wa(D(C, " ", "") + ";", r, n, p - 2), s);
            break;
          case 59:
            C += ";";
          default:
            if (ui(x = Ha(C, t, n, a, h, i, u, m, w = [], _ = [], p), o), c === 123)
              if (h === 0)
                Pi(C, t, x, x, w, o, p, u, _);
              else
                switch (d === 99 && ae(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pi(e, x, x, r && ui(Ha(e, x, x, 0, 0, i, u, m, i, w = [], p), _), i, _, p, u, r ? w : _);
                    break;
                  default:
                    Pi(C, x, x, x, [""], _, 0, u, _);
                }
        }
        a = h = S = 0, y = f = 1, m = C = "", p = l;
        break;
      case 58:
        p = 1 + rt(C), S = v;
      default:
        if (y < 1) {
          if (c == 123)
            --y;
          else if (c == 125 && y++ == 0 && Qh() == 125)
            continue;
        }
        switch (C += So(c), c * y) {
          case 38:
            f = h > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            u[a++] = (rt(C) - 1) * f, f = 1;
            break;
          case 64:
            st() === 45 && (C += xi(ze())), d = st(), h = p = rt(m = C += Jh(Ei())), c++;
            break;
          case 45:
            v === 45 && rt(C) == 2 && (y = 0);
        }
    }
  return o;
}
function Ha(e, t, n, r, i, o, l, u, s, a, h) {
  for (var p = i - 1, d = i === 0 ? o : [""], S = gs(d), v = 0, y = 0, E = 0; v < r; ++v)
    for (var f = 0, c = Rr(e, p + 1, p = Bh(y = l[v])), m = e; f < S; ++f)
      (m = Ad(y > 0 ? d[f] + " " + c : D(c, /&\f/g, d[f]))) && (s[E++] = m);
  return ko(e, t, n, i === 0 ? ys : u, s, a, h);
}
function bh(e, t, n) {
  return ko(e, t, n, Nd, So(Kh()), Rr(e, 2, -2), 0);
}
function Wa(e, t, n, r) {
  return ko(e, t, n, vs, Rr(e, 0, r), Rr(e, r + 1, -1), r);
}
function Nn(e, t) {
  for (var n = "", r = gs(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function ey(e, t, n, r) {
  switch (e.type) {
    case Uh:
      if (e.children.length)
        break;
    case jh:
    case vs:
      return e.return = e.return || e.value;
    case Nd:
      return "";
    case Td:
      return e.return = e.value + "{" + Nn(e.children, r) + "}";
    case ys:
      e.value = e.props.join(",");
  }
  return rt(n = Nn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ty(e) {
  var t = gs(e);
  return function(n, r, i, o) {
    for (var l = "", u = 0; u < t; u++)
      l += e[u](n, r, i, o) || "";
    return l;
  };
}
function ny(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Od(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ry = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = st(), i === 38 && o === 12 && (n[r] = 1), !$r(o); )
    ze();
  return Fr(t, Ae);
}, iy = function(t, n) {
  var r = -1, i = 44;
  do
    switch ($r(i)) {
      case 0:
        i === 38 && st() === 12 && (n[r] = 1), t[r] += ry(Ae - 1, n, r);
        break;
      case 2:
        t[r] += xi(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = st() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += So(i);
    }
  while (i = ze());
  return t;
}, oy = function(t, n) {
  return Ld(iy($d(t), n));
}, Va = /* @__PURE__ */ new WeakMap(), ly = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Va.get(r)) && !i) {
      Va.set(t, !0);
      for (var o = [], l = oy(n, o), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, uy = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function zd(e, t) {
  switch (Wh(e, t)) {
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
      return M + e + qi + e + ye + e + e;
    case 6828:
    case 4268:
      return M + e + ye + e + e;
    case 6165:
      return M + e + ye + "flex-" + e + e;
    case 5187:
      return M + e + D(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return M + e + ye + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + ye + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + ye + D(e, "shrink", "negative") + e;
    case 5292:
      return M + e + ye + D(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + D(e, "-grow", "") + M + e + ye + D(e, "grow", "positive") + e;
    case 4554:
      return M + D(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
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
        switch (ae(e, t + 1)) {
          case 109:
            if (ae(e, t + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + qi + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~du(e, "stretch") ? zd(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, rt(e) - 3 - (~du(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + M) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + ye + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + ye + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + ye + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + ye + e + e;
  }
  return e;
}
var sy = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case vs:
        t.return = zd(t.value, t.length);
        break;
      case Td:
        return Nn([Jn(t, {
          value: D(t.value, "@", "@" + M)
        })], i);
      case ys:
        if (t.length)
          return Gh(t.props, function(o) {
            switch (Vh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Nn([Jn(t, {
                  props: [D(o, /:(read-\w+)/, ":" + qi + "$1")]
                })], i);
              case "::placeholder":
                return Nn([Jn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Jn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + qi + "$1")]
                }), Jn(t, {
                  props: [D(o, /:(plac\w+)/, ye + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, ay = [sy], cy = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var E = y.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || ay, o = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(y) {
      for (var E = y.getAttribute("data-emotion").split(" "), f = 1; f < E.length; f++)
        o[E[f]] = !0;
      u.push(y);
    }
  );
  var s, a = [ly, uy];
  {
    var h, p = [ey, ny(function(y) {
      h.insert(y);
    })], d = ty(a.concat(i, p)), S = function(E) {
      return Nn(qh(E), d);
    };
    s = function(E, f, c, m) {
      h = c, S(E ? E + "{" + f.styles + "}" : f.styles), m && (v.inserted[f.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Fh({
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
  return v.sheet.hydrate(u), v;
}, Id = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, Ss = ue ? Symbol.for("react.element") : 60103, ws = ue ? Symbol.for("react.portal") : 60106, _o = ue ? Symbol.for("react.fragment") : 60107, Co = ue ? Symbol.for("react.strict_mode") : 60108, Eo = ue ? Symbol.for("react.profiler") : 60114, xo = ue ? Symbol.for("react.provider") : 60109, Po = ue ? Symbol.for("react.context") : 60110, ks = ue ? Symbol.for("react.async_mode") : 60111, No = ue ? Symbol.for("react.concurrent_mode") : 60111, To = ue ? Symbol.for("react.forward_ref") : 60112, Ao = ue ? Symbol.for("react.suspense") : 60113, fy = ue ? Symbol.for("react.suspense_list") : 60120, Ro = ue ? Symbol.for("react.memo") : 60115, $o = ue ? Symbol.for("react.lazy") : 60116, dy = ue ? Symbol.for("react.block") : 60121, py = ue ? Symbol.for("react.fundamental") : 60117, my = ue ? Symbol.for("react.responder") : 60118, hy = ue ? Symbol.for("react.scope") : 60119;
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ss:
        switch (e = e.type, e) {
          case ks:
          case No:
          case _o:
          case Eo:
          case Co:
          case Ao:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Po:
              case To:
              case $o:
              case Ro:
              case xo:
                return e;
              default:
                return t;
            }
        }
      case ws:
        return t;
    }
  }
}
function Md(e) {
  return Fe(e) === No;
}
j.AsyncMode = ks;
j.ConcurrentMode = No;
j.ContextConsumer = Po;
j.ContextProvider = xo;
j.Element = Ss;
j.ForwardRef = To;
j.Fragment = _o;
j.Lazy = $o;
j.Memo = Ro;
j.Portal = ws;
j.Profiler = Eo;
j.StrictMode = Co;
j.Suspense = Ao;
j.isAsyncMode = function(e) {
  return Md(e) || Fe(e) === ks;
};
j.isConcurrentMode = Md;
j.isContextConsumer = function(e) {
  return Fe(e) === Po;
};
j.isContextProvider = function(e) {
  return Fe(e) === xo;
};
j.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ss;
};
j.isForwardRef = function(e) {
  return Fe(e) === To;
};
j.isFragment = function(e) {
  return Fe(e) === _o;
};
j.isLazy = function(e) {
  return Fe(e) === $o;
};
j.isMemo = function(e) {
  return Fe(e) === Ro;
};
j.isPortal = function(e) {
  return Fe(e) === ws;
};
j.isProfiler = function(e) {
  return Fe(e) === Eo;
};
j.isStrictMode = function(e) {
  return Fe(e) === Co;
};
j.isSuspense = function(e) {
  return Fe(e) === Ao;
};
j.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === _o || e === No || e === Eo || e === Co || e === Ao || e === fy || typeof e == "object" && e !== null && (e.$$typeof === $o || e.$$typeof === Ro || e.$$typeof === xo || e.$$typeof === Po || e.$$typeof === To || e.$$typeof === py || e.$$typeof === my || e.$$typeof === hy || e.$$typeof === dy);
};
j.typeOf = Fe;
Id.exports = j;
var yy = Id.exports, Dd = yy, vy = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gy = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fd = {};
Fd[Dd.ForwardRef] = vy;
Fd[Dd.Memo] = gy;
var Sy = !0;
function jd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var _s = function(t, n, r) {
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
  Sy === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, Cs = function(t, n, r) {
  _s(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function wy(e) {
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
var ky = {
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
}, _y = !1, Cy = /[A-Z]|^ms/g, Ey = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ud = function(t) {
  return t.charCodeAt(1) === 45;
}, Ga = function(t) {
  return t != null && typeof t != "boolean";
}, ml = /* @__PURE__ */ Od(function(e) {
  return Ud(e) ? e : e.replace(Cy, "-$&").toLowerCase();
}), Ka = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ey, function(r, i, o) {
          return it = {
            name: i,
            styles: o,
            next: it
          }, i;
        });
  }
  return ky[t] !== 1 && !Ud(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, xy = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Lr(e, t, n) {
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
        return it = {
          name: i.name,
          styles: i.styles,
          next: it
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            it = {
              name: l.name,
              styles: l.styles,
              next: it
            }, l = l.next;
        var u = o.styles + ";";
        return u;
      }
      return Py(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = it, a = n(e);
        return it = s, Lr(e, t, a);
      }
      break;
    }
  }
  var h = n;
  if (t == null)
    return h;
  var p = t[h];
  return p !== void 0 ? p : h;
}
function Py(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Lr(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ga(u) && (r += ml(o) + ":" + Ka(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && _y)
          throw new Error(xy);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Ga(l[s]) && (r += ml(o) + ":" + Ka(o, l[s]) + ";");
        else {
          var a = Lr(e, t, l);
          switch (o) {
            case "animation":
            case "animationName": {
              r += ml(o) + ":" + a + ";";
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
var Qa = /label:\s*([^\s;{]+)\s*(;|$)/g, it;
function Lo(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  it = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Lr(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (i += Lr(n, t, e[u]), r) {
      var s = o;
      i += s[u];
    }
  Qa.lastIndex = 0;
  for (var a = "", h; (h = Qa.exec(i)) !== null; )
    a += "-" + h[1];
  var p = wy(i) + a;
  return {
    name: p,
    styles: i,
    next: it
  };
}
var Ny = function(t) {
  return t();
}, Bd = Sl["useInsertionEffect"] ? Sl["useInsertionEffect"] : !1, Hd = Bd || Ny, Ya = Bd || P.useLayoutEffect, Ty = !1, Wd = /* @__PURE__ */ P.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cy({
    key: "css"
  }) : null
);
Wd.Provider;
var Es = function(t) {
  return /* @__PURE__ */ P.forwardRef(function(n, r) {
    var i = P.useContext(Wd);
    return t(n, i, r);
  });
}, jr = /* @__PURE__ */ P.createContext({}), xs = {}.hasOwnProperty, mu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ay = function(t, n) {
  var r = {};
  for (var i in n)
    xs.call(n, i) && (r[i] = n[i]);
  return r[mu] = t, r;
}, Ry = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return _s(n, r, i), Hd(function() {
    return Cs(n, r, i);
  }), null;
}, $y = /* @__PURE__ */ Es(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[mu], o = [r], l = "";
  typeof e.className == "string" ? l = jd(t.registered, o, e.className) : e.className != null && (l = e.className + " ");
  var u = Lo(o, void 0, P.useContext(jr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    xs.call(e, a) && a !== "css" && a !== mu && !Ty && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Ry, {
    cache: t,
    serialized: u,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ P.createElement(i, s));
}), Ly = $y, hl = { exports: {} }, Xa;
function Oy() {
  return Xa || (Xa = 1, function(e) {
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
  }(hl)), hl.exports;
}
Oy();
var Za = function(t, n) {
  var r = arguments;
  if (n == null || !xs.call(n, "css"))
    return P.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = Ly, o[1] = Ay(t, n);
  for (var l = 2; l < i; l++)
    o[l] = r[l];
  return P.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Za || (Za = {}));
var zy = /* @__PURE__ */ Es(function(e, t) {
  var n = e.styles, r = Lo([n], void 0, P.useContext(jr)), i = P.useRef();
  return Ya(function() {
    var o = t.key + "-global", l = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), l.hydrate([s])), i.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Ya(function() {
    var o = i.current, l = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Cs(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), Iy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, My = /* @__PURE__ */ Od(
  function(e) {
    return Iy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Dy = !1, Fy = My, jy = function(t) {
  return t !== "theme";
}, Ja = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Fy : jy;
}, qa = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(l) {
      return t.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Uy = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return _s(n, r, i), Hd(function() {
    return Cs(n, r, i);
  }), null;
}, By = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, l;
  n !== void 0 && (o = n.label, l = n.target);
  var u = qa(t, n, r), s = u || Ja(i), a = !s("as");
  return function() {
    var h = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && p.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      p.push.apply(p, h);
    else {
      var d = h[0];
      p.push(d[0]);
      for (var S = h.length, v = 1; v < S; v++)
        p.push(h[v], d[v]);
    }
    var y = Es(function(E, f, c) {
      var m = a && E.as || i, w = "", _ = [], x = E;
      if (E.theme == null) {
        x = {};
        for (var C in E)
          x[C] = E[C];
        x.theme = P.useContext(jr);
      }
      typeof E.className == "string" ? w = jd(f.registered, _, E.className) : E.className != null && (w = E.className + " ");
      var R = Lo(p.concat(_), f.registered, x);
      w += f.key + "-" + R.name, l !== void 0 && (w += " " + l);
      var V = a && u === void 0 ? Ja(m) : s, L = {};
      for (var pe in E)
        a && pe === "as" || V(pe) && (L[pe] = E[pe]);
      return L.className = w, c && (L.ref = c), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Uy, {
        cache: f,
        serialized: R,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ P.createElement(m, L));
    });
    return y.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = u, Object.defineProperty(y, "toString", {
      value: function() {
        return l === void 0 && Dy ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), y.withComponent = function(E, f) {
      var c = e(E, fe({}, n, f, {
        shouldForwardProp: qa(y, f, !0)
      }));
      return c.apply(void 0, p);
    }, y;
  };
}, Hy = [
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
], ba = By.bind(null);
Hy.forEach(function(e) {
  ba[e] = ba(e);
});
function Wy(e) {
  return e == null || Object.keys(e).length === 0;
}
function Vy(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ g(zy, {
    styles: typeof t == "function" ? (i) => t(Wy(i) ? n : i) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ec = [];
function Gy(e) {
  return ec[0] = e, Lo(ec);
}
function un(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Vd(e) {
  if (/* @__PURE__ */ P.isValidElement(e) || !un(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Vd(e[n]);
  }), t;
}
function bi(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? fe({}, e) : e;
  return un(e) && un(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ P.isValidElement(t[i]) ? r[i] = t[i] : un(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && un(e[i]) ? r[i] = bi(e[i], t[i], n) : n.clone ? r[i] = un(t[i]) ? Vd(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Ky = ["values", "unit", "step"], Qy = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => fe({}, n, {
    [r.key]: r.val
  }), {});
};
function Yy(e) {
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
  } = e, i = go(e, Ky), o = Qy(t), l = Object.keys(o);
  function u(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function s(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function a(d, S) {
    const v = l.indexOf(S);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : S) - r / 100}${n})`;
  }
  function h(d) {
    return l.indexOf(d) + 1 < l.length ? a(d, l[l.indexOf(d) + 1]) : u(d);
  }
  function p(d) {
    const S = l.indexOf(d);
    return S === 0 ? u(l[1]) : S === l.length - 1 ? s(l[S]) : a(d, l[l.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return fe({
    keys: l,
    values: o,
    up: u,
    down: s,
    between: a,
    only: h,
    not: p,
    unit: n
  }, i);
}
const Xy = {
  borderRadius: 4
}, Zy = Xy;
function dr(e, t) {
  return t ? bi(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ps = {
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
}, tc = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ps[e]}px)`
};
function St(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || tc;
    return t.reduce((l, u, s) => (l[o.up(o.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || tc;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(o.values || Ps).indexOf(u) !== -1) {
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
function Jy(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function nc(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Gd(e) {
  if (typeof e != "string")
    throw new Error(zh(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Oo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function eo(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Oo(e, n) || r, t && (i = t(i, r, e)), i;
}
function b(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (l) => {
    if (l[t] == null)
      return null;
    const u = l[t], s = l.theme, a = Oo(s, r) || {};
    return St(l, u, (p) => {
      let d = eo(a, i, p);
      return p === d && typeof p == "string" && (d = eo(a, i, `${t}${p === "default" ? "" : Gd(p)}`, p)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function qy(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const by = {
  m: "margin",
  p: "padding"
}, ev = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, rc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, tv = qy((e) => {
  if (e.length > 2)
    if (rc[e])
      e = rc[e];
    else
      return [e];
  const [t, n] = e.split(""), r = by[t], i = ev[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Ns = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ts = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ns, ...Ts];
function Ur(e, t, n, r) {
  var i;
  const o = (i = Oo(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (l) => typeof l == "string" ? l : o * l : Array.isArray(o) ? (l) => typeof l == "string" ? l : o[l] : typeof o == "function" ? o : () => {
  };
}
function Kd(e) {
  return Ur(e, "spacing", 8);
}
function Br(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function nv(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = Br(t, n), r), {});
}
function rv(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = tv(n), o = nv(i, r), l = e[n];
  return St(e, l, o);
}
function Qd(e, t) {
  const n = Kd(e.theme);
  return Object.keys(e).map((r) => rv(e, t, r, n)).reduce(dr, {});
}
function Y(e) {
  return Qd(e, Ns);
}
Y.propTypes = {};
Y.filterProps = Ns;
function X(e) {
  return Qd(e, Ts);
}
X.propTypes = {};
X.filterProps = Ts;
function iv(e = 8) {
  if (e.mui)
    return e;
  const t = Kd({
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
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? dr(i, t[o](r)) : i, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Qe(e, t) {
  return b({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ov = Qe("border", Be), lv = Qe("borderTop", Be), uv = Qe("borderRight", Be), sv = Qe("borderBottom", Be), av = Qe("borderLeft", Be), cv = Qe("borderColor"), fv = Qe("borderTopColor"), dv = Qe("borderRightColor"), pv = Qe("borderBottomColor"), mv = Qe("borderLeftColor"), hv = Qe("outline", Be), yv = Qe("outlineColor"), Io = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ur(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Br(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
Io.propTypes = {};
Io.filterProps = ["borderRadius"];
zo(ov, lv, uv, sv, av, cv, fv, dv, pv, mv, Io, hv, yv);
const Mo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      gap: Br(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
Mo.propTypes = {};
Mo.filterProps = ["gap"];
const Do = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Br(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
Do.propTypes = {};
Do.filterProps = ["columnGap"];
const Fo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ur(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Br(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
Fo.propTypes = {};
Fo.filterProps = ["rowGap"];
const vv = b({
  prop: "gridColumn"
}), gv = b({
  prop: "gridRow"
}), Sv = b({
  prop: "gridAutoFlow"
}), wv = b({
  prop: "gridAutoColumns"
}), kv = b({
  prop: "gridAutoRows"
}), _v = b({
  prop: "gridTemplateColumns"
}), Cv = b({
  prop: "gridTemplateRows"
}), Ev = b({
  prop: "gridTemplateAreas"
}), xv = b({
  prop: "gridArea"
});
zo(Mo, Do, Fo, vv, gv, Sv, wv, kv, _v, Cv, Ev, xv);
function Tn(e, t) {
  return t === "grey" ? t : e;
}
const Pv = b({
  prop: "color",
  themeKey: "palette",
  transform: Tn
}), Nv = b({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tn
}), Tv = b({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tn
});
zo(Pv, Nv, Tv);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Av = b({
  prop: "width",
  transform: $e
}), As = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ps[n];
      return o ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: $e(n)
      };
    };
    return St(e, e.maxWidth, t);
  }
  return null;
};
As.filterProps = ["maxWidth"];
const Rv = b({
  prop: "minWidth",
  transform: $e
}), $v = b({
  prop: "height",
  transform: $e
}), Lv = b({
  prop: "maxHeight",
  transform: $e
}), Ov = b({
  prop: "minHeight",
  transform: $e
});
b({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
b({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const zv = b({
  prop: "boxSizing"
});
zo(Av, As, Rv, $v, Lv, Ov, zv);
const Iv = {
  // borders
  border: {
    themeKey: "borders",
    transform: Be
  },
  borderTop: {
    themeKey: "borders",
    transform: Be
  },
  borderRight: {
    themeKey: "borders",
    transform: Be
  },
  borderBottom: {
    themeKey: "borders",
    transform: Be
  },
  borderLeft: {
    themeKey: "borders",
    transform: Be
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
    transform: Be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Io
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tn
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
    style: Mo
  },
  rowGap: {
    style: Fo
  },
  columnGap: {
    style: Do
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
    transform: $e
  },
  maxWidth: {
    style: As
  },
  minWidth: {
    transform: $e
  },
  height: {
    transform: $e
  },
  maxHeight: {
    transform: $e
  },
  minHeight: {
    transform: $e
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
}, Yd = Iv;
function Mv(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Dv(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fv() {
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
      style: p
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Oo(i, a) || {};
    return p ? p(l) : St(l, r, (v) => {
      let y = eo(d, h, v);
      return v === y && typeof v == "string" && (y = eo(d, h, `${n}${v === "default" ? "" : Gd(v)}`, v)), s === !1 ? y : {
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
    const u = (r = o.unstable_sxConfig) != null ? r : Yd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const p = Jy(o.breakpoints), d = Object.keys(p);
      let S = p;
      return Object.keys(h).forEach((v) => {
        const y = Dv(h[v], o);
        if (y != null)
          if (typeof y == "object")
            if (u[v])
              S = dr(S, e(v, y, o, u));
            else {
              const E = St({
                theme: o
              }, y, (f) => ({
                [v]: f
              }));
              Mv(E, y) ? S[v] = t({
                sx: y,
                theme: o,
                nested: !0
              }) : S = dr(S, E);
            }
          else
            S = dr(S, e(v, y, o, u));
      }), !l && o.modularCssLayers ? {
        "@layer sx": nc(d, S)
      } : nc(d, S);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Xd = Fv();
Xd.filterProps = ["sx"];
const jv = Xd;
function Uv(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Bv = ["breakpoints", "palette", "spacing", "shape"];
function Hv(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, l = go(e, Bv), u = Yy(n), s = iv(i);
  let a = bi({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, r),
    spacing: s,
    shape: fe({}, Zy, o)
  }, l);
  return a.applyStyles = Uv, a = t.reduce((h, p) => bi(h, p), a), a.unstable_sxConfig = fe({}, Yd, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(p) {
    return jv({
      sx: p,
      theme: this
    });
  }, a;
}
function Wv(e) {
  return Object.keys(e).length === 0;
}
function Rs(e = null) {
  const t = P.useContext(jr);
  return !t || Wv(t) ? e : t;
}
const Vv = Hv();
function Gv(e = Vv) {
  return Rs(e);
}
function yl(e) {
  const t = Gy(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Kv({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Gv(n), i = t && r[t] || r;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((l) => yl(typeof l == "function" ? l(i) : l)) : o = yl(o)), /* @__PURE__ */ g(Vy, {
    styles: o
  });
}
const Qv = typeof window < "u" ? P.useLayoutEffect : P.useEffect, Yv = Qv;
let ic = 0;
function Xv(e) {
  const [t, n] = P.useState(e), r = e || t;
  return P.useEffect(() => {
    t == null && (ic += 1, n(`mui-${ic}`));
  }, [t]), r;
}
const oc = Sl["useId".toString()];
function Zv(e) {
  if (oc !== void 0) {
    const t = oc();
    return e ?? t;
  }
  return Xv(e);
}
const Jv = /* @__PURE__ */ P.createContext(null), Zd = Jv;
function Jd() {
  return P.useContext(Zd);
}
const qv = typeof Symbol == "function" && Symbol.for, bv = qv ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function eg(e, t) {
  return typeof t == "function" ? t(e) : fe({}, e, t);
}
function tg(e) {
  const {
    children: t,
    theme: n
  } = e, r = Jd(), i = P.useMemo(() => {
    const o = r === null ? n : eg(r, n);
    return o != null && (o[bv] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ g(Zd.Provider, {
    value: i,
    children: t
  });
}
const ng = ["value"], rg = /* @__PURE__ */ P.createContext();
function ig(e) {
  let {
    value: t
  } = e, n = go(e, ng);
  return /* @__PURE__ */ g(rg.Provider, fe({
    value: t ?? !0
  }, n));
}
const og = /* @__PURE__ */ P.createContext(void 0);
function lg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ g(og.Provider, {
    value: e,
    children: t
  });
}
function ug(e) {
  const t = Rs(), n = Zv() || "", {
    modularCssLayers: r
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? i = "" : typeof r == "string" ? i = r.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Yv(() => {
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
  }, [i, n]), i ? /* @__PURE__ */ g(Kv, {
    styles: i
  }) : null;
}
const lc = {};
function uc(e, t, n, r = !1) {
  return P.useMemo(() => {
    const i = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(i), l = e ? fe({}, t, {
        [e]: o
      }) : o;
      return r ? () => l : l;
    }
    return e ? fe({}, t, {
      [e]: n
    }) : fe({}, t, n);
  }, [e, t, n, r]);
}
function sg(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, i = Rs(lc), o = Jd() || lc, l = uc(r, i, n), u = uc(r, o, n, !0), s = l.direction === "rtl", a = ug(l);
  return /* @__PURE__ */ g(tg, {
    theme: u,
    children: /* @__PURE__ */ g(jr.Provider, {
      value: l,
      children: /* @__PURE__ */ g(ig, {
        value: s,
        children: /* @__PURE__ */ A(lg, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const ag = ["theme"];
function cg(e) {
  let {
    theme: t
  } = e, n = go(e, ag);
  const r = t[Ba];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = fe({}, r, {
    vars: null
  }) : t && !t.vars && (i = fe({}, t, {
    vars: null
  }))), /* @__PURE__ */ g(sg, fe({}, n, {
    themeId: r ? Ba : void 0,
    theme: i
  }));
}
const fg = {
  aiInteraction: "AI interaction",
  syntheticContent: "Synthetic content",
  emotionBiometric: "Emotion / biometric",
  deepfakePublicInterest: "Deepfake (public interest)",
  none: "None"
}, dg = {
  pending: "Pending",
  compliant: "Compliant",
  nonCompliant: "Non-compliant",
  needsReview: "Needs review",
  flagged: "Flagged"
};
function pg(e) {
  if (!e)
    return "—";
  try {
    return new Date(e).toLocaleString(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch {
    return e;
  }
}
function mg({ record: e }) {
  var t;
  return /* @__PURE__ */ A("div", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ A("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "Governance overview" }),
        /* @__PURE__ */ A("p", { className: "ch-ai-gov__card-meta", children: [
          "Last evaluated: ",
          pg(e.lastEvaluated)
        ] })
      ] }),
      /* @__PURE__ */ g("span", { className: `ch-ai-gov__badge ch-ai-gov__badge--${e.governanceStatus}`, children: dg[e.governanceStatus] })
    ] }),
    /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: "Article 50 categories" }),
      /* @__PURE__ */ g("div", { className: "ch-ai-gov__section-body", children: e.article50Categories.length === 0 ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "No categories assigned." }) : /* @__PURE__ */ g("div", { className: "ch-ai-gov__tags", children: e.article50Categories.map((n) => /* @__PURE__ */ g("span", { className: "ch-ai-gov__tag", children: fg[n] ?? n }, n)) }) })
    ] }),
    /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: "Disclosure" }),
      /* @__PURE__ */ A("div", { className: "ch-ai-gov__section-body", children: [
        /* @__PURE__ */ A("p", { className: "ch-ai-gov__card-meta", style: { marginBottom: 6 }, children: [
          "Required: ",
          e.disclosureRequired ? "Yes" : "No"
        ] }),
        /* @__PURE__ */ g("p", { children: (t = e.disclosureText) != null && t.trim() ? e.disclosureText : "No disclosure text set." })
      ] })
    ] }),
    /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: "Confidence" }),
      /* @__PURE__ */ g("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ g("p", { children: e.overallConfidence == null ? "—" : `${Math.round(e.overallConfidence * 100)}%` }) })
    ] }),
    /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: "Evidence count" }),
      /* @__PURE__ */ g("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ g("p", { children: e.evidenceRecords.length }) })
    ] })
  ] });
}
function qn({
  title: e,
  children: t
}) {
  return /* @__PURE__ */ A("section", { className: "c2pa-section", children: [
    /* @__PURE__ */ g("h4", { className: "c2pa-section__title", children: e }),
    /* @__PURE__ */ g("div", { className: "c2pa-section__body", children: t })
  ] });
}
function hg(e) {
  if (!e)
    return null;
  const t = new Date(e);
  return Number.isNaN(t.getTime()) ? e : t.toLocaleString();
}
function yg({
  manifest: e,
  loading: t,
  error: n,
  ready: r = !1,
  embedded: i = !1
}) {
  var u;
  const o = hg(e == null ? void 0 : e.checkedAt), l = /* @__PURE__ */ A(Jt, { children: [
    t && /* @__PURE__ */ g("p", { className: "c2pa-muted", children: "Reading the stored C2PA summary…" }),
    !t && n && /* @__PURE__ */ g("p", { className: "c2pa-error", children: n }),
    !t && !n && !r && /* @__PURE__ */ g("p", { className: "c2pa-muted", children: "No C2PA summary is stored on this asset yet. Run a provenance check so Content Hub can save SC.Asset.C2PA.Summary." }),
    !t && !n && r && e && !e.hasManifest && /* @__PURE__ */ A("p", { className: "c2pa-muted", children: [
      "This asset was checked",
      o ? ` on ${o}` : "",
      " and has no C2PA Content Credentials."
    ] }),
    !t && (e == null ? void 0 : e.hasManifest) && /* @__PURE__ */ A(Jt, { children: [
      /* @__PURE__ */ g(qn, { title: "Validation", children: /* @__PURE__ */ g("p", { children: e.verified ? "Verified" : "Found, validation failed" }) }),
      /* @__PURE__ */ g(qn, { title: "Claim generator", children: /* @__PURE__ */ g("p", { children: e.claimGenerator || "—" }) }),
      e.title ? /* @__PURE__ */ g(qn, { title: "Title", children: /* @__PURE__ */ g("p", { children: e.title }) }) : null,
      /* @__PURE__ */ g(qn, { title: "Ingredients", children: /* @__PURE__ */ A("p", { children: [
        ((u = e.ingredients) == null ? void 0 : u.length) ?? 0,
        " ingredient(s)"
      ] }) }),
      o ? /* @__PURE__ */ g(qn, { title: "Checked", children: /* @__PURE__ */ g("p", { children: o }) }) : null
    ] })
  ] });
  return i ? /* @__PURE__ */ g("div", { className: "c2pa-credentials c2pa-credentials--embedded", children: l }) : /* @__PURE__ */ A("div", { className: "c2pa-credentials", children: [
    /* @__PURE__ */ A("header", { className: "c2pa-credentials__header", children: [
      /* @__PURE__ */ g("p", { className: "c2pa-credentials__eyebrow", children: "Content authenticity" }),
      /* @__PURE__ */ g("h3", { className: "c2pa-credentials__title", children: "Content Credentials" })
    ] }),
    /* @__PURE__ */ g("div", { className: "c2pa-credentials__body", children: l })
  ] });
}
const si = "SC.Asset.C2PA.Summary";
function qd(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en-us"])
    if (n in t)
      return qd(t[n]);
  return e;
}
function Ni(e) {
  const t = qd(e);
  if (typeof t == "string")
    try {
      return Ni(JSON.parse(t));
    } catch {
      return null;
    }
  return t && typeof t == "object" && !Array.isArray(t) ? t : null;
}
function wn(e) {
  return typeof e == "string" && e.trim() ? e.trim() : void 0;
}
function vg(e, t) {
  const n = wn(e == null ? void 0 : e.claimGenerator) ?? wn(e == null ? void 0 : e.claim_generator);
  if (n)
    return n;
  const r = (e == null ? void 0 : e.claimGeneratorInfo) ?? (e == null ? void 0 : e.claim_generator_info);
  if (Array.isArray(r))
    for (const i of r) {
      if (!i || typeof i != "object")
        continue;
      const o = wn(i.name);
      if (o)
        return o;
    }
  return wn(t.sourceTool);
}
function sc(e) {
  const t = Ni(e), n = Ni(t == null ? void 0 : t.latest);
  if (!n)
    return { ready: !1, manifest: null };
  const r = Ni(n.manifest), i = n.provenanceFound === !0, o = r == null ? void 0 : r.ingredients, l = r == null ? void 0 : r.assertions;
  return {
    ready: !0,
    manifest: {
      hasManifest: i,
      verified: n.provenanceVerified === !0,
      claimGenerator: vg(r, n),
      title: wn(r == null ? void 0 : r.title),
      ingredients: Array.isArray(o) ? o : [],
      assertions: Array.isArray(l) ? l : [],
      checkedAt: wn(n.checkedAt),
      raw: r ?? n
    }
  };
}
function ac(e) {
  var r;
  if (!e)
    return;
  try {
    const i = (r = e.getPropertyValue) == null ? void 0 : r.call(e, si);
    if (i != null)
      return i;
  } catch {
  }
  const t = e.properties;
  if (!t)
    return;
  if (si in t)
    return t[si];
  const n = Object.keys(t).find(
    (i) => i.toLowerCase() === si.toLowerCase()
  );
  return n ? t[n] : void 0;
}
function gg(e) {
  const [t, n] = P.useState(!!(e != null && e.entityId)), [r, i] = P.useState(null), [o, l] = P.useState(null), [u, s] = P.useState(!1), [a, h] = P.useState(0), p = (e == null ? void 0 : e.entityId) ?? null, d = (e == null ? void 0 : e.client) ?? null, S = (e == null ? void 0 : e.entity) ?? null, v = P.useCallback(() => {
    h((y) => y + 1);
  }, []);
  return P.useEffect(() => {
    if (p == null) {
      n(!1), i(null), l(null), s(!1);
      return;
    }
    let y = !1;
    async function E() {
      var m;
      n(!0), i(null);
      const f = sc(ac(S));
      let c = f;
      if ((m = d == null ? void 0 : d.raw) != null && m.getAsync)
        try {
          const w = await d.raw.getAsync(
            `/api/entities/${p}`
          );
          if (!w.isSuccessStatusCode || !w.content) {
            const _ = w.statusCode ?? "unknown";
            if (!f.ready)
              throw new Error(
                `Could not load the asset C2PA summary (HTTP ${_}).`
              );
          } else {
            const _ = sc(
              ac(w.content)
            );
            (_.ready || !f.ready) && (c = _);
          }
        } catch (w) {
          if (!f.ready) {
            y || (l(null), s(!1), i(w instanceof Error ? w.message : "Failed to read the C2PA summary."), n(!1));
            return;
          }
        }
      else if (!f.ready) {
        y || (l(null), s(!1), i("Content Hub client is not available to read the asset C2PA summary."), n(!1));
        return;
      }
      y || (l(c.manifest), s(c.ready), i(null), n(!1));
    }
    return E(), () => {
      y = !0;
    };
  }, [p, d, S, a]), {
    manifest: o,
    loading: t,
    error: r,
    ready: u,
    hasCredentials: !!(o != null && o.hasManifest),
    refetch: v
  };
}
function Ce({
  title: e,
  children: t
}) {
  return /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
    /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: e }),
    /* @__PURE__ */ g("div", { className: "ch-ai-gov__section-body", children: t })
  ] });
}
function Sg(e) {
  return e.verified ? "verified" : e.hasManifest ? "invalid" : "notApplicable";
}
function bd({
  evidence: e,
  mode: t,
  request: n,
  onCaptured: r
}) {
  const { manifest: i, loading: o, error: l, ready: u } = gg(
    t === "collector" ? n ?? null : null
  ), s = P.useRef(!1);
  if (P.useEffect(() => {
    if (t !== "collector" || !r || o || l || !u || !i || s.current)
      return;
    s.current = !0;
    const a = {
      hasManifest: !!i.hasManifest,
      claimGenerator: i.claimGenerator,
      ingredients: i.ingredients,
      raw: i.raw ?? i
    };
    r({
      evidenceSource: "content-hub",
      confidenceScore: null,
      verificationStatus: Sg(i),
      evidenceData: a
    }).catch(() => {
      s.current = !1;
    });
  }, [t, r, o, l, u, i]), t === "stored" && e) {
    const a = e.evidenceData ?? {};
    return /* @__PURE__ */ A(Jt, { children: [
      /* @__PURE__ */ g(Ce, { title: "Manifest", children: /* @__PURE__ */ g("p", { children: a.hasManifest ? "Present" : "Not present" }) }),
      a.claimGenerator ? /* @__PURE__ */ g(Ce, { title: "Claim generator", children: /* @__PURE__ */ g("p", { children: a.claimGenerator }) }) : null
    ] });
  }
  return /* @__PURE__ */ g(
    yg,
    {
      embedded: !0,
      manifest: i,
      loading: o,
      error: l,
      ready: u
    }
  );
}
function hu({
  evidence: e,
  mode: t,
  result: n,
  loading: r,
  error: i,
  onRun: o
}) {
  if (t === "stored" && e) {
    const l = e.evidenceData ?? {};
    return /* @__PURE__ */ A(Jt, { children: [
      /* @__PURE__ */ g(Ce, { title: "Model", children: /* @__PURE__ */ g("p", { children: l.modelUsed || "—" }) }),
      /* @__PURE__ */ g(Ce, { title: "Confidence", children: /* @__PURE__ */ g("p", { children: typeof l.confidenceScore == "number" ? `${Math.round(l.confidenceScore * 100)}%` : "—" }) }),
      /* @__PURE__ */ g(Ce, { title: "Labels", children: /* @__PURE__ */ g("p", { children: (l.labels ?? []).join(", ") || "—" }) })
    ] });
  }
  return t === "collector" ? /* @__PURE__ */ A("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ g("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "AI detection" }),
      /* @__PURE__ */ g("p", { className: "ch-ai-gov__card-meta", children: "Stub detector — replace with CodeMie when endpoint/auth is confirmed." })
    ] }) }),
    /* @__PURE__ */ g(Ce, { title: "Action", children: /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        className: "ch-ai-gov__primary-button",
        onClick: o,
        disabled: r,
        children: r ? "Running detection…" : "Run AI detection"
      }
    ) }),
    i ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: i }) : null
  ] }) : n ? /* @__PURE__ */ A("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ g("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "Latest detection result" }) }),
    /* @__PURE__ */ g(Ce, { title: "Model", children: /* @__PURE__ */ g("p", { children: n.modelUsed }) }),
    /* @__PURE__ */ g(Ce, { title: "Confidence", children: /* @__PURE__ */ g("p", { children: `${Math.round(n.confidenceScore * 100)}%` }) }),
    /* @__PURE__ */ g(Ce, { title: "Labels", children: /* @__PURE__ */ g("p", { children: n.labels.join(", ") || "—" }) })
  ] }) : /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "No detection result yet." });
}
function ep({ evidence: e, mode: t, onSubmit: n }) {
  const [r, i] = P.useState(""), [o, l] = P.useState(""), [u, s] = P.useState(!1), [a, h] = P.useState(!1), [p, d] = P.useState(null);
  if (t === "stored" && e) {
    const v = e.evidenceData ?? {};
    return /* @__PURE__ */ A(Jt, { children: [
      /* @__PURE__ */ g(Ce, { title: "Reviewer", children: /* @__PURE__ */ g("p", { children: v.reviewerName || "—" }) }),
      /* @__PURE__ */ g(Ce, { title: "Note", children: /* @__PURE__ */ g("p", { children: v.note || "—" }) }),
      /* @__PURE__ */ g(Ce, { title: "Attestation", children: /* @__PURE__ */ g("p", { children: v.attestationConfirmed ? "Confirmed" : "Not confirmed" }) })
    ] });
  }
  return /* @__PURE__ */ A("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ g("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ A("div", { children: [
      /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "Manual attestation" }),
      /* @__PURE__ */ g("p", { className: "ch-ai-gov__card-meta", children: "Record a human review of this asset." })
    ] }) }),
    /* @__PURE__ */ A("form", { onSubmit: async (v) => {
      if (v.preventDefault(), !!n) {
        if (!r.trim()) {
          d("Reviewer name is required.");
          return;
        }
        h(!0), d(null);
        try {
          await n({
            evidenceSource: "manual",
            confidenceScore: null,
            verificationStatus: u ? "verified" : "unverified",
            evidenceData: {
              reviewerName: r.trim(),
              note: o.trim(),
              attestationConfirmed: u
            }
          }), i(""), l(""), s(!1);
        } catch (y) {
          d(y instanceof Error ? y.message : "Failed to save attestation");
        } finally {
          h(!1);
        }
      }
    }, children: [
      /* @__PURE__ */ A(Ce, { title: "Reviewer details", children: [
        /* @__PURE__ */ A("div", { className: "ch-ai-gov__field", children: [
          /* @__PURE__ */ g("label", { htmlFor: "gov-reviewer-name", children: "Reviewer name" }),
          /* @__PURE__ */ g(
            "input",
            {
              id: "gov-reviewer-name",
              type: "text",
              value: r,
              onChange: (v) => i(v.target.value),
              placeholder: "Full name"
            }
          )
        ] }),
        /* @__PURE__ */ A("div", { className: "ch-ai-gov__field", style: { marginTop: 8 }, children: [
          /* @__PURE__ */ g("label", { htmlFor: "gov-attestation-note", children: "Note" }),
          /* @__PURE__ */ g(
            "textarea",
            {
              id: "gov-attestation-note",
              value: o,
              onChange: (v) => l(v.target.value),
              placeholder: "Review notes"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ g(Ce, { title: "Confirmation", children: /* @__PURE__ */ A("label", { className: "ch-ai-gov__checkbox", children: [
        /* @__PURE__ */ g(
          "input",
          {
            type: "checkbox",
            checked: u,
            onChange: (v) => s(v.target.checked)
          }
        ),
        /* @__PURE__ */ g("span", { children: "I attest that I have reviewed this content for AI governance requirements." })
      ] }) }),
      p ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: p }) : null,
      /* @__PURE__ */ g("button", { type: "submit", className: "ch-ai-gov__primary-button", disabled: a, children: a ? "Saving…" : "Submit attestation" })
    ] })
  ] });
}
function wg(e) {
  return `ch-ai-gov__badge ch-ai-gov__badge--${e}`;
}
function kg(e) {
  try {
    return new Date(e).toLocaleString(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch {
    return e;
  }
}
function _g({ evidence: e }) {
  return /* @__PURE__ */ A("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ A("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: e.evidenceType }),
        /* @__PURE__ */ A("p", { className: "ch-ai-gov__card-meta", children: [
          e.evidenceSource,
          " · ",
          kg(e.capturedAt)
        ] })
      ] }),
      /* @__PURE__ */ g("span", { className: wg(e.verificationStatus), children: e.verificationStatus })
    ] }),
    e.evidenceType === "c2paManifest" && /* @__PURE__ */ g(bd, { evidence: e, mode: "stored" }),
    e.evidenceType === "aiDetectionResult" && /* @__PURE__ */ g(hu, { evidence: e, mode: "stored" }),
    e.evidenceType === "manualAttestation" && /* @__PURE__ */ g(ep, { evidence: e, mode: "stored" })
  ] });
}
const Cg = {
  async detect() {
    return await new Promise((e) => setTimeout(e, 800)), {
      modelUsed: "stub-detector",
      confidenceScore: 0.5,
      labels: ["unverified-stub-result"]
    };
  }
};
function Eg() {
  const [e, t] = P.useState(null), [n, r] = P.useState(!1), [i, o] = P.useState(null), l = P.useCallback(async (u) => {
    r(!0), o(null);
    try {
      const s = await Cg.detect(u);
      return t(s), s;
    } catch (s) {
      return o(s instanceof Error ? s.message : "Detection failed"), null;
    } finally {
      r(!1);
    }
  }, []);
  return { result: e, loading: n, error: i, runDetection: l };
}
function xg({ record: e, addEvidence: t, assetSource: n, c2paRequest: r }) {
  const { result: i, loading: o, error: l, runDetection: u } = Eg(), [s, a] = P.useState(null), h = e.evidenceRecords.some((v) => v.evidenceType === "c2paManifest"), p = P.useCallback(
    async (v) => {
      if (!h)
        try {
          await t({
            evidenceType: "c2paManifest",
            ...v
          });
        } catch (y) {
          a(y instanceof Error ? y.message : "Failed to save C2PA evidence");
        }
    },
    [t, h]
  ), d = async () => {
    a(null);
    let v;
    try {
      if (n instanceof Blob)
        v = n;
      else if (typeof n == "string" && n.trim()) {
        const E = await fetch(n);
        if (!E.ok)
          throw new Error(`Could not fetch asset for detection (HTTP ${E.status})`);
        v = await E.blob();
      } else
        v = new Blob(["stub-asset"], { type: "application/octet-stream" });
    } catch (E) {
      a(E instanceof Error ? E.message : "Failed to load asset blob");
      return;
    }
    const y = await u(v);
    if (y)
      try {
        await t({
          evidenceType: "aiDetectionResult",
          evidenceSource: y.modelUsed,
          confidenceScore: y.confidenceScore,
          verificationStatus: "unverified",
          evidenceData: {
            modelUsed: y.modelUsed,
            confidenceScore: y.confidenceScore,
            labels: y.labels,
            rawResponse: y.rawResponse
          }
        });
      } catch (E) {
        a(E instanceof Error ? E.message : "Failed to save AI detection evidence");
      }
  }, S = async (v) => {
    a(null), await t({
      evidenceType: "manualAttestation",
      ...v
    });
  };
  return /* @__PURE__ */ A("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    s ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: s }) : null,
    /* @__PURE__ */ A("section", { children: [
      /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", style: { marginBottom: 8 }, children: "Collected evidence" }),
      e.evidenceRecords.length === 0 ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "No evidence records yet." }) : /* @__PURE__ */ g("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: e.evidenceRecords.map((v) => /* @__PURE__ */ g(_g, { evidence: v }, v.id)) })
    ] }),
    /* @__PURE__ */ A("section", { children: [
      /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", style: { marginBottom: 8 }, children: "Collectors" }),
      /* @__PURE__ */ A("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
        /* @__PURE__ */ A("article", { className: "ch-ai-gov__card", children: [
          /* @__PURE__ */ g("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ A("div", { children: [
            /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "C2PA Content Credentials" }),
            /* @__PURE__ */ A("p", { className: "ch-ai-gov__card-meta", children: [
              "Reads SC.Asset.C2PA.Summary from this asset.",
              h ? " Already saved on this record." : ""
            ] })
          ] }) }),
          !h && /* @__PURE__ */ g(
            bd,
            {
              mode: "collector",
              request: r ?? null,
              onCaptured: p
            }
          )
        ] }),
        /* @__PURE__ */ g(
          hu,
          {
            mode: "collector",
            loading: o,
            error: l,
            onRun: () => {
              d();
            }
          }
        ),
        i ? /* @__PURE__ */ g(hu, { mode: "result", result: i }) : null,
        /* @__PURE__ */ g(ep, { mode: "collector", onSubmit: S })
      ] })
    ] })
  ] });
}
function Pg(e, t) {
  if (!t)
    return { satisfied: !1, missingTypes: [] };
  const n = new Set(e.map((i) => i.evidenceType)), r = t.requiredEvidenceTypes.filter((i) => !n.has(i));
  return {
    satisfied: r.length === 0,
    missingTypes: r
  };
}
const cc = {
  c2paManifest: "C2PA manifest",
  aiDetectionResult: "AI detection result",
  manualAttestation: "Manual attestation"
};
function ai(e, t) {
  if (!e)
    return;
  if (t in e)
    return yu(e[t]);
  const n = Object.keys(e).find((r) => r.toLowerCase() === t.toLowerCase());
  return n ? yu(e[n]) : void 0;
}
function yu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value"])
    if (n in t)
      return yu(t[n]);
  return e;
}
function vu(e, t = "") {
  return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function fc(e) {
  return Array.isArray(e) ? e.map((t) => vu(t)).filter(Boolean) : [];
}
function Ng(e) {
  const t = e.systemProperties, n = (t == null ? void 0 : t.id) ?? e.id;
  if (typeof n != "number")
    return null;
  const r = e.properties ?? {};
  return {
    id: n,
    profileName: vu(ai(r, "profileName"), `Profile ${n}`),
    applicableArticle50Categories: fc(
      ai(r, "applicableArticle50Categories")
    ),
    requiredEvidenceTypes: fc(
      ai(r, "requiredEvidenceTypes")
    ),
    disclosureTemplate: vu(ai(r, "disclosureTemplate"))
  };
}
function Tg({ record: e, client: t }) {
  const [n, r] = P.useState(null), [i, o] = P.useState(!1), [l, u] = P.useState(null);
  P.useEffect(() => {
    let d = !1;
    async function S() {
      var v;
      if (!e.complianceProfileId) {
        r(null), u(null);
        return;
      }
      if (!((v = t == null ? void 0 : t.raw) != null && v.getAsync)) {
        u("Content Hub client is not available to load the compliance profile.");
        return;
      }
      o(!0), u(null);
      try {
        const y = await t.raw.getAsync(
          `/api/entities/${e.complianceProfileId}`
        );
        if (d)
          return;
        if (!y.isSuccessStatusCode || !y.content) {
          const E = y.statusCode ?? "unknown";
          u(
            `Failed to load EPAM.ComplianceProfile ${e.complianceProfileId} (HTTP ${E}). Confirm the entity definition exists and the relation is set.`
          ), r(null);
          return;
        }
        r(Ng(y.content));
      } catch (y) {
        d || (u(y instanceof Error ? y.message : "Failed to load compliance profile"), r(null));
      } finally {
        d || o(!1);
      }
    }
    return S(), () => {
      d = !0;
    };
  }, [e.complianceProfileId, t]);
  const { satisfied: s, missingTypes: a } = Pg(e.evidenceRecords, n), h = new Set(e.evidenceRecords.map((d) => d.evidenceType));
  if (!e.complianceProfileId)
    return /* @__PURE__ */ A("div", { className: "ch-ai-gov__card", children: [
      /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: "Compliance checklist" }),
      /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "No compliance profile is assigned to this governance record. Assign an EPAM.ComplianceProfile via the complianceProfile relation to enable the checklist." })
    ] });
  if (i)
    return /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "Loading compliance profile…" });
  if (l)
    return /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: l });
  if (!n)
    return /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "Compliance profile could not be mapped." });
  const p = n.requiredEvidenceTypes;
  return /* @__PURE__ */ A("div", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ A("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ g("h3", { className: "ch-ai-gov__card-title", children: n.profileName }),
        /* @__PURE__ */ g("p", { className: "ch-ai-gov__card-meta", children: "Presence checklist only — no confidence scoring." })
      ] }),
      /* @__PURE__ */ g(
        "span",
        {
          className: `ch-ai-gov__badge ${s ? "ch-ai-gov__badge--compliant" : "ch-ai-gov__badge--needsReview"}`,
          children: s ? "Satisfied" : "Incomplete"
        }
      )
    ] }),
    p.length === 0 ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "This profile has no required evidence types." }) : /* @__PURE__ */ g("ul", { className: "ch-ai-gov__checklist", children: p.map((d) => {
      const S = h.has(d);
      return /* @__PURE__ */ A(
        "li",
        {
          className: `ch-ai-gov__checklist-item ${S ? "ch-ai-gov__checklist-item--ok" : "ch-ai-gov__checklist-item--missing"}`,
          children: [
            /* @__PURE__ */ g("span", { "aria-hidden": "true", children: S ? "✓" : "○" }),
            /* @__PURE__ */ g("span", { children: cc[d] ?? d })
          ]
        },
        d
      );
    }) }),
    !s && a.length > 0 ? /* @__PURE__ */ A("p", { className: "ch-ai-gov__muted", children: [
      "Missing: ",
      a.map((d) => cc[d] ?? d).join(", ")
    ] }) : null,
    n.disclosureTemplate ? /* @__PURE__ */ A("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ g("h4", { className: "ch-ai-gov__section-title", children: "Disclosure template" }),
      /* @__PURE__ */ g("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ g("p", { children: n.disclosureTemplate }) })
    ] }) : null
  ] });
}
function gu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value"])
    if (n in t)
      return gu(t[n]);
  return e;
}
function ci(e, t) {
  if (!e)
    return;
  if (t in e)
    return gu(e[t]);
  const n = Object.keys(e).find((r) => r.toLowerCase() === t.toLowerCase());
  return n ? gu(e[n]) : void 0;
}
function fi(e, t = "") {
  return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function Ag(e) {
  const t = e.systemProperties, n = (t == null ? void 0 : t.id) ?? e.id;
  return typeof n == "number" && Number.isFinite(n) ? n : null;
}
function Rg(e) {
  const t = Ag(e);
  if (t == null)
    return null;
  const n = e.properties ?? {};
  return {
    id: t,
    eventType: fi(ci(n, "eventType"), "evidenceAdded"),
    eventDetail: fi(ci(n, "eventDetail")),
    occurredAt: fi(ci(n, "occurredAt"), (/* @__PURE__ */ new Date()).toISOString()),
    triggeredBy: fi(ci(n, "triggeredBy"), "system")
  };
}
function $g(e) {
  if (Array.isArray(e))
    return e;
  if (e && typeof e == "object") {
    const t = e;
    if (Array.isArray(t.items))
      return t.items;
  }
  return [];
}
function Lg(e) {
  try {
    return new Date(e).toLocaleString(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch {
    return e;
  }
}
function Og({ record: e, client: t }) {
  const [n, r] = P.useState([]), [i, o] = P.useState(!0), [l, u] = P.useState(null);
  return P.useEffect(() => {
    let s = !1;
    async function a() {
      var h;
      if (!((h = t == null ? void 0 : t.raw) != null && h.getAsync)) {
        u("Content Hub client is not available to load audit entries."), o(!1);
        return;
      }
      o(!0), u(null);
      try {
        const p = encodeURIComponent(
          `Definition.Name=='EPAM.GovernanceAuditEntry' AND Parent('governanceRecord').Id==${e.id}`
        ), d = await t.raw.getAsync(`/api/entities/query?query=${p}`);
        if (s)
          return;
        if (!d.isSuccessStatusCode) {
          const v = d.statusCode ?? "unknown";
          u(
            `Audit trail query failed (HTTP ${v}). Confirm EPAM.GovernanceAuditEntry and the governanceRecord relation exist.`
          ), r([]);
          return;
        }
        const S = $g(d.content).map(Rg).filter((v) => v != null).sort((v, y) => Date.parse(y.occurredAt) - Date.parse(v.occurredAt));
        r(S);
      } catch (p) {
        s || (u(p instanceof Error ? p.message : "Failed to load audit trail"), r([]));
      } finally {
        s || o(!1);
      }
    }
    return a(), () => {
      s = !0;
    };
  }, [e.id, e.evidenceRecords.length, e.governanceStatus, t]), i ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "Loading audit trail…" }) : l ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: l }) : n.length === 0 ? /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "No audit entries yet." }) : /* @__PURE__ */ g("ul", { className: "ch-ai-gov__timeline", children: n.map((s) => /* @__PURE__ */ A("li", { className: "ch-ai-gov__timeline-item", children: [
    /* @__PURE__ */ g("p", { className: "ch-ai-gov__timeline-type", children: s.eventType }),
    /* @__PURE__ */ g("p", { className: "ch-ai-gov__timeline-detail", children: s.eventDetail }),
    /* @__PURE__ */ A("p", { className: "ch-ai-gov__timeline-meta", children: [
      Lg(s.occurredAt),
      " · ",
      s.triggeredBy
    ] })
  ] }, s.id)) });
}
function He(e, t) {
  if (!e)
    return;
  const n = e[t];
  if (n !== void 0)
    return Su(n);
  const r = Object.keys(e).find((i) => i.toLowerCase() === t.toLowerCase());
  return r ? Su(e[r]) : void 0;
}
function Su(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"])
    if (n in t)
      return Su(t[n]);
  return e;
}
function Tt(e, t = "") {
  return e == null ? t : typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function tp(e) {
  if (e == null || e === "")
    return null;
  const t = typeof e == "number" ? e : Number(e);
  return Number.isFinite(t) ? t : null;
}
function zg(e, t = !1) {
  return typeof e == "boolean" ? e : e === "true" || e === 1 ? !0 : e === "false" || e === 0 ? !1 : t;
}
function Ig(e) {
  return Array.isArray(e) ? e.map((t) => Tt(t)).filter(Boolean) : [];
}
function ft(e) {
  var n;
  const t = ((n = e == null ? void 0 : e.systemProperties) == null ? void 0 : n.id) ?? (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.entityId);
  return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function Mg(e) {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e ?? null;
}
function Dg(e) {
  const t = ft(e);
  if (t == null)
    return null;
  const n = e.properties ?? {}, r = Tt(He(n, "evidenceType"), "manualAttestation"), i = Tt(
    He(n, "verificationStatus"),
    "unverified"
  );
  return {
    id: t,
    evidenceType: r,
    evidenceSource: Tt(He(n, "evidenceSource")),
    capturedAt: Tt(He(n, "capturedAt"), (/* @__PURE__ */ new Date()).toISOString()),
    confidenceScore: tp(He(n, "confidenceScore")),
    verificationStatus: i,
    evidenceData: Mg(He(n, "evidenceData"))
  };
}
function np(e, t = []) {
  const n = (e == null ? void 0 : e.properties) ?? {}, r = (e == null ? void 0 : e.relations) ?? {}, i = ft(e) ?? 0, o = r.complianceProfile ?? r.ComplianceProfile;
  let l = null;
  return Array.isArray(o) && o[0] != null ? l = ft(o[0]) ?? (Number(o[0]) || null) : o && typeof o == "object" && "parent" in o && (l = null), {
    id: i,
    governanceStatus: Tt(He(n, "governanceStatus"), "pending"),
    article50Categories: Ig(He(n, "article50Categories")),
    disclosureRequired: zg(He(n, "disclosureRequired"), !1),
    disclosureText: Tt(He(n, "disclosureText")),
    overallConfidence: tp(He(n, "overallConfidence")),
    lastEvaluated: (() => {
      const u = He(n, "lastEvaluated");
      return u == null ? null : Tt(u);
    })(),
    evidenceRecords: t,
    complianceProfileId: l
  };
}
function Fg(e) {
  if (Array.isArray(e))
    return e;
  if (e && typeof e == "object") {
    const t = e;
    if (Array.isArray(t.items))
      return t.items;
    if (Array.isArray(t.content))
      return t.content;
  }
  return [];
}
async function rp(e, t) {
  var o;
  if (!((o = e.raw) != null && o.getAsync))
    return { ok: !1, status: 0, items: [] };
  const n = `/api/entities/query?query=${encodeURIComponent(t)}`, r = await e.raw.getAsync(n), i = r.statusCode ?? (r.isSuccessStatusCode ? 200 : 500);
  return r.isSuccessStatusCode ? { ok: !0, status: i, items: Fg(r.content) } : { ok: !1, status: i, items: [] };
}
async function wu(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    return null;
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  return n.isSuccessStatusCode ? n.content ?? null : null;
}
async function vl(e, t, n) {
  var o;
  if (!((o = e.raw) != null && o.postAsync))
    return { ok: !1, status: 0, entity: null, error: "Content Hub client is not available" };
  const r = await e.raw.postAsync("/api/entities", {
    entitydefinition: {
      href: `/api/entitydefinitions/${t}`
    },
    properties: n
  }), i = r.statusCode ?? (r.isSuccessStatusCode ? 201 : 500);
  return r.isSuccessStatusCode ? { ok: !0, status: i, entity: r.content ?? null } : {
    ok: !1,
    status: i,
    entity: null,
    error: `Failed to create ${t}: HTTP ${i}`
  };
}
async function dc(e, t, n, r) {
  var l, u, s;
  if (!((l = e.raw) != null && l.putAsync))
    return !1;
  const i = await wu(e, t);
  return !!(await e.raw.putAsync(`/api/entities/${t}`, {
    entitydefinition: {
      href: ((u = i == null ? void 0 : i.entitydefinition) == null ? void 0 : u.href) ?? ((s = i == null ? void 0 : i.entityDefinition) == null ? void 0 : s.href) ?? `/api/entitydefinitions/${n}`
    },
    properties: {
      ...(i == null ? void 0 : i.properties) ?? {},
      ...r
    }
  })).isSuccessStatusCode;
}
async function gl(e, t, n, r) {
  var u;
  if (!((u = e.raw) != null && u.postAsync))
    return;
  const i = `/api/entities/${t}/relations/${n}`, o = { parent: { href: `/api/entities/${r}` } };
  (await e.raw.postAsync(i, o)).isSuccessStatusCode || e.raw.putAsync && await e.raw.putAsync(i, {
    ...o,
    self: { href: i }
  });
}
async function jg(e, t) {
  const n = await rp(
    e,
    `Definition.Name=='EPAM.EvidenceRecord' AND Parent('governanceRecord').Id==${t}`
  );
  if (!n.ok) {
    if (n.status === 404 || n.status === 400)
      throw new Error(
        `Evidence query failed (HTTP ${n.status}). Confirm EPAM.EvidenceRecord and the governanceRecord relation exist in this CH instance.`
      );
    return [];
  }
  return n.items.map(Dg).filter((r) => r != null);
}
async function Ug(e, t) {
  var l, u, s, a;
  const n = np(t).complianceProfileId;
  if (n != null)
    return n;
  const r = (t == null ? void 0 : t.relations) ?? {}, i = r.complianceProfile ?? r.ComplianceProfile;
  if (!i || typeof i != "object")
    return null;
  const o = typeof i.href == "string" ? i.href : typeof ((l = i.parent) == null ? void 0 : l.href) == "string" ? i.parent.href : null;
  if (o && ((u = e.raw) != null && u.getAsync))
    try {
      const h = await e.raw.getAsync(o);
      if (h.isSuccessStatusCode && h.content) {
        const p = h.content;
        if ((s = p.parent) != null && s.href) {
          const S = String(p.parent.href).match(/\/entities\/(\d+)/);
          if (S)
            return Number(S[1]);
        }
        if (Array.isArray(p.parents) && ((a = p.parents[0]) != null && a.href)) {
          const S = String(p.parents[0].href).match(/\/entities\/(\d+)/);
          if (S)
            return Number(S[1]);
        }
        const d = ft(p);
        if (d != null)
          return d;
      }
    } catch {
    }
  return null;
}
function Bg(e, t, n = "system") {
  const [r, i] = P.useState(null), [o, l] = P.useState(!0), [u, s] = P.useState(null), a = P.useCallback(async () => {
    var S, v;
    if (!(e != null && e.id)) {
      i(null), l(!1), s("No asset entity in context.");
      return;
    }
    if (!((S = t == null ? void 0 : t.raw) != null && S.getAsync) || !((v = t == null ? void 0 : t.raw) != null && v.postAsync)) {
      i(null), l(!1), s("Content Hub client is not available on the component context.");
      return;
    }
    l(!0), s(null);
    try {
      const y = await rp(
        t,
        `Definition.Name=='EPAM.GovernanceRecord' AND Parent('relatedContent').Id==${e.id}`
      );
      if (!y.ok && (y.status === 404 || y.status === 400))
        throw new Error(
          `Governance record query failed (HTTP ${y.status}). Confirm EPAM.GovernanceRecord (and relatedContent → M.Asset) exists in this CH instance. Schema prerequisite — not a UI bug.`
        );
      let E = null;
      if (y.ok && y.items.length > 0) {
        const _ = ft(y.items[0]);
        E = _ != null ? await wu(t, _) ?? y.items[0] : y.items[0];
      } else {
        const _ = await vl(t, "EPAM.GovernanceRecord", {
          governanceStatus: "pending",
          article50Categories: [],
          disclosureRequired: !1,
          disclosureText: ""
        });
        if (!_.ok || !_.entity)
          throw new Error(
            _.error ?? `Failed to create governance record (HTTP ${_.status}). If this is a 404/schema validation error, EPAM.GovernanceRecord may not exist yet.`
          );
        const x = ft(_.entity);
        if (x == null)
          throw new Error("Created governance record but response did not include an id.");
        await gl(t, x, "relatedContent", e.id), E = await wu(t, x) ?? _.entity;
      }
      const f = ft(E);
      if (f == null)
        throw new Error("Governance record is missing an id.");
      const c = await jg(t, f), m = await Ug(t, E), w = np(E, c);
      w.complianceProfileId = m, i(w);
    } catch (y) {
      console.error("useGovernanceRecord error", y), s(y instanceof Error ? y.message : "Unknown error"), i(null);
    } finally {
      l(!1);
    }
  }, [e, t]);
  P.useEffect(() => {
    a();
  }, [a]);
  const h = P.useCallback(
    async (S, v) => {
      var f;
      if (!r || !((f = t == null ? void 0 : t.raw) != null && f.postAsync))
        return;
      const y = await vl(t, "EPAM.GovernanceAuditEntry", {
        eventType: S,
        eventDetail: v,
        occurredAt: (/* @__PURE__ */ new Date()).toISOString(),
        // ASSUMPTION: no project-wide current-user helper exists yet; callers pass currentUser.
        triggeredBy: n || "system"
      });
      if (!y.ok || !y.entity) {
        console.error(
          "appendAuditEntry failed",
          y.error ?? `HTTP ${y.status}`
        );
        return;
      }
      const E = ft(y.entity);
      E != null && await gl(t, E, "governanceRecord", r.id);
    },
    [r, t, n]
  ), p = P.useCallback(
    async (S) => {
      var E;
      if (!r || !((E = t == null ? void 0 : t.raw) != null && E.postAsync))
        return;
      const v = await vl(t, "EPAM.EvidenceRecord", {
        evidenceType: S.evidenceType,
        evidenceSource: S.evidenceSource,
        capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
        confidenceScore: S.confidenceScore,
        verificationStatus: S.verificationStatus,
        evidenceData: S.evidenceData
      });
      if (!v.ok || !v.entity)
        throw new Error(
          v.error ?? `Failed to add evidence (HTTP ${v.status}). Confirm EPAM.EvidenceRecord exists and property types match the schema.`
        );
      const y = ft(v.entity);
      y != null && await gl(t, y, "governanceRecord", r.id), await h(
        "evidenceAdded",
        `Added ${S.evidenceType} evidence from ${S.evidenceSource} (${S.verificationStatus})`
      ), S.verificationStatus === "invalid" && r.governanceStatus !== "flagged" && (await dc(t, r.id, "EPAM.GovernanceRecord", {
        governanceStatus: "flagged"
      }), await h(
        "statusChanged",
        `Status changed from ${r.governanceStatus} to flagged due to invalid evidence`
      )), await a();
    },
    [r, t, h, a]
  ), d = P.useCallback(
    async (S, v) => {
      if (!r || !t)
        return;
      const y = r.governanceStatus;
      if (y === S)
        return;
      if (!await dc(t, r.id, "EPAM.GovernanceRecord", {
        governanceStatus: S,
        lastEvaluated: (/* @__PURE__ */ new Date()).toISOString()
      }))
        throw new Error(`Failed to update governanceStatus to ${S}`);
      await h(
        "statusChanged",
        v ?? `Status changed from ${y} to ${S}`
      ), await a();
    },
    [r, t, h, a]
  );
  return {
    record: r,
    loading: o,
    error: u,
    addEvidence: p,
    updateGovernanceStatus: d,
    appendAuditEntry: h,
    refetch: a
  };
}
const Hg = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Evidence" },
  { id: "compliance", label: "Compliance" },
  { id: "audit", label: "Audit trail" }
];
function Wg({
  entity: e,
  client: t,
  currentUser: n,
  assetSource: r
}) {
  const [i, o] = P.useState("overview"), { record: l, loading: u, error: s, addEvidence: a, refetch: h } = Bg(
    e,
    t,
    n
  ), p = P.useMemo(() => l ? `${e.identifier || `Asset #${e.id}`} · record #${l.id}` : e.identifier || `Asset #${e.id}`, [e, l]);
  return /* @__PURE__ */ A("div", { className: "ch-ai-gov", children: [
    /* @__PURE__ */ A("header", { className: "ch-ai-gov__header", children: [
      /* @__PURE__ */ A("div", { children: [
        /* @__PURE__ */ g("p", { className: "ch-ai-gov__eyebrow", children: "AI Act · Article 50" }),
        /* @__PURE__ */ g("h2", { className: "ch-ai-gov__title", children: "AI Governance" }),
        /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: p })
      ] }),
      /* @__PURE__ */ g("nav", { className: "ch-ai-gov__tabs", "aria-label": "Governance tabs", children: Hg.map((d) => /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: `ch-ai-gov__tab${i === d.id ? " ch-ai-gov__tab--active" : ""}`,
          onClick: () => o(d.id),
          children: d.label
        },
        d.id
      )) })
    ] }),
    /* @__PURE__ */ A("div", { className: "ch-ai-gov__body", children: [
      u && /* @__PURE__ */ g("p", { className: "ch-ai-gov__muted", children: "Loading governance record…" }),
      !u && s && /* @__PURE__ */ A(Jt, { children: [
        /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: s }),
        /* @__PURE__ */ g("button", { type: "button", className: "ch-ai-gov__secondary-button", onClick: () => void h(), children: "Retry" })
      ] }),
      !u && !s && l && /* @__PURE__ */ A(Jt, { children: [
        i === "overview" && /* @__PURE__ */ g(mg, { record: l }),
        i === "evidence" && /* @__PURE__ */ g(
          xg,
          {
            record: l,
            addEvidence: a,
            assetSource: r,
            c2paRequest: {
              entityId: e.id,
              client: t,
              entity: e
            }
          }
        ),
        i === "compliance" && /* @__PURE__ */ g(Tg, { record: l, client: t }),
        i === "audit" && /* @__PURE__ */ g(Og, { record: l, client: t })
      ] })
    ] })
  ] });
}
function Vg(e) {
  var n;
  if (!e)
    return null;
  if (typeof e.id == "number")
    return e.id;
  if (typeof ((n = e.systemProperties) == null ? void 0 : n.id) == "number")
    return e.systemProperties.id;
  const t = Number(e.id);
  return Number.isFinite(t) ? t : null;
}
function Gg(e) {
  var r, i, o, l;
  if (!e)
    return null;
  const t = e.renditions ?? ((r = e.properties) == null ? void 0 : r.renditions);
  if (t && typeof t == "object")
    for (const u of ["preview", "downloadOriginal", "downloadPreview", "thumbnail"]) {
      const s = t[u];
      if (Array.isArray(s) && s[0]) {
        const a = ((i = s[0]) == null ? void 0 : i.href) ?? s[0];
        if (typeof a == "string" && a.trim())
          return a.trim();
        if (a && typeof a == "object" && typeof a.href == "string")
          return a.href.trim();
      }
    }
  const n = e.publicLink ?? ((o = e.properties) == null ? void 0 : o.publicLink) ?? ((l = e.properties) == null ? void 0 : l.PublicLink);
  return typeof n == "string" && n.trim() ? n.trim() : null;
}
function Kg(e) {
  var n, r, i, o, l;
  const t = Vg(e);
  return t == null ? null : {
    id: t,
    identifier: String(
      e.identifier ?? ((n = e.properties) == null ? void 0 : n.FileName) ?? ((i = (r = e.properties) == null ? void 0 : r.Title) == null ? void 0 : i.Invariant) ?? ((o = e.properties) == null ? void 0 : o.Title) ?? t
    ),
    getPropertyValue: (l = e.getPropertyValue) == null ? void 0 : l.bind(e),
    properties: e.properties,
    relations: e.relations
  };
}
function Qg(e) {
  const t = (e == null ? void 0 : e.currentUser) ?? (e == null ? void 0 : e.username);
  return typeof t == "string" && t.trim() ? t.trim() : "system";
}
function Yg({
  client: e,
  entity: t,
  options: n
}) {
  const r = P.useMemo(() => Kg(t), [t]), i = P.useMemo(() => Gg(t), [t]), o = Qg(n);
  return r ? e != null && e.raw ? /* @__PURE__ */ g(
    Wg,
    {
      entity: r,
      client: e,
      currentUser: o,
      assetSource: i
    }
  ) : /* @__PURE__ */ g("div", { className: "ch-ai-gov", children: /* @__PURE__ */ g("div", { className: "ch-ai-gov__body", children: /* @__PURE__ */ A("p", { className: "ch-ai-gov__error", children: [
    "Content Hub client is missing from the external component context. Governance persistence requires ",
    /* @__PURE__ */ g("code", { children: "context.client" }),
    "."
  ] }) }) }) : /* @__PURE__ */ g("div", { className: "ch-ai-gov", children: /* @__PURE__ */ g("div", { className: "ch-ai-gov__body", children: /* @__PURE__ */ g("p", { className: "ch-ai-gov__error", children: "No asset entity is available in the component context. Open this panel on an M.Asset detail page." }) }) });
}
function Xg(e) {
  const t = Pd(e);
  return console.log("%c[AIGovernancePanel] Starting up...", "color: #0B5CAB; font-weight: bold"), {
    render(n) {
      console.log(
        "%c[AIGovernancePanel] context keys:",
        "color: #0B5CAB; font-weight: bold",
        Object.keys(n ?? {})
      ), t.render(
        /* @__PURE__ */ g(cg, { theme: n.theme, children: /* @__PURE__ */ g(
          Yg,
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
  Xg as default
};
