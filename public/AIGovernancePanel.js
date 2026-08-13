(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".ch-ai-gov{--ch-gov-pad: 12px;--ch-gov-border: #d9e2ec;--ch-gov-bg: #f5f8fb;--ch-gov-card: #fff;--ch-gov-text: #102a43;--ch-gov-muted: #627d98;--ch-gov-accent: #0b5cab;--ch-gov-ok: #2f9e44;--ch-gov-warn: #f08c00;--ch-gov-bad: #e03131;--ch-gov-pending: #748ffc;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:0;height:100%;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:var(--ch-gov-text);background:var(--ch-gov-bg)}.ch-ai-gov *,.ch-ai-gov *:before,.ch-ai-gov *:after{box-sizing:border-box}.ch-ai-gov__header{display:flex;flex-direction:column;gap:10px;padding:var(--ch-gov-pad);border-bottom:1px solid var(--ch-gov-border);background:var(--ch-gov-card);flex-shrink:0}.ch-ai-gov__eyebrow{margin:0 0 2px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ch-gov-accent)}.ch-ai-gov__title{margin:0;font-size:16px;font-weight:700;line-height:1.3}.ch-ai-gov__tabs{display:flex;gap:4px;flex-wrap:wrap}.ch-ai-gov__tab{border:1px solid var(--ch-gov-border);background:#fff;color:var(--ch-gov-muted);border-radius:6px;padding:6px 10px;font-size:12px;font-weight:600;cursor:pointer}.ch-ai-gov__tab--active{background:var(--ch-gov-accent);border-color:var(--ch-gov-accent);color:#fff}.ch-ai-gov__body{display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;padding:var(--ch-gov-pad);gap:12px}.ch-ai-gov__muted{margin:0;color:var(--ch-gov-muted);font-size:13px}.ch-ai-gov__error{margin:0;padding:10px 12px;border-radius:8px;background:#fff5f5;border:1px solid #ffc9c9;color:#c92a2a;font-size:13px;line-height:1.4}.ch-ai-gov__primary-button,.ch-ai-gov__secondary-button{border:none;border-radius:8px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer}.ch-ai-gov__primary-button{background:var(--ch-gov-accent);color:#fff}.ch-ai-gov__secondary-button{background:#e6eff8;color:var(--ch-gov-accent)}.ch-ai-gov__primary-button:disabled,.ch-ai-gov__secondary-button:disabled{opacity:.55;cursor:not-allowed}.ch-ai-gov__badge{display:inline-flex;align-items:center;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;letter-spacing:.02em;text-transform:uppercase}.ch-ai-gov__badge--pending{background:#edf2ff;color:#3b5bdb}.ch-ai-gov__badge--compliant{background:#ebfbee;color:var(--ch-gov-ok)}.ch-ai-gov__badge--nonCompliant,.ch-ai-gov__badge--flagged{background:#fff5f5;color:var(--ch-gov-bad)}.ch-ai-gov__badge--needsReview{background:#fff9db;color:#e67700}.ch-ai-gov__badge--verified{background:#ebfbee;color:var(--ch-gov-ok)}.ch-ai-gov__badge--unverified,.ch-ai-gov__badge--notApplicable{background:#f1f3f5;color:#495057}.ch-ai-gov__badge--invalid{background:#fff5f5;color:var(--ch-gov-bad)}.ch-ai-gov__tags{display:flex;flex-wrap:wrap;gap:6px}.ch-ai-gov__tag{display:inline-flex;padding:4px 8px;border-radius:6px;background:#e8f1f8;color:var(--ch-gov-accent);font-size:12px;font-weight:600}.ch-ai-gov__card{background:var(--ch-gov-card);border:1px solid var(--ch-gov-border);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:10px}.ch-ai-gov__card-header{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.ch-ai-gov__card-title{margin:0;font-size:14px;font-weight:700}.ch-ai-gov__card-meta{margin:0;font-size:12px;color:var(--ch-gov-muted)}.ch-ai-gov__section{display:flex;flex-direction:column;gap:4px;padding-top:8px;border-top:1px solid #eef2f6}.ch-ai-gov__section:first-child{border-top:none;padding-top:0}.ch-ai-gov__section-title{margin:0;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ch-gov-muted)}.ch-ai-gov__section-body{margin:0;font-size:13px;line-height:1.45}.ch-ai-gov__field{display:flex;flex-direction:column;gap:4px}.ch-ai-gov__field label{font-size:12px;font-weight:600;color:var(--ch-gov-muted)}.ch-ai-gov__field input,.ch-ai-gov__field textarea{border:1px solid var(--ch-gov-border);border-radius:8px;padding:8px 10px;font:inherit;font-size:13px;color:var(--ch-gov-text);background:#fff}.ch-ai-gov__field textarea{min-height:80px;resize:vertical}.ch-ai-gov__checkbox{display:flex;align-items:flex-start;gap:8px;font-size:13px}.ch-ai-gov__checkbox input{margin-top:2px}.ch-ai-gov__checklist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}.ch-ai-gov__checklist-item{display:flex;align-items:center;gap:8px;font-size:13px;padding:8px 10px;border-radius:8px;background:#f8fafc;border:1px solid #eef2f6}.ch-ai-gov__checklist-item--ok{border-color:#b2f2bb;background:#ebfbee}.ch-ai-gov__checklist-item--missing{border-color:#ffc9c9;background:#fff5f5}.ch-ai-gov__timeline{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}.ch-ai-gov__timeline-item{position:relative;padding:10px 12px 10px 16px;border-left:3px solid var(--ch-gov-accent);background:var(--ch-gov-card);border-radius:0 8px 8px 0;border:1px solid var(--ch-gov-border);border-left-width:3px;border-left-color:var(--ch-gov-accent)}.ch-ai-gov__timeline-type{margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ch-gov-accent)}.ch-ai-gov__timeline-detail{margin:0 0 6px;font-size:13px;line-height:1.4}.ch-ai-gov__timeline-meta{margin:0;font-size:11px;color:var(--ch-gov-muted)}.ch-ai-gov__collector-actions{display:flex;flex-wrap:wrap;gap:8px}.c2pa-credentials--embedded .c2pa-section{margin-top:8px;padding-top:8px;border-top:1px solid #eef2f6}.c2pa-section__title{margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ch-gov-muted, #627d98)}.c2pa-section__body{margin:0;font-size:13px}.c2pa-muted{margin:0;color:var(--ch-gov-muted, #627d98);font-size:13px}.c2pa-error{margin:0;color:var(--ch-gov-bad, #e03131);font-size:13px}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function bd(e, t) {
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
function ep(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sc = { exports: {} }, Zi = {}, ac = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r = Symbol.for("react.element"), tp = Symbol.for("react.portal"), np = Symbol.for("react.fragment"), rp = Symbol.for("react.strict_mode"), ip = Symbol.for("react.profiler"), op = Symbol.for("react.provider"), lp = Symbol.for("react.context"), up = Symbol.for("react.forward_ref"), sp = Symbol.for("react.suspense"), ap = Symbol.for("react.memo"), cp = Symbol.for("react.lazy"), Rs = Symbol.iterator;
function fp(e) {
  return e === null || typeof e != "object" ? null : (e = Rs && e[Rs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var cc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, fc = Object.assign, dc = {};
function Mn(e, t, n) {
  this.props = e, this.context = t, this.refs = dc, this.updater = n || cc;
}
Mn.prototype.isReactComponent = {};
Mn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pc() {
}
pc.prototype = Mn.prototype;
function gu(e, t, n) {
  this.props = e, this.context = t, this.refs = dc, this.updater = n || cc;
}
var Su = gu.prototype = new pc();
Su.constructor = gu;
fc(Su, Mn.prototype);
Su.isPureReactComponent = !0;
var As = Array.isArray, mc = Object.prototype.hasOwnProperty, wu = { current: null }, hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r, i = {}, o = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      mc.call(t, r) && !hc.hasOwnProperty(r) && (i[r] = t[r]);
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
  return { $$typeof: $r, type: e, key: o, ref: l, props: i, _owner: wu.current };
}
function dp(e, t) {
  return { $$typeof: $r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ku(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $r;
}
function pp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var $s = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pp("" + e.key) : t.toString(36);
}
function ai(e, t, n, r, i) {
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
          case $r:
          case tp:
            l = !0;
        }
    }
  if (l)
    return l = e, i = i(l), e = r === "" ? "." + Fo(l, 0) : r, As(i) ? (n = "", e != null && (n = e.replace($s, "$&/") + "/"), ai(i, t, n, "", function(a) {
      return a;
    })) : i != null && (ku(i) && (i = dp(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace($s, "$&/") + "/") + e)), t.push(i)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", As(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Fo(o, u);
      l += ai(o, t, n, s, i);
    }
  else if (s = fp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + Fo(o, u++), l += ai(o, t, n, s, i);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Hr(e, t, n) {
  if (e == null)
    return e;
  var r = [], i = 0;
  return ai(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function mp(e) {
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
var ke = { current: null }, ci = { transition: null }, hp = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ci, ReactCurrentOwner: wu };
function yc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: Hr, forEach: function(e, t, n) {
  Hr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Hr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Hr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ku(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Mn;
z.Fragment = np;
z.Profiler = ip;
z.PureComponent = gu;
z.StrictMode = rp;
z.Suspense = sp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
z.act = yc;
z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = fc({}, e.props), i = e.key, o = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, l = wu.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      mc.call(t, s) && !hc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: $r, type: e.type, key: i, ref: o, props: r, _owner: l };
};
z.createContext = function(e) {
  return e = { $$typeof: lp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: op, _context: e }, e.Consumer = e;
};
z.createElement = vc;
z.createFactory = function(e) {
  var t = vc.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: up, render: e };
};
z.isValidElement = ku;
z.lazy = function(e) {
  return { $$typeof: cp, _payload: { _status: -1, _result: e }, _init: mp };
};
z.memo = function(e, t) {
  return { $$typeof: ap, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = ci.transition;
  ci.transition = {};
  try {
    e();
  } finally {
    ci.transition = t;
  }
};
z.unstable_act = yc;
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
ac.exports = z;
var x = ac.exports;
const vp = /* @__PURE__ */ ep(x), vl = /* @__PURE__ */ bd({
  __proto__: null,
  default: vp
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp = x, gp = Symbol.for("react.element"), Sp = Symbol.for("react.fragment"), wp = Object.prototype.hasOwnProperty, kp = yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _p = { key: !0, ref: !0, __self: !0, __source: !0 };
function gc(e, t, n) {
  var r, i = {}, o = null, l = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    wp.call(t, r) && !_p.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: gp, type: e, key: o, ref: l, props: i, _owner: kp.current };
}
Zi.Fragment = Sp;
Zi.jsx = gc;
Zi.jsxs = gc;
sc.exports = Zi;
var _u = sc.exports;
const Zt = _u.Fragment, S = _u.jsx, R = _u.jsxs;
var Sc = { exports: {} }, Me = {}, wc = { exports: {} }, kc = {};
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
        var Z = O - 1 >>> 1, ie = T[Z];
        if (0 < i(ie, $))
          T[Z] = $, T[O] = ie, O = Z;
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
        for (var Z = 0, ie = T.length, Ur = ie >>> 1; Z < Ur; ) {
          var Ht = 2 * (Z + 1) - 1, Do = T[Ht], Wt = Ht + 1, Br = T[Wt];
          if (0 > i(Do, O))
            Wt < ie && 0 > i(Br, Do) ? (T[Z] = Br, T[Wt] = O, Z = Wt) : (T[Z] = Do, T[Ht] = O, Z = Ht);
          else if (Wt < ie && 0 > i(Br, O))
            T[Z] = Br, T[Wt] = O, Z = Wt;
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
  var s = [], a = [], h = 1, p = null, d = 3, y = !1, g = !1, v = !1, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
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
    if (v = !1, m(T), !g)
      if (n(s) !== null)
        g = !0, Io(C);
      else {
        var $ = n(a);
        $ !== null && Mo(w, $.startTime - T);
      }
  }
  function C(T, $) {
    g = !1, v && (v = !1, f(A), A = -1), y = !0;
    var O = d;
    try {
      for (m($), p = n(s); p !== null && (!(p.expirationTime > $) || T && !pe()); ) {
        var Z = p.callback;
        if (typeof Z == "function") {
          p.callback = null, d = p.priorityLevel;
          var ie = Z(p.expirationTime <= $);
          $ = e.unstable_now(), typeof ie == "function" ? p.callback = ie : p === n(s) && r(s), m($);
        } else
          r(s);
        p = n(s);
      }
      if (p !== null)
        var Ur = !0;
      else {
        var Ht = n(a);
        Ht !== null && Mo(w, Ht.startTime - $), Ur = !1;
      }
      return Ur;
    } finally {
      p = null, d = O, y = !1;
    }
  }
  var E = !1, _ = null, A = -1, V = 5, L = -1;
  function pe() {
    return !(e.unstable_now() - L < V);
  }
  function Un() {
    if (_ !== null) {
      var T = e.unstable_now();
      L = T;
      var $ = !0;
      try {
        $ = _(!0, T);
      } finally {
        $ ? Bn() : (E = !1, _ = null);
      }
    } else
      E = !1;
  }
  var Bn;
  if (typeof c == "function")
    Bn = function() {
      c(Un);
    };
  else if (typeof MessageChannel < "u") {
    var Ts = new MessageChannel(), Jd = Ts.port2;
    Ts.port1.onmessage = Un, Bn = function() {
      Jd.postMessage(null);
    };
  } else
    Bn = function() {
      P(Un, 0);
    };
  function Io(T) {
    _ = T, E || (E = !0, Bn());
  }
  function Mo(T, $) {
    A = P(function() {
      T(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, Io(C));
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
    var Z = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? Z + O : Z) : O = Z, T) {
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
    return ie = O + ie, T = { id: h++, callback: $, priorityLevel: T, startTime: O, expirationTime: ie, sortIndex: -1 }, O > Z ? (T.sortIndex = O, t(a, T), n(s) === null && T === n(a) && (v ? (f(A), A = -1) : v = !0, Mo(w, O - Z))) : (T.sortIndex = ie, t(s, T), g || y || (g = !0, Io(C))), T;
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
})(kc);
wc.exports = kc;
var Cp = wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ep = x, Ie = Cp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _c = /* @__PURE__ */ new Set(), fr = {};
function rn(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++)
    _c.add(t[e]);
}
var ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yl = Object.prototype.hasOwnProperty, xp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ls = {}, Os = {};
function Pp(e) {
  return yl.call(Os, e) ? !0 : yl.call(Ls, e) ? !1 : xp.test(e) ? Os[e] = !0 : (Ls[e] = !0, !1);
}
function Np(e, t, n, r) {
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
function Tp(e, t, n, r) {
  if (t === null || typeof t > "u" || Np(e, t, n, r))
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
var Cu = /[\-:]([a-z])/g;
function Eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cu,
    Eu
  );
  de[t] = new _e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cu, Eu);
  de[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cu, Eu);
  de[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new _e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  de[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xu(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tp(t, n, i, r) && (n = null), r || i === null ? Pp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Wr = Symbol.for("react.element"), sn = Symbol.for("react.portal"), an = Symbol.for("react.fragment"), Pu = Symbol.for("react.strict_mode"), gl = Symbol.for("react.profiler"), Cc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), Nu = Symbol.for("react.forward_ref"), Sl = Symbol.for("react.suspense"), wl = Symbol.for("react.suspense_list"), Tu = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), xc = Symbol.for("react.offscreen"), zs = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object" ? null : (e = zs && e[zs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, jo;
function Zn(e) {
  if (jo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      jo = t && t[1] || "";
    }
  return `
` + jo + e;
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
  return (e = e ? e.displayName || e.name : "") ? Zn(e) : "";
}
function Rp(e) {
  switch (e.tag) {
    case 5:
      return Zn(e.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
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
function kl(e) {
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
    case gl:
      return "Profiler";
    case Pu:
      return "StrictMode";
    case Sl:
      return "Suspense";
    case wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ec:
        return (e.displayName || "Context") + ".Consumer";
      case Cc:
        return (e._context.displayName || "Context") + ".Provider";
      case Nu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Tu:
        return t = e.displayName || null, t !== null ? t : kl(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return kl(e(t));
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
      return kl(t);
    case 8:
      return t === Pu ? "StrictMode" : "Mode";
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
function Pc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function $p(e) {
  var t = Pc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Vr(e) {
  e._valueTracker || (e._valueTracker = $p(e));
}
function Nc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Pc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ei(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _l(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Is(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Dt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Tc(e, t) {
  t = t.checked, t != null && xu(e, "checked", t, !1);
}
function Cl(e, t) {
  Tc(e, t);
  var n = Dt(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? El(e, t.type, n) : t.hasOwnProperty("defaultValue") && El(e, t.type, Dt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ms(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function El(e, t, n) {
  (t !== "number" || Ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jn = Array.isArray;
function wn(e, t, n, r) {
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
function xl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ds(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(k(92));
      if (Jn(n)) {
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
function Rc(e, t) {
  var n = Dt(t.value), r = Dt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Fs(e) {
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
function Pl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ac(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Gr, $c = function(e) {
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
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
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
}, Lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function(e) {
  Lp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), tr[t] = tr[e];
  });
});
function Lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || tr.hasOwnProperty(e) && tr[e] ? ("" + t).trim() : t + "px";
}
function Oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
}
var Op = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Nl(e, t) {
  if (t) {
    if (Op[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Tl(e, t) {
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
var Rl = null;
function Ru(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Al = null, kn = null, _n = null;
function js(e) {
  if (e = zr(e)) {
    if (typeof Al != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = no(t), Al(e.stateNode, e.type, t));
  }
}
function zc(e) {
  kn ? _n ? _n.push(e) : _n = [e] : kn = e;
}
function Ic() {
  if (kn) {
    var e = kn, t = _n;
    if (_n = kn = null, js(e), t)
      for (e = 0; e < t.length; e++)
        js(t[e]);
  }
}
function Mc(e, t) {
  return e(t);
}
function Dc() {
}
var Ho = !1;
function Fc(e, t, n) {
  if (Ho)
    return e(t, n);
  Ho = !0;
  try {
    return Mc(e, t, n);
  } finally {
    Ho = !1, (kn !== null || _n !== null) && (Dc(), Ic());
  }
}
function pr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = no(n);
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
var $l = !1;
if (ht)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", { get: function() {
      $l = !0;
    } }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
  } catch {
    $l = !1;
  }
function zp(e, t, n, r, i, o, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var nr = !1, xi = null, Pi = !1, Ll = null, Ip = { onError: function(e) {
  nr = !0, xi = e;
} };
function Mp(e, t, n, r, i, o, l, u, s) {
  nr = !1, xi = null, zp.apply(Ip, arguments);
}
function Dp(e, t, n, r, i, o, l, u, s) {
  if (Mp.apply(this, arguments), nr) {
    if (nr) {
      var a = xi;
      nr = !1, xi = null;
    } else
      throw Error(k(198));
    Pi || (Pi = !0, Ll = a);
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
function jc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Us(e) {
  if (on(e) !== e)
    throw Error(k(188));
}
function Fp(e) {
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
          return Us(i), e;
        if (o === r)
          return Us(i), t;
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
function Uc(e) {
  return e = Fp(e), e !== null ? Bc(e) : null;
}
function Bc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Bc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Hc = Ie.unstable_scheduleCallback, Bs = Ie.unstable_cancelCallback, jp = Ie.unstable_shouldYield, Up = Ie.unstable_requestPaint, J = Ie.unstable_now, Bp = Ie.unstable_getCurrentPriorityLevel, Au = Ie.unstable_ImmediatePriority, Wc = Ie.unstable_UserBlockingPriority, Ni = Ie.unstable_NormalPriority, Hp = Ie.unstable_LowPriority, Vc = Ie.unstable_IdlePriority, Ji = null, lt = null;
function Wp(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Je = Math.clz32 ? Math.clz32 : Kp, Vp = Math.log, Gp = Math.LN2;
function Kp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vp(e) / Gp | 0) | 0;
}
var Kr = 64, Qr = 4194304;
function bn(e) {
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
    u !== 0 ? r = bn(u) : (o &= l, o !== 0 && (r = bn(o)));
  } else
    l = n & ~i, l !== 0 ? r = bn(l) : o !== 0 && (r = bn(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Je(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Qp(e, t) {
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
function Yp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var l = 31 - Je(o), u = 1 << l, s = i[l];
    s === -1 ? (!(u & n) || u & r) && (i[l] = Qp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Ol(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gc() {
  var e = Kr;
  return Kr <<= 1, !(Kr & 4194240) && (Kr = 64), e;
}
function Wo(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Lr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function Xp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Je(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function $u(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var F = 0;
function Kc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qc, Lu, Yc, Xc, qc, zl = !1, Yr = [], Rt = null, At = null, $t = null, mr = /* @__PURE__ */ new Map(), hr = /* @__PURE__ */ new Map(), Et = [], qp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Hs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      mr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hr.delete(t.pointerId);
  }
}
function Vn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = zr(t), t !== null && Lu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Zp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Rt = Vn(Rt, e, t, n, r, i), !0;
    case "dragenter":
      return At = Vn(At, e, t, n, r, i), !0;
    case "mouseover":
      return $t = Vn($t, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return mr.set(o, Vn(mr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, hr.set(o, Vn(hr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Zc(e) {
  var t = Kt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jc(n), t !== null) {
          e.blockedOn = t, qc(e.priority, function() {
            Yc(n);
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
function fi(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Rl = r, n.target.dispatchEvent(r), Rl = null;
    } else
      return t = zr(n), t !== null && Lu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ws(e, t, n) {
  fi(e) && n.delete(t);
}
function Jp() {
  zl = !1, Rt !== null && fi(Rt) && (Rt = null), At !== null && fi(At) && (At = null), $t !== null && fi($t) && ($t = null), mr.forEach(Ws), hr.forEach(Ws);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, zl || (zl = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Jp)));
}
function vr(e) {
  function t(i) {
    return Gn(i, e);
  }
  if (0 < Yr.length) {
    Gn(Yr[0], e);
    for (var n = 1; n < Yr.length; n++) {
      var r = Yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Rt !== null && Gn(Rt, e), At !== null && Gn(At, e), $t !== null && Gn($t, e), mr.forEach(t), hr.forEach(t), n = 0; n < Et.length; n++)
    r = Et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && (n = Et[0], n.blockedOn === null); )
    Zc(n), n.blockedOn === null && Et.shift();
}
var Cn = wt.ReactCurrentBatchConfig, Ri = !0;
function bp(e, t, n, r) {
  var i = F, o = Cn.transition;
  Cn.transition = null;
  try {
    F = 1, Ou(e, t, n, r);
  } finally {
    F = i, Cn.transition = o;
  }
}
function em(e, t, n, r) {
  var i = F, o = Cn.transition;
  Cn.transition = null;
  try {
    F = 4, Ou(e, t, n, r);
  } finally {
    F = i, Cn.transition = o;
  }
}
function Ou(e, t, n, r) {
  if (Ri) {
    var i = Il(e, t, n, r);
    if (i === null)
      bo(e, t, r, Ai, n), Hs(e, r);
    else if (Zp(i, e, t, n, r))
      r.stopPropagation();
    else if (Hs(e, r), t & 4 && -1 < qp.indexOf(e)) {
      for (; i !== null; ) {
        var o = zr(i);
        if (o !== null && Qc(o), o = Il(e, t, n, r), o === null && bo(e, t, r, Ai, n), o === i)
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else
      bo(e, t, r, null, n);
  }
}
var Ai = null;
function Il(e, t, n, r) {
  if (Ai = null, e = Ru(r), e = Kt(e), e !== null)
    if (t = on(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = jc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return Ai = e, null;
}
function Jc(e) {
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
      switch (Bp()) {
        case Au:
          return 1;
        case Wc:
          return 4;
        case Ni:
        case Hp:
          return 16;
        case Vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, zu = null, di = null;
function bc() {
  if (di)
    return di;
  var e, t = zu, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++)
    ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++)
    ;
  return di = i.slice(e, 1 < r ? 1 - r : void 0);
}
function pi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Xr() {
  return !0;
}
function Vs() {
  return !1;
}
function De(e) {
  function t(n, r, i, o, l) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Xr : Vs, this.isPropagationStopped = Vs, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xr);
  }, persist: function() {
  }, isPersistent: Xr }), t;
}
var Dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Iu = De(Dn), Or = Q({}, Dn, { view: 0, detail: 0 }), tm = De(Or), Vo, Go, Kn, bi = Q({}, Or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Kn && (Kn && e.type === "mousemove" ? (Vo = e.screenX - Kn.screenX, Go = e.screenY - Kn.screenY) : Go = Vo = 0, Kn = e), Vo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Go;
} }), Gs = De(bi), nm = Q({}, bi, { dataTransfer: 0 }), rm = De(nm), im = Q({}, Or, { relatedTarget: 0 }), Ko = De(im), om = Q({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = De(om), um = Q({}, Dn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), sm = De(um), am = Q({}, Dn, { data: 0 }), Ks = De(am), cm = {
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
}, fm = {
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
}, dm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
}
function Mu() {
  return pm;
}
var mm = Q({}, Or, { key: function(e) {
  if (e.key) {
    var t = cm[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fm[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mu, charCode: function(e) {
  return e.type === "keypress" ? pi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), hm = De(mm), vm = Q({}, bi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Qs = De(vm), ym = Q({}, Or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mu }), gm = De(ym), Sm = Q({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wm = De(Sm), km = Q({}, bi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _m = De(km), Cm = [9, 13, 27, 32], Du = ht && "CompositionEvent" in window, rr = null;
ht && "documentMode" in document && (rr = document.documentMode);
var Em = ht && "TextEvent" in window && !rr, ef = ht && (!Du || rr && 8 < rr && 11 >= rr), Ys = String.fromCharCode(32), Xs = !1;
function tf(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
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
function nf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function xm(e, t) {
  switch (e) {
    case "compositionend":
      return nf(t);
    case "keypress":
      return t.which !== 32 ? null : (Xs = !0, Ys);
    case "textInput":
      return e = t.data, e === Ys && Xs ? null : e;
    default:
      return null;
  }
}
function Pm(e, t) {
  if (cn)
    return e === "compositionend" || !Du && tf(e, t) ? (e = bc(), di = zu = Pt = null, cn = !1, e) : null;
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
      return ef && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nm[e.type] : t === "textarea";
}
function rf(e, t, n, r) {
  zc(r), t = $i(t, "onChange"), 0 < t.length && (n = new Iu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, yr = null;
function Tm(e) {
  hf(e, 0);
}
function eo(e) {
  var t = pn(e);
  if (Nc(t))
    return e;
}
function Rm(e, t) {
  if (e === "change")
    return t;
}
var of = !1;
if (ht) {
  var Qo;
  if (ht) {
    var Yo = "oninput" in document;
    if (!Yo) {
      var Zs = document.createElement("div");
      Zs.setAttribute("oninput", "return;"), Yo = typeof Zs.oninput == "function";
    }
    Qo = Yo;
  } else
    Qo = !1;
  of = Qo && (!document.documentMode || 9 < document.documentMode);
}
function Js() {
  ir && (ir.detachEvent("onpropertychange", lf), yr = ir = null);
}
function lf(e) {
  if (e.propertyName === "value" && eo(yr)) {
    var t = [];
    rf(t, yr, e, Ru(e)), Fc(Tm, t);
  }
}
function Am(e, t, n) {
  e === "focusin" ? (Js(), ir = t, yr = n, ir.attachEvent("onpropertychange", lf)) : e === "focusout" && Js();
}
function $m(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return eo(yr);
}
function Lm(e, t) {
  if (e === "click")
    return eo(t);
}
function Om(e, t) {
  if (e === "input" || e === "change")
    return eo(t);
}
function zm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : zm;
function gr(e, t) {
  if (et(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !et(e[i], t[i]))
      return !1;
  }
  return !0;
}
function bs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ea(e, t) {
  var n = bs(e);
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
    n = bs(n);
  }
}
function uf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sf() {
  for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = Ei(e.document);
  }
  return t;
}
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Im(e) {
  var t = sf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && uf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Fu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ea(n, o);
        var l = ea(
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
var Mm = ht && "documentMode" in document && 11 >= document.documentMode, fn = null, Ml = null, or = null, Dl = !1;
function ta(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Dl || fn == null || fn !== Ei(r) || (r = fn, "selectionStart" in r && Fu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && gr(or, r) || (or = r, r = $i(Ml, "onSelect"), 0 < r.length && (t = new Iu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = fn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var dn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Xo = {}, af = {};
ht && (af = document.createElement("div").style, "AnimationEvent" in window || (delete dn.animationend.animation, delete dn.animationiteration.animation, delete dn.animationstart.animation), "TransitionEvent" in window || delete dn.transitionend.transition);
function to(e) {
  if (Xo[e])
    return Xo[e];
  if (!dn[e])
    return e;
  var t = dn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in af)
      return Xo[e] = t[n];
  return e;
}
var cf = to("animationend"), ff = to("animationiteration"), df = to("animationstart"), pf = to("transitionend"), mf = /* @__PURE__ */ new Map(), na = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e, t) {
  mf.set(e, t), rn(t, [e]);
}
for (var qo = 0; qo < na.length; qo++) {
  var Zo = na[qo], Dm = Zo.toLowerCase(), Fm = Zo[0].toUpperCase() + Zo.slice(1);
  jt(Dm, "on" + Fm);
}
jt(cf, "onAnimationEnd");
jt(ff, "onAnimationIteration");
jt(df, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(pf, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function ra(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Dp(r, t, void 0, e), e.currentTarget = null;
}
function hf(e, t) {
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
          ra(i, u, a), o = s;
        }
      else
        for (l = 0; l < r.length; l++) {
          if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && i.isPropagationStopped())
            break e;
          ra(i, u, a), o = s;
        }
    }
  }
  if (Pi)
    throw e = Ll, Pi = !1, Ll = null, e;
}
function B(e, t) {
  var n = t[Hl];
  n === void 0 && (n = t[Hl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (vf(t, e, 2, !1), n.add(r));
}
function Jo(e, t, n) {
  var r = 0;
  t && (r |= 4), vf(n, e, r, t);
}
var Zr = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[Zr]) {
    e[Zr] = !0, _c.forEach(function(n) {
      n !== "selectionchange" && (jm.has(n) || Jo(n, !1, e), Jo(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || (t[Zr] = !0, Jo("selectionchange", !1, t));
  }
}
function vf(e, t, n, r) {
  switch (Jc(t)) {
    case 1:
      var i = bp;
      break;
    case 4:
      i = em;
      break;
    default:
      i = Ou;
  }
  n = i.bind(null, t, n, e), i = void 0, !$l || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
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
  Fc(function() {
    var a = o, h = Ru(n), p = [];
    e: {
      var d = mf.get(e);
      if (d !== void 0) {
        var y = Iu, g = e;
        switch (e) {
          case "keypress":
            if (pi(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = hm;
            break;
          case "focusin":
            g = "focus", y = Ko;
            break;
          case "focusout":
            g = "blur", y = Ko;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ko;
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
            y = Gs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = rm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = gm;
            break;
          case cf:
          case ff:
          case df:
            y = lm;
            break;
          case pf:
            y = wm;
            break;
          case "scroll":
            y = tm;
            break;
          case "wheel":
            y = _m;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = sm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Qs;
        }
        var v = (t & 4) !== 0, P = !v && e === "scroll", f = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, f !== null && (w = pr(c, f), w != null && v.push(wr(c, w, m)))), P)
            break;
          c = c.return;
        }
        0 < v.length && (d = new y(d, g, null, n, h), p.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", d && n !== Rl && (g = n.relatedTarget || n.fromElement) && (Kt(g) || g[vt]))
          break e;
        if ((y || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? Kt(g) : null, g !== null && (P = on(g), g !== P || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
          if (v = Gs, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (v = Qs, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = y == null ? d : pn(y), m = g == null ? d : pn(g), d = new v(w, c + "leave", y, n, h), d.target = P, d.relatedTarget = m, w = null, Kt(h) === a && (v = new v(f, c + "enter", g, n, h), v.target = m, v.relatedTarget = P, w = v), P = w, y && g)
            t: {
              for (v = y, f = g, c = 0, m = v; m; m = ln(m))
                c++;
              for (m = 0, w = f; w; w = ln(w))
                m++;
              for (; 0 < c - m; )
                v = ln(v), c--;
              for (; 0 < m - c; )
                f = ln(f), m--;
              for (; c--; ) {
                if (v === f || f !== null && v === f.alternate)
                  break t;
                v = ln(v), f = ln(f);
              }
              v = null;
            }
          else
            v = null;
          y !== null && ia(p, d, y, v, !1), g !== null && P !== null && ia(p, P, g, v, !0);
        }
      }
      e: {
        if (d = a ? pn(a) : window, y = d.nodeName && d.nodeName.toLowerCase(), y === "select" || y === "input" && d.type === "file")
          var C = Rm;
        else if (qs(d))
          if (of)
            C = Om;
          else {
            C = $m;
            var E = Am;
          }
        else
          (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = Lm);
        if (C && (C = C(e, a))) {
          rf(p, C, n, h);
          break e;
        }
        E && E(e, d, a), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && El(d, "number", d.value);
      }
      switch (E = a ? pn(a) : window, e) {
        case "focusin":
          (qs(E) || E.contentEditable === "true") && (fn = E, Ml = a, or = null);
          break;
        case "focusout":
          or = Ml = fn = null;
          break;
        case "mousedown":
          Dl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Dl = !1, ta(p, n, h);
          break;
        case "selectionchange":
          if (Mm)
            break;
        case "keydown":
        case "keyup":
          ta(p, n, h);
      }
      var _;
      if (Du)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        cn ? tf(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A && (ef && n.locale !== "ko" && (cn || A !== "onCompositionStart" ? A === "onCompositionEnd" && cn && (_ = bc()) : (Pt = h, zu = "value" in Pt ? Pt.value : Pt.textContent, cn = !0)), E = $i(a, A), 0 < E.length && (A = new Ks(A, e, null, n, h), p.push({ event: A, listeners: E }), _ ? A.data = _ : (_ = nf(n), _ !== null && (A.data = _)))), (_ = Em ? xm(e, n) : Pm(e, n)) && (a = $i(a, "onBeforeInput"), 0 < a.length && (h = new Ks("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = _));
    }
    hf(p, t);
  });
}
function wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $i(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = pr(e, n), o != null && r.unshift(wr(e, o, i)), o = pr(e, t), o != null && r.push(wr(e, o, i))), e = e.return;
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
function ia(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, i ? (s = pr(n, o), s != null && l.unshift(wr(n, s, u))) : i || (s = pr(n, o), s != null && l.push(wr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Um = /\r\n?/g, Bm = /\u0000|\uFFFD/g;
function oa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Um, `
`).replace(Bm, "");
}
function Jr(e, t, n) {
  if (t = oa(t), oa(e) !== t && n)
    throw Error(k(425));
}
function Li() {
}
var Fl = null, jl = null;
function Ul(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bl = typeof setTimeout == "function" ? setTimeout : void 0, Hm = typeof clearTimeout == "function" ? clearTimeout : void 0, la = typeof Promise == "function" ? Promise : void 0, Wm = typeof queueMicrotask == "function" ? queueMicrotask : typeof la < "u" ? function(e) {
  return la.resolve(null).then(e).catch(Vm);
} : Bl;
function Vm(e) {
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
          e.removeChild(i), vr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  vr(t);
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
function ua(e) {
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
var Fn = Math.random().toString(36).slice(2), ot = "__reactFiber$" + Fn, kr = "__reactProps$" + Fn, vt = "__reactContainer$" + Fn, Hl = "__reactEvents$" + Fn, Gm = "__reactListeners$" + Fn, Km = "__reactHandles$" + Fn;
function Kt(e) {
  var t = e[ot];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[vt] || n[ot]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ua(e); e !== null; ) {
          if (n = e[ot])
            return n;
          e = ua(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function zr(e) {
  return e = e[ot] || e[vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function no(e) {
  return e[kr] || null;
}
var Wl = [], mn = -1;
function Ut(e) {
  return { current: e };
}
function H(e) {
  0 > mn || (e.current = Wl[mn], Wl[mn] = null, mn--);
}
function U(e, t) {
  mn++, Wl[mn] = e.current, e.current = t;
}
var Ft = {}, ge = Ut(Ft), Pe = Ut(!1), Jt = Ft;
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
function Oi() {
  H(Pe), H(ge);
}
function sa(e, t, n) {
  if (ge.current !== Ft)
    throw Error(k(168));
  U(ge, t), U(Pe, n);
}
function yf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(k(108, Ap(e) || "Unknown", i));
  return Q({}, n, r);
}
function zi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Jt = ge.current, U(ge, e), U(Pe, Pe.current), !0;
}
function aa(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = yf(e, t, Jt), r.__reactInternalMemoizedMergedChildContext = e, H(Pe), H(ge), U(ge, e)) : H(Pe), U(Pe, n);
}
var ct = null, ro = !1, tl = !1;
function gf(e) {
  ct === null ? ct = [e] : ct.push(e);
}
function Qm(e) {
  ro = !0, gf(e);
}
function Bt() {
  if (!tl && ct !== null) {
    tl = !0;
    var e = 0, t = F;
    try {
      var n = ct;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ct = null, ro = !1;
    } catch (i) {
      throw ct !== null && (ct = ct.slice(e + 1)), Hc(Au, Bt), i;
    } finally {
      F = t, tl = !1;
    }
  }
  return null;
}
var hn = [], vn = 0, Ii = null, Mi = 0, je = [], Ue = 0, bt = null, dt = 1, pt = "";
function Vt(e, t) {
  hn[vn++] = Mi, hn[vn++] = Ii, Ii = e, Mi = t;
}
function Sf(e, t, n) {
  je[Ue++] = dt, je[Ue++] = pt, je[Ue++] = bt, bt = e;
  var r = dt;
  e = pt;
  var i = 32 - Je(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Je(t) + i;
  if (30 < o) {
    var l = i - i % 5;
    o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, dt = 1 << 32 - Je(t) + i | n << i | r, pt = o + e;
  } else
    dt = 1 << o | n << i | r, pt = e;
}
function ju(e) {
  e.return !== null && (Vt(e, 1), Sf(e, 1, 0));
}
function Uu(e) {
  for (; e === Ii; )
    Ii = hn[--vn], hn[vn] = null, Mi = hn[--vn], hn[vn] = null;
  for (; e === bt; )
    bt = je[--Ue], je[Ue] = null, pt = je[--Ue], je[Ue] = null, dt = je[--Ue], je[Ue] = null;
}
var Oe = null, Le = null, W = !1, Ze = null;
function wf(e, t) {
  var n = We(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ca(e, t) {
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
function Vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gl(e) {
  if (W) {
    var t = Le;
    if (t) {
      var n = t;
      if (!ca(e, t)) {
        if (Vl(e))
          throw Error(k(418));
        t = Lt(n.nextSibling);
        var r = Oe;
        t && ca(e, t) ? wf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Oe = e);
      }
    } else {
      if (Vl(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, Oe = e;
    }
  }
}
function fa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function br(e) {
  if (e !== Oe)
    return !1;
  if (!W)
    return fa(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ul(e.type, e.memoizedProps)), t && (t = Le)) {
    if (Vl(e))
      throw kf(), Error(k(418));
    for (; t; )
      wf(e, t), t = Lt(t.nextSibling);
  }
  if (fa(e), e.tag === 13) {
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
function kf() {
  for (var e = Le; e; )
    e = Lt(e.nextSibling);
}
function An() {
  Le = Oe = null, W = !1;
}
function Bu(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var Ym = wt.ReactCurrentBatchConfig;
function Qn(e, t, n) {
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
function ei(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function da(e) {
  var t = e._init;
  return t(e._payload);
}
function _f(e) {
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
    return c === null || c.tag !== 6 ? (c = sl(m, f.mode, w), c.return = f, c) : (c = i(c, m), c.return = f, c);
  }
  function s(f, c, m, w) {
    var C = m.type;
    return C === an ? h(f, c, m.props.children, w, m.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === _t && da(C) === c.type) ? (w = i(c, m.props), w.ref = Qn(f, c, m), w.return = f, w) : (w = wi(m.type, m.key, m.props, null, f.mode, w), w.ref = Qn(f, c, m), w.return = f, w);
  }
  function a(f, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = al(m, f.mode, w), c.return = f, c) : (c = i(c, m.children || []), c.return = f, c);
  }
  function h(f, c, m, w, C) {
    return c === null || c.tag !== 7 ? (c = qt(m, f.mode, w, C), c.return = f, c) : (c = i(c, m), c.return = f, c);
  }
  function p(f, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = sl("" + c, f.mode, m), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Wr:
          return m = wi(c.type, c.key, c.props, null, f.mode, m), m.ref = Qn(f, null, c), m.return = f, m;
        case sn:
          return c = al(c, f.mode, m), c.return = f, c;
        case _t:
          var w = c._init;
          return p(f, w(c._payload), m);
      }
      if (Jn(c) || Hn(c))
        return c = qt(c, f.mode, m, null), c.return = f, c;
      ei(f, c);
    }
    return null;
  }
  function d(f, c, m, w) {
    var C = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return C !== null ? null : u(f, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wr:
          return m.key === C ? s(f, c, m, w) : null;
        case sn:
          return m.key === C ? a(f, c, m, w) : null;
        case _t:
          return C = m._init, d(
            f,
            c,
            C(m._payload),
            w
          );
      }
      if (Jn(m) || Hn(m))
        return C !== null ? null : h(f, c, m, w, null);
      ei(f, m);
    }
    return null;
  }
  function y(f, c, m, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(m) || null, u(c, f, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Wr:
          return f = f.get(w.key === null ? m : w.key) || null, s(c, f, w, C);
        case sn:
          return f = f.get(w.key === null ? m : w.key) || null, a(c, f, w, C);
        case _t:
          var E = w._init;
          return y(f, c, m, E(w._payload), C);
      }
      if (Jn(w) || Hn(w))
        return f = f.get(m) || null, h(c, f, w, C, null);
      ei(c, w);
    }
    return null;
  }
  function g(f, c, m, w) {
    for (var C = null, E = null, _ = c, A = c = 0, V = null; _ !== null && A < m.length; A++) {
      _.index > A ? (V = _, _ = null) : V = _.sibling;
      var L = d(f, _, m[A], w);
      if (L === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && L.alternate === null && t(f, _), c = o(L, c, A), E === null ? C = L : E.sibling = L, E = L, _ = V;
    }
    if (A === m.length)
      return n(f, _), W && Vt(f, A), C;
    if (_ === null) {
      for (; A < m.length; A++)
        _ = p(f, m[A], w), _ !== null && (c = o(_, c, A), E === null ? C = _ : E.sibling = _, E = _);
      return W && Vt(f, A), C;
    }
    for (_ = r(f, _); A < m.length; A++)
      V = y(_, f, A, m[A], w), V !== null && (e && V.alternate !== null && _.delete(V.key === null ? A : V.key), c = o(V, c, A), E === null ? C = V : E.sibling = V, E = V);
    return e && _.forEach(function(pe) {
      return t(f, pe);
    }), W && Vt(f, A), C;
  }
  function v(f, c, m, w) {
    var C = Hn(m);
    if (typeof C != "function")
      throw Error(k(150));
    if (m = C.call(m), m == null)
      throw Error(k(151));
    for (var E = C = null, _ = c, A = c = 0, V = null, L = m.next(); _ !== null && !L.done; A++, L = m.next()) {
      _.index > A ? (V = _, _ = null) : V = _.sibling;
      var pe = d(f, _, L.value, w);
      if (pe === null) {
        _ === null && (_ = V);
        break;
      }
      e && _ && pe.alternate === null && t(f, _), c = o(pe, c, A), E === null ? C = pe : E.sibling = pe, E = pe, _ = V;
    }
    if (L.done)
      return n(
        f,
        _
      ), W && Vt(f, A), C;
    if (_ === null) {
      for (; !L.done; A++, L = m.next())
        L = p(f, L.value, w), L !== null && (c = o(L, c, A), E === null ? C = L : E.sibling = L, E = L);
      return W && Vt(f, A), C;
    }
    for (_ = r(f, _); !L.done; A++, L = m.next())
      L = y(_, f, A, L.value, w), L !== null && (e && L.alternate !== null && _.delete(L.key === null ? A : L.key), c = o(L, c, A), E === null ? C = L : E.sibling = L, E = L);
    return e && _.forEach(function(Un) {
      return t(f, Un);
    }), W && Vt(f, A), C;
  }
  function P(f, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === an && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Wr:
          e: {
            for (var C = m.key, E = c; E !== null; ) {
              if (E.key === C) {
                if (C = m.type, C === an) {
                  if (E.tag === 7) {
                    n(f, E.sibling), c = i(E, m.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === _t && da(C) === E.type) {
                  n(f, E.sibling), c = i(E, m.props), c.ref = Qn(f, E, m), c.return = f, f = c;
                  break e;
                }
                n(f, E);
                break;
              } else
                t(f, E);
              E = E.sibling;
            }
            m.type === an ? (c = qt(m.props.children, f.mode, w, m.key), c.return = f, f = c) : (w = wi(m.type, m.key, m.props, null, f.mode, w), w.ref = Qn(f, c, m), w.return = f, f = w);
          }
          return l(f);
        case sn:
          e: {
            for (E = m.key; c !== null; ) {
              if (c.key === E)
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
            c = al(m, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case _t:
          return E = m._init, P(f, c, E(m._payload), w);
      }
      if (Jn(m))
        return g(f, c, m, w);
      if (Hn(m))
        return v(f, c, m, w);
      ei(f, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = i(c, m), c.return = f, f = c) : (n(f, c), c = sl(m, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return P;
}
var $n = _f(!0), Cf = _f(!1), Di = Ut(null), Fi = null, yn = null, Hu = null;
function Wu() {
  Hu = yn = Fi = null;
}
function Vu(e) {
  var t = Di.current;
  H(Di), e._currentValue = t;
}
function Kl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function En(e, t) {
  Fi = e, Hu = yn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function Ge(e) {
  var t = e._currentValue;
  if (Hu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, yn === null) {
      if (Fi === null)
        throw Error(k(308));
      yn = e, Fi.dependencies = { lanes: 0, firstContext: e };
    } else
      yn = yn.next = e;
  return t;
}
var Qt = null;
function Gu(e) {
  Qt === null ? Qt = [e] : Qt.push(e);
}
function Ef(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Gu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, yt(e, r);
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Ku(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function xf(e, t) {
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
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, yt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Gu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, yt(e, n);
}
function mi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $u(e, n);
  }
}
function pa(e, t) {
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
function ji(e, t, n, r) {
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
      var d = u.lane, y = u.eventTime;
      if ((r & d) === d) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, v = u;
          switch (d = t, y = n, v.tag) {
            case 1:
              if (g = v.payload, typeof g == "function") {
                p = g.call(y, p, d);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = v.payload, d = typeof g == "function" ? g.call(y, p, d) : g, d == null)
                break e;
              p = Q({}, p, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [u] : d.push(u));
      } else
        y = { eventTime: y, lane: d, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = y, s = p) : h = h.next = y, l |= d;
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
function ma(e, t, n) {
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
var Ir = {}, ut = Ut(Ir), _r = Ut(Ir), Cr = Ut(Ir);
function Yt(e) {
  if (e === Ir)
    throw Error(k(174));
  return e;
}
function Qu(e, t) {
  switch (U(Cr, t), U(_r, e), U(ut, Ir), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pl(t, e);
  }
  H(ut), U(ut, t);
}
function Ln() {
  H(ut), H(_r), H(Cr);
}
function Pf(e) {
  Yt(Cr.current);
  var t = Yt(ut.current), n = Pl(t, e.type);
  t !== n && (U(_r, e), U(ut, n));
}
function Yu(e) {
  _r.current === e && (H(ut), H(_r));
}
var G = Ut(0);
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
function Xu() {
  for (var e = 0; e < nl.length; e++)
    nl[e]._workInProgressVersionPrimary = null;
  nl.length = 0;
}
var hi = wt.ReactCurrentDispatcher, rl = wt.ReactCurrentBatchConfig, en = 0, K = null, ne = null, oe = null, Bi = !1, lr = !1, Er = 0, Xm = 0;
function me() {
  throw Error(k(321));
}
function qu(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n]))
      return !1;
  return !0;
}
function Zu(e, t, n, r, i, o) {
  if (en = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hi.current = e === null || e.memoizedState === null ? bm : eh, e = n(r, i), lr) {
    o = 0;
    do {
      if (lr = !1, Er = 0, 25 <= o)
        throw Error(k(301));
      o += 1, oe = ne = null, t.updateQueue = null, hi.current = th, e = n(r, i);
    } while (lr);
  }
  if (hi.current = Hi, t = ne !== null && ne.next !== null, en = 0, oe = ne = K = null, Bi = !1, t)
    throw Error(k(300));
  return e;
}
function Ju() {
  var e = Er !== 0;
  return Er = 0, e;
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
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function il(e) {
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
function ol(e) {
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
function Nf() {
}
function Tf(e, t) {
  var n = K, r = Ke(), i = t(), o = !et(r.memoizedState, i);
  if (o && (r.memoizedState = i, xe = !0), r = r.queue, bu($f.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Pr(9, Af.bind(null, n, r, i, t), void 0, null), le === null)
      throw Error(k(349));
    en & 30 || Rf(n, t, i);
  }
  return i;
}
function Rf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Af(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Lf(t) && Of(e);
}
function $f(e, t, n) {
  return n(function() {
    Lf(t) && Of(e);
  });
}
function Lf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function Of(e) {
  var t = yt(e, 1);
  t !== null && be(t, e, 1, -1);
}
function ha(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Jm.bind(null, K, e), [t.memoizedState, e];
}
function Pr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function zf() {
  return Ke().memoizedState;
}
function vi(e, t, n, r) {
  var i = nt();
  K.flags |= e, i.memoizedState = Pr(1 | t, n, void 0, r === void 0 ? null : r);
}
function io(e, t, n, r) {
  var i = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var l = ne.memoizedState;
    if (o = l.destroy, r !== null && qu(r, l.deps)) {
      i.memoizedState = Pr(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Pr(1 | t, n, o, r);
}
function va(e, t) {
  return vi(8390656, 8, e, t);
}
function bu(e, t) {
  return io(2048, 8, e, t);
}
function If(e, t) {
  return io(4, 2, e, t);
}
function Mf(e, t) {
  return io(4, 4, e, t);
}
function Df(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Ff(e, t, n) {
  return n = n != null ? n.concat([e]) : null, io(4, 4, Df.bind(null, t, e), n);
}
function es() {
}
function jf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Uf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Bf(e, t, n) {
  return en & 21 ? (et(n, t) || (n = Gc(), K.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
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
function Hf() {
  return Ke().memoizedState;
}
function Zm(e, t, n) {
  var r = It(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wf(e))
    Vf(t, n);
  else if (n = Ef(e, t, n, r), n !== null) {
    var i = we();
    be(n, e, r, i), Gf(n, t, r);
  }
}
function Jm(e, t, n) {
  var r = It(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wf(e))
    Vf(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var l = t.lastRenderedState, u = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = u, et(u, l)) {
          var s = t.interleaved;
          s === null ? (i.next = i, Gu(t)) : (i.next = s.next, s.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
    n = Ef(e, t, i, r), n !== null && (i = we(), be(n, e, r, i), Gf(n, t, r));
  }
}
function Wf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Vf(e, t) {
  lr = Bi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Gf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $u(e, n);
  }
}
var Hi = { readContext: Ge, useCallback: me, useContext: me, useEffect: me, useImperativeHandle: me, useInsertionEffect: me, useLayoutEffect: me, useMemo: me, useReducer: me, useRef: me, useState: me, useDebugValue: me, useDeferredValue: me, useTransition: me, useMutableSource: me, useSyncExternalStore: me, useId: me, unstable_isNewReconciler: !1 }, bm = { readContext: Ge, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ge, useEffect: va, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, vi(
    4194308,
    4,
    Df.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return vi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return vi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Zm.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: ha, useDebugValue: es, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = ha(!1), t = e[0];
  return e = qm.bind(null, e[1]), nt().memoizedState = e, [t, e];
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
    en & 30 || Rf(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, va($f.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Pr(9, Af.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = le.identifierPrefix;
  if (W) {
    var n = pt, r = dt;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Xm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, eh = {
  readContext: Ge,
  useCallback: jf,
  useContext: Ge,
  useEffect: bu,
  useImperativeHandle: Ff,
  useInsertionEffect: If,
  useLayoutEffect: Mf,
  useMemo: Uf,
  useReducer: il,
  useRef: zf,
  useState: function() {
    return il(xr);
  },
  useDebugValue: es,
  useDeferredValue: function(e) {
    var t = Ke();
    return Bf(t, ne.memoizedState, e);
  },
  useTransition: function() {
    var e = il(xr)[0], t = Ke().memoizedState;
    return [e, t];
  },
  useMutableSource: Nf,
  useSyncExternalStore: Tf,
  useId: Hf,
  unstable_isNewReconciler: !1
}, th = { readContext: Ge, useCallback: jf, useContext: Ge, useEffect: bu, useImperativeHandle: Ff, useInsertionEffect: If, useLayoutEffect: Mf, useMemo: Uf, useReducer: ol, useRef: zf, useState: function() {
  return ol(xr);
}, useDebugValue: es, useDeferredValue: function(e) {
  var t = Ke();
  return ne === null ? t.memoizedState = e : Bf(t, ne.memoizedState, e);
}, useTransition: function() {
  var e = ol(xr)[0], t = Ke().memoizedState;
  return [e, t];
}, useMutableSource: Nf, useSyncExternalStore: Tf, useId: Hf, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oo = { isMounted: function(e) {
  return (e = e._reactInternals) ? on(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = It(e), o = mt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (be(t, e, i, r), mi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), i = It(e), o = mt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (be(t, e, i, r), mi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = It(e), i = mt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Ot(e, i, r), t !== null && (be(t, e, r, n), mi(t, e, r));
} };
function ya(e, t, n, r, i, o, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(i, o) : !0;
}
function Kf(e, t, n) {
  var r = !1, i = Ft, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ge(o) : (i = Ne(t) ? Jt : ge.current, r = t.contextTypes, o = (r = r != null) ? Rn(e, i) : Ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = oo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function ga(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && oo.enqueueReplaceState(t, t.state, null);
}
function Yl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Ku(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Ge(o) : (o = Ne(t) ? Jt : ge.current, i.context = Rn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ql(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && oo.enqueueReplaceState(i, i.state, null), ji(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += Rp(r), r = r.return;
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
function Xl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var nh = typeof WeakMap == "function" ? WeakMap : Map;
function Qf(e, t, n) {
  n = mt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Vi || (Vi = !0, ou = r), Xl(e, t);
  }, n;
}
function Yf(e, t, n) {
  n = mt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      Xl(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Xl(e, t), typeof r != "function" && (zt === null ? zt = /* @__PURE__ */ new Set([this]) : zt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function Sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new nh();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else
    i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = vh.bind(null, e, t, n), t.then(e, e));
}
function wa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ka(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = mt(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var rh = wt.ReactCurrentOwner, xe = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Cf(t, null, n, r) : $n(t, e.child, n, r);
}
function _a(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return En(t, i), r = Zu(e, t, n, r, o, i), n = Ju(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : (W && n && ju(t), t.flags |= 1, Se(e, t, r, i), t.child);
}
function Ca(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ss(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Xf(e, t, o, r, i)) : (e = wi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var l = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : gr, n(l, r) && e.ref === t.ref)
      return gt(e, t, i);
  }
  return t.flags |= 1, e = Mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Xf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gr(o, r) && e.ref === t.ref)
      if (xe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0)
        e.flags & 131072 && (xe = !0);
      else
        return t.lanes = e.lanes, gt(e, t, i);
  }
  return ql(e, t, n, r, i);
}
function qf(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(Sn, Ae), Ae |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(Sn, Ae), Ae |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(Sn, Ae), Ae |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(Sn, Ae), Ae |= r;
  return Se(e, t, i, n), t.child;
}
function Zf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ql(e, t, n, r, i) {
  var o = Ne(n) ? Jt : ge.current;
  return o = Rn(t, o), En(t, i), n = Zu(e, t, n, r, o, i), r = Ju(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, gt(e, t, i)) : (W && r && ju(t), t.flags |= 1, Se(e, t, n, i), t.child);
}
function Ea(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0;
    zi(t);
  } else
    o = !1;
  if (En(t, i), t.stateNode === null)
    yi(e, t), Kf(t, n, r), Yl(t, n, r, i), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = Ge(a) : (a = Ne(n) ? Jt : ge.current, a = Rn(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && ga(t, l, r, a), Ct = !1;
    var d = t.memoizedState;
    l.state = d, ji(t, r, l, i), s = t.memoizedState, u !== r || d !== s || Pe.current || Ct ? (typeof h == "function" && (Ql(t, n, h, r), s = t.memoizedState), (u = Ct || ya(t, n, u, r, d, s, a)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, xf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Xe(t.type, u), l.props = a, p = t.pendingProps, d = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ge(s) : (s = Ne(n) ? Jt : ge.current, s = Rn(t, s));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== p || d !== s) && ga(t, l, r, s), Ct = !1, d = t.memoizedState, l.state = d, ji(t, r, l, i);
    var g = t.memoizedState;
    u !== p || d !== g || Pe.current || Ct ? (typeof y == "function" && (Ql(t, n, y, r), g = t.memoizedState), (a = Ct || ya(t, n, a, r, d, g, s) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Zl(e, t, n, r, o, i);
}
function Zl(e, t, n, r, i, o) {
  Zf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
    return i && aa(t, n, !1), gt(e, t, o);
  r = t.stateNode, rh.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = $n(t, e.child, null, o), t.child = $n(t, null, u, o)) : Se(e, t, u, o), t.memoizedState = r.state, i && aa(t, n, !0), t.child;
}
function Jf(e) {
  var t = e.stateNode;
  t.pendingContext ? sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && sa(e, t.context, !1), Qu(e, t.containerInfo);
}
function xa(e, t, n, r, i) {
  return An(), Bu(i), t.flags |= 256, Se(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function bl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bf(e, t, n) {
  var r = t.pendingProps, i = G.current, o = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), U(G, i & 1), e === null)
    return Gl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = so(l, r, 0, null), e = qt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = bl(n), t.memoizedState = Jl, e) : ts(t, l));
  if (i = e.memoizedState, i !== null && (u = i.dehydrated, u !== null))
    return ih(e, t, l, r, u, i, n);
  if (o) {
    o = r.fallback, l = t.mode, i = e.child, u = i.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Mt(i, s), r.subtreeFlags = i.subtreeFlags & 14680064), u !== null ? o = Mt(u, o) : (o = qt(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? bl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Jl, r;
  }
  return o = e.child, e = o.sibling, r = Mt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ts(e, t) {
  return t = so({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ti(e, t, n, r) {
  return r !== null && Bu(r), $n(t, e.child, null, n), e = ts(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ih(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ll(Error(k(422))), ti(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = so({ mode: "visible", children: r.children }, i, 0, null), o = qt(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && $n(t, e.child, null, l), t.child.memoizedState = bl(l), t.memoizedState = Jl, o);
  if (!(t.mode & 1))
    return ti(e, t, l, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(k(419)), r = ll(o, r, void 0), ti(e, t, l, r);
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
      i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, yt(e, i), be(r, e, i, -1));
    }
    return us(), r = ll(Error(k(421))), ti(e, t, l, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yh.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Le = Lt(i.nextSibling), Oe = t, W = !0, Ze = null, e !== null && (je[Ue++] = dt, je[Ue++] = pt, je[Ue++] = bt, dt = e.id, pt = e.overflow, bt = t), t = ts(t, r.children), t.flags |= 4096, t);
}
function Pa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kl(e.return, t, n);
}
function ul(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function ed(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (Se(e, t, r.children, n), r = G.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Pa(e, n, t);
          else if (e.tag === 19)
            Pa(e, n, t);
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
function oh(e, t, n) {
  switch (t.tag) {
    case 3:
      Jf(t), An();
      break;
    case 5:
      Pf(t);
      break;
    case 1:
      Ne(t.type) && zi(t);
      break;
    case 4:
      Qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      U(Di, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bf(e, t, n) : (U(G, G.current & 1), e = gt(e, t, n), e !== null ? e.sibling : null);
      U(G, G.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return ed(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), U(G, G.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qf(e, t, n);
  }
  return gt(e, t, n);
}
var td, eu, nd, rd;
td = function(e, t) {
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
eu = function() {
};
nd = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Yt(ut.current);
    var o = null;
    switch (n) {
      case "input":
        i = _l(e, i), r = _l(e, r), o = [];
        break;
      case "select":
        i = Q({}, i, { value: void 0 }), r = Q({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = xl(e, i), r = xl(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Li);
    }
    Nl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var u = i[a];
          for (l in u)
            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (fr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (fr.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
rd = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
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
function lh(e, t, n) {
  var r = t.pendingProps;
  switch (Uu(t), t.tag) {
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
      return Ne(t.type) && Oi(), he(t), null;
    case 3:
      return r = t.stateNode, Ln(), H(Pe), H(ge), Xu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (su(Ze), Ze = null))), eu(e, t), he(t), null;
    case 5:
      Yu(t);
      var i = Yt(Cr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        nd(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return he(t), null;
        }
        if (e = Yt(ut.current), br(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[ot] = t, r[kr] = o, e = (t.mode & 1) !== 0, n) {
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
              for (i = 0; i < er.length; i++)
                B(er[i], r);
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
              Is(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Ds(r, o), B("invalid", r);
          }
          Nl(n, o), i = null;
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var u = o[l];
              l === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e), i = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Jr(
                r.textContent,
                u,
                e
              ), i = ["children", "" + u]) : fr.hasOwnProperty(l) && u != null && l === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Vr(r), Ms(r, o, !0);
              break;
            case "textarea":
              Vr(r), Fs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Li);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ot] = t, e[kr] = r, td(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Tl(n, r), n) {
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
                for (i = 0; i < er.length; i++)
                  B(er[i], e);
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
                Is(e, r), i = _l(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Ds(e, r), i = xl(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Nl(n, i), u = i;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Oc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $c(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && dr(e, s) : typeof s == "number" && dr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (fr.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && xu(e, o, s, l));
              }
            switch (n) {
              case "input":
                Vr(e), Ms(e, r, !1);
                break;
              case "textarea":
                Vr(e), Fs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
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
                typeof i.onClick == "function" && (e.onclick = Li);
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
        rd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Yt(Cr.current), Yt(ut.current), br(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = Oe, e !== null))
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r;
      }
      return he(t), null;
    case 13:
      if (H(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Le !== null && t.mode & 1 && !(t.flags & 128))
          kf(), An(), t.flags |= 98560, o = !1;
        else if (o = br(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(k(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(k(317));
            o[ot] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          he(t), o = !1;
        } else
          Ze !== null && (su(Ze), Ze = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? re === 0 && (re = 3) : us())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
    case 4:
      return Ln(), eu(e, t), e === null && Sr(t.stateNode.containerInfo), he(t), null;
    case 10:
      return Vu(t.type._context), he(t), null;
    case 17:
      return Ne(t.type) && Oi(), he(t), null;
    case 19:
      if (H(G), o = t.memoizedState, o === null)
        return he(t), null;
      if (r = (t.flags & 128) !== 0, l = o.rendering, l === null)
        if (r)
          Yn(o, !1);
        else {
          if (re !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (l = Ui(e), l !== null) {
                for (t.flags |= 128, Yn(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(G, G.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && J() > zn && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Ui(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yn(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !W)
              return he(t), null;
          } else
            2 * J() - o.renderingStartTime > zn && n !== 1073741824 && (t.flags |= 128, r = !0, Yn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = J(), t.sibling = null, n = G.current, U(G, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
    case 22:
    case 23:
      return ls(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function uh(e, t) {
  switch (Uu(t), t.tag) {
    case 1:
      return Ne(t.type) && Oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ln(), H(Pe), H(ge), Xu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yu(t), null;
    case 13:
      if (H(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        An();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(G), null;
    case 4:
      return Ln(), null;
    case 10:
      return Vu(t.type._context), null;
    case 22:
    case 23:
      return ls(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1, ye = !1, sh = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function gn(e, t) {
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
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Na = !1;
function ah(e, t) {
  if (Fl = Ri, e = sf(), Fu(e)) {
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
              for (var y; p !== n || i !== 0 && p.nodeType !== 3 || (u = l + i), p !== o || r !== 0 && p.nodeType !== 3 || (s = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (y = p.firstChild) !== null; )
                d = p, p = y;
              for (; ; ) {
                if (p === e)
                  break t;
                if (d === n && ++a === i && (u = l), d === o && ++h === r && (s = l), (y = p.nextSibling) !== null)
                  break;
                p = d, d = p.parentNode;
              }
              p = y;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (jl = { focusedElem: e, selectionRange: n }, Ri = !1, N = t; N !== null; )
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
                  var v = g.memoizedProps, P = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Xe(t.type, v), P);
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
          q(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, N = e;
          break;
        }
        N = t.return;
      }
  return g = Na, Na = !1, g;
}
function ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && tu(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function lo(e, t) {
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
function nu(e) {
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
function id(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, id(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[kr], delete t[Hl], delete t[Gm], delete t[Km])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function od(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ta(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || od(e.return))
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
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Li));
  else if (r !== 4 && (e = e.child, e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; )
      ru(e, t, n), e = e.sibling;
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; )
      iu(e, t, n), e = e.sibling;
}
var se = null, qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; )
    ld(e, t, n), n = n.sibling;
}
function ld(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Ji, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ye || gn(n, t);
    case 6:
      var r = se, i = qe;
      se = null, kt(e, t, n), se = r, qe = i, se !== null && (qe ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (qe ? (e = se, n = n.stateNode, e.nodeType === 8 ? el(e.parentNode, n) : e.nodeType === 1 && el(e, n), vr(e)) : el(se, n.stateNode));
      break;
    case 4:
      r = se, i = qe, se = n.stateNode.containerInfo, qe = !0, kt(e, t, n), se = r, qe = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, l = o.destroy;
          o = o.tag, l !== void 0 && (o & 2 || o & 4) && tu(n, t, l), i = i.next;
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (!ye && (gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          q(n, t, u);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, kt(e, t, n), ye = r) : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Ra(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sh()), t.forEach(function(r) {
      var i = gh.bind(null, e, r);
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
                se = u.stateNode, qe = !1;
                break e;
              case 3:
                se = u.stateNode.containerInfo, qe = !0;
                break e;
              case 4:
                se = u.stateNode.containerInfo, qe = !0;
                break e;
            }
            u = u.return;
          }
        if (se === null)
          throw Error(k(160));
        ld(o, l, i), se = null, qe = !1;
        var s = i.alternate;
        s !== null && (s.return = null), i.return = null;
      } catch (a) {
        q(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ud(t, e), t = t.sibling;
}
function ud(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ye(t, e), tt(e), r & 4) {
        try {
          ur(3, e, e.return), lo(3, e);
        } catch (v) {
          q(e, e.return, v);
        }
        try {
          ur(5, e, e.return);
        } catch (v) {
          q(e, e.return, v);
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
          dr(i, "");
        } catch (v) {
          q(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Tc(i, o), Tl(u, l);
            var a = Tl(u, o);
            for (l = 0; l < s.length; l += 2) {
              var h = s[l], p = s[l + 1];
              h === "style" ? Oc(i, p) : h === "dangerouslySetInnerHTML" ? $c(i, p) : h === "children" ? dr(i, p) : xu(i, h, p, a);
            }
            switch (u) {
              case "input":
                Cl(i, o);
                break;
              case "textarea":
                Rc(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? wn(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? wn(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : wn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[kr] = o;
          } catch (v) {
            q(e, e.return, v);
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
        } catch (v) {
          q(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          vr(t.containerInfo);
        } catch (v) {
          q(e, e.return, v);
        }
      break;
    case 4:
      Ye(t, e), tt(e);
      break;
    case 13:
      Ye(t, e), tt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (is = J())), r & 4 && Ra(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (a = ye) || h, Ye(t, e), ye = a) : Ye(t, e), tt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (N = e, h = e.child; h !== null; ) {
            for (p = N = h; N !== null; ) {
              switch (d = N, y = d.child, d.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ur(4, d, d.return);
                  break;
                case 1:
                  gn(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = d, n = d.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (v) {
                      q(r, n, v);
                    }
                  }
                  break;
                case 5:
                  gn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    $a(p);
                    continue;
                  }
              }
              y !== null ? (y.return = d, N = y) : $a(p);
            }
            h = h.sibling;
          }
        e:
          for (h = null, p = e; ; ) {
            if (p.tag === 5) {
              if (h === null) {
                h = p;
                try {
                  i = p.stateNode, a ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Lc("display", l));
                } catch (v) {
                  q(e, e.return, v);
                }
              }
            } else if (p.tag === 6) {
              if (h === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (v) {
                  q(e, e.return, v);
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
      Ye(t, e), tt(e), r & 4 && Ra(e);
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
          if (od(n)) {
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
          r.flags & 32 && (dr(i, ""), r.flags &= -33);
          var o = Ta(e);
          iu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ta(e);
          ru(e, u, l);
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
function ch(e, t, n) {
  N = e, sd(e);
}
function sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N, o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || ni;
      if (!l) {
        var u = i.alternate, s = u !== null && u.memoizedState !== null || ye;
        u = ni;
        var a = ye;
        if (ni = l, (ye = s) && !a)
          for (N = i; N !== null; )
            l = N, s = l.child, l.tag === 22 && l.memoizedState !== null ? La(i) : s !== null ? (s.return = l, N = s) : La(i);
        for (; o !== null; )
          N = o, sd(o), o = o.sibling;
        N = i, ni = u, ye = a;
      }
      Aa(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? (o.return = i, N = o) : Aa(e);
  }
}
function Aa(e) {
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
              ye || lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ma(t, o, r);
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
                ma(t, l, n);
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
                    p !== null && vr(p);
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
        ye || t.flags & 512 && nu(t);
      } catch (d) {
        q(t, t.return, d);
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
function $a(e) {
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
function La(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lo(4, t);
          } catch (s) {
            q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              q(t, i, s);
            }
          }
          var o = t.return;
          try {
            nu(t);
          } catch (s) {
            q(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            nu(t);
          } catch (s) {
            q(t, l, s);
          }
      }
    } catch (s) {
      q(t, t.return, s);
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
var fh = Math.ceil, Wi = wt.ReactCurrentDispatcher, ns = wt.ReactCurrentOwner, Ve = wt.ReactCurrentBatchConfig, I = 0, le = null, te = null, ce = 0, Ae = 0, Sn = Ut(0), re = 0, Nr = null, tn = 0, uo = 0, rs = 0, sr = null, Ee = null, is = 0, zn = 1 / 0, at = null, Vi = !1, ou = null, zt = null, ri = !1, Nt = null, Gi = 0, ar = 0, lu = null, gi = -1, Si = 0;
function we() {
  return I & 6 ? J() : gi !== -1 ? gi : gi = J();
}
function It(e) {
  return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : Ym.transition !== null ? (Si === 0 && (Si = Gc()), Si) : (e = F, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jc(e.type)), e) : 1;
}
function be(e, t, n, r) {
  if (50 < ar)
    throw ar = 0, lu = null, Error(k(185));
  Lr(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (uo |= n), re === 4 && xt(e, ce)), Te(e, r), n === 1 && I === 0 && !(t.mode & 1) && (zn = J() + 500, ro && Bt()));
}
function Te(e, t) {
  var n = e.callbackNode;
  Yp(e, t);
  var r = Ti(e, e === le ? ce : 0);
  if (r === 0)
    n !== null && Bs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Bs(n), t === 1)
      e.tag === 0 ? Qm(Oa.bind(null, e)) : gf(Oa.bind(null, e)), Wm(function() {
        !(I & 6) && Bt();
      }), n = null;
    else {
      switch (Kc(r)) {
        case 1:
          n = Au;
          break;
        case 4:
          n = Wc;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = Vc;
          break;
        default:
          n = Ni;
      }
      n = vd(n, ad.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ad(e, t) {
  if (gi = -1, Si = 0, I & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n)
    return null;
  var r = Ti(e, e === le ? ce : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Ki(e, r);
  else {
    t = r;
    var i = I;
    I |= 2;
    var o = fd();
    (le !== e || ce !== t) && (at = null, zn = J() + 500, Xt(e, t));
    do
      try {
        mh();
        break;
      } catch (u) {
        cd(e, u);
      }
    while (1);
    Wu(), Wi.current = o, I = i, te !== null ? t = 0 : (le = null, ce = 0, t = re);
  }
  if (t !== 0) {
    if (t === 2 && (i = Ol(e), i !== 0 && (r = i, t = uu(e, i))), t === 1)
      throw n = Nr, Xt(e, 0), xt(e, r), Te(e, J()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !dh(i) && (t = Ki(e, r), t === 2 && (o = Ol(e), o !== 0 && (r = o, t = uu(e, o))), t === 1))
        throw n = Nr, Xt(e, 0), xt(e, r), Te(e, J()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Gt(e, Ee, at);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = is + 500 - J(), 10 < t)) {
            if (Ti(e, 0) !== 0)
              break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = Bl(Gt.bind(null, e, Ee, at), t);
            break;
          }
          Gt(e, Ee, at);
          break;
        case 4:
          if (xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Je(r);
            o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
          }
          if (r = i, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fh(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bl(Gt.bind(null, e, Ee, at), r);
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
  return Te(e, J()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function uu(e, t) {
  var n = sr;
  return e.current.memoizedState.isDehydrated && (Xt(e, t).flags |= 256), e = Ki(e, t), e !== 2 && (t = Ee, Ee = n, t !== null && su(t)), e;
}
function su(e) {
  Ee === null ? Ee = e : Ee.push.apply(Ee, e);
}
function dh(e) {
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
  for (t &= ~rs, t &= ~uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Oa(e) {
  if (I & 6)
    throw Error(k(327));
  xn();
  var t = Ti(e, 0);
  if (!(t & 1))
    return Te(e, J()), null;
  var n = Ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ol(e);
    r !== 0 && (t = r, n = uu(e, r));
  }
  if (n === 1)
    throw n = Nr, Xt(e, 0), xt(e, t), Te(e, J()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Ee, at), Te(e, J()), null;
}
function os(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (zn = J() + 500, ro && Bt());
  }
}
function nn(e) {
  Nt !== null && Nt.tag === 0 && !(I & 6) && xn();
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
function ls() {
  Ae = Sn.current, H(Sn);
}
function Xt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Hm(n)), te !== null)
    for (n = te.return; n !== null; ) {
      var r = n;
      switch (Uu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Oi();
          break;
        case 3:
          Ln(), H(Pe), H(ge), Xu();
          break;
        case 5:
          Yu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          H(G);
          break;
        case 19:
          H(G);
          break;
        case 10:
          Vu(r.type._context);
          break;
        case 22:
        case 23:
          ls();
      }
      n = n.return;
    }
  if (le = e, te = e = Mt(e.current, null), ce = Ae = t, re = 0, Nr = null, rs = uo = tn = 0, Ee = sr = null, Qt !== null) {
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
function cd(e, t) {
  do {
    var n = te;
    try {
      if (Wu(), hi.current = Hi, Bi) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        Bi = !1;
      }
      if (en = 0, oe = ne = K = null, lr = !1, Er = 0, ns.current = null, n === null || n.return === null) {
        re = 1, Nr = t, te = null;
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
          var y = wa(l);
          if (y !== null) {
            y.flags &= -257, ka(y, l, u, o, t), y.mode & 1 && Sa(o, a, t), t = y, s = a;
            var g = t.updateQueue;
            if (g === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(s), t.updateQueue = v;
            } else
              g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Sa(o, a, t), us();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var P = wa(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), ka(P, l, u, o, t), Bu(On(s, u));
            break e;
          }
        }
        o = s = On(s, u), re !== 4 && (re = 2), sr === null ? sr = [o] : sr.push(o), o = l;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = Qf(o, s, t);
              pa(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (zt === null || !zt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Yf(o, u, t);
                pa(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pd(n);
    } catch (C) {
      t = C, te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fd() {
  var e = Wi.current;
  return Wi.current = Hi, e === null ? Hi : e;
}
function us() {
  (re === 0 || re === 3 || re === 2) && (re = 4), le === null || !(tn & 268435455) && !(uo & 268435455) || xt(le, ce);
}
function Ki(e, t) {
  var n = I;
  I |= 2;
  var r = fd();
  (le !== e || ce !== t) && (at = null, Xt(e, t));
  do
    try {
      ph();
      break;
    } catch (i) {
      cd(e, i);
    }
  while (1);
  if (Wu(), I = n, Wi.current = r, te !== null)
    throw Error(k(261));
  return le = null, ce = 0, re;
}
function ph() {
  for (; te !== null; )
    dd(te);
}
function mh() {
  for (; te !== null && !jp(); )
    dd(te);
}
function dd(e) {
  var t = hd(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? pd(e) : te = t, ns.current = null;
}
function pd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = uh(n, t), n !== null) {
        n.flags &= 32767, te = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        re = 6, te = null;
        return;
      }
    } else if (n = lh(n, t, Ae), n !== null) {
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
    Ve.transition = null, F = 1, hh(e, t, n, r);
  } finally {
    Ve.transition = i, F = r;
  }
  return null;
}
function hh(e, t, n, r) {
  do
    xn();
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
  if (Xp(e, o), e === le && (te = le = null, ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ri || (ri = !0, vd(Ni, function() {
    return xn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ve.transition, Ve.transition = null;
    var l = F;
    F = 1;
    var u = I;
    I |= 4, ns.current = null, ah(e, n), ud(n, e), Im(jl), Ri = !!Fl, jl = Fl = null, e.current = n, ch(n), Up(), I = u, F = l, Ve.transition = o;
  } else
    e.current = n;
  if (ri && (ri = !1, Nt = e, Gi = i), o = e.pendingLanes, o === 0 && (zt = null), Wp(n.stateNode), Te(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vi)
    throw Vi = !1, e = ou, ou = null, e;
  return Gi & 1 && e.tag !== 0 && xn(), o = e.pendingLanes, o & 1 ? e === lu ? ar++ : (ar = 0, lu = e) : ar = 0, Bt(), null;
}
function xn() {
  if (Nt !== null) {
    var e = Kc(Gi), t = Ve.transition, n = F;
    try {
      if (Ve.transition = null, F = 16 > e ? 16 : e, Nt === null)
        var r = !1;
      else {
        if (e = Nt, Nt = null, Gi = 0, I & 6)
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
                      ur(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null)
                    p.return = h, N = p;
                  else
                    for (; N !== null; ) {
                      h = N;
                      var d = h.sibling, y = h.return;
                      if (id(h), h === a) {
                        N = null;
                        break;
                      }
                      if (d !== null) {
                        d.return = y, N = d;
                        break;
                      }
                      N = y;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var P = v.sibling;
                    v.sibling = null, v = P;
                  } while (v !== null);
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
                      ur(9, o, o.return);
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
                        lo(9, u);
                    }
                  } catch (C) {
                    q(u, u.return, C);
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
            lt.onPostCommitFiberRoot(Ji, e);
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
function za(e, t, n) {
  t = On(n, t), t = Qf(e, t, 1), e = Ot(e, t, 1), t = we(), e !== null && (Lr(e, 1, t), Te(e, t));
}
function q(e, t, n) {
  if (e.tag === 3)
    za(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        za(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
          e = On(n, e), e = Yf(t, e, 1), t = Ot(t, e, 1), e = we(), t !== null && (Lr(t, 1, e), Te(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ce & n) === n && (re === 4 || re === 3 && (ce & 130023424) === ce && 500 > J() - is ? Xt(e, 0) : rs |= n), Te(e, t);
}
function md(e, t) {
  t === 0 && (e.mode & 1 ? (t = Qr, Qr <<= 1, !(Qr & 130023424) && (Qr = 4194304)) : t = 1);
  var n = we();
  e = yt(e, t), e !== null && (Lr(e, t, n), Te(e, n));
}
function yh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), md(e, n);
}
function gh(e, t) {
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
  r !== null && r.delete(t), md(e, n);
}
var hd;
hd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current)
      xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return xe = !1, oh(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else
    xe = !1, W && t.flags & 1048576 && Sf(t, Mi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      yi(e, t), e = t.pendingProps;
      var i = Rn(t, ge.current);
      En(t, n), i = Zu(null, t, r, e, i, n);
      var o = Ju();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (o = !0, zi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Ku(t), i.updater = oo, t.stateNode = i, i._reactInternals = t, Yl(t, r, e, n), t = Zl(null, t, r, !0, o, n)) : (t.tag = 0, W && o && ju(t), Se(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (yi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = wh(r), e = Xe(r, e), i) {
          case 0:
            t = ql(null, t, r, e, n);
            break e;
          case 1:
            t = Ea(null, t, r, e, n);
            break e;
          case 11:
            t = _a(null, t, r, e, n);
            break e;
          case 14:
            t = Ca(null, t, r, Xe(r.type, e), n);
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
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), ql(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Ea(e, t, r, i, n);
    case 3:
      e: {
        if (Jf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, xf(e, t), ji(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = On(Error(k(423)), t), t = xa(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = On(Error(k(424)), t), t = xa(e, t, r, n, i);
            break e;
          } else
            for (Le = Lt(t.stateNode.containerInfo.firstChild), Oe = t, W = !0, Ze = null, n = Cf(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (An(), r === i) {
            t = gt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Pf(t), e === null && Gl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, Ul(r, i) ? l = null : o !== null && Ul(r, o) && (t.flags |= 32), Zf(e, t), Se(e, t, l, n), t.child;
    case 6:
      return e === null && Gl(t), null;
    case 13:
      return bf(e, t, n);
    case 4:
      return Qu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : Se(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), _a(e, t, r, i, n);
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, U(Di, r._currentValue), r._currentValue = l, o !== null)
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
                  throw Error(k(341));
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
        Se(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, En(t, n), i = Ge(i), r = r(i), t.flags |= 1, Se(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), Ca(e, t, r, i, n);
    case 15:
      return Xf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), yi(e, t), t.tag = 1, Ne(r) ? (e = !0, zi(t)) : e = !1, En(t, n), Kf(t, r, i), Yl(t, r, i, n), Zl(null, t, r, !0, e, n);
    case 19:
      return ed(e, t, n);
    case 22:
      return qf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function vd(e, t) {
  return Hc(e, t);
}
function Sh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function We(e, t, n, r) {
  return new Sh(e, t, n, r);
}
function ss(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wh(e) {
  if (typeof e == "function")
    return ss(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Nu)
      return 11;
    if (e === Tu)
      return 14;
  }
  return 2;
}
function Mt(e, t) {
  var n = e.alternate;
  return n === null ? (n = We(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wi(e, t, n, r, i, o) {
  var l = 2;
  if (r = e, typeof e == "function")
    ss(e) && (l = 1);
  else if (typeof e == "string")
    l = 5;
  else
    e:
      switch (e) {
        case an:
          return qt(n.children, i, o, t);
        case Pu:
          l = 8, i |= 8;
          break;
        case gl:
          return e = We(12, n, t, i | 2), e.elementType = gl, e.lanes = o, e;
        case Sl:
          return e = We(13, n, t, i), e.elementType = Sl, e.lanes = o, e;
        case wl:
          return e = We(19, n, t, i), e.elementType = wl, e.lanes = o, e;
        case xc:
          return so(n, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Cc:
                l = 10;
                break e;
              case Ec:
                l = 9;
                break e;
              case Nu:
                l = 11;
                break e;
              case Tu:
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
function qt(e, t, n, r) {
  return e = We(7, e, r, t), e.lanes = n, e;
}
function so(e, t, n, r) {
  return e = We(22, e, r, t), e.elementType = xc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sl(e, t, n) {
  return e = We(6, e, null, t), e.lanes = n, e;
}
function al(e, t, n) {
  return t = We(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function kh(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wo(0), this.expirationTimes = Wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function as(e, t, n, r, i, o, l, u, s) {
  return e = new kh(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = We(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ku(o), e;
}
function _h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yd(e) {
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
      return yf(e, n, t);
  }
  return t;
}
function gd(e, t, n, r, i, o, l, u, s) {
  return e = as(n, r, !0, e, i, o, l, u, s), e.context = yd(null), n = e.current, r = we(), i = It(n), o = mt(r, i), o.callback = t ?? null, Ot(n, o, i), e.current.lanes = i, Lr(e, i, r), Te(e, r), e;
}
function ao(e, t, n, r) {
  var i = t.current, o = we(), l = It(i);
  return n = yd(n), t.context === null ? t.context = n : t.pendingContext = n, t = mt(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(i, t, l), e !== null && (be(e, i, l, o), mi(e, i, l)), l;
}
function Qi(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ia(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cs(e, t) {
  Ia(e, t), (e = e.alternate) && Ia(e, t);
}
function Ch() {
  return null;
}
var Sd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fs(e) {
  this._internalRoot = e;
}
co.prototype.render = fs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  ao(e, t, null, null);
};
co.prototype.unmount = fs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    nn(function() {
      ao(null, e, null, null);
    }), t[vt] = null;
  }
};
function co(e) {
  this._internalRoot = e;
}
co.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++)
      ;
    Et.splice(n, 0, e), n === 0 && Zc(e);
  }
};
function ds(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ma() {
}
function Eh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Qi(l);
        o.call(a);
      };
    }
    var l = gd(t, r, e, 0, null, !1, !1, "", Ma);
    return e._reactRootContainer = l, e[vt] = l.current, Sr(e.nodeType === 8 ? e.parentNode : e), nn(), l;
  }
  for (; i = e.lastChild; )
    e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Qi(s);
      u.call(a);
    };
  }
  var s = as(e, 0, !1, null, null, !1, !1, "", Ma);
  return e._reactRootContainer = s, e[vt] = s.current, Sr(e.nodeType === 8 ? e.parentNode : e), nn(function() {
    ao(t, s, n, r);
  }), s;
}
function po(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var u = i;
      i = function() {
        var s = Qi(l);
        u.call(s);
      };
    }
    ao(t, l, e, i);
  } else
    l = Eh(n, t, e, i, r);
  return Qi(l);
}
Qc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = bn(t.pendingLanes);
        n !== 0 && ($u(t, n | 1), Te(t, J()), !(I & 6) && (zn = J() + 500, Bt()));
      }
      break;
    case 13:
      nn(function() {
        var r = yt(e, 1);
        if (r !== null) {
          var i = we();
          be(r, e, 1, i);
        }
      }), cs(e, 1);
  }
};
Lu = function(e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = we();
      be(t, e, 134217728, n);
    }
    cs(e, 134217728);
  }
};
Yc = function(e) {
  if (e.tag === 13) {
    var t = It(e), n = yt(e, t);
    if (n !== null) {
      var r = we();
      be(n, e, t, r);
    }
    cs(e, t);
  }
};
Xc = function() {
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
Al = function(e, t, n) {
  switch (t) {
    case "input":
      if (Cl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = no(r);
            if (!i)
              throw Error(k(90));
            Nc(r), Cl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Rc(e, n);
      break;
    case "select":
      t = n.value, t != null && wn(e, !!n.multiple, t, !1);
  }
};
Mc = os;
Dc = nn;
var xh = { usingClientEntryPoint: !1, Events: [zr, pn, no, zc, Ic, os] }, Xn = { findFiberByHostInstance: Kt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ph = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: wt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Uc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ii.isDisabled && ii.supportsFiber)
    try {
      Ji = ii.inject(Ph), lt = ii;
    } catch {
    }
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xh;
Me.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ds(t))
    throw Error(k(200));
  return _h(e, t, null, n);
};
Me.createRoot = function(e, t) {
  if (!ds(e))
    throw Error(k(299));
  var n = !1, r = "", i = Sd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = as(e, 1, !1, null, null, n, !1, r, i), e[vt] = t.current, Sr(e.nodeType === 8 ? e.parentNode : e), new fs(t);
};
Me.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Uc(t), e = e === null ? null : e.stateNode, e;
};
Me.flushSync = function(e) {
  return nn(e);
};
Me.hydrate = function(e, t, n) {
  if (!fo(t))
    throw Error(k(200));
  return po(null, e, t, !0, n);
};
Me.hydrateRoot = function(e, t, n) {
  if (!ds(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", l = Sd;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = gd(t, null, e, 1, n ?? null, i, !1, o, l), e[vt] = t.current, Sr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
        n,
        i
      );
  return new co(t);
};
Me.render = function(e, t, n) {
  if (!fo(t))
    throw Error(k(200));
  return po(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function(e) {
  if (!fo(e))
    throw Error(k(40));
  return e._reactRootContainer ? (nn(function() {
    po(null, null, e, !1, function() {
      e._reactRootContainer = null, e[vt] = null;
    });
  }), !0) : !1;
};
Me.unstable_batchedUpdates = os;
Me.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fo(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return po(e, t, n, !1, r);
};
Me.version = "18.3.1-next-f1338f8080-20240426";
function wd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wd);
    } catch (e) {
      console.error(e);
    }
}
wd(), Sc.exports = Me;
var Nh = Sc.exports, kd, Da = Nh;
kd = Da.createRoot, Da.hydrateRoot;
function Th(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Fa = "$$material";
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
function mo(e, t) {
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
var Rh = !1;
function Ah(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function $h(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Lh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? !Rh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag($h(this));
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
}(), ve = "-ms-", Yi = "-moz-", M = "-webkit-", _d = "comm", ps = "rule", ms = "decl", Oh = "@import", Cd = "@keyframes", zh = "@layer", Ih = Math.abs, ho = String.fromCharCode, Mh = Object.assign;
function Dh(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0;
}
function Ed(e) {
  return e.trim();
}
function Fh(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function au(e, t) {
  return e.indexOf(t);
}
function ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tr(e, t, n) {
  return e.slice(t, n);
}
function rt(e) {
  return e.length;
}
function hs(e) {
  return e.length;
}
function oi(e, t) {
  return t.push(e), e;
}
function jh(e, t) {
  return e.map(t).join("");
}
var vo = 1, In = 1, xd = 0, Re = 0, ee = 0, jn = "";
function yo(e, t, n, r, i, o, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: vo, column: In, length: l, return: "" };
}
function qn(e, t) {
  return Mh(yo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Uh() {
  return ee;
}
function Bh() {
  return ee = Re > 0 ? ae(jn, --Re) : 0, In--, ee === 10 && (In = 1, vo--), ee;
}
function ze() {
  return ee = Re < xd ? ae(jn, Re++) : 0, In++, ee === 10 && (In = 1, vo++), ee;
}
function st() {
  return ae(jn, Re);
}
function ki() {
  return Re;
}
function Mr(e, t) {
  return Tr(jn, e, t);
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
function Pd(e) {
  return vo = In = 1, xd = rt(jn = e), Re = 0, [];
}
function Nd(e) {
  return jn = "", e;
}
function _i(e) {
  return Ed(Mr(Re - 1, cu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Hh(e) {
  for (; (ee = st()) && ee < 33; )
    ze();
  return Rr(e) > 2 || Rr(ee) > 3 ? "" : " ";
}
function Wh(e, t) {
  for (; --t && ze() && !(ee < 48 || ee > 102 || ee > 57 && ee < 65 || ee > 70 && ee < 97); )
    ;
  return Mr(e, ki() + (t < 6 && st() == 32 && ze() == 32));
}
function cu(e) {
  for (; ze(); )
    switch (ee) {
      case e:
        return Re;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cu(ee);
        break;
      case 40:
        e === 41 && cu(e);
        break;
      case 92:
        ze();
        break;
    }
  return Re;
}
function Vh(e, t) {
  for (; ze() && e + ee !== 47 + 10; )
    if (e + ee === 42 + 42 && st() === 47)
      break;
  return "/*" + Mr(t, Re - 1) + "*" + ho(e === 47 ? e : ze());
}
function Gh(e) {
  for (; !Rr(st()); )
    ze();
  return Mr(e, Re);
}
function Kh(e) {
  return Nd(Ci("", null, null, null, [""], e = Pd(e), 0, [0], e));
}
function Ci(e, t, n, r, i, o, l, u, s) {
  for (var a = 0, h = 0, p = l, d = 0, y = 0, g = 0, v = 1, P = 1, f = 1, c = 0, m = "", w = i, C = o, E = r, _ = m; P; )
    switch (g = c, c = ze()) {
      case 40:
        if (g != 108 && ae(_, p - 1) == 58) {
          au(_ += D(_i(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += _i(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Hh(g);
        break;
      case 92:
        _ += Wh(ki() - 1, 7);
        continue;
      case 47:
        switch (st()) {
          case 42:
          case 47:
            oi(Qh(Vh(ze(), ki()), t, n), s);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * v:
        u[a++] = rt(_) * f;
      case 125 * v:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            P = 0;
          case 59 + h:
            f == -1 && (_ = D(_, /\f/g, "")), y > 0 && rt(_) - p && oi(y > 32 ? Ua(_ + ";", r, n, p - 1) : Ua(D(_, " ", "") + ";", r, n, p - 2), s);
            break;
          case 59:
            _ += ";";
          default:
            if (oi(E = ja(_, t, n, a, h, i, u, m, w = [], C = [], p), o), c === 123)
              if (h === 0)
                Ci(_, t, E, E, w, o, p, u, C);
              else
                switch (d === 99 && ae(_, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ci(e, E, E, r && oi(ja(e, E, E, 0, 0, i, u, m, i, w = [], p), C), i, C, p, u, r ? w : C);
                    break;
                  default:
                    Ci(_, E, E, E, [""], C, 0, u, C);
                }
        }
        a = h = y = 0, v = f = 1, m = _ = "", p = l;
        break;
      case 58:
        p = 1 + rt(_), y = g;
      default:
        if (v < 1) {
          if (c == 123)
            --v;
          else if (c == 125 && v++ == 0 && Bh() == 125)
            continue;
        }
        switch (_ += ho(c), c * v) {
          case 38:
            f = h > 0 ? 1 : (_ += "\f", -1);
            break;
          case 44:
            u[a++] = (rt(_) - 1) * f, f = 1;
            break;
          case 64:
            st() === 45 && (_ += _i(ze())), d = st(), h = p = rt(m = _ += Gh(ki())), c++;
            break;
          case 45:
            g === 45 && rt(_) == 2 && (v = 0);
        }
    }
  return o;
}
function ja(e, t, n, r, i, o, l, u, s, a, h) {
  for (var p = i - 1, d = i === 0 ? o : [""], y = hs(d), g = 0, v = 0, P = 0; g < r; ++g)
    for (var f = 0, c = Tr(e, p + 1, p = Ih(v = l[g])), m = e; f < y; ++f)
      (m = Ed(v > 0 ? d[f] + " " + c : D(c, /&\f/g, d[f]))) && (s[P++] = m);
  return yo(e, t, n, i === 0 ? ps : u, s, a, h);
}
function Qh(e, t, n) {
  return yo(e, t, n, _d, ho(Uh()), Tr(e, 2, -2), 0);
}
function Ua(e, t, n, r) {
  return yo(e, t, n, ms, Tr(e, 0, r), Tr(e, r + 1, -1), r);
}
function Pn(e, t) {
  for (var n = "", r = hs(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function Yh(e, t, n, r) {
  switch (e.type) {
    case zh:
      if (e.children.length)
        break;
    case Oh:
    case ms:
      return e.return = e.return || e.value;
    case _d:
      return "";
    case Cd:
      return e.return = e.value + "{" + Pn(e.children, r) + "}";
    case ps:
      e.value = e.props.join(",");
  }
  return rt(n = Pn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Xh(e) {
  var t = hs(e);
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
function Td(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Zh = function(t, n, r) {
  for (var i = 0, o = 0; i = o, o = st(), i === 38 && o === 12 && (n[r] = 1), !Rr(o); )
    ze();
  return Mr(t, Re);
}, Jh = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Rr(i)) {
      case 0:
        i === 38 && st() === 12 && (n[r] = 1), t[r] += Zh(Re - 1, n, r);
        break;
      case 2:
        t[r] += _i(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = st() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += ho(i);
    }
  while (i = ze());
  return t;
}, bh = function(t, n) {
  return Nd(Jh(Pd(t), n));
}, Ba = /* @__PURE__ */ new WeakMap(), ev = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ba.get(r)) && !i) {
      Ba.set(t, !0);
      for (var o = [], l = bh(n, o), u = r.props, s = 0, a = 0; s < l.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = o[s] ? l[s].replace(/&\f/g, u[h]) : u[h] + " " + l[s];
    }
  }
}, tv = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Rd(e, t) {
  switch (Dh(e, t)) {
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
      return M + e + Yi + e + ve + e + e;
    case 6828:
    case 4268:
      return M + e + ve + e + e;
    case 6165:
      return M + e + ve + "flex-" + e + e;
    case 5187:
      return M + e + D(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + ve + "flex-$1$2") + e;
    case 5443:
      return M + e + ve + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return M + e + ve + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return M + e + ve + D(e, "shrink", "negative") + e;
    case 5292:
      return M + e + ve + D(e, "basis", "preferred-size") + e;
    case 6060:
      return M + "box-" + D(e, "-grow", "") + M + e + ve + D(e, "grow", "positive") + e;
    case 4554:
      return M + D(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + ve + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + M + e + e;
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
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Yi + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~au(e, "stretch") ? Rd(D(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ae(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ae(e, rt(e) - 3 - (~au(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + M) + e;
        case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + M + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + M + "$2$3$1" + ve + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ae(e, t + 11)) {
        case 114:
          return M + e + ve + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + ve + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + ve + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + ve + e + e;
  }
  return e;
}
var nv = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ms:
        t.return = Rd(t.value, t.length);
        break;
      case Cd:
        return Pn([qn(t, {
          value: D(t.value, "@", "@" + M)
        })], i);
      case ps:
        if (t.length)
          return jh(t.props, function(o) {
            switch (Fh(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Pn([qn(t, {
                  props: [D(o, /:(read-\w+)/, ":" + Yi + "$1")]
                })], i);
              case "::placeholder":
                return Pn([qn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + M + "input-$1")]
                }), qn(t, {
                  props: [D(o, /:(plac\w+)/, ":" + Yi + "$1")]
                }), qn(t, {
                  props: [D(o, /:(plac\w+)/, ve + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, rv = [nv], iv = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(v) {
      var P = v.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || rv, o = {}, l, u = [];
  l = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(v) {
      for (var P = v.getAttribute("data-emotion").split(" "), f = 1; f < P.length; f++)
        o[P[f]] = !0;
      u.push(v);
    }
  );
  var s, a = [ev, tv];
  {
    var h, p = [Yh, qh(function(v) {
      h.insert(v);
    })], d = Xh(a.concat(i, p)), y = function(P) {
      return Pn(Kh(P), d);
    };
    s = function(P, f, c, m) {
      h = c, y(P ? P + "{" + f.styles + "}" : f.styles), m && (g.inserted[f.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new Lh({
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
}, Ad = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue = typeof Symbol == "function" && Symbol.for, vs = ue ? Symbol.for("react.element") : 60103, ys = ue ? Symbol.for("react.portal") : 60106, go = ue ? Symbol.for("react.fragment") : 60107, So = ue ? Symbol.for("react.strict_mode") : 60108, wo = ue ? Symbol.for("react.profiler") : 60114, ko = ue ? Symbol.for("react.provider") : 60109, _o = ue ? Symbol.for("react.context") : 60110, gs = ue ? Symbol.for("react.async_mode") : 60111, Co = ue ? Symbol.for("react.concurrent_mode") : 60111, Eo = ue ? Symbol.for("react.forward_ref") : 60112, xo = ue ? Symbol.for("react.suspense") : 60113, ov = ue ? Symbol.for("react.suspense_list") : 60120, Po = ue ? Symbol.for("react.memo") : 60115, No = ue ? Symbol.for("react.lazy") : 60116, lv = ue ? Symbol.for("react.block") : 60121, uv = ue ? Symbol.for("react.fundamental") : 60117, sv = ue ? Symbol.for("react.responder") : 60118, av = ue ? Symbol.for("react.scope") : 60119;
function Fe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vs:
        switch (e = e.type, e) {
          case gs:
          case Co:
          case go:
          case wo:
          case So:
          case xo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case _o:
              case Eo:
              case No:
              case Po:
              case ko:
                return e;
              default:
                return t;
            }
        }
      case ys:
        return t;
    }
  }
}
function $d(e) {
  return Fe(e) === Co;
}
j.AsyncMode = gs;
j.ConcurrentMode = Co;
j.ContextConsumer = _o;
j.ContextProvider = ko;
j.Element = vs;
j.ForwardRef = Eo;
j.Fragment = go;
j.Lazy = No;
j.Memo = Po;
j.Portal = ys;
j.Profiler = wo;
j.StrictMode = So;
j.Suspense = xo;
j.isAsyncMode = function(e) {
  return $d(e) || Fe(e) === gs;
};
j.isConcurrentMode = $d;
j.isContextConsumer = function(e) {
  return Fe(e) === _o;
};
j.isContextProvider = function(e) {
  return Fe(e) === ko;
};
j.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vs;
};
j.isForwardRef = function(e) {
  return Fe(e) === Eo;
};
j.isFragment = function(e) {
  return Fe(e) === go;
};
j.isLazy = function(e) {
  return Fe(e) === No;
};
j.isMemo = function(e) {
  return Fe(e) === Po;
};
j.isPortal = function(e) {
  return Fe(e) === ys;
};
j.isProfiler = function(e) {
  return Fe(e) === wo;
};
j.isStrictMode = function(e) {
  return Fe(e) === So;
};
j.isSuspense = function(e) {
  return Fe(e) === xo;
};
j.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === go || e === Co || e === wo || e === So || e === xo || e === ov || typeof e == "object" && e !== null && (e.$$typeof === No || e.$$typeof === Po || e.$$typeof === ko || e.$$typeof === _o || e.$$typeof === Eo || e.$$typeof === uv || e.$$typeof === sv || e.$$typeof === av || e.$$typeof === lv);
};
j.typeOf = Fe;
Ad.exports = j;
var cv = Ad.exports, Ld = cv, fv = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, dv = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Od = {};
Od[Ld.ForwardRef] = fv;
Od[Ld.Memo] = dv;
var pv = !0;
function zd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ");
  }), r;
}
var Ss = function(t, n, r) {
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
  pv === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, ws = function(t, n, r) {
  Ss(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + i : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function mv(e) {
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
var hv = {
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
}, vv = !1, yv = /[A-Z]|^ms/g, gv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Id = function(t) {
  return t.charCodeAt(1) === 45;
}, Ha = function(t) {
  return t != null && typeof t != "boolean";
}, cl = /* @__PURE__ */ Td(function(e) {
  return Id(e) ? e : e.replace(yv, "-$&").toLowerCase();
}), Wa = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(gv, function(r, i, o) {
          return it = {
            name: i,
            styles: o,
            next: it
          }, i;
        });
  }
  return hv[t] !== 1 && !Id(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Sv = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
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
      return wv(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = it, a = n(e);
        return it = s, Ar(e, t, a);
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
function wv(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Ar(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var u = l;
        t != null && t[u] !== void 0 ? r += o + "{" + t[u] + "}" : Ha(u) && (r += cl(o) + ":" + Wa(o, u) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && vv)
          throw new Error(Sv);
        if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
          for (var s = 0; s < l.length; s++)
            Ha(l[s]) && (r += cl(o) + ":" + Wa(o, l[s]) + ";");
        else {
          var a = Ar(e, t, l);
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
var Va = /label:\s*([^\s;{]+)\s*(;|$)/g, it;
function To(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  it = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Ar(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var u = 1; u < e.length; u++)
    if (i += Ar(n, t, e[u]), r) {
      var s = o;
      i += s[u];
    }
  Va.lastIndex = 0;
  for (var a = "", h; (h = Va.exec(i)) !== null; )
    a += "-" + h[1];
  var p = mv(i) + a;
  return {
    name: p,
    styles: i,
    next: it
  };
}
var kv = function(t) {
  return t();
}, Md = vl["useInsertionEffect"] ? vl["useInsertionEffect"] : !1, Dd = Md || kv, Ga = Md || x.useLayoutEffect, _v = !1, Fd = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ iv({
    key: "css"
  }) : null
);
Fd.Provider;
var ks = function(t) {
  return /* @__PURE__ */ x.forwardRef(function(n, r) {
    var i = x.useContext(Fd);
    return t(n, i, r);
  });
}, Dr = /* @__PURE__ */ x.createContext({}), _s = {}.hasOwnProperty, fu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Cv = function(t, n) {
  var r = {};
  for (var i in n)
    _s.call(n, i) && (r[i] = n[i]);
  return r[fu] = t, r;
}, Ev = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Ss(n, r, i), Dd(function() {
    return ws(n, r, i);
  }), null;
}, xv = /* @__PURE__ */ ks(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[fu], o = [r], l = "";
  typeof e.className == "string" ? l = zd(t.registered, o, e.className) : e.className != null && (l = e.className + " ");
  var u = To(o, void 0, x.useContext(Dr));
  l += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    _s.call(e, a) && a !== "css" && a !== fu && !_v && (s[a] = e[a]);
  return s.className = l, n && (s.ref = n), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(Ev, {
    cache: t,
    serialized: u,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ x.createElement(i, s));
}), Pv = xv, fl = { exports: {} }, Ka;
function Nv() {
  return Ka || (Ka = 1, function(e) {
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
Nv();
var Qa = function(t, n) {
  var r = arguments;
  if (n == null || !_s.call(n, "css"))
    return x.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = Pv, o[1] = Cv(t, n);
  for (var l = 2; l < i; l++)
    o[l] = r[l];
  return x.createElement.apply(null, o);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Qa || (Qa = {}));
var Tv = /* @__PURE__ */ ks(function(e, t) {
  var n = e.styles, r = To([n], void 0, x.useContext(Dr)), i = x.useRef();
  return Ga(function() {
    var o = t.key + "-global", l = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (l.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", o), l.hydrate([s])), i.current = [l, u], function() {
      l.flush();
    };
  }, [t]), Ga(function() {
    var o = i.current, l = o[0], u = o[1];
    if (u) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && ws(t, r.next, !0), l.tags.length) {
      var s = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = s, l.flush();
    }
    t.insert("", r, l, !1);
  }, [t, r.name]), null;
}), Rv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Av = /* @__PURE__ */ Td(
  function(e) {
    return Rv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $v = !1, Lv = Av, Ov = function(t) {
  return t !== "theme";
}, Ya = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Lv : Ov;
}, Xa = function(t, n, r) {
  var i;
  if (n) {
    var o = n.shouldForwardProp;
    i = t.__emotion_forwardProp && o ? function(l) {
      return t.__emotion_forwardProp(l) && o(l);
    } : o;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, zv = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return Ss(n, r, i), Dd(function() {
    return ws(n, r, i);
  }), null;
}, Iv = function e(t, n) {
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, l;
  n !== void 0 && (o = n.label, l = n.target);
  var u = Xa(t, n, r), s = u || Ya(i), a = !s("as");
  return function() {
    var h = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && p.push("label:" + o + ";"), h[0] == null || h[0].raw === void 0)
      p.push.apply(p, h);
    else {
      var d = h[0];
      p.push(d[0]);
      for (var y = h.length, g = 1; g < y; g++)
        p.push(h[g], d[g]);
    }
    var v = ks(function(P, f, c) {
      var m = a && P.as || i, w = "", C = [], E = P;
      if (P.theme == null) {
        E = {};
        for (var _ in P)
          E[_] = P[_];
        E.theme = x.useContext(Dr);
      }
      typeof P.className == "string" ? w = zd(f.registered, C, P.className) : P.className != null && (w = P.className + " ");
      var A = To(p.concat(C), f.registered, E);
      w += f.key + "-" + A.name, l !== void 0 && (w += " " + l);
      var V = a && u === void 0 ? Ya(m) : s, L = {};
      for (var pe in P)
        a && pe === "as" || V(pe) && (L[pe] = P[pe]);
      return L.className = w, c && (L.ref = c), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(zv, {
        cache: f,
        serialized: A,
        isStringTag: typeof m == "string"
      }), /* @__PURE__ */ x.createElement(m, L));
    });
    return v.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = p, v.__emotion_forwardProp = u, Object.defineProperty(v, "toString", {
      value: function() {
        return l === void 0 && $v ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), v.withComponent = function(P, f) {
      var c = e(P, fe({}, n, f, {
        shouldForwardProp: Xa(v, f, !0)
      }));
      return c.apply(void 0, p);
    }, v;
  };
}, Mv = [
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
], qa = Iv.bind(null);
Mv.forEach(function(e) {
  qa[e] = qa(e);
});
function Dv(e) {
  return e == null || Object.keys(e).length === 0;
}
function Fv(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ S(Tv, {
    styles: typeof t == "function" ? (i) => t(Dv(i) ? n : i) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Za = [];
function jv(e) {
  return Za[0] = e, To(Za);
}
function un(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jd(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || !un(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = jd(e[n]);
  }), t;
}
function Xi(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? fe({}, e) : e;
  return un(e) && un(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ x.isValidElement(t[i]) ? r[i] = t[i] : un(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && un(e[i]) ? r[i] = Xi(e[i], t[i], n) : n.clone ? r[i] = un(t[i]) ? jd(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
const Uv = ["values", "unit", "step"], Bv = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => fe({}, n, {
    [r.key]: r.val
  }), {});
};
function Hv(e) {
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
  } = e, i = mo(e, Uv), o = Bv(t), l = Object.keys(o);
  function u(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function s(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function a(d, y) {
    const g = l.indexOf(y);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(g !== -1 && typeof t[l[g]] == "number" ? t[l[g]] : y) - r / 100}${n})`;
  }
  function h(d) {
    return l.indexOf(d) + 1 < l.length ? a(d, l[l.indexOf(d) + 1]) : u(d);
  }
  function p(d) {
    const y = l.indexOf(d);
    return y === 0 ? u(l[1]) : y === l.length - 1 ? s(l[y]) : a(d, l[l.indexOf(d) + 1]).replace("@media", "@media not all and");
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
const Wv = {
  borderRadius: 4
}, Vv = Wv;
function cr(e, t) {
  return t ? Xi(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Cs = {
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
}, Ja = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Cs[e]}px)`
};
function St(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Ja;
    return t.reduce((l, u, s) => (l[o.up(o.keys[s])] = n(t[s]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Ja;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(o.values || Cs).indexOf(u) !== -1) {
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
function Gv(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function ba(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Ud(e) {
  if (typeof e != "string")
    throw new Error(Th(7));
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
function qi(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Ro(e, n) || r, t && (i = t(i, r, e)), i;
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
    const u = l[t], s = l.theme, a = Ro(s, r) || {};
    return St(l, u, (p) => {
      let d = qi(a, i, p);
      return p === d && typeof p == "string" && (d = qi(a, i, `${t}${p === "default" ? "" : Ud(p)}`, p)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = {}, o.filterProps = [t], o;
}
function Kv(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Qv = {
  m: "margin",
  p: "padding"
}, Yv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ec = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xv = Kv((e) => {
  if (e.length > 2)
    if (ec[e])
      e = ec[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Qv[t], i = Yv[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Es = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], xs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Es, ...xs];
function Fr(e, t, n, r) {
  var i;
  const o = (i = Ro(e, t, !1)) != null ? i : n;
  return typeof o == "number" ? (l) => typeof l == "string" ? l : o * l : Array.isArray(o) ? (l) => typeof l == "string" ? l : o[l] : typeof o == "function" ? o : () => {
  };
}
function Bd(e) {
  return Fr(e, "spacing", 8);
}
function jr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function qv(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = jr(t, n), r), {});
}
function Zv(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Xv(n), o = qv(i, r), l = e[n];
  return St(e, l, o);
}
function Hd(e, t) {
  const n = Bd(e.theme);
  return Object.keys(e).map((r) => Zv(e, t, r, n)).reduce(cr, {});
}
function Y(e) {
  return Hd(e, Es);
}
Y.propTypes = {};
Y.filterProps = Es;
function X(e) {
  return Hd(e, xs);
}
X.propTypes = {};
X.filterProps = xs;
function Jv(e = 8) {
  if (e.mui)
    return e;
  const t = Bd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((o) => {
    const l = t(o);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" ");
  return n.mui = !0, n;
}
function Ao(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? cr(i, t[o](r)) : i, {});
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
const bv = Qe("border", Be), ey = Qe("borderTop", Be), ty = Qe("borderRight", Be), ny = Qe("borderBottom", Be), ry = Qe("borderLeft", Be), iy = Qe("borderColor"), oy = Qe("borderTopColor"), ly = Qe("borderRightColor"), uy = Qe("borderBottomColor"), sy = Qe("borderLeftColor"), ay = Qe("outline", Be), cy = Qe("outlineColor"), $o = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Fr(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: jr(t, r)
    });
    return St(e, e.borderRadius, n);
  }
  return null;
};
$o.propTypes = {};
$o.filterProps = ["borderRadius"];
Ao(bv, ey, ty, ny, ry, iy, oy, ly, uy, sy, $o, ay, cy);
const Lo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Fr(e.theme, "spacing", 8), n = (r) => ({
      gap: jr(t, r)
    });
    return St(e, e.gap, n);
  }
  return null;
};
Lo.propTypes = {};
Lo.filterProps = ["gap"];
const Oo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Fr(e.theme, "spacing", 8), n = (r) => ({
      columnGap: jr(t, r)
    });
    return St(e, e.columnGap, n);
  }
  return null;
};
Oo.propTypes = {};
Oo.filterProps = ["columnGap"];
const zo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Fr(e.theme, "spacing", 8), n = (r) => ({
      rowGap: jr(t, r)
    });
    return St(e, e.rowGap, n);
  }
  return null;
};
zo.propTypes = {};
zo.filterProps = ["rowGap"];
const fy = b({
  prop: "gridColumn"
}), dy = b({
  prop: "gridRow"
}), py = b({
  prop: "gridAutoFlow"
}), my = b({
  prop: "gridAutoColumns"
}), hy = b({
  prop: "gridAutoRows"
}), vy = b({
  prop: "gridTemplateColumns"
}), yy = b({
  prop: "gridTemplateRows"
}), gy = b({
  prop: "gridTemplateAreas"
}), Sy = b({
  prop: "gridArea"
});
Ao(Lo, Oo, zo, fy, dy, py, my, hy, vy, yy, gy, Sy);
function Nn(e, t) {
  return t === "grey" ? t : e;
}
const wy = b({
  prop: "color",
  themeKey: "palette",
  transform: Nn
}), ky = b({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nn
}), _y = b({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nn
});
Ao(wy, ky, _y);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Cy = b({
  prop: "width",
  transform: $e
}), Ps = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Cs[n];
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
Ps.filterProps = ["maxWidth"];
const Ey = b({
  prop: "minWidth",
  transform: $e
}), xy = b({
  prop: "height",
  transform: $e
}), Py = b({
  prop: "maxHeight",
  transform: $e
}), Ny = b({
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
const Ty = b({
  prop: "boxSizing"
});
Ao(Cy, Ps, Ey, xy, Py, Ny, Ty);
const Ry = {
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
    style: $o
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
    style: Lo
  },
  rowGap: {
    style: zo
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
    transform: $e
  },
  maxWidth: {
    style: Ps
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
}, Wd = Ry;
function Ay(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function $y(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ly() {
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
    const d = Ro(i, a) || {};
    return p ? p(l) : St(l, r, (g) => {
      let v = qi(d, h, g);
      return g === v && typeof g == "string" && (v = qi(d, h, `${n}${g === "default" ? "" : Ud(g)}`, g)), s === !1 ? v : {
        [s]: v
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
    const u = (r = o.unstable_sxConfig) != null ? r : Wd;
    function s(a) {
      let h = a;
      if (typeof a == "function")
        h = a(o);
      else if (typeof a != "object")
        return a;
      if (!h)
        return null;
      const p = Gv(o.breakpoints), d = Object.keys(p);
      let y = p;
      return Object.keys(h).forEach((g) => {
        const v = $y(h[g], o);
        if (v != null)
          if (typeof v == "object")
            if (u[g])
              y = cr(y, e(g, v, o, u));
            else {
              const P = St({
                theme: o
              }, v, (f) => ({
                [g]: f
              }));
              Ay(P, v) ? y[g] = t({
                sx: v,
                theme: o,
                nested: !0
              }) : y = cr(y, P);
            }
          else
            y = cr(y, e(g, v, o, u));
      }), !l && o.modularCssLayers ? {
        "@layer sx": ba(d, y)
      } : ba(d, y);
    }
    return Array.isArray(i) ? i.map(s) : s(i);
  }
  return t;
}
const Vd = Ly();
Vd.filterProps = ["sx"];
const Oy = Vd;
function zy(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Iy = ["breakpoints", "palette", "spacing", "shape"];
function My(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {}
  } = e, l = mo(e, Iy), u = Hv(n), s = Jv(i);
  let a = Xi({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, r),
    spacing: s,
    shape: fe({}, Vv, o)
  }, l);
  return a.applyStyles = zy, a = t.reduce((h, p) => Xi(h, p), a), a.unstable_sxConfig = fe({}, Wd, l == null ? void 0 : l.unstable_sxConfig), a.unstable_sx = function(p) {
    return Oy({
      sx: p,
      theme: this
    });
  }, a;
}
function Dy(e) {
  return Object.keys(e).length === 0;
}
function Ns(e = null) {
  const t = x.useContext(Dr);
  return !t || Dy(t) ? e : t;
}
const Fy = My();
function jy(e = Fy) {
  return Ns(e);
}
function dl(e) {
  const t = jv(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Uy({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = jy(n), i = t && r[t] || r;
  let o = typeof e == "function" ? e(i) : e;
  return i.modularCssLayers && (Array.isArray(o) ? o = o.map((l) => dl(typeof l == "function" ? l(i) : l)) : o = dl(o)), /* @__PURE__ */ S(Fv, {
    styles: o
  });
}
const By = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Hy = By;
let tc = 0;
function Wy(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (tc += 1, n(`mui-${tc}`));
  }, [t]), r;
}
const nc = vl["useId".toString()];
function Vy(e) {
  if (nc !== void 0) {
    const t = nc();
    return e ?? t;
  }
  return Wy(e);
}
const Gy = /* @__PURE__ */ x.createContext(null), Gd = Gy;
function Kd() {
  return x.useContext(Gd);
}
const Ky = typeof Symbol == "function" && Symbol.for, Qy = Ky ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Yy(e, t) {
  return typeof t == "function" ? t(e) : fe({}, e, t);
}
function Xy(e) {
  const {
    children: t,
    theme: n
  } = e, r = Kd(), i = x.useMemo(() => {
    const o = r === null ? n : Yy(r, n);
    return o != null && (o[Qy] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ S(Gd.Provider, {
    value: i,
    children: t
  });
}
const qy = ["value"], Zy = /* @__PURE__ */ x.createContext();
function Jy(e) {
  let {
    value: t
  } = e, n = mo(e, qy);
  return /* @__PURE__ */ S(Zy.Provider, fe({
    value: t ?? !0
  }, n));
}
const by = /* @__PURE__ */ x.createContext(void 0);
function eg({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ S(by.Provider, {
    value: e,
    children: t
  });
}
function tg(e) {
  const t = Ns(), n = Vy() || "", {
    modularCssLayers: r
  } = e;
  let i = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? i = "" : typeof r == "string" ? i = r.replace(/mui(?!\.)/g, i) : i = `@layer ${i};`, Hy(() => {
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
  }, [i, n]), i ? /* @__PURE__ */ S(Uy, {
    styles: i
  }) : null;
}
const rc = {};
function ic(e, t, n, r = !1) {
  return x.useMemo(() => {
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
function ng(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, i = Ns(rc), o = Kd() || rc, l = ic(r, i, n), u = ic(r, o, n, !0), s = l.direction === "rtl", a = tg(l);
  return /* @__PURE__ */ S(Xy, {
    theme: u,
    children: /* @__PURE__ */ S(Dr.Provider, {
      value: l,
      children: /* @__PURE__ */ S(Jy, {
        value: s,
        children: /* @__PURE__ */ R(eg, {
          value: l == null ? void 0 : l.components,
          children: [a, t]
        })
      })
    })
  });
}
const rg = ["theme"];
function ig(e) {
  let {
    theme: t
  } = e, n = mo(e, rg);
  const r = t[Fa];
  let i = r || t;
  return typeof t != "function" && (r && !r.vars ? i = fe({}, r, {
    vars: null
  }) : t && !t.vars && (i = fe({}, t, {
    vars: null
  }))), /* @__PURE__ */ S(ng, fe({}, n, {
    themeId: r ? Fa : void 0,
    theme: i
  }));
}
const og = {
  aiInteraction: "AI interaction",
  syntheticContent: "Synthetic content",
  emotionBiometric: "Emotion / biometric",
  deepfakePublicInterest: "Deepfake (public interest)",
  none: "None"
}, lg = {
  pending: "Pending",
  compliant: "Compliant",
  nonCompliant: "Non-compliant",
  needsReview: "Needs review",
  flagged: "Flagged"
};
function ug(e) {
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
function sg({ record: e }) {
  var t;
  return /* @__PURE__ */ R("div", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ R("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "Governance overview" }),
        /* @__PURE__ */ R("p", { className: "ch-ai-gov__card-meta", children: [
          "Last evaluated: ",
          ug(e.lastEvaluated)
        ] })
      ] }),
      /* @__PURE__ */ S("span", { className: `ch-ai-gov__badge ch-ai-gov__badge--${e.governanceStatus}`, children: lg[e.governanceStatus] })
    ] }),
    /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: "Article 50 categories" }),
      /* @__PURE__ */ S("div", { className: "ch-ai-gov__section-body", children: e.article50Categories.length === 0 ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "No categories assigned." }) : /* @__PURE__ */ S("div", { className: "ch-ai-gov__tags", children: e.article50Categories.map((n) => /* @__PURE__ */ S("span", { className: "ch-ai-gov__tag", children: og[n] ?? n }, n)) }) })
    ] }),
    /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: "Disclosure" }),
      /* @__PURE__ */ R("div", { className: "ch-ai-gov__section-body", children: [
        /* @__PURE__ */ R("p", { className: "ch-ai-gov__card-meta", style: { marginBottom: 6 }, children: [
          "Required: ",
          e.disclosureRequired ? "Yes" : "No"
        ] }),
        /* @__PURE__ */ S("p", { children: (t = e.disclosureText) != null && t.trim() ? e.disclosureText : "No disclosure text set." })
      ] })
    ] }),
    /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: "Confidence" }),
      /* @__PURE__ */ S("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ S("p", { children: e.overallConfidence == null ? "—" : `${Math.round(e.overallConfidence * 100)}%` }) })
    ] }),
    /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: "Evidence count" }),
      /* @__PURE__ */ S("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ S("p", { children: e.evidenceRecords.length }) })
    ] })
  ] });
}
function pl({
  title: e,
  children: t
}) {
  return /* @__PURE__ */ R("section", { className: "c2pa-section", children: [
    /* @__PURE__ */ S("h4", { className: "c2pa-section__title", children: e }),
    /* @__PURE__ */ S("div", { className: "c2pa-section__body", children: t })
  ] });
}
function ag({
  manifest: e,
  loading: t,
  error: n,
  embedded: r = !1
}) {
  var o;
  const i = /* @__PURE__ */ R(Zt, { children: [
    t && /* @__PURE__ */ S("p", { className: "c2pa-muted", children: "Reading Content Credentials…" }),
    !t && n && /* @__PURE__ */ S("p", { className: "c2pa-error", children: n }),
    !t && !n && e && !e.hasManifest && /* @__PURE__ */ S("p", { className: "c2pa-muted", children: "No C2PA Content Credentials found on this asset." }),
    !t && (e == null ? void 0 : e.hasManifest) && /* @__PURE__ */ R(Zt, { children: [
      /* @__PURE__ */ S(pl, { title: "Claim generator", children: /* @__PURE__ */ S("p", { children: e.claimGenerator || "—" }) }),
      e.title ? /* @__PURE__ */ S(pl, { title: "Title", children: /* @__PURE__ */ S("p", { children: e.title }) }) : null,
      /* @__PURE__ */ S(pl, { title: "Ingredients", children: /* @__PURE__ */ R("p", { children: [
        ((o = e.ingredients) == null ? void 0 : o.length) ?? 0,
        " ingredient(s)"
      ] }) })
    ] })
  ] });
  return r ? /* @__PURE__ */ S("div", { className: "c2pa-credentials c2pa-credentials--embedded", children: i }) : /* @__PURE__ */ R("div", { className: "c2pa-credentials", children: [
    /* @__PURE__ */ R("header", { className: "c2pa-credentials__header", children: [
      /* @__PURE__ */ S("p", { className: "c2pa-credentials__eyebrow", children: "Content authenticity" }),
      /* @__PURE__ */ S("h3", { className: "c2pa-credentials__title", children: "Content Credentials" })
    ] }),
    /* @__PURE__ */ S("div", { className: "c2pa-credentials__body", children: i })
  ] });
}
function cg(e) {
  const [t, n] = x.useState(!0), [r, i] = x.useState(null), [o, l] = x.useState(null), u = () => {
    n(!0), i(null), window.setTimeout(() => {
      l({
        hasManifest: !1,
        claimGenerator: void 0,
        ingredients: [],
        assertions: []
      }), i(
        "C2PACredentialsWidget/useC2PAManifest is a placeholder — the real widget was not found in this repo."
      ), n(!1);
    }, 200);
  };
  return x.useEffect(() => {
    u();
  }, [e]), {
    manifest: o,
    loading: t,
    error: r,
    hasCredentials: !!(o != null && o.hasManifest),
    refetch: u
  };
}
function Ce({
  title: e,
  children: t
}) {
  return /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
    /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: e }),
    /* @__PURE__ */ S("div", { className: "ch-ai-gov__section-body", children: t })
  ] });
}
function Qd({
  evidence: e,
  mode: t,
  source: n,
  onCaptured: r
}) {
  const { manifest: i, loading: o, error: l, hasCredentials: u } = cg(
    t === "collector" ? n ?? null : null
  ), s = x.useRef(!1);
  if (x.useEffect(() => {
    if (t !== "collector" || !r || o || s.current || !i)
      return;
    s.current = !0;
    const a = {
      hasManifest: !!i.hasManifest,
      claimGenerator: i.claimGenerator,
      ingredients: i.ingredients,
      raw: i.raw ?? i
    };
    r({
      evidenceSource: "c2pa",
      confidenceScore: null,
      verificationStatus: u ? "verified" : "notApplicable",
      evidenceData: a
    });
  }, [t, r, o, i, u]), t === "stored" && e) {
    const a = e.evidenceData ?? {};
    return /* @__PURE__ */ R(Zt, { children: [
      /* @__PURE__ */ S(Ce, { title: "Manifest", children: /* @__PURE__ */ S("p", { children: a.hasManifest ? "Present" : "Not present" }) }),
      a.claimGenerator ? /* @__PURE__ */ S(Ce, { title: "Claim generator", children: /* @__PURE__ */ S("p", { children: a.claimGenerator }) }) : null
    ] });
  }
  return /* @__PURE__ */ S(
    ag,
    {
      embedded: !0,
      manifest: i,
      loading: o,
      error: l
    }
  );
}
function du({
  evidence: e,
  mode: t,
  result: n,
  loading: r,
  error: i,
  onRun: o
}) {
  if (t === "stored" && e) {
    const l = e.evidenceData ?? {};
    return /* @__PURE__ */ R(Zt, { children: [
      /* @__PURE__ */ S(Ce, { title: "Model", children: /* @__PURE__ */ S("p", { children: l.modelUsed || "—" }) }),
      /* @__PURE__ */ S(Ce, { title: "Confidence", children: /* @__PURE__ */ S("p", { children: typeof l.confidenceScore == "number" ? `${Math.round(l.confidenceScore * 100)}%` : "—" }) }),
      /* @__PURE__ */ S(Ce, { title: "Labels", children: /* @__PURE__ */ S("p", { children: (l.labels ?? []).join(", ") || "—" }) })
    ] });
  }
  return t === "collector" ? /* @__PURE__ */ R("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ S("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ R("div", { children: [
      /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "AI detection" }),
      /* @__PURE__ */ S("p", { className: "ch-ai-gov__card-meta", children: "Stub detector — replace with CodeMie when endpoint/auth is confirmed." })
    ] }) }),
    /* @__PURE__ */ S(Ce, { title: "Action", children: /* @__PURE__ */ S(
      "button",
      {
        type: "button",
        className: "ch-ai-gov__primary-button",
        onClick: o,
        disabled: r,
        children: r ? "Running detection…" : "Run AI detection"
      }
    ) }),
    i ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: i }) : null
  ] }) : n ? /* @__PURE__ */ R("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ S("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "Latest detection result" }) }),
    /* @__PURE__ */ S(Ce, { title: "Model", children: /* @__PURE__ */ S("p", { children: n.modelUsed }) }),
    /* @__PURE__ */ S(Ce, { title: "Confidence", children: /* @__PURE__ */ S("p", { children: `${Math.round(n.confidenceScore * 100)}%` }) }),
    /* @__PURE__ */ S(Ce, { title: "Labels", children: /* @__PURE__ */ S("p", { children: n.labels.join(", ") || "—" }) })
  ] }) : /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "No detection result yet." });
}
function Yd({ evidence: e, mode: t, onSubmit: n }) {
  const [r, i] = x.useState(""), [o, l] = x.useState(""), [u, s] = x.useState(!1), [a, h] = x.useState(!1), [p, d] = x.useState(null);
  if (t === "stored" && e) {
    const g = e.evidenceData ?? {};
    return /* @__PURE__ */ R(Zt, { children: [
      /* @__PURE__ */ S(Ce, { title: "Reviewer", children: /* @__PURE__ */ S("p", { children: g.reviewerName || "—" }) }),
      /* @__PURE__ */ S(Ce, { title: "Note", children: /* @__PURE__ */ S("p", { children: g.note || "—" }) }),
      /* @__PURE__ */ S(Ce, { title: "Attestation", children: /* @__PURE__ */ S("p", { children: g.attestationConfirmed ? "Confirmed" : "Not confirmed" }) })
    ] });
  }
  return /* @__PURE__ */ R("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ S("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ R("div", { children: [
      /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "Manual attestation" }),
      /* @__PURE__ */ S("p", { className: "ch-ai-gov__card-meta", children: "Record a human review of this asset." })
    ] }) }),
    /* @__PURE__ */ R("form", { onSubmit: async (g) => {
      if (g.preventDefault(), !!n) {
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
        } catch (v) {
          d(v instanceof Error ? v.message : "Failed to save attestation");
        } finally {
          h(!1);
        }
      }
    }, children: [
      /* @__PURE__ */ R(Ce, { title: "Reviewer details", children: [
        /* @__PURE__ */ R("div", { className: "ch-ai-gov__field", children: [
          /* @__PURE__ */ S("label", { htmlFor: "gov-reviewer-name", children: "Reviewer name" }),
          /* @__PURE__ */ S(
            "input",
            {
              id: "gov-reviewer-name",
              type: "text",
              value: r,
              onChange: (g) => i(g.target.value),
              placeholder: "Full name"
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: "ch-ai-gov__field", style: { marginTop: 8 }, children: [
          /* @__PURE__ */ S("label", { htmlFor: "gov-attestation-note", children: "Note" }),
          /* @__PURE__ */ S(
            "textarea",
            {
              id: "gov-attestation-note",
              value: o,
              onChange: (g) => l(g.target.value),
              placeholder: "Review notes"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S(Ce, { title: "Confirmation", children: /* @__PURE__ */ R("label", { className: "ch-ai-gov__checkbox", children: [
        /* @__PURE__ */ S(
          "input",
          {
            type: "checkbox",
            checked: u,
            onChange: (g) => s(g.target.checked)
          }
        ),
        /* @__PURE__ */ S("span", { children: "I attest that I have reviewed this content for AI governance requirements." })
      ] }) }),
      p ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: p }) : null,
      /* @__PURE__ */ S("button", { type: "submit", className: "ch-ai-gov__primary-button", disabled: a, children: a ? "Saving…" : "Submit attestation" })
    ] })
  ] });
}
function fg(e) {
  return `ch-ai-gov__badge ch-ai-gov__badge--${e}`;
}
function dg(e) {
  try {
    return new Date(e).toLocaleString(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch {
    return e;
  }
}
function pg({ evidence: e }) {
  return /* @__PURE__ */ R("article", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ R("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: e.evidenceType }),
        /* @__PURE__ */ R("p", { className: "ch-ai-gov__card-meta", children: [
          e.evidenceSource,
          " · ",
          dg(e.capturedAt)
        ] })
      ] }),
      /* @__PURE__ */ S("span", { className: fg(e.verificationStatus), children: e.verificationStatus })
    ] }),
    e.evidenceType === "c2paManifest" && /* @__PURE__ */ S(Qd, { evidence: e, mode: "stored" }),
    e.evidenceType === "aiDetectionResult" && /* @__PURE__ */ S(du, { evidence: e, mode: "stored" }),
    e.evidenceType === "manualAttestation" && /* @__PURE__ */ S(Yd, { evidence: e, mode: "stored" })
  ] });
}
const mg = {
  async detect() {
    return await new Promise((e) => setTimeout(e, 800)), {
      modelUsed: "stub-detector",
      confidenceScore: 0.5,
      labels: ["unverified-stub-result"]
    };
  }
};
function hg() {
  const [e, t] = x.useState(null), [n, r] = x.useState(!1), [i, o] = x.useState(null), l = x.useCallback(async (u) => {
    r(!0), o(null);
    try {
      const s = await mg.detect(u);
      return t(s), s;
    } catch (s) {
      return o(s instanceof Error ? s.message : "Detection failed"), null;
    } finally {
      r(!1);
    }
  }, []);
  return { result: e, loading: n, error: i, runDetection: l };
}
function vg({ record: e, addEvidence: t, assetSource: n }) {
  const { result: r, loading: i, error: o, runDetection: l } = hg(), [u, s] = x.useState(null), a = e.evidenceRecords.some((y) => y.evidenceType === "c2paManifest"), h = x.useCallback(
    async (y) => {
      if (!a)
        try {
          await t({
            evidenceType: "c2paManifest",
            ...y
          });
        } catch (g) {
          s(g instanceof Error ? g.message : "Failed to save C2PA evidence");
        }
    },
    [t, a]
  ), p = async () => {
    s(null);
    let y;
    try {
      if (n instanceof Blob)
        y = n;
      else if (typeof n == "string" && n.trim()) {
        const v = await fetch(n);
        if (!v.ok)
          throw new Error(`Could not fetch asset for detection (HTTP ${v.status})`);
        y = await v.blob();
      } else
        y = new Blob(["stub-asset"], { type: "application/octet-stream" });
    } catch (v) {
      s(v instanceof Error ? v.message : "Failed to load asset blob");
      return;
    }
    const g = await l(y);
    if (g)
      try {
        await t({
          evidenceType: "aiDetectionResult",
          evidenceSource: g.modelUsed,
          confidenceScore: g.confidenceScore,
          verificationStatus: "unverified",
          evidenceData: {
            modelUsed: g.modelUsed,
            confidenceScore: g.confidenceScore,
            labels: g.labels,
            rawResponse: g.rawResponse
          }
        });
      } catch (v) {
        s(v instanceof Error ? v.message : "Failed to save AI detection evidence");
      }
  }, d = async (y) => {
    s(null), await t({
      evidenceType: "manualAttestation",
      ...y
    });
  };
  return /* @__PURE__ */ R("div", { style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    u ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: u }) : null,
    /* @__PURE__ */ R("section", { children: [
      /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", style: { marginBottom: 8 }, children: "Collected evidence" }),
      e.evidenceRecords.length === 0 ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "No evidence records yet." }) : /* @__PURE__ */ S("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: e.evidenceRecords.map((y) => /* @__PURE__ */ S(pg, { evidence: y }, y.id)) })
    ] }),
    /* @__PURE__ */ R("section", { children: [
      /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", style: { marginBottom: 8 }, children: "Collectors" }),
      /* @__PURE__ */ R("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: [
        /* @__PURE__ */ R("article", { className: "ch-ai-gov__card", children: [
          /* @__PURE__ */ S("div", { className: "ch-ai-gov__card-header", children: /* @__PURE__ */ R("div", { children: [
            /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "C2PA Content Credentials" }),
            /* @__PURE__ */ R("p", { className: "ch-ai-gov__card-meta", children: [
              "Runs automatically on mount. ",
              a ? "Already saved on this record." : ""
            ] })
          ] }) }),
          !a && /* @__PURE__ */ S(
            Qd,
            {
              mode: "collector",
              source: n ?? null,
              onCaptured: h
            }
          )
        ] }),
        /* @__PURE__ */ S(
          du,
          {
            mode: "collector",
            loading: i,
            error: o,
            onRun: () => {
              p();
            }
          }
        ),
        r ? /* @__PURE__ */ S(du, { mode: "result", result: r }) : null,
        /* @__PURE__ */ S(Yd, { mode: "collector", onSubmit: d })
      ] })
    ] })
  ] });
}
function yg(e, t) {
  if (!t)
    return { satisfied: !1, missingTypes: [] };
  const n = new Set(e.map((i) => i.evidenceType)), r = t.requiredEvidenceTypes.filter((i) => !n.has(i));
  return {
    satisfied: r.length === 0,
    missingTypes: r
  };
}
const oc = {
  c2paManifest: "C2PA manifest",
  aiDetectionResult: "AI detection result",
  manualAttestation: "Manual attestation"
};
function li(e, t) {
  if (!e)
    return;
  if (t in e)
    return pu(e[t]);
  const n = Object.keys(e).find((r) => r.toLowerCase() === t.toLowerCase());
  return n ? pu(e[n]) : void 0;
}
function pu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value"])
    if (n in t)
      return pu(t[n]);
  return e;
}
function mu(e, t = "") {
  return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function lc(e) {
  return Array.isArray(e) ? e.map((t) => mu(t)).filter(Boolean) : [];
}
function gg(e) {
  const t = e.systemProperties, n = (t == null ? void 0 : t.id) ?? e.id;
  if (typeof n != "number")
    return null;
  const r = e.properties ?? {};
  return {
    id: n,
    profileName: mu(li(r, "profileName"), `Profile ${n}`),
    applicableArticle50Categories: lc(
      li(r, "applicableArticle50Categories")
    ),
    requiredEvidenceTypes: lc(
      li(r, "requiredEvidenceTypes")
    ),
    disclosureTemplate: mu(li(r, "disclosureTemplate"))
  };
}
function Sg({ record: e, client: t }) {
  const [n, r] = x.useState(null), [i, o] = x.useState(!1), [l, u] = x.useState(null);
  x.useEffect(() => {
    let d = !1;
    async function y() {
      var g;
      if (!e.complianceProfileId) {
        r(null), u(null);
        return;
      }
      if (!((g = t == null ? void 0 : t.raw) != null && g.getAsync)) {
        u("Content Hub client is not available to load the compliance profile.");
        return;
      }
      o(!0), u(null);
      try {
        const v = await t.raw.getAsync(
          `/api/entities/${e.complianceProfileId}`
        );
        if (d)
          return;
        if (!v.isSuccessStatusCode || !v.content) {
          const P = v.statusCode ?? "unknown";
          u(
            `Failed to load EPAM.ComplianceProfile ${e.complianceProfileId} (HTTP ${P}). Confirm the entity definition exists and the relation is set.`
          ), r(null);
          return;
        }
        r(gg(v.content));
      } catch (v) {
        d || (u(v instanceof Error ? v.message : "Failed to load compliance profile"), r(null));
      } finally {
        d || o(!1);
      }
    }
    return y(), () => {
      d = !0;
    };
  }, [e.complianceProfileId, t]);
  const { satisfied: s, missingTypes: a } = yg(e.evidenceRecords, n), h = new Set(e.evidenceRecords.map((d) => d.evidenceType));
  if (!e.complianceProfileId)
    return /* @__PURE__ */ R("div", { className: "ch-ai-gov__card", children: [
      /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: "Compliance checklist" }),
      /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "No compliance profile is assigned to this governance record. Assign an EPAM.ComplianceProfile via the complianceProfile relation to enable the checklist." })
    ] });
  if (i)
    return /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "Loading compliance profile…" });
  if (l)
    return /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: l });
  if (!n)
    return /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "Compliance profile could not be mapped." });
  const p = n.requiredEvidenceTypes;
  return /* @__PURE__ */ R("div", { className: "ch-ai-gov__card", children: [
    /* @__PURE__ */ R("div", { className: "ch-ai-gov__card-header", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ S("h3", { className: "ch-ai-gov__card-title", children: n.profileName }),
        /* @__PURE__ */ S("p", { className: "ch-ai-gov__card-meta", children: "Presence checklist only — no confidence scoring." })
      ] }),
      /* @__PURE__ */ S(
        "span",
        {
          className: `ch-ai-gov__badge ${s ? "ch-ai-gov__badge--compliant" : "ch-ai-gov__badge--needsReview"}`,
          children: s ? "Satisfied" : "Incomplete"
        }
      )
    ] }),
    p.length === 0 ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "This profile has no required evidence types." }) : /* @__PURE__ */ S("ul", { className: "ch-ai-gov__checklist", children: p.map((d) => {
      const y = h.has(d);
      return /* @__PURE__ */ R(
        "li",
        {
          className: `ch-ai-gov__checklist-item ${y ? "ch-ai-gov__checklist-item--ok" : "ch-ai-gov__checklist-item--missing"}`,
          children: [
            /* @__PURE__ */ S("span", { "aria-hidden": "true", children: y ? "✓" : "○" }),
            /* @__PURE__ */ S("span", { children: oc[d] ?? d })
          ]
        },
        d
      );
    }) }),
    !s && a.length > 0 ? /* @__PURE__ */ R("p", { className: "ch-ai-gov__muted", children: [
      "Missing: ",
      a.map((d) => oc[d] ?? d).join(", ")
    ] }) : null,
    n.disclosureTemplate ? /* @__PURE__ */ R("section", { className: "ch-ai-gov__section", children: [
      /* @__PURE__ */ S("h4", { className: "ch-ai-gov__section-title", children: "Disclosure template" }),
      /* @__PURE__ */ S("div", { className: "ch-ai-gov__section-body", children: /* @__PURE__ */ S("p", { children: n.disclosureTemplate }) })
    ] }) : null
  ] });
}
function hu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value"])
    if (n in t)
      return hu(t[n]);
  return e;
}
function ui(e, t) {
  if (!e)
    return;
  if (t in e)
    return hu(e[t]);
  const n = Object.keys(e).find((r) => r.toLowerCase() === t.toLowerCase());
  return n ? hu(e[n]) : void 0;
}
function si(e, t = "") {
  return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function wg(e) {
  const t = e.systemProperties, n = (t == null ? void 0 : t.id) ?? e.id;
  return typeof n == "number" && Number.isFinite(n) ? n : null;
}
function kg(e) {
  const t = wg(e);
  if (t == null)
    return null;
  const n = e.properties ?? {};
  return {
    id: t,
    eventType: si(ui(n, "eventType"), "evidenceAdded"),
    eventDetail: si(ui(n, "eventDetail")),
    occurredAt: si(ui(n, "occurredAt"), (/* @__PURE__ */ new Date()).toISOString()),
    triggeredBy: si(ui(n, "triggeredBy"), "system")
  };
}
function _g(e) {
  if (Array.isArray(e))
    return e;
  if (e && typeof e == "object") {
    const t = e;
    if (Array.isArray(t.items))
      return t.items;
  }
  return [];
}
function Cg(e) {
  try {
    return new Date(e).toLocaleString(void 0, {
      dateStyle: "medium",
      timeStyle: "short"
    });
  } catch {
    return e;
  }
}
function Eg({ record: e, client: t }) {
  const [n, r] = x.useState([]), [i, o] = x.useState(!0), [l, u] = x.useState(null);
  return x.useEffect(() => {
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
          const g = d.statusCode ?? "unknown";
          u(
            `Audit trail query failed (HTTP ${g}). Confirm EPAM.GovernanceAuditEntry and the governanceRecord relation exist.`
          ), r([]);
          return;
        }
        const y = _g(d.content).map(kg).filter((g) => g != null).sort((g, v) => Date.parse(v.occurredAt) - Date.parse(g.occurredAt));
        r(y);
      } catch (p) {
        s || (u(p instanceof Error ? p.message : "Failed to load audit trail"), r([]));
      } finally {
        s || o(!1);
      }
    }
    return a(), () => {
      s = !0;
    };
  }, [e.id, e.evidenceRecords.length, e.governanceStatus, t]), i ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "Loading audit trail…" }) : l ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: l }) : n.length === 0 ? /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "No audit entries yet." }) : /* @__PURE__ */ S("ul", { className: "ch-ai-gov__timeline", children: n.map((s) => /* @__PURE__ */ R("li", { className: "ch-ai-gov__timeline-item", children: [
    /* @__PURE__ */ S("p", { className: "ch-ai-gov__timeline-type", children: s.eventType }),
    /* @__PURE__ */ S("p", { className: "ch-ai-gov__timeline-detail", children: s.eventDetail }),
    /* @__PURE__ */ R("p", { className: "ch-ai-gov__timeline-meta", children: [
      Cg(s.occurredAt),
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
    return vu(n);
  const r = Object.keys(e).find((i) => i.toLowerCase() === t.toLowerCase());
  return r ? vu(e[r]) : void 0;
}
function vu(e) {
  if (e == null || typeof e != "object" || Array.isArray(e))
    return e;
  const t = e;
  for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en-us", "en"])
    if (n in t)
      return vu(t[n]);
  return e;
}
function Tt(e, t = "") {
  return e == null ? t : typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : t;
}
function Xd(e) {
  if (e == null || e === "")
    return null;
  const t = typeof e == "number" ? e : Number(e);
  return Number.isFinite(t) ? t : null;
}
function xg(e, t = !1) {
  return typeof e == "boolean" ? e : e === "true" || e === 1 ? !0 : e === "false" || e === 0 ? !1 : t;
}
function Pg(e) {
  return Array.isArray(e) ? e.map((t) => Tt(t)).filter(Boolean) : [];
}
function ft(e) {
  var n;
  const t = ((n = e == null ? void 0 : e.systemProperties) == null ? void 0 : n.id) ?? (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.entityId);
  return typeof t == "number" && Number.isFinite(t) ? t : null;
}
function Ng(e) {
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  return e ?? null;
}
function Tg(e) {
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
    confidenceScore: Xd(He(n, "confidenceScore")),
    verificationStatus: i,
    evidenceData: Ng(He(n, "evidenceData"))
  };
}
function qd(e, t = []) {
  const n = (e == null ? void 0 : e.properties) ?? {}, r = (e == null ? void 0 : e.relations) ?? {}, i = ft(e) ?? 0, o = r.complianceProfile ?? r.ComplianceProfile;
  let l = null;
  return Array.isArray(o) && o[0] != null ? l = ft(o[0]) ?? (Number(o[0]) || null) : o && typeof o == "object" && "parent" in o && (l = null), {
    id: i,
    governanceStatus: Tt(He(n, "governanceStatus"), "pending"),
    article50Categories: Pg(He(n, "article50Categories")),
    disclosureRequired: xg(He(n, "disclosureRequired"), !1),
    disclosureText: Tt(He(n, "disclosureText")),
    overallConfidence: Xd(He(n, "overallConfidence")),
    lastEvaluated: (() => {
      const u = He(n, "lastEvaluated");
      return u == null ? null : Tt(u);
    })(),
    evidenceRecords: t,
    complianceProfileId: l
  };
}
function Rg(e) {
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
async function Zd(e, t) {
  var o;
  if (!((o = e.raw) != null && o.getAsync))
    return { ok: !1, status: 0, items: [] };
  const n = `/api/entities/query?query=${encodeURIComponent(t)}`, r = await e.raw.getAsync(n), i = r.statusCode ?? (r.isSuccessStatusCode ? 200 : 500);
  return r.isSuccessStatusCode ? { ok: !0, status: i, items: Rg(r.content) } : { ok: !1, status: i, items: [] };
}
async function yu(e, t) {
  var r;
  if (!((r = e.raw) != null && r.getAsync))
    return null;
  const n = await e.raw.getAsync(`/api/entities/${t}`);
  return n.isSuccessStatusCode ? n.content ?? null : null;
}
async function ml(e, t, n) {
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
async function uc(e, t, n, r) {
  var l, u, s;
  if (!((l = e.raw) != null && l.putAsync))
    return !1;
  const i = await yu(e, t);
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
async function hl(e, t, n, r) {
  var u;
  if (!((u = e.raw) != null && u.postAsync))
    return;
  const i = `/api/entities/${t}/relations/${n}`, o = { parent: { href: `/api/entities/${r}` } };
  (await e.raw.postAsync(i, o)).isSuccessStatusCode || e.raw.putAsync && await e.raw.putAsync(i, {
    ...o,
    self: { href: i }
  });
}
async function Ag(e, t) {
  const n = await Zd(
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
  return n.items.map(Tg).filter((r) => r != null);
}
async function $g(e, t) {
  var l, u, s, a;
  const n = qd(t).complianceProfileId;
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
          const y = String(p.parent.href).match(/\/entities\/(\d+)/);
          if (y)
            return Number(y[1]);
        }
        if (Array.isArray(p.parents) && ((a = p.parents[0]) != null && a.href)) {
          const y = String(p.parents[0].href).match(/\/entities\/(\d+)/);
          if (y)
            return Number(y[1]);
        }
        const d = ft(p);
        if (d != null)
          return d;
      }
    } catch {
    }
  return null;
}
function Lg(e, t, n = "system") {
  const [r, i] = x.useState(null), [o, l] = x.useState(!0), [u, s] = x.useState(null), a = x.useCallback(async () => {
    var y, g;
    if (!(e != null && e.id)) {
      i(null), l(!1), s("No asset entity in context.");
      return;
    }
    if (!((y = t == null ? void 0 : t.raw) != null && y.getAsync) || !((g = t == null ? void 0 : t.raw) != null && g.postAsync)) {
      i(null), l(!1), s("Content Hub client is not available on the component context.");
      return;
    }
    l(!0), s(null);
    try {
      const v = await Zd(
        t,
        `Definition.Name=='EPAM.GovernanceRecord' AND Parent('relatedContent').Id==${e.id}`
      );
      if (!v.ok && (v.status === 404 || v.status === 400))
        throw new Error(
          `Governance record query failed (HTTP ${v.status}). Confirm EPAM.GovernanceRecord (and relatedContent → M.Asset) exists in this CH instance. Schema prerequisite — not a UI bug.`
        );
      let P = null;
      if (v.ok && v.items.length > 0) {
        const C = ft(v.items[0]);
        P = C != null ? await yu(t, C) ?? v.items[0] : v.items[0];
      } else {
        const C = await ml(t, "EPAM.GovernanceRecord", {
          governanceStatus: "pending",
          article50Categories: [],
          disclosureRequired: !1,
          disclosureText: ""
        });
        if (!C.ok || !C.entity)
          throw new Error(
            C.error ?? `Failed to create governance record (HTTP ${C.status}). If this is a 404/schema validation error, EPAM.GovernanceRecord may not exist yet.`
          );
        const E = ft(C.entity);
        if (E == null)
          throw new Error("Created governance record but response did not include an id.");
        await hl(t, E, "relatedContent", e.id), P = await yu(t, E) ?? C.entity;
      }
      const f = ft(P);
      if (f == null)
        throw new Error("Governance record is missing an id.");
      const c = await Ag(t, f), m = await $g(t, P), w = qd(P, c);
      w.complianceProfileId = m, i(w);
    } catch (v) {
      console.error("useGovernanceRecord error", v), s(v instanceof Error ? v.message : "Unknown error"), i(null);
    } finally {
      l(!1);
    }
  }, [e, t]);
  x.useEffect(() => {
    a();
  }, [a]);
  const h = x.useCallback(
    async (y, g) => {
      var f;
      if (!r || !((f = t == null ? void 0 : t.raw) != null && f.postAsync))
        return;
      const v = await ml(t, "EPAM.GovernanceAuditEntry", {
        eventType: y,
        eventDetail: g,
        occurredAt: (/* @__PURE__ */ new Date()).toISOString(),
        // ASSUMPTION: no project-wide current-user helper exists yet; callers pass currentUser.
        triggeredBy: n || "system"
      });
      if (!v.ok || !v.entity) {
        console.error(
          "appendAuditEntry failed",
          v.error ?? `HTTP ${v.status}`
        );
        return;
      }
      const P = ft(v.entity);
      P != null && await hl(t, P, "governanceRecord", r.id);
    },
    [r, t, n]
  ), p = x.useCallback(
    async (y) => {
      var P;
      if (!r || !((P = t == null ? void 0 : t.raw) != null && P.postAsync))
        return;
      const g = await ml(t, "EPAM.EvidenceRecord", {
        evidenceType: y.evidenceType,
        evidenceSource: y.evidenceSource,
        capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
        confidenceScore: y.confidenceScore,
        verificationStatus: y.verificationStatus,
        evidenceData: y.evidenceData
      });
      if (!g.ok || !g.entity)
        throw new Error(
          g.error ?? `Failed to add evidence (HTTP ${g.status}). Confirm EPAM.EvidenceRecord exists and property types match the schema.`
        );
      const v = ft(g.entity);
      v != null && await hl(t, v, "governanceRecord", r.id), await h(
        "evidenceAdded",
        `Added ${y.evidenceType} evidence from ${y.evidenceSource} (${y.verificationStatus})`
      ), y.verificationStatus === "invalid" && r.governanceStatus !== "flagged" && (await uc(t, r.id, "EPAM.GovernanceRecord", {
        governanceStatus: "flagged"
      }), await h(
        "statusChanged",
        `Status changed from ${r.governanceStatus} to flagged due to invalid evidence`
      )), await a();
    },
    [r, t, h, a]
  ), d = x.useCallback(
    async (y, g) => {
      if (!r || !t)
        return;
      const v = r.governanceStatus;
      if (v === y)
        return;
      if (!await uc(t, r.id, "EPAM.GovernanceRecord", {
        governanceStatus: y,
        lastEvaluated: (/* @__PURE__ */ new Date()).toISOString()
      }))
        throw new Error(`Failed to update governanceStatus to ${y}`);
      await h(
        "statusChanged",
        g ?? `Status changed from ${v} to ${y}`
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
const Og = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Evidence" },
  { id: "compliance", label: "Compliance" },
  { id: "audit", label: "Audit trail" }
];
function zg({
  entity: e,
  client: t,
  currentUser: n,
  assetSource: r
}) {
  const [i, o] = x.useState("overview"), { record: l, loading: u, error: s, addEvidence: a, refetch: h } = Lg(
    e,
    t,
    n
  ), p = x.useMemo(() => l ? `${e.identifier || `Asset #${e.id}`} · record #${l.id}` : e.identifier || `Asset #${e.id}`, [e, l]);
  return /* @__PURE__ */ R("div", { className: "ch-ai-gov", children: [
    /* @__PURE__ */ R("header", { className: "ch-ai-gov__header", children: [
      /* @__PURE__ */ R("div", { children: [
        /* @__PURE__ */ S("p", { className: "ch-ai-gov__eyebrow", children: "AI Act · Article 50" }),
        /* @__PURE__ */ S("h2", { className: "ch-ai-gov__title", children: "AI Governance" }),
        /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: p })
      ] }),
      /* @__PURE__ */ S("nav", { className: "ch-ai-gov__tabs", "aria-label": "Governance tabs", children: Og.map((d) => /* @__PURE__ */ S(
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
    /* @__PURE__ */ R("div", { className: "ch-ai-gov__body", children: [
      u && /* @__PURE__ */ S("p", { className: "ch-ai-gov__muted", children: "Loading governance record…" }),
      !u && s && /* @__PURE__ */ R(Zt, { children: [
        /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: s }),
        /* @__PURE__ */ S("button", { type: "button", className: "ch-ai-gov__secondary-button", onClick: () => void h(), children: "Retry" })
      ] }),
      !u && !s && l && /* @__PURE__ */ R(Zt, { children: [
        i === "overview" && /* @__PURE__ */ S(sg, { record: l }),
        i === "evidence" && /* @__PURE__ */ S(
          vg,
          {
            record: l,
            addEvidence: a,
            assetSource: r
          }
        ),
        i === "compliance" && /* @__PURE__ */ S(Sg, { record: l, client: t }),
        i === "audit" && /* @__PURE__ */ S(Eg, { record: l, client: t })
      ] })
    ] })
  ] });
}
function Ig(e) {
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
function Mg(e) {
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
function Dg(e) {
  var n, r, i, o, l;
  const t = Ig(e);
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
function Fg({
  client: e,
  entity: t,
  currentUser: n
}) {
  const r = x.useMemo(() => Dg(t), [t]), i = x.useMemo(() => Mg(t), [t]);
  return r ? e != null && e.raw ? /* @__PURE__ */ S(
    zg,
    {
      entity: r,
      client: e,
      currentUser: n,
      assetSource: i
    }
  ) : /* @__PURE__ */ S("div", { className: "ch-ai-gov", children: /* @__PURE__ */ S("div", { className: "ch-ai-gov__body", children: /* @__PURE__ */ R("p", { className: "ch-ai-gov__error", children: [
    "Content Hub client is missing from the external component context. Governance persistence requires ",
    /* @__PURE__ */ S("code", { children: "context.client" }),
    "."
  ] }) }) }) : /* @__PURE__ */ S("div", { className: "ch-ai-gov", children: /* @__PURE__ */ S("div", { className: "ch-ai-gov__body", children: /* @__PURE__ */ S("p", { className: "ch-ai-gov__error", children: "No asset entity is available in the component context. Open this panel on an M.Asset detail page." }) }) });
}
function jg(e) {
  var n, r, i, o, l, u, s;
  const t = [
    (n = e == null ? void 0 : e.user) == null ? void 0 : n.username,
    (r = e == null ? void 0 : e.user) == null ? void 0 : r.userName,
    (i = e == null ? void 0 : e.user) == null ? void 0 : i.email,
    (o = e == null ? void 0 : e.currentUser) == null ? void 0 : o.username,
    (l = e == null ? void 0 : e.currentUser) == null ? void 0 : l.userName,
    (u = e == null ? void 0 : e.options) == null ? void 0 : u.currentUser,
    (s = e == null ? void 0 : e.options) == null ? void 0 : s.username
  ];
  for (const a of t)
    if (typeof a == "string" && a.trim())
      return a.trim();
  return "system";
}
function Ug(e) {
  const t = kd(e);
  return console.log("%c[AIGovernancePanel] Starting up...", "color: #0B5CAB; font-weight: bold"), {
    render(n) {
      console.log(
        "%c[AIGovernancePanel] context keys:",
        "color: #0B5CAB; font-weight: bold",
        Object.keys(n ?? {})
      ), t.render(
        /* @__PURE__ */ S(ig, { theme: n == null ? void 0 : n.theme, children: /* @__PURE__ */ S(
          Fg,
          {
            client: (n == null ? void 0 : n.client) ?? null,
            entity: n == null ? void 0 : n.entity,
            culture: n == null ? void 0 : n.culture,
            currentUser: jg(n)
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
  Ug as default
};
