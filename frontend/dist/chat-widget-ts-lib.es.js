function Rf(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var Pa = { exports: {} }, gr = {}, Da = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Ff() {
  if (Ea)
    return O;
  Ea = 1;
  var _ = Symbol.for("react.element"), P = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), W = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function B(a) {
    return a === null || typeof a != "object" ? null : (a = Y && a[Y] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var Be = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, He = Object.assign, re = {};
  function G(a, v, M) {
    this.props = a, this.context = v, this.refs = re, this.updater = M || Be;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(a, v) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, v, "setState");
  }, G.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function gn() {
  }
  gn.prototype = G.prototype;
  function an(a, v, M) {
    this.props = a, this.context = v, this.refs = re, this.updater = M || Be;
  }
  var qe = an.prototype = new gn();
  qe.constructor = an, He(qe, G.prototype), qe.isPureReactComponent = !0;
  var ke = Array.isArray, be = Object.prototype.hasOwnProperty, Ce = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(a, v, M) {
    var F, I = {}, J = null, V = null;
    if (v != null)
      for (F in v.ref !== void 0 && (V = v.ref), v.key !== void 0 && (J = "" + v.key), v)
        be.call(v, F) && !Le.hasOwnProperty(F) && (I[F] = v[F]);
    var K = arguments.length - 2;
    if (K === 1)
      I.children = M;
    else if (1 < K) {
      for (var Q = Array(K), Te = 0; Te < K; Te++)
        Q[Te] = arguments[Te + 2];
      I.children = Q;
    }
    if (a && a.defaultProps)
      for (F in K = a.defaultProps, K)
        I[F] === void 0 && (I[F] = K[F]);
    return { $$typeof: _, type: a, key: J, ref: V, props: I, _owner: Ce.current };
  }
  function Ln(a, v) {
    return { $$typeof: _, type: a.type, key: v, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function wn(a) {
    return typeof a == "object" && a !== null && a.$$typeof === _;
  }
  function Kn(a) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(M) {
      return v[M];
    });
  }
  var cn = /\/+/g;
  function Fe(a, v) {
    return typeof a == "object" && a !== null && a.key != null ? Kn("" + a.key) : v.toString(36);
  }
  function en(a, v, M, F, I) {
    var J = typeof a;
    (J === "undefined" || J === "boolean") && (a = null);
    var V = !1;
    if (a === null)
      V = !0;
    else
      switch (J) {
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case _:
            case P:
              V = !0;
          }
      }
    if (V)
      return V = a, I = I(V), a = F === "" ? "." + Fe(V, 0) : F, ke(I) ? (M = "", a != null && (M = a.replace(cn, "$&/") + "/"), en(I, v, M, "", function(Te) {
        return Te;
      })) : I != null && (wn(I) && (I = Ln(I, M + (!I.key || V && V.key === I.key ? "" : ("" + I.key).replace(cn, "$&/") + "/") + a)), v.push(I)), 1;
    if (V = 0, F = F === "" ? "." : F + ":", ke(a))
      for (var K = 0; K < a.length; K++) {
        J = a[K];
        var Q = F + Fe(J, K);
        V += en(J, v, M, Q, I);
      }
    else if (Q = B(a), typeof Q == "function")
      for (a = Q.call(a), K = 0; !(J = a.next()).done; )
        J = J.value, Q = F + Fe(J, K++), V += en(J, v, M, Q, I);
    else if (J === "object")
      throw v = String(a), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function fn(a, v, M) {
    if (a == null)
      return a;
    var F = [], I = 0;
    return en(a, F, "", "", function(J) {
      return v.call(M, J, I++);
    }), F;
  }
  function ze(a) {
    if (a._status === -1) {
      var v = a._result;
      v = v(), v.then(function(M) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = M);
      }, function(M) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = M);
      }), a._status === -1 && (a._status = 0, a._result = v);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var ue = { current: null }, k = { transition: null }, T = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ce };
  return O.Children = { map: fn, forEach: function(a, v, M) {
    fn(a, function() {
      v.apply(this, arguments);
    }, M);
  }, count: function(a) {
    var v = 0;
    return fn(a, function() {
      v++;
    }), v;
  }, toArray: function(a) {
    return fn(a, function(v) {
      return v;
    }) || [];
  }, only: function(a) {
    if (!wn(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, O.Component = G, O.Fragment = m, O.Profiler = Z, O.PureComponent = an, O.StrictMode = H, O.Suspense = R, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, O.cloneElement = function(a, v, M) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var F = He({}, a.props), I = a.key, J = a.ref, V = a._owner;
    if (v != null) {
      if (v.ref !== void 0 && (J = v.ref, V = Ce.current), v.key !== void 0 && (I = "" + v.key), a.type && a.type.defaultProps)
        var K = a.type.defaultProps;
      for (Q in v)
        be.call(v, Q) && !Le.hasOwnProperty(Q) && (F[Q] = v[Q] === void 0 && K !== void 0 ? K[Q] : v[Q]);
    }
    var Q = arguments.length - 2;
    if (Q === 1)
      F.children = M;
    else if (1 < Q) {
      K = Array(Q);
      for (var Te = 0; Te < Q; Te++)
        K[Te] = arguments[Te + 2];
      F.children = K;
    }
    return { $$typeof: _, type: a.type, key: I, ref: J, props: F, _owner: V };
  }, O.createContext = function(a) {
    return a = { $$typeof: W, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: te, _context: a }, a.Consumer = a;
  }, O.createElement = We, O.createFactory = function(a) {
    var v = We.bind(null, a);
    return v.type = a, v;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(a) {
    return { $$typeof: b, render: a };
  }, O.isValidElement = wn, O.lazy = function(a) {
    return { $$typeof: fe, _payload: { _status: -1, _result: a }, _init: ze };
  }, O.memo = function(a, v) {
    return { $$typeof: X, type: a, compare: v === void 0 ? null : v };
  }, O.startTransition = function(a) {
    var v = k.transition;
    k.transition = {};
    try {
      a();
    } finally {
      k.transition = v;
    }
  }, O.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, O.useCallback = function(a, v) {
    return ue.current.useCallback(a, v);
  }, O.useContext = function(a) {
    return ue.current.useContext(a);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(a) {
    return ue.current.useDeferredValue(a);
  }, O.useEffect = function(a, v) {
    return ue.current.useEffect(a, v);
  }, O.useId = function() {
    return ue.current.useId();
  }, O.useImperativeHandle = function(a, v, M) {
    return ue.current.useImperativeHandle(a, v, M);
  }, O.useInsertionEffect = function(a, v) {
    return ue.current.useInsertionEffect(a, v);
  }, O.useLayoutEffect = function(a, v) {
    return ue.current.useLayoutEffect(a, v);
  }, O.useMemo = function(a, v) {
    return ue.current.useMemo(a, v);
  }, O.useReducer = function(a, v, M) {
    return ue.current.useReducer(a, v, M);
  }, O.useRef = function(a) {
    return ue.current.useRef(a);
  }, O.useState = function(a) {
    return ue.current.useState(a);
  }, O.useSyncExternalStore = function(a, v, M) {
    return ue.current.useSyncExternalStore(a, v, M);
  }, O.useTransition = function() {
    return ue.current.useTransition();
  }, O.version = "18.2.0", O;
}
Da.exports = Ff();
var $e = Da.exports;
const Uf = /* @__PURE__ */ Rf($e);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Af() {
  if (Ca)
    return gr;
  Ca = 1;
  var _ = $e, P = Symbol.for("react.element"), m = Symbol.for("react.fragment"), H = Object.prototype.hasOwnProperty, Z = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(b, R, X) {
    var fe, Y = {}, B = null, Be = null;
    X !== void 0 && (B = "" + X), R.key !== void 0 && (B = "" + R.key), R.ref !== void 0 && (Be = R.ref);
    for (fe in R)
      H.call(R, fe) && !te.hasOwnProperty(fe) && (Y[fe] = R[fe]);
    if (b && b.defaultProps)
      for (fe in R = b.defaultProps, R)
        Y[fe] === void 0 && (Y[fe] = R[fe]);
    return { $$typeof: P, type: b, key: B, ref: Be, props: Y, _owner: Z.current };
  }
  return gr.Fragment = m, gr.jsx = W, gr.jsxs = W, gr;
}
Pa.exports = Af();
var D = Pa.exports, Ia = { exports: {} }, Re = {}, Ni = { exports: {} }, Mi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function Vf() {
  return Na || (Na = 1, function(_) {
    function P(k, T) {
      var a = k.length;
      k.push(T);
      e:
        for (; 0 < a; ) {
          var v = a - 1 >>> 1, M = k[v];
          if (0 < Z(M, T))
            k[v] = T, k[a] = M, a = v;
          else
            break e;
        }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function H(k) {
      if (k.length === 0)
        return null;
      var T = k[0], a = k.pop();
      if (a !== T) {
        k[0] = a;
        e:
          for (var v = 0, M = k.length, F = M >>> 1; v < F; ) {
            var I = 2 * (v + 1) - 1, J = k[I], V = I + 1, K = k[V];
            if (0 > Z(J, a))
              V < M && 0 > Z(K, J) ? (k[v] = K, k[V] = a, v = V) : (k[v] = J, k[I] = a, v = I);
            else if (V < M && 0 > Z(K, a))
              k[v] = K, k[V] = a, v = V;
            else
              break e;
          }
      }
      return T;
    }
    function Z(k, T) {
      var a = k.sortIndex - T.sortIndex;
      return a !== 0 ? a : k.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var te = performance;
      _.unstable_now = function() {
        return te.now();
      };
    } else {
      var W = Date, b = W.now();
      _.unstable_now = function() {
        return W.now() - b;
      };
    }
    var R = [], X = [], fe = 1, Y = null, B = 3, Be = !1, He = !1, re = !1, G = typeof setTimeout == "function" ? setTimeout : null, gn = typeof clearTimeout == "function" ? clearTimeout : null, an = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(k) {
      for (var T = m(X); T !== null; ) {
        if (T.callback === null)
          H(X);
        else if (T.startTime <= k)
          H(X), T.sortIndex = T.expirationTime, P(R, T);
        else
          break;
        T = m(X);
      }
    }
    function ke(k) {
      if (re = !1, qe(k), !He)
        if (m(R) !== null)
          He = !0, ze(be);
        else {
          var T = m(X);
          T !== null && ue(ke, T.startTime - k);
        }
    }
    function be(k, T) {
      He = !1, re && (re = !1, gn(We), We = -1), Be = !0;
      var a = B;
      try {
        for (qe(T), Y = m(R); Y !== null && (!(Y.expirationTime > T) || k && !Kn()); ) {
          var v = Y.callback;
          if (typeof v == "function") {
            Y.callback = null, B = Y.priorityLevel;
            var M = v(Y.expirationTime <= T);
            T = _.unstable_now(), typeof M == "function" ? Y.callback = M : Y === m(R) && H(R), qe(T);
          } else
            H(R);
          Y = m(R);
        }
        if (Y !== null)
          var F = !0;
        else {
          var I = m(X);
          I !== null && ue(ke, I.startTime - T), F = !1;
        }
        return F;
      } finally {
        Y = null, B = a, Be = !1;
      }
    }
    var Ce = !1, Le = null, We = -1, Ln = 5, wn = -1;
    function Kn() {
      return !(_.unstable_now() - wn < Ln);
    }
    function cn() {
      if (Le !== null) {
        var k = _.unstable_now();
        wn = k;
        var T = !0;
        try {
          T = Le(!0, k);
        } finally {
          T ? Fe() : (Ce = !1, Le = null);
        }
      } else
        Ce = !1;
    }
    var Fe;
    if (typeof an == "function")
      Fe = function() {
        an(cn);
      };
    else if (typeof MessageChannel < "u") {
      var en = new MessageChannel(), fn = en.port2;
      en.port1.onmessage = cn, Fe = function() {
        fn.postMessage(null);
      };
    } else
      Fe = function() {
        G(cn, 0);
      };
    function ze(k) {
      Le = k, Ce || (Ce = !0, Fe());
    }
    function ue(k, T) {
      We = G(function() {
        k(_.unstable_now());
      }, T);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, _.unstable_continueExecution = function() {
      He || Be || (He = !0, ze(be));
    }, _.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ln = 0 < k ? Math.floor(1e3 / k) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, _.unstable_getFirstCallbackNode = function() {
      return m(R);
    }, _.unstable_next = function(k) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = B;
      }
      var a = B;
      B = T;
      try {
        return k();
      } finally {
        B = a;
      }
    }, _.unstable_pauseExecution = function() {
    }, _.unstable_requestPaint = function() {
    }, _.unstable_runWithPriority = function(k, T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var a = B;
      B = k;
      try {
        return T();
      } finally {
        B = a;
      }
    }, _.unstable_scheduleCallback = function(k, T, a) {
      var v = _.unstable_now();
      switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? v + a : v) : a = v, k) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = a + M, k = { id: fe++, callback: T, priorityLevel: k, startTime: a, expirationTime: M, sortIndex: -1 }, a > v ? (k.sortIndex = a, P(X, k), m(R) === null && k === m(X) && (re ? (gn(We), We = -1) : re = !0, ue(ke, a - v))) : (k.sortIndex = M, P(R, k), He || Be || (He = !0, ze(be))), k;
    }, _.unstable_shouldYield = Kn, _.unstable_wrapCallback = function(k) {
      var T = B;
      return function() {
        var a = B;
        B = T;
        try {
          return k.apply(this, arguments);
        } finally {
          B = a;
        }
      };
    };
  }(Mi)), Mi;
}
var Ma;
function Qf() {
  return Ma || (Ma = 1, Ni.exports = Vf()), Ni.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function $f() {
  if (La)
    return Re;
  La = 1;
  var _ = $e, P = Qf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var H = /* @__PURE__ */ new Set(), Z = {};
  function te(e, n) {
    W(e, n), W(e + "Capture", n);
  }
  function W(e, n) {
    for (Z[e] = n, e = 0; e < n.length; e++)
      H.add(n[e]);
  }
  var b = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fe = {}, Y = {};
  function B(e) {
    return R.call(Y, e) ? !0 : R.call(fe, e) ? !1 : X.test(e) ? Y[e] = !0 : (fe[e] = !0, !1);
  }
  function Be(e, n, t, r) {
    if (t !== null && t.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function He(e, n, t, r) {
    if (n === null || typeof n > "u" || Be(e, n, t, r))
      return !0;
    if (r)
      return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function re(e, n, t, r, l, o, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    G[e] = new re(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    G[n] = new re(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    G[e] = new re(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    G[e] = new re(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    G[e] = new re(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    G[e] = new re(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    G[e] = new re(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    G[e] = new re(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    G[e] = new re(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var gn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      gn,
      an
    );
    G[n] = new re(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(gn, an);
    G[n] = new re(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(gn, an);
    G[n] = new re(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    G[e] = new re(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new re("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    G[e] = new re(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, n, t, r) {
    var l = G.hasOwnProperty(n) ? G[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (He(n, t, l, r) && (t = null), r || l === null ? B(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ke = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Ln = Symbol.for("react.profiler"), wn = Symbol.for("react.provider"), Kn = Symbol.for("react.context"), cn = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), en = Symbol.for("react.suspense_list"), fn = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var a = Object.assign, v;
  function M(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        v = n && n[1] || "";
      }
    return `
` + v + e;
  }
  var F = !1;
  function I(e, n) {
    if (!e || F)
      return "";
    F = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
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
      F = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function J(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = I(e.type, !1), e;
      case 11:
        return e = I(e.type.render, !1), e;
      case 1:
        return e = I(e.type, !0), e;
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ce:
        return "Portal";
      case Ln:
        return "Profiler";
      case We:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Kn:
          return (e.displayName || "Context") + ".Consumer";
        case wn:
          return (e._context.displayName || "Context") + ".Provider";
        case cn:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case fn:
          return n = e.displayName || null, n !== null ? n : V(e.type) || "Memo";
        case ze:
          n = e._payload, e = e._init;
          try {
            return V(e(n));
          } catch {
          }
      }
    return null;
  }
  function K(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return V(n);
      case 8:
        return n === We ? "StrictMode" : "Mode";
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
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function Q(e) {
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
  function Te(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ua(e) {
    var n = Te(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ua(e));
  }
  function zi(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = Te(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function _r(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Pl(e, n) {
    var t = n.checked;
    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Ti(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = Q(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function ji(e, n) {
    n = n.checked, n != null && qe(e, "checked", n, !1);
  }
  function Dl(e, n) {
    ji(e, n);
    var t = Q(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Il(e, n.type, t) : n.hasOwnProperty("defaultValue") && Il(e, n.type, Q(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Pi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Il(e, n, t) {
    (n !== "number" || _r(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Dt = Array.isArray;
  function st(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Q(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Di(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(m(92));
        if (Dt(t)) {
          if (1 < t.length)
            throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: Q(t) };
  }
  function Ii(e, n) {
    var t = Q(n.value), r = Q(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Oi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Ri(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rl(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ri(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xr, Fi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = xr.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function It(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Ot = {
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
  }, Aa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ot).forEach(function(e) {
    Aa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Ot[n] = Ot[e];
    });
  });
  function Ui(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ot.hasOwnProperty(e) && Ot[e] ? ("" + n).trim() : n + "px";
  }
  function Ai(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Ui(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Va = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fl(e, n) {
    if (n) {
      if (Va[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(m(62));
    }
  }
  function Ul(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
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
  var Al = null;
  function Vl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ql = null, at = null, ct = null;
  function Vi(e) {
    if (e = rr(e)) {
      if (typeof Ql != "function")
        throw Error(m(280));
      var n = e.stateNode;
      n && (n = Yr(n), Ql(e.stateNode, e.type, n));
    }
  }
  function Qi(e) {
    at ? ct ? ct.push(e) : ct = [e] : at = e;
  }
  function $i() {
    if (at) {
      var e = at, n = ct;
      if (ct = at = null, Vi(e), n)
        for (e = 0; e < n.length; e++)
          Vi(n[e]);
    }
  }
  function Bi(e, n) {
    return e(n);
  }
  function Hi() {
  }
  var $l = !1;
  function Wi(e, n, t) {
    if ($l)
      return e(n, t);
    $l = !0;
    try {
      return Bi(e, n, t);
    } finally {
      $l = !1, (at !== null || ct !== null) && (Hi(), $i());
    }
  }
  function Rt(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Yr(t);
    if (r === null)
      return null;
    t = r[n];
    e:
      switch (n) {
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
    if (t && typeof t != "function")
      throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (b)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", { get: function() {
        Bl = !0;
      } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
    } catch {
      Bl = !1;
    }
  function Qa(e, n, t, r, l, o, i, u, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1, Er = null, Cr = !1, Hl = null, $a = { onError: function(e) {
    Ut = !0, Er = e;
  } };
  function Ba(e, n, t, r, l, o, i, u, s) {
    Ut = !1, Er = null, Qa.apply($a, arguments);
  }
  function Ha(e, n, t, r, l, o, i, u, s) {
    if (Ba.apply(this, arguments), Ut) {
      if (Ut) {
        var p = Er;
        Ut = !1, Er = null;
      } else
        throw Error(m(198));
      Cr || (Cr = !0, Hl = p);
    }
  }
  function Zn(e) {
    var n = e, t = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Yi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Gi(e) {
    if (Zn(e) !== e)
      throw Error(m(188));
  }
  function Wa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Zn(e), n === null)
        throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t)
            return Gi(l), e;
          if (o === r)
            return Gi(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return)
        t = l, r = o;
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === t) {
            i = !0, t = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, t = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === t) {
              i = !0, t = o, r = l;
              break;
            }
            if (u === r) {
              i = !0, r = o, t = l;
              break;
            }
            u = u.sibling;
          }
          if (!i)
            throw Error(m(189));
        }
      }
      if (t.alternate !== r)
        throw Error(m(190));
    }
    if (t.tag !== 3)
      throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Ki(e) {
    return e = Wa(e), e !== null ? Zi(e) : null;
  }
  function Zi(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Zi(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Xi = P.unstable_scheduleCallback, Ji = P.unstable_cancelCallback, Ya = P.unstable_shouldYield, Ga = P.unstable_requestPaint, ae = P.unstable_now, Ka = P.unstable_getCurrentPriorityLevel, Wl = P.unstable_ImmediatePriority, qi = P.unstable_UserBlockingPriority, Nr = P.unstable_NormalPriority, Za = P.unstable_LowPriority, bi = P.unstable_IdlePriority, Mr = null, dn = null;
  function Xa(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(Mr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var nn = Math.clz32 ? Math.clz32 : ba, Ja = Math.log, qa = Math.LN2;
  function ba(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ja(e) / qa | 0) | 0;
  }
  var Lr = 64, zr = 4194304;
  function At(e) {
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
  function Tr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = At(u) : (o &= i, o !== 0 && (r = At(o)));
    } else
      i = t & ~l, i !== 0 ? r = At(i) : o !== 0 && (r = At(o));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - nn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function ec(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function nc(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - nn(o), u = 1 << i, s = l[i];
      s === -1 ? (!(u & t) || u & r) && (l[i] = ec(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function Yl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function eu() {
    var e = Lr;
    return Lr <<= 1, !(Lr & 4194240) && (Lr = 64), e;
  }
  function Gl(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - nn(n), e[n] = t;
  }
  function tc(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - nn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Kl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var $ = 0;
  function nu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var tu, Zl, ru, lu, ou, Xl = !1, jr = [], zn = null, Tn = null, jn = null, Qt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), Pn = [], rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function iu(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        jn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $t.delete(n.pointerId);
    }
  }
  function Bt(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = rr(n), n !== null && Zl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function lc(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Bt(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Bt(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return jn = Bt(jn, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Qt.set(o, Bt(Qt.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, $t.set(o, Bt($t.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function uu(e) {
    var n = Xn(e.target);
    if (n !== null) {
      var t = Zn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Yi(t), n !== null) {
            e.blockedOn = n, ou(e.priority, function() {
              ru(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pr(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = ql(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Al = r, t.target.dispatchEvent(r), Al = null;
      } else
        return n = rr(t), n !== null && Zl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function su(e, n, t) {
    Pr(e) && t.delete(n);
  }
  function oc() {
    Xl = !1, zn !== null && Pr(zn) && (zn = null), Tn !== null && Pr(Tn) && (Tn = null), jn !== null && Pr(jn) && (jn = null), Qt.forEach(su), $t.forEach(su);
  }
  function Ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Xl || (Xl = !0, P.unstable_scheduleCallback(P.unstable_NormalPriority, oc)));
  }
  function Wt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < jr.length) {
      Ht(jr[0], e);
      for (var t = 1; t < jr.length; t++) {
        var r = jr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && Ht(zn, e), Tn !== null && Ht(Tn, e), jn !== null && Ht(jn, e), Qt.forEach(n), $t.forEach(n), t = 0; t < Pn.length; t++)
      r = Pn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pn.length && (t = Pn[0], t.blockedOn === null); )
      uu(t), t.blockedOn === null && Pn.shift();
  }
  var ft = ke.ReactCurrentBatchConfig, Dr = !0;
  function ic(e, n, t, r) {
    var l = $, o = ft.transition;
    ft.transition = null;
    try {
      $ = 1, Jl(e, n, t, r);
    } finally {
      $ = l, ft.transition = o;
    }
  }
  function uc(e, n, t, r) {
    var l = $, o = ft.transition;
    ft.transition = null;
    try {
      $ = 4, Jl(e, n, t, r);
    } finally {
      $ = l, ft.transition = o;
    }
  }
  function Jl(e, n, t, r) {
    if (Dr) {
      var l = ql(e, n, t, r);
      if (l === null)
        vo(e, n, r, Ir, t), iu(e, r);
      else if (lc(l, e, n, t, r))
        r.stopPropagation();
      else if (iu(e, r), n & 4 && -1 < rc.indexOf(e)) {
        for (; l !== null; ) {
          var o = rr(l);
          if (o !== null && tu(o), o = ql(e, n, t, r), o === null && vo(e, n, r, Ir, t), o === l)
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else
        vo(e, n, r, null, t);
    }
  }
  var Ir = null;
  function ql(e, n, t, r) {
    if (Ir = null, e = Vl(r), e = Xn(e), e !== null)
      if (n = Zn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Yi(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Ir = e, null;
  }
  function au(e) {
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
        switch (Ka()) {
          case Wl:
            return 1;
          case qi:
            return 4;
          case Nr:
          case Za:
            return 16;
          case bi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dn = null, bl = null, Or = null;
  function cu() {
    if (Or)
      return Or;
    var e, n = bl, t = n.length, r, l = "value" in Dn ? Dn.value : Dn.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[o - r]; r++)
      ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Rr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fr() {
    return !0;
  }
  function fu() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, o, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e)
        e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Fr : fu, this.isPropagationStopped = fu, this;
    }
    return a(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Fr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Fr);
    }, persist: function() {
    }, isPersistent: Fr }), n;
  }
  var dt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, eo = Ue(dt), Yt = a({}, dt, { view: 0, detail: 0 }), sc = Ue(Yt), no, to, Gt, Ur = a({}, Yt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Gt && (Gt && e.type === "mousemove" ? (no = e.screenX - Gt.screenX, to = e.screenY - Gt.screenY) : to = no = 0, Gt = e), no);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : to;
  } }), du = Ue(Ur), ac = a({}, Ur, { dataTransfer: 0 }), cc = Ue(ac), fc = a({}, Yt, { relatedTarget: 0 }), ro = Ue(fc), dc = a({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Ue(dc), mc = a({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hc = Ue(mc), vc = a({}, dt, { data: 0 }), pu = Ue(vc), yc = {
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
  }, gc = {
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
  }, wc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = wc[e]) ? !!n[e] : !1;
  }
  function lo() {
    return kc;
  }
  var Sc = a({}, Yt, { key: function(e) {
    if (e.key) {
      var n = yc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Rr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lo, charCode: function(e) {
    return e.type === "keypress" ? Rr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Rr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), _c = Ue(Sc), xc = a({}, Ur, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), mu = Ue(xc), Ec = a({}, Yt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lo }), Cc = Ue(Ec), Nc = a({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = Ue(Nc), Lc = a({}, Ur, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = Ue(Lc), Tc = [9, 13, 27, 32], oo = b && "CompositionEvent" in window, Kt = null;
  b && "documentMode" in document && (Kt = document.documentMode);
  var jc = b && "TextEvent" in window && !Kt, hu = b && (!oo || Kt && 8 < Kt && 11 >= Kt), vu = " ", yu = !1;
  function gu(e, n) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function Pc(e, n) {
    switch (e) {
      case "compositionend":
        return wu(n);
      case "keypress":
        return n.which !== 32 ? null : (yu = !0, vu);
      case "textInput":
        return e = n.data, e === vu && yu ? null : e;
      default:
        return null;
    }
  }
  function Dc(e, n) {
    if (pt)
      return e === "compositionend" || !oo && gu(e, n) ? (e = cu(), Or = bl = Dn = null, pt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return hu && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ic = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ku(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Ic[e.type] : n === "textarea";
  }
  function Su(e, n, t, r) {
    Qi(r), n = Br(n, "onChange"), 0 < n.length && (t = new eo("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Zt = null, Xt = null;
  function Oc(e) {
    Au(e, 0);
  }
  function Ar(e) {
    var n = gt(e);
    if (zi(n))
      return e;
  }
  function Rc(e, n) {
    if (e === "change")
      return n;
  }
  var _u = !1;
  if (b) {
    var io;
    if (b) {
      var uo = "oninput" in document;
      if (!uo) {
        var xu = document.createElement("div");
        xu.setAttribute("oninput", "return;"), uo = typeof xu.oninput == "function";
      }
      io = uo;
    } else
      io = !1;
    _u = io && (!document.documentMode || 9 < document.documentMode);
  }
  function Eu() {
    Zt && (Zt.detachEvent("onpropertychange", Cu), Xt = Zt = null);
  }
  function Cu(e) {
    if (e.propertyName === "value" && Ar(Xt)) {
      var n = [];
      Su(n, Xt, e, Vl(e)), Wi(Oc, n);
    }
  }
  function Fc(e, n, t) {
    e === "focusin" ? (Eu(), Zt = n, Xt = t, Zt.attachEvent("onpropertychange", Cu)) : e === "focusout" && Eu();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ar(Xt);
  }
  function Ac(e, n) {
    if (e === "click")
      return Ar(n);
  }
  function Vc(e, n) {
    if (e === "input" || e === "change")
      return Ar(n);
  }
  function Qc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var tn = typeof Object.is == "function" ? Object.is : Qc;
  function Jt(e, n) {
    if (tn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!R.call(n, l) || !tn(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function Nu(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Mu(e, n) {
    var t = Nu(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n)
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Nu(t);
    }
  }
  function Lu(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Lu(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function zu() {
    for (var e = window, n = _r(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = _r(e.document);
    }
    return n;
  }
  function so(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function $c(e) {
    var n = zu(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Lu(t.ownerDocument.documentElement, t)) {
      if (r !== null && so(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Mu(t, o);
          var i = Mu(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Bc = b && "documentMode" in document && 11 >= document.documentMode, mt = null, ao = null, qt = null, co = !1;
  function Tu(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    co || mt == null || mt !== _r(r) || (r = mt, "selectionStart" in r && so(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qt && Jt(qt, r) || (qt = r, r = Br(ao, "onSelect"), 0 < r.length && (n = new eo("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Vr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, fo = {}, ju = {};
  b && (ju = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function Qr(e) {
    if (fo[e])
      return fo[e];
    if (!ht[e])
      return e;
    var n = ht[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in ju)
        return fo[e] = n[t];
    return e;
  }
  var Pu = Qr("animationend"), Du = Qr("animationiteration"), Iu = Qr("animationstart"), Ou = Qr("transitionend"), Ru = /* @__PURE__ */ new Map(), Fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function In(e, n) {
    Ru.set(e, n), te(n, [e]);
  }
  for (var po = 0; po < Fu.length; po++) {
    var mo = Fu[po], Hc = mo.toLowerCase(), Wc = mo[0].toUpperCase() + mo.slice(1);
    In(Hc, "on" + Wc);
  }
  In(Pu, "onAnimationEnd"), In(Du, "onAnimationIteration"), In(Iu, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(Ou, "onTransitionEnd"), W("onMouseEnter", ["mouseout", "mouseover"]), W("onMouseLeave", ["mouseout", "mouseover"]), W("onPointerEnter", ["pointerout", "pointerover"]), W("onPointerLeave", ["pointerout", "pointerover"]), te("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), te("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), te("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), te("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), te("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));
  function Uu(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ha(r, n, void 0, e), e.currentTarget = null;
  }
  function Au(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var u = r[i], s = u.instance, p = u.currentTarget;
            if (u = u.listener, s !== o && l.isPropagationStopped())
              break e;
            Uu(l, u, p), o = s;
          }
        else
          for (i = 0; i < r.length; i++) {
            if (u = r[i], s = u.instance, p = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
              break e;
            Uu(l, u, p), o = s;
          }
      }
    }
    if (Cr)
      throw e = Hl, Cr = !1, Hl = null, e;
  }
  function ee(e, n) {
    var t = n[_o];
    t === void 0 && (t = n[_o] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Vu(n, e, 2, !1), t.add(r));
  }
  function ho(e, n, t) {
    var r = 0;
    n && (r |= 4), Vu(t, e, r, n);
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[$r]) {
      e[$r] = !0, H.forEach(function(t) {
        t !== "selectionchange" && (Yc.has(t) || ho(t, !1, e), ho(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[$r] || (n[$r] = !0, ho("selectionchange", !1, n));
    }
  }
  function Vu(e, n, t, r) {
    switch (au(n)) {
      case 1:
        var l = ic;
        break;
      case 4:
        l = uc;
        break;
      default:
        l = Jl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Bl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function vo(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
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
              if (i = Xn(u), i === null)
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
    Wi(function() {
      var p = o, y = Vl(t), g = [];
      e: {
        var h = Ru.get(e);
        if (h !== void 0) {
          var S = eo, E = e;
          switch (e) {
            case "keypress":
              if (Rr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              S = _c;
              break;
            case "focusin":
              E = "focus", S = ro;
              break;
            case "focusout":
              E = "blur", S = ro;
              break;
            case "beforeblur":
            case "afterblur":
              S = ro;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = du;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Cc;
              break;
            case Pu:
            case Du:
            case Iu:
              S = pc;
              break;
            case Ou:
              S = Mc;
              break;
            case "scroll":
              S = sc;
              break;
            case "wheel":
              S = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = mu;
          }
          var C = (n & 4) !== 0, ce = !C && e === "scroll", f = C ? h !== null ? h + "Capture" : null : h;
          C = [];
          for (var c = p, d; c !== null; ) {
            d = c;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Rt(c, f), w != null && C.push(nr(c, w, d)))), ce)
              break;
            c = c.return;
          }
          0 < C.length && (h = new S(h, E, null, t, y), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && t !== Al && (E = t.relatedTarget || t.fromElement) && (Xn(E) || E[kn]))
            break e;
          if ((S || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (E = t.relatedTarget || t.toElement, S = p, E = E ? Xn(E) : null, E !== null && (ce = Zn(E), E !== ce || E.tag !== 5 && E.tag !== 6) && (E = null)) : (S = null, E = p), S !== E)) {
            if (C = du, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (C = mu, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), ce = S == null ? h : gt(S), d = E == null ? h : gt(E), h = new C(w, c + "leave", S, t, y), h.target = ce, h.relatedTarget = d, w = null, Xn(y) === p && (C = new C(f, c + "enter", E, t, y), C.target = d, C.relatedTarget = ce, w = C), ce = w, S && E)
              n: {
                for (C = S, f = E, c = 0, d = C; d; d = vt(d))
                  c++;
                for (d = 0, w = f; w; w = vt(w))
                  d++;
                for (; 0 < c - d; )
                  C = vt(C), c--;
                for (; 0 < d - c; )
                  f = vt(f), d--;
                for (; c--; ) {
                  if (C === f || f !== null && C === f.alternate)
                    break n;
                  C = vt(C), f = vt(f);
                }
                C = null;
              }
            else
              C = null;
            S !== null && Qu(g, h, S, C, !1), E !== null && ce !== null && Qu(g, ce, E, C, !0);
          }
        }
        e: {
          if (h = p ? gt(p) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
            var N = Rc;
          else if (ku(h))
            if (_u)
              N = Vc;
            else {
              N = Uc;
              var L = Fc;
            }
          else
            (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Ac);
          if (N && (N = N(e, p))) {
            Su(g, N, t, y);
            break e;
          }
          L && L(e, h, p), e === "focusout" && (L = h._wrapperState) && L.controlled && h.type === "number" && Il(h, "number", h.value);
        }
        switch (L = p ? gt(p) : window, e) {
          case "focusin":
            (ku(L) || L.contentEditable === "true") && (mt = L, ao = p, qt = null);
            break;
          case "focusout":
            qt = ao = mt = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            co = !1, Tu(g, t, y);
            break;
          case "selectionchange":
            if (Bc)
              break;
          case "keydown":
          case "keyup":
            Tu(g, t, y);
        }
        var z;
        if (oo)
          e: {
            switch (e) {
              case "compositionstart":
                var j = "onCompositionStart";
                break e;
              case "compositionend":
                j = "onCompositionEnd";
                break e;
              case "compositionupdate":
                j = "onCompositionUpdate";
                break e;
            }
            j = void 0;
          }
        else
          pt ? gu(e, t) && (j = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (j = "onCompositionStart");
        j && (hu && t.locale !== "ko" && (pt || j !== "onCompositionStart" ? j === "onCompositionEnd" && pt && (z = cu()) : (Dn = y, bl = "value" in Dn ? Dn.value : Dn.textContent, pt = !0)), L = Br(p, j), 0 < L.length && (j = new pu(j, e, null, t, y), g.push({ event: j, listeners: L }), z ? j.data = z : (z = wu(t), z !== null && (j.data = z)))), (z = jc ? Pc(e, t) : Dc(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new pu("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Au(g, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Rt(e, t), o != null && r.unshift(nr(e, o, l)), o = Rt(e, n), o != null && r.push(nr(e, o, l))), e = e.return;
    }
    return r;
  }
  function vt(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qu(e, n, t, r, l) {
    for (var o = n._reactName, i = []; t !== null && t !== r; ) {
      var u = t, s = u.alternate, p = u.stateNode;
      if (s !== null && s === r)
        break;
      u.tag === 5 && p !== null && (u = p, l ? (s = Rt(t, o), s != null && i.unshift(nr(t, s, u))) : l || (s = Rt(t, o), s != null && i.push(nr(t, s, u)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Gc = /\r\n?/g, Kc = /\u0000|\uFFFD/g;
  function $u(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gc, `
`).replace(Kc, "");
  }
  function Hr(e, n, t) {
    if (n = $u(n), $u(e) !== n && t)
      throw Error(m(425));
  }
  function Wr() {
  }
  var yo = null, go = null;
  function wo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var ko = typeof setTimeout == "function" ? setTimeout : void 0, Zc = typeof clearTimeout == "function" ? clearTimeout : void 0, Bu = typeof Promise == "function" ? Promise : void 0, Xc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bu < "u" ? function(e) {
    return Bu.resolve(null).then(e).catch(Jc);
  } : ko;
  function Jc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function So(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function On(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function Hu(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2), pn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, kn = "__reactContainer$" + yt, _o = "__reactEvents$" + yt, qc = "__reactListeners$" + yt, bc = "__reactHandles$" + yt;
  function Xn(e) {
    var n = e[pn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[kn] || t[pn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Hu(e); e !== null; ) {
            if (t = e[pn])
              return t;
            e = Hu(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[pn] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(m(33));
  }
  function Yr(e) {
    return e[tr] || null;
  }
  var xo = [], wt = -1;
  function Rn(e) {
    return { current: e };
  }
  function ne(e) {
    0 > wt || (e.current = xo[wt], xo[wt] = null, wt--);
  }
  function q(e, n) {
    wt++, xo[wt] = e.current, e.current = n;
  }
  var Fn = {}, Se = Rn(Fn), je = Rn(!1), Jn = Fn;
  function kt(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t)
      l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Pe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Gr() {
    ne(je), ne(Se);
  }
  function Wu(e, n, t) {
    if (Se.current !== Fn)
      throw Error(m(168));
    q(Se, n), q(je, t);
  }
  function Yu(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(m(108, K(e) || "Unknown", l));
    return a({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Jn = Se.current, q(Se, e), q(je, je.current), !0;
  }
  function Gu(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(m(169));
    t ? (e = Yu(e, n, Jn), r.__reactInternalMemoizedMergedChildContext = e, ne(je), ne(Se), q(Se, e)) : ne(je), q(je, t);
  }
  var Sn = null, Zr = !1, Eo = !1;
  function Ku(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function ef(e) {
    Zr = !0, Ku(e);
  }
  function Un() {
    if (!Eo && Sn !== null) {
      Eo = !0;
      var e = 0, n = $;
      try {
        var t = Sn;
        for ($ = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Zr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Xi(Wl, Un), l;
      } finally {
        $ = n, Eo = !1;
      }
    }
    return null;
  }
  var St = [], _t = 0, Xr = null, Jr = 0, Ye = [], Ge = 0, qn = null, _n = 1, xn = "";
  function bn(e, n) {
    St[_t++] = Jr, St[_t++] = Xr, Xr = e, Jr = n;
  }
  function Zu(e, n, t) {
    Ye[Ge++] = _n, Ye[Ge++] = xn, Ye[Ge++] = qn, qn = e;
    var r = _n;
    e = xn;
    var l = 32 - nn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - nn(n) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, _n = 1 << 32 - nn(n) + l | t << l | r, xn = o + e;
    } else
      _n = 1 << o | t << l | r, xn = e;
  }
  function Co(e) {
    e.return !== null && (bn(e, 1), Zu(e, 1, 0));
  }
  function No(e) {
    for (; e === Xr; )
      Xr = St[--_t], St[_t] = null, Jr = St[--_t], St[_t] = null;
    for (; e === qn; )
      qn = Ye[--Ge], Ye[Ge] = null, xn = Ye[--Ge], Ye[Ge] = null, _n = Ye[--Ge], Ye[Ge] = null;
  }
  var Ae = null, Ve = null, le = !1, rn = null;
  function Xu(e, n) {
    var t = Je(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Ju(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = On(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = qn !== null ? { id: _n, overflow: xn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Mo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (le) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Ju(e, n)) {
          if (Mo(e))
            throw Error(m(418));
          n = On(t.nextSibling);
          var r = Ae;
          n && Ju(e, n) ? Xu(r, t) : (e.flags = e.flags & -4097 | 2, le = !1, Ae = e);
        }
      } else {
        if (Mo(e))
          throw Error(m(418));
        e.flags = e.flags & -4097 | 2, le = !1, Ae = e;
      }
    }
  }
  function qu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ae = e;
  }
  function qr(e) {
    if (e !== Ae)
      return !1;
    if (!le)
      return qu(e), le = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (Mo(e))
        throw bu(), Error(m(418));
      for (; n; )
        Xu(e, n), n = On(n.nextSibling);
    }
    if (qu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = On(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else
      Ve = Ae ? On(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bu() {
    for (var e = Ve; e; )
      e = On(e.nextSibling);
  }
  function xt() {
    Ve = Ae = null, le = !1;
  }
  function zo(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  var nf = ke.ReactCurrentBatchConfig;
  function ln(e, n) {
    if (e && e.defaultProps) {
      n = a({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var br = Rn(null), el = null, Et = null, To = null;
  function jo() {
    To = Et = el = null;
  }
  function Po(e) {
    var n = br.current;
    ne(br), e._currentValue = n;
  }
  function Do(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function Ct(e, n) {
    el = e, To = Et = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (De = !0), e.firstContext = null);
  }
  function Ke(e) {
    var n = e._currentValue;
    if (To !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Et === null) {
        if (el === null)
          throw Error(m(308));
        Et = e, el.dependencies = { lanes: 0, firstContext: e };
      } else
        Et = Et.next = e;
    return n;
  }
  var et = null;
  function Io(e) {
    et === null ? et = [e] : et.push(e);
  }
  function es(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Io(n)) : (t.next = l.next, l.next = t), n.interleaved = t, En(e, r);
  }
  function En(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var An = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ns(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Cn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, U & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, En(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Io(r)) : (n.next = l.next, l.next = n), r.interleaved = n, En(e, t);
  }
  function nl(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  function ts(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = i : o = o.next = i, t = t.next;
        } while (t !== null);
        o === null ? l = o = n : o = o.next = n;
      } else
        l = o = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function tl(e, n, t, r) {
    var l = e.updateQueue;
    An = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u, p = s.next;
      s.next = null, i === null ? o = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, u = y.lastBaseUpdate, u !== i && (u === null ? y.firstBaseUpdate = p : u.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      i = 0, y = p = s = null, u = o;
      do {
        var h = u.lane, S = u.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: S,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var E = e, C = u;
            switch (h = n, S = t, C.tag) {
              case 1:
                if (E = C.payload, typeof E == "function") {
                  g = E.call(S, g, h);
                  break e;
                }
                g = E;
                break e;
              case 3:
                E.flags = E.flags & -65537 | 128;
              case 0:
                if (E = C.payload, h = typeof E == "function" ? E.call(S, g, h) : E, h == null)
                  break e;
                g = a({}, g, h);
                break e;
              case 2:
                An = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [u] : h.push(u));
        } else
          S = { eventTime: S, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, y === null ? (p = y = S, s = g) : y = y.next = S, i |= h;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null)
            break;
          h = u, u = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else
        o === null && (l.shared.lanes = 0);
      rt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function rs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ls = new _.Component().refs;
  function Ro(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : a({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var rl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Me(), l = Hn(e), o = Cn(r, l);
    o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (sn(n, e, l, r), nl(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Me(), l = Hn(e), o = Cn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = Vn(e, o, l), n !== null && (sn(n, e, l, r), nl(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Me(), r = Hn(e), l = Cn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Vn(e, l, r), n !== null && (sn(n, e, r, t), nl(n, e, r));
  } };
  function os(e, n, t, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !Jt(t, r) || !Jt(l, o) : !0;
  }
  function is(e, n, t) {
    var r = !1, l = Fn, o = n.contextType;
    return typeof o == "object" && o !== null ? o = Ke(o) : (l = Pe(n) ? Jn : Se.current, r = n.contextTypes, o = (r = r != null) ? kt(e, l) : Fn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = rl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function us(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && rl.enqueueReplaceState(n, n.state, null);
  }
  function Fo(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = ls, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = Ke(o) : (o = Pe(n) ? Jn : Se.current, l.context = kt(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Ro(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && rl.enqueueReplaceState(l, l.state, null), tl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function lr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
          var u = l.refs;
          u === ls && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string")
        throw Error(m(284));
      if (!t._owner)
        throw Error(m(290, e));
    }
    return e;
  }
  function ll(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function ss(e) {
    var n = e._init;
    return n(e._payload);
  }
  function as(e) {
    function n(f, c) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
      }
    }
    function t(f, c) {
      if (!e)
        return null;
      for (; c !== null; )
        n(f, c), c = c.sibling;
      return null;
    }
    function r(f, c) {
      for (f = /* @__PURE__ */ new Map(); c !== null; )
        c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f;
    }
    function l(f, c) {
      return f = Yn(f, c), f.index = 0, f.sibling = null, f;
    }
    function o(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function i(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, c, d, w) {
      return c === null || c.tag !== 6 ? (c = ki(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, w) {
      var N = d.type;
      return N === Le ? y(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && ss(N) === c.type) ? (w = l(c, d.props), w.ref = lr(f, c, d), w.return = f, w) : (w = xl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, c, d), w.return = f, w);
    }
    function p(f, c, d, w) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Si(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function y(f, c, d, w, N) {
      return c === null || c.tag !== 7 ? (c = ut(d, f.mode, w, N), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function g(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
        return c = ki("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case be:
            return d = xl(c.type, c.key, c.props, null, f.mode, d), d.ref = lr(f, null, c), d.return = f, d;
          case Ce:
            return c = Si(c, f.mode, d), c.return = f, c;
          case ze:
            var w = c._init;
            return g(f, w(c._payload), d);
        }
        if (Dt(c) || T(c))
          return c = ut(c, f.mode, d, null), c.return = f, c;
        ll(f, c);
      }
      return null;
    }
    function h(f, c, d, w) {
      var N = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return N !== null ? null : u(f, c, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(f, c, d, w) : null;
          case Ce:
            return d.key === N ? p(f, c, d, w) : null;
          case ze:
            return N = d._init, h(
              f,
              c,
              N(d._payload),
              w
            );
        }
        if (Dt(d) || T(d))
          return N !== null ? null : y(f, c, d, w, null);
        ll(f, d);
      }
      return null;
    }
    function S(f, c, d, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return f = f.get(d) || null, u(c, f, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, N);
          case Ce:
            return f = f.get(w.key === null ? d : w.key) || null, p(c, f, w, N);
          case ze:
            var L = w._init;
            return S(f, c, d, L(w._payload), N);
        }
        if (Dt(w) || T(w))
          return f = f.get(d) || null, y(c, f, w, N, null);
        ll(c, w);
      }
      return null;
    }
    function E(f, c, d, w) {
      for (var N = null, L = null, z = c, j = c = 0, ye = null; z !== null && j < d.length; j++) {
        z.index > j ? (ye = z, z = null) : ye = z.sibling;
        var A = h(f, z, d[j], w);
        if (A === null) {
          z === null && (z = ye);
          break;
        }
        e && z && A.alternate === null && n(f, z), c = o(A, c, j), L === null ? N = A : L.sibling = A, L = A, z = ye;
      }
      if (j === d.length)
        return t(f, z), le && bn(f, j), N;
      if (z === null) {
        for (; j < d.length; j++)
          z = g(f, d[j], w), z !== null && (c = o(z, c, j), L === null ? N = z : L.sibling = z, L = z);
        return le && bn(f, j), N;
      }
      for (z = r(f, z); j < d.length; j++)
        ye = S(z, f, j, d[j], w), ye !== null && (e && ye.alternate !== null && z.delete(ye.key === null ? j : ye.key), c = o(ye, c, j), L === null ? N = ye : L.sibling = ye, L = ye);
      return e && z.forEach(function(Gn) {
        return n(f, Gn);
      }), le && bn(f, j), N;
    }
    function C(f, c, d, w) {
      var N = T(d);
      if (typeof N != "function")
        throw Error(m(150));
      if (d = N.call(d), d == null)
        throw Error(m(151));
      for (var L = N = null, z = c, j = c = 0, ye = null, A = d.next(); z !== null && !A.done; j++, A = d.next()) {
        z.index > j ? (ye = z, z = null) : ye = z.sibling;
        var Gn = h(f, z, A.value, w);
        if (Gn === null) {
          z === null && (z = ye);
          break;
        }
        e && z && Gn.alternate === null && n(f, z), c = o(Gn, c, j), L === null ? N = Gn : L.sibling = Gn, L = Gn, z = ye;
      }
      if (A.done)
        return t(
          f,
          z
        ), le && bn(f, j), N;
      if (z === null) {
        for (; !A.done; j++, A = d.next())
          A = g(f, A.value, w), A !== null && (c = o(A, c, j), L === null ? N = A : L.sibling = A, L = A);
        return le && bn(f, j), N;
      }
      for (z = r(f, z); !A.done; j++, A = d.next())
        A = S(z, f, j, A.value, w), A !== null && (e && A.alternate !== null && z.delete(A.key === null ? j : A.key), c = o(A, c, j), L === null ? N = A : L.sibling = A, L = A);
      return e && z.forEach(function(Of) {
        return n(f, Of);
      }), le && bn(f, j), N;
    }
    function ce(f, c, d, w) {
      if (typeof d == "object" && d !== null && d.type === Le && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var N = d.key, L = c; L !== null; ) {
                if (L.key === N) {
                  if (N = d.type, N === Le) {
                    if (L.tag === 7) {
                      t(f, L.sibling), c = l(L, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (L.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && ss(N) === L.type) {
                    t(f, L.sibling), c = l(L, d.props), c.ref = lr(f, L, d), c.return = f, f = c;
                    break e;
                  }
                  t(f, L);
                  break;
                } else
                  n(f, L);
                L = L.sibling;
              }
              d.type === Le ? (c = ut(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = xl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, c, d), w.return = f, f = w);
            }
            return i(f);
          case Ce:
            e: {
              for (L = d.key; c !== null; ) {
                if (c.key === L)
                  if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                    t(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                    break e;
                  } else {
                    t(f, c);
                    break;
                  }
                else
                  n(f, c);
                c = c.sibling;
              }
              c = Si(d, f.mode, w), c.return = f, f = c;
            }
            return i(f);
          case ze:
            return L = d._init, ce(f, c, L(d._payload), w);
        }
        if (Dt(d))
          return E(f, c, d, w);
        if (T(d))
          return C(f, c, d, w);
        ll(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (t(f, c.sibling), c = l(c, d), c.return = f, f = c) : (t(f, c), c = ki(d, f.mode, w), c.return = f, f = c), i(f)) : t(f, c);
    }
    return ce;
  }
  var Nt = as(!0), cs = as(!1), or = {}, mn = Rn(or), ir = Rn(or), ur = Rn(or);
  function nt(e) {
    if (e === or)
      throw Error(m(174));
    return e;
  }
  function Uo(e, n) {
    switch (q(ur, n), q(ir, e), q(mn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Rl(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Rl(n, e);
    }
    ne(mn), q(mn, n);
  }
  function Mt() {
    ne(mn), ne(ir), ne(ur);
  }
  function fs(e) {
    nt(ur.current);
    var n = nt(mn.current), t = Rl(n, e.type);
    n !== t && (q(ir, e), q(mn, t));
  }
  function Ao(e) {
    ir.current === e && (ne(mn), ne(ir));
  }
  var oe = Rn(0);
  function ol(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Vo = [];
  function Qo() {
    for (var e = 0; e < Vo.length; e++)
      Vo[e]._workInProgressVersionPrimary = null;
    Vo.length = 0;
  }
  var il = ke.ReactCurrentDispatcher, $o = ke.ReactCurrentBatchConfig, tt = 0, ie = null, pe = null, he = null, ul = !1, sr = !1, ar = 0, tf = 0;
  function _e() {
    throw Error(m(321));
  }
  function Bo(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!tn(e[t], n[t]))
        return !1;
    return !0;
  }
  function Ho(e, n, t, r, l, o) {
    if (tt = o, ie = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, il.current = e === null || e.memoizedState === null ? uf : sf, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o)
          throw Error(m(301));
        o += 1, he = pe = null, n.updateQueue = null, il.current = af, e = t(r, l);
      } while (sr);
    }
    if (il.current = cl, n = pe !== null && pe.next !== null, tt = 0, he = pe = ie = null, ul = !1, n)
      throw Error(m(300));
    return e;
  }
  function Wo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function hn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return he === null ? ie.memoizedState = he = e : he = he.next = e, he;
  }
  function Ze() {
    if (pe === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = pe.next;
    var n = he === null ? ie.memoizedState : he.next;
    if (n !== null)
      he = n, pe = e;
    else {
      if (e === null)
        throw Error(m(310));
      pe = e, e = { memoizedState: pe.memoizedState, baseState: pe.baseState, baseQueue: pe.baseQueue, queue: pe.queue, next: null }, he === null ? ie.memoizedState = he = e : he = he.next = e;
    }
    return he;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Yo(e) {
    var n = Ze(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = pe, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((tt & y) === y)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (u = s = g, i = r) : s = s.next = g, ie.lanes |= y, rt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? i = r : s.next = u, tn(r, n.memoizedState) || (De = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, ie.lanes |= o, rt |= o, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Go(e) {
    var n = Ze(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      tn(o, n.memoizedState) || (De = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function ds() {
  }
  function ps(e, n) {
    var t = ie, r = Ze(), l = n(), o = !tn(r.memoizedState, l);
    if (o && (r.memoizedState = l, De = !0), r = r.queue, Ko(vs.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || he !== null && he.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, hs.bind(null, t, r, l, n), void 0, null), ve === null)
        throw Error(m(349));
      tt & 30 || ms(t, n, l);
    }
    return l;
  }
  function ms(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ie.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ie.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function hs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ys(n) && gs(e);
  }
  function vs(e, n, t) {
    return t(function() {
      ys(n) && gs(e);
    });
  }
  function ys(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var n = En(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function ws(e) {
    var n = hn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = of.bind(null, ie, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ie.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ie.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ks() {
    return Ze().memoizedState;
  }
  function sl(e, n, t, r) {
    var l = hn();
    ie.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function al(e, n, t, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (pe !== null) {
      var i = pe.memoizedState;
      if (o = i.destroy, r !== null && Bo(r, i.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    ie.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
  }
  function Ss(e, n) {
    return sl(8390656, 8, e, n);
  }
  function Ko(e, n) {
    return al(2048, 8, e, n);
  }
  function _s(e, n) {
    return al(4, 2, e, n);
  }
  function xs(e, n) {
    return al(4, 4, e, n);
  }
  function Es(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Cs(e, n, t) {
    return t = t != null ? t.concat([e]) : null, al(4, 4, Es.bind(null, n, e), t);
  }
  function Zo() {
  }
  function Ns(e, n) {
    var t = Ze();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Bo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ms(e, n) {
    var t = Ze();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Bo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function Ls(e, n, t) {
    return tt & 21 ? (tn(t, n) || (t = eu(), ie.lanes |= t, rt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = t);
  }
  function rf(e, n) {
    var t = $;
    $ = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = $o.transition;
    $o.transition = {};
    try {
      e(!1), n();
    } finally {
      $ = t, $o.transition = r;
    }
  }
  function zs() {
    return Ze().memoizedState;
  }
  function lf(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ts(e))
      js(n, t);
    else if (t = es(e, n, t, r), t !== null) {
      var l = Me();
      sn(t, e, r, l), Ps(t, n, r);
    }
  }
  function of(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(e))
      js(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
        try {
          var i = n.lastRenderedState, u = o(i, t);
          if (l.hasEagerState = !0, l.eagerState = u, tn(u, i)) {
            var s = n.interleaved;
            s === null ? (l.next = l, Io(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = es(e, n, l, r), t !== null && (l = Me(), sn(t, e, r, l), Ps(t, n, r));
    }
  }
  function Ts(e) {
    var n = e.alternate;
    return e === ie || n !== null && n === ie;
  }
  function js(e, n) {
    sr = ul = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ps(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Kl(e, t);
    }
  }
  var cl = { readContext: Ke, useCallback: _e, useContext: _e, useEffect: _e, useImperativeHandle: _e, useInsertionEffect: _e, useLayoutEffect: _e, useMemo: _e, useReducer: _e, useRef: _e, useState: _e, useDebugValue: _e, useDeferredValue: _e, useTransition: _e, useMutableSource: _e, useSyncExternalStore: _e, useId: _e, unstable_isNewReconciler: !1 }, uf = { readContext: Ke, useCallback: function(e, n) {
    return hn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ke, useEffect: Ss, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, sl(
      4194308,
      4,
      Es.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return sl(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return sl(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = hn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = hn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = lf.bind(null, ie, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = hn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ws, useDebugValue: Zo, useDeferredValue: function(e) {
    return hn().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), n = e[0];
    return e = rf.bind(null, e[1]), hn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ie, l = hn();
    if (le) {
      if (t === void 0)
        throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ve === null)
        throw Error(m(349));
      tt & 30 || ms(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, Ss(vs.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, fr(9, hs.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = hn(), n = ve.identifierPrefix;
    if (le) {
      var t = xn, r = _n;
      t = (r & ~(1 << 32 - nn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = tf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, sf = {
    readContext: Ke,
    useCallback: Ns,
    useContext: Ke,
    useEffect: Ko,
    useImperativeHandle: Cs,
    useInsertionEffect: _s,
    useLayoutEffect: xs,
    useMemo: Ms,
    useReducer: Yo,
    useRef: ks,
    useState: function() {
      return Yo(cr);
    },
    useDebugValue: Zo,
    useDeferredValue: function(e) {
      var n = Ze();
      return Ls(n, pe.memoizedState, e);
    },
    useTransition: function() {
      var e = Yo(cr)[0], n = Ze().memoizedState;
      return [e, n];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: zs,
    unstable_isNewReconciler: !1
  }, af = { readContext: Ke, useCallback: Ns, useContext: Ke, useEffect: Ko, useImperativeHandle: Cs, useInsertionEffect: _s, useLayoutEffect: xs, useMemo: Ms, useReducer: Go, useRef: ks, useState: function() {
    return Go(cr);
  }, useDebugValue: Zo, useDeferredValue: function(e) {
    var n = Ze();
    return pe === null ? n.memoizedState = e : Ls(n, pe.memoizedState, e);
  }, useTransition: function() {
    var e = Go(cr)[0], n = Ze().memoizedState;
    return [e, n];
  }, useMutableSource: ds, useSyncExternalStore: ps, useId: zs, unstable_isNewReconciler: !1 };
  function Lt(e, n) {
    try {
      var t = "", r = n;
      do
        t += J(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Xo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Jo(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, n, t) {
    t = Cn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      yl || (yl = !0, di = r), Jo(e, n);
    }, t;
  }
  function Is(e, n, t) {
    t = Cn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Jo(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Jo(e, n), typeof r != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function Os(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = Ef.bind(null, e, n, t), n.then(e, e));
  }
  function Rs(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Cn(-1, 1), n.tag = 2, Vn(t, n, 1))), t.lanes |= 1), e);
  }
  var ff = ke.ReactCurrentOwner, De = !1;
  function Ne(e, n, t, r) {
    n.child = e === null ? cs(n, null, t, r) : Nt(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return Ct(n, l), r = Ho(e, n, t, r, o, l), t = Wo(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Nn(e, n, l)) : (le && t && Co(n), n.flags |= 1, Ne(e, n, r, l), n.child);
  }
  function As(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !wi(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Vs(e, n, o, r, l)) : (e = xl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Jt, t(i, r) && e.ref === n.ref)
        return Nn(e, n, l);
    }
    return n.flags |= 1, e = Yn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Vs(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jt(o, r) && e.ref === n.ref)
        if (De = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
          e.flags & 131072 && (De = !0);
        else
          return n.lanes = e.lanes, Nn(e, n, l);
    }
    return qo(e, n, t, r, l);
  }
  function Qs(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, q(Tt, Qe), Qe |= t;
      else {
        if (!(t & 1073741824))
          return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, q(Tt, Qe), Qe |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, q(Tt, Qe), Qe |= r;
      }
    else
      o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, q(Tt, Qe), Qe |= r;
    return Ne(e, n, l, t), n.child;
  }
  function $s(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function qo(e, n, t, r, l) {
    var o = Pe(t) ? Jn : Se.current;
    return o = kt(n, o), Ct(n, l), t = Ho(e, n, t, r, o, l), r = Wo(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Nn(e, n, l)) : (le && r && Co(n), n.flags |= 1, Ne(e, n, t, l), n.child);
  }
  function Bs(e, n, t, r, l) {
    if (Pe(t)) {
      var o = !0;
      Kr(n);
    } else
      o = !1;
    if (Ct(n, l), n.stateNode === null)
      dl(e, n), is(n, t, r), Fo(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, u = n.memoizedProps;
      i.props = u;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ke(p) : (p = Pe(t) ? Jn : Se.current, p = kt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== p) && us(n, i, r, p), An = !1;
      var h = n.memoizedState;
      i.state = h, tl(n, r, i, l), s = n.memoizedState, u !== r || h !== s || je.current || An ? (typeof y == "function" && (Ro(n, t, y, r), s = n.memoizedState), (u = An || os(n, t, u, r, h, s, p)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, ns(e, n), u = n.memoizedProps, p = n.type === n.elementType ? u : ln(n.type, u), i.props = p, g = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ke(s) : (s = Pe(t) ? Jn : Se.current, s = kt(n, s));
      var S = t.getDerivedStateFromProps;
      (y = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== g || h !== s) && us(n, i, r, s), An = !1, h = n.memoizedState, i.state = h, tl(n, r, i, l);
      var E = n.memoizedState;
      u !== g || h !== E || je.current || An ? (typeof S == "function" && (Ro(n, t, S, r), E = n.memoizedState), (p = An || os(n, t, p, r, h, E, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, E, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, E, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = E), i.props = r, i.state = E, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return bo(e, n, t, r, o, l);
  }
  function bo(e, n, t, r, l, o) {
    $s(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i)
      return l && Gu(n, t, !1), Nn(e, n, o);
    r = n.stateNode, ff.current = n;
    var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = Nt(n, e.child, null, o), n.child = Nt(n, null, u, o)) : Ne(e, n, u, o), n.memoizedState = r.state, l && Gu(n, t, !0), n.child;
  }
  function Hs(e) {
    var n = e.stateNode;
    n.pendingContext ? Wu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Wu(e, n.context, !1), Uo(e, n.containerInfo);
  }
  function Ws(e, n, t, r, l) {
    return xt(), zo(l), n.flags |= 256, Ne(e, n, t, r), n.child;
  }
  var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ni(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ys(e, n, t) {
    var r = n.pendingProps, l = oe.current, o = !1, i = (n.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), q(oe, l & 1), e === null)
      return Lo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = El(i, r, 0, null), e = ut(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = ni(t), n.memoizedState = ei, e) : ti(n, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
      return df(e, n, i, r, u, l, t);
    if (o) {
      o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Yn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Yn(u, o) : (o = ut(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? ni(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = ei, r;
    }
    return o = e.child, e = o.sibling, r = Yn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function ti(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function fl(e, n, t, r) {
    return r !== null && zo(r), Nt(n, e.child, null, t), e = ti(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function df(e, n, t, r, l, o, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Xo(Error(m(422))), fl(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = ut(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && Nt(n, e.child, null, i), n.child.memoizedState = ni(i), n.memoizedState = ei, o);
    if (!(n.mode & 1))
      return fl(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var u = r.dgst;
      return r = u, o = Error(m(419)), r = Xo(o, r, void 0), fl(e, n, i, r);
    }
    if (u = (i & e.childLanes) !== 0, De || u) {
      if (r = ve, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, En(e, l), sn(r, e, l, -1));
      }
      return gi(), r = Xo(Error(m(421))), fl(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Cf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ve = On(l.nextSibling), Ae = n, le = !0, rn = null, e !== null && (Ye[Ge++] = _n, Ye[Ge++] = xn, Ye[Ge++] = qn, _n = e.id, xn = e.overflow, qn = n), n = ti(n, r.children), n.flags |= 4096, n);
  }
  function Gs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Do(e.return, n, t);
  }
  function ri(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function Ks(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Ne(e, n, r.children, t), r = oe.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Gs(e, t, n);
            else if (e.tag === 19)
              Gs(e, t, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (q(oe, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && ol(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), ri(n, !1, l, t, o);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && ol(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          ri(n, !0, t, null, o);
          break;
        case "together":
          ri(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function dl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Nn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), rt |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Yn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Yn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function pf(e, n, t) {
    switch (n.tag) {
      case 3:
        Hs(n), xt();
        break;
      case 5:
        fs(n);
        break;
      case 1:
        Pe(n.type) && Kr(n);
        break;
      case 4:
        Uo(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        q(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (q(oe, oe.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Ys(e, n, t) : (q(oe, oe.current & 1), e = Nn(e, n, t), e !== null ? e.sibling : null);
        q(oe, oe.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ks(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), q(oe, oe.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Qs(e, n, t);
    }
    return Nn(e, n, t);
  }
  var Zs, li, Xs, Js;
  Zs = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, li = function() {
  }, Xs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, nt(mn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Pl(e, l), r = Pl(e, r), o = [];
          break;
        case "select":
          l = a({}, l, { value: void 0 }), r = a({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Fl(t, r);
      var i;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var u = l[p];
            for (i in u)
              u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Z.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (u = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== u && (s != null || u != null))
          if (p === "style")
            if (u) {
              for (i in u)
                !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
              for (i in s)
                s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
            } else
              t || (o || (o = []), o.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Z.hasOwnProperty(p) ? (s != null && p === "onScroll" && ee("scroll", e), o || u === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Js = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!le)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), n = n.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function xe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function mf(e, n, t) {
    var r = n.pendingProps;
    switch (No(n), n.tag) {
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
        return xe(n), null;
      case 1:
        return Pe(n.type) && Gr(), xe(n), null;
      case 3:
        return r = n.stateNode, Mt(), ne(je), ne(Se), Qo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, rn !== null && (hi(rn), rn = null))), li(e, n), xe(n), null;
      case 5:
        Ao(n);
        var l = nt(ur.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Xs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(m(166));
            return xe(n), null;
          }
          if (e = nt(mn.current), qr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[pn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                ee("cancel", r), ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++)
                  ee(bt[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  r
                ), ee("load", r);
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                Ti(r, o), ee("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ee("invalid", r);
                break;
              case "textarea":
                Di(r, o), ee("invalid", r);
            }
            Fl(t, o), l = null;
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var u = o[i];
                i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Hr(
                  r.textContent,
                  u,
                  e
                ), l = ["children", "" + u]) : Z.hasOwnProperty(i) && u != null && i === "onScroll" && ee("scroll", r);
              }
            switch (t) {
              case "input":
                Sr(r), Pi(r, o, !0);
                break;
              case "textarea":
                Sr(r), Oi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Wr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ri(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[pn] = n, e[tr] = r, Zs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Ul(t, r), t) {
                case "dialog":
                  ee("cancel", e), ee("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ee("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++)
                    ee(bt[l], e);
                  l = r;
                  break;
                case "source":
                  ee("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ee(
                    "error",
                    e
                  ), ee("load", e), l = r;
                  break;
                case "details":
                  ee("toggle", e), l = r;
                  break;
                case "input":
                  Ti(e, r), l = Pl(e, r), ee("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = a({}, r, { value: void 0 }), ee("invalid", e);
                  break;
                case "textarea":
                  Di(e, r), l = Ol(e, r), ee("invalid", e);
                  break;
                default:
                  l = r;
              }
              Fl(t, l), u = l;
              for (o in u)
                if (u.hasOwnProperty(o)) {
                  var s = u[o];
                  o === "style" ? Ai(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Fi(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && It(e, s) : typeof s == "number" && It(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Z.hasOwnProperty(o) ? s != null && o === "onScroll" && ee("scroll", e) : s != null && qe(e, o, s, i));
                }
              switch (t) {
                case "input":
                  Sr(e), Pi(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), Oi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? st(e, !!r.multiple, o, !1) : r.defaultValue != null && st(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
              }
              switch (t) {
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
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return xe(n), null;
      case 6:
        if (e && n.stateNode != null)
          Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(m(166));
          if (t = nt(ur.current), nt(mn.current), qr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[pn] = n, (o = r.nodeValue !== t) && (e = Ae, e !== null))
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            o && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[pn] = n, n.stateNode = r;
        }
        return xe(n), null;
      case 13:
        if (ne(oe), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (le && Ve !== null && n.mode & 1 && !(n.flags & 128))
            bu(), xt(), n.flags |= 98560, o = !1;
          else if (o = qr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(m(317));
              o[pn] = n;
            } else
              xt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            xe(n), o = !1;
          } else
            rn !== null && (hi(rn), rn = null), o = !0;
          if (!o)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || oe.current & 1 ? me === 0 && (me = 3) : gi())), n.updateQueue !== null && (n.flags |= 4), xe(n), null);
      case 4:
        return Mt(), li(e, n), e === null && er(n.stateNode.containerInfo), xe(n), null;
      case 10:
        return Po(n.type._context), xe(n), null;
      case 17:
        return Pe(n.type) && Gr(), xe(n), null;
      case 19:
        if (ne(oe), o = n.memoizedState, o === null)
          return xe(n), null;
        if (r = (n.flags & 128) !== 0, i = o.rendering, i === null)
          if (r)
            dr(o, !1);
          else {
            if (me !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (i = ol(e), i !== null) {
                  for (n.flags |= 128, dr(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return q(oe, oe.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            o.tail !== null && ae() > jt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = ol(i), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !le)
                return xe(n), null;
            } else
              2 * ae() - o.renderingStartTime > jt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = ae(), n.sibling = null, t = oe.current, q(oe, r ? t & 1 | 2 : t & 1), n) : (xe(n), null);
      case 22:
      case 23:
        return yi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Qe & 1073741824 && (xe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : xe(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function hf(e, n) {
    switch (No(n), n.tag) {
      case 1:
        return Pe(n.type) && Gr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Mt(), ne(je), ne(Se), Qo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ao(n), null;
      case 13:
        if (ne(oe), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(m(340));
          xt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ne(oe), null;
      case 4:
        return Mt(), null;
      case 10:
        return Po(n.type._context), null;
      case 22:
      case 23:
        return yi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pl = !1, Ee = !1, vf = typeof WeakSet == "function" ? WeakSet : Set, x = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          se(e, n, r);
        }
      else
        t.current = null;
  }
  function oi(e, n, t) {
    try {
      t();
    } catch (r) {
      se(e, n, r);
    }
  }
  var qs = !1;
  function yf(e, n) {
    if (yo = Dr, e = zu(), so(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, o = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, o.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0, u = -1, s = -1, p = 0, y = 0, g = e, h = null;
            n:
              for (; ; ) {
                for (var S; g !== t || l !== 0 && g.nodeType !== 3 || (u = i + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (S = g.firstChild) !== null; )
                  h = g, g = S;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (h === t && ++p === l && (u = i), h === o && ++y === r && (s = i), (S = g.nextSibling) !== null)
                    break;
                  g = h, h = g.parentNode;
                }
                g = S;
              }
            t = u === -1 || s === -1 ? null : { start: u, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (go = { focusedElem: e, selectionRange: t }, Dr = !1, x = n; x !== null; )
      if (n = x, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, x = e;
      else
        for (; x !== null; ) {
          n = x;
          try {
            var E = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (E !== null) {
                    var C = E.memoizedProps, ce = E.memoizedState, f = n.stateNode, c = f.getSnapshotBeforeUpdate(n.elementType === n.type ? C : ln(n.type, C), ce);
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            se(n, n.return, w);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, x = e;
            break;
          }
          x = n.return;
        }
    return E = qs, qs = !1, E;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && oi(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ml(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ii(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, bs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[pn], delete n[tr], delete n[_o], delete n[qc], delete n[bc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || ea(e.return))
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
  function ui(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), e = e.sibling;
  }
  function si(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (si(e, n, t), e = e.sibling; e !== null; )
        si(e, n, t), e = e.sibling;
  }
  var ge = null, on = !1;
  function Qn(e, n, t) {
    for (t = t.child; t !== null; )
      ta(e, n, t), t = t.sibling;
  }
  function ta(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(Mr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Ee || zt(t, n);
      case 6:
        var r = ge, l = on;
        ge = null, Qn(e, n, t), ge = r, on = l, ge !== null && (on ? (e = ge, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ge.removeChild(t.stateNode));
        break;
      case 18:
        ge !== null && (on ? (e = ge, t = t.stateNode, e.nodeType === 8 ? So(e.parentNode, t) : e.nodeType === 1 && So(e, t), Wt(e)) : So(ge, t.stateNode));
        break;
      case 4:
        r = ge, l = on, ge = t.stateNode.containerInfo, on = !0, Qn(e, n, t), ge = r, on = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ee && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && oi(t, n, i), l = l.next;
          } while (l !== r);
        }
        Qn(e, n, t);
        break;
      case 1:
        if (!Ee && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (u) {
            se(t, n, u);
          }
        Qn(e, n, t);
        break;
      case 21:
        Qn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ee = (r = Ee) || t.memoizedState !== null, Qn(e, n, t), Ee = r) : Qn(e, n, t);
        break;
      default:
        Qn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new vf()), n.forEach(function(r) {
        var l = Nf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function un(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var o = e, i = n, u = i;
          e:
            for (; u !== null; ) {
              switch (u.tag) {
                case 5:
                  ge = u.stateNode, on = !1;
                  break e;
                case 3:
                  ge = u.stateNode.containerInfo, on = !0;
                  break e;
                case 4:
                  ge = u.stateNode.containerInfo, on = !0;
                  break e;
              }
              u = u.return;
            }
          if (ge === null)
            throw Error(m(160));
          ta(o, i, l), ge = null, on = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          se(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        la(n, e), n = n.sibling;
  }
  function la(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(n, e), vn(e), r & 4) {
          try {
            pr(3, e, e.return), ml(3, e);
          } catch (C) {
            se(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            se(e, e.return, C);
          }
        }
        break;
      case 1:
        un(n, e), vn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (un(n, e), vn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            It(l, "");
          } catch (C) {
            se(e, e.return, C);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              u === "input" && o.type === "radio" && o.name != null && ji(l, o), Ul(u, i);
              var p = Ul(u, o);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i], g = s[i + 1];
                y === "style" ? Ai(l, g) : y === "dangerouslySetInnerHTML" ? Fi(l, g) : y === "children" ? It(l, g) : qe(l, y, g, p);
              }
              switch (u) {
                case "input":
                  Dl(l, o);
                  break;
                case "textarea":
                  Ii(l, o);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var S = o.value;
                  S != null ? st(l, !!o.multiple, S, !1) : h !== !!o.multiple && (o.defaultValue != null ? st(
                    l,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : st(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[tr] = o;
            } catch (C) {
              se(e, e.return, C);
            }
        }
        break;
      case 6:
        if (un(n, e), vn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (C) {
            se(e, e.return, C);
          }
        }
        break;
      case 3:
        if (un(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wt(n.containerInfo);
          } catch (C) {
            se(e, e.return, C);
          }
        break;
      case 4:
        un(n, e), vn(e);
        break;
      case 13:
        un(n, e), vn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (fi = ae())), r & 4 && ra(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ee = (p = Ee) || y, un(n, e), Ee = p) : un(n, e), vn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
            for (x = e, y = e.child; y !== null; ) {
              for (g = x = y; x !== null; ) {
                switch (h = x, S = h.child, h.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var E = h.stateNode;
                    if (typeof E.componentWillUnmount == "function") {
                      r = h, t = h.return;
                      try {
                        n = r, E.props = n.memoizedProps, E.state = n.memoizedState, E.componentWillUnmount();
                      } catch (C) {
                        se(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ua(g);
                      continue;
                    }
                }
                S !== null ? (S.return = h, x = S) : ua(g);
              }
              y = y.sibling;
            }
          e:
            for (y = null, g = e; ; ) {
              if (g.tag === 5) {
                if (y === null) {
                  y = g;
                  try {
                    l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = g.stateNode, s = g.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ui("display", i));
                  } catch (C) {
                    se(e, e.return, C);
                  }
                }
              } else if (g.tag === 6) {
                if (y === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (C) {
                    se(e, e.return, C);
                  }
              } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === e)
                break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === e)
                  break e;
                y === g && (y = null), g = g.return;
              }
              y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
            }
        }
        break;
      case 19:
        un(n, e), vn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        un(
          n,
          e
        ), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (It(l, ""), r.flags &= -33);
            var o = na(e);
            si(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = na(e);
            ui(e, u, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function gf(e, n, t) {
    x = e, oa(e);
  }
  function oa(e, n, t) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
      var l = x, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || pl;
        if (!i) {
          var u = l.alternate, s = u !== null && u.memoizedState !== null || Ee;
          u = pl;
          var p = Ee;
          if (pl = i, (Ee = s) && !p)
            for (x = l; x !== null; )
              i = x, s = i.child, i.tag === 22 && i.memoizedState !== null ? sa(l) : s !== null ? (s.return = i, x = s) : sa(l);
          for (; o !== null; )
            x = o, oa(o), o = o.sibling;
          x = l, pl = u, Ee = p;
        }
        ia(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : ia(e);
    }
  }
  function ia(e) {
    for (; x !== null; ) {
      var n = x;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ee || ml(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Ee)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : ln(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = n.updateQueue;
                o !== null && rs(n, o, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  rs(n, i, t);
                }
                break;
              case 5:
                var u = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = u;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
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
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Wt(g);
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
                throw Error(m(163));
            }
          Ee || n.flags & 512 && ii(n);
        } catch (h) {
          se(n, n.return, h);
        }
      }
      if (n === e) {
        x = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, x = t;
        break;
      }
      x = n.return;
    }
  }
  function ua(e) {
    for (; x !== null; ) {
      var n = x;
      if (n === e) {
        x = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, x = t;
        break;
      }
      x = n.return;
    }
  }
  function sa(e) {
    for (; x !== null; ) {
      var n = x;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              ml(4, n);
            } catch (s) {
              se(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(n, l, s);
              }
            }
            var o = n.return;
            try {
              ii(n);
            } catch (s) {
              se(n, o, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ii(n);
            } catch (s) {
              se(n, i, s);
            }
        }
      } catch (s) {
        se(n, n.return, s);
      }
      if (n === e) {
        x = null;
        break;
      }
      var u = n.sibling;
      if (u !== null) {
        u.return = n.return, x = u;
        break;
      }
      x = n.return;
    }
  }
  var wf = Math.ceil, hl = ke.ReactCurrentDispatcher, ai = ke.ReactCurrentOwner, Xe = ke.ReactCurrentBatchConfig, U = 0, ve = null, de = null, we = 0, Qe = 0, Tt = Rn(0), me = 0, mr = null, rt = 0, vl = 0, ci = 0, hr = null, Ie = null, fi = 0, jt = 1 / 0, Mn = null, yl = !1, di = null, $n = null, gl = !1, Bn = null, wl = 0, vr = 0, pi = null, kl = -1, Sl = 0;
  function Me() {
    return U & 6 ? ae() : kl !== -1 ? kl : kl = ae();
  }
  function Hn(e) {
    return e.mode & 1 ? U & 2 && we !== 0 ? we & -we : nf.transition !== null ? (Sl === 0 && (Sl = eu()), Sl) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : au(e.type)), e) : 1;
  }
  function sn(e, n, t, r) {
    if (50 < vr)
      throw vr = 0, pi = null, Error(m(185));
    Vt(e, t, r), (!(U & 2) || e !== ve) && (e === ve && (!(U & 2) && (vl |= t), me === 4 && Wn(e, we)), Oe(e, r), t === 1 && U === 0 && !(n.mode & 1) && (jt = ae() + 500, Zr && Un()));
  }
  function Oe(e, n) {
    var t = e.callbackNode;
    nc(e, n);
    var r = Tr(e, e === ve ? we : 0);
    if (r === 0)
      t !== null && Ji(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Ji(t), n === 1)
        e.tag === 0 ? ef(ca.bind(null, e)) : Ku(ca.bind(null, e)), Xc(function() {
          !(U & 6) && Un();
        }), t = null;
      else {
        switch (nu(r)) {
          case 1:
            t = Wl;
            break;
          case 4:
            t = qi;
            break;
          case 16:
            t = Nr;
            break;
          case 536870912:
            t = bi;
            break;
          default:
            t = Nr;
        }
        t = ga(t, aa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function aa(e, n) {
    if (kl = -1, Sl = 0, U & 6)
      throw Error(m(327));
    var t = e.callbackNode;
    if (Pt() && e.callbackNode !== t)
      return null;
    var r = Tr(e, e === ve ? we : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = _l(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var o = da();
      (ve !== e || we !== n) && (Mn = null, jt = ae() + 500, ot(e, n));
      do
        try {
          _f();
          break;
        } catch (u) {
          fa(e, u);
        }
      while (!0);
      jo(), hl.current = o, U = l, de !== null ? n = 0 : (ve = null, we = 0, n = me);
    }
    if (n !== 0) {
      if (n === 2 && (l = Yl(e), l !== 0 && (r = l, n = mi(e, l))), n === 1)
        throw t = mr, ot(e, 0), Wn(e, r), Oe(e, ae()), t;
      if (n === 6)
        Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !kf(l) && (n = _l(e, r), n === 2 && (o = Yl(e), o !== 0 && (r = o, n = mi(e, o))), n === 1))
          throw t = mr, ot(e, 0), Wn(e, r), Oe(e, ae()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            it(e, Ie, Mn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = fi + 500 - ae(), 10 < n)) {
              if (Tr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Me(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = ko(it.bind(null, e, Ie, Mn), n);
              break;
            }
            it(e, Ie, Mn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - nn(r);
              o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ko(it.bind(null, e, Ie, Mn), r);
              break;
            }
            it(e, Ie, Mn);
            break;
          case 5:
            it(e, Ie, Mn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Oe(e, ae()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function mi(e, n) {
    var t = hr;
    return e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256), e = _l(e, n), e !== 2 && (n = Ie, Ie = t, n !== null && hi(n)), e;
  }
  function hi(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e);
  }
  function kf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], o = l.getSnapshot;
            l = l.value;
            try {
              if (!tn(o(), l))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null)
        t.return = n, n = t;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~ci, n &= ~vl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - nn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ca(e) {
    if (U & 6)
      throw Error(m(327));
    Pt();
    var n = Tr(e, 0);
    if (!(n & 1))
      return Oe(e, ae()), null;
    var t = _l(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Yl(e);
      r !== 0 && (n = r, t = mi(e, r));
    }
    if (t === 1)
      throw t = mr, ot(e, 0), Wn(e, n), Oe(e, ae()), t;
    if (t === 6)
      throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, it(e, Ie, Mn), Oe(e, ae()), null;
  }
  function vi(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      U = t, U === 0 && (jt = ae() + 500, Zr && Un());
    }
  }
  function lt(e) {
    Bn !== null && Bn.tag === 0 && !(U & 6) && Pt();
    var n = U;
    U |= 1;
    var t = Xe.transition, r = $;
    try {
      if (Xe.transition = null, $ = 1, e)
        return e();
    } finally {
      $ = r, Xe.transition = t, U = n, !(U & 6) && Un();
    }
  }
  function yi() {
    Qe = Tt.current, ne(Tt);
  }
  function ot(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Zc(t)), de !== null)
      for (t = de.return; t !== null; ) {
        var r = t;
        switch (No(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Gr();
            break;
          case 3:
            Mt(), ne(je), ne(Se), Qo();
            break;
          case 5:
            Ao(r);
            break;
          case 4:
            Mt();
            break;
          case 13:
            ne(oe);
            break;
          case 19:
            ne(oe);
            break;
          case 10:
            Po(r.type._context);
            break;
          case 22:
          case 23:
            yi();
        }
        t = t.return;
      }
    if (ve = e, de = e = Yn(e.current, null), we = Qe = n, me = 0, mr = null, ci = vl = rt = 0, Ie = hr = null, et !== null) {
      for (n = 0; n < et.length; n++)
        if (t = et[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, o = t.pending;
          if (o !== null) {
            var i = o.next;
            o.next = l, r.next = i;
          }
          t.pending = r;
        }
      et = null;
    }
    return e;
  }
  function fa(e, n) {
    do {
      var t = de;
      try {
        if (jo(), il.current = cl, ul) {
          for (var r = ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ul = !1;
        }
        if (tt = 0, he = pe = ie = null, sr = !1, ar = 0, ai.current = null, t === null || t.return === null) {
          me = 1, mr = n, de = null;
          break;
        }
        e: {
          var o = e, i = t.return, u = t, s = n;
          if (n = we, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = u, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var S = Rs(i);
            if (S !== null) {
              S.flags &= -257, Fs(S, i, u, o, n), S.mode & 1 && Os(o, p, n), n = S, s = p;
              var E = n.updateQueue;
              if (E === null) {
                var C = /* @__PURE__ */ new Set();
                C.add(s), n.updateQueue = C;
              } else
                E.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Os(o, p, n), gi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (le && u.mode & 1) {
            var ce = Rs(i);
            if (ce !== null) {
              !(ce.flags & 65536) && (ce.flags |= 256), Fs(ce, i, u, o, n), zo(Lt(s, u));
              break e;
            }
          }
          o = s = Lt(s, u), me !== 4 && (me = 2), hr === null ? hr = [o] : hr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Ds(o, s, n);
                ts(o, f);
                break e;
              case 1:
                u = s;
                var c = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && ($n === null || !$n.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = Is(o, u, n);
                  ts(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        ma(t);
      } catch (N) {
        n = N, de === t && t !== null && (de = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = hl.current;
    return hl.current = cl, e === null ? cl : e;
  }
  function gi() {
    (me === 0 || me === 3 || me === 2) && (me = 4), ve === null || !(rt & 268435455) && !(vl & 268435455) || Wn(ve, we);
  }
  function _l(e, n) {
    var t = U;
    U |= 2;
    var r = da();
    (ve !== e || we !== n) && (Mn = null, ot(e, n));
    do
      try {
        Sf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if (jo(), U = t, hl.current = r, de !== null)
      throw Error(m(261));
    return ve = null, we = 0, me;
  }
  function Sf() {
    for (; de !== null; )
      pa(de);
  }
  function _f() {
    for (; de !== null && !Ya(); )
      pa(de);
  }
  function pa(e) {
    var n = ya(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, n === null ? ma(e) : de = n, ai.current = null;
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = hf(t, n), t !== null) {
          t.flags &= 32767, de = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          me = 6, de = null;
          return;
        }
      } else if (t = mf(t, n, Qe), t !== null) {
        de = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        de = n;
        return;
      }
      de = n = e;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function it(e, n, t) {
    var r = $, l = Xe.transition;
    try {
      Xe.transition = null, $ = 1, xf(e, n, t, r);
    } finally {
      Xe.transition = l, $ = r;
    }
    return null;
  }
  function xf(e, n, t, r) {
    do
      Pt();
    while (Bn !== null);
    if (U & 6)
      throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (tc(e, o), e === ve && (de = ve = null, we = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || gl || (gl = !0, ga(Nr, function() {
      return Pt(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = Xe.transition, Xe.transition = null;
      var i = $;
      $ = 1;
      var u = U;
      U |= 4, ai.current = null, yf(e, t), la(t, e), $c(go), Dr = !!yo, go = yo = null, e.current = t, gf(t), Ga(), U = u, $ = i, Xe.transition = o;
    } else
      e.current = t;
    if (gl && (gl = !1, Bn = e, wl = l), o = e.pendingLanes, o === 0 && ($n = null), Xa(t.stateNode), Oe(e, ae()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (yl)
      throw yl = !1, e = di, di = null, e;
    return wl & 1 && e.tag !== 0 && Pt(), o = e.pendingLanes, o & 1 ? e === pi ? vr++ : (vr = 0, pi = e) : vr = 0, Un(), null;
  }
  function Pt() {
    if (Bn !== null) {
      var e = nu(wl), n = Xe.transition, t = $;
      try {
        if (Xe.transition = null, $ = 16 > e ? 16 : e, Bn === null)
          var r = !1;
        else {
          if (e = Bn, Bn = null, wl = 0, U & 6)
            throw Error(m(331));
          var l = U;
          for (U |= 4, x = e.current; x !== null; ) {
            var o = x, i = o.child;
            if (x.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var p = u[s];
                  for (x = p; x !== null; ) {
                    var y = x;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null)
                      g.return = y, x = g;
                    else
                      for (; x !== null; ) {
                        y = x;
                        var h = y.sibling, S = y.return;
                        if (bs(y), y === p) {
                          x = null;
                          break;
                        }
                        if (h !== null) {
                          h.return = S, x = h;
                          break;
                        }
                        x = S;
                      }
                  }
                }
                var E = o.alternate;
                if (E !== null) {
                  var C = E.child;
                  if (C !== null) {
                    E.child = null;
                    do {
                      var ce = C.sibling;
                      C.sibling = null, C = ce;
                    } while (C !== null);
                  }
                }
                x = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null)
              i.return = o, x = i;
            else
              e:
                for (; x !== null; ) {
                  if (o = x, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(9, o, o.return);
                    }
                  var f = o.sibling;
                  if (f !== null) {
                    f.return = o.return, x = f;
                    break e;
                  }
                  x = o.return;
                }
          }
          var c = e.current;
          for (x = c; x !== null; ) {
            i = x;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null)
              d.return = i, x = d;
            else
              e:
                for (i = c; x !== null; ) {
                  if (u = x, u.flags & 2048)
                    try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ml(9, u);
                      }
                    } catch (N) {
                      se(u, u.return, N);
                    }
                  if (u === i) {
                    x = null;
                    break e;
                  }
                  var w = u.sibling;
                  if (w !== null) {
                    w.return = u.return, x = w;
                    break e;
                  }
                  x = u.return;
                }
          }
          if (U = l, Un(), dn && typeof dn.onPostCommitFiberRoot == "function")
            try {
              dn.onPostCommitFiberRoot(Mr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        $ = t, Xe.transition = n;
      }
    }
    return !1;
  }
  function ha(e, n, t) {
    n = Lt(t, n), n = Ds(e, n, 1), e = Vn(e, n, 1), n = Me(), e !== null && (Vt(e, 1, n), Oe(e, n));
  }
  function se(e, n, t) {
    if (e.tag === 3)
      ha(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($n === null || !$n.has(r))) {
            e = Lt(t, e), e = Is(n, e, 1), n = Vn(n, e, 1), e = Me(), n !== null && (Vt(n, 1, e), Oe(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ef(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Me(), e.pingedLanes |= e.suspendedLanes & t, ve === e && (we & t) === t && (me === 4 || me === 3 && (we & 130023424) === we && 500 > ae() - fi ? ot(e, 0) : ci |= t), Oe(e, n);
  }
  function va(e, n) {
    n === 0 && (e.mode & 1 ? (n = zr, zr <<= 1, !(zr & 130023424) && (zr = 4194304)) : n = 1);
    var t = Me();
    e = En(e, n), e !== null && (Vt(e, n, t), Oe(e, t));
  }
  function Cf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), va(e, t);
  }
  function Nf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), va(e, t);
  }
  var ya;
  ya = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || je.current)
        De = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return De = !1, pf(e, n, t);
        De = !!(e.flags & 131072);
      }
    else
      De = !1, le && n.flags & 1048576 && Zu(n, Jr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        dl(e, n), e = n.pendingProps;
        var l = kt(n, Se.current);
        Ct(n, t), l = Ho(null, n, r, e, l, t);
        var o = Wo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Pe(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = rl, n.stateNode = l, l._reactInternals = n, Fo(n, r, e, t), n = bo(null, n, r, !0, o, t)) : (n.tag = 0, le && o && Co(n), Ne(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (dl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Lf(r), e = ln(r, e), l) {
            case 0:
              n = qo(null, n, r, e, t);
              break e;
            case 1:
              n = Bs(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = As(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), qo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Bs(e, n, r, l, t);
      case 3:
        e: {
          if (Hs(n), e === null)
            throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, ns(e, n), tl(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
              l = Lt(Error(m(423)), n), n = Ws(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = Lt(Error(m(424)), n), n = Ws(e, n, r, t, l);
              break e;
            } else
              for (Ve = On(n.stateNode.containerInfo.firstChild), Ae = n, le = !0, rn = null, t = cs(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (xt(), r === l) {
              n = Nn(e, n, t);
              break e;
            }
            Ne(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return fs(n), e === null && Lo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, wo(r, l) ? i = null : o !== null && wo(r, o) && (n.flags |= 32), $s(e, n), Ne(e, n, i, t), n.child;
      case 6:
        return e === null && Lo(n), null;
      case 13:
        return Ys(e, n, t);
      case 4:
        return Uo(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Nt(n, null, r, t) : Ne(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Us(e, n, r, l, t);
      case 7:
        return Ne(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, q(br, r._currentValue), r._currentValue = i, o !== null)
            if (tn(o.value, i)) {
              if (o.children === l.children && !je.current) {
                n = Nn(e, n, t);
                break e;
              }
            } else
              for (o = n.child, o !== null && (o.return = n); o !== null; ) {
                var u = o.dependencies;
                if (u !== null) {
                  i = o.child;
                  for (var s = u.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        s = Cn(-1, t & -t), s.tag = 2;
                        var p = o.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                        }
                      }
                      o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Do(
                        o.return,
                        t,
                        n
                      ), u.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10)
                  i = o.type === n.type ? null : o.child;
                else if (o.tag === 18) {
                  if (i = o.return, i === null)
                    throw Error(m(341));
                  i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), Do(i, t, n), i = o.sibling;
                } else
                  i = o.child;
                if (i !== null)
                  i.return = o;
                else
                  for (i = o; i !== null; ) {
                    if (i === n) {
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
          Ne(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Ct(n, t), l = Ke(l), r = r(l), n.flags |= 1, Ne(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = ln(r, n.pendingProps), l = ln(r.type, l), As(e, n, r, l, t);
      case 15:
        return Vs(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), dl(e, n), n.tag = 1, Pe(r) ? (e = !0, Kr(n)) : e = !1, Ct(n, t), is(n, r, l), Fo(n, r, l, t), bo(null, n, r, !0, e, t);
      case 19:
        return Ks(e, n, t);
      case 22:
        return Qs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Xi(e, n);
  }
  function Mf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, n, t, r) {
    return new Mf(e, n, t, r);
  }
  function wi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Lf(e) {
    if (typeof e == "function")
      return wi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === cn)
        return 11;
      if (e === fn)
        return 14;
    }
    return 2;
  }
  function Yn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function xl(e, n, t, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function")
      wi(e) && (i = 1);
    else if (typeof e == "string")
      i = 5;
    else
      e:
        switch (e) {
          case Le:
            return ut(t.children, l, o, n);
          case We:
            i = 8, l |= 8;
            break;
          case Ln:
            return e = Je(12, t, n, l | 2), e.elementType = Ln, e.lanes = o, e;
          case Fe:
            return e = Je(13, t, n, l), e.elementType = Fe, e.lanes = o, e;
          case en:
            return e = Je(19, t, n, l), e.elementType = en, e.lanes = o, e;
          case ue:
            return El(t, l, o, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case wn:
                  i = 10;
                  break e;
                case Kn:
                  i = 9;
                  break e;
                case cn:
                  i = 11;
                  break e;
                case fn:
                  i = 14;
                  break e;
                case ze:
                  i = 16, r = null;
                  break e;
              }
            throw Error(m(130, e == null ? e : typeof e, ""));
        }
    return n = Je(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function ut(e, n, t, r) {
    return e = Je(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = Je(22, e, r, n), e.elementType = ue, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function ki(e, n, t) {
    return e = Je(6, e, null, n), e.lanes = t, e;
  }
  function Si(e, n, t) {
    return n = Je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function zf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function _i(e, n, t, r, l, o, i, u, s) {
    return e = new zf(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Je(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function Tf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function wa(e) {
    if (!e)
      return Fn;
    e = e._reactInternals;
    e: {
      if (Zn(e) !== e || e.tag !== 1)
        throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Pe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Pe(t))
        return Yu(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, o, i, u, s) {
    return e = _i(t, r, !0, e, l, o, i, u, s), e.context = wa(null), t = e.current, r = Me(), l = Hn(t), o = Cn(r, l), o.callback = n ?? null, Vn(t, o, l), e.current.lanes = l, Vt(e, l, r), Oe(e, r), e;
  }
  function Cl(e, n, t, r) {
    var l = n.current, o = Me(), i = Hn(l);
    return t = wa(t), n.context === null ? n.context = t : n.pendingContext = t, n = Cn(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Vn(l, n, i), e !== null && (sn(e, l, i, o), nl(e, l, i)), i;
  }
  function Nl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Sa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function xi(e, n) {
    Sa(e, n), (e = e.alternate) && Sa(e, n);
  }
  function jf() {
    return null;
  }
  var _a = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ml.prototype.render = Ei.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(m(409));
    Cl(e, n, null, null);
  }, Ml.prototype.unmount = Ei.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      lt(function() {
        Cl(null, e, null, null);
      }), n[kn] = null;
    }
  };
  function Ml(e) {
    this._internalRoot = e;
  }
  Ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = lu();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Pn.length && n !== 0 && n < Pn[t].priority; t++)
        ;
      Pn.splice(t, 0, e), t === 0 && uu(e);
    }
  };
  function Ci(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ll(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function xa() {
  }
  function Pf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Nl(i);
          o.call(p);
        };
      }
      var i = ka(n, r, e, 0, null, !1, !1, "", xa);
      return e._reactRootContainer = i, e[kn] = i.current, er(e.nodeType === 8 ? e.parentNode : e), lt(), i;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var p = Nl(s);
        u.call(p);
      };
    }
    var s = _i(e, 0, !1, null, null, !1, !1, "", xa);
    return e._reactRootContainer = s, e[kn] = s.current, er(e.nodeType === 8 ? e.parentNode : e), lt(function() {
      Cl(n, s, t, r);
    }), s;
  }
  function zl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var s = Nl(i);
          u.call(s);
        };
      }
      Cl(n, i, e, l);
    } else
      i = Pf(t, n, e, l, r);
    return Nl(i);
  }
  tu = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 && (Kl(n, t | 1), Oe(n, ae()), !(U & 6) && (jt = ae() + 500, Un()));
        }
        break;
      case 13:
        lt(function() {
          var r = En(e, 1);
          if (r !== null) {
            var l = Me();
            sn(r, e, 1, l);
          }
        }), xi(e, 1);
    }
  }, Zl = function(e) {
    if (e.tag === 13) {
      var n = En(e, 134217728);
      if (n !== null) {
        var t = Me();
        sn(n, e, 134217728, t);
      }
      xi(e, 134217728);
    }
  }, ru = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = En(e, n);
      if (t !== null) {
        var r = Me();
        sn(t, e, n, r);
      }
      xi(e, n);
    }
  }, lu = function() {
    return $;
  }, ou = function(e, n) {
    var t = $;
    try {
      return $ = e, n();
    } finally {
      $ = t;
    }
  }, Ql = function(e, n, t) {
    switch (n) {
      case "input":
        if (Dl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Yr(r);
              if (!l)
                throw Error(m(90));
              zi(r), Dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ii(e, t);
        break;
      case "select":
        n = t.value, n != null && st(e, !!t.multiple, n, !1);
    }
  }, Bi = vi, Hi = lt;
  var Df = { usingClientEntryPoint: !1, Events: [rr, gt, Yr, Qi, $i, vi] }, yr = { findFiberByHostInstance: Xn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, If = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ke.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ki(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || jf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        Mr = Tl.inject(If), dn = Tl;
      } catch {
      }
  }
  return Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df, Re.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ci(n))
      throw Error(m(200));
    return Tf(e, n, null, t);
  }, Re.createRoot = function(e, n) {
    if (!Ci(e))
      throw Error(m(299));
    var t = !1, r = "", l = _a;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = _i(e, 1, !1, null, null, t, !1, r, l), e[kn] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new Ei(n);
  }, Re.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Ki(n), e = e === null ? null : e.stateNode, e;
  }, Re.flushSync = function(e) {
    return lt(e);
  }, Re.hydrate = function(e, n, t) {
    if (!Ll(n))
      throw Error(m(200));
    return zl(null, e, n, !0, t);
  }, Re.hydrateRoot = function(e, n, t) {
    if (!Ci(e))
      throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", i = _a;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ka(n, null, e, 1, t ?? null, l, !1, o, i), e[kn] = n.current, er(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new Ml(n);
  }, Re.render = function(e, n, t) {
    if (!Ll(n))
      throw Error(m(200));
    return zl(null, e, n, !1, t);
  }, Re.unmountComponentAtNode = function(e) {
    if (!Ll(e))
      throw Error(m(40));
    return e._reactRootContainer ? (lt(function() {
      zl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[kn] = null;
      });
    }), !0) : !1;
  }, Re.unstable_batchedUpdates = vi, Re.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Ll(t))
      throw Error(m(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(m(38));
    return zl(e, n, t, !1, r);
  }, Re.version = "18.2.0-next-9e3b772b8-20220608", Re;
}
function Oa() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oa);
    } catch (_) {
      console.error(_);
    }
}
Oa(), Ia.exports = $f();
var Bf = Ia.exports, Ra, za = Bf;
Ra = za.createRoot, za.hydrateRoot;
const Ta = "data:image/svg+xml,%3csvg%20class='b24-crm-button-icon%20b24-crm-button-icon-active'%20width='28'%20height='29'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20class='b24-crm-button-chat-icon'%20d='M25.99%207.744a2%202%200%20012%202v11.49a2%202%200%2001-2%202h-1.044v5.162l-4.752-5.163h-7.503a2%202%200%2001-2-2v-1.872h10.073a3%203%200%20003-3V7.744zM19.381%200a2%202%200%20012%202v12.78a2%202%200%2001-2%202h-8.69l-5.94%206.453V16.78H2a2%202%200%2001-2-2V2a2%202%200%20012-2h17.382z'%20fill='%20%23555555'%20fill-rule='evenodd'%3e%3c/path%3e%3c/svg%3e", Hf = "data:image/svg+xml,%3csvg%20class='b24-widget-button-icon%20b24-widget-button-close-item'%20xmlns='http://www.w3.org/2000/svg'%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M18.866%2014.45l9.58-9.582L24.03.448l-9.587%209.58L4.873.447.455%204.866l9.575%209.587-9.583%209.57%204.418%204.42%209.58-9.577%209.58%209.58%204.42-4.42'%3e%3c/path%3e%3c/svg%3e", Wf = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2048C37.2548%2048%2048%2037.2548%2048%2024C48%2010.7452%2037.2548%200%2024%200C10.7452%200%200%2010.7452%200%2024C0%2037.2548%2010.7452%2048%2024%2048Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M8.93822%2025.174C11.7438%2023.6286%2014.8756%2022.3388%2017.8018%2021.0424C22.836%2018.919%2027.8902%2016.8324%2032.9954%2014.8898C33.9887%2014.5588%2035.7734%2014.2351%2035.9484%2015.7071C35.8526%2017.7907%2035.4584%2019.8621%2035.188%2021.9335C34.5017%2026.4887%2033.7085%2031.0283%2032.935%2035.5685C32.6685%2037.0808%2030.774%2037.8637%2029.5618%2036.8959C26.6486%2034.9281%2023.713%2032.9795%2020.837%2030.9661C19.8949%2030.0088%2020.7685%2028.6341%2021.6099%2027.9505C24.0093%2025.5859%2026.5539%2023.5769%2028.8279%2021.0901C29.4413%2019.6088%2027.6289%2020.8572%2027.0311%2021.2397C23.7463%2023.5033%2020.5419%2025.9051%2017.0787%2027.8945C15.3097%2028.8683%2013.2479%2028.0361%2011.4797%2027.4927C9.89428%2026.8363%207.57106%2026.175%208.93806%2025.1741L8.93822%2025.174Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='18.0028'%20y1='2.0016'%20x2='6.0028'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337AEE2'/%3e%3cstop%20offset='1'%20stop-color='%231E96C8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Yf = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGlkPSJTb2NpYWxfSWNvbnMiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM2X19zdHJva2UiPjxnIGlkPSJXaGF0c0FwcCI+PHJlY3QgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMTE0LDMyLjUwOSAgICBjLTEuMjQxLTIuOTcyLTIuMTgyLTMuMDg1LTQuMDYyLTMuMTYxYy0wLjY0LTAuMDM3LTEuMzUzLTAuMDc0LTIuMTQ0LTAuMDc0Yy0yLjQ0NiwwLTUuMDAzLDAuNzE1LTYuNTQ2LDIuMjk1ICAgIGMtMS44OCwxLjkxOS02LjU0NSw2LjM5Ni02LjU0NSwxNS41NzZjMCw5LjE4MSw2LjY5NSwxOC4wNiw3LjU5OCwxOS4zMDNjMC45NDEsMS4yNCwxMy4wNTMsMjAuMzU0LDMxLjg2LDI4LjE0NCAgICBjMTQuNzA3LDYuMDk1LDE5LjA3MSw1LjUzLDIyLjQxOCw0LjgxNmM0Ljg5LTEuMDUzLDExLjAyMS00LjY2NywxMi41NjQtOS4wM2MxLjU0Mi00LjM2NSwxLjU0Mi04LjA5LDEuMDktOC44OCAgICBjLTAuNDUxLTAuNzktMS42OTMtMS4yNC0zLjU3My0yLjE4MmMtMS44OC0wLjk0MS0xMS4wMjEtNS40NTYtMTIuNzUxLTYuMDU4Yy0xLjY5My0wLjYzOS0zLjMxLTAuNDEzLTQuNTg4LDEuMzkzICAgIGMtMS44MDYsMi41MjEtMy41NzMsNS4wOC01LjAwMyw2LjYyMmMtMS4xMjgsMS4yMDQtMi45NzIsMS4zNTUtNC41MTQsMC43MTVjLTIuMDY5LTAuODY0LTcuODYxLTIuODk4LTE1LjAwOC05LjI1NiAgICBjLTUuNTMtNC45MjgtOS4yOTEtMTEuMDYtMTAuMzgxLTEyLjkwNGMtMS4wOTEtMS44ODEtMC4xMTMtMi45NzMsMC43NTItMy45ODhjMC45NDEtMS4xNjcsMS44NDMtMS45OTQsMi43ODMtMy4wODYgICAgYzAuOTQxLTEuMDkxLDEuNDY3LTEuNjU1LDIuMDY5LTIuOTM1YzAuNjQtMS4yNDEsMC4xODgtMi41MjEtMC4yNjMtMy40NjJDNTEuNDE4LDQ1LjQxNCw0Ny42NTcsMzYuMjMzLDQ2LjExNCwzMi41MDl6IE02My45ODEsMCAgICBDMjguNjk5LDAsMCwyOC43MDcsMCw2My45OTljMCwxMy45OTYsNC41MTQsMjYuOTc3LDEyLjE4NywzNy41MTJMNC4yMTIsMTI1LjI5bDI0LjYtNy44NjJDMzguOTMsMTI0LjEyNSw1MS4wMDQsMTI4LDY0LjAxOSwxMjggICAgQzk5LjMwMSwxMjgsMTI4LDk5LjI5MSwxMjgsNjQuMDAxYzAtMzUuMjkyLTI4LjY5OS02My45OTktNjMuOTgxLTYzLjk5OWgtMC4wMzdWMHoiIGZpbGw9IiM2N0MxNUUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IldoYXRzQXBwXzFfIi8+PC9nPjwvZz48L3N2Zz4=", Gf = "_button_160ls_1", Kf = "_storybook_160ls_27", Zf = {
  button: Gf,
  storybook: Kf
}, wr = ({ children: _, className: P, ...m }) => /* @__PURE__ */ D.jsx(
  "button",
  {
    type: "button",
    className: `${Zf.button} ${P}`,
    ...m,
    children: _
  }
), Xf = "_wrapper_q7fyp_1", ja = {
  wrapper: Xf
}, Jf = ({
  children: _,
  isOpened: P,
  items: m
}) => /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  P && /* @__PURE__ */ D.jsx("div", { className: ja.wrapper, children: m }),
  /* @__PURE__ */ D.jsx("div", { className: ja.container, children: _ })
] }), qf = "_storybook_ab2qb_1", bf = "_container_ab2qb_6", ed = "_icon_ab2qb_20", nd = "_iconCross_ab2qb_26", td = "_link_ab2qb_34", rd = "_button_ab2qb_41", ld = "_pulse_ab2qb_1", od = "_chat_ab2qb_60", id = "_message_ab2qb_64", ud = "_cross_ab2qb_69", yn = {
  storybook: qf,
  container: bf,
  icon: ed,
  iconCross: nd,
  link: td,
  button: rd,
  pulse: ld,
  chat: od,
  message: id,
  cross: ud
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ad = (_) => _.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = (_, P) => {
  const m = $e.forwardRef(
    ({
      color: H = "currentColor",
      size: Z = 24,
      strokeWidth: te = 2,
      absoluteStrokeWidth: W,
      className: b = "",
      children: R,
      ...X
    }, fe) => $e.createElement(
      "svg",
      {
        ref: fe,
        ...sd,
        width: Z,
        height: Z,
        stroke: H,
        strokeWidth: W ? Number(te) * 24 / Number(Z) : te,
        className: ["lucide", `lucide-${ad(_)}`, b].join(" "),
        ...X
      },
      [
        ...P.map(([Y, B]) => $e.createElement(Y, B)),
        ...Array.isArray(R) ? R : [R]
      ]
    )
  );
  return m.displayName = `${_}`, m;
};
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = Fa("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = Fa("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), dd = "_message_1fjk4_1", pd = "_message__block_1fjk4_14", md = "_message__text_1fjk4_21", hd = "_message__me_1fjk4_26", vd = "_message__vink_1fjk4_32", yd = "_message__time_1fjk4_38", kr = {
  message: dd,
  message__block: pd,
  message__text: md,
  message__me: hd,
  message__vink: vd,
  message__time: yd
}, gd = ({ user: _, message: P, time: m }) => /* @__PURE__ */ D.jsxs("li", { className: `${kr.message} ${kr[`message__${_}`]}`, children: [
  _ === "vink" && /* @__PURE__ */ D.jsx("h3", { children: "Сотрудник" }),
  /* @__PURE__ */ D.jsxs("div", { className: kr.message__block, children: [
    /* @__PURE__ */ D.jsx("p", { className: kr.message__text, children: P }),
    /* @__PURE__ */ D.jsx("p", { className: kr.message__time, children: m })
  ] })
] }), wd = "_block_yf7bg_1", kd = "_block__element_yf7bg_13", Sd = "_block__text_yf7bg_24", _d = "_block__i_yf7bg_28", xd = "_block__you_yf7bg_34", Ed = "_block__message_yf7bg_40", Cd = "_block__time_yf7bg_51", Nd = {
  block: wd,
  block__element: kd,
  block__text: Sd,
  block__i: _d,
  block__you: xd,
  block__message: Ed,
  block__time: Cd
}, Md = ({ messages: _ }) => {
  const P = $e.useRef(null), m = () => {
    P.current && P.current.scrollIntoView({ behavior: "smooth" });
  };
  return $e.useEffect(() => {
    m();
  }, [_]), /* @__PURE__ */ D.jsxs("ul", { className: Nd.block, children: [
    _.map((H) => /* @__PURE__ */ D.jsx(gd, { time: H.time, user: H.user, message: H.text }, H.id)),
    /* @__PURE__ */ D.jsx("div", { ref: P })
  ] });
}, Ld = "_storybook_180sr_1", zd = "_chat_180sr_6", Td = "_chat__header_180sr_21", jd = "_open_180sr_36", Pd = "_icon_180sr_43", jl = {
  storybook: Ld,
  chat: zd,
  chat__header: Td,
  open: jd,
  icon: Pd
}, Dd = "_form_1v5mx_1", Id = "_form__input_1v5mx_16", Od = "_icon_1v5mx_34", Li = {
  form: Dd,
  form__input: Id,
  icon: Od
}, Rd = ({
  setCurrentMessage: _,
  currentMessage: P,
  handleSubmit: m,
  handleMessageSubmit: H
}) => {
  function Z(W) {
    _(W.target.value);
  }
  function te(W) {
    W.key === "Enter" && !W.shiftKey && P.trim() !== "" && (W.preventDefault(), m());
  }
  return /* @__PURE__ */ D.jsx("div", { className: Li.form, children: /* @__PURE__ */ D.jsxs("form", { onSubmit: H, children: [
    /* @__PURE__ */ D.jsx(
      "textarea",
      {
        minLength: 2,
        maxLength: 100,
        value: P,
        onChange: Z,
        className: Li.form__input,
        placeholder: "Введите сообщение",
        onKeyDown: te
      }
    ),
    /* @__PURE__ */ D.jsx("button", { disabled: P.trim() === "", type: "submit", children: /* @__PURE__ */ D.jsx(
      cd,
      {
        className: P.trim() !== "" ? Li.icon : "",
        size: 24,
        color: P.trim() !== "" ? "#37383a" : "#e5e5e5"
      }
    ) })
  ] }) });
}, Fd = [
  {
    id: 1,
    text: "Готовы помочь!",
    user: "vink",
    time: "12:00"
  },
  {
    id: 2,
    text: "Мне нужна помощь!",
    user: "me",
    time: "13:00"
  },
  {
    id: 11,
    text: "Опишите вашу проблему.",
    user: "vink",
    time: "12:00"
  },
  {
    id: 21,
    text: "Моя проблемма...",
    user: "me",
    time: "13:00"
  }
], Ud = ({ isOpen: _, setIsOpen: P }) => {
  const [m, H] = $e.useState(Fd), [Z, te] = $e.useState("");
  function W(X) {
    return X < 10 ? "0" + X : X.toString();
  }
  function b() {
    const X = /* @__PURE__ */ new Date(), fe = W(X.getHours()), Y = W(X.getMinutes()), B = {
      id: m.length + 1,
      text: Z,
      user: "me",
      time: fe + ":" + Y
    };
    H([...m, B]), te("");
  }
  const R = (X) => {
    X.preventDefault(), b();
  };
  return /* @__PURE__ */ D.jsxs("div", { className: `${jl.chat} ${_ ? jl.open : ""}`, children: [
    /* @__PURE__ */ D.jsxs("div", { className: jl.chat__header, children: [
      /* @__PURE__ */ D.jsx("h3", { children: "Чат с поддержкой:" }),
      /* @__PURE__ */ D.jsx(
        fd,
        {
          className: jl.icon,
          onClick: () => P(!1),
          size: 24,
          color: "#37383a"
        }
      )
    ] }),
    /* @__PURE__ */ D.jsx(Md, { messages: m }),
    /* @__PURE__ */ D.jsx(
      Rd,
      {
        setCurrentMessage: te,
        currentMessage: Z,
        handleSubmit: b,
        handleMessageSubmit: R
      }
    )
  ] });
}, Ad = ({
  className: _,
  styles: P
}) => {
  const [m, H] = $e.useState(!1), [Z, te] = $e.useState(!1), W = $e.useMemo(
    () => [
      /* @__PURE__ */ D.jsx(
        "a",
        {
          href: "https://web.telegram.org/a/#7042323177",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ D.jsx(wr, { className: yn.link, children: /* @__PURE__ */ D.jsx("img", { src: Wf, alt: "message", className: yn.icon }) })
        },
        0
      ),
      /* @__PURE__ */ D.jsx(
        "a",
        {
          href: "https://www.whatsapp.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ D.jsx(wr, { className: yn.link, children: /* @__PURE__ */ D.jsx("img", { src: Yf, alt: "message", className: yn.icon }) })
        },
        1
      ),
      /* @__PURE__ */ D.jsx("a", { href: "#", rel: "noopener noreferrer", children: /* @__PURE__ */ D.jsx(
        wr,
        {
          onClick: b,
          className: yn.chat,
          children: /* @__PURE__ */ D.jsx("img", { src: Ta, alt: "message" })
        }
      ) }, 2)
    ],
    []
  );
  function b() {
    te(!0), H(!1);
  }
  function R() {
    H(m !== !0);
  }
  return /* @__PURE__ */ D.jsx("div", { children: Z && /* @__PURE__ */ D.jsx(Ud, { isOpen: Z, setIsOpen: te }) || /* @__PURE__ */ D.jsx("div", { className: `${yn.container} ${_}`, style: P, children: /* @__PURE__ */ D.jsx(Jf, { items: W, isOpened: m, children: m && /* @__PURE__ */ D.jsx(wr, { className: yn.cross, onClick: R, children: /* @__PURE__ */ D.jsx("img", { src: Hf, alt: "message", className: yn.iconCross }) }) || /* @__PURE__ */ D.jsx(wr, { className: yn.button, onClick: R, children: /* @__PURE__ */ D.jsx("img", { src: Ta, alt: "cross", className: yn.message }) }) }) }) });
};
function Vd({
  element: _,
  className: P,
  styles: m
}) {
  Ra(document.getElementById(_)).render(Uf.createElement(Ad, { className: P, styles: m }));
}
export {
  Ad as ChatWidget,
  Vd as ChatWidgetConstructor
};
