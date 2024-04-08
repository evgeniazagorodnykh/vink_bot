function jf(N) {
  return N && N.__esModule && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
}
var za = { exports: {} }, yr = {}, Ta = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Df() {
  if (ka)
    return D;
  ka = 1;
  var N = Symbol.for("react.element"), A = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), he = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), Ce = Symbol.for("react.provider"), pe = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), xe = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), J = Symbol.iterator;
  function K(a) {
    return a === null || typeof a != "object" ? null : (a = J && a[J] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var Be = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, He = Object.assign, Z = {};
  function B(a, h, M) {
    this.props = a, this.context = h, this.refs = Z, this.updater = M || Be;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(a, h) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, h, "setState");
  }, B.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function yn() {
  }
  yn.prototype = B.prototype;
  function sn(a, h, M) {
    this.props = a, this.context = h, this.refs = Z, this.updater = M || Be;
  }
  var Je = sn.prototype = new yn();
  Je.constructor = sn, He(Je, B.prototype), Je.isPureReactComponent = !0;
  var ge = Array.isArray, qe = Object.prototype.hasOwnProperty, _e = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(a, h, M) {
    var I, j = {}, W = null, F = null;
    if (h != null)
      for (I in h.ref !== void 0 && (F = h.ref), h.key !== void 0 && (W = "" + h.key), h)
        qe.call(h, I) && !Le.hasOwnProperty(I) && (j[I] = h[I]);
    var H = arguments.length - 2;
    if (H === 1)
      j.children = M;
    else if (1 < H) {
      for (var U = Array(H), Te = 0; Te < H; Te++)
        U[Te] = arguments[Te + 2];
      j.children = U;
    }
    if (a && a.defaultProps)
      for (I in H = a.defaultProps, H)
        j[I] === void 0 && (j[I] = H[I]);
    return { $$typeof: N, type: a, key: W, ref: F, props: j, _owner: _e.current };
  }
  function Nn(a, h) {
    return { $$typeof: N, type: a.type, key: h, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function gn(a) {
    return typeof a == "object" && a !== null && a.$$typeof === N;
  }
  function Gn(a) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(M) {
      return h[M];
    });
  }
  var an = /\/+/g;
  function Fe(a, h) {
    return typeof a == "object" && a !== null && a.key != null ? Gn("" + a.key) : h.toString(36);
  }
  function be(a, h, M, I, j) {
    var W = typeof a;
    (W === "undefined" || W === "boolean") && (a = null);
    var F = !1;
    if (a === null)
      F = !0;
    else
      switch (W) {
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case N:
            case A:
              F = !0;
          }
      }
    if (F)
      return F = a, j = j(F), a = I === "" ? "." + Fe(F, 0) : I, ge(j) ? (M = "", a != null && (M = a.replace(an, "$&/") + "/"), be(j, h, M, "", function(Te) {
        return Te;
      })) : j != null && (gn(j) && (j = Nn(j, M + (!j.key || F && F.key === j.key ? "" : ("" + j.key).replace(an, "$&/") + "/") + a)), h.push(j)), 1;
    if (F = 0, I = I === "" ? "." : I + ":", ge(a))
      for (var H = 0; H < a.length; H++) {
        W = a[H];
        var U = I + Fe(W, H);
        F += be(W, h, M, U, j);
      }
    else if (U = K(a), typeof U == "function")
      for (a = U.call(a), H = 0; !(W = a.next()).done; )
        W = W.value, U = I + Fe(W, H++), F += be(W, h, M, U, j);
    else if (W === "object")
      throw h = String(a), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return F;
  }
  function cn(a, h, M) {
    if (a == null)
      return a;
    var I = [], j = 0;
    return be(a, I, "", "", function(W) {
      return h.call(M, W, j++);
    }), I;
  }
  function ze(a) {
    if (a._status === -1) {
      var h = a._result;
      h = h(), h.then(function(M) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = M);
      }, function(M) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = M);
      }), a._status === -1 && (a._status = 0, a._result = h);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var ee = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: ee, ReactCurrentBatchConfig: S, ReactCurrentOwner: _e };
  return D.Children = { map: cn, forEach: function(a, h, M) {
    cn(a, function() {
      h.apply(this, arguments);
    }, M);
  }, count: function(a) {
    var h = 0;
    return cn(a, function() {
      h++;
    }), h;
  }, toArray: function(a) {
    return cn(a, function(h) {
      return h;
    }) || [];
  }, only: function(a) {
    if (!gn(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, D.Component = B, D.Fragment = m, D.Profiler = de, D.PureComponent = sn, D.StrictMode = he, D.Suspense = Q, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, D.cloneElement = function(a, h, M) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var I = He({}, a.props), j = a.key, W = a.ref, F = a._owner;
    if (h != null) {
      if (h.ref !== void 0 && (W = h.ref, F = _e.current), h.key !== void 0 && (j = "" + h.key), a.type && a.type.defaultProps)
        var H = a.type.defaultProps;
      for (U in h)
        qe.call(h, U) && !Le.hasOwnProperty(U) && (I[U] = h[U] === void 0 && H !== void 0 ? H[U] : h[U]);
    }
    var U = arguments.length - 2;
    if (U === 1)
      I.children = M;
    else if (1 < U) {
      H = Array(U);
      for (var Te = 0; Te < U; Te++)
        H[Te] = arguments[Te + 2];
      I.children = H;
    }
    return { $$typeof: N, type: a.type, key: j, ref: W, props: I, _owner: F };
  }, D.createContext = function(a) {
    return a = { $$typeof: pe, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: Ce, _context: a }, a.Consumer = a;
  }, D.createElement = We, D.createFactory = function(a) {
    var h = We.bind(null, a);
    return h.type = a, h;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(a) {
    return { $$typeof: se, render: a };
  }, D.isValidElement = gn, D.lazy = function(a) {
    return { $$typeof: ye, _payload: { _status: -1, _result: a }, _init: ze };
  }, D.memo = function(a, h) {
    return { $$typeof: xe, type: a, compare: h === void 0 ? null : h };
  }, D.startTransition = function(a) {
    var h = S.transition;
    S.transition = {};
    try {
      a();
    } finally {
      S.transition = h;
    }
  }, D.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, D.useCallback = function(a, h) {
    return ee.current.useCallback(a, h);
  }, D.useContext = function(a) {
    return ee.current.useContext(a);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(a) {
    return ee.current.useDeferredValue(a);
  }, D.useEffect = function(a, h) {
    return ee.current.useEffect(a, h);
  }, D.useId = function() {
    return ee.current.useId();
  }, D.useImperativeHandle = function(a, h, M) {
    return ee.current.useImperativeHandle(a, h, M);
  }, D.useInsertionEffect = function(a, h) {
    return ee.current.useInsertionEffect(a, h);
  }, D.useLayoutEffect = function(a, h) {
    return ee.current.useLayoutEffect(a, h);
  }, D.useMemo = function(a, h) {
    return ee.current.useMemo(a, h);
  }, D.useReducer = function(a, h, M) {
    return ee.current.useReducer(a, h, M);
  }, D.useRef = function(a) {
    return ee.current.useRef(a);
  }, D.useState = function(a) {
    return ee.current.useState(a);
  }, D.useSyncExternalStore = function(a, h, M) {
    return ee.current.useSyncExternalStore(a, h, M);
  }, D.useTransition = function() {
    return ee.current.useTransition();
  }, D.version = "18.2.0", D;
}
Ta.exports = Df();
var wr = Ta.exports;
const If = /* @__PURE__ */ jf(wr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Of() {
  if (Ea)
    return yr;
  Ea = 1;
  var N = wr, A = Symbol.for("react.element"), m = Symbol.for("react.fragment"), he = Object.prototype.hasOwnProperty, de = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(se, Q, xe) {
    var ye, J = {}, K = null, Be = null;
    xe !== void 0 && (K = "" + xe), Q.key !== void 0 && (K = "" + Q.key), Q.ref !== void 0 && (Be = Q.ref);
    for (ye in Q)
      he.call(Q, ye) && !Ce.hasOwnProperty(ye) && (J[ye] = Q[ye]);
    if (se && se.defaultProps)
      for (ye in Q = se.defaultProps, Q)
        J[ye] === void 0 && (J[ye] = Q[ye]);
    return { $$typeof: A, type: se, key: K, ref: Be, props: J, _owner: de.current };
  }
  return yr.Fragment = m, yr.jsx = pe, yr.jsxs = pe, yr;
}
za.exports = Of();
var ue = za.exports, Pa = { exports: {} }, Re = {}, xo = { exports: {} }, _o = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function Rf() {
  return Ca || (Ca = 1, function(N) {
    function A(S, T) {
      var a = S.length;
      S.push(T);
      e:
        for (; 0 < a; ) {
          var h = a - 1 >>> 1, M = S[h];
          if (0 < de(M, T))
            S[h] = T, S[a] = M, a = h;
          else
            break e;
        }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function he(S) {
      if (S.length === 0)
        return null;
      var T = S[0], a = S.pop();
      if (a !== T) {
        S[0] = a;
        e:
          for (var h = 0, M = S.length, I = M >>> 1; h < I; ) {
            var j = 2 * (h + 1) - 1, W = S[j], F = j + 1, H = S[F];
            if (0 > de(W, a))
              F < M && 0 > de(H, W) ? (S[h] = H, S[F] = a, h = F) : (S[h] = W, S[j] = a, h = j);
            else if (F < M && 0 > de(H, a))
              S[h] = H, S[F] = a, h = F;
            else
              break e;
          }
      }
      return T;
    }
    function de(S, T) {
      var a = S.sortIndex - T.sortIndex;
      return a !== 0 ? a : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ce = performance;
      N.unstable_now = function() {
        return Ce.now();
      };
    } else {
      var pe = Date, se = pe.now();
      N.unstable_now = function() {
        return pe.now() - se;
      };
    }
    var Q = [], xe = [], ye = 1, J = null, K = 3, Be = !1, He = !1, Z = !1, B = typeof setTimeout == "function" ? setTimeout : null, yn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(S) {
      for (var T = m(xe); T !== null; ) {
        if (T.callback === null)
          he(xe);
        else if (T.startTime <= S)
          he(xe), T.sortIndex = T.expirationTime, A(Q, T);
        else
          break;
        T = m(xe);
      }
    }
    function ge(S) {
      if (Z = !1, Je(S), !He)
        if (m(Q) !== null)
          He = !0, ze(qe);
        else {
          var T = m(xe);
          T !== null && ee(ge, T.startTime - S);
        }
    }
    function qe(S, T) {
      He = !1, Z && (Z = !1, yn(We), We = -1), Be = !0;
      var a = K;
      try {
        for (Je(T), J = m(Q); J !== null && (!(J.expirationTime > T) || S && !Gn()); ) {
          var h = J.callback;
          if (typeof h == "function") {
            J.callback = null, K = J.priorityLevel;
            var M = h(J.expirationTime <= T);
            T = N.unstable_now(), typeof M == "function" ? J.callback = M : J === m(Q) && he(Q), Je(T);
          } else
            he(Q);
          J = m(Q);
        }
        if (J !== null)
          var I = !0;
        else {
          var j = m(xe);
          j !== null && ee(ge, j.startTime - T), I = !1;
        }
        return I;
      } finally {
        J = null, K = a, Be = !1;
      }
    }
    var _e = !1, Le = null, We = -1, Nn = 5, gn = -1;
    function Gn() {
      return !(N.unstable_now() - gn < Nn);
    }
    function an() {
      if (Le !== null) {
        var S = N.unstable_now();
        gn = S;
        var T = !0;
        try {
          T = Le(!0, S);
        } finally {
          T ? Fe() : (_e = !1, Le = null);
        }
      } else
        _e = !1;
    }
    var Fe;
    if (typeof sn == "function")
      Fe = function() {
        sn(an);
      };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Fe = function() {
        cn.postMessage(null);
      };
    } else
      Fe = function() {
        B(an, 0);
      };
    function ze(S) {
      Le = S, _e || (_e = !0, Fe());
    }
    function ee(S, T) {
      We = B(function() {
        S(N.unstable_now());
      }, T);
    }
    N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, N.unstable_continueExecution = function() {
      He || Be || (He = !0, ze(qe));
    }, N.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Nn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, N.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, N.unstable_getFirstCallbackNode = function() {
      return m(Q);
    }, N.unstable_next = function(S) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = K;
      }
      var a = K;
      K = T;
      try {
        return S();
      } finally {
        K = a;
      }
    }, N.unstable_pauseExecution = function() {
    }, N.unstable_requestPaint = function() {
    }, N.unstable_runWithPriority = function(S, T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var a = K;
      K = S;
      try {
        return T();
      } finally {
        K = a;
      }
    }, N.unstable_scheduleCallback = function(S, T, a) {
      var h = N.unstable_now();
      switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? h + a : h) : a = h, S) {
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
      return M = a + M, S = { id: ye++, callback: T, priorityLevel: S, startTime: a, expirationTime: M, sortIndex: -1 }, a > h ? (S.sortIndex = a, A(xe, S), m(Q) === null && S === m(xe) && (Z ? (yn(We), We = -1) : Z = !0, ee(ge, a - h))) : (S.sortIndex = M, A(Q, S), He || Be || (He = !0, ze(qe))), S;
    }, N.unstable_shouldYield = Gn, N.unstable_wrapCallback = function(S) {
      var T = K;
      return function() {
        var a = K;
        K = T;
        try {
          return S.apply(this, arguments);
        } finally {
          K = a;
        }
      };
    };
  }(_o)), _o;
}
var xa;
function Ff() {
  return xa || (xa = 1, xo.exports = Rf()), xo.exports;
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
var _a;
function Uf() {
  if (_a)
    return Re;
  _a = 1;
  var N = wr, A = Ff();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var he = /* @__PURE__ */ new Set(), de = {};
  function Ce(e, n) {
    pe(e, n), pe(e + "Capture", n);
  }
  function pe(e, n) {
    for (de[e] = n, e = 0; e < n.length; e++)
      he.add(n[e]);
  }
  var se = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Q = Object.prototype.hasOwnProperty, xe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ye = {}, J = {};
  function K(e) {
    return Q.call(J, e) ? !0 : Q.call(ye, e) ? !1 : xe.test(e) ? J[e] = !0 : (ye[e] = !0, !1);
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
  function Z(e, n, t, r, l, u, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var B = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    B[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    B[n] = new Z(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    B[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    B[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    B[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    B[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    B[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    B[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    B[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      yn,
      sn
    );
    B[n] = new Z(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(yn, sn);
    B[n] = new Z(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(yn, sn);
    B[n] = new Z(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    B[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), B.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    B[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = B.hasOwnProperty(n) ? B[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (He(n, t, l, r) && (t = null), r || l === null ? K(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ge = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), _e = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), Nn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Gn = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var a = Object.assign, h;
  function M(e) {
    if (h === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        h = n && n[1] || "";
      }
    return `
` + h + e;
  }
  var I = !1;
  function j(e, n) {
    if (!e || I)
      return "";
    I = !0;
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
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (l[o] !== u[i]) {
            if (o !== 1 || i !== 1)
              do
                if (o--, i--, 0 > i || l[o] !== u[i]) {
                  var s = `
` + l[o].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                }
              while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      I = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function W(e) {
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
        return e = j(e.type, !1), e;
      case 11:
        return e = j(e.type.render, !1), e;
      case 1:
        return e = j(e.type, !0), e;
      default:
        return "";
    }
  }
  function F(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Le:
        return "Fragment";
      case _e:
        return "Portal";
      case Nn:
        return "Profiler";
      case We:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case an:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case cn:
          return n = e.displayName || null, n !== null ? n : F(e.type) || "Memo";
        case ze:
          n = e._payload, e = e._init;
          try {
            return F(e(n));
          } catch {
          }
      }
    return null;
  }
  function H(e) {
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
        return F(n);
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
  function U(e) {
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
  function Ia(e) {
    var n = Te(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function Sr(e) {
    e._valueTracker || (e._valueTracker = Ia(e));
  }
  function Mo(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = Te(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function No(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = U(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Lo(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function Pl(e, n) {
    Lo(e, n);
    var t = U(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? jl(e, n.type, t) : n.hasOwnProperty("defaultValue") && jl(e, n.type, U(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function zo(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function jl(e, n, t) {
    (n !== "number" || kr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var jt = Array.isArray;
  function it(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + U(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dl(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function To(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(m(92));
        if (jt(t)) {
          if (1 < t.length)
            throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: U(t) };
  }
  function Po(e, n) {
    var t = U(n.value), r = U(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function jo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Do(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Do(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Er, Io = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (Er = Er || document.createElement("div"), Er.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Er.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var It = {
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
  }, Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(It).forEach(function(e) {
    Oa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), It[n] = It[e];
    });
  });
  function Oo(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || It.hasOwnProperty(e) && It[e] ? ("" + n).trim() : n + "px";
  }
  function Ro(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Oo(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Ra = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ol(e, n) {
    if (n) {
      if (Ra[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
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
  function Rl(e, n) {
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
  var Fl = null;
  function Ul(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Al = null, st = null, at = null;
  function Fo(e) {
    if (e = tr(e)) {
      if (typeof Al != "function")
        throw Error(m(280));
      var n = e.stateNode;
      n && (n = $r(n), Al(e.stateNode, e.type, n));
    }
  }
  function Uo(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Ao() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Fo(e), n)
        for (e = 0; e < n.length; e++)
          Fo(n[e]);
    }
  }
  function Vo(e, n) {
    return e(n);
  }
  function Qo() {
  }
  var Vl = !1;
  function Bo(e, n, t) {
    if (Vl)
      return e(n, t);
    Vl = !0;
    try {
      return Vo(e, n, t);
    } finally {
      Vl = !1, (st !== null || at !== null) && (Qo(), Ao());
    }
  }
  function Ot(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = $r(t);
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
  var Ql = !1;
  if (se)
    try {
      var Rt = {};
      Object.defineProperty(Rt, "passive", { get: function() {
        Ql = !0;
      } }), window.addEventListener("test", Rt, Rt), window.removeEventListener("test", Rt, Rt);
    } catch {
      Ql = !1;
    }
  function Fa(e, n, t, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ft = !1, Cr = null, xr = !1, Bl = null, Ua = { onError: function(e) {
    Ft = !0, Cr = e;
  } };
  function Aa(e, n, t, r, l, u, o, i, s) {
    Ft = !1, Cr = null, Fa.apply(Ua, arguments);
  }
  function Va(e, n, t, r, l, u, o, i, s) {
    if (Aa.apply(this, arguments), Ft) {
      if (Ft) {
        var p = Cr;
        Ft = !1, Cr = null;
      } else
        throw Error(m(198));
      xr || (xr = !0, Bl = p);
    }
  }
  function Kn(e) {
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
  function Ho(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Wo(e) {
    if (Kn(e) !== e)
      throw Error(m(188));
  }
  function Qa(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Kn(e), n === null)
        throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t)
            return Wo(l), e;
          if (u === r)
            return Wo(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return)
        t = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            o = !0, t = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, t = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === t) {
              o = !0, t = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!o)
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
  function $o(e) {
    return e = Qa(e), e !== null ? Yo(e) : null;
  }
  function Yo(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Yo(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Go = A.unstable_scheduleCallback, Ko = A.unstable_cancelCallback, Ba = A.unstable_shouldYield, Ha = A.unstable_requestPaint, te = A.unstable_now, Wa = A.unstable_getCurrentPriorityLevel, Hl = A.unstable_ImmediatePriority, Zo = A.unstable_UserBlockingPriority, _r = A.unstable_NormalPriority, $a = A.unstable_LowPriority, Xo = A.unstable_IdlePriority, Mr = null, fn = null;
  function Ya(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function")
      try {
        fn.onCommitFiberRoot(Mr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var en = Math.clz32 ? Math.clz32 : Za, Ga = Math.log, Ka = Math.LN2;
  function Za(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ga(e) / Ka | 0) | 0;
  }
  var Nr = 64, Lr = 4194304;
  function Ut(e) {
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
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = t & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = Ut(i) : (u &= o, u !== 0 && (r = Ut(u)));
    } else
      o = t & ~l, o !== 0 ? r = Ut(o) : u !== 0 && (r = Ut(u));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Xa(e, n) {
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
  function Ja(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - en(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & t) || i & r) && (l[o] = Xa(i, n)) : s <= n && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Wl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function $l(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function qa(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Yl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var V = 0;
  function qo(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bo, Gl, ei, ni, ti, Kl = !1, Tr = [], Ln = null, zn = null, Tn = null, Vt = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), Pn = [], ba = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ri(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(n.pointerId);
    }
  }
  function Bt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Gl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function ec(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Ln = Bt(Ln, e, n, t, r, l), !0;
      case "dragenter":
        return zn = Bt(zn, e, n, t, r, l), !0;
      case "mouseover":
        return Tn = Bt(Tn, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Vt.set(u, Bt(Vt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Qt.set(u, Bt(Qt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function li(e) {
    var n = Zn(e.target);
    if (n !== null) {
      var t = Kn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Ho(t), n !== null) {
            e.blockedOn = n, ti(e.priority, function() {
              ei(t);
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
      var t = Xl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Fl = r, t.target.dispatchEvent(r), Fl = null;
      } else
        return n = tr(t), n !== null && Gl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function ui(e, n, t) {
    Pr(e) && t.delete(n);
  }
  function nc() {
    Kl = !1, Ln !== null && Pr(Ln) && (Ln = null), zn !== null && Pr(zn) && (zn = null), Tn !== null && Pr(Tn) && (Tn = null), Vt.forEach(ui), Qt.forEach(ui);
  }
  function Ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kl || (Kl = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, nc)));
  }
  function Wt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < Tr.length) {
      Ht(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Ln !== null && Ht(Ln, e), zn !== null && Ht(zn, e), Tn !== null && Ht(Tn, e), Vt.forEach(n), Qt.forEach(n), t = 0; t < Pn.length; t++)
      r = Pn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pn.length && (t = Pn[0], t.blockedOn === null); )
      li(t), t.blockedOn === null && Pn.shift();
  }
  var ct = ge.ReactCurrentBatchConfig, jr = !0;
  function tc(e, n, t, r) {
    var l = V, u = ct.transition;
    ct.transition = null;
    try {
      V = 1, Zl(e, n, t, r);
    } finally {
      V = l, ct.transition = u;
    }
  }
  function rc(e, n, t, r) {
    var l = V, u = ct.transition;
    ct.transition = null;
    try {
      V = 4, Zl(e, n, t, r);
    } finally {
      V = l, ct.transition = u;
    }
  }
  function Zl(e, n, t, r) {
    if (jr) {
      var l = Xl(e, n, t, r);
      if (l === null)
        pu(e, n, r, Dr, t), ri(e, r);
      else if (ec(l, e, n, t, r))
        r.stopPropagation();
      else if (ri(e, r), n & 4 && -1 < ba.indexOf(e)) {
        for (; l !== null; ) {
          var u = tr(l);
          if (u !== null && bo(u), u = Xl(e, n, t, r), u === null && pu(e, n, r, Dr, t), u === l)
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else
        pu(e, n, r, null, t);
    }
  }
  var Dr = null;
  function Xl(e, n, t, r) {
    if (Dr = null, e = Ul(r), e = Zn(e), e !== null)
      if (n = Kn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Ho(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Dr = e, null;
  }
  function oi(e) {
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
        switch (Wa()) {
          case Hl:
            return 1;
          case Zo:
            return 4;
          case _r:
          case $a:
            return 16;
          case Xo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jn = null, Jl = null, Ir = null;
  function ii() {
    if (Ir)
      return Ir;
    var e, n = Jl, t = n.length, r, l = "value" in jn ? jn.value : jn.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[u - r]; r++)
      ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Or(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Rr() {
    return !0;
  }
  function si() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, u, o) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e)
        e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Rr : si, this.isPropagationStopped = si, this;
    }
    return a(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Rr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Rr);
    }, persist: function() {
    }, isPersistent: Rr }), n;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ql = Ue(ft), $t = a({}, ft, { view: 0, detail: 0 }), lc = Ue($t), bl, eu, Yt, Fr = a({}, $t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: tu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (bl = e.screenX - Yt.screenX, eu = e.screenY - Yt.screenY) : eu = bl = 0, Yt = e), bl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : eu;
  } }), ai = Ue(Fr), uc = a({}, Fr, { dataTransfer: 0 }), oc = Ue(uc), ic = a({}, $t, { relatedTarget: 0 }), nu = Ue(ic), sc = a({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ac = Ue(sc), cc = a({}, ft, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), fc = Ue(cc), dc = a({}, ft, { data: 0 }), ci = Ue(dc), pc = {
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
  }, mc = {
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
  }, vc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function hc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = vc[e]) ? !!n[e] : !1;
  }
  function tu() {
    return hc;
  }
  var yc = a({}, $t, { key: function(e) {
    if (e.key) {
      var n = pc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Or(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: tu, charCode: function(e) {
    return e.type === "keypress" ? Or(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Or(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), gc = Ue(yc), wc = a({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fi = Ue(wc), Sc = a({}, $t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: tu }), kc = Ue(Sc), Ec = a({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = Ue(Ec), xc = a({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _c = Ue(xc), Mc = [9, 13, 27, 32], ru = se && "CompositionEvent" in window, Gt = null;
  se && "documentMode" in document && (Gt = document.documentMode);
  var Nc = se && "TextEvent" in window && !Gt, di = se && (!ru || Gt && 8 < Gt && 11 >= Gt), pi = " ", mi = !1;
  function vi(e, n) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(n.keyCode) !== -1;
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
  function hi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Lc(e, n) {
    switch (e) {
      case "compositionend":
        return hi(n);
      case "keypress":
        return n.which !== 32 ? null : (mi = !0, pi);
      case "textInput":
        return e = n.data, e === pi && mi ? null : e;
      default:
        return null;
    }
  }
  function zc(e, n) {
    if (dt)
      return e === "compositionend" || !ru && vi(e, n) ? (e = ii(), Ir = Jl = jn = null, dt = !1, e) : null;
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
        return di && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Tc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Tc[e.type] : n === "textarea";
  }
  function gi(e, n, t, r) {
    Uo(r), n = Br(n, "onChange"), 0 < n.length && (t = new ql("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Kt = null, Zt = null;
  function Pc(e) {
    Ri(e, 0);
  }
  function Ur(e) {
    var n = yt(e);
    if (Mo(n))
      return e;
  }
  function jc(e, n) {
    if (e === "change")
      return n;
  }
  var wi = !1;
  if (se) {
    var lu;
    if (se) {
      var uu = "oninput" in document;
      if (!uu) {
        var Si = document.createElement("div");
        Si.setAttribute("oninput", "return;"), uu = typeof Si.oninput == "function";
      }
      lu = uu;
    } else
      lu = !1;
    wi = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Kt && (Kt.detachEvent("onpropertychange", Ei), Zt = Kt = null);
  }
  function Ei(e) {
    if (e.propertyName === "value" && Ur(Zt)) {
      var n = [];
      gi(n, Zt, e, Ul(e)), Bo(Pc, n);
    }
  }
  function Dc(e, n, t) {
    e === "focusin" ? (ki(), Kt = n, Zt = t, Kt.attachEvent("onpropertychange", Ei)) : e === "focusout" && ki();
  }
  function Ic(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ur(Zt);
  }
  function Oc(e, n) {
    if (e === "click")
      return Ur(n);
  }
  function Rc(e, n) {
    if (e === "input" || e === "change")
      return Ur(n);
  }
  function Fc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Fc;
  function Xt(e, n) {
    if (nn(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!Q.call(n, l) || !nn(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function Ci(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function xi(e, n) {
    var t = Ci(e);
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
      t = Ci(t);
    }
  }
  function _i(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? _i(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Mi() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = kr(e.document);
    }
    return n;
  }
  function ou(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Uc(e) {
    var n = Mi(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && _i(t.ownerDocument.documentElement, t)) {
      if (r !== null && ou(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = xi(t, u);
          var o = xi(
            t,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Ac = se && "documentMode" in document && 11 >= document.documentMode, pt = null, iu = null, Jt = null, su = !1;
  function Ni(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    su || pt == null || pt !== kr(r) || (r = pt, "selectionStart" in r && ou(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Xt(Jt, r) || (Jt = r, r = Br(iu, "onSelect"), 0 < r.length && (n = new ql("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ar(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, au = {}, Li = {};
  se && (Li = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Vr(e) {
    if (au[e])
      return au[e];
    if (!mt[e])
      return e;
    var n = mt[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in Li)
        return au[e] = n[t];
    return e;
  }
  var zi = Vr("animationend"), Ti = Vr("animationiteration"), Pi = Vr("animationstart"), ji = Vr("transitionend"), Di = /* @__PURE__ */ new Map(), Ii = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dn(e, n) {
    Di.set(e, n), Ce(n, [e]);
  }
  for (var cu = 0; cu < Ii.length; cu++) {
    var fu = Ii[cu], Vc = fu.toLowerCase(), Qc = fu[0].toUpperCase() + fu.slice(1);
    Dn(Vc, "on" + Qc);
  }
  Dn(zi, "onAnimationEnd"), Dn(Ti, "onAnimationIteration"), Dn(Pi, "onAnimationStart"), Dn("dblclick", "onDoubleClick"), Dn("focusin", "onFocus"), Dn("focusout", "onBlur"), Dn(ji, "onTransitionEnd"), pe("onMouseEnter", ["mouseout", "mouseover"]), pe("onMouseLeave", ["mouseout", "mouseover"]), pe("onPointerEnter", ["pointerout", "pointerover"]), pe("onPointerLeave", ["pointerout", "pointerover"]), Ce("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ce("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ce("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ce("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ce("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bc = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Oi(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Va(r, n, void 0, e), e.currentTarget = null;
  }
  function Ri(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o], s = i.instance, p = i.currentTarget;
            if (i = i.listener, s !== u && l.isPropagationStopped())
              break e;
            Oi(l, i, p), u = s;
          }
        else
          for (o = 0; o < r.length; o++) {
            if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped())
              break e;
            Oi(l, i, p), u = s;
          }
      }
    }
    if (xr)
      throw e = Bl, xr = !1, Bl = null, e;
  }
  function Y(e, n) {
    var t = n[wu];
    t === void 0 && (t = n[wu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Fi(n, e, 2, !1), t.add(r));
  }
  function du(e, n, t) {
    var r = 0;
    n && (r |= 4), Fi(t, e, r, n);
  }
  var Qr = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Qr]) {
      e[Qr] = !0, he.forEach(function(t) {
        t !== "selectionchange" && (Bc.has(t) || du(t, !1, e), du(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Qr] || (n[Qr] = !0, du("selectionchange", !1, n));
    }
  }
  function Fi(e, n, t, r) {
    switch (oi(n)) {
      case 1:
        var l = tc;
        break;
      case 4:
        l = rc;
        break;
      default:
        l = Zl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Ql || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function pu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l)
              break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var s = o.tag;
                if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                  return;
                o = o.return;
              }
            for (; i !== null; ) {
              if (o = Zn(i), o === null)
                return;
              if (s = o.tag, s === 5 || s === 6) {
                r = u = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
    Bo(function() {
      var p = u, y = Ul(t), g = [];
      e: {
        var v = Di.get(e);
        if (v !== void 0) {
          var k = ql, C = e;
          switch (e) {
            case "keypress":
              if (Or(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              k = gc;
              break;
            case "focusin":
              C = "focus", k = nu;
              break;
            case "focusout":
              C = "blur", k = nu;
              break;
            case "beforeblur":
            case "afterblur":
              k = nu;
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
              k = ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = kc;
              break;
            case zi:
            case Ti:
            case Pi:
              k = ac;
              break;
            case ji:
              k = Cc;
              break;
            case "scroll":
              k = lc;
              break;
            case "wheel":
              k = _c;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = fc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = fi;
          }
          var x = (n & 4) !== 0, re = !x && e === "scroll", f = x ? v !== null ? v + "Capture" : null : v;
          x = [];
          for (var c = p, d; c !== null; ) {
            d = c;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Ot(c, f), w != null && x.push(er(c, w, d)))), re)
              break;
            c = c.return;
          }
          0 < x.length && (v = new k(v, C, null, t, y), g.push({ event: v, listeners: x }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", v && t !== Fl && (C = t.relatedTarget || t.fromElement) && (Zn(C) || C[wn]))
            break e;
          if ((k || v) && (v = y.window === y ? y : (v = y.ownerDocument) ? v.defaultView || v.parentWindow : window, k ? (C = t.relatedTarget || t.toElement, k = p, C = C ? Zn(C) : null, C !== null && (re = Kn(C), C !== re || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (x = ai, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = fi, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), re = k == null ? v : yt(k), d = C == null ? v : yt(C), v = new x(w, c + "leave", k, t, y), v.target = re, v.relatedTarget = d, w = null, Zn(y) === p && (x = new x(f, c + "enter", C, t, y), x.target = d, x.relatedTarget = re, w = x), re = w, k && C)
              n: {
                for (x = k, f = C, c = 0, d = x; d; d = vt(d))
                  c++;
                for (d = 0, w = f; w; w = vt(w))
                  d++;
                for (; 0 < c - d; )
                  x = vt(x), c--;
                for (; 0 < d - c; )
                  f = vt(f), d--;
                for (; c--; ) {
                  if (x === f || f !== null && x === f.alternate)
                    break n;
                  x = vt(x), f = vt(f);
                }
                x = null;
              }
            else
              x = null;
            k !== null && Ui(g, v, k, x, !1), C !== null && re !== null && Ui(g, re, C, x, !0);
          }
        }
        e: {
          if (v = p ? yt(p) : window, k = v.nodeName && v.nodeName.toLowerCase(), k === "select" || k === "input" && v.type === "file")
            var _ = jc;
          else if (yi(v))
            if (wi)
              _ = Rc;
            else {
              _ = Ic;
              var L = Dc;
            }
          else
            (k = v.nodeName) && k.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (_ = Oc);
          if (_ && (_ = _(e, p))) {
            gi(g, _, t, y);
            break e;
          }
          L && L(e, v, p), e === "focusout" && (L = v._wrapperState) && L.controlled && v.type === "number" && jl(v, "number", v.value);
        }
        switch (L = p ? yt(p) : window, e) {
          case "focusin":
            (yi(L) || L.contentEditable === "true") && (pt = L, iu = p, Jt = null);
            break;
          case "focusout":
            Jt = iu = pt = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            su = !1, Ni(g, t, y);
            break;
          case "selectionchange":
            if (Ac)
              break;
          case "keydown":
          case "keyup":
            Ni(g, t, y);
        }
        var z;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          dt ? vi(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
        P && (di && t.locale !== "ko" && (dt || P !== "onCompositionStart" ? P === "onCompositionEnd" && dt && (z = ii()) : (jn = y, Jl = "value" in jn ? jn.value : jn.textContent, dt = !0)), L = Br(p, P), 0 < L.length && (P = new ci(P, e, null, t, y), g.push({ event: P, listeners: L }), z ? P.data = z : (z = hi(t), z !== null && (P.data = z)))), (z = Nc ? Lc(e, t) : zc(e, t)) && (p = Br(p, "onBeforeInput"), 0 < p.length && (y = new ci("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Ri(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Br(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Ot(e, t), u != null && r.unshift(er(e, u, l)), u = Ot(e, n), u != null && r.push(er(e, u, l))), e = e.return;
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
  function Ui(e, n, t, r, l) {
    for (var u = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r)
        break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Ot(t, u), s != null && o.unshift(er(t, s, i))) : l || (s = Ot(t, u), s != null && o.push(er(t, s, i)))), t = t.return;
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var Hc = /\r\n?/g, Wc = /\u0000|\uFFFD/g;
  function Ai(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hc, `
`).replace(Wc, "");
  }
  function Hr(e, n, t) {
    if (n = Ai(n), Ai(e) !== n && t)
      throw Error(m(425));
  }
  function Wr() {
  }
  var mu = null, vu = null;
  function hu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yu = typeof setTimeout == "function" ? setTimeout : void 0, $c = typeof clearTimeout == "function" ? clearTimeout : void 0, Vi = typeof Promise == "function" ? Promise : void 0, Yc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vi < "u" ? function(e) {
    return Vi.resolve(null).then(e).catch(Gc);
  } : yu;
  function Gc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function gu(e, n) {
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
  function In(e) {
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
  function Qi(e) {
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
  var ht = Math.random().toString(36).slice(2), dn = "__reactFiber$" + ht, nr = "__reactProps$" + ht, wn = "__reactContainer$" + ht, wu = "__reactEvents$" + ht, Kc = "__reactListeners$" + ht, Zc = "__reactHandles$" + ht;
  function Zn(e) {
    var n = e[dn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = Qi(e); e !== null; ) {
            if (t = e[dn])
              return t;
            e = Qi(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[dn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var Su = [], gt = -1;
  function On(e) {
    return { current: e };
  }
  function G(e) {
    0 > gt || (e.current = Su[gt], Su[gt] = null, gt--);
  }
  function $(e, n) {
    gt++, Su[gt] = e.current, e.current = n;
  }
  var Rn = {}, we = On(Rn), Pe = On(!1), Xn = Rn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Rn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t)
      l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function je(e) {
    return e = e.childContextTypes, e != null;
  }
  function Yr() {
    G(Pe), G(we);
  }
  function Bi(e, n, t) {
    if (we.current !== Rn)
      throw Error(m(168));
    $(we, n), $(Pe, t);
  }
  function Hi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(m(108, H(e) || "Unknown", l));
    return a({}, t, r);
  }
  function Gr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn, Xn = we.current, $(we, e), $(Pe, Pe.current), !0;
  }
  function Wi(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(m(169));
    t ? (e = Hi(e, n, Xn), r.__reactInternalMemoizedMergedChildContext = e, G(Pe), G(we), $(we, e)) : G(Pe), $(Pe, t);
  }
  var Sn = null, Kr = !1, ku = !1;
  function $i(e) {
    Sn === null ? Sn = [e] : Sn.push(e);
  }
  function Xc(e) {
    Kr = !0, $i(e);
  }
  function Fn() {
    if (!ku && Sn !== null) {
      ku = !0;
      var e = 0, n = V;
      try {
        var t = Sn;
        for (V = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Sn = null, Kr = !1;
      } catch (l) {
        throw Sn !== null && (Sn = Sn.slice(e + 1)), Go(Hl, Fn), l;
      } finally {
        V = n, ku = !1;
      }
    }
    return null;
  }
  var St = [], kt = 0, Zr = null, Xr = 0, $e = [], Ye = 0, Jn = null, kn = 1, En = "";
  function qn(e, n) {
    St[kt++] = Xr, St[kt++] = Zr, Zr = e, Xr = n;
  }
  function Yi(e, n, t) {
    $e[Ye++] = kn, $e[Ye++] = En, $e[Ye++] = Jn, Jn = e;
    var r = kn;
    e = En;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - en(n) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, kn = 1 << 32 - en(n) + l | t << l | r, En = u + e;
    } else
      kn = 1 << u | t << l | r, En = e;
  }
  function Eu(e) {
    e.return !== null && (qn(e, 1), Yi(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Zr; )
      Zr = St[--kt], St[kt] = null, Xr = St[--kt], St[kt] = null;
    for (; e === Jn; )
      Jn = $e[--Ye], $e[Ye] = null, En = $e[--Ye], $e[Ye] = null, kn = $e[--Ye], $e[Ye] = null;
  }
  var Ae = null, Ve = null, X = !1, tn = null;
  function Gi(e, n) {
    var t = Xe(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Ki(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = In(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: kn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Xe(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (X) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Ki(e, n)) {
          if (xu(e))
            throw Error(m(418));
          n = In(t.nextSibling);
          var r = Ae;
          n && Ki(e, n) ? Gi(r, t) : (e.flags = e.flags & -4097 | 2, X = !1, Ae = e);
        }
      } else {
        if (xu(e))
          throw Error(m(418));
        e.flags = e.flags & -4097 | 2, X = !1, Ae = e;
      }
    }
  }
  function Zi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ae = e;
  }
  function Jr(e) {
    if (e !== Ae)
      return !1;
    if (!X)
      return Zi(e), X = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !hu(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (xu(e))
        throw Xi(), Error(m(418));
      for (; n; )
        Gi(e, n), n = In(n.nextSibling);
    }
    if (Zi(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = In(e.nextSibling);
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
      Ve = Ae ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    for (var e = Ve; e; )
      e = In(e.nextSibling);
  }
  function Et() {
    Ve = Ae = null, X = !1;
  }
  function Mu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Jc = ge.ReactCurrentBatchConfig;
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = a({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var qr = On(null), br = null, Ct = null, Nu = null;
  function Lu() {
    Nu = Ct = br = null;
  }
  function zu(e) {
    var n = qr.current;
    G(qr), e._currentValue = n;
  }
  function Tu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function xt(e, n) {
    br = e, Nu = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (De = !0), e.firstContext = null);
  }
  function Ge(e) {
    var n = e._currentValue;
    if (Nu !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
        if (br === null)
          throw Error(m(308));
        Ct = e, br.dependencies = { lanes: 0, firstContext: e };
      } else
        Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Pu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function Ji(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Pu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Cn(e, r);
  }
  function Cn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function ju(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qi(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function xn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, O & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Cn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Pu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Cn(e, t);
  }
  function el(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Yl(e, t);
    }
  }
  function bi(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = o : u = u.next = o, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else
        l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var v = i.lane, k = i.eventTime;
        if ((r & v) === v) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, x = i;
            switch (v = n, k = t, x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  g = C.call(k, g, v);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, v = typeof C == "function" ? C.call(k, g, v) : C, v == null)
                  break e;
                g = a({}, g, v);
                break e;
              case 2:
                Un = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
        } else
          k = { eventTime: k, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, o |= v;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null)
            break;
          v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          o |= l.lane, l = l.next;
        while (l !== n);
      } else
        u === null && (l.shared.lanes = 0);
      tt |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function es(e, n, t) {
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
  var ns = new N.Component().refs;
  function Du(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : a({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var tl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Hn(e), u = xn(r, l);
    u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (on(n, e, l, r), el(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Ne(), l = Hn(e), u = xn(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (on(n, e, l, r), el(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Ne(), r = Hn(e), l = xn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (on(n, e, r, t), el(n, e, r));
  } };
  function ts(e, n, t, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : n.prototype && n.prototype.isPureReactComponent ? !Xt(t, r) || !Xt(l, u) : !0;
  }
  function rs(e, n, t) {
    var r = !1, l = Rn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Ge(u) : (l = je(n) ? Xn : we.current, r = n.contextTypes, u = (r = r != null) ? wt(e, l) : Rn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = tl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function ls(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && tl.enqueueReplaceState(n, n.state, null);
  }
  function Iu(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = ns, ju(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Ge(u) : (u = je(n) ? Xn : we.current, l.context = wt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Du(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && tl.enqueueReplaceState(l, l.state, null), nl(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(o) {
          var i = l.refs;
          i === ns && (i = l.refs = {}), o === null ? delete i[u] : i[u] = o;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string")
        throw Error(m(284));
      if (!t._owner)
        throw Error(m(290, e));
    }
    return e;
  }
  function rl(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function us(e) {
    var n = e._init;
    return n(e._payload);
  }
  function os(e) {
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
      return f = $n(f, c), f.index = 0, f.sibling = null, f;
    }
    function u(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, c, d, w) {
      return c === null || c.tag !== 6 ? (c = go(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, w) {
      var _ = d.type;
      return _ === Le ? y(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ze && us(_) === c.type) ? (w = l(c, d.props), w.ref = rr(f, c, d), w.return = f, w) : (w = El(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, c, d), w.return = f, w);
    }
    function p(f, c, d, w) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = wo(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function y(f, c, d, w, _) {
      return c === null || c.tag !== 7 ? (c = ot(d, f.mode, w, _), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function g(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
        return c = go("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case qe:
            return d = El(c.type, c.key, c.props, null, f.mode, d), d.ref = rr(f, null, c), d.return = f, d;
          case _e:
            return c = wo(c, f.mode, d), c.return = f, c;
          case ze:
            var w = c._init;
            return g(f, w(c._payload), d);
        }
        if (jt(c) || T(c))
          return c = ot(c, f.mode, d, null), c.return = f, c;
        rl(f, c);
      }
      return null;
    }
    function v(f, c, d, w) {
      var _ = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return _ !== null ? null : i(f, c, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === _ ? s(f, c, d, w) : null;
          case _e:
            return d.key === _ ? p(f, c, d, w) : null;
          case ze:
            return _ = d._init, v(
              f,
              c,
              _(d._payload),
              w
            );
        }
        if (jt(d) || T(d))
          return _ !== null ? null : y(f, c, d, w, null);
        rl(f, d);
      }
      return null;
    }
    function k(f, c, d, w, _) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return f = f.get(d) || null, i(c, f, "" + w, _);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, _);
          case _e:
            return f = f.get(w.key === null ? d : w.key) || null, p(c, f, w, _);
          case ze:
            var L = w._init;
            return k(f, c, d, L(w._payload), _);
        }
        if (jt(w) || T(w))
          return f = f.get(d) || null, y(c, f, w, _, null);
        rl(c, w);
      }
      return null;
    }
    function C(f, c, d, w) {
      for (var _ = null, L = null, z = c, P = c = 0, fe = null; z !== null && P < d.length; P++) {
        z.index > P ? (fe = z, z = null) : fe = z.sibling;
        var R = v(f, z, d[P], w);
        if (R === null) {
          z === null && (z = fe);
          break;
        }
        e && z && R.alternate === null && n(f, z), c = u(R, c, P), L === null ? _ = R : L.sibling = R, L = R, z = fe;
      }
      if (P === d.length)
        return t(f, z), X && qn(f, P), _;
      if (z === null) {
        for (; P < d.length; P++)
          z = g(f, d[P], w), z !== null && (c = u(z, c, P), L === null ? _ = z : L.sibling = z, L = z);
        return X && qn(f, P), _;
      }
      for (z = r(f, z); P < d.length; P++)
        fe = k(z, f, P, d[P], w), fe !== null && (e && fe.alternate !== null && z.delete(fe.key === null ? P : fe.key), c = u(fe, c, P), L === null ? _ = fe : L.sibling = fe, L = fe);
      return e && z.forEach(function(Yn) {
        return n(f, Yn);
      }), X && qn(f, P), _;
    }
    function x(f, c, d, w) {
      var _ = T(d);
      if (typeof _ != "function")
        throw Error(m(150));
      if (d = _.call(d), d == null)
        throw Error(m(151));
      for (var L = _ = null, z = c, P = c = 0, fe = null, R = d.next(); z !== null && !R.done; P++, R = d.next()) {
        z.index > P ? (fe = z, z = null) : fe = z.sibling;
        var Yn = v(f, z, R.value, w);
        if (Yn === null) {
          z === null && (z = fe);
          break;
        }
        e && z && Yn.alternate === null && n(f, z), c = u(Yn, c, P), L === null ? _ = Yn : L.sibling = Yn, L = Yn, z = fe;
      }
      if (R.done)
        return t(
          f,
          z
        ), X && qn(f, P), _;
      if (z === null) {
        for (; !R.done; P++, R = d.next())
          R = g(f, R.value, w), R !== null && (c = u(R, c, P), L === null ? _ = R : L.sibling = R, L = R);
        return X && qn(f, P), _;
      }
      for (z = r(f, z); !R.done; P++, R = d.next())
        R = k(z, f, P, R.value, w), R !== null && (e && R.alternate !== null && z.delete(R.key === null ? P : R.key), c = u(R, c, P), L === null ? _ = R : L.sibling = R, L = R);
      return e && z.forEach(function(Pf) {
        return n(f, Pf);
      }), X && qn(f, P), _;
    }
    function re(f, c, d, w) {
      if (typeof d == "object" && d !== null && d.type === Le && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var _ = d.key, L = c; L !== null; ) {
                if (L.key === _) {
                  if (_ = d.type, _ === Le) {
                    if (L.tag === 7) {
                      t(f, L.sibling), c = l(L, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (L.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ze && us(_) === L.type) {
                    t(f, L.sibling), c = l(L, d.props), c.ref = rr(f, L, d), c.return = f, f = c;
                    break e;
                  }
                  t(f, L);
                  break;
                } else
                  n(f, L);
                L = L.sibling;
              }
              d.type === Le ? (c = ot(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = El(d.type, d.key, d.props, null, f.mode, w), w.ref = rr(f, c, d), w.return = f, f = w);
            }
            return o(f);
          case _e:
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
              c = wo(d, f.mode, w), c.return = f, f = c;
            }
            return o(f);
          case ze:
            return L = d._init, re(f, c, L(d._payload), w);
        }
        if (jt(d))
          return C(f, c, d, w);
        if (T(d))
          return x(f, c, d, w);
        rl(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (t(f, c.sibling), c = l(c, d), c.return = f, f = c) : (t(f, c), c = go(d, f.mode, w), c.return = f, f = c), o(f)) : t(f, c);
    }
    return re;
  }
  var _t = os(!0), is = os(!1), lr = {}, pn = On(lr), ur = On(lr), or = On(lr);
  function et(e) {
    if (e === lr)
      throw Error(m(174));
    return e;
  }
  function Ou(e, n) {
    switch ($(or, n), $(ur, e), $(pn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Il(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Il(n, e);
    }
    G(pn), $(pn, n);
  }
  function Mt() {
    G(pn), G(ur), G(or);
  }
  function ss(e) {
    et(or.current);
    var n = et(pn.current), t = Il(n, e.type);
    n !== t && ($(ur, e), $(pn, t));
  }
  function Ru(e) {
    ur.current === e && (G(pn), G(ur));
  }
  var q = On(0);
  function ll(e) {
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
  var Fu = [];
  function Uu() {
    for (var e = 0; e < Fu.length; e++)
      Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var ul = ge.ReactCurrentDispatcher, Au = ge.ReactCurrentBatchConfig, nt = 0, b = null, oe = null, ae = null, ol = !1, ir = !1, sr = 0, qc = 0;
  function Se() {
    throw Error(m(321));
  }
  function Vu(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!nn(e[t], n[t]))
        return !1;
    return !0;
  }
  function Qu(e, n, t, r, l, u) {
    if (nt = u, b = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ul.current = e === null || e.memoizedState === null ? tf : rf, e = t(r, l), ir) {
      u = 0;
      do {
        if (ir = !1, sr = 0, 25 <= u)
          throw Error(m(301));
        u += 1, ae = oe = null, n.updateQueue = null, ul.current = lf, e = t(r, l);
      } while (ir);
    }
    if (ul.current = al, n = oe !== null && oe.next !== null, nt = 0, ae = oe = b = null, ol = !1, n)
      throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function mn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? b.memoizedState = ae = e : ae = ae.next = e, ae;
  }
  function Ke() {
    if (oe === null) {
      var e = b.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = oe.next;
    var n = ae === null ? b.memoizedState : ae.next;
    if (n !== null)
      ae = n, oe = e;
    else {
      if (e === null)
        throw Error(m(310));
      oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ae === null ? b.memoizedState = ae = e : ae = ae.next = e;
    }
    return ae;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Hu(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = oe, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, b.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, nn(r, n.memoizedState) || (De = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, b.lanes |= u, tt |= u, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Wu(e) {
    var n = Ke(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      nn(u, n.memoizedState) || (De = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function as() {
  }
  function cs(e, n) {
    var t = b, r = Ke(), l = n(), u = !nn(r.memoizedState, l);
    if (u && (r.memoizedState = l, De = !0), r = r.queue, $u(ps.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || ae !== null && ae.memoizedState.tag & 1) {
      if (t.flags |= 2048, cr(9, ds.bind(null, t, r, l, n), void 0, null), ce === null)
        throw Error(m(349));
      nt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ds(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ms(n) && vs(e);
  }
  function ps(e, n, t) {
    return t(function() {
      ms(n) && vs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function vs(e) {
    var n = Cn(e, 1);
    n !== null && on(n, e, 1, -1);
  }
  function hs(e) {
    var n = mn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = nf.bind(null, b, e), [n.memoizedState, e];
  }
  function cr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = b.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, b.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ys() {
    return Ke().memoizedState;
  }
  function il(e, n, t, r) {
    var l = mn();
    b.flags |= e, l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function sl(e, n, t, r) {
    var l = Ke();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (oe !== null) {
      var o = oe.memoizedState;
      if (u = o.destroy, r !== null && Vu(r, o.deps)) {
        l.memoizedState = cr(n, t, u, r);
        return;
      }
    }
    b.flags |= e, l.memoizedState = cr(1 | n, t, u, r);
  }
  function gs(e, n) {
    return il(8390656, 8, e, n);
  }
  function $u(e, n) {
    return sl(2048, 8, e, n);
  }
  function ws(e, n) {
    return sl(4, 2, e, n);
  }
  function Ss(e, n) {
    return sl(4, 4, e, n);
  }
  function ks(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Es(e, n, t) {
    return t = t != null ? t.concat([e]) : null, sl(4, 4, ks.bind(null, n, e), t);
  }
  function Yu() {
  }
  function Cs(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function xs(e, n) {
    var t = Ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function _s(e, n, t) {
    return nt & 21 ? (nn(t, n) || (t = Jo(), b.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = t);
  }
  function bc(e, n) {
    var t = V;
    V = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Au.transition;
    Au.transition = {};
    try {
      e(!1), n();
    } finally {
      V = t, Au.transition = r;
    }
  }
  function Ms() {
    return Ke().memoizedState;
  }
  function ef(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ns(e))
      Ls(n, t);
    else if (t = Ji(e, n, t, r), t !== null) {
      var l = Ne();
      on(t, e, r, l), zs(t, n, r);
    }
  }
  function nf(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ns(e))
      Ls(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null))
        try {
          var o = n.lastRenderedState, i = u(o, t);
          if (l.hasEagerState = !0, l.eagerState = i, nn(i, o)) {
            var s = n.interleaved;
            s === null ? (l.next = l, Pu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = Ji(e, n, l, r), t !== null && (l = Ne(), on(t, e, r, l), zs(t, n, r));
    }
  }
  function Ns(e) {
    var n = e.alternate;
    return e === b || n !== null && n === b;
  }
  function Ls(e, n) {
    ir = ol = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function zs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Yl(e, t);
    }
  }
  var al = { readContext: Ge, useCallback: Se, useContext: Se, useEffect: Se, useImperativeHandle: Se, useInsertionEffect: Se, useLayoutEffect: Se, useMemo: Se, useReducer: Se, useRef: Se, useState: Se, useDebugValue: Se, useDeferredValue: Se, useTransition: Se, useMutableSource: Se, useSyncExternalStore: Se, useId: Se, unstable_isNewReconciler: !1 }, tf = { readContext: Ge, useCallback: function(e, n) {
    return mn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ge, useEffect: gs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, il(
      4194308,
      4,
      ks.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return il(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return il(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = mn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = mn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = ef.bind(null, b, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = mn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: hs, useDebugValue: Yu, useDeferredValue: function(e) {
    return mn().memoizedState = e;
  }, useTransition: function() {
    var e = hs(!1), n = e[0];
    return e = bc.bind(null, e[1]), mn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = b, l = mn();
    if (X) {
      if (t === void 0)
        throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ce === null)
        throw Error(m(349));
      nt & 30 || fs(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, gs(ps.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, cr(9, ds.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = mn(), n = ce.identifierPrefix;
    if (X) {
      var t = En, r = kn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = qc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, rf = {
    readContext: Ge,
    useCallback: Cs,
    useContext: Ge,
    useEffect: $u,
    useImperativeHandle: Es,
    useInsertionEffect: ws,
    useLayoutEffect: Ss,
    useMemo: xs,
    useReducer: Hu,
    useRef: ys,
    useState: function() {
      return Hu(ar);
    },
    useDebugValue: Yu,
    useDeferredValue: function(e) {
      var n = Ke();
      return _s(n, oe.memoizedState, e);
    },
    useTransition: function() {
      var e = Hu(ar)[0], n = Ke().memoizedState;
      return [e, n];
    },
    useMutableSource: as,
    useSyncExternalStore: cs,
    useId: Ms,
    unstable_isNewReconciler: !1
  }, lf = { readContext: Ge, useCallback: Cs, useContext: Ge, useEffect: $u, useImperativeHandle: Es, useInsertionEffect: ws, useLayoutEffect: Ss, useMemo: xs, useReducer: Wu, useRef: ys, useState: function() {
    return Wu(ar);
  }, useDebugValue: Yu, useDeferredValue: function(e) {
    var n = Ke();
    return oe === null ? n.memoizedState = e : _s(n, oe.memoizedState, e);
  }, useTransition: function() {
    var e = Wu(ar)[0], n = Ke().memoizedState;
    return [e, n];
  }, useMutableSource: as, useSyncExternalStore: cs, useId: Ms, unstable_isNewReconciler: !1 };
  function Nt(e, n) {
    try {
      var t = "", r = n;
      do
        t += W(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Gu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Ku(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var uf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(e, n, t) {
    t = xn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, ao = r), Ku(e, n);
    }, t;
  }
  function Ps(e, n, t) {
    t = xn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Ku(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Ku(e, n), typeof r != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([this]) : Qn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
    }), t;
  }
  function js(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new uf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = Sf.bind(null, e, n, t), n.then(e, e));
  }
  function Ds(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Is(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = xn(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var of = ge.ReactCurrentOwner, De = !1;
  function Me(e, n, t, r) {
    n.child = e === null ? is(n, null, t, r) : _t(n, e.child, t, r);
  }
  function Os(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return xt(n, l), r = Qu(e, n, t, r, u, l), t = Bu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, _n(e, n, l)) : (X && t && Eu(n), n.flags |= 1, Me(e, n, r, l), n.child);
  }
  function Rs(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !yo(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Fs(e, n, u, r, l)) : (e = El(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Xt, t(o, r) && e.ref === n.ref)
        return _n(e, n, l);
    }
    return n.flags |= 1, e = $n(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Fs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Xt(u, r) && e.ref === n.ref)
        if (De = !1, n.pendingProps = r = u, (e.lanes & l) !== 0)
          e.flags & 131072 && (De = !0);
        else
          return n.lanes = e.lanes, _n(e, n, l);
    }
    return Zu(e, n, t, r, l);
  }
  function Us(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(zt, Qe), Qe |= t;
      else {
        if (!(t & 1073741824))
          return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, $(zt, Qe), Qe |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, $(zt, Qe), Qe |= r;
      }
    else
      u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, $(zt, Qe), Qe |= r;
    return Me(e, n, l, t), n.child;
  }
  function As(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Zu(e, n, t, r, l) {
    var u = je(t) ? Xn : we.current;
    return u = wt(n, u), xt(n, l), t = Qu(e, n, t, r, u, l), r = Bu(), e !== null && !De ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, _n(e, n, l)) : (X && r && Eu(n), n.flags |= 1, Me(e, n, t, l), n.child);
  }
  function Vs(e, n, t, r, l) {
    if (je(t)) {
      var u = !0;
      Gr(n);
    } else
      u = !1;
    if (xt(n, l), n.stateNode === null)
      fl(e, n), rs(n, t, r), Iu(n, t, r, l), r = !0;
    else if (e === null) {
      var o = n.stateNode, i = n.memoizedProps;
      o.props = i;
      var s = o.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ge(p) : (p = je(t) ? Xn : we.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && ls(n, o, r, p), Un = !1;
      var v = n.memoizedState;
      o.state = v, nl(n, r, o, l), s = n.memoizedState, i !== r || v !== s || Pe.current || Un ? (typeof y == "function" && (Du(n, t, y, r), s = n.memoizedState), (i = Un || ts(n, t, i, r, v, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      o = n.stateNode, qi(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : rn(n.type, i), o.props = p, g = n.pendingProps, v = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ge(s) : (s = je(t) ? Xn : we.current, s = wt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || v !== s) && ls(n, o, r, s), Un = !1, v = n.memoizedState, o.state = v, nl(n, r, o, l);
      var C = n.memoizedState;
      i !== g || v !== C || Pe.current || Un ? (typeof k == "function" && (Du(n, t, k, r), C = n.memoizedState), (p = Un || ts(n, t, p, r, v, C, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = C), o.props = r, o.state = C, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Xu(e, n, t, r, u, l);
  }
  function Xu(e, n, t, r, l, u) {
    As(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o)
      return l && Wi(n, t, !1), _n(e, n, u);
    r = n.stateNode, of.current = n;
    var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = _t(n, e.child, null, u), n.child = _t(n, null, i, u)) : Me(e, n, i, u), n.memoizedState = r.state, l && Wi(n, t, !0), n.child;
  }
  function Qs(e) {
    var n = e.stateNode;
    n.pendingContext ? Bi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Bi(e, n.context, !1), Ou(e, n.containerInfo);
  }
  function Bs(e, n, t, r, l) {
    return Et(), Mu(l), n.flags |= 256, Me(e, n, t, r), n.child;
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = q.current, u = !1, o = (n.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(q, l & 1), e === null)
      return _u(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = Cl(o, r, 0, null), e = ot(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = qu(t), n.memoizedState = Ju, e) : bu(n, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
      return sf(e, n, o, r, i, l, t);
    if (u) {
      u = r.fallback, o = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = $n(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = $n(i, u) : (u = ot(u, o, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, o = e.child.memoizedState, o = o === null ? qu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~t, n.memoizedState = Ju, r;
    }
    return u = e.child, e = u.sibling, r = $n(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function bu(e, n) {
    return n = Cl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function cl(e, n, t, r) {
    return r !== null && Mu(r), _t(n, e.child, null, t), e = bu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function sf(e, n, t, r, l, u, o) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Gu(Error(m(422))), cl(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), u = ot(u, l, o, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && _t(n, e.child, null, o), n.child.memoizedState = qu(o), n.memoizedState = Ju, u);
    if (!(n.mode & 1))
      return cl(e, n, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var i = r.dgst;
      return r = i, u = Error(m(419)), r = Gu(u, r, void 0), cl(e, n, o, r);
    }
    if (i = (o & e.childLanes) !== 0, De || i) {
      if (r = ce, r !== null) {
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
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Cn(e, l), on(r, e, l, -1));
      }
      return ho(), r = Gu(Error(m(421))), cl(e, n, o, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = kf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Ve = In(l.nextSibling), Ae = n, X = !0, tn = null, e !== null && ($e[Ye++] = kn, $e[Ye++] = En, $e[Ye++] = Jn, kn = e.id, En = e.overflow, Jn = n), n = bu(n, r.children), n.flags |= 4096, n);
  }
  function Ws(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Tu(e.return, n, t);
  }
  function eo(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function $s(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (Me(e, n, r.children, t), r = q.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ws(e, t, n);
            else if (e.tag === 19)
              Ws(e, t, n);
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
    if ($(q, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && ll(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), eo(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && ll(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          eo(n, !0, t, null, u);
          break;
        case "together":
          eo(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function fl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function _n(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = $n(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = $n(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function af(e, n, t) {
    switch (n.tag) {
      case 3:
        Qs(n), Et();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        je(n.type) && Gr(n);
        break;
      case 4:
        Ou(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        $(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? ($(q, q.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Hs(e, n, t) : ($(q, q.current & 1), e = _n(e, n, t), e !== null ? e.sibling : null);
        $(q, q.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return $s(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(q, q.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Us(e, n, t);
    }
    return _n(e, n, t);
  }
  var Ys, no, Gs, Ks;
  Ys = function(e, n) {
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
  }, no = function() {
  }, Gs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(pn.current);
      var u = null;
      switch (t) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), u = [];
          break;
        case "select":
          l = a({}, l, { value: void 0 }), r = a({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Dl(e, l), r = Dl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Ol(t, r);
      var o;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var i = l[p];
            for (o in i)
              i.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (de.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null))
          if (p === "style")
            if (i) {
              for (o in i)
                !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
              for (o in s)
                s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
            } else
              t || (u || (u = []), u.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (de.hasOwnProperty(p) ? (s != null && p === "onScroll" && Y("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Ks = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function fr(e, n) {
    if (!X)
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
  function ke(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function cf(e, n, t) {
    var r = n.pendingProps;
    switch (Cu(n), n.tag) {
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
        return ke(n), null;
      case 1:
        return je(n.type) && Yr(), ke(n), null;
      case 3:
        return r = n.stateNode, Mt(), G(Pe), G(we), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (po(tn), tn = null))), no(e, n), ke(n), null;
      case 5:
        Ru(n);
        var l = et(or.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Gs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(m(166));
            return ke(n), null;
          }
          if (e = et(pn.current), Jr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[dn] = n, r[nr] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                Y("cancel", r), Y("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++)
                  Y(qt[l], r);
                break;
              case "source":
                Y("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  r
                ), Y("load", r);
                break;
              case "details":
                Y("toggle", r);
                break;
              case "input":
                No(r, u), Y("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Y("invalid", r);
                break;
              case "textarea":
                To(r, u), Y("invalid", r);
            }
            Ol(t, u), l = null;
            for (var o in u)
              if (u.hasOwnProperty(o)) {
                var i = u[o];
                o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Hr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Hr(
                  r.textContent,
                  i,
                  e
                ), l = ["children", "" + i]) : de.hasOwnProperty(o) && i != null && o === "onScroll" && Y("scroll", r);
              }
            switch (t) {
              case "input":
                Sr(r), zo(r, u, !0);
                break;
              case "textarea":
                Sr(r), jo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Wr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Do(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[dn] = n, e[nr] = r, Ys(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (o = Rl(t, r), t) {
                case "dialog":
                  Y("cancel", e), Y("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Y("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++)
                    Y(qt[l], e);
                  l = r;
                  break;
                case "source":
                  Y("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Y(
                    "error",
                    e
                  ), Y("load", e), l = r;
                  break;
                case "details":
                  Y("toggle", e), l = r;
                  break;
                case "input":
                  No(e, r), l = Tl(e, r), Y("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = a({}, r, { value: void 0 }), Y("invalid", e);
                  break;
                case "textarea":
                  To(e, r), l = Dl(e, r), Y("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ol(t, l), i = l;
              for (u in i)
                if (i.hasOwnProperty(u)) {
                  var s = i[u];
                  u === "style" ? Ro(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Io(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Dt(e, s) : typeof s == "number" && Dt(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (de.hasOwnProperty(u) ? s != null && u === "onScroll" && Y("scroll", e) : s != null && Je(e, u, s, o));
                }
              switch (t) {
                case "input":
                  Sr(e), zo(e, r, !1);
                  break;
                case "textarea":
                  Sr(e), jo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + U(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? it(e, !!r.multiple, u, !1) : r.defaultValue != null && it(
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
        return ke(n), null;
      case 6:
        if (e && n.stateNode != null)
          Ks(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(m(166));
          if (t = et(or.current), et(pn.current), Jr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (u = r.nodeValue !== t) && (e = Ae, e !== null))
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return ke(n), null;
      case 13:
        if (G(q), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (X && Ve !== null && n.mode & 1 && !(n.flags & 128))
            Xi(), Et(), n.flags |= 98560, u = !1;
          else if (u = Jr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u)
                throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u)
                throw Error(m(317));
              u[dn] = n;
            } else
              Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ke(n), u = !1;
          } else
            tn !== null && (po(tn), tn = null), u = !0;
          if (!u)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || q.current & 1 ? ie === 0 && (ie = 3) : ho())), n.updateQueue !== null && (n.flags |= 4), ke(n), null);
      case 4:
        return Mt(), no(e, n), e === null && bt(n.stateNode.containerInfo), ke(n), null;
      case 10:
        return zu(n.type._context), ke(n), null;
      case 17:
        return je(n.type) && Yr(), ke(n), null;
      case 19:
        if (G(q), u = n.memoizedState, u === null)
          return ke(n), null;
        if (r = (n.flags & 128) !== 0, o = u.rendering, o === null)
          if (r)
            fr(u, !1);
          else {
            if (ie !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (o = ll(e), o !== null) {
                  for (n.flags |= 128, fr(u, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    u = t, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return $(q, q.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null && te() > Tt && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = ll(o), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), fr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !X)
                return ke(n), null;
            } else
              2 * te() - u.renderingStartTime > Tt && t !== 1073741824 && (n.flags |= 128, r = !0, fr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (o.sibling = n.child, n.child = o) : (t = u.last, t !== null ? t.sibling = o : n.child = o, u.last = o);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = te(), n.sibling = null, t = q.current, $(q, r ? t & 1 | 2 : t & 1), n) : (ke(n), null);
      case 22:
      case 23:
        return vo(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Qe & 1073741824 && (ke(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ke(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function ff(e, n) {
    switch (Cu(n), n.tag) {
      case 1:
        return je(n.type) && Yr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Mt(), G(Pe), G(we), Uu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ru(n), null;
      case 13:
        if (G(q), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return G(q), null;
      case 4:
        return Mt(), null;
      case 10:
        return zu(n.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Ee = !1, df = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Lt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ne(e, n, r);
        }
      else
        t.current = null;
  }
  function to(e, n, t) {
    try {
      t();
    } catch (r) {
      ne(e, n, r);
    }
  }
  var Zs = !1;
  function pf(e, n) {
    if (mu = jr, e = Mi(), ou(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, v = null;
            n:
              for (; ; ) {
                for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (k = g.firstChild) !== null; )
                  v = g, g = k;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (v === t && ++p === l && (i = o), v === u && ++y === r && (s = o), (k = g.nextSibling) !== null)
                    break;
                  g = v, v = g.parentNode;
                }
                g = k;
              }
            t = i === -1 || s === -1 ? null : { start: i, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (vu = { focusedElem: e, selectionRange: t }, jr = !1, E = n; E !== null; )
      if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, E = e;
      else
        for (; E !== null; ) {
          n = E;
          try {
            var C = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var x = C.memoizedProps, re = C.memoizedState, f = n.stateNode, c = f.getSnapshotBeforeUpdate(n.elementType === n.type ? x : rn(n.type, x), re);
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
            ne(n, n.return, w);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, E = e;
            break;
          }
          E = n.return;
        }
    return C = Zs, Zs = !1, C;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && to(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, n) {
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
  function ro(e) {
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
  function Xs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Xs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[nr], delete n[wu], delete n[Kc], delete n[Zc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Js(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qs(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Js(e.return))
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
  function lo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null))
      for (lo(e, n, t), e = e.sibling; e !== null; )
        lo(e, n, t), e = e.sibling;
  }
  function uo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (uo(e, n, t), e = e.sibling; e !== null; )
        uo(e, n, t), e = e.sibling;
  }
  var me = null, ln = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; )
      bs(e, n, t), t = t.sibling;
  }
  function bs(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function")
      try {
        fn.onCommitFiberUnmount(Mr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Ee || Lt(t, n);
      case 6:
        var r = me, l = ln;
        me = null, Vn(e, n, t), me = r, ln = l, me !== null && (ln ? (e = me, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : me.removeChild(t.stateNode));
        break;
      case 18:
        me !== null && (ln ? (e = me, t = t.stateNode, e.nodeType === 8 ? gu(e.parentNode, t) : e.nodeType === 1 && gu(e, t), Wt(e)) : gu(me, t.stateNode));
        break;
      case 4:
        r = me, l = ln, me = t.stateNode.containerInfo, ln = !0, Vn(e, n, t), me = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ee && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && to(t, n, o), l = l.next;
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (!Ee && (Lt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (i) {
            ne(t, n, i);
          }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Ee = (r = Ee) || t.memoizedState !== null, Vn(e, n, t), Ee = r) : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function ea(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new df()), n.forEach(function(r) {
        var l = Ef.bind(null, e, r);
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
          var u = e, o = n, i = o;
          e:
            for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  me = i.stateNode, ln = !1;
                  break e;
                case 3:
                  me = i.stateNode.containerInfo, ln = !0;
                  break e;
                case 4:
                  me = i.stateNode.containerInfo, ln = !0;
                  break e;
              }
              i = i.return;
            }
          if (me === null)
            throw Error(m(160));
          bs(u, o, l), me = null, ln = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          ne(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        na(n, e), n = n.sibling;
  }
  function na(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(n, e), vn(e), r & 4) {
          try {
            dr(3, e, e.return), pl(3, e);
          } catch (x) {
            ne(e, e.return, x);
          }
          try {
            dr(5, e, e.return);
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        break;
      case 1:
        un(n, e), vn(e), r & 512 && t !== null && Lt(t, t.return);
        break;
      case 5:
        if (un(n, e), vn(e), r & 512 && t !== null && Lt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = t !== null ? t.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              i === "input" && u.type === "radio" && u.name != null && Lo(l, u), Rl(i, o);
              var p = Rl(i, u);
              for (o = 0; o < s.length; o += 2) {
                var y = s[o], g = s[o + 1];
                y === "style" ? Ro(l, g) : y === "dangerouslySetInnerHTML" ? Io(l, g) : y === "children" ? Dt(l, g) : Je(l, y, g, p);
              }
              switch (i) {
                case "input":
                  Pl(l, u);
                  break;
                case "textarea":
                  Po(l, u);
                  break;
                case "select":
                  var v = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var k = u.value;
                  k != null ? it(l, !!u.multiple, k, !1) : v !== !!u.multiple && (u.defaultValue != null ? it(
                    l,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  ) : it(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (x) {
              ne(e, e.return, x);
            }
        }
        break;
      case 6:
        if (un(n, e), vn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (x) {
            ne(e, e.return, x);
          }
        }
        break;
      case 3:
        if (un(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wt(n.containerInfo);
          } catch (x) {
            ne(e, e.return, x);
          }
        break;
      case 4:
        un(n, e), vn(e);
        break;
      case 13:
        un(n, e), vn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (so = te())), r & 4 && ea(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Ee = (p = Ee) || y, un(n, e), Ee = p) : un(n, e), vn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (v = E, k = v.child, v.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, v, v.return);
                    break;
                  case 1:
                    Lt(v, v.return);
                    var C = v.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      r = v, t = v.return;
                      try {
                        n = r, C.props = n.memoizedProps, C.state = n.memoizedState, C.componentWillUnmount();
                      } catch (x) {
                        ne(r, t, x);
                      }
                    }
                    break;
                  case 5:
                    Lt(v, v.return);
                    break;
                  case 22:
                    if (v.memoizedState !== null) {
                      la(g);
                      continue;
                    }
                }
                k !== null ? (k.return = v, E = k) : la(g);
              }
              y = y.sibling;
            }
          e:
            for (y = null, g = e; ; ) {
              if (g.tag === 5) {
                if (y === null) {
                  y = g;
                  try {
                    l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Oo("display", o));
                  } catch (x) {
                    ne(e, e.return, x);
                  }
                }
              } else if (g.tag === 6) {
                if (y === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (x) {
                    ne(e, e.return, x);
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
        un(n, e), vn(e), r & 4 && ea(e);
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
            if (Js(t)) {
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
            r.flags & 32 && (Dt(l, ""), r.flags &= -33);
            var u = qs(e);
            uo(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = qs(e);
            lo(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ne(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function mf(e, n, t) {
    E = e, ta(e);
  }
  function ta(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Ee;
          i = dl;
          var p = Ee;
          if (dl = o, (Ee = s) && !p)
            for (E = l; E !== null; )
              o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? ua(l) : s !== null ? (s.return = o, E = s) : ua(l);
          for (; u !== null; )
            E = u, ta(u), u = u.sibling;
          E = l, dl = i, Ee = p;
        }
        ra(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : ra(e);
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ee || pl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Ee)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = n.updateQueue;
                u !== null && es(n, u, r);
                break;
              case 3:
                var o = n.updateQueue;
                if (o !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  es(n, o, t);
                }
                break;
              case 5:
                var i = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = i;
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
          Ee || n.flags & 512 && ro(n);
        } catch (v) {
          ne(n, n.return, v);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ua(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              pl(4, n);
            } catch (s) {
              ne(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ne(n, l, s);
              }
            }
            var u = n.return;
            try {
              ro(n);
            } catch (s) {
              ne(n, u, s);
            }
            break;
          case 5:
            var o = n.return;
            try {
              ro(n);
            } catch (s) {
              ne(n, o, s);
            }
        }
      } catch (s) {
        ne(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var vf = Math.ceil, ml = ge.ReactCurrentDispatcher, oo = ge.ReactCurrentOwner, Ze = ge.ReactCurrentBatchConfig, O = 0, ce = null, le = null, ve = 0, Qe = 0, zt = On(0), ie = 0, pr = null, tt = 0, vl = 0, io = 0, mr = null, Ie = null, so = 0, Tt = 1 / 0, Mn = null, hl = !1, ao = null, Qn = null, yl = !1, Bn = null, gl = 0, vr = 0, co = null, wl = -1, Sl = 0;
  function Ne() {
    return O & 6 ? te() : wl !== -1 ? wl : wl = te();
  }
  function Hn(e) {
    return e.mode & 1 ? O & 2 && ve !== 0 ? ve & -ve : Jc.transition !== null ? (Sl === 0 && (Sl = Jo()), Sl) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : oi(e.type)), e) : 1;
  }
  function on(e, n, t, r) {
    if (50 < vr)
      throw vr = 0, co = null, Error(m(185));
    At(e, t, r), (!(O & 2) || e !== ce) && (e === ce && (!(O & 2) && (vl |= t), ie === 4 && Wn(e, ve)), Oe(e, r), t === 1 && O === 0 && !(n.mode & 1) && (Tt = te() + 500, Kr && Fn()));
  }
  function Oe(e, n) {
    var t = e.callbackNode;
    Ja(e, n);
    var r = zr(e, e === ce ? ve : 0);
    if (r === 0)
      t !== null && Ko(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Ko(t), n === 1)
        e.tag === 0 ? Xc(ia.bind(null, e)) : $i(ia.bind(null, e)), Yc(function() {
          !(O & 6) && Fn();
        }), t = null;
      else {
        switch (qo(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = Zo;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = Xo;
            break;
          default:
            t = _r;
        }
        t = va(t, oa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function oa(e, n) {
    if (wl = -1, Sl = 0, O & 6)
      throw Error(m(327));
    var t = e.callbackNode;
    if (Pt() && e.callbackNode !== t)
      return null;
    var r = zr(e, e === ce ? ve : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = kl(e, r);
    else {
      n = r;
      var l = O;
      O |= 2;
      var u = aa();
      (ce !== e || ve !== n) && (Mn = null, Tt = te() + 500, lt(e, n));
      do
        try {
          gf();
          break;
        } catch (i) {
          sa(e, i);
        }
      while (!0);
      Lu(), ml.current = u, O = l, le !== null ? n = 0 : (ce = null, ve = 0, n = ie);
    }
    if (n !== 0) {
      if (n === 2 && (l = Wl(e), l !== 0 && (r = l, n = fo(e, l))), n === 1)
        throw t = pr, lt(e, 0), Wn(e, r), Oe(e, te()), t;
      if (n === 6)
        Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !hf(l) && (n = kl(e, r), n === 2 && (u = Wl(e), u !== 0 && (r = u, n = fo(e, u))), n === 1))
          throw t = pr, lt(e, 0), Wn(e, r), Oe(e, te()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Ie, Mn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = so + 500 - te(), 10 < n)) {
              if (zr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ne(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = yu(ut.bind(null, e, Ie, Mn), n);
              break;
            }
            ut(e, Ie, Mn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - en(r);
              u = 1 << o, o = n[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = te() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = yu(ut.bind(null, e, Ie, Mn), r);
              break;
            }
            ut(e, Ie, Mn);
            break;
          case 5:
            ut(e, Ie, Mn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Oe(e, te()), e.callbackNode === t ? oa.bind(null, e) : null;
  }
  function fo(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = kl(e, n), e !== 2 && (n = Ie, Ie = t, n !== null && po(n)), e;
  }
  function po(e) {
    Ie === null ? Ie = e : Ie.push.apply(Ie, e);
  }
  function hf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], u = l.getSnapshot;
            l = l.value;
            try {
              if (!nn(u(), l))
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
    for (n &= ~io, n &= ~vl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ia(e) {
    if (O & 6)
      throw Error(m(327));
    Pt();
    var n = zr(e, 0);
    if (!(n & 1))
      return Oe(e, te()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && (n = r, t = fo(e, r));
    }
    if (t === 1)
      throw t = pr, lt(e, 0), Wn(e, n), Oe(e, te()), t;
    if (t === 6)
      throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ut(e, Ie, Mn), Oe(e, te()), null;
  }
  function mo(e, n) {
    var t = O;
    O |= 1;
    try {
      return e(n);
    } finally {
      O = t, O === 0 && (Tt = te() + 500, Kr && Fn());
    }
  }
  function rt(e) {
    Bn !== null && Bn.tag === 0 && !(O & 6) && Pt();
    var n = O;
    O |= 1;
    var t = Ze.transition, r = V;
    try {
      if (Ze.transition = null, V = 1, e)
        return e();
    } finally {
      V = r, Ze.transition = t, O = n, !(O & 6) && Fn();
    }
  }
  function vo() {
    Qe = zt.current, G(zt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, $c(t)), le !== null)
      for (t = le.return; t !== null; ) {
        var r = t;
        switch (Cu(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Yr();
            break;
          case 3:
            Mt(), G(Pe), G(we), Uu();
            break;
          case 5:
            Ru(r);
            break;
          case 4:
            Mt();
            break;
          case 13:
            G(q);
            break;
          case 19:
            G(q);
            break;
          case 10:
            zu(r.type._context);
            break;
          case 22:
          case 23:
            vo();
        }
        t = t.return;
      }
    if (ce = e, le = e = $n(e.current, null), ve = Qe = n, ie = 0, pr = null, io = vl = tt = 0, Ie = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++)
        if (t = bn[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, u = t.pending;
          if (u !== null) {
            var o = u.next;
            u.next = l, r.next = o;
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function sa(e, n) {
    do {
      var t = le;
      try {
        if (Lu(), ul.current = al, ol) {
          for (var r = b.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ol = !1;
        }
        if (nt = 0, ae = oe = b = null, ir = !1, sr = 0, oo.current = null, t === null || t.return === null) {
          ie = 1, pr = n, le = null;
          break;
        }
        e: {
          var u = e, o = t.return, i = t, s = n;
          if (n = ve, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var v = y.alternate;
              v ? (y.updateQueue = v.updateQueue, y.memoizedState = v.memoizedState, y.lanes = v.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Ds(o);
            if (k !== null) {
              k.flags &= -257, Is(k, o, i, u, n), k.mode & 1 && js(u, p, n), n = k, s = p;
              var C = n.updateQueue;
              if (C === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), n.updateQueue = x;
              } else
                C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                js(u, p, n), ho();
                break e;
              }
              s = Error(m(426));
            }
          } else if (X && i.mode & 1) {
            var re = Ds(o);
            if (re !== null) {
              !(re.flags & 65536) && (re.flags |= 256), Is(re, o, i, u, n), Mu(Nt(s, i));
              break e;
            }
          }
          u = s = Nt(s, i), ie !== 4 && (ie = 2), mr === null ? mr = [u] : mr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Ts(u, s, n);
                bi(u, f);
                break e;
              case 1:
                i = s;
                var c = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Qn === null || !Qn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = Ps(u, i, n);
                  bi(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        fa(t);
      } catch (_) {
        n = _, le === t && t !== null && (le = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function aa() {
    var e = ml.current;
    return ml.current = al, e === null ? al : e;
  }
  function ho() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ce === null || !(tt & 268435455) && !(vl & 268435455) || Wn(ce, ve);
  }
  function kl(e, n) {
    var t = O;
    O |= 2;
    var r = aa();
    (ce !== e || ve !== n) && (Mn = null, lt(e, n));
    do
      try {
        yf();
        break;
      } catch (l) {
        sa(e, l);
      }
    while (!0);
    if (Lu(), O = t, ml.current = r, le !== null)
      throw Error(m(261));
    return ce = null, ve = 0, ie;
  }
  function yf() {
    for (; le !== null; )
      ca(le);
  }
  function gf() {
    for (; le !== null && !Ba(); )
      ca(le);
  }
  function ca(e) {
    var n = ma(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps, n === null ? fa(e) : le = n, oo.current = null;
  }
  function fa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = ff(t, n), t !== null) {
          t.flags &= 32767, le = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ie = 6, le = null;
          return;
        }
      } else if (t = cf(t, n, Qe), t !== null) {
        le = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        le = n;
        return;
      }
      le = n = e;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function ut(e, n, t) {
    var r = V, l = Ze.transition;
    try {
      Ze.transition = null, V = 1, wf(e, n, t, r);
    } finally {
      Ze.transition = l, V = r;
    }
    return null;
  }
  function wf(e, n, t, r) {
    do
      Pt();
    while (Bn !== null);
    if (O & 6)
      throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (qa(e, u), e === ce && (le = ce = null, ve = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || yl || (yl = !0, va(_r, function() {
      return Pt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ze.transition, Ze.transition = null;
      var o = V;
      V = 1;
      var i = O;
      O |= 4, oo.current = null, pf(e, t), na(t, e), Uc(vu), jr = !!mu, vu = mu = null, e.current = t, mf(t), Ha(), O = i, V = o, Ze.transition = u;
    } else
      e.current = t;
    if (yl && (yl = !1, Bn = e, gl = l), u = e.pendingLanes, u === 0 && (Qn = null), Ya(t.stateNode), Oe(e, te()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl)
      throw hl = !1, e = ao, ao = null, e;
    return gl & 1 && e.tag !== 0 && Pt(), u = e.pendingLanes, u & 1 ? e === co ? vr++ : (vr = 0, co = e) : vr = 0, Fn(), null;
  }
  function Pt() {
    if (Bn !== null) {
      var e = qo(gl), n = Ze.transition, t = V;
      try {
        if (Ze.transition = null, V = 16 > e ? 16 : e, Bn === null)
          var r = !1;
        else {
          if (e = Bn, Bn = null, gl = 0, O & 6)
            throw Error(m(331));
          var l = O;
          for (O |= 4, E = e.current; E !== null; ) {
            var u = E, o = u.child;
            if (E.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null)
                      g.return = y, E = g;
                    else
                      for (; E !== null; ) {
                        y = E;
                        var v = y.sibling, k = y.return;
                        if (Xs(y), y === p) {
                          E = null;
                          break;
                        }
                        if (v !== null) {
                          v.return = k, E = v;
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var re = x.sibling;
                      x.sibling = null, x = re;
                    } while (x !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null)
              o.return = u, E = o;
            else
              e:
                for (; E !== null; ) {
                  if (u = E, u.flags & 2048)
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(9, u, u.return);
                    }
                  var f = u.sibling;
                  if (f !== null) {
                    f.return = u.return, E = f;
                    break e;
                  }
                  E = u.return;
                }
          }
          var c = e.current;
          for (E = c; E !== null; ) {
            o = E;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null)
              d.return = o, E = d;
            else
              e:
                for (o = c; E !== null; ) {
                  if (i = E, i.flags & 2048)
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          pl(9, i);
                      }
                    } catch (_) {
                      ne(i, i.return, _);
                    }
                  if (i === o) {
                    E = null;
                    break e;
                  }
                  var w = i.sibling;
                  if (w !== null) {
                    w.return = i.return, E = w;
                    break e;
                  }
                  E = i.return;
                }
          }
          if (O = l, Fn(), fn && typeof fn.onPostCommitFiberRoot == "function")
            try {
              fn.onPostCommitFiberRoot(Mr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        V = t, Ze.transition = n;
      }
    }
    return !1;
  }
  function da(e, n, t) {
    n = Nt(t, n), n = Ts(e, n, 1), e = An(e, n, 1), n = Ne(), e !== null && (At(e, 1, n), Oe(e, n));
  }
  function ne(e, n, t) {
    if (e.tag === 3)
      da(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          da(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qn === null || !Qn.has(r))) {
            e = Nt(t, e), e = Ps(n, e, 1), n = An(n, e, 1), e = Ne(), n !== null && (At(n, 1, e), Oe(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function Sf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Ne(), e.pingedLanes |= e.suspendedLanes & t, ce === e && (ve & t) === t && (ie === 4 || ie === 3 && (ve & 130023424) === ve && 500 > te() - so ? lt(e, 0) : io |= t), Oe(e, n);
  }
  function pa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Lr, Lr <<= 1, !(Lr & 130023424) && (Lr = 4194304)) : n = 1);
    var t = Ne();
    e = Cn(e, n), e !== null && (At(e, n, t), Oe(e, t));
  }
  function kf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), pa(e, t);
  }
  function Ef(e, n) {
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
    r !== null && r.delete(n), pa(e, t);
  }
  var ma;
  ma = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Pe.current)
        De = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return De = !1, af(e, n, t);
        De = !!(e.flags & 131072);
      }
    else
      De = !1, X && n.flags & 1048576 && Yi(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        fl(e, n), e = n.pendingProps;
        var l = wt(n, we.current);
        xt(n, t), l = Qu(null, n, r, e, l, t);
        var u = Bu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, je(r) ? (u = !0, Gr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ju(n), l.updater = tl, n.stateNode = l, l._reactInternals = n, Iu(n, r, e, t), n = Xu(null, n, r, !0, u, t)) : (n.tag = 0, X && u && Eu(n), Me(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (fl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = xf(r), e = rn(r, e), l) {
            case 0:
              n = Zu(null, n, r, e, t);
              break e;
            case 1:
              n = Vs(null, n, r, e, t);
              break e;
            case 11:
              n = Os(null, n, r, e, t);
              break e;
            case 14:
              n = Rs(null, n, r, rn(r.type, e), t);
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
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Zu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Vs(e, n, r, l, t);
      case 3:
        e: {
          if (Qs(n), e === null)
            throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, qi(e, n), nl(n, r, null, t);
          var o = n.memoizedState;
          if (r = o.element, u.isDehydrated)
            if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
              l = Nt(Error(m(423)), n), n = Bs(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = Nt(Error(m(424)), n), n = Bs(e, n, r, t, l);
              break e;
            } else
              for (Ve = In(n.stateNode.containerInfo.firstChild), Ae = n, X = !0, tn = null, t = is(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = _n(e, n, t);
              break e;
            }
            Me(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ss(n), e === null && _u(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, hu(r, l) ? o = null : u !== null && hu(r, u) && (n.flags |= 32), As(e, n), Me(e, n, o, t), n.child;
      case 6:
        return e === null && _u(n), null;
      case 13:
        return Hs(e, n, t);
      case 4:
        return Ou(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : Me(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Os(e, n, r, l, t);
      case 7:
        return Me(e, n, n.pendingProps, t), n.child;
      case 8:
        return Me(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Me(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, o = l.value, $(qr, r._currentValue), r._currentValue = o, u !== null)
            if (nn(u.value, o)) {
              if (u.children === l.children && !Pe.current) {
                n = _n(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var i = u.dependencies;
                if (i !== null) {
                  o = u.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        s = xn(-1, t & -t), s.tag = 2;
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                        }
                      }
                      u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Tu(
                        u.return,
                        t,
                        n
                      ), i.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10)
                  o = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (o = u.return, o === null)
                    throw Error(m(341));
                  o.lanes |= t, i = o.alternate, i !== null && (i.lanes |= t), Tu(o, t, n), o = u.sibling;
                } else
                  o = u.child;
                if (o !== null)
                  o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === n) {
                      o = null;
                      break;
                    }
                    if (u = o.sibling, u !== null) {
                      u.return = o.return, o = u;
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          Me(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = Ge(l), r = r(l), n.flags |= 1, Me(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), Rs(e, n, r, l, t);
      case 15:
        return Fs(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), fl(e, n), n.tag = 1, je(r) ? (e = !0, Gr(n)) : e = !1, xt(n, t), rs(n, r, l), Iu(n, r, l, t), Xu(null, n, r, !0, e, t);
      case 19:
        return $s(e, n, t);
      case 22:
        return Us(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function va(e, n) {
    return Go(e, n);
  }
  function Cf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xe(e, n, t, r) {
    return new Cf(e, n, t, r);
  }
  function yo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xf(e) {
    if (typeof e == "function")
      return yo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an)
        return 11;
      if (e === cn)
        return 14;
    }
    return 2;
  }
  function $n(e, n) {
    var t = e.alternate;
    return t === null ? (t = Xe(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function El(e, n, t, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function")
      yo(e) && (o = 1);
    else if (typeof e == "string")
      o = 5;
    else
      e:
        switch (e) {
          case Le:
            return ot(t.children, l, u, n);
          case We:
            o = 8, l |= 8;
            break;
          case Nn:
            return e = Xe(12, t, n, l | 2), e.elementType = Nn, e.lanes = u, e;
          case Fe:
            return e = Xe(13, t, n, l), e.elementType = Fe, e.lanes = u, e;
          case be:
            return e = Xe(19, t, n, l), e.elementType = be, e.lanes = u, e;
          case ee:
            return Cl(t, l, u, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gn:
                  o = 10;
                  break e;
                case Gn:
                  o = 9;
                  break e;
                case an:
                  o = 11;
                  break e;
                case cn:
                  o = 14;
                  break e;
                case ze:
                  o = 16, r = null;
                  break e;
              }
            throw Error(m(130, e == null ? e : typeof e, ""));
        }
    return n = Xe(o, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function ot(e, n, t, r) {
    return e = Xe(7, e, r, n), e.lanes = t, e;
  }
  function Cl(e, n, t, r) {
    return e = Xe(22, e, r, n), e.elementType = ee, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function go(e, n, t) {
    return e = Xe(6, e, null, n), e.lanes = t, e;
  }
  function wo(e, n, t) {
    return n = Xe(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function _f(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $l(0), this.expirationTimes = $l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $l(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function So(e, n, t, r, l, u, o, i, s) {
    return e = new _f(e, n, t, i, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Xe(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ju(u), e;
  }
  function Mf(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ha(e) {
    if (!e)
      return Rn;
    e = e._reactInternals;
    e: {
      if (Kn(e) !== e || e.tag !== 1)
        throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (je(n.type)) {
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
      if (je(t))
        return Hi(e, t, n);
    }
    return n;
  }
  function ya(e, n, t, r, l, u, o, i, s) {
    return e = So(t, r, !0, e, l, u, o, i, s), e.context = ha(null), t = e.current, r = Ne(), l = Hn(t), u = xn(r, l), u.callback = n ?? null, An(t, u, l), e.current.lanes = l, At(e, l, r), Oe(e, r), e;
  }
  function xl(e, n, t, r) {
    var l = n.current, u = Ne(), o = Hn(l);
    return t = ha(t), n.context === null ? n.context = t : n.pendingContext = t, n = xn(u, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, o), e !== null && (on(e, l, o, u), el(e, l, o)), o;
  }
  function _l(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ga(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ko(e, n) {
    ga(e, n), (e = e.alternate) && ga(e, n);
  }
  function Nf() {
    return null;
  }
  var wa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Eo(e) {
    this._internalRoot = e;
  }
  Ml.prototype.render = Eo.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(m(409));
    xl(e, n, null, null);
  }, Ml.prototype.unmount = Eo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        xl(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function Ml(e) {
    this._internalRoot = e;
  }
  Ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ni();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Pn.length && n !== 0 && n < Pn[t].priority; t++)
        ;
      Pn.splice(t, 0, e), t === 0 && li(e);
    }
  };
  function Co(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Sa() {
  }
  function Lf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = _l(o);
          u.call(p);
        };
      }
      var o = ya(n, r, e, 0, null, !1, !1, "", Sa);
      return e._reactRootContainer = o, e[wn] = o.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), o;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = _l(s);
        i.call(p);
      };
    }
    var s = So(e, 0, !1, null, null, !1, !1, "", Sa);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      xl(n, s, t, r);
    }), s;
  }
  function Ll(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = _l(o);
          i.call(s);
        };
      }
      xl(n, o, e, l);
    } else
      o = Lf(t, n, e, l, r);
    return _l(o);
  }
  bo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Yl(n, t | 1), Oe(n, te()), !(O & 6) && (Tt = te() + 500, Fn()));
        }
        break;
      case 13:
        rt(function() {
          var r = Cn(e, 1);
          if (r !== null) {
            var l = Ne();
            on(r, e, 1, l);
          }
        }), ko(e, 1);
    }
  }, Gl = function(e) {
    if (e.tag === 13) {
      var n = Cn(e, 134217728);
      if (n !== null) {
        var t = Ne();
        on(n, e, 134217728, t);
      }
      ko(e, 134217728);
    }
  }, ei = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = Cn(e, n);
      if (t !== null) {
        var r = Ne();
        on(t, e, n, r);
      }
      ko(e, n);
    }
  }, ni = function() {
    return V;
  }, ti = function(e, n) {
    var t = V;
    try {
      return V = e, n();
    } finally {
      V = t;
    }
  }, Al = function(e, n, t) {
    switch (n) {
      case "input":
        if (Pl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = $r(r);
              if (!l)
                throw Error(m(90));
              Mo(r), Pl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Po(e, t);
        break;
      case "select":
        n = t.value, n != null && it(e, !!t.multiple, n, !1);
    }
  }, Vo = mo, Qo = rt;
  var zf = { usingClientEntryPoint: !1, Events: [tr, yt, $r, Uo, Ao, mo] }, hr = { findFiberByHostInstance: Zn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Tf = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = $o(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: hr.findFiberByHostInstance || Nf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        Mr = zl.inject(Tf), fn = zl;
      } catch {
      }
  }
  return Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf, Re.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Co(n))
      throw Error(m(200));
    return Mf(e, n, null, t);
  }, Re.createRoot = function(e, n) {
    if (!Co(e))
      throw Error(m(299));
    var t = !1, r = "", l = wa;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = So(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new Eo(n);
  }, Re.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = $o(n), e = e === null ? null : e.stateNode, e;
  }, Re.flushSync = function(e) {
    return rt(e);
  }, Re.hydrate = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Ll(null, e, n, !0, t);
  }, Re.hydrateRoot = function(e, n, t) {
    if (!Co(e))
      throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", o = wa;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = ya(n, null, e, 1, t ?? null, l, !1, u, o), e[wn] = n.current, bt(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new Ml(n);
  }, Re.render = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Ll(null, e, n, !1, t);
  }, Re.unmountComponentAtNode = function(e) {
    if (!Nl(e))
      throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Ll(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, Re.unstable_batchedUpdates = mo, Re.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t))
      throw Error(m(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(m(38));
    return Ll(e, n, t, !1, r);
  }, Re.version = "18.2.0-next-9e3b772b8-20220608", Re;
}
function ja() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ja);
    } catch (N) {
      console.error(N);
    }
}
ja(), Pa.exports = Uf();
var Af = Pa.exports, Da, Ma = Af;
Da = Ma.createRoot, Ma.hydrateRoot;
const Na = "data:image/svg+xml,%3csvg%20class='b24-crm-button-icon%20b24-crm-button-icon-active'%20width='28'%20height='29'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20class='b24-crm-button-chat-icon'%20d='M25.99%207.744a2%202%200%20012%202v11.49a2%202%200%2001-2%202h-1.044v5.162l-4.752-5.163h-7.503a2%202%200%2001-2-2v-1.872h10.073a3%203%200%20003-3V7.744zM19.381%200a2%202%200%20012%202v12.78a2%202%200%2001-2%202h-8.69l-5.94%206.453V16.78H2a2%202%200%2001-2-2V2a2%202%200%20012-2h17.382z'%20fill='%20%23555555'%20fill-rule='evenodd'%3e%3c/path%3e%3c/svg%3e", Vf = "data:image/svg+xml,%3csvg%20class='b24-widget-button-icon%20b24-widget-button-close-item'%20xmlns='http://www.w3.org/2000/svg'%20width='29'%20height='29'%20viewBox='0%200%2029%2029'%3e%3cpath%20fill='%23FFF'%20fill-rule='evenodd'%20d='M18.866%2014.45l9.58-9.582L24.03.448l-9.587%209.58L4.873.447.455%204.866l9.575%209.587-9.583%209.57%204.418%204.42%209.58-9.577%209.58%209.58%204.42-4.42'%3e%3c/path%3e%3c/svg%3e", Qf = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2048C37.2548%2048%2048%2037.2548%2048%2024C48%2010.7452%2037.2548%200%2024%200C10.7452%200%200%2010.7452%200%2024C0%2037.2548%2010.7452%2048%2024%2048Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20d='M8.93822%2025.174C11.7438%2023.6286%2014.8756%2022.3388%2017.8018%2021.0424C22.836%2018.919%2027.8902%2016.8324%2032.9954%2014.8898C33.9887%2014.5588%2035.7734%2014.2351%2035.9484%2015.7071C35.8526%2017.7907%2035.4584%2019.8621%2035.188%2021.9335C34.5017%2026.4887%2033.7085%2031.0283%2032.935%2035.5685C32.6685%2037.0808%2030.774%2037.8637%2029.5618%2036.8959C26.6486%2034.9281%2023.713%2032.9795%2020.837%2030.9661C19.8949%2030.0088%2020.7685%2028.6341%2021.6099%2027.9505C24.0093%2025.5859%2026.5539%2023.5769%2028.8279%2021.0901C29.4413%2019.6088%2027.6289%2020.8572%2027.0311%2021.2397C23.7463%2023.5033%2020.5419%2025.9051%2017.0787%2027.8945C15.3097%2028.8683%2013.2479%2028.0361%2011.4797%2027.4927C9.89428%2026.8363%207.57106%2026.175%208.93806%2025.1741L8.93822%2025.174Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='18.0028'%20y1='2.0016'%20x2='6.0028'%20y2='30'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2337AEE2'/%3e%3cstop%20offset='1'%20stop-color='%231E96C8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", Bf = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGlkPSJTb2NpYWxfSWNvbnMiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM2X19zdHJva2UiPjxnIGlkPSJXaGF0c0FwcCI+PHJlY3QgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMTE0LDMyLjUwOSAgICBjLTEuMjQxLTIuOTcyLTIuMTgyLTMuMDg1LTQuMDYyLTMuMTYxYy0wLjY0LTAuMDM3LTEuMzUzLTAuMDc0LTIuMTQ0LTAuMDc0Yy0yLjQ0NiwwLTUuMDAzLDAuNzE1LTYuNTQ2LDIuMjk1ICAgIGMtMS44OCwxLjkxOS02LjU0NSw2LjM5Ni02LjU0NSwxNS41NzZjMCw5LjE4MSw2LjY5NSwxOC4wNiw3LjU5OCwxOS4zMDNjMC45NDEsMS4yNCwxMy4wNTMsMjAuMzU0LDMxLjg2LDI4LjE0NCAgICBjMTQuNzA3LDYuMDk1LDE5LjA3MSw1LjUzLDIyLjQxOCw0LjgxNmM0Ljg5LTEuMDUzLDExLjAyMS00LjY2NywxMi41NjQtOS4wM2MxLjU0Mi00LjM2NSwxLjU0Mi04LjA5LDEuMDktOC44OCAgICBjLTAuNDUxLTAuNzktMS42OTMtMS4yNC0zLjU3My0yLjE4MmMtMS44OC0wLjk0MS0xMS4wMjEtNS40NTYtMTIuNzUxLTYuMDU4Yy0xLjY5My0wLjYzOS0zLjMxLTAuNDEzLTQuNTg4LDEuMzkzICAgIGMtMS44MDYsMi41MjEtMy41NzMsNS4wOC01LjAwMyw2LjYyMmMtMS4xMjgsMS4yMDQtMi45NzIsMS4zNTUtNC41MTQsMC43MTVjLTIuMDY5LTAuODY0LTcuODYxLTIuODk4LTE1LjAwOC05LjI1NiAgICBjLTUuNTMtNC45MjgtOS4yOTEtMTEuMDYtMTAuMzgxLTEyLjkwNGMtMS4wOTEtMS44ODEtMC4xMTMtMi45NzMsMC43NTItMy45ODhjMC45NDEtMS4xNjcsMS44NDMtMS45OTQsMi43ODMtMy4wODYgICAgYzAuOTQxLTEuMDkxLDEuNDY3LTEuNjU1LDIuMDY5LTIuOTM1YzAuNjQtMS4yNDEsMC4xODgtMi41MjEtMC4yNjMtMy40NjJDNTEuNDE4LDQ1LjQxNCw0Ny42NTcsMzYuMjMzLDQ2LjExNCwzMi41MDl6IE02My45ODEsMCAgICBDMjguNjk5LDAsMCwyOC43MDcsMCw2My45OTljMCwxMy45OTYsNC41MTQsMjYuOTc3LDEyLjE4NywzNy41MTJMNC4yMTIsMTI1LjI5bDI0LjYtNy44NjJDMzguOTMsMTI0LjEyNSw1MS4wMDQsMTI4LDY0LjAxOSwxMjggICAgQzk5LjMwMSwxMjgsMTI4LDk5LjI5MSwxMjgsNjQuMDAxYzAtMzUuMjkyLTI4LjY5OS02My45OTktNjMuOTgxLTYzLjk5OWgtMC4wMzdWMHoiIGZpbGw9IiM2N0MxNUUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IldoYXRzQXBwXzFfIi8+PC9nPjwvZz48L3N2Zz4=", Hf = "_button_160ls_1", Wf = "_storybook_160ls_27", $f = {
  button: Hf,
  storybook: Wf
}, gr = ({ children: N, className: A, ...m }) => /* @__PURE__ */ ue.jsx(
  "button",
  {
    type: "button",
    className: `${$f.button} ${A}`,
    ...m,
    children: N
  }
), Yf = "_wrapper_q7fyp_1", La = {
  wrapper: Yf
}, Gf = ({
  children: N,
  isOpened: A,
  items: m
}) => /* @__PURE__ */ ue.jsxs(ue.Fragment, { children: [
  A && /* @__PURE__ */ ue.jsx("div", { className: La.wrapper, children: m }),
  /* @__PURE__ */ ue.jsx("div", { className: La.container, children: N })
] }), Kf = "_storybook_ab2qb_1", Zf = "_container_ab2qb_6", Xf = "_icon_ab2qb_20", Jf = "_iconCross_ab2qb_26", qf = "_link_ab2qb_34", bf = "_button_ab2qb_41", ed = "_pulse_ab2qb_1", nd = "_chat_ab2qb_60", td = "_message_ab2qb_64", rd = "_cross_ab2qb_69", hn = {
  storybook: Kf,
  container: Zf,
  icon: Xf,
  iconCross: Jf,
  link: qf,
  button: bf,
  pulse: ed,
  chat: nd,
  message: td,
  cross: rd
}, ld = ({
  className: N,
  styles: A,
  setIsOpenChat: m
}) => {
  const [he, de] = wr.useState(!1), Ce = wr.useMemo(
    () => [
      /* @__PURE__ */ ue.jsx(
        "a",
        {
          href: "https://web.telegram.org/a/#7042323177",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ ue.jsx(gr, { className: hn.link, children: /* @__PURE__ */ ue.jsx("img", { src: Qf, alt: "message", className: hn.icon }) })
        },
        0
      ),
      /* @__PURE__ */ ue.jsx(
        "a",
        {
          href: "https://www.whatsapp.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ ue.jsx(gr, { className: hn.link, children: /* @__PURE__ */ ue.jsx("img", { src: Bf, alt: "message", className: hn.icon }) })
        },
        1
      ),
      /* @__PURE__ */ ue.jsx("a", { href: "#", rel: "noopener noreferrer", children: /* @__PURE__ */ ue.jsx(
        gr,
        {
          onClick: () => m(!0),
          className: hn.chat,
          children: /* @__PURE__ */ ue.jsx("img", { src: Na, alt: "message", className: "" })
        }
      ) }, 2)
    ],
    []
  );
  function pe() {
    de(he !== !0);
  }
  return /* @__PURE__ */ ue.jsx("div", { className: `${hn.container} ${N}`, style: A, children: /* @__PURE__ */ ue.jsx(Gf, { items: Ce, isOpened: he, children: he && /* @__PURE__ */ ue.jsx(gr, { className: hn.cross, onClick: pe, children: /* @__PURE__ */ ue.jsx("img", { src: Vf, alt: "message", className: hn.iconCross }) }) || /* @__PURE__ */ ue.jsx(gr, { className: hn.button, onClick: pe, children: /* @__PURE__ */ ue.jsx("img", { src: Na, alt: "cross", className: hn.message }) }) }) });
};
function ud({
  element: N,
  className: A,
  styles: m
}) {
  Da(document.getElementById(N)).render(If.createElement(ld, { className: A, styles: m, setIsOpenChat: () => {
  } }));
}
export {
  ld as ChatWidget,
  ud as ChatWidgetConstructor
};
