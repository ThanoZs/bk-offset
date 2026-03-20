var Oh=Object.defineProperty;var Lh=(t,e,n)=>e in t?Oh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pt=(t,e,n)=>(Lh(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function zo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ad={exports:{}},Fo={},ld={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Mh=Symbol.for("react.portal"),Dh=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),Uh=Symbol.for("react.provider"),Bh=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),Wh=Symbol.for("react.suspense"),$h=Symbol.for("react.memo"),Vh=Symbol.for("react.lazy"),uc=Symbol.iterator;function Yh(t){return t===null||typeof t!="object"?null:(t=uc&&t[uc]||t["@@iterator"],typeof t=="function"?t:null)}var cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,dd={};function sr(t,e,n){this.props=t,this.context=e,this.refs=dd,this.updater=n||cd}sr.prototype.isReactComponent={};sr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fd(){}fd.prototype=sr.prototype;function tl(t,e,n){this.props=t,this.context=e,this.refs=dd,this.updater=n||cd}var nl=tl.prototype=new fd;nl.constructor=tl;ud(nl,sr.prototype);nl.isPureReactComponent=!0;var dc=Array.isArray,pd=Object.prototype.hasOwnProperty,rl={current:null},hd={key:!0,ref:!0,__self:!0,__source:!0};function gd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)pd.call(e,r)&&!hd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:t,key:o,ref:s,props:i,_owner:rl.current}}function Gh(t,e){return{$$typeof:ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function il(t){return typeof t=="object"&&t!==null&&t.$$typeof===ai}function Kh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fc=/\/+/g;function fs(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kh(""+t.key):e.toString(36)}function Ui(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ai:case Mh:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+fs(s,0):r,dc(i)?(n="",t!=null&&(n=t.replace(fc,"$&/")+"/"),Ui(i,e,n,"",function(u){return u})):i!=null&&(il(i)&&(i=Gh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(fc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",dc(t))for(var a=0;a<t.length;a++){o=t[a];var c=r+fs(o,a);s+=Ui(o,e,n,c,i)}else if(c=Yh(t),typeof c=="function")for(t=c.call(t),a=0;!(o=t.next()).done;)o=o.value,c=r+fs(o,a++),s+=Ui(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function xi(t,e,n){if(t==null)return t;var r=[],i=0;return Ui(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Xh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _e={current:null},Bi={transition:null},qh={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:rl};function md(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:xi,forEach:function(t,e,n){xi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xi(t,function(){e++}),e},toArray:function(t){return xi(t,function(e){return e})||[]},only:function(t){if(!il(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=sr;B.Fragment=Dh;B.Profiler=Fh;B.PureComponent=tl;B.StrictMode=zh;B.Suspense=Wh;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;B.act=md;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ud({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=rl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)pd.call(e,c)&&!hd.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:t.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(t){return t={$$typeof:Bh,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uh,_context:t},t.Consumer=t};B.createElement=gd;B.createFactory=function(t){var e=gd.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Hh,render:t}};B.isValidElement=il;B.lazy=function(t){return{$$typeof:Vh,_payload:{_status:-1,_result:t},_init:Xh}};B.memo=function(t,e){return{$$typeof:$h,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Bi.transition;Bi.transition={};try{t()}finally{Bi.transition=e}};B.unstable_act=md;B.useCallback=function(t,e){return _e.current.useCallback(t,e)};B.useContext=function(t){return _e.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return _e.current.useDeferredValue(t)};B.useEffect=function(t,e){return _e.current.useEffect(t,e)};B.useId=function(){return _e.current.useId()};B.useImperativeHandle=function(t,e,n){return _e.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return _e.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return _e.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return _e.current.useMemo(t,e)};B.useReducer=function(t,e,n){return _e.current.useReducer(t,e,n)};B.useRef=function(t){return _e.current.useRef(t)};B.useState=function(t){return _e.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return _e.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return _e.current.useTransition()};B.version="18.3.1";ld.exports=B;var _=ld.exports;const st=zo(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh=_,Zh=Symbol.for("react.element"),Jh=Symbol.for("react.fragment"),e0=Object.prototype.hasOwnProperty,t0=Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n0={key:!0,ref:!0,__self:!0,__source:!0};function yd(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)e0.call(e,r)&&!n0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zh,type:t,key:o,ref:s,props:i,_owner:t0.current}}Fo.Fragment=Jh;Fo.jsx=yd;Fo.jsxs=yd;ad.exports=Fo;var l=ad.exports,qs={},vd={exports:{}},Me={},xd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,N){var R=b.length;b.push(N);e:for(;0<R;){var F=R-1>>>1,U=b[F];if(0<i(U,N))b[F]=N,b[R]=U,R=F;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var N=b[0],R=b.pop();if(R!==N){b[0]=R;e:for(var F=0,U=b.length,pe=U>>>1;F<pe;){var $=2*(F+1)-1,re=b[$],le=$+1,ie=b[le];if(0>i(re,R))le<U&&0>i(ie,re)?(b[F]=ie,b[le]=R,F=le):(b[F]=re,b[$]=R,F=$);else if(le<U&&0>i(ie,R))b[F]=ie,b[le]=R,F=le;else break e}}return N}function i(b,N){var R=b.sortIndex-N.sortIndex;return R!==0?R:b.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var c=[],u=[],d=1,h=null,m=3,y=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=b)r(u),N.sortIndex=N.expirationTime,e(c,N);else break;N=n(u)}}function x(b){if(w=!1,g(b),!v)if(n(c)!==null)v=!0,j(S);else{var N=n(u);N!==null&&D(x,N.startTime-b)}}function S(b,N){v=!1,w&&(w=!1,p(E),E=-1),y=!0;var R=m;try{for(g(N),h=n(c);h!==null&&(!(h.expirationTime>N)||b&&!O());){var F=h.callback;if(typeof F=="function"){h.callback=null,m=h.priorityLevel;var U=F(h.expirationTime<=N);N=t.unstable_now(),typeof U=="function"?h.callback=U:h===n(c)&&r(c),g(N)}else r(c);h=n(c)}if(h!==null)var pe=!0;else{var $=n(u);$!==null&&D(x,$.startTime-N),pe=!1}return pe}finally{h=null,m=R,y=!1}}var I=!1,T=null,E=-1,z=5,M=-1;function O(){return!(t.unstable_now()-M<z)}function fe(){if(T!==null){var b=t.unstable_now();M=b;var N=!0;try{N=T(!0,b)}finally{N?te():(I=!1,T=null)}}else I=!1}var te;if(typeof f=="function")te=function(){f(fe)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,P=Te.port2;Te.port1.onmessage=fe,te=function(){P.postMessage(null)}}else te=function(){C(fe,0)};function j(b){T=b,I||(I=!0,te())}function D(b,N){E=C(function(){b(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,j(S))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(b){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var R=m;m=N;try{return b()}finally{m=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,N){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var R=m;m=b;try{return N()}finally{m=R}},t.unstable_scheduleCallback=function(b,N,R){var F=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?F+R:F):R=F,b){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=R+U,b={id:d++,callback:N,priorityLevel:b,startTime:R,expirationTime:U,sortIndex:-1},R>F?(b.sortIndex=R,e(u,b),n(c)===null&&b===n(u)&&(w?(p(E),E=-1):w=!0,D(x,R-F))):(b.sortIndex=U,e(c,b),v||y||(v=!0,j(S))),b},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(b){var N=m;return function(){var R=m;m=N;try{return b.apply(this,arguments)}finally{m=R}}}})(wd);xd.exports=wd;var r0=xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=_,Le=r0;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bd=new Set,Ur={};function Sn(t,e){Qn(t,e),Qn(t+"Capture",e)}function Qn(t,e){for(Ur[t]=e,t=0;t<e.length;t++)bd.add(e[t])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc={},hc={};function s0(t){return Qs.call(hc,t)?!0:Qs.call(pc,t)?!1:o0.test(t)?hc[t]=!0:(pc[t]=!0,!1)}function a0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l0(t,e,n,r){if(e===null||typeof e>"u"||a0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ee(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Ee(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Ee(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Ee(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Ee(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Ee(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Ee(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Ee(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Ee(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Ee(t,5,!1,t.toLowerCase(),null,!1,!1)});var ol=/[\-:]([a-z])/g;function sl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ol,sl);me[e]=new Ee(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ol,sl);me[e]=new Ee(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ol,sl);me[e]=new Ee(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Ee(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Ee(t,1,!1,t.toLowerCase(),null,!0,!0)});function al(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l0(e,n,i,r)&&(n=null),r||i===null?s0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ct=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),In=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),ll=Symbol.for("react.strict_mode"),Zs=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),cl=Symbol.for("react.forward_ref"),Js=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),_d=Symbol.for("react.offscreen"),gc=Symbol.iterator;function fr(t){return t===null||typeof t!="object"?null:(t=gc&&t[gc]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,ps;function Sr(t){if(ps===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ps=e&&e[1]||""}return`
`+ps+t}var hs=!1;function gs(t,e){if(!t||hs)return"";hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=a);break}}}finally{hs=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sr(t):""}function c0(t){switch(t.tag){case 5:return Sr(t.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return t=gs(t.type,!1),t;case 11:return t=gs(t.type.render,!1),t;case 1:return t=gs(t.type,!0),t;default:return""}}function ta(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cn:return"Fragment";case In:return"Portal";case Zs:return"Profiler";case ll:return"StrictMode";case Js:return"Suspense";case ea:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sd:return(t.displayName||"Context")+".Consumer";case kd:return(t._context.displayName||"Context")+".Provider";case cl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ul:return e=t.displayName||null,e!==null?e:ta(t.type)||"Memo";case At:e=t._payload,t=t._init;try{return ta(t(e))}catch{}}return null}function u0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(e);case 8:return e===ll?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ed(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d0(t){var e=Ed(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bi(t){t._valueTracker||(t._valueTracker=d0(t))}function Td(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ed(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function io(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function na(t,e){var n=e.checked;return J({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Id(t,e){e=e.checked,e!=null&&al(t,"checked",e,!1)}function ra(t,e){Id(t,e);var n=Qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ia(t,e.type,n):e.hasOwnProperty("defaultValue")&&ia(t,e.type,Qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ia(t,e,n){(e!=="number"||io(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _r=Array.isArray;function Fn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function oa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return J({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(_r(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qt(n)}}function Cd(t,e){var n=Qt(e.value),r=Qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ki,Nd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ki.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Br(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(t){f0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pr[e]=Pr[t]})});function Rd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pr.hasOwnProperty(t)&&Pr[t]?(""+e).trim():e+"px"}function Ad(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var p0=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(t,e){if(e){if(p0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function la(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function dl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ua=null,Un=null,Bn=null;function wc(t){if(t=ui(t)){if(typeof ua!="function")throw Error(k(280));var e=t.stateNode;e&&(e=$o(e),ua(t.stateNode,t.type,e))}}function jd(t){Un?Bn?Bn.push(t):Bn=[t]:Un=t}function Od(){if(Un){var t=Un,e=Bn;if(Bn=Un=null,wc(t),e)for(t=0;t<e.length;t++)wc(e[t])}}function Ld(t,e){return t(e)}function Md(){}var ms=!1;function Dd(t,e,n){if(ms)return t(e,n);ms=!0;try{return Ld(t,e,n)}finally{ms=!1,(Un!==null||Bn!==null)&&(Md(),Od())}}function Hr(t,e){var n=t.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var da=!1;if(St)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){da=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{da=!1}function h0(t,e,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Nr=!1,oo=null,so=!1,fa=null,g0={onError:function(t){Nr=!0,oo=t}};function m0(t,e,n,r,i,o,s,a,c){Nr=!1,oo=null,h0.apply(g0,arguments)}function y0(t,e,n,r,i,o,s,a,c){if(m0.apply(this,arguments),Nr){if(Nr){var u=oo;Nr=!1,oo=null}else throw Error(k(198));so||(so=!0,fa=u)}}function _n(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bc(t){if(_n(t)!==t)throw Error(k(188))}function v0(t){var e=t.alternate;if(!e){if(e=_n(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return bc(i),t;if(o===r)return bc(i),e;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Fd(t){return t=v0(t),t!==null?Ud(t):null}function Ud(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ud(t);if(e!==null)return e;t=t.sibling}return null}var Bd=Le.unstable_scheduleCallback,kc=Le.unstable_cancelCallback,x0=Le.unstable_shouldYield,w0=Le.unstable_requestPaint,ne=Le.unstable_now,b0=Le.unstable_getCurrentPriorityLevel,fl=Le.unstable_ImmediatePriority,Hd=Le.unstable_UserBlockingPriority,ao=Le.unstable_NormalPriority,k0=Le.unstable_LowPriority,Wd=Le.unstable_IdlePriority,Uo=null,at=null;function S0(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Uo,t,void 0,(t.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:T0,_0=Math.log,E0=Math.LN2;function T0(t){return t>>>=0,t===0?32:31-(_0(t)/E0|0)|0}var Si=64,_i=4194304;function Er(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Er(a):(o&=s,o!==0&&(r=Er(o)))}else s=n&~i,s!==0?r=Er(s):o!==0&&(r=Er(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Je(e),i=1<<n,r|=t[n],e&=~i;return r}function I0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Je(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=I0(a,e)):c<=e&&(t.expiredLanes|=a),o&=~a}}function pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $d(){var t=Si;return Si<<=1,!(Si&4194240)&&(Si=64),t}function ys(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function li(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Je(e),t[e]=n}function P0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function pl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Je(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Vd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yd,hl,Gd,Kd,Xd,ha=!1,Ei=[],Bt=null,Ht=null,Wt=null,Wr=new Map,$r=new Map,Ot=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(t,e){switch(t){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Wr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(e.pointerId)}}function hr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ui(e),e!==null&&hl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function R0(t,e,n,r,i){switch(e){case"focusin":return Bt=hr(Bt,t,e,n,r,i),!0;case"dragenter":return Ht=hr(Ht,t,e,n,r,i),!0;case"mouseover":return Wt=hr(Wt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wr.set(o,hr(Wr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$r.set(o,hr($r.get(o)||null,t,e,n,r,i)),!0}return!1}function qd(t){var e=ln(t.target);if(e!==null){var n=_n(e);if(n!==null){if(e=n.tag,e===13){if(e=zd(n),e!==null){t.blockedOn=e,Xd(t.priority,function(){Gd(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ga(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return e=ui(n),e!==null&&hl(e),t.blockedOn=n,!1;e.shift()}return!0}function _c(t,e,n){Hi(t)&&n.delete(e)}function A0(){ha=!1,Bt!==null&&Hi(Bt)&&(Bt=null),Ht!==null&&Hi(Ht)&&(Ht=null),Wt!==null&&Hi(Wt)&&(Wt=null),Wr.forEach(_c),$r.forEach(_c)}function gr(t,e){t.blockedOn===e&&(t.blockedOn=null,ha||(ha=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,A0)))}function Vr(t){function e(i){return gr(i,t)}if(0<Ei.length){gr(Ei[0],t);for(var n=1;n<Ei.length;n++){var r=Ei[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bt!==null&&gr(Bt,t),Ht!==null&&gr(Ht,t),Wt!==null&&gr(Wt,t),Wr.forEach(e),$r.forEach(e),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)qd(n),n.blockedOn===null&&Ot.shift()}var Hn=Ct.ReactCurrentBatchConfig,co=!0;function j0(t,e,n,r){var i=V,o=Hn.transition;Hn.transition=null;try{V=1,gl(t,e,n,r)}finally{V=i,Hn.transition=o}}function O0(t,e,n,r){var i=V,o=Hn.transition;Hn.transition=null;try{V=4,gl(t,e,n,r)}finally{V=i,Hn.transition=o}}function gl(t,e,n,r){if(co){var i=ga(t,e,n,r);if(i===null)Is(t,e,r,uo,n),Sc(t,r);else if(R0(i,t,e,n,r))r.stopPropagation();else if(Sc(t,r),e&4&&-1<N0.indexOf(t)){for(;i!==null;){var o=ui(i);if(o!==null&&Yd(o),o=ga(t,e,n,r),o===null&&Is(t,e,r,uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Is(t,e,r,null,n)}}var uo=null;function ga(t,e,n,r){if(uo=null,t=dl(r),t=ln(t),t!==null)if(e=_n(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zd(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uo=t,null}function Qd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case fl:return 1;case Hd:return 4;case ao:case k0:return 16;case Wd:return 536870912;default:return 16}default:return 16}}var Ft=null,ml=null,Wi=null;function Zd(){if(Wi)return Wi;var t,e=ml,n=e.length,r,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Wi=i.slice(t,1<r?1-r:void 0)}function $i(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ti(){return!0}function Ec(){return!1}function De(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ti:Ec,this.isPropagationStopped=Ec,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),e}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=De(ar),ci=J({},ar,{view:0,detail:0}),L0=De(ci),vs,xs,mr,Bo=J({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mr&&(mr&&t.type==="mousemove"?(vs=t.screenX-mr.screenX,xs=t.screenY-mr.screenY):xs=vs=0,mr=t),vs)},movementY:function(t){return"movementY"in t?t.movementY:xs}}),Tc=De(Bo),M0=J({},Bo,{dataTransfer:0}),D0=De(M0),z0=J({},ci,{relatedTarget:0}),ws=De(z0),F0=J({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=De(F0),B0=J({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=De(B0),W0=J({},ar,{data:0}),Ic=De(W0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y0[t])?!!e[t]:!1}function vl(){return G0}var K0=J({},ci,{key:function(t){if(t.key){var e=$0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$i(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(t){return t.type==="keypress"?$i(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$i(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X0=De(K0),q0=J({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cc=De(q0),Q0=J({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),Z0=De(Q0),J0=J({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),eg=De(J0),tg=J({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ng=De(tg),rg=[9,13,27,32],xl=St&&"CompositionEvent"in window,Rr=null;St&&"documentMode"in document&&(Rr=document.documentMode);var ig=St&&"TextEvent"in window&&!Rr,Jd=St&&(!xl||Rr&&8<Rr&&11>=Rr),Pc=String.fromCharCode(32),Nc=!1;function ef(t,e){switch(t){case"keyup":return rg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pn=!1;function og(t,e){switch(t){case"compositionend":return tf(e);case"keypress":return e.which!==32?null:(Nc=!0,Pc);case"textInput":return t=e.data,t===Pc&&Nc?null:t;default:return null}}function sg(t,e){if(Pn)return t==="compositionend"||!xl&&ef(t,e)?(t=Zd(),Wi=ml=Ft=null,Pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jd&&e.locale!=="ko"?null:e.data;default:return null}}var ag={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ag[t.type]:e==="textarea"}function nf(t,e,n,r){jd(r),e=fo(e,"onChange"),0<e.length&&(n=new yl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ar=null,Yr=null;function lg(t){hf(t,0)}function Ho(t){var e=An(t);if(Td(e))return t}function cg(t,e){if(t==="change")return e}var rf=!1;if(St){var bs;if(St){var ks="oninput"in document;if(!ks){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),ks=typeof Ac.oninput=="function"}bs=ks}else bs=!1;rf=bs&&(!document.documentMode||9<document.documentMode)}function jc(){Ar&&(Ar.detachEvent("onpropertychange",of),Yr=Ar=null)}function of(t){if(t.propertyName==="value"&&Ho(Yr)){var e=[];nf(e,Yr,t,dl(t)),Dd(lg,e)}}function ug(t,e,n){t==="focusin"?(jc(),Ar=e,Yr=n,Ar.attachEvent("onpropertychange",of)):t==="focusout"&&jc()}function dg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(Yr)}function fg(t,e){if(t==="click")return Ho(e)}function pg(t,e){if(t==="input"||t==="change")return Ho(e)}function hg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tt=typeof Object.is=="function"?Object.is:hg;function Gr(t,e){if(tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qs.call(e,i)||!tt(t[i],e[i]))return!1}return!0}function Oc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lc(t,e){var n=Oc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function sf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function af(){for(var t=window,e=io();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=io(t.document)}return e}function wl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gg(t){var e=af(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sf(n.ownerDocument.documentElement,n)){if(r!==null&&wl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Lc(n,o);var s=Lc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mg=St&&"documentMode"in document&&11>=document.documentMode,Nn=null,ma=null,jr=null,ya=!1;function Mc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||Nn==null||Nn!==io(r)||(r=Nn,"selectionStart"in r&&wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Gr(jr,r)||(jr=r,r=fo(ma,"onSelect"),0<r.length&&(e=new yl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Nn)))}function Ii(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Rn={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Ss={},lf={};St&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Wo(t){if(Ss[t])return Ss[t];if(!Rn[t])return t;var e=Rn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lf)return Ss[t]=e[n];return t}var cf=Wo("animationend"),uf=Wo("animationiteration"),df=Wo("animationstart"),ff=Wo("transitionend"),pf=new Map,Dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(t,e){pf.set(t,e),Sn(e,[t])}for(var _s=0;_s<Dc.length;_s++){var Es=Dc[_s],yg=Es.toLowerCase(),vg=Es[0].toUpperCase()+Es.slice(1);Jt(yg,"on"+vg)}Jt(cf,"onAnimationEnd");Jt(uf,"onAnimationIteration");Jt(df,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(ff,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);Sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function zc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y0(r,e,void 0,t),t.currentTarget=null}function hf(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;zc(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;zc(i,a,u),o=c}}}if(so)throw t=fa,so=!1,fa=null,t}function K(t,e){var n=e[ka];n===void 0&&(n=e[ka]=new Set);var r=t+"__bubble";n.has(r)||(gf(e,t,2,!1),n.add(r))}function Ts(t,e,n){var r=0;e&&(r|=4),gf(n,t,r,e)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Kr(t){if(!t[Ci]){t[Ci]=!0,bd.forEach(function(n){n!=="selectionchange"&&(xg.has(n)||Ts(n,!1,t),Ts(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ci]||(e[Ci]=!0,Ts("selectionchange",!1,e))}}function gf(t,e,n,r){switch(Qd(e)){case 1:var i=j0;break;case 4:i=O0;break;default:i=gl}n=i.bind(null,e,n,t),i=void 0,!da||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Is(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ln(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Dd(function(){var u=o,d=dl(n),h=[];e:{var m=pf.get(t);if(m!==void 0){var y=yl,v=t;switch(t){case"keypress":if($i(n)===0)break e;case"keydown":case"keyup":y=X0;break;case"focusin":v="focus",y=ws;break;case"focusout":v="blur",y=ws;break;case"beforeblur":case"afterblur":y=ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=D0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Z0;break;case cf:case uf:case df:y=U0;break;case ff:y=eg;break;case"scroll":y=L0;break;case"wheel":y=ng;break;case"copy":case"cut":case"paste":y=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Cc}var w=(e&4)!==0,C=!w&&t==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,g;f!==null;){g=f;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,p!==null&&(x=Hr(f,p),x!=null&&w.push(Xr(f,x,g)))),C)break;f=f.return}0<w.length&&(m=new y(m,v,null,n,d),h.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==ca&&(v=n.relatedTarget||n.fromElement)&&(ln(v)||v[_t]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?ln(v):null,v!==null&&(C=_n(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Tc,x="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Cc,x="onPointerLeave",p="onPointerEnter",f="pointer"),C=y==null?m:An(y),g=v==null?m:An(v),m=new w(x,f+"leave",y,n,d),m.target=C,m.relatedTarget=g,x=null,ln(d)===u&&(w=new w(p,f+"enter",v,n,d),w.target=g,w.relatedTarget=C,x=w),C=x,y&&v)t:{for(w=y,p=v,f=0,g=w;g;g=En(g))f++;for(g=0,x=p;x;x=En(x))g++;for(;0<f-g;)w=En(w),f--;for(;0<g-f;)p=En(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=En(w),p=En(p)}w=null}else w=null;y!==null&&Fc(h,m,y,w,!1),v!==null&&C!==null&&Fc(h,C,v,w,!0)}}e:{if(m=u?An(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=cg;else if(Rc(m))if(rf)S=pg;else{S=dg;var I=ug}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=fg);if(S&&(S=S(t,u))){nf(h,S,n,d);break e}I&&I(t,m,u),t==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&ia(m,"number",m.value)}switch(I=u?An(u):window,t){case"focusin":(Rc(I)||I.contentEditable==="true")&&(Nn=I,ma=u,jr=null);break;case"focusout":jr=ma=Nn=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Mc(h,n,d);break;case"selectionchange":if(mg)break;case"keydown":case"keyup":Mc(h,n,d)}var T;if(xl)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Pn?ef(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Jd&&n.locale!=="ko"&&(Pn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Pn&&(T=Zd()):(Ft=d,ml="value"in Ft?Ft.value:Ft.textContent,Pn=!0)),I=fo(u,E),0<I.length&&(E=new Ic(E,t,null,n,d),h.push({event:E,listeners:I}),T?E.data=T:(T=tf(n),T!==null&&(E.data=T)))),(T=ig?og(t,n):sg(t,n))&&(u=fo(u,"onBeforeInput"),0<u.length&&(d=new Ic("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=T))}hf(h,e)})}function Xr(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hr(t,n),o!=null&&r.unshift(Xr(t,o,i)),o=Hr(t,e),o!=null&&r.push(Xr(t,o,i))),t=t.return}return r}function En(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Hr(n,o),c!=null&&s.unshift(Xr(n,c,a))):i||(c=Hr(n,o),c!=null&&s.push(Xr(n,c,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var wg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Uc(t){return(typeof t=="string"?t:""+t).replace(wg,`
`).replace(bg,"")}function Pi(t,e,n){if(e=Uc(e),Uc(t)!==e&&n)throw Error(k(425))}function po(){}var va=null,xa=null;function wa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,Bc=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bc<"u"?function(t){return Bc.resolve(null).then(t).catch(_g)}:ba;function _g(t){setTimeout(function(){throw t})}function Cs(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(e)}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lr=Math.random().toString(36).slice(2),ot="__reactFiber$"+lr,qr="__reactProps$"+lr,_t="__reactContainer$"+lr,ka="__reactEvents$"+lr,Eg="__reactListeners$"+lr,Tg="__reactHandles$"+lr;function ln(t){var e=t[ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_t]||n[ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hc(t);t!==null;){if(n=t[ot])return n;t=Hc(t)}return e}t=n,n=t.parentNode}return null}function ui(t){return t=t[ot]||t[_t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function An(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function $o(t){return t[qr]||null}var Sa=[],jn=-1;function en(t){return{current:t}}function X(t){0>jn||(t.current=Sa[jn],Sa[jn]=null,jn--)}function G(t,e){jn++,Sa[jn]=t.current,t.current=e}var Zt={},we=en(Zt),Pe=en(!1),gn=Zt;function Zn(t,e){var n=t.type.contextTypes;if(!n)return Zt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(t){return t=t.childContextTypes,t!=null}function ho(){X(Pe),X(we)}function Wc(t,e,n){if(we.current!==Zt)throw Error(k(168));G(we,e),G(Pe,n)}function mf(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,u0(t)||"Unknown",i));return J({},n,r)}function go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zt,gn=we.current,G(we,t),G(Pe,Pe.current),!0}function $c(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=mf(t,e,gn),r.__reactInternalMemoizedMergedChildContext=t,X(Pe),X(we),G(we,t)):X(Pe),G(Pe,n)}var gt=null,Vo=!1,Ps=!1;function yf(t){gt===null?gt=[t]:gt.push(t)}function Ig(t){Vo=!0,yf(t)}function tn(){if(!Ps&&gt!==null){Ps=!0;var t=0,e=V;try{var n=gt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gt=null,Vo=!1}catch(i){throw gt!==null&&(gt=gt.slice(t+1)),Bd(fl,tn),i}finally{V=e,Ps=!1}}return null}var On=[],Ln=0,mo=null,yo=0,Fe=[],Ue=0,mn=null,yt=1,vt="";function rn(t,e){On[Ln++]=yo,On[Ln++]=mo,mo=t,yo=e}function vf(t,e,n){Fe[Ue++]=yt,Fe[Ue++]=vt,Fe[Ue++]=mn,mn=t;var r=yt;t=vt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yt=1<<32-Je(e)+i|n<<i|r,vt=o+t}else yt=1<<o|n<<i|r,vt=t}function bl(t){t.return!==null&&(rn(t,1),vf(t,1,0))}function kl(t){for(;t===mo;)mo=On[--Ln],On[Ln]=null,yo=On[--Ln],On[Ln]=null;for(;t===mn;)mn=Fe[--Ue],Fe[Ue]=null,vt=Fe[--Ue],Fe[Ue]=null,yt=Fe[--Ue],Fe[Ue]=null}var Oe=null,je=null,q=!1,Qe=null;function xf(t,e){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Oe=t,je=$t(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Oe=t,je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mn!==null?{id:yt,overflow:vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Oe=t,je=null,!0):!1;default:return!1}}function _a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ea(t){if(q){var e=je;if(e){var n=e;if(!Vc(t,e)){if(_a(t))throw Error(k(418));e=$t(n.nextSibling);var r=Oe;e&&Vc(t,e)?xf(r,n):(t.flags=t.flags&-4097|2,q=!1,Oe=t)}}else{if(_a(t))throw Error(k(418));t.flags=t.flags&-4097|2,q=!1,Oe=t}}}function Yc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Oe=t}function Ni(t){if(t!==Oe)return!1;if(!q)return Yc(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wa(t.type,t.memoizedProps)),e&&(e=je)){if(_a(t))throw wf(),Error(k(418));for(;e;)xf(t,e),e=$t(e.nextSibling)}if(Yc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){je=$t(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}je=null}}else je=Oe?$t(t.stateNode.nextSibling):null;return!0}function wf(){for(var t=je;t;)t=$t(t.nextSibling)}function Jn(){je=Oe=null,q=!1}function Sl(t){Qe===null?Qe=[t]:Qe.push(t)}var Cg=Ct.ReactCurrentBatchConfig;function yr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ri(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gc(t){var e=t._init;return e(t._payload)}function bf(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Kt(p,f),p.index=0,p.sibling=null,p}function o(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,x){return f===null||f.tag!==6?(f=Ms(g,p.mode,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g,x){var S=g.type;return S===Cn?d(p,f,g.props.children,x,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===At&&Gc(S)===f.type)?(x=i(f,g.props),x.ref=yr(p,f,g),x.return=p,x):(x=Qi(g.type,g.key,g.props,null,p.mode,x),x.ref=yr(p,f,g),x.return=p,x)}function u(p,f,g,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ds(g,p.mode,x),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,x,S){return f===null||f.tag!==7?(f=pn(g,p.mode,x,S),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ms(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case wi:return g=Qi(f.type,f.key,f.props,null,p.mode,g),g.ref=yr(p,null,f),g.return=p,g;case In:return f=Ds(f,p.mode,g),f.return=p,f;case At:var x=f._init;return h(p,x(f._payload),g)}if(_r(f)||fr(f))return f=pn(f,p.mode,g,null),f.return=p,f;Ri(p,f)}return null}function m(p,f,g,x){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(p,f,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:return g.key===S?c(p,f,g,x):null;case In:return g.key===S?u(p,f,g,x):null;case At:return S=g._init,m(p,f,S(g._payload),x)}if(_r(g)||fr(g))return S!==null?null:d(p,f,g,x,null);Ri(p,g)}return null}function y(p,f,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(g)||null,a(f,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wi:return p=p.get(x.key===null?g:x.key)||null,c(f,p,x,S);case In:return p=p.get(x.key===null?g:x.key)||null,u(f,p,x,S);case At:var I=x._init;return y(p,f,g,I(x._payload),S)}if(_r(x)||fr(x))return p=p.get(g)||null,d(f,p,x,S,null);Ri(f,x)}return null}function v(p,f,g,x){for(var S=null,I=null,T=f,E=f=0,z=null;T!==null&&E<g.length;E++){T.index>E?(z=T,T=null):z=T.sibling;var M=m(p,T,g[E],x);if(M===null){T===null&&(T=z);break}t&&T&&M.alternate===null&&e(p,T),f=o(M,f,E),I===null?S=M:I.sibling=M,I=M,T=z}if(E===g.length)return n(p,T),q&&rn(p,E),S;if(T===null){for(;E<g.length;E++)T=h(p,g[E],x),T!==null&&(f=o(T,f,E),I===null?S=T:I.sibling=T,I=T);return q&&rn(p,E),S}for(T=r(p,T);E<g.length;E++)z=y(T,p,E,g[E],x),z!==null&&(t&&z.alternate!==null&&T.delete(z.key===null?E:z.key),f=o(z,f,E),I===null?S=z:I.sibling=z,I=z);return t&&T.forEach(function(O){return e(p,O)}),q&&rn(p,E),S}function w(p,f,g,x){var S=fr(g);if(typeof S!="function")throw Error(k(150));if(g=S.call(g),g==null)throw Error(k(151));for(var I=S=null,T=f,E=f=0,z=null,M=g.next();T!==null&&!M.done;E++,M=g.next()){T.index>E?(z=T,T=null):z=T.sibling;var O=m(p,T,M.value,x);if(O===null){T===null&&(T=z);break}t&&T&&O.alternate===null&&e(p,T),f=o(O,f,E),I===null?S=O:I.sibling=O,I=O,T=z}if(M.done)return n(p,T),q&&rn(p,E),S;if(T===null){for(;!M.done;E++,M=g.next())M=h(p,M.value,x),M!==null&&(f=o(M,f,E),I===null?S=M:I.sibling=M,I=M);return q&&rn(p,E),S}for(T=r(p,T);!M.done;E++,M=g.next())M=y(T,p,E,M.value,x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?E:M.key),f=o(M,f,E),I===null?S=M:I.sibling=M,I=M);return t&&T.forEach(function(fe){return e(p,fe)}),q&&rn(p,E),S}function C(p,f,g,x){if(typeof g=="object"&&g!==null&&g.type===Cn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:e:{for(var S=g.key,I=f;I!==null;){if(I.key===S){if(S=g.type,S===Cn){if(I.tag===7){n(p,I.sibling),f=i(I,g.props.children),f.return=p,p=f;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===At&&Gc(S)===I.type){n(p,I.sibling),f=i(I,g.props),f.ref=yr(p,I,g),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}g.type===Cn?(f=pn(g.props.children,p.mode,x,g.key),f.return=p,p=f):(x=Qi(g.type,g.key,g.props,null,p.mode,x),x.ref=yr(p,f,g),x.return=p,p=x)}return s(p);case In:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ds(g,p.mode,x),f.return=p,p=f}return s(p);case At:return I=g._init,C(p,f,I(g._payload),x)}if(_r(g))return v(p,f,g,x);if(fr(g))return w(p,f,g,x);Ri(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ms(g,p.mode,x),f.return=p,p=f),s(p)):n(p,f)}return C}var er=bf(!0),kf=bf(!1),vo=en(null),xo=null,Mn=null,_l=null;function El(){_l=Mn=xo=null}function Tl(t){var e=vo.current;X(vo),t._currentValue=e}function Ta(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wn(t,e){xo=t,_l=Mn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function We(t){var e=t._currentValue;if(_l!==t)if(t={context:t,memoizedValue:e,next:null},Mn===null){if(xo===null)throw Error(k(308));Mn=t,xo.dependencies={lanes:0,firstContext:t}}else Mn=Mn.next=t;return e}var cn=null;function Il(t){cn===null?cn=[t]:cn.push(t)}function Sf(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Il(e)):(n.next=i.next,i.next=n),e.interleaved=n,Et(t,r)}function Et(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jt=!1;function Cl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Et(t,n)}return i=r.interleaved,i===null?(e.next=e,Il(r)):(e.next=i.next,i.next=e),r.interleaved=e,Et(t,n)}function Vi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pl(t,n)}}function Kc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wo(t,e,n,r){var i=t.updateQueue;jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,a=o;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(m=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(y,h,m):v,m==null)break e;h=J({},h,m);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,c=h):d=d.next=y,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);vn|=s,t.lanes=s,t.memoizedState=h}}function Xc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var di={},lt=en(di),Qr=en(di),Zr=en(di);function un(t){if(t===di)throw Error(k(174));return t}function Pl(t,e){switch(G(Zr,e),G(Qr,t),G(lt,di),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sa(e,t)}X(lt),G(lt,e)}function tr(){X(lt),X(Qr),X(Zr)}function Ef(t){un(Zr.current);var e=un(lt.current),n=sa(e,t.type);e!==n&&(G(Qr,t),G(lt,n))}function Nl(t){Qr.current===t&&(X(lt),X(Qr))}var Q=en(0);function bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ns=[];function Rl(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var Yi=Ct.ReactCurrentDispatcher,Rs=Ct.ReactCurrentBatchConfig,yn=0,Z=null,se=null,ue=null,ko=!1,Or=!1,Jr=0,Pg=0;function ye(){throw Error(k(321))}function Al(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tt(t[n],e[n]))return!1;return!0}function jl(t,e,n,r,i,o){if(yn=o,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yi.current=t===null||t.memoizedState===null?jg:Og,t=n(r,i),Or){o=0;do{if(Or=!1,Jr=0,25<=o)throw Error(k(301));o+=1,ue=se=null,e.updateQueue=null,Yi.current=Lg,t=n(r,i)}while(Or)}if(Yi.current=So,e=se!==null&&se.next!==null,yn=0,ue=se=Z=null,ko=!1,e)throw Error(k(300));return t}function Ol(){var t=Jr!==0;return Jr=0,t}function it(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=t:ue=ue.next=t,ue}function $e(){if(se===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=ue===null?Z.memoizedState:ue.next;if(e!==null)ue=e,se=t;else{if(t===null)throw Error(k(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ue===null?Z.memoizedState=ue=t:ue=ue.next=t}return ue}function ei(t,e){return typeof e=="function"?e(t):e}function As(t){var e=$e(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var d=u.lane;if((yn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,s=r):c=c.next=h,Z.lanes|=d,vn|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,tt(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Z.lanes|=o,vn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function js(t){var e=$e(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);tt(o,e.memoizedState)||(Ce=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Tf(){}function If(t,e){var n=Z,r=$e(),i=e(),o=!tt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Ll(Nf.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,ti(9,Pf.bind(null,n,r,i,e),void 0,null),de===null)throw Error(k(349));yn&30||Cf(n,e,i)}return i}function Cf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pf(t,e,n,r){e.value=n,e.getSnapshot=r,Rf(e)&&Af(t)}function Nf(t,e,n){return n(function(){Rf(e)&&Af(t)})}function Rf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!tt(t,n)}catch{return!0}}function Af(t){var e=Et(t,1);e!==null&&et(e,t,1,-1)}function qc(t){var e=it();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:t},e.queue=t,t=t.dispatch=Ag.bind(null,Z,t),[e.memoizedState,t]}function ti(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jf(){return $e().memoizedState}function Gi(t,e,n,r){var i=it();Z.flags|=t,i.memoizedState=ti(1|e,n,void 0,r===void 0?null:r)}function Yo(t,e,n,r){var i=$e();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&Al(r,s.deps)){i.memoizedState=ti(e,n,o,r);return}}Z.flags|=t,i.memoizedState=ti(1|e,n,o,r)}function Qc(t,e){return Gi(8390656,8,t,e)}function Ll(t,e){return Yo(2048,8,t,e)}function Of(t,e){return Yo(4,2,t,e)}function Lf(t,e){return Yo(4,4,t,e)}function Mf(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Df(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4,4,Mf.bind(null,e,t),n)}function Ml(){}function zf(t,e){var n=$e();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Al(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ff(t,e){var n=$e();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Al(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uf(t,e,n){return yn&21?(tt(n,e)||(n=$d(),Z.lanes|=n,vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function Ng(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Rs.transition;Rs.transition={};try{t(!1),e()}finally{V=n,Rs.transition=r}}function Bf(){return $e().memoizedState}function Rg(t,e,n){var r=Gt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hf(t))Wf(e,n);else if(n=Sf(t,e,n,r),n!==null){var i=Se();et(n,t,r,i),$f(n,e,r)}}function Ag(t,e,n){var r=Gt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hf(t))Wf(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,tt(a,s)){var c=e.interleaved;c===null?(i.next=i,Il(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Sf(t,e,i,r),n!==null&&(i=Se(),et(n,t,r,i),$f(n,e,r))}}function Hf(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function Wf(t,e){Or=ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $f(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pl(t,n)}}var So={readContext:We,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},jg={readContext:We,useCallback:function(t,e){return it().memoizedState=[t,e===void 0?null:e],t},useContext:We,useEffect:Qc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gi(4194308,4,Mf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gi(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gi(4,2,t,e)},useMemo:function(t,e){var n=it();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=it();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rg.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=it();return t={current:t},e.memoizedState=t},useState:qc,useDebugValue:Ml,useDeferredValue:function(t){return it().memoizedState=t},useTransition:function(){var t=qc(!1),e=t[0];return t=Ng.bind(null,t[1]),it().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=it();if(q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),de===null)throw Error(k(349));yn&30||Cf(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Qc(Nf.bind(null,r,o,t),[t]),r.flags|=2048,ti(9,Pf.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=it(),e=de.identifierPrefix;if(q){var n=vt,r=yt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pg++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Og={readContext:We,useCallback:zf,useContext:We,useEffect:Ll,useImperativeHandle:Df,useInsertionEffect:Of,useLayoutEffect:Lf,useMemo:Ff,useReducer:As,useRef:jf,useState:function(){return As(ei)},useDebugValue:Ml,useDeferredValue:function(t){var e=$e();return Uf(e,se.memoizedState,t)},useTransition:function(){var t=As(ei)[0],e=$e().memoizedState;return[t,e]},useMutableSource:Tf,useSyncExternalStore:If,useId:Bf,unstable_isNewReconciler:!1},Lg={readContext:We,useCallback:zf,useContext:We,useEffect:Ll,useImperativeHandle:Df,useInsertionEffect:Of,useLayoutEffect:Lf,useMemo:Ff,useReducer:js,useRef:jf,useState:function(){return js(ei)},useDebugValue:Ml,useDeferredValue:function(t){var e=$e();return se===null?e.memoizedState=t:Uf(e,se.memoizedState,t)},useTransition:function(){var t=js(ei)[0],e=$e().memoizedState;return[t,e]},useMutableSource:Tf,useSyncExternalStore:If,useId:Bf,unstable_isNewReconciler:!1};function Xe(t,e){if(t&&t.defaultProps){e=J({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ia(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:J({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Go={isMounted:function(t){return(t=t._reactInternals)?_n(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=Gt(t),o=bt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Vt(t,o,i),e!==null&&(et(e,t,i,r),Vi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=Gt(t),o=bt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Vt(t,o,i),e!==null&&(et(e,t,i,r),Vi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=Gt(t),i=bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Vt(t,i,r),e!==null&&(et(e,t,r,n),Vi(e,t,r))}};function Zc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,o):!0}function Vf(t,e,n){var r=!1,i=Zt,o=e.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=Ne(e)?gn:we.current,r=e.contextTypes,o=(r=r!=null)?Zn(t,i):Zt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Go,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Jc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Go.enqueueReplaceState(e,e.state,null)}function Ca(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cl(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=Ne(e)?gn:we.current,i.context=Zn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ia(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Go.enqueueReplaceState(i,i.state,null),wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function nr(t,e){try{var n="",r=e;do n+=c0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Os(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mg=typeof WeakMap=="function"?WeakMap:Map;function Yf(t,e,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eo||(Eo=!0,Fa=r),Pa(t,e)},n}function Gf(t,e,n){n=bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pa(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pa(t,e),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function eu(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mg;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qg.bind(null,t,e,n),e.then(t,t))}function tu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function nu(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bt(-1,1),e.tag=2,Vt(n,e,1))),n.lanes|=1),t)}var Dg=Ct.ReactCurrentOwner,Ce=!1;function ke(t,e,n,r){e.child=t===null?kf(e,null,n,r):er(e,t.child,n,r)}function ru(t,e,n,r,i){n=n.render;var o=e.ref;return Wn(e,i),r=jl(t,e,n,r,o,i),n=Ol(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(q&&n&&bl(e),e.flags|=1,ke(t,e,r,i),e.child)}function iu(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!$l(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Kf(t,e,o,r,i)):(t=Qi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(s,r)&&t.ref===e.ref)return Tt(t,e,i)}return e.flags|=1,t=Kt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Kf(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Gr(o,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Tt(t,e,i)}return Na(t,e,n,r,i)}function Xf(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(zn,Ae),Ae|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(zn,Ae),Ae|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(zn,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,G(zn,Ae),Ae|=r;return ke(t,e,i,n),e.child}function qf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Na(t,e,n,r,i){var o=Ne(n)?gn:we.current;return o=Zn(e,o),Wn(e,i),n=jl(t,e,n,r,o,i),r=Ol(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(q&&r&&bl(e),e.flags|=1,ke(t,e,n,i),e.child)}function ou(t,e,n,r,i){if(Ne(n)){var o=!0;go(e)}else o=!1;if(Wn(e,i),e.stateNode===null)Ki(t,e),Vf(e,n,r),Ca(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?gn:we.current,u=Zn(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&Jc(e,s,r,u),jt=!1;var m=e.memoizedState;s.state=m,wo(e,r,s,i),c=e.memoizedState,a!==r||m!==c||Pe.current||jt?(typeof d=="function"&&(Ia(e,n,d,r),c=e.memoizedState),(a=jt||Zc(e,n,a,r,m,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,_f(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xe(e.type,a),s.props=u,h=e.pendingProps,m=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=We(c):(c=Ne(n)?gn:we.current,c=Zn(e,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==c)&&Jc(e,s,r,c),jt=!1,m=e.memoizedState,s.state=m,wo(e,r,s,i);var v=e.memoizedState;a!==h||m!==v||Pe.current||jt?(typeof y=="function"&&(Ia(e,n,y,r),v=e.memoizedState),(u=jt||Zc(e,n,u,r,m,v,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ra(t,e,n,r,o,i)}function Ra(t,e,n,r,i,o){qf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&$c(e,n,!1),Tt(t,e,o);r=e.stateNode,Dg.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=er(e,t.child,null,o),e.child=er(e,null,a,o)):ke(t,e,a,o),e.memoizedState=r.state,i&&$c(e,n,!0),e.child}function Qf(t){var e=t.stateNode;e.pendingContext?Wc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wc(t,e.context,!1),Pl(t,e.containerInfo)}function su(t,e,n,r,i){return Jn(),Sl(i),e.flags|=256,ke(t,e,n,r),e.child}var Aa={dehydrated:null,treeContext:null,retryLane:0};function ja(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zf(t,e,n){var r=e.pendingProps,i=Q.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(Q,i&1),t===null)return Ea(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qo(s,r,0,null),t=pn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ja(n),e.memoizedState=Aa,t):Dl(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zg(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Kt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Kt(a,o):(o=pn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ja(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Aa,r}return o=t.child,t=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dl(t,e){return e=qo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ai(t,e,n,r){return r!==null&&Sl(r),er(e,t.child,null,n),t=Dl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zg(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Os(Error(k(422))),Ai(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=qo({mode:"visible",children:r.children},i,0,null),o=pn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&er(e,t.child,null,s),e.child.memoizedState=ja(s),e.memoizedState=Aa,o);if(!(e.mode&1))return Ai(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Os(o,r,void 0),Ai(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ce||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Et(t,i),et(r,t,i,-1))}return Wl(),r=Os(Error(k(421))),Ai(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Qg.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,je=$t(i.nextSibling),Oe=e,q=!0,Qe=null,t!==null&&(Fe[Ue++]=yt,Fe[Ue++]=vt,Fe[Ue++]=mn,yt=t.id,vt=t.overflow,mn=e),e=Dl(e,r.children),e.flags|=4096,e)}function au(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ta(t.return,e,n)}function Ls(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jf(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ke(t,e,r.children,n),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&au(t,n,e);else if(t.tag===19)au(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(Q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ls(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ls(e,!0,n,null,o);break;case"together":Ls(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ki(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Kt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fg(t,e,n){switch(e.tag){case 3:Qf(e),Jn();break;case 5:Ef(e);break;case 1:Ne(e.type)&&go(e);break;case 4:Pl(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(vo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(Q,Q.current&1),e.flags|=128,null):n&e.child.childLanes?Zf(t,e,n):(G(Q,Q.current&1),t=Tt(t,e,n),t!==null?t.sibling:null);G(Q,Q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,Xf(t,e,n)}return Tt(t,e,n)}var ep,Oa,tp,np;ep=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};tp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,un(lt.current);var o=null;switch(n){case"input":i=na(t,i),r=na(t,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=oa(t,i),r=oa(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=po)}aa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&K("scroll",t),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};np=function(t,e,n,r){n!==r&&(e.flags|=4)};function vr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ug(t,e,n){var r=e.pendingProps;switch(kl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Ne(e.type)&&ho(),ve(e),null;case 3:return r=e.stateNode,tr(),X(Pe),X(we),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ni(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qe!==null&&(Ha(Qe),Qe=null))),Oa(t,e),ve(e),null;case 5:Nl(e);var i=un(Zr.current);if(n=e.type,t!==null&&e.stateNode!=null)tp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ve(e),null}if(t=un(lt.current),Ni(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ot]=e,r[qr]=o,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Tr.length;i++)K(Tr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":mc(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":vc(r,o),K("invalid",r)}aa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pi(r.textContent,a,t),i=["children",""+a]):Ur.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&K("scroll",r)}switch(n){case"input":bi(r),yc(r,o,!0);break;case"textarea":bi(r),xc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=po)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ot]=e,t[qr]=r,ep(t,e,!1,!1),e.stateNode=t;e:{switch(s=la(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Tr.length;i++)K(Tr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":mc(t,r),i=na(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),K("invalid",t);break;case"textarea":vc(t,r),i=oa(t,r),K("invalid",t);break;default:i=r}aa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?Ad(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nd(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Br(t,c):typeof c=="number"&&Br(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ur.hasOwnProperty(o)?c!=null&&o==="onScroll"&&K("scroll",t):c!=null&&al(t,o,c,s))}switch(n){case"input":bi(t),yc(t,r,!1);break;case"textarea":bi(t),xc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Fn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Fn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)np(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=un(Zr.current),un(lt.current),Ni(e)){if(r=e.stateNode,n=e.memoizedProps,r[ot]=e,(o=r.nodeValue!==n)&&(t=Oe,t!==null))switch(t.tag){case 3:Pi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=e,e.stateNode=r}return ve(e),null;case 13:if(X(Q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&je!==null&&e.mode&1&&!(e.flags&128))wf(),Jn(),e.flags|=98560,o=!1;else if(o=Ni(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(k(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[ot]=e}else Jn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),o=!1}else Qe!==null&&(Ha(Qe),Qe=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?ae===0&&(ae=3):Wl())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return tr(),Oa(t,e),t===null&&Kr(e.stateNode.containerInfo),ve(e),null;case 10:return Tl(e.type._context),ve(e),null;case 17:return Ne(e.type)&&ho(),ve(e),null;case 19:if(X(Q),o=e.memoizedState,o===null)return ve(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)vr(o,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=bo(t),s!==null){for(e.flags|=128,vr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(Q,Q.current&1|2),e.child}t=t.sibling}o.tail!==null&&ne()>rr&&(e.flags|=128,r=!0,vr(o,!1),e.lanes=4194304)}else{if(!r)if(t=bo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ve(e),null}else 2*ne()-o.renderingStartTime>rr&&n!==1073741824&&(e.flags|=128,r=!0,vr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ne(),e.sibling=null,n=Q.current,G(Q,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return Hl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ae&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function Bg(t,e){switch(kl(e),e.tag){case 1:return Ne(e.type)&&ho(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return tr(),X(Pe),X(we),Rl(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nl(e),null;case 13:if(X(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Q),null;case 4:return tr(),null;case 10:return Tl(e.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var ji=!1,xe=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Dn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function La(t,e,n){try{n()}catch(r){ee(t,e,r)}}var lu=!1;function Wg(t,e){if(va=co,t=af(),wl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,d=0,h=t,m=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)m=h,h=y;for(;;){if(h===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(c=s),(y=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=y}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xa={focusedElem:t,selectionRange:n},co=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Xe(e.type,w),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){ee(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=lu,lu=!1,v}function Lr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&La(e,n,o)}i=i.next}while(i!==r)}}function Ko(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ma(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rp(t){var e=t.alternate;e!==null&&(t.alternate=null,rp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ot],delete e[qr],delete e[ka],delete e[Eg],delete e[Tg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ip(t){return t.tag===5||t.tag===3||t.tag===4}function cu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ip(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Da(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=po));else if(r!==4&&(t=t.child,t!==null))for(Da(t,e,n),t=t.sibling;t!==null;)Da(t,e,n),t=t.sibling}function za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(za(t,e,n),t=t.sibling;t!==null;)za(t,e,n),t=t.sibling}var he=null,qe=!1;function Nt(t,e,n){for(n=n.child;n!==null;)op(t,e,n),n=n.sibling}function op(t,e,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:xe||Dn(n,e);case 6:var r=he,i=qe;he=null,Nt(t,e,n),he=r,qe=i,he!==null&&(qe?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(qe?(t=he,n=n.stateNode,t.nodeType===8?Cs(t.parentNode,n):t.nodeType===1&&Cs(t,n),Vr(t)):Cs(he,n.stateNode));break;case 4:r=he,i=qe,he=n.stateNode.containerInfo,qe=!0,Nt(t,e,n),he=r,qe=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&La(n,e,s),i=i.next}while(i!==r)}Nt(t,e,n);break;case 1:if(!xe&&(Dn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,e,a)}Nt(t,e,n);break;case 21:Nt(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Nt(t,e,n),xe=r):Nt(t,e,n);break;default:Nt(t,e,n)}}function uu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hg),e.forEach(function(r){var i=Zg.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ke(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,qe=!1;break e;case 3:he=a.stateNode.containerInfo,qe=!0;break e;case 4:he=a.stateNode.containerInfo,qe=!0;break e}a=a.return}if(he===null)throw Error(k(160));op(o,s,i),he=null,qe=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sp(e,t),e=e.sibling}function sp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ke(e,t),rt(t),r&4){try{Lr(3,t,t.return),Ko(3,t)}catch(w){ee(t,t.return,w)}try{Lr(5,t,t.return)}catch(w){ee(t,t.return,w)}}break;case 1:Ke(e,t),rt(t),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(Ke(e,t),rt(t),r&512&&n!==null&&Dn(n,n.return),t.flags&32){var i=t.stateNode;try{Br(i,"")}catch(w){ee(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Id(i,o),la(a,s);var u=la(a,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?Ad(i,h):d==="dangerouslySetInnerHTML"?Nd(i,h):d==="children"?Br(i,h):al(i,d,h,u)}switch(a){case"input":ra(i,o);break;case"textarea":Cd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Fn(i,!!o.multiple,y,!1):m!==!!o.multiple&&(o.defaultValue!=null?Fn(i,!!o.multiple,o.defaultValue,!0):Fn(i,!!o.multiple,o.multiple?[]:"",!1))}i[qr]=o}catch(w){ee(t,t.return,w)}}break;case 6:if(Ke(e,t),rt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){ee(t,t.return,w)}}break;case 3:if(Ke(e,t),rt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(e.containerInfo)}catch(w){ee(t,t.return,w)}break;case 4:Ke(e,t),rt(t);break;case 13:Ke(e,t),rt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ul=ne())),r&4&&uu(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||d,Ke(e,t),xe=u):Ke(e,t),rt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(h=A=d;A!==null;){switch(m=A,y=m.child,m.tag){case 0:case 11:case 14:case 15:Lr(4,m,m.return);break;case 1:Dn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Dn(m,m.return);break;case 22:if(m.memoizedState!==null){fu(h);continue}}y!==null?(y.return=m,A=y):fu(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Rd("display",s))}catch(w){ee(t,t.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){ee(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ke(e,t),rt(t),r&4&&uu(t);break;case 21:break;default:Ke(e,t),rt(t)}}function rt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ip(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Br(i,""),r.flags&=-33);var o=cu(t);za(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cu(t);Da(t,a,s);break;default:throw Error(k(161))}}catch(c){ee(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $g(t,e,n){A=t,ap(t)}function ap(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ji;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||xe;a=ji;var u=xe;if(ji=s,(xe=c)&&!u)for(A=i;A!==null;)s=A,c=s.child,s.tag===22&&s.memoizedState!==null?pu(i):c!==null?(c.return=s,A=c):pu(i);for(;o!==null;)A=o,ap(o),o=o.sibling;A=i,ji=a,xe=u}du(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):du(t)}}function du(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||Ko(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Xc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Vr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||e.flags&512&&Ma(e)}catch(m){ee(e,e.return,m)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function fu(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function pu(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ko(4,e)}catch(c){ee(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ee(e,i,c)}}var o=e.return;try{Ma(e)}catch(c){ee(e,o,c)}break;case 5:var s=e.return;try{Ma(e)}catch(c){ee(e,s,c)}}}catch(c){ee(e,e.return,c)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var Vg=Math.ceil,_o=Ct.ReactCurrentDispatcher,zl=Ct.ReactCurrentOwner,He=Ct.ReactCurrentBatchConfig,H=0,de=null,oe=null,ge=0,Ae=0,zn=en(0),ae=0,ni=null,vn=0,Xo=0,Fl=0,Mr=null,Ie=null,Ul=0,rr=1/0,ht=null,Eo=!1,Fa=null,Yt=null,Oi=!1,Ut=null,To=0,Dr=0,Ua=null,Xi=-1,qi=0;function Se(){return H&6?ne():Xi!==-1?Xi:Xi=ne()}function Gt(t){return t.mode&1?H&2&&ge!==0?ge&-ge:Cg.transition!==null?(qi===0&&(qi=$d()),qi):(t=V,t!==0||(t=window.event,t=t===void 0?16:Qd(t.type)),t):1}function et(t,e,n,r){if(50<Dr)throw Dr=0,Ua=null,Error(k(185));li(t,n,r),(!(H&2)||t!==de)&&(t===de&&(!(H&2)&&(Xo|=n),ae===4&&Lt(t,ge)),Re(t,r),n===1&&H===0&&!(e.mode&1)&&(rr=ne()+500,Vo&&tn()))}function Re(t,e){var n=t.callbackNode;C0(t,e);var r=lo(t,t===de?ge:0);if(r===0)n!==null&&kc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kc(n),e===1)t.tag===0?Ig(hu.bind(null,t)):yf(hu.bind(null,t)),Sg(function(){!(H&6)&&tn()}),n=null;else{switch(Vd(r)){case 1:n=fl;break;case 4:n=Hd;break;case 16:n=ao;break;case 536870912:n=Wd;break;default:n=ao}n=gp(n,lp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function lp(t,e){if(Xi=-1,qi=0,H&6)throw Error(k(327));var n=t.callbackNode;if($n()&&t.callbackNode!==n)return null;var r=lo(t,t===de?ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Io(t,r);else{e=r;var i=H;H|=2;var o=up();(de!==t||ge!==e)&&(ht=null,rr=ne()+500,fn(t,e));do try{Kg();break}catch(a){cp(t,a)}while(1);El(),_o.current=o,H=i,oe!==null?e=0:(de=null,ge=0,e=ae)}if(e!==0){if(e===2&&(i=pa(t),i!==0&&(r=i,e=Ba(t,i))),e===1)throw n=ni,fn(t,0),Lt(t,r),Re(t,ne()),n;if(e===6)Lt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yg(i)&&(e=Io(t,r),e===2&&(o=pa(t),o!==0&&(r=o,e=Ba(t,o))),e===1))throw n=ni,fn(t,0),Lt(t,r),Re(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:on(t,Ie,ht);break;case 3:if(Lt(t,r),(r&130023424)===r&&(e=Ul+500-ne(),10<e)){if(lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ba(on.bind(null,t,Ie,ht),e);break}on(t,Ie,ht);break;case 4:if(Lt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Je(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){t.timeoutHandle=ba(on.bind(null,t,Ie,ht),r);break}on(t,Ie,ht);break;case 5:on(t,Ie,ht);break;default:throw Error(k(329))}}}return Re(t,ne()),t.callbackNode===n?lp.bind(null,t):null}function Ba(t,e){var n=Mr;return t.current.memoizedState.isDehydrated&&(fn(t,e).flags|=256),t=Io(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&Ha(e)),t}function Ha(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Yg(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lt(t,e){for(e&=~Fl,e&=~Xo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Je(e),r=1<<n;t[n]=-1,e&=~r}}function hu(t){if(H&6)throw Error(k(327));$n();var e=lo(t,0);if(!(e&1))return Re(t,ne()),null;var n=Io(t,e);if(t.tag!==0&&n===2){var r=pa(t);r!==0&&(e=r,n=Ba(t,r))}if(n===1)throw n=ni,fn(t,0),Lt(t,e),Re(t,ne()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,on(t,Ie,ht),Re(t,ne()),null}function Bl(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(rr=ne()+500,Vo&&tn())}}function xn(t){Ut!==null&&Ut.tag===0&&!(H&6)&&$n();var e=H;H|=1;var n=He.transition,r=V;try{if(He.transition=null,V=1,t)return t()}finally{V=r,He.transition=n,H=e,!(H&6)&&tn()}}function Hl(){Ae=zn.current,X(zn)}function fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kg(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ho();break;case 3:tr(),X(Pe),X(we),Rl();break;case 5:Nl(r);break;case 4:tr();break;case 13:X(Q);break;case 19:X(Q);break;case 10:Tl(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(de=t,oe=t=Kt(t.current,null),ge=Ae=e,ae=0,ni=null,Fl=Xo=vn=0,Ie=Mr=null,cn!==null){for(e=0;e<cn.length;e++)if(n=cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return t}function cp(t,e){do{var n=oe;try{if(El(),Yi.current=So,ko){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ko=!1}if(yn=0,ue=se=Z=null,Or=!1,Jr=0,zl.current=null,n===null||n.return===null){ae=1,ni=e,oe=null;break}e:{var o=t,s=n.return,a=n,c=e;if(e=ge,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=tu(s);if(y!==null){y.flags&=-257,nu(y,s,a,o,e),y.mode&1&&eu(o,u,e),e=y,c=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){eu(o,u,e),Wl();break e}c=Error(k(426))}}else if(q&&a.mode&1){var C=tu(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),nu(C,s,a,o,e),Sl(nr(c,a));break e}}o=c=nr(c,a),ae!==4&&(ae=2),Mr===null?Mr=[o]:Mr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Yf(o,c,e);Kc(o,p);break e;case 1:a=c;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yt===null||!Yt.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Gf(o,a,e);Kc(o,x);break e}}o=o.return}while(o!==null)}fp(n)}catch(S){e=S,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function up(){var t=_o.current;return _o.current=So,t===null?So:t}function Wl(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(vn&268435455)&&!(Xo&268435455)||Lt(de,ge)}function Io(t,e){var n=H;H|=2;var r=up();(de!==t||ge!==e)&&(ht=null,fn(t,e));do try{Gg();break}catch(i){cp(t,i)}while(1);if(El(),H=n,_o.current=r,oe!==null)throw Error(k(261));return de=null,ge=0,ae}function Gg(){for(;oe!==null;)dp(oe)}function Kg(){for(;oe!==null&&!x0();)dp(oe)}function dp(t){var e=hp(t.alternate,t,Ae);t.memoizedProps=t.pendingProps,e===null?fp(t):oe=e,zl.current=null}function fp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bg(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,oe=null;return}}else if(n=Ug(n,e,Ae),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ae===0&&(ae=5)}function on(t,e,n){var r=V,i=He.transition;try{He.transition=null,V=1,Xg(t,e,n,r)}finally{He.transition=i,V=r}return null}function Xg(t,e,n,r){do $n();while(Ut!==null);if(H&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(P0(t,o),t===de&&(oe=de=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,gp(ao,function(){return $n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=V;V=1;var a=H;H|=4,zl.current=null,Wg(t,n),sp(n,t),gg(xa),co=!!va,xa=va=null,t.current=n,$g(n),w0(),H=a,V=s,He.transition=o}else t.current=n;if(Oi&&(Oi=!1,Ut=t,To=i),o=t.pendingLanes,o===0&&(Yt=null),S0(n.stateNode),Re(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,t=Fa,Fa=null,t;return To&1&&t.tag!==0&&$n(),o=t.pendingLanes,o&1?t===Ua?Dr++:(Dr=0,Ua=t):Dr=0,tn(),null}function $n(){if(Ut!==null){var t=Vd(To),e=He.transition,n=V;try{if(He.transition=null,V=16>t?16:t,Ut===null)var r=!1;else{if(t=Ut,Ut=null,To=0,H&6)throw Error(k(331));var i=H;for(H|=4,A=t.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Lr(8,d,o)}var h=d.child;if(h!==null)h.return=d,A=h;else for(;A!==null;){d=A;var m=d.sibling,y=d.return;if(rp(d),d===u){A=null;break}if(m!==null){m.return=y,A=m;break}A=y}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Lr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var f=t.current;for(A=f;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ko(9,a)}}catch(S){ee(a,a.return,S)}if(a===s){A=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}if(H=i,tn(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Uo,t)}catch{}r=!0}return r}finally{V=n,He.transition=e}}return!1}function gu(t,e,n){e=nr(n,e),e=Yf(t,e,1),t=Vt(t,e,1),e=Se(),t!==null&&(li(t,1,e),Re(t,e))}function ee(t,e,n){if(t.tag===3)gu(t,t,n);else for(;e!==null;){if(e.tag===3){gu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){t=nr(n,t),t=Gf(e,t,1),e=Vt(e,t,1),t=Se(),e!==null&&(li(e,1,t),Re(e,t));break}}e=e.return}}function qg(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>ne()-Ul?fn(t,0):Fl|=n),Re(t,e)}function pp(t,e){e===0&&(t.mode&1?(e=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):e=1);var n=Se();t=Et(t,e),t!==null&&(li(t,e,n),Re(t,n))}function Qg(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pp(t,n)}function Zg(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),pp(t,n)}var hp;hp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,Fg(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,q&&e.flags&1048576&&vf(e,yo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ki(t,e),t=e.pendingProps;var i=Zn(e,we.current);Wn(e,n),i=jl(null,e,r,t,i,n);var o=Ol();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ne(r)?(o=!0,go(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cl(e),i.updater=Go,e.stateNode=i,i._reactInternals=e,Ca(e,r,t,n),e=Ra(null,e,r,!0,o,n)):(e.tag=0,q&&o&&bl(e),ke(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ki(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=em(r),t=Xe(r,t),i){case 0:e=Na(null,e,r,t,n);break e;case 1:e=ou(null,e,r,t,n);break e;case 11:e=ru(null,e,r,t,n);break e;case 14:e=iu(null,e,r,Xe(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Na(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),ou(t,e,r,i,n);case 3:e:{if(Qf(e),t===null)throw Error(k(387));r=e.pendingProps,o=e.memoizedState,i=o.element,_f(t,e),wo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=nr(Error(k(423)),e),e=su(t,e,r,n,i);break e}else if(r!==i){i=nr(Error(k(424)),e),e=su(t,e,r,n,i);break e}else for(je=$t(e.stateNode.containerInfo.firstChild),Oe=e,q=!0,Qe=null,n=kf(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===i){e=Tt(t,e,n);break e}ke(t,e,r,n)}e=e.child}return e;case 5:return Ef(e),t===null&&Ea(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,wa(r,i)?s=null:o!==null&&wa(r,o)&&(e.flags|=32),qf(t,e),ke(t,e,s,n),e.child;case 6:return t===null&&Ea(e),null;case 13:return Zf(t,e,n);case 4:return Pl(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=er(e,null,r,n):ke(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),ru(t,e,r,i,n);case 7:return ke(t,e,e.pendingProps,n),e.child;case 8:return ke(t,e,e.pendingProps.children,n),e.child;case 12:return ke(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,G(vo,r._currentValue),r._currentValue=s,o!==null)if(tt(o.value,s)){if(o.children===i.children&&!Pe.current){e=Tt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=bt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ta(o.return,n,e),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ta(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ke(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wn(e,n),i=We(i),r=r(i),e.flags|=1,ke(t,e,r,n),e.child;case 14:return r=e.type,i=Xe(r,e.pendingProps),i=Xe(r.type,i),iu(t,e,r,i,n);case 15:return Kf(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),Ki(t,e),e.tag=1,Ne(r)?(t=!0,go(e)):t=!1,Wn(e,n),Vf(e,r,i),Ca(e,r,i,n),Ra(null,e,r,!0,t,n);case 19:return Jf(t,e,n);case 22:return Xf(t,e,n)}throw Error(k(156,e.tag))};function gp(t,e){return Bd(t,e)}function Jg(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,r){return new Jg(t,e,n,r)}function $l(t){return t=t.prototype,!(!t||!t.isReactComponent)}function em(t){if(typeof t=="function")return $l(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cl)return 11;if(t===ul)return 14}return 2}function Kt(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qi(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")$l(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Cn:return pn(n.children,i,o,e);case ll:s=8,i|=8;break;case Zs:return t=Be(12,n,e,i|2),t.elementType=Zs,t.lanes=o,t;case Js:return t=Be(13,n,e,i),t.elementType=Js,t.lanes=o,t;case ea:return t=Be(19,n,e,i),t.elementType=ea,t.lanes=o,t;case _d:return qo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kd:s=10;break e;case Sd:s=9;break e;case cl:s=11;break e;case ul:s=14;break e;case At:s=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Be(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function pn(t,e,n,r){return t=Be(7,t,r,e),t.lanes=n,t}function qo(t,e,n,r){return t=Be(22,t,r,e),t.elementType=_d,t.lanes=n,t.stateNode={isHidden:!1},t}function Ms(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function Ds(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vl(t,e,n,r,i,o,s,a,c){return t=new tm(t,e,n,a,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Be(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(o),t}function nm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function mp(t){if(!t)return Zt;t=t._reactInternals;e:{if(_n(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ne(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ne(n))return mf(t,n,e)}return e}function yp(t,e,n,r,i,o,s,a,c){return t=Vl(n,r,!0,t,i,o,s,a,c),t.context=mp(null),n=t.current,r=Se(),i=Gt(n),o=bt(r,i),o.callback=e??null,Vt(n,o,i),t.current.lanes=i,li(t,i,r),Re(t,r),t}function Qo(t,e,n,r){var i=e.current,o=Se(),s=Gt(i);return n=mp(n),e.context===null?e.context=n:e.pendingContext=n,e=bt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vt(i,e,s),t!==null&&(et(t,i,s,o),Vi(t,i,s)),s}function Co(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yl(t,e){mu(t,e),(t=t.alternate)&&mu(t,e)}function rm(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gl(t){this._internalRoot=t}Zo.prototype.render=Gl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Qo(t,e,null,null)};Zo.prototype.unmount=Gl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xn(function(){Qo(null,t,null,null)}),e[_t]=null}};function Zo(t){this._internalRoot=t}Zo.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ot.length&&e!==0&&e<Ot[n].priority;n++);Ot.splice(n,0,t),n===0&&qd(t)}};function Kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yu(){}function im(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Co(s);o.call(u)}}var s=yp(e,r,t,0,null,!1,!1,"",yu);return t._reactRootContainer=s,t[_t]=s.current,Kr(t.nodeType===8?t.parentNode:t),xn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Co(c);a.call(u)}}var c=Vl(t,0,!1,null,null,!1,!1,"",yu);return t._reactRootContainer=c,t[_t]=c.current,Kr(t.nodeType===8?t.parentNode:t),xn(function(){Qo(e,c,n,r)}),c}function es(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=Co(s);a.call(c)}}Qo(e,s,t,i)}else s=im(n,e,t,i,r);return Co(s)}Yd=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Er(e.pendingLanes);n!==0&&(pl(e,n|1),Re(e,ne()),!(H&6)&&(rr=ne()+500,tn()))}break;case 13:xn(function(){var r=Et(t,1);if(r!==null){var i=Se();et(r,t,1,i)}}),Yl(t,1)}};hl=function(t){if(t.tag===13){var e=Et(t,134217728);if(e!==null){var n=Se();et(e,t,134217728,n)}Yl(t,134217728)}};Gd=function(t){if(t.tag===13){var e=Gt(t),n=Et(t,e);if(n!==null){var r=Se();et(n,t,e,r)}Yl(t,e)}};Kd=function(){return V};Xd=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};ua=function(t,e,n){switch(e){case"input":if(ra(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$o(r);if(!i)throw Error(k(90));Td(r),ra(r,i)}}}break;case"textarea":Cd(t,n);break;case"select":e=n.value,e!=null&&Fn(t,!!n.multiple,e,!1)}};Ld=Bl;Md=xn;var om={usingClientEntryPoint:!1,Events:[ui,An,$o,jd,Od,Bl]},xr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sm={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fd(t),t===null?null:t.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{Uo=Li.inject(sm),at=Li}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;Me.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kl(e))throw Error(k(200));return nm(t,e,null,n)};Me.createRoot=function(t,e){if(!Kl(t))throw Error(k(299));var n=!1,r="",i=vp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vl(t,1,!1,null,null,n,!1,r,i),t[_t]=e.current,Kr(t.nodeType===8?t.parentNode:t),new Gl(e)};Me.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Fd(e),t=t===null?null:t.stateNode,t};Me.flushSync=function(t){return xn(t)};Me.hydrate=function(t,e,n){if(!Jo(e))throw Error(k(200));return es(null,t,e,!0,n)};Me.hydrateRoot=function(t,e,n){if(!Kl(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=yp(e,null,t,1,n??null,i,!1,o,s),t[_t]=e.current,Kr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zo(e)};Me.render=function(t,e,n){if(!Jo(e))throw Error(k(200));return es(null,t,e,!1,n)};Me.unmountComponentAtNode=function(t){if(!Jo(t))throw Error(k(40));return t._reactRootContainer?(xn(function(){es(null,null,t,!1,function(){t._reactRootContainer=null,t[_t]=null})}),!0):!1};Me.unstable_batchedUpdates=Bl;Me.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Jo(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return es(t,e,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(t){console.error(t)}}xp(),vd.exports=Me;var am=vd.exports,vu=am;qs.createRoot=vu.createRoot,qs.hydrateRoot=vu.hydrateRoot;var lm=typeof Element<"u",cm=typeof Map=="function",um=typeof Set=="function",dm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Zi(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Zi(t[r],e[r]))return!1;return!0}var o;if(cm&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;for(o=t.entries();!(r=o.next()).done;)if(!Zi(r.value[1],e.get(r.value[0])))return!1;return!0}if(um&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(r=o.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(dm&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(lm&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Zi(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var fm=function(e,n){try{return Zi(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const pm=zo(fm);var hm=function(t,e,n,r,i,o,s,a){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],d=0;c=new Error(e.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},gm=hm;const xu=zo(gm);var mm=function(e,n,r,i){var o=r?r.call(i,e,n):void 0;if(o!==void 0)return!!o;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var d=s[u];if(!c(d))return!1;var h=e[d],m=n[d];if(o=r?r.call(i,h,m,d):void 0,o===!1||o===void 0&&h!==m)return!1}return!0};const ym=zo(mm);var wp=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(wp||{}),zs={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},wu=Object.values(wp),Xl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},vm=Object.entries(Xl).reduce((t,[e,n])=>(t[n]=e,t),{}),Ze="data-rh",Vn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Yn=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},xm=t=>{let e=Yn(t,"title");const n=Yn(t,Vn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Yn(t,Vn.DEFAULT_TITLE);return e||r||void 0},wm=t=>Yn(t,Vn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Fs=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),bm=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let o=0;o<i.length;o+=1){const a=i[o].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),km=t=>console&&typeof console.warn=="function"&&console.warn(t),wr=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&km(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,o)=>{const s={};o.filter(c=>{let u;const d=Object.keys(c);for(let m=0;m<d.length;m+=1){const y=d[m],v=y.toLowerCase();e.indexOf(v)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(v==="rel"&&c[v].toLowerCase()==="stylesheet")&&(u=v),e.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(u=y)}if(!u||!c[u])return!1;const h=c[u].toLowerCase();return r[u]||(r[u]={}),s[u]||(s[u]={}),r[u][h]?!1:(s[u][h]=!0,!0)}).reverse().forEach(c=>i.push(c));const a=Object.keys(s);for(let c=0;c<a.length;c+=1){const u=a[c],d={...r[u],...s[u]};r[u]=d}return i},[]).reverse()},Sm=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},_m=t=>({baseTag:bm(["href"],t),bodyAttributes:Fs("bodyAttributes",t),defer:Yn(t,Vn.DEFER),encode:Yn(t,Vn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Fs("htmlAttributes",t),linkTags:wr("link",["rel","href"],t),metaTags:wr("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:wr("noscript",["innerHTML"],t),onChangeClientState:wm(t),scriptTags:wr("script",["src","innerHTML"],t),styleTags:wr("style",["cssText"],t),title:xm(t),titleAttributes:Fs("titleAttributes",t),prioritizeSeoTags:Sm(t,Vn.PRIORITIZE_SEO_TAGS)}),bp=t=>Array.isArray(t)?t.join(""):t,Em=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Us=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(Em(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},bu=(t,e)=>({...t,[e]:void 0}),Tm=["noscript","script","style"],Wa=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),kp=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),Im=(t,e,n,r)=>{const i=kp(n),o=bp(e);return i?`<${t} ${Ze}="true" ${i}>${Wa(o,r)}</${t}>`:`<${t} ${Ze}="true">${Wa(o,r)}</${t}>`},Cm=(t,e,n=!0)=>e.reduce((r,i)=>{const o=i,s=Object.keys(o).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const h=typeof o[d]>"u"?d:`${d}="${Wa(o[d],n)}"`;return u?`${u} ${h}`:h},""),a=o.innerHTML||o.cssText||"",c=Tm.indexOf(t)===-1;return`${r}<${t} ${Ze}="true" ${s}${c?"/>":`>${a}</${t}>`}`},""),Sp=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Xl[r];return n[i||r]=t[r],n},e),Pm=(t,e,n)=>{const r={key:e,[Ze]:!0},i=Sp(n,r);return[st.createElement("title",i,e)]},Ji=(t,e)=>e.map((n,r)=>{const i={key:r,[Ze]:!0};return Object.keys(n).forEach(o=>{const a=Xl[o]||o;if(a==="innerHTML"||a==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[a]=n[o]}),st.createElement(t,i)}),ze=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>Pm(t,e.title,e.titleAttributes),toString:()=>Im(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Sp(e),toString:()=>kp(e)};default:return{toComponent:()=>Ji(t,e),toString:()=>Cm(t,e,n)}}},Nm=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Us(t,zs.meta),o=Us(e,zs.link),s=Us(n,zs.script);return{priorityMethods:{toComponent:()=>[...Ji("meta",i.priority),...Ji("link",o.priority),...Ji("script",s.priority)],toString:()=>`${ze("meta",i.priority,r)} ${ze("link",o.priority,r)} ${ze("script",s.priority,r)}`},metaTags:i.default,linkTags:o.default,scriptTags:s.default}},Rm=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:o,styleTags:s,title:a="",titleAttributes:c,prioritizeSeoTags:u}=t;let{linkTags:d,metaTags:h,scriptTags:m}=t,y={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:y,linkTags:d,metaTags:h,scriptTags:m}=Nm(t)),{priority:y,base:ze("base",e,r),bodyAttributes:ze("bodyAttributes",n,r),htmlAttributes:ze("htmlAttributes",i,r),link:ze("link",d,r),meta:ze("meta",h,r),noscript:ze("noscript",o,r),script:ze("script",m,r),style:ze("style",s,r),title:ze("title",{title:a,titleAttributes:c},r)}},$a=Rm,Mi=[],_p=!!(typeof window<"u"&&window.document&&window.document.createElement),Va=class{constructor(t,e){pt(this,"instances",[]);pt(this,"canUseDOM",_p);pt(this,"context");pt(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Mi:this.instances,add:t=>{(this.canUseDOM?Mi:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Mi:this.instances).indexOf(t);(this.canUseDOM?Mi:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=$a({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Am={},Ep=st.createContext(Am),qn,Tp=(qn=class extends _.Component{constructor(n){super(n);pt(this,"helmetData");this.helmetData=new Va(this.props.context||{},qn.canUseDOM)}render(){return st.createElement(Ep.Provider,{value:this.helmetData.value},this.props.children)}},pt(qn,"canUseDOM",_p),qn),Tn=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Ze}]`),i=[].slice.call(r),o=[];let s;return e&&e.length&&e.forEach(a=>{const c=document.createElement(t);for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u))if(u==="innerHTML")c.innerHTML=a.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText));else{const d=u,h=typeof a[d]>"u"?"":a[d];c.setAttribute(u,h)}c.setAttribute(Ze,"true"),i.some((u,d)=>(s=d,c.isEqualNode(u)))?i.splice(s,1):o.push(c)}),i.forEach(a=>{var c;return(c=a.parentNode)==null?void 0:c.removeChild(a)}),o.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:o}},Ya=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Ze),i=r?r.split(","):[],o=[...i],s=Object.keys(e);for(const a of s){const c=e[a]||"";n.getAttribute(a)!==c&&n.setAttribute(a,c),i.indexOf(a)===-1&&i.push(a);const u=o.indexOf(a);u!==-1&&o.splice(u,1)}for(let a=o.length-1;a>=0;a-=1)n.removeAttribute(o[a]);i.length===o.length?n.removeAttribute(Ze):n.getAttribute(Ze)!==s.join(",")&&n.setAttribute(Ze,s.join(","))},jm=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=bp(t)),Ya("title",e)},ku=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:o,metaTags:s,noscriptTags:a,onChangeClientState:c,scriptTags:u,styleTags:d,title:h,titleAttributes:m}=t;Ya("body",r),Ya("html",i),jm(h,m);const y={baseTag:Tn("base",n),linkTags:Tn("link",o),metaTags:Tn("meta",s),noscriptTags:Tn("noscript",a),scriptTags:Tn("script",u),styleTags:Tn("style",d)},v={},w={};Object.keys(y).forEach(C=>{const{newTags:p,oldTags:f}=y[C];p.length&&(v[C]=p),f.length&&(w[C]=y[C].oldTags)}),e&&e(),c(t,v,w)},br=null,Om=t=>{br&&cancelAnimationFrame(br),t.defer?br=requestAnimationFrame(()=>{ku(t,()=>{br=null})}):(ku(t),br=null)},Lm=Om,Su=class extends _.Component{constructor(){super(...arguments);pt(this,"rendered",!1)}shouldComponentUpdate(e){return!ym(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=_m(e.get().map(o=>{const s={...o.props};return delete s.context,s}));Tp.canUseDOM?Lm(i):$a&&(r=$a(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Xs,Mm=(Xs=class extends _.Component{shouldComponentUpdate(t){return!pm(bu(this.props,"helmetData"),bu(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return xu(wu.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${wu.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),xu(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return st.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...o}=r.props,s=Object.keys(o).reduce((c,u)=>(c[vm[u]||u]=o[u],c),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,i);break;default:e=this.mapObjectTypeChildren(r,e,s,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Va)){const i=r;r=new Va(i.context,!0),delete n.helmetData}return r?st.createElement(Su,{...n,context:r.value}):st.createElement(Ep.Consumer,null,i=>st.createElement(Su,{...n,context:i}))}},pt(Xs,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Xs);console.log("🔍 DEBUG: Checking environment variables:");console.log("VITE_FIREBASE_API_KEY:","AIzaSyBbXyOl7nwTFEYUCA2YB3GzOiFKKC-WSXY");console.log("VITE_FIREBASE_AUTH_DOMAIN:","bk-offset-printing.firebaseapp.com");console.log("VITE_FIREBASE_PROJECT_ID:","bk-offset-printing");console.log("VITE_FIREBASE_STORAGE_BUCKET:","bk-offset-printing.firebasestorage.app");console.log("VITE_FIREBASE_MESSAGING_SENDER_ID:","955887834418");console.log("VITE_FIREBASE_APP_ID:","1:955887834418:web:b92cd82ec5f57ecd43732b");const ce={primary:"#0ea5e9",primaryDark:"#0284c7",primaryLight:"#38bdf8",primaryGlow:"rgba(14, 165, 233, 0.35)",primaryFaint:"rgba(14, 165, 233, 0.08)",accent:"#06b6d4",accentDark:"#0891b2",green:"#16a34a",greenLight:"#22c55e",red:"#ef4444",grad:"linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",gradHero:"linear-gradient(135deg, #0369a1 0%, #0891b2 100%)",gradAnimated:"linear-gradient(270deg, #0284c7, #06b6d4, #0ea5e9, #38bdf8)",bgLight:"#ffffff",surfLight:"#f0f9ff",surfLight2:"#e0f2fe",borderLight:"#cbd5e1",textLight:"#0f172a",textMidLight:"#475569",textDimLight:"#94a3b8",bgDark:"#020617",surfDark:"#0f172a",surfDark2:"#1e293b",borderDark:"#334155",textDark:"#f1f5f9",textMidDark:"#94a3b8",textDimDark:"#64748b",fontDisplay:"'DM Sans', 'Inter', system-ui, sans-serif",fontBody:"'DM Sans', 'Inter', system-ui, sans-serif",radiusSm:"6px",radiusMd:"10px",radiusLg:"14px",radiusXl:"20px",radiusCard:"16px",shadowSm:"0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",shadowMd:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)",shadowLg:"0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",shadowXl:"0 20px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)"},Ip=t=>({bg:t?ce.bgDark:ce.bgLight,surf:t?ce.surfDark:ce.surfLight,surf2:t?ce.surfDark2:ce.surfLight2,border:t?ce.borderDark:ce.borderLight,text:t?ce.textDark:ce.textLight,textMid:t?ce.textMidDark:ce.textMidLight,textDim:t?ce.textDimDark:ce.textDimLight}),Dm={en:{heroTitle:"Classic Printing.",heroTitle2:"Modern Precision.",heroSub:"Trusted printing & finishing services in Delhi since 1995",yearsActive:"30+ YEARS ACTIVE",booksPrinted:"50K+ BOOKS PRINTED",happyClients:"500+ HAPPY CLIENTS",heroTrust:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",productsEyebrow:"What we offer",productsTitle:"Our Printing Services",productsIntro:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi.",productBulkTitle:"Bulk Book Printing",productBulkDesc:"High-volume printing for publishers, authors, and institutions. Consistent quality across thousands of copies — textbooks, novels, catalogs, and manuals.",productThermalTitle:"Thermal Gloss Lamination",productThermalDesc:"Premium gloss lamination using Fevicol-based adhesives. A shiny, protective finish that makes colours pop and stands up to daily handling.",productMatteTitle:"Matte Lamination",productMatteDesc:"Sophisticated, non-reflective finish using Fevicol-based adhesives. The go-to for premium covers that need to feel as good as they look.",productSoftTouchTitle:"Soft-Touch Lamination",productSoftTouchDesc:"Velvety, luxurious texture that turns every printed piece into an experience. Ideal for book covers, premium brochures, and collector's editions.",productTitlePrintingTitle:"Title Printing",productTitlePrintingDesc:"Custom title work for book spines, special-edition covers, and branded collateral. Every detail crafted to make your title unforgettable.",galleryEyebrow:"Our Machinery",galleryTitle:"Built for",galleryTitleEm:"Precision",galleryDesc:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality.",galleryYouTubeText:"Want to see these machines in action? Watch live demos on our",machineCategoryOffset:"Offset Printing",machineCategoryPlate:"Plate Making",machineCategoryLamination:"Lamination",machineCategoryFinishing:"Finishing",machineTagFlagship:"Flagship",machineTagIndustryLeader:"Industry Leader",machineTagAlcoholDamped:"Alcohol-Damped",machineTagAutomated:"Automated",machineTagHighSpeed:"High-Speed",machineTagUltraPrecise:"Ultra Precise",machineHeidelbergSpeedmasterDesc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",machineHeidelbergPrintingDesc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",machineAkiyamaDesc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",machineAutoplateDesc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",machineSORDZDesc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",machineThermalLaminationDesc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",machinePaperCutterDesc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",machineSpec4Colour:"Up to 4-colour",machineSpecMultiColour:"Multi-colour output",machineSpec19x26:"Size: 19×26 in",machineSpecAutoPlate:"Auto plate loading",machineSpec25x36:"Size: 25×36 in",machineSpecAccuracy:"±0.01mm accuracy",machineSpecHighVolume:"High-volume ready",woTitle:"WEB OFFSET PRINTING",woTagline:"SPEED. SCALE. PRECISION.",woHeroTitle:"Built for High-Volume Excellence",woHeroDesc:"Web offset printing is designed for non-stop production, and at BK Offset Printing, speed is only the beginning. Our advanced multi-colour rotary presses deliver consistent quality at exceptional speeds, making them ideal for magazines, catalogues, brochures, inserts, and promotional publications produced in large volumes.",woHeroDesc2:"Every rotation combines power, stability, and accuracy, ensuring sharp images and uniform colour reproduction—even across millions of impressions.",woPerfTitle:"Performance That Goes Beyond Printing",woPerfDesc:"Our web offset systems are equipped with integrated inline finishing, allowing multiple processes to happen in a single run. This means faster turnaround times and flawless results.",woPerfList:["UV & protective varnishing","Punching and perforation (portrait & landscape)","Folding (standard to creative formats)","Gluing and binding preparation","Custom finishing solutions for special publications"],woPerfFoot:"This seamless workflow helps us deliver ready-to-use printed products with unmatched efficiency.",woEnvTitle:"High Speed. Lower Environmental Impact.",woEnvDesc:"Powerful machines don't have to waste resources. Our web offset operations are engineered to be energy-efficient and environmentally responsible.",woEnvList:["Energy consumption","Material waste","Production downtime"],woEnvFoot:"This allows us to combine high productivity with sustainable practices, even during 24/7 production cycles.",woSusTitle:"Responsible Printing for a Sustainable Future",woSusDesc:"Environmental care is built into every stage of our process.",woSusList:["Low-energy drying technology to minimize fuel usage","Alcohol-free printing processes","Avoidance of harmful volatile solvents","Use of eco-friendly inks and consumables","Strict paper waste segregation and recycling"],woSusFoot:"All paper waste is carefully collected and returned to manufacturers for reuse—supporting a closed-loop recycling system.",visit:"Visit Our Press",locationEyebrow:"Find Us",locationTitle:"Visit Our",locationTitleEm:"Press",locationDesc:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration.",locationAddressLabel:"Address",locationAddress:"Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi – 110095",locationCopyAddress:"Copy address",locationCopied:"Copied!",locationHoursLabel:"Working Hours",locationHoursMonSun:"Monday – Sunday",locationHoursTime:"10:00 AM – 6:00 PM",locationTuesday:"Tuesday",locationClosed:"Closed",locationGetDirections:"Get Directions",locationOpenInMaps:"Open in Google Maps",signIn:"Sign In",signInTitle:"Welcome Back",register:"Register",registerTitle:"Create Account",emailLabel:"Email",passwordLabel:"Password",firstNameLabel:"First Name",lastNameLabel:"Last Name",continueWithGoogle:"Continue with Google",processing:"Processing...",forgotPassword:"Forgot Password?",noAccount:"Don't have an account?",haveAccount:"Already have an account?",footerTagline:"Trusted by publishers across Delhi since 1995 - Dilshad Garden",copyright:"© BK Offset Printing. All rights reserved."},hi:{heroTitle:"क्लासिक प्रिंटिंग।",heroTitle2:"आधुनिक गुणवत्ता।",heroSub:"1995 से दिल्ली में भरोसेमंद प्रिंटिंग सेवाएँ",yearsActive:"30+ वर्ष सक्रिय",booksPrinted:"50K+ पुस्तकें मुद्रित",happyClients:"500+ संतुष्ट ग्राहक",heroTrust:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",productsEyebrow:"हमारी पेशकश",productsTitle:"हमारी प्रिंटिंग सेवाएँ",productsIntro:"उच्च गुणवत्ता वाली बल्क बुक प्रिंटिंग और पेशेवर लेमिनेशन सेवाओं में विशेषज्ञता। हम प्रीमियम फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करते हैं, जो दिल्ली भर के प्रकाशकों, लेखकों और व्यवसायों की सेवा करते हैं।",productBulkTitle:"बल्क बुक प्रिंटिंग",productBulkDesc:"प्रकाशकों, लेखकों और संस्थानों के लिए उच्च-मात्रा मुद्रण। हजारों प्रतियों में लगातार गुणवत्ता — पाठ्यपुस्तकें, उपन्यास, कैटलॉग और मैनुअल।",productThermalTitle:"थर्मल ग्लॉस लेमिनेशन",productThermalDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर प्रीमियम ग्लॉस लेमिनेशन। एक चमकदार, सुरक्षात्मक फिनिश जो रंगों को जीवंत बनाती है और दैनिक उपयोग को सहन करती है।",productMatteTitle:"मैट लेमिनेशन",productMatteDesc:"फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग कर परिष्कृत, गैर-चिंतनशील फिनिश। प्रीमियम कवर के लिए आदर्श जो दिखने में उतने ही अच्छे लगते हैं जितना वे महसूस होते हैं।",productSoftTouchTitle:"सॉफ्ट-टच लेमिनेशन",productSoftTouchDesc:"मखमली, शानदार बनावट जो हर मुद्रित टुकड़े को एक अनुभव में बदल देती है। पुस्तक कवर, प्रीमियम ब्रोशर और कलेक्टर के संस्करणों के लिए आदर्श।",productTitlePrintingTitle:"टाइटल प्रिंटिंग",productTitlePrintingDesc:"पुस्तक रीढ़, विशेष-संस्करण कवर और ब्रांडेड कोलेटरल के लिए कस्टम टाइटल कार्य। हर विवरण आपके शीर्षक को अविस्मरणीय बनाने के लिए तैयार किया गया है।",galleryEyebrow:"हमारी मशीनरी",galleryTitle:"के लिए निर्मित",galleryTitleEm:"परिशुद्धता",galleryDesc:"विश्व स्तरीय हीडलबर्ग और अकियामा उपकरण — दोषरहित आउटपुट, अधिकतम थ्रूपुट और गुणवत्ता पर शून्य समझौता के लिए इंजीनियर किए गए।",galleryYouTubeText:"इन मशीनों को क्रियाशील देखना चाहते हैं? हमारे पर लाइव डेमो देखें",machineCategoryOffset:"ऑफसेट प्रिंटिंग",machineCategoryPlate:"प्लेट मेकिंग",machineCategoryLamination:"लेमिनेशन",machineCategoryFinishing:"फिनिशिंग",machineTagFlagship:"फ्लैगशिप",machineTagIndustryLeader:"उद्योग नेता",machineTagAlcoholDamped:"अल्कोहल-डैम्प्ड",machineTagAutomated:"स्वचालित",machineTagHighSpeed:"हाई-स्पीड",machineTagUltraPrecise:"अल्ट्रा प्रिसाइज",machineHeidelbergSpeedmasterDesc:"हीडलबर्ग स्पीडमास्टर — दुनिया का सबसे भरोसेमंद मल्टीकलर प्रेस। अत्याधुनिक इंटेलिस्टार्ट तकनीक के साथ पीक परफॉर्मेंस के लिए इंजीनियर किया गया, अद्वितीय प्रिंट गुणवत्ता प्रदान करता है।",machineHeidelbergPrintingDesc:"अत्याधुनिक हीडलबर्ग — सटीक इंजीनियरिंग में एक बेंचमार्क। सिंगल-कलर से लेकर जटिल मल्टी-कलर प्रोजेक्ट्स तक, स्वचालित नियंत्रण, तेज़ प्लेट परिवर्तन, और दोषरहित रजिस्ट्रेशन बेहतर आउटपुट प्रदान करते हैं।",machineAkiyamaDesc:"अकियामा अल्कोहल-डैम्प्ड 4-कलर प्रेस — साइज़ 19×26 इंच। अल्कोहल डैम्पिंग सिस्टम बेहतर इंक-वॉटर बैलेंस प्रदान करता है, पूरी शीट पर जीवंत, सुसंगत रंग देता है।",machineAutoplateDesc:"पूरी तरह से स्वचालित प्लेट-लोडिंग सिस्टम जो मैनुअल हैंडलिंग त्रुटियों को समाप्त करता है। मेकरेडी समय को काफी कम करता है, लगातार प्लेट रजिस्ट्रेशन सुनिश्चित करता है।",machineSORDZDesc:"हीडलबर्ग SORDZ 2-कलर ऑफसेट प्रिंटिंग मशीन। शीट साइज़ 25×36 इंच — मध्यम-प्रारूप व्यावसायिक कार्य के लिए पूरी तरह से संतुलित। अपने मजबूत निर्माण और लंबे रनों में लगातार रंग प्रजनन के लिए प्रसिद्ध।",machineThermalLaminationDesc:"औद्योगिक-ग्रेड थर्मल लेमिनेशन, फेविकॉल-आधारित चिपकने वाले पदार्थों का उपयोग करके दोषरहित ग्लॉस और मैट फिनिश प्रदान करता है। प्रिसिजन हीट कंट्रोल के साथ उच्च मात्रा को संभालता है।",machinePaperCutterDesc:"स्वचालित पेपर कटर अविश्वसनीय गति पर सटीक और दोषरहित कटौती प्रदान करता है। उच्च-मात्रा प्रिंटिंग और पेपर प्रोसेसिंग के लिए आदर्श।",machineSpec4Colour:"4-कलर तक",machineSpecMultiColour:"मल्टी-कलर आउटपुट",machineSpec19x26:"साइज़: 19×26 इंच",machineSpecAutoPlate:"ऑटो प्लेट लोडिंग",machineSpec25x36:"साइज़: 25×36 इंच",machineSpecAccuracy:"±0.01mm सटीकता",machineSpecHighVolume:"हाई-वॉल्यूम रेडी",woTitle:"वेब ऑफ़्सेट प्रिंटिंग",woTagline:"गति। पैमाना। सटीकता।",woHeroTitle:"हाई-वॉल्यूम एक्सलेंस के लिए बनाया गया",woHeroDesc:"वेब ऑफ़्सेट प्रिंटिंग बिना रुके प्रोडक्शन के लिए डिज़ाइन किया गया है। हमारे उन्नत मल्टी-कलर रोटरी प्रेस असाधारण गति पर लगातार गुणवत्ता प्रदान करते हैं, जो उन्हें पत्रिकाओं, कैटलॉग, ब्रोशर और प्रचार प्रकाशनों के लिए आदर्श बनाता है।",woHeroDesc2:"हर रोटेशन पॉवर, स्टेबिलिटी और एक्यूरेसी को जोड़ता है, लाखों इंप्रेशन में भी शार्प इमेज और यूनिफॉर्म कलर रिप्रोडक्शन सुनिश्चित करता है।",woPerfTitle:"प्रिंटिंग से आगे की पर्फॉर्मेंस",woPerfDesc:"हमारे वेब ऑफ़्सेट सिस्टम इंटीग्रेटेड इनलाइन फिनिशिंग से लैस हैं, जो एक ही रन में कई प्रक्रियाओं को होने देते हैं। इसका मतलब है तेज़ टर्नअराउंड समय और दोषरहित परिणाम।",woPerfList:["UV और प्रोटेक्टिव वार्निशिंग","पंचिंग और पर्फोरेशन (पोर्ट्रेट और लैंडस्केप)","फोल्डिंग (स्टैंडर्ड से क्रिएटिव फॉर्मेट)","ग्लुइंग और बाइंडिंग प्रेपरेशन","स्पेशल पब्लिकेशन के लिए कस्टम फिनिशिंग सॉल्यूशंस"],woPerfFoot:"यह सीमलेस वर्कफ़लो हमें रेडी-टू-यूज़ प्रिंटेड प्रोडक्ट्स अद्वितीय दक्षता के साथ डिलीवर करने में मदद करता है।",woEnvTitle:"हाई स्पीड। कम पर्यावरणीय प्रभाव।",woEnvDesc:"हमारे वेब ऑफ़्सेट ऑपरेशन ऊर्जा-कुशल और पर्यावरण के प्रति जिम्मेदार होने के लिए इंजीनियर किए गए हैं।",woEnvList:["ऊर्जा खपत","सामग्री अपशिष्ट","प्रोडक्शन डाउनटाइम"],woEnvFoot:"यह हमें 24/7 प्रोडक्शन साइकिल के दौरान भी उच्च उत्पादकता को सस्टेनेबल प्रैक्टिसेज़ के साथ संयोजित करने की अनुमति देता है।",woSusTitle:"सस्टेनेबल फ्यूचर के लिए जिम्मेदार प्रिंटिंग",woSusDesc:"पर्यावरण देखभाल हमारी प्रक्रिया के हर चरण में बनाई गई है।",woSusList:["लो-एनर्जी ड्राइंग टेक्नोलॉजी","अल्कोहल-फ्री प्रिंटिंग प्रोसेस","हानिकारक वाष्पशील सॉल्वैंट्स से बचाव","इको-फ्रेंडली इंक्स और उपभोग्य सामग्रियों का उपयोग","सख्त पेपर वेस्ट सेग्रीगेशन और रिसाइक्लिंग"],woSusFoot:"सभी पेपर वेस्ट को सावधानीपूर्वक एकत्र किया जाता है और पुन: उपयोग के लिए निर्माताओं को लौटाया जाता है — एक क्लोज्ड-लूप रिसाइक्लिंग सिस्टम का समर्थन करता है।",visit:"हमारा प्रेस देखें",locationEyebrow:"हमें ढूंढें",locationTitle:"हमारा",locationTitleEm:"प्रेस",locationDesc:"हमारी मशीनों को व्यक्तिगत रूप से देखने आएं। हम प्रकाशकों, लेखकों और व्यवसायों का लाइव प्रदर्शन के लिए स्वागत करते हैं।",locationAddressLabel:"पता",locationAddress:"स्ट्रीट नंबर 2, जुल्फे बंगाल, दिलशाद गार्डन, दिल्ली – 110095",locationCopyAddress:"पता कॉपी करें",locationCopied:"कॉपी हो गया!",locationHoursLabel:"कार्य के घंटे",locationHoursMonSun:"सोमवार – रविवार",locationHoursTime:"सुबह 10:00 – शाम 6:00",locationTuesday:"मंगलवार",locationClosed:"बंद",locationGetDirections:"दिशा-निर्देश प्राप्त करें",locationOpenInMaps:"गूगल मैप्स में खोलें",signIn:"साइन इन",signInTitle:"वापस स्वागत है",register:"रजिस्टर",registerTitle:"खाता बनाएँ",emailLabel:"ईमेल",passwordLabel:"पासवर्ड",firstNameLabel:"पहला नाम",lastNameLabel:"अंतिम नाम",continueWithGoogle:"गूगल के साथ जारी रखें",processing:"प्रोसेसिंग...",forgotPassword:"पासवर्ड भूल गए?",noAccount:"खाता नहीं है?",haveAccount:"पहले से ही खाता है?",footerTagline:"1995 से दिल्ली के प्रकाशकों द्वारा विश्वसनीय - दिलशाद गार्डन",copyright:"© बीके ऑफसेट प्रिंटिंग। सर्वाधिकार सुरक्षित।"}},zm="+91-9560959039",Fm="https://wa.me/919560959039",Um=50,_u={THEME:"bk_theme",USER:"bk_user",LANG:"bk_lang"},Bm=["https://imgs.search.brave.com/d-BxVJB0AVwv7mytORTSGUxHpqMjhHtXeMTPvJqZIPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvODB6X0hUbVRs/ZDQvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/HXs3SA9y5tqE3-KGyiE53BmUGqKZaxqNbzgADA568tU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQy0xaEdEd21a/WEkvaHFkZWZhdWx0/LmpwZw","https://imgs.search.brave.com/8sgKubUmPoPQfFSODo5PPaOi7AUVqGw_TIS14-PxwQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVz/cy1wcmludGluZy1w/cmludHNob3Atb2Zm/c2V0LTE2OTMxMzI2/LmpwZw","https://imgs.search.brave.com/prJNhXtQjZFHiNNQsg6lEPcAheXrDNlY1szXvRBQlCo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/Mjc3MDY5L3Bob3Rv/L29mZnNldC1wcmlu/dGluZy1tYWNoaW5l/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10aHF3cWl2ellU/SEtCdzBxYzgtODBM/UFVvX1AxVHlaMExq/bHQ0RDlhdm0wPQ","https://imgs.search.brave.com/GT4miD1XayG3oiBz9XsPpJ26JFAv4R1pj4j1e_8rwt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODg1OTczL3Bob3Rv/L3BvbHlncmFwaGlj/LXByb2Nlc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVp0/NVE3VnpGREJwX1Nj/Z0d5ZVRRTHprRFNO/MUJ1aS1xaV96eW9N/dzl2TEk9","https://imgs.search.brave.com/W3t3GjUQl9eULJkzTE2O694CXodPY8Jn1OZCXSBBGNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/ODI1NjM0My9waG90/by9wYXBlci10cmlt/bWluZy1vbi1hLWd1/aWxsb3RpbmUtcHJp/bnRpbmctaG91c2Ut/Y3V0dGVyLWZvci1j/dXR0aW5nLXBhcGVy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0tZlBQRmZpLXBH/Nnp1Q2lyTUxwcUxD/UkdFQV91NE1sNTZu/UXUtTVlRcTRBPQ","https://imgs.search.brave.com/3zVRqhp8m_8bPZQUGAFEZ8pl7YQlHdzqJmMLi0g1SzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFjaGluZXNlZWtl/ci5jb20vZGF0YS9s/aXN0aW5nL2ltZy92/Z2EvbXMvNTEvNTYv/MjEwNzgyMTItMDgu/anBnP3Y9MTc2OTUw/NDA5NA","https://imgs.search.brave.com/jIEpK8ZUTWenoD4ppVVn1tb3GOdOfbNmJ50jcNh10QQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/OTE0OTM4L3Bob3Rv/L2hlYXZ5LWR1dHkt/cGFwZXItZ3VpbGxv/dGluZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9cV82YWEt/djlqQkFYWGdKekNx/bGRrbWkzaFZUSW5m/X1l6MUd2R01EN0E3/WT0"];function Hm(){const[t,e]=_.useState(()=>sessionStorage.getItem(_u.THEME)||"dark"),n=()=>{const r=t==="light"?"dark":"light";e(r),sessionStorage.setItem(_u.THEME,r)};return _.useEffect(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),{theme:t,toggleTheme:n,isDark:t==="light"}}const Cp=_.createContext();function Wm({children:t}){const e=Hm();return l.jsx(Cp.Provider,{value:e,children:t})}function Eu(){return _.useContext(Cp)}/**
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
 */const Pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$m=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=o>>2,h=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;c||(y=64,s||(m=64)),r.push(n[d],n[h],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$m(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw new Vm;const m=o<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ym=function(t){const e=Pp(t);return Np.encodeByteArray(e,!0)},Rp=function(t){return Ym(t).replace(/\./g,"")},Ap=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Km=()=>Gm().__FIREBASE_DEFAULTS__,Xm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return Km()||Xm()||qm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jp=()=>{var t;return(t=ql())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=ql())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Zm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function e1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n1(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r1(){try{return typeof indexedDB=="object"}catch{return!1}}function i1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const o1="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o1,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?s1(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new nn(i,a,r)}}function s1(t,e){return t.replace(a1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const a1=/\{\$([^}]+)}/g;function l1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Tu(o)&&Tu(s)){if(!Po(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tu(t){return t!==null&&typeof t=="object"}/**
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
 */function pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Cr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function c1(t,e){const n=new u1(t,e);return n.subscribe.bind(n)}class u1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bs),i.error===void 0&&(i.error=Bs),i.complete===void 0&&(i.complete=Bs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sn="[DEFAULT]";/**
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
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h1(e))try{this.getOrInitializeService({instanceIdentifier:sn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sn){return this.instances.has(e)}getOptions(e=sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sn){return this.component?this.component.multipleInstances?e:sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(t){return t===sn?void 0:t}function h1(t){return t.instantiationMode==="EAGER"}/**
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
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const m1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},y1=Y.INFO,v1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},x1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=v1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lp{constructor(e){this.name=e,this._logLevel=y1,this._logHandler=x1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?m1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const w1=(t,e)=>e.some(n=>t instanceof n);let Iu,Cu;function b1(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k1(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mp=new WeakMap,Ga=new WeakMap,Dp=new WeakMap,Hs=new WeakMap,Ql=new WeakMap;function S1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Xt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Mp.set(n,t)}).catch(()=>{}),Ql.set(e,t),e}function _1(t){if(Ga.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Ga.set(t,e)}let Ka={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E1(t){Ka=t(Ka)}function T1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ws(this),e,...n);return Dp.set(r,e.sort?e.sort():[e]),Xt(r)}:k1().includes(t)?function(...e){return t.apply(Ws(this),e),Xt(Mp.get(this))}:function(...e){return Xt(t.apply(Ws(this),e))}}function I1(t){return typeof t=="function"?T1(t):(t instanceof IDBTransaction&&_1(t),w1(t,b1())?new Proxy(t,Ka):t)}function Xt(t){if(t instanceof IDBRequest)return S1(t);if(Hs.has(t))return Hs.get(t);const e=I1(t);return e!==t&&(Hs.set(t,e),Ql.set(e,t)),e}const Ws=t=>Ql.get(t);function C1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Xt(s);return r&&s.addEventListener("upgradeneeded",c=>{r(Xt(s.result),c.oldVersion,c.newVersion,Xt(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const P1=["get","getKey","getAll","getAllKeys","count"],N1=["put","add","delete","clear"],$s=new Map;function Pu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($s.get(e))return $s.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=N1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||P1.includes(n)))return;const o=async function(s,...a){const c=this.transaction(s,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return $s.set(e,o),o}E1(t=>({...t,get:(e,n,r)=>Pu(e,n)||t.get(e,n,r),has:(e,n)=>!!Pu(e,n)||t.has(e,n)}));/**
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
 */class R1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Nu="0.9.27";/**
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
 */const wn=new Lp("@firebase/app"),j1="@firebase/app-compat",O1="@firebase/analytics-compat",L1="@firebase/analytics",M1="@firebase/app-check-compat",D1="@firebase/app-check",z1="@firebase/auth",F1="@firebase/auth-compat",U1="@firebase/database",B1="@firebase/database-compat",H1="@firebase/functions",W1="@firebase/functions-compat",$1="@firebase/installations",V1="@firebase/installations-compat",Y1="@firebase/messaging",G1="@firebase/messaging-compat",K1="@firebase/performance",X1="@firebase/performance-compat",q1="@firebase/remote-config",Q1="@firebase/remote-config-compat",Z1="@firebase/storage",J1="@firebase/storage-compat",ey="@firebase/firestore",ty="@firebase/firestore-compat",ny="firebase",ry="10.8.0";/**
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
 */const qa="[DEFAULT]",iy={[Xa]:"fire-core",[j1]:"fire-core-compat",[L1]:"fire-analytics",[O1]:"fire-analytics-compat",[D1]:"fire-app-check",[M1]:"fire-app-check-compat",[z1]:"fire-auth",[F1]:"fire-auth-compat",[U1]:"fire-rtdb",[B1]:"fire-rtdb-compat",[H1]:"fire-fn",[W1]:"fire-fn-compat",[$1]:"fire-iid",[V1]:"fire-iid-compat",[Y1]:"fire-fcm",[G1]:"fire-fcm-compat",[K1]:"fire-perf",[X1]:"fire-perf-compat",[q1]:"fire-rc",[Q1]:"fire-rc-compat",[Z1]:"fire-gcs",[J1]:"fire-gcs-compat",[ey]:"fire-fst",[ty]:"fire-fst-compat","fire-js":"fire-js",[ny]:"fire-js-all"};/**
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
 */const No=new Map,Qa=new Map;function oy(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ri(t){const e=t.name;if(Qa.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,t);for(const n of No.values())oy(n,t);return!0}function zp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new fi("app","Firebase",sy);/**
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
 */class ay{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=ry;function Fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=jp()),!n)throw qt.create("no-options");const o=No.get(i);if(o){if(Po(n,o.options)&&Po(r,o.config))return o;throw qt.create("duplicate-app",{appName:i})}const s=new g1(i);for(const c of Qa.values())s.addComponent(c);const a=new ay(n,r,s);return No.set(i,a),a}function ly(t=qa){const e=No.get(t);if(!e&&t===qa&&jp())return Fp();if(!e)throw qt.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=iy[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(a.join(" "));return}ri(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cy="firebase-heartbeat-database",uy=1,ii="firebase-heartbeat-store";let Vs=null;function Up(){return Vs||(Vs=C1(cy,uy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function dy(t){try{const n=(await Up()).transaction(ii),r=await n.objectStore(ii).get(Bp(t));return await n.done,r}catch(e){if(e instanceof nn)wn.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Ru(t,e){try{const r=(await Up()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,Bp(t)),await r.done}catch(n){if(n instanceof nn)wn.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Bp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fy=1024,py=30*24*60*60*1e3;class hy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new my(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Au();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=py}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Au(),{heartbeatsToSend:r,unsentEntries:i}=gy(this._heartbeatsCache.heartbeats),o=Rp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Au(){return new Date().toISOString().substring(0,10)}function gy(t,e=fy){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ju(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ju(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class my{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return r1()?i1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ju(t){return Rp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function yy(t){ri(new ir("platform-logger",e=>new R1(e),"PRIVATE")),ri(new ir("heartbeat",e=>new hy(e),"PRIVATE")),Gn(Xa,Nu,t),Gn(Xa,Nu,"esm2017"),Gn("fire-js","")}yy("");var vy="firebase",xy="10.8.0";/**
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
 */Gn(vy,xy,"app");function Zl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wy=Hp,Wp=new fi("auth","Firebase",Hp());/**
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
 */const Ro=new Lp("@firebase/auth");function by(t,...e){Ro.logLevel<=Y.WARN&&Ro.warn(`Auth (${hi}): ${t}`,...e)}function eo(t,...e){Ro.logLevel<=Y.ERROR&&Ro.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw Jl(t,...e)}function ct(t,...e){return Jl(t,...e)}function $p(t,e,n){const r=Object.assign(Object.assign({},wy()),{[e]:n});return new fi("auth","Firebase",r).create(e,{appName:t.name})}function ky(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ve(t,"argument-error"),$p(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wp.create(t,...e)}function L(t,e,...n){if(!t)throw Jl(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eo(e),new Error(e)}function It(t,e){t||xt(e)}/**
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
 */function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vp(){return Ou()==="http:"||Ou()==="https:"}function Ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||e1()||"connection"in navigator)?navigator.onLine:!0}function _y(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,It(n>e,"Short delay should be less than long delay!"),this.isMobile=Jm()||t1()}get(){return Sy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ec(t,e){It(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ey={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ty=new gi(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nt(t,e,n,r,i={}){return Gp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=pi(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yp.fetch()(Kp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function Gp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ey),e);try{const i=new Cy(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Di(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Di(t,"credential-already-in-use",s);if(c==="EMAIL_EXISTS")throw Di(t,"email-already-in-use",s);if(c==="USER_DISABLED")throw Di(t,"user-disabled",s);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $p(t,d,u);Ve(t,d)}}catch(i){if(i instanceof nn)throw i;Ve(t,"network-request-failed",{message:String(i)})}}async function mi(t,e,n,r,i={}){const o=await nt(t,e,n,r,i);return"mfaPendingCredential"in o&&Ve(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Kp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ec(t.config,i):`${t.config.apiScheme}://${i}`}function Iy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),Ty.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Di(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(t,e,r);return i.customData._tokenResponse=n,i}function Lu(t){return t!==void 0&&t.enterprise!==void 0}class Py{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Iy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ny(t,e){return nt(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
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
 */async function Ry(t,e){return nt(t,"POST","/v1/accounts:delete",e)}async function Ay(t,e){return nt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jy(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),i=tc(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:zr(Ys(i.auth_time)),issuedAtTime:zr(Ys(i.iat)),expirationTime:zr(Ys(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ys(t){return Number(t)*1e3}function tc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ap(n);return i?JSON.parse(i):(eo("Failed to decode base64 JWT payload"),null)}catch(i){return eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Oy(t){const e=tc(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Ly(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ly({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class My{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zr(this.lastLoginAt),this.creationTime=zr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await or(t,Ay(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Fy(o.providerUserInfo):[],a=zy(t.providerData,s),c=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Xp(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Dy(t){const e=Ye(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zy(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fy(t){return t.map(e=>{var{providerId:n}=e,r=Zl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Uy(t,e){const n=await Gp(t,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Kp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function By(t,e){return nt(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Uy(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new oi;return r&&(L(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Rt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new My(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jy(this,e)}reload(){return Dy(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,Ry(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,c,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:x,isAnonymous:S,providerData:I,stsTokenManager:T}=n;L(g&&T,e,"internal-error");const E=oi.fromJSON(this.name,T);L(typeof g=="string",e,"internal-error"),Rt(h,e.name),Rt(m,e.name),L(typeof x=="boolean",e,"internal-error"),L(typeof S=="boolean",e,"internal-error"),Rt(y,e.name),Rt(v,e.name),Rt(w,e.name),Rt(C,e.name),Rt(p,e.name),Rt(f,e.name);const z=new hn({uid:g,auth:e,email:m,emailVerified:x,displayName:h,isAnonymous:S,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:E,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(z.providerData=I.map(M=>Object.assign({},M))),C&&(z._redirectEventId=C),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new oi;i.updateFromServerResponse(n);const o=new hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jo(o),o}}/**
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
 */const Mu=new Map;function wt(t){It(t instanceof Function,"Expected a class definition");let e=Mu.get(t);return e?(It(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mu.set(t,e),e)}/**
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
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qp.type="NONE";const Du=qp;/**
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
 */function to(t,e,n){return`firebase:${t}:${e}:${n}`}class Kn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=to(this.userKey,i.apiKey,o),this.fullPersistenceKey=to("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kn(wt(Du),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||wt(Du);const s=to(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const h=hn._fromJSON(e,d);u!==o&&(a=h),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Kn(o,e,r):(o=c[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Kn(o,e,r))}}/**
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
 */function zu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(th(e))return"Blackberry";if(nh(e))return"Webos";if(nc(e))return"Safari";if((e.includes("chrome/")||Zp(e))&&!e.includes("edge/"))return"Chrome";if(eh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qp(t=be()){return/firefox\//i.test(t)}function nc(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zp(t=be()){return/crios\//i.test(t)}function Jp(t=be()){return/iemobile/i.test(t)}function eh(t=be()){return/android/i.test(t)}function th(t=be()){return/blackberry/i.test(t)}function nh(t=be()){return/webos/i.test(t)}function ts(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hy(t=be()){var e;return ts(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wy(){return n1()&&document.documentMode===10}function rh(t=be()){return ts(t)||eh(t)||nh(t)||th(t)||/windows phone/i.test(t)||Jp(t)}function $y(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ih(t,e=[]){let n;switch(t){case"Browser":n=zu(be());break;case"Worker":n=`${zu(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
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
 */class Vy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const c=e(o);s(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yy(t,e={}){return nt(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
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
 */const Gy=6;class Ky{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Gy,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(s=c.containsNumericCharacter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Xy{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fu(this),this.idTokenSubscription=new Fu(this),this.beforeStateQueue=new Vy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_y()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yy(this),n=new Ky(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await By(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{s=!0,c()}}else{const c=e.addObserver(n);return()=>{s=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ih(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&by(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pt(t){return Ye(t)}class Fu{constructor(e){this.auth=e,this.observer=null,this.addObserver=c1(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ns={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qy(t){ns=t}function oh(t){return ns.loadJS(t)}function Qy(){return ns.recaptchaEnterpriseScript}function Zy(){return ns.gapiScript}function Jy(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ev="recaptcha-enterprise",tv="NO_RECAPTCHA";class nv{constructor(e){this.type=ev,this.auth=Pt(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Ny(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Py(c);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(c=>{a(c)})})}function i(o,s,a){const c=window.grecaptcha;Lu(c)?c.enterprise.ready(()=>{c.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(tv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Lu(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Qy();c.length!==0&&(c+=a),oh(c).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Uu(t,e,n,r=!1){const i=new nv(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Oo(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Uu(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Uu(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function rv(t,e){const n=zp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Po(o,e??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:e})}function iv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ov(t,e,n){const r=Pt(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=sh(e),{host:s,port:a}=sv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||av()}function sh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sv(t){const e=sh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Bu(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Bu(s)}}}function Bu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function av(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}async function lv(t,e){return nt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cv(t,e){return mi(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function ah(t,e){return nt(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function uv(t,e){return ah(t,e)}async function dv(t,e){return ah(t,e)}/**
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
 */async function fv(t,e){return mi(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function pv(t,e){return mi(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
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
 */class si extends rc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new si(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new si(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oo(e,n,"signInWithPassword",cv);case"emailLink":return fv(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oo(e,r,"signUpPassword",lv);case"emailLink":return pv(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xn(t,e){return mi(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
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
 */const hv="http://localhost";class bn extends rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Zl(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new bn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Xn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xn(e,n)}buildRequest(){const e={requestUri:hv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
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
 */function gv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mv(t){const e=Ir(Cr(t)).link,n=e?Ir(Cr(e)).deep_link_id:null,r=Ir(Cr(t)).deep_link_id;return(r?Ir(Cr(r)).link:null)||r||n||e||t}class ic{constructor(e){var n,r,i,o,s,a;const c=Ir(Cr(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gv((i=c.mode)!==null&&i!==void 0?i:null);L(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(o=c.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=c.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mv(e);try{return new ic(n)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(e,n){return si._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ic.parseLink(n);return L(r,"argument-error"),si._fromEmailAndCode(e,r.code,r.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends oc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Mt extends yi{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Dt extends yi{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class zt extends yi{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */async function yv(t,e){return mi(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await hn._fromIdTokenResponse(e,r,i),s=Hu(r);return new kn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hu(r);return new kn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Lo extends nn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lo(e,n,r,i)}}function lh(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,o,e,r):o})}async function vv(t,e,n=!1){const r=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function xv(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await or(t,lh(r,i,e,t),n);L(o.idToken,r,"internal-error");const s=tc(o.idToken);L(s,r,"internal-error");const{sub:a}=s;return L(t.uid===a,r,"user-mismatch"),kn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),o}}/**
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
 */async function ch(t,e,n=!1){const r="signIn",i=await lh(t,r,e),o=await kn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function wv(t,e){return ch(Pt(t),e)}/**
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
 */function uh(t,e,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function dh(t){const e=Pt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bv(t,e,n){const r=Pt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&uh(r,i,n),await Oo(r,i,"getOobCode",dv)}async function kv(t,e,n){const r=Pt(t),s=await Oo(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&dh(t),c}),a=await kn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function Sv(t,e,n){return wv(Ye(t),cr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dh(t),r})}/**
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
 */async function _v(t,e){return nt(t,"POST","/v1/accounts:createAuthUri",dt(t,e))}/**
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
 */async function Ev(t,e){const n=Vp()?Ao():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await _v(Ye(t),r);return i||[]}async function Tv(t,e){const n=Ye(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&uh(n.auth,i,e);const{email:o}=await uv(n.auth,i);o!==t.email&&await t.reload()}/**
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
 */async function Iv(t,e){return nt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Cv(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await or(r,Iv(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Pv(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function Nv(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function Rv(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function sc(t){return Ye(t).signOut()}const Mo="__sak";/**
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
 */class fh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mo,"1"),this.storage.removeItem(Mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Av(){const t=be();return nc(t)||ts(t)}const jv=1e3,Ov=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Av()&&$y(),this.fallbackToPolling=rh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,c)=>{this.notifyListeners(s,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Wy()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ov):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const Lv=ph;/**
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
 */class hh extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hh.type="SESSION";const gh=hh;/**
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
 */function Mv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),c=await Mv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
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
 */function ac(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,c)=>{const u=ac("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ut(){return window}function zv(t){ut().location.href=t}/**
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
 */function mh(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function Fv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bv(){return mh()?self:null}/**
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
 */const yh="firebaseLocalStorageDb",Hv=1,Do="firebaseLocalStorage",vh="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function is(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function Wv(){const t=indexedDB.deleteDatabase(yh);return new vi(t).toPromise()}function Za(){const t=indexedDB.open(yh,Hv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:vh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await Wv(),e(await Za()))})})}async function Wu(t,e,n){const r=is(t,!0).put({[vh]:e,value:n});return new vi(r).toPromise()}async function $v(t,e){const n=is(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function $u(t,e){const n=is(t,!0).delete(e);return new vi(n).toPromise()}const Vv=800,Yv=3;class xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Za(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(Bv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fv(),!this.activeServiceWorker)return;this.sender=new Dv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Za();return await Wu(e,Mo,"1"),await $u(e,Mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$v(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=is(i,!1).getAll();return new vi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xh.type="LOCAL";const Gv=xh;new gi(3e4,6e4);/**
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
 */function wh(t,e){return e?wt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lc extends rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kv(t){return ch(t.auth,new lc(t),t.bypassAuthState)}function Xv(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),xv(n,new lc(t),t.bypassAuthState)}async function qv(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),vv(n,new lc(t),t.bypassAuthState)}/**
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
 */class bh{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kv;case"linkViaPopup":case"linkViaRedirect":return qv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:Ve(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qv=new gi(2e3,1e4);async function Zv(t,e,n){const r=Pt(t);ky(t,e,oc);const i=wh(r,n);return new dn(r,"signInViaPopup",e,i).executeNotNull()}class dn extends bh{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qv.get())};e()}}dn.currentPopupAction=null;/**
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
 */const Jv="pendingRedirect",no=new Map;class ex extends bh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await tx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tx(t,e){const n=ix(e),r=rx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nx(t,e){no.set(t._key(),e)}function rx(t){return wt(t._redirectPersistence)}function ix(t){return to(Jv,t.config.apiKey,t.name)}async function ox(t,e,n=!1){const r=Pt(t),i=wh(r,e),s=await new ex(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const sx=10*60*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vu(e))}saveEventToCache(e){this.cachedEventUids.add(Vu(e)),this.lastProcessedEventTime=Date.now()}}function Vu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kh(t);default:return!1}}/**
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
 */async function cx(t,e={}){return nt(t,"GET","/v1/projects",e)}/**
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
 */const ux=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dx=/^https?/;async function fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cx(t);for(const n of e)try{if(px(n))return}catch{}Ve(t,"unauthorized-domain")}function px(t){const e=Ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!dx.test(n))return!1;if(ux.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hx=new gi(3e4,6e4);function Yu(){const t=ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gx(t){return new Promise((e,n)=>{var r,i,o;function s(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),n(ct(t,"network-request-failed"))},timeout:hx.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ut().gapi)===null||o===void 0)&&o.load)s();else{const a=Jy("iframefcb");return ut()[a]=()=>{gapi.load?s():n(ct(t,"network-request-failed"))},oh(`${Zy()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ro=null,e})}let ro=null;function mx(t){return ro=ro||gx(t),ro}/**
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
 */const yx=new gi(5e3,15e3),vx="__/auth/iframe",xx="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kx(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ec(e,xx):`https://${t.config.authDomain}/${vx}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=bx.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${pi(r).slice(1)}`}async function Sx(t){const e=await mx(t),n=ut().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:kx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ct(t,"network-request-failed"),a=ut().setTimeout(()=>{o(s)},yx.get());function c(){ut().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{o(s)})}))}/**
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
 */const _x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ex=500,Tx=600,Ix="_blank",Cx="http://localhost";class Gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Px(t,e,n,r=Ex,i=Tx){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_x),{width:r.toString(),height:i.toString(),top:o,left:s}),u=be().toLowerCase();n&&(a=Zp(u)?Ix:n),Qp(u)&&(e=e||Cx,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,v])=>`${m}${y}=${v},`,"");if(Hy(u)&&a!=="_self")return Nx(e||"",a),new Gu(null);const h=window.open(e||"",a,d);L(h,t,"popup-blocked");try{h.focus()}catch{}return new Gu(h)}function Nx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rx="__/auth/handler",Ax="emulator/auth/handler",jx=encodeURIComponent("fac");async function Ku(t,e,n,r,i,o){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof oc){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",l1(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(o||{}))s[d]=h}if(e instanceof yi){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${jx}=${encodeURIComponent(c)}`:"";return`${Ox(t)}?${pi(a).slice(1)}${u}`}function Ox({config:t}){return t.emulator?ec(t,Ax):`https://${t.authDomain}/${Rx}`}/**
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
 */const Gs="webStorageSupport";class Lx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=ox,this._overrideRedirectResult=nx}async _openPopup(e,n,r,i){var o;It((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ku(e,n,r,Ao(),i);return Px(e,s,ac())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ku(e,n,r,Ao(),i);return zv(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(It(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sx(e),r=new ax(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gs,{type:Gs},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Gs];s!==void 0&&n(!!s),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rh()||nc()||ts()}}const Mx=Lx;var Xu="@firebase/auth",qu="1.6.0";/**
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
 */class Dx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fx(t){ri(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ih(t)},u=new Xy(r,i,o,c);return iv(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ri(new ir("auth-internal",e=>{const n=Pt(e.getProvider("auth").getImmediate());return(r=>new Dx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(Xu,qu,zx(t)),Gn(Xu,qu,"esm2017")}/**
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
 */const Ux=5*60,Bx=Op("authIdTokenMaxAge")||Ux;let Qu=null;const Hx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bx)return;const i=n==null?void 0:n.token;Qu!==i&&(Qu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wx(t=ly()){const e=zp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rv(t,{popupRedirectResolver:Mx,persistence:[Gv,Lv,gh]}),r=Op("authTokenSyncURL");if(r){const o=Hx(r);Nv(n,o,()=>o(n.currentUser)),Pv(n,s=>o(s))}const i=Qm("auth");return i&&ov(n,`http://${i}`),n}function $x(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ct("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",$x().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fx("Browser");const Vx={apiKey:"AIzaSyBbXyOl7nwTFEYUCA2YB3GzOiFKKC-WSXY",authDomain:"bk-offset-printing.firebaseapp.com",projectId:"bk-offset-printing",storageBucket:"bk-offset-printing.firebasestorage.app",messagingSenderId:"955887834418",appId:"1:955887834418:web:b92cd82ec5f57ecd43732b"},Yx=Fp(Vx),kt=Wx(Yx),Gx=new mt;console.log("✅ Firebase initialized with environment variables");const Kx=async()=>{try{const t=await Zv(kt,Gx);return console.log("✅ Google sign in successful:",t.user.email),{user:t.user,error:null}}catch(t){console.error("❌ Error:",t.code,t.message);let e="Sign-in failed";return t.code==="auth/popup-closed-by-user"?e="Popup closed":t.code==="auth/popup-blocked"&&(e="Popup blocked"),{user:null,error:e}}},Xx=async(t,e,n,r)=>{try{if((await Ev(kt,t)).length>0)return{user:null,error:"Email already registered"};const o=await kv(kt,t,e);return await Cv(o.user,{displayName:`${n} ${r}`}),await Tv(o.user),await sc(kt),{user:null,error:null}}catch(i){return{user:null,error:i.message}}},qx=async(t,e)=>{try{const n=await Sv(kt,t,e);return n.user.emailVerified?{user:n.user,error:null}:(await sc(kt),{user:null,error:"Please verify your email first"})}catch{return{user:null,error:"Invalid email or password"}}},Qx=async t=>{try{return await bv(kt,t),{error:null}}catch(e){return{error:e.message}}},Zx=async()=>{try{return await sc(kt),{error:null}}catch(t){return{error:t.message}}},Jx=t=>Rv(kt,t),Sh=_.createContext(),os=()=>_.useContext(Sh),e2=({children:t})=>{const[e,n]=_.useState(null),[r,i]=_.useState(!0);_.useEffect(()=>Jx(h=>{var m,y;n(h?{uid:h.uid,email:h.email,firstName:((m=h.displayName)==null?void 0:m.split(" ")[0])||"User",lastName:((y=h.displayName)==null?void 0:y.split(" ").slice(1).join(" "))||"",emailVerified:h.emailVerified,isAuthenticated:!0}:null),i(!1)}),[]);const o=async()=>{const{error:d}=await Kx();return{error:d}},s=async(d,h)=>{const{error:m}=await qx(d,h);return{error:m}},a=async(d,h,m,y)=>{const{error:v}=await Xx(d,h,m,y);return{error:v}},c=async d=>{const{error:h}=await Qx(d);return{error:h}},u=async()=>{await Zx()};return l.jsx(Sh.Provider,{value:{user:e,loginWithGoogle:o,loginWithEmail:s,registerWithEmail:a,resetPassword:c,logout:u,loading:r,isAuthenticated:!!e},children:!r&&t})};var t2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r2=(t,e)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...c},u)=>_.createElement("svg",{ref:u,...t2,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${n2(t)}`,...c},[...e.map(([d,h])=>_.createElement(d,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n};var W=r2;const Ja=W("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Fr=W("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),i2=W("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),o2=W("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),s2=W("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),_h=W("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),a2=W("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Zu=W("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]),Eh=W("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),Ju=W("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),l2=W("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Th=W("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),Ih=W("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),c2=W("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),u2=W("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),d2=W("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),el=W("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),f2=W("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Ch=W("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),ed=W("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),p2=W("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]),Ph=W("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),h2=W("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),Nh=W("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),kr=W("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),td=W("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),g2=W("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),m2=W("UserCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]),cc=W("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ss=W("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Rh=W("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),an=W("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ah="/bk-offset/assets/BK_logo_png-baab523e.png",y2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .nb-root {
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Top accent bar ── */
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

  /* ── Logo hover ── */
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

  /* ── Icon button ── */
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

  /* ── Sign In button ── */
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

  /* ── Avatar pill ── */
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

  /* ── Dropdown ── */
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

  /* ── Divider in dropdown ── */
  .nb-sep {
    height: 1px;
    margin: 5px 8px;
  }

  /* ── Scrolled glow ── */
  .nb-scrolled-shadow {
    box-shadow: 0 1px 0 rgba(255,255,255,0.06),
                0 8px 32px rgba(0,0,0,0.18);
  }
`;function v2({isDark:t,toggleTheme:e,lang:n,toggleLang:r,text:i,onAuthClick:o,scrolled:s}){var T,E,z,M;const{user:a,logout:c,isAuthenticated:u}=os(),[d,h]=_.useState(!1),[m,y]=_.useState(!1),v=()=>{h(!1),y(!1),c()},w=()=>{window.scrollTo({top:0,behavior:"smooth"}),h(!1),y(!1)},C=t?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)",p=t?"rgba(255,255,255,0.92)":"#0f172a",f=t?"rgba(255,255,255,0.45)":"#64748b",g=t?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.045)",x=t?"#0f172a":"#ffffff",S=t?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",I=t?"0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)":"0 16px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:y2}),l.jsxs("nav",{className:`nb-root${s?" nb-scrolled-shadow":""}`,style:{position:"sticky",top:0,zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 28px",height:60,background:t?"rgba(2,6,23,0.92)":"rgba(255,255,255,0.92)",backdropFilter:"blur(18px) saturate(1.5)",WebkitBackdropFilter:"blur(18px) saturate(1.5)",borderBottom:`1px solid ${s?C:"transparent"}`,transition:"background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease"},children:[l.jsxs("div",{className:"nb-logo",onClick:w,role:"button",tabIndex:0,onKeyDown:O=>O.key==="Enter"&&w(),children:[l.jsx("img",{className:"nb-logo-img",src:Ah,alt:"BK Offset",onError:O=>{O.target.style.display="none"}}),l.jsxs("div",{children:[l.jsx("div",{className:"nb-brand-name",style:{color:p},children:"BK Offset"}),l.jsx("div",{className:"nb-brand-sub",style:{color:f},children:"Printing Press"})]})]}),l.jsx("div",{style:{display:"flex",alignItems:"center",gap:6},children:u?l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs("button",{className:"nb-avatar-pill",onClick:()=>{h(!d),y(!1)},style:{border:`1px solid ${d?"rgba(14,165,233,0.40)":C}`,background:d?g:"transparent",color:p},children:[l.jsx("div",{className:"nb-avatar-ring",children:((E=(T=a==null?void 0:a.firstName)==null?void 0:T.charAt(0))==null?void 0:E.toUpperCase())||"U"}),l.jsx("span",{className:"nb-avatar-name",style:{color:p},children:(a==null?void 0:a.firstName)||"User"}),l.jsx(s2,{size:13,strokeWidth:2,style:{color:f,transform:d?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.25s ease"}})]}),d&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>h(!1)}),l.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:I},children:[l.jsx("div",{style:{padding:"14px 16px 12px",borderBottom:`1px solid ${S}`},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[l.jsx("div",{className:"nb-avatar-ring",style:{width:34,height:34,fontSize:13},children:((M=(z=a==null?void 0:a.firstName)==null?void 0:z.charAt(0))==null?void 0:M.toUpperCase())||"U"}),l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:13.5,fontWeight:600,color:p,lineHeight:1.2},children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),l.jsx("div",{style:{fontSize:11,color:f,marginTop:2},children:a==null?void 0:a.email})]})]})}),l.jsx("div",{style:{padding:"6px 6px"},children:l.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:O=>{O.currentTarget.style.background=g},onMouseLeave:O=>{O.currentTarget.style.background="none"},onClick:()=>h(!1),children:[l.jsx(m2,{size:16,strokeWidth:1.75,color:"#0ea5e9"}),"View Profile"]})})]})]})]}),l.jsx("div",{style:{width:1,height:22,background:C,margin:"0 2px"}}),l.jsxs("div",{style:{position:"relative"},children:[l.jsx("button",{className:"nb-icon-btn",onClick:()=>{y(!m),h(!1)},style:{color:m?p:f,border:`1px solid ${m?"rgba(14,165,233,0.40)":C}`,background:m?g:"transparent"},children:m?l.jsx(ss,{size:17,strokeWidth:2}):l.jsx(f2,{size:17,strokeWidth:2})}),m&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1999},onClick:()=>y(!1)}),l.jsxs("div",{className:"nb-dropdown",style:{background:x,border:`1px solid ${S}`,boxShadow:I,padding:"6px 6px"},children:[l.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:O=>{O.currentTarget.style.background=g},onMouseLeave:O=>{O.currentTarget.style.background="none"},onClick:()=>{r(),y(!1)},children:[l.jsx(Ju,{size:15,strokeWidth:1.75,color:"#0ea5e9"}),n==="en"?"हिंदी में बदलें":"Switch to English"]}),l.jsxs("button",{className:"nb-dropdown-btn",style:{color:p},onMouseEnter:O=>{O.currentTarget.style.background=g},onMouseLeave:O=>{O.currentTarget.style.background="none"},onClick:()=>{e(),y(!1)},children:[t?l.jsx(td,{size:15,strokeWidth:1.75,color:"#f59e0b"}):l.jsx(ed,{size:15,strokeWidth:1.75,color:"#6366f1"}),t?"Light Mode":"Dark Mode"]}),l.jsx("div",{className:"nb-sep",style:{background:S}}),l.jsxs("button",{className:"nb-dropdown-btn",style:{color:"#ef4444"},onMouseEnter:O=>{O.currentTarget.style.background="rgba(239,68,68,0.07)"},onMouseLeave:O=>{O.currentTarget.style.background="none"},onClick:v,children:[l.jsx(u2,{size:15,strokeWidth:1.75,color:"#ef4444"}),"Logout"]})]})]})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("button",{className:"nb-icon-btn",onClick:r,title:n==="en"?"हिंदी में बदलें":"Switch to English",style:{color:f,border:`1px solid ${C}`},onMouseEnter:O=>{O.currentTarget.style.background=g,O.currentTarget.style.color=p},onMouseLeave:O=>{O.currentTarget.style.background="transparent",O.currentTarget.style.color=f},children:l.jsx(Ju,{size:16,strokeWidth:1.75})}),l.jsx("button",{className:"nb-icon-btn",onClick:e,title:t?"Light mode":"Dark mode",style:{color:f,border:`1px solid ${C}`},onMouseEnter:O=>{O.currentTarget.style.background=g,O.currentTarget.style.color=p},onMouseLeave:O=>{O.currentTarget.style.background="transparent",O.currentTarget.style.color=f},children:t?l.jsx(td,{size:16,strokeWidth:1.75}):l.jsx(ed,{size:16,strokeWidth:1.75})}),l.jsx("div",{style:{width:1,height:22,background:C,margin:"0 4px"}}),l.jsxs("button",{className:"nb-signin",onClick:o,children:[l.jsx(cc,{size:14,strokeWidth:2}),"Sign In"]})]})})]})]})}const x2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  .ft-root {
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  /* Background grid texture */
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

  /* Top gradient vignette over the grid */
  .ft-root::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 120px;
    background: linear-gradient(to bottom, #020617, transparent);
    pointer-events: none;
  }

  /* ── Brand block ── */
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

  /* ── Section heading ── */
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

  /* ── Info row (address / hours) ── */
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

  /* ── Social icon ── */
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

  /* ── Contact link ── */
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

  /* ── Gradient top border ── */
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

  /* ── Bottom bar ── */
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

  /* ── Grad dot accent ── */
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
`,w2=[{key:"fb",href:"https://facebook.com",Icon:Eh,hover:"#1877F2",label:"Facebook"},{key:"ig",href:"https://instagram.com",Icon:Th,hover:"#E4405F",label:"Instagram"},{key:"yt",href:"https://youtube.com/@b.k.offset?si=wwfxLPk27TfOcPa_",Icon:Rh,hover:"#FF0000",label:"YouTube"}];function b2({isDark:t,isMobile:e}){const{isAuthenticated:n}=os(),[r,i]=_.useState(null),o=new Date().getFullYear();return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:x2}),l.jsx("div",{className:"ft-top-border"}),l.jsx("footer",{className:"ft-root",style:{background:"#020617",color:"#cbd5e1",padding:e?"56px 22px 28px":"72px 48px 32px"},children:l.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto"},children:[l.jsxs("div",{style:{display:"grid",gridTemplateColumns:e?"1fr":"1.6fr 1fr 1fr",gap:e?44:56,marginBottom:e?40:56,alignItems:"start"},children:[l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:18},children:[l.jsx("img",{className:"ft-logo-img",src:Ah,alt:"BK Offset",onError:s=>{s.target.style.display="none"}}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-brand-name",children:"BK Offset"}),l.jsx("div",{className:"ft-brand-tagline",children:"Printing Press · Since 1995"})]})]}),l.jsx("p",{style:{fontSize:13.5,lineHeight:1.75,color:"rgba(255,255,255,0.38)",maxWidth:280,marginBottom:22},children:"Delhi's trusted name for bulk book printing and premium lamination services — quality you can feel, precision you can count on."}),l.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:w2.map(({key:s,href:a,Icon:c,hover:u,label:d})=>l.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":d,className:"ft-social-btn",style:{background:r===s?`${u}22`:"rgba(255,255,255,0.06)",borderColor:r===s?`${u}55`:"rgba(255,255,255,0.09)",color:r===s?u:"rgba(255,255,255,0.45)",boxShadow:r===s?`0 6px 18px ${u}33`:"none"},onMouseEnter:()=>i(s),onMouseLeave:()=>i(null),children:l.jsx(c,{size:16,strokeWidth:1.75})},s))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-section-head",children:"Contact"}),n?l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsxs("a",{href:"tel:+919560959039",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(14,165,233,0.12)"},children:l.jsx(Ph,{size:14,strokeWidth:1.75,color:"#0ea5e9"})}),"+91 95609 59039",l.jsx(Fr,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),l.jsxs("a",{href:"https://wa.me/919560959039",target:"_blank",rel:"noopener noreferrer",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(37,211,102,0.12)"},children:l.jsx(Ch,{size:14,strokeWidth:1.75,color:"#25d366"})}),"WhatsApp",l.jsx(Fr,{size:12,style:{marginLeft:"auto",opacity:.4}})]}),l.jsxs("a",{href:"mailto:rinkusharmarinku54@gmail.com",className:"ft-contact-link",children:[l.jsx("div",{className:"ft-contact-link-icon",style:{background:"rgba(99,102,241,0.12)"},children:l.jsx(d2,{size:14,strokeWidth:1.75,color:"#6366f1"})}),"Email us",l.jsx(Fr,{size:12,style:{marginLeft:"auto",opacity:.4}})]})]}):l.jsx("p",{style:{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.65},children:"Sign in to view contact details and get in touch with our team."})]}),l.jsxs("div",{children:[l.jsx("div",{className:"ft-section-head",children:"Find Us"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[l.jsxs("div",{className:"ft-info-row",children:[l.jsx(el,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#0ea5e9",style:{marginTop:3}}),l.jsxs("span",{children:["Street No. 2, Zulfe Bengal",l.jsx("br",{}),"Dilshad Garden, Delhi — 110095"]})]}),l.jsxs("div",{className:"ft-info-row",children:[l.jsx(_h,{size:14,strokeWidth:1.75,className:"ft-info-icon",color:"#6366f1",style:{marginTop:3}}),l.jsxs("span",{children:["Mon – Sun: 9:00 AM – 7:00 PM",l.jsx("br",{}),"Tuesday: Closed"]})]})]})]})]}),l.jsxs("div",{className:"ft-bottom",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"ft-copyright",children:["© ",o," BK Offset Printing. All Rights Reserved."]}),l.jsxs("div",{className:"ft-made-with",style:{marginTop:4},children:[l.jsx("span",{className:"ft-dot"}),"Premium printing, Delhi"]})]}),l.jsxs("div",{className:"ft-legal-notice",children:[l.jsxs("p",{children:["© ",o," Keshav Sharma. All Rights Reserved."]}),l.jsx("p",{children:"Unauthorized commercial use or brand impersonation is strictly prohibited."}),l.jsx("p",{style:{fontSize:"10px",opacity:.5,marginTop:6},children:"License: CC BY-NC 4.0 — Credit required, no commercial use allowed."})]})]})]})})]})}function k2({isDark:t,isAuthenticated:e,windowWidth:n}){const[r,i]=_.useState(null),o=Ip(t),s=n<420,a=s?40:46,c=s?"12px":"20px",u=[{icon:l.jsx(Rh,{size:18}),href:"https://youtube.com/@b.k.offset?si=8VAlAdQKIGciGQ8d",label:"YouTube",color:"#FF0000"},{icon:l.jsx(Th,{size:18}),href:"https://instagram.com",label:"Instagram",color:"#d640e4"},{icon:l.jsx(Eh,{size:18}),href:"https://facebook.com",label:"Facebook",color:"#1877F2"}];return l.jsx("div",{style:{position:"fixed",bottom:"calc(12px + env(safe-area-inset-bottom, 0px))",right:c,display:"flex",flexDirection:"column",gap:s?"8px":"10px",zIndex:1100,pointerEvents:"auto"},children:u.map((d,h)=>l.jsxs("a",{href:d.href,target:"_blank",rel:"noopener noreferrer","aria-label":d.label,onMouseEnter:()=>i(d.label),onMouseLeave:()=>i(null),style:{width:a+"px",height:a+"px",borderRadius:"50%",background:r===d.label?d.color:o.surf,color:r===d.label?"#fff":o.textMid,display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",border:"1px solid "+(r===d.label?"transparent":o.border),boxShadow:r===d.label?"0 6px 20px "+d.color+"80":ce.shadowSm,transform:r===d.label?"translateY(-3px) scale(1.08)":"scale(1)",transition:"all 0.25s cubic-bezier(.4,0,.2,1)",position:"relative",animation:"floatIn 0.5s ease-out "+h*.1+"s backwards"},children:[d.icon,!s&&l.jsxs("span",{style:{position:"absolute",right:"calc(100% + 10px)",top:"50%",transform:"translateY(-50%)",background:t?"#1e293b":"#0f172a",color:"#fff",padding:"5px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:600,whiteSpace:"nowrap",opacity:r===d.label?1:0,pointerEvents:"none",transition:"opacity 0.2s",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:[d.label,l.jsx("span",{style:{position:"absolute",left:"100%",top:"50%",transform:"translateY(-50%)",borderLeft:"5px solid "+(t?"#1e293b":"#0f172a"),borderTop:"5px solid transparent",borderBottom:"5px solid transparent"}})]})]},d.label))})}function S2({title:t,description:e,keywords:n}){return l.jsxs(Mm,{children:[l.jsxs("title",{children:[t," | BK Offset Printing"]}),l.jsx("meta",{name:"description",content:e}),l.jsx("meta",{name:"keywords",content:n}),l.jsx("meta",{property:"og:title",content:t}),l.jsx("meta",{property:"og:description",content:e}),l.jsx("meta",{property:"og:url",content:"https://thanozs.github.io/bk-offset/"}),l.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),l.jsx("link",{rel:"canonical",href:"https://thanozs.github.io/bk-offset/"})]})}function _2({isDark:t,count:e=50}){return _.useMemo(()=>Array.from({length:e},(n,r)=>({id:r,size:Math.random()*4+2,left:`${Math.random()*100}%`,animationDuration:`${Math.random()*20+15}s`,animationDelay:`${Math.random()*5}s`,opacity:Math.random()*.3+.1})),[e]),l.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0}})}function as(t={threshold:.1,rootMargin:"0px 0px -100px 0px"}){const e=_.useRef(null),[n,r]=_.useState(!1);return _.useEffect(()=>{const i=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},t);return e.current&&i.observe(e.current),()=>{e.current&&i.unobserve(e.current)}},[t]),[e,n]}const E2=`
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

  /* ── Eyebrow badge ── */
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

  /* ── Headline ── */
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

  /* ── Sub text ── */
  .hero-sub {
    font-family: 'DM Sans', sans-serif;
    line-height: 1.75;
  }

  /* ── Stat strip ── */
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

  /* ── CTA buttons ── */
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
  /* Shimmer sweep */
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

  /* ── Learn More Modal ── */
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

  /* ── Orbs ── */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }

  /* ── Scan line (subtle) ── */
  .hero-scan {
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg,transparent,rgba(14,165,233,0.20),transparent);
    animation: hero-scanline 10s linear infinite;
    pointer-events: none;
    z-index: 1;
  }

  /* ── Trust badge row ── */
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
`,T2=[{target:30,suffix:"+",label:"Years Active"},{target:50,suffix:"K+",label:"Books Printed"},{target:500,suffix:"+",label:"Happy Clients"}];function I2({text:t,isDark:e,c:n,isAuth:r,isMobile:i,setShowAuth:o}){const[s,a]=as(),[c,u]=_.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:E2}),l.jsxs("section",{ref:s,style:{position:"relative",overflow:"hidden",minHeight:i?"100svh":"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:i?"100px 20px 60px":"120px 40px 80px",textAlign:"center",background:"transparent"},children:[l.jsx("div",{className:"hero-orb",style:{width:i?300:600,height:i?300:600,top:i?"-100px":"-200px",left:"10%",background:e?"radial-gradient(circle,rgba(14,165,233,0.18) 0%,transparent 70%)":"radial-gradient(circle,rgba(14,165,233,0.14) 0%,transparent 70%)",animation:"hero-orb1 14s ease-in-out infinite",zIndex:0}}),l.jsx("div",{className:"hero-orb",style:{width:i?250:500,height:i?250:500,bottom:i?"-50px":"-100px",right:"5%",background:e?"radial-gradient(circle,rgba(99,102,241,0.16) 0%,transparent 70%)":"radial-gradient(circle,rgba(99,102,241,0.11) 0%,transparent 70%)",animation:"hero-orb2 18s ease-in-out infinite",zIndex:0}}),l.jsx("div",{className:"hero-orb",style:{width:i?180:320,height:i?180:320,top:"35%",right:i?"5%":"20%",background:e?"radial-gradient(circle,rgba(56,189,248,0.10) 0%,transparent 70%)":"radial-gradient(circle,rgba(56,189,248,0.08) 0%,transparent 70%)",animation:"hero-orb3 11s ease-in-out infinite",zIndex:0}}),l.jsx("div",{className:"hero-scan"}),l.jsx(_2,{isDark:e,count:i?20:35}),l.jsxs("div",{style:{position:"relative",zIndex:2,width:"100%",maxWidth:820},children:[l.jsxs("div",{className:"hero-badge",style:{background:e?"rgba(14,165,233,0.12)":"rgba(14,165,233,0.10)",border:`1px solid ${e?"rgba(14,165,233,0.30)":"rgba(14,165,233,0.25)"}`,color:"#38bdf8",marginBottom:24},children:[l.jsx(Nh,{size:13,strokeWidth:2}),"Premium Printing Services"]}),l.jsxs("h1",{className:"hero-h1",style:{fontSize:i?"38px":"clamp(44px,6.5vw,76px)",color:e?"#f1f5f9":"#0f172a",marginBottom:20,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.08s both":"none"},children:[t.heroTitle,l.jsx("br",{}),l.jsx("span",{className:"hero-grad-word",children:t.heroTitle2})]}),l.jsx("p",{className:"hero-sub",style:{fontSize:i?"14.5px":"clamp(15px,1.6vw,17px)",color:e?"rgba(255,255,255,0.52)":"#475569",maxWidth:540,margin:"0 auto 36px",opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.18s both":"none"},children:t.heroSub}),l.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginBottom:48,opacity:a?1:0,animation:a?"hero-fadeUp 0.7s ease-out 0.28s both":"none"},children:r?l.jsxs(l.Fragment,{children:[l.jsxs("a",{href:`tel:${zm}`,className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[l.jsx(Ph,{size:16,strokeWidth:2}),"Call Now"]}),l.jsxs("a",{href:Fm,target:"_blank",rel:"noopener noreferrer",className:"hero-btn",style:{background:"linear-gradient(135deg,#16a34a,#22c55e)",color:"#fff",padding:i?"12px 24px":"14px 28px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(22,163,74,0.32)"},children:[l.jsx(Ch,{size:16,strokeWidth:2}),"WhatsApp"]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("button",{onClick:()=>o(!0),className:"hero-btn",style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",color:"#fff",padding:i?"12px 26px":"14px 30px",fontSize:i?"14px":"15px",boxShadow:"0 6px 24px rgba(14,165,233,0.35)"},children:[l.jsx(cc,{size:16,strokeWidth:2}),i?t.signIn:`${t.signIn} to Contact Us`,l.jsx(Ja,{size:15,strokeWidth:2.5})]}),l.jsxs("button",{onClick:()=>u(!0),className:"hero-btn",style:{background:"transparent",color:e?"rgba(255,255,255,0.75)":"#0f172a",padding:i?"11px 24px":"13px 28px",fontSize:i?"14px":"15px",border:`1px solid ${e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.12)"}`,boxShadow:"none",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"},children:["Learn More",l.jsx(Ja,{size:15,strokeWidth:2.5})]})]})}),l.jsx("div",{className:"hero-stat-strip",style:{marginBottom:28,opacity:a?1:0,animation:a?"hero-fadeUp 0.6s ease-out 0.38s both":"none"},children:T2.map(({target:d,suffix:h,label:m},y)=>l.jsx(C2,{target:d,suffix:h,label:m,isDark:e,isVisible:a,delay:y*.12},m))}),l.jsx("div",{style:{opacity:a?1:0,animation:a?"hero-fadeIn 0.8s ease-out 0.55s both":"none",display:"flex",justifyContent:"center"},children:l.jsxs("div",{className:"hero-trust",children:[l.jsx(kr,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),l.jsx(kr,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),l.jsx(kr,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),l.jsx(kr,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),l.jsx(kr,{size:11,fill:"currentColor",color:"#f59e0b",style:{opacity:.85}}),l.jsx("span",{style:{marginLeft:4},children:"Trusted by publishers across Delhi since 1995"}),l.jsx("span",{className:"hero-trust-dot"}),l.jsx("span",{children:"Dilshad Garden"})]})})]}),l.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:80,background:e?"linear-gradient(to bottom,transparent,rgba(2,6,23,0.55))":"linear-gradient(to bottom,transparent,rgba(248,250,252,0.60))",pointerEvents:"none",zIndex:1}})]}),c&&l.jsx("div",{className:"hero-modal-overlay",onClick:()=>u(!1),children:l.jsxs("div",{className:"hero-modal-content",onClick:d=>d.stopPropagation(),style:{"--modal-bg":e?"#0f172a":"#ffffff","--close-bg":e?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.05)","--close-border":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)","--close-color":e?"#94a3b8":"#64748b","--close-hover-bg":e?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"},children:[l.jsx("button",{className:"hero-modal-close",onClick:()=>u(!1),children:l.jsx(ss,{size:20})}),l.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:i?"28px":"36px",fontWeight:400,color:e?"#f1f5f9":"#0f172a",marginBottom:24},children:["About"," ",l.jsx("span",{style:{background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"BK Offset Printing"})]}),l.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:i?"15px":"16px",lineHeight:1.8,color:e?"rgba(255,255,255,0.8)":"#1e293b"},children:[l.jsxs("p",{style:{marginBottom:20},children:[l.jsx("strong",{children:"BK Offset Printing"})," has been a trusted name in the printing industry since 1995, serving publishers, authors, and businesses across Delhi with premium printing solutions."]}),l.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Services"}),l.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Bulk Book Printing:"})," High-volume printing for publishers, authors, and institutions. Textbooks, novels, catalogs, and manuals."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Thermal Gloss Lamination:"})," Premium gloss finish using Fevicol-based adhesives that makes colours pop and protects your prints."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Matte Lamination:"})," Sophisticated, non-reflective finish for premium covers that need to feel as good as they look."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Soft-Touch Lamination:"})," Velvety, luxurious texture ideal for book covers, premium brochures, and collector's editions."]}),l.jsxs("li",{style:{marginBottom:8},children:[l.jsx("strong",{children:"Title Printing:"})," Custom title work with embossing, debossing, spot UV, and digital printing."]})]}),l.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Our Equipment"}),l.jsx("p",{style:{marginBottom:16},children:"We operate world-class Heidelberg and Akiyama equipment, including:"}),l.jsxs("ul",{style:{marginBottom:20,paddingLeft:20},children:[l.jsx("li",{children:"Heidelberg Speedmaster Multicolor (Flagship 4-colour press)"}),l.jsx("li",{children:"Akiyama 4-Colour Press with alcohol-damping system"}),l.jsx("li",{children:"Heidelberg Autoplate automated plate-loading system"}),l.jsx("li",{children:"Heidelberg SORDZ 2-Colour press (25×36 inches)"}),l.jsx("li",{children:"Industrial-grade thermal lamination machines"}),l.jsx("li",{children:"Automatic paper cutting machines with ±0.01mm accuracy"})]}),l.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:"#0ea5e9",marginBottom:12,marginTop:24},children:"Why Choose Us"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:i?"1fr":"repeat(3, 1fr)",gap:16,marginTop:16,marginBottom:24},children:[l.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[l.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🎯"}),l.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"30+ Years Experience"}),l.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Trusted by thousands of businesses since 1995"})]}),l.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[l.jsx("div",{style:{fontSize:24,marginBottom:8},children:"⚡"}),l.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Fast Turnaround"}),l.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Quick delivery without compromise on quality"})]}),l.jsxs("div",{style:{padding:16,background:e?"rgba(255,255,255,0.05)":"rgba(14,165,233,0.05)",borderRadius:12,border:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:[l.jsx("div",{style:{fontSize:24,marginBottom:8},children:"🏆"}),l.jsx("h4",{style:{fontWeight:600,marginBottom:4},children:"Premium Quality"}),l.jsx("p",{style:{fontSize:"14px",color:e?"rgba(255,255,255,0.6)":"#475569"},children:"Every print meets the highest standards"})]})]}),l.jsx("p",{style:{fontStyle:"italic",color:"#0ea5e9",textAlign:"center",marginTop:24,padding:16,borderTop:`1px solid ${e?"rgba(255,255,255,0.1)":"rgba(14,165,233,0.2)"}`},children:'"We welcome publishers, authors, and businesses for live demonstrations at our facility in Dilshad Garden."'})]})]})})]})}function C2({target:t,suffix:e,label:n,isDark:r,isVisible:i,delay:o}){const[s,a]=_.useState(0),c=st.useRef(!1);return _.useEffect(()=>{if(!i||c.current)return;c.current=!0;const u=1600,d=o*1e3;function h(v){return 1-Math.pow(1-v,3)}let m;const y=setTimeout(()=>{const v=performance.now();function w(C){const p=Math.min((C-v)/u,1);a(Math.floor(h(p)*t)),p<1?m=requestAnimationFrame(w):a(t)}m=requestAnimationFrame(w)},d);return()=>{clearTimeout(y),cancelAnimationFrame(m)}},[i,t,o]),l.jsxs("div",{className:"hero-stat",style:{opacity:i?1:0,animation:i?`hero-counter 0.5s ease-out ${.38+o}s both`:"none"},children:[l.jsxs("div",{className:"hero-stat-num",style:{color:r?void 0:"#0f172a",WebkitTextFillColor:r?void 0:"#0f172a",fontVariantNumeric:"tabular-nums",minWidth:"3.5ch"},children:[s,e]}),l.jsx("div",{className:"hero-stat-label",style:{color:r?void 0:"rgba(0,0,0,0.40)"},children:n})]})}const P2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  /* ─── Keyframes ─── */
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

  .ps-printer-vibrating {
    animation: ps-printer-vibrate 0.1s linear infinite;
  }

  @keyframes ps-card-deal {
    0% { 
      transform: 
        translateY(var(--dynamic-start-y, -130px)) 
        translateX(var(--dynamic-start-x, 0)) 
        scale(0.75) 
        rotateZ(var(--deal-rotation, 15deg)) 
        rotateY(var(--deal-rotate-y, 35deg));
      opacity: 0;
      box-shadow: 0 60px 100px -20px rgba(0,0,0,0.4);
    }
    30% {
      opacity: 1;
      box-shadow: 0 40px 70px -15px rgba(0,0,0,0.3);
    }
    100% { 
      transform: 
        translateY(0) 
        translateX(0) 
        scale(1) 
        rotateZ(0deg)
        rotateY(0deg);
      opacity: 1;
      box-shadow: none; 
    }
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
    box-shadow: 
      0 40px 80px -20px rgba(0,0,0,0.4),
      0 20px 40px -10px rgba(0,0,0,0.2),
      0 0 0 1px var(--printer-outer-border, rgba(255,255,255,0.08));
    z-index: 10;
    overflow: visible;
  }

  .ps-printer-body::after {
    content: '';
    position: absolute;
    bottom: 0; left: 10%; right: 10%;
    height: 4px;
    background: #000;
    box-shadow: inset 0 2px 4px rgba(255,255,255,0.05);
    border-radius: 4px 4px 0 0;
  }

  .ps-printer-slot {
    position: relative;
    height: 18px;
    background: #000;
    border-radius: var(--sl-radius, 0 0 12px 12px);
    z-index: 9;
    /* Inner shadow for "depth" */
    box-shadow: 
      inset 0 4px 8px rgba(0,0,0,0.8),
      0 8px 24px rgba(0,0,0,0.4);
    overflow: hidden;
  }

  .ps-printer-scan-line {
    position: absolute;
    top: 50%; left: 0; width: 100%; height: 2px;
    background: var(--ps-grad);
    box-shadow: 0 0 10px var(--c-accent);
    transform-origin: left;
    animation: ps-print-line 2s infinite ease-in-out;
  }

  .ps-cards-emergence-zone {
    position: relative;
    padding-top: var(--em-pad-t, 25px);
    padding-bottom: var(--em-pad-b, 0px);
    z-index: 1;
    /* Sharper mask - cards become visible much earlier */
    mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    -webkit-mask-image: var(--em-mask, linear-gradient(to bottom, transparent 0px, black 15px));
    perspective: 2000px;
  }

  .ps-card-emerging {
    animation: ps-card-emerge 1s cubic-bezier(.22, 1, .36, 1) both;
  }

  /* ─── Section eyebrow ─── */
  .ps-eyebrow {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'DM Sans',sans-serif;
    font-size:10px; font-weight:700; letter-spacing:0.2em;
    text-transform:uppercase;
  }
  .ps-eyebrow span.line {
    display:block; height:1px; width:32px;
    background:currentColor; opacity:0.5;
  }

  /* ─── Heading gradient text ─── */
  .ps-grad-text {
    display:inline-block;
    background-clip:text; -webkit-background-clip:text;
    -webkit-text-fill-color:transparent; color:transparent;
  }

  /* ─── Card outer wrapper ─── */
  .ps-card-outer {
    position:relative;
    border-radius:20px;
    padding:1.5px;
    transition:padding 0.3s ease;
    cursor:pointer;
    height:100%;
    box-sizing:border-box;
  }

  /* animated rainbow border */
  .ps-card-outer::before {
    content:'';
    position:absolute; inset:0;
    border-radius:20px;
    background:linear-gradient(
      270deg,
      var(--c-accent),
      var(--c-glow2),
      var(--c-accent),
      var(--c-glow2)
    );
    background-size:300% 300%;
    opacity:0;
    transition:opacity 0.4s ease;
    z-index:0;
  }
  .ps-card-outer:hover::before {
    opacity:1;
    animation:ps-border-flow 2.5s ease infinite;
  }

  /* ─── Card inner ─── */
  .ps-card-inner {
    position:relative;
    border-radius:19px;
    overflow:hidden;
    z-index:1;
    border: 1px solid rgba(255,255,255,0.18); /* Match printer body exactly */
    transition:
      box-shadow 0.45s cubic-bezier(.22,1,.36,1),
      transform  0.45s cubic-bezier(.22,1,.36,1);
    will-change:transform;
    transform-style:preserve-3d;
    /* Subtle internal highlight for 3D volume */
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
  }

  /* lift on hover handled by JS for 3D tilt */
  .ps-card-outer:hover .ps-card-inner {
    box-shadow:
      0 32px 80px rgba(0,0,0,0.18),
      0 0 0 0px transparent;
  }

  /* scanline effect — moves top to bottom */
  .ps-card-inner::before {
    content:'';
    position:absolute; left:0; right:0; top:-10%;
    height:40%;
    background:linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255,255,255,0.03) 50%,
      transparent 100%
    );
    pointer-events:none;
    z-index:5;
    opacity:0;
    transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-card-inner::before {
    opacity:1;
    animation:ps-scanline 2s linear infinite;
  }

  /* shimmer sweep */
  .ps-card-inner::after {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(
      130deg,
      transparent 0%,
      rgba(255,255,255,0.07) 45%,
      transparent 90%
    );
    transform:translateX(-110%) skewX(-10deg);
    pointer-events:none;
    z-index:4;
    transition:none;
  }
  .ps-card-outer:hover .ps-card-inner::after {
    animation:ps-shimmer 0.7s cubic-bezier(.22,1,.36,1) forwards;
  }

  /* ─── Card content layer ─── */
  .ps-card-content {
    position:relative;
    display:flex; flex-direction:column;
    padding:28px 26px 24px;
    z-index:2;
    transition:transform 0.45s cubic-bezier(.22,1,.36,1);
  }

  /* ─── Hover overlay glow ─── */
  .ps-card-glow {
    position:absolute; inset:0;
    background:radial-gradient(
      ellipse 70% 50% at var(--mx,50%) var(--my,0%),
      var(--c-glow-bg) 0%,
      transparent 70%
    );
    opacity:0;
    transition:opacity 0.4s ease;
    pointer-events:none;
    z-index:1;
  }
  .ps-card-outer:hover .ps-card-glow { opacity:1; }

  /* ─── Bottom accent bar ─── */
  .ps-card-bar {
    position:absolute; bottom:0; left:0; right:0;
    height:3px;
    background:linear-gradient(90deg, var(--c-accent), var(--c-glow2));
    transform:scaleX(0);
    transform-origin:left;
    transition:transform 0.5s cubic-bezier(.22,1,.36,1);
    z-index:6;
  }
  .ps-card-outer:hover .ps-card-bar { transform:scaleX(1); }

  /* ─── Icon wrapper ─── */
  .ps-icon-wrap {
    transition:
      background  0.4s ease,
      box-shadow  0.4s ease,
      transform   0.5s cubic-bezier(.34,1.56,.64,1);
    position:relative;
    overflow:visible;
  }
  .ps-card-outer:hover .ps-icon-wrap {
    transform:scale(1.12) rotate(-6deg);
  }

  /* orbiting dot around icon */
  .ps-icon-orbit {
    position:absolute;
    width:7px; height:7px;
    border-radius:50%;
    background:var(--c-accent);
    top:50%; left:50%;
    margin:-3.5px 0 0 -3.5px;
    opacity:0;
    transition:opacity 0.3s ease;
  }
  .ps-card-outer:hover .ps-icon-orbit {
    opacity:1;
    animation:ps-orbit 1.2s linear infinite;
  }

  /* ─── Tag pills ─── */
  .ps-tag {
    font-family:'DM Sans',sans-serif;
    font-size:11px; font-weight:500;
    padding:3px 11px; border-radius:20px;
    transition:
      background 0.3s ease,
      color      0.3s ease,
      transform  0.3s cubic-bezier(.34,1.56,.64,1),
      box-shadow 0.3s ease;
  }
  .ps-card-outer:hover .ps-tag {
    background:var(--c-accent-light) !important;
    color:var(--c-accent) !important;
    border-color:var(--c-accent-border) !important;
  }

  /* staggered tag pop-in */
  .ps-card-outer:hover .ps-tag:nth-child(1) { animation:ps-tag-pop 0.35s 0.05s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(2) { animation:ps-tag-pop 0.35s 0.10s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(3) { animation:ps-tag-pop 0.35s 0.15s both cubic-bezier(.34,1.56,.64,1); }
  .ps-card-outer:hover .ps-tag:nth-child(4) { animation:ps-tag-pop 0.35s 0.20s both cubic-bezier(.34,1.56,.64,1); }

  /* ─── Arrow icon ─── */
  .ps-arrow {
    transition:transform 0.4s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease;
    opacity:0.4;
  }
  .ps-card-outer:hover .ps-arrow {
    transform:translate(3px,-3px);
    opacity:1;
    color:var(--c-accent) !important;
  }

  /* ─── Number badge ─── */
  .ps-num {
    font-family:'DM Sans',sans-serif;
    font-weight:800; letter-spacing:0.05em;
    transition:
      color     0.35s ease,
      transform 0.4s cubic-bezier(.34,1.56,.64,1);
    line-height:1;
  }
  .ps-card-outer:hover .ps-num {
    color:var(--c-accent) !important;
    transform:scale(1.1);
  }

  /* ─── Description text ─── */
  .ps-desc {
    font-family:'DM Sans',sans-serif;
    transition:color 0.35s ease;
  }

  /* ─── Divider ─── */
  .ps-divider {
    height:1px;
    transition:background 0.4s ease;
  }

  /* ─── Section intro left bar ─── */
  .ps-intro { position:relative; }
  .ps-intro::before {
    content:'';
    position:absolute; left:0; top:14px; bottom:14px;
    width:3px; border-radius:2px;
    background:var(--ps-grad);
  }

  /* ─── Floating badge top-right of section ─── */
  .ps-floating-badge {
    animation:ps-float 4s ease-in-out infinite;
  }

  /* ─── Background grid texture ─── */
  .ps-grid-bg {
    position:absolute; inset:0; pointer-events:none;
    background-image:
      linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
    background-size:48px 48px;
    mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
    -webkit-mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
  }
  .ps-grid-bg.dark {
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  }
`;function N2({isDark:t,isVisible:e,primary:n,c:r,isMobile:i,grad:o,isVibrating:s}){return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:`ps-printer-body ${s?"ps-printer-vibrating":""}`,style:{maxWidth:800,margin:"0 auto","--printer-bg":t?"#0f172a":"#ffffff","--printer-border":t?"rgba(255,255,255,0.18)":"rgba(0,0,0,0.08)","--printer-outer-border":t?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.04)",animation:e?"ps-printer-warmup 2s ease-in-out":"none"},children:[l.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",opacity:e?1:0,transition:"opacity 1s ease"},children:[l.jsxs("div",{className:"ps-eyebrow",style:{color:n,marginBottom:20,justifyContent:"center"},children:[l.jsx("span",{style:{display:"block",height:1,width:32,background:"currentColor",opacity:.5}}),l.jsx("span",{style:{margin:"0 12px"},children:"What we offer"}),l.jsx("span",{style:{display:"block",height:1,width:32,background:"currentColor",opacity:.5}})]}),l.jsxs("h2",{style:{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:i?"32px":"56px",fontWeight:400,letterSpacing:"-0.03em",lineHeight:1.05,color:r.text,margin:"0 0 32px"},children:["Our Printing"," ",l.jsx("span",{style:{fontStyle:"italic",display:"inline-block",background:o,backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",color:"transparent"},children:"Services"})]}),l.jsx("div",{className:"ps-intro",style:{display:"inline-block",maxWidth:580,textAlign:"left",padding:"16px 22px 16px 28px",background:t?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.028)",border:`1px solid ${t?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.075)"}`,borderRadius:12},children:l.jsx("p",{style:{margin:0,fontFamily:"'DM Sans',sans-serif",fontSize:i?"13px":"14px",lineHeight:1.75,color:r.textMid??r.textDim},children:"Specialising in high-quality bulk book printing and professional lamination services. We use premium Fevicol-based adhesives, serving publishers, authors, and businesses across Delhi."})})]}),l.jsxs("div",{style:{position:"absolute",top:20,right:20,display:"flex",gap:6},children:[l.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:e?"#22c55e":"#ef4444",boxShadow:e?"0 0 8px #22c55e":"none"}}),l.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#64748b"}})]})]}),l.jsx("div",{style:{maxWidth:760,margin:"0 auto",position:"relative",zIndex:9},children:l.jsx("div",{className:"ps-printer-slot",style:{marginTop:i?0:-10,marginBottom:i?-10:0},children:l.jsx("div",{className:"ps-printer-scan-line",style:{animationDelay:"1s"}})})})]})}const nd=[{title:"Bulk Book Printing",desc:"High-volume printing for publishers, authors & institutions. Consistent quality across thousands of copies.",icon:i2,features:["Perfect binding","Case binding","Saddle stitch","Spiral binding"],accent:"#0ea5e9",accentLight:"rgba(14,165,233,0.12)",accentBorder:"rgba(14,165,233,0.25)",glow2:"#6366f1",glowBg:"rgba(14,165,233,0.06)",stat:"10K+",statLabel:"copies / run"},{title:"Thermal Gloss Lamination",desc:"Fevicol-based gloss lamination that makes colours pop and stands up to heavy daily handling.",icon:Nh,features:["High-gloss finish","Scratch-resistant","Water-resistant","UV protection"],accent:"#8b5cf6",accentLight:"rgba(139,92,246,0.12)",accentBorder:"rgba(139,92,246,0.25)",glow2:"#ec4899",glowBg:"rgba(139,92,246,0.06)",stat:"4×",statLabel:"more durable"},{title:"Matte Lamination",desc:"Sophisticated, non-reflective finish — the go-to for premium covers that feel as good as they look.",icon:Ih,features:["Non-reflective","Soft-touch feel","Fingerprint resist","Pro look"],accent:"#10b981",accentLight:"rgba(16,185,129,0.12)",accentBorder:"rgba(16,185,129,0.25)",glow2:"#34d399",glowBg:"rgba(16,185,129,0.06)",stat:"★4.9",statLabel:"client rating"},{title:"Soft-Touch Lamination",desc:"Velvety, luxurious texture that turns every printed piece into an unforgettable tactile experience.",icon:l2,features:["Velvety smooth","Premium feel","Scuff-resistant","Vivid colours"],accent:"#f59e0b",accentLight:"rgba(245,158,11,0.12)",accentBorder:"rgba(245,158,11,0.25)",glow2:"#f97316",glowBg:"rgba(245,158,11,0.06)",stat:"100%",statLabel:"Fevicol-based"},{title:"Title Printing",desc:"Custom title work for book spines, special-edition covers, and branded collateral. Unforgettable.",icon:g2,features:["Embossing/Deboss","Spot UV","Digital print","Custom fonts"],accent:"#ec4899",accentLight:"rgba(236,72,153,0.12)",accentBorder:"rgba(236,72,153,0.25)",glow2:"#f43f5e",glowBg:"rgba(236,72,153,0.06)",stat:"48h",statLabel:"turnaround"}];function R2({isDark:t,c:e,isMobile:n,isTablet:r}){const[i,o]=as(),s=_.useRef(null),[a,c]=_.useState(0),[u,d]=_.useState(!1),[h,m]=_.useState(0);_.useEffect(()=>{if(o&&s.current){const f=setTimeout(()=>{const g=s.current.getBoundingClientRect();c(g.width/2),d(!0)},300);return()=>clearTimeout(f)}},[o]);const y=ce.primary,v=ce.grad,w=n?1:r?2:3,C=_.useCallback(()=>{m(f=>f+1)},[]),p=_.useCallback(()=>{m(f=>Math.max(0,f-1))},[]);return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:P2}),l.jsx("style",{children:`
        :root {
          --ps-grad: ${v};
          --pr-radius: 24px 24px 10px 10px;
          --sl-radius: 0 0 12px 12px;
          --em-mask: linear-gradient(to bottom, transparent 0px, black 15px);
          --em-pad-t: 25px;
          --em-pad-b: 0px;
        }
      `}),l.jsxs("section",{ref:i,style:{position:"relative",padding:n?"80px 18px 100px":"120px 48px 140px",maxWidth:1280,margin:"0 auto",overflow:"hidden"},children:[l.jsx("div",{className:`ps-grid-bg${t?" dark":""}`}),l.jsx("div",{style:{position:"absolute",top:"0%",left:"50%",transform:"translateX(-50%)",width:700,height:340,background:`radial-gradient(ellipse, ${y}14 0%, transparent 70%)`,pointerEvents:"none",zIndex:0}}),l.jsx(N2,{isDark:t,isVisible:o,primary:y,c:e,isMobile:n,grad:v,isVibrating:n&&h>0}),l.jsx("div",{className:"ps-cards-emergence-zone",style:{marginTop:-2,marginBottom:0,paddingBottom:n?20:60},children:l.jsx("div",{ref:s,style:{display:"grid",gridTemplateColumns:`repeat(${w},1fr)`,gap:n?14:18,gridAutoRows:n?"auto":"1fr",visibility:a>0?"visible":"hidden"},children:(n?[...nd].reverse():nd).map((f,g)=>{const S=n?g:{0:0,3:1,2:2,4:3,1:4}[g]??g,I=g%w,T=(w-1)/2,E=(I-T)*12;return l.jsx(A2,{...f,index:g+1,isDark:t,c:e,isMobile:n,isVisible:o&&a>0,delay:.5+S*.3,slotCenter:a,gridRef:s,dealRotation:E,onExtractionStart:C,onExtractionEnd:p},f.title)})})})]})]})}function A2({title:t,desc:e,icon:n,features:r,accent:i,accentLight:o,accentBorder:s,glow2:a,glowBg:c,index:u,isDark:d,c:h,isMobile:m,isVisible:y,delay:v,slotCenter:w,gridRef:C,dealRotation:p,onExtractionStart:f,onExtractionEnd:g}){const x=_.useRef(null),S=_.useRef(null),I=_.useRef(null),[T,E]=_.useState(!1),[z,M]=_.useState({x:0,y:0});_.useEffect(()=>{if(y&&m&&f&&g){const j=setTimeout(()=>{"vibrate"in navigator&&navigator.vibrate([20,30,25]),f();const D=setTimeout(()=>{g()},550);return()=>clearTimeout(D)},v*1e3);return()=>clearTimeout(j)}},[y,m,v,f,g]),_.useEffect(()=>{if(x.current&&C.current&&w>0){const j=x.current.getBoundingClientRect(),D=C.current.getBoundingClientRect(),b=(j.left+j.right)/2-D.left,N=w-b,R=D.top,F=j.top,U=R-F-130;M({x:N,y:U})}},[w,C]);const O=_.useCallback(j=>{if(!S.current||!x.current)return;const D=x.current.getBoundingClientRect(),b=j.clientX-D.left,N=j.clientY-D.top,R=D.width/2,F=D.height/2,U=(b-R)/R,$=(N-F)/F*-10,re=U*10;if(S.current.style.transform=`perspective(900px) rotateX(${$}deg) rotateY(${re}deg) translateZ(8px)`,I.current){const le=b/D.width*100,ie=N/D.height*100;I.current.style.setProperty("--mx",`${le}%`),I.current.style.setProperty("--my",`${ie}%`)}},[]),fe=_.useCallback(()=>E(!0),[]),te=_.useCallback(()=>{E(!1),S.current&&(S.current.style.transform="perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)")},[]),Te=d?"rgba(15,23,42,0.95)":"rgba(255,255,255,0.98)",P=T?d?`0 60px 100px -20px rgba(0,0,0,0.8), 0 30px 60px -10px rgba(0,0,0,0.6), 0 0 0 1px ${o}, 0 0 60px ${i}25`:`0 50px 90px -15px rgba(0,0,0,0.2), 0 25px 50px -8px rgba(0,0,0,0.15), 0 0 0 1px ${o}, 0 0 45px ${i}18`:d?"0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)":"0 25px 50px -12px rgba(0,0,0,0.1), 0 10px 20px -8px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)";return l.jsx("div",{ref:x,className:"ps-card-outer",onMouseMove:O,onMouseEnter:fe,onMouseLeave:te,style:{"--c-accent":i,"--c-glow2":a,"--c-accent-light":o,"--c-accent-border":s,"--c-glow-bg":c,"--dynamic-start-x":`${z.x}px`,"--dynamic-start-y":`${z.y}px`,"--deal-rotation":`${p}deg`,"--deal-rotate-y":`${m?0:35}deg`,height:"100%",opacity:y?1:0,animation:y?`ps-card-deal 1.1s cubic-bezier(.17, .67, .41, .99) ${v}s both`:"none"},children:l.jsxs("div",{ref:S,className:"ps-card-inner",style:{height:"100%",background:Te,boxShadow:P,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",transition:T?"box-shadow 0.4s ease":"box-shadow 0.4s ease, transform 0.5s cubic-bezier(.22,1,.36,1)"},children:[l.jsx("div",{ref:I,className:"ps-card-glow",style:{"--mx":"50%","--my":"0%"}}),l.jsx("div",{className:"ps-card-bar"}),l.jsxs("div",{className:"ps-card-content",style:{height:"100%",boxSizing:"border-box"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:20},children:[l.jsxs("div",{className:"ps-icon-wrap",style:{width:52,height:52,borderRadius:15,background:T?i:o,display:"flex",alignItems:"center",justifyContent:"center",color:T?"#fff":i,boxShadow:T?`0 10px 28px ${i}55`:"none",flexShrink:0},children:[l.jsx(n,{size:22,strokeWidth:1.7}),l.jsx("div",{className:"ps-icon-orbit"})]}),l.jsx(Fr,{className:"ps-arrow",size:17,strokeWidth:2,style:{color:h.textDim,flexShrink:0,marginTop:4}})]}),l.jsx("h3",{style:{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:"21px",fontWeight:500,letterSpacing:"-0.01em",lineHeight:1.15,color:h.text,margin:"0 0 10px"},children:t}),l.jsx("p",{className:"ps-desc",style:{fontSize:"13px",color:h.textDim,lineHeight:1.72,margin:"0 0 20px",flex:1},children:e}),l.jsx("div",{className:"ps-divider",style:{background:T?`linear-gradient(90deg,${i}55,${a}33,transparent)`:d?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)",marginBottom:16}}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:10},children:[l.jsx(an,{size:9,style:{color:i},strokeWidth:2.5}),l.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"9px",fontWeight:700,letterSpacing:"0.16em",textTransform:"uppercase",color:i},children:"Includes"})]}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:r.map((j,D)=>l.jsx("span",{className:"ps-tag",style:{background:d?"rgba(255,255,255,0.07)":o,color:d?"rgba(255,255,255,0.58)":`${i}cc`,border:`1px solid ${d?"rgba(255,255,255,0.09)":s}`},children:j},D))})]})]})]})})}const zi=[{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"4-colour",accent:"#0ea5e9",glow:"rgba(14,165,233,0.7)",grad:"linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)"},{name:"Heidelberg Printing Machine",category:"Offset Printing",tag:"Industry Leader",desc:"State-of-the-art Heidelberg — a benchmark in precision engineering. From single-colour to complex multi-colour projects, automated controls, fast plate changes, and flawless registration deliver superior output trusted by professionals worldwide.",spec:"Multi-colour",accent:"#6366f1",glow:"rgba(99,102,241,0.7)",grad:"linear-gradient(145deg,#08051e 0%,#151048 60%,#6366f120 100%)"},{name:"Akiyama 4-Colour Press",category:"Offset Printing",tag:"Alcohol-Damped",desc:"Akiyama alcohol-damped 4-colour press — size 19×26 inches. Alcohol damping system provides superior ink-water balance for exceptional dot gain control and vivid, consistent colour across the entire sheet.",spec:"19×26 in",accent:"#10b981",glow:"rgba(16,185,129,0.7)",grad:"linear-gradient(145deg,#031209 0%,#082a16 60%,#10b98120 100%)"},{name:"Heidelberg Autoplate Machine",category:"Plate Making",tag:"Automated",desc:"Fully automated plate-loading system that eliminates manual handling errors. Reduces makeready time significantly, ensuring consistent plate registration and faster job turnaround for demanding print environments.",spec:"Auto-plate",accent:"#f59e0b",glow:"rgba(245,158,11,0.7)",grad:"linear-gradient(145deg,#1a0e00 0%,#2e1c00 60%,#f59e0b20 100%)"},{name:"Heidelberg Speedmaster Multicolor",category:"Offset Printing",tag:"Flagship",desc:"The Heidelberg Speedmaster — the world's most trusted multicolour press. Engineered for peak performance with cutting-edge Intellistart technology, delivering unmatched print quality at production speeds that set the industry standard.",spec:"Up to 4-colour",accent:"#0ea5e9",glow:"rgba(14,165,233,0.7)",grad:"linear-gradient(145deg,#030d1f 0%,#0a2a4a 60%,#0ea5e920 100%)"},{name:"Heidelberg SORDZ 2-Colour",category:"Offset Printing",tag:"Ref. #1447",desc:"Heidelberg SORDZ 2-colour offset printing machine. Sheet size 25×36 inches — perfectly balanced for medium-format commercial work. Renowned for its robust build and consistent colour reproduction across long runs.",spec:"25×36 in",accent:"#ec4899",glow:"rgba(236,72,153,0.7)",grad:"linear-gradient(145deg,#1a0310 0%,#38071f 60%,#ec489920 100%)"},{name:"Thermal Lamination Machine",category:"Lamination",tag:"High-Speed",desc:"Industrial-grade thermal lamination delivering flawless gloss and matte finishes using Fevicol-based adhesives. Handles high volumes with precision heat control for bubble-free, scratch-resistant results every time.",spec:"±0.01mm",accent:"#8b5cf6",glow:"rgba(139,92,246,0.7)",grad:"linear-gradient(145deg,#0d0518 0%,#1c0e38 60%,#8b5cf620 100%)"},{name:"Automatic Paper Cutting Machine",category:"Finishing",tag:"Ultra Precise",desc:"Automatic paper cutter delivering precise and flawless cuts at incredible speed. Ideal for high-volume printing and paper processing, this machine ensures efficiency and accuracy in every cut — streamlining workflow and maximising productivity.",spec:"High-volume",accent:"#f97316",glow:"rgba(249,115,22,0.7)",grad:"linear-gradient(145deg,#1a0700 0%,#2e1200 60%,#f9731620 100%)"}],Ks=[{x:-52,y:-42,rot:-18},{x:0,y:-56,rot:4},{x:52,y:-42,rot:14},{x:-62,y:0,rot:-10},{x:62,y:0,rot:10},{x:-52,y:44,rot:16},{x:0,y:56,rot:-6},{x:52,y:44,rot:-14}],Fi=t=>{const e=t?175:190,n=t?335:240;return t?[{x:-e*.5,y:0,rot:0},{x:e*.5,y:0,rot:0},{x:-e*.5,y:n,rot:0},{x:e*.5,y:n,rot:0},{x:-e*.5,y:n*2,rot:0},{x:e*.5,y:n*2,rot:0},{x:-e*.5,y:n*3,rot:0},{x:e*.5,y:n*3,rot:0}]:[{x:-e*1.5,y:-n/2,rot:0},{x:-e*.5,y:-n/2,rot:0},{x:e*.5,y:-n/2,rot:0},{x:e*1.5,y:-n/2,rot:0},{x:-e*1.5,y:n/2,rot:0},{x:-e*.5,y:n/2,rot:0},{x:e*.5,y:n/2,rot:0},{x:e*1.5,y:n/2,rot:0}]},j2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  /* ── core animations ── */
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
  
  /* Header blast animation */
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

  /* ── section ── */
  .gl-section {
    position:relative;
    overflow:hidden;
    background:#ffffff;
  }

  /* ── explosion stage ── */
  .gl-stage {
    position:relative;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow:hidden;
  }

  /* ── energy core ── */
  .gl-core {
    position:absolute;
    left:50%; top:var(--gl-v-center, 50%);
    border-radius:50%;
    background:radial-gradient(circle,#fff 0%,#7dd3fc 25%,#0ea5e9 55%,transparent 100%);
    pointer-events:none;
    z-index:30;
  }
  .gl-core.pulse   { animation:gl-core-pulse 2s ease-in-out infinite; }
  .gl-core.charge  { animation:gl-charge 1s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-core.gone    { display:none; }

  /* rotating dashed rings around core */
  .gl-ring-orbit {
    position:absolute;
    left:50%; top:var(--gl-v-center, 50%);
    border-radius:50%;
    border:1px dashed rgba(14,165,233,0.3);
    pointer-events:none;
    z-index:5;
  }

  /* shockwave rings */
  .gl-shock {
    position:absolute; left:50%; top:var(--gl-v-center, 50%);
    border-radius:50%;
    border:3px solid rgba(14,165,233,0.9);
    pointer-events:none; z-index:29;
    display:none;
  }
  .gl-shock.fire  { display:block; animation:gl-ring-expand  0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .gl-shock2 {
    position:absolute; left:50%; top:var(--gl-v-center, 50%);
    border-radius:50%;
    border:2px solid rgba(14,165,233,0.5);
    pointer-events:none; z-index:28;
    display:none;
  }
  .gl-shock2.fire { display:block; animation:gl-ring2-expand 1.1s cubic-bezier(.22,1,.36,1) 0.1s forwards; }

  /* spark lines */
  .gl-spark {
    position:absolute; left:50%; top:var(--gl-v-center, 50%);
    width:3px;
    transform-origin:top center;
    border-radius:2px;
    pointer-events:none; z-index:28;
    display:none;
  }
  .gl-spark.fire { display:block; animation:gl-spark 0.6s cubic-bezier(.22,1,.36,1) forwards; }

  /* ── floating card ── */
  .gl-card-float {
    position:absolute;
    left:50%; top:var(--gl-v-center, 50%);
    border-radius:16px;
    overflow:hidden;
    cursor:grab;
    z-index:10;
    transform:translate(-50%,-50%) scale(0);
    opacity:0;
    padding:1.5px;
    user-select:none;
    touch-action:none; /* Important for pointer events */
    will-change: transform, z-index;
    transition: transform 0.4s cubic-bezier(.175,.885,.32,1.275), box-shadow 0.4s ease;
  }
  .gl-card-float:active {
    cursor:grabbing;
  }
  .gl-card-float.dragging {
    z-index: 100 !important;
    animation: none !important;
    opacity: 1 !important;
    transition: none; /* Disable transition while actively dragging */
    transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.1) !important;
  }
  .gl-card-float.snapped {
    animation: none !important;
    opacity: 1 !important;
    transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(var(--original-rot)) scale(1) !important;
    box-shadow: 0 0 30px var(--ca-glow) !important;
    cursor: pointer;
  }
  .gl-card-float.snapped:hover {
    opacity: 1 !important;
    transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important;
    z-index: 50 !important;
    cursor: pointer;
  }
  .gl-card-float.blasting {
    animation:gl-card-blast 1.1s cubic-bezier(.22,1,.36,1) var(--blast-delay) both;
  }
  .gl-card-float.floating:not(.dragging):not(.snapped) {
    opacity:1;
    transform:translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(calc(var(--br)*1deg)) scale(1);
    animation:gl-card-idle 4s ease-in-out var(--float-offset) infinite;
  }
  .gl-card-float.floating:not(.dragging):not(.snapped):hover {
    transform: translate(-50%,-50%) translate(var(--bx),var(--by)) rotate(0deg) scale(1.15) !important;
    z-index: 50 !important;
    animation-play-state: paused;
  }

  /* animated gradient border */
  .gl-card-float::before {
    content:'';
    position:absolute; inset:0;
    border-radius:16px;
    background:linear-gradient(270deg,var(--ca),var(--ca2),var(--ca),rgba(255,255,255,0.1));
    background-size:400% 400%;
    opacity:0;
    transition:opacity 0.4s ease;
    z-index:0;
  }
  .gl-card-float:hover::before, .gl-card-float.dragging::before {
    opacity:1;
    animation:gl-border-flow 2.5s ease infinite;
  }

  .gl-card-inner {
    position:relative;
    width:100%;
    border-radius:15px;
    overflow:hidden;
    z-index:1;
    transition:box-shadow 0.4s ease;
  }
  .gl-card-float:hover .gl-card-inner, .gl-card-float.dragging .gl-card-inner {
    box-shadow:0 24px 60px rgba(0,0,0,0.7), 0 0 40px var(--ca-glow);
  }

  /* scanline */
  .gl-card-inner::before {
    content:''; position:absolute; left:0; right:0; top:-20%;
    height:35%;
    background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.04),transparent);
    pointer-events:none; z-index:6; opacity:0; transition:opacity 0.3s ease;
  }
  .gl-card-float:hover .gl-card-inner::before { opacity:1; animation:gl-scanline 2s linear infinite; }

  /* image */
  .gl-card-img {
    width:100%; height:160px; object-fit:cover; display:block;
    transition:transform 0.6s cubic-bezier(.22,1,.36,1), filter 0.45s ease;
    filter:saturate(0.9) brightness(1.0);
    pointer-events:none;
  }
  .gl-card-float:hover .gl-card-img, .gl-card-float.dragging .gl-card-img { transform:scale(1.1); filter:saturate(1.1) brightness(1.05); }

  /* gradient overlays */
  .gl-img-grad {
    position:absolute; top:0; left:0; right:0; height:160px;
    background:linear-gradient(to bottom,rgba(0,0,0,0.1),rgba(2,4,18,0.72));
    pointer-events:none; z-index:2;
  }

  .gl-card-content { position:relative; padding:14px 14px 12px; z-index:3; pointer-events:none; }

  .gl-cat-pill {
    display:inline-block;
    font-family:'DM Sans',sans-serif; font-size:9px; font-weight:700;
    letter-spacing:0.14em; text-transform:uppercase;
    padding:3px 9px; border-radius:99px;
    background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12);
    color:var(--ca); margin-bottom:7px;
    transition:background 0.3s ease, border-color 0.3s ease;
  }
  .gl-card-float:hover .gl-cat-pill { background:rgba(255,255,255,0.14); border-color:var(--ca); }

  .gl-card-name {
    font-family:'DM Sans',sans-serif;
    font-size:15px; font-weight:500; letter-spacing:0; line-height:1.25;
    color:#f8fafc; display:block; transition:color 0.3s ease; margin-bottom:8px;
  }
  .gl-card-float:hover .gl-card-name { color:#fff; }

  .gl-card-spec {
    display:flex; align-items:center; gap:5px;
    font-family:'DM Sans',sans-serif; font-size:10px; font-weight:600;
    letter-spacing:0.08em; text-transform:uppercase; color:var(--ca); opacity:0.85;
  }

  .gl-card-bar {
    position:absolute; bottom:0; left:0; right:0; height:2.5px;
    background:linear-gradient(90deg,var(--ca),var(--ca2));
    transform:scaleX(0); transform-origin:left;
    transition:transform 0.45s cubic-bezier(.22,1,.36,1); z-index:7;
  }
  .gl-card-float:hover .gl-card-bar { transform:scaleX(1); }

  /* ── magnet frame ── */
  .gl-magnet-frame {
    position: absolute;
    left: 50%; top: var(--gl-v-center, 50%);
    border-radius: 16px;
    border: 2px dashed var(--frame-color, rgba(255,255,255,0.2));
    transform: translate(-50%,-50%) translate(var(--fx),var(--fy)) rotate(var(--fr));
    opacity: 0;
    pointer-events: none;
    z-index: 5;
    transition: opacity 0.3s ease, border-color 0.3s ease;
  }
  .gl-magnet-frame.visible {
    opacity: 1;
  }
  .gl-magnet-frame.highlight {
    border-color: rgba(14,165,233,0.8);
    background: rgba(14,165,233,0.1);
    box-shadow: 0 0 20px rgba(14,165,233,0.3);
  }

  /* ── section header ── */
  .gl-eyebrow {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'DM Sans',sans-serif; font-size:10px; font-weight:700;
    letter-spacing:0.2em; text-transform:uppercase;
  }
  .gl-eyebrow .gl-line { display:block; height:1px; width:32px; background:currentColor; opacity:0.4; }

  .gl-grad-text {
    display:inline-block;
    background-clip:text; -webkit-background-clip:text;
    -webkit-text-fill-color:transparent; color:transparent;
  }

  .gl-scroll-hint {
    font-family:'DM Sans',sans-serif; font-size:11px; font-weight:600;
    letter-spacing:0.16em; text-transform:uppercase;
    color:#64748b;
    animation:gl-breathe 2.5s ease-in-out infinite;
  }

  .gl-yt-pill {
    display:inline-flex; align-items:center; gap:7px;
    padding:10px 22px; border-radius:99px;
    background:rgba(255,0,0,0.10); border:1px solid rgba(255,0,0,0.22);
    color:#ff4444; font-family:'DM Sans',sans-serif;
    font-size:13px; font-weight:700; text-decoration:none;
    transition:background 0.25s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
  }
  .gl-yt-pill:hover { background:rgba(255,0,0,0.22); transform:scale(1.05) translateY(-2px); box-shadow:0 8px 32px rgba(255,0,0,0.22); }

  .gl-replay-btn {
    display:inline-flex; align-items:center; gap:6px;
    padding:8px 18px; border-radius:99px;
    background:rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.10);
    color:#64748b; font-family:'DM Sans',sans-serif;
    font-size:11px; font-weight:600; letter-spacing:0.06em;
    cursor:pointer; transition:background 0.25s ease, color 0.25s ease;
  }
  .gl-replay-btn:hover { background:rgba(0,0,0,0.10); color:#0f172a; }

  /* ── details modal ── */
  .gl-modal-backdrop {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(2, 4, 18, 0.85); backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; animation: modalFadeIn 0.3s forwards;
  }
  .gl-modal-box {
    background: linear-gradient(145deg,#0d1123 0%,#060814 100%);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px; width: 90%; max-width: 420px;
    overflow: hidden; position: relative;
    transform: scale(0.9) translateY(30px); opacity: 0;
    animation: modalSlideUp 0.5s cubic-bezier(.175,.885,.32,1.275) 0.05s forwards;
    box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.4);
  }
  .gl-modal-close {
    position: absolute; top: 12px; right: 12px;
    background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; color: #fff;
    cursor: pointer; z-index: 10; transition: all 0.2s ease;
  }
  .gl-modal-close:hover { background: rgba(255,255,255,0.25); transform: scale(1.15) rotate(90deg); }
  .gl-modal-img {
    width: 100%; height: 200px; object-fit: cover;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    pointer-events: none;
  }
  .gl-modal-content { padding: 24px; }
  .gl-modal-title {
    font-family: 'Instrument Serif', Georgia, serif;
    font-size: 26px; font-weight: 400; color: #fff; line-height: 1.1; margin-bottom: 10px;
  }
  .gl-modal-desc {
    font-family: 'DM Sans', sans-serif; font-size: 13.5px; line-height: 1.65;
    color: rgba(255,255,255,0.65); margin-bottom: 20px;
  }

  @keyframes modalFadeIn { to { opacity: 1; } }
  @keyframes modalSlideUp { to { transform: scale(1) translateY(0); opacity: 1; } }
`,O2=[0,30,60,90,120,150,180,210,240,270,300,330],L2=["linear-gradient(to bottom,#fff,#38bdf8,transparent)","linear-gradient(to bottom,#fff,#6366f1,transparent)","linear-gradient(to bottom,#fff,#10b981,transparent)"];function M2({isDark:t,c:e,isMobile:n,isTablet:r}){const i=_.useRef(null),[o,s]=_.useState("dormant"),[a,c]=_.useState(!1),[u,d]=_.useState(!1),[h,m]=_.useState(Ks.map(P=>({...P}))),[y,v]=_.useState(null),[w,C]=_.useState({}),p=_.useRef({x:0,y:0,oX:0,oY:0}),f=_.useRef({x:0,y:0}),[g,x]=_.useState(null),S=_.useRef([]),I=Bm??[];_.useEffect(()=>{const P=i.current;if(!P)return;const j=new IntersectionObserver(([D])=>{D.isIntersecting&&o==="dormant"&&s("charging")},{threshold:n?.05:.35});return j.observe(P),()=>j.disconnect()},[o]),_.useEffect(()=>{if(o==="charging"){const P=setTimeout(()=>s("exploding"),900);S.current.push(P)}if(o==="exploding"){c(!0);const P=setTimeout(()=>d(!0),200),j=setTimeout(()=>s("revealed"),1400);S.current.push(P,j)}return()=>S.current.forEach(clearTimeout)},[o]),_.useEffect(()=>{if(o==="revealed"){const P=setTimeout(()=>{const j=Fi(n);m(b=>b.map((N,R)=>({...N,x:j[R].x,y:j[R].y})));const D={};zi.forEach((b,N)=>D[N]=!0),C(D)},300);return S.current.push(P),()=>clearTimeout(P)}},[o,n]);const T=_.useCallback(()=>{S.current.forEach(clearTimeout),m(Ks.map(P=>({...P}))),C({}),s("dormant"),c(!1),d(!1),setTimeout(()=>s("charging"),80)},[]),E=(P,j)=>{if(o!=="revealed"||w[j])return;P.preventDefault(),P.stopPropagation();const D=n?1.1:1.6,b=n?1:1.3;C(N=>{const R={...N};return delete R[j],R}),v(j),p.current={x:P.clientX,y:P.clientY,oX:h[j].x*D,oY:h[j].y*b},f.current={x:P.clientX,y:P.clientY},P.target.setPointerCapture(P.pointerId)},z=P=>{var le,ie;if(y===null)return;const j=((le=i.current)==null?void 0:le.offsetWidth)||window.innerWidth,D=((ie=i.current)==null?void 0:ie.offsetHeight)||window.innerHeight,b=j/2-80,N=D/2-80,R=n?1.1:1.6,F=n?1:1.3;let U=(p.current.oX+(P.clientX-p.current.x))/R,pe=(p.current.oY+(P.clientY-p.current.y))/F;U=Math.max(-b/R,Math.min(b/R,U)),pe=Math.max(-N/F+50,Math.min(N/F,pe)),m(Ge=>Ge.map((ft,ur)=>ur===y?{...ft,x:U,y:pe}:ft));const $=Fi(n)[y];if(Math.hypot(U-$.x,pe-$.y)<80){m(Ge=>Ge.map((ft,ur)=>ur===y?{...ft,x:$.x,y:$.y}:ft)),C(Ge=>({...Ge,[y]:!0})),v(null);try{P.target.releasePointerCapture(P.pointerId)}catch{}}},M=P=>{if(o!=="revealed"||y!==null||w[P]||Object.keys(w).length>=zi.length)return;const D=Fi(n)[P];m(b=>b.map((N,R)=>R===P?{...N,x:D.x,y:D.y}:N)),C(b=>({...b,[P]:!0}))},O=(P,j,D,b)=>{if(y!==null){try{P.target.releasePointerCapture(P.pointerId)}catch{}v(null),Math.hypot(P.clientX-f.current.x,P.clientY-f.current.y)<5&&x({...j,src:b,idx:D})}else w[D]&&x({...j,src:b,idx:D})},fe=o==="exploding"||o==="revealed",te=o==="revealed",Te=n?155:r?185:215;return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:j2}),l.jsxs("section",{ref:i,className:"gl-section",style:{padding:"0 0 100px",minHeight:"100vh",background:t?"linear-gradient(rgba(2,6,23,0.94), rgba(4,8,28,0.96)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')":"linear-gradient(rgba(240,249,255,0.90), rgba(236,246,255,0.92)), url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:n?"scroll":"fixed","--frame-color":t?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.15)"},children:[l.jsxs("div",{style:{textAlign:"center",padding:n?"60px 20px 40px":"80px 48px 0",opacity:u?1:0,animation:u?"gl-header-blast 1.3s cubic-bezier(.22,1,.36,1) both":"none"},children:[l.jsxs("div",{className:"gl-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:16},children:[l.jsx("span",{className:"gl-line"}),"Our Machinery",l.jsx("span",{className:"gl-line"})]}),l.jsxs("h2",{style:{fontFamily:"'Instrument Serif',Georgia,serif",fontSize:n?"34px":"54px",fontWeight:400,letterSpacing:"-0.03em",lineHeight:1.05,color:t?"#f1f5f9":"#0f172a",margin:"0 0 14px"},children:["Built for"," ",l.jsx("span",{className:"gl-grad-text",style:{fontStyle:"italic",backgroundImage:"linear-gradient(135deg,#0ea5e9,#6366f1)"},children:"Precision"})]}),l.jsx("p",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"14.5px",color:t?"rgba(255,255,255,0.42)":"#64748b",maxWidth:480,margin:"0 auto",lineHeight:1.72},children:"World-class Heidelberg and Akiyama equipment — engineered for flawless output, maximum throughput, and zero compromise on quality."})]}),l.jsxs("div",{className:"gl-stage",style:{height:n?"1400px":"90vh",marginTop:u?-20:0,"--gl-v-center":n?"200px":"50%"},children:[l.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.08) 0%,transparent 70%)",pointerEvents:"none",zIndex:0,opacity:fe?.5:.2,transition:"opacity 1s ease"}}),l.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)",backgroundSize:"32px 32px",maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",WebkitMaskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)"}}),!fe&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"gl-ring-orbit",style:{width:220,height:220,marginLeft:-110,marginTop:-110,animation:"gl-rotate-slow 8s linear infinite"}}),l.jsx("div",{className:"gl-ring-orbit",style:{width:160,height:160,marginLeft:-80,marginTop:-80,borderStyle:"dotted",animation:"gl-counter-rotate 5s linear infinite"}})]}),l.jsxs("div",{className:`gl-core ${o==="charging"?"charge":fe?"gone":"pulse"}`,style:{width:n?80:120,height:n?80:120},children:[l.jsx("div",{style:{position:"absolute",inset:10,borderRadius:"50%",background:"radial-gradient(circle,#fff 0%,rgba(56,189,248,0.6) 50%,transparent 100%)"}}),l.jsx("div",{style:{position:"absolute",inset:-20,borderRadius:"50%",background:"radial-gradient(circle,rgba(14,165,233,0.3) 0%,transparent 70%)"}})]}),l.jsx("div",{className:`gl-shock  ${a?"fire":""}`,style:{width:n?80:120,height:n?80:120}}),l.jsx("div",{className:`gl-shock2 ${a?"fire":""}`,style:{width:n?80:120,height:n?80:120}}),a&&O2.map((P,j)=>l.jsx("div",{className:"gl-spark fire",style:{"--a":`${P}deg`,height:`${45+j%4*15}px`,background:L2[j%3],opacity:.5+j%3*.2,animationDelay:`${j*.022}s`}},j)),o==="dormant"&&l.jsx("div",{style:{position:"absolute",bottom:"18%",left:"50%",transform:"translateX(-50%)",zIndex:20,whiteSpace:"nowrap"},children:l.jsx("span",{className:"gl-scroll-hint",children:"↑ scroll to ignite"})}),zi.map((P,j)=>{const D=Fi(n)[j],b=`${D.x*(n?1.1:1.6)}px`,N=`${D.y*(n?1:1.3)}px`,R=te&&!w[j]&&n;return l.jsx("div",{className:`gl-magnet-frame${R?" visible":""}`,style:{width:Te,height:320,"--fx":b,"--fy":N,"--fr":`${D.rot}deg`}},`frame-${j}`)}),zi.map((P,j)=>{const D=y===j,b=w[j],N=h[j],R=`${N.x*(n?1.1:1.6)}px`,F=`${N.y*(n?1:1.3)}px`,U=b||n?"0deg":`${Ks[j].rot}deg`,pe=.04+j*.055,$=`${j*.6}s`,re=I[j]??null,le=P.accent==="#0ea5e9"?"#6366f1":P.accent==="#6366f1"?"#8b5cf6":P.accent==="#10b981"?"#06b6d4":P.accent==="#f59e0b"?"#f97316":P.accent==="#ec4899"?"#f43f5e":P.accent==="#8b5cf6"?"#6366f1":P.accent==="#f97316"?"#f59e0b":"#0ea5e9";return l.jsx("div",{onPointerDown:ie=>E(ie,j),onPointerMove:z,onPointerEnter:()=>M(j),onPointerUp:ie=>O(ie,P,j,re),onPointerCancel:ie=>O(ie,P,j,re),className:`gl-card-float${u?" blasting":""}${te?" floating":""}${D?" dragging":""}${b?" snapped":""}`,style:{"--bx":R,"--by":F,"--br":D||n?0:N.rot,"--original-rot":U,"--blast-delay":`${pe}s`,"--float-offset":$,"--ca":P.accent,"--ca2":le,"--ca-glow":P.glow,width:Te},children:l.jsxs("div",{className:"gl-card-inner",style:{background:P.grad},children:[re?l.jsx("img",{className:"gl-card-img",src:re,alt:P.name,loading:"lazy"}):l.jsx("div",{style:{height:160,background:P.grad,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("div",{style:{width:56,height:56,borderRadius:14,background:`${P.accent}20`,border:`1px solid ${P.accent}40`,display:"flex",alignItems:"center",justifyContent:"center",color:P.accent,boxShadow:`0 0 24px ${P.glow}`},children:l.jsx(an,{size:24,strokeWidth:1.5})})}),l.jsx("div",{className:"gl-img-grad"}),l.jsx("div",{className:"gl-card-bar"}),l.jsxs("div",{className:"gl-card-content",children:[l.jsx("span",{className:"gl-cat-pill",children:P.category}),l.jsx("span",{className:"gl-card-name",children:P.name}),l.jsxs("div",{className:"gl-card-spec",children:[l.jsx(an,{size:9,strokeWidth:2.5}),P.spec]})]})]})},j)})]}),l.jsxs("div",{style:{textAlign:"center",padding:n?"0 20px":"0 48px",opacity:te?1:0,transform:te?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s"},children:[l.jsx("div",{style:{marginBottom:24},children:l.jsxs("button",{className:"gl-replay-btn",onClick:T,children:[l.jsx(an,{size:11,strokeWidth:2.5})," Replay explosion"]})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:16,flexWrap:"wrap"},children:[l.jsx("div",{style:{width:40,height:1,background:t?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.1)"}}),l.jsx("span",{style:{fontFamily:"'DM Sans',sans-serif",fontSize:"13px",color:t?"rgba(255,255,255,0.30)":"#64748b"},children:"See these machines live —"}),l.jsxs("a",{href:"https://youtube.com/@b.k.offset?si=Y3rb_e2Y9oTBsgw7",target:"_blank",rel:"noopener noreferrer",className:"gl-yt-pill",children:[l.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:"#ff4444",boxShadow:"0 0 8px #ff4444",display:"inline-block"}}),"Watch on YouTube",l.jsx(Fr,{size:13,strokeWidth:2.5})]}),l.jsx("div",{style:{width:40,height:1,background:t?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.1)"}})]})]}),g&&l.jsx("div",{className:"gl-modal-backdrop",onPointerDown:()=>x(null),children:l.jsxs("div",{className:"gl-modal-box",onPointerDown:P=>P.stopPropagation(),children:[l.jsx("button",{className:"gl-modal-close",onClick:()=>x(null),"aria-label":"Close",children:l.jsx(ss,{size:20})}),g.src&&l.jsx("img",{src:g.src,alt:g.name,className:"gl-modal-img"}),!g.src&&l.jsx("div",{style:{height:200,background:g.grad,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:l.jsx(an,{size:48,style:{color:g.accent,opacity:.5}})}),l.jsxs("div",{className:"gl-modal-content",children:[l.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16},children:[l.jsx("span",{className:"gl-cat-pill",style:{margin:0,"--ca":g.accent},children:g.category}),l.jsx("span",{className:"gl-cat-pill",style:{margin:0,background:"transparent"},children:g.tag})]}),l.jsx("h3",{className:"gl-modal-title",children:g.name}),l.jsx("p",{className:"gl-modal-desc",children:g.desc}),l.jsxs("div",{style:{display:"inline-flex",padding:"10px 20px",background:"rgba(255,255,255,0.05)",borderRadius:12,border:"1px solid rgba(255,255,255,0.1)",color:g.accent,fontFamily:"'DM Sans', sans-serif",fontSize:13,fontWeight:700},children:[l.jsx(an,{size:14,style:{marginRight:8}})," ",g.spec]})]})]})})]})]})}const rd={layers:{color:"#0ea5e9",glow:"rgba(14,165,233,0.25)",faint:"rgba(14,165,233,0.08)",grad:"linear-gradient(135deg,#0ea5e9,#6366f1)",label:"Capabilities"},zap:{color:"#f59e0b",glow:"rgba(245,158,11,0.25)",faint:"rgba(245,158,11,0.08)",grad:"linear-gradient(135deg,#d97706,#fbbf24)",label:"Reductions"},leaf:{color:"#22c55e",glow:"rgba(34,197,94,0.25)",faint:"rgba(34,197,94,0.08)",grad:"linear-gradient(135deg,#16a34a,#4ade80)",label:"Sustainability"}},D2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes wo-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wo-gradShift {
    0%,100% { background-position: 0% 50%; }
    50%     { background-position: 100% 50%; }
  }
  @keyframes wo-panelIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Tab bar ── */
  .wo-tab {
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    transition:
      background    0.22s ease,
      border-color  0.22s ease,
      color         0.22s ease,
      box-shadow    0.22s ease;
    flex-shrink: 0;
  }
  .wo-tab:hover:not(.wo-tab-active) {
    background: rgba(255,255,255,0.06);
  }
  .wo-tab-active {
    font-weight: 600;
    box-shadow: 0 4px 16px var(--wo-glow);
  }

  /* Active underline dot */
  .wo-tab-active::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 50%;
    transform: translateX(-50%);
    width: 20px; height: 2px;
    border-radius: 2px;
    background: var(--wo-grad);
  }

  /* ── Tab icon ring ── */
  .wo-tab-icon {
    width: 26px; height: 26px;
    border-radius: 7px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.22s ease, box-shadow 0.22s ease;
  }

  /* ── Panel content ── */
  .wo-panel-content {
    animation: wo-panelIn 0.3s cubic-bezier(.22,1,.36,1) both;
  }

  /* ── List item ── */
  .wo-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    transition:
      background   0.18s ease,
      border-color 0.18s ease,
      transform    0.18s cubic-bezier(.22,1,.36,1);
    cursor: default;
  }
  .wo-item:hover { transform: translateX(4px); }

  .wo-check {
    width: 18px; height: 18px;
    min-width: 18px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: background 0.18s ease, box-shadow 0.18s ease;
  }

  .wo-item-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    transition: color 0.18s ease, font-weight 0.18s ease;
  }

  /* ── Hero title gradient ── */
  .wo-hero-grad {
    background: linear-gradient(270deg,#0ea5e9,#6366f1,#0ea5e9);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: wo-gradShift 5s ease infinite;
  }

  /* ── Eyebrow ── */
  .wo-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
  }
  .wo-eyebrow::before, .wo-eyebrow::after {
    content: ''; display: block;
    width: 22px; height: 1px;
    background: currentColor; opacity: 0.5;
  }

  /* ── Footer quote left bar ── */
  .wo-quote {
    position: relative;
    padding: 12px 16px 12px 20px;
    border-radius: 8px;
  }
  .wo-quote::before {
    content: '';
    position: absolute;
    left: 0; top: 6px; bottom: 6px;
    width: 3px; border-radius: 2px;
    background: var(--wo-grad);
  }

  /* ── Card shimmer sweep (matches ps-card::before) ── */
  .wo-card {
    position: relative;
    overflow: hidden;
    transition:
      background   0.35s ease,
      border-color 0.3s ease,
      box-shadow   0.4s cubic-bezier(.22,1,.36,1),
      transform    0.4s cubic-bezier(.22,1,.36,1);
  }
  .wo-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      130deg,
      transparent 0%,
      rgba(255,255,255,0.07) 45%,
      transparent 90%
    );
    transform: translateX(-110%) skewX(-10deg);
    transition: transform 0.65s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
    z-index: 1;
  }
  .wo-card:hover::before { transform: translateX(210%) skewX(-10deg); }
  .wo-card:hover { transform: translateY(-4px); }

  @media (max-width: 640px) {
    .wo-tab { padding: 8px 12px; font-size: 12px; }
    .wo-tab-icon { width: 22px; height: 22px; }
  }
`,id=[{key:"layers",icon:Ih,titleKey:"woPerfTitle",descKey:"woPerfDesc",itemsKey:"woPerfList",footKey:"woPerfFoot"},{key:"zap",icon:an,titleKey:"woEnvTitle",descKey:"woEnvDesc",itemsKey:"woEnvList",footKey:"woEnvFoot"},{key:"leaf",icon:c2,titleKey:"woSusTitle",descKey:"woSusDesc",itemsKey:"woSusList",footKey:"woSusFoot"}];function z2({text:t,isDark:e,c:n,isMobile:r,isTablet:i}){var w,C;const[o,s]=as(),[a,c]=_.useState("layers"),[u,d]=_.useState(!1),h=rd[a],m=id.find(p=>p.key===a),y=e?"#f1f5f9":"#0f172a",v=e?"rgba(255,255,255,0.48)":"#475569";return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:D2}),l.jsx("section",{ref:o,style:{background:e?"linear-gradient(rgba(2,6,23,0.94),rgba(4,8,28,0.96)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')":"linear-gradient(rgba(250,250,248,0.92),rgba(244,241,236,0.94)),url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=1920&q=80')",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:r?"scroll":"fixed",padding:r?"64px 20px":"88px 40px"},children:l.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",opacity:s?1:0,animation:s?"wo-fadeUp 0.5s ease-out both":"none"},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:r?32:40},children:[l.jsxs("div",{className:"wo-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[l.jsx(h2,{size:11,strokeWidth:2,style:{marginRight:-2}}),t.woTitle]}),l.jsx("h2",{className:"wo-hero-grad",style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"30px":"clamp(32px,4.5vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,margin:"0 0 12px"},children:t.woTagline}),l.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:r?"13.5px":"14.5px",color:v,maxWidth:560,margin:"0 auto",lineHeight:1.7},children:t.woHeroDesc})]}),l.jsxs("div",{className:"wo-card",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{background:u?e?"rgba(255,255,255,0.055)":"rgba(255,255,255,1)":e?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.82)",border:`1px solid ${u?e?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.10)":e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderRadius:20,backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",overflow:"hidden",boxShadow:u?e?`0 28px 64px rgba(0,0,0,0.55), 0 0 0 1px ${h.faint}`:`0 20px 56px rgba(0,0,0,0.09), 0 0 0 1px ${h.faint}`:e?"0 1px 3px rgba(0,0,0,0.4)":"0 1px 4px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)"},children:[l.jsx("div",{style:{display:"flex",gap:4,padding:"12px 14px",borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,overflowX:"auto",scrollbarWidth:"none",background:e?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.60)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)"},children:id.map(({key:p,icon:f})=>{const g=rd[p],x=p===a;return l.jsxs("button",{className:`wo-tab${x?" wo-tab-active":""}`,onClick:()=>c(p),style:{"--wo-glow":g.glow,"--wo-grad":g.grad,color:x?g.color:v,background:x?e?`${g.faint}`:g.faint:"transparent",borderColor:x?e?`${g.color}30`:`${g.color}28`:"transparent"},children:[l.jsx("div",{className:"wo-tab-icon",style:{background:x?g.grad:"transparent",boxShadow:x?`0 2px 8px ${g.glow}`:"none",color:x?"#fff":g.color},children:l.jsx(f,{size:13,strokeWidth:2})}),g.label]},p)})}),l.jsxs("div",{className:"wo-panel-content",style:{display:"grid",gridTemplateColumns:r?"1fr":"1fr 1fr",gap:0},children:[l.jsxs("div",{style:{padding:r?"28px 24px":"36px 40px",borderRight:r?"none":`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`,borderBottom:r?`1px solid ${e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.075)"}`:"none",display:"flex",flexDirection:"column",gap:16,background:e?"rgba(255,255,255,0.02)":"rgba(255,255,255,0.82)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[l.jsx("div",{style:{width:44,height:44,borderRadius:12,background:h.grad,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:`0 6px 18px ${h.glow}`,flexShrink:0},children:m&&l.jsx(m.icon,{size:18,strokeWidth:1.75})}),l.jsx("h3",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:r?"18px":"22px",fontWeight:400,letterSpacing:"-0.02em",color:y,lineHeight:1.2,margin:0},children:t[m.titleKey]})]}),l.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13.5px",color:v,lineHeight:1.75,margin:0,flex:1},children:t[m.descKey]}),t[m.footKey]&&l.jsx("div",{className:"wo-quote",style:{"--wo-grad":h.grad,background:e?"rgba(255,255,255,0.04)":h.faint,border:`1px solid ${e?"rgba(255,255,255,0.07)":`${h.color}22`}`},children:l.jsx("p",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:"13.5px",fontStyle:"italic",color:v,lineHeight:1.7,margin:0},children:t[m.footKey]})})]}),l.jsxs("div",{style:{padding:r?"24px":"28px 32px",background:e?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.55)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14,paddingBottom:12,borderBottom:`1px solid ${e?"rgba(255,255,255,0.07)":`${h.color}18`}`},children:[l.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:h.grad,boxShadow:`0 0 7px ${h.glow}`}}),l.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:h.color},children:h.label}),l.jsxs("span",{style:{marginLeft:"auto",fontFamily:"'DM Sans', sans-serif",fontSize:"11px",color:e?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.25)"},children:[((w=t[m.itemsKey])==null?void 0:w.length)??0," items"]})]}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:3},children:(C=t[m.itemsKey])==null?void 0:C.map((p,f)=>l.jsx(F2,{label:p,a:h,isDark:e},f))})]})]},a)]}),t.woHeroDesc2&&l.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"13px",color:e?"rgba(255,255,255,0.28)":"rgba(0,0,0,0.38)",textAlign:"center",marginTop:20,lineHeight:1.6,maxWidth:600,margin:"20px auto 0"},children:t.woHeroDesc2})]})})]})}function F2({label:t,a:e,isDark:n}){const[r,i]=_.useState(!1);return l.jsxs("div",{className:"wo-item",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:r?e.faint:"transparent",borderColor:r?`${e.color}40`:"transparent"},children:[l.jsx("div",{className:"wo-check",style:{background:r?e.grad:n?"rgba(255,255,255,0.07)":e.faint,boxShadow:r?`0 2px 8px ${e.glow}`:"none",border:r?"none":`1px solid ${e.color}44`},children:l.jsx("svg",{width:"8",height:"8",viewBox:"0 0 10 10",fill:"none",children:l.jsx("path",{d:"M2 5.5L4 7.5L8 3",stroke:r?"#fff":e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),l.jsx("span",{className:"wo-item-label",style:{color:r?n?"#f1f5f9":"#0f172a":n?"rgba(255,255,255,0.55)":"#475569",fontWeight:r?600:400},children:t}),l.jsx(Ja,{size:12,strokeWidth:2,style:{marginLeft:"auto",flexShrink:0,color:e.color,opacity:r?.75:0,transform:r?"translateX(0)":"translateX(-4px)",transition:"opacity 0.18s ease, transform 0.18s ease"}})]})}const U2=`
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

  @keyframes loc-fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes loc-pin-bounce {
    0%,100% { transform: translateY(0); }
    40%     { transform: translateY(-6px); }
    60%     { transform: translateY(-3px); }
  }
  @keyframes loc-pulse-ring {
    0%   { transform: scale(0.9); opacity: 0.8; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  /* ── Info card ── */
  .loc-card {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    transition:
      border-color 0.25s ease,
      box-shadow   0.25s ease,
      transform    0.3s cubic-bezier(.22,1,.36,1);
  }
  .loc-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--loc-grad, linear-gradient(90deg,#0ea5e9,#6366f1));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s cubic-bezier(.22,1,.36,1);
  }
  .loc-card:hover::before { transform: scaleX(1); }
  .loc-card:hover { transform: translateY(-3px); }

  /* ── Hours row ── */
  .loc-hours-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    border-bottom: 1px solid var(--loc-border);
    transition: color 0.2s ease;
  }
  .loc-hours-row:last-child { border-bottom: none; padding-bottom: 0; }
  .loc-hours-row:first-child { padding-top: 0; }

  /* ── Map wrapper ── */
  .loc-map-wrap {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    transition:
      box-shadow   0.35s ease,
      border-color 0.3s ease,
      transform    0.35s cubic-bezier(.22,1,.36,1);
  }
  .loc-map-wrap:hover { transform: translateY(-4px); }

  /* ── Directions button ── */
  .loc-dir-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    padding: 12px 26px;
    border-radius: 999px;
    background: linear-gradient(135deg,#0ea5e9,#6366f1);
    box-shadow: 0 5px 18px rgba(14,165,233,0.32);
    transition:
      transform  0.25s cubic-bezier(.34,1.56,.64,1),
      box-shadow 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .loc-dir-btn::before {
    content:'';
    position:absolute; inset:0;
    background:linear-gradient(130deg,transparent,rgba(255,255,255,0.12),transparent);
    transform:translateX(-110%) skewX(-10deg);
    transition:transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .loc-dir-btn:hover::before { transform:translateX(200%) skewX(-10deg); }
  .loc-dir-btn:hover { transform:translateY(-2px); box-shadow:0 8px 26px rgba(14,165,233,0.42); }
  .loc-dir-btn:active { transform:scale(0.97); }

  /* ── Copy button ── */
  .loc-copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 5px 10px;
    border-radius: 6px;
    transition: background 0.2s ease, color 0.2s ease;
  }

  /* ── Pin animation ── */
  .loc-pin-icon {
    animation: loc-pin-bounce 3s ease-in-out infinite;
  }
  .loc-ping {
    position: absolute;
    border-radius: 50%;
    background: rgba(14,165,233,0.35);
    animation: loc-pulse-ring 2s ease-out infinite;
  }

  /* ── Eyebrow ── */
  .loc-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .loc-eyebrow::before, .loc-eyebrow::after {
    content:''; display:block;
    width:22px; height:1px;
    background:currentColor; opacity:0.5;
  }
`,od="https://maps.app.goo.gl/GQqACqym97FV1PYb9",sd="Street No. 2, Zulfe Bengal, Dilshad Garden, Delhi — 110095",B2=[{day:"Monday – Sunday",time:"10:00 AM – 6:00 PM",open:!0},{day:"Tuesday",time:"Closed",open:!1}];function H2({text:t,c:e,isMobile:n}){var v;const[r,i]=as(),[o,s]=_.useState(!1),[a,c]=_.useState(!1);(v=e==null?void 0:e.bg)==null||v.includes("2");const u=(e==null?void 0:e.border)??"rgba(0,0,0,0.08)",d=(e==null?void 0:e.surf)??"rgba(255,255,255,0.85)",h=(e==null?void 0:e.text)??"#0f172a",m=(e==null?void 0:e.textDim)??"#64748b",y=()=>{var w;(w=navigator.clipboard)==null||w.writeText(sd).then(()=>{s(!0),setTimeout(()=>s(!1),2e3)})};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:U2}),l.jsxs("section",{ref:r,style:{padding:n?"72px 20px":"110px 40px",maxWidth:1200,margin:"0 auto"},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:n?36:52,opacity:i?1:0,animation:i?"loc-fadeUp 0.5s ease-out both":"none"},children:[l.jsxs("div",{className:"loc-eyebrow",style:{color:"#0ea5e9",justifyContent:"center",marginBottom:14},children:[l.jsx(el,{size:11,strokeWidth:2,style:{marginRight:-2}}),"Find Us"]}),l.jsxs("h2",{style:{fontFamily:"'Instrument Serif', Georgia, serif",fontSize:n?"32px":"clamp(34px,4vw,48px)",fontWeight:400,letterSpacing:"-0.025em",lineHeight:1.1,color:h,margin:"0 0 12px"},children:["Visit Our"," ",l.jsx("em",{style:{fontStyle:"italic",background:"linear-gradient(135deg,#0ea5e9,#6366f1)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Press"})]}),l.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14.5px",color:m,maxWidth:420,margin:"0 auto",lineHeight:1.7},children:"Come see our machines in person. We welcome publishers, authors, and businesses for a live demonstration."})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:n?"1fr":"380px 1fr",gap:n?20:24,alignItems:"start",opacity:i?1:0,animation:i?"loc-fadeUp 0.55s ease-out 0.1s both":"none"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[l.jsx("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#0ea5e9,#6366f1)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14},children:[l.jsxs("div",{style:{position:"relative",flexShrink:0,marginTop:2},children:[l.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6}}),l.jsx("div",{className:"loc-ping",style:{width:32,height:32,top:-6,left:-6,animationDelay:"0.7s"}}),l.jsx(el,{size:20,strokeWidth:1.75,color:"#0ea5e9",className:"loc-pin-icon"})]}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#0ea5e9",marginBottom:6},children:"Address"}),l.jsx("p",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"14px",color:h,lineHeight:1.65,margin:"0 0 12px",fontWeight:500},children:sd}),l.jsx("button",{className:"loc-copy-btn",onClick:y,style:{color:o?"#22c55e":m,background:o?"rgba(34,197,94,0.08)":"transparent"},children:o?l.jsxs(l.Fragment,{children:[l.jsx(o2,{size:11,strokeWidth:2.5})," Copied!"]}):l.jsxs(l.Fragment,{children:[l.jsx(a2,{size:11,strokeWidth:2})," Copy address"]})})]})]})}),l.jsxs("div",{className:"loc-card",style:{"--loc-grad":"linear-gradient(90deg,#f59e0b,#f97316)","--loc-border":u,background:d,border:`1px solid ${u}`,backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"22px 22px 20px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[l.jsx("div",{style:{width:34,height:34,borderRadius:10,background:"rgba(245,158,11,0.10)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:l.jsx(_h,{size:16,strokeWidth:1.75,color:"#f59e0b"})}),l.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:"9.5px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#f59e0b"},children:"Working Hours"})]}),l.jsx("div",{style:{"--loc-border":u},children:B2.map(({day:w,time:C,open:p})=>l.jsxs("div",{className:"loc-hours-row",style:{"--loc-border":u},children:[l.jsx("span",{style:{fontFamily:"'DM Sans', sans-serif",color:m,fontWeight:400},children:w}),l.jsxs("span",{style:{fontFamily:"'DM Sans', sans-serif",fontWeight:600,color:p?h:"#ef4444",fontSize:"12.5px",display:"flex",alignItems:"center",gap:5},children:[l.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:p?"#22c55e":"#ef4444",display:"inline-block",flexShrink:0}}),C]})]},w))})]}),l.jsxs("a",{href:od,target:"_blank",rel:"noopener noreferrer",className:"loc-dir-btn",style:{justifyContent:"center"},children:[l.jsx(p2,{size:15,strokeWidth:2}),"Get Directions",l.jsx(Zu,{size:13,strokeWidth:2,style:{opacity:.7}})]})]}),l.jsxs("div",{className:"loc-map-wrap",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{border:`1px solid ${a?"rgba(14,165,233,0.40)":u}`,boxShadow:a?"0 20px 56px rgba(0,0,0,0.12), 0 0 0 1px rgba(14,165,233,0.15)":"0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)"},children:[l.jsx("iframe",{title:"BK Offset Printing Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.623543258682!2d77.30097397549766!3d28.68163887564272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9fa8843451%3A0x4d76d14b74785b08!2sZulfe%20Bengal%2C%20Dilshad%20Garden%2C%20Delhi%2C%20110095!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",width:"100%",height:n?"300":"450",style:{border:"none",display:"block",filter:"saturate(1.1) contrast(1.02)"},loading:"lazy",allowFullScreen:!0,referrerPolicy:"no-referrer-when-downgrade"}),l.jsxs("a",{href:od,target:"_blank",rel:"noopener noreferrer",style:{position:"absolute",bottom:14,right:14,display:"inline-flex",alignItems:"center",gap:6,background:"rgba(2,6,23,0.80)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:"#fff",padding:"7px 14px",borderRadius:"999px",fontSize:"12px",fontFamily:"'DM Sans', sans-serif",fontWeight:600,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",transition:"background 0.2s ease, border-color 0.2s ease"},onMouseEnter:w=>{w.currentTarget.style.background="rgba(14,165,233,0.85)"},onMouseLeave:w=>{w.currentTarget.style.background="rgba(2,6,23,0.80)"},children:[l.jsx(Zu,{size:11,strokeWidth:2.5}),"Open in Google Maps"]})]})]})]})]})}function W2({isDark:t}){const e=_.useRef(null),n=_.useRef({x:-1e3,y:-1e3}),r=_.useRef(null);return _.useEffect(()=>{const i=e.current;if(!i)return;const o=i.getContext("2d");let s,a;const c=window.innerWidth<768,u=[],d=c?180:550,h=1e3,m=c?240:460,y={x:window.innerWidth/2,y:window.innerHeight/2},v=c?150:300,w=c?1:1.2,C=.04,p=.93,f=c?.015:.025;class g{constructor(fe){const te=Math.acos(-1+2*fe/d),Te=Math.sqrt(d*Math.PI)*te;this.homeX=Math.cos(Te)*Math.sin(te),this.homeY=Math.sin(Te)*Math.sin(te),this.homeZ=Math.cos(te),this.rFactor=.4+Math.random()*1.6,this.x=this.homeX*m*this.rFactor,this.y=this.homeY*m*this.rFactor,this.z=this.homeZ*m*this.rFactor,this.vx=0,this.vy=0,this.vz=0,this.radius=1.5+Math.random()*1.5,this.alphaBase=.35+Math.random()*.55;const P=Math.atan2(this.homeY,this.homeX),j=Math.asin(this.homeZ);this.hue=((P/Math.PI+1)*160+(j/Math.PI+.5)*40+240)%360}update(fe,te,Te,P,j,D,b,N){let R=this.homeX*m*this.rFactor*P,F=this.homeY*m*this.rFactor*P,U=this.homeZ*m*this.rFactor*P;R+=R*b,F+=F*N;const pe=Math.cos(D),$=Math.sin(D),re=R*pe-U*$,le=R*$+U*pe;R=re,U=le;const ie=Math.cos(j),Ge=Math.sin(j),ft=F*ie-U*Ge,ur=F*Ge+U*ie;F=ft,U=ur;const ls=this.x-fe,cs=this.y-te,us=this.z-Te,jh=ls*ls+cs*cs+us*us,dr=Math.sqrt(jh)||1;if(dr<v){const ds=(1-dr/v)*w;this.vx+=ls/dr*ds,this.vy+=cs/dr*ds,this.vz+=us/dr*ds}this.vx+=(R-this.x)*C,this.vy+=(F-this.y)*C,this.vz+=(U-this.z)*C,this.vx*=p,this.vy*=p,this.vz*=p,this.x+=this.vx,this.y+=this.vy,this.z+=this.vz}}function x(){s=i.width=i.offsetWidth,a=i.height=i.offsetHeight,u.length=0;for(let O=0;O<d;O++)u.push(new g(O))}let S=0,I=0,T=0;function E(){if(!s||!a)return;o.clearRect(0,0,s,a),S+=.015,I+=8e-4,T+=.0012;const O=n.current.x!==-1e3?n.current.x:s/2,fe=n.current.y!==-1e3?n.current.y:a/2,te=y.x,Te=y.y;y.x+=(O-y.x)*f,y.y+=(fe-y.y)*f;const P=y.x-te,j=y.y-Te,D=Math.min(Math.abs(P)*.02,.4),b=Math.min(Math.abs(j)*.02,.4),N=1+Math.sin(S)*.05,R=n.current.x-y.x,F=n.current.y-y.y,U=150,pe=[...u].sort(($,re)=>re.z-$.z);for(const $ of pe){$.update(R,F,U,N,I,T,D,b);const re=h/(h+$.z),le=y.x+$.x*re,ie=y.y+$.y*re,Ge=Math.max(0,$.alphaBase*re*($.z>-m?1:.6)),ft=$.radius*re;o.fillStyle=`hsla(${$.hue}, 80%, ${t?70:50}%, ${Ge})`,o.beginPath(),o.arc(le,ie,ft,0,Math.PI*2),o.fill()}r.current=requestAnimationFrame(E)}const z=O=>{n.current.x=O.clientX,n.current.y=O.clientY},M=()=>{n.current.x=-1e3,n.current.y=-1e3};return window.addEventListener("mousemove",z),window.addEventListener("mouseleave",M),window.addEventListener("resize",x),x(),E(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("mousemove",z),window.removeEventListener("mouseleave",M),window.removeEventListener("resize",x)}},[t]),l.jsx("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,background:"transparent"}})}function $2({isDark:t,onClose:e}){const[n,r]=_.useState(!0),[i,o]=_.useState(""),[s,a]=_.useState(""),[c,u]=_.useState(""),[d,h]=_.useState(""),[m,y]=_.useState(""),[v,w]=_.useState(""),[C,p]=_.useState(!1),{loginWithGoogle:f,loginWithEmail:g,registerWithEmail:x,resetPassword:S}=os(),I=async()=>{y(""),p(!0);const{error:E}=await f();E?(y(E),p(!1)):e()},T=async E=>{if(E.preventDefault(),y(""),p(!0),n){if(!i||!s){y("Enter email and password"),p(!1);return}const{error:z}=await g(i,s);z?(y(z),p(!1)):e()}else{if(!i||!s||!c||!d){y("Fill all fields"),p(!1);return}const{error:z}=await x(i,s,c,d);z?(y(z),p(!1)):(w("Account created! Check your email."),o(""),a(""),u(""),h(""),setTimeout(()=>r(!0),2e3))}};return l.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(5px)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:l.jsxs("div",{style:{background:t?"#1e293b":"#fff",borderRadius:"16px",padding:"32px",width:"100%",maxWidth:"400px",position:"relative"},children:[l.jsx("button",{onClick:e,style:{position:"absolute",top:"16px",right:"16px",background:"none",border:"none",cursor:"pointer",color:t?"#94a3b8":"#64748b"},children:l.jsx(ss,{size:20})}),l.jsxs("div",{style:{textAlign:"center",marginBottom:"24px"},children:[l.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, #0284c7, #06b6d4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:l.jsx(cc,{size:32,color:"#fff"})}),l.jsx("h2",{style:{color:t?"#f1f5f9":"#0f172a"},children:n?"Welcome Back":"Create Account"})]}),v&&l.jsx("div",{style:{background:"#d4edda",color:"#155724",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:v}),m&&l.jsx("div",{style:{background:"#fee2e2",color:"#ef4444",padding:"12px",borderRadius:"8px",marginBottom:"16px",textAlign:"center"},children:m}),l.jsxs("button",{onClick:I,disabled:C,style:{width:"100%",padding:"12px",background:"#fff",border:"1px solid #cbd5e1",borderRadius:"8px",fontSize:"14px",fontWeight:600,color:"#475569",cursor:C?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginBottom:"20px",opacity:C?.5:1},children:[l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[l.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),l.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),l.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),l.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Continue with Google"]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[l.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}}),l.jsx("span",{style:{color:"#94a3b8"},children:"or"}),l.jsx("div",{style:{flex:1,height:"1px",background:"#cbd5e1"}})]}),l.jsxs("form",{onSubmit:T,children:[!n&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"text",placeholder:"First Name",value:c,onChange:E=>u(E.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),l.jsx("input",{type:"text",placeholder:"Last Name",value:d,onChange:E=>h(E.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0})]}),l.jsx("input",{type:"email",placeholder:"Email",value:i,onChange:E=>o(E.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),l.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:E=>a(E.target.value),disabled:C,style:{width:"100%",padding:"10px",border:"1px solid #cbd5e1",borderRadius:"8px",marginBottom:"16px",background:t?"#0f172a":"#fff",color:t?"#f1f5f9":"#0f172a"},required:!0}),n&&l.jsx("button",{type:"button",onClick:()=>{},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontSize:"13px",marginBottom:"16px",display:"block",textAlign:"right",width:"100%"},children:"Forgot Password?"}),l.jsx("button",{type:"submit",disabled:C,style:{width:"100%",padding:"12px",background:C?"#cbd5e1":"linear-gradient(135deg, #0284c7, #06b6d4)",color:C?"#64748b":"#fff",border:"none",borderRadius:"8px",fontSize:"16px",fontWeight:600,cursor:C?"not-allowed":"pointer",marginBottom:"16px"},children:C?"Processing...":n?"Sign In":"Create Account"})]}),l.jsxs("p",{style:{textAlign:"center",color:t?"#94a3b8":"#64748b"},children:[n?"No account? ":"Have an account? ",l.jsx("button",{onClick:()=>{r(!n),y(""),w("")},style:{background:"none",border:"none",color:"#0284c7",cursor:"pointer",fontWeight:600},children:n?"Register":"Sign In"})]})]})})}function V2(){const{isDark:t}=Eu(),{user:e}=os(),[n,r]=_.useState(()=>sessionStorage.getItem("bk_lang")||"en"),[i,o]=_.useState(!1),[s,a]=_.useState(!1),[c,u]=_.useState(window.innerWidth),d=Ip(t),h=Dm[n],m=c<640;_.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[s]),_.useEffect(()=>{const v=()=>o(window.scrollY>Um),w=()=>u(window.innerWidth);return window.addEventListener("scroll",v),window.addEventListener("resize",w),()=>{window.removeEventListener("scroll",v),window.removeEventListener("resize",w)}},[]);const y=()=>{const v=n==="en"?"hi":"en";r(v),sessionStorage.setItem("bk_lang",v)};return l.jsxs(l.Fragment,{children:[l.jsx(S2,{title:"BK Offset Printing - Premium Book & Commercial Printing Services in Delhi",description:"Premium offset printing in Street no. 2, Zulfe Bengal, Dilshad Garden, Delhi. Specializing in book printing, visiting cards, brochures, and commercial printing since 1995.",keywords:"offset printing, book printing services, printing press near me, custom book printing, visiting cards, brochure printing, Delhi printing services"}),l.jsx(v2,{isDark:t,toggleTheme:Eu().toggleTheme,lang:n,toggleLang:y,text:h,onAuthClick:()=>a(!0),scrolled:i}),l.jsxs("div",{style:{fontFamily:ce.fontBody,minHeight:"100vh",background:t?"#020617":"#FFFFFF",color:d.text,transition:"background 0.35s, color 0.35s"},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsx(W2,{isDark:t}),l.jsx(I2,{text:h,isDark:t,c:d,isAuth:!!e,isMobile:m,setShowAuth:a}),l.jsx(R2,{text:h,isDark:t,c:d,isMobile:m})]}),l.jsx(M2,{text:h,isDark:t,c:d,isMobile:m}),l.jsx(z2,{text:h,isDark:t,c:d,isMobile:m}),l.jsx(H2,{text:h,c:d,isMobile:m}),l.jsx(b2,{isDark:t,isMobile:m}),l.jsx(k2,{isDark:t,isAuthenticated:!!e,windowWidth:c})]}),s&&l.jsx($2,{isDark:t,onClose:()=>a(!1)})]})}function Y2(){return l.jsx(Wm,{children:l.jsx(e2,{children:l.jsx(V2,{})})})}qs.createRoot(document.getElementById("root")).render(l.jsx(st.StrictMode,{children:l.jsx(Tp,{children:l.jsx(Y2,{})})}));
