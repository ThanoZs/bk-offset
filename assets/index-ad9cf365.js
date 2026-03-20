var Wh=Object.defineProperty;var Vh=(e,t,n)=>t in e?Wh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var wt=(e,t,n)=>(Vh(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yd={exports:{}},Ko={},vd={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gi=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Gh=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),Qh=Symbol.for("react.context"),Zh=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),xc=Symbol.iterator;function n0(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wd=Object.assign,bd={};function hr(e,t,n){this.props=e,this.context=t,this.refs=bd,this.updater=n||xd}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kd(){}kd.prototype=hr.prototype;function ul(e,t,n){this.props=e,this.context=t,this.refs=bd,this.updater=n||xd}var dl=ul.prototype=new kd;dl.constructor=ul;wd(dl,hr.prototype);dl.isPureReactComponent=!0;var wc=Array.isArray,Sd=Object.prototype.hasOwnProperty,fl={current:null},_d={key:!0,ref:!0,__self:!0,__source:!0};function Ed(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Sd.call(t,r)&&!_d.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gi,type:e,key:o,ref:s,props:i,_owner:fl.current}}function r0(e,t){return{$$typeof:gi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===gi}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bc=/\/+/g;function bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function Xi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case gi:case Yh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+bs(s,0):r,wc(i)?(n="",e!=null&&(n=e.replace(bc,"$&/")+"/"),Xi(i,t,n,"",function(u){return u})):i!=null&&(pl(i)&&(i=r0(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(bc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",wc(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+bs(o,a);s+=Xi(o,t,n,c,i)}else if(c=n0(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+bs(o,a++),s+=Xi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ii(e,t,n){if(e==null)return e;var r=[],i=0;return Xi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function o0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},qi={transition:null},s0={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:qi,ReactCurrentOwner:fl};function Td(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ii,forEach:function(e,t,n){Ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ii(e,function(){t++}),t},toArray:function(e){return Ii(e,function(t){return t})||[]},only:function(e){if(!pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=hr;H.Fragment=Gh;H.Profiler=Xh;H.PureComponent=ul;H.StrictMode=Kh;H.Suspense=Jh;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;H.act=Td;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wd({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=fl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)Sd.call(t,c)&&!_d.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:gi,type:e.type,key:i,ref:o,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:Qh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};H.createElement=Ed;H.createFactory=function(e){var t=Ed.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Zh,render:e}};H.isValidElement=pl;H.lazy=function(e){return{$$typeof:t0,_payload:{_status:-1,_result:e},_init:o0}};H.memo=function(e,t){return{$$typeof:e0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=qi.transition;qi.transition={};try{e()}finally{qi.transition=t}};H.unstable_act=Td;H.useCallback=function(e,t){return Ae.current.useCallback(e,t)};H.useContext=function(e){return Ae.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ae.current.useEffect(e,t)};H.useId=function(){return Ae.current.useId()};H.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ae.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};H.useRef=function(e){return Ae.current.useRef(e)};H.useState=function(e){return Ae.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ae.current.useTransition()};H.version="18.3.1";vd.exports=H;var _=vd.exports;const ht=Go(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=_,l0=Symbol.for("react.element"),c0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,d0=a0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f0={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)u0.call(t,r)&&!f0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:l0,type:e,key:o,ref:s,props:i,_owner:d0.current}}Ko.Fragment=c0;Ko.jsx=Id;Ko.jsxs=Id;yd.exports=Ko;var l=yd.exports,oa={},Cd={exports:{}},We={},Pd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,P){var N=b.length;b.push(P);e:for(;0<N;){var U=N-1>>>1,B=b[U];if(0<i(B,P))b[U]=P,b[N]=B,N=U;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],N=b.pop();if(N!==P){b[0]=N;e:for(var U=0,B=b.length,Z=B>>>1;U<Z;){var K=2*(U+1)-1,Pe=b[K],me=K+1,le=b[me];if(0>i(Pe,N))me<B&&0>i(le,Pe)?(b[U]=le,b[me]=N,U=me):(b[U]=Pe,b[K]=N,U=K);else if(me<B&&0>i(le,N))b[U]=le,b[me]=N,U=me;else break e}}return P}function i(b,P){var N=b.sortIndex-P.sortIndex;return N!==0?N:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],f=1,p=null,g=3,y=!1,v=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=b)r(u),P.sortIndex=P.expirationTime,t(c,P);else break;P=n(u)}}function x(b){if(w=!1,m(b),!v)if(n(c)!==null)v=!0,j(S);else{var P=n(u);P!==null&&z(x,P.startTime-b)}}function S(b,P){v=!1,w&&(w=!1,h(E),E=-1),y=!0;var N=g;try{for(m(P),p=n(c);p!==null&&(!(p.expirationTime>P)||b&&!L());){var U=p.callback;if(typeof U=="function"){p.callback=null,g=p.priorityLevel;var B=U(p.expirationTime<=P);P=e.unstable_now(),typeof B=="function"?p.callback=B:p===n(c)&&r(c),m(P)}else r(c);p=n(c)}if(p!==null)var Z=!0;else{var K=n(u);K!==null&&z(x,K.startTime-P),Z=!1}return Z}finally{p=null,g=N,y=!1}}var I=!1,C=null,E=-1,F=5,M=-1;function L(){return!(e.unstable_now()-M<F)}function we(){if(C!==null){var b=e.unstable_now();M=b;var P=!0;try{P=C(!0,b)}finally{P?de():(I=!1,C=null)}}else I=!1}var de;if(typeof d=="function")de=function(){d(we)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,R=Le.port2;Le.port1.onmessage=we,de=function(){R.postMessage(null)}}else de=function(){T(we,0)};function j(b){C=b,I||(I=!0,de())}function z(b,P){E=T(function(){b(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,j(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var N=g;g=P;try{return b()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var N=g;g=b;try{return P()}finally{g=N}},e.unstable_scheduleCallback=function(b,P,N){var U=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?U+N:U):N=U,b){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=N+B,b={id:f++,callback:P,priorityLevel:b,startTime:N,expirationTime:B,sortIndex:-1},N>U?(b.sortIndex=N,t(u,b),n(c)===null&&b===n(u)&&(w?(h(E),E=-1):w=!0,z(x,N-U))):(b.sortIndex=B,t(c,b),v||y||(v=!0,j(S))),b},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(b){var P=g;return function(){var N=g;g=P;try{return b.apply(this,arguments)}finally{g=N}}}})(Nd);Pd.exports=Nd;var p0=Pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=_,He=p0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rd=new Set,Kr={};function Rn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Rd.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sa=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},Sc={};function m0(e){return sa.call(Sc,e)?!0:sa.call(kc,e)?!1:g0.test(e)?Sc[e]=!0:(kc[e]=!0,!1)}function y0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function v0(e,t,n,r){if(t===null||typeof t>"u"||y0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hl,gl);Se[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hl,gl);Se[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hl,gl);Se[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v0(t,n,i,r)&&(n=null),r||i===null?m0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),On=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),jd=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),la=Symbol.for("react.suspense"),ca=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),_c=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ks;function Rr(e){if(ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ks=t&&t[1]||""}return`
`+ks+e}var Ss=!1;function _s(e,t){if(!e||Ss)return"";Ss=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{Ss=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function x0(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=_s(e.type,!1),e;case 11:return e=_s(e.type.render,!1),e;case 1:return e=_s(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case On:return"Portal";case aa:return"Profiler";case yl:return"StrictMode";case la:return"Suspense";case ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jd:return(e.displayName||"Context")+".Consumer";case Ad:return(e._context.displayName||"Context")+".Provider";case vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function w0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Od(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function b0(e){var t=Od(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pi(e){e._valueTracker||(e._valueTracker=b0(e))}function Dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Od(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function da(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Md(e,t){t=t.checked,t!=null&&ml(e,"checked",t,!1)}function fa(e,t){Md(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&pa(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pa(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ar(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function zd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ni,Ud=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ni=Ni||document.createElement("div"),Ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){k0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function Bd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function $d(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,Kn=null,Xn=null;function Pc(e){if(e=vi(e)){if(typeof xa!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Jo(t),xa(e.stateNode,e.type,t))}}function Hd(e){Kn?Xn?Xn.push(e):Xn=[e]:Kn=e}function Wd(){if(Kn){var e=Kn,t=Xn;if(Xn=Kn=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Vd(e,t){return e(t)}function Yd(){}var Es=!1;function Gd(e,t,n){if(Es)return e(t,n);Es=!0;try{return Vd(e,t,n)}finally{Es=!1,(Kn!==null||Xn!==null)&&(Yd(),Wd())}}function qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var wa=!1;if(Nt)try{var br={};Object.defineProperty(br,"passive",{get:function(){wa=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{wa=!1}function _0(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var zr=!1,go=null,mo=!1,ba=null,E0={onError:function(e){zr=!0,go=e}};function T0(e,t,n,r,i,o,s,a,c){zr=!1,go=null,_0.apply(E0,arguments)}function I0(e,t,n,r,i,o,s,a,c){if(T0.apply(this,arguments),zr){if(zr){var u=go;zr=!1,go=null}else throw Error(k(198));mo||(mo=!0,ba=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nc(e){if(An(e)!==e)throw Error(k(188))}function C0(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Nc(i),e;if(o===r)return Nc(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Xd(e){return e=C0(e),e!==null?qd(e):null}function qd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qd(e);if(t!==null)return t;e=e.sibling}return null}var Qd=He.unstable_scheduleCallback,Rc=He.unstable_cancelCallback,P0=He.unstable_shouldYield,N0=He.unstable_requestPaint,ue=He.unstable_now,R0=He.unstable_getCurrentPriorityLevel,bl=He.unstable_ImmediatePriority,Zd=He.unstable_UserBlockingPriority,yo=He.unstable_NormalPriority,A0=He.unstable_LowPriority,Jd=He.unstable_IdlePriority,Xo=null,gt=null;function j0(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:D0,L0=Math.log,O0=Math.LN2;function D0(e){return e>>>=0,e===0?32:31-(L0(e)/O0|0)|0}var Ri=64,Ai=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=jr(a):(o&=s,o!==0&&(r=jr(o)))}else s=n&~i,s!==0?r=jr(s):o!==0&&(r=jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),i=1<<n,r|=e[n],t&=~i;return r}function M0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-at(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=M0(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),e}function Ts(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function F0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,Sl,rf,of,sf,Sa=!1,ji=[],Kt=null,Xt=null,qt=null,Qr=new Map,Zr=new Map,Bt=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=vi(t),t!==null&&Sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function B0(e,t,n,r,i){switch(t){case"focusin":return Kt=kr(Kt,e,t,n,r,i),!0;case"dragenter":return Xt=kr(Xt,e,t,n,r,i),!0;case"mouseover":return qt=kr(qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Qr.set(o,kr(Qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Zr.set(o,kr(Zr.get(o)||null,e,t,n,r,i)),!0}return!1}function af(e){var t=mn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,sf(e.priority,function(){rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);va=r,n.target.dispatchEvent(r),va=null}else return t=vi(n),t!==null&&Sl(t),e.blockedOn=n,!1;t.shift()}return!0}function jc(e,t,n){Qi(e)&&n.delete(t)}function $0(){Sa=!1,Kt!==null&&Qi(Kt)&&(Kt=null),Xt!==null&&Qi(Xt)&&(Xt=null),qt!==null&&Qi(qt)&&(qt=null),Qr.forEach(jc),Zr.forEach(jc)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,$0)))}function Jr(e){function t(i){return Sr(i,e)}if(0<ji.length){Sr(ji[0],e);for(var n=1;n<ji.length;n++){var r=ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Kt!==null&&Sr(Kt,e),Xt!==null&&Sr(Xt,e),qt!==null&&Sr(qt,e),Qr.forEach(t),Zr.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)af(n),n.blockedOn===null&&Bt.shift()}var qn=Ot.ReactCurrentBatchConfig,xo=!0;function H0(e,t,n,r){var i=q,o=qn.transition;qn.transition=null;try{q=1,_l(e,t,n,r)}finally{q=i,qn.transition=o}}function W0(e,t,n,r){var i=q,o=qn.transition;qn.transition=null;try{q=4,_l(e,t,n,r)}finally{q=i,qn.transition=o}}function _l(e,t,n,r){if(xo){var i=_a(e,t,n,r);if(i===null)Ds(e,t,r,wo,n),Ac(e,r);else if(B0(i,e,t,n,r))r.stopPropagation();else if(Ac(e,r),t&4&&-1<U0.indexOf(e)){for(;i!==null;){var o=vi(i);if(o!==null&&nf(o),o=_a(e,t,n,r),o===null&&Ds(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ds(e,t,r,null,n)}}var wo=null;function _a(e,t,n,r){if(wo=null,e=wl(r),e=mn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case bl:return 1;case Zd:return 4;case yo:case A0:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var Yt=null,El=null,Zi=null;function cf(){if(Zi)return Zi;var e,t=El,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Zi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Lc(){return!1}function Ve(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Li:Lc,this.isPropagationStopped=Lc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ve(gr),yi=oe({},gr,{view:0,detail:0}),V0=Ve(yi),Is,Cs,_r,qo=oe({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(Is=e.screenX-_r.screenX,Cs=e.screenY-_r.screenY):Cs=Is=0,_r=e),Is)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),Oc=Ve(qo),Y0=oe({},qo,{dataTransfer:0}),G0=Ve(Y0),K0=oe({},yi,{relatedTarget:0}),Ps=Ve(K0),X0=oe({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=Ve(X0),Q0=oe({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Z0=Ve(Q0),J0=oe({},gr,{data:0}),Dc=Ve(J0),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ng[e])?!!t[e]:!1}function Il(){return rg}var ig=oe({},yi,{key:function(e){if(e.key){var t=eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),og=Ve(ig),sg=oe({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=Ve(sg),ag=oe({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),lg=Ve(ag),cg=oe({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ug=Ve(cg),dg=oe({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=Ve(dg),pg=[9,13,27,32],Cl=Nt&&"CompositionEvent"in window,Fr=null;Nt&&"documentMode"in document&&(Fr=document.documentMode);var hg=Nt&&"TextEvent"in window&&!Fr,uf=Nt&&(!Cl||Fr&&8<Fr&&11>=Fr),zc=String.fromCharCode(32),Fc=!1;function df(e,t){switch(e){case"keyup":return pg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function gg(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(Fc=!0,zc);case"textInput":return e=t.data,e===zc&&Fc?null:e;default:return null}}function mg(e,t){if(Mn)return e==="compositionend"||!Cl&&df(e,t)?(e=cf(),Zi=El=Yt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yg[e.type]:t==="textarea"}function pf(e,t,n,r){Hd(r),t=bo(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,ei=null;function vg(e){_f(e,0)}function Qo(e){var t=Un(e);if(Dd(t))return e}function xg(e,t){if(e==="change")return t}var hf=!1;if(Nt){var Ns;if(Nt){var Rs="oninput"in document;if(!Rs){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Rs=typeof Bc.oninput=="function"}Ns=Rs}else Ns=!1;hf=Ns&&(!document.documentMode||9<document.documentMode)}function $c(){Ur&&(Ur.detachEvent("onpropertychange",gf),ei=Ur=null)}function gf(e){if(e.propertyName==="value"&&Qo(ei)){var t=[];pf(t,ei,e,wl(e)),Gd(vg,t)}}function wg(e,t,n){e==="focusin"?($c(),Ur=t,ei=n,Ur.attachEvent("onpropertychange",gf)):e==="focusout"&&$c()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(ei)}function kg(e,t){if(e==="click")return Qo(t)}function Sg(e,t){if(e==="input"||e==="change")return Qo(t)}function _g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:_g;function ti(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sa.call(t,i)||!ct(e[i],t[i]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var n=Hc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hc(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&Pl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wc(n,o);var s=Wc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tg=Nt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ea=null,Br=null,Ta=!1;function Vc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||zn==null||zn!==ho(r)||(r=zn,"selectionStart"in r&&Pl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ti(Br,r)||(Br=r,r=bo(Ea,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},As={},vf={};Nt&&(vf=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function Zo(e){if(As[e])return As[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vf)return As[e]=t[n];return e}var xf=Zo("animationend"),wf=Zo("animationiteration"),bf=Zo("animationstart"),kf=Zo("transitionend"),Sf=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){Sf.set(e,t),Rn(t,[e])}for(var js=0;js<Yc.length;js++){var Ls=Yc[js],Ig=Ls.toLowerCase(),Cg=Ls[0].toUpperCase()+Ls.slice(1);an(Ig,"on"+Cg)}an(xf,"onAnimationEnd");an(wf,"onAnimationIteration");an(bf,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(kf,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I0(r,t,void 0,e),e.currentTarget=null}function _f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;Gc(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;Gc(i,a,u),o=c}}}if(mo)throw e=ba,mo=!1,ba=null,e}function ee(e,t){var n=t[Ra];n===void 0&&(n=t[Ra]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function Os(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Di]){e[Di]=!0,Rd.forEach(function(n){n!=="selectionchange"&&(Pg.has(n)||Os(n,!1,e),Os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Os("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(lf(t)){case 1:var i=H0;break;case 4:i=W0;break;default:i=_l}n=i.bind(null,t,n,e),i=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ds(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=mn(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Gd(function(){var u=o,f=wl(n),p=[];e:{var g=Sf.get(e);if(g!==void 0){var y=Tl,v=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":y=og;break;case"focusin":v="focus",y=Ps;break;case"focusout":v="blur",y=Ps;break;case"beforeblur":case"afterblur":y=Ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lg;break;case xf:case wf:case bf:y=q0;break;case kf:y=ug;break;case"scroll":y=V0;break;case"wheel":y=fg;break;case"copy":case"cut":case"paste":y=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Mc}var w=(t&4)!==0,T=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=qr(d,h),x!=null&&w.push(ri(d,x,m)))),T)break;d=d.return}0<w.length&&(g=new y(g,v,null,n,f),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==va&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[Rt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?mn(v):null,v!==null&&(T=An(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Oc,x="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Mc,x="onPointerLeave",h="onPointerEnter",d="pointer"),T=y==null?g:Un(y),m=v==null?g:Un(v),g=new w(x,d+"leave",y,n,f),g.target=T,g.relatedTarget=m,x=null,mn(f)===u&&(w=new w(h,d+"enter",v,n,f),w.target=m,w.relatedTarget=T,x=w),T=x,y&&v)t:{for(w=y,h=v,d=0,m=w;m;m=jn(m))d++;for(m=0,x=h;x;x=jn(x))m++;for(;0<d-m;)w=jn(w),d--;for(;0<m-d;)h=jn(h),m--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=jn(w),h=jn(h)}w=null}else w=null;y!==null&&Kc(p,g,y,w,!1),v!==null&&T!==null&&Kc(p,T,v,w,!0)}}e:{if(g=u?Un(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=xg;else if(Uc(g))if(hf)S=Sg;else{S=bg;var I=wg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=kg);if(S&&(S=S(e,u))){pf(p,S,n,f);break e}I&&I(e,g,u),e==="focusout"&&(I=g._wrapperState)&&I.controlled&&g.type==="number"&&pa(g,"number",g.value)}switch(I=u?Un(u):window,e){case"focusin":(Uc(I)||I.contentEditable==="true")&&(zn=I,Ea=u,Br=null);break;case"focusout":Br=Ea=zn=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,Vc(p,n,f);break;case"selectionchange":if(Tg)break;case"keydown":case"keyup":Vc(p,n,f)}var C;if(Cl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Mn?df(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(uf&&n.locale!=="ko"&&(Mn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Mn&&(C=cf()):(Yt=f,El="value"in Yt?Yt.value:Yt.textContent,Mn=!0)),I=bo(u,E),0<I.length&&(E=new Dc(E,e,null,n,f),p.push({event:E,listeners:I}),C?E.data=C:(C=ff(n),C!==null&&(E.data=C)))),(C=hg?gg(e,n):mg(e,n))&&(u=bo(u,"onBeforeInput"),0<u.length&&(f=new Dc("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}_f(p,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qr(e,n),o!=null&&r.unshift(ri(e,o,i)),o=qr(e,t),o!=null&&r.push(ri(e,o,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=qr(n,o),c!=null&&s.unshift(ri(n,c,a))):i||(c=qr(n,o),c!=null&&s.push(ri(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Ng=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function Xc(e){return(typeof e=="string"?e:""+e).replace(Ng,`
`).replace(Rg,"")}function Mi(e,t,n){if(t=Xc(t),Xc(e)!==t&&n)throw Error(k(425))}function ko(){}var Ia=null,Ca=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,qc=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof qc<"u"?function(e){return qc.resolve(null).then(e).catch(Lg)}:Na;function Lg(e){setTimeout(function(){throw e})}function Ms(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jr(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mr=Math.random().toString(36).slice(2),pt="__reactFiber$"+mr,ii="__reactProps$"+mr,Rt="__reactContainer$"+mr,Ra="__reactEvents$"+mr,Og="__reactListeners$"+mr,Dg="__reactHandles$"+mr;function mn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qc(e);e!==null;){if(n=e[pt])return n;e=Qc(e)}return t}e=n,n=e.parentNode}return null}function vi(e){return e=e[pt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Jo(e){return e[ii]||null}var Aa=[],Bn=-1;function ln(e){return{current:e}}function te(e){0>Bn||(e.current=Aa[Bn],Aa[Bn]=null,Bn--)}function J(e,t){Bn++,Aa[Bn]=e.current,e.current=t}var sn={},Ie=ln(sn),Me=ln(!1),Sn=sn;function sr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function So(){te(Me),te(Ie)}function Zc(e,t,n){if(Ie.current!==sn)throw Error(k(168));J(Ie,t),J(Me,n)}function Tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,w0(e)||"Unknown",i));return oe({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Sn=Ie.current,J(Ie,e),J(Me,Me.current),!0}function Jc(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Tf(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,te(Me),te(Ie),J(Ie,e)):te(Me),J(Me,n)}var kt=null,es=!1,zs=!1;function If(e){kt===null?kt=[e]:kt.push(e)}function Mg(e){es=!0,If(e)}function cn(){if(!zs&&kt!==null){zs=!0;var e=0,t=q;try{var n=kt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,es=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),Qd(bl,cn),i}finally{q=t,zs=!1}}return null}var $n=[],Hn=0,Eo=null,To=0,Ke=[],Xe=0,_n=null,_t=1,Et="";function fn(e,t){$n[Hn++]=To,$n[Hn++]=Eo,Eo=e,To=t}function Cf(e,t,n){Ke[Xe++]=_t,Ke[Xe++]=Et,Ke[Xe++]=_n,_n=e;var r=_t;e=Et;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_t=1<<32-at(t)+i|n<<i|r,Et=o+e}else _t=1<<o|n<<i|r,Et=e}function Nl(e){e.return!==null&&(fn(e,1),Cf(e,1,0))}function Rl(e){for(;e===Eo;)Eo=$n[--Hn],$n[Hn]=null,To=$n[--Hn],$n[Hn]=null;for(;e===_n;)_n=Ke[--Xe],Ke[Xe]=null,Et=Ke[--Xe],Ke[Xe]=null,_t=Ke[--Xe],Ke[Xe]=null}var $e=null,Be=null,ne=!1,ot=null;function Pf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Be=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:_t,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Be=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function La(e){if(ne){var t=Be;if(t){var n=t;if(!eu(e,t)){if(ja(e))throw Error(k(418));t=Qt(n.nextSibling);var r=$e;t&&eu(e,t)?Pf(r,n):(e.flags=e.flags&-4097|2,ne=!1,$e=e)}}else{if(ja(e))throw Error(k(418));e.flags=e.flags&-4097|2,ne=!1,$e=e}}}function tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function zi(e){if(e!==$e)return!1;if(!ne)return tu(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Be)){if(ja(e))throw Nf(),Error(k(418));for(;t;)Pf(e,t),t=Qt(t.nextSibling)}if(tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=$e?Qt(e.stateNode.nextSibling):null;return!0}function Nf(){for(var e=Be;e;)e=Qt(e.nextSibling)}function ar(){Be=$e=null,ne=!1}function Al(e){ot===null?ot=[e]:ot.push(e)}var zg=Ot.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nu(e){var t=e._init;return t(e._payload)}function Rf(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=tn(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,x){return d===null||d.tag!==6?(d=Vs(m,h.mode,x),d.return=h,d):(d=i(d,m),d.return=h,d)}function c(h,d,m,x){var S=m.type;return S===Dn?f(h,d,m.props.children,x,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&nu(S)===d.type)?(x=i(d,m.props),x.ref=Er(h,d,m),x.return=h,x):(x=so(m.type,m.key,m.props,null,h.mode,x),x.ref=Er(h,d,m),x.return=h,x)}function u(h,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ys(m,h.mode,x),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function f(h,d,m,x,S){return d===null||d.tag!==7?(d=bn(m,h.mode,x,S),d.return=h,d):(d=i(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Vs(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ci:return m=so(d.type,d.key,d.props,null,h.mode,m),m.ref=Er(h,null,d),m.return=h,m;case On:return d=Ys(d,h.mode,m),d.return=h,d;case Ft:var x=d._init;return p(h,x(d._payload),m)}if(Ar(d)||wr(d))return d=bn(d,h.mode,m,null),d.return=h,d;Fi(h,d)}return null}function g(h,d,m,x){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(h,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ci:return m.key===S?c(h,d,m,x):null;case On:return m.key===S?u(h,d,m,x):null;case Ft:return S=m._init,g(h,d,S(m._payload),x)}if(Ar(m)||wr(m))return S!==null?null:f(h,d,m,x,null);Fi(h,m)}return null}function y(h,d,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,a(d,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ci:return h=h.get(x.key===null?m:x.key)||null,c(d,h,x,S);case On:return h=h.get(x.key===null?m:x.key)||null,u(d,h,x,S);case Ft:var I=x._init;return y(h,d,m,I(x._payload),S)}if(Ar(x)||wr(x))return h=h.get(m)||null,f(d,h,x,S,null);Fi(d,x)}return null}function v(h,d,m,x){for(var S=null,I=null,C=d,E=d=0,F=null;C!==null&&E<m.length;E++){C.index>E?(F=C,C=null):F=C.sibling;var M=g(h,C,m[E],x);if(M===null){C===null&&(C=F);break}e&&C&&M.alternate===null&&t(h,C),d=o(M,d,E),I===null?S=M:I.sibling=M,I=M,C=F}if(E===m.length)return n(h,C),ne&&fn(h,E),S;if(C===null){for(;E<m.length;E++)C=p(h,m[E],x),C!==null&&(d=o(C,d,E),I===null?S=C:I.sibling=C,I=C);return ne&&fn(h,E),S}for(C=r(h,C);E<m.length;E++)F=y(C,h,E,m[E],x),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?E:F.key),d=o(F,d,E),I===null?S=F:I.sibling=F,I=F);return e&&C.forEach(function(L){return t(h,L)}),ne&&fn(h,E),S}function w(h,d,m,x){var S=wr(m);if(typeof S!="function")throw Error(k(150));if(m=S.call(m),m==null)throw Error(k(151));for(var I=S=null,C=d,E=d=0,F=null,M=m.next();C!==null&&!M.done;E++,M=m.next()){C.index>E?(F=C,C=null):F=C.sibling;var L=g(h,C,M.value,x);if(L===null){C===null&&(C=F);break}e&&C&&L.alternate===null&&t(h,C),d=o(L,d,E),I===null?S=L:I.sibling=L,I=L,C=F}if(M.done)return n(h,C),ne&&fn(h,E),S;if(C===null){for(;!M.done;E++,M=m.next())M=p(h,M.value,x),M!==null&&(d=o(M,d,E),I===null?S=M:I.sibling=M,I=M);return ne&&fn(h,E),S}for(C=r(h,C);!M.done;E++,M=m.next())M=y(C,h,E,M.value,x),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),d=o(M,d,E),I===null?S=M:I.sibling=M,I=M);return e&&C.forEach(function(we){return t(h,we)}),ne&&fn(h,E),S}function T(h,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Dn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ci:e:{for(var S=m.key,I=d;I!==null;){if(I.key===S){if(S=m.type,S===Dn){if(I.tag===7){n(h,I.sibling),d=i(I,m.props.children),d.return=h,h=d;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ft&&nu(S)===I.type){n(h,I.sibling),d=i(I,m.props),d.ref=Er(h,I,m),d.return=h,h=d;break e}n(h,I);break}else t(h,I);I=I.sibling}m.type===Dn?(d=bn(m.props.children,h.mode,x,m.key),d.return=h,h=d):(x=so(m.type,m.key,m.props,null,h.mode,x),x.ref=Er(h,d,m),x.return=h,h=x)}return s(h);case On:e:{for(I=m.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Ys(m,h.mode,x),d.return=h,h=d}return s(h);case Ft:return I=m._init,T(h,d,I(m._payload),x)}if(Ar(m))return v(h,d,m,x);if(wr(m))return w(h,d,m,x);Fi(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=Vs(m,h.mode,x),d.return=h,h=d),s(h)):n(h,d)}return T}var lr=Rf(!0),Af=Rf(!1),Io=ln(null),Co=null,Wn=null,jl=null;function Ll(){jl=Wn=Co=null}function Ol(e){var t=Io.current;te(Io),e._currentValue=t}function Oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){Co=e,jl=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(jl!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Co===null)throw Error(k(308));Wn=e,Co.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var yn=null;function Dl(e){yn===null?yn=[e]:yn.push(e)}function jf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,Dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kl(e,n)}}function ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var i=e.updateQueue;Ut=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,f=u=c=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(y,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,p,g):v,g==null)break e;p=oe({},p,g);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,c=p):f=f.next=y,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Tn|=s,e.lanes=s,e.memoizedState=p}}function iu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var xi={},mt=ln(xi),oi=ln(xi),si=ln(xi);function vn(e){if(e===xi)throw Error(k(174));return e}function zl(e,t){switch(J(si,t),J(oi,e),J(mt,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ga(t,e)}te(mt),J(mt,t)}function cr(){te(mt),te(oi),te(si)}function Of(e){vn(si.current);var t=vn(mt.current),n=ga(t,e.type);t!==n&&(J(oi,e),J(mt,n))}function Fl(e){oi.current===e&&(te(mt),te(oi))}var re=ln(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fs=[];function Ul(){for(var e=0;e<Fs.length;e++)Fs[e]._workInProgressVersionPrimary=null;Fs.length=0}var to=Ot.ReactCurrentDispatcher,Us=Ot.ReactCurrentBatchConfig,En=0,ie=null,he=null,ve=null,Ro=!1,$r=!1,ai=0,Fg=0;function _e(){throw Error(k(321))}function Bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function $l(e,t,n,r,i,o){if(En=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?Hg:Wg,e=n(r,i),$r){o=0;do{if($r=!1,ai=0,25<=o)throw Error(k(301));o+=1,ve=he=null,t.updateQueue=null,to.current=Vg,e=n(r,i)}while($r)}if(to.current=Ao,t=he!==null&&he.next!==null,En=0,ve=he=ie=null,Ro=!1,t)throw Error(k(300));return e}function Hl(){var e=ai!==0;return ai=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function Je(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(k(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function li(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var f=u.lane;if((En&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=p,s=r):c=c.next=p,ie.lanes|=f,Tn|=f}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,ct(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Tn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $s(e){var t=Je(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ct(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Df(){}function Mf(e,t){var n=ie,r=Je(),i=t(),o=!ct(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,Wl(Uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,ci(9,Ff.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(k(349));En&30||zf(n,t,i)}return i}function zf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ff(e,t,n,r){t.value=n,t.getSnapshot=r,Bf(t)&&$f(e)}function Uf(e,t,n){return n(function(){Bf(t)&&$f(e)})}function Bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function $f(e){var t=At(e,1);t!==null&&lt(t,e,1,-1)}function ou(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,ie,e),[t.memoizedState,e]}function ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hf(){return Je().memoizedState}function no(e,t,n,r){var i=ft();ie.flags|=e,i.memoizedState=ci(1|t,n,void 0,r===void 0?null:r)}function ts(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(he!==null){var s=he.memoizedState;if(o=s.destroy,r!==null&&Bl(r,s.deps)){i.memoizedState=ci(t,n,o,r);return}}ie.flags|=e,i.memoizedState=ci(1|t,n,o,r)}function su(e,t){return no(8390656,8,e,t)}function Wl(e,t){return ts(2048,8,e,t)}function Wf(e,t){return ts(4,2,e,t)}function Vf(e,t){return ts(4,4,e,t)}function Yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){return n=n!=null?n.concat([e]):null,ts(4,4,Yf.bind(null,t,e),n)}function Vl(){}function Kf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xf(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qf(e,t,n){return En&21?(ct(n,t)||(n=ef(),ie.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Ug(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Us.transition;Us.transition={};try{e(!1),t()}finally{q=n,Us.transition=r}}function Qf(){return Je().memoizedState}function Bg(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))Jf(t,n);else if(n=jf(e,t,n,r),n!==null){var i=Re();lt(n,e,r,i),ep(n,t,r)}}function $g(e,t,n){var r=en(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))Jf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ct(a,s)){var c=t.interleaved;c===null?(i.next=i,Dl(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=jf(e,t,i,r),n!==null&&(i=Re(),lt(n,e,r,i),ep(n,t,r))}}function Zf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Jf(e,t){$r=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ep(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kl(e,n)}}var Ao={readContext:Ze,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Hg={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:su,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,Yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bg.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ou,useDebugValue:Vl,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ou(!1),t=e[0];return e=Ug.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=ft();if(ne){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),xe===null)throw Error(k(349));En&30||zf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,su(Uf.bind(null,r,o,e),[e]),r.flags|=2048,ci(9,Ff.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=xe.identifierPrefix;if(ne){var n=Et,r=_t;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ai++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Fg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wg={readContext:Ze,useCallback:Kf,useContext:Ze,useEffect:Wl,useImperativeHandle:Gf,useInsertionEffect:Wf,useLayoutEffect:Vf,useMemo:Xf,useReducer:Bs,useRef:Hf,useState:function(){return Bs(li)},useDebugValue:Vl,useDeferredValue:function(e){var t=Je();return qf(t,he.memoizedState,e)},useTransition:function(){var e=Bs(li)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Mf,useId:Qf,unstable_isNewReconciler:!1},Vg={readContext:Ze,useCallback:Kf,useContext:Ze,useEffect:Wl,useImperativeHandle:Gf,useInsertionEffect:Wf,useLayoutEffect:Vf,useMemo:Xf,useReducer:$s,useRef:Hf,useState:function(){return $s(li)},useDebugValue:Vl,useDeferredValue:function(e){var t=Je();return he===null?t.memoizedState=e:qf(t,he.memoizedState,e)},useTransition:function(){var e=$s(li)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Mf,useId:Qf,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ns={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=en(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(lt(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=en(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(lt(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=en(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(lt(t,e,r,n),eo(t,e,r))}};function au(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,o):!0}function tp(e,t,n){var r=!1,i=sn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(i=ze(t)?Sn:Ie.current,r=t.contextTypes,o=(r=r!=null)?sr(e,i):sn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ns,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ns.enqueueReplaceState(t,t.state,null)}function Ma(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ml(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ze(o):(o=ze(t)?Sn:Ie.current,i.context=sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Da(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ns.enqueueReplaceState(i,i.state,null),Po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,t){try{var n="",r=t;do n+=x0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yg=typeof WeakMap=="function"?WeakMap:Map;function np(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Lo||(Lo=!0,Ka=r),za(e,t)},n}function rp(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sm.bind(null,e,t,n),t.then(e,e))}function uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function du(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var Gg=Ot.ReactCurrentOwner,De=!1;function Ne(e,t,n,r){t.child=e===null?Af(t,null,n,r):lr(t,e.child,n,r)}function fu(e,t,n,r,i){n=n.render;var o=t.ref;return Qn(t,i),r=$l(e,t,n,r,o,i),n=Hl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ne&&n&&Nl(t),t.flags|=1,Ne(e,t,r,i),t.child)}function pu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Jl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ip(e,t,o,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(s,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ip(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ti(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,jt(e,t,i)}return Fa(e,t,n,r,i)}function op(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Yn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Yn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(Yn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,J(Yn,Ue),Ue|=r;return Ne(e,t,i,n),t.child}function sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fa(e,t,n,r,i){var o=ze(n)?Sn:Ie.current;return o=sr(t,o),Qn(t,i),n=$l(e,t,n,r,o,i),r=Hl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ne&&r&&Nl(t),t.flags|=1,Ne(e,t,n,i),t.child)}function hu(e,t,n,r,i){if(ze(n)){var o=!0;_o(t)}else o=!1;if(Qn(t,i),t.stateNode===null)ro(e,t),tp(t,n,r),Ma(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=ze(n)?Sn:Ie.current,u=sr(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&lu(t,s,r,u),Ut=!1;var g=t.memoizedState;s.state=g,Po(t,r,s,i),c=t.memoizedState,a!==r||g!==c||Me.current||Ut?(typeof f=="function"&&(Da(t,n,f,r),c=t.memoizedState),(a=Ut||au(t,n,a,r,g,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Lf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:rt(t.type,a),s.props=u,p=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ze(c):(c=ze(n)?Sn:Ie.current,c=sr(t,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||g!==c)&&lu(t,s,r,c),Ut=!1,g=t.memoizedState,s.state=g,Po(t,r,s,i);var v=t.memoizedState;a!==p||g!==v||Me.current||Ut?(typeof y=="function"&&(Da(t,n,y,r),v=t.memoizedState),(u=Ut||au(t,n,u,r,g,v,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ua(e,t,n,r,o,i)}function Ua(e,t,n,r,i,o){sp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Jc(t,n,!1),jt(e,t,o);r=t.stateNode,Gg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=lr(t,e.child,null,o),t.child=lr(t,null,a,o)):Ne(e,t,a,o),t.memoizedState=r.state,i&&Jc(t,n,!0),t.child}function ap(e){var t=e.stateNode;t.pendingContext?Zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zc(e,t.context,!1),zl(e,t.containerInfo)}function gu(e,t,n,r,i){return ar(),Al(i),t.flags|=256,Ne(e,t,n,r),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function $a(e){return{baseLanes:e,cachePool:null,transitions:null}}function lp(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(re,i&1),e===null)return La(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=os(s,r,0,null),e=bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$a(n),t.memoizedState=Ba,e):Yl(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kg(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=tn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=tn(a,o):(o=bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$a(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ba,r}return o=e.child,e=o.sibling,r=tn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yl(e,t){return t=os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ui(e,t,n,r){return r!==null&&Al(r),lr(t,e.child,null,n),e=Yl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Hs(Error(k(422))),Ui(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=os({mode:"visible",children:r.children},i,0,null),o=bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&lr(t,e.child,null,s),t.child.memoizedState=$a(s),t.memoizedState=Ba,o);if(!(t.mode&1))return Ui(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Hs(o,r,void 0),Ui(e,t,s,r)}if(a=(s&e.childLanes)!==0,De||a){if(r=xe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(e,i),lt(r,e,i,-1))}return Zl(),r=Hs(Error(k(421))),Ui(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Be=Qt(i.nextSibling),$e=t,ne=!0,ot=null,e!==null&&(Ke[Xe++]=_t,Ke[Xe++]=Et,Ke[Xe++]=_n,_t=e.id,Et=e.overflow,_n=t),t=Yl(t,r.children),t.flags|=4096,t)}function mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oa(e.return,t,n)}function Ws(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,n,t);else if(e.tag===19)mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ws(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&No(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ws(t,!0,n,null,o);break;case"together":Ws(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:ap(t),ar();break;case 5:Of(t);break;case 1:ze(t.type)&&_o(t);break;case 4:zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;J(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?lp(e,t,n):(J(re,re.current&1),e=jt(e,t,n),e!==null?e.sibling:null);J(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,op(e,t,n)}return jt(e,t,n)}var up,Ha,dp,fp;up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ha=function(){};dp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,vn(mt.current);var o=null;switch(n){case"input":i=da(e,i),r=da(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=ha(e,i),r=ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}ma(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ee("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qg(e,t,n){var r=t.pendingProps;switch(Rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return ze(t.type)&&So(),Ee(t),null;case 3:return r=t.stateNode,cr(),te(Me),te(Ie),Ul(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Qa(ot),ot=null))),Ha(e,t),Ee(t),null;case 5:Fl(t);var i=vn(si.current);if(n=t.type,e!==null&&t.stateNode!=null)dp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Ee(t),null}if(e=vn(mt.current),zi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[ii]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)ee(Lr[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Ec(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Ic(r,o),ee("invalid",r)}ma(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",""+a]):Kr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ee("scroll",r)}switch(n){case"input":Pi(r),Tc(r,o,!0);break;case"textarea":Pi(r),Cc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pt]=t,e[ii]=r,up(e,t,!1,!1),t.stateNode=e;e:{switch(s=ya(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)ee(Lr[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Ec(e,r),i=da(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Ic(e,r),i=ha(e,r),ee("invalid",e);break;default:i=r}ma(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?$d(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ud(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ee("scroll",e):c!=null&&ml(e,o,c,s))}switch(n){case"input":Pi(e),Tc(e,r,!1);break;case"textarea":Pi(e),Cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=vn(si.current),vn(mt.current),zi(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Be!==null&&t.mode&1&&!(t.flags&128))Nf(),ar(),t.flags|=98560,o=!1;else if(o=zi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[pt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else ot!==null&&(Qa(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?ge===0&&(ge=3):Zl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return cr(),Ha(e,t),e===null&&ni(t.stateNode.containerInfo),Ee(t),null;case 10:return Ol(t.type._context),Ee(t),null;case 17:return ze(t.type)&&So(),Ee(t),null;case 19:if(te(re),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Tr(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=No(e),s!==null){for(t.flags|=128,Tr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>dr&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304)}else{if(!r)if(e=No(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return Ee(t),null}else 2*ue()-o.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Tr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=re.current,J(re,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Qg(e,t){switch(Rl(t),t.tag){case 1:return ze(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),te(Me),te(Ie),Ul(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fl(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return cr(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Bi=!1,Te=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Wa(e,t,n){try{n()}catch(r){ae(e,t,r)}}var yu=!1;function Jg(e,t){if(Ia=xo,e=yf(),Pl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break t;if(g===n&&++u===i&&(a=s),g===o&&++f===r&&(c=s),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ca={focusedElem:e,selectionRange:n},xo=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,T=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:rt(t.type,w),T);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){ae(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=yu,yu=!1,v}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Wa(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pp(e){var t=e.alternate;t!==null&&(e.alternate=null,pp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[ii],delete t[Ra],delete t[Og],delete t[Dg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hp(e){return e.tag===5||e.tag===3||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}function Ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ga(e,t,n),e=e.sibling;e!==null;)Ga(e,t,n),e=e.sibling}var be=null,it=!1;function Mt(e,t,n){for(n=n.child;n!==null;)gp(e,t,n),n=n.sibling}function gp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:Te||Vn(n,t);case 6:var r=be,i=it;be=null,Mt(e,t,n),be=r,it=i,be!==null&&(it?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(it?(e=be,n=n.stateNode,e.nodeType===8?Ms(e.parentNode,n):e.nodeType===1&&Ms(e,n),Jr(e)):Ms(be,n.stateNode));break;case 4:r=be,i=it,be=n.stateNode.containerInfo,it=!0,Mt(e,t,n),be=r,it=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Wa(n,t,s),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!Te&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Mt(e,t,n),Te=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(r){var i=lm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,it=!1;break e;case 3:be=a.stateNode.containerInfo,it=!0;break e;case 4:be=a.stateNode.containerInfo,it=!0;break e}a=a.return}if(be===null)throw Error(k(160));gp(o,s,i),be=null,it=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ae(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mp(t,e),t=t.sibling}function mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{Hr(3,e,e.return),rs(3,e)}catch(w){ae(e,e.return,w)}try{Hr(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(w){ae(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Md(i,o),ya(a,s);var u=ya(a,o);for(s=0;s<c.length;s+=2){var f=c[s],p=c[s+1];f==="style"?$d(i,p):f==="dangerouslySetInnerHTML"?Ud(i,p):f==="children"?Xr(i,p):ml(i,f,p,u)}switch(a){case"input":fa(i,o);break;case"textarea":zd(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Gn(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Gn(i,!!o.multiple,o.defaultValue,!0):Gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ii]=o}catch(w){ae(e,e.return,w)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ae(e,e.return,w)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Xl=ue())),r&4&&xu(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||f,nt(t,e),Te=u):nt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(p=A=f;A!==null;){switch(g=A,y=g.child,g.tag){case 0:case 11:case 14:case 15:Hr(4,g,g.return);break;case 1:Vn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ae(r,n,w)}}break;case 5:Vn(g,g.return);break;case 22:if(g.memoizedState!==null){bu(p);continue}}y!==null?(y.return=g,A=y):bu(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Bd("display",s))}catch(w){ae(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){ae(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nt(t,e),dt(e),r&4&&xu(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hp(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=vu(e);Ga(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=vu(e);Ya(e,a,s);break;default:throw Error(k(161))}}catch(c){ae(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e,t,n){A=e,yp(e)}function yp(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bi;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||Te;a=Bi;var u=Te;if(Bi=s,(Te=c)&&!u)for(A=i;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?ku(i):c!==null?(c.return=s,A=c):ku(i);for(;o!==null;)A=o,yp(o),o=o.sibling;A=i,Bi=a,Te=u}wu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):wu(e)}}function wu(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||rs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&iu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}iu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Jr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Te||t.flags&512&&Va(t)}catch(g){ae(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function bu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function ku(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(c){ae(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ae(t,i,c)}}var o=t.return;try{Va(t)}catch(c){ae(t,o,c)}break;case 5:var s=t.return;try{Va(t)}catch(c){ae(t,s,c)}}}catch(c){ae(t,t.return,c)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var tm=Math.ceil,jo=Ot.ReactCurrentDispatcher,Gl=Ot.ReactCurrentOwner,Qe=Ot.ReactCurrentBatchConfig,V=0,xe=null,pe=null,ke=0,Ue=0,Yn=ln(0),ge=0,ui=null,Tn=0,is=0,Kl=0,Wr=null,Oe=null,Xl=0,dr=1/0,bt=null,Lo=!1,Ka=null,Jt=null,$i=!1,Gt=null,Oo=0,Vr=0,Xa=null,io=-1,oo=0;function Re(){return V&6?ue():io!==-1?io:io=ue()}function en(e){return e.mode&1?V&2&&ke!==0?ke&-ke:zg.transition!==null?(oo===0&&(oo=ef()),oo):(e=q,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e):1}function lt(e,t,n,r){if(50<Vr)throw Vr=0,Xa=null,Error(k(185));mi(e,n,r),(!(V&2)||e!==xe)&&(e===xe&&(!(V&2)&&(is|=n),ge===4&&$t(e,ke)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(dr=ue()+500,es&&cn()))}function Fe(e,t){var n=e.callbackNode;z0(e,t);var r=vo(e,e===xe?ke:0);if(r===0)n!==null&&Rc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Rc(n),t===1)e.tag===0?Mg(Su.bind(null,e)):If(Su.bind(null,e)),jg(function(){!(V&6)&&cn()}),n=null;else{switch(tf(r)){case 1:n=bl;break;case 4:n=Zd;break;case 16:n=yo;break;case 536870912:n=Jd;break;default:n=yo}n=Ep(n,vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vp(e,t){if(io=-1,oo=0,V&6)throw Error(k(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=vo(e,e===xe?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=V;V|=2;var o=wp();(xe!==e||ke!==t)&&(bt=null,dr=ue()+500,wn(e,t));do try{im();break}catch(a){xp(e,a)}while(1);Ll(),jo.current=o,V=i,pe!==null?t=0:(xe=null,ke=0,t=ge)}if(t!==0){if(t===2&&(i=ka(e),i!==0&&(r=i,t=qa(e,i))),t===1)throw n=ui,wn(e,0),$t(e,r),Fe(e,ue()),n;if(t===6)$t(e,r);else{if(i=e.current.alternate,!(r&30)&&!nm(i)&&(t=Do(e,r),t===2&&(o=ka(e),o!==0&&(r=o,t=qa(e,o))),t===1))throw n=ui,wn(e,0),$t(e,r),Fe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:pn(e,Oe,bt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Xl+500-ue(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Na(pn.bind(null,e,Oe,bt),t);break}pn(e,Oe,bt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tm(r/1960))-r,10<r){e.timeoutHandle=Na(pn.bind(null,e,Oe,bt),r);break}pn(e,Oe,bt);break;case 5:pn(e,Oe,bt);break;default:throw Error(k(329))}}}return Fe(e,ue()),e.callbackNode===n?vp.bind(null,e):null}function qa(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Qa(t)),e}function Qa(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Kl,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Su(e){if(V&6)throw Error(k(327));Zn();var t=vo(e,0);if(!(t&1))return Fe(e,ue()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=ui,wn(e,0),$t(e,t),Fe(e,ue()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Oe,bt),Fe(e,ue()),null}function ql(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(dr=ue()+500,es&&cn())}}function In(e){Gt!==null&&Gt.tag===0&&!(V&6)&&Zn();var t=V;V|=1;var n=Qe.transition,r=q;try{if(Qe.transition=null,q=1,e)return e()}finally{q=r,Qe.transition=n,V=t,!(V&6)&&cn()}}function Ql(){Ue=Yn.current,te(Yn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ag(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:cr(),te(Me),te(Ie),Ul();break;case 5:Fl(r);break;case 4:cr();break;case 13:te(re);break;case 19:te(re);break;case 10:Ol(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(xe=e,pe=e=tn(e.current,null),ke=Ue=t,ge=0,ui=null,Kl=is=Tn=0,Oe=Wr=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yn=null}return e}function xp(e,t){do{var n=pe;try{if(Ll(),to.current=Ao,Ro){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ro=!1}if(En=0,ve=he=ie=null,$r=!1,ai=0,Gl.current=null,n===null||n.return===null){ge=1,ui=t,pe=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=ke,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=uu(s);if(y!==null){y.flags&=-257,du(y,s,a,o,t),y.mode&1&&cu(o,u,t),t=y,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){cu(o,u,t),Zl();break e}c=Error(k(426))}}else if(ne&&a.mode&1){var T=uu(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),du(T,s,a,o,t),Al(ur(c,a));break e}}o=c=ur(c,a),ge!==4&&(ge=2),Wr===null?Wr=[o]:Wr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=np(o,c,t);ru(o,h);break e;case 1:a=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=rp(o,a,t);ru(o,x);break e}}o=o.return}while(o!==null)}kp(n)}catch(S){t=S,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(1)}function wp(){var e=jo.current;return jo.current=Ao,e===null?Ao:e}function Zl(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(Tn&268435455)&&!(is&268435455)||$t(xe,ke)}function Do(e,t){var n=V;V|=2;var r=wp();(xe!==e||ke!==t)&&(bt=null,wn(e,t));do try{rm();break}catch(i){xp(e,i)}while(1);if(Ll(),V=n,jo.current=r,pe!==null)throw Error(k(261));return xe=null,ke=0,ge}function rm(){for(;pe!==null;)bp(pe)}function im(){for(;pe!==null&&!P0();)bp(pe)}function bp(e){var t=_p(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?kp(e):pe=t,Gl.current=null}function kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qg(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}else if(n=qg(n,t,Ue),n!==null){pe=n;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function pn(e,t,n){var r=q,i=Qe.transition;try{Qe.transition=null,q=1,om(e,t,n,r)}finally{Qe.transition=i,q=r}return null}function om(e,t,n,r){do Zn();while(Gt!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(F0(e,o),e===xe&&(pe=xe=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$i||($i=!0,Ep(yo,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=q;q=1;var a=V;V|=4,Gl.current=null,Jg(e,n),mp(n,e),Eg(Ca),xo=!!Ia,Ca=Ia=null,e.current=n,em(n),N0(),V=a,q=s,Qe.transition=o}else e.current=n;if($i&&($i=!1,Gt=e,Oo=i),o=e.pendingLanes,o===0&&(Jt=null),j0(n.stateNode),Fe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lo)throw Lo=!1,e=Ka,Ka=null,e;return Oo&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===Xa?Vr++:(Vr=0,Xa=e):Vr=0,cn(),null}function Zn(){if(Gt!==null){var e=tf(Oo),t=Qe.transition,n=q;try{if(Qe.transition=null,q=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Oo=0,V&6)throw Error(k(331));var i=V;for(V|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:Hr(8,f,o)}var p=f.child;if(p!==null)p.return=f,A=p;else for(;A!==null;){f=A;var g=f.sibling,y=f.return;if(pp(f),f===u){A=null;break}if(g!==null){g.return=y,A=g;break}A=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,A=h;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){s=A;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,A=m;else e:for(s=d;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rs(9,a)}}catch(S){ae(a,a.return,S)}if(a===s){A=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}if(V=i,cn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{q=n,Qe.transition=t}}return!1}function _u(e,t,n){t=ur(n,t),t=np(e,t,1),e=Zt(e,t,1),t=Re(),e!==null&&(mi(e,1,t),Fe(e,t))}function ae(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=ur(n,e),e=rp(t,e,1),t=Zt(t,e,1),e=Re(),t!==null&&(mi(t,1,e),Fe(t,e));break}}t=t.return}}function sm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(ke&n)===n&&(ge===4||ge===3&&(ke&130023424)===ke&&500>ue()-Xl?wn(e,0):Kl|=n),Fe(e,t)}function Sp(e,t){t===0&&(e.mode&1?(t=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):t=1);var n=Re();e=At(e,t),e!==null&&(mi(e,t,n),Fe(e,n))}function am(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sp(e,n)}function lm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Sp(e,n)}var _p;_p=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Xg(e,t,n);De=!!(e.flags&131072)}else De=!1,ne&&t.flags&1048576&&Cf(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=sr(t,Ie.current);Qn(t,n),i=$l(null,t,r,e,i,n);var o=Hl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,_o(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ml(t),i.updater=ns,t.stateNode=i,i._reactInternals=t,Ma(t,r,e,n),t=Ua(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&Nl(t),Ne(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=um(r),e=rt(r,e),i){case 0:t=Fa(null,t,r,e,n);break e;case 1:t=hu(null,t,r,e,n);break e;case 11:t=fu(null,t,r,e,n);break e;case 14:t=pu(null,t,r,rt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Fa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),hu(e,t,r,i,n);case 3:e:{if(ap(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Lf(e,t),Po(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ur(Error(k(423)),t),t=gu(e,t,r,n,i);break e}else if(r!==i){i=ur(Error(k(424)),t),t=gu(e,t,r,n,i);break e}else for(Be=Qt(t.stateNode.containerInfo.firstChild),$e=t,ne=!0,ot=null,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=jt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return Of(t),e===null&&La(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Pa(r,i)?s=null:o!==null&&Pa(r,o)&&(t.flags|=32),sp(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&La(t),null;case 13:return lp(e,t,n);case 4:return zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),fu(e,t,r,i,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,J(Io,r._currentValue),r._currentValue=s,o!==null)if(ct(o.value,s)){if(o.children===i.children&&!Me.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ct(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Oa(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Oa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qn(t,n),i=Ze(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,i=rt(r,t.pendingProps),i=rt(r.type,i),pu(e,t,r,i,n);case 15:return ip(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),ro(e,t),t.tag=1,ze(r)?(e=!0,_o(t)):e=!1,Qn(t,n),tp(t,r,i),Ma(t,r,i,n),Ua(null,t,r,!0,e,n);case 19:return cp(e,t,n);case 22:return op(e,t,n)}throw Error(k(156,t.tag))};function Ep(e,t){return Qd(e,t)}function cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new cm(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function um(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===xl)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function so(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Jl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Dn:return bn(n.children,i,o,t);case yl:s=8,i|=8;break;case aa:return e=qe(12,n,t,i|2),e.elementType=aa,e.lanes=o,e;case la:return e=qe(13,n,t,i),e.elementType=la,e.lanes=o,e;case ca:return e=qe(19,n,t,i),e.elementType=ca,e.lanes=o,e;case Ld:return os(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ad:s=10;break e;case jd:s=9;break e;case vl:s=11;break e;case xl:s=14;break e;case Ft:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function bn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function os(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Ld,e.lanes=n,e.stateNode={isHidden:!1},e}function Vs(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Ys(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ts(0),this.expirationTimes=Ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ts(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(e,t,n,r,i,o,s,a,c){return e=new dm(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(o),e}function fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tp(e){if(!e)return sn;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ze(n))return Tf(e,n,t)}return t}function Ip(e,t,n,r,i,o,s,a,c){return e=ec(n,r,!0,e,i,o,s,a,c),e.context=Tp(null),n=e.current,r=Re(),i=en(n),o=Ct(r,i),o.callback=t??null,Zt(n,o,i),e.current.lanes=i,mi(e,i,r),Fe(e,r),e}function ss(e,t,n,r){var i=t.current,o=Re(),s=en(i);return n=Tp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,s),e!==null&&(lt(e,i,s,o),eo(e,i,s)),s}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tc(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function pm(){return null}var Cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nc(e){this._internalRoot=e}as.prototype.render=nc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ss(e,t,null,null)};as.prototype.unmount=nc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){ss(null,e,null,null)}),t[Rt]=null}};function as(e){this._internalRoot=e}as.prototype.unstable_scheduleHydration=function(e){if(e){var t=of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&af(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tu(){}function hm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Mo(s);o.call(u)}}var s=Ip(t,r,e,0,null,!1,!1,"",Tu);return e._reactRootContainer=s,e[Rt]=s.current,ni(e.nodeType===8?e.parentNode:e),In(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Mo(c);a.call(u)}}var c=ec(e,0,!1,null,null,!1,!1,"",Tu);return e._reactRootContainer=c,e[Rt]=c.current,ni(e.nodeType===8?e.parentNode:e),In(function(){ss(t,c,n,r)}),c}function cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=Mo(s);a.call(c)}}ss(t,s,e,i)}else s=hm(n,t,e,i,r);return Mo(s)}nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(kl(t,n|1),Fe(t,ue()),!(V&6)&&(dr=ue()+500,cn()))}break;case 13:In(function(){var r=At(e,1);if(r!==null){var i=Re();lt(r,e,1,i)}}),tc(e,1)}};Sl=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Re();lt(t,e,134217728,n)}tc(e,134217728)}};rf=function(e){if(e.tag===13){var t=en(e),n=At(e,t);if(n!==null){var r=Re();lt(n,e,t,r)}tc(e,t)}};of=function(){return q};sf=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};xa=function(e,t,n){switch(t){case"input":if(fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(k(90));Dd(r),fa(r,i)}}}break;case"textarea":zd(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};Vd=ql;Yd=In;var gm={usingClientEntryPoint:!1,Events:[vi,Un,Jo,Hd,Wd,ql]},Ir={findFiberByHostInstance:mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mm={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{Xo=Hi.inject(mm),gt=Hi}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(t))throw Error(k(200));return fm(e,t,null,n)};We.createRoot=function(e,t){if(!rc(e))throw Error(k(299));var n=!1,r="",i=Cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ec(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,ni(e.nodeType===8?e.parentNode:e),new nc(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Xd(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return In(e)};We.hydrate=function(e,t,n){if(!ls(t))throw Error(k(200));return cs(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!rc(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Cp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ip(t,null,e,1,n??null,i,!1,o,s),e[Rt]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new as(t)};We.render=function(e,t,n){if(!ls(t))throw Error(k(200));return cs(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ls(e))throw Error(k(40));return e._reactRootContainer?(In(function(){cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};We.unstable_batchedUpdates=ql;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ls(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return cs(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),Cd.exports=We;var ym=Cd.exports,Iu=ym;oa.createRoot=Iu.createRoot,oa.hydrateRoot=Iu.hydrateRoot;var vm=typeof Element<"u",xm=typeof Map=="function",wm=typeof Set=="function",bm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ao(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ao(e[r],t[r]))return!1;return!0}var o;if(xm&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ao(r.value[1],t.get(r.value[0])))return!1;return!0}if(wm&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(bm&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(vm&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!ao(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var km=function(t,n){try{return ao(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Sm=Go(km);var _m=function(e,t,n,r,i,o,s,a){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],f=0;c=new Error(t.replace(/%s/g,function(){return u[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Em=_m;const Cu=Go(Em);var Tm=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var f=s[u];if(!c(f))return!1;var p=t[f],g=n[f];if(o=r?r.call(i,p,g,f):void 0,o===!1||o===void 0&&p!==g)return!1}return!0};const Im=Go(Tm);var Np=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Np||{}),Gs={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Pu=Object.values(Np),ic={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Cm=Object.entries(ic).reduce((e,[t,n])=>(e[n]=t,e),{}),st="data-rh",Jn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},er=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Pm=e=>{let t=er(e,"title");const n=er(e,Jn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=er(e,Jn.DEFAULT_TITLE);return t||r||void 0},Nm=e=>er(e,Jn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ks=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Rm=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),Am=e=>console&&typeof console.warn=="function"&&console.warn(e),Cr=(e,t,n)=>{const r={};return n.filter(i=>Array.isArray(i[e])?!0:(typeof i[e]<"u"&&Am(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`),!1)).map(i=>i[e]).reverse().reduce((i,o)=>{const s={};o.filter(c=>{let u;const f=Object.keys(c);for(let g=0;g<f.length;g+=1){const y=f[g],v=y.toLowerCase();t.indexOf(v)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(v==="rel"&&c[v].toLowerCase()==="stylesheet")&&(u=v),t.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(u=y)}if(!u||!c[u])return!1;const p=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][p]?!1:(s[u][p]=!0,!0)}).reverse().forEach(c=>i.push(c));const a=Object.keys(s);for(let c=0;c<a.length;c+=1){const u=a[c],f={...r[u],...s[u]};r[u]=f}return i},[]).reverse()},jm=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Lm=e=>({baseTag:Rm(["href"],e),bodyAttributes:Ks("bodyAttributes",e),defer:er(e,Jn.DEFER),encode:er(e,Jn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ks("htmlAttributes",e),linkTags:Cr("link",["rel","href"],e),metaTags:Cr("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Cr("noscript",["innerHTML"],e),onChangeClientState:Nm(e),scriptTags:Cr("script",["src","innerHTML"],e),styleTags:Cr("style",["cssText"],e),title:Pm(e),titleAttributes:Ks("titleAttributes",e),prioritizeSeoTags:jm(e,Jn.PRIORITIZE_SEO_TAGS)}),Rp=e=>Array.isArray(e)?e.join(""):e,Om=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Xs=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Om(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},Nu=(e,t)=>({...e,[t]:void 0}),Dm=["noscript","script","style"],Za=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ap=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Mm=(e,t,n,r)=>{const i=Ap(n),o=Rp(t);return i?`<${e} ${st}="true" ${i}>${Za(o,r)}</${e}>`:`<${e} ${st}="true">${Za(o,r)}</${e}>`},zm=(e,t,n=!0)=>t.reduce((r,i)=>{const o=i,s=Object.keys(o).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,f)=>{const p=typeof o[f]>"u"?f:`${f}="${Za(o[f],n)}"`;return u?`${u} ${p}`:p},""),a=o.innerHTML||o.cssText||"",c=Dm.indexOf(e)===-1;return`${r}<${e} ${st}="true" ${s}${c?"/>":`>${a}</${e}>`}`},""),jp=(e,t={})=>Object.keys(e).reduce((n,r)=>{const i=ic[r];return n[i||r]=e[r],n},t),Fm=(e,t,n)=>{const r={key:t,[st]:!0},i=jp(n,r);return[ht.createElement("title",i,t)]},lo=(e,t)=>t.map((n,r)=>{const i={key:r,[st]:!0};return Object.keys(n).forEach(o=>{const a=ic[o]||o;if(a==="innerHTML"||a==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[a]=n[o]}),ht.createElement(e,i)}),Ge=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Fm(e,t.title,t.titleAttributes),toString:()=>Mm(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>jp(t),toString:()=>Ap(t)};default:return{toComponent:()=>lo(e,t),toString:()=>zm(e,t,n)}}},Um=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const i=Xs(e,Gs.meta),o=Xs(t,Gs.link),s=Xs(n,Gs.script);return{priorityMethods:{toComponent:()=>[...lo("meta",i.priority),...lo("link",o.priority),...lo("script",s.priority)],toString:()=>`${Ge("meta",i.priority,r)} ${Ge("link",o.priority,r)} ${Ge("script",s.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:s.default}},Bm=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:s,title:a="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:f,metaTags:p,scriptTags:g}=e,y={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:y,linkTags:f,metaTags:p,scriptTags:g}=Um(e)),{priority:y,base:Ge("base",t,r),bodyAttributes:Ge("bodyAttributes",n,r),htmlAttributes:Ge("htmlAttributes",i,r),link:Ge("link",f,r),meta:Ge("meta",p,r),noscript:Ge("noscript",o,r),script:Ge("script",g,r),style:Ge("style",s,r),title:Ge("title",{title:a,titleAttributes:c},r)}},Ja=Bm,Wi=[],Lp=!!(typeof window<"u"&&window.document&&window.document.createElement),el=class{constructor(e,t){wt(this,"instances",[]);wt(this,"canUseDOM",Lp);wt(this,"context");wt(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Wi:this.instances,add:e=>{(this.canUseDOM?Wi:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Wi:this.instances).indexOf(e);(this.canUseDOM?Wi:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ja({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},$m={},Op=ht.createContext($m),ir,Dp=(ir=class extends _.Component{constructor(n){super(n);wt(this,"helmetData");this.helmetData=new el(this.props.context||{},ir.canUseDOM)}render(){return ht.createElement(Op.Provider,{value:this.helmetData.value},this.props.children)}},wt(ir,"canUseDOM",Lp),ir),Ln=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${st}]`),i=[].slice.call(r),o=[];let s;return t&&t.length&&t.forEach(a=>{const c=document.createElement(e);for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u))if(u==="innerHTML")c.innerHTML=a.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText));else{const f=u,p=typeof a[f]>"u"?"":a[f];c.setAttribute(u,p)}c.setAttribute(st,"true"),i.some((u,f)=>(s=f,c.isEqualNode(u)))?i.splice(s,1):o.push(c)}),i.forEach(a=>{var c;return(c=a.parentNode)==null?void 0:c.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},tl=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(st),i=r?r.split(","):[],o=[...i],s=Object.keys(t);for(const a of s){const c=t[a]||"";n.getAttribute(a)!==c&&n.setAttribute(a,c),i.indexOf(a)===-1&&i.push(a);const u=o.indexOf(a);u!==-1&&o.splice(u,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(st):n.getAttribute(st)!==s.join(",")&&n.setAttribute(st,s.join(","))},Hm=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Rp(e)),tl("title",t)},Ru=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:s,noscriptTags:a,onChangeClientState:c,scriptTags:u,styleTags:f,title:p,titleAttributes:g}=e;tl("body",r),tl("html",i),Hm(p,g);const y={baseTag:Ln("base",n),linkTags:Ln("link",o),metaTags:Ln("meta",s),noscriptTags:Ln("noscript",a),scriptTags:Ln("script",u),styleTags:Ln("style",f)},v={},w={};Object.keys(y).forEach(T=>{const{newTags:h,oldTags:d}=y[T];h.length&&(v[T]=h),d.length&&(w[T]=y[T].oldTags)}),t&&t(),c(e,v,w)},Pr=null,Wm=e=>{Pr&&cancelAnimationFrame(Pr),e.defer?Pr=requestAnimationFrame(()=>{Ru(e,()=>{Pr=null})}):(Ru(e),Pr=null)},Vm=Wm,Au=class extends _.Component{constructor(){super(...arguments);wt(this,"rendered",!1)}shouldComponentUpdate(t){return!Im(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const i=Lm(t.get().map(o=>{const s={...o.props};return delete s.context,s}));Dp.canUseDOM?Vm(i):Ja&&(r=Ja(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},ia,Ym=(ia=class extends _.Component{shouldComponentUpdate(e){return!Sm(Nu(this.props,"helmetData"),Nu(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return Cu(Pu.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Pu.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Cu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return ht.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,s=Object.keys(o).reduce((c,u)=>(c[Cm[u]||u]=o[u],c),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(i,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:t=this.mapObjectTypeChildren(r,t,s,i);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof el)){const i=r;r=new el(i.context,!0),delete n.helmetData}return r?ht.createElement(Au,{...n,context:r.value}):ht.createElement(Op.Consumer,null,i=>ht.createElement(Au,{...n,context:i}))}},wt(ia,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ia);const ye={primary:"#0ea5e9",primaryDark:"#0284c7",primaryLight:"#38bdf8",primaryGlow:"rgba(14, 165, 233, 0.35)",primaryFaint:"rgba(14, 165, 233, 0.08)",accent:"#06b6d4",accentDark:"#0891b2",green:"#16a34a",greenLight:"#22c55e",red:"#ef4444",grad:"linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",gradHero:"linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",gradAnimated:"linear-gradient(270deg, #0284c7, #06b6d4, #0ea5e9, #38bdf8)",bgLight:"#ffffff",surfLight:"#f0f9ff",surfLight2:"#e0f2fe",borderLight:"#cbd5e1",textLight:"#0f172a",textMidLight:"#475569",textDimLight:"#94a3b8",bgDark:"#020617",surfDark:"#0f172a",surfDark2:"#1e293b",borderDark:"#334155",textDark:"#f1f5f9",textMidDark:"#94a3b8",textDimDark:"#64748b",fontDisplay:"'DM Sans', 'Inter', system-ui, sans-serif",fontBody:"'DM Sans', 'Inter', system-ui, sans-serif",radiusSm:"6px",radiusMd:"10px",radiusLg:"14px",radiusXl:"20px",radiusCard:"16px",shadowSm:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",shadowMd:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",shadowLg:"0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",shadowXl:"0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)"},Mp=e=>({bg:e?ye.bgDark:ye.bgLight,surf:e?ye.surfDark:ye.surfLight,surf2:e?ye.surfDark2:ye.surfLight2,border:e?ye.borderDark:ye.borderLight,text:e?ye.textDark:ye.textLight,textMid:e?ye.textMidDark:ye.textMidLight,textDim:e?ye.textDimDark:ye.textDimLight}),Gm={en:{heroTitle:"Classic Printing.",heroTitle2:"Modern Precision.",heroSub:"Trusted printing & finishing services in Delhi since 1995",yearsActive:"30+ YEARS ACTIVE",booksPrinted:"50K+ BOOKS PRINTED",happyClients:"500+ HAPPY CLIENTS",heroTrust:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",productsEyebrow:"What we offer",productsTitle:"Our Printing Services",productsIntro:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi.",productBulkTitle:"Bulk Book Printing",productBulkDesc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",productThermalTitle:"Thermal Gloss Lamination",productThermalDesc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",productMatteTitle:"Matte Lamination",productMatteDesc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",productSoftTouchTitle:"Soft-Touch Lamination",productSoftTouchDesc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",productTitlePrintingTitle:"Title Printing",productTitlePrintingDesc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",galleryEyebrow:"Our Machinery",galleryTitle:"Built for",galleryTitleEm:"Precision",galleryDesc:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality.",galleryYouTubeText:"Want to see these machines in action? Watch live demos on our",machineCategoryOffset:"Offset Printing",machineCategoryPlate:"Plate Making",machineCategoryLamination:"Lamination",machineCategoryFinishing:"Finishing",machineTagFlagship:"Flagship",machineTagIndustryLeader:"Industry Leader",machineTagAlcoholDamped:"Alcohol-Damped",machineTagAutomated:"Automated",machineTagHighSpeed:"High-Speed",machineTagUltraPrecise:"Ultra Precise",machineHeidelbergSpeedmasterDesc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",machineHeidelbergPrintingDesc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",machineAkiyamaDesc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",machineAutoplateDesc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",machineSORDZDesc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",machineThermalLaminationDesc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",machinePaperCutterDesc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",machineSpec4Colour:"Up to 4-colour",machineSpecMultiColour:"Multi-colour output",machineSpec19x26:"Size: 19×26 in",machineSpecAutoPlate:"Auto plate loading",machineSpec25x36:"Size: 25×36 in",machineSpecAccuracy:"±0.01mm accuracy",machineSpecHighVolume:"High-volume ready",woTitle:"WEB OFFSET PRINTING",woTagline:"SPEED. SCALE. PRECISION.",woHeroTitle:"Built for High-Volume Excellence",woHeroDesc:"Web offset printing is designed for non-stop production, and at BK Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",woHeroDesc2:"Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",woPerfTitle:"Performance That Goes Beyond Printing",woPerfDesc:"Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",woPerfList:["UV & protective varnishing","Punching and perforation (portrait & landscape)","Folding (standard to creative formats)","Gluing and binding preparation","Custom finishing solutions for special publications"],woPerfFoot:"This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",woEnvTitle:"High Speed. Lower Environmental Impact.",woEnvDesc:"Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",woEnvList:["Energy consumption","Material waste","Production downtime"],woEnvFoot:"This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",woSusTitle:"Responsible Printing for a Sustainable Future",woSusDesc:"Environmental care is built into every stage of our process.",woSusList:["Low-energy drying technology to minimize fuel usage","Alcohol-free printing processes","Avoidance of harmful volatile solvents","Use of eco-friendly inks and consumables","Strict paper waste segregation and recycling"],woSusFoot:"All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",visit:"Visit Our Press",locationEyebrow:"Find Us",locationTitle:"Visit Our",locationTitleEm:"Press",locationDesc:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration.",locationAddressLabel:"Address",locationAddress:"Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi – 110095",locationCopyAddress:"Copy address",locationCopied:"Copied!",locationHoursLabel:"Working Hours",locationHoursMonSun:"Monday – Sunday",locationHoursTime:"10:00 AM – 6:00 PM",locationTuesday:"Tuesday",locationClosed:"Closed",locationGetDirections:"Get Directions",locationOpenInMaps:"Open in Google Maps",signIn:"Sign In",signInTitle:"Welcome Back",register:"Register",registerTitle:"Create Account",emailLabel:"Email",passwordLabel:"Password",firstNameLabel:"First Name",lastNameLabel:"Last Name",continueWithGoogle:"Continue with Google",processing:"Processing...",forgotPassword:"Forgot Password?",noAccount:"Don't have an account?",haveAccount:"Already have an account?",footerTagline:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",copyright:"© BK Offset Printing. All rights reserved."},hi:{heroTitle:"क्लासिक प्रिंटिंग।",heroTitle2:"आधुनिक गुणवत्ता।",heroSub:"1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",yearsActive:"30+ वर्ष सक्रिय",booksPrinted:"50K+ पुस्तकें मुद्रित",happyClients:"500+ संतुष्ट ग्राहक",heroTrust:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",productsEyebrow:"हमारी पेशकश",productsTitle:"हमारी प्रिंटिंग सेवाएँ",productsIntro:"उच्च गुणवत्ता वाली बल्क बुक प्रिंटिंग और पेशेवर लेमिनेशन सेवाओं में विशेषज्ञता। हम प्रीमियम फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करते हैं, जो दिल्ली भर के प्रकाशकों, लेखकों और व्यवसायों की सेवा करते हैं।",productBulkTitle:"बल्क बुक प्रिंटिंग",productBulkDesc:"प्रकाशकों, लेखकों और संस्थानों के लिए उच्च-मात्रा मुद्रण। हजारों प्रतियों में लगातार गुणवत्ता — पाठ्यपुस्तकें, उपन्यास, कैटलॉग और मैनुअल।",productThermalTitle:"थर्मल ग्लॉस लेमिनेशन",productThermalDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर प्रीमियम ग्लॉस लेमिनेशन। एक चमकदार, सुरक्षात्मक फिनिश जो रंगों को जीवंत बनाती है और दैनिक उपयोग को सहन करती है।",productMatteTitle:"मैट लेमिनेशन",productMatteDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर परिष्कृत, गैर-चिंतनशील फिनिश। प्रीमियम कवर के लिए आदर्श जो दिखने में उतने ही अच्छे लगते हैं जितना वे महसूस होते हैं।",productSoftTouchTitle:"सॉफ्ट-टच लेमिनेशन",productSoftTouchDesc:"मखमली, शानदार बनावट जो हर मुद्रित टुकड़े को एक अनुभव में बदल देती है। पुस्तक कवर, प्रीमियम ब्रोशर और कलेक्टर के संस्करणों के लिए आदर्श।",productTitlePrintingTitle:"टाइटल प्रिंटिंग",productTitlePrintingDesc:"पुस्तक रीढ़, विशेष-संस्करण कवर और ब्रांडेड कोलेटरल के लिए कस्टम टाइटल कार्य। हर विवरण आपके शीर्षक को अविस्मरणीय बनाने के लिए तैयार किया गया है।",galleryEyebrow:"हमारी मशीनरी",galleryTitle:"के लिए निर्मित",galleryTitleEm:"परिशुद्धता",galleryDesc:"विश्व स्तरीय हीडलबर्ग और अकियामा उपकरण — दोषरहित आउटपुट, अधिकतम थ्रूपुट और गुणवत्ता पर शून्य समझौता के लिए इंजीनियर किए गए।",galleryYouTubeText:"इन मशीनों को क्रियाशील देखना चाहते हैं? हमारे पर लाइव डेमो देखें",machineCategoryOffset:"ऑफसेट प्रिंटिंग",machineCategoryPlate:"प्लेट मेकिंग",machineCategoryLamination:"लेमिनेशन",machineCategoryFinishing:"फिनिशिंग",machineTagFlagship:"फ्लैगशिप",machineTagIndustryLeader:"उद्योग नेता",machineTagAlcoholDamped:"अल्कोहल-डैम्प्ड",machineTagAutomated:"स्वचालित",machineTagHighSpeed:"हाई-स्पीड",machineTagUltraPrecise:"अल्ट्रा प्रिसाइज",machineHeidelbergSpeedmasterDesc:"हीडलबर्ग स्पीडमास्टर — दुनिया का सबसे भरोसेमंद मल्टीकलर प्रेस। अत्याधुनिक इंटेलिस्टार्ट तकनीक के साथ पीक परफॉर्मेंस के लिए इंजीनियर किया गया, अद्वितीय प्रिंट गुणवत्ता प्रदान करता है।",machineHeidelbergPrintingDesc:"अत्याधुनिक हीडलबर्ग — सटीक इंजीनियरिंग में एक बेंचमार्क। सिंगल-कलर से लेकर जटिल मल्टी-कलर प्रोजेक्ट्स तक, स्वचालित नियंत्रण, तेज़ प्लेट परिवर्तन, और दोषरहित रजिस्ट्रेशन बेहतर आउटपुट प्रदान करते हैं।",machineAkiyamaDesc:"अकियामा अल्कोहल-डैम्प्ड 4-कलर प्रेस — साइज़ 19×26 इंच। अल्कोहल डैम्पिंग सिस्टम बेहतर इंक-वॉटर बैलेंस प्रदान करता है, पूरी शीट पर जीवंत, सुसंगत रंग देता है।",machineAutoplateDesc:"पूरी तरह से स्वचालित प्लेट-लोडिंग सिस्टम जो मैनुअल हैंडलिंग त्रुटियों को समाप्त करता है। मेकरेडी समय को काफी कम करता है, लगातार प्लेट रजिस्ट्रेशन सुनिश्चित करता है।",machineSORDZDesc:"हीडलबर्ग SORDZ 2-कलर ऑफसेट प्रिंटिंग मशीन। शीट साइज़ 25×36 इंच — मध्यम-प्रारूप व्यावसायिक कार्य के लिए पूरी तरह से संतुलित। अपने मजबूत निर्माण और लंबे रनों में लगातार रंग प्रजनन के लिए प्रसिद्ध।",machineThermalLaminationDesc:"औद्योगिक-ग्रेड थर्मल लेमिनेशन, फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करके दोषरहित ग्लॉस और मैट फिनिश प्रदान करता है। प्रिसिजन हीट कंट्रोल के साथ उच्च मात्रा को संभालता है।",machinePaperCutterDesc:"स्वचालित पेपर कटर अविश्वसनीय गति पर सटीक और दोषरहित कटौती प्रदान करता है। उच्च-मात्रा प्रिंटिंग और पेपर प्रोसेसिंग के लिए आदर्श।",machineSpec4Colour:"4-कलर तक",machineSpecMultiColour:"मल्टी-कलर आउटपुट",machineSpec19x26:"साइज़: 19×26 इंच",machineSpecAutoPlate:"ऑटो प्लेट लोडिंग",machineSpec25x36:"साइज़: 25×36 इंच",machineSpecAccuracy:"±0.01mm सटीकता",machineSpecHighVolume:"हाई-वॉल्यूम रेडी",woTitle:"वेब ऑफ़्सेट प्रिंटिंग",woTagline:"गति। पैमाना। सटीकता।",woHeroTitle:"हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",woHeroDesc:"वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है। हमारे उन्नत मल्टी-कलर रोटरी प्रेस असाधारण गति पर लगातार गुणवत्ता प्रदान करते हैं, जो उन्हें पत्रिकाओं, कैटलॉग, ब्रोशर और प्रचार प्रकाशनों के लिए आदर्श बनाता है।",woHeroDesc2:"हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है, लाखों इंप्रेशन में भी शार्प इमेज और यूनिफॉर्म कलर रिप्रोडक्शन सुनिश्चित करता है।",woPerfTitle:"प्रिंटिंग से आगे की पर्फॉर्मेंस",woPerfDesc:"हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग से लैस हैं, जो एक ही रन में कई प्रक्रियाओं को होने देते हैं। इसका मतलब है तेज़ टर्नअराउंड समय और दोषरहित परिणाम।",woPerfList:["UV और प्रोटेक्टिव वार्निशिंग","पंचिंग और पर्फोरेशन (पोर्ट्रेट और लैंडस्केप)","फोल्डिंग (स्टैंडर्ड से क्रिएटिव फॉर्मेट)","ग्लुइंग और बाइंडिंग प्रेपरेशन","स्पेशल पब्लिकेशन के लिए कस्टम फिनिशिंग सॉल्यूशंस"],woPerfFoot:"यह सीमलेस वर्कफ़लो हमें रेडी-टू-यूज़ प्रिंटेड प्रोडक्ट्स अद्वितीय दक्षता के साथ डिलीवर करने में मदद करता है।",woEnvTitle:"हाई स्पीड। कम पर्यावरणीय प्रभाव।",woEnvDesc:"हमारे वेब ऑफ़्सेट ऑपरेशन ऊर्जा-कुशल और पर्यावरण के प्रति जिम्मेदार होने के लिए इंजीनियर किए गए हैं।",woEnvList:["ऊर्जा खपत","सामग्री अपशिष्ट","प्रोडक्शन डाउनटाइम"],woEnvFoot:"यह हमें 24/7 प्रोडक्शन साइकिल के दौरान भी उच्च उत्पादकता को सस्टेनेबल प्रैक्टिसेज़ के साथ संयोजित करने की अनुमति देता है।",woSusTitle:"सस्टेनेबल फ्यूचर के लिए जिम्मेदार प्रिंटिंग",woSusDesc:"पर्यावरण देखभाल हमारी प्रक्रिया के हर चरण में बनाई गई है।",woSusList:["लो-एनर्जी ड्राइंग टेक्नोलॉजी","अल्कोहल-फ्री प्रिंटिंग प्रोसेस","हानिकारक वाष्पशील सॉल्वैंट्स से बचाव","इको-फ्रेंडली इंक्स और उपभोग्य सामग्रियों का उपयोग","सख्त पेपर वेस्ट सेग्रीगेशन और रिसाइक्लिंग"],woSusFoot:"सभी पेपर वेस्ट को सावधानीपूर्वक एकत्र किया जाता है और पुन: उपयोग के लिए निर्माताओं को लौटाया जाता है — एक क्लोज्ड-लूप रिसाइक्लिंग सिस्टम का समर्थन करता है।",visit:"हमारा प्रेस देखें",locationEyebrow:"हमें ढूंढें",locationTitle:"हमारा",locationTitleEm:"प्रेस",locationDesc:"हमारी मशीनों को व्यक्तिगत रूप से देखने आएं। हम प्रकाशकों, लेखकों और व्यवसायों का लाइव प्रदर्शन के लिए स्वागत करते हैं।",locationAddressLabel:"पता",locationAddress:"स्ट्रीट नंबर 2, जुल्फे बंगाल, दिलशाद गार्डन, दिल्ली – 110095",locationCopyAddress:"पता कॉपी करें",locationCopied:"कॉपी हो गया!",locationHoursLabel:"कार्य के घंटे",locationHoursMonSun:"सोमवार – रविवार",locationHoursTime:"सुबह 10:00 – शाम 6:00",locationTuesday:"मंगलवार",locationClosed:"बंद",locationGetDirections:"दिशा-निर्देश प्राप्त करें",locationOpenInMaps:"गूगल मैप्स में खोलें",signIn:"साइन इन",signInTitle:"वापस स्वागत है",register:"रजिस्टर",registerTitle:"खाता बनाएँ",emailLabel:"ईमेल",passwordLabel:"पासवर्ड",firstNameLabel:"पहला नाम",lastNameLabel:"अंतिम नाम",continueWithGoogle:"गूगल के साथ जारी रखें",processing:"प्रोसेसिंग...",forgotPassword:"पासवर्ड भूल गए?",noAccount:"खाता नहीं है?",haveAccount:"पहले से ही खाता है?",footerTagline:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",copyright:"© बीके ऑफसेट प्रिंटिंग। सर्वाधिकार सुरक्षित।"}},Km="+91-9560959039",Xm="https://wa.me/919560959039",qm=50,ju={THEME:"bk_theme",USER:"bk_user",LANG:"bk_lang"},Qm=["https://imgs.search.brave.com/d-BxVJB0AVwv7mytORTSGUxHpqMjhHtXeMTPvJqZIPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvODB6X0hUbVRs/ZDQvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/HXs3SA9y5tqE3-KGyiE53BmUGqKZaxqNbzgADA568tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQy0xaEdEd21a/WEkvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/8sgKubUmPoPQfFSODo5PPaOi7AUVqGw_TIS14-PxwQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVz/cy1wcmludGluZy1w/cmludHNob3Atb2Zm/c2V0LTE2OTMxMzI2/LmpwZw","https://imgs.search.brave.com/prJNhXtQjZFHiNNQsg6lEPcAheXrDNlY1szXvRBQlCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc3MDY5L3Bob3Rv/L29mZnNldC1wcmlu/dGluZy1tYWNoaW5l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10aHF3cWl2ellU/SEtCdzBxYzgtODBM/UFVvX1AxVHlaMExq/bHQ0RDlhdm0wPQ","https://imgs.search.brave.com/GT4miD1XayG3oiBz9XsPpJ26JFAv4R1pj4j1e_8rwt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODg1OTczL3Bob3Rv/L3BvbHlncmFwaGlj/LXByb2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVp0/NVE3VnpGREJwX1Nj/Z0d5ZVRRTHprRFNO/MUJ1aS1xaV96eW9N/dzl2TEk9","https://imgs.search.brave.com/W3t3GjUQl9eULJkzTE2O694CXodPY8Jn1OZCXSBBGNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI1NjM0My9waG90/by9wYXBlci10cmlt/bWluZy1vbi1hLWd1/aWxsb3RpbmUtcHJp/bnRpbmctaG91c2Ut/Y3V0dGVyLWZvci1j/dXR0aW5nLXBhcGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZlBQRmZpLXBH/Nnp1Q2lyTUxwcUxD/UkdFQV91NE1sNTZu/UXUtTVlRcTRBPQ","https://imgs.search.brave.com/3zVRqhp8m_8bPZQUGAFEZ8pl7YQlHdzqJmMLi0g1SzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFjaGluZXNlZWtl/ci5jb20vZGF0YS9s/aXN0aW5nL2ltZy92/Z2EvbXMvNTEvNTYv/MjEwNzgyMTItMDgu/anBnP3Y9MTc2OTUw/NDA5NA","https://imgs.search.brave.com/jIEpK8ZUTWenoD4ppVVn1tb3GOdOfbNmJ50jcNh10QQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/OTE0OTM4L3Bob3Rv/L2hlYXZ5LWR1dHkt/cGFwZXItZ3VpbGxv/dGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV82YWEt/djlqQkFYWGdKekNx/bGRrbWkzaFZUSW5m/X1l6MUd2R01EN0E3/WT0"];function Zm(){const[e,t]=_.useState(()=>sessionStorage.getItem(ju.THEME)||"dark"),n=()=>{const r=e==="light"?"dark":"light";t(r),sessionStorage.setItem(ju.THEME,r)};return _.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]),{theme:e,toggleTheme:n,isDark:e==="light"}}const zp=_.createContext();function Jm({children:e}){const t=Zm();return l.jsx(zp.Provider,{value:t,children:e})}function Lu(){return _.useContext(zp)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},e1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,f=o>>2,p=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;c||(y=64,s||(g=64)),r.push(n[f],n[p],n[g],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fp(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):e1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw new t1;const g=o<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const v=u<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class t1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const n1=function(e){const t=Fp(e);return Up.encodeByteArray(t,!0)},Bp=function(e){return n1(e).replace(/\./g,"")},$p=function(e){try{return Up.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=()=>r1().__FIREBASE_DEFAULTS__,o1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},s1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$p(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return i1()||o1()||s1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},a1=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Hp=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},Wp=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function u1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function d1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function f1(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p1(){try{return typeof indexedDB=="object"}catch{return!1}}function h1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="FirebaseError";class un extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=g1,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?m1(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new un(i,a,r)}}function m1(e,t){return e.replace(y1,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const y1=/\{\$([^}]+)}/g;function v1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Ou(o)&&Ou(s)){if(!zo(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ou(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Or(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Dr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function x1(e,t){const n=new w1(e,t);return n.subscribe.bind(n)}class w1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");b1(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b1(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function qs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return e&&e._delegate?e._delegate:e}class fr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new l1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_1(t))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=hn){return this.instances.has(t)}getOptions(t=hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S1(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=hn){return this.component?this.component.multipleInstances?t:hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S1(e){return e===hn?void 0:e}function _1(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new k1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Q||(Q={}));const T1={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},I1=Q.INFO,C1={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},P1=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=C1[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Vp{constructor(t){this.name=t,this._logLevel=I1,this._logHandler=P1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?T1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const N1=(e,t)=>t.some(n=>e instanceof n);let Du,Mu;function R1(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,nl=new WeakMap,Gp=new WeakMap,Qs=new WeakMap,sc=new WeakMap;function j1(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(nn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Yp.set(n,e)}).catch(()=>{}),sc.set(t,e),t}function L1(e){if(nl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});nl.set(e,t)}let rl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return nl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function O1(e){rl=e(rl)}function D1(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Zs(this),t,...n);return Gp.set(r,t.sort?t.sort():[t]),nn(r)}:A1().includes(e)?function(...t){return e.apply(Zs(this),t),nn(Yp.get(this))}:function(...t){return nn(e.apply(Zs(this),t))}}function M1(e){return typeof e=="function"?D1(e):(e instanceof IDBTransaction&&L1(e),N1(e,R1())?new Proxy(e,rl):e)}function nn(e){if(e instanceof IDBRequest)return j1(e);if(Qs.has(e))return Qs.get(e);const t=M1(e);return t!==e&&(Qs.set(e,t),sc.set(t,e)),t}const Zs=e=>sc.get(e);function z1(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=nn(s);return r&&s.addEventListener("upgradeneeded",c=>{r(nn(s.result),c.oldVersion,c.newVersion,nn(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const F1=["get","getKey","getAll","getAllKeys","count"],U1=["put","add","delete","clear"],Js=new Map;function zu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Js.get(t))return Js.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=U1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F1.includes(n)))return;const o=async function(s,...a){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Js.set(t,o),o}O1(e=>({...e,get:(t,n,r)=>zu(t,n)||e.get(t,n,r),has:(t,n)=>!!zu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const il="@firebase/app",Fu="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Vp("@firebase/app"),H1="@firebase/app-compat",W1="@firebase/analytics-compat",V1="@firebase/analytics",Y1="@firebase/app-check-compat",G1="@firebase/app-check",K1="@firebase/auth",X1="@firebase/auth-compat",q1="@firebase/database",Q1="@firebase/database-compat",Z1="@firebase/functions",J1="@firebase/functions-compat",ey="@firebase/installations",ty="@firebase/installations-compat",ny="@firebase/messaging",ry="@firebase/messaging-compat",iy="@firebase/performance",oy="@firebase/performance-compat",sy="@firebase/remote-config",ay="@firebase/remote-config-compat",ly="@firebase/storage",cy="@firebase/storage-compat",uy="@firebase/firestore",dy="@firebase/firestore-compat",fy="firebase",py="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="[DEFAULT]",hy={[il]:"fire-core",[H1]:"fire-core-compat",[V1]:"fire-analytics",[W1]:"fire-analytics-compat",[G1]:"fire-app-check",[Y1]:"fire-app-check-compat",[K1]:"fire-auth",[X1]:"fire-auth-compat",[q1]:"fire-rtdb",[Q1]:"fire-rtdb-compat",[Z1]:"fire-fn",[J1]:"fire-fn-compat",[ey]:"fire-iid",[ty]:"fire-iid-compat",[ny]:"fire-fcm",[ry]:"fire-fcm-compat",[iy]:"fire-perf",[oy]:"fire-perf-compat",[sy]:"fire-rc",[ay]:"fire-rc-compat",[ly]:"fire-gcs",[cy]:"fire-gcs-compat",[uy]:"fire-fst",[dy]:"fire-fst-compat","fire-js":"fire-js",[fy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Map,sl=new Map;function gy(e,t){try{e.container.addComponent(t)}catch(n){Cn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function di(e){const t=e.name;if(sl.has(t))return Cn.debug(`There were multiple attempts to register component ${t}.`),!1;sl.set(t,e);for(const n of Fo.values())gy(n,e);return!0}function Kp(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rn=new wi("app","Firebase",my);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=py;function Xp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ol,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw rn.create("bad-app-name",{appName:String(i)});if(n||(n=Hp()),!n)throw rn.create("no-options");const o=Fo.get(i);if(o){if(zo(n,o.options)&&zo(r,o.config))return o;throw rn.create("duplicate-app",{appName:i})}const s=new E1(i);for(const c of sl.values())s.addComponent(c);const a=new yy(n,r,s);return Fo.set(i,a),a}function vy(e=ol){const t=Fo.get(e);if(!t&&e===ol&&Hp())return Xp();if(!t)throw rn.create("no-app",{appName:e});return t}function tr(e,t,n){var r;let i=(r=hy[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}di(new fr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firebase-heartbeat-database",wy=1,fi="firebase-heartbeat-store";let ea=null;function qp(){return ea||(ea=z1(xy,wy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(e=>{throw rn.create("idb-open",{originalErrorMessage:e.message})})),ea}async function by(e){try{const n=(await qp()).transaction(fi),r=await n.objectStore(fi).get(Qp(e));return await n.done,r}catch(t){if(t instanceof un)Cn.warn(t.message);else{const n=rn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cn.warn(n.message)}}}async function Uu(e,t){try{const r=(await qp()).transaction(fi,"readwrite");await r.objectStore(fi).put(t,Qp(e)),await r.done}catch(n){if(n instanceof un)Cn.warn(n.message);else{const r=rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function Qp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=1024,Sy=30*24*60*60*1e3;class _y{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ty(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Bu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Sy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bu(),{heartbeatsToSend:r,unsentEntries:i}=Ey(this._heartbeatsCache.heartbeats),o=Bp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Bu(){return new Date().toISOString().substring(0,10)}function Ey(e,t=ky){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),$u(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$u(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ty{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p1()?h1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await by(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function $u(e){return Bp(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(e){di(new fr("platform-logger",t=>new B1(t),"PRIVATE")),di(new fr("heartbeat",t=>new _y(t),"PRIVATE")),tr(il,Fu,e),tr(il,Fu,"esm2017"),tr("fire-js","")}Iy("");var Cy="firebase",Py="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(Cy,Py,"app");function ac(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ny=Zp,Jp=new wi("auth","Firebase",Zp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Vp("@firebase/auth");function Ry(e,...t){Uo.logLevel<=Q.WARN&&Uo.warn(`Auth (${ki}): ${e}`,...t)}function co(e,...t){Uo.logLevel<=Q.ERROR&&Uo.error(`Auth (${ki}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,...t){throw lc(e,...t)}function yt(e,...t){return lc(e,...t)}function eh(e,t,n){const r=Object.assign(Object.assign({},Ny()),{[t]:n});return new wi("auth","Firebase",r).create(t,{appName:e.name})}function Ay(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&et(e,"argument-error"),eh(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Jp.create(e,...t)}function D(e,t,...n){if(!e)throw lc(t,...n)}function Tt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw co(t),new Error(t)}function Lt(e,t){e||Tt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function th(){return Hu()==="http:"||Hu()==="https:"}function Hu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||u1()||"connection"in navigator)?navigator.onLine:!0}function Ly(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,n){this.shortDelay=t,this.longDelay=n,Lt(n>t,"Short delay should be less than long delay!"),this.isMobile=c1()||d1()}get(){return jy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t){Lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=new Si(3e4,6e4);function xt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ut(e,t,n,r,i={}){return rh(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=bi(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),nh.fetch()(ih(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function rh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Oy),t);try{const i=new zy(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Vi(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vi(e,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Vi(e,"email-already-in-use",s);if(c==="USER_DISABLED")throw Vi(e,"user-disabled",s);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eh(e,f,u);et(e,f)}}catch(i){if(i instanceof un)throw i;et(e,"network-request-failed",{message:String(i)})}}async function _i(e,t,n,r,i={}){const o=await ut(e,t,n,r,i);return"mfaPendingCredential"in o&&et(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ih(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}function My(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zy{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),Dy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(e,t,r);return i.customData._tokenResponse=n,i}function Wu(e){return e!==void 0&&e.enterprise!==void 0}class Fy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return My(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Uy(e,t){return ut(e,"GET","/v2/recaptchaConfig",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function By(e,t){return ut(e,"POST","/v1/accounts:delete",t)}async function $y(e,t){return ut(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Hy(e,t=!1){const n=tt(e),r=await n.getIdToken(t),i=uc(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Yr(ta(i.auth_time)),issuedAtTime:Yr(ta(i.iat)),expirationTime:Yr(ta(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ta(e){return Number(e)*1e3}function uc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const i=$p(n);return i?JSON.parse(i):(co("Failed to decode base64 JWT payload"),null)}catch(i){return co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wy(e){const t=uc(e);return D(t,"internal-error"),D(typeof t.exp<"u","internal-error"),D(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof un&&Vy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Vy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(e){var t;const n=e.auth,r=await e.getIdToken(),i=await pr(e,$y(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Xy(o.providerUserInfo):[],a=Ky(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new oh(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function Gy(e){const t=tt(e);await $o(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ky(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Xy(e){return e.map(t=>{var{providerId:n}=t,r=ac(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(e,t){const n=await rh(e,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=ih(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nh.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qy(e,t){return ut(e,"POST","/v2/accounts:revokeToken",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){D(t.idToken,"internal-error"),D(typeof t.idToken<"u","internal-error"),D(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return D(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await qy(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new pi;return r&&(D(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(D(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){D(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class kn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=ac(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new oh(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await pr(this,this.stsTokenManager.getToken(this.auth,t));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Hy(this,t)}reload(){return Gy(this)}_assign(t){this!==t&&(D(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new kn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await pr(this,By(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:x,isAnonymous:S,providerData:I,stsTokenManager:C}=n;D(m&&C,t,"internal-error");const E=pi.fromJSON(this.name,C);D(typeof m=="string",t,"internal-error"),zt(p,t.name),zt(g,t.name),D(typeof x=="boolean",t,"internal-error"),D(typeof S=="boolean",t,"internal-error"),zt(y,t.name),zt(v,t.name),zt(w,t.name),zt(T,t.name),zt(h,t.name),zt(d,t.name);const F=new kn({uid:m,auth:t,email:g,emailVerified:x,displayName:p,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:E,createdAt:h,lastLoginAt:d});return I&&Array.isArray(I)&&(F.providerData=I.map(M=>Object.assign({},M))),T&&(F._redirectEventId=T),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new pi;i.updateFromServerResponse(n);const o=new kn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await $o(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function It(e){Lt(e instanceof Function,"Expected a class definition");let t=Vu.get(e);return t?(Lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vu.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}sh.type="NONE";const Yu=sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e,t,n){return`firebase:${e}:${t}:${n}`}class nr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=uo(this.userKey,i.apiKey,o),this.fullPersistenceKey=uo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?kn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new nr(It(Yu),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||It(Yu);const s=uo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const p=kn._fromJSON(t,f);u!==o&&(a=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new nr(o,t,r):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new nr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ch(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ah(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(dh(t))return"Blackberry";if(fh(t))return"Webos";if(dc(t))return"Safari";if((t.includes("chrome/")||lh(t))&&!t.includes("edge/"))return"Chrome";if(uh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ah(e=Ce()){return/firefox\//i.test(e)}function dc(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function lh(e=Ce()){return/crios\//i.test(e)}function ch(e=Ce()){return/iemobile/i.test(e)}function uh(e=Ce()){return/android/i.test(e)}function dh(e=Ce()){return/blackberry/i.test(e)}function fh(e=Ce()){return/webos/i.test(e)}function us(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Zy(e=Ce()){var t;return us(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Jy(){return f1()&&document.documentMode===10}function ph(e=Ce()){return us(e)||uh(e)||fh(e)||dh(e)||/windows phone/i.test(e)||ch(e)}function ev(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(e,t=[]){let n;switch(e){case"Browser":n=Gu(Ce());break;case"Worker":n=`${Gu(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const c=t(o);s(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(e,t={}){return ut(e,"GET","/v2/passwordPolicy",xt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=6;class iv{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:rv,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ku(this),this.idTokenSubscription=new Ku(this),this.beforeStateQueue=new tv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await nr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!s||s===a)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $o(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ly()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?tt(t):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&D(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nv(this),n=new iv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new wi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qy(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&It(t)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=t.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Ry(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(e){return tt(e)}class Ku{constructor(t){this.auth=t,this.observer=null,this.addObserver=x1(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sv(e){ds=e}function gh(e){return ds.loadJS(e)}function av(){return ds.recaptchaEnterpriseScript}function lv(){return ds.gapiScript}function cv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const uv="recaptcha-enterprise",dv="NO_RECAPTCHA";class fv{constructor(t){this.type=uv,this.auth=Dt(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Uy(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Fy(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{a(c)})})}function i(o,s,a){const c=window.grecaptcha;Wu(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(dv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Wu(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=av();c.length!==0&&(c+=a),gh(c).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Xu(e,t,n,r=!1){const i=new fv(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ho(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xu(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Xu(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(e,t){const n=Kp(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(zo(o,t??{}))return i;et(i,"already-initialized")}return n.initialize({options:t})}function hv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function gv(e,t,n){const r=Dt(e);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=mh(t),{host:s,port:a}=mv(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yv()}function mh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function mv(e){const t=mh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:qu(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:qu(s)}}}function qu(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function yv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(t){return Tt("not implemented")}_linkToIdToken(t,n){return Tt("not implemented")}_getReauthenticationResolver(t){return Tt("not implemented")}}async function vv(e,t){return ut(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t){return _i(e,"POST","/v1/accounts:signInWithPassword",xt(e,t))}async function yh(e,t){return ut(e,"POST","/v1/accounts:sendOobCode",xt(e,t))}async function wv(e,t){return yh(e,t)}async function bv(e,t){return yh(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(e,t){return _i(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}async function Sv(e,t){return _i(e,"POST","/v1/accounts:signInWithEmailLink",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends fc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new hi(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new hi(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ho(t,n,"signInWithPassword",xv);case"emailLink":return kv(t,{email:this._email,oobCode:this._password});default:et(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ho(t,r,"signUpPassword",vv);case"emailLink":return Sv(t,{idToken:n,email:this._email,oobCode:this._password});default:et(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(e,t){return _i(e,"POST","/v1/accounts:signInWithIdp",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="http://localhost";class Pn extends fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Pn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return rr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,rr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,rr(t,n)}buildRequest(){const t={requestUri:_v,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=bi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tv(e){const t=Or(Dr(e)).link,n=t?Or(Dr(t)).deep_link_id:null,r=Or(Dr(e)).deep_link_id;return(r?Or(Dr(r)).link:null)||r||n||t||e}class pc{constructor(t){var n,r,i,o,s,a;const c=Or(Dr(t)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Ev((i=c.mode)!==null&&i!==void 0?i:null);D(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Tv(t);try{return new pc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.providerId=yr.PROVIDER_ID}static credential(t,n){return hi._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pc.parseLink(n);return D(r,"argument-error"),hi._fromEmailAndCode(t,r.code,r.tenantId)}}yr.PROVIDER_ID="password";yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Ei{constructor(){super("facebook.com")}static credential(t){return Pn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Pn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Ei{constructor(){super("github.com")}static credential(t){return Pn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ei{constructor(){super("twitter.com")}static credential(t,n){return Pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iv(e,t){return _i(e,"POST","/v1/accounts:signUp",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await kn._fromIdTokenResponse(t,r,i),s=Qu(r);return new Nn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Qu(r);return new Nn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Qu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends un{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wo.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Wo(t,n,r,i)}}function vh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Wo._fromErrorAndOperation(e,o,t,r):o})}async function Cv(e,t,n=!1){const r=await pr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Nn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await pr(e,vh(r,i,t,e),n);D(o.idToken,r,"internal-error");const s=uc(o.idToken);D(s,r,"internal-error");const{sub:a}=s;return D(e.uid===a,r,"user-mismatch"),Nn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&et(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(e,t,n=!1){const r="signIn",i=await vh(e,r,t),o=await Nn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Nv(e,t){return xh(Dt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(e,t,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(e){const t=Dt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Rv(e,t,n){const r=Dt(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&wh(r,i,n),await Ho(r,i,"getOobCode",bv)}async function Av(e,t,n){const r=Dt(e),s=await Ho(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&bh(e),c}),a=await Nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function jv(e,t,n){return Nv(tt(e),yr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bh(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(e,t){return ut(e,"POST","/v1/accounts:createAuthUri",xt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(e,t){const n=th()?Bo():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await Lv(tt(e),r);return i||[]}async function Dv(e,t){const n=tt(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&wh(n.auth,i,t);const{email:o}=await wv(n.auth,i);o!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(e,t){return ut(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zv(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=tt(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await pr(r,Mv(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Fv(e,t,n,r){return tt(e).onIdTokenChanged(t,n,r)}function Uv(e,t,n){return tt(e).beforeAuthStateChanged(t,n)}function Bv(e,t,n,r){return tt(e).onAuthStateChanged(t,n,r)}function gc(e){return tt(e).signOut()}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){const e=Ce();return dc(e)||us(e)}const Hv=1e3,Wv=10;class Sh extends kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$v()&&ev(),this.fallbackToPolling=ph(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Jy()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Wv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Hv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Sh.type="LOCAL";const Vv=Sh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}_h.type="SESSION";const Eh=_h;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new fs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),c=await Yv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const u=mc("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(f),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return window}function Kv(e){vt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof vt().WorkerGlobalScope<"u"&&typeof vt().importScripts=="function"}async function Xv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Qv(){return Th()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firebaseLocalStorageDb",Zv=1,Yo="firebaseLocalStorage",Ch="fbase_key";class Ti{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ps(e,t){return e.transaction([Yo],t?"readwrite":"readonly").objectStore(Yo)}function Jv(){const e=indexedDB.deleteDatabase(Ih);return new Ti(e).toPromise()}function al(){const e=indexedDB.open(Ih,Zv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Yo,{keyPath:Ch})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Yo)?t(r):(r.close(),await Jv(),t(await al()))})})}async function Zu(e,t,n){const r=ps(e,!0).put({[Ch]:t,value:n});return new Ti(r).toPromise()}async function ex(e,t){const n=ps(e,!1).get(t),r=await new Ti(n).toPromise();return r===void 0?null:r.value}function Ju(e,t){const n=ps(e,!0).delete(t);return new Ti(n).toPromise()}const tx=800,nx=3;class Ph{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await al(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>nx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(Qv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Xv(),!this.activeServiceWorker)return;this.sender=new Gv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||qv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await al();return await Zu(t,Vo,"1"),await Ju(t,Vo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zu(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ex(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ju(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ps(i,!1).getAll();return new Ti(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ph.type="LOCAL";const rx=Ph;new Si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e,t){return t?It(t):(D(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends fc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return rr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return rr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ix(e){return xh(e.auth,new yc(e),e.bypassAuthState)}function ox(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),Pv(n,new yc(e),e.bypassAuthState)}async function sx(e){const{auth:t,user:n}=e;return D(n,t,"internal-error"),Cv(n,new yc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ix;case"linkViaPopup":case"linkViaRedirect":return sx;case"reauthViaPopup":case"reauthViaRedirect":return ox;default:et(this.auth,"internal-error")}}resolve(t){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=new Si(2e3,1e4);async function lx(e,t,n){const r=Dt(e);Ay(e,t,hc);const i=Nh(r,n);return new xn(r,"signInViaPopup",t,i).executeNotNull()}class xn extends Rh{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return D(t,this.auth,"internal-error"),t}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const t=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ax.get())};t()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="pendingRedirect",fo=new Map;class ux extends Rh{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=fo.get(this.auth._key());if(!t){try{const r=await dx(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}fo.set(this.auth._key(),t)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dx(e,t){const n=hx(t),r=px(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fx(e,t){fo.set(e._key(),t)}function px(e){return It(e._redirectPersistence)}function hx(e){return uo(cx,e.config.apiKey,e.name)}async function gx(e,t,n=!1){const r=Dt(e),i=Nh(r,t),s=await new ux(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=10*60*1e3;class yx{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vx(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ah(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(t))}saveEventToCache(t){this.cachedEventUids.add(ed(t)),this.lastProcessedEventTime=Date.now()}}function ed(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ah({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function vx(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ah(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(e,t={}){return ut(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bx=/^https?/;async function kx(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xx(e);for(const n of t)try{if(Sx(n))return}catch{}et(e,"unauthorized-domain")}function Sx(e){const t=Bo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!bx.test(n))return!1;if(wx.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=new Si(3e4,6e4);function td(){const e=vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ex(e){return new Promise((t,n)=>{var r,i,o;function s(){td(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{td(),n(yt(e,"network-request-failed"))},timeout:_x.get()})}if(!((i=(r=vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=vt().gapi)===null||o===void 0)&&o.load)s();else{const a=cv("iframefcb");return vt()[a]=()=>{gapi.load?s():n(yt(e,"network-request-failed"))},gh(`${lv()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw po=null,t})}let po=null;function Tx(e){return po=po||Ex(e),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=new Si(5e3,15e3),Cx="__/auth/iframe",Px="emulator/auth/iframe",Nx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ax(e){const t=e.config;D(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,Px):`https://${e.config.authDomain}/${Cx}`,r={apiKey:t.apiKey,appName:e.name,v:ki},i=Rx.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${bi(r).slice(1)}`}async function jx(e){const t=await Tx(e),n=vt().gapi;return D(n,e,"internal-error"),t.open({where:document.body,url:Ax(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nx,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=yt(e,"network-request-failed"),a=vt().setTimeout(()=>{o(s)},Ix.get());function c(){vt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ox=500,Dx=600,Mx="_blank",zx="http://localhost";class nd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fx(e,t,n,r=Ox,i=Dx){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lx),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ce().toLowerCase();n&&(a=lh(u)?Mx:n),ah(u)&&(t=t||zx,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[y,v])=>`${g}${y}=${v},`,"");if(Zy(u)&&a!=="_self")return Ux(t||"",a),new nd(null);const p=window.open(t||"",a,f);D(p,e,"popup-blocked");try{p.focus()}catch{}return new nd(p)}function Ux(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="__/auth/handler",$x="emulator/auth/handler",Hx=encodeURIComponent("fac");async function rd(e,t,n,r,i,o){D(e.config.authDomain,e,"auth-domain-config-required"),D(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(t instanceof hc){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",v1(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(o||{}))s[f]=p}if(t instanceof Ei){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(s.scopes=f.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await e._getAppCheckToken(),u=c?`#${Hx}=${encodeURIComponent(c)}`:"";return`${Wx(e)}?${bi(a).slice(1)}${u}`}function Wx({config:e}){return e.emulator?cc(e,$x):`https://${e.authDomain}/${Bx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="webStorageSupport";class Vx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eh,this._completeRedirectFn=gx,this._overrideRedirectResult=fx}async _openPopup(t,n,r,i){var o;Lt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await rd(t,n,r,Bo(),i);return Fx(t,s,mc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await rd(t,n,r,Bo(),i);return Kv(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Lt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await jx(t),r=new yx(t);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(na,{type:na},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[na];s!==void 0&&n(!!s),et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kx(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ph()||dc()||us()}}const Yx=Vx;var id="@firebase/auth",od="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xx(e){di(new fr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;D(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hh(e)},u=new ov(r,i,o,c);return hv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),di(new fr("auth-internal",t=>{const n=Dt(t.getProvider("auth").getImmediate());return(r=>new Gx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(id,od,Kx(e)),tr(id,od,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=5*60,Qx=Wp("authIdTokenMaxAge")||qx;let sd=null;const Zx=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qx)return;const i=n==null?void 0:n.token;sd!==i&&(sd=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Jx(e=vy()){const t=Kp(e,"auth");if(t.isInitialized())return t.getImmediate();const n=pv(e,{popupRedirectResolver:Yx,persistence:[rx,Vv,Eh]}),r=Wp("authTokenSyncURL");if(r){const o=Zx(r);Uv(n,o,()=>o(n.currentUser)),Fv(n,s=>o(s))}const i=a1("auth");return i&&gv(n,`http://${i}`),n}function e2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}sv({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=yt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",e2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xx("Browser");const t2={apiKey:"AIzaSyBbXyOl7nwTFEYUCA2YB3GzOiFKKC-WSXY",authDomain:"bk-offset-printing.firebaseapp.com",projectId:"bk-offset-printing",storageBucket:"bk-offset-printing.firebasestorage.app",messagingSenderId:"955887834418",appId:"1:955887834418:web:b92cd82ec5f57ecd43732b"},n2=Xp(t2),Pt=Jx(n2),r2=new St;console.log("✅ Firebase initialized with environment variables");const i2=async()=>{try{const e=await lx(Pt,r2);return console.log("✅ Google sign in successful:",e.user.email),{user:e.user,error:null}}catch(e){console.error("❌ Error:",e.code,e.message);let t="Sign-in failed";return e.code==="auth/popup-closed-by-user"?t="Popup closed":e.code==="auth/popup-blocked"&&(t="Popup blocked"),{user:null,error:t}}},o2=async(e,t,n,r)=>{try{if((await Ov(Pt,e)).length>0)return{user:null,error:"Email already registered"};const o=await Av(Pt,e,t);return await zv(o.user,{displayName:`${n} ${r}`}),await Dv(o.user),await gc(Pt),{user:null,error:null}}catch(i){return{user:null,error:i.message}}},s2=async(e,t)=>{try{const n=await jv(Pt,e,t);return n.user.emailVerified?{user:n.user,error:null}:(await gc(Pt),{user:null,error:"Please verify your email first"})}catch{return{user:null,error:"Invalid email or password"}}},a2=async e=>{try{return await Rv(Pt,e),{error:null}}catch(t){return{error:t.message}}},l2=async()=>{try{return await gc(Pt),{error:null}}catch(e){return{error:e.message}}},c2=e=>Bv(Pt,e),jh=_.createContext(),hs=()=>_.useContext(jh),u2=({children:e})=>{const[t,n]=_.useState(null),[r,i]=_.useState(!0);_.useEffect(()=>c2(p=>{var g,y;n(p?{uid:p.uid,email:p.email,firstName:((g=p.displayName)==null?void 0:g.split(" ")[0])||"User",lastName:((y=p.displayName)==null?void 0:y.split(" ").slice(1).join(" "))||"",emailVerified:p.emailVerified,isAuthenticated:!0}:null),i(!1)}),[]);const o=async()=>{const{error:f}=await i2();return{error:f}},s=async(f,p)=>{const{error:g}=await s2(f,p);return{error:g}},a=async(f,p,g,y)=>{const{error:v}=await o2(f,p,g,y);return{error:v}},c=async f=>{const{error:p}=await a2(f);return{error:p}},u=async()=>{await l2()};return l.jsx(jh.Provider,{value:{user:t,loginWithGoogle:o,loginWithEmail:s,registerWithEmail:a,resetPassword:c,logout:u,loading:r,isAuthenticated:!!t},children:!r&&e})};var d2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const f2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p2=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...c},u)=>_.createElement("svg",{ref:u,...d2,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${f2(e)}`,...c},[...t.map(([f,p])=>_.createElement(f,p)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var G=p2;const ll=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Gr=G("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),h2=G("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),g2=G("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),m2=G("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Lh=G("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),y2=G("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),ad=G("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Oh=G("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),ld=G("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),v2=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Dh=G("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Mh=G("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),x2=G("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),w2=G("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),b2=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),cl=G("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),k2=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),zh=G("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),cd=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),S2=G("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Fh=G("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),_2=G("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),Uh=G("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Nr=G("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),ud=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),E2=G("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),T2=G("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),vc=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),gs=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Bh=G("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),gn=G("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$h="/bk-offset/assets/BK_logo_png-baab523e.png";function I2({isDark:e,toggleTheme:t,lang:n,toggleLang:r,text:i,onAuthClick:o,scrolled:s}){var C,E,F,M;const{user:a,logout:c,isAuthenticated:u}=hs(),[f,p]=_.useState(!1),[g,y]=_.useState(!1),v=()=>{p(!1),y(!1),c()},w=()=>{window.scrollTo({top:0,behavior:"smooth"}),p(!1),y(!1)},T=e?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)",h=e?"rgba(255,255,255,0.92)":"#0f172a",d=e?"rgba(255,255,255,0.45)":"#64748b",m=e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.045)",x=e?"#0f172a":"#ffffff",S=e?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",I=e?"0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)":"0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:C2}),l.jsxs("nav",{className:`nb-root${s?" nb-scrolled-shadow":""}`,style:se.nav(e,s,T),children:[l.jsxs("div",{className:"nb-logo",onClick:w,role:"button",tabIndex:0,onKeyDown:L=>L.key==="Enter"&&w(),children:[l.jsx("img",{className:"nb-logo-img",src:$h,alt:"BK Offset",onError:L=>{L.target.style.display="none"}}),l.jsxs("div",{children:[l.jsx("div",{className:"nb-brand-name",style:{color:h},children:"BK Offset"}),l.jsx("div",{className:"nb-brand-sub",style:{color:d},children:"Printing Press"})]})]}),l.jsx("div",{style:se.controlsWrapper,children:u?l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:se.relativeBlock,children:[l.jsxs("button",{className:"nb-avatar-pill",onClick:()=>{p(!f),y(!1)},style:se.avatarPill(f,T,m,h),children:[l.jsx("div",{className:"nb-avatar-ring",children:((E=(C=a==null?void 0:a.firstName)==null?void 0:C.charAt(0))==null?void 0:E.toUpperCase())||"U"}),l.jsx("span",{className:"nb-avatar-name",style:{color:h},children:(a==null?void 0:a.firstName)||"User"}),l.jsx(m2,{size:13,strokeWidth:2,style:se.chevronIcon(f,d)})]}),f&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:se.dropdownOverlay,onClick:()=>p(!1)}),l.jsxs("div",{className:"nb-dropdown",style:se.dropdown(x,S,I),children:[l.jsx("div",{style:se.dropdownHeader(S),children:l.jsxs("div",{style:se.dropdownHeaderContent,children:[l.jsx("div",{className:"nb-avatar-ring",style:se.dropdownAvatar,children:((M=(F=a==null?void 0:a.firstName)==null?void 0:F.charAt(0))==null?void 0:M.toUpperCase())||"U"}),l.jsxs("div",{children:[l.jsxs("div",{style:se.dropdownUserName(h),children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),l.jsx("div",{style:se.dropdownUserEmail(d),children:a==null?void 0:a.email})]})]})}),l.jsx("div",{style:se.dropdownPadding,children:l.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:L=>{L.currentTarget.style.background=m},onMouseLeave:L=>{L.currentTarget.style.background="none"},onClick:()=>p(!1),children:[l.jsx(T2,{size:16,strokeWidth:1.75,color:"#0ea5e9"}),"View Profile"]})})]})]})]}),l.jsx("div",{style:se.mobileDivider(T)}),l.jsxs("div",{style:se.relativeBlock,children:[l.jsx("button",{className:"nb-icon-btn",onClick:()=>{y(!g),p(!1)},style:se.menuTrigger(g,h,d,T,m),children:g?l.jsx(gs,{size:17,strokeWidth:2}):l.jsx(k2,{size:17,strokeWidth:2})}),g&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:se.dropdownOverlay,onClick:()=>y(!1)}),l.jsxs("div",{className:"nb-dropdown",style:se.mobileMenuDropdown(x,S,I),children:[l.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:L=>{L.currentTarget.style.background=m},onMouseLeave:L=>{L.currentTarget.style.background="none"},onClick:()=>{r(),y(!1)},children:[l.jsx(ld,{size:15,strokeWidth:1.75,color:"#0ea5e9"}),n==="en"?"हिंदी में बदलें":"Switch to English"]}),l.jsxs("button",{className:"nb-dropdown-btn",style:{color:h},onMouseEnter:L=>{L.currentTarget.style.background=m},onMouseLeave:L=>{L.currentTarget.style.background="none"},onClick:()=>{t(),y(!1)},children:[e?l.jsx(ud,{size:15,strokeWidth:1.75,color:"#f59e0b"}):l.jsx(cd,{size:15,strokeWidth:1.75,color:"#6366f1"}),e?"Light Mode":"Dark Mode"]}),l.jsx("div",{className:"nb-sep",style:{background:S}}),l.jsxs("button",{className:"nb-dropdown-btn",style:se.logoutBtn,onMouseEnter:L=>{L.currentTarget.style.background="rgba(239,68,68,0.07)"},onMouseLeave:L=>{L.currentTarget.style.background="none"},onClick:v,children:[l.jsx(w2,{size:15,strokeWidth:1.75,color:"#ef4444"}),"Logout"]})]})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"nb-icon-btn",onClick:r,title:n==="en"?"हिंदी में बदलें":"Switch to English",style:se.iconBtn(T,d),onMouseEnter:L=>{L.currentTarget.style.background=m,L.currentTarget.style.color=h},onMouseLeave:L=>{L.currentTarget.style.background="transparent",L.currentTarget.style.color=d},children:l.jsx(ld,{size:16,strokeWidth:1.75})}),l.jsx("button",{className:"nb-icon-btn",onClick:t,title:e?"Light mode":"Dark mode",style:se.iconBtn(T,d),onMouseEnter:L=>{L.currentTarget.style.background=m,L.currentTarget.style.color=h},onMouseLeave:L=>{L.currentTarget.style.background="transparent",L.currentTarget.style.color=d},children:e?l.jsx(ud,{size:16,strokeWidth:1.75}):l.jsx(cd,{size:16,strokeWidth:1.75})}),l.jsx("div",{style:se.verticalDivider(T)}),l.jsxs("button",{className:"nb-signin",onClick:o,children:[l.jsx(vc,{size:14,strokeWidth:2}),"Sign In"]})]})})]})]})}const C2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .nb-root {
    font-family: 'DM Sans', sans-serif;
  }

  .nb-root::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9);
    background-size: 200% 100%;
    animation: nb-bar-flow 4s linear infinite;
    opacity: 0.9;
  }

  @keyframes nb-bar-flow {
    0%   { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .nb-logo {
    display: flex;
    align-items: center;
    gap: 11px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    text-decoration: none;
  }
  .nb-logo:hover { opacity: 0.78; }

  .nb-logo-img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    border-radius: 9px;
    box-shadow: 0 4px 14px rgba(14,165,233,0.32);
    transition: box-shadow 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1);
    flex-shrink: 0;
  }
  .nb-logo:hover .nb-logo-img {
    box-shadow: 0 6px 20px rgba(14,165,233,0.50);
    transform: scale(1.06) rotate(-2deg);
  }

  .nb-brand-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .nb-brand-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-top: 3px;
    opacity: 0.42;
  }

  .nb-icon-btn {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    border: 1px solid transparent;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      background  0.2s ease,
      border-color 0.2s ease,
      transform   0.2s cubic-bezier(.34,1.56,.64,1),
      color       0.2s ease;
    flex-shrink: 0;
  }
  .nb-icon-btn:hover {
    transform: translateY(-1px);
  }

  .nb-signin {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    letter-spacing: 0.01em;
    padding: 9px 20px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #fff;
    box-shadow: 0 4px 14px rgba(14,165,233,0.28);
    transition:
      transform   0.25s cubic-bezier(.34,1.56,.64,1),
      box-shadow  0.25s ease;
  }
  .nb-signin:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(14,165,233,0.40);
  }
  .nb-signin:active { transform: scale(0.97); }

  .nb-avatar-pill {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 4px 12px 4px 4px;
    border-radius: 999px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    transition:
      background  0.2s ease,
      border-color 0.2s ease;
    font-family: 'DM Sans', sans-serif;
  }

  .nb-avatar-ring {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    flex-shrink: 0;
  }

  .nb-avatar-name {
    font-size: 13.5px;
    font-weight: 500;
  }

  .nb-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    border-radius: 14px;
    overflow: hidden;
    min-width: 200px;
    animation: nb-drop-in 0.2s cubic-bezier(.22,1,.36,1) both;
    z-index: 2001;
  }

  @keyframes nb-drop-in {
    from { opacity: 0; transform: translateY(-8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .nb-dropdown-btn {
    width: 100%;
    padding: 11px 14px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 11px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 400;
    text-align: left;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.15s ease;
  }

  .nb-sep {
    height: 1px;
    margin: 5px 8px;
  }

  .nb-scrolled-shadow {
    box-shadow: 0 1px 0 rgba(255,255,255,0.06),
                0 8px 32px rgba(0,0,0,0.18);
  }
`,se={nav:(e,t,n)=>({position:"sticky",top:0,zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",height:60,background:e?"rgba(2,6,23,0.92)":"rgba(255,255,255,0.92)",backdropFilter:"blur(18px) saturate(1.5)",WebkitBackdropFilter:"blur(18px) saturate(1.5)",borderBottom:`1px solid ${t?n:"transparent"}`,transition:"background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease"}),controlsWrapper:{display:"flex",alignItems:"center",gap:6},iconBtn:(e,t)=>({color:t,border:`1px solid ${e}`}),verticalDivider:e=>({width:1,height:22,background:e,margin:"0 4px"}),relativeBlock:{position:"relative"},avatarPill:(e,t,n,r)=>({border:`1px solid ${e?"rgba(14,165,233,0.40)":t}`,background:e?n:"transparent",color:r}),chevronIcon:(e,t)=>({color:t,transform:e?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.25s ease"}),dropdownOverlay:{position:"fixed",inset:0,zIndex:1999},dropdown:(e,t,n)=>({background:e,border:`1px solid ${t}`,boxShadow:n}),dropdownHeader:e=>({padding:"14px 16px 12px",borderBottom:`1px solid ${e}`}),dropdownHeaderContent:{display:"flex",alignItems:"center",gap:10,marginBottom:6},dropdownAvatar:{width:34,height:34,fontSize:13},dropdownUserName:e=>({fontSize:13.5,fontWeight:600,color:e,lineHeight:1.2}),dropdownUserEmail:e=>({fontSize:11,color:e,marginTop:2}),dropdownPadding:{padding:"6px 6px"},mobileDivider:e=>({width:1,height:22,background:e,margin:"0 2px"}),menuTrigger:(e,t,n,r,i)=>({color:e?t:n,border:`1px solid ${e?"rgba(14,165,233,0.40)":r}`,background:e?i:"transparent"}),mobileMenuDropdown:(e,t,n)=>({background:e,border:`1px solid ${t}`,boxShadow:n,padding:"6px 6px"}),logoutBtn:{color:"#ef4444"}};function P2({isDark:e,isMobile:t}){const{isAuthenticated:n}=hs(),[r,i]=_.useState(null),o=new Date().getFullYear();return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:N2}),l.jsx("div",{className:"ft-top-border"}),l.jsx("footer",{className:"ft-root",style:fe.root(t),children:l.jsxs("div",{style:fe.innerContainer,children:[l.jsxs("div",{style:fe.mainGrid(t),children:[l.jsxs("div",{children:[l.jsxs("div",{style:fe.brandWrapper,children:[l.jsx("img",{className:"ft-logo-img",src:$h,alt:"BK Offset",onError:s=>{s.target.style.display="none"}}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-brand-name",children:"BK Offset"}),l.jsx("div",{className:"ft-brand-tagline",children:"Printing Press · Since 1995"})]})]}),l.jsx("p",{style:fe.brandDescription,children:"Delhi's trusted name for bulk book printing and premium lamination services — quality you can feel, precision you can count on."}),l.jsx("div",{style:fe.socialRow,children:R2.map(({key:s,href:a,Icon:c,hover:u,label:f})=>l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":f,className:"ft-social-btn",style:fe.socialBtn(r===s,u),onMouseEnter:()=>i(s),onMouseLeave:()=>i(null),children:l.jsx(c,{size:16,strokeWidth:1.75})},s))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-section-head",children:"Contact"}),n?l.jsxs("div",{style:fe.contactList,children:[l.jsxs("a",{href:"tel:+919560959039",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:fe.iconBox("#0ea5e9"),children:l.jsx(Fh,{size:14,strokeWidth:1.75,color:"#0ea5e9"})}),"+91 95609 59039",l.jsx(Gr,{size:12,style:fe.arrowIcon})]}),l.jsxs("a",{href:"https://wa.me/919560959039",target:"_blank",rel:"noopener noreferrer",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:fe.iconBox("#25d366"),children:l.jsx(zh,{size:14,strokeWidth:1.75,color:"#25d366"})}),"WhatsApp",l.jsx(Gr,{size:12,style:fe.arrowIcon})]}),l.jsxs("a",{href:"mailto:rinkusharmarinku54@gmail.com",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:fe.iconBox("#6366f1"),children:l.jsx(b2,{size:14,strokeWidth:1.75,color:"#6366f1"})}),"Email us",l.jsx(Gr,{size:12,style:fe.arrowIcon})]})]}):l.jsx("p",{style:fe.authPrompt,children:"Sign in to view contact details and get in touch with our team."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-section-head",children:"Find Us"}),l.jsxs("div",{style:fe.infoStack,children:[l.jsxs("div",{className:"ft-info-row",children:[l.jsx(cl,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#0ea5e9",style:fe.infoIconAlign}),l.jsxs("span",{children:["Street No. 2, Zulfe Bengal",l.jsx("br",{}),"Dilshad Garden, Delhi — 110095"]})]}),l.jsxs("div",{className:"ft-info-row",children:[l.jsx(Lh,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#6366f1",style:fe.infoIconAlign}),l.jsxs("span",{children:["Mon – Sun: 9:00 AM – 7:00 PM",l.jsx("br",{}),"Tuesday: Closed"]})]})]})]})]}),l.jsxs("div",{className:"ft-bottom",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"ft-copyright",children:["© ",o," BK Offset Printing. All Rights Reserved."]}),l.jsxs("div",{className:"ft-made-with",style:fe.accentText,children:[l.jsx("span",{className:"ft-dot"}),"Premium printing, Delhi"]})]}),l.jsxs("div",{className:"ft-legal-notice",children:[l.jsxs("p",{children:["© ",o," Keshav Sharma. All Rights Reserved."]}),l.jsx("p",{children:"Unauthorized commercial use or brand impersonation is strictly prohibited."}),l.jsx("p",{style:fe.licenseInfo,children:"License: CC BY-NC 4.0 — Credit required, no commercial use allowed."})]})]})]})})]})}const N2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .ft-root {
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .ft-root::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .ft-root::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, #020617, transparent);
    pointer-events: none;
  }

  .ft-logo-img {
    width: 52px;
    height: 52px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(14,165,233,0.30);
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
    display: block;
  }
  .ft-logo-img:hover {
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 28px rgba(14,165,233,0.50);
  }

  .ft-brand-name {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #f1f5f9;
    line-height: 1;
  }

  .ft-brand-tagline {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.30);
    margin-top: 4px;
  }

  .ft-section-head {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.28);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ft-section-head::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.07);
  }

  .ft-info-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13px;
    line-height: 1.65;
    color: rgba(255,255,255,0.48);
    transition: color 0.2s ease;
  }
  .ft-info-row:hover { color: rgba(255,255,255,0.70); }
  .ft-info-icon {
    margin-top: 2px;
    flex-shrink: 0;
    opacity: 0.55;
  }

  .ft-social-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.09);
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    transition:
      background   0.25s ease,
      border-color 0.25s ease,
      color        0.25s ease,
      transform    0.3s cubic-bezier(.34,1.56,.64,1),
      box-shadow   0.25s ease;
    cursor: pointer;
  }
  .ft-social-btn:hover {
    color: #fff;
    transform: translateY(-4px) scale(1.05);
  }

  .ft-contact-link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: rgba(255,255,255,0.48);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.03);
    transition:
      background   0.2s ease,
      border-color 0.2s ease,
      color        0.2s ease,
      transform    0.25s cubic-bezier(.22,1,.36,1);
  }
  .ft-contact-link:hover {
    color: rgba(255,255,255,0.85);
    background: rgba(255,255,255,0.07);
    border-color: rgba(14,165,233,0.30);
    transform: translateX(3px);
  }
  .ft-contact-link-icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ft-top-border {
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(14,165,233,0.40) 30%,
      rgba(99,102,241,0.40) 70%,
      transparent 100%
    );
    margin-bottom: 0;
  }

  .ft-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .ft-copyright {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.02em;
    line-height: 1.6;
  }

  .ft-legal-notice {
    font-size: 11px;
    color: rgba(255,255,255,0.35);
    line-height: 1.5;
    max-width: 100%;
    padding: 10px 0 0;
    border-top: 1px dashed rgba(255,255,255,0.1);
    width: 100%;
  }

  .ft-legal-notice p {
    margin: 4px 0;
    opacity: 0.8;
  }

  .ft-made-with {
    font-size: 11px;
    color: rgba(255,255,255,0.18);
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .ft-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    display: inline-block;
    flex-shrink: 0;
  }

  @media (min-width: 640px) {
    .ft-bottom {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .ft-legal-notice {
      text-align: right;
      border-top: none;
      padding: 0;
    }
  }
`,fe={root:e=>({background:"#020617",color:"#cbd5e1",padding:e?"56px 22px 28px":"72px 48px 32px"}),innerContainer:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto"},mainGrid:e=>({display:"grid",gridTemplateColumns:e?"1fr":"1.6fr 1fr 1fr",gap:e?44:56,marginBottom:e?40:56,alignItems:"start"}),brandWrapper:{display:"flex",alignItems:"center",gap:14,marginBottom:18},brandDescription:{fontSize:13.5,lineHeight:1.75,color:"rgba(255,255,255,0.38)",maxWidth:280,marginBottom:22},socialRow:{display:"flex",gap:8,flexWrap:"wrap"},socialBtn:(e,t)=>({background:e?`${t}22`:"rgba(255,255,255,0.06)",borderColor:e?`${t}55`:"rgba(255,255,255,0.09)",color:e?t:"rgba(255,255,255,0.45)",boxShadow:e?`0 6px 18px ${t}33`:"none"}),contactList:{display:"flex",flexDirection:"column",gap:8},iconBox:e=>({background:`${e}1e`}),arrowIcon:{marginLeft:"auto",opacity:.4},authPrompt:{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.65},infoStack:{display:"flex",flexDirection:"column",gap:14},infoIconAlign:{marginTop:3},accentText:{marginTop:4},licenseInfo:{fontSize:"10px",opacity:.5,marginTop:6}},R2=[{key:"fb",href:"https://facebook.com",Icon:Oh,hover:"#1877F2",label:"Facebook"},{key:"ig",href:"https://instagram.com",Icon:Dh,hover:"#E4405F",label:"Instagram"},{key:"yt",href:"https://youtube.com/@b.k.offset?si=wwfxLPk27TfOcPa_",Icon:Bh,hover:"#FF0000",label:"YouTube"}];function A2({isDark:e,isAuthenticated:t,windowWidth:n}){const[r,i]=_.useState(null),o=Mp(e),s=n<420,a=s?40:46,c=s?"12px":"20px",u=[{icon:l.jsx(Bh,{size:18}),href:"https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",label:"YouTube",color:"#FF0000"},{icon:l.jsx(Dh,{size:18}),href:"https://instagram.com",label:"Instagram",color:"#d640e4"},{icon:l.jsx(Oh,{size:18}),href:"https://facebook.com",label:"Facebook",color:"#1877F2"}];return l.jsx("div",{style:Yi.wrapper(s,c),children:u.map((f,p)=>l.jsxs("a",{href:f.href,target:"_blank",rel:"noopener noreferrer","aria-label":f.label,onMouseEnter:()=>i(f.label),onMouseLeave:()=>i(null),style:Yi.iconButton(r===f.label,f,o,a,p),children:[f.icon,!s&&l.jsxs("span",{style:Yi.tooltip(r===f.label,e),children:[f.label,l.jsx("span",{style:Yi.tooltipArrow(e)})]})]},f.label))})}const Yi={wrapper:(e,t)=>({position:"fixed",bottom:"calc(12px + env(safe-area-inset-bottom, 0px))",right:t,display:"flex",flexDirection:"column",gap:e?"8px":"10px",zIndex:1100,pointerEvents:"auto"}),iconButton:(e,t,n,r,i)=>({width:r+"px",height:r+"px",borderRadius:"50%",background:e?t.color:n.surf,color:e?"#fff":n.textMid,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",border:`1px solid ${e?"transparent":n.border}`,boxShadow:e?`0 6px 20px ${t.color}80`:ye.shadowSm,transform:e?"translateY(-3px) scale(1.08)":"scale(1)",transition:"all 0.25s cubic-bezier(.4,0,.2,1)",position:"relative",animation:`floatIn 0.5s ease-out ${i*.1}s backwards`}),tooltip:(e,t)=>({position:"absolute",right:"calc(100% + 10px)",top:"50%",transform:"translateY(-50%)",background:t?"#1e293b":"#0f172a",color:"#fff",padding:"5px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:600,whiteSpace:"nowrap",opacity:e?1:0,pointerEvents:"none",transition:"opacity 0.2s",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"}),tooltipArrow:e=>({position:"absolute",left:"100%",top:"50%",transform:"translateY(-50%)",borderLeft:`5px solid ${e?"#1e293b":"#0f172a"}`,borderTop:"5px solid transparent",borderBottom:"5px solid transparent"})};function j2({title:e,description:t,keywords:n}){const r="BK Offset Printing",i="https://thanozs.github.io/bk-offset/";return l.jsxs(Ym,{children:[l.jsxs("title",{children:[e," | ",r]}),l.jsx("meta",{name:"description",content:t}),l.jsx("meta",{name:"keywords",content:n}),l.jsx("meta",{property:"og:title",content:e}),l.jsx("meta",{property:"og:description",content:t}),l.jsx("meta",{property:"og:url",content:i}),l.jsx("meta",{property:"og:type",content:"website"}),l.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),l.jsx("meta",{name:"twitter:title",content:e}),l.jsx("meta",{name:"twitter:description",content:t}),l.jsx("link",{rel:"canonical",href:i})]})}function L2({isDark:e}){const t=_.useRef(null),n=_.useRef({x:-1e3,y:-1e3}),r=_.useRef(null);return _.useEffect(()=>{const i=t.current;if(!i)return;const o=i.getContext("2d");let s,a;const c=window.innerWidth<768,u=[],f=c?180:550,p=1e3,g=c?240:460,y=c?150:300,v=c?1:1.2,w=.04,T=.93,h=c?.015:.025,d={x:window.innerWidth/2,y:window.innerHeight/2};class m{constructor(we){const de=Math.acos(-1+2*we/f),Le=Math.sqrt(f*Math.PI)*de;this.homeX=Math.cos(Le)*Math.sin(de),this.homeY=Math.sin(Le)*Math.sin(de),this.homeZ=Math.cos(de),this.rFactor=.4+Math.random()*1.6,this.x=this.homeX*g*this.rFactor,this.y=this.homeY*g*this.rFactor,this.z=this.homeZ*g*this.rFactor,this.vx=0,this.vy=0,this.vz=0,this.radius=1.5+Math.random()*1.5,this.alphaBase=.35+Math.random()*.55;const R=Math.atan2(this.homeY,this.homeX),j=Math.asin(this.homeZ);this.hue=((R/Math.PI+1)*160+(j/Math.PI+.5)*40+240)%360}update(we,de,Le,R,j,z,b,P){let N=this.homeX*g*this.rFactor*R,U=this.homeY*g*this.rFactor*R,B=this.homeZ*g*this.rFactor*R;N+=N*b,U+=U*P;const Z=Math.cos(z),K=Math.sin(z),Pe=N*Z-B*K,me=N*K+B*Z;N=Pe,B=me;const le=Math.cos(j),Ye=Math.sin(j),dn=U*le-B*Ye,vr=U*Ye+B*le;U=dn,B=vr;const ys=this.x-we,vs=this.y-de,xs=this.z-Le,Hh=ys*ys+vs*vs+xs*xs,xr=Math.sqrt(Hh)||1;if(xr<y){const ws=(1-xr/y)*v;this.vx+=ys/xr*ws,this.vy+=vs/xr*ws,this.vz+=xs/xr*ws}this.vx+=(N-this.x)*w,this.vy+=(U-this.y)*w,this.vz+=(B-this.z)*w,this.vx*=T,this.vy*=T,this.vz*=T,this.x+=this.vx,this.y+=this.vy,this.z+=this.vz}}function x(){s=i.width=i.offsetWidth,a=i.height=i.offsetHeight,u.length=0;for(let L=0;L<f;L++)u.push(new m(L))}let S=0,I=0,C=0;function E(){if(r.current=requestAnimationFrame(E),!s||!a||!o)return;o.clearRect(0,0,s,a),S+=.015,I+=8e-4,C+=.0012;const L=n.current.x!==-1e3?n.current.x:s/2,we=n.current.y!==-1e3?n.current.y:a/2,de=d.x,Le=d.y;d.x+=(L-d.x)*h,d.y+=(we-d.y)*h;const R=d.x-de,j=d.y-Le,z=Math.min(Math.abs(R)*.02,.4),b=Math.min(Math.abs(j)*.02,.4),P=1+Math.sin(S)*.05,N=n.current.x-d.x,U=n.current.y-d.y,B=150;u.sort((Z,K)=>K.z-Z.z);for(const Z of u)try{Z.update(N,U,B,P,I,C,z,b);const K=p/(p+Z.z);if(K<=0||isNaN(K)||!isFinite(K))continue;const Pe=d.x+Z.x*K,me=d.y+Z.y*K,le=Math.max(0,Z.alphaBase*K*(Z.z>-g?1:.6)),Ye=Math.max(0,Z.radius*K);if(le<=0||Ye<=0)continue;o.fillStyle=`hsla(${Z.hue}, 80%, ${e?70:50}%, ${le})`,o.beginPath(),o.arc(Pe,me,Ye,0,Math.PI*2),o.fill()}catch(K){console.error("Particle update error:",K)}}const F=L=>{n.current.x=L.clientX,n.current.y=L.clientY},M=()=>{n.current.x=-1e3,n.current.y=-1e3};return window.addEventListener("mousemove",F),window.addEventListener("mouseleave",M),window.addEventListener("resize",x),x(),E(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("mousemove",F),window.removeEventListener("mouseleave",M),window.removeEventListener("resize",x)}},[e]),l.jsx("canvas",{ref:t,style:O2.canvas})}const O2={canvas:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,background:"transparent"}};function D2({isDark:e,count:t=50}){return _.useMemo(()=>Array.from({length:t},(n,r)=>({id:r,size:Math.random()*4+2,left:`${Math.random()*100}%`,animationDuration:`${Math.random()*20+15}s`,animationDelay:`${Math.random()*5}s`,opacity:Math.random()*.3+.1})),[t]),l.jsx("div",{style:M2.container})}const M2={container:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0},particle:(e,t)=>({position:"absolute",left:t.left,bottom:"-20px",width:`${t.size}px`,height:`${t.size}px`,borderRadius:"50%",background:e?`radial-gradient(circle, rgba(56, 189, 248, ${t.opacity}) 0%, transparent 70%)`:`radial-gradient(circle, rgba(14, 165, 233, ${t.opacity}) 0%, transparent 70%)`,animation:`floatUp ${t.animationDuration} ${t.animationDelay} infinite ease-in-out`})};function ms(e={threshold:.1,rootMargin:"0px 0px -100px 0px"}){const t=_.useRef(null),[n,r]=_.useState(!1);return _.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},e);return t.current&&i.observe(t.current),()=>{t.current&&i.unobserve(t.current)}},[e]),[t,n]}function z2({text:e,isDark:t,c:n,isAuth:r,isMobile:i,setShowAuth:o}){const[s,a]=ms(),[c,u]=_.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:U2}),l.jsxs("section",{ref:s,style:O.section(i),children:[l.jsx("div",{className:"hero-orb",style:O.orb1(i,t)}),l.jsx("div",{className:"hero-orb",style:O.orb2(i,t)}),l.jsx("div",{className:"hero-orb",style:O.orb3(i,t)}),l.jsx("div",{className:"hero-scan"}),l.jsx(D2,{isDark:t,count:i?20:35}),l.jsxs("div",{style:O.contentContainer,children:[l.jsxs("div",{className:"hero-badge",style:O.heroBadge(t),children:[l.jsx(Uh,{size:13,strokeWidth:2}),"Premium Printing Services"]}),l.jsxs("h1",{className:"hero-h1",style:O.headline(i,t,a),children:[e.heroTitle,l.jsx("br",{}),l.jsx("span",{className:"hero-grad-word",children:e.heroTitle2})]}),l.jsx("p",{className:"hero-sub",style:O.subtext(i,t,a),children:e.heroSub}),l.jsx("div",{style:O.ctaGroup(a),children:r?l.jsxs(l.Fragment,{children:[l.jsxs("a",{href:`tel:${Km}`,className:"hero-btn",style:O.btnPrimary(i),children:[l.jsx(Fh,{size:16,strokeWidth:2}),"Call Now"]}),l.jsxs("a",{href:Xm,target:"_blank",rel:"noopener noreferrer",className:"hero-btn",style:O.btnWhatsapp(i),children:[l.jsx(zh,{size:16,strokeWidth:2}),"WhatsApp"]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>o(!0),className:"hero-btn",style:O.btnPrimary(i),children:[l.jsx(vc,{size:16,strokeWidth:2}),i?e.signIn:`${e.signIn} to Contact Us`,l.jsx(ll,{size:15,strokeWidth:2.5})]}),l.jsxs("button",{onClick:()=>u(!0),className:"hero-btn",style:O.btnSecondary(i,t),children:["Learn More",l.jsx(ll,{size:15,strokeWidth:2.5})]})]})}),l.jsx("div",{className:"hero-stat-strip",style:O.statStrip(a),children:B2.map(({target:f,suffix:p,label:g},y)=>l.jsx(F2,{target:f,suffix:p,label:g,isDark:t,isVisible:a,delay:y*.12},g))}),l.jsx("div",{style:O.trustWrapper(a),children:l.jsxs("div",{className:"hero-trust",children:[l.jsx(Nr,{size:11,fill:"currentColor",color:"#f59e0b",style:O.starIcon}),l.jsx(Nr,{size:11,fill:"currentColor",color:"#f59e0b",style:O.starIcon}),l.jsx(Nr,{size:11,fill:"currentColor",color:"#f59e0b",style:O.starIcon}),l.jsx(Nr,{size:11,fill:"currentColor",color:"#f59e0b",style:O.starIcon}),l.jsx(Nr,{size:11,fill:"currentColor",color:"#f59e0b",style:O.starIcon}),l.jsx("span",{style:O.trustText,children:"Trusted by publishers across Delhi since 1995"}),l.jsx("span",{className:"hero-trust-dot"}),l.jsx("span",{children:"Dilshad Garden"})]})})]}),l.jsx("div",{style:O.bottomFade(t)})]}),c&&l.jsx("div",{className:"hero-modal-overlay",onClick:()=>u(!1),children:l.jsxs("div",{className:"hero-modal-content",onClick:f=>f.stopPropagation(),style:O.modalContent(t),children:[l.jsx("button",{className:"hero-modal-close",onClick:()=>u(!1),children:l.jsx(gs,{size:20})}),l.jsxs("h2",{style:O.modalTitle(i,t),children:["About"," ",l.jsx("span",{style:O.modalTitleAccent,children:"BK Offset Printing"})]}),l.jsxs("div",{style:O.modalBody(i,t),children:[l.jsxs("p",{style:O.mb20,children:[l.jsx("strong",{children:"BK Offset Printing"})," has been a trusted name in the printing industry since 1995, serving publishers, authors, and businesses across Delhi with premium printing solutions."]}),l.jsx("h3",{style:O.sectionSubTitle,children:"Our Services"}),l.jsxs("ul",{style:O.modalList,children:[l.jsxs("li",{style:O.mb8,children:[l.jsx("strong",{children:"Bulk Book Printing:"})," High-volume printing for publishers, authors, and institutions. Textbooks, novels, catalogs, and manuals."]}),l.jsxs("li",{style:O.mb8,children:[l.jsx("strong",{children:"Thermal Gloss Lamination:"})," Premium gloss finish using Fevicol-based adhesives that makes colours pop and protects your prints."]}),l.jsxs("li",{style:O.mb8,children:[l.jsx("strong",{children:"Matte Lamination:"})," Sophisticated, non-reflective finish for premium covers that need to feel as good as they look."]}),l.jsxs("li",{style:O.mb8,children:[l.jsx("strong",{children:"Soft-Touch Lamination:"})," Velvety, luxurious texture ideal for book covers, premium brochures, and collector's editions."]}),l.jsxs("li",{style:O.mb8,children:[l.jsx("strong",{children:"Title Printing:"})," Custom title work with embossing, debossing, spot UV, and digital printing."]})]}),l.jsx("h3",{style:O.sectionSubTitle,children:"Our Equipment"}),l.jsx("p",{style:O.mb16,children:"We operate world-class Heidelberg and Akiyama equipment, including:"}),l.jsxs("ul",{style:O.modalList,children:[l.jsx("li",{children:"Heidelberg Speedmaster Multicolor (Flagship 4-colour press)"}),l.jsx("li",{children:"Akiyama 4-Colour Press with alcohol-damping system"}),l.jsx("li",{children:"Heidelberg Autoplate automated plate-loading system"}),l.jsx("li",{children:"Heidelberg SORDZ 2-Colour press (25×36 inches)"}),l.jsx("li",{children:"Industrial-grade thermal lamination machines"}),l.jsx("li",{children:"Automatic paper cutting machines with ±0.01mm accuracy"})]}),l.jsx("h3",{style:O.sectionSubTitle,children:"Why Choose Us"}),l.jsxs("div",{style:O.metricGrid(i),children:[l.jsxs("div",{style:O.metricCard(t),children:[l.jsx("div",{style:O.metricEmoji,children:"🎯"}),l.jsx("h4",{style:O.metricHeader,children:"30+ Years Experience"}),l.jsx("p",{style:O.metricSub(t),children:"Trusted by thousands of businesses since 1995"})]}),l.jsxs("div",{style:O.metricCard(t),children:[l.jsx("div",{style:O.metricEmoji,children:"⚡"}),l.jsx("h4",{style:O.metricHeader,children:"Fast Turnaround"}),l.jsx("p",{style:O.metricSub(t),children:"Quick delivery without compromise on quality"})]}),l.jsxs("div",{style:O.metricCard(t),children:[l.jsx("div",{style:O.metricEmoji,children:"🏆"}),l.jsx("h4",{style:O.metricHeader,children:"Premium Quality"}),l.jsx("p",{style:O.metricSub(t),children:"Every print meets the highest standards"})]})]}),l.jsx("p",{style:O.modalQuote(t),children:'"We welcome publishers, authors, and businesses for live demonstrations at our facility in Dilshad Garden."'})]})]})})]})}function F2({target:e,suffix:t,label:n,isDark:r,isVisible:i,delay:o}){const[s,a]=_.useState(0),c=ht.useRef(!1);return _.useEffect(()=>{if(!i||c.current)return;c.current=!0;const u=1600,f=o*1e3;function p(v){return 1-Math.pow(1-v,3)}let g;const y=setTimeout(()=>{const v=performance.now();function w(T){const h=Math.min((T-v)/u,1);a(Math.floor(p(h)*e)),h<1?g=requestAnimationFrame(w):a(e)}g=requestAnimationFrame(w)},f);return()=>{clearTimeout(y),cancelAnimationFrame(g)}},[i,e,o]),l.jsxs("div",{className:"hero-stat",style:O.stat(i,o),children:[l.jsxs("div",{className:"hero-stat-num",style:O.statNum(r),children:[s,t]}),l.jsx("div",{className:"hero-stat-label",style:O.statLabel(r),children:n})]})}const U2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes hero-fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes hero-orb1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%     { transform: translate(40px,-30px) scale(1.08); }
    66%     { transform: translate(-20px,20px) scale(0.95); }
  }
  @keyframes hero-orb2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%     { transform: translate(-50px,25px) scale(1.05); }
    70%     { transform: translate(30px,-20px) scale(0.97); }
  }
  @keyframes hero-orb3 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(20px,40px) scale(1.06); }
  }
  @keyframes hero-gradShift {
    0%,100% { background-position: 0% 50%; }
    50%     { background-position: 100% 50%; }
  }
  @keyframes hero-scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes hero-badge-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.35); }
    50%     { box-shadow: 0 0 0 6px rgba(14,165,233,0); }
  }
  @keyframes hero-counter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes hero-slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 18px;
    border-radius: 999px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: default;
    animation: hero-badge-pulse 3s ease-in-out infinite, hero-fadeDown 0.5s ease-out 0s both;
  }

  .hero-h1 {
    font-family: 'Instrument Serif', Georgia, serif;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.05;
    margin: 0;
  }
  .hero-grad-word {
    background: linear-gradient(270deg,#0ea5e9,#6366f1,#38bdf8,#0ea5e9);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hero-gradShift 5s ease infinite;
    font-style: italic;
  }

  .hero-sub {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.75;
  }

  .hero-stat-strip {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
  }
  .hero-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 28px;
    animation: hero-counter 0.5s ease-out both;
  }
  .hero-stat + .hero-stat {
    border-left: 1px solid rgba(255,255,255,0.12);
  }
  .hero-stat-num {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1;
    background: linear-gradient(135deg,#f1f5f9,#94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-top: 3px;
  }

  .hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    border: none;
    border-radius: 14px;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition:
      transform    0.28s cubic-bezier(.34,1.56,.64,1),
      box-shadow   0.28s ease;
  }
  .hero-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(130deg,transparent 0%,rgba(255,255,255,0.12) 45%,transparent 90%);
    transform: translateX(-110%) skewX(-10deg);
    transition: transform 0.55s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
  }
  .hero-btn:hover::before { transform: translateX(200%) skewX(-10deg); }
  .hero-btn:hover  { transform: translateY(-3px) scale(1.03); }
  .hero-btn:active { transform: scale(0.97); }

  .hero-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(10px);
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: hero-fadeIn 0.3s ease-out;
  }
  .hero-modal-content {
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    background: var(--modal-bg);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    box-shadow: 0 30px 80px rgba(0,0,0,0.4);
    animation: hero-slideDown 0.4s ease-out;
  }
  .hero-modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--close-bg);
    border: 1px solid var(--close-border);
    color: var(--close-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .hero-modal-close:hover {
    background: var(--close-hover-bg);
    transform: scale(1.1);
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  .hero-scan {
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg,transparent,rgba(14,165,233,0.20),transparent);
    animation: hero-scanline 10s linear infinite;
    pointer-events: none;
    z-index: 1;
  }

  .hero-trust {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: rgba(255,255,255,0.38);
  }
  .hero-trust-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.25);
  }

  @media (max-width: 640px) {
    .hero-stat { padding: 0 18px; }
    .hero-stat-num { font-size: 22px; }
    .hero-stat + .hero-stat { border-color: rgba(255,255,255,0.09); }
    .hero-modal-content { padding: 30px 20px; }
  }
`,O={section:e=>({position:"relative",overflow:"hidden",minHeight:e?"100svh":"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:e?"100px 20px 60px":"120px 40px 80px",textAlign:"center",background:"transparent"}),orb1:(e,t)=>({width:e?300:600,height:e?300:600,top:e?"-100px":"-200px",left:"10%",background:t?"radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)":"radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",animation:"hero-orb1 14s ease-in-out infinite",zIndex:0}),orb2:(e,t)=>({width:e?250:500,height:e?250:500,bottom:e?"-50px":"-100px",right:"5%",background:t?"radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)":"radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",animation:"hero-orb2 18s ease-in-out infinite",zIndex:0}),orb3:(e,t)=>({width:e?180:320,height:e?180:320,top:"35%",right:e?"5%":"20%",background:t?"radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)":"radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",animation:"hero-orb3 11s ease-in-out infinite",zIndex:0}),contentContainer:{position:"relative",zIndex:2,width:"100%",maxWidth:820},heroBadge:e=>({background:e?"rgba(14,165,233,0.12)":"rgba(14,165,233,0.10)",border:`1px solid ${e?"rgba(14,165,233,0.30)":"rgba(14,165,233,0.25)"}`,color:"#38bdf8",marginBottom:24}),headline:(e,t,n)=>({fontSize:e?"38px":"clamp(44px,6.5vw,76px)",color:t?"#f1f5f9":"#0f172a",marginBottom:20,opacity:n?1:0,animation:n?"hero-fadeUp 0.7s ease-out 0.08s both":"none"}),subtext:(e,t,n)=>({fontSize:e?"14.5px":"clamp(15px,1.6vw,17px)",color:t?"rgba(255,255,255,0.52)":"#475569",maxWidth:540,margin:"0 auto 36px",opacity:n?1:0,animation:n?"hero-fadeUp 0.7s ease-out 0.18s both":"none"}),ctaGroup:e=>({display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginBottom:48,opacity:e?1:0,animation:e?"hero-fadeUp 0.7s ease-out 0.28s both":"none"}),btnPrimary:e=>({background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:e?"12px 24px":"14px 28px",fontSize:e?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"}),btnWhatsapp:e=>({background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",padding:e?"12px 24px":"14px 28px",fontSize:e?"14px":"15px",boxShadow:"0 6px 24px rgba(22,163,74,0.32)"}),btnSecondary:(e,t)=>({background:"transparent",color:t?"rgba(255,255,255,0.75)":"#0f172a",padding:e?"11px 24px":"13px 28px",fontSize:e?"14px":"15px",border:`1px solid ${t?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}`,boxShadow:"none",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}),statStrip:e=>({marginBottom:28,opacity:e?1:0,animation:e?"hero-fadeUp 0.6s ease-out 0.38s both":"none"}),stat:(e,t)=>({opacity:e?1:0,animation:e?`hero-counter 0.5s ease-out ${.38+t}s both`:"none"}),statNum:e=>({color:e?void 0:"#0f172a",WebkitTextFillColor:e?void 0:"#0f172a",fontVariantNumeric:"tabular-nums",minWidth:"3.5ch"}),statLabel:e=>({color:e?void 0:"rgba(0,0,0,0.40)"}),trustWrapper:e=>({opacity:e?1:0,animation:e?"hero-fadeIn 0.8s ease-out 0.55s both":"none",display:"flex",justifyContent:"center"}),starIcon:{opacity:.85},trustText:{marginLeft:4},bottomFade:e=>({position:"absolute",bottom:0,left:0,right:0,height:80,background:e?"linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))":"linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",pointerEvents:"none",zIndex:1}),modalContent:e=>({"--modal-bg":e?"#0f172a":"#ffffff","--close-bg":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)","--close-border":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)","--close-color":e?"#94a3b8":"#64748b","--close-hover-bg":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"}),modalTitle:(e,t)=>({fontFamily:"'Instrument Serif', Georgia, serif",fontSize:e?"28px":"36px",fontWeight:400,color:t?"#f1f5f9":"#0f172a",marginBottom:24}),modalTitleAccent:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},modalBody:(e,t)=>({fontFamily:"'DM Sans', sans-serif",fontSize:e?"15px":"16px",lineHeight:1.8,color:t?"rgba(255,255,255,0.8)":"#1e293b"}),sectionSubTitle:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},modalList:{marginBottom:20,paddingLeft:20},mb20:{marginBottom:20},mb16:{marginBottom:16},mb8:{marginBottom:8},metricGrid:e=>({display:"grid",gridTemplateColumns:e?"1fr":"repeat(3, 1fr)",gap:16,marginTop:16,marginBottom:24}),metricCard:e=>({padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`}),metricEmoji:{fontSize:24,marginBottom:8},metricHeader:{fontWeight:600,marginBottom:4},metricSub:e=>({fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"}),modalQuote:e=>({fontStyle:"italic",color:"#0ea5e9",textAlign:"center",marginTop:24,padding:16,borderTop:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`})},B2=[{target:30,suffix:"+",label:"Years Active"},{target:50,suffix:"K+",label:"Books Printed"},{target:500,suffix:"+",label:"Happy Clients"}];function $2({isDark:e,c:t,isMobile:n,isTablet:r}){const[i,o]=ms(),s=_.useRef(null),[a,c]=_.useState(0),[u,f]=_.useState(!1),[p,g]=_.useState(0);_.useEffect(()=>{if(o&&s.current){const d=setTimeout(()=>{const m=s.current.getBoundingClientRect();c(m.width/2),f(!0)},300);return()=>clearTimeout(d)}},[o]);const y=ye.primary,v=ye.grad,w=n?1:r?2:3,T=_.useCallback(()=>{g(d=>d+1)},[]),h=_.useCallback(()=>{g(d=>Math.max(0,d-1))},[]);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:V2}),l.jsx("style",{children:`
        :root {
          --ps-grad: ${v};
          --pr-radius: 24px 24px 10px 10px;
          --sl-radius: 0 0 12px 12px;
          --em-mask: linear-gradient(to bottom, transparent 0px, black 15px);
          --em-pad-t: 25px;
          --em-pad-b: 0px;
        }
      `}),l.jsxs("section",{ref:i,style:W.section(n),children:[l.jsx("div",{className:`ps-grid-bg${e?" dark":""}`}),l.jsx("div",{style:W.ambientOrb(y)}),l.jsx(H2,{isDark:e,isVisible:o,primary:y,c:t,isMobile:n,grad:v,isVibrating:n&&p>0}),l.jsx("div",{className:"ps-cards-emergence-zone",style:W.emergenceZone(n),children:l.jsx("div",{ref:s,style:W.grid(w,n,a),children:(n?[...dd].reverse():dd).map((d,m)=>{const S=n?m:{0:0,3:1,2:2,4:3,1:4}[m]??m,I=m%w,C=(w-1)/2,E=(I-C)*12;return l.jsx(W2,{...d,index:m+1,isDark:e,c:t,isMobile:n,isVisible:o&&a>0,delay:.5+S*.3,slotCenter:a,gridRef:s,dealRotation:E,onExtractionStart:T,onExtractionEnd:h},d.title)})})})]})]})}function H2({isDark:e,isVisible:t,primary:n,c:r,isMobile:i,grad:o,isVibrating:s}){return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`ps-printer-body ${s?"ps-printer-vibrating":""}`,style:W.printerBody(e,t),children:[l.jsxs("div",{style:W.printerContent(t),children:[l.jsxs("div",{className:"ps-eyebrow",style:W.eyebrow(n),children:[l.jsx("span",{style:W.eyebrowLine}),l.jsx("span",{style:W.mx12,children:"What we offer"}),l.jsx("span",{style:W.eyebrowLine})]}),l.jsxs("h2",{style:W.heading(i,r.text),children:["Our Printing"," ",l.jsx("span",{style:W.headingAccent(o),children:"Services"})]}),l.jsx("div",{className:"ps-intro",style:W.intro(e),children:l.jsx("p",{style:W.introP(i,r),children:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi."})})]}),l.jsxs("div",{style:W.statusGroup,children:[l.jsx("div",{style:W.statusDot(t)}),l.jsx("div",{style:W.statusDotIdle})]})]}),l.jsx("div",{style:W.slotContainer,children:l.jsx("div",{className:"ps-printer-slot",style:W.slot(i),children:l.jsx("div",{className:"ps-printer-scan-line",style:W.scanLineDelay})})})]})}function W2({title:e,desc:t,icon:n,features:r,accent:i,accentLight:o,accentBorder:s,glow2:a,glowBg:c,index:u,isDark:f,c:p,isMobile:g,isVisible:y,delay:v,slotCenter:w,gridRef:T,dealRotation:h,onExtractionStart:d,onExtractionEnd:m}){const x=_.useRef(null),S=_.useRef(null),I=_.useRef(null),[C,E]=_.useState(!1),[F,M]=_.useState({x:0,y:0});_.useEffect(()=>{if(y&&g&&d&&m){const j=setTimeout(()=>{"vibrate"in navigator&&navigator.vibrate([20,30,25]),d();const z=setTimeout(()=>{m()},550);return()=>clearTimeout(z)},v*1e3);return()=>clearTimeout(j)}},[y,g,v,d,m]),_.useEffect(()=>{if(x.current&&T.current&&w>0){const j=x.current.getBoundingClientRect(),z=T.current.getBoundingClientRect(),b=(j.left+j.right)/2-z.left,P=w-b,N=z.top,U=j.top,B=N-U-130;M({x:P,y:B})}},[w,T]);const L=_.useCallback(j=>{if(!S.current||!x.current)return;const z=x.current.getBoundingClientRect(),b=j.clientX-z.left,P=j.clientY-z.top,N=z.width/2,U=z.height/2,B=(b-N)/N,K=(P-U)/U*-10,Pe=B*10;if(S.current.style.transform=`perspective(900px) rotateX(${K}deg) rotateY(${Pe}deg) translateZ(8px)`,I.current){const me=b/z.width*100,le=P/z.height*100;I.current.style.setProperty("--mx",`${me}%`),I.current.style.setProperty("--my",`${le}%`)}},[]),we=_.useCallback(()=>E(!0),[]),de=_.useCallback(()=>{E(!1),S.current&&(S.current.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)")},[]),Le=f?"rgba(15,23,42,0.95)":"rgba(255,255,255,0.98)",R=C?f?`0 60px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px ${o}, 0 0 60px ${i}25`:`0 50px 90px -15px rgba(0,0,0,0.2), 0 25px 50px -8px rgba(0,0,0,0.15), 0 0 0 1px ${o}, 0 0 45px ${i}18`:f?"0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)":"0 25px 50px -12px rgba(0,0,0,0.1), 0 10px 20px -8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)";return l.jsx("div",{ref:x,className:"ps-card-outer",onMouseMove:L,onMouseEnter:we,onMouseLeave:de,style:W.cardOuter(i,a,o,s,c,F,h,g,y,v),children:l.jsxs("div",{ref:S,className:"ps-card-inner",style:W.cardInner(Le,R,C),children:[l.jsx("div",{ref:I,className:"ps-card-glow",style:W.initialGlow}),l.jsx("div",{className:"ps-card-bar"}),l.jsxs("div",{className:"ps-card-content",style:W.cardContent,children:[l.jsxs("div",{style:W.cardHeader,children:[l.jsxs("div",{className:"ps-icon-wrap",style:W.iconWrap(C,i,o),children:[l.jsx(n,{size:22,strokeWidth:1.7}),l.jsx("div",{className:"ps-icon-orbit"})]}),l.jsx(Gr,{className:"ps-arrow",size:17,strokeWidth:2,style:W.arrow(p.textDim)})]}),l.jsx("h3",{style:W.cardTitle(p.text),children:e}),l.jsx("p",{className:"ps-desc",style:W.cardDesc(p.textDim),children:t}),l.jsx("div",{className:"ps-divider",style:W.cardDivider(C,f,i,a)}),l.jsxs("div",{children:[l.jsxs("div",{style:W.includesLabel,children:[l.jsx(gn,{size:9,style:{color:i},strokeWidth:2.5}),l.jsx("span",{style:W.includesText(i),children:"Includes"})]}),l.jsx("div",{style:W.tagsContainer,children:r.map((j,z)=>l.jsx("span",{className:"ps-tag",style:W.tag(f,o,s),children:j},z))})]})]})]})})}const dd=[{title:"Bulk Book Printing",desc:"High-volume printing for publishers, authors & institutions. Consistent quality across thousands of copies.",icon:h2,features:["Perfect binding","Case binding","Saddle stitch","Spiral binding"],accent:"#0ea5e9",accentLight:"rgba(14,165,233,0.12)",accentBorder:"rgba(14,165,233,0.25)",glow2:"#6366f1",glowBg:"rgba(14,165,233,0.06)",stat:"10K+",statLabel:"copies / run"},{title:"Thermal Gloss Lamination",desc:"Fevicol-based gloss lamination that makes colours pop and stands up to heavy daily handling.",icon:Uh,features:["High-gloss finish","Scratch-resistant","Water-resistant","UV protection"],accent:"#8b5cf6",accentLight:"rgba(139,92,246,0.12)",accentBorder:"rgba(139,92,246,0.25)",glow2:"#ec4899",glowBg:"rgba(139,92,246,0.06)",stat:"4×",statLabel:"more durable"},{title:"Matte Lamination",desc:"Sophisticated, non-reflective finish — the go-to for premium covers that feel as good as they look.",icon:Mh,features:["Non-reflective","Soft-touch feel","Fingerprint resist","Pro look"],accent:"#10b981",accentLight:"rgba(16,185,129,0.12)",accentBorder:"rgba(16,185,129,0.25)",glow2:"#34d399",glowBg:"rgba(16,185,129,0.06)",stat:"★4.9",statLabel:"client rating"},{title:"Soft-Touch Lamination",desc:"Velvety, luxurious texture that turns every printed piece into an unforgettable tactile experience.",icon:v2,features:["Velvety smooth","Premium feel","Scuff-resistant","Vivid colours"],accent:"#f59e0b",accentLight:"rgba(245,158,11,0.12)",accentBorder:"rgba(245,158,11,0.25)",glow2:"#f97316",glowBg:"rgba(245,158,11,0.06)",stat:"100%",statLabel:"Fevicol-based"},{title:"Title Printing",desc:"Custom title work for book spines, special-edition covers, and branded collateral. Unforgettable.",icon:E2,features:["Embossing/Deboss","Spot UV","Digital print","Custom fonts"],accent:"#ec4899",accentLight:"rgba(236,72,153,0.12)",accentBorder:"rgba(236,72,153,0.25)",glow2:"#f43f5e",glowBg:"rgba(236,72,153,0.06)",stat:"48h",statLabel:"turnaround"}],V2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes ps-fadeUp {
    from { opacity:0; transform:translateY(32px) scale(0.97); }
    to   { opacity:1; transform:translateY(0)    scale(1); }
  }
  @keyframes ps-slideRight {
    from { opacity:0; transform:translateX(-40px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes ps-glow-pulse {
    0%,100% { opacity:0.5; transform:scale(1); }
    50%      { opacity:1;   transform:scale(1.08); }
  }
  @keyframes ps-float {
    0%,100% { transform:translateY(0px) rotate(0deg); }
    33%     { transform:translateY(-8px) rotate(1deg); }
    66%     { transform:translateY(-4px) rotate(-0.5deg); }
  }
  @keyframes ps-spin-slow {
    from { transform:rotate(0deg); }
    to   { transform:rotate(360deg); }
  }
  @keyframes ps-shimmer {
    0%   { transform:translateX(-110%) skewX(-10deg); }
    100% { transform:translateX(210%)  skewX(-10deg); }
  }
  @keyframes ps-bar-in {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes ps-tag-pop {
    0%   { opacity:0; transform:scale(0.7) translateY(6px); }
    70%  { transform:scale(1.05) translateY(-1px); }
    100% { opacity:1; transform:scale(1) translateY(0); }
  }
  @keyframes ps-counter {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes ps-orbit {
    from { transform:rotate(0deg) translateX(28px) rotate(0deg); }
    to   { transform:rotate(360deg) translateX(28px) rotate(-360deg); }
  }
  @keyframes ps-scanline {
    0%   { top:-10%; }
    100% { top:110%; }
  }
  @keyframes ps-border-flow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes ps-printer-warmup {
    0% { filter: brightness(1) saturate(1); }
    50% { filter: brightness(1.2) saturate(1.2) drop-shadow(0 0 20px var(--c-accent)); }
    100% { filter: brightness(1) saturate(1); }
  }
  @keyframes ps-printer-vibrate {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(0.5px, 0.5px); }
    50% { transform: translate(-0.5px, 0.5px); }
    75% { transform: translate(0.5px, -0.5px); }
  }

  .ps-printer-vibrating { animation: ps-printer-vibrate 0.1s linear infinite; }

  @keyframes ps-card-deal {
    0% { 
      transform: translateY(var(--dynamic-start-y, -130px)) translateX(var(--dynamic-start-x, 0)) scale(0.75) rotateZ(var(--deal-rotation, 15deg)) rotateY(var(--deal-rotate-y, 35deg));
      opacity: 0; box-shadow: 0 60px 100px -20px rgba(0,0,0,0.4);
    }
    30% { opacity: 1; box-shadow: 0 40px 70px -15px rgba(0,0,0,0.3); }
    100% { transform: translateY(0) translateX(0) scale(1) rotateZ(0deg) rotateY(0deg); opacity: 1; box-shadow: none; }
  }

  @keyframes ps-print-line {
    0% { transform: scaleX(0); left: 0; }
    50% { transform: scaleX(1); left: 0; }
    100% { transform: scaleX(0); left: 100%; }
  }

  .ps-printer-body {
    position: relative;
    background: var(--printer-bg, #0f172a);
    border: 1px solid var(--printer-border, rgba(255,255,255,0.18));
    border-radius: var(--pr-radius, 20px 20px 10px 10px);
    padding: 60px 40px 40px;
    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.2), 0 0 0 1px var(--printer-outer-border, rgba(255,255,255,0.08));
    z-index: 10;
    overflow: visible;
  }
  .ps-printer-body::after {
    content: ''; position: absolute; bottom: 0; left: 10%; right: 10%;
    height: 4px; background: #000; box-shadow: inset 0 2px 4px rgba(255,255,255,0.05); border-radius: 4px 4px 0 0;
  }
  .ps-printer-slot {
    position: relative; height: 18px; background: #000; border-radius: var(--sl-radius, 0 0 12px 12px);
    z-index: 9; box-shadow: inset 0 4px 8px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.4); overflow: hidden;
  }
  .ps-printer-scan-line {
    position: absolute; top: 50%; left: 0; width: 100%; height: 2px;
    background: var(--ps-grad); box-shadow: 0 0 10px var(--c-accent); transform-origin: left;
    animation: ps-print-line 2s infinite ease-in-out;
  }
  .ps-cards-emergence-zone {
    position: relative; z-index: 1;
    mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    -webkit-mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    perspective: 2000px;
  }

  .ps-eyebrow {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
  }
  .ps-eyebrow span.line { display:block; height:1px; width:32px; background:currentColor; opacity:0.5; }

  .ps-card-outer {
    position:relative; border-radius:20px; padding:1.5px; transition:padding 0.3s ease; cursor:pointer; height:100%; box-sizing:border-box;
  }
  .ps-card-outer::before {
    content:''; position:absolute; inset:0; border-radius:20px;
    background:linear-gradient(270deg, var(--c-accent), var(--c-glow2), var(--c-accent), var(--c-glow2));
    background-size:300% 300%; opacity:0; transition:opacity 0.4s ease; z-index:0;
  }
  .ps-card-outer:hover::before { opacity:1; animation:ps-border-flow 2.5s ease infinite; }

  .ps-card-inner {
    position:relative; border-radius:19px; overflow:hidden; z-index:1;
    border: 1px solid rgba(255,255,255,0.18);
    transition: box-shadow 0.45s cubic-bezier(.22,1,.36,1), transform 0.45s cubic-bezier(.22,1,.36,1);
    will-change:transform; transform-style:preserve-3d; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  }
  .ps-card-inner::before {
    content:''; position:absolute; left:0; right:0; top:-10%; height:40%;
    background:linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%);
    pointer-events:none; z-index:5; opacity:0; transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-card-inner::before { opacity:1; animation:ps-scanline 2s linear infinite; }
  .ps-card-inner::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.07) 45%, transparent 90%);
    transform:translateX(-110%) skewX(-10deg); pointer-events:none; z-index:4; transition:none;
  }
  .ps-card-outer:hover .ps-card-inner::after { animation:ps-shimmer 0.7s cubic-bezier(.22,1,.36,1) forwards; }

  .ps-card-content {
    position:relative; display:flex; flex-direction:column; padding:28px 26px 24px; z-index:2; transition:transform 0.45s cubic-bezier(.22,1,.36,1);
  }
  .ps-card-glow {
    position:absolute; inset:0;
    background:radial-gradient(ellipse 70% 50% at var(--mx,50%) var(--my,0%), var(--c-glow-bg) 0%, transparent 70%);
    opacity:0; transition:opacity 0.4s ease; pointer-events:none; z-index:1;
  }
  .ps-card-outer:hover .ps-card-glow { opacity:1; }
  .ps-card-bar {
    position:absolute; bottom:0; left:0; right:0; height:3px;
    background:linear-gradient(90deg, var(--c-accent), var(--c-glow2));
    transform:scaleX(0); transform-origin:left; transition:transform 0.5s cubic-bezier(.22,1,.36,1); z-index:6;
  }
  .ps-card-outer:hover .ps-card-bar { transform:scaleX(1); }
  .ps-icon-wrap { transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(.34,1.56,.64,1); position:relative; overflow:visible; }
  .ps-card-outer:hover .ps-icon-wrap { transform:scale(1.12) rotate(-6deg); }
  .ps-icon-orbit {
    position:absolute; width:7px; height:7px; border-radius:50%; background:var(--c-accent); top:50%; left:50%; margin:-3.5px 0 0 -3.5px; opacity:0; transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-icon-orbit { opacity:1; animation:ps-orbit 1.2s linear infinite; }
  .ps-tag {
    font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; padding:3px 11px; border-radius:20px;
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
  }
  .ps-card-outer:hover .ps-tag { background:var(--c-accent-light) !important; color:var(--c-accent) !important; border-color:var(--c-accent-border) !important; }
  .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(2) { animation:ps-tag-pop 0.35s 0.10s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(3) { animation:ps-tag-pop 0.35s 0.15s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(4) { animation:ps-tag-pop 0.35s 0.20s both cubic-bezier(.34,1.56,.64,1); }
  .ps-arrow { transition:transform 0.4s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease; opacity:0.4; }
  .ps-card-outer:hover .ps-arrow { transform:translate(3px,-3px); opacity:1; color:var(--c-accent) !important; }
  .ps-intro { position:relative; }
  .ps-intro::before { content:''; position:absolute; left:0; top:14px; bottom:14px; width:3px; border-radius:2px; background:var(--ps-grad); }
  .ps-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image: linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size:48px 48px; mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .ps-grid-bg.dark {
    background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  }

  @media (max-width: 640px) {
    .ps-printer-body { padding: 40px 20px 30px; }
  }
`,W={section:e=>({position:"relative",padding:e?"80px 18px 100px":"120px 48px 140px",maxWidth:1280,margin:"0 auto",overflow:"hidden"}),ambientOrb:e=>({position:"absolute",top:"0%",left:"50%",transform:"translateX(-50%)",width:700,height:340,background:`radial-gradient(ellipse, ${e}14 0%, transparent 70%)`,pointerEvents:"none",zIndex:0}),emergenceZone:e=>({marginTop:-2,marginBottom:0,paddingBottom:e?20:60}),grid:(e,t,n)=>({display:"grid",gridTemplateColumns:`repeat(${e},1fr)`,gap:t?14:18,gridAutoRows:t?"auto":"1fr",visibility:n>0?"visible":"hidden"}),printerBody:(e,t)=>({maxWidth:800,margin:"0 auto","--printer-bg":e?"#0f172a":"#ffffff","--printer-border":e?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.08)","--printer-outer-border":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)",animation:t?"ps-printer-warmup 2s ease-in-out":"none"}),printerContent:e=>({position:"relative",zIndex:2,textAlign:"center",opacity:e?1:0,transition:"opacity 1s ease"}),eyebrow:e=>({color:e,marginBottom:20,justifyContent:"center"}),eyebrowLine:{display:"block",height:1,width:32,background:"currentColor",opacity:.5},mx12:{margin:"0 12px"},heading:(e,t)=>({fontFamily:"'Instrument Serif',Georgia,serif",fontSize:e?"32px":"56px",fontWeight:400,letterSpacing:"-0.03em",lineHeight:1.05,color:t,margin:"0 0 32px"}),headingAccent:e=>({fontStyle:"italic",display:"inline-block",background:e,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"}),intro:e=>({display:"inline-block",maxWidth:580,textAlign:"left",padding:"16px 22px 16px 28px",background:e?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.028)",border:`1px solid ${e?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.075)"}`,borderRadius:12}),introP:(e,t)=>({margin:0,fontFamily:"'DM Sans',sans-serif",fontSize:e?"13px":"14px",lineHeight:1.75,color:t.textMid??t.textDim}),statusGroup:{position:"absolute",top:20,right:20,display:"flex",gap:6},statusDot:e=>({width:6,height:6,borderRadius:"50%",background:e?"#22c55e":"#ef4444",boxShadow:e?"0 0 8px #22c55e":"none"}),statusDotIdle:{width:6,height:6,borderRadius:"50%",background:"#64748b"},slotContainer:{maxWidth:760,margin:"0 auto",position:"relative",zIndex:9},slot:e=>({marginTop:e?0:-10,marginBottom:e?-10:0}),scanLineDelay:{animationDelay:"1s"},cardOuter:(e,t,n,r,i,o,s,a,c,u)=>({"--c-accent":e,"--c-glow2":t,"--c-accent-light":n,"--c-accent-border":r,"--c-glow-bg":i,"--dynamic-start-x":`${o.x}px`,"--dynamic-start-y":`${o.y}px`,"--deal-rotation":`${s}deg`,"--deal-rotate-y":`${a?0:35}deg`,height:"100%",opacity:c?1:0,animation:c?`ps-card-deal 1.1s cubic-bezier(.17, .67, .41, .99) ${u}s both`:"none"}),cardInner:(e,t,n)=>({height:"100%",background:e,boxShadow:t,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transition:n?"box-shadow 0.4s ease":"box-shadow 0.4s ease, transform 0.5s cubic-bezier(.22,1,.36,1)"}),initialGlow:{"--mx":"50%","--my":"0%"},cardContent:{height:"100%",boxSizing:"border-box"},cardHeader:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:20},iconWrap:(e,t,n)=>({width:52,height:52,borderRadius:15,background:e?t:n,display:"flex",alignItems:"center",justifyContent:"center",color:e?"#fff":t,boxShadow:e?`0 10px 28px ${t}55`:"none",flexShrink:0}),arrow:e=>({color:e,flexShrink:0,marginTop:4}),cardTitle:e=>({fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"21px",fontWeight:500,letterSpacing:"-0.01em",lineHeight:1.15,color:e,margin:"0 0 10px"}),cardDesc:e=>({fontSize:"13px",color:e,lineHeight:1.72,margin:"0 0 20px",flex:1}),cardDivider:(e,t,n,r)=>({background:e?`linear-gradient(90deg,${n}55,${r}33,transparent)`:t?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)",marginBottom:16}),includesLabel:{display:"flex",alignItems:"center",gap:6,marginBottom:10},includesText:e=>({fontFamily:"'DM Sans',sans-serif",fontSize:"9px",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:e}),tagsContainer:{display:"flex",flexWrap:"wrap",gap:5},tag:(e,t,n)=>({background:e?"rgba(255,255,255,0.07)":t,color:e?"rgba(255,255,255,0.58)":`${t}cc`,border:`1px solid ${e?"rgba(255,255,255,0.09)":n}`})};function Y2({isDark:e,c:t,isMobile:n,isTablet:r}){const i=_.useRef(null),[o,s]=_.useState("dormant"),[a,c]=_.useState(!1),[u,f]=_.useState(!1),[p,g]=_.useState(ra.map(R=>({...R}))),[y,v]=_.useState(null),[w,T]=_.useState({}),h=_.useRef({x:0,y:0,oX:0,oY:0}),d=_.useRef({x:0,y:0}),[m,x]=_.useState(null),S=_.useRef([]),I=Qm??[];_.useEffect(()=>{const R=i.current;if(!R)return;const j=new IntersectionObserver(([z])=>{z.isIntersecting&&o==="dormant"&&s("charging")},{threshold:n?.05:.35});return j.observe(R),()=>j.disconnect()},[o,n]),_.useEffect(()=>{if(o==="charging"){const R=setTimeout(()=>s("exploding"),900);S.current.push(R)}if(o==="exploding"){c(!0);const R=setTimeout(()=>f(!0),200),j=setTimeout(()=>s("revealed"),1400);S.current.push(R,j)}return()=>S.current.forEach(clearTimeout)},[o]),_.useEffect(()=>{if(o==="revealed"){const R=setTimeout(()=>{const j=Ki(n);g(b=>b.map((P,N)=>({...P,x:j[N].x,y:j[N].y})));const z={};Gi.forEach((b,P)=>z[P]=!0),T(z)},300);return S.current.push(R),()=>clearTimeout(R)}},[o,n]);const C=_.useCallback(()=>{S.current.forEach(clearTimeout),g(ra.map(R=>({...R}))),T({}),s("dormant"),c(!1),f(!1),setTimeout(()=>s("charging"),80)},[]),E=(R,j)=>{if(o!=="revealed"||w[j])return;R.preventDefault(),R.stopPropagation();const z=n?1.1:1.6,b=n?1:1.3;T(P=>{const N={...P};return delete N[j],N}),v(j),h.current={x:R.clientX,y:R.clientY,oX:p[j].x*z,oY:p[j].y*b},d.current={x:R.clientX,y:R.clientY},R.target.setPointerCapture(R.pointerId)},F=R=>{var me,le;if(y===null)return;const j=((me=i.current)==null?void 0:me.offsetWidth)||window.innerWidth,z=((le=i.current)==null?void 0:le.offsetHeight)||window.innerHeight,b=j/2-80,P=z/2-80,N=n?1.1:1.6,U=n?1:1.3;let B=(h.current.oX+(R.clientX-h.current.x))/N,Z=(h.current.oY+(R.clientY-h.current.y))/U;B=Math.max(-b/N,Math.min(b/N,B)),Z=Math.max(-P/U+50,Math.min(P/U,Z)),g(Ye=>Ye.map((dn,vr)=>vr===y?{...dn,x:B,y:Z}:dn));const K=Ki(n)[y];if(Math.hypot(B-K.x,Z-K.y)<80){g(Ye=>Ye.map((dn,vr)=>vr===y?{...dn,x:K.x,y:K.y}:dn)),T(Ye=>({...Ye,[y]:!0})),v(null);try{R.target.releasePointerCapture(R.pointerId)}catch{}}},M=R=>{if(o!=="revealed"||y!==null||w[R]||Object.keys(w).length>=Gi.length)return;const z=Ki(n)[R];g(b=>b.map((P,N)=>N===R?{...P,x:z.x,y:z.y}:P)),T(b=>({...b,[R]:!0}))},L=(R,j,z,b)=>{if(y!==null){try{R.target.releasePointerCapture(R.pointerId)}catch{}v(null),Math.hypot(R.clientX-d.current.x,R.clientY-d.current.y)<5&&x({...j,src:b,idx:z})}else w[z]&&x({...j,src:b,idx:z})},we=o==="exploding"||o==="revealed",de=o==="revealed",Le=n?155:r?185:215;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:q2}),l.jsxs("section",{ref:i,className:"gl-section",style:$.section(e,n),children:[l.jsxs("div",{style:$.header(u,n,e),children:[l.jsxs("div",{className:"gl-eyebrow",style:$.eyebrow,children:[l.jsx("span",{className:"gl-line"}),"Our Machinery",l.jsx("span",{className:"gl-line"})]}),l.jsxs("h2",{style:$.heading(n,e),children:["Built for"," ",l.jsx("span",{className:"gl-grad-text",style:$.headingAccent,children:"Precision"})]}),l.jsx("p",{style:$.subtext(e),children:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality."})]}),l.jsxs("div",{className:"gl-stage",style:$.stage(n,u),children:[l.jsx("div",{style:$.ambientGlow(we)}),l.jsx("div",{style:$.dotGrid}),!we&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"gl-ring-orbit",style:$.ringOrbitLarge}),l.jsx("div",{className:"gl-ring-orbit",style:$.ringOrbitSmall})]}),l.jsxs("div",{className:`gl-core ${o==="charging"?"charge":we?"gone":"pulse"}`,style:$.core(n),children:[l.jsx("div",{style:$.coreInner}),l.jsx("div",{style:$.coreOuter})]}),l.jsx("div",{className:`gl-shock  ${a?"fire":""}`,style:$.core(n)}),l.jsx("div",{className:`gl-shock2 ${a?"fire":""}`,style:$.core(n)}),a&&K2.map((R,j)=>l.jsx("div",{className:"gl-spark fire",style:$.spark(j,R)},j)),o==="dormant"&&l.jsx("div",{style:$.scrollHintWrapper,children:l.jsx("span",{className:"gl-scroll-hint",children:"↑ scroll to ignite"})}),Gi.map((R,j)=>{const z=Ki(n)[j],b=`${z.x*(n?1.1:1.6)}px`,P=`${z.y*(n?1:1.3)}px`,N=de&&!w[j]&&n;return l.jsx("div",{className:`gl-magnet-frame${N?" visible":""}`,style:$.magnetFrame(Le,b,P,z.rot)},`frame-${j}`)}),Gi.map((R,j)=>{const z=y===j,b=w[j],P=p[j],N=`${P.x*(n?1.1:1.6)}px`,U=`${P.y*(n?1:1.3)}px`,B=b||n?"0deg":`${ra[j].rot}deg`,Z=.04+j*.055,K=`${j*.6}s`,Pe=I[j]??null,me=G2(R.accent);return l.jsx("div",{onPointerDown:le=>E(le,j),onPointerMove:F,onPointerEnter:()=>M(j),onPointerUp:le=>L(le,R,j,Pe),onPointerCancel:le=>L(le,R,j,Pe),className:`gl-card-float${u?" blasting":""}${de?" floating":""}${z?" dragging":""}${b?" snapped":""}`,style:$.card(N,U,z,n,P.rot,B,Z,K,R.accent,me,R.glow,Le),children:l.jsxs("div",{className:"gl-card-inner",style:$.cardInner(R.grad),children:[Pe?l.jsx("img",{className:"gl-card-img",src:Pe,alt:R.name,loading:"lazy"}):l.jsx("div",{style:$.cardImgFallback(R.grad),children:l.jsx("div",{style:$.fallbackIcon(R.accent,R.glow),children:l.jsx(gn,{size:24,strokeWidth:1.5})})}),l.jsx("div",{className:"gl-img-grad"}),l.jsx("div",{className:"gl-card-bar"}),l.jsxs("div",{className:"gl-card-content",children:[l.jsx("span",{className:"gl-cat-pill",children:R.category}),l.jsx("span",{className:"gl-card-name",children:R.name}),l.jsxs("div",{className:"gl-card-spec",children:[l.jsx(gn,{size:9,strokeWidth:2.5}),R.spec]})]})]})},j)})]}),l.jsxs("div",{style:$.footer(de,n),children:[l.jsx("div",{style:$.mb24,children:l.jsxs("button",{className:"gl-replay-btn",onClick:C,children:[l.jsx(gn,{size:11,strokeWidth:2.5})," Replay explosion"]})}),l.jsxs("div",{style:$.linkGroup,children:[l.jsx("div",{style:$.linkLine(e)}),l.jsx("span",{style:$.linkText(e),children:"See these machines live —"}),l.jsxs("a",{href:"https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7",target:"_blank",rel:"noopener noreferrer",className:"gl-yt-pill",children:[l.jsx("span",{style:$.statusPill}),"Watch on YouTube",l.jsx(Gr,{size:13,strokeWidth:2.5})]}),l.jsx("div",{style:$.linkLine(e)})]})]}),m&&l.jsx("div",{className:"gl-modal-backdrop",onPointerDown:()=>x(null),children:l.jsxs("div",{className:"gl-modal-box",onPointerDown:R=>R.stopPropagation(),children:[l.jsx("button",{className:"gl-modal-close",onClick:()=>x(null),"aria-label":"Close",children:l.jsx(gs,{size:20})}),m.src&&l.jsx("img",{src:m.src,alt:m.name,className:"gl-modal-img"}),!m.src&&l.jsx("div",{style:$.modalImgFallback(m.grad),children:l.jsx(gn,{size:48,style:$.modalFallbackIcon(m.accent)})}),l.jsxs("div",{className:"gl-modal-content",children:[l.jsxs("div",{style:$.modalTagGroup,children:[l.jsx("span",{className:"gl-cat-pill",style:$.modalMainTag(m.accent),children:m.category}),l.jsx("span",{className:"gl-cat-pill",style:$.modalSubTag,children:m.tag})]}),l.jsx("h3",{className:"gl-modal-title",children:m.name}),l.jsx("p",{className:"gl-modal-desc",children:m.desc}),l.jsxs("div",{style:$.modalSpecPill(m.accent),children:[l.jsx(gn,{size:14,style:$.mr8})," ",m.spec]})]})]})})]})]})}function G2(e){return{"#0ea5e9":"#6366f1","#6366f1":"#8b5cf6","#10b981":"#06b6d4","#f59e0b":"#f97316","#ec4899":"#f43f5e","#8b5cf6":"#6366f1","#f97316":"#f59e0b"}[e]||"#0ea5e9"}const Gi=[{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology.",spec:"4-colour",accent:"#0ea5e9",glow:"rgba(14,165,233,0.7)",grad:"linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)"},{name:"Heidelberg Printing Machine",category:"Offset Printing",tag:"Industry Leader",desc:"State-of-the-art Heidelberg — a benchmark in precision engineering. Deliver superior output trusted by professionals worldwide.",spec:"Multi-colour",accent:"#6366f1",glow:"rgba(99,102,241,0.7)",grad:"linear-gradient(145deg,#08051e 0%,#151048 60%,#6366f120 100%)"},{name:"Akiyama 4-Colour Press",category:"Offset Printing",tag:"Alcohol-Damped",desc:"Akiyama alcohol-damped 4-colour press. Alcohol damping system provides superior ink-water balance for exceptional dot gain control.",spec:"19×26 in",accent:"#10b981",glow:"rgba(16,185,129,0.7)",grad:"linear-gradient(145deg,#031209 0%,#082a16 60%,#10b98120 100%)"},{name:"Heidelberg Autoplate Machine",category:"Plate Making",tag:"Automated",desc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly.",spec:"Auto-plate",accent:"#f59e0b",glow:"rgba(245,158,11,0.7)",grad:"linear-gradient(145deg,#1a0e00 0%,#2e1c00 60%,#f59e0b20 100%)"},{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster multicolour press. Engineered for peak performance delivering unmatched print quality.",spec:"Up to 4-colour",accent:"#0ea5e9",glow:"rgba(14,165,233,0.7)",grad:"linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)"},{name:"Heidelberg SORDZ 2-Colour",category:"Offset Printing",tag:"Ref. #1447",desc:"Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build.",spec:"25×36 in",accent:"#ec4899",glow:"rgba(236,72,153,0.7)",grad:"linear-gradient(145deg,#1a0310 0%,#38071f 60%,#ec489920 100%)"},{name:"Thermal Lamination Machine",category:"Lamination",tag:"High-Speed",desc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives.",spec:"±0.01mm",accent:"#8b5cf6",glow:"rgba(139,92,246,0.7)",grad:"linear-gradient(145deg,#0d0518 0%,#1c0e38 60%,#8b5cf620 100%)"},{name:"Automatic Paper Cutting Machine",category:"Finishing",tag:"Ultra Precise",desc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Streamlining workflow.",spec:"High-volume",accent:"#f97316",glow:"rgba(249,115,22,0.7)",grad:"linear-gradient(145deg,#1a0700 0%,#2e1200 60%,#f9731620 100%)"}],ra=[{x:-52,y:-42,rot:-18},{x:0,y:-56,rot:4},{x:52,y:-42,rot:14},{x:-62,y:0,rot:-10},{x:62,y:0,rot:10},{x:-52,y:44,rot:16},{x:0,y:56,rot:-6},{x:52,y:44,rot:-14}],Ki=e=>{const t=e?175:190,n=e?335:240;return e?[{x:-t*.5,y:0,rot:0},{x:t*.5,y:0,rot:0},{x:-t*.5,y:n,rot:0},{x:t*.5,y:n,rot:0},{x:-t*.5,y:n*2,rot:0},{x:t*.5,y:n*2,rot:0},{x:-t*.5,y:n*3,rot:0},{x:t*.5,y:n*3,rot:0}]:[{x:-t*1.5,y:-n/2,rot:0},{x:-t*.5,y:-n/2,rot:0},{x:t*.5,y:-n/2,rot:0},{x:t*1.5,y:-n/2,rot:0},{x:-t*1.5,y:n/2,rot:0},{x:-t*.5,y:n/2,rot:0},{x:t*.5,y:n/2,rot:0},{x:t*1.5,y:n/2,rot:0}]},K2=[0,30,60,90,120,150,180,210,240,270,300,330],X2=["linear-gradient(to bottom,#fff,#38bdf8,transparent)","linear-gradient(to bottom,#fff,#6366f1,transparent)","linear-gradient(to bottom,#fff,#10b981,transparent)"],q2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes gl-charge {
    0%   { transform:translate(-50%,-50%) scale(0.6);  opacity:0.3; box-shadow:0 0 0px   rgba(14,165,233,0); }
    40%  { transform:translate(-50%,-50%) scale(1.1);  opacity:0.9; box-shadow:0 0 60px  rgba(14,165,233,0.8), 0 0 120px rgba(14,165,233,0.4); }
    60%  { transform:translate(-50%,-50%) scale(0.92); opacity:1;   box-shadow:0 0 100px rgba(14,165,233,1),   0 0 200px rgba(14,165,233,0.6); }
    80%  { transform:translate(-50%,-50%) scale(1.18); opacity:1;   box-shadow:0 0 160px rgba(14,165,233,1),   0 0 300px rgba(14,165,233,0.8); }
    100% { transform:translate(-50%,-50%) scale(0);    opacity:0;   box-shadow:0 0 0     rgba(14,165,233,0); }
  }
  @keyframes gl-core-pulse {
    0%,100% { transform:translate(-50%,-50%) scale(1);    box-shadow:0 0 40px rgba(14,165,233,0.5),0 0 80px rgba(14,165,233,0.25); }
    50%     { transform:translate(-50%,-50%) scale(1.08); box-shadow:0 0 70px rgba(14,165,233,0.9),0 0 140px rgba(14,165,233,0.5); }
  }
  @keyframes gl-ring-expand {
    0%   { transform:translate(-50%,-50%) scale(0); opacity:0.9; }
    100% { transform:translate(-50%,-50%) scale(4); opacity:0; }
  }
  @keyframes gl-ring2-expand {
    0%   { transform:translate(-50%,-50%) scale(0); opacity:0.7; }
    100% { transform:translate(-50%,-50%) scale(6); opacity:0; }
  }
  @keyframes gl-spark {
    0%   { transform:translate(-50%,-50%) rotate(var(--a)) translateX(0px)   scale(1); opacity:1; }
    100% { transform:translate(-50%,-50%) rotate(var(--a)) translateX(200px) scale(0); opacity:0; }
  }
  @keyframes gl-header-blast {
    0%   { transform:translateY(30vh) scale(0.1); opacity:0; filter:blur(14px) brightness(3); }
    15%  { filter:blur(6px) brightness(2); opacity:0.7; }
    60%  { transform:translateY(-10px) scale(1.05); filter:blur(0) brightness(1); opacity:1; }
    90%  { transform:translateY(5px) scale(0.98); opacity:1; }
    100% { transform:translateY(0) scale(1); opacity:1; filter:blur(0) brightness(1); }
  }
  @keyframes gl-card-blast {
    0%   { transform:translate(-50%,-50%) translate(0,0) rotate(0deg) scale(0.1); opacity:0; filter:blur(14px) brightness(3); }
    15%  { filter:blur(6px) brightness(2); opacity:0.7; }
    60%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*0.85),calc(var(--by)*0.85)) rotate(calc(var(--br)*1.4deg)) scale(1.06); filter:blur(0) brightness(1); opacity:1; }
    75%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*1.05),calc(var(--by)*1.05)) rotate(calc(var(--br)*0.8deg)) scale(0.96); }
    88%  { transform:translate(-50%,-50%) translate(calc(var(--bx)*0.97),calc(var(--by)*0.97)) rotate(calc(var(--br)*1.05deg)) scale(1.01); }
    100% { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1); opacity:1; filter:blur(0) brightness(1); }
  }
  @keyframes gl-card-idle {
    0%,100% { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1)    translateY(0px); }
    50%     { transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1.01) translateY(-6px); }
  }
  @keyframes gl-fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes gl-rotate-slow {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(360deg); }
  }
  @keyframes gl-counter-rotate {
    from { transform:translate(-50%,-50%) rotate(0deg); }
    to   { transform:translate(-50%,-50%) rotate(-360deg); }
  }
  @keyframes gl-breathe {
    0%,100% { opacity:0.25; }
    50%     { opacity:0.6; }
  }
  @keyframes gl-scanline {
    0%   { top:-20%; }
    100% { top:120%; }
  }
  @keyframes gl-shimmer {
    0%   { transform:translateX(-110%) skewX(-10deg); }
    100% { transform:translateX(210%)  skewX(-10deg); }
  }
  @keyframes gl-border-flow {
    0%,100% { background-position:0%   50%; }
    50%     { background-position:100% 50%; }
  }

  .gl-section { position:relative; overflow:hidden; background:#ffffff; }
  .gl-stage { position:relative; width:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .gl-core { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; background:radial-gradient(circle,#fff 0%,#7dd3fc 25%,#0ea5e9 55%,transparent 100%); pointer-events:none; z-index:30; }
  .gl-core.pulse   { animation:gl-core-pulse 2s ease-in-out infinite; }
  .gl-core.charge  { animation:gl-charge 1s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-core.gone    { display:none; }
  .gl-ring-orbit { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:1px dashed rgba(14,165,233,0.3); pointer-events:none; z-index:5; }
  .gl-shock { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:3px solid rgba(14,165,233,0.9); pointer-events:none; z-index:29; display:none; }
  .gl-shock.fire  { display:block; animation:gl-ring-expand  0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-shock2 { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:50%; border:2px solid rgba(14,165,233,0.5); pointer-events:none; z-index:28; display:none; }
  .gl-shock2.fire { display:block; animation:gl-ring2-expand 1.1s cubic-bezier(.22,1,.36,1) 0.1s forwards; }
  .gl-spark { position:absolute; left:50%; top:var(--gl-v-center, 50%); width:3px; transform-origin:top center; border-radius:2px; pointer-events:none; z-index:28; display:none; }
  .gl-spark.fire { display:block; animation:gl-spark 0.6s cubic-bezier(.22,1,.36,1) forwards; }
  
  .gl-card-float { position:absolute; left:50%; top:var(--gl-v-center, 50%); border-radius:16px; overflow:hidden; cursor:grab; z-index:10; transform:translate(-50%,-50%) scale(0); opacity:0; padding:1.5px; user-select:none; touch-action:none; will-change: transform, z-index; transition: transform 0.4s cubic-bezier(.175,.885,.32,1.275), box-shadow 0.4s ease; }
  .gl-card-float:active { cursor:grabbing; }
  .gl-card-float.dragging { z-index: 100 !important; animation: none !important; opacity: 1 !important; transition: none; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.1) !important; }
  .gl-card-float.snapped { animation: none !important; opacity: 1 !important; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(var(--original-rot)) scale(1) !important; box-shadow: 0 0 30px var(--ca-glow) !important; cursor: pointer; }
  .gl-card-float.snapped:hover { opacity: 1 !important; transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important; z-index: 50 !important; cursor: pointer; }
  .gl-card-float.blasting { animation:gl-card-blast 1.1s cubic-bezier(.22,1,.36,1) var(--blast-delay) both; }
  .gl-card-float.floating:not(.dragging):not(.snapped) { opacity:1; transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1); animation:gl-card-idle 4s ease-in-out var(--float-offset) infinite; }
  .gl-card-float.floating:not(.dragging):not(.snapped):hover { transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important; z-index: 50 !important; animation-play-state: paused; }
  .gl-card-float::before { content:''; position:absolute; inset:0; border-radius:16px; background:linear-gradient(270deg,var(--ca),var(--ca2),var(--ca),rgba(255,255,255,0.1)); background-size:400% 400%; opacity:0; transition:opacity 0.4s ease; z-index:0; }
  .gl-card-float:hover::before, .gl-card-float.dragging::before { opacity:1; animation:gl-border-flow 2.5s ease infinite; }
  .gl-card-inner { position:relative; width:100%; border-radius:15px; overflow:hidden; z-index:1; transition:box-shadow 0.4s ease; }
  .gl-card-float:hover .gl-card-inner, .gl-card-float.dragging .gl-card-inner { box-shadow:0 24px 60px rgba(0,0,0,0.7), 0 0 40px var(--ca-glow); }
  .gl-card-inner::before { content:''; position:absolute; left:0; right:0; top:-20%; height:35%; background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.04),transparent); pointer-events:none; z-index:6; opacity:0; transition:opacity 0.3s ease; }
  .gl-card-float:hover .gl-card-inner::before { opacity:1; animation:gl-scanline 2s linear infinite; }
  .gl-card-img { width:100%; height:160px; object-fit:cover; display:block; transition:transform 0.6s cubic-bezier(.22,1,.36,1), filter 0.45s ease; filter:saturate(0.9) brightness(1.0); pointer-events:none; }
  .gl-card-float:hover .gl-card-img, .gl-card-float.dragging .gl-card-img { transform:scale(1.1); filter:saturate(1.1) brightness(1.05); }
  .gl-img-grad { position:absolute; top:0; left:0; right:0; height:160px; background:linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(2,4,18,0.72)); pointer-events:none; z-index:2; }
  .gl-card-content { position:relative; padding:14px 14px 12px; z-index:3; pointer-events:none; }
  .gl-cat-pill { display:inline-block; font-family:'DM Sans',sans-serif; font-size:9px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; padding:3px 9px; border-radius:99px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); color:var(--ca); margin-bottom:7px; transition:background 0.3s ease, border-color 0.3s ease; }
  .gl-card-float:hover .gl-cat-pill { background:rgba(255,255,255,0.14); border-color:var(--ca); }
  .gl-card-name { font-family:'DM Sans',sans-serif; font-size:15px; font-weight:500; letter-spacing:0; line-height:1.25; color:#f8fafc; display:block; transition:color 0.3s ease; margin-bottom:8px; }
  .gl-card-float:hover .gl-card-name { color:#fff; }
  .gl-card-spec { display:flex; align-items:center; gap:5px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--ca); opacity:0.85; }
  .gl-card-bar { position:absolute; bottom:0; left:0; right:0; height:2.5px; background:linear-gradient(90deg,var(--ca),var(--ca2)); transform:scaleX(0); transform-origin:left; transition:transform 0.45s cubic-bezier(.22,1,.36,1); z-index:7; }
  .gl-card-float:hover .gl-card-bar { transform:scaleX(1); }
  
  .gl-magnet-frame { position: absolute; left: 50%; top: var(--gl-v-center, 50%); border-radius: 16px; border: 2px dashed var(--frame-color, rgba(255,255,255,0.2)); transform: translate(-50%,-50%) translate(var(--fx),var(--fy)) rotate(var(--fr)); opacity: 0; pointer-events: none; z-index: 5; transition: opacity 0.3s ease, border-color 0.3s ease; }
  .gl-magnet-frame.visible { opacity: 1; }
  
  .gl-eyebrow { display:inline-flex; align-items:center; gap:12px; font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; }
  .gl-eyebrow .gl-line { display:block; height:1px; width:32px; background:currentColor; opacity:0.4; }
  .gl-grad-text { display:inline-block; background-clip:text; -webkit-background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }
  .gl-scroll-hint { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:#64748b; animation:gl-breathe 2.5s ease-in-out infinite; }
  .gl-yt-pill { display:inline-flex; align-items:center; gap:7px; padding:10px 22px; border-radius:99px; background:rgba(255,0,0,0.10); border:1px solid rgba(255,0,0,0.22); color:#ff4444; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:700; text-decoration:none; transition:background 0.25s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease; }
  .gl-yt-pill:hover { background:rgba(255,0,0,0.22); transform:scale(1.05) translateY(-2px); box-shadow:0 8px 32px rgba(255,0,0,0.22); }
  .gl-replay-btn { display:inline-flex; align-items:center; gap:6px; padding:8px 18px; border-radius:99px; background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.10); color:#64748b; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.06em; cursor:pointer; transition:background 0.25s ease, color 0.25s ease; }
  .gl-replay-btn:hover { background:rgba(0,0,0,0.10); color:#0f172a; }

  .gl-modal-backdrop { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(2, 4, 18, 0.85); backdrop-filter: blur(8px); z-index: 1000; display: flex; align-items: center; justify-content: center; opacity: 0; animation: modalFadeIn 0.3s forwards; }
  .gl-modal-box { background: linear-gradient(145deg,#0d1123 0%,#060814 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; width: 90%; max-width: 420px; overflow: hidden; position: relative; transform: scale(0.9) translateY(30px); opacity: 0; animation: modalSlideUp 0.5s cubic-bezier(.175,.885,.32,1.275) 0.05s forwards; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4); }
  .gl-modal-close { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; z-index: 10; transition: all 0.2s ease; }
  .gl-modal-close:hover { background: rgba(255,255,255,0.25); transform: scale(1.15) rotate(90deg); }
  .gl-modal-img { width: 100%; height: 200px; object-fit: cover; border-bottom: 1px solid rgba(255,255,255,0.05); pointer-events: none; }
  .gl-modal-content { padding: 24px; }
  .gl-modal-title { font-family: 'Instrument Serif', Georgia, serif; font-size: 26px; font-weight: 400; color: #fff; line-height: 1.1; margin-bottom: 10px; }
  .gl-modal-desc { font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.65; color: rgba(255,255,255,0.65); margin-bottom: 20px; }

  @keyframes modalFadeIn { to { opacity: 1; } }
  @keyframes modalSlideUp { to { transform: scale(1) translateY(0); opacity: 1; } }
`,$={section:(e,t)=>({padding:"0 0 100px",minHeight:"100vh",background:e?"linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')":"linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:t?"scroll":"fixed","--frame-color":e?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)"}),header:(e,t,n)=>({textAlign:"center",padding:t?"60px 20px 40px":"80px 48px 0",opacity:e?1:0,animation:e?"gl-header-blast 1.3s cubic-bezier(.22,1,.36,1) both":"none"}),eyebrow:{color:"#0ea5e9",justifyContent:"center",marginBottom:16},heading:(e,t)=>({fontFamily:"'Instrument Serif',Georgia,serif",fontSize:e?"34px":"54px",fontWeight:400,letterSpacing:"-0.03em",lineHeight:1.05,color:t?"#f1f5f9":"#0f172a",margin:"0 0 14px"}),headingAccent:{fontStyle:"italic",backgroundImage:"linear-gradient(135deg,#0ea5e9,#6366f1)"},subtext:e=>({fontFamily:"'DM Sans',sans-serif",fontSize:"14.5px",color:e?"rgba(255,255,255,0.42)":"#64748b",maxWidth:480,margin:"0 auto",lineHeight:1.72}),stage:(e,t)=>({height:e?"1400px":"90vh",marginTop:t?-20:0,"--gl-v-center":e?"200px":"50%"}),ambientGlow:e=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)",pointerEvents:"none",zIndex:0,opacity:e?.5:.2,transition:"opacity 1s ease"}),dotGrid:{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)",backgroundSize:"32px 32px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)"},ringOrbitLarge:{width:220,height:220,marginLeft:-110,marginTop:-110,animation:"gl-rotate-slow 8s linear infinite"},ringOrbitSmall:{width:160,height:160,marginLeft:-80,marginTop:-80,borderStyle:"dotted",animation:"gl-counter-rotate 5s linear infinite"},core:e=>({width:e?80:120,height:e?80:120}),coreInner:{position:"absolute",inset:10,borderRadius:"50%",background:"radial-gradient(circle,#fff 0%,rgba(56,189,248,0.6) 50%,transparent 100%)"},coreOuter:{position:"absolute",inset:-20,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.3) 0%,transparent 70%)"},spark:(e,t)=>({"--a":`${t}deg`,height:`${45+e%4*15}px`,background:X2[e%3],opacity:.5+e%3*.2,animationDelay:`${e*.022}s`}),scrollHintWrapper:{position:"absolute",bottom:"18%",left:"50%",transform:"translateX(-50%)",zIndex:20,whiteSpace:"nowrap"},magnetFrame:(e,t,n,r)=>({width:e,height:320,"--fx":t,"--fy":n,"--fr":`${r}deg`}),card:(e,t,n,r,i,o,s,a,c,u,f,p)=>({"--bx":e,"--by":t,"--br":n||r?0:i,"--original-rot":o,"--blast-delay":`${s}s`,"--float-offset":a,"--ca":c,"--ca2":u,"--ca-glow":f,width:p}),cardInner:e=>({background:e}),cardImgFallback:e=>({height:160,background:e,display:"flex",alignItems:"center",justifyContent:"center"}),fallbackIcon:(e,t)=>({width:56,height:56,borderRadius:14,background:`${e}20`,border:`1px solid ${e}40`,display:"flex",alignItems:"center",justifyContent:"center",color:e,boxShadow:`0 0 24px ${t}`}),footer:(e,t)=>({textAlign:"center",padding:t?"0 20px":"0 48px",opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s"}),mb24:{marginBottom:24},linkGroup:{display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap"},linkLine:e=>({width:40,height:1,background:e?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.1)"}),linkText:e=>({fontFamily:"'DM Sans',sans-serif",fontSize:"13px",color:e?"rgba(255,255,255,0.30)":"#64748b"}),statusPill:{width:7,height:7,borderRadius:"50%",background:"#ff4444",boxShadow:"0 0 8px #ff4444",display:"inline-block"},modalImgFallback:e=>({height:200,background:e,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"}),modalFallbackIcon:e=>({color:e,opacity:.5}),modalTagGroup:{display:"flex",gap:10,marginBottom:16},modalMainTag:e=>({margin:0,"--ca":e}),modalSubTag:{margin:0,background:"transparent"},modalSpecPill:e=>({display:"inline-flex",padding:"10px 20px",background:"rgba(255,255,255,0.05)",borderRadius:12,border:"1px solid rgba(255,255,255,0.1)",color:e,fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:700}),mr8:{marginRight:8}};function Q2({text:e,isDark:t,c:n,isMobile:r,isTablet:i}){var w,T;const[o,s]=ms(),[a,c]=_.useState("layers"),[u,f]=_.useState(!1),p=fd[a],g=pd.find(h=>h.key===a),y=t?"rgba(255,255,255,0.48)":"#475569",v=t?"#f1f5f9":"#0f172a";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:J2}),l.jsx("section",{ref:o,style:X.section(t,r),children:l.jsxs("div",{style:X.container(s),children:[l.jsxs("div",{style:X.header(r),children:[l.jsxs("div",{className:"wo-eyebrow",style:X.eyebrow,children:[l.jsx(_2,{size:11,strokeWidth:2,style:X.mrNeg2}),e.woTitle]}),l.jsx("h2",{className:"wo-hero-grad",style:X.heading(r),children:e.woTagline}),l.jsx("p",{style:X.heroDesc(r,y),children:e.woHeroDesc})]}),l.jsxs("div",{className:"wo-card",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:X.card(u,t,p),children:[l.jsx("div",{style:X.tabBar(t),children:pd.map(({key:h,icon:d})=>{const m=fd[h],x=h===a;return l.jsxs("button",{className:`wo-tab${x?" wo-tab-active":""}`,onClick:()=>c(h),style:X.tabButton(x,t,m,y),children:[l.jsx("div",{className:"wo-tab-icon",style:X.tabIcon(x,m),children:l.jsx(d,{size:13,strokeWidth:2})}),m.label]},h)})}),l.jsxs("div",{className:"wo-panel-content",style:X.panelContent(r),children:[l.jsxs("div",{style:X.panelLeft(r,t),children:[l.jsxs("div",{style:X.panelHeader,children:[l.jsx("div",{style:X.panelIcon(p),children:g&&l.jsx(g.icon,{size:18,strokeWidth:1.75})}),l.jsx("h3",{style:X.panelTitle(r,v),children:e[g.titleKey]})]}),l.jsx("p",{style:X.panelDesc(y),children:e[g.descKey]}),e[g.footKey]&&l.jsx("div",{className:"wo-quote",style:X.quote(t,p),children:l.jsx("p",{style:X.quoteP(y),children:e[g.footKey]})})]}),l.jsxs("div",{style:X.panelRight(r,t),children:[l.jsxs("div",{style:X.listHeader(t,p),children:[l.jsx("div",{style:X.statusDot(p)}),l.jsx("span",{style:X.listLabel(p),children:p.label}),l.jsxs("span",{style:X.listCount(t),children:[((w=e[g.itemsKey])==null?void 0:w.length)??0," items"]})]}),l.jsx("div",{style:X.itemsWrapper,children:(T=e[g.itemsKey])==null?void 0:T.map((h,d)=>l.jsx(Z2,{label:h,a:p,isDark:t},d))})]})]},a)]}),e.woHeroDesc2&&l.jsx("p",{style:X.heroDesc2(t),children:e.woHeroDesc2})]})})]})}function Z2({label:e,a:t,isDark:n}){const[r,i]=_.useState(!1);return l.jsxs("div",{className:"wo-item",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:X.listItem(r,t),children:[l.jsx("div",{className:"wo-check",style:X.listCheck(r,n,t),children:l.jsx("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",children:l.jsx("path",{d:"M2 5.5L4 7.5L8 3",stroke:r?"#fff":t.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),l.jsx("span",{className:"wo-item-label",style:X.listItemLabel(r,n,t),children:e}),l.jsx(ll,{size:12,strokeWidth:2,style:X.listArrow(r,t)})]})}const fd={layers:{color:"#0ea5e9",glow:"rgba(14,165,233,0.25)",faint:"rgba(14,165,233,0.08)",grad:"linear-gradient(135deg,#0ea5e9,#6366f1)",label:"Capabilities"},zap:{color:"#f59e0b",glow:"rgba(245,158,11,0.25)",faint:"rgba(245,158,11,0.08)",grad:"linear-gradient(135deg,#d97706,#fbbf24)",label:"Reductions"},leaf:{color:"#22c55e",glow:"rgba(34,197,94,0.25)",faint:"rgba(34,197,94,0.08)",grad:"linear-gradient(135deg,#16a34a,#4ade80)",label:"Sustainability"}},pd=[{key:"layers",icon:Mh,titleKey:"woPerfTitle",descKey:"woPerfDesc",itemsKey:"woPerfList",footKey:"woPerfFoot"},{key:"zap",icon:gn,titleKey:"woEnvTitle",descKey:"woEnvDesc",itemsKey:"woEnvList",footKey:"woEnvFoot"},{key:"leaf",icon:x2,titleKey:"woSusTitle",descKey:"woSusDesc",itemsKey:"woSusList",footKey:"woSusFoot"}],J2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes wo-fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes wo-gradShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  @keyframes wo-panelIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .wo-tab { position: relative; display: flex; align-items: center; gap: 9px; padding: 10px 20px; border-radius: 10px; border: 1px solid transparent; background: transparent; cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; white-space: nowrap; transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease; flex-shrink: 0; }
  .wo-tab:hover:not(.wo-tab-active) { background: rgba(255,255,255,0.06); }
  .wo-tab-active { font-weight: 600; box-shadow: 0 4px 16px var(--wo-glow); }
  .wo-tab-active::after { content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%); width: 20px; height: 2px; border-radius: 2px; background: var(--wo-grad); }
  .wo-tab-icon { width: 26px; height: 26px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.22s ease, box-shadow 0.22s ease; }
  .wo-panel-content { animation: wo-panelIn 0.3s cubic-bezier(.22,1,.36,1) both; }
  .wo-item { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 8px; border: 1px solid transparent; transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s cubic-bezier(.22,1,.36,1); cursor: default; }
  .wo-item:hover { transform: translateX(4px); }
  .wo-check { width: 18px; height: 18px; min-width: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.18s ease, box-shadow 0.18s ease; }
  .wo-item-label { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; line-height: 1.5; transition: color 0.18s ease, font-weight 0.18s ease; }
  .wo-hero-grad { background: linear-gradient(270deg,#0ea5e9,#6366f1,#0ea5e9); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: wo-gradShift 5s ease infinite; }
  .wo-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .wo-eyebrow::before, .wo-eyebrow::after { content: ''; display: block; width: 22px; height: 1px; background: currentColor; opacity: 0.5; }
  .wo-quote { position: relative; padding: 12px 16px 12px 20px; border-radius: 8px; }
  .wo-quote::before { content: ''; position: absolute; left: 0; top: 6px; bottom: 6px; width: 3px; border-radius: 2px; background: var(--wo-grad); }
  .wo-card { position: relative; overflow: hidden; transition: background 0.35s ease, border-color 0.3s ease, box-shadow 0.4s cubic-bezier(.22,1,.36,1), transform 0.4s cubic-bezier(.22,1,.36,1); }
  .wo-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(130deg, transparent 0%, rgba(255,255,255,0.07) 45%, transparent 90%); transform: translateX(-110%) skewX(-10deg); transition: transform 0.65s cubic-bezier(.22,1,.36,1); pointer-events: none; z-index: 1; }
  .wo-card:hover::before { transform: translateX(210%) skewX(-10deg); }
  .wo-card:hover { transform: translateY(-4px); }

  @media (max-width: 640px) {
    .wo-tab { padding: 8px 12px; font-size: 12px; }
    .wo-tab-icon { width: 22px; height: 22px; }
  }
`,X={section:(e,t)=>({background:e?"linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')":"linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:t?"scroll":"fixed",padding:t?"64px 20px":"88px 40px"}),container:e=>({maxWidth:1100,margin:"0 auto",opacity:e?1:0,animation:e?"wo-fadeUp 0.5s ease-out both":"none"}),header:e=>({textAlign:"center",marginBottom:e?32:40}),eyebrow:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},mrNeg2:{marginRight:-2},heading:e=>({fontFamily:"'Instrument Serif', Georgia, serif",fontSize:e?"30px":"clamp(32px,4.5vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,margin:"0 0 12px"}),heroDesc:(e,t)=>({fontFamily:"'DM Sans', sans-serif",fontSize:e?"13.5px":"14.5px",color:t,maxWidth:560,margin:"0 auto",lineHeight:1.7}),card:(e,t,n)=>({background:e?t?"rgba(255,255,255,0.055)":"rgba(255,255,255,1)":t?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.82)",border:`1px solid ${e?t?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)":t?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderRadius:20,backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",overflow:"hidden",boxShadow:e?t?`0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${n.faint}`:`0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${n.faint}`:t?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)"}),tabBar:e=>({display:"flex",gap:4,padding:"12px 14px",borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,overflowX:"auto",scrollbarWidth:"none",background:e?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.60)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"}),tabButton:(e,t,n,r)=>({"--wo-glow":n.glow,"--wo-grad":n.grad,color:e?n.color:r,background:e?t?`${n.faint}`:n.faint:"transparent",borderColor:e?t?`${n.color}30`:`${n.color}28`:"transparent"}),tabIcon:(e,t)=>({background:e?t.grad:"transparent",boxShadow:e?`0 2px 8px ${t.glow}`:"none",color:e?"#fff":t.color}),panelContent:e=>({display:"grid",gridTemplateColumns:e?"1fr":"1fr 1fr",gap:0}),panelLeft:(e,t)=>({padding:e?"28px 24px":"36px 40px",borderRight:e?"none":`1px solid ${t?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderBottom:e?`1px solid ${t?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`:"none",display:"flex",flexDirection:"column",gap:16,background:t?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.82)"}),panelHeader:{display:"flex",alignItems:"center",gap:14},panelIcon:e=>({width:44,height:44,borderRadius:12,background:e.grad,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 6px 18px ${e.glow}`,flexShrink:0}),panelTitle:(e,t)=>({fontFamily:"'Instrument Serif', Georgia, serif",fontSize:e?"18px":"22px",fontWeight:400,letterSpacing:"-0.02em",color:t,lineHeight:1.2,margin:0}),panelDesc:e=>({fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:e,lineHeight:1.75,margin:0,flex:1}),quote:(e,t)=>({"--wo-grad":t.grad,background:e?"rgba(255,255,255,0.04)":t.faint,border:`1px solid ${e?"rgba(255,255,255,0.07)":`${t.color}22`}`}),quoteP:e=>({fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"13.5px",fontStyle:"italic",color:e,lineHeight:1.7,margin:0}),panelRight:(e,t)=>({padding:e?"24px":"28px 32px",background:t?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.55)"}),listHeader:(e,t)=>({display:"flex",alignItems:"center",gap:8,marginBottom:14,paddingBottom:12,borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":`${t.color}18`}`}),statusDot:e=>({width:7,height:7,borderRadius:"50%",background:e.grad,boxShadow:`0 0 7px ${e.glow}`}),listLabel:e=>({fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:e.color}),listCount:e=>({marginLeft:"auto",fontFamily:"'DM Sans', sans-serif",fontSize:"11px",color:e?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.25)"}),itemsWrapper:{display:"flex",flexDirection:"column",gap:3},heroDesc2:e=>({fontFamily:"'DM Sans', sans-serif",fontSize:"13px",color:e?"rgba(255,255,255,0.28)":"rgba(0,0,0,0.38)",textAlign:"center",marginTop:20,lineHeight:1.6,maxWidth:600,margin:"20px auto 0"}),listItem:(e,t)=>({background:e?t.faint:"transparent",borderColor:e?`${t.color}40`:"transparent"}),listCheck:(e,t,n)=>({background:e?n.grad:t?"rgba(255,255,255,0.07)":n.faint,boxShadow:e?`0 2px 8px ${n.glow}`:"none",border:e?"none":`1px solid ${n.color}44`}),listItemLabel:(e,t,n)=>({color:e?t?"#f1f5f9":"#0f172a":t?"rgba(255,255,255,0.55)":"#475569",fontWeight:e?600:400}),listArrow:(e,t)=>({marginLeft:"auto",flexShrink:0,color:t.color,opacity:e?.75:0,transform:e?"translateX(0)":"translateX(-4px)",transition:"opacity 0.18s ease, transform 0.18s ease"})};function ew({text:e,c:t,isMobile:n}){const[r,i]=ms(),[o,s]=_.useState(!1),[a,c]=_.useState(!1),u=(t==null?void 0:t.text)??"#0f172a",f=(t==null?void 0:t.textDim)??"#64748b",p=(t==null?void 0:t.border)??"rgba(0,0,0,0.08)",g=(t==null?void 0:t.surf)??"rgba(255,255,255,0.85)",y=()=>{var v;(v=navigator.clipboard)==null||v.writeText(gd).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:rw}),l.jsxs("section",{ref:r,style:Y.section(n),children:[l.jsxs("div",{style:Y.header(n,i),children:[l.jsxs("div",{className:"loc-eyebrow",style:Y.eyebrow,children:[l.jsx(cl,{size:11,strokeWidth:2,style:Y.mrNeg2}),"Find Us"]}),l.jsxs("h2",{style:Y.heading(n,u),children:["Visit Our"," ",l.jsx("em",{style:Y.headingItalic,children:"Press"})]}),l.jsx("p",{style:Y.subtext(f),children:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration."})]}),l.jsxs("div",{style:Y.layoutGrid(n,i),children:[l.jsxs("div",{style:Y.infoCol,children:[l.jsx("div",{className:"loc-card",style:Y.card(p,g,"#0ea5e9"),children:l.jsxs("div",{style:Y.cardRow,children:[l.jsxs("div",{style:Y.markerContainer,children:[l.jsx("div",{className:"loc-ping",style:Y.ping1}),l.jsx("div",{className:"loc-ping",style:Y.ping2}),l.jsx(cl,{size:20,strokeWidth:1.75,color:"#0ea5e9",className:"loc-pin-icon"})]}),l.jsxs("div",{style:Y.flex1,children:[l.jsx("div",{style:Y.label("#0ea5e9"),children:"Address"}),l.jsx("p",{style:Y.addressText(u),children:gd}),l.jsx("button",{className:"loc-copy-btn",onClick:y,style:Y.copyBtn(o,f),children:o?l.jsxs(l.Fragment,{children:[l.jsx(g2,{size:11,strokeWidth:2.5})," Copied!"]}):l.jsxs(l.Fragment,{children:[l.jsx(y2,{size:11,strokeWidth:2})," Copy address"]})})]})]})}),l.jsxs("div",{className:"loc-card",style:Y.card(p,g,"#f59e0b"),children:[l.jsxs("div",{style:Y.cardHeaderRow,children:[l.jsx("div",{style:Y.iconBox("#f59e0b"),children:l.jsx(Lh,{size:16,strokeWidth:1.75,color:"#f59e0b"})}),l.jsx("div",{style:Y.label("#f59e0b",0),children:"Working Hours"})]}),l.jsx("div",{style:Y.hoursList,children:nw.map(({day:v,time:w,open:T})=>l.jsxs("div",{className:"loc-hours-row",style:Y.hoursRow(p),children:[l.jsx("span",{style:Y.dayLabel(f),children:v}),l.jsxs("span",{style:Y.timeLabel(T,u),children:[l.jsx("span",{style:Y.statusDot(T)}),w]})]},v))})]}),l.jsxs("a",{href:hd,target:"_blank",rel:"noopener noreferrer",className:"loc-dir-btn",style:Y.dirBtn,children:[l.jsx(S2,{size:15,strokeWidth:2}),"Get Directions",l.jsx(ad,{size:13,strokeWidth:2,style:Y.opacity70})]})]}),l.jsxs("div",{className:"loc-map-wrap",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:Y.mapWrapper(a,p),children:[l.jsx("iframe",{title:"BK Offset Printing Location",src:tw,width:"100%",height:n?"300":"450",style:Y.mapIframe,loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"}),l.jsxs("a",{href:hd,target:"_blank",rel:"noopener noreferrer",className:"loc-overlay-badge",style:Y.mapOverlay,onMouseEnter:v=>{v.currentTarget.style.background="rgba(14,165,233,0.85)"},onMouseLeave:v=>{v.currentTarget.style.background="rgba(2,6,23,0.80)"},children:[l.jsx(ad,{size:11,strokeWidth:2.5}),"Open in Google Maps"]})]})]})]})]})}const hd="https://maps.app.goo.gl/GQqACqym97FV1PYb9",gd="Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi — 110095",tw="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.623543258682!2d77.30097397549766!3d28.68163887564272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9fa8843451%3A0x4d76d14b74785b08!2sZulfe%20Bengal%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",nw=[{day:"Monday – Sunday",time:"10:00 AM – 6:00 PM",open:!0},{day:"Tuesday",time:"Closed",open:!1}],rw=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes loc-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes loc-pin-bounce { 0%,100% { transform: translateY(0); } 40% { transform: translateY(-6px); } 60% { transform: translateY(-3px); } }
  @keyframes loc-pulse-ring { 0% { transform: scale(0.9); opacity: 0.8; } 100% { transform: scale(1.8); opacity: 0; } }

  .loc-card { position: relative; border-radius: 14px; overflow: hidden; transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.3s cubic-bezier(.22,1,.36,1); }
  .loc-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--loc-grad, linear-gradient(90deg,#0ea5e9,#6366f1)); transform: scaleX(0); transform-origin: left; transition: transform 0.35s cubic-bezier(.22,1,.36,1); }
  .loc-card:hover::before { transform: scaleX(1); }
  .loc-card:hover { transform: translateY(-3px); }
  .loc-hours-row { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; font-family: 'DM Sans', sans-serif; font-size: 13px; border-bottom: 1px solid var(--loc-border); transition: color 0.2s ease; }
  .loc-hours-row:last-child { border-bottom: none; padding-bottom: 0; }
  .loc-hours-row:first-child { padding-top: 0; }
  .loc-map-wrap { position: relative; border-radius: 16px; overflow: hidden; transition: box-shadow 0.35s ease, border-color 0.3s ease, transform 0.35s cubic-bezier(.22,1,.36,1); }
  .loc-map-wrap:hover { transform: translateY(-4px); }
  .loc-dir-btn { display: inline-flex; align-items: center; gap: 8px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; color: #fff; padding: 12px 26px; border-radius: 999px; background: linear-gradient(135deg,#0ea5e9,#6366f1); box-shadow: 0 5px 18px rgba(14,165,233,0.32); transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease; position: relative; overflow: hidden; }
  .loc-dir-btn::before { content:''; position:absolute; inset:0; background:linear-gradient(130deg,transparent,rgba(255,255,255,0.12),transparent); transform:translateX(-110%) skewX(-10deg); transition:transform 0.5s cubic-bezier(.22,1,.36,1); }
  .loc-dir-btn:hover::before { transform:translateX(200%) skewX(-10deg); }
  .loc-dir-btn:hover { transform:translateY(-2px); box-shadow:0 8px 26px rgba(14,165,233,0.42); }
  .loc-copy-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; padding: 5px 10px; border-radius: 6px; transition: background 0.2s ease, color 0.2s ease; }
  .loc-pin-icon { animation: loc-pin-bounce 3s ease-in-out infinite; }
  .loc-ping { position: absolute; border-radius: 50%; background: rgba(14,165,233,0.35); animation: loc-pulse-ring 2s ease-out infinite; }
  .loc-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .loc-eyebrow::before, .loc-eyebrow::after { content:''; display:block; width:22px; height:1px; background:currentColor; opacity:0.5; }

  .loc-overlay-badge {
    position: absolute; bottom: 14px; right: 14px;
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(2,6,23,0.80); backdrop-filter: blur(8px);
    WebkitBackdropFilter: blur(8px); color: #fff;
    padding: 7px 14px; border-radius: 999px;
    fontSize: 12px; fontFamily: 'DM Sans', sans-serif;
    fontWeight: 600; textDecoration: none;
    border: 1px solid rgba(255,255,255,0.12);
    transition: background 0.2s ease, border-color 0.2s ease;
  }
`,Y={section:e=>({padding:e?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"}),header:(e,t)=>({textAlign:"center",marginBottom:e?36:52,opacity:t?1:0,animation:t?"loc-fadeUp 0.5s ease-out both":"none"}),eyebrow:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},mrNeg2:{marginRight:-2},heading:(e,t)=>({fontFamily:"'Instrument Serif', Georgia, serif",fontSize:e?"32px":"clamp(34px,4vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,color:t,margin:"0 0 12px"}),headingItalic:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},subtext:e=>({fontFamily:"'DM Sans', sans-serif",fontSize:"14.5px",color:e,maxWidth:420,margin:"0 auto",lineHeight:1.7}),layoutGrid:(e,t)=>({display:"grid",gridTemplateColumns:e?"1fr":"380px 1fr",gap:e?20:24,alignItems:"start",opacity:t?1:0,animation:t?"loc-fadeUp 0.55s ease-out 0.1s both":"none"}),infoCol:{display:"flex",flexDirection:"column",gap:14},card:(e,t,n)=>({"--loc-grad":`linear-gradient(90deg,${n},#6366f1)`,"--loc-border":e,background:t,border:`1px solid ${e}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}),cardRow:{display:"flex",alignItems:"flex-start",gap:14},markerContainer:{position:"relative",flexShrink:0,marginTop:2},ping1:{width:32,height:32,top:-6,left:-6},ping2:{width:32,height:32,top:-6,left:-6,animationDelay:"0.7s"},flex1:{flex:1},label:(e,t=6)=>({fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:e,marginBottom:t}),addressText:e=>({fontFamily:"'DM Sans', sans-serif",fontSize:"14px",color:e,lineHeight:1.65,margin:"0 0 12px",fontWeight:500}),copyBtn:(e,t)=>({color:e?"#22c55e":t,background:e?"rgba(34,197,94,0.08)":"transparent"}),cardHeaderRow:{display:"flex",alignItems:"center",gap:10,marginBottom:14},iconBox:e=>({width:34,height:34,borderRadius:10,background:`${e}1a`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}),hoursList:{"--loc-border":"rgba(0,0,0,0.08)"},hoursRow:e=>({"--loc-border":e}),dayLabel:e=>({fontFamily:"'DM Sans', sans-serif",color:e,fontWeight:400}),timeLabel:(e,t)=>({fontFamily:"'DM Sans', sans-serif",fontWeight:600,color:e?t:"#ef4444",fontSize:"12.5px",display:"flex",alignItems:"center",gap:5}),statusDot:e=>({width:6,height:6,borderRadius:"50%",background:e?"#22c55e":"#ef4444",display:"inline-block",flexShrink:0}),dirBtn:{justifyContent:"center"},opacity70:{opacity:.7},mapWrapper:(e,t)=>({border:`1px solid ${e?"rgba(14,165,233,0.40)":t}`,boxShadow:e?"0 20px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)"}),mapIframe:{border:"none",display:"block",filter:"saturate(1.1) contrast(1.02)"},mapOverlay:{textDecoration:"none"}};function iw({isDark:e,onClose:t}){const[n,r]=_.useState(!0),[i,o]=_.useState(""),[s,a]=_.useState(""),[c,u]=_.useState(""),[f,p]=_.useState(""),[g,y]=_.useState(""),[v,w]=_.useState(""),[T,h]=_.useState(!1),{loginWithGoogle:d,loginWithEmail:m,registerWithEmail:x,resetPassword:S}=hs(),I=async()=>{y(""),h(!0);const{error:E}=await d();E?(y(E),h(!1)):t()},C=async E=>{if(E.preventDefault(),y(""),h(!0),n){if(!i||!s){y("Enter email and password"),h(!1);return}const{error:F}=await m(i,s);F?(y(F),h(!1)):t()}else{if(!i||!s||!c||!f){y("Fill all fields"),h(!1);return}const{error:F}=await x(i,s,c,f);F?(y(F),h(!1)):(w("Account created! Check your email."),o(""),a(""),u(""),p(""),setTimeout(()=>r(!0),2e3))}};return l.jsx("div",{style:ce.backdrop,children:l.jsxs("div",{style:ce.modalBox(e),children:[l.jsx("button",{onClick:t,style:ce.closeBtn(e),children:l.jsx(gs,{size:20})}),l.jsxs("div",{style:ce.header,children:[l.jsx("div",{style:ce.avatarPill,children:l.jsx(vc,{size:32,color:"#fff"})}),l.jsx("h2",{style:ce.title(e),children:n?"Welcome Back":"Create Account"})]}),v&&l.jsx("div",{style:ce.successBox,children:v}),g&&l.jsx("div",{style:ce.errorBox,children:g}),l.jsxs("button",{onClick:I,disabled:T,style:ce.googleBtn(T),children:[l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[l.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),l.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),l.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),l.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),l.jsxs("div",{style:ce.divider,children:[l.jsx("div",{style:ce.dividerLine}),l.jsx("span",{style:ce.dividerText,children:"or"}),l.jsx("div",{style:ce.dividerLine})]}),l.jsxs("form",{onSubmit:C,children:[!n&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"text",placeholder:"First Name",value:c,onChange:E=>u(E.target.value),disabled:T,style:ce.input(e,T),required:!0}),l.jsx("input",{type:"text",placeholder:"Last Name",value:f,onChange:E=>p(E.target.value),disabled:T,style:ce.input(e,T),required:!0})]}),l.jsx("input",{type:"email",placeholder:"Email",value:i,onChange:E=>o(E.target.value),disabled:T,style:ce.input(e,T),required:!0}),l.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:E=>a(E.target.value),disabled:T,style:ce.input(e,T),required:!0}),n&&l.jsx("button",{type:"button",onClick:()=>{},style:ce.forgotBtn,children:"Forgot Password?"}),l.jsx("button",{type:"submit",disabled:T,style:ce.submitBtn(T),children:T?"Processing...":n?"Sign In":"Create Account"})]}),l.jsxs("p",{style:ce.footerText(e),children:[n?"No account? ":"Have an account? ",l.jsx("button",{onClick:()=>{r(!n),y(""),w("")},style:ce.toggleBtn,children:n?"Register":"Sign In"})]})]})})}const ce={backdrop:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(5px)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},modalBox:e=>({background:e?"#1e293b":"#fff",borderRadius:"16px",padding:"32px",width:"100%",maxWidth:"400px",position:"relative",boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25)"}),closeBtn:e=>({position:"absolute",top:"16px",right:"16px",background:"none",border:"none",cursor:"pointer",color:e?"#94a3b8":"#64748b",transition:"color 0.2s ease"}),header:{textAlign:"center",marginBottom:"24px"},avatarPill:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, #0284c7, #06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",boxShadow:"0 10px 15px -3px rgba(2, 132, 199, 0.3)"},title:e=>({color:e?"#f1f5f9":"#0f172a",margin:0}),successBox:{background:"#d4edda",color:"#155724",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center",fontSize:"14px"},errorBox:{background:"#fee2e2",color:"#ef4444",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center",fontSize:"14px"},googleBtn:e=>({width:"100%",padding:"12px",background:"#fff",border:"1px solid #cbd5e1",borderRadius:"8px",fontSize:"14px",fontWeight:600,color:"#475569",cursor:e?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",opacity:e?.5:1,transition:"background 0.2s ease"}),divider:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},dividerLine:{flex:1,height:"1px",background:"#cbd5e1"},dividerText:{color:"#94a3b8",fontSize:"12px",textTransform:"uppercase",fontWeight:600,letterSpacing:"0.05em"},input:(e,t)=>({width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:e?"#0f172a":"#fff",color:e?"#f1f5f9":"#0f172a",opacity:t?.7:1}),forgotBtn:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontSize:"13px",marginBottom:"16px",display:"block",textAlign:"right",width:"100%"},submitBtn:e=>({width:"100%",padding:"12px",background:e?"#cbd5e1":"linear-gradient(135deg, #0284c7, #06b6d4)",color:e?"#64748b":"#fff",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:600,cursor:e?"not-allowed":"pointer",marginBottom:"16px",transition:"transform 0.1s ease"}),footerText:e=>({textAlign:"center",color:e?"#94a3b8":"#64748b",fontSize:"14px"}),toggleBtn:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontWeight:600,marginLeft:"4px"}};function ow(){const{isDark:e}=Lu(),{user:t}=hs(),[n,r]=_.useState(()=>sessionStorage.getItem("bk_lang")||"en"),[i,o]=_.useState(!1),[s,a]=_.useState(!1),[c,u]=_.useState(window.innerWidth),f=Mp(e),p=Gm[n],g=c<640;_.useEffect(()=>(document.body.style.overflow=s?"hidden":"unset",()=>{document.body.style.overflow="unset"}),[s]),_.useEffect(()=>{const v=()=>o(window.scrollY>qm),w=()=>u(window.innerWidth);return window.addEventListener("scroll",v),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",w)}},[]);const y=()=>{const v=n==="en"?"hi":"en";r(v),sessionStorage.setItem("bk_lang",v)};return l.jsxs(l.Fragment,{children:[l.jsx(j2,{title:"BK Offset Printing - Premium Book & Commercial Printing Services in Delhi",description:"Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995.",keywords:"offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services"}),l.jsx(I2,{isDark:e,toggleTheme:Lu().toggleTheme,lang:n,toggleLang:y,text:p,onAuthClick:()=>a(!0),scrolled:i}),l.jsxs("main",{style:md.main(e,f.text),children:[l.jsxs("div",{style:md.heroCloud,children:[e&&l.jsx(L2,{isDark:e}),l.jsx(z2,{text:p,isDark:e,c:f,isAuth:!!t,isMobile:g,setShowAuth:a}),l.jsx($2,{text:p,isDark:e,c:f,isMobile:g})]}),l.jsx(Y2,{text:p,isDark:e,c:f,isMobile:g}),l.jsx(Q2,{text:p,isDark:e,c:f,isMobile:g}),l.jsx(ew,{text:p,c:f,isMobile:g}),l.jsx(P2,{isDark:e,isMobile:g}),l.jsx(A2,{isDark:e,isAuthenticated:!!t,windowWidth:c})]}),s&&l.jsx(iw,{isDark:e,onClose:()=>a(!1)})]})}function sw(){return l.jsx(Jm,{children:l.jsx(u2,{children:l.jsx(ow,{})})})}const md={main:(e,t)=>({fontFamily:ye.fontBody,minHeight:"100vh",background:e?"#020617":"#FFFFFF",color:t,transition:"background 0.35s, color 0.35s"}),heroCloud:{position:"relative"}};oa.createRoot(document.getElementById("root")).render(l.jsx(ht.StrictMode,{children:l.jsx(Dp,{children:l.jsx(sw,{})})}));
