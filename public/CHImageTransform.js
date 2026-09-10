(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".ch-image-transform{display:flex;flex-direction:column;width:100%;min-width:0;min-height:100%;box-sizing:border-box;overflow:auto;color:#102a43;background:#f5f8fb;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.ch-image-transform *,.ch-image-transform *:before,.ch-image-transform *:after{box-sizing:border-box}.ch-image-transform--center{align-items:center;justify-content:center;gap:10px;color:#486581}.ch-image-transform__header{padding:14px;border-bottom:1px solid #d9e2ec;background:#fff}.ch-image-transform__header h2,.ch-image-transform__header p{margin:0}.ch-image-transform__header h2{font-size:17px}.ch-image-transform__images{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:14px}.ch-image-transform__images--split{grid-template-columns:repeat(2,minmax(0,1fr))}.ch-image-transform__images figure{position:relative;min-width:0;margin:0;overflow:hidden;border:1px solid #d9e2ec;border-radius:9px;background:#e9eef3}.ch-image-transform__images figure>span{position:absolute;z-index:1;top:8px;left:8px;padding:3px 7px;border-radius:999px;color:#fff;background:rgb(16 42 67 / 82%);font-size:10px;font-weight:700;text-transform:uppercase}.ch-image-transform__images img{display:block;width:100%;height:clamp(180px,38vh,420px);object-fit:contain}.ch-image-transform__controls{display:grid;gap:10px;padding:0 14px 18px}.ch-image-transform__controls label{font-size:12px;font-weight:700}.ch-image-transform__controls textarea{width:100%;resize:vertical;min-height:88px;padding:10px;border:1px solid #bcccdc;border-radius:8px;color:#102a43;background:#fff;font:inherit;font-size:13px;line-height:1.45}.ch-image-transform__controls textarea:focus{outline:2px solid #9ac7f1;border-color:#0b5cab}.ch-image-transform__working{display:flex;align-items:center;gap:9px;color:#486581;font-size:12px}.ch-image-transform__spinner{display:inline-block;flex:0 0 auto;width:22px;height:22px;border:3px solid #d9e2ec;border-top-color:#0b5cab;border-radius:50%;animation:ch-image-transform-spin .8s linear infinite}.ch-image-transform__actions{display:flex;flex-wrap:wrap;gap:8px}.ch-image-transform__button{flex:1 1 170px;min-height:38px;padding:9px 13px;border:1px solid #0b5cab;border-radius:8px;color:#fff;background:#0b5cab;font-size:12px;font-weight:700;cursor:pointer}.ch-image-transform__button--secondary{color:#0b5cab;background:#fff}.ch-image-transform__button:disabled{opacity:.55;cursor:not-allowed}.ch-image-transform__notice{margin:14px;padding:10px 12px;border:1px solid #bcccdc;border-radius:8px;background:#fff;font-size:12px;line-height:1.45}.ch-image-transform__controls .ch-image-transform__notice{margin:0}.ch-image-transform__notice--error{border-color:#f9b8b8;color:#ab091e;background:#fff5f5}.ch-image-transform__notice--success{border-color:#9adbad;color:#0f6b35;background:#f0fff4}@keyframes ch-image-transform-spin{to{transform:rotate(360deg)}}@media (max-width: 520px){.ch-image-transform__images--split{grid-template-columns:minmax(0,1fr)}.ch-image-transform__images img{height:220px}}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
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
var Za = { exports: {} }, Qo = {}, Ja = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr = Symbol.for("react.element"), Dd = Symbol.for("react.portal"), Ud = Symbol.for("react.fragment"), Bd = Symbol.for("react.strict_mode"), Hd = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Kd = Symbol.for("react.forward_ref"), Qd = Symbol.for("react.suspense"), Gd = Symbol.for("react.memo"), Yd = Symbol.for("react.lazy"), vs = Symbol.iterator;
function Xd(e) {
  return e === null || typeof e != "object" ? null : (e = vs && e[vs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ba = Object.assign, ec = {};
function zn(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || qa;
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tc() {
}
tc.prototype = zn.prototype;
function uu(e, t, n) {
  this.props = e, this.context = t, this.refs = ec, this.updater = n || qa;
}
var su = uu.prototype = new tc();
su.constructor = uu;
ba(su, zn.prototype);
su.isPureReactComponent = !0;
var ws = Array.isArray, nc = Object.prototype.hasOwnProperty, au = { current: null }, rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)
      nc.call(t, r) && !rc.hasOwnProperty(r) && (o[r] = t[r]);
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
  return { $$typeof: Pr, type: e, key: l, ref: i, props: o, _owner: au.current };
}
function Zd(e, t) {
  return { $$typeof: Pr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function Jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ss = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jd("" + e.key) : t.toString(36);
}
function no(e, t, n, r, o) {
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
          case Pr:
          case Dd:
            i = !0;
        }
    }
  if (i)
    return i = e, o = o(i), e = r === "" ? "." + $l(i, 0) : r, ws(o) ? (n = "", e != null && (n = e.replace(Ss, "$&/") + "/"), no(o, t, n, "", function(a) {
      return a;
    })) : o != null && (cu(o) && (o = Zd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ss, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", ws(e))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + $l(l, u);
      i += no(l, t, n, s, o);
    }
  else if (s = Xd(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      l = l.value, s = r + $l(l, u++), i += no(l, t, n, s, o);
  else if (l === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function jr(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return no(e, r, "", "", function(l) {
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
var Se = { current: null }, ro = { transition: null }, bd = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: ro, ReactCurrentOwner: au };
function lc() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: jr, forEach: function(e, t, n) {
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
  if (!cu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = zn;
L.Fragment = Ud;
L.Profiler = Hd;
L.PureComponent = uu;
L.StrictMode = Bd;
L.Suspense = Qd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
L.act = lc;
L.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ba({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = au.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      nc.call(t, s) && !rc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: Pr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
L.createContext = function(e) {
  return e = { $$typeof: Vd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Wd, _context: e }, e.Consumer = e;
};
L.createElement = oc;
L.createFactory = function(e) {
  var t = oc.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Kd, render: e };
};
L.isValidElement = cu;
L.lazy = function(e) {
  return { $$typeof: Yd, _payload: { _status: -1, _result: e }, _init: qd };
};
L.memo = function(e, t) {
  return { $$typeof: Gd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = ro.transition;
  ro.transition = {};
  try {
    e();
  } finally {
    ro.transition = t;
  }
};
L.unstable_act = lc;
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
Ja.exports = L;
var N = Ja.exports;
const ep = /* @__PURE__ */ Fd(N), ci = /* @__PURE__ */ jd({
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
var tp = N, np = Symbol.for("react.element"), rp = Symbol.for("react.fragment"), op = Object.prototype.hasOwnProperty, lp = tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    op.call(t, r) && !ip.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: np, type: e, key: l, ref: i, props: o, _owner: lp.current };
}
Qo.Fragment = rp;
Qo.jsx = ic;
Qo.jsxs = ic;
Za.exports = Qo;
var fu = Za.exports;
const up = fu.Fragment, $ = fu.jsx, be = fu.jsxs;
var uc = { exports: {} }, Ie = {}, sc = { exports: {} }, ac = {};
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
  function t(_, R) {
    var z = _.length;
    _.push(R);
    e:
      for (; 0 < z; ) {
        var Z = z - 1 >>> 1, re = _[Z];
        if (0 < o(re, R))
          _[Z] = R, _[z] = re, z = Z;
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
    var R = _[0], z = _.pop();
    if (z !== R) {
      _[0] = z;
      e:
        for (var Z = 0, re = _.length, Mr = re >>> 1; Z < Mr; ) {
          var Ft = 2 * (Z + 1) - 1, Ll = _[Ft], Dt = Ft + 1, Ar = _[Dt];
          if (0 > o(Ll, z))
            Dt < re && 0 > o(Ar, Ll) ? (_[Z] = Ar, _[Dt] = z, Z = Dt) : (_[Z] = Ll, _[Ft] = z, Z = Ft);
          else if (Dt < re && 0 > o(Ar, z))
            _[Z] = Ar, _[Dt] = z, Z = Dt;
          else
            break e;
        }
    }
    return R;
  }
  function o(_, R) {
    var z = _.sortIndex - R.sortIndex;
    return z !== 0 ? z : _.id - R.id;
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
  var s = [], a = [], h = 1, p = null, m = 3, y = !1, v = !1, g = !1, P = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null)
        r(a);
      else if (R.startTime <= _)
        r(a), R.sortIndex = R.expirationTime, t(s, R);
      else
        break;
      R = n(a);
    }
  }
  function w(_) {
    if (g = !1, d(_), !v)
      if (n(s) !== null)
        v = !0, Ol(C);
      else {
        var R = n(a);
        R !== null && zl(w, R.startTime - _);
      }
  }
  function C(_, R) {
    v = !1, g && (g = !1, f(T), T = -1), y = !0;
    var z = m;
    try {
      for (d(R), p = n(s); p !== null && (!(p.expirationTime > R) || _ && !de()); ) {
        var Z = p.callback;
        if (typeof Z == "function") {
          p.callback = null, m = p.priorityLevel;
          var re = Z(p.expirationTime <= R);
          R = e.unstable_now(), typeof re == "function" ? p.callback = re : p === n(s) && r(s), d(R);
        } else
          r(s);
        p = n(s);
      }
      if (p !== null)
        var Mr = !0;
      else {
        var Ft = n(a);
        Ft !== null && zl(w, Ft.startTime - R), Mr = !1;
      }
      return Mr;
    } finally {
      p = null, m = z, y = !1;
    }
  }
  var x = !1, S = null, T = -1, D = 5, O = -1;
  function de() {
    return !(e.unstable_now() - O < D);
  }
  function Mn() {
    if (S !== null) {
      var _ = e.unstable_now();
      O = _;
      var R = !0;
      try {
        R = S(!0, _);
      } finally {
        R ? An() : (x = !1, S = null);
      }
    } else
      x = !1;
  }
  var An;
  if (typeof c == "function")
    An = function() {
      c(Mn);
    };
  else if (typeof MessageChannel < "u") {
    var ys = new MessageChannel(), Ad = ys.port2;
    ys.port1.onmessage = Mn, An = function() {
      Ad.postMessage(null);
    };
  } else
    An = function() {
      P(Mn, 0);
    };
  function Ol(_) {
    S = _, x || (x = !0, An());
  }
  function zl(_, R) {
    T = P(function() {
      _(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, Ol(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = m;
    }
    var z = m;
    m = R;
    try {
      return _();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, R) {
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
    var z = m;
    m = _;
    try {
      return R();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(_, R, z) {
    var Z = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Z + z : Z) : z = Z, _) {
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
    return re = z + re, _ = { id: h++, callback: R, priorityLevel: _, startTime: z, expirationTime: re, sortIndex: -1 }, z > Z ? (_.sortIndex = z, t(a, _), n(s) === null && _ === n(a) && (g ? (f(T), T = -1) : g = !0, zl(w, z - Z))) : (_.sortIndex = re, t(s, _), v || y || (v = !0, Ol(C))), _;
  }, e.unstable_shouldYield = de, e.unstable_wrapCallback = function(_) {
    var R = m;
    return function() {
      var z = m;
      m = R;
      try {
        return _.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(ac);
sc.exports = ac;
var sp = sc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap = N, $e = sp;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cc = /* @__PURE__ */ new Set(), ir = {};
function qt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ir[e] = t, e = 0; e < t.length; e++)
    cc.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fi = Object.prototype.hasOwnProperty, cp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ks = {}, xs = {};
function fp(e) {
  return fi.call(xs, e) ? !0 : fi.call(ks, e) ? !1 : cp.test(e) ? xs[e] = !0 : (ks[e] = !0, !1);
}
function dp(e, t, n, r) {
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
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || dp(e, t, n, r))
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
function ke(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
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
var du = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    du,
    pu
  );
  fe[t] = new ke(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(du, pu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(du, pu);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mu(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pp(t, n, o, r) && (n = null), r || o === null ? fp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fr = Symbol.for("react.element"), nn = Symbol.for("react.portal"), rn = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), fc = Symbol.for("react.provider"), dc = Symbol.for("react.context"), gu = Symbol.for("react.forward_ref"), pi = Symbol.for("react.suspense"), mi = Symbol.for("react.suspense_list"), yu = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), pc = Symbol.for("react.offscreen"), Cs = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = Cs && e[Cs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Il;
function Qn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = t && t[1] || "";
    }
  return `
` + Il + e;
}
var Ml = !1;
function Al(e, t) {
  if (!e || Ml)
    return "";
  Ml = !0;
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
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Al(e.type, !1), e;
    case 11:
      return e = Al(e.type.render, !1), e;
    case 1:
      return e = Al(e.type, !0), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case rn:
      return "Fragment";
    case nn:
      return "Portal";
    case di:
      return "Profiler";
    case hu:
      return "StrictMode";
    case pi:
      return "Suspense";
    case mi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dc:
        return (e.displayName || "Context") + ".Consumer";
      case fc:
        return (e._context.displayName || "Context") + ".Provider";
      case gu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case yu:
        return t = e.displayName || null, t !== null ? t : hi(e.type) || "Memo";
      case wt:
        t = e._payload, e = e._init;
        try {
          return hi(e(t));
        } catch {
        }
    }
  return null;
}
function hp(e) {
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
      return hi(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
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
function mc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gp(e) {
  var t = mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Dr(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function hc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function wo(e) {
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
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Es(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function gc(e, t) {
  t = t.checked, t != null && mu(e, "checked", t, !1);
}
function yi(e, t) {
  gc(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vi(e, t.type, n) : t.hasOwnProperty("defaultValue") && vi(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _s(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vi(e, t, n) {
  (t !== "number" || wo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function hn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++)
      t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function wi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(k(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ps(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(k(92));
      if (Gn(n)) {
        if (1 < n.length)
          throw Error(k(93));
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
function Ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ur, wc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Ur = Ur || document.createElement("div"), Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ur.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
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
Object.keys(Zn).forEach(function(e) {
  yp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Zn[t] = Zn[e];
  });
});
function Sc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Zn.hasOwnProperty(e) && Zn[e] ? ("" + t).trim() : t + "px";
}
function kc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = Sc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
}
var vp = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ki(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function xi(e, t) {
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
var Ci = null;
function vu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ei = null, gn = null, yn = null;
function Ns(e) {
  if (e = Rr(e)) {
    if (typeof Ei != "function")
      throw Error(k(280));
    var t = e.stateNode;
    t && (t = Jo(t), Ei(e.stateNode, e.type, t));
  }
}
function xc(e) {
  gn ? yn ? yn.push(e) : yn = [e] : gn = e;
}
function Cc() {
  if (gn) {
    var e = gn, t = yn;
    if (yn = gn = null, Ns(e), t)
      for (e = 0; e < t.length; e++)
        Ns(t[e]);
  }
}
function Ec(e, t) {
  return e(t);
}
function _c() {
}
var jl = !1;
function Pc(e, t, n) {
  if (jl)
    return e(t, n);
  jl = !0;
  try {
    return Ec(e, t, n);
  } finally {
    jl = !1, (gn !== null || yn !== null) && (_c(), Cc());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Jo(n);
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
var _i = !1;
if (dt)
  try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      _i = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    _i = !1;
  }
function wp(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Jn = !1, So = null, ko = !1, Pi = null, Sp = { onError: function(e) {
  Jn = !0, So = e;
} };
function kp(e, t, n, r, o, l, i, u, s) {
  Jn = !1, So = null, wp.apply(Sp, arguments);
}
function xp(e, t, n, r, o, l, i, u, s) {
  if (kp.apply(this, arguments), Jn) {
    if (Jn) {
      var a = So;
      Jn = !1, So = null;
    } else
      throw Error(k(198));
    ko || (ko = !0, Pi = a);
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
function Tc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function Rs(e) {
  if (bt(e) !== e)
    throw Error(k(188));
}
function Cp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = bt(e), t === null)
      throw Error(k(188));
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
          return Rs(o), e;
        if (l === r)
          return Rs(o), t;
        l = l.sibling;
      }
      throw Error(k(188));
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
function Nc(e) {
  return e = Cp(e), e !== null ? Rc(e) : null;
}
function Rc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Rc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Oc = $e.unstable_scheduleCallback, Os = $e.unstable_cancelCallback, Ep = $e.unstable_shouldYield, _p = $e.unstable_requestPaint, J = $e.unstable_now, Pp = $e.unstable_getCurrentPriorityLevel, wu = $e.unstable_ImmediatePriority, zc = $e.unstable_UserBlockingPriority, xo = $e.unstable_NormalPriority, Tp = $e.unstable_LowPriority, Lc = $e.unstable_IdlePriority, Go = null, ot = null;
function Np(e) {
  if (ot && typeof ot.onCommitFiberRoot == "function")
    try {
      ot.onCommitFiberRoot(Go, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Xe = Math.clz32 ? Math.clz32 : zp, Rp = Math.log, Op = Math.LN2;
function zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Rp(e) / Op | 0) | 0;
}
var Br = 64, Hr = 4194304;
function Yn(e) {
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
function Co(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? r = Yn(u) : (l &= i, l !== 0 && (r = Yn(l)));
  } else
    i = n & ~o, i !== 0 ? r = Yn(i) : l !== 0 && (r = Yn(l));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - Xe(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Lp(e, t) {
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
function $p(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Xe(l), u = 1 << i, s = o[i];
    s === -1 ? (!(u & n) || u & r) && (o[i] = Lp(u, t)) : s <= t && (e.expiredLanes |= u), l &= ~u;
  }
}
function Ti(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function $c() {
  var e = Br;
  return Br <<= 1, !(Br & 4194240) && (Br = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function Tr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function Ip(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xe(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Su(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var j = 0;
function Ic(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Mc, ku, Ac, jc, Fc, Ni = !1, Wr = [], _t = null, Pt = null, Tt = null, ar = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Map(), kt = [], Mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Rr(t), t !== null && ku(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ap(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return _t = Dn(_t, e, t, n, r, o), !0;
    case "dragenter":
      return Pt = Dn(Pt, e, t, n, r, o), !0;
    case "mouseover":
      return Tt = Dn(Tt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return ar.set(l, Dn(ar.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, cr.set(l, Dn(cr.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Dc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = bt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Tc(n), t !== null) {
          e.blockedOn = t, Fc(e.priority, function() {
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
function oo(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ci = r, n.target.dispatchEvent(r), Ci = null;
    } else
      return t = Rr(n), t !== null && ku(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ls(e, t, n) {
  oo(e) && n.delete(t);
}
function jp() {
  Ni = !1, _t !== null && oo(_t) && (_t = null), Pt !== null && oo(Pt) && (Pt = null), Tt !== null && oo(Tt) && (Tt = null), ar.forEach(Ls), cr.forEach(Ls);
}
function Un(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, jp)));
}
function fr(e) {
  function t(o) {
    return Un(o, e);
  }
  if (0 < Wr.length) {
    Un(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && Un(_t, e), Pt !== null && Un(Pt, e), Tt !== null && Un(Tt, e), ar.forEach(t), cr.forEach(t), n = 0; n < kt.length; n++)
    r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); )
    Dc(n), n.blockedOn === null && kt.shift();
}
var vn = yt.ReactCurrentBatchConfig, Eo = !0;
function Fp(e, t, n, r) {
  var o = j, l = vn.transition;
  vn.transition = null;
  try {
    j = 1, xu(e, t, n, r);
  } finally {
    j = o, vn.transition = l;
  }
}
function Dp(e, t, n, r) {
  var o = j, l = vn.transition;
  vn.transition = null;
  try {
    j = 4, xu(e, t, n, r);
  } finally {
    j = o, vn.transition = l;
  }
}
function xu(e, t, n, r) {
  if (Eo) {
    var o = Ri(e, t, n, r);
    if (o === null)
      Yl(e, t, r, _o, n), zs(e, r);
    else if (Ap(o, e, t, n, r))
      r.stopPropagation();
    else if (zs(e, r), t & 4 && -1 < Mp.indexOf(e)) {
      for (; o !== null; ) {
        var l = Rr(o);
        if (l !== null && Mc(l), l = Ri(e, t, n, r), l === null && Yl(e, t, r, _o, n), l === o)
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else
      Yl(e, t, r, null, n);
  }
}
var _o = null;
function Ri(e, t, n, r) {
  if (_o = null, e = vu(r), e = Ht(e), e !== null)
    if (t = bt(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Tc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return _o = e, null;
}
function Uc(e) {
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
      switch (Pp()) {
        case wu:
          return 1;
        case zc:
          return 4;
        case xo:
        case Tp:
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
var Ct = null, Cu = null, lo = null;
function Bc() {
  if (lo)
    return lo;
  var e, t = Cu, n = t.length, r, o = "value" in Ct ? Ct.value : Ct.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++)
    ;
  return lo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function io(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Vr() {
  return !0;
}
function $s() {
  return !1;
}
function Me(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Vr : $s, this.isPropagationStopped = $s, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vr);
  }, persist: function() {
  }, isPersistent: Vr }), t;
}
var Ln = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eu = Me(Ln), Nr = Q({}, Ln, { view: 0, detail: 0 }), Up = Me(Nr), Dl, Ul, Bn, Yo = Q({}, Nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _u, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Bn && (Bn && e.type === "mousemove" ? (Dl = e.screenX - Bn.screenX, Ul = e.screenY - Bn.screenY) : Ul = Dl = 0, Bn = e), Dl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ul;
} }), Is = Me(Yo), Bp = Q({}, Yo, { dataTransfer: 0 }), Hp = Me(Bp), Wp = Q({}, Nr, { relatedTarget: 0 }), Bl = Me(Wp), Vp = Q({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kp = Me(Vp), Qp = Q({}, Ln, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Gp = Me(Qp), Yp = Q({}, Ln, { data: 0 }), Ms = Me(Yp), Xp = {
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
}, Zp = {
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
}, Jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jp[e]) ? !!t[e] : !1;
}
function _u() {
  return qp;
}
var bp = Q({}, Nr, { key: function(e) {
  if (e.key) {
    var t = Xp[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = io(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _u, charCode: function(e) {
  return e.type === "keypress" ? io(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? io(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), em = Me(bp), tm = Q({}, Yo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = Me(tm), nm = Q({}, Nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _u }), rm = Me(nm), om = Q({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), lm = Me(om), im = Q({}, Yo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), um = Me(im), sm = [9, 13, 27, 32], Pu = dt && "CompositionEvent" in window, qn = null;
dt && "documentMode" in document && (qn = document.documentMode);
var am = dt && "TextEvent" in window && !qn, Hc = dt && (!Pu || qn && 8 < qn && 11 >= qn), js = String.fromCharCode(32), Fs = !1;
function Wc(e, t) {
  switch (e) {
    case "keyup":
      return sm.indexOf(t.keyCode) !== -1;
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
function Vc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var on = !1;
function cm(e, t) {
  switch (e) {
    case "compositionend":
      return Vc(t);
    case "keypress":
      return t.which !== 32 ? null : (Fs = !0, js);
    case "textInput":
      return e = t.data, e === js && Fs ? null : e;
    default:
      return null;
  }
}
function fm(e, t) {
  if (on)
    return e === "compositionend" || !Pu && Wc(e, t) ? (e = Bc(), lo = Cu = Ct = null, on = !1, e) : null;
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
      return Hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dm[e.type] : t === "textarea";
}
function Kc(e, t, n, r) {
  xc(r), t = Po(t, "onChange"), 0 < t.length && (n = new Eu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bn = null, dr = null;
function pm(e) {
  nf(e, 0);
}
function Xo(e) {
  var t = sn(e);
  if (hc(t))
    return e;
}
function mm(e, t) {
  if (e === "change")
    return t;
}
var Qc = !1;
if (dt) {
  var Hl;
  if (dt) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Us = document.createElement("div");
      Us.setAttribute("oninput", "return;"), Wl = typeof Us.oninput == "function";
    }
    Hl = Wl;
  } else
    Hl = !1;
  Qc = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Bs() {
  bn && (bn.detachEvent("onpropertychange", Gc), dr = bn = null);
}
function Gc(e) {
  if (e.propertyName === "value" && Xo(dr)) {
    var t = [];
    Kc(t, dr, e, vu(e)), Pc(pm, t);
  }
}
function hm(e, t, n) {
  e === "focusin" ? (Bs(), bn = t, dr = n, bn.attachEvent("onpropertychange", Gc)) : e === "focusout" && Bs();
}
function gm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xo(dr);
}
function ym(e, t) {
  if (e === "click")
    return Xo(t);
}
function vm(e, t) {
  if (e === "input" || e === "change")
    return Xo(t);
}
function wm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : wm;
function pr(e, t) {
  if (Je(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fi.call(t, o) || !Je(e[o], t[o]))
      return !1;
  }
  return !0;
}
function Hs(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function Ws(e, t) {
  var n = Hs(e);
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
    n = Hs(n);
  }
}
function Yc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Xc() {
  for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = wo(e.document);
  }
  return t;
}
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Sm(e) {
  var t = Xc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Yc(n.ownerDocument.documentElement, n)) {
    if (r !== null && Tu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Ws(n, l);
        var i = Ws(
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
var km = dt && "documentMode" in document && 11 >= document.documentMode, ln = null, Oi = null, er = null, zi = !1;
function Vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi || ln == null || ln !== wo(r) || (r = ln, "selectionStart" in r && Tu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), er && pr(er, r) || (er = r, r = Po(Oi, "onSelect"), 0 < r.length && (t = new Eu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ln)));
}
function Kr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var un = { animationend: Kr("Animation", "AnimationEnd"), animationiteration: Kr("Animation", "AnimationIteration"), animationstart: Kr("Animation", "AnimationStart"), transitionend: Kr("Transition", "TransitionEnd") }, Vl = {}, Zc = {};
dt && (Zc = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
function Zo(e) {
  if (Vl[e])
    return Vl[e];
  if (!un[e])
    return e;
  var t = un[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Zc)
      return Vl[e] = t[n];
  return e;
}
var Jc = Zo("animationend"), qc = Zo("animationiteration"), bc = Zo("animationstart"), ef = Zo("transitionend"), tf = /* @__PURE__ */ new Map(), Ks = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  tf.set(e, t), qt(t, [e]);
}
for (var Kl = 0; Kl < Ks.length; Kl++) {
  var Ql = Ks[Kl], xm = Ql.toLowerCase(), Cm = Ql[0].toUpperCase() + Ql.slice(1);
  Mt(xm, "on" + Cm);
}
Mt(Jc, "onAnimationEnd");
Mt(qc, "onAnimationIteration");
Mt(bc, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(ef, "onTransitionEnd");
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
var Xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));
function Qs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, xp(r, t, void 0, e), e.currentTarget = null;
}
function nf(e, t) {
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
          Qs(o, u, a), l = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== l && o.isPropagationStopped())
            break e;
          Qs(o, u, a), l = s;
        }
    }
  }
  if (ko)
    throw e = Pi, ko = !1, Pi = null, e;
}
function B(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (rf(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), rf(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Qr]) {
    e[Qr] = !0, cc.forEach(function(n) {
      n !== "selectionchange" && (Em.has(n) || Gl(n, !1, e), Gl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || (t[Qr] = !0, Gl("selectionchange", !1, t));
  }
}
function rf(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var o = Fp;
      break;
    case 4:
      o = Dp;
      break;
    default:
      o = xu;
  }
  n = o.bind(null, t, n, e), o = void 0, !_i || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, o) {
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
            if (i = Ht(u), i === null)
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
  Pc(function() {
    var a = l, h = vu(n), p = [];
    e: {
      var m = tf.get(e);
      if (m !== void 0) {
        var y = Eu, v = e;
        switch (e) {
          case "keypress":
            if (io(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = em;
            break;
          case "focusin":
            v = "focus", y = Bl;
            break;
          case "focusout":
            v = "blur", y = Bl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Bl;
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
            y = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = rm;
            break;
          case Jc:
          case qc:
          case bc:
            y = Kp;
            break;
          case ef:
            y = lm;
            break;
          case "scroll":
            y = Up;
            break;
          case "wheel":
            y = um;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Gp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = As;
        }
        var g = (t & 4) !== 0, P = !g && e === "scroll", f = g ? m !== null ? m + "Capture" : null : m;
        g = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var w = d.stateNode;
          if (d.tag === 5 && w !== null && (d = w, f !== null && (w = sr(c, f), w != null && g.push(hr(c, w, d)))), P)
            break;
          c = c.return;
        }
        0 < g.length && (m = new y(m, v, null, n, h), p.push({ event: m, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Ci && (v = n.relatedTarget || n.fromElement) && (Ht(v) || v[pt]))
          break e;
        if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = a, v = v ? Ht(v) : null, v !== null && (P = bt(v), v !== P || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = a), y !== v)) {
          if (g = Is, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = As, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), P = y == null ? m : sn(y), d = v == null ? m : sn(v), m = new g(w, c + "leave", y, n, h), m.target = P, m.relatedTarget = d, w = null, Ht(h) === a && (g = new g(f, c + "enter", v, n, h), g.target = d, g.relatedTarget = P, w = g), P = w, y && v)
            t: {
              for (g = y, f = v, c = 0, d = g; d; d = en(d))
                c++;
              for (d = 0, w = f; w; w = en(w))
                d++;
              for (; 0 < c - d; )
                g = en(g), c--;
              for (; 0 < d - c; )
                f = en(f), d--;
              for (; c--; ) {
                if (g === f || f !== null && g === f.alternate)
                  break t;
                g = en(g), f = en(f);
              }
              g = null;
            }
          else
            g = null;
          y !== null && Gs(p, m, y, g, !1), v !== null && P !== null && Gs(p, P, v, g, !0);
        }
      }
      e: {
        if (m = a ? sn(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file")
          var C = mm;
        else if (Ds(m))
          if (Qc)
            C = vm;
          else {
            C = gm;
            var x = hm;
          }
        else
          (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = ym);
        if (C && (C = C(e, a))) {
          Kc(p, C, n, h);
          break e;
        }
        x && x(e, m, a), e === "focusout" && (x = m._wrapperState) && x.controlled && m.type === "number" && vi(m, "number", m.value);
      }
      switch (x = a ? sn(a) : window, e) {
        case "focusin":
          (Ds(x) || x.contentEditable === "true") && (ln = x, Oi = a, er = null);
          break;
        case "focusout":
          er = Oi = ln = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zi = !1, Vs(p, n, h);
          break;
        case "selectionchange":
          if (km)
            break;
        case "keydown":
        case "keyup":
          Vs(p, n, h);
      }
      var S;
      if (Pu)
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
      T && (Hc && n.locale !== "ko" && (on || T !== "onCompositionStart" ? T === "onCompositionEnd" && on && (S = Bc()) : (Ct = h, Cu = "value" in Ct ? Ct.value : Ct.textContent, on = !0)), x = Po(a, T), 0 < x.length && (T = new Ms(T, e, null, n, h), p.push({ event: T, listeners: x }), S ? T.data = S : (S = Vc(n), S !== null && (T.data = S)))), (S = am ? cm(e, n) : fm(e, n)) && (a = Po(a, "onBeforeInput"), 0 < a.length && (h = new Ms("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: a }), h.data = S));
    }
    nf(p, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Po(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = sr(e, n), l != null && r.unshift(hr(e, l, o)), l = sr(e, t), l != null && r.push(hr(e, l, o))), e = e.return;
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
function Gs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, o ? (s = sr(n, l), s != null && i.unshift(hr(n, s, u))) : o || (s = sr(n, l), s != null && i.push(hr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var _m = /\r\n?/g, Pm = /\u0000|\uFFFD/g;
function Ys(e) {
  return (typeof e == "string" ? e : "" + e).replace(_m, `
`).replace(Pm, "");
}
function Gr(e, t, n) {
  if (t = Ys(t), Ys(e) !== t && n)
    throw Error(k(425));
}
function To() {
}
var Li = null, $i = null;
function Ii(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Mi = typeof setTimeout == "function" ? setTimeout : void 0, Tm = typeof clearTimeout == "function" ? clearTimeout : void 0, Xs = typeof Promise == "function" ? Promise : void 0, Nm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xs < "u" ? function(e) {
  return Xs.resolve(null).then(e).catch(Rm);
} : Mi;
function Rm(e) {
  setTimeout(function() {
    throw e;
  });
}
function Xl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), fr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  fr(t);
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
function Zs(e) {
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
var $n = Math.random().toString(36).slice(2), rt = "__reactFiber$" + $n, gr = "__reactProps$" + $n, pt = "__reactContainer$" + $n, Ai = "__reactEvents$" + $n, Om = "__reactListeners$" + $n, zm = "__reactHandles$" + $n;
function Ht(e) {
  var t = e[rt];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = Zs(e); e !== null; ) {
          if (n = e[rt])
            return n;
          e = Zs(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rr(e) {
  return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function sn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(k(33));
}
function Jo(e) {
  return e[gr] || null;
}
var ji = [], an = -1;
function At(e) {
  return { current: e };
}
function H(e) {
  0 > an || (e.current = ji[an], ji[an] = null, an--);
}
function U(e, t) {
  an++, ji[an] = e.current, e.current = t;
}
var It = {}, ye = At(It), Ee = At(!1), Gt = It;
function En(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return It;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n)
    o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function _e(e) {
  return e = e.childContextTypes, e != null;
}
function No() {
  H(Ee), H(ye);
}
function Js(e, t, n) {
  if (ye.current !== It)
    throw Error(k(168));
  U(ye, t), U(Ee, n);
}
function of(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t))
      throw Error(k(108, hp(e) || "Unknown", o));
  return Q({}, n, r);
}
function Ro(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || It, Gt = ye.current, U(ye, e), U(Ee, Ee.current), !0;
}
function qs(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(k(169));
  n ? (e = of(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, H(Ee), H(ye), U(ye, e)) : H(Ee), U(Ee, n);
}
var st = null, qo = !1, Zl = !1;
function lf(e) {
  st === null ? st = [e] : st.push(e);
}
function Lm(e) {
  qo = !0, lf(e);
}
function jt() {
  if (!Zl && st !== null) {
    Zl = !0;
    var e = 0, t = j;
    try {
      var n = st;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      st = null, qo = !1;
    } catch (o) {
      throw st !== null && (st = st.slice(e + 1)), Oc(wu, jt), o;
    } finally {
      j = t, Zl = !1;
    }
  }
  return null;
}
var cn = [], fn = 0, Oo = null, zo = 0, je = [], Fe = 0, Yt = null, at = 1, ct = "";
function Ut(e, t) {
  cn[fn++] = zo, cn[fn++] = Oo, Oo = e, zo = t;
}
function uf(e, t, n) {
  je[Fe++] = at, je[Fe++] = ct, je[Fe++] = Yt, Yt = e;
  var r = at;
  e = ct;
  var o = 32 - Xe(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Xe(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, at = 1 << 32 - Xe(t) + o | n << o | r, ct = l + e;
  } else
    at = 1 << l | n << o | r, ct = e;
}
function Nu(e) {
  e.return !== null && (Ut(e, 1), uf(e, 1, 0));
}
function Ru(e) {
  for (; e === Oo; )
    Oo = cn[--fn], cn[fn] = null, zo = cn[--fn], cn[fn] = null;
  for (; e === Yt; )
    Yt = je[--Fe], je[Fe] = null, ct = je[--Fe], je[Fe] = null, at = je[--Fe], je[Fe] = null;
}
var ze = null, Oe = null, W = !1, Ye = null;
function sf(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function bs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ze = e, Oe = Nt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ze = e, Oe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Yt !== null ? { id: at, overflow: ct } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ze = e, Oe = null, !0) : !1;
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Di(e) {
  if (W) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!bs(e, t)) {
        if (Fi(e))
          throw Error(k(418));
        t = Nt(n.nextSibling);
        var r = ze;
        t && bs(e, t) ? sf(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, ze = e);
      }
    } else {
      if (Fi(e))
        throw Error(k(418));
      e.flags = e.flags & -4097 | 2, W = !1, ze = e;
    }
  }
}
function ea(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Yr(e) {
  if (e !== ze)
    return !1;
  if (!W)
    return ea(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps)), t && (t = Oe)) {
    if (Fi(e))
      throw af(), Error(k(418));
    for (; t; )
      sf(e, t), t = Nt(t.nextSibling);
  }
  if (ea(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(k(317));
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
    Oe = ze ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function af() {
  for (var e = Oe; e; )
    e = Nt(e.nextSibling);
}
function _n() {
  Oe = ze = null, W = !1;
}
function Ou(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var $m = yt.ReactCurrentBatchConfig;
function Hn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(k(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var u = o.refs;
        i === null ? delete u[l] : u[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string")
      throw Error(k(284));
    if (!n._owner)
      throw Error(k(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ta(e) {
  var t = e._init;
  return t(e._payload);
}
function cf(e) {
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
    return f = Lt(f, c), f.index = 0, f.sibling = null, f;
  }
  function l(f, c, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, w) {
    return c === null || c.tag !== 6 ? (c = ri(d, f.mode, w), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function s(f, c, d, w) {
    var C = d.type;
    return C === rn ? h(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === wt && ta(C) === c.type) ? (w = o(c, d.props), w.ref = Hn(f, c, d), w.return = f, w) : (w = mo(d.type, d.key, d.props, null, f.mode, w), w.ref = Hn(f, c, d), w.return = f, w);
  }
  function a(f, c, d, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = oi(d, f.mode, w), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
  }
  function h(f, c, d, w, C) {
    return c === null || c.tag !== 7 ? (c = Qt(d, f.mode, w, C), c.return = f, c) : (c = o(c, d), c.return = f, c);
  }
  function p(f, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = ri("" + c, f.mode, d), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Fr:
          return d = mo(c.type, c.key, c.props, null, f.mode, d), d.ref = Hn(f, null, c), d.return = f, d;
        case nn:
          return c = oi(c, f.mode, d), c.return = f, c;
        case wt:
          var w = c._init;
          return p(f, w(c._payload), d);
      }
      if (Gn(c) || jn(c))
        return c = Qt(c, f.mode, d, null), c.return = f, c;
      Xr(f, c);
    }
    return null;
  }
  function m(f, c, d, w) {
    var C = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return C !== null ? null : u(f, c, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Fr:
          return d.key === C ? s(f, c, d, w) : null;
        case nn:
          return d.key === C ? a(f, c, d, w) : null;
        case wt:
          return C = d._init, m(
            f,
            c,
            C(d._payload),
            w
          );
      }
      if (Gn(d) || jn(d))
        return C !== null ? null : h(f, c, d, w, null);
      Xr(f, d);
    }
    return null;
  }
  function y(f, c, d, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number")
      return f = f.get(d) || null, u(c, f, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Fr:
          return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, C);
        case nn:
          return f = f.get(w.key === null ? d : w.key) || null, a(c, f, w, C);
        case wt:
          var x = w._init;
          return y(f, c, d, x(w._payload), C);
      }
      if (Gn(w) || jn(w))
        return f = f.get(d) || null, h(c, f, w, C, null);
      Xr(c, w);
    }
    return null;
  }
  function v(f, c, d, w) {
    for (var C = null, x = null, S = c, T = c = 0, D = null; S !== null && T < d.length; T++) {
      S.index > T ? (D = S, S = null) : D = S.sibling;
      var O = m(f, S, d[T], w);
      if (O === null) {
        S === null && (S = D);
        break;
      }
      e && S && O.alternate === null && t(f, S), c = l(O, c, T), x === null ? C = O : x.sibling = O, x = O, S = D;
    }
    if (T === d.length)
      return n(f, S), W && Ut(f, T), C;
    if (S === null) {
      for (; T < d.length; T++)
        S = p(f, d[T], w), S !== null && (c = l(S, c, T), x === null ? C = S : x.sibling = S, x = S);
      return W && Ut(f, T), C;
    }
    for (S = r(f, S); T < d.length; T++)
      D = y(S, f, T, d[T], w), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? T : D.key), c = l(D, c, T), x === null ? C = D : x.sibling = D, x = D);
    return e && S.forEach(function(de) {
      return t(f, de);
    }), W && Ut(f, T), C;
  }
  function g(f, c, d, w) {
    var C = jn(d);
    if (typeof C != "function")
      throw Error(k(150));
    if (d = C.call(d), d == null)
      throw Error(k(151));
    for (var x = C = null, S = c, T = c = 0, D = null, O = d.next(); S !== null && !O.done; T++, O = d.next()) {
      S.index > T ? (D = S, S = null) : D = S.sibling;
      var de = m(f, S, O.value, w);
      if (de === null) {
        S === null && (S = D);
        break;
      }
      e && S && de.alternate === null && t(f, S), c = l(de, c, T), x === null ? C = de : x.sibling = de, x = de, S = D;
    }
    if (O.done)
      return n(
        f,
        S
      ), W && Ut(f, T), C;
    if (S === null) {
      for (; !O.done; T++, O = d.next())
        O = p(f, O.value, w), O !== null && (c = l(O, c, T), x === null ? C = O : x.sibling = O, x = O);
      return W && Ut(f, T), C;
    }
    for (S = r(f, S); !O.done; T++, O = d.next())
      O = y(S, f, T, O.value, w), O !== null && (e && O.alternate !== null && S.delete(O.key === null ? T : O.key), c = l(O, c, T), x === null ? C = O : x.sibling = O, x = O);
    return e && S.forEach(function(Mn) {
      return t(f, Mn);
    }), W && Ut(f, T), C;
  }
  function P(f, c, d, w) {
    if (typeof d == "object" && d !== null && d.type === rn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Fr:
          e: {
            for (var C = d.key, x = c; x !== null; ) {
              if (x.key === C) {
                if (C = d.type, C === rn) {
                  if (x.tag === 7) {
                    n(f, x.sibling), c = o(x, d.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (x.elementType === C || typeof C == "object" && C !== null && C.$$typeof === wt && ta(C) === x.type) {
                  n(f, x.sibling), c = o(x, d.props), c.ref = Hn(f, x, d), c.return = f, f = c;
                  break e;
                }
                n(f, x);
                break;
              } else
                t(f, x);
              x = x.sibling;
            }
            d.type === rn ? (c = Qt(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = mo(d.type, d.key, d.props, null, f.mode, w), w.ref = Hn(f, c, d), w.return = f, f = w);
          }
          return i(f);
        case nn:
          e: {
            for (x = d.key; c !== null; ) {
              if (c.key === x)
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
            c = oi(d, f.mode, w), c.return = f, f = c;
          }
          return i(f);
        case wt:
          return x = d._init, P(f, c, x(d._payload), w);
      }
      if (Gn(d))
        return v(f, c, d, w);
      if (jn(d))
        return g(f, c, d, w);
      Xr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = ri(d, f.mode, w), c.return = f, f = c), i(f)) : n(f, c);
  }
  return P;
}
var Pn = cf(!0), ff = cf(!1), Lo = At(null), $o = null, dn = null, zu = null;
function Lu() {
  zu = dn = $o = null;
}
function $u(e) {
  var t = Lo.current;
  H(Lo), e._currentValue = t;
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function wn(e, t) {
  $o = e, zu = dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null);
}
function He(e) {
  var t = e._currentValue;
  if (zu !== e)
    if (e = { context: e, memoizedValue: t, next: null }, dn === null) {
      if ($o === null)
        throw Error(k(308));
      dn = e, $o.dependencies = { lanes: 0, firstContext: e };
    } else
      dn = dn.next = e;
  return t;
}
var Wt = null;
function Iu(e) {
  Wt === null ? Wt = [e] : Wt.push(e);
}
function df(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Iu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, mt(e, r);
}
function mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function Mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function pf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ft(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, I & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Iu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, mt(e, n);
}
function uo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
  }
}
function na(e, t) {
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
function Io(e, t, n, r) {
  var o = e.updateQueue;
  St = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? l = a : i.next = a, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = a : u.next = a, h.lastBaseUpdate = s));
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, h = a = s = null, u = l;
    do {
      var m = u.lane, y = u.eventTime;
      if ((r & m) === m) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var v = e, g = u;
          switch (m = t, y = n, g.tag) {
            case 1:
              if (v = g.payload, typeof v == "function") {
                p = v.call(y, p, m);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = g.payload, m = typeof v == "function" ? v.call(y, p, m) : v, m == null)
                break e;
              p = Q({}, p, m);
              break e;
            case 2:
              St = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [u] : m.push(u));
      } else
        y = { eventTime: y, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (a = h = y, s = p) : h = h.next = y, i |= m;
      if (u = u.next, u === null) {
        if (u = o.shared.pending, u === null)
          break;
        m = u, u = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (1);
    if (h === null && (s = p), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else
      l === null && (o.shared.lanes = 0);
    Zt |= i, e.lanes = i, e.memoizedState = p;
  }
}
function ra(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function")
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var Or = {}, lt = At(Or), yr = At(Or), vr = At(Or);
function Vt(e) {
  if (e === Or)
    throw Error(k(174));
  return e;
}
function Au(e, t) {
  switch (U(vr, t), U(yr, e), U(lt, Or), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Si(t, e);
  }
  H(lt), U(lt, t);
}
function Tn() {
  H(lt), H(yr), H(vr);
}
function mf(e) {
  Vt(vr.current);
  var t = Vt(lt.current), n = Si(t, e.type);
  t !== n && (U(yr, e), U(lt, n));
}
function ju(e) {
  yr.current === e && (H(lt), H(yr));
}
var V = At(0);
function Mo(e) {
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
var Jl = [];
function Fu() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var so = yt.ReactCurrentDispatcher, ql = yt.ReactCurrentBatchConfig, Xt = 0, K = null, te = null, oe = null, Ao = !1, tr = !1, wr = 0, Im = 0;
function pe() {
  throw Error(k(321));
}
function Du(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n]))
      return !1;
  return !0;
}
function Uu(e, t, n, r, o, l) {
  if (Xt = l, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, so.current = e === null || e.memoizedState === null ? Fm : Dm, e = n(r, o), tr) {
    l = 0;
    do {
      if (tr = !1, wr = 0, 25 <= l)
        throw Error(k(301));
      l += 1, oe = te = null, t.updateQueue = null, so.current = Um, e = n(r, o);
    } while (tr);
  }
  if (so.current = jo, t = te !== null && te.next !== null, Xt = 0, oe = te = K = null, Ao = !1, t)
    throw Error(k(300));
  return e;
}
function Bu() {
  var e = wr !== 0;
  return wr = 0, e;
}
function et() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return oe === null ? K.memoizedState = oe = e : oe = oe.next = e, oe;
}
function We() {
  if (te === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = te.next;
  var t = oe === null ? K.memoizedState : oe.next;
  if (t !== null)
    oe = t, te = e;
  else {
    if (e === null)
      throw Error(k(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, oe === null ? K.memoizedState = oe = e : oe = oe.next = e;
  }
  return oe;
}
function Sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te, o = r.baseQueue, l = n.pending;
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
      if ((Xt & h) === h)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = p, i = r) : s = s.next = p, K.lanes |= h, Zt |= h;
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? i = r : s.next = u, Je(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, K.lanes |= l, Zt |= l, o = o.next;
    while (o !== e);
  } else
    o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = We(), n = t.queue;
  if (n === null)
    throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    Je(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function hf() {
}
function gf(e, t) {
  var n = K, r = We(), o = t(), l = !Je(r.memoizedState, o);
  if (l && (r.memoizedState = o, Ce = !0), r = r.queue, Hu(wf.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || oe !== null && oe.memoizedState.tag & 1) {
    if (n.flags |= 2048, kr(9, vf.bind(null, n, r, o, t), void 0, null), le === null)
      throw Error(k(349));
    Xt & 30 || yf(n, t, o);
  }
  return o;
}
function yf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function vf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sf(t) && kf(e);
}
function wf(e, t, n) {
  return n(function() {
    Sf(t) && kf(e);
  });
}
function Sf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function kf(e) {
  var t = mt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function oa(e) {
  var t = et();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = jm.bind(null, K, e), [t.memoizedState, e];
}
function kr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function xf() {
  return We().memoizedState;
}
function ao(e, t, n, r) {
  var o = et();
  K.flags |= e, o.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r);
}
function bo(e, t, n, r) {
  var o = We();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (l = i.destroy, r !== null && Du(r, i.deps)) {
      o.memoizedState = kr(t, n, l, r);
      return;
    }
  }
  K.flags |= e, o.memoizedState = kr(1 | t, n, l, r);
}
function la(e, t) {
  return ao(8390656, 8, e, t);
}
function Hu(e, t) {
  return bo(2048, 8, e, t);
}
function Cf(e, t) {
  return bo(4, 2, e, t);
}
function Ef(e, t) {
  return bo(4, 4, e, t);
}
function _f(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Pf(e, t, n) {
  return n = n != null ? n.concat([e]) : null, bo(4, 4, _f.bind(null, t, e), n);
}
function Wu() {
}
function Tf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Nf(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Rf(e, t, n) {
  return Xt & 21 ? (Je(n, t) || (n = $c(), K.lanes |= n, Zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n);
}
function Mm(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, ql.transition = r;
  }
}
function Of() {
  return We().memoizedState;
}
function Am(e, t, n) {
  var r = zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zf(e))
    Lf(t, n);
  else if (n = df(e, t, n, r), n !== null) {
    var o = we();
    Ze(n, e, r, o), $f(n, t, r);
  }
}
function jm(e, t, n) {
  var r = zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e))
    Lf(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
      try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, Je(u, i)) {
          var s = t.interleaved;
          s === null ? (o.next = o, Iu(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
    n = df(e, t, o, r), n !== null && (o = we(), Ze(n, e, r, o), $f(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Lf(e, t) {
  tr = Ao = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $f(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Su(e, n);
  }
}
var jo = { readContext: He, useCallback: pe, useContext: pe, useEffect: pe, useImperativeHandle: pe, useInsertionEffect: pe, useLayoutEffect: pe, useMemo: pe, useReducer: pe, useRef: pe, useState: pe, useDebugValue: pe, useDeferredValue: pe, useTransition: pe, useMutableSource: pe, useSyncExternalStore: pe, useId: pe, unstable_isNewReconciler: !1 }, Fm = { readContext: He, useCallback: function(e, t) {
  return et().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: He, useEffect: la, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ao(
    4194308,
    4,
    _f.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ao(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ao(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = et();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = et();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Am.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = et();
  return e = { current: e }, t.memoizedState = e;
}, useState: oa, useDebugValue: Wu, useDeferredValue: function(e) {
  return et().memoizedState = e;
}, useTransition: function() {
  var e = oa(!1), t = e[0];
  return e = Mm.bind(null, e[1]), et().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, o = et();
  if (W) {
    if (n === void 0)
      throw Error(k(407));
    n = n();
  } else {
    if (n = t(), le === null)
      throw Error(k(349));
    Xt & 30 || yf(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, la(wf.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, kr(9, vf.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = et(), t = le.identifierPrefix;
  if (W) {
    var n = ct, r = at;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Im++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Dm = {
  readContext: He,
  useCallback: Tf,
  useContext: He,
  useEffect: Hu,
  useImperativeHandle: Pf,
  useInsertionEffect: Cf,
  useLayoutEffect: Ef,
  useMemo: Nf,
  useReducer: bl,
  useRef: xf,
  useState: function() {
    return bl(Sr);
  },
  useDebugValue: Wu,
  useDeferredValue: function(e) {
    var t = We();
    return Rf(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(Sr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: hf,
  useSyncExternalStore: gf,
  useId: Of,
  unstable_isNewReconciler: !1
}, Um = { readContext: He, useCallback: Tf, useContext: He, useEffect: Hu, useImperativeHandle: Pf, useInsertionEffect: Cf, useLayoutEffect: Ef, useMemo: Nf, useReducer: ei, useRef: xf, useState: function() {
  return ei(Sr);
}, useDebugValue: Wu, useDeferredValue: function(e) {
  var t = We();
  return te === null ? t.memoizedState = e : Rf(t, te.memoizedState, e);
}, useTransition: function() {
  var e = ei(Sr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: hf, useSyncExternalStore: gf, useId: Of, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var el = { isMounted: function(e) {
  return (e = e._reactInternals) ? bt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), l = ft(r, o);
  l.payload = t, n != null && (l.callback = n), t = Rt(e, l, o), t !== null && (Ze(t, e, o, r), uo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = we(), o = zt(e), l = ft(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Rt(e, l, o), t !== null && (Ze(t, e, o, r), uo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = we(), r = zt(e), o = ft(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Rt(e, o, r), t !== null && (Ze(t, e, r, n), uo(t, e, r));
} };
function ia(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !pr(n, r) || !pr(o, l) : !0;
}
function If(e, t, n) {
  var r = !1, o = It, l = t.contextType;
  return typeof l == "object" && l !== null ? l = He(l) : (o = _e(t) ? Gt : ye.current, r = t.contextTypes, l = (r = r != null) ? En(e, o) : It), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = el, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function ua(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && el.enqueueReplaceState(t, t.state, null);
}
function Hi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Mu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = He(l) : (l = _e(t) ? Gt : ye.current, o.context = En(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Bi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && el.enqueueReplaceState(o, o.state, null), Io(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
  try {
    var n = "", r = t;
    do
      n += mp(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ti(e, t, n) {
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
var Bm = typeof WeakMap == "function" ? WeakMap : Map;
function Mf(e, t, n) {
  n = ft(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Do || (Do = !0, bi = r), Wi(e, t);
  }, n;
}
function Af(e, t, n) {
  n = ft(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Wi(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Wi(e, t), typeof r != "function" && (Ot === null ? Ot = /* @__PURE__ */ new Set([this]) : Ot.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Bm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else
    o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = th.bind(null, e, t, n), t.then(e, e));
}
function aa(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ca(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ft(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e);
}
var Hm = yt.ReactCurrentOwner, Ce = !1;
function ve(e, t, n, r) {
  t.child = e === null ? ff(t, null, n, r) : Pn(t, e.child, n, r);
}
function fa(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return wn(t, o), r = Uu(e, t, n, r, l, o), n = Bu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && n && Nu(t), t.flags |= 1, ve(e, t, r, o), t.child);
}
function da(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Ju(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, jf(e, t, l, r, o)) : (e = mo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : pr, n(i, r) && e.ref === t.ref)
      return ht(e, t, o);
  }
  return t.flags |= 1, e = Lt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function jf(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (pr(l, r) && e.ref === t.ref)
      if (Ce = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
        e.flags & 131072 && (Ce = !0);
      else
        return t.lanes = e.lanes, ht(e, t, o);
  }
  return Vi(e, t, n, r, o);
}
function Ff(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(mn, Ne), Ne |= n;
    else {
      if (!(n & 1073741824))
        return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(mn, Ne), Ne |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, U(mn, Ne), Ne |= r;
    }
  else
    l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, U(mn, Ne), Ne |= r;
  return ve(e, t, o, n), t.child;
}
function Df(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vi(e, t, n, r, o) {
  var l = _e(n) ? Gt : ye.current;
  return l = En(t, l), wn(t, o), n = Uu(e, t, n, r, l, o), r = Bu(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ht(e, t, o)) : (W && r && Nu(t), t.flags |= 1, ve(e, t, n, o), t.child);
}
function pa(e, t, n, r, o) {
  if (_e(n)) {
    var l = !0;
    Ro(t);
  } else
    l = !1;
  if (wn(t, o), t.stateNode === null)
    co(e, t), If(t, n, r), Hi(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = He(a) : (a = _e(n) ? Gt : ye.current, a = En(t, a));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && ua(t, i, r, a), St = !1;
    var m = t.memoizedState;
    i.state = m, Io(t, r, i, o), s = t.memoizedState, u !== r || m !== s || Ee.current || St ? (typeof h == "function" && (Bi(t, n, h, r), s = t.memoizedState), (u = St || ia(t, n, u, r, m, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, pf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Qe(t.type, u), i.props = a, p = t.pendingProps, m = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = He(s) : (s = _e(n) ? Gt : ye.current, s = En(t, s));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || m !== s) && ua(t, i, r, s), St = !1, m = t.memoizedState, i.state = m, Io(t, r, i, o);
    var v = t.memoizedState;
    u !== p || m !== v || Ee.current || St ? (typeof y == "function" && (Bi(t, n, y, r), v = t.memoizedState), (a = St || ia(t, n, a, r, m, v, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ki(e, t, n, r, l, o);
}
function Ki(e, t, n, r, o, l) {
  Df(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return o && qs(t, n, !1), ht(e, t, l);
  r = t.stateNode, Hm.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Pn(t, e.child, null, l), t.child = Pn(t, null, u, l)) : ve(e, t, u, l), t.memoizedState = r.state, o && qs(t, n, !0), t.child;
}
function Uf(e) {
  var t = e.stateNode;
  t.pendingContext ? Js(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Js(e, t.context, !1), Au(e, t.containerInfo);
}
function ma(e, t, n, r, o) {
  return _n(), Ou(o), t.flags |= 256, ve(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bf(e, t, n) {
  var r = t.pendingProps, o = V.current, l = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), U(V, o & 1), e === null)
    return Di(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = rl(i, r, 0, null), e = Qt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Gi(n), t.memoizedState = Qi, e) : Vu(t, i));
  if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null))
    return Wm(e, t, i, r, u, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Lt(o, s), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Lt(u, l) : (l = Qt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Gi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return l = e.child, e = l.sibling, r = Lt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vu(e, t) {
  return t = rl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Zr(e, t, n, r) {
  return r !== null && Ou(r), Pn(t, e.child, null, n), e = Vu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Wm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ti(Error(k(422))), Zr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = rl({ mode: "visible", children: r.children }, o, 0, null), l = Qt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Pn(t, e.child, null, i), t.child.memoizedState = Gi(i), t.memoizedState = Qi, l);
  if (!(t.mode & 1))
    return Zr(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, l = Error(k(419)), r = ti(l, r, void 0), Zr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Ce || u) {
    if (r = le, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, mt(e, o), Ze(r, e, o, -1));
    }
    return Zu(), r = ti(Error(k(421))), Zr(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = nh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Oe = Nt(o.nextSibling), ze = t, W = !0, Ye = null, e !== null && (je[Fe++] = at, je[Fe++] = ct, je[Fe++] = Yt, at = e.id, ct = e.overflow, Yt = t), t = Vu(t, r.children), t.flags |= 4096, t);
}
function ha(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ni(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function Hf(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (ve(e, t, r.children, n), r = V.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ha(e, n, t);
          else if (e.tag === 19)
            ha(e, n, t);
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
  if (U(V, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && Mo(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ni(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Mo(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        ni(t, !0, n, null, l);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function ht(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Zt |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = Lt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vm(e, t, n) {
  switch (t.tag) {
    case 3:
      Uf(t), _n();
      break;
    case 5:
      mf(t);
      break;
    case 1:
      _e(t.type) && Ro(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      U(Lo, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(V, V.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bf(e, t, n) : (U(V, V.current & 1), e = ht(e, t, n), e !== null ? e.sibling : null);
      U(V, V.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Hf(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), U(V, V.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ff(e, t, n);
  }
  return ht(e, t, n);
}
var Wf, Yi, Vf, Kf;
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
Yi = function() {
};
Vf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Vt(lt.current);
    var l = null;
    switch (n) {
      case "input":
        o = gi(e, o), r = gi(e, r), l = [];
        break;
      case "select":
        o = Q({}, o, { value: void 0 }), r = Q({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = wi(e, o), r = wi(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = To);
    }
    ki(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (ir.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
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
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (l = l || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (l = l || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (ir.hasOwnProperty(a) ? (s != null && a === "onScroll" && B("scroll", e), l || u === s || (l = [])) : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Kf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wn(e, t) {
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
    for (var o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null; )
      n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Km(e, t, n) {
  var r = t.pendingProps;
  switch (Ru(t), t.tag) {
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
      return _e(t.type) && No(), me(t), null;
    case 3:
      return r = t.stateNode, Tn(), H(Ee), H(ye), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (nu(Ye), Ye = null))), Yi(e, t), me(t), null;
    case 5:
      ju(t);
      var o = Vt(vr.current);
      if (n = t.type, e !== null && t.stateNode != null)
        Vf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(k(166));
          return me(t), null;
        }
        if (e = Vt(lt.current), Yr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[rt] = t, r[gr] = l, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < Xn.length; o++)
                B(Xn[o], r);
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
              Es(r, l), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, B("invalid", r);
              break;
            case "textarea":
              Ps(r, l), B("invalid", r);
          }
          ki(n, l), o = null;
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Gr(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && Gr(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : ir.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
            }
          switch (n) {
            case "input":
              Dr(r), _s(r, l, !0);
              break;
            case "textarea":
              Dr(r), Ts(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = To);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[rt] = t, e[gr] = r, Wf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = xi(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Xn.length; o++)
                  B(Xn[o], e);
                o = r;
                break;
              case "source":
                B("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), o = r;
                break;
              case "details":
                B("toggle", e), o = r;
                break;
              case "input":
                Es(e, r), o = gi(e, r), B("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Q({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Ps(e, r), o = wi(e, r), B("invalid", e);
                break;
              default:
                o = r;
            }
            ki(n, o), u = o;
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style" ? kc(e, s) : l === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && wc(e, s)) : l === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && ur(e, s) : typeof s == "number" && ur(e, "" + s) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ir.hasOwnProperty(l) ? s != null && l === "onScroll" && B("scroll", e) : s != null && mu(e, l, s, i));
              }
            switch (n) {
              case "input":
                Dr(e), _s(e, r, !1);
                break;
              case "textarea":
                Dr(e), Ts(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? hn(e, !!r.multiple, l, !1) : r.defaultValue != null && hn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = To);
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
        Kf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(k(166));
        if (n = Vt(vr.current), Vt(lt.current), Yr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (l = r.nodeValue !== n) && (e = ze, e !== null))
            switch (e.tag) {
              case 3:
                Gr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Gr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (H(V), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Oe !== null && t.mode & 1 && !(t.flags & 128))
          af(), _n(), t.flags |= 98560, l = !1;
        else if (l = Yr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l)
              throw Error(k(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
              throw Error(k(317));
            l[rt] = t;
          } else
            _n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), l = !1;
        } else
          Ye !== null && (nu(Ye), Ye = null), l = !0;
        if (!l)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || V.current & 1 ? ne === 0 && (ne = 3) : Zu())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Tn(), Yi(e, t), e === null && mr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return $u(t.type._context), me(t), null;
    case 17:
      return _e(t.type) && No(), me(t), null;
    case 19:
      if (H(V), l = t.memoizedState, l === null)
        return me(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null)
        if (r)
          Wn(l, !1);
        else {
          if (ne !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = Mo(e), i !== null) {
                for (t.flags |= 128, Wn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return U(V, V.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null && J() > Rn && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Mo(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !W)
              return me(t), null;
          } else
            2 * J() - l.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = J(), t.sibling = null, n = V.current, U(V, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Qm(e, t) {
  switch (Ru(t), t.tag) {
    case 1:
      return _e(t.type) && No(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), H(Ee), H(ye), Fu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ju(t), null;
    case 13:
      if (H(V), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(k(340));
        _n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(V), null;
    case 4:
      return Tn(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return Xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jr = !1, ge = !1, Gm = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function pn(e, t) {
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
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ga = !1;
function Ym(e, t) {
  if (Li = Eo, e = Xc(), Tu(e)) {
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
          var i = 0, u = -1, s = -1, a = 0, h = 0, p = e, m = null;
          t:
            for (; ; ) {
              for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (u = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; )
                m = p, p = y;
              for (; ; ) {
                if (p === e)
                  break t;
                if (m === n && ++a === o && (u = i), m === l && ++h === r && (s = i), (y = p.nextSibling) !== null)
                  break;
                p = m, m = p.parentNode;
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
  for ($i = { focusedElem: e, selectionRange: n }, Eo = !1, E = t; E !== null; )
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
                  var g = v.memoizedProps, P = v.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Qe(t.type, g), P);
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
          X(t, t.return, w);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, E = e;
          break;
        }
        E = t.return;
      }
  return v = ga, ga = !1, v;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Xi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function tl(e, t) {
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
function Zi(e) {
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
function Qf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[gr], delete t[Ai], delete t[Om], delete t[zm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Gf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ya(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gf(e.return))
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
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = To));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ji(e, t, n), e = e.sibling; e !== null; )
      Ji(e, t, n), e = e.sibling;
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; )
      qi(e, t, n), e = e.sibling;
}
var ue = null, Ge = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; )
    Yf(e, t, n), n = n.sibling;
}
function Yf(e, t, n) {
  if (ot && typeof ot.onCommitFiberUnmount == "function")
    try {
      ot.onCommitFiberUnmount(Go, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      ge || pn(n, t);
    case 6:
      var r = ue, o = Ge;
      ue = null, vt(e, t, n), ue = r, Ge = o, ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Ge ? (e = ue, n = n.stateNode, e.nodeType === 8 ? Xl(e.parentNode, n) : e.nodeType === 1 && Xl(e, n), fr(e)) : Xl(ue, n.stateNode));
      break;
    case 4:
      r = ue, o = Ge, ue = n.stateNode.containerInfo, Ge = !0, vt(e, t, n), ue = r, Ge = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Xi(n, t, i), o = o.next;
        } while (o !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!ge && (pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
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
      n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, vt(e, t, n), ge = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function va(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gm()), t.forEach(function(r) {
      var o = rh.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ke(e, t) {
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
                ue = u.stateNode, Ge = !1;
                break e;
              case 3:
                ue = u.stateNode.containerInfo, Ge = !0;
                break e;
              case 4:
                ue = u.stateNode.containerInfo, Ge = !0;
                break e;
            }
            u = u.return;
          }
        if (ue === null)
          throw Error(k(160));
        Yf(l, i, o), ue = null, Ge = !1;
        var s = o.alternate;
        s !== null && (s.return = null), o.return = null;
      } catch (a) {
        X(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      Xf(t, e), t = t.sibling;
}
function Xf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), qe(e), r & 4) {
        try {
          nr(3, e, e.return), tl(3, e);
        } catch (g) {
          X(e, e.return, g);
        }
        try {
          nr(5, e, e.return);
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 1:
      Ke(t, e), qe(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), qe(e), r & 512 && n !== null && pn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ur(o, "");
        } catch (g) {
          X(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && l.type === "radio" && l.name != null && gc(o, l), xi(u, i);
            var a = xi(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i], p = s[i + 1];
              h === "style" ? kc(o, p) : h === "dangerouslySetInnerHTML" ? wc(o, p) : h === "children" ? ur(o, p) : mu(o, h, p, a);
            }
            switch (u) {
              case "input":
                yi(o, l);
                break;
              case "textarea":
                yc(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null ? hn(o, !!l.multiple, y, !1) : m !== !!l.multiple && (l.defaultValue != null ? hn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : hn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[gr] = l;
          } catch (g) {
            X(e, e.return, g);
          }
      }
      break;
    case 6:
      if (Ke(t, e), qe(e), r & 4) {
        if (e.stateNode === null)
          throw Error(k(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (g) {
          X(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ke(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          fr(t.containerInfo);
        } catch (g) {
          X(e, e.return, g);
        }
      break;
    case 4:
      Ke(t, e), qe(e);
      break;
    case 13:
      Ke(t, e), qe(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Gu = J())), r & 4 && va(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (a = ge) || h, Ke(t, e), ge = a) : Ke(t, e), qe(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !h && e.mode & 1)
          for (E = e, h = e.child; h !== null; ) {
            for (p = E = h; E !== null; ) {
              switch (m = E, y = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, m, m.return);
                  break;
                case 1:
                  pn(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                    } catch (g) {
                      X(r, n, g);
                    }
                  }
                  break;
                case 5:
                  pn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Sa(p);
                    continue;
                  }
              }
              y !== null ? (y.return = m, E = y) : Sa(p);
            }
            h = h.sibling;
          }
        e:
          for (h = null, p = e; ; ) {
            if (p.tag === 5) {
              if (h === null) {
                h = p;
                try {
                  o = p.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Sc("display", i));
                } catch (g) {
                  X(e, e.return, g);
                }
              }
            } else if (p.tag === 6) {
              if (h === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (g) {
                  X(e, e.return, g);
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
      Ke(t, e), qe(e), r & 4 && va(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Gf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ur(o, ""), r.flags &= -33);
          var l = ya(e);
          qi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ya(e);
          Ji(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xm(e, t, n) {
  E = e, Zf(e);
}
function Zf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var o = E, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Jr;
      if (!i) {
        var u = o.alternate, s = u !== null && u.memoizedState !== null || ge;
        u = Jr;
        var a = ge;
        if (Jr = i, (ge = s) && !a)
          for (E = o; E !== null; )
            i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? ka(o) : s !== null ? (s.return = i, E = s) : ka(o);
        for (; l !== null; )
          E = l, Zf(l), l = l.sibling;
        E = o, Jr = u, ge = a;
      }
      wa(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? (l.return = o, E = l) : wa(e);
  }
}
function wa(e) {
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
              ge || tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null)
                  r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var l = t.updateQueue;
              l !== null && ra(t, l, r);
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
                ra(t, i, n);
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
                    p !== null && fr(p);
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
        ge || t.flags & 512 && Zi(t);
      } catch (m) {
        X(t, t.return, m);
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
function Sa(e) {
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
function ka(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, o, s);
            }
          }
          var l = t.return;
          try {
            Zi(t);
          } catch (s) {
            X(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Zi(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
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
var Zm = Math.ceil, Fo = yt.ReactCurrentDispatcher, Ku = yt.ReactCurrentOwner, Be = yt.ReactCurrentBatchConfig, I = 0, le = null, ee = null, ae = 0, Ne = 0, mn = At(0), ne = 0, xr = null, Zt = 0, nl = 0, Qu = 0, rr = null, xe = null, Gu = 0, Rn = 1 / 0, ut = null, Do = !1, bi = null, Ot = null, qr = !1, Et = null, Uo = 0, or = 0, eu = null, fo = -1, po = 0;
function we() {
  return I & 6 ? J() : fo !== -1 ? fo : fo = J();
}
function zt(e) {
  return e.mode & 1 ? I & 2 && ae !== 0 ? ae & -ae : $m.transition !== null ? (po === 0 && (po = $c()), po) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uc(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < or)
    throw or = 0, eu = null, Error(k(185));
  Tr(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (nl |= n), ne === 4 && xt(e, ae)), Pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Rn = J() + 500, qo && jt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  $p(e, t);
  var r = Co(e, e === le ? ae : 0);
  if (r === 0)
    n !== null && Os(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Os(n), t === 1)
      e.tag === 0 ? Lm(xa.bind(null, e)) : lf(xa.bind(null, e)), Nm(function() {
        !(I & 6) && jt();
      }), n = null;
    else {
      switch (Ic(r)) {
        case 1:
          n = wu;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = xo;
          break;
        case 536870912:
          n = Lc;
          break;
        default:
          n = xo;
      }
      n = od(n, Jf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jf(e, t) {
  if (fo = -1, po = 0, I & 6)
    throw Error(k(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n)
    return null;
  var r = Co(e, e === le ? ae : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Bo(e, r);
  else {
    t = r;
    var o = I;
    I |= 2;
    var l = bf();
    (le !== e || ae !== t) && (ut = null, Rn = J() + 500, Kt(e, t));
    do
      try {
        bm();
        break;
      } catch (u) {
        qf(e, u);
      }
    while (1);
    Lu(), Fo.current = l, I = o, ee !== null ? t = 0 : (le = null, ae = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (o = Ti(e), o !== 0 && (r = o, t = tu(e, o))), t === 1)
      throw n = xr, Kt(e, 0), xt(e, r), Pe(e, J()), n;
    if (t === 6)
      xt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Jm(o) && (t = Bo(e, r), t === 2 && (l = Ti(e), l !== 0 && (r = l, t = tu(e, l))), t === 1))
        throw n = xr, Kt(e, 0), xt(e, r), Pe(e, J()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Bt(e, xe, ut);
          break;
        case 3:
          if (xt(e, r), (r & 130023424) === r && (t = Gu + 500 - J(), 10 < t)) {
            if (Co(e, 0) !== 0)
              break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              we(), e.pingedLanes |= e.suspendedLanes & o;
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
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Xe(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Mi(Bt.bind(null, e, xe, ut), r);
            break;
          }
          Bt(e, xe, ut);
          break;
        case 5:
          Bt(e, xe, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Pe(e, J()), e.callbackNode === n ? Jf.bind(null, e) : null;
}
function tu(e, t) {
  var n = rr;
  return e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256), e = Bo(e, t), e !== 2 && (t = xe, xe = n, t !== null && nu(t)), e;
}
function nu(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Jm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!Je(l(), o))
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
  for (t &= ~Qu, t &= ~nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xa(e) {
  if (I & 6)
    throw Error(k(327));
  Sn();
  var t = Co(e, 0);
  if (!(t & 1))
    return Pe(e, J()), null;
  var n = Bo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ti(e);
    r !== 0 && (t = r, n = tu(e, r));
  }
  if (n === 1)
    throw n = xr, Kt(e, 0), xt(e, t), Pe(e, J()), n;
  if (n === 6)
    throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bt(e, xe, ut), Pe(e, J()), null;
}
function Yu(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (Rn = J() + 500, qo && jt());
  }
}
function Jt(e) {
  Et !== null && Et.tag === 0 && !(I & 6) && Sn();
  var t = I;
  I |= 1;
  var n = Be.transition, r = j;
  try {
    if (Be.transition = null, j = 1, e)
      return e();
  } finally {
    j = r, Be.transition = n, I = t, !(I & 6) && jt();
  }
}
function Xu() {
  Ne = mn.current, H(mn);
}
function Kt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Tm(n)), ee !== null)
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch (Ru(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && No();
          break;
        case 3:
          Tn(), H(Ee), H(ye), Fu();
          break;
        case 5:
          ju(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          H(V);
          break;
        case 19:
          H(V);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          Xu();
      }
      n = n.return;
    }
  if (le = e, ee = e = Lt(e.current, null), ae = Ne = t, ne = 0, xr = null, Qu = nl = Zt = 0, xe = rr = null, Wt !== null) {
    for (t = 0; t < Wt.length; t++)
      if (n = Wt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function qf(e, t) {
  do {
    var n = ee;
    try {
      if (Lu(), so.current = jo, Ao) {
        for (var r = K.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ao = !1;
      }
      if (Xt = 0, oe = te = K = null, tr = !1, wr = 0, Ku.current = null, n === null || n.return === null) {
        ne = 1, xr = t, ee = null;
        break;
      }
      e: {
        var l = e, i = n.return, u = n, s = t;
        if (t = ae, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, h = u, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = aa(i);
          if (y !== null) {
            y.flags &= -257, ca(y, i, u, l, t), y.mode & 1 && sa(l, a, t), t = y, s = a;
            var v = t.updateQueue;
            if (v === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(s), t.updateQueue = g;
            } else
              v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              sa(l, a, t), Zu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var P = aa(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), ca(P, i, u, l, t), Ou(Nn(s, u));
            break e;
          }
        }
        l = s = Nn(s, u), ne !== 4 && (ne = 2), rr === null ? rr = [l] : rr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var f = Mf(l, s, t);
              na(l, f);
              break e;
            case 1:
              u = s;
              var c = l.type, d = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ot === null || !Ot.has(d)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = Af(l, u, t);
                na(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      td(n);
    } catch (C) {
      t = C, ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bf() {
  var e = Fo.current;
  return Fo.current = jo, e === null ? jo : e;
}
function Zu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), le === null || !(Zt & 268435455) && !(nl & 268435455) || xt(le, ae);
}
function Bo(e, t) {
  var n = I;
  I |= 2;
  var r = bf();
  (le !== e || ae !== t) && (ut = null, Kt(e, t));
  do
    try {
      qm();
      break;
    } catch (o) {
      qf(e, o);
    }
  while (1);
  if (Lu(), I = n, Fo.current = r, ee !== null)
    throw Error(k(261));
  return le = null, ae = 0, ne;
}
function qm() {
  for (; ee !== null; )
    ed(ee);
}
function bm() {
  for (; ee !== null && !Ep(); )
    ed(ee);
}
function ed(e) {
  var t = rd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? td(e) : ee = t, Ku.current = null;
}
function td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Qm(n, t), n !== null) {
        n.flags &= 32767, ee = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, ee = null;
        return;
      }
    } else if (n = Km(n, t, Ne), n !== null) {
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
  var r = j, o = Be.transition;
  try {
    Be.transition = null, j = 1, eh(e, t, n, r);
  } finally {
    Be.transition = o, j = r;
  }
  return null;
}
function eh(e, t, n, r) {
  do
    Sn();
  while (Et !== null);
  if (I & 6)
    throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (Ip(e, l), e === le && (ee = le = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || qr || (qr = !0, od(xo, function() {
    return Sn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = Be.transition, Be.transition = null;
    var i = j;
    j = 1;
    var u = I;
    I |= 4, Ku.current = null, Ym(e, n), Xf(n, e), Sm($i), Eo = !!Li, $i = Li = null, e.current = n, Xm(n), _p(), I = u, j = i, Be.transition = l;
  } else
    e.current = n;
  if (qr && (qr = !1, Et = e, Uo = o), l = e.pendingLanes, l === 0 && (Ot = null), Np(n.stateNode), Pe(e, J()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Do)
    throw Do = !1, e = bi, bi = null, e;
  return Uo & 1 && e.tag !== 0 && Sn(), l = e.pendingLanes, l & 1 ? e === eu ? or++ : (or = 0, eu = e) : or = 0, jt(), null;
}
function Sn() {
  if (Et !== null) {
    var e = Ic(Uo), t = Be.transition, n = j;
    try {
      if (Be.transition = null, j = 16 > e ? 16 : e, Et === null)
        var r = !1;
      else {
        if (e = Et, Et = null, Uo = 0, I & 6)
          throw Error(k(331));
        var o = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var l = E, i = l.child;
          if (E.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, h, l);
                  }
                  var p = h.child;
                  if (p !== null)
                    p.return = h, E = p;
                  else
                    for (; E !== null; ) {
                      h = E;
                      var m = h.sibling, y = h.return;
                      if (Qf(h), h === a) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = y, E = m;
                        break;
                      }
                      E = y;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var P = g.sibling;
                    g.sibling = null, g = P;
                  } while (g !== null);
                }
              }
              E = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null)
            i.return = l, E = i;
          else
            e:
              for (; E !== null; ) {
                if (l = E, l.flags & 2048)
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(9, l, l.return);
                  }
                var f = l.sibling;
                if (f !== null) {
                  f.return = l.return, E = f;
                  break e;
                }
                E = l.return;
              }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, E = d;
          else
            e:
              for (i = c; E !== null; ) {
                if (u = E, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        tl(9, u);
                    }
                  } catch (C) {
                    X(u, u.return, C);
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
        if (I = o, jt(), ot && typeof ot.onPostCommitFiberRoot == "function")
          try {
            ot.onPostCommitFiberRoot(Go, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      j = n, Be.transition = t;
    }
  }
  return !1;
}
function Ca(e, t, n) {
  t = Nn(n, t), t = Mf(e, t, 1), e = Rt(e, t, 1), t = we(), e !== null && (Tr(e, 1, t), Pe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3)
    Ca(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ca(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ot === null || !Ot.has(r))) {
          e = Nn(n, e), e = Af(t, e, 1), t = Rt(t, e, 1), e = we(), t !== null && (Tr(t, 1, e), Pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function th(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ae & n) === n && (ne === 4 || ne === 3 && (ae & 130023424) === ae && 500 > J() - Gu ? Kt(e, 0) : Qu |= n), Pe(e, t);
}
function nd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Hr, Hr <<= 1, !(Hr & 130023424) && (Hr = 4194304)) : t = 1);
  var n = we();
  e = mt(e, t), e !== null && (Tr(e, t, n), Pe(e, n));
}
function nh(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), nd(e, n);
}
function rh(e, t) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current)
      Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Ce = !1, Vm(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else
    Ce = !1, W && t.flags & 1048576 && uf(t, zo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      co(e, t), e = t.pendingProps;
      var o = En(t, ye.current);
      wn(t, n), o = Uu(null, t, r, e, o, n);
      var l = Bu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, _e(r) ? (l = !0, Ro(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Mu(t), o.updater = el, t.stateNode = o, o._reactInternals = t, Hi(t, r, e, n), t = Ki(null, t, r, !0, l, n)) : (t.tag = 0, W && l && Nu(t), ve(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (co(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = lh(r), e = Qe(r, e), o) {
          case 0:
            t = Vi(null, t, r, e, n);
            break e;
          case 1:
            t = pa(null, t, r, e, n);
            break e;
          case 11:
            t = fa(null, t, r, e, n);
            break e;
          case 14:
            t = da(null, t, r, Qe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), Vi(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), pa(e, t, r, o, n);
    case 3:
      e: {
        if (Uf(t), e === null)
          throw Error(k(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, pf(e, t), Io(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated)
          if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Nn(Error(k(423)), t), t = ma(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Nn(Error(k(424)), t), t = ma(e, t, r, n, o);
            break e;
          } else
            for (Oe = Nt(t.stateNode.containerInfo.firstChild), ze = t, W = !0, Ye = null, n = ff(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_n(), r === o) {
            t = ht(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return mf(t), e === null && Di(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Ii(r, o) ? i = null : l !== null && Ii(r, l) && (t.flags |= 32), Df(e, t), ve(e, t, i, n), t.child;
    case 6:
      return e === null && Di(t), null;
    case 13:
      return Bf(e, t, n);
    case 4:
      return Au(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Pn(t, null, r, n) : ve(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), fa(e, t, r, o, n);
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, U(Lo, r._currentValue), r._currentValue = i, l !== null)
          if (Je(l.value, i)) {
            if (l.children === o.children && !Ee.current) {
              t = ht(e, t, n);
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
                      s = ft(-1, n & -n), s.tag = 2;
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null ? s.next = s : (s.next = h.next, h.next = s), a.pending = s;
                      }
                    }
                    l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ui(
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
                  throw Error(k(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ui(i, n, t), i = l.sibling;
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
        ve(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, wn(t, n), o = He(o), r = r(o), t.flags |= 1, ve(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qe(r, t.pendingProps), o = Qe(r.type, o), da(e, t, r, o, n);
    case 15:
      return jf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qe(r, o), co(e, t), t.tag = 1, _e(r) ? (e = !0, Ro(t)) : e = !1, wn(t, n), If(t, r, o), Hi(t, r, o, n), Ki(null, t, r, !0, e, n);
    case 19:
      return Hf(e, t, n);
    case 22:
      return Ff(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function od(e, t) {
  return Oc(e, t);
}
function oh(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new oh(e, t, n, r);
}
function Ju(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function lh(e) {
  if (typeof e == "function")
    return Ju(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gu)
      return 11;
    if (e === yu)
      return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function mo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ju(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case rn:
          return Qt(n.children, o, l, t);
        case hu:
          i = 8, o |= 8;
          break;
        case di:
          return e = Ue(12, n, t, o | 2), e.elementType = di, e.lanes = l, e;
        case pi:
          return e = Ue(13, n, t, o), e.elementType = pi, e.lanes = l, e;
        case mi:
          return e = Ue(19, n, t, o), e.elementType = mi, e.lanes = l, e;
        case pc:
          return rl(n, o, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case fc:
                i = 10;
                break e;
              case dc:
                i = 9;
                break e;
              case gu:
                i = 11;
                break e;
              case yu:
                i = 14;
                break e;
              case wt:
                i = 16, r = null;
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
  return t = Ue(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function Qt(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function rl(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = pc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ri(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function oi(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ih(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qu(e, t, n, r, o, l, i, u, s) {
  return e = new ih(e, t, n, u, s), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ue(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(l), e;
}
function uh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ld(e) {
  if (!e)
    return It;
  e = e._reactInternals;
  e: {
    if (bt(e) !== e || e.tag !== 1)
      throw Error(k(170));
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
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n))
      return of(e, n, t);
  }
  return t;
}
function id(e, t, n, r, o, l, i, u, s) {
  return e = qu(n, r, !0, e, o, l, i, u, s), e.context = ld(null), n = e.current, r = we(), o = zt(n), l = ft(r, o), l.callback = t ?? null, Rt(n, l, o), e.current.lanes = o, Tr(e, o, r), Pe(e, r), e;
}
function ol(e, t, n, r) {
  var o = t.current, l = we(), i = zt(o);
  return n = ld(n), t.context === null ? t.context = n : t.pendingContext = n, t = ft(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(o, t, i), e !== null && (Ze(e, o, i, l), uo(e, o, i)), i;
}
function Ho(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ea(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bu(e, t) {
  Ea(e, t), (e = e.alternate) && Ea(e, t);
}
function sh() {
  return null;
}
var ud = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function es(e) {
  this._internalRoot = e;
}
ll.prototype.render = es.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(k(409));
  ol(e, t, null, null);
};
ll.prototype.unmount = es.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function() {
      ol(null, e, null, null);
    }), t[pt] = null;
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++)
      ;
    kt.splice(n, 0, e), n === 0 && Dc(e);
  }
};
function ts(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _a() {
}
function ah(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var a = Ho(i);
        l.call(a);
      };
    }
    var i = id(t, r, e, 0, null, !1, !1, "", _a);
    return e._reactRootContainer = i, e[pt] = i.current, mr(e.nodeType === 8 ? e.parentNode : e), Jt(), i;
  }
  for (; o = e.lastChild; )
    e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Ho(s);
      u.call(a);
    };
  }
  var s = qu(e, 0, !1, null, null, !1, !1, "", _a);
  return e._reactRootContainer = s, e[pt] = s.current, mr(e.nodeType === 8 ? e.parentNode : e), Jt(function() {
    ol(t, s, n, r);
  }), s;
}
function ul(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var s = Ho(i);
        u.call(s);
      };
    }
    ol(t, i, e, o);
  } else
    i = ah(n, t, e, o, r);
  return Ho(i);
}
Mc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yn(t.pendingLanes);
        n !== 0 && (Su(t, n | 1), Pe(t, J()), !(I & 6) && (Rn = J() + 500, jt()));
      }
      break;
    case 13:
      Jt(function() {
        var r = mt(e, 1);
        if (r !== null) {
          var o = we();
          Ze(r, e, 1, o);
        }
      }), bu(e, 1);
  }
};
ku = function(e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ze(t, e, 134217728, n);
    }
    bu(e, 134217728);
  }
};
Ac = function(e) {
  if (e.tag === 13) {
    var t = zt(e), n = mt(e, t);
    if (n !== null) {
      var r = we();
      Ze(n, e, t, r);
    }
    bu(e, t);
  }
};
jc = function() {
  return j;
};
Fc = function(e, t) {
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
            var o = Jo(r);
            if (!o)
              throw Error(k(90));
            hc(r), yi(r, o);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      t = n.value, t != null && hn(e, !!n.multiple, t, !1);
  }
};
Ec = Yu;
_c = Jt;
var ch = { usingClientEntryPoint: !1, Events: [Rr, sn, Jo, xc, Cc, Yu] }, Vn = { findFiberByHostInstance: Ht, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fh = { bundleType: Vn.bundleType, version: Vn.version, rendererPackageName: Vn.rendererPackageName, rendererConfig: Vn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: yt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Nc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vn.findFiberByHostInstance || sh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!br.isDisabled && br.supportsFiber)
    try {
      Go = br.inject(fh), ot = br;
    } catch {
    }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch;
Ie.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ts(t))
    throw Error(k(200));
  return uh(e, t, null, n);
};
Ie.createRoot = function(e, t) {
  if (!ts(e))
    throw Error(k(299));
  var n = !1, r = "", o = ud;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qu(e, 1, !1, null, null, n, !1, r, o), e[pt] = t.current, mr(e.nodeType === 8 ? e.parentNode : e), new es(t);
};
Ie.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Nc(t), e = e === null ? null : e.stateNode, e;
};
Ie.flushSync = function(e) {
  return Jt(e);
};
Ie.hydrate = function(e, t, n) {
  if (!il(t))
    throw Error(k(200));
  return ul(null, e, t, !0, n);
};
Ie.hydrateRoot = function(e, t, n) {
  if (!ts(e))
    throw Error(k(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = ud;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = id(t, null, e, 1, n ?? null, o, !1, l, i), e[pt] = t.current, mr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
        n,
        o
      );
  return new ll(t);
};
Ie.render = function(e, t, n) {
  if (!il(t))
    throw Error(k(200));
  return ul(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function(e) {
  if (!il(e))
    throw Error(k(40));
  return e._reactRootContainer ? (Jt(function() {
    ul(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ie.unstable_batchedUpdates = Yu;
Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!il(n))
    throw Error(k(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(k(38));
  return ul(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function sd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd);
    } catch (e) {
      console.error(e);
    }
}
sd(), uc.exports = Ie;
var dh = uc.exports, ad, Pa = dh;
ad = Pa.createRoot, Pa.hydrateRoot;
function ph(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ta = "$$material";
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
function sl(e, t) {
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
var mh = !1;
function hh(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function gh(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var yh = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var l;
      r.tags.length === 0 ? r.insertionPoint ? l = r.insertionPoint.nextSibling : r.prepend ? l = r.container.firstChild : l = r.before : l = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, l), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !mh : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(gh(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = hh(o);
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
}(), he = "-ms-", Wo = "-moz-", M = "-webkit-", cd = "comm", ns = "rule", rs = "decl", vh = "@import", fd = "@keyframes", wh = "@layer", Sh = Math.abs, al = String.fromCharCode, kh = Object.assign;
function xh(e, t) {
  return se(e, 0) ^ 45 ? (((t << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function dd(e) {
  return e.trim();
}
function Ch(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function A(e, t, n) {
  return e.replace(t, n);
}
function ru(e, t) {
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
function os(e) {
  return e.length;
}
function eo(e, t) {
  return t.push(e), e;
}
function Eh(e, t) {
  return e.map(t).join("");
}
var cl = 1, On = 1, pd = 0, Te = 0, b = 0, In = "";
function fl(e, t, n, r, o, l, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: l, line: cl, column: On, length: i, return: "" };
}
function Kn(e, t) {
  return kh(fl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _h() {
  return b;
}
function Ph() {
  return b = Te > 0 ? se(In, --Te) : 0, On--, b === 10 && (On = 1, cl--), b;
}
function Le() {
  return b = Te < pd ? se(In, Te++) : 0, On++, b === 10 && (On = 1, cl++), b;
}
function it() {
  return se(In, Te);
}
function ho() {
  return Te;
}
function zr(e, t) {
  return Cr(In, e, t);
}
function Er(e) {
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
function md(e) {
  return cl = On = 1, pd = tt(In = e), Te = 0, [];
}
function hd(e) {
  return In = "", e;
}
function go(e) {
  return dd(zr(Te - 1, ou(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Th(e) {
  for (; (b = it()) && b < 33; )
    Le();
  return Er(e) > 2 || Er(b) > 3 ? "" : " ";
}
function Nh(e, t) {
  for (; --t && Le() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97); )
    ;
  return zr(e, ho() + (t < 6 && it() == 32 && Le() == 32));
}
function ou(e) {
  for (; Le(); )
    switch (b) {
      case e:
        return Te;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ou(b);
        break;
      case 40:
        e === 41 && ou(e);
        break;
      case 92:
        Le();
        break;
    }
  return Te;
}
function Rh(e, t) {
  for (; Le() && e + b !== 47 + 10; )
    if (e + b === 42 + 42 && it() === 47)
      break;
  return "/*" + zr(t, Te - 1) + "*" + al(e === 47 ? e : Le());
}
function Oh(e) {
  for (; !Er(it()); )
    Le();
  return zr(e, Te);
}
function zh(e) {
  return hd(yo("", null, null, null, [""], e = md(e), 0, [0], e));
}
function yo(e, t, n, r, o, l, i, u, s) {
  for (var a = 0, h = 0, p = i, m = 0, y = 0, v = 0, g = 1, P = 1, f = 1, c = 0, d = "", w = o, C = l, x = r, S = d; P; )
    switch (v = c, c = Le()) {
      case 40:
        if (v != 108 && se(S, p - 1) == 58) {
          ru(S += A(go(c), "&", "&\f"), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += go(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Th(v);
        break;
      case 92:
        S += Nh(ho() - 1, 7);
        continue;
      case 47:
        switch (it()) {
          case 42:
          case 47:
            eo(Lh(Rh(Le(), ho()), t, n), s);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * g:
        u[a++] = tt(S) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            P = 0;
          case 59 + h:
            f == -1 && (S = A(S, /\f/g, "")), y > 0 && tt(S) - p && eo(y > 32 ? Ra(S + ";", r, n, p - 1) : Ra(A(S, " ", "") + ";", r, n, p - 2), s);
            break;
          case 59:
            S += ";";
          default:
            if (eo(x = Na(S, t, n, a, h, o, u, d, w = [], C = [], p), l), c === 123)
              if (h === 0)
                yo(S, t, x, x, w, l, p, u, C);
              else
                switch (m === 99 && se(S, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yo(e, x, x, r && eo(Na(e, x, x, 0, 0, o, u, d, o, w = [], p), C), o, C, p, u, r ? w : C);
                    break;
                  default:
                    yo(S, x, x, x, [""], C, 0, u, C);
                }
        }
        a = h = y = 0, g = f = 1, d = S = "", p = i;
        break;
      case 58:
        p = 1 + tt(S), y = v;
      default:
        if (g < 1) {
          if (c == 123)
            --g;
          else if (c == 125 && g++ == 0 && Ph() == 125)
            continue;
        }
        switch (S += al(c), c * g) {
          case 38:
            f = h > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[a++] = (tt(S) - 1) * f, f = 1;
            break;
          case 64:
            it() === 45 && (S += go(Le())), m = it(), h = p = tt(d = S += Oh(ho())), c++;
            break;
          case 45:
            v === 45 && tt(S) == 2 && (g = 0);
        }
    }
  return l;
}
function Na(e, t, n, r, o, l, i, u, s, a, h) {
  for (var p = o - 1, m = o === 0 ? l : [""], y = os(m), v = 0, g = 0, P = 0; v < r; ++v)
    for (var f = 0, c = Cr(e, p + 1, p = Sh(g = i[v])), d = e; f < y; ++f)
      (d = dd(g > 0 ? m[f] + " " + c : A(c, /&\f/g, m[f]))) && (s[P++] = d);
  return fl(e, t, n, o === 0 ? ns : u, s, a, h);
}
function Lh(e, t, n) {
  return fl(e, t, n, cd, al(_h()), Cr(e, 2, -2), 0);
}
function Ra(e, t, n, r) {
  return fl(e, t, n, rs, Cr(e, 0, r), Cr(e, r + 1, -1), r);
}
function kn(e, t) {
  for (var n = "", r = os(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function $h(e, t, n, r) {
  switch (e.type) {
    case wh:
      if (e.children.length)
        break;
    case vh:
    case rs:
      return e.return = e.return || e.value;
    case cd:
      return "";
    case fd:
      return e.return = e.value + "{" + kn(e.children, r) + "}";
    case ns:
      e.value = e.props.join(",");
  }
  return tt(n = kn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ih(e) {
  var t = os(e);
  return function(n, r, o, l) {
    for (var i = "", u = 0; u < t; u++)
      i += e[u](n, r, o, l) || "";
    return i;
  };
}
function Mh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function gd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ah = function(t, n, r) {
  for (var o = 0, l = 0; o = l, l = it(), o === 38 && l === 12 && (n[r] = 1), !Er(l); )
    Le();
  return zr(t, Te);
}, jh = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Er(o)) {
      case 0:
        o === 38 && it() === 12 && (n[r] = 1), t[r] += Ah(Te - 1, n, r);
        break;
      case 2:
        t[r] += go(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = it() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += al(o);
    }
  while (o = Le());
  return t;
}, Fh = function(t, n) {
  return hd(jh(md(t), n));
}, Oa = /* @__PURE__ */ new WeakMap(), Dh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Oa.get(r)) && !o) {
      Oa.set(t, !0);
      for (var l = [], i = Fh(n, l), u = r.props, s = 0, a = 0; s < i.length; s++)
        for (var h = 0; h < u.length; h++, a++)
          t.props[a] = l[s] ? i[s].replace(/&\f/g, u[h]) : u[h] + " " + i[s];
    }
  }
}, Uh = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function yd(e, t) {
  switch (xh(e, t)) {
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
      return M + e + Wo + e + he + e + e;
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
            return A(e, /(.+:)(.+)-([^]+)/, "$1" + M + "$2-$3$1" + Wo + (se(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ru(e, "stretch") ? yd(A(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (se(e, t + 1) !== 115)
        break;
    case 6444:
      switch (se(e, tt(e) - 3 - (~ru(e, "!important") && 10))) {
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
var Bh = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case rs:
        t.return = yd(t.value, t.length);
        break;
      case fd:
        return kn([Kn(t, {
          value: A(t.value, "@", "@" + M)
        })], o);
      case ns:
        if (t.length)
          return Eh(t.props, function(l) {
            switch (Ch(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return kn([Kn(t, {
                  props: [A(l, /:(read-\w+)/, ":" + Wo + "$1")]
                })], o);
              case "::placeholder":
                return kn([Kn(t, {
                  props: [A(l, /:(plac\w+)/, ":" + M + "input-$1")]
                }), Kn(t, {
                  props: [A(l, /:(plac\w+)/, ":" + Wo + "$1")]
                }), Kn(t, {
                  props: [A(l, /:(plac\w+)/, he + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Hh = [Bh], Wh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(g) {
      var P = g.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Hh, l = {}, i, u = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(g) {
      for (var P = g.getAttribute("data-emotion").split(" "), f = 1; f < P.length; f++)
        l[P[f]] = !0;
      u.push(g);
    }
  );
  var s, a = [Dh, Uh];
  {
    var h, p = [$h, Mh(function(g) {
      h.insert(g);
    })], m = Ih(a.concat(o, p)), y = function(P) {
      return kn(zh(P), m);
    };
    s = function(P, f, c, d) {
      h = c, y(P ? P + "{" + f.styles + "}" : f.styles), d && (v.inserted[f.name] = !0);
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
    inserted: l,
    registered: {},
    insert: s
  };
  return v.sheet.hydrate(u), v;
}, vd = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie = typeof Symbol == "function" && Symbol.for, ls = ie ? Symbol.for("react.element") : 60103, is = ie ? Symbol.for("react.portal") : 60106, dl = ie ? Symbol.for("react.fragment") : 60107, pl = ie ? Symbol.for("react.strict_mode") : 60108, ml = ie ? Symbol.for("react.profiler") : 60114, hl = ie ? Symbol.for("react.provider") : 60109, gl = ie ? Symbol.for("react.context") : 60110, us = ie ? Symbol.for("react.async_mode") : 60111, yl = ie ? Symbol.for("react.concurrent_mode") : 60111, vl = ie ? Symbol.for("react.forward_ref") : 60112, wl = ie ? Symbol.for("react.suspense") : 60113, Vh = ie ? Symbol.for("react.suspense_list") : 60120, Sl = ie ? Symbol.for("react.memo") : 60115, kl = ie ? Symbol.for("react.lazy") : 60116, Kh = ie ? Symbol.for("react.block") : 60121, Qh = ie ? Symbol.for("react.fundamental") : 60117, Gh = ie ? Symbol.for("react.responder") : 60118, Yh = ie ? Symbol.for("react.scope") : 60119;
function Ae(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ls:
        switch (e = e.type, e) {
          case us:
          case yl:
          case dl:
          case ml:
          case pl:
          case wl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case gl:
              case vl:
              case kl:
              case Sl:
              case hl:
                return e;
              default:
                return t;
            }
        }
      case is:
        return t;
    }
  }
}
function wd(e) {
  return Ae(e) === yl;
}
F.AsyncMode = us;
F.ConcurrentMode = yl;
F.ContextConsumer = gl;
F.ContextProvider = hl;
F.Element = ls;
F.ForwardRef = vl;
F.Fragment = dl;
F.Lazy = kl;
F.Memo = Sl;
F.Portal = is;
F.Profiler = ml;
F.StrictMode = pl;
F.Suspense = wl;
F.isAsyncMode = function(e) {
  return wd(e) || Ae(e) === us;
};
F.isConcurrentMode = wd;
F.isContextConsumer = function(e) {
  return Ae(e) === gl;
};
F.isContextProvider = function(e) {
  return Ae(e) === hl;
};
F.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ls;
};
F.isForwardRef = function(e) {
  return Ae(e) === vl;
};
F.isFragment = function(e) {
  return Ae(e) === dl;
};
F.isLazy = function(e) {
  return Ae(e) === kl;
};
F.isMemo = function(e) {
  return Ae(e) === Sl;
};
F.isPortal = function(e) {
  return Ae(e) === is;
};
F.isProfiler = function(e) {
  return Ae(e) === ml;
};
F.isStrictMode = function(e) {
  return Ae(e) === pl;
};
F.isSuspense = function(e) {
  return Ae(e) === wl;
};
F.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === dl || e === yl || e === ml || e === pl || e === wl || e === Vh || typeof e == "object" && e !== null && (e.$$typeof === kl || e.$$typeof === Sl || e.$$typeof === hl || e.$$typeof === gl || e.$$typeof === vl || e.$$typeof === Qh || e.$$typeof === Gh || e.$$typeof === Yh || e.$$typeof === Kh);
};
F.typeOf = Ae;
vd.exports = F;
var Xh = vd.exports, Sd = Xh, Zh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Jh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, kd = {};
kd[Sd.ForwardRef] = Zh;
kd[Sd.Memo] = Jh;
var qh = !0;
function xd(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ss = function(t, n, r) {
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
  qh === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, as = function(t, n, r) {
  ss(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var l = n;
    do
      t.insert(n === l ? "." + o : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function bh(e) {
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
var eg = {
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
}, tg = !1, ng = /[A-Z]|^ms/g, rg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cd = function(t) {
  return t.charCodeAt(1) === 45;
}, za = function(t) {
  return t != null && typeof t != "boolean";
}, li = /* @__PURE__ */ gd(function(e) {
  return Cd(e) ? e : e.replace(ng, "-$&").toLowerCase();
}), La = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(rg, function(r, o, l) {
          return nt = {
            name: o,
            styles: l,
            next: nt
          }, o;
        });
  }
  return eg[t] !== 1 && !Cd(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, og = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _r(e, t, n) {
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
        return nt = {
          name: o.name,
          styles: o.styles,
          next: nt
        }, o.name;
      var l = n;
      if (l.styles !== void 0) {
        var i = l.next;
        if (i !== void 0)
          for (; i !== void 0; )
            nt = {
              name: i.name,
              styles: i.styles,
              next: nt
            }, i = i.next;
        var u = l.styles + ";";
        return u;
      }
      return lg(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = nt, a = n(e);
        return nt = s, _r(e, t, a);
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
function lg(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _r(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object") {
        var u = i;
        t != null && t[u] !== void 0 ? r += l + "{" + t[u] + "}" : za(u) && (r += li(l) + ":" + La(l, u) + ";");
      } else {
        if (l === "NO_COMPONENT_SELECTOR" && tg)
          throw new Error(og);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            za(i[s]) && (r += li(l) + ":" + La(l, i[s]) + ";");
        else {
          var a = _r(e, t, i);
          switch (l) {
            case "animation":
            case "animationName": {
              r += li(l) + ":" + a + ";";
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
var $a = /label:\s*([^\s;{]+)\s*(;|$)/g, nt;
function xl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nt = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    r = !1, o += _r(n, t, l);
  else {
    var i = l;
    o += i[0];
  }
  for (var u = 1; u < e.length; u++)
    if (o += _r(n, t, e[u]), r) {
      var s = l;
      o += s[u];
    }
  $a.lastIndex = 0;
  for (var a = "", h; (h = $a.exec(o)) !== null; )
    a += "-" + h[1];
  var p = bh(o) + a;
  return {
    name: p,
    styles: o,
    next: nt
  };
}
var ig = function(t) {
  return t();
}, Ed = ci["useInsertionEffect"] ? ci["useInsertionEffect"] : !1, _d = Ed || ig, Ia = Ed || N.useLayoutEffect, ug = !1, Pd = /* @__PURE__ */ N.createContext(
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
Pd.Provider;
var cs = function(t) {
  return /* @__PURE__ */ N.forwardRef(function(n, r) {
    var o = N.useContext(Pd);
    return t(n, o, r);
  });
}, Lr = /* @__PURE__ */ N.createContext({}), fs = {}.hasOwnProperty, lu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", sg = function(t, n) {
  var r = {};
  for (var o in n)
    fs.call(n, o) && (r[o] = n[o]);
  return r[lu] = t, r;
}, ag = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ss(n, r, o), _d(function() {
    return as(n, r, o);
  }), null;
}, cg = /* @__PURE__ */ cs(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[lu], l = [r], i = "";
  typeof e.className == "string" ? i = xd(t.registered, l, e.className) : e.className != null && (i = e.className + " ");
  var u = xl(l, void 0, N.useContext(Lr));
  i += t.key + "-" + u.name;
  var s = {};
  for (var a in e)
    fs.call(e, a) && a !== "css" && a !== lu && !ug && (s[a] = e[a]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(ag, {
    cache: t,
    serialized: u,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ N.createElement(o, s));
}), fg = cg, ii = { exports: {} }, Ma;
function dg() {
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
  }(ii)), ii.exports;
}
dg();
var Aa = function(t, n) {
  var r = arguments;
  if (n == null || !fs.call(n, "css"))
    return N.createElement.apply(void 0, r);
  var o = r.length, l = new Array(o);
  l[0] = fg, l[1] = sg(t, n);
  for (var i = 2; i < o; i++)
    l[i] = r[i];
  return N.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Aa || (Aa = {}));
var pg = /* @__PURE__ */ cs(function(e, t) {
  var n = e.styles, r = xl([n], void 0, N.useContext(Lr)), o = N.useRef();
  return Ia(function() {
    var l = t.key + "-global", i = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), u = !1, s = document.querySelector('style[data-emotion="' + l + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (u = !0, s.setAttribute("data-emotion", l), i.hydrate([s])), o.current = [i, u], function() {
      i.flush();
    };
  }, [t]), Ia(function() {
    var l = o.current, i = l[0], u = l[1];
    if (u) {
      l[1] = !1;
      return;
    }
    if (r.next !== void 0 && as(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), mg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hg = /* @__PURE__ */ gd(
  function(e) {
    return mg.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gg = !1, yg = hg, vg = function(t) {
  return t !== "theme";
}, ja = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? yg : vg;
}, Fa = function(t, n, r) {
  var o;
  if (n) {
    var l = n.shouldForwardProp;
    o = t.__emotion_forwardProp && l ? function(i) {
      return t.__emotion_forwardProp(i) && l(i);
    } : l;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, wg = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ss(n, r, o), _d(function() {
    return as(n, r, o);
  }), null;
}, Sg = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, l, i;
  n !== void 0 && (l = n.label, i = n.target);
  var u = Fa(t, n, r), s = u || ja(o), a = !s("as");
  return function() {
    var h = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && p.push("label:" + l + ";"), h[0] == null || h[0].raw === void 0)
      p.push.apply(p, h);
    else {
      var m = h[0];
      p.push(m[0]);
      for (var y = h.length, v = 1; v < y; v++)
        p.push(h[v], m[v]);
    }
    var g = cs(function(P, f, c) {
      var d = a && P.as || o, w = "", C = [], x = P;
      if (P.theme == null) {
        x = {};
        for (var S in P)
          x[S] = P[S];
        x.theme = N.useContext(Lr);
      }
      typeof P.className == "string" ? w = xd(f.registered, C, P.className) : P.className != null && (w = P.className + " ");
      var T = xl(p.concat(C), f.registered, x);
      w += f.key + "-" + T.name, i !== void 0 && (w += " " + i);
      var D = a && u === void 0 ? ja(d) : s, O = {};
      for (var de in P)
        a && de === "as" || D(de) && (O[de] = P[de]);
      return O.className = w, c && (O.ref = c), /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(wg, {
        cache: f,
        serialized: T,
        isStringTag: typeof d == "string"
      }), /* @__PURE__ */ N.createElement(d, O));
    });
    return g.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = p, g.__emotion_forwardProp = u, Object.defineProperty(g, "toString", {
      value: function() {
        return i === void 0 && gg ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), g.withComponent = function(P, f) {
      var c = e(P, ce({}, n, f, {
        shouldForwardProp: Fa(g, f, !0)
      }));
      return c.apply(void 0, p);
    }, g;
  };
}, kg = [
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
], Da = Sg.bind(null);
kg.forEach(function(e) {
  Da[e] = Da(e);
});
function xg(e) {
  return e == null || Object.keys(e).length === 0;
}
function Cg(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ $(pg, {
    styles: typeof t == "function" ? (o) => t(xg(o) ? n : o) : t
  });
}
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ua = [];
function Eg(e) {
  return Ua[0] = e, xl(Ua);
}
function tn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Td(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || !tn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Td(e[n]);
  }), t;
}
function Vo(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? ce({}, e) : e;
  return tn(e) && tn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) ? r[o] = t[o] : tn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && tn(e[o]) ? r[o] = Vo(e[o], t[o], n) : n.clone ? r[o] = tn(t[o]) ? Td(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const _g = ["values", "unit", "step"], Pg = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ce({}, n, {
    [r.key]: r.val
  }), {});
};
function Tg(e) {
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
  } = e, o = sl(e, _g), l = Pg(t), i = Object.keys(l);
  function u(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function s(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function a(m, y) {
    const v = i.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : y) - r / 100}${n})`;
  }
  function h(m) {
    return i.indexOf(m) + 1 < i.length ? a(m, i[i.indexOf(m) + 1]) : u(m);
  }
  function p(m) {
    const y = i.indexOf(m);
    return y === 0 ? u(i[1]) : y === i.length - 1 ? s(i[y]) : a(m, i[i.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return ce({
    keys: i,
    values: l,
    up: u,
    down: s,
    between: a,
    only: h,
    not: p,
    unit: n
  }, o);
}
const Ng = {
  borderRadius: 4
}, Rg = Ng;
function lr(e, t) {
  return t ? Vo(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ds = {
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
  up: (e) => `@media (min-width:${ds[e]}px)`
};
function gt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Ba;
    return t.reduce((i, u, s) => (i[l.up(l.keys[s])] = n(t[s]), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Ba;
    return Object.keys(t).reduce((i, u) => {
      if (Object.keys(l.values || ds).indexOf(u) !== -1) {
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
function Og(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const l = e.up(o);
    return r[l] = {}, r;
  }, {})) || {};
}
function Ha(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Nd(e) {
  if (typeof e != "string")
    throw new Error(ph(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Cl(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, l) => o && o[l] ? o[l] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function Ko(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Cl(e, n) || r, t && (o = t(o, r, e)), o;
}
function q(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, l = (i) => {
    if (i[t] == null)
      return null;
    const u = i[t], s = i.theme, a = Cl(s, r) || {};
    return gt(i, u, (p) => {
      let m = Ko(a, o, p);
      return p === m && typeof p == "string" && (m = Ko(a, o, `${t}${p === "default" ? "" : Nd(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function zg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Lg = {
  m: "margin",
  p: "padding"
}, $g = {
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
}, Ig = zg((e) => {
  if (e.length > 2)
    if (Wa[e])
      e = Wa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Lg[t], o = $g[n] || "";
  return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
}), ps = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ms = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...ps, ...ms];
function $r(e, t, n, r) {
  var o;
  const l = (o = Cl(e, t, !1)) != null ? o : n;
  return typeof l == "number" ? (i) => typeof i == "string" ? i : l * i : Array.isArray(l) ? (i) => typeof i == "string" ? i : l[i] : typeof l == "function" ? l : () => {
  };
}
function Rd(e) {
  return $r(e, "spacing", 8);
}
function Ir(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Mg(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = Ir(t, n), r), {});
}
function Ag(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const o = Ig(n), l = Mg(o, r), i = e[n];
  return gt(e, i, l);
}
function Od(e, t) {
  const n = Rd(e.theme);
  return Object.keys(e).map((r) => Ag(e, t, r, n)).reduce(lr, {});
}
function G(e) {
  return Od(e, ps);
}
G.propTypes = {};
G.filterProps = ps;
function Y(e) {
  return Od(e, ms);
}
Y.propTypes = {};
Y.filterProps = ms;
function jg(e = 8) {
  if (e.mui)
    return e;
  const t = Rd({
    spacing: e
  }), n = (...r) => (r.length === 0 ? [1] : r).map((l) => {
    const i = t(l);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function El(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((l) => {
    r[l] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, l) => t[l] ? lr(o, t[l](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function De(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return q({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Fg = Ve("border", De), Dg = Ve("borderTop", De), Ug = Ve("borderRight", De), Bg = Ve("borderBottom", De), Hg = Ve("borderLeft", De), Wg = Ve("borderColor"), Vg = Ve("borderTopColor"), Kg = Ve("borderRightColor"), Qg = Ve("borderBottomColor"), Gg = Ve("borderLeftColor"), Yg = Ve("outline", De), Xg = Ve("outlineColor"), _l = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $r(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ir(t, r)
    });
    return gt(e, e.borderRadius, n);
  }
  return null;
};
_l.propTypes = {};
_l.filterProps = ["borderRadius"];
El(Fg, Dg, Ug, Bg, Hg, Wg, Vg, Kg, Qg, Gg, _l, Yg, Xg);
const Pl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      gap: Ir(t, r)
    });
    return gt(e, e.gap, n);
  }
  return null;
};
Pl.propTypes = {};
Pl.filterProps = ["gap"];
const Tl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ir(t, r)
    });
    return gt(e, e.columnGap, n);
  }
  return null;
};
Tl.propTypes = {};
Tl.filterProps = ["columnGap"];
const Nl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $r(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ir(t, r)
    });
    return gt(e, e.rowGap, n);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["rowGap"];
const Zg = q({
  prop: "gridColumn"
}), Jg = q({
  prop: "gridRow"
}), qg = q({
  prop: "gridAutoFlow"
}), bg = q({
  prop: "gridAutoColumns"
}), ey = q({
  prop: "gridAutoRows"
}), ty = q({
  prop: "gridTemplateColumns"
}), ny = q({
  prop: "gridTemplateRows"
}), ry = q({
  prop: "gridTemplateAreas"
}), oy = q({
  prop: "gridArea"
});
El(Pl, Tl, Nl, Zg, Jg, qg, bg, ey, ty, ny, ry, oy);
function xn(e, t) {
  return t === "grey" ? t : e;
}
const ly = q({
  prop: "color",
  themeKey: "palette",
  transform: xn
}), iy = q({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xn
}), uy = q({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xn
});
El(ly, iy, uy);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const sy = q({
  prop: "width",
  transform: Re
}), hs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, o;
      const l = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || ds[n];
      return l ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${l}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: l
      } : {
        maxWidth: Re(n)
      };
    };
    return gt(e, e.maxWidth, t);
  }
  return null;
};
hs.filterProps = ["maxWidth"];
const ay = q({
  prop: "minWidth",
  transform: Re
}), cy = q({
  prop: "height",
  transform: Re
}), fy = q({
  prop: "maxHeight",
  transform: Re
}), dy = q({
  prop: "minHeight",
  transform: Re
});
q({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
q({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const py = q({
  prop: "boxSizing"
});
El(sy, hs, ay, cy, fy, dy, py);
const my = {
  // borders
  border: {
    themeKey: "borders",
    transform: De
  },
  borderTop: {
    themeKey: "borders",
    transform: De
  },
  borderRight: {
    themeKey: "borders",
    transform: De
  },
  borderBottom: {
    themeKey: "borders",
    transform: De
  },
  borderLeft: {
    themeKey: "borders",
    transform: De
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
    transform: De
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: _l
  },
  // palette
  color: {
    themeKey: "palette",
    transform: xn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xn
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
    style: Pl
  },
  rowGap: {
    style: Nl
  },
  columnGap: {
    style: Tl
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
    style: hs
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
}, zd = my;
function hy(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function gy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yy() {
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
      style: p
    } = u;
    if (r == null)
      return null;
    if (a === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Cl(o, a) || {};
    return p ? p(i) : gt(i, r, (v) => {
      let g = Ko(m, h, v);
      return v === g && typeof v == "string" && (g = Ko(m, h, `${n}${v === "default" ? "" : Nd(v)}`, v)), s === !1 ? g : {
        [s]: g
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
      const p = Og(l.breakpoints), m = Object.keys(p);
      let y = p;
      return Object.keys(h).forEach((v) => {
        const g = gy(h[v], l);
        if (g != null)
          if (typeof g == "object")
            if (u[v])
              y = lr(y, e(v, g, l, u));
            else {
              const P = gt({
                theme: l
              }, g, (f) => ({
                [v]: f
              }));
              hy(P, g) ? y[v] = t({
                sx: g,
                theme: l,
                nested: !0
              }) : y = lr(y, P);
            }
          else
            y = lr(y, e(v, g, l, u));
      }), !i && l.modularCssLayers ? {
        "@layer sx": Ha(m, y)
      } : Ha(m, y);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Ld = yy();
Ld.filterProps = ["sx"];
const vy = Ld;
function wy(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const Sy = ["breakpoints", "palette", "spacing", "shape"];
function ky(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: l = {}
  } = e, i = sl(e, Sy), u = Tg(n), s = jg(o);
  let a = Vo({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ce({
      mode: "light"
    }, r),
    spacing: s,
    shape: ce({}, Rg, l)
  }, i);
  return a.applyStyles = wy, a = t.reduce((h, p) => Vo(h, p), a), a.unstable_sxConfig = ce({}, zd, i == null ? void 0 : i.unstable_sxConfig), a.unstable_sx = function(p) {
    return vy({
      sx: p,
      theme: this
    });
  }, a;
}
function xy(e) {
  return Object.keys(e).length === 0;
}
function gs(e = null) {
  const t = N.useContext(Lr);
  return !t || xy(t) ? e : t;
}
const Cy = ky();
function Ey(e = Cy) {
  return gs(e);
}
function ui(e) {
  const t = Eg(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function _y({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Ey(n), o = t && r[t] || r;
  let l = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(l) ? l = l.map((i) => ui(typeof i == "function" ? i(o) : i)) : l = ui(l)), /* @__PURE__ */ $(Cg, {
    styles: l
  });
}
const Py = typeof window < "u" ? N.useLayoutEffect : N.useEffect, Ty = Py;
let Va = 0;
function Ny(e) {
  const [t, n] = N.useState(e), r = e || t;
  return N.useEffect(() => {
    t == null && (Va += 1, n(`mui-${Va}`));
  }, [t]), r;
}
const Ka = ci["useId".toString()];
function Ry(e) {
  if (Ka !== void 0) {
    const t = Ka();
    return e ?? t;
  }
  return Ny(e);
}
const Oy = /* @__PURE__ */ N.createContext(null), $d = Oy;
function Id() {
  return N.useContext($d);
}
const zy = typeof Symbol == "function" && Symbol.for, Ly = zy ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function $y(e, t) {
  return typeof t == "function" ? t(e) : ce({}, e, t);
}
function Iy(e) {
  const {
    children: t,
    theme: n
  } = e, r = Id(), o = N.useMemo(() => {
    const l = r === null ? n : $y(r, n);
    return l != null && (l[Ly] = r !== null), l;
  }, [n, r]);
  return /* @__PURE__ */ $($d.Provider, {
    value: o,
    children: t
  });
}
const My = ["value"], Ay = /* @__PURE__ */ N.createContext();
function jy(e) {
  let {
    value: t
  } = e, n = sl(e, My);
  return /* @__PURE__ */ $(Ay.Provider, ce({
    value: t ?? !0
  }, n));
}
const Fy = /* @__PURE__ */ N.createContext(void 0);
function Dy({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ $(Fy.Provider, {
    value: e,
    children: t
  });
}
function Uy(e) {
  const t = gs(), n = Ry() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Ty(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ $(_y, {
    styles: o
  }) : null;
}
const Qa = {};
function Ga(e, t, n, r = !1) {
  return N.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const l = n(o), i = e ? ce({}, t, {
        [e]: l
      }) : l;
      return r ? () => i : i;
    }
    return e ? ce({}, t, {
      [e]: n
    }) : ce({}, t, n);
  }, [e, t, n, r]);
}
function By(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = gs(Qa), l = Id() || Qa, i = Ga(r, o, n), u = Ga(r, l, n, !0), s = i.direction === "rtl", a = Uy(i);
  return /* @__PURE__ */ $(Iy, {
    theme: u,
    children: /* @__PURE__ */ $(Lr.Provider, {
      value: i,
      children: /* @__PURE__ */ $(jy, {
        value: s,
        children: /* @__PURE__ */ be(Dy, {
          value: i == null ? void 0 : i.components,
          children: [a, t]
        })
      })
    })
  });
}
const Hy = ["theme"];
function Wy(e) {
  let {
    theme: t
  } = e, n = sl(e, Hy);
  const r = t[Ta];
  let o = r || t;
  return typeof t != "function" && (r && !r.vars ? o = ce({}, r, {
    vars: null
  }) : t && !t.vars && (o = ce({}, t, {
    vars: null
  }))), /* @__PURE__ */ $(By, ce({}, n, {
    themeId: r ? Ta : void 0,
    theme: o
  }));
}
const Vy = {
  fal_auth_failed: "The fal.ai API key is missing or invalid.",
  rate_limited: "fal.ai is rate limiting requests. Wait a moment and try again.",
  content_policy_rejection: "Seedream could not process this prompt or image. Try a different prompt.",
  seedream_timeout: "Seedream took too long to respond. Please try again.",
  source_image_unreachable: "The proxy could not download the Content Hub preview rendition.",
  source_image_too_large: "The Content Hub preview rendition is too large to transform.",
  unsupported_source_image: "Seedream requires a JPEG, PNG, or WebP preview rendition.",
  image_host_not_allowed: "This Content Hub image host is not allowed by the proxy.",
  seedream_result_too_large: "The generated image is too large to upload from this component.",
  unauthorized: "The image transform proxy rejected this component configuration."
};
async function Ky(e, t, n, r) {
  const o = new AbortController(), l = window.setTimeout(
    () => o.abort(),
    r.requestTimeoutMs ?? 65e3
  );
  try {
    const i = await fetch(
      `${r.apiBaseUrl.replace(/\/+$/, "")}/api/seedream/transform`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...r.apiToken ? { Authorization: `Bearer ${r.apiToken}` } : {}
        },
        body: JSON.stringify({
          imageUrl: e,
          prompt: t,
          outputFormat: n.toLowerCase() === "image/jpeg" ? "jpeg" : "png"
        }),
        signal: o.signal
      }
    );
    if (!i.ok) {
      const h = await i.json().catch(() => ({})), p = typeof (h == null ? void 0 : h.error) == "string" ? h.error : "generation_failed";
      throw new Error(Vy[p] || "Image generation failed. Please try again.");
    }
    const u = (i.headers.get("Content-Type") || "").split(";")[0].trim();
    if (!u.startsWith("image/"))
      throw new Error("The proxy returned an invalid image response.");
    let s = await i.blob();
    if (!s.size)
      throw new Error("The proxy returned an empty image.");
    const a = n.toLowerCase();
    return ["image/jpeg", "image/png", "image/webp"].includes(a) && s.type !== a && (s = await Qy(s, a)), {
      blob: s,
      objectUrl: URL.createObjectURL(s),
      mimeType: s.type || u
    };
  } catch (i) {
    throw i instanceof DOMException && i.name === "AbortError" ? new Error("Image generation timed out. Please try again.") : i;
  } finally {
    window.clearTimeout(l);
  }
}
async function Qy(e, t) {
  const n = await createImageBitmap(e);
  try {
    const r = document.createElement("canvas");
    r.width = n.width, r.height = n.height;
    const o = r.getContext("2d");
    if (!o)
      throw new Error("The browser could not prepare the generated image.");
    return t === "image/jpeg" && (o.fillStyle = "#fff", o.fillRect(0, 0, r.width, r.height)), o.drawImage(n, 0, 0), await new Promise((l, i) => {
      r.toBlob(
        (u) => u ? l(u) : i(new Error(`The browser could not create a ${t} image.`)),
        t,
        0.92
      );
    });
  } finally {
    n.close();
  }
}
const Ya = [
  "preview",
  "thumbnail",
  "bigthumbnail",
  "thumbnail_cropped",
  "downloadPreview",
  "medium"
];
function Rl(e) {
  if (typeof e == "string")
    return e.trim();
  if (typeof e == "number" || typeof e == "boolean")
    return String(e);
  if (e && typeof e == "object") {
    const t = e;
    for (const n of ["Invariant", "invariant", "_value", "value", "en-US", "en"]) {
      const r = Rl(t[n]);
      if (r)
        return r;
    }
  }
  return "";
}
function si(e, t) {
  var n;
  for (const r of t) {
    const o = Rl((n = e == null ? void 0 : e.properties) == null ? void 0 : n[r]);
    if (o)
      return o;
  }
  return "";
}
function iu(e) {
  return Rl((e == null ? void 0 : e.href) ?? e);
}
function Gy(e, t) {
  var n, r, o, l, i;
  for (const u of t)
    try {
      const s = iu((o = (r = (n = e == null ? void 0 : e.getRendition) == null ? void 0 : n.call(e, u)) == null ? void 0 : r.items) == null ? void 0 : o[0]);
      if (s)
        return s;
    } catch {
    }
  for (const u of t) {
    const s = Array.isArray(e == null ? void 0 : e.renditions) ? e.renditions.find((h) => (h == null ? void 0 : h.name) === u) : (l = e == null ? void 0 : e.renditions) == null ? void 0 : l[u], a = iu(((i = s == null ? void 0 : s.items) == null ? void 0 : i[0]) ?? (s == null ? void 0 : s[0]));
    if (a)
      return a;
  }
  return "";
}
function Yy(e, t) {
  var n, r;
  for (const o of t) {
    const l = iu((r = (n = e == null ? void 0 : e.renditions) == null ? void 0 : n[o]) == null ? void 0 : r[0]);
    if (l)
      return l;
  }
  return "";
}
function Xy(e) {
  return /\.png$/i.test(e) ? "image/png" : /\.webp$/i.test(e) ? "image/webp" : /\.jpe?g$/i.test(e) ? "image/jpeg" : "";
}
async function Zy(e, t) {
  var u, s;
  const n = Rl(((u = t == null ? void 0 : t.systemProperties) == null ? void 0 : u.id) ?? (t == null ? void 0 : t.id));
  if (!n)
    return null;
  let r = Gy(t, Ya);
  if (!r && ((s = e == null ? void 0 : e.raw) != null && s.getAsync))
    try {
      const a = await e.raw.getAsync(`/api/entities/${n}`);
      a != null && a.isSuccessStatusCode && (r || (r = Yy(a.content, Ya)));
    } catch {
    }
  const o = si(t, ["FileName", "fileName"]) || `asset-${n}.jpg`, l = Xy(o) || si(t, ["MimeType", "mimeType", "ContentType"]) || "image/jpeg", i = si(t, ["Title", "title", "Name", "name"]) || o;
  return !r || !l.toLowerCase().startsWith("image/") ? null : {
    id: n,
    name: i,
    fileName: o,
    mimeType: l,
    previewUrl: r,
    sourceUrl: r
  };
}
function Jy(e) {
  return e === "image/png" ? "png" : e === "image/webp" ? "webp" : "jpg";
}
function qy(e = /* @__PURE__ */ new Date()) {
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
function by(e) {
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
async function ev(e, t, n, r, o) {
  var y;
  if (!((y = e == null ? void 0 : e.uploads) != null && y.uploadAsync))
    throw new Error("The Content Hub upload client is not available in this component context.");
  const l = Number(t.id);
  if (!Number.isSafeInteger(l) || l <= 0)
    throw new Error("Content Hub returned an invalid numeric asset ID.");
  const i = Jy(n.type), s = `${t.fileName.replace(/\.[^.]+$/, "") || `asset-${t.id}`}-${qy()}.${i}`, a = await n.arrayBuffer(), h = {
    source: {
      name: s,
      getReadableSourceAsync: () => Promise.resolve(a)
    },
    configurationName: r.uploadConfiguration || "AssetUploadConfiguration",
    actionName: o === "version" ? "NewMainFile" : "NewAsset",
    actionParameters: o === "version" ? { AssetId: l } : {}
  }, p = await e.uploads.uploadAsync(h);
  if ((p == null ? void 0 : p.isSuccessStatusCode) === !1)
    throw new Error(
      `Content Hub could not ${o === "version" ? "create the new version" : "create the new asset"} (HTTP ${p.statusCode ?? "unknown"}).`
    );
  if (o === "version")
    return l;
  const m = by(p == null ? void 0 : p.content);
  if (!m)
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  return m;
}
function Xa(e) {
  return e instanceof Error ? e.message : "Something went wrong. Please try again.";
}
function tv({ client: e, entity: t, options: n }) {
  const [r, o] = N.useState(null), [l, i] = N.useState(!0), [u, s] = N.useState(""), [a, h] = N.useState(null), [p, m] = N.useState(!1), [y, v] = N.useState(null), [g, P] = N.useState(""), f = y != null, c = N.useMemo(() => {
    var S, T, D;
    const x = (S = n.apiBaseUrl) == null ? void 0 : S.trim();
    return x ? {
      apiBaseUrl: x,
      apiToken: (T = n.apiToken) == null ? void 0 : T.trim(),
      uploadConfiguration: ((D = n.uploadConfiguration) == null ? void 0 : D.trim()) || "AssetUploadConfiguration",
      requestTimeoutMs: Math.max(165e3, n.requestTimeoutMs ?? 165e3)
    } : null;
  }, [n]);
  N.useEffect(() => {
    let x = !0;
    return i(!0), Zy(e, t).then((S) => {
      x && o(S);
    }).finally(() => {
      x && i(!1);
    }), () => {
      x = !1;
    };
  }, [e, t]), N.useEffect(
    () => () => {
      a && URL.revokeObjectURL(a.objectUrl);
    },
    [a]
  );
  const d = N.useCallback(() => {
    a && URL.revokeObjectURL(a.objectUrl), h(null), P("");
  }, [a]), w = N.useCallback(async () => {
    if (!(!r || !c || !u.trim())) {
      m(!0), P(""), a && URL.revokeObjectURL(a.objectUrl), h(null);
      try {
        h(
          await Ky(
            r.sourceUrl,
            u.trim(),
            r.mimeType,
            c
          )
        );
      } catch (x) {
        P(Xa(x));
      } finally {
        m(!1);
      }
    }
  }, [r, a, u, c]), C = N.useCallback(async (x) => {
    if (!(!r || !a || !c)) {
      v(x), P("");
      try {
        const S = await ev(
          e,
          r,
          a.blob,
          c,
          x
        );
        x === "version" ? window.location.reload() : window.location.assign(`/en-us/asset/${S}`);
      } catch (S) {
        P(Xa(S));
      } finally {
        v(null);
      }
    }
  }, [r, e, a, c]);
  return c ? l ? /* @__PURE__ */ be("section", { className: "ch-image-transform ch-image-transform--center", children: [
    /* @__PURE__ */ $("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
    /* @__PURE__ */ $("p", { children: "Loading image…" })
  ] }) : r ? /* @__PURE__ */ be("section", { className: "ch-image-transform", children: [
    /* @__PURE__ */ $("header", { className: "ch-image-transform__header", children: /* @__PURE__ */ $("h2", { children: "Transform image" }) }),
    /* @__PURE__ */ be("div", { className: `ch-image-transform__images${a ? " ch-image-transform__images--split" : ""}`, children: [
      /* @__PURE__ */ be("figure", { children: [
        /* @__PURE__ */ $("span", { children: "Before" }),
        /* @__PURE__ */ $("img", { src: r.previewUrl, alt: `Current version of ${r.name}` })
      ] }),
      a ? /* @__PURE__ */ be("figure", { children: [
        /* @__PURE__ */ $("span", { children: "After" }),
        /* @__PURE__ */ $("img", { src: a.objectUrl, alt: a.altText || `Generated version of ${r.name}` })
      ] }) : null
    ] }),
    /* @__PURE__ */ be("div", { className: "ch-image-transform__controls", children: [
      /* @__PURE__ */ $("label", { htmlFor: "ch-image-transform-prompt", children: "Describe the new image" }),
      /* @__PURE__ */ $(
        "textarea",
        {
          id: "ch-image-transform-prompt",
          value: u,
          maxLength: 1024,
          rows: 4,
          disabled: p || f,
          placeholder: "For example: Reimagine this scene at sunset with warm cinematic lighting",
          onChange: (x) => s(x.target.value)
        }
      ),
      p ? /* @__PURE__ */ be("div", { className: "ch-image-transform__working", role: "status", children: [
        /* @__PURE__ */ $("span", { className: "ch-image-transform__spinner", "aria-hidden": "true" }),
        /* @__PURE__ */ $("span", { children: "Generating with Seedream. Complex edits can take up to two minutes." })
      ] }) : null,
      g ? /* @__PURE__ */ $("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: g }) : null,
      /* @__PURE__ */ $("div", { className: "ch-image-transform__actions", children: a ? /* @__PURE__ */ be(up, { children: [
        /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button", disabled: f, onClick: () => C("version"), children: y === "version" ? "Creating version…" : "Create version" }),
        /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: () => C("new-asset"), children: y === "new-asset" ? "Creating asset…" : "Create as new asset" }),
        /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button ch-image-transform__button--secondary", disabled: f, onClick: d, children: "Discard and try again" })
      ] }) : /* @__PURE__ */ $("button", { type: "button", className: "ch-image-transform__button", disabled: !u.trim() || p, onClick: w, children: p ? "Generating…" : "Generate" }) })
    ] })
  ] }) : /* @__PURE__ */ $("section", { className: "ch-image-transform", children: /* @__PURE__ */ $("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: "This component needs an image asset with an accessible preview and download rendition." }) }) : /* @__PURE__ */ $("section", { className: "ch-image-transform", children: /* @__PURE__ */ be("div", { className: "ch-image-transform__notice ch-image-transform__notice--error", children: [
    "Configure ",
    /* @__PURE__ */ $("code", { children: "apiBaseUrl" }),
    " for this external component."
  ] }) });
}
const nv = ["config", "settings", "json", "componentOptions"];
function Md(e) {
  if (e) {
    if (typeof e == "string")
      try {
        return Md(JSON.parse(e));
      } catch {
        return;
      }
    return typeof e == "object" && !Array.isArray(e) ? e : void 0;
  }
}
function to(e, t) {
  const n = Object.entries(e).find(([r]) => r.toLowerCase() === t.toLowerCase());
  return n == null ? void 0 : n[1];
}
function ai(e) {
  if (typeof e != "string")
    return;
  const t = e.trim();
  return t && !/^https?:\/\/your|^your[-_]|^optional-/i.test(t) ? t : void 0;
}
function rv(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : void 0;
}
function vo(e) {
  const t = Md(e);
  if (!t)
    return {};
  let n = {
    apiBaseUrl: ai(to(t, "apiBaseUrl")),
    apiToken: ai(to(t, "apiToken")),
    uploadConfiguration: ai(to(t, "uploadConfiguration")),
    requestTimeoutMs: rv(to(t, "requestTimeoutMs"))
  };
  for (const r of nv)
    t[r] != null && (n = { ...n, ...vo(t[r]) });
  return n;
}
function ov(e, t) {
  return {
    ...vo(t == null ? void 0 : t.config),
    ...vo(e),
    ...vo(t)
  };
}
function lv(e) {
  const t = ad(e);
  return {
    render(n) {
      const r = ov(n == null ? void 0 : n.options, n);
      t.render(
        /* @__PURE__ */ $(Wy, { theme: n.theme, children: /* @__PURE__ */ $(
          tv,
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
  lv as default
};
